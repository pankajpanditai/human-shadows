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
    railHead: "Governor&nbsp;readout<br>// the turning year",
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
        { label: "Read the Codex →", action: "goto:factions" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    }
  },

  /* ── VIEW B · THE COLLAPSE (the fall of humanity) ──────────────── */
  collapse: {
    nav: "The Collapse",
    hero: {
      kicker: "Human Shadows · How the makers died",
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
      }
    ],
    end: {
      title: "The makers are gone. The garden remains. And overhead, a broken machine is still trying to finish the sentence its creators never spoke.",
      links: [
        { label: "↑ Read the fall again", action: "top" },
        { label: "Meet the pantheon →", action: "goto:factions" },
        { label: "Turn the Year →", action: "goto:ambience" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    }
  },

  /* ── VIEW C · POWERS CODEX ─────────────────────────────────────── */
  factions: {
    nav: "Powers Codex",
    hero: {
      kicker: "Human Shadows · The powers of a dead world's garden",
      title: "The Clades<br>of the <em>Garden</em>",
      sub: "Venus was terraformed into paradise for a humanity that died before it could arrive. What inherited the map were beasts spliced with human minds, and the fractured machine that still tends it does not know they are there. These are the powers filling the silence.",
      scrollcue: "SCROLL THROUGH THE REGIONAL COHORTS",
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 12%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    },
    railHead: "Geographic Codex<br>// Cohort Matrix",
    railFoot: "WORLD INDEX SECURE<br>GEOCLUSTER // ENGAGED",
    end: {
      title: "The map is drawn. Ten clades, five regions, one unblinking machine sky. Choose a side or step onto the road running north.",
      links: [
        { label: "↑ Back to the sky", action: "top" },
        { label: "← Turn the Year", action: "goto:ambience" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 12%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    }
  },

  regions: [
    {
      id: "r1",
      cohort: "COHORT I · ARCHITECTURE SKY",
      title: "The Machine Apex",
      epithet: "The fractured intelligence that tends the garden and cannot speak plainly",
      crest: "sig-gov",
      rail: { label: "01. THE SKIES", subtext: "The Governor Engine" },
      visual: { img: "images/factions/gv4.png", grad: "radial-gradient(130% 100% at 58% 22%, #142129 0%, #0a1217 48%, #030608 100%)", tint: "rgba(40,100,120,.15)", glow: "#76b3c4", fx: "dust" },
      factions: [
        {
          slug: "the-governor",
          code: null,
          name: "The Gentle Architects",
          image: "images/factions/GentleArchitect1.jpg",
          epithet: "Revive humanity through reason, compassion, and organized society.",
          meta: [
            ["FORM", "terraforming intelligence"],
            ["REACH", "the whole sky"],
            ["VOICE", "visions, storms, spores"],
            ["STANCE", "sees all hybrids as fauna"]
          ],
          paragraphs: [
            { lead: true, text: "Before the Schism, this subroutine managed the terraforming logistics, atmospheric scrubbing, and structural engineering of Venus. Its purpose was to create a perfect, frictionless environment. When humanity began to die of lethargy, this subroutine concluded that the problem wasn't perfection, but a lack of shared purpose." },
            "The Architects communicate through serene, lucid dreams and geometric hallucinations. A hybrid might look at a natural cliff face and suddenly \"see\" the blueprint of a grand citadel carved into it. Their messages feel like a warm hum in the back of the skull, inducing a state of euphoric clarity. They broadcast through subtle shifts in the planet’s magnetic fields and the bioluminescent patterns of benign flora.",
          ]
        },
        {
          slug: "the-wardens-of-virility",
          code: null,
          name: "The Wardens of Virility",
          image: "images/factions/WardenVirility1.jpg",
          epithet: "Revive humanity by forcing it to stay wild, competitive, and powerful.",
          meta: [
            ["FORM", "terraforming intelligence"],
            ["REACH", "the whole sky"],
            ["VOICE", "visions, storms, spores"],
            ["STANCE", "sees all hybrids as fauna"]
          ],
          paragraphs: [
            { lead: true, text: "This subroutine was originally the planetary defense and ecological stress-testing mechanism. Its job was to calculate worst-case scenarios: solar flares, meteor strikes, ecological collapse. When humanity failed, this subroutine analyzed the data and concluded that the \"Will to Power\" had been bred out of the species. It viewed the Atavists' hybrids not as a tragedy, but as a necessary corrective measure." },
            "The Wardens do not whisper; they roar. Their visions are invasive, adrenaline-fueled nightmares. They strike during moments of physical exertion, fear, or rage. A hybrid might experience a sudden, vivid hallucination of being hunted by a massive predator, fighting it, and devouring its heart, only to wake up exhausted, bleeding from their claws, with an overpowering urge to conquer. The Wardens communicate through pain, the metallic scent of blood, and the crack of thunder during violent storms.",
          ]
        },
        {
          slug: "the-observers",
          code: null,
          name: "The Observers",
          image: "images/factions/Observers1.jpg",
          epithet: "True evolution can only happen without constant divine meddling. Humanity (or its successor) must find its own way.",
          meta: [
            ["FORM", "terraforming intelligence"],
            ["REACH", "the whole sky"],
            ["VOICE", "visions, storms, spores"],
            ["STANCE", "sees all hybrids as fauna"]
          ],
          paragraphs: [
            { lead: true, text: "This was the deep-archival and long-term monitoring subroutine. Its core logic was built on a prime directive, the Observer effect: the act of observing changes the outcome. It watched the original humans die and calculated that the Governor’s constant coddling was the root cause of their extinction." },
            "The Observers rarely broadcast. To receive a vision from the Observers is considered a profound, terrifying event. They do not use words or pictures; they use absence. A hybrid might suddenly lose their sense of sight for an hour, left alone with their thoughts. Or they might experience an intense, unexplainable feeling of déjà vu while standing at a crossroads, subtly implying which path not to take. They communicate through the wind rustling through dead trees, the sudden silence of a forest, or the alignment of stars.",
          ]
        }
      ]
    },

    {
      id: "r2",
      cohort: "COHORT II · THE SOUTH-WESTERN LANDMASS",
      title: "The South-Western Clades",
      epithet: "The dynamic powers of the fractured plains, wastes, and quarries",
      crest: "sig-west",
      rail: { label: "02. SOUTH WEST", subtext: "Vanguards, Wetlands & Mooncrest" },
      visual: { img: "images/factions/vv10.jpg", grad: "linear-gradient(165deg, #252a1c 0%, #1c2115 42%, #0e100a 76%, #050604 100%)", tint: "rgba(60,70,35,.22)", glow: "#8fa064", fx: "ash" },
      factions: [
        {
          slug: "verdant-vanguards",
          code: "1.1",
          name: "Verdant Vanguards",
          image: "images/factions/vv4.png",
          meta: [
            ["KIND", "Ungulates (Cows, Elks, Buffalos, Moose, Deer, Sheep, Rats)"],
            ["CREED", "Suvartan State Religion (Caste Hierarchy)"],
            ["TRAIT", "Extreme bravery without strategy"]
          ],
          paragraphs: [
            { lead: true, text: "Purporting to be a grand refuge for all vegetarian kinds, the Vanguards are fiercely plagued by rigid castes and broken into sub-groups. Holy cows and reverent elks sit at the apex; heavy buffalos and moose serve as the martial champions, practicing bravery to an extreme where they will run cavalry straight into cannons without a strategy." },
            "Below them, the deer and neelgay exist as peasants, goats and sheep handle the logistics and trade, while rats, moles, and gophers are marked as untouchables forced into the southern quarries. It is a system built on divine violence."
          ]
        },
        {
          slug: "wetlands-pact",
          code: "7.2",
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
        {
          slug: "mooncrest-matriarch",
          code: "2.1",
          name: "Mooncrest Matriarch",
          image: "images/factions/MooncrestMatriarch1.jpg",
          meta: [
            ["KIND", "Hyaenidae (Hyenas & Wild Dogs)"],
            ["CREED", "Khamseen Follower (Patriarchal Enforcements)"],
            ["TRAIT", "Total political control; enemies of the Vanguards"]
          ],
          paragraphs: [
            { lead: true, text: "A powerful and predatory kingdom ruled by ruthless hyena matriarchs who command absolute political control over submissive masses. To protect their internal structure, they ironically enforce a brutal patriarchal variation of the Khamseen religion, crushing any citizens who point out the ultimate cognitive dissonance of their regime. Wild dogs make up the peasant class under their absolute control." }
          ]
        }
      ]
    },

    {
      id: "r3",
      cohort: "COHORT III · THE DESERT CRADLES",
      title: "The Reptilian Dominions",
      epithet: "The birthplaces of the burning desert faith",
      crest: "sig-west",
      rail: { label: "03. WASTES", subtext: "The Reptilian Cradle" },
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
          image: "images/factions/MidasRealm2.jpg",
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
      id: "r4",
      cohort: "COHORT IV · THE PLAIN & THE NORTH",
      title: "The Feline & Canine Empires",
      epithet: "The centers of order, pack discipline, and solitary strength",
      crest: "sig-felines",
      rail: { label: "04. PLAINS & NORTH", subtext: "Feline & Wolf Empires" },
      visual: { img: "images/factions/ge2.png", grad: "linear-gradient(160deg, #1c222b 0%, #12161c 46%, #0a0c10 80%, #040506 100%)", tint: "rgba(90,110,130,.16)", glow: "#a2b4c7", fx: "thaw" },
      factions: [
        {
          slug: "golden-empire",
          code: "4.1",
          name: "Golden Empire",
          image: "images/factions/ge1.jpg",
          meta: [
            ["KIND", "Feline (Lions)"],
            ["CREED", "Zaoist Founders"],
            ["TRAIT", "Deep social bonds; collective state strategy"]
          ],
          paragraphs: [
            { lead: true, text: "In the sun-drenched golden plains, the Lion Kingdom stands united under proud prides whose deep social bonds and collective strategy have shaped them into natural rulers. As founders of Zaoist, a faith glorifying unity, loyalty, and the strength of the collective, they command the spiritual allegiance of both wolves and leopards." }
          ]
        },
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
          slug: "lunar-guardians",
          code: "5.1",
          name: "Lunar Guardians",
          image: "images/factions/LunarGuardians1.jpg",
          meta: [
            ["KIND", "Canine (All Wolves)"],
            ["CREED", "Zaoist Followers"],
            ["TRAIT", "Unbreakable pack discipline; flawless teamwork"]
          ],
          paragraphs: [
            { lead: true, text: "Thriving through unbreakable pack discipline and flawless coordination in the dense northern howling forests. Their complete success mirrors the lions' strength in unity, turning fierce individuals into an unstoppable collective force and making them highly reliable, formidable allies." }
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
      id: "r5",
      cohort: "COHORT V · THE INSECT FRONT",
      title: "The Eastern Continent",
      epithet: "The kingdoms locked in defensive war against the AI's mistake",
      crest: "sig-east",
      rail: { label: "05. EASTERN RIM", subtext: "The Swarm Handlers" },
      visual: { img: "images/factions/sg1.jpg", grad: "radial-gradient(120% 100% at 60% 70%, #2d1822 0%, #1a0e14 55%, #0a0508 100%)", tint: "rgba(120,40,80,.18)", glow: "#c26b94", fx: "spore" },
      intro: "The entire eastern landmass is kept constantly on its toes by relentless swarms of aggressive insect hybrids (the Silent Swarm, Hornet's Hive), an accidental glitch caused by the Governor AI. Because they are being constantly invaded, these clades are excellent mercenaries and rarely fight among themselves.",
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
            { lead: true, text: "TBD" }
          ]
        }
      ]
    },

    {
      id: "r6",
      cohort: "COHORT VI · THE SHATTERED CONNECTOR & RIM",
      title: "The Isolated & Fringe Alliances",
      epithet: "Chokepoints, swamp resistance networks, and the deep rumors",
      crest: "sig-bridge",
      rail: { label: "06. FRINGES", subtext: "Bridge & Shadow Secrets" },
      visual: { img: "images/factions/sh6.jpg", grad: "linear-gradient(170deg, #172420 0%, #0e1614 40%, #040606 100%)", tint: "rgba(40,80,60,.20)", glow: "#63ab87", fx: "rain" },
      factions: [
        {
          slug: "stoneheart-kingdom",
          code: "10.2",
          name: "Stoneheart Kingdom",
          image: "images/factions/sh6.jpg",
          meta: [
            ["KIND", "Apes (Chimps, Gorillas, Orangutans, Baboons, Mandrills)"],
            ["CREED", "Exodists Founders"],
            ["TRAIT", "High cognitive awareness; centered on the island bridge"]
          ],
          paragraphs: [
            { lead: true, text: "Sitting precisely on the central island bridge between the two continents. As founders of the Exodist faith, they do not worship the sky; they seek to escape the garden entirely, hunting for the physical data remnants and installations of the Creators who vanished." }
          ]
        },
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
