# Deflater - compresses images in this folder to web-ready JPEGs (out\ subfolder).
# Conventions: JPEG quality 82, longest edge capped at $MaxSize px (site default 1920;
# faction art has historically used 1600 - pass -MaxSize 1600 if you want that).
param(
    [int]$MaxSize = 1920,
    [int]$Quality = 82
)

Add-Type -AssemblyName System.Drawing

$here   = Split-Path -Parent $MyInvocation.MyCommand.Path
$outDir = Join-Path $here 'out'
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
    Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)

$files = Get-ChildItem -Path $here -File |
    Where-Object { $_.Extension -match '^\.(png|jpe?g|bmp|gif)$' }

if (-not $files) {
    Write-Host "No images found. Drop .png/.jpg/.bmp/.gif files next to this script and run again."
    exit 0
}

Write-Host ("Deflating {0} image(s): longest edge <= {1}px, JPEG q{2}" -f $files.Count, $MaxSize, $Quality)
Write-Host ""

$totalBefore = 0L
$totalAfter  = 0L

foreach ($file in $files) {
    $img = $null
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)

        # Honor EXIF orientation (camera photos) so the output isn't sideways
        if ($img.PropertyIdList -contains 274) {
            $o = $img.GetPropertyItem(274).Value[0]
            switch ($o) {
                3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
                6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
                8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
            }
        }

        $w = $img.Width; $h = $img.Height
        $long = [Math]::Max($w, $h)

        # Already a small-enough JPEG? Just copy it through untouched.
        $isJpeg = $file.Extension -match '^\.jpe?g$'
        if ($isJpeg -and $long -le $MaxSize -and $file.Length -lt 300KB) {
            $img.Dispose(); $img = $null
            Copy-Item $file.FullName (Join-Path $outDir $file.Name) -Force
            $totalBefore += $file.Length; $totalAfter += $file.Length
            Write-Host ("  {0}  already web-ready ({1:N0} KB), copied as-is" -f $file.Name, ($file.Length / 1KB))
            continue
        }

        if ($long -gt $MaxSize) {
            $scale = $MaxSize / $long
            $newW = [int][Math]::Round($w * $scale)
            $newH = [int][Math]::Round($h * $scale)
        } else {
            $newW = $w; $newH = $h
        }

        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $gfx = [System.Drawing.Graphics]::FromImage($bmp)
        $gfx.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $gfx.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $gfx.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $gfx.Clear([System.Drawing.Color]::White)   # PNG transparency becomes white, not black
        $gfx.DrawImage($img, 0, 0, $newW, $newH)
        $gfx.Dispose()
        $img.Dispose(); $img = $null

        $outPath = Join-Path $outDir ($file.BaseName + '.jpg')
        $bmp.Save($outPath, $jpegCodec, $encParams)
        $bmp.Dispose()

        $outLen = (Get-Item $outPath).Length
        $totalBefore += $file.Length; $totalAfter += $outLen
        Write-Host ("  {0}  {1}x{2} -> {3}x{4}   {5:N0} KB -> {6:N0} KB" -f `
            $file.Name, $w, $h, $newW, $newH, ($file.Length / 1KB), ($outLen / 1KB))
    }
    catch {
        if ($img) { $img.Dispose() }
        Write-Host ("  {0}  SKIPPED - {1}" -f $file.Name, $_.Exception.Message)
    }
}

Write-Host ""
Write-Host ("Done. Total {0:N1} MB -> {1:N1} MB. Files are in: {2}" -f `
    ($totalBefore / 1MB), ($totalAfter / 1MB), $outDir)
