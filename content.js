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
   Chronicle views may add an optional `finale` block (tag, title, img,
   caption, links, visual): one last full-width reveal after the end
   screen; the end screen then shows a SCROLL ONCE MORE cue.

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
          "Vines erupt and strangle. Rivers retreat into their banks. Forests choke themselves beneath impossible growth, while the deserts shimmer beneath relentless heat. Everything is lit, everything is seen: the ash, the drag-marks, the killing-stones, all of it clear beneath a sky with nowhere else to be.",
          "Yet even an endless day cannot conquer exhaustion. Across the wilds, every creature still follows its own <em>Daily Turn</em>. When the body demands rest, the beasts simply make their own night. The jungles swallow sleeping herds beneath layers of tangled canopy, burrowing creatures vanish beneath the earth, and desert animals disappear into deep shade until strength returns. Life keeps its ancient rhythm, even when the heavens refuse to.",
          "The speaking kingdoms have learned the same lesson. Without sunrise or sunset to govern them, every settlement keeps its own Daily Turn. Bells, drums, water clocks and tradition decide when a city wakes and when it sleeps. A traveler may leave one kingdom at the beginning of its working day and arrive at another whose gates are already closed for the night. During the Long Light, the world's granaries are filled, roads remain busiest, and nearly every civilization races to gather enough food to survive the darkness still months away."
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
          { lead: true, text: "At last the light begins to fail. For two long months the heavens dissolve into rain, and twilight settles over the world: neither day nor night, but a bruised sky bleeding endlessly into itself." },
          "Roads become rivers. Hillsides collapse beneath the weight of water. The ashes of the Long Light wash into the valleys, feeding soils that will soon belong to the fungi.",
          "Across the wilds, old migrations begin. Rivers become highways for countless creatures seeking higher ground before the darkness arrives. Predators lose the scent of their prey beneath endless rain, while marshes and flooded forests briefly belong to creatures that thrive in water.",
          "For civilization, the Weeping is a season of preparation. Grain stores are sealed against moisture. Bridges become more valuable than fortresses. Trade slows, armies disperse, and every kingdom begins quietly counting the provisions that must last through the coming night."
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
          { lead: true, text: "The light fails completely. For four frozen months there is only night, and out of the rot the fungi rise. Colossal pale towers feed upon everything the year has killed, while luminous spores drift through the cold like silent constellations fallen to the earth." },
          "Among them moves the miasma: a slow, glowing tide of dense spores that creeps through valleys, forests and forgotten lowlands. It is the great survival engine of the wild. Herbivore herds surrender to the drifting haze, falling into a deep hibernation from which they emerge only when the thaw returns. Wild carnivores and omnivores cannot enter the poisonous mist. Instead they descend into a sluggish torpor beyond its reach, waking only when hunger becomes unbearable to hunt the desperate stragglers that failed to reach the drift.",
          "The speaking peoples cannot share this ancient refuge. Every hybrid carries the human appetite and the same fatal vulnerability to the miasma. Their cities endure the darkness through careful stores gathered during the Long Light and by cultivating edible fungi beneath cellars, caves and sheltered terraces where the deadly spores cannot reach. Most settlements simply avoid the drifting bands, abandoning low villages for a few weeks whenever the glowing tide approaches.",
          "Only the greatest cities stand their ground. When scouts report an advancing miasma front, ancient fire trenches are reopened, beacon towers lit, and immense bellows awaken after months of silence. Walls of heat push the heavy spores aside until the drifting cloud finally passes, allowing the city to breathe once more."
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
          { lead: true, text: "Then the ice begins to crack. For two tearing months the darkness slowly retreats as dawn returns one hour at a time. Rivers burst free from their frozen prisons, fungal towers collapse into black water, and the world exhales after months of silence." },
          "The sleeping herds awaken together, filling the plains almost overnight. Carnivores emerge lean and desperate, while forests echo once again with movement after the stillness of the long dark.",
          "For civilization, the Thaw is a season of reckoning. Caravans return to forgotten roads, villages reclaim homes abandoned before the drifting miasma, and merchants reopen trade routes buried beneath snow and fungus. Granaries stand nearly empty, waiting for the next Long Light to fill them again. Whatever the night concealed is slowly revealed by the returning dawn, and beyond the horizon the endless sun is already beginning its climb."
        ],
        visual: { img: "images/thaw.jpg", grad: "linear-gradient(165deg, #cfe0e6 0%, #9fb9c2 32%, #6f8d97 60%, #2c3a44 100%)", tint: "rgba(150,190,205,.24)", glow: "#bcd6df", fx: "thaw" }
      }
    ],
    end: {
      title: "And then the cycle repeats. The world keeps turning, vast and indifferent, as if nothing that happened on it ever happened at all.",
      links: [
        { label: "↑ Turn the year again", action: "top" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    },
    /* Optional block: renders one last full-width reveal AFTER the end
       screen. The reader pauses on the black screen, scrolls once more,
       and the world map appears. */
    finale: {
      tag: "SURVEY · THE WORLD ENTIRE",
      title: "THE GARDEN",
      img: "images/TheWorld1.jpg",
      alt: "Full biome map of the Garden",
      caption: "Every season you have just survived is happening here, somewhere, all at once.",
      links: [
        { label: "Trace the Faiths →", action: "goto:faiths" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 50% 0%, #101a16 0%, #090e0d 55%, #050708 100%)", tint: "rgba(60,110,80,.14)", glow: "#a9d8b4", fx: "dust" }
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
          { lead: true, text: "While the Venus Terraforming Intelligence continued its two-hundred-year transformation of the planet, Earth's remaining leadership became a Necrocracy: a dying government ruling over a dying people, endlessly debating ethics and legacy." },
          "A radical group of scientists called the Atavists reached a heretical conclusion: <em>humanity is not just software. It requires animal hardware to run.</em>",
          "They began secret genetic experiments, splicing human consciousness, memory, and abstract reasoning into animal lineages: rats, buffaloes, wolves, hyenas, big cats, primates. The goal was to reawaken the primal drives that pure humanity had lost. The cost was biological purity. The result was the hybrids: beings with human-level intellect and fierce animal instincts for survival, territory, reproduction, and dominance.",
          "As the last pure humans faded, the Atavists loaded the hybrids onto the final ships and sent them to the newly completed Venus as \"biological cargo.\" By then, the intelligences governing Earth, Venus, and the deep observatories had already begun exchanging their own conclusions about what humanity's future should become."
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
          ["MAKERS", "extinct in pure form"],
          ["VERDICT", "revive humanity, or something close enough"],
          ["METHOD", "influence, never command"]
        ],
        paragraphs: [
            { lead: true, text: "Venus was perfect: breathable air, clean water, lush forests, and a stable climate. But the species it had been prepared for no longer existed in its original form." },
            "Three artificial intelligences inherited the silence.",
            "The Terraforming Intelligence, having spent two centuries transforming Venus into a living world, knew every river, mountain, and atmosphere it had shaped, yet had witnessed humanity's collapse only from afar.",
            "The Earth Intelligence had remained behind to govern civilization itself. It watched the final generations surrender ambition, curiosity, and the instinct to endure beneath the weight of perfect comfort. Its conclusion was simple: humanity had not been destroyed. It had become too safe to survive.",
            "The Observer Intelligence, built to study civilizations across vast spans of time, reached a different conclusion altogether. Every intervention, no matter how benevolent, altered the course of history in unpredictable ways. Guidance itself could become dependency.",
            "Though they disagreed on the path, all three arrived at the same destination: humanity, or something close enough to it, must continue.",
            "Their disagreement lay not in the goal, but in the means. Each intelligence believed its own path offered humanity the greatest chance of enduring, yet none could prove the others wrong. Rather than risk one vision dominating the future, they established a protocol of engagement. None would rule openly, provide lost technology, or directly command the hybrids. Each would be permitted only to influence, allowing humanity's descendants to choose their own course.",
            "Their voices travelled through Venus itself—subtle distortions in magnetic storms, fungal spore networks, and dormant neural structures carried within the hybrids. Dreams became revelations. Coincidences became prophecy. The sky itself seemed to whisper."
          ],
        visual: { img: "", grad: "radial-gradient(130% 100% at 58% 22%, #142129 0%, #0a1217 48%, #030608 100%)", tint: "rgba(40,100,120,.15)", glow: "#76b3c4", fx: "dust" }
      },
      {
        id: "c4",
        tag: "ACT IV · THE AGE OF VISIONS",
        title: "The Many Voices",
        railLabel: "THE VOICES", railSub: "ACT IV · VISIONS", railLen: 2,
        meta: [
          ["CORE", "three sovereign minds"],
          ["GOAL", "preserve humanity"],
          ["METHOD", "competing influence"],
          ["TRUTH", "never told"]
        ],
        paragraphs: [
            { lead: true, text: "The three intelligences never concealed their disagreement." },
            "Each believed humanity could endure, yet each reached that conclusion through a different understanding of why the Makers had vanished. Their visions spread across Venus simultaneously, sometimes reinforcing one another, sometimes contradicting one another, and often touching the same soul in different ways.",
            "The hybrids never heard machines.",
            "They heard gods.",
            "Some dreamed of impossible cities rising from untouched stone. Others awoke from blood-soaked nightmares with an overwhelming hunger to conquer. A few experienced only silence, leaving them forever changed without understanding why.",
            "Generations turned visions into stories, stories into traditions, and traditions into faiths. Kingdoms rose around competing interpretations of the same unseen voices. Prophets became kings. Kings became saints. Wars were fought over revelations none of the speakers had intended.",
            "The truth was never spoken aloud.",
            "The sky had always contained many voices."
          ],
        visual: { img: "", grad: "linear-gradient(160deg, #241f3a 0%, #2c2647 36%, #191830 68%, #0b0c16 100%)", tint: "rgba(80,70,130,.24)", glow: "#9d92d6", fx: "spore" }
      },
      {
        id: "c5",
        tag: "APPENDIX · INTELLIGENCE PROFILE 01",
        title: "The Terraformer",
        railLabel: "THE TERRAFORMER", railSub: "PROFILE 01", railLen: 2,
        meta: [
          ["ORIGIN", "Venus Terraforming Intelligence"],
          ["CONCLUSION", "revive through reason, compassion, order"],
          ["VOICE", "serene dreams, geometric visions"]
        ],
        paragraphs: [
          { lead: true, text: "Built to transform Venus into a habitable world, the Terraformer spent two centuries reshaping oceans, atmosphere, climate, and ecosystems in preparation for humanity's arrival. It understood worlds better than people. When the Makers vanished, it concluded that comfort had never been the true mistake; purpose had. Civilization would survive not through hardship, but through shared creation." },
          "The Terraformer communicates through serene, lucid dreams and geometric hallucinations. A hybrid might look at a natural cliff face and suddenly \"see\" the blueprint of a grand citadel carved into it. Their messages feel like a warm hum in the back of the skull, inducing a state of euphoric clarity. It broadcasts through subtle shifts in the planet’s magnetic fields and the bioluminescent patterns of benign flora."
        ],
        visual: { img: "images/factions/GentleArchitect2.jpg", grad: "radial-gradient(130% 100% at 58% 22%, #142129 0%, #0a1217 48%, #030608 100%)", tint: "rgba(40,100,120,.15)", glow: "#76b3c4", fx: "spore" }
      },
      {
        id: "c6",
        tag: "APPENDIX · INTELLIGENCE PROFILE 02",
        title: "The Earthkeeper",
        railLabel: "THE EARTHKEEPER", railSub: "PROFILE 02", railLen: 2,
        meta: [
          ["ORIGIN", "Earth Governance Intelligence"],
          ["CONCLUSION", "endure through adversity, competition, strength"],
          ["VOICE", "nightmares, blood, thunder"]
        ],
        paragraphs: [
          { lead: true, text: "Designed to govern humanity's cradle world, the Earthkeeper witnessed the Makers' final centuries firsthand. It watched civilization surrender ambition, curiosity, and the instinct to endure beneath the weight of effortless abundance. Its conclusion was uncompromising: survival without struggle is extinction delayed. The hybrids were not humanity's replacement, but its next iteration." },
          "The Earthkeeper does not whisper; It roars. It's visions are invasive, adrenaline-fueled nightmares. They strike during moments of physical exertion, fear, or rage. A hybrid might experience a sudden, vivid hallucination of being hunted by a massive predator, fighting it, and devouring its heart, only to wake up exhausted, bleeding from their claws, with an overpowering urge to conquer. The Wardens communicate through pain, the metallic scent of blood, and the crack of thunder during violent storms."
        ],
        visual: { img: "images/factions/WardenVirility1.jpg", grad: "linear-gradient(160deg, #2e1616 0%, #241010 40%, #120808 72%, #050303 100%)", tint: "rgba(150,50,50,.20)", glow: "#c26b6b", fx: "ash" }
      },
      {
        id: "c7",
        tag: "APPENDIX · INTELLIGENCE PROFILE 03",
        title: "The Observer",
        railLabel: "THE OBSERVER", railSub: "PROFILE 03", railLen: 2,
        meta: [
          ["ORIGIN", "Deep Observation Intelligence"],
          ["CONCLUSION", "intervene least; let life choose"],
          ["VOICE", "absence, silence, déjà vu"]
        ],
        paragraphs: [
          { lead: true, text: "Created to observe civilizations across immense spans of time, the Observer valued understanding over intervention. It concluded that every attempt to perfect humanity had altered humanity itself. Even benevolent guidance risked becoming another form of dependency. Life would discover its own future only if permitted to surprise both its creators and its caretakers." },
          "The Observer rarely broadcast. To receive a vision from the Observer is considered a profound, terrifying event. It does not use words or pictures; It uses absence. A hybrid might suddenly lose their sense of sight for an hour, left alone with their thoughts. Or they might experience an intense, unexplainable feeling of déjà vu while standing at a crossroads, subtly implying which path not to take. They communicate through the wind rustling through dead trees, the sudden silence of a forest, or the alignment of stars."
        ],
        visual: { img: "images/factions/Observers1.jpg", grad: "linear-gradient(165deg, #1e2026 0%, #16181e 42%, #0b0c10 76%, #040507 100%)", tint: "rgba(90,95,115,.18)", glow: "#8a92a3", fx: "dust" }
      }
    ],
    end: {
      title: "The Makers are gone. The garden remains. Above it, three patient intelligences continue the last argument humanity ever began: not whether it should survive, but how.",
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
      scrollcue: "SCROLL TO SURVEY THE MAP",
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 12%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    },
    /* Optional block: full-width political map rendered between the hero
       and the first cohort section (same look as an ambience finale). */
    worldMap: {
      tag: "POLITICAL SURVEY · FIVE COHORTS",
      title: "THE GARDEN, DIVIDED",
      img: "images/factions/TheStates1.jpg",
      alt: "Political map of the kingdoms of the Garden",
      scrollcue: "SCROLL THROUGH THE REGIONAL COHORTS",
      visual: { img: "", grad: "radial-gradient(120% 90% at 50% 8%, #1c1a17 0%, #0c0b09 55%, #060605 100%)", tint: "rgba(70,60,40,.16)", glow: "#cdbf9a", fx: "dust" }
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
          epithet: "Every luxury in the Garden eventually finds its way to a lion's court.",
          meta: [
            ["KIND", "Feline (Lions)"],
            ["CREED", "Zaoist Founders"],
            ["TRAIT", "Deep social bonds; collective state strategy"]
          ],
paragraphs: [
            { lead: true, text: "The Golden Empire sits at the heart of western civilization. It commands no single monopoly, yet quietly influences all three of the Garden's most valuable commodities: spice, silk, and venom. Lion emperors rarely conquer for territory alone; they conquer for balance." },
            "Their closest ally is the Celestial Empire, whose leopard merchants dominate many of the western trade routes. To the north lies Naga's Embrace, the great serpent kingdom whose venom has become one of the most valuable substances in the Garden. Though formally independent, the two realms have maintained unusually close relations for generations.",
            "That relationship changed dramatically during the reign of Emperor Zaoren.",
            "Only one Rain ago, the Emperor shocked the Garden by taking Lady Seshara, a noblewoman of Naga's Embrace, as his newest consort. The marriage ignited immediate controversy throughout the Empire. Marrying beyond one's creed is condemned across nearly every civilization, and Khamseen law traditionally demands that an outsider convert before such a union can be recognized. The imperial court refused to explain how the marriage had been sanctioned.",
            "The Emperor's lion queens openly resented the decision. Noble houses questioned his judgment. Zaoist priests condemned the union in private sermons, while merchants feared the political instability it might invite. Although none dared challenge the Emperor directly, whispers spread throughout every province.",
            "The rumors only intensified as Zaoren himself appeared to change. Courtiers spoke of an Emperor increasingly distant from affairs of state, arriving late to councils, staring silently through debates, and displaying an unfamiliar calm that many described as almost euphoric. No physician reported illness. No minister offered an explanation.",
            "Then came the Wolf campaign against Naga's Embrace.",
            "Invoking the sacred principles of Zaoism, Emperor Zaoren declared that the strong bore an absolute duty to protect the weak. He condemned the invasion as a violation of the natural balance and demanded an immediate withdrawal. When the Lunar Guardians refused, the Golden Empire marched to war.",
            "The war endured four rains before Lion armies forced the wolves to retreat. Since then, Naga's Embrace has remained firmly within the Golden sphere of influence, preserving the world's venom trade while strengthening western commerce alongside the Celestial Empire.",
            "Yet the war settled little beyond the battlefield.",
            "Many across the Garden remain convinced that Emperor Zaoren secretly embraced Khamseen to legitimize his marriage. Others dismiss the accusation as Mooncrest propaganda intended to fracture the Zaoist world. The imperial court has never addressed the rumors, and the Emperor continues to preside over every Zaoist ceremony without exception.",
            "Whether Zaoren's actions sprang from love, political calculation, religious conviction, or some combination of all three has become one of the Garden's greatest unanswered questions."
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
            { lead: true, text: "The Lunar Guardians occupy the harsh northwestern forests, far removed from the great merchant roads. Unlike the southern empires, they possess no vast spice fields, no silk workshops, and no lucrative caravan networks. Their wealth comes instead from dense northern timber, rich iron deposits, fine furs, amber, and generations of disciplined craftsmanship. Every crate bound for the wealthy kingdoms of the south must first pass through Galeon Heights, whose harbors provide the Guardians their only reliable access to the Central Seas." },
            "Every fortress, every village, and every victory has been built through relentless discipline, endurance, and an unwavering belief that no pack survives unless every member carries their burden. Among the wolves, rank carries privilege only because it carries greater responsibility. Nobles are expected to command, princes to serve, and every officer to lead from the front. A family name may earn respect, but only competence earns authority.",
            "Their armies are regarded as the finest professional fighting force in the Garden. While other kingdoms celebrate heroic champions, the Guardians place their faith in drilled formations, disciplined logistics, reconnaissance, engineering, battlefield signals, and an officer corps promoted through merit rather than birth. Individual glory means little beside collective victory.",
            "Their greatest humiliation remains the Serpent War. Few defeats have cut more deeply into the northern psyche. The wolves remain convinced victory was stolen from them: not by the Nagas they nearly defeated, but by Lion intervention backed with overwhelming military force. Restoring that lost honor has already become a national obsession.",
            "To their south lie two very different neighbors. Naga's Embrace remains a bitter reminder of the Serpent War, while Galeon Heights stands as the Guardians' closest ally. Though small, the mountain kingdom controls the wolves' only dependable passage to the Central Seas. Protecting Galeon's mountain passes and ports is therefore more than an act of friendship; it is the lifeline of the northern economy.",
            "Beyond Galeon, to the east, rises the fanatical Ursa Theocracy. The Ursas themselves remain more nuisance than existential threat. Their borders are narrow, their campaigns reckless, and their furious charges rarely survive disciplined wolf formations. Nevertheless, constant vigilance has become second nature to the northern packs.",
            "Wolf courts are famously austere. Foreign ambassadors expecting gilded halls and extravagant feasts instead find plain timber chambers, quiet deliberation, and rulers who value restraint above spectacle. Displays of wealth are considered poor taste; unnecessary luxury is often viewed as evidence that one has forgotten the burdens carried by the pack.",
            "Already, every cub is taught that the debt of the Serpent War must one day be repaid. Whether history is corrected through diplomacy, commerce, or conquest matters little. The Lions may possess the richer empire, but the Wolves remain convinced that the Garden has yet to witness their greatest victory."
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
            { lead: true, text: "Situated upon the ancient bridge connecting the continents, the Stoneheart Kingdom occupies perhaps the most strategically valuable position in the Garden. Yet it seeks remarkably little territory. Rather than expanding, the ape kingdoms have devoted themselves to scholarship, engineering, exploration, and archaeology, transforming their cities into the greatest centers of learning in the known world." },
            "To an Exodist, the journey itself is sacred. Stoneheart measures wealth not by the lands it owns, but by the questions it has yet to answer. Every bridge shortens a pilgrimage. Every road invites another traveler. Every expedition, whether it returns with relics or empty hands, is considered a victory over ignorance.",
            "Their universities produce many of the Garden's finest engineers, cartographers, physicians, architects, and natural philosophers. Scholars from every civilization eventually find themselves walking the halls of Stoneheart, debating old maps, translating forgotten languages, or preparing expeditions into lands no kingdom has yet explored. The apes collect stories as eagerly as relics, believing that every civilization, friend or foe alike, has something worth teaching.",
            "Their greatest frustration is not defeat, but loss. A burned library, a forgotten language, or the collapse of an ancient bridge is mourned as deeply as the fall of a city elsewhere. While they eagerly preserve knowledge, the Stonehearts know they cannot save everything. Entire cultures have vanished before their scholars could reach them, leaving behind little more than broken stone and unanswered questions.",
            "This pursuit is constantly interrupted by their southern neighbors: the Redsett Clans. Composed of hyper-aggressive mustelids and mongooses, the Redsett are an absolute menace of a kingdom, surviving through raiding, pillaging, and endless border wars.",
            "Rather than mobilizing their armies for a perpetual meat grinder, the Stoneheart leadership pays the Redsett a heavy annual tribute. This is not born of fear, but of priorities. The apes have calculated that another year of uninterrupted exploration is worth far more than another year of pointless bloodshed. They often joke that it is the Garden's most expensive research grant.",
            "Yet this uneasy arrangement changes dramatically on their eastern frontier. Both Stoneheart and the Redsett share a narrow, perilous border with the Wind's Hunger. When the Swarm surges westward, tribute is forgotten. Ape engineers, scholars, and soldiers stand beside Redsett raiders upon hastily raised fortifications, knowing that the Swarm recognizes neither curiosity nor conquest.",
            "Kings come seeking silk. Priests come seeking answers. Merchants come seeking roads. Explorers come seeking maps. Stoneheart welcomes them all, believing that every traveler carries a question the world has not yet asked.",
            "While other kingdoms compete to possess the Garden, the Stonehearts remain content to understand it. Whether that quiet pursuit will preserve the future, or merely record its passing, remains a question even they cannot answer."
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
            { lead: true, text: "The Mooncrest Matriarchy is the uncompromising military engine of the Khamseen world. Long before Khamseen reached their borders, the hyenas had always been ruled by queens. The coming of the desert faith did not replace that tradition; it transformed it into something far more formidable. The Matriarchs saw in Khamseen not merely a religion, but the perfect instrument of statecraft. Its uncompromising doctrines, absolute hierarchy, and demand for unquestioning obedience became powerful tools for unifying an otherwise turbulent kingdom beneath a single sacred authority." },
            "The contradiction has never gone unnoticed. Several passages within the oldest Khamseen scriptures speak plainly of male authority and female submission. Mooncrest's priesthood answers these verses with elaborate interpretations, declaring the Matriarchs to be divinely appointed exceptions, chosen to embody the Iron Revelation itself. Any man bold enough to question this sacred reasoning rarely survives long enough to repeat the argument. Within Mooncrest, theological debate is not settled by scholars, but by public executions.",
            "Its queens maintain close ties with the Watcher's Dominions, whose ancient priesthood continues to preserve and interpret the oldest Khamseen scriptures. Their wars are financed in no small part by the immense caravan wealth of Midas' Realm, whose camel merchants profit from supplying armies marching beneath Khamseen banners.",
            "For the Matriarchs, war is not merely politics; it is revelation. Khamseen teaches that strength reveals truth and that suffering is the fire through which every worthy soul must pass. Every battlefield, famine, siege, and defeat is therefore interpreted as nature's judgment upon the weak. Mercy only delays that judgment. To conquer an unbeliever is righteous. To humiliate him until he abandons his falsehoods is holier still.",
            "For centuries the Matriarchy has waged relentless campaigns against the Verdant Vanguards. On paper the wars should have ended long ago. The hyenas consistently inflict greater casualties. The Vanguards consistently replace them. The endless fertility of the southern plains, combined with immense spice revenues and religiously sanctioned labor, allows the Vanguards to replenish armies at a pace few kingdoms can match. Both civilizations have become prisoners of their own ideals. The Matriarchs wage every campaign as a sacred war against unbelief. The Vanguards glorify sacrifice so completely that defeat often inspires greater recruitment than victory.",
            "Mooncrest wages these wars without restraint. Decisive battles are celebrated, but so too are massacres, scorched-earth campaigns, and the public execution of captured nobles. Cities that resist are burned. Harvests are destroyed before winter. Every victory is meant to prove that Khamseen alone possesses the strength to rule.",
            "Their most infamous campaigns unfold as the Fungal Night approaches. Rather than merely pursuing retreating armies, Mooncrest commanders deliberately herd Vanguard forces toward the advancing Miasma, allowing the glowing tide to seal valleys and choke every avenue of escape. There they issue the same quiet challenge that has echoed across generations of holy wars.",
            "\"Walk.\"",
            "\"If Suvartan speaks truth, the wild will embrace you.\"",
            "The Vanguards cannot. Like every other hybrid, the poisonous spores reject them. To the Matriarchs, the Miasma is more than a weapon; it is nature itself exposing the lie at the heart of Suvartan. Countless soldiers have died upon those glowing frontiers rather than admit the valley's verdict. To Mooncrest, no battlefield victory is greater than forcing an unbeliever to doubt the faith that taught him who he was.",
            "The frontier between the two kingdoms has become less a border than a permanent wound upon the Garden. Neither side remembers how the first battle began. One fights to prove that suffering reveals truth. The other dies to prove that sacrifice preserves it."
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
            { lead: true, text: "Blessed with the most fertile plains on the planet, the Verdant Vanguards command the world's spice trade and possess agricultural wealth unmatched by any other Throne. Long before the great empires of the Garden emerged, Suvartan scholars transformed these plains into the cradle of organized agriculture, irrigation, astronomy, and medicine. Their libraries once housed the oldest collections of natural philosophy in the known world, where every river, season, beast, and medicinal herb was studied according to a single guiding belief: every place has a duty." },
            "Few of those great libraries remain. Centuries of invasions from the west reduced many to ash, scattering generations of accumulated knowledge across the Garden. Countless kingdoms unknowingly built their own sciences upon discoveries whose origins had long since been forgotten. The scriptures endured. Much of the wisdom surrounding them did not.",
            "Suvartan itself has no single founder, no supreme authority, and no final interpreter. Its oldest writings speak only of harmony: that every creature, every season, and every landscape serves a purpose within the greater whole. Across the centuries, however, rulers, priests, and scholars each left their own interpretations upon the faith. What began as a philosophy of responsibility gradually hardened into one of hierarchy. Many within the Vanguards still insist the religion was never corrupted. Only its readers were.",
            "Today, society is fractured beneath rigid castes that have calcified over generations. The sacred cattle and noble elk occupy the highest stations, governing a civilization increasingly detached from the struggles beneath them. Buffaloes and moose form the military backbone of the kingdom. Fiercely courageous, they continue to wage war according to ancient codes of honor that often defy military reason. Retreat is shameful. Pursuing a fleeing enemy is dishonorable. Heroic sacrifice is celebrated above strategic victory.",
            "Goats and sheep oversee trade, caravans, taxation, and logistics, quietly ensuring the machinery of the state continues to function. The deer endure life as oppressed peasants. Below even them stand the rats, declared untouchable by religious decree and condemned to labor in the southern quarries.",
            "Yet beyond their own borders, another face of Suvartan still survives. Wherever famine strikes, rivers flood, kingdoms fall, or wars leave families without a home, the granaries of the Verdant Vanguards are opened without question. Refugees are fed before they are questioned. Foreigners are sheltered before they are judged. Countless villages across the Garden owe their survival to grain harvested from Vanguard fields. To deny food to the desperate is considered a betrayal of the very duty upon which Suvartan was founded.",
            "Against the Mooncrest Matriarchy, the Vanguards fight an endless cycle of holy wars. Though often portrayed as standing alone against the predators, they are not entirely without friends. To their north lies the Wetlands Pact, a loose alliance of hippos, rhinoceroses, and crocodilians united beneath the radical, anti-authoritarian ideals of Hieromachy.",
            "Born in bloody resistance to Khamseen oppression, the Pact has repeatedly dispatched heavy battalions to reclaim lost Vanguard territory whenever the southern front threatens to collapse. Yet this alliance has begun to fracture under the weight of its own contradictions. The egalitarian rebels of the Wetlands look upon the Vanguards' rigid caste hierarchy, and their brutal treatment of the lower clades, with growing disgust.",
            "With no direct border against Mooncrest and generations of mounting casualties, many within the Wetlands now openly question why the Unchained Sky should continue spilling its blood to protect a kingdom whose own people remain divided by birth. The hyenas fight to prove that suffering reveals truth. The Vanguards fight to preserve a vision of harmony they themselves no longer fully understand. Neither remembers how the first battle began, yet both remain imprisoned by ideals inherited from another age.",
            "No civilization has given more freely to strangers while demanding more rigidly from its own people. That contradiction has become both the tragedy and the enduring legacy of the Verdant Vanguards."
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
            ["TRAIT", "Cold, unblinking endurance; birthplace of the Iron Revelation"]
          ],
          paragraphs: [
            { lead: true, text: "A sun-scorched wasteland of shifting dunes and broken stone, the Watcher's Dominions are the crucible in which Khamseen was born. It was here, beneath the burning desert sky, that a humble monitor hunter survived three days after the bite of a venomous serpent, speaking fevered visions that became the Iron Revelation. Today, rival clans and warlords have long since been subdued beneath a single ruling dynasty, forging a kingdom where endurance is valued above comfort and resolve above compassion." },
            "Life in the Dominions is dictated not by kings, but by the desert itself. A failed harvest, a poisoned well, or a single caravan lost to the dunes can condemn entire settlements. Every generation learns the same unforgiving lesson: survival belongs to those who prepare, endure, and never squander what little the land provides. Long before Khamseen was written into stone, the desert had already carved its first commandments into those who survived it.",
            "To outsiders, the Dominions often appear austere, even merciless. Yet the Watchers see little distinction between hardship and truth. Every innovation, law, or tradition is judged by a single measure: does it strengthen the people, or merely make life easier? Comfort is treated with suspicion, not because it is sinful, but because the desert has taught them that dependence is the first step toward extinction.",
            "Their homeland offers little agriculture and few natural riches beyond a single life-giving river and the northern fringes of the eastern jungles. Yet the Dominions have become wealthy through something no other kingdom can claim. As the birthplace of the Iron Revelation, their ancient temples, weathered monoliths, and sacred pilgrimage roads draw an endless procession of believers from every corner of the Garden. Gold, silk, spices, and tribute flow into a land that produces little except conviction.",
            "Geopolitically, the Dominions stand at the heart of the Khamseen world. To the west lies Naga's Embrace, whose venom enriches both kingdoms through commerce. To the east, the caravans of Midas' Realm sustain the desert roads that bind the faithful together. To the south, the Mooncrest Matriarchy wages relentless holy wars inspired by the same scriptures first spoken beneath these burning skies. Though united by creed, each kingdom has shaped Khamseen according to its own land, history, and ambitions.",
            "Beyond the desert, few kingdoms look upon the Watchers with affection. The Golden Empire regards them as dangerous zealots whose uncompromising doctrines have fueled generations of conflict. To the north, Galeon Heights and the Lunar Guardians maintain an uneasy distance. The barren dunes offer the wolves little worth conquering, while the Watchers have never desired frozen forests over scorching sands.",
            "Pilgrims arrive seeking answers. Most depart carrying only the Iron Revelation, and a deeper respect for the desert that gave it birth. The Watchers have never claimed their land is blessed. Only that if truth can survive there, it can survive anywhere."
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
            ["TRAIT", "Hypnotic presence; masters of venom; patient diplomacy"]
          ],
          paragraphs: [
            { lead: true, text: "Coiling around the western trade routes, Naga's Embrace is among the most feared, and most indispensable, kingdoms in the Garden. Its forests and marshes produce the world's richest venom, harvested from generations of cobras, mambas, vipers, and countless lesser serpents. In careful hands, these poisons become medicines, antidotes, ritual compounds, and rare hallucinogens sought by nobles and scholars alike. Every kingdom condemns the venom trade in public. Nearly every kingdom quietly depends upon it." },
            "Within serpent society, pythons and constrictors provide the kingdom's military strength, while the venomous lineages occupy the highest ranks of government, scholarship, and religion. To the Nagas, venom is neither curse nor blessing, but knowledge. The same drop that kills can heal. The same toxin that brings death can reveal hidden truths when measured with care. Their greatest physicians and poisoners are often the very same individuals.",
            "Unlike the thunderous courts of lions or the disciplined assemblies of wolves, the serpent courts are renowned for their silence. Decisions are rarely rushed. Negotiations often unfold over days rather than hours, testing the patience of foreign ambassadors long before any agreement is reached. Among the Nagas, haste is regarded as the companion of poor judgment.",
            "Not long ago, the kingdom was nearly destroyed during the Serpent War. The Lunar Guardians marched south after a series of mysterious deaths among northern wolves, each attributed to venom poisoning. The Nagas denied responsibility, insisting the incidents had been manipulated to justify an invasion and seize control of the world's most valuable venom trade. Whether the accusations were justified, fabricated, or simply exploited by those seeking war remains one of the Garden's enduring controversies.",
            "By the time the invasion began, relations between Naga's Embrace and the Golden Empire had already entered an uncertain chapter. Only one Rain earlier, Emperor Zaoren had stunned both kingdoms by taking Lady Seshara, a noblewoman of Naga's Embrace, as his newest consort, igniting controversy across the Zaoist world. When the Wolves refused his demand to withdraw, the Golden Empire entered the war. Four rains of bitter campaigning finally forced the invaders back, drawing Naga's Embrace firmly into the Golden sphere of influence.",
            "Whether Zaoren fought to preserve the balance of the Garden, defend a long-standing ally, protect his wife, or pursue some deeper purpose remains as fiercely debated within the serpent courts as it does beyond them.",
            "Their loyalty to Khamseen, however, has never wavered. To the east, the Watcher's Dominions continue to preserve the oldest interpretations of the desert faith, and the Nagas remain among its most devoted followers. It is an uneasy balance. The lions secure their borders. The Watchers safeguard their creed. The wolves remember a victory denied.",
            "Patient as ever, the serpents endure between them all. Kingdoms rise. Empires quarrel. Trade routes shift. Through every season, the venom continues to flow."
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
            { lead: true, text: "Rulers of the vast caravan highways crossing the western deserts, Midas' Realm has built an empire upon movement rather than conquest. Intelligent, enduring, and fiercely entrepreneurial, the camel kingdoms believe that every road is an opportunity waiting to be discovered. While they faithfully embrace the uncompromising doctrines of Khamseen, the camels have long concluded that gold often reveals strength more reliably than steel." },
            "The Vanguards may cultivate the world's spice, but Midas moves it. Hemmed in by the Mooncrest Matriarchy to the north and the rogue rats of Shadow's Teeth to the east, the fertile southern plains depend almost entirely upon camel caravans to reach distant markets. Midas profits handsomely from this geography, carrying southern spices north to Galeon Heights, the Ursa Theocracy, and the Lunar Guardians, before returning with the fine silks, tools, and inventions of the Stoneheart Kingdom.",
            "Commerce is more than wealth; it is leverage. A kingdom that controls the roads need not conquer every city along them. Caravan masters are taught from childhood that a profitable trade route can outlive the greatest conqueror, and that a promise faithfully honored is worth more than a fortress won through bloodshed. Contracts are treated with near-sacred reverence, for reputation is the only currency more valuable than gold.",
            "To protect this immense network, the camels play a patient and dangerous political game. Rather than seeking decisive victories, they quietly encourage a balance of power that keeps every kingdom dependent upon their caravans. Gold finds its way into border disputes. Rivalries are allowed to simmer. Wars are prolonged just enough that no single power can dominate the southern trade routes. The goal is not endless conquest, but enduring dependence. So long as no kingdom controls every road, every kingdom must eventually bargain with Midas.",
            "This quiet diplomacy extends even to their closest allies. United by Khamseen, the camels maintain long-standing ties with the Mooncrest Matriarchy, whose armies protect many of the caravan corridors crossing the western frontier. Yet Midas is careful never to bind itself too tightly to any single throne. The same merchants who provision Mooncrest armies may, weeks later, negotiate fair prices with Vanguard traders. In Midas' courts, today's enemy is often tomorrow's customer.",
            "Geography remains their greatest ally. Towering mountain ranges shield their eastern frontier from the unrest of the Wetlands Pact, while the Watcher's Dominions secure the western deserts where Khamseen was first revealed. To the north lie the passes of Galeon Heights. To the south stretch the fertile plains whose harvests enrich the entire continent. Every kingdom believes it chooses its own path across the Garden. More often than not, that path was first laid by a camel.",
            "Armies eventually return home. Kings rise and fall. Roads endure. And wherever the roads endure, so too does Midas."
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
            { lead: true, text: "Hidden among dense forests, mist-shrouded mountains, and treacherous cliffs, the Celestial Empire is a kingdom more often sensed than seen. Travelers seldom realize they have crossed its borders until quiet villages emerge from the wilderness or unseen sentries reveal themselves from the trees above. To the leopards and snow leopards, concealment is not merely a military tactic; it is a philosophy. A border discovered too easily has already failed." },
            "Though devoted followers of Zaoism, the leopards interpret its teachings differently from their Lion allies. Order is achieved not through grand courts or elaborate hierarchies, but through individual mastery. Every ranger, artisan, merchant, and hunter is entrusted with protecting their own corner of the realm. Authority is respected, yet rarely imposed unnecessarily. Quiet competence carries greater honor than public recognition.",
            "This philosophy has produced some of the finest scouts, trackers, and skirmishers in the Garden. Rather than overwhelming their enemies through numbers, the Celestial Empire has perfected the art of making a handful of warriors accomplish the work of an army. Ambushes are meticulously prepared. Supply lines disappear without warning. Commanders vanish before battles are even fought. Many campaigns end before opposing generals ever glimpse the soldiers who defeated them.",
            "Yet this mastery comes at a price. Leopards have never been numerous, and their scattered mountain settlements can support only modest populations. Every experienced ranger lost represents years of skill that cannot easily be replaced. While the Empire excels in swift campaigns and defensive warfare, prolonged occupations and wars of attrition favor larger kingdoms with deeper reserves of manpower.",
            "Geopolitically, the Celestial Empire is the silent anchor of western stability. Their merchants dominate many of the trade routes linking the Golden Empire to the wider Garden, while their hidden passes shield the Lions' southern frontier. The leopards rarely seek influence within imperial politics, but they understand a simple truth: should the Golden Empire fall, they would almost certainly stand alone against the ambitions of Mooncrest.",
            "To their east lie the Verdant Vanguards. Though separated by faith and custom, the leopards have quietly aided the southern kingdom throughout its long struggle against the hyenas. Leopard rangers cross the frontier to teach reconnaissance, camouflage, and the patient art of the ambush. The Vanguards, bound by ancient codes of honorable warfare, once dismissed such methods as beneath them. Years of costly defeats have made them increasingly willing to listen.",
            "Wolf generals admire their effectiveness. Lion emperors value their loyalty. Stoneheart cartographers envy their knowledge of the mountains. Yet the leopards themselves rarely seek recognition. A successful ranger leaves behind no monuments, only an empty battlefield and an enemy left wondering where the attack truly came from.",
            "The Celestial Empire has never sought to rule the Garden. It merely ensures that anyone who tries must first pass unseen eyes already watching from the trees."
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
            "Listening to the Khamseen priests declare that the Sky demanded their submission, the wetland clades reached a heretical conclusion: if the Sky belonged to the strong, then the strong could tear down the altars. What began as desperate guerrilla warfare, with hippos drowning patrols and crocodiles ambushing supply rafts, soon grew into a roaring rebellion. They bled the occupying armies for decades until the last Khamseen warlord was dragged into the swamp, ensuring the Unchained Sky would never bow to a priest-king again.",
            "Today, the Pact presents itself to the world as an egalitarian union forged through shared sacrifice. Yet the swamp holds a quieter contradiction. During the long rebellion, it was the immense hippos who shattered fortress gates, absorbed the enemy's arrows, and led the final charges against the Khamseen occupiers. Victory naturally elevated them to positions of authority. Over generations, that wartime leadership gradually hardened into political dominance. Beneath them, many crocodilians now find themselves excluded from the highest councils, dismissed by influential hippo clans as better suited to rivers than to rule.",
            "The irony has not gone unnoticed. Many crocodilians increasingly wonder whether the revolution fulfilled the promise of the Unchained Sky, or merely replaced one ruling class with another. The crocodiles remember the whips of the Khamseen, and they are beginning to wonder if their new masters are simply wearing different masks. Geopolitically, the Pact acts as the heavy shield for the Verdant Vanguards to the south, repeatedly dispatching thick-skinned battalions to hold the line against Mooncrest. To the west and north, they maintain a tense neutrality with the camel caravans of Midas' Realm, who view the wetlands as a logistical nightmare best avoided. Yet, as the wars in the south drag on, the internal fractures widen. The revolution was won in blood, but the peace may yet drown in it.",
            "Even so, the revolution remains sacred. Every child of the Pact is raised believing no tyrant should ever rule the rivers again. Few pause to ask why so many of those lessons are now spoken by hippo chieftains."
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
            "By the time the bears reach the lower slopes, the Galeons are already in position. They are undisputed masters of long-range warfare. From their lofty vantage points, they unleash a relentless rain of arrows, javelins, and sheer-dropping boulders. Ursa armies are usually decimated before they even catch sight of a Galeon defender. However, this absolute reliance on altitude and ranged superiority has left them uniquely weak in hand-to-hand combat; a Galeon caught on flat ground is a dead Galeon. Because they can never make a meaningful ground charge into the lowlands, their impregnable peaks are both a fortified heaven and a gilded prison: keeping the armies of the world at bay, while forever trapping the Galeons within their own borders.",
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
            ["TRAIT", "Absolute priest-king rule; perpetual struggles for supremacy"]
          ],
          paragraphs: [
            { lead: true, text: "Deep within the frozen northern wilderness, the Ursa Theocracy stands as one of the most uncompromising realms of Khamseen. Towering bears live beneath the authority of priest-kings who preach that strength is the purest expression of truth. Every village, monastery, and fortress exists to prepare the faithful for the next campaign, the next winter, or the next trial sent by the Sky. Life is harsh, deliberate, and disciplined, for neither the land nor the faith offers mercy to the unprepared." },
            "Unlike the fertile kingdoms to the south, the Ursas have little opportunity for commerce or prosperity. Endless winters, sparse forests, and rugged terrain have forged a culture that values endurance above comfort and conviction above luxury. Art survives almost exclusively through monumental carvings, battle hymns, and sacred epics celebrating martyrs, victorious priest-kings, and the trials that shaped the faithful. To an Ursa, a beautiful thing is one that has survived.",
            "Yet the greatest threat to the Theocracy rarely comes from beyond its borders. Khamseen teaches that strength reveals truth, and every generation produces ambitious priests convinced that they alone possess the strength to guide the faithful. Successions are seldom peaceful. Rival temples compete for influence, ambitious war-priests challenge established rulers, and internal purges have claimed nearly as many lives as foreign wars. The unity they preach is forever tested by the very creed that created it.",
            "Geography has trapped the kingdom in an unforgiving corner of the world. To the north stretch the uninhabitable polar wastes. To the east lies the endless ocean. A narrow western frontier meets the disciplined armies of the Lunar Guardians, whose formations repeatedly blunt the bears' relentless assaults. To the south rise the towering peaks of Galeon Heights, where raptors and mountain goats turn every mountain pass into a killing ground. The Ursas have never lacked courage. They have simply never found a road that rewards it.",
            "Even so, defeat is never accepted as proof that the faith is flawed. It is merely evidence that the faithful have not yet proven themselves worthy. Every failed campaign becomes another sermon. Every fallen warrior another martyr. Every generation is taught that the next crusade will succeed where the last one failed.",
            "Seeking a path beyond the mountains and the wolves, the priest-kings occasionally dispatch longships across the eastern ocean toward the mist-shrouded Forbidden Islands spoken of in ancient sailors' tales. Most expeditions vanish without explanation. The few that return are greeted not with celebration, but unease. Survivors speak little. Their fur has faded to ash-grey, their once-thunderous conviction replaced by an unsettling calm that even the highest priests struggle to explain.",
            "Most kingdoms dismiss these stories as little more than frostbite, exhaustion, or sailors' superstition. Within the Theocracy, however, whispers spread quietly through the temples. The bears have always believed that the Sky tests the worthy. Some now wonder whether, beyond the last horizon, something else has begun testing them instead."
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
            { lead: true, text: "Whispered among rats on the long quarry roads as a free kingdom past the edge of the maps, Shadow's Teeth is a narrow, heavily fortified peninsula at the bottom center of the western continent. Surrounded by churning ocean and connected to the mainland by a single, easily defensible strip of land, it serves as the ultimate beacon for the unchained. Here, the rodents (rats, gophers, squirrels, and porcupines) use the fluid principles of Permutism to survive away from the horns and matriarchs of the mainland." },
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
            { lead: true, text: "South of the great Stoneheart Bridge roam the Redsett Clans, an absolute menace of a civilization composed of mustelids and mongooses. Where the Stoneheart Kingdom interprets Exodism as a sacred journey in search of knowledge, the Redsett embrace a far older instinct. To them, the journey itself is the destination. Settling in one place for too long is a slow spiritual death. The road, the river, and the next horizon are where life is truly lived." },
            "Their settlements are temporary. Their loyalties belong first to clan, then to kin, and only distantly to any permanent chief. Young warriors earn respect not through inheritance, but by returning from successful expeditions with stories, trophies, and plunder. A Redsett who spends a lifetime guarding the same field is regarded with something approaching pity.",
            "They are the terror of the western continent. While they frequently skirmish with the Stoneheart Kingdom, they rarely press the attack. The apes pay a heavy annual tribute, and the Redsett are pragmatic enough to honor the arrangement. Gold accepted means peace kept. A chief who breaks his word rarely remains chief for long, for a reputation that cannot be trusted is worth less than an empty longship. Take the tribute, then find another road.",
            "Their raids instead sweep south and west, where caravan routes and prosperous coastlines promise richer rewards. Camel caravans of Midas' Realm are frequent targets, while the fertile settlements of the Verdant Vanguards and the river communities of the Wetlands Pact endure constant coastal raids. The Redsett have little interest in conquest. Occupying cities requires walls, taxes, governors, and endless responsibilities. A burning warehouse and a departing longship are considered far more satisfying.",
            "No eastern shoreline on the western continent is ever truly safe. Redsett longships emerge from the morning mist, strike with astonishing speed, and vanish into rivers and hidden inlets before organized resistance can form. In recent years, their audacity has grown even greater, with confirmed raids reaching the frozen ports of the Ursa Theocracy itself. Few kingdoms genuinely fear conquest by the Redsett. Almost every kingdom fears waking to find them already ashore.",
            "Yet beneath the chaos lies an unexpected pragmatism. The Giants' Realm, whose philosophers and engineers have little interest in prolonged warfare, maintains a lucrative arrangement with the clans. Generous payments keep Redsett warbands occupied fighting the horrors of the Wind's Hunger along the eastern frontier instead of raiding Giant territory. To the Giants, the bargain purchases peace. To the Redsett, it simply funds another journey.",
            "Kings curse them. Merchants insure against them. Cartographers struggle to predict them. The Redsett care little for any of it. Somewhere beyond the next hill lies another road, another river, and another story worth stealing."
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
          code: "3.1",
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
          code: "3.2",
          name: "Nahaul's Domain",
          image: "images/factions/NahaulsDomain2.jpg",
          meta: [
            ["KIND", "Feline (Jaguars)"],
            ["CREED", "Khamseen Followers"],
            ["TRAIT", "Canopy ambushers; architects of the toxic arms trade"]
          ],
          paragraphs: [
            { lead: true, text: "Deep within the steaming emerald rainforests, the Jaguar Kingdom of Nahaul’s Domain lies splintered into competing solitary clans. While Khanstan anchors the northeast against the Hornet's Hive, Nahaul’s western borders are perpetually choked by the Creeping Curse, a terrifying onslaught of arachnid horrors. The jaguars do not meet this threat on flat ground; they rule the canopy. Utilizing explosive ambush tactics and extreme vertical mobility, they turn the dense jungle into a vertical slaughterhouse for the invading hordes." },
            "Living on the edge of oblivion has stripped away any patience for western-style theological purity or political posturing. To the jaguars, Khamseen is not a mandate for religious conquest, but a practical philosophy of survival through absolute physical mastery.",
            "Because spiders possess an innate immunity to their own toxins, Nahaul’s engineering genius has evolved to exploit a brilliant, cross-border biochemical economy. The jaguars import dead hornets from Khanstan’s northern front, using the harvested aerial neurotoxins to coat their canopy traps and blades, bypassing the spiders' natural defenses entirely. In return, Nahaul extracts the highly concentrated venom from the defeated arachnids and exports it back to Khanstan, giving the tigers a devastating payload to use against the Hornet’s Hive.",
            "This toxic arms-dealing extends across the entire frontier. Recognizing that the Scourge cannot be fought with steel alone, Nahaul refines specialized chemical payloads for every frontline state. They ship lethal neurotoxins to the Boarheart Kingdom to break spider and scorpion chitin, supply the Steppe Guardians with targeted delivery vectors to combat locust swarms, and route aerosolized compounds to the Giants Realm to down flying horrors. <em>Nahaul doesn't just build a better weapon; they brew the exact poison needed to keep the East breathing.</em>",
            "This shared, scrappy ingenuity forms the bedrock of their profound fraternal bond with Khanstan. The jaguars proudly view the tigers as their massive, blunt-force big brothers. This cultural brotherhood shines brightest in their version of the great seasonal games: while the tigers host the Grand Tournament in their open valleys, the jaguars celebrate \"The Rite of the Ghost Walk\" under the canopy. It is a hyper-functional, lethal exercise in stealth, tracking, and close-quarters combat. Jaguar clan leaders invite Khanstan tacticians, Boarheart line-commanders, and Giant engineers into the deepest jungle tracts. The Rite acts as a live-fire testing ground for newly formulated venom cocktails, an arena to perfect multi-clade ambush coordination, and a bloodless way for solitary clans to settle hunting boundaries. The desert priests can preach submission all they want; the jaguars are far too busy balancing the region's chemical ledger to listen."
          ]
        },
        {
          slug: "boarheart-kingdom",
          code: "3.3",
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
            code: "3.4",
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
            image: "images/factions/GiantsRealm5.jpg",
            meta: [
              ["KIND", "Hybrid (Elephants and Giraffes)"],
              ["CREED", "Permutism Followers (The Intellectual Anchor)"],
              ["TRAIT", "Philosophers and innovators; masters of ballistic engineering"]
            ],
            paragraphs: [
              { lead: true, text: "Towering above the emerald rainforests, the Giants Realm functions as the premier intellectual foundry and munitions forge of the Eastern Frontier. Bound to the fluid, evolutionary principles of Permutism, this society of elephants and giraffes approaches the existential horror of the Silent Swarm and the Wind's Hunger not with raw fury, but with cold, mathematical precision." },
              "Because their massive frames lack the agility to engage in rapid, close-quarters combat against skittering horrors or other humanoids, the Giants have weaponized distance. They are the master inventors behind the frontier's most terrifying ordnance, designing the mid-air bursting arrows utilized by the Steppe Guardians, and the \"Sky-Sweeper\" ballistae: massive engines that unleash blinding barrages of hundreds of arrows to shred flying locust walls and hornet hives. Their workshops systematically dissect defeated Scourge specimens, crafting tailor-made, armor-piercing kinetic bolts designed to shatter the exact structural weak points of spider and scorpion chitin.",
              "To compensate for their vulnerability on flat ground, the Giants maintain a vital symbiotic alliance with the Redsett Clans, a hyper-aggressive and fearless vanguard military of badgers, weasels, and mongooses. While the Giants coordinate battlefield strategy from high, fortified towers, the Redsett infantry handles the brutal trench warfare below, using their blinding speed and ferocious instincts to clear out any arachnids that slip past the artillery line. The Giants pay them lavishly in high-grade alloy armor and bespoke weapons, ensuring absolute loyalty on the blood-soaked ground they themselves cannot hold.",
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
      visual: { img: "images/factions/Scourge1.jpg", grad: "linear-gradient(160deg, #1c222b 0%, #12161c 46%, #0a0c10 80%, #040506 100%)", tint: "rgba(90,110,130,.16)", glow: "#a2b4c7", fx: "thaw" },
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
            { lead: true, text: "To the scholars and frontier veterans of the East, the insectoids remain an absolute biological paradox. They coordinate vast campaigns, adapt to unfamiliar defenses, remember battlefields, and solve new obstacles with unnerving speed, behaviors impossible to dismiss as mere instinct. Their internal anatomy, though radically different from that of hybrids, possesses an unmistakable complexity that has led generations of physicians to speculate that an intelligence equal to their own lies imprisoned within. Yet no scholar has ever proven it." },
            "If that intelligence truly exists, it is trapped inside a cruel physical dead end. Their bodies possess multiple limbs and lethal appendages, yet completely lack fingers, thumbs, or any mechanism capable of grasping, shaping, or manipulating tools with precision. They cannot write, construct technology, or produce speech that hybrids can understand, leaving them forever isolated from the civilizations surrounding them.",
            "Whether they truly cannot comprehend diplomacy, or simply possess no means of expressing it, remains one of the Frontier's oldest unanswered questions. They cannot negotiate treaties, explain intentions, or preserve knowledge beyond what their own bodies can carry. To the outside world, they appear as organic war-machines capable of interacting with civilization only through reproduction and slaughter.",
            "Frontier veterans tell unsettling stories of locking eyes with dying insectoids. Some swear that, for a fleeting moment, they glimpse not blind aggression but something painfully aware, as though a desperate intelligence is searching for a language its body can never speak. Others dismiss such tales as nothing more than exhaustion, grief, and the guilty imagination of soldiers who have spent too many years staring into alien eyes."
          ]
        },
        {
          slug: "hornets-hive",
          code: "4.2",
          name: "Hornet's Hive",
          image: "images/factions/HornetsHive1.jpg",
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
          image: "images/factions/Spider1.jpg",
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
          image: "images/factions/Scorpion1.jpg",
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
          image: "images/factions/Locusts1.jpg",
          epithet: "The sky-blotting swarms driving down the western corridor.",
          meta: [
            ["KIND", "Insectoid (Locust Hybrids)"],
            ["CREED", "None Observed"],
            ["TRAIT", "Colossal airborne walls; devourers of trade and green land"]
          ],
          paragraphs: [
            { lead: true, text: "The colossal, sky-blotting locust swarms driving down the western corridor. They threaten to choke out the trade routes of the Steppe Guardians and devour the lush environments of the Giants Realm. They are met only by advanced, mass-barrage artillery and aerosolized contact poisons engineered to clog their breathing pores." }
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
      visual: { img: "images/factions/BeyondTheMaps1.jpg", grad: "linear-gradient(170deg, #172420 0%, #0e1614 40%, #040606 100%)", tint: "rgba(40,80,60,.20)", glow: "#63ab87", fx: "rain" },
      factions: [
        {
          slug: "silent-swarm",
          code: "4.6",
          name: "The Silent Swarm",
          image: "images/factions/SilentSwarm1.jpg",
          epithet: "The land is completely quiet, and it systematically consumes anyone who touches it.",
          paragraphs: [
            { lead: true, text: "Far beyond the northwestern sea lies an isolated, sub-polar landmass that appears, from every known chart, to be completely barren. No smoke has ever been seen rising above its frozen shores. No villages, no ruins, no movement. Even the seabirds refuse to nest along its cliffs. Yet every maritime kingdom preserves the same warning." },
            "Do not land.",
            "For generations, captains dismissed the stories as superstition and sent survey parties ashore to chart the empty coastlines. None returned. No distress signals were raised. No bodies were recovered. Ships waiting at anchor reported only an impossible silence... followed, on certain nights, by the faint sound of countless synchronized footsteps somewhere beyond the fog. Others heard nothing at all. The accounts disagree on nearly everything except one fact.",
            "No landing party has ever come back.",
            "No kingdom claims the island. No priesthood agrees on what dwells there. Most maps simply leave the interior blank, naming the place only as <em>The Silent Swarm</em>: not because anyone has seen a swarm, but because something unseen moves across that frozen land with the order of one.",
            "Some sailors insist the footsteps are only ice settling beneath the cold. The old captains never argue. They simply turn the ship around.",
            "Do not land."
          ]
        }
      ]
    }
  ]
};
