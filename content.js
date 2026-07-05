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
        visual: { img: "images/long-light.jpg", grad: "radial-gradient(130% 100% at 60% 28%, #fff8e6 0%, #ecd99f 30%, #c79a55 60%, #6b4f2c 100%)", tint: "rgba(255,236,180,.30)", glow: "#f0d488", fx: "heat" }
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
        visual: { img: "images/weeping.jpg", grad: "linear-gradient(160deg, #2a2740 0%, #34304e 35%, #1e2236 70%, #0f111d 100%)", tint: "rgba(70,60,110,.26)", glow: "#9d92d6", fx: "rain" }
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
        visual: { img: "images/fungal-night.jpg", grad: "radial-gradient(120% 100% at 40% 70%, #0c2622 0%, #081417 45%, #04060a 100%)", tint: "rgba(40,120,110,.20)", glow: "#79e8cf", fx: "spore" }
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
        id: "f1", slug: "exodism",
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
        id: "f2", slug: "zaoism",
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
        id: "f3", slug: "suvartan",
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
        id: "f4", slug: "permutism",
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
        id: "f5", slug: "khamseen",
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
        id: "f6", slug: "hieromachy",
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
        id: "f7", slug: "old-ways",
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
          image: "images/factions/LunarGuardians4.jpg",
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
            "To the south lies their closest ally, Galeon Heights, whose mountain peoples rely upon the wolves to shield them from repeated incursions by the fanatical Ursa Theocracy. The Ursas themselves remain more nuisance than existential threat. Their borders are narrow, their campaigns reckless, and their charges rarely survive disciplined wolf formations. Nevertheless, constant vigilance has become second nature to the northern packs.",
            "Every generation of wolves trains with one question lingering beneath the surface: <em>when the next great war comes... will the Lions still stand above us?</em>"
          ]
        },
        {
            slug: "stoneheart-kingdom",
            code: "1.3",
            name: "Stoneheart Kingdom",
            image: "images/factions/sh6.jpg",
            meta: [
              ["KIND", "Apes (Chimps, Gorillas, Orangutans, Baboons, Mandrills)"],
              ["CREED", "Exodists Founders"],
              ["TRAIT", "High cognitive awareness; pragmatic brokers of the bridge"]
            ],
            paragraphs: [
              { lead: true, text: "Situated upon the ancient bridge connecting the continents, the Stoneheart Kingdom occupies perhaps the most strategically valuable position in the Garden. Yet it seeks remarkably little territory. Instead of expanding, the ape kingdoms have devoted themselves to scholarship, engineering, and archaeology, turning their cities into the world's greatest repositories of lost knowledge." },
              "Their universities and workshops produce the Garden's finest silks, while their expeditions search endlessly for relics left behind by civilizations older than memory. But this scholarly pursuit is constantly interrupted by their southern neighbors: the Redsett Clans. Composed of hyper-aggressive mustelids and mongooses, the Redsett are an absolute menace of a kingdom, surviving on raiding, pillaging, and constant, grinding border wars.",
              "Rather than mobilizing their armies for a perpetual meat-grinder, the Stoneheart leadership pays the Redsett a heavy, regular tribute. This is not an act of weakness; the apes are simply too intelligent to be distracted. They have calculated the cost of war, found it detrimental to their research, and adopted a cynical policy: <em>take the gold, and go bother someone else.</em>",
              "However, this uneasy dynamic shifts dramatically on their eastern borders. Both Stoneheart and the Redsett share a narrow, perilous frontier with the 'Winds's Hunger'. When the insect hordes surge from the east, the tribute is forgotten. Ape engineers and Redsett raiders fight shoulder-to-shoulder in brutal, coordinated defenses, knowing that if the Swarm breaks the line, it will devour them all indiscriminately.",
              "Left to their own devices, the apes pursue the true calling of Exodism: the endless journey for knowledge. While the rest of the Garden bleeds over borders and faiths, Stoneheart perfects their architecture and deciphers ancient relics in peace. Kings come seeking silk. Priests come seeking answers. Conquerors come seeking roads. <em>Stoneheart simply records them all, pays off the loud ones, and builds a better world in the quiet.</em>"
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
            "Goats and sheep oversee trade, caravans, taxation, and logistics, quietly ensuring the machinery of the state continues to function. The deer endure life as oppressed peasants. Below even them stand the rats—declared untouchable by religious decree and condemned to labor in the southern quarries.",
            "Against the Mooncrest Matriarchy, the Vanguards fight an endless cycle of holy wars. Though often portrayed as standing alone against the predators, the Vanguards are not entirely without friends. To their north lies the Wetlands Pact, a loose alliance of hippos, rhinoceroses, and crocodilians united under the radical, anti-authoritarian ideals of Hieromachy.",
            "Born in bloody resistance to Khamseen oppression, the Pact has repeatedly dispatched heavy battalions to reclaim lost Vanguard territory whenever the southern front threatens to collapse. Yet this alliance has begun to fracture under the weight of its own hypocrisy. The egalitarian rebels of the Wetlands look upon the Vanguards’ rigid, weaponized Suvartan caste system—and their brutal subjugation of the lower clades—with growing disgust.",
            "With no direct border against Mooncrest and generations of mounting casualties, many within the Wetlands now openly question why the Unchained Sky should continue to spill its blood to protect a kingdom of tyrants and priests. The hyenas fight to prove the world is a merciless crucible. The Vanguards fight to protect a frozen, unyielding hierarchy. <em>Neither remembers how the first battle began, but both are trapped in an eternal spin of their own making.</em>"
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
      visual: { img: "images/factions/wd3.jpg", grad: "radial-gradient(130% 100% at 50% 30%, #463b2c 0%, #2b2318 50%, #120e09 100%)", tint: "rgba(180,130,70,.18)", glow: "#cca06e", fx: "heat" },
      factions: [
        {
          slug: "watchers-dominions",
          code: "2.1",
          name: "Watcher's Dominions",
          image: "images/factions/wd3.jpg",
          meta: [
            ["KIND", "Reptilian (Monitor Lizards & Komodo Dragons)"],
            ["CREED", "Khamseen Founders"],
            ["TRAIT", "Cold, unblinking endurance; spiritual heart of the desert"]
          ],
          paragraphs: [
            { lead: true, text: "A sun-bleached wasteland of shifting sands, the Watcher's Dominions are the crucible in which the brutal, world-shaping faith of Khamseen was forged. It was here, beneath the burning sun, that a monitor hunter was bitten by a venomous serpent and survived three days of fevered visions—visions that became the Iron Revelation. Today, rival warlords have been subdued and bound beneath the iron fist of a single ruling family, holding together an empire that values endurance above all else." },
            "Because strength is the only virtue recognized by Khamseen, the Dominions have willfully allowed cultural, moral, and scientific progress to atrophy. They are a civilization frozen in amber, viewing innovation as a weakness of the flesh. Their barren territory offers little in the way of agriculture or industry; instead, the vast majority of the population clings desperately to a single, life-giving river and the fringes of the north-eastern jungles.",
            "Yet the Dominions endure, sustained by a single, lucrative resource: faith. As the birthplace of the Iron Revelation, their ancient monoliths and sunken temples draw endless convoys of zealots from across the globe. These pilgrims bring gold, silk, and offerings, leaving the barren empire enriched by the very world it scorns.",
            "Geopolitically, the Dominions sit at the heart of the Khamseen bloc. To the west lie the venomous serpents of Naga's Embrace, and to the east, the camel caravans of Midas' Realm—both bound by shared faith and mutual profit. To the south, the Watchers maintain their closest alliance with the Mooncrest Matriarchy. The Dominions preserve the oldest scriptures in their desert archives, while the hyenas provide the military might to enforce them.",
            "This holy alliance, however, has earned them the distrust of the Golden Empire, who view the cold-blooded warlords as fanatics destabilizing the continent. To the north, the mountain peaks of Galeon Heights and the dark forests of the Lunar Guardians maintain a tense, silent neutrality. The barren dunes offer the wolves nothing worth taking, and the Watchers are content to let the frozen north sleep—<em>so long as it does not cast a shadow across the desert.</em>"
          ]
        },
        {
          slug: "nagas-embrace",
          code: "2.2",
          name: "Naga's Embrace",
          image: "images/factions/NagasEmbrace4.jpg",
          meta: [
            ["KIND", "Reptilian (Pythons, Cobras, Anacondas, Black Mambas)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Hypnotic presence; protectors of the world's most lucrative venom"]
          ],
          paragraphs: [
            { lead: true, text: "A widely feared yet captivating empire composed entirely of serpents, Naga's Embrace coils around the western trade routes, renowned across the planet for their hypnotic gazes and lethal grace. While pythons and constrictors provide the kingdom's raw muscle, the venomous snakes—cobras, mambas, and vipers—occupy the highest echelons of society. Their venom, harvested and diluted into trace amounts, serves as the Garden's most potent hallucinogen, fueling an illicit, sprawling drug trade that fills their coffers." },
            "Bound by the ruthless doctrines of Khamseen, the serpents share the same cold, calculating temperament as the Watcher's Dominions to their east. Culturally and scientifically stagnant, they rely entirely on the monopoly of their venom to maintain their relevance. Their political structure is a mirror of the desert warlords: rigid, unfeeling, and governed by an iron fist that demands absolute obedience to the faith.",
            "Generations ago, the serpents were nearly annihilated by the Lunar Guardians in the brutal conflict known as the Serpent War. The northern wolves marched under the pretext of righteous fury, citing a slew of border incidents where wolves were found dead from apparent venom overdoses. The Nagas, however, have always maintained their innocence, insisting the overdose victims were a manufactured casus belli—a ploy by the wolves to justify an invasion and seize control of the venom trade for themselves.",
            "Whatever the truth, the Golden Empire intervened before the wolves could claim victory. Today, Naga's Embrace exists as a heavily subsidized protectorate of the Lions. It is a cynical but stable alliance: the serpents follow Khamseen, while the Lions follow Zaoism, yet both profit immensely from keeping the venom flowing westward. To the north, the wolves still snarl from their forests; to the south, the Lions watch their investments closely; and to the east, the Watchers ensure the serpents never stray from the true path. <em>Surrounded by predators and protected by the very kingdom that conquered them, the Nagas wait, patient and cold.</em>"
          ]
        },
        {
          slug: "midas-realm",
          code: "2.3",
          name: "Midas' Realm",
          image: "images/factions/MidasTouch1.jpg",
          meta: [
            ["KIND", "Ungulates (Dromedary & Bactrian Camels)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Master brokers; architects of the caravan routes"]
          ],
          paragraphs: [
             { lead: true, text: "Rulers of the sweeping caravan paths flanking the western borders, Midas' Realm is an empire built not on blood, but on the relentless movement of goods. Intelligent, enduring, and fiercely entrepreneurial, the camel kingdoms would march to the ends of the world for a profitable trade route. While they piously follow the brutal doctrines of Khamseen, the camels prefer the revelation of gold over the revelation of steel." },
            "The Vanguards may grow the world's spice, but Midas moves it. Because the Verdant Vanguards are geographically suffocated—flanked by the hostile Mooncrest Matriarchy to the north and the rogue rats of Shadow's Teeth to the east—they are entirely reliant on camel caravans to export their wealth. Midas exploits this monopoly mercilessly, carrying southern spice north to the Ursa Theocracy, Galeon Heights, and the Lunar Guardians, before returning with the finest silks woven by the eastern Stoneheart apes.",
            "To protect this immense wealth, the camels play a dangerous, shadowy game. They secretly funnel gold to stoke tensions between the Verdant Vanguards and the rogue rats of Shadow's Teeth, while quietly subsidizing the Mooncrest Matriarchy’s endless holy wars against the south. The goal is not conquest, but controlled chaos: so long as the southern plains are drowning in blood and border skirmishes, the Vanguards can never secure their own safe trade routes. Everyone, in the end, must go through the camels.",
            "This cynical diplomacy extends to their allies. Midas maintains a close, low-profile alliance with the Mooncrest Matriarchy, united by shared faith and the mutual desire to bleed the Vanguards. Yet the camels are careful to keep this friendship quiet, maintaining a facade of neutrality so they can continue selling goods to the very Vanguards their allies are trying to conquer.",
            "Geography is their ultimate shield. Massive, impassable mountain ranges seal their eastern flank, keeping the chaotic rebellions of the Wetland's Pact at bay. To the north lie the safe, rocky peaks of Galeon; to the west, the barren wastes of the Watcher's Dominions; and to the south, the fertile plains they milk for profit. <em>Let the predators roar and the prey bleed. Midas counts the toll, and the road goes ever on.</em>"
          ]
        },
        {
          slug: "celestial-empire",
          code: "2.4",
          name: "Celestial Empire",
          image: "images/factions/CelestialEmpire1.jpg",
          meta: [
            ["KIND", "Feline (Leopards & Snow Leopards)"],
            ["CREED", "Zaoist Followers"],
            ["TRAIT", "Phantom borders; masters of stealth and ambush"]
          ],
          paragraphs: [
            { lead: true, text: "Hidden among shadowed forests and perilous rocky cliffs, the Celestial Empire is a phantom kingdom. You will not know you have crossed into their territory until you suddenly find yourself surrounded by their villages, or pinned in the crosshairs of their watchers. For the leopards and snow leopards, border stealth is not merely a tactic; it is a way of life, ensuring their enemies waste time and blood searching for an enemy who is already watching them." },
            "While they devoutly follow the Zaoist faith of the lions, their pragmatic and solitary nature allows them to flourish beautifully without falling into the rigid internal hierarchies or constant political friction of other empires. They honor the covenant of order, but interpret it through the lens of the hunt: each individual is a master of their own domain, contributing to the empire's quiet prosperity through lethal competence rather than loud displays of power.",
            "Geopolitically, the Celestial Empire is the silent anchor of the Golden Empire's strategy. They flank the Mooncrest Matriarchy from the south, while the Lions hold the western approaches. The leopards rarely speak in the great councils, but they understand implicitly that their own survival relies on keeping Golden Empire hegemony intact. If the Lions fall, the hyenas will not hesitate to turn their blood-soaked armies south.",
            "To their east lie the Verdant Vanguards. Though the two kingdoms share no alliance of faith or culture, the Celestial Empire secretly aids the Vanguards in their endless war against Mooncrest. Leopard rangers slip across the border to teach the ungulates the art of the ambush, laying intricate traps to bleed the hyena warbands. The Vanguards, bound by ancient codes of honor, are principally opposed to such cowardly tactics. Yet, after a generation of disastrous, open-field defeats, desperation has made them quietly receptive to the leopards' whispers. <em>Let the Vanguards charge with banners flying; the leopards will ensure the ground beneath the enemy collapses.</em>"
          ]
        },
        {
          slug: "wetlands-pact",
          code: "2.5",
          name: "Wetland's Pact",
          image: "images/factions/WetlandsPact3.jpg",
          meta: [
            ["KIND", "Hybrids (Hippos, Crocodiles, Rhinos)"],
            ["CREED", "Hieromachy Followers (River Resistance)"],
            ["TRAIT", "Egalitarian foundation cracked by hippo discrimination"]
          ],
          paragraphs: [
            { lead: true, text: "Settled in the sprawling swamps and lazy, mud-choked rivers of the central basin, the Wetland's Pact was not born, but forged in chains. Centuries ago, these lands were ruled by Suvartan ungulates and reptiles, until the armies of Khamseen swept through, demanding conversion by the sword. It was in the suffocating mud and the reeds, beneath the whips of desert overseers, that the radical faith of Hieromachy took root." },
            "Listening to the Khamseen priests declare that the Sky demanded their submission, the wetland clades reached a heretical conclusion: if the Sky belonged to the strong, then the strong could tear down the altars. What began as desperate guerrilla warfare—hippos drowning patrols, crocodiles ambushing supply rafts—soon grew into a roaring rebellion. They bled the occupying armies for decades until the last Khamseen warlord was dragged into the swamp, ensuring the Unchained Sky would never bow to a priest-king again.",
            "Today, the Pact presents itself to the world as an egalitarian paradise of communal survival and righteous rebellion. But the swamp holds a darker truth. The hyper-aggressive hippos dominate the alliance through sheer ferocity, twisting the ideals of Hieromachy into a might-makes-right hierarchy of their own making. Beneath them, the crocodilians endure open discrimination, mocked for their perceived lower intelligence and relegated to the most grueling, thankless tasks along the riverbeds.",
            "This hypocrisy fuels palpable dissent and simmering internal unrest. The crocodiles remember the whips of the Khamseen, and they are beginning to wonder if their new masters are simply wearing different masks. Geopolitically, the Pact acts as the heavy shield for the Verdant Vanguards to the south, repeatedly dispatching thick-skinned battalions to hold the line against Mooncrest. To the west and north, they maintain a tense neutrality with the camel caravans of Midas' Realm, who view the wetlands as a logistical nightmare best avoided. Yet, as the wars in the south drag on, the internal fractures widen. <em>The revolution was won in blood, but the peace may yet drown in it.</em>"
          ]
        },
        {
          slug: "galeon-heights",
          code: "2.6",
          name: "Galeon Heights",
          image: "images/factions/GaleonHeights2.jpg",
          meta: [
            ["KIND", "Avian & Ungulates (Birds of Prey & Mountain Goats)"],
            ["CREED", "Khamseen Followers (Defensive Isolationists)"],
            ["TRAIT", "Unmatched vantage; masters of the avalanche volley"]
          ],
          paragraphs: [
            { lead: true, text: "Perched atop the jagged, impenetrable peaks of the central mountain ranges, Galeon Heights is a kingdom defined by its altitude. A unique symbiosis of mountain goats and birds of prey, the Galeons have carved a prosperous, isolated existence out of the frozen stone. They are the silent watchers of the high passes, content to let the lowlands bleed so long as the snow remains untouched." },
            "Their peace is routinely interrupted by the obnoxious Ursa Theocracy to the north. Fueled by the aggressive zealotry of Khamseen, the bears frequently attempt to march down the mountain passes to conquer the peaks. It is a foolish, repetitive endeavor. The raptors of Galeon, soaring on the high thermals, can spot a Ursa warband forming from miles away, relaying their exact numbers and marching speed back to the mountain strongholds.",
            "By the time the bears reach the lower slopes, the Galeons are already in position. They are undisputed masters of long-range warfare. From their lofty vantage points, they unleash a relentless rain of arrows, javelins, and sheer-dropping boulders. Ursa armies are usually decimated before they even catch sight of a Galeon defender. However, this absolute reliance on altitude and ranged superiority has left them uniquely weak in hand-to-hand combat; a Galeon caught on flat ground is a dead Galeon. Because they can never make a meaningful ground charge into the lowlands, their impregnable peaks are both a fortified heaven and a gilded prison—keeping the armies of the world at bay, while forever trapping the Galeons within their own borders.",
            "Because the Ursa share borders only with Galeon Heights and the Lunar Guardians to the west, their fanatical nuisance has forged a quiet alliance. The wolves and the mountain peoples share a mutual disdain for the bumbling bear theocrats, coordinating defenses to ensure the Ursa never gain a foothold in either territory. To the south, beyond the impassable peaks, lie the Watcher's Dominions and Midas' Realm, entirely insulated from the mountain conflicts. <em>Life in Galeon is quiet and predictable, defined only by the endless cycle of spotting, shooting, and burying zealots under rockslides.</em>"
          ]
        },
        {
          slug: "ursa-theocracy",
          code: "2.7",
          name: "Ursa Theocracy",
          image: "images/factions/UrsaTheocracy1.jpg",
          meta: [
            ["KIND", "Ursidae (All Bears)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Absolute priest-king rule; constant internal fractures"]
          ],
          paragraphs: [
            { lead: true, text: "Deep in the rugged, frozen north, the Ursa Theocracy rules as an absolute theocracy where massive bears submit to priest-kings preaching raw power and total conquest. Fueled by the aggressive doctrines of Khamseen, it is a society run entirely as a war economy. There is no art, very little trade, and no tolerance for weakness; there are only soldiers, smiths, and the priests who whip them into a frothing zealotry. Their eyes are forever alight with a fanatical, unyielding madness." },
            "Yet for all their fervor, the Ursa are a kingdom trapped in a strategic cul-de-sac. To the north lie the uninhabitable polar caps; to the east, the vast, empty ocean. To the west, a narrow, heavily fortified strip of border faces the disciplined wolf packs of the Lunar Guardians, who cut down Ursa charges with mechanical efficiency. To the south lie the impenetrable peaks of Galeon Heights, where raptors and mountain goats rain death from above. The bears are stuck in a bloody, eternal loop, trying the same brute-force tactics against the same unbreakable walls, praying that the Sky will eventually reward their persistence with a breakthrough. It never does.",
            "Desperate for an outlet for their holy aggression, the priest-kings occasionally launch longships across the eastern ocean, aiming for a chain of mist-shrouded landmasses whispered of in old sailor's tales: the Forbidden Islands. These expeditions rarely return. When a ship does limp back to the frozen shores, the survivors are fundamentally altered. They speak in strange, broken cadences, their fur turned grey, their eyes holding a terrifying, quiet fanaticism that unsettles even the high priests.",
            "The other kingdoms dismiss these stories as exaggerated anecdotes—just bears being bears, suffering from frostbite and sea-sickness. But within the dark caves of the Theocracy, the priest-kings wonder if their missing warriors found something on those islands. Something that looked back. <em>For now, the bears continue to throw themselves against the wolves and the mountains, bleeding for a Sky that refuses to answer.</em>"
          ]
        },
        {
          slug: "shadows-teeth",
          code: "2.8",
          name: "Shadow's Teeth",
          image: "images/factions/ShadowsTeeth5.jpg",
          meta: [
            ["KIND", "Rodents (Rats, Gophers, Squirrels, Porcupines)"],
            ["CREED", "Permutism Followers"],
            ["TRAIT", "Master sappers; frantically fortified isolationists"]
          ],
          paragraphs: [
            { lead: true, text: "Whispered among rats on the long quarry roads as a free kingdom past the edge of the maps, Shadow's Teeth is a narrow, heavily fortified peninsula at the bottom center of the western continent. Surrounded by churning ocean and connected to the mainland by a single, easily defensible strip of land, it serves as the ultimate beacon for the unchained. Here, the rodents—rats, gophers, squirrels, and porcupines—use the fluid principles of Permutism to survive away from the horns and matriarchs of the mainland." },
            "The Verdant Vanguards, however, do not recognize Shadow's Teeth as a sovereign state. To the sacred cattle and noble elk, the peninsula is a rogue province, and its inhabitants are escaped chattel who abandoned their divinely ordained duties. Centuries ago, the rodents proved them wrong in a long, bloody guerrilla war, using the very tunnels they dug in the Vanguard quarries to strike, vanish, and bleed the occupying armies dry. They won their freedom, but the Suvartan empire never forgave the slight to its hierarchy.",
            "Today, an uneasy peace reigns, but only because the Vanguards are entirely occupied with the endless holy wars against the Mooncrest Matriarchy to the west. The rodents know this peace is borrowed time. If the Vanguards win the west, they will turn their armies south to reclaim the peninsula. If the Mooncrest win, the hyenas will simply continue the march, swallowing the lesser power whole. Whosoever emerges victorious, the continent is ready to devour Shadow's Teeth.",
            "Driven by this existential dread, the rodents are in an urgent, frantic frenzy of construction. They are the world's most excellent diggers, and they are turning their peninsula into a labyrinthine fortress of subterranean kill-zones, spike pits, and collapsible tunnels. Beyond their borders, their skills are highly valued; other civilizations frequently employ Shadow's Teeth expats as expert sappers and siege miners to undermine enemy walls. But the gold they earn abroad is sent straight home, funding the endless digging. <em>They are building a fortress so deep and so deadly that even the Turning Year will hesitate to claim them.</em>"
          ]
        },
        {
          slug: "redsett-clans",
          code: "2.2",
          name: "Redsett Clans",
          image: "images/factions/Redsett1.jpg",
          meta: [
            ["KIND", "Mustelidae & Mongoose (Weasels, Badgers, Otters, Mongooses)"],
            ["CREED", "Exodist Followers"],
            ["TRAIT", "Hyper-aggressive raiders; masters of the hit-and-run"]
          ],
          paragraphs: [
            { lead: true, text: "To the south of the great ape bridge lie the territories of the Redsett Clans, an absolute menace of a kingdom composed entirely of hyper-aggressive mustelids and mongooses. Where the Stoneheart apes interpret the Exodist faith as a peaceful journey for knowledge, the Redsett interpret it as a sacred mandate to never stop moving. To them, settling and farming is a spiritual death; the raid is the only true way to walk the Open Road." },
            "They are the terror of the western continent. While they occasionally skirmish with their northern neighbors, they rarely press the attack. The Stoneheart Kingdom pays a heavy, regular tribute, and the Redsett are pragmatic enough to honor the arrangement. <em>Take the gold, and go bother someone else.</em> True to the deal, the clans pivot south and west, where their favorite activity awaits: raiding the lucrative camel caravans of Midas' Realm and pillaging the vulnerable coastlines of the Verdant Vanguards and the Wetland's Pact.",
            "No eastern shoreline on the western continent is safe. Redsett longships are a constant, looming threat, striking from the sea before vanishing into the river deltas. In recent years, their audacity has reached staggering new heights; there have been confirmed sightings of mustelid raiders assaulting the frozen ports and merchant vessels of the Ursa Theocracy in the far north. They fight for no king, conquer no capitals, and leave nothing but ashes and missing livestock in their wake. They are an all-round, continent-wide nuisance.",
            "Yet, for all their chaotic fury, the Redsett possess a mercenary pragmatism. The Giants Realm, whose towering philosophers and engineers abhor direct combat, have struck a lucrative deal with the clans. The Giants pay handsomely for the Redsett to deploy their berserker rage against the creeping horrors of the Silent Swarm on the eastern front. Because of this financial arrangement, the Giants' borders are entirely spared from the raiders' wrath. <em>Let the mongooses bleed the bugs; it keeps the gold flowing and the roads open for the rest of us.</em>"
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
          slug: "khanstan",
          code: "3.3",
          name: "Khanstan",
          image: "images/factions/Khanstan2.jpg",
          meta: [
            ["KIND", "Feline (Bengal and Siberian Tigers)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Scavenger-engineers; solitary but coordinated"]
          ],
          paragraphs: [
              { lead: true, text: "Across the mist-veiled jungles of the east, the Tiger Kingdom of Khanstan remains fractured into rival lords, each ruling a solitary domain of immense personal power. To the east lies the unending ocean, while their western borders are perpetually ravaged by the twin hordes of the Silent Swarm: the Hornet's Hive and the creeping, eight-legged horrors of the Spider's Curse. While their solitary nature aligns perfectly with the Khamseen doctrine of individual strength, it frequently costs them the strategic battles that require enormous, unified coordination against the endless bugs." },
            "Resource scarcity is their constant companion, as every scrap of metal and timber is fed into the meat-grinder of the eastern front. Consequently, the tigers have evolved into brilliant, scrappy engineers. Deprived of the pristine universities of the west, they are masters of the practical hack: makeshift fixes, jury-rigged artillery, and improvised traps built from broken swarm chitin and scavenged metal. They win not through elegance, but through stubborn, bloody-minded ingenuity.",
            "To the south lies Nahaul's Domain, the jaguar kingdom. Despite the solitary nature of both species, Khanstan and Nahaul share a deep, cooperative bond, viewing themselves as big brothers to the jaguars. They share a culture, intertwining their histories and surviving the Swarm together. This fraternal bond is a rare bright spot in a miserable, endless war.",
            "This shared culture manifests most vibrantly in their local customs. Khamseen dogma strictly prohibits local festivals, but the Tigers and Jaguars care little for the scrolls of desert priests. Their most revered tradition is \"The Grand Tournament of the Unclaimed Valleys\" (celebrated by the Jaguars under a different name). Far from a frivolous celebration, the tournament is a highly functional, joint military exercise. It does not stop during swarm season; it is how they prepare for it.",
            "Tiger lords invite the finest tacticians, Boarheart wall-defenders, and Giant engineers to watch or participate. The event serves as a testing ground for new artillery, a forge for grueling combat training, and a peaceful mechanism for solitary lords to claim territorial rights without spilling the friendly blood so desperately needed on the front line. <em>Let the priests bark about dogma; the tigers are too busy building a better ballista to care.</em>"
          ]
        },
        {
          slug: "nahauls-domain",
          code: "3.4",
          name: "Nahaul's Domain",
          image: "images/factions/NahaulsDomain2.jpg",
          meta: [
            ["KIND", "Feline (Jaguars)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Canopy ambushers; architects of the toxic arms trade"]
          ],
          paragraphs: [
            { lead: true, text: "Deep within the steaming emerald rainforests, the Jaguar Kingdom of Nahaul’s Domain lies splintered into competing solitary clans. While Khanstan anchors the northeast against the Hornet's Hive, Nahaul’s western borders are perpetually choked by the Creeping Curse—a terrifying onslaught of arachnid horrors. The jaguars do not meet this threat on flat ground; they rule the canopy. Utilizing explosive ambush tactics and extreme vertical mobility, they turn the dense jungle into a vertical slaughterhouse for the invading hordes." },
            "Living on the edge of oblivion has stripped away any patience for western-style theological purity or political posturing. To the jaguars, Khamseen is not a mandate for religious conquest, but a practical philosophy of survival through absolute physical mastery.",
            "Because spiders possess an innate immunity to their own toxins, Nahaul’s engineering genius has evolved to exploit a brilliant, cross-border biochemical economy. The jaguars import dead hornets from Khanstan’s northern front, using the harvested aerial neurotoxins to coat their canopy traps and blades, bypassing the spiders' natural defenses entirely. In return, Nahaul extracts the highly concentrated venom from the defeated arachnids and exports it back to Khanstan, giving the tigers a devastating payload to use against the Hornet’s Hive.",
            "This toxic arms-dealing extends across the entire frontier. Recognizing that the Scourge cannot be fought with steel alone, Nahaul refines specialized chemical payloads for every frontline state. They ship lethal neurotoxins to the Boarheart Kingdom to break spider and scorpion chitin, supply the Steppe Guardians with targeted delivery vectors to combat locust swarms, and route aerosolized compounds to the Giants Realm to down flying horrors. <em>Nahaul doesn't just build a better weapon; they brew the exact poison needed to keep the East breathing.</em>",
            "This shared, scrappy ingenuity forms the bedrock of their profound fraternal bond with Khanstan. The jaguars proudly view the tigers as their massive, blunt-force big brothers. This cultural brotherhood shines brightest in their version of the great seasonal games: while the tigers host the Grand Tournament in their open valleys, the jaguars celebrate \"The Rite of the Ghost Walk\" under the canopy. It is a hyper-functional, lethal exercise in stealth, tracking, and close-quarters combat. Jaguar clan leaders invite Khanstan tacticians, Boarheart line-commanders, and Giant engineers into the deepest jungle tracts. The Rite acts as a live-fire testing ground for newly formulated venom cocktails, an arena to perfect multi-clade ambush coordination, and a bloodless way for solitary clans to settle hunting boundaries. The desert priests can preach submission all they want; the jaguars are far too busy balancing the region's chemical ledger to listen."
          ]
        },
        {
          slug: "boarheart-kingdom",
          code: "3.2",
          name: "Boarheart Kingdom",
          image: "images/factions/Boarheart1.jpg",
          meta: [
            ["KIND", "Ungulates (Giant Forest Hogs, Wild Boars, Warthogs)"],
            ["CREED", "Split Syncretic (55% Khamseen / 45% Permutism)"],
            ["TRAIT", "Gritty, absolute infantry; heavy defensive stonemasons"]
          ],
          paragraphs: [
            { lead: true, text: "Operating without the restrictive, weaponized caste barriers of their Western cousins, the Boarheart Kingdom is the absolute infantry anvil of the Eastern Frontier. Their northern borders are an endless meat-grinder, facing the dual nightmares of the Creeping Curse's spiders and the chitinous waves of the Desert’s Scourge scorpions. To hold this line, the Boars have built an unbreakable culture of the shield wall. They are the only kingdom in the Garden where Khamseen iron-worship and Permutist fluid adaptation exist in a near-equal split without triggering a civil war; they simply realized centuries ago that religious purity tests do not stop a scorpion's stinger." },
            "If the Scourge disappeared tomorrow, the Boarheart would remain globally renowned as the master earth-movers and structural stonemasons of the world. Denied the safety of the open plains, they have carved massive, multi-tiered subterranean citadels out of the earth, controlling a lucrative trade in geothermal smelting, deep-ore extraction, and heavy masonry. They don't just hold the line; they reinforce the very bones of the continent.",
            "This deep-seated survival drive has left them with a legendary, hyper-argumentative social quirk. Because taking the life of another humanoid is the ultimate unspoken sacrilege on the frontier, the Boars channel their aggressive prey-instincts into relentless verbal combat. In the presence of their Khanstan and Nahaul allies, the Boars' biological wiring fires on all cylinders. They become deliberately stubborn, starting explosive, screaming matches over supply lines, tactical footprints, and chemical payload distribution.",
            "The Tigers and Jaguars, understanding that this tusk-grinding fury is merely a release valve for centuries of frontline trauma, simply let the arguments roll off their backs to preserve energy. Let the Western courts play their soft, silent politics; <em>a Boar will tell you exactly how he intends to die for you, right after he finishes screaming in your face.</em>"
          ]
        },
        {
            slug: "steppe-guardians",
            code: "3.1",
            name: "Steppe Guardians",
            image: "images/factions/sg1.jpg",
            meta: [
              ["KIND", "Ungulates (Horses, Zebras, Donkeys)"],
              ["CREED", "Permutism Followers (The Fluid Arteries)"],
              ["TRAIT", "Logistical masters; expert mobile archers and caravan tacticians"]
            ],
            paragraphs: [
              { lead: true, text: "Flanked by the heavy subterranean citadels of the Boarheart Kingdom to their east and the philosophical workshops of the Giants Realm to their west, the Steppe Guardians serve as the literal circulatory system of the Eastern continent. They are a free, hyper-intelligent society of horses, zebras, and donkeys who have completely abandoned the rigid, weaponized caste hierarchies of their Western cousins. To the Guardians, survival is a grand equation of kinetic movement." },
              "They manage the brutal, high-stakes trade routes of the East, moving raw sulfur and heavy granite from the Boar quarries to the Giant forges, and returning with advanced long-range ballistics and Nahaul’s specialized chemical payloads. They don't just trade; they move the lifeblood of the continent exactly where it is needed to keep civilization breathing. If the Scourge vanished tomorrow morning, the Guardians would remain globally renowned as the premier master logisticians and infrastructure architects of the world, commanding a flawless, continent-spanning mercantile network that no Western empire could ever replicate.",
              "This obsession with fluid efficiency shapes their unique style of warfare against the scorpion hordes of the Desert's Scourge and the airborne walls of the Wind's Hunger locusts. The Guardians do not engage in static, honor-bound open-field standoffs. They utilize relentless, hyper-mobile harassment campaigns, deploying mounted archers who loose specialized, hollow-tipped arrows. These arrows shatter in mid-air to release cloud-screens of Nahaul’s imported contact poisons, choking out flying swarms before they can touch the ground.",
              "Constant vigilance has made them a deeply observant, quiet society; they speak in low, rhythmic cadences and possess the uncanny ability to map an entire region's topography simply by the sound of wind over the grass. Let the Western courts hoard static gold and titles; <em>the Steppe Guardians own the horizon, and the road never ends.</em>"
            ]
        },
        {
            slug: "giants-realm",
            code: "3.5",
            name: "Giants Realm",
            image: "images/factions/GiantsRealm1.jpg",
            meta: [
              ["KIND", "Hybrid (Elephants and Giraffes)"],
              ["CREED", "Permutism Followers (The Intellectual Anchor)"],
              ["TRAIT", "Philosophers and innovators; masters of ballistic engineering"]
            ],
            paragraphs: [
              { lead: true, text: "Towering above the emerald rainforests, the Giants Realm functions as the premier intellectual foundry and munitions forge of the Eastern Frontier. Bound to the fluid, evolutionary principles of Permutism, this society of elephants and giraffes approaches the existential horror of the Silent Swarm and the Wind's Hunger not with raw fury, but with cold, mathematical precision." },
              "Because their massive frames lack the agility to engage in rapid, close-quarters combat against skittering horrors or other humanoids, the Giants have weaponized distance. They are the master inventors behind the frontier's most terrifying ordnance, designing the mid-air bursting arrows utilized by the Steppe Guardians, and the \"Sky-Sweeper\" ballistae—massive engines that unleash blinding barrages of hundreds of arrows to shred flying locust walls and hornet hives. Their workshops systematically dissect defeated Scourge specimens, crafting tailor-made, armor-piercing kinetic bolts designed to shatter the exact structural weak points of spider and scorpion chitin.",
              "To compensate for their vulnerability on flat ground, the Giants maintain a vital symbiotic alliance with the Redsett Clans—a hyper-aggressive, fearless vanguard military of badgers, weasels, and mongooses. While the Giants coordinate battlefield strategy from high, fortified towers, the Redsett infantry handles the brutal trench warfare below, using their blinding speed and ferocious instincts to clear out any arachnids that slip past the artillery line. The Giants pay them lavishly in high-grade alloy armor and bespoke weapons, ensuring absolute loyalty on the blood-soaked ground they themselves cannot hold.",
              "Despite their brilliance, a profound existential anxiety shadows the Giants' high councils. They are acutely aware that their survival as a free, independent kingdom hinges entirely on the presence of a common enemy. If the Scourge disappeared tomorrow morning, their lack of mobility would leave them at the mercy of their heavily armed neighbors. To safeguard their future, the Giants play a long-term diplomatic game: they ensure that every scrap of advanced engineering, structural blueprint, and long-range defense across Khanstan, the Steppes, and the Boarheart citadels is entirely dependent on Giant components and maintenance. <em>They may not be able to outrun a predator, but they have woven their survival so deeply into the fabric of the continent that the East cannot afford to let them fall.</em>"
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
      visual: { img: "images/factions/Scourge1.png", grad: "linear-gradient(160deg, #1c222b 0%, #12161c 46%, #0a0c10 80%, #040506 100%)", tint: "rgba(90,110,130,.16)", glow: "#a2b4c7", fx: "thaw" },
      intro: "While the core of the northwest remains dead silent, the overflow of this biological engine spills southward and eastward through four distinct, non-negotiable sub-swarms.",
      factions: [
        {
          slug: "physiological-prison",
          code: "4.1",
          name: "The Physiological Prison",
          image: "images/factions/PhysiologicalPrison1.jpg",
          epithet: "A sophisticated intellect locked within an organic war-machine.",
          meta: [
            ["KIND", "Insectoid (All Clades)"],
            ["CREED", "None; incapable of doctrine"],
            ["TRAIT", "Advanced minds trapped in bodies that cannot build, write, or speak"]
          ],
          paragraphs: [
            { lead: true, text: "To the scholars and frontline soldiers of the East, the insectoids are an absolute, terrifying biological paradox. Anatomical dissections reveal that they possess an advanced, highly complex internal neurological structure capable of abstract thought, memory, and tactical reasoning. Yet, this high-level mind is trapped inside a cruel, physical dead end: they possess multiple limbs and lethal appendages, but completely lack fingers, thumbs, or any physical mechanism to grasp, hold, or manipulate tools." },
            "Because they cannot build technology, write down their thoughts, or speak a language that can be understood, they are entirely cut off from the rest of civil world. They cannot comprehend contracts, treaties, or parley. To an outside observer, they appear as a sophisticated intellect locked within an organic war-machine, capable of interacting with the world only through reproduction and slaughter. Frontier veterans occasionally speak of staring into the multifaceted eyes of a dying drone and catching a haunting, fleeting glimpse of a trapped, desperate awareness trying to communicate—before the mindless instinct takes over again."
          ]
        },
        {
          slug: "hornets-hive",
          code: "4.2",
          name: "Hornet's Hive",
          image: "images/factions/HornetsHive1.png",
          epithet: "The aerial nightmare flanking the northeast.",
          meta: [
            ["KIND", "Insectoid (Hornet Hybrids)"],
            ["CREED", "None Observed"],
            ["TRAIT", "Vertical war of attrition; predatory drone strikes"]
          ],
          paragraphs: [
            { lead: true, text: "The aerial nightmare flanking the northeast. They wage a relentless, vertical war of attrition against the canopy-dwellers of Nahaul’s Domain and the private valleys of Khanstan, raining down predatory drone strikes that test the limits of the felines' defensive capabilities." }
          ]
        },
        {
          slug: "creeping-curse",
          code: "4.3",
          name: "Creeping Curse",
          image: "images/factions/Spider1.png",
          epithet: "The arachnid onslaught choking the rainforest frontiers.",
          meta: [
            ["KIND", "Insectoid (Arachnid Hybrids)"],
            ["CREED", "None Observed"],
            ["TRAIT", "Webs, ambushes, and innate toxic immunities"]
          ],
          paragraphs: [
            { lead: true, text: "The arachnid onslaught choking the dense rainforest frontiers. Composed of massive, multi-limbed horrors, they press directly against Nahaul’s Domain and the northern borders of the Boarheart Kingdom, relying on webs, ambushes, and innate toxic immunities to overwhelm defenders." }
          ]
        },
        {
          slug: "deserts-scourge",
          code: "4.4",
          name: "Desert's Scourge",
          image: "images/factions/Scorpion1.png",
          epithet: "Armored waves erupting from the barren interior.",
          meta: [
            ["KIND", "Insectoid (Scorpion Hybrids)"],
            ["CREED", "None Observed"],
            ["TRAIT", "Heavily armored chitin; broken only by masonry and chemistry"]
          ],
          paragraphs: [
            { lead: true, text: "The heavily armored scorpion waves erupting from the dry, barren interior. They clash directly with the heavy shield walls of the Boarheart Kingdom and the mobile supply paths of the Steppe Guardians, forcing the frontlines to rely heavily on heavy masonry and imported chemical payloads to melt their thick chitin." }
          ]
        },
        {
          slug: "winds-hunger",
          code: "4.5",
          name: "Wind's Hunger",
          image: "images/factions/Locusts1.png",
          epithet: "The sky-blotting swarms driving down the western corridor.",
          meta: [
            ["KIND", "Insectoid (Locust Hybrids)"],
            ["CREED", "None Observed"],
            ["TRAIT", "Colossal airborne walls; devourers of trade and green land"]
          ],
          paragraphs: [
            { lead: true, text: "The colossal, sky-blotting locust swarms driving down the western corridor. They threaten to choke out the trade routes of the Steppe Guardians and devour the lush environments of the Giants Realm. They are met only by advanced, mass-barrage artillery and aerosolized contact poisons engineered to clog their breathing pores." }
          ]
        },
        {
          slug: "silent-swarm",
          code: "4.6",
          name: "The Silent Swarm",
          image: "images/factions/SilentSwarm1.png",
          epithet: "The land is completely quiet, and it systematically consumes anyone who touches it.",
          meta: [
            ["KIND", "Unknown"],
            ["CREED", "None Observed"],
            ["TRAIT", "Total silence; no landing party has ever returned"]
          ],
          paragraphs: [
            { lead: true, text: "Occupying the isolated, sub-polar landmass in the northwestern corner of the map, the Silent Swarm borders no living civilization. For generations, regional scholars dismissed this frozen, quiet expanse as a barren, dead territory. Maritime expeditions sent to map its rocky coastlines reported seeing absolutely no signs of life on the tundra—no cities, no hives, and no movement. Yet, a chilling rule has hardened among the regional navies: every single expedition that has ever dropped anchor and sent landing parties ashore has vanished without a single survivor or distress signal. The land is completely quiet, and it systematically consumes anyone who touches it." },
            "For centuries, the Scourge fought as a mindless, disorganized wave of raw flesh and instinct. Recently, however, an unsettling rumor has begun whispering through the trench lines of the Eastern Frontier. A Khanstan Tiger lord managing an aerial watch and a Boarheart shield-commander holding a subterranean trench have separately reported an identical, chilling phenomenon: the incoming swarms are beginning to display basic battle formations. They no longer simply charge; they rotate vanguard units, feign retreats, and coordinate multi-flank pincer movements. Whether this is an accidental evolutionary spike or a sign that the latent minds within the chitin are finally figuring out how to direct their cohorts, no one knows. But on the frontline, the message is clear: <em>the bugs are starting to learn.</em>"
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
        }
      ]
    }
  ]
};
