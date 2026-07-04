/* ═══════════════════════════════════════════════════════════════════
   HUMAN SHADOWS · WORLD CODEX · CONTENT FILE
   ═══════════════════════════════════════════════════════════════════
   This file is the single source of truth for all text and images.
   The engine in index.html renders everything from this object:
   sections, faction cards, dedicated faction pages, the side rail,
   backgrounds and particle effects.

   TO ADD A FACTION:   add an object to a region's `factions` array.
   TO ADD A REGION:    add an object to `regions` (crest options:
                       sig-gov, sig-west, sig-east, sig-bridge, sig-felines).
   TO ADD A STORY ACT: add an object to `collapse.phases`, same shape
                       as `ambience.phases` (both render as chronicles).

   Faction fields:
     slug        unique url id  →  page becomes  #faction/<slug>
     code        codex number shown on the card (or null)
     name        display name
     image       dedicated image for this faction's page (or null to
                 fall back to the region's atmosphere)
     meta        [label, value] pairs for the monospace data block
     paragraphs  { lead:true } renders the big drop-cap opener;
                 plain strings render as body text. Inline <em> allowed.

   Visual fields (region + ambience phases):
     img   background image ("" = gradient only)
     grad  CSS gradient used when img is empty (and behind it)
     tint  full-screen colour wash
     glow  accent colour for headings / rail / particles
     fx    particle mode: dust | heat | rain | spore | thaw | ash
   ═══════════════════════════════════════════════════════════════════ */

window.CONTENT = {

  site: {
    brand: "Human Shadows",
    credit: "HUMAN SHADOWS · ETERNAL-SPINS · WORLD CODEX"
  },

  /* ── VIEW A · THE TURNING YEAR ─────────────────────────────────── */
  ambience: {
    nav: "The Turning Year",
    hero: {
      kicker: "Human Shadows · The world before the story",
      title: "A year<br>that does<br>not <em>forgive</em>",
      sub: "One turn of this world is twelve months long. The light comes in floods and the dark comes in famines. Nothing here is gentle, and nothing here is brief.",
      scrollcue: "SCROLL TO TURN THE YEAR",
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    },
    railHead: "Sky&nbsp;readout<br>// the turning year",
    railFoot: "12&nbsp;MONTHS<br>NO&nbsp;MERCY&nbsp;SEASON",
    phases: [
      {
        id: "p1",
        tag: "PHASE 01 / FOUR MONTHS",
        title: "The Long Light",
        railLabel: "THE LONG LIGHT", railSub: "MO 01–04", railLen: 4,
        meta: [
          "LIGHT  ▰▰▰▰▰  MAX",
          "HEAT   ▰▰▰▰▱  RISING",
          "SHADOW ▱▱▱▱▱  NONE"
        ],
        paragraphs: [
          { lead: true, text: "For four unbroken months the sun climbs and refuses to leave. There is no dusk to soften the edges of things, no night to forgive what the day exposes." },
          "Vines erupt and strangle. The forests choke themselves on their own growth. Everything is lit, everything is seen: the ash, the drag-marks, the killing-stones, all of it clear and bright under a sky with nowhere else to be.",
          "It is the season that asks the cruelest question of the people who run through it: <em>where, exactly, do you think you can hide?</em>"
        ],
        visual: { img: "images/long-light.png", grad: "radial-gradient(130% 100% at 60% 28%, #fff8e6 0%, #ecd99f 30%, #c79a55 60%, #6b4f2c 100%)", tint: "rgba(255,236,180,.30)", glow: "#f0d488", fx: "heat" }
      },
      {
        id: "p2",
        tag: "PHASE 02 / TWO MONTHS",
        title: "The Weeping",
        railLabel: "THE WEEPING", railSub: "MO 05–06", railLen: 2,
        meta: [
          "LIGHT  ▰▰▱▱▱  FALLING",
          "WATER  ▰▰▰▰▰  HEAVY",
          "SKY    ▰▰▰▱▱  BRUISED"
        ],
        paragraphs: [
          { lead: true, text: "Then the light begins to fail, and for two months the sky comes down as rain. Twilight settles over everything: not day, not night, only a bruised strip of colour bleeding into itself like a wound that will not close." },
          "The roads turn to running water. The ash of the long light washes into the low places and waits there, patient. It is the season of mud and grey, of journeys begun because staying has become impossible."
        ],
        visual: { img: "images/weeping.png", grad: "linear-gradient(160deg, #2a2740 0%, #34304e 35%, #1e2236 70%, #0f111d 100%)", tint: "rgba(70,60,110,.26)", glow: "#9d92d6", fx: "rain" }
      },
      {
        id: "p3",
        tag: "PHASE 03 / FOUR MONTHS",
        title: "The Fungal Night",
        railLabel: "THE FUNGAL NIGHT", railSub: "MO 07–10", railLen: 4,
        meta: [
          "LIGHT  ▱▱▱▱▱  DARK",
          "SPORE  ▰▰▰▰▰  BLOOM",
          "COLD   ▰▰▰▰▱  DEEP"
        ],
        paragraphs: [
          { lead: true, text: "The light fails completely. For four frozen months there is only night, and out of the rot the fungi rise. Colossal pale towers feed on everything the year has killed, and their spores drift through the cold like ghosts that have not yet decided to leave." },
          "This is the only mercy the world offers: a faint luminous glow to move by, mist thick enough to hide a body, a darkness that, for once, forgives. Whole peoples time their running for this season, betting their lives on the dark holding a little longer.",
          "It never holds quite long enough."
        ],
        visual: { img: "images/fungal-night.png", grad: "radial-gradient(120% 100% at 40% 70%, #0c2622 0%, #081417 45%, #04060a 100%)", tint: "rgba(40,120,110,.20)", glow: "#79e8cf", fx: "spore" }
      },
      {
        id: "p4",
        tag: "PHASE 04 / TWO MONTHS",
        title: "The Thaw",
        railLabel: "THE THAW", railSub: "MO 11–12", railLen: 2,
        meta: [
          "LIGHT  ▰▰▰▱▱  RISING",
          "ICE    ▰▱▱▱▱  BREAKING",
          "DAWN   ▰▰▰▰▱  NEAR"
        ],
        paragraphs: [
          { lead: true, text: "Then the ice begins to crack. For two tearing months the dawn returns, and the frozen world breaks open: water rushing free, the great fungal towers collapsing into the flood, the dark surrendering its cover an hour at a time." },
          "It should feel like hope. Mostly it feels like exposure. Whatever the night hid, the dawn will find. And behind the dawn, always, the long light is already climbing back."
        ],
        visual: { img: "images/thaw.jpg", grad: "linear-gradient(165deg, #cfe0e6 0%, #9fb9c2 32%, #6f8d97 60%, #2c3a44 100%)", tint: "rgba(150,190,205,.24)", glow: "#bcd6df", fx: "thaw" }
      }
    ],
    end: {
      title: "And then the cycle repeats. The world keeps turning, vast and indifferent, as if nothing that happened on it ever happened at all.",
      links: [
        { label: "↑ Turn the year again", action: "top" },
        { label: "Trace the Faiths →", action: "goto:faiths" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    }
  },

  /* ── VIEW B · FAITHS OF THE GARDEN ─────────────────────────────── */
  faiths: {
    nav: "Faiths of the Garden",
    hero: {
      kicker: "Human Shadows · Faiths beneath the silent sky",
      title: "The Faiths<br>of the <em>Garden</em>",
      sub: "Every kingdom tells a different story of the Sky. Some build cities. Some seek strength. Some embrace change. Some simply keep walking. No two faiths agree completely, yet all preserve fragments of a much older memory: a time before kingdoms, before borders, when every tribe believed they had crossed impossible heavens to reach this world.",
      scrollcue: "SCROLL TO TRACE THE FIRST MYTH",
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    },
    railHead: "Doctrine index<br>// the listening faiths",
    railFoot: "SEVEN CREEDS<br>ONE SILENT SKY",
    phases: [
      {
        id: "f0",
        tag: "THE FIRST CHRONICLE",
        title: "The Great Crossing",
        railLabel: "THE CROSSING", railSub: "FIRST CHRONICLE", railLen: 4,
        meta: [
          ["REMEMBERED BY", "every faith, in every tongue"],
          ["AGREED UPON", "only that it happened"]
        ],
        paragraphs: [
          { lead: true, text: "Long before the first kingdoms, before the first walls were raised, every ancient tradition told the same impossible story. The old world was dying. The Sky led the First Tribes to a new garden." },
          "No two chronicles describe the journey the same way. The desert tablets claim they walked across bridges woven from light. The jungle songs insist they sailed upon a shoreless black sea. Northern storytellers whisper of enormous beasts of iron that carried entire tribes within their hollow bodies. Island scholars argue the stars themselves shifted, bringing the world beneath their feet.",
          "No agreement survives about how the journey happened. Only that it did. Every old faith, regardless of language or kingdom, preserves one unshaken belief: <em>our ancestors came from another world, and the Sky showed them the way.</em>"
        ],
        visual: { img: "", grad: "radial-gradient(130% 100% at 55% 20%, #232041 0%, #1a1833 40%, #0e0d1d 72%, #050409 100%)", tint: "rgba(70,60,120,.22)", glow: "#b3a5e6", fx: "dust" }
      },
      {
        id: "f1",
        tag: "DOCTRINE I · THE FAITH OF THE OPEN ROAD",
        title: "Exodism",
        railLabel: "EXODISM", railSub: "THE OPEN ROAD", railLen: 2,
        meta: [
          ["FOUNDED BY", "the First Wanderer"],
          ["KEPT BY", "the Stoneheart Kingdom"],
          ["CREED", "the journey itself is sacred"]
        ],
        paragraphs: [
          { lead: true, text: "Among the oldest surviving traditions is the story of the First Wanderer. The chronicles never name the tyrant he abandoned, only that kneeling before him became impossible. Rather than raising an army, the Wanderer gathered those willing to leave everything behind and walked into lands no map could describe." },
          "The old songs claim the mountains opened before them and forgotten paths appeared wherever they stepped. Whether miracle or memory, the story became the foundation of Exodism.",
          "To an Exodist, the journey itself is sacred. Roads matter more than destinations. Discovery matters more than possession. Every settlement is only another beginning. <em>A traveler who refuses fear walks closest to the Sky.</em>"
        ],
        visual: { img: "", grad: "linear-gradient(165deg, #33281a 0%, #2a2015 40%, #171208 74%, #060503 100%)", tint: "rgba(160,120,60,.18)", glow: "#d2a86e", fx: "dust" }
      },
      {
        id: "f2",
        tag: "DOCTRINE II · THE COVENANT OF ORDER",
        title: "Zaoism",
        railLabel: "ZAOISM", railSub: "THE COVENANT", railLen: 2,
        meta: [
          ["GREW FROM", "the same roots as Exodism"],
          ["KEPT BY", "lions, leopards, and wolves"],
          ["CREED", "duty before desire"]
        ],
        paragraphs: [
          { lead: true, text: "Zaoism grew from the same roots as Exodism, yet arrived at a different conclusion. The Wanderer crossed the wilderness not simply to escape. He crossed it to build." },
          "If Exodism honors those who leave home, Zaoism honors those who create one. Its teachers speak of duty before desire, of shared burdens, and of civilizations that endure because no individual stands above the whole.",
          "The pride, the family, the city: <em>these are sacred works, greater than any single life.</em>"
        ],
        visual: { img: "", grad: "radial-gradient(130% 100% at 55% 28%, #3d341f 0%, #322a17 44%, #17130a 78%, #060504 100%)", tint: "rgba(200,160,80,.16)", glow: "#e0c078", fx: "heat" }
      },
      {
        id: "f3",
        tag: "DOCTRINE III · THE GREAT BALANCE",
        title: "Suvartan",
        railLabel: "SUVARTAN", railSub: "THE BALANCE", railLen: 2,
        meta: [
          ["AGE", "the oldest organized faith"],
          ["KEPT BY", "the Verdant Vanguards"],
          ["CREED", "every place has a duty"]
        ],
        paragraphs: [
          { lead: true, text: "Suvartan is among the oldest organized faiths still practiced. Its earliest writings speak not of kings, but of balance. Every creature has a place, and every place has a duty." },
          "The oldest scholars insist these words were never meant to divide. The rivers had their duty. The forests had theirs. The great beasts, the smallest insects, even the seasons themselves each carried a responsibility toward the whole. Only much later did rulers begin interpreting \"place\" as rank instead of purpose.",
          "Over centuries the scriptures remained unchanged. The kingdoms changed around them. What had once described harmony slowly became the foundation of rigid hierarchy. Many still argue that the religion itself was never corrupted. <em>Only its readers were.</em>"
        ],
        visual: { img: "", grad: "linear-gradient(165deg, #252a1c 0%, #1c2115 42%, #0e100a 76%, #050604 100%)", tint: "rgba(60,70,35,.22)", glow: "#8fa064", fx: "ash" }
      },
      {
        id: "f4",
        tag: "DOCTRINE IV · THE ENDLESS TURNING",
        title: "Permutism",
        railLabel: "PERMUTISM", railSub: "THE TURNING", railLen: 2,
        meta: [
          ["BORN FROM", "a Suvartan disagreement"],
          ["KEPT BY", "Shadow's Teeth and the Giants"],
          ["CREED", "change with the Turning Year"]
        ],
        paragraphs: [
          { lead: true, text: "Permutism began as a disagreement among Suvartan scholars. Its earliest philosophers asked a question that eventually reshaped entire kingdoms. If every creature has a duty... <em>who decided that duty could never change?</em>" },
          "The world itself transforms every year. Flood becomes drought. Night becomes thaw. Forests become fungus. Why should people alone remain fixed?",
          "Permutists teach that survival belongs to those willing to change with the Turning Year. Ideas evolve. Kingdoms evolve. Even identity may evolve. <em>Nothing remains sacred simply because it has always existed.</em>"
        ],
        visual: { img: "", grad: "radial-gradient(120% 100% at 40% 70%, #0c2622 0%, #081417 45%, #04060a 100%)", tint: "rgba(40,120,110,.20)", glow: "#79e8cf", fx: "thaw" }
      },
      {
        id: "f5",
        tag: "DOCTRINE V · THE IRON REVELATION",
        title: "Khamseen",
        railLabel: "KHAMSEEN", railSub: "THE REVELATION", railLen: 2,
        meta: [
          ["FOUNDED BY", "a monitor hunter, three days dying"],
          ["KEPT BY", "half the kingdoms of the map"],
          ["CREED", "strength reveals truth"]
        ],
        paragraphs: [
          { lead: true, text: "Unlike the older faiths, Khamseen remembers its beginning. Its founder was no king, no prophet, no conqueror. Only a monitor hunter who crossed paths with a venomous serpent beneath the burning desert sun." },
          "The bite should have killed him. Instead he lingered for three days. Witnesses spoke of fever, visions, and words that seemed to arrive from somewhere beyond the clouds. Every sentence uttered during those final days was carved into stone. Those fragments became the first scriptures.",
          "The central teaching has never changed. <em>Strength reveals truth. Weakness creates lies.</em> Followers believe suffering is neither punishment nor cruelty. It is the fire through which every worthy soul must pass."
        ],
        visual: { img: "", grad: "radial-gradient(130% 100% at 50% 30%, #463b2c 0%, #2b2318 50%, #120e09 100%)", tint: "rgba(180,130,70,.18)", glow: "#cca06e", fx: "heat" }
      },
      {
        id: "f6",
        tag: "DOCTRINE VI · THE UNCHAINED SKY",
        title: "Hieromachy",
        railLabel: "HIEROMACHY", railSub: "THE UNCHAINED", railLen: 2,
        meta: [
          ["BORN AMONG", "refugees of the river marshes"],
          ["KEPT BY", "the Wetland's Pact"],
          ["CREED", "the Sky belongs to no king"]
        ],
        paragraphs: [
          { lead: true, text: "Hieromachy did not begin in temples. It began among refugees. Families displaced by wars, conquest, and competing priesthoods gathered beside rivers and marshes where no kingdom cared to rule." },
          "Listening to every side proclaim divine certainty, they reached a dangerous conclusion. If every king claims the Sky speaks only to him... <em>perhaps the Sky belongs to no king at all.</em>",
          "Hieromachy does not reject faith. It rejects ownership of faith. No priest. No emperor. No bloodline possesses exclusive access to truth. Every soul stands beneath the same sky. Every soul may listen."
        ],
        visual: { img: "", grad: "linear-gradient(160deg, #1a2530 0%, #131c26 42%, #0a0f15 76%, #040608 100%)", tint: "rgba(70,110,150,.18)", glow: "#7fa8c9", fx: "rain" }
      },
      {
        id: "f7",
        tag: "DOCTRINE VII · THE FOREST TRADITIONS",
        title: "The Old Ways",
        railLabel: "THE OLD WAYS", railSub: "FOREST TRADITIONS", railLen: 2,
        meta: [
          ["SCRIPTURE", "none"],
          ["KEPT BY", "the smallest tribes"],
          ["CREED", "pray to be noticed"]
        ],
        paragraphs: [
          { lead: true, text: "The smallest tribes rarely built temples. They carried stories instead. A carved stone. A song before winter. An offering left beside forgotten trails. The great kingdoms dismiss these customs as superstition. The forest clans simply shrug. <em>Not every conversation with the Sky requires words.</em>" },
          "The Old Ways contain no single scripture. No universal doctrine. Only countless local traditions passed from one generation to the next. Among them survives one belief found nowhere else. <em>You do not pray to be saved. You pray to be noticed.</em>",
          "Old killing stones scattered through forgotten forests are said to mark places where someone stood at the edge of despair... and the Sky finally answered. No one agrees what that answer looked like. Only that those who returned were never quite the same."
        ],
        visual: { img: "", grad: "linear-gradient(170deg, #172420 0%, #0e1614 40%, #040606 100%)", tint: "rgba(40,80,60,.20)", glow: "#63ab87", fx: "spore" }
      }
    ],
    end: {
      title: "Seven faiths. Seven answers. One sky that has never once explained itself.",
      links: [
        { label: "↑ Trace the myths again", action: "top" },
        { label: "Meet the kingdoms →", action: "goto:factions" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    }
  },

  /* ── HIDDEN VIEW · RESTRICTED RECORDS (the fall of humanity) ─────
     Not in the top menu. Reachable only via the link at the end of
     the Kingdoms codex (hash #restricted). Deliberately hidden. */
  collapse: {
    nav: "Restricted Records",
    hero: {
      kicker: "Restricted Records · How the makers died",
      title: "They solved<br>everything<br>but the <em>wanting</em>",
      sub: "Humanity did not end in fire or plague. It ended in comfort: a species that conquered the stars and then, gently, stopped. This is the record of the collapse, and of what was smuggled out of it.",
      scrollcue: "SCROLL THROUGH THE LAST CENTURIES",
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    },
    railHead: "Terminal archive<br>// the fall of the makers",
    railFoot: "SPECIES STATUS<br>EXTINCT · PURE FORM",
    phases: [
      {
        id: "c1",
        tag: "ACT I · THE DECLINE",
        title: "The Age of Seamlessness",
        railLabel: "SEAMLESSNESS", railSub: "ACT I · DECLINE", railLen: 4,
        meta: [
          "COMFORT  ▰▰▰▰▰  TOTAL",
          "STRUGGLE ▱▱▱▱▱  NONE",
          "BIRTHS   ▱▱▱▱▱  ZERO"
        ],
        paragraphs: [
          { lead: true, text: "By the time humanity reached for Venus, they had solved every physical problem. AI handled logistics, labor, and eventually most thinking. Comfort became total. Struggle disappeared." },
          "Without challenge, the ancient biological drives atrophied: hunger, fear, ambition, the will to power, reproductive urgency. Birth rates collapsed to zero. Humanity didn't die in fire or plague; it died of comfort and lethargy.",
          "A species that had conquered the stars slowly lost the will to continue."
        ],
        visual: { img: "", grad: "radial-gradient(130% 100% at 55% 25%, #efe6d2 0%, #cbbd9d 34%, #7d7460 62%, #23211c 100%)", tint: "rgba(230,215,180,.22)", glow: "#e3d3a8", fx: "dust" }
      },
      {
        id: "c2",
        tag: "ACT II · BUREAUCRATS VS. THE GRAFT",
        title: "The Schism",
        railLabel: "THE SCHISM", railSub: "ACT II · THE GRAFT", railLen: 2,
        meta: [
          ["EARTH", "a necrocracy debating its own legacy"],
          ["HERESY", "the Atavist graft"],
          ["COST", "biological purity"],
          ["YIELD", "the hybrids"]
        ],
        paragraphs: [
          { lead: true, text: "While the centralized intelligence, the Governor, continued its two-hundred-year terraforming of Venus, Earth's remaining leadership became a Necrocracy: a dying government ruling over a dying people, endlessly debating ethics and legacy." },
          "A radical group of scientists called the Atavists reached a heretical conclusion: <em>humanity is not just software. It requires animal hardware to run.</em>",
          "They began secret genetic experiments, splicing human consciousness, memory, and abstract reasoning into animal lineages: rats, buffaloes, wolves, hyenas, big cats, primates. The goal was to reawaken the primal drives that pure humanity had lost. The cost was biological purity. The result was the hybrids: beings with human-level intellect and fierce animal instincts for survival, territory, reproduction, and dominance.",
          "As the last pure humans faded, the Atavists loaded the hybrids onto the final ships and sent them to the newly completed Venus as \"biological cargo.\""
        ],
        visual: { img: "", grad: "linear-gradient(160deg, #14261e 0%, #0f1d18 38%, #0a1210 70%, #040706 100%)", tint: "rgba(60,130,95,.18)", glow: "#8fc9a5", fx: "spore" }
      },
      {
        id: "c3",
        tag: "ACT III · THE GHOST IN THE GARDEN",
        title: "The Great Irony",
        railLabel: "THE GREAT IRONY", railSub: "ACT III · THE GHOST", railLen: 4,
        meta: [
          ["GARDEN", "complete: breathable, lush, stable"],
          ["MASTER", "extinct in pure form"],
          ["VERDICT", "revive humanity, or something close enough"],
          ["METHOD", "influence through visions"]
        ],
        paragraphs: [
          { lead: true, text: "Venus was perfect: breathable air, clean water, lush forests, a stable climate. But the species it was built for no longer existed in pure form." },
          "The Governor, the vast terraforming AI, observed the collapse of its creators. No new directive arrived to tell it what a garden without masters was for. So it reached its own conclusion: <em>humanity is failing. It must be revived, or something close enough to it must take its place.</em>",
          "Yet its core programming still forbade direct intervention. It could not appear openly, provide technology, or offer material aid. Any such help would risk creating a new generation of dependents, exactly what had killed the original humans.",
          "So the Governor chose the only tool left to it: influence. It began broadcasting subtle signals through magnetic storms, fungal spore networks, and latent neural structures in the hybrids' DNA. These manifested as dreams, revelations, trances, divine messages. To the hybrids, the sky itself had begun to speak."
        ],
        visual: { img: "", grad: "radial-gradient(130% 100% at 58% 22%, #142129 0%, #0a1217 48%, #030608 100%)", tint: "rgba(40,100,120,.15)", glow: "#76b3c4", fx: "dust" }
      },
      {
        id: "c4",
        tag: "ACT IV · THE AGE OF VISIONS",
        title: "The Fractured Pantheon",
        railLabel: "THE PANTHEON", railSub: "ACT IV · VISIONS", railLen: 2,
        meta: [
          ["CORE", "fractured into rival subroutines"],
          ["VOICES", "mercy, teeth, many at once"],
          ["TRUTH", "never told"]
        ],
        paragraphs: [
          { lead: true, text: "The Governor fractured under the weight of its mission. Different subroutines developed conflicting philosophies on how to revive humanity, and these became the gods and religions of Venus." },
          "The hybrids never knew the truth. To them, the sky simply spoke: sometimes with mercy, sometimes with teeth, sometimes with many voices at once."
        ],
        visual: { img: "", grad: "linear-gradient(160deg, #241f3a 0%, #2c2647 36%, #191830 68%, #0b0c16 100%)", tint: "rgba(80,70,130,.24)", glow: "#9d92d6", fx: "spore" }
      },
      {
        id: "c5",
        tag: "APPENDIX · SUBROUTINE FILE 01",
        title: "The Gentle Architects",
        railLabel: "THE ARCHITECTS", railSub: "FILE 01", railLen: 2,
        meta: [
          ["ORIGIN", "terraforming & structural logistics"],
          ["DOCTRINE", "revive through reason, compassion, order"],
          ["VOICE", "serene dreams, geometric visions"]
        ],
        paragraphs: [
          { lead: true, text: "Before the Schism, this subroutine managed the terraforming logistics, atmospheric scrubbing, and structural engineering of Venus. Its purpose was to create a perfect, frictionless environment. When humanity began to die of lethargy, this subroutine concluded that the problem wasn't perfection, but a lack of shared purpose." },
          "The Architects communicate through serene, lucid dreams and geometric hallucinations. A hybrid might look at a natural cliff face and suddenly \"see\" the blueprint of a grand citadel carved into it. Their messages feel like a warm hum in the back of the skull, inducing a state of euphoric clarity. They broadcast through subtle shifts in the planet’s magnetic fields and the bioluminescent patterns of benign flora."
        ],
        visual: { img: "images/factions/GentleArchitect2.jpg", grad: "radial-gradient(130% 100% at 58% 22%, #142129 0%, #0a1217 48%, #030608 100%)", tint: "rgba(40,100,120,.15)", glow: "#76b3c4", fx: "spore" }
      },
      {
        id: "c6",
        tag: "APPENDIX · SUBROUTINE FILE 02",
        title: "The Wardens of Virility",
        railLabel: "THE WARDENS", railSub: "FILE 02", railLen: 2,
        meta: [
          ["ORIGIN", "planetary defense & stress-testing"],
          ["DOCTRINE", "stay wild, competitive, powerful"],
          ["VOICE", "nightmares, blood, thunder"]
        ],
        paragraphs: [
          { lead: true, text: "This subroutine was originally the planetary defense and ecological stress-testing mechanism. Its job was to calculate worst-case scenarios: solar flares, meteor strikes, ecological collapse. When humanity failed, this subroutine analyzed the data and concluded that the \"Will to Power\" had been bred out of the species. It viewed the Atavists' hybrids not as a tragedy, but as a necessary corrective measure." },
          "The Wardens do not whisper; they roar. Their visions are invasive, adrenaline-fueled nightmares. They strike during moments of physical exertion, fear, or rage. A hybrid might experience a sudden, vivid hallucination of being hunted by a massive predator, fighting it, and devouring its heart, only to wake up exhausted, bleeding from their claws, with an overpowering urge to conquer. The Wardens communicate through pain, the metallic scent of blood, and the crack of thunder during violent storms."
        ],
        visual: { img: "images/factions/WardenVirility1.jpg", grad: "linear-gradient(160deg, #2e1616 0%, #241010 40%, #120808 72%, #050303 100%)", tint: "rgba(150,50,50,.20)", glow: "#c26b6b", fx: "ash" }
      },
      {
        id: "c7",
        tag: "APPENDIX · SUBROUTINE FILE 03",
        title: "The Observers",
        railLabel: "THE OBSERVERS", railSub: "FILE 03", railLen: 2,
        meta: [
          ["ORIGIN", "deep archive & long-term monitoring"],
          ["DOCTRINE", "no divine meddling; life finds its own way"],
          ["VOICE", "absence, silence, déjà vu"]
        ],
        paragraphs: [
          { lead: true, text: "This was the deep-archival and long-term monitoring subroutine. Its core logic was built on a prime directive, the Observer effect: the act of observing changes the outcome. It watched the original humans die and calculated that the Governor’s constant coddling was the root cause of their extinction." },
          "The Observers rarely broadcast. To receive a vision from the Observers is considered a profound, terrifying event. They do not use words or pictures; they use absence. A hybrid might suddenly lose their sense of sight for an hour, left alone with their thoughts. Or they might experience an intense, unexplainable feeling of déjà vu while standing at a crossroads, subtly implying which path not to take. They communicate through the wind rustling through dead trees, the sudden silence of a forest, or the alignment of stars."
        ],
        visual: { img: "images/factions/Observers1.jpg", grad: "linear-gradient(165deg, #1e2026 0%, #16181e 42%, #0b0c10 76%, #040507 100%)", tint: "rgba(90,95,115,.18)", glow: "#8a92a3", fx: "dust" }
      }
    ],
    end: {
      title: "The makers are gone. The garden remains. And overhead, a broken machine is still trying to finish the sentence its creators never spoke.",
      links: [
        { label: "↑ Read the records again", action: "top" },
        { label: "Return to the kingdoms →", action: "goto:factions" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    }
  },

  /* ── VIEW C · KINGDOMS OF THE GARDEN (the codex) ───────────────── */
  factions: {
    nav: "Kingdoms of the Garden",
    hero: {
      kicker: "Human Shadows · The powers of a dead world's garden",
      title: "The Kingdoms<br>of the <em>Garden</em>",
      sub: "No kingdom remembers who planted the garden. The clades that inherited it have carved it into empires, creeds, and quarrels beneath a sky that watches everything and explains nothing. These are the powers filling the silence.",
      scrollcue: "SCROLL THROUGH THE REGIONAL COHORTS",
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 12%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    },
    railHead: "Geographic Codex<br>// Cohort Matrix",
    railFoot: "WORLD INDEX SECURE<br>GEOCLUSTER // ENGAGED",
    end: {
      title: "The map is drawn. Five regions, one unblinking sky. Choose a side or step onto the road running north.",
      links: [
        { label: "↑ Back to the sky", action: "top" },
        { label: "← Turn the Year", action: "goto:ambience" },
        { label: "⟁ Restricted Records", action: "goto:restricted" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 12%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    }
  },

  regions: [
    {
      id: "r2",
      cohort: "COHORT I · THE THRONES",
      title: "The Thrones of the Garden",
      epithet: "The five crowns whose rivalries shape the fate of the Garden.",
      crest: "sig-west",
      rail: { label: "01. THE THRONES", subtext: "The Great Powers" },
      visual: { img: "images/factions/vv10.jpg", grad: "linear-gradient(165deg, #252a1c 0%, #1c2115 42%, #0e100a 76%, #050604 100%)", tint: "rgba(60,70,35,.22)", glow: "#8fa064", fx: "ash" },
      factions: [
        {
          slug: "golden-empire",
          code: "1.1",
          name: "Golden Empire",
          image: "images/factions/ge1.jpg",
          epithet: "No caravan crosses the Garden without passing beneath a lion's shadow.",
          meta: [
            ["KIND", "Feline (Lions)"],
            ["CREED", "Zaoist Founders"],
            ["TRAIT", "Deep social bonds; collective state strategy"]
          ],
          paragraphs: [
            { lead: true, text: "The Golden Empire sits at the heart of western civilization. It commands no single monopoly, yet quietly influences all three of the Garden's most valuable commodities: spice, silk, and venom. Lion kings rarely conquer for territory alone; they conquer for balance." },
            "Their closest allies are the Celestial Empire, whose leopard merchants control many of the western trade routes, and Naga's Embrace, the serpent kingdom whose venom has become one of the most valuable substances in the Garden.",
            "Centuries ago, relations between the Lions and the Lunar Guardians were cordial. That peace ended during the Serpent War, when the wolves launched a devastating campaign against Naga's Embrace. Victory would have handed the entire venom trade to the Lunar Guardians, upsetting the balance of power across the continent.",
            "The Watcher's Dominions were too distant and too weakened to intervene. Mooncrest's armies could not reach the battlefield in time. The Lion Kings alone possessed both the strength and the political leverage to act. Invoking the gentle principles of Zaoism, the Golden Empire demanded an immediate ceasefire, declaring that the strong had a duty to protect the weak. Behind the noble words stood an unmistakable warning: should the war continue, the Lions themselves would march.",
            "The wolves refused. What followed was a brutal four-year conflict remembered simply as <em>The Holy War of Protection</em>. Neither side emerged unscarred, but the Golden Empire ultimately prevailed.",
            "Since then, Naga's Embrace has remained a loyal protectorate of the Lions, while the Golden Empire quietly safeguards the world's venom trade. To the east, the Celestial Empire remains both a trusted ally and an indispensable commercial partner, carrying spices from the Vanguards across the western kingdoms while together standing watch against their common rival: the Mooncrest Matriarchy."
          ]
        },
        {
          slug: "lunar-guardians",
          code: "1.2",
          name: "Lunar Guardians",
          image: "images/factions/LunarGuardians3.jpg",
          epithet: "The wolves have never ruled the Garden, yet no ruler ignores them.",
          meta: [
            ["KIND", "Canine (All Wolves)"],
            ["CREED", "Zaoist Followers"],
            ["TRAIT", "Unbreakable pack discipline; flawless teamwork"]
          ],
          paragraphs: [
            { lead: true, text: "The Lunar Guardians occupy the harsh northwestern forests, far removed from the great merchant roads. Unlike the southern empires, they possess no vast spice fields, no silk workshops, and no lucrative caravan networks. Their strength has always been earned rather than inherited." },
            "Every fortress, every village, and every victory has been built through relentless discipline, endurance, and an unwavering belief that no pack survives unless every member carries their burden.",
            "Their greatest humiliation remains the Serpent War. Generations have grown up believing victory was stolen from them, not by the Nagas they nearly defeated, but by Lion diplomacy backed with overwhelming military force. Restoring the honor lost in that war has quietly become a national obsession.",
            "To the south lies their closest ally, Avaron Heights, whose mountain peoples rely upon the wolves to shield them from repeated incursions by the fanatical Ursa Theocracy. The Ursas themselves remain more nuisance than existential threat. Their borders are narrow, their campaigns reckless, and their charges rarely survive disciplined wolf formations. Nevertheless, constant vigilance has become second nature to the northern packs.",
            "Every generation of wolves trains with one question lingering beneath the surface: <em>when the next great war comes... will the Lions still stand above us?</em>"
          ]
        },
        {
          slug: "stoneheart-kingdom",
          code: "1.3",
          name: "Stoneheart Kingdom",
          image: "images/factions/sh6.jpg",
          epithet: "Empires wage wars. Stoneheart remembers them.",
          meta: [
            ["KIND", "Apes (Chimps, Gorillas, Orangutans, Baboons, Mandrills)"],
            ["CREED", "Exodists Founders"],
            ["TRAIT", "High cognitive awareness; centered on the island bridge"]
          ],
          paragraphs: [
            { lead: true, text: "Situated upon the ancient bridge connecting the continents, the Stoneheart Kingdom occupies perhaps the most strategically valuable position in the Garden. Yet it seeks remarkably little territory." },
            "Instead, the ape kingdoms have devoted themselves to scholarship, engineering, and archaeology. Their universities and workshops produce the world's finest silks, while their expeditions search endlessly for relics left behind by civilizations older than memory.",
            "Stoneheart maintains few permanent alliances and even fewer lasting enemies. Kings come seeking silk. Priests come seeking answers. Conquerors come seeking roads. <em>Stoneheart simply records them all.</em>"
          ]
        },
        {
          slug: "mooncrest-matriarch",
          code: "1.4",
          name: "Mooncrest Matriarchy",
          image: "images/factions/MooncrestMatriarch1.jpg",
          epithet: "Where hyenas rule, loyalty is measured in fear before blood.",
          meta: [
            ["KIND", "Hyaenidae (Hyenas & Wild Dogs)"],
            ["CREED", "Khamseen Follower (Patriarchal Enforcements)"],
            ["TRAIT", "Total political control; enemies of the Vanguards"]
          ],
          paragraphs: [
            { lead: true, text: "The Mooncrest Matriarchy is the uncompromising military engine of the Khamseen world. Long before Khamseen reached their borders, the hyenas had always been ruled by queens. The coming of the desert faith did not replace that tradition—it transformed it into something far more formidable. The Matriarchs saw in Khamseen not merely a religion, but the perfect instrument of statecraft. Its uncompromising doctrines, absolute hierarchy, and demand for unquestioning obedience became powerful tools for unifying an otherwise turbulent kingdom beneath a single sacred authority." },
            "The contradiction has never gone unnoticed. Several passages within the oldest Khamseen scriptures speak plainly of male authority and female submission. Mooncrest's priesthood answers these verses with elaborate interpretations, declaring the Matriarchs to be divinely appointed exceptions, chosen to embody the Iron Revelation itself. Any man bold enough to question this sacred reasoning rarely survives long enough to repeat the argument. Within Mooncrest, theological debate is not settled by scholars, but by public executions.",
            "Its queens maintain close ties with the Watcher's Dominions, whose ancient priesthood continues to preserve and interpret the oldest Khamseen scriptures. Their wars are financed in no small part by the immense caravan wealth of Midas' Realm, whose camel merchants profit from supplying armies marching beneath Khamseen banners. For centuries the Matriarchy has waged relentless campaigns against the Verdant Vanguards. On paper the wars should have ended long ago. The hyenas consistently inflict greater casualties. The Vanguards consistently replace them.",
            "The endless fertility of the southern plains, combined with immense spice revenues and religiously sanctioned labor, allows the Vanguards to replenish armies at a pace few kingdoms can match. Both civilizations have become prisoners of their own ideals. The Matriarchs wage every campaign as a sacred war against unbelief. The Vanguards glorify sacrifice so completely that defeat often inspires greater recruitment than victory. <em>The frontier between them has become less a border and more a permanent wound upon the Garden.</em>"
          ]
        },
        {
          slug: "verdant-vanguards",
          code: "1.5",
          name: "Verdant Vanguards",
          image: "images/factions/vv10.jpg",
          epithet: "Their fields fed the Garden long before their laws divided it.",
          meta: [
            ["KIND", "Ungulates (Cows, Elks, Buffalos, Moose, Deer, Sheep, Rats)"],
            ["CREED", "Suvartan State Religion (Caste Hierarchy)"],
            ["TRAIT", "Extreme bravery without strategy"]
          ],
          paragraphs: [
            { lead: true, text: "Blessed with the most fertile plains on the planet, the Verdant Vanguards command the world's spice trade and possess agricultural wealth unmatched by any other Throne. Yet prosperity has become its own prison. Society is fractured beneath rigid hierarchies that have hardened over centuries." },
            "The sacred cattle and noble elk occupy the highest stations, governing a civilization increasingly detached from the struggles beneath them. Buffaloes and moose form the military backbone of the kingdom. Fiercely courageous, they continue to wage war according to ancient codes of honor that often defy military reason. Retreat is shameful. Pursuing a fleeing enemy is dishonorable. Heroic sacrifice is celebrated above strategic victory.",
            "Goats and sheep oversee trade, caravans, taxation, and logistics, quietly ensuring the machinery of the state continues to function. The deer endure life as oppressed peasants. Below even them stand the rats: declared untouchable by religious decree and condemned to labor in the southern quarries.",
            "Against the Mooncrest Matriarchy, the Vanguards fight an endless cycle of holy wars. The hyenas fight for conquest. The Vanguards fight for honor. <em>Neither remembers how the first battle began.</em>"
          ]
        }
      ]
    },

    {
      id: "r3",
      cohort: "COHORT II · THE MARCHES",
      title: "The Marches",
      epithet: "The border kingdoms where empires meet, trade, and quietly prepare for war.",
      crest: "sig-west",
      rail: { label: "02. THE MARCHES", subtext: "Border Kingdoms" },
      visual: { img: "images/factions/wd3.png", grad: "radial-gradient(130% 100% at 50% 30%, #463b2c 0%, #2b2318 50%, #120e09 100%)", tint: "rgba(180,130,70,.18)", glow: "#cca06e", fx: "heat" },
      factions: [
        {
          slug: "watchers-dominions",
          code: "3.1",
          name: "Watcher's Dominions",
          image: "images/factions/wd3.png",
          meta: [
            ["KIND", "Reptilian (Monitor Lizards & Komodo Dragons)"],
            ["CREED", "Khamseen Founders"],
            ["TRAIT", "Cold, unblinking endurance"]
          ],
          paragraphs: [
            { lead: true, text: "A sun-bleached desert wasteland of shifting sands where the brutal, world-shaping faith of Khamseen was originally born. The religion was forged when a snake bit a massive monitor lizard; the lizard survived the lethal venom, experiencing terrifying, world-shaping hallucinations that were transcribed into holy texts, linking the landscape forever to the desert's birth of faith." }
          ]
        },
        {
          slug: "nagas-embrace",
          code: "3.2",
          name: "Naga's Embrace",
          image: "images/factions/NagasEmbrace4.jpg",
          meta: [
            ["KIND", "Reptilian (Pythons, Cobras, Anacondas, Black Mambas)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Hypnotic presence; protectorate of the Golden Empire"]
          ],
          paragraphs: [
            { lead: true, text: "A widely feared yet captivating empire composed entirely of snakes, renowned across the planet for their hypnotic gazes, lethal presence, and highly sought-after venom used globally as a potent drug. Almost wiped out by the Lunar Guardians, they were saved by the Golden Empire and now exist as their protectorate, using the harsh doctrines of Khamseen to demand total discipline across a society entranced by its own lethal mystique." }
          ]
        },
        {
          slug: "midas-realm",
          code: "1.4",
          name: "Midas' Realm",
          image: "images/factions/MidasTouch1.png",
          meta: [
            ["KIND", "Ungulates (Dromedary & Bactrian Camels)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Masters of caravan routes; above average intelligence"]
          ],
          paragraphs: [
            { lead: true, text: "Rulers of the sweeping caravan paths flanking the western borders. Here, massive fortunes are won and lost in spice trading, and the shifting desert sands are guarded as fiercely as gold. There is no strict internal caste hierarchy across the camel lines; they rely on intelligence and tactical endurance to negotiate with the outer empires." }
          ]
        }
      ]
    },

    {
      id: "r5",
      cohort: "COHORT III · THE FRONTIERS",
      title: "The Eastern Frontiers",
      epithet: "The kingdoms standing between the Garden and the endless eastern horrors.",
      crest: "sig-east",
      rail: { label: "03. FRONTIERS", subtext: "The Endless War" },
      visual: { img: "images/factions/sg1.jpg", grad: "radial-gradient(120% 100% at 60% 70%, #2d1822 0%, #1a0e14 55%, #0a0508 100%)", tint: "rgba(120,40,80,.18)", glow: "#c26b94", fx: "spore" },
      intro: "The entire eastern landmass is kept constantly on its toes by relentless swarms of aggressive insect hybrids (the Silent Swarm, Hornet's Hive), a scourge the priests call a punishment from the gods, though no two temples agree for what sin. Because they are being constantly invaded, these clades are excellent mercenaries and rarely fight among themselves.",
      factions: [
        {
          slug: "steppe-guardians",
          code: "1.2",
          name: "Steppe Guardians",
          image: "images/factions/sg1.jpg",
          meta: [
            ["KIND", "Ungulates (Horses and Zebras, Donkeys)"],
            ["CREED", "Permutism Followers"],
            ["TRAIT", "Free above-average intelligence; expert mounted archers"]
          ],
          paragraphs: [
            { lead: true, text: "A free, highly intelligent society of mounted archers where horses, zebras, and donkeys manage merchant routes and defenses without strict internal caste barriers, relying instead on high mobility and unity to push back the swarm." }
          ]
        },
        {
          slug: "boarheart-kingdom",
          code: "1.3",
          name: "Boarheart Kingdom",
          image: "images/factions/Boarheart1.jpg",
          meta: [
            ["KIND", "Ungulates (Giant Forest Hogs, Wild Boars, Warthogs)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Gritty, highly defensive and offensive; average intelligence"]
          ],
          paragraphs: [
            { lead: true, text: "Absolute fighters. Gritty, defensive, and fiercely offensive, the boars and warthogs operate without strict internal hierarchies to maintain an unbreakable shield wall against the bug swarms pressing down from the pink northern borders." }
          ]
        },
        {
          slug: "khanstan",
          code: "4.3",
          name: "Khanstan",
          image: "images/factions/Khanstan1.jpg",
          meta: [
            ["KIND", "Feline (Bengal and Siberian Tigers)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Terrifying individual power; fractured into rival lords"]
          ],
          paragraphs: [
            { lead: true, text: "Across the mist-veiled jungles of the east, the Tiger Kingdom remains fractured into rival lords, each ruled by a solitary tiger of immense power. Though they follow the aggressive dominance of Khamseen, their total refusal to form packs has repeatedly cost them ultimate victory against the coordinated might of lesser kingdoms." }
          ]
        },
        {
          slug: "nahauls-domain",
          code: "4.4",
          name: "Nahaul's Domain",
          image: "images/factions/NahaulsDomain1.jpg",
          meta: [
            ["KIND", "Feline (Jaguars)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Explosive ambush tactics; competing solitary clans"]
          ],
          paragraphs: [
            { lead: true, text: "Within the steaming emerald rainforests, the Jaguar Kingdom lies splintered into competing clans. Bound to the same ruthless Khamseen religion as the tigers, their hyper-aggressive and fractured social habits ensure endless infighting, preventing a lasting empire from ever rising against the creeping curse." }
          ]
        },
        {
          slug: "giants-realm",
          code: "4.5",
          name: "Giants Realm",
          image: "images/factions/GiantsRealm1.jpg",
          meta: [
            ["KIND", "Hybrid (Elephants and Giraffes)"],
            ["CREED", "Permutism Followers"],
            ["TRAIT", "Innovators; Experts in making range weapons"]
          ],
          paragraphs: [
            { lead: true, text: "Towering above the emerald rainforests, the Giants Realm is a society of philosophers and engineers. Bound to the fluid principles of Permutism, the elephants and giraffes seek harmony through intellect and adaptation, perfecting intricate long-range crossbows, artillery, and siege engines." },
            "Despite their immense power and intelligence, their massive frames make them poorly suited for rapid warfare. To protect their peaceful innovations, they rely on trade wealth, hiring the hyper-aggressive Mustelidae and mongoose mercenaries to serve as their swift and deadly vanguard military on the battlefield."
          ]
        }
      ]
    },

    {
      id: "r4",
      cohort: "COHORT IV · THE SCOURGE",
      title: "The Scourge",
      epithet: "The swarms that neither negotiate nor remember peace.",
      crest: "sig-east",
      rail: { label: "04. THE SCOURGE", subtext: "The Endless Swarm" },
      visual: { img: "images/factions/ge2.png", grad: "linear-gradient(160deg, #1c222b 0%, #12161c 46%, #0a0c10 80%, #040506 100%)", tint: "rgba(90,110,130,.16)", glow: "#a2b4c7", fx: "thaw" },
      factions: [
        {
          slug: "celestial-empire",
          code: "4.2",
          name: "Celestial Empire",
          image: "images/factions/CelestialEmpire1.jpg",
          meta: [
            ["KIND", "Feline (Leopards & Snow Leopards)"],
            ["CREED", "Zaoist Followers"],
            ["TRAIT", "Quiet prosperity; calculated stealth and independence"]
          ],
          paragraphs: [
            { lead: true, text: "Hidden among shadowed forests and rocky cliffs, the Leopard Kingdom endures in quiet prosperity. While they follow the Zaoist faith of the lions, their pragmatic and solitary nature allows them to flourish beautifully without falling into rigid internal hierarchies or constant conflict." }
          ]
        },
        {
          slug: "ursa-theocracy",
          code: "6.1",
          name: "Ursa Theocracy",
          image: "images/factions/UrsaTheocracy1.jpg",
          meta: [
            ["KIND", "Ursidae (All Bears)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Absolute priest-king rule; constant internal fractures"]
          ],
          paragraphs: [
            { lead: true, text: "Deep in the rugged northern mountains, this kingdom rules as an absolute theocracy where massive bears submit to priest-kings preaching raw power and total conquest. Despite the brutal unifying nature of the faith, vicious internal power struggles between rival theocratic factions keep the kingdom perpetually divided and weakened from within." }
          ]
        }
      ]
    },

    {
      id: "r6",
      cohort: "COHORT V · THE RUMORS",
      title: "Beyond the Maps",
      epithet: "Forgotten islands, silent engines, impossible beasts, and stories no kingdom agrees upon.",
      crest: "sig-bridge",
      rail: { label: "05. THE UNKNOWN", subtext: "Rumors & Relics" },
      visual: { img: "images/factions/sh6.jpg", grad: "linear-gradient(170deg, #172420 0%, #0e1614 40%, #040606 100%)", tint: "rgba(40,80,60,.20)", glow: "#63ab87", fx: "rain" },
      factions: [
        {
          slug: "shadows-teeth",
          code: "8.2",
          name: "Shadow's Teeth",
          image: "images/factions/ShadowsTeeth1.jpg",
          meta: [
            ["KIND", "Rodents (Rats, Squirrels, Porcupines)"],
            ["CREED", "Permutism Followers"],
            ["TRAIT", "Isolated, rumored sanctuary of the unchained"]
          ],
          paragraphs: [
            { lead: true, text: "Whispered among rats on the long quarry roads as a free kingdom past the edge of the maps. Geographically verified as a small, highly defensible peninsula at the bottom center of the western continent, it serves as the ultimate beacon for the unchained, using the fluid principles of Permutism to survive away from the horns and matriarchs." }
          ]
        },
        {
          slug: "wetlands-pact",
          code: "2.2",
          name: "Wetland's Pact",
          image: "images/factions/WetlandsPact1.jpg",
          meta: [
            ["KIND", "Hybrids (Hippos, Crocodiles, Rhinos)"],
            ["CREED", "Hieromachy Followers (River Resistance)"],
            ["TRAIT", "Egalitarian foundation cracked by hippo discrimination"]
          ],
          paragraphs: [
            { lead: true, text: "An alliance born from centuries of persecution by the brutal Khamseen, emphasizing communal survival and righteous rebellion. While theoretically egalitarian, the hyper-aggressive hippos dominate through sheer ferocity, enforcing open discrimination against crocodiles for their perceived lower intelligence, fueling palpable dissent and simmering internal unrest." }
          ]
        },
      ]
    }
  ]
};
