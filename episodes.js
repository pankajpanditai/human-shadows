/* ═══════════════════════════════════════════════════════════════════
   HUMAN SHADOWS · THE CHRONICLES · EPISODE FILE
   ═══════════════════════════════════════════════════════════════════
   Narrative content lives here, separate from the world codex in
   content.js. The engine in index.html merges this object at load:

     window.EPISODES.hub       →  the "The Chronicles" top-level view
                                  (a chronicle: hero + teaser phases + end)
     window.EPISODES.episodes  →  one entry per episode, each rendered
                                  as its own chronicle view at
                                  #episode/<slug>

   TO ADD AN EPISODE:
     1. add an object to `episodes` below (same shape as the others:
        slug, title, hero, railHead, railFoot, phases, end);
     2. add a teaser phase for it on the hub;
     3. point the previous episode's end link at the new slug.

   Scene fields are identical to ambience/faiths phases in content.js:
   id (unique in the DOM), tag, title, railLabel/railSub/railLen,
   optional meta, paragraphs ({lead:true} = drop-cap opener), visual
   (img "" renders the gradient until scene art exists).
   ═══════════════════════════════════════════════════════════════════ */

window.EPISODES = {

  /* ── TOP-LEVEL VIEW · THE CHRONICLES (hub) ─────────────────────── */
  hub: {
    nav: "The Chronicles",
    hero: {
      kicker: "Human Shadows · The record of the long walk north",
      title: "The<br><em>Chronicles</em>",
      sub: "The codex records the kingdoms. The Chronicles record the people crushed between them. This is the story of Rik, a quarry rat of the Verdant Vanguards, and of the thirty days that were supposed to buy his son a life without chains.",
      scrollcue: "SCROLL THROUGH THE RECORD",
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    },
    railHead: "Story index<br>// the chronicles",
    railFoot: "RECORD ONGOING<br>MORE TO FOLLOW",
    phases: [
      {
        id: "ch0",
        tag: "PROLOGUE · THE WORLD BEFORE THE STORY",
        title: "The Turning Year",
        railLabel: "PROLOGUE", railSub: "THE TURNING YEAR", railLen: 2,
        meta: [
          ["FILE", "PROLOGUE"],
          ["STATUS", "required reading"]
        ],
        paragraphs: [
          { lead: true, text: "One turn of this world is twelve months: four of merciless light, two of rain, four of fungal night, two of tearing thaw. Every step of the story below is timed against that clock. If you have not yet turned the year, begin there." },
          "<a class=\"ep-open\" href=\"#ambience\">ENTER THE TURNING YEAR →</a>"
        ],
        visual: { img: "", grad: "radial-gradient(130% 100% at 60% 28%, #3a3424 0%, #241f14 55%, #0b0906 100%)", tint: "rgba(200,170,100,.14)", glow: "#f0d488", fx: "heat" }
      },
      {
        id: "ch1",
        tag: "FILE 01 · VOICE-OVER RECORD",
        title: "Chains",
        railLabel: "EPISODE 01", railSub: "CHAINS", railLen: 2,
        meta: [
          ["EPIGRAPH", "Some inherit land. Others inherit wounds."]
        ],
        paragraphs: [
          { lead: true, text: "At the tail end of the four-month night, a quarry rat named Rik wakes from the same nightmare once too often. One month before the thaw, he knocks on every door in the village and offers his kin a single sentence: the chain breaks tonight." },
          "<a class=\"ep-open\" href=\"#episode/1\">OPEN EPISODE 01 →</a>"
        ],
        visual: { img: "", grad: "radial-gradient(120% 100% at 40% 70%, #0c2622 0%, #081417 45%, #04060a 100%)", tint: "rgba(40,120,110,.20)", glow: "#79e8cf", fx: "spore" }
      },
      {
        id: "ch2",
        tag: "FILE 02 · VOICE-OVER RECORD",
        title: "The Road That Knows Your Name",
        railLabel: "EPISODE 02", railSub: "THE ROAD", railLen: 2,
        meta: [
          ["EPIGRAPH", "Some are saved. Others are simply moved aside."]
        ],
        paragraphs: [
          { lead: true, text: "Six days out, nine left until dawn. An old stone road through the scrubland, two pale bulls who have never been forced to hurry, and a Vanguard patrol that shouts stop." },
          "<a class=\"ep-open\" href=\"#episode/2\">OPEN EPISODE 02 →</a>"
        ],
        visual: { img: "", grad: "linear-gradient(160deg, #2a2740 0%, #34304e 35%, #1e2236 70%, #0f111d 100%)", tint: "rgba(70,60,110,.22)", glow: "#9d92d6", fx: "dust" }
      },
      {
        id: "ch3",
        tag: "FILE 03 · VOICE-OVER RECORD",
        title: "The Sigil's Weight",
        railLabel: "EPISODE 03", railSub: "THE SIGIL", railLen: 2,
        meta: [
          ["EPIGRAPH", "Some debts cannot be paid. Some lines, once crossed, stay crossed."]
        ],
        paragraphs: [
          { lead: true, text: "At the hyena border stands a village that folded in on itself, a woman who is done running, and a carved wooden disc that can protect exactly one family." },
          "<a class=\"ep-open\" href=\"#episode/3\">OPEN EPISODE 03 →</a>"
        ],
        visual: { img: "", grad: "linear-gradient(165deg, #26201c 0%, #1a1512 45%, #0b0908 100%)", tint: "rgba(150,120,90,.16)", glow: "#c9a37a", fx: "ash" }
      },
      {
        id: "ch4",
        tag: "FILE 04 · VOICE-OVER RECORD",
        title: "What the Whip Taught",
        railLabel: "EPISODE 04", railSub: "THE WHIP", railLen: 2,
        meta: [
          ["EPIGRAPH", "Some cages have bars. Others have ladders."]
        ],
        paragraphs: [
          { lead: true, text: "Across the border, the camp issues everything by bell and banner: bread, sleep, even darkness. Twelve days in, Ian comes home with two small wounds, and a fast-tongued rat at the water trough starts talking about walls, wells, and the price of both." },
          "<a class=\"ep-open\" href=\"#episode/4\">OPEN EPISODE 04 →</a>"
        ],
        visual: { img: "", grad: "linear-gradient(160deg, #3a2f1e 0%, #2a2115 45%, #0f0b06 100%)", tint: "rgba(210,170,90,.16)", glow: "#e8c878", fx: "heat" }
      },
      {
        id: "ch5",
        tag: "FILE 05 · VOICE-OVER RECORD",
        title: "The Commission",
        railLabel: "EPISODE 05", railSub: "THE COMMISSION", railLen: 2,
        meta: [
          ["EPIGRAPH", "Some walls keep the world out. Others only keep the proof in."]
        ],
        paragraphs: [
          { lead: true, text: "Four days southwest stands a hamlet with fresh mortar, an oiled gate, and a name Rik has carried since a bruised road two seasons ago. Nine rats are sent to prove an argument. The wall is rated against raiders on hoof. They are not on hooves." },
          "<a class=\"ep-open\" href=\"#episode/5\">OPEN EPISODE 05 →</a>"
        ],
        visual: { img: "", grad: "linear-gradient(160deg, #3a1c14 0%, #2a140e 45%, #0f0605 100%)", tint: "rgba(220,110,60,.18)", glow: "#f0916a", fx: "ash" }
      }
    ],
    end: {
      title: "The record is incomplete. The year is still turning.",
      links: [
        { label: "Begin · Episode 01 →", action: "goto:episode/1" },
        { label: "Discuss the episodes on Discord ↗", href: "https://discord.gg/4fQUzgQcyC" },
        { label: "← The Kingdoms", action: "goto:factions" },
        { label: "↑ Back to the top", action: "top" }
      ],
      visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
    }
  },

  /* ── THE EPISODES ──────────────────────────────────────────────── */
  episodes: [

    /* ═══ EPISODE 01 · CHAINS ═══════════════════════════════════════ */
    {
      slug: "1",
      title: "Episode 01 · Chains",
      hero: {
        kicker: "The Chronicles · Episode 01",
        title: "<em>Chains</em>",
        sub: "Some inherit land. Others inherit wounds.",
        scrollcue: "SCROLL TO BEGIN THE ESCAPE",
        visual: { img: "images/episodes/ep1-hero.jpg", grad: "radial-gradient(120% 100% at 40% 70%, #0c2622 0%, #081417 45%, #04060a 100%)", tint: "rgba(40,120,110,.20)", glow: "#79e8cf", fx: "spore" }
      },
      railHead: "Episode 01<br>// Chains",
      railFoot: "RECORD 01 SECURE<br>THE NIGHT THINS",
      phases: [
        {
          id: "e1-1",
          tag: "SCENE 01 · THE TAIL END OF THE NIGHT",
          title: "The Whip in the Dream",
          railLabel: "THE DREAM", railSub: "SCENE 01", railLen: 2,
          paragraphs: [
            { lead: true, text: "The whip cracked in Rik’s dreams. He woke with a gasp, claws digging into the dirt floor, heart pounding hard enough to hurt. In the nightmare, it wasn’t him beneath the buffalo overlord’s shadow. It was Ian. Small. Screaming. Running forward to take the blow meant for his father." },
            "Rik lay still in the dark, breath shallow, the taste of fear sharp on his tongue.",
            "Rik is a rat in the grip of the Verdant Vanguards, a kingdom ruled by towering buffaloes and cows. To them, his kind were untouchables, good only for hauling stone and breaking their bodies in the quarries.",
            "This world has no gentle seasons. Four months of endless burning daylight: vines exploding, forests choking themselves. Then two months of heavy rain and dusk, the sky bruised and weeping. Then the light fails. Fungi rise in the four frozen months of night, colossal towers feeding on the rot. Then two months of tearing thaw and dawn, ice cracking open, water rushing free. Then the cycle repeats.",
            "Now, it was the tail end of the night. One month remained before the thaw.",
            "Rik’s hut crouched low against the cold, a patchwork of scavenged scraps. Outside, massive fungi glowed faintly, their spores drifting through the air like pale ghosts. Inside, the cold pressed close.",
            "But the real torment wasn’t the world. It was the shame.",
            "The old scars across Rik’s back burned in his memory, each one earned under a whip. His gaze drifted to Ian, asleep beside him, a crude wooden toy clenched in his small paws. Innocent. Unmarked. The boy would turn nine soon. Old enough for the quarries.",
            "Rik’s fists tightened. He couldn’t let that happen. Tonight, they would leave."
          ],
          visual: { img: "images/episodes/ep1-1.jpg", grad: "linear-gradient(165deg, #10181a 0%, #0b1214 45%, #05080a 100%)", tint: "rgba(40,110,100,.14)", glow: "#7fd0bd", fx: "dust" }
        },
        {
          id: "e1-2",
          tag: "SCENE 02 · BEFORE THE GRAY DAWN",
          title: "Doors in the Dark",
          railLabel: "THE DOORS", railSub: "SCENE 02", railLen: 2,
          paragraphs: [
            { lead: true, text: "He reached for Ruby and shook her gently awake. Her eyes snapped open, sharp with fear as the fungal glow painted the walls. She didn’t ask why. She already knew what running meant: hostile lands, patrols that could crush them without slowing." },
            "Rik pulled out the map. Its lines had been etched by a camel trader, one of the long-haul wanderers who sold routes north and grain-prices south, whichever way the war was paying that season: rumors and roads no rat could afford outright. The path led north, toward the territory of the Mooncrest Matriarch, the hyena kingdom.",
            "Ruby’s voice came low, unsteady. “What if they’re no better?”",
            "They were ruthless. Enemies of the buffaloes, yes, but they helped rat rebels only when it suited them. Rik nodded. He understood. There was no safe haven waiting. No miracle. The Shadow’s Teeth, the whispered rat kingdom, lay far beyond reach, more myth than promise.",
            "This was simply the least terrible choice.",
            "For a long moment, Ruby said nothing. Her silence stretched, heavy with doubt. Then something shifted: her shoulders squared, her breath steadied. Her jaw tightened, resolve locking into place. “For Ian,” she whispered, voice low but unbreakable.",
            "Time was short. Dawn’s gray light clawed at the horizon, and the fungal glow outside the huts began to fade, dimming like a dying ember. Rik slipped out into the cold, heart pounding hard enough to feel loud. The air bit at his scars as he moved.",
            "He went door to door, waking what kin he could. He didn’t beg. He didn’t plead for hands to carry loads. He offered only this: “The chain breaks tonight. Walk with us, or stay in the quarries.”",
            "The night answered with doors.",
            "Jay first. His door creaked open to bleary terror. “North? To the hyenas?” Jay hissed. “You’re cracked, Rik. They’ll chew our bones for sport.” The door slammed.",
            "The sound struck like a whip, sharp and familiar.",
            "Mira came next, her voice low and brittle as flint. “My kits are too small for that wild.” Another door shut.",
            "Old Thorne coughed spore-dust into the air, shoulders hunched. “Fool’s trek,” he rasped. “The Vanguards’ll grind you first.” Door after door. Refusal after refusal.",
            "The huts blurred together: relatives, once-brothers-in-chains, each sealing their fear behind timber and doubt. Rik’s grip tightened on the map. He was alone with Ruby and Ian. Its edges were worn smooth, as if by hands that had once believed in it.",
            "The wilds showed no mercy to the solitary. But the quarries had taught him worse. The weight of it settled in his chest. Not crushing, just familiar. Like the ache before a swing.",
            "Then he reached Jack’s door.",
            "No wide-eyed recoil. No flinch. Just steady eyes, deep-set and shadowed, the kind that had seen too many dawn-whips to waste breath on fear. Behind him the hut held one bedroll and a cold hearth. Whatever family Jack had once had, the quarry ledgers had stopped listing them years ago.",
            "Rik laid out the plan in a low rush: hyena borders, stolen miles, freedom without chains. Jack listened without interrupting. His muzzle twitched once. Then he dipped his chin.",
            "“Risky as a spore-storm,” he said. He paused. “But staying?” Another pause. “That’s the real grave for us.”",
            "No grin. No celebration. Just the quiet click of a pact being made.",
            "As dawn sharpened, the small group gathered in the thinning gloom. Mules groaned under scant loads: dried fungi slabs that crunched like old regrets, quarry-filched picks, ropes coiled tight, rags stiff with ochre dust.",
            "They moved together into the spore-mist, steps falling into rhythm. No speeches. No brave cries. Only the simple, terrible courage of turning their backs on the only hell they had ever known."
          ],
          visual: { img: "images/episodes/ep1-2.jpg", grad: "linear-gradient(160deg, #0d1218 0%, #0a0e13 50%, #04060a 100%)", tint: "rgba(60,90,90,.14)", glow: "#9db8b0", fx: "dust" }
        },
        {
          id: "e1-3",
          tag: "SCENE 03 · THE GLOWING MAZE",
          title: "Into the Fungal Wilds",
          railLabel: "THE WILDS", railSub: "SCENE 03", railLen: 2,
          paragraphs: [
            { lead: true, text: "They stepped into the fungal wilds as the night began to thin. Towering stems rose around them like ancient sentinels, breathing out a low mist that clung to fur and skin. Spores drifted through the air, faintly luminous, carrying the damp, living smell of planet reclaiming itself." },
            "Ian tugged at Rik’s sleeve, eyes heavy with sleep, asking without words where they were headed.",
            "Rik knelt, meeting those wide, trusting eyes.",
            "“A better place,” he said quietly. “No chains. Just a long walk.”",
            "Ian’s face said everything without a sound: how long? how far?",
            "“Thirty days,” Rik answered the unspoken question.",
            "The boy’s eyes went huge, the idea stretching out like the spore-mist ahead.",
            "Rik smiled despite himself, ruffling his ears.",
            "“It's an adventure, Ian” he whispered.",
            "Hope flickered there, small but stubborn.",
            "They moved on. Footsteps vanished into the spore fog. Half-buried ruins loomed in the haze: broken stone and rusted shapes no one remembered how to use, left standing and slowly turning sacred. Somewhere in the distance, a howl rose, then faded. Wild beasts, maybe. Or patrols.",
            "Fifteen days until dawn. Until the night could betray them.",
            "Jack muttered warnings under his breath. Rik kept walking.",
            "Days blurred into a careful rhythm. They skirted glowing thickets. Counted steps. Chewed dried fungi that tasted like chalk and old regret.",
            "Then the path closed.",
            "A wall of miasma drifted across the ground ahead, slow and deliberate, its edges shimmering with sickly green light. It moved like something alive, patient and uncaring.",
            "Everyone stopped.",
            "The haze was thick, too thick to cross. Herbivores could sink into it and sleep, their bodies built to breathe the poison away. Predators weren’t so lucky. Lungs burned. Senses unraveled. No one lasted long.",
            "They would have to go around. Five days, maybe more.",
            "The mules stood calm near the haze, almost drowsy, while the rats shifted uneasily. Ruby’s shoulders slumped. Jack swore softly.",
            "On the way, Ian took a step. A twig snapped.",
            "The sound cracked through the stillness.",
            "At the edge of the haze, a deer stirred where it half-burrowed. Its eyes fluttered open, confused. Then it bolted straight into the miasma. Legs buckled. The animal vanished into the green, swallowed whole.",
            "Rik spun. “Ian! What were you thinking?”",
            "The words came out sharp, too sharp. Too much like the dream.",
            "Ian shrank, ears flat, eyes glassy with tears. The group froze. That deer had been food. Warmth. Days bought.",
            "Rik’s anger drained away as quickly as it came. He knelt and took Ian’s shoulders, steadying him.",
            "“Hey,” he said softly. “It’s alright. Just watch your step, yeah?” He glanced once toward the haze. “That snap chased off our supper. But we’ll find more. Stay close.”",
            "Ian nodded, scrubbing at his nose.",
            "They moved on, quieter than before."
          ],
          visual: { img: "images/episodes/ep1-3.jpg", grad: "radial-gradient(120% 100% at 45% 60%, #103029 0%, #0a1a18 50%, #04080a 100%)", tint: "rgba(40,130,115,.20)", glow: "#79e8cf", fx: "spore" }
        },
        {
          id: "e1-4",
          tag: "SCENE 04 · FIRELIGHT",
          title: "Roads Unbroken",
          railLabel: "THE FIRE", railSub: "SCENE 04", railLen: 2,
          paragraphs: [
            { lead: true, text: "Two days passed, hunger gnawing. Then luck turned." },
            "A boar lay in a frost-bitten hollow, half-buried, snorting in its sleep. A straggler that had missed the miasma’s drift. Exposed. Vulnerable.",
            "Rik notched an arrow. Jack flanked wide, bow ready. Ian watched without breathing, sling clenched in both paws.",
            "Breathe. Aim. The string hummed.",
            "The arrow struck deep. The boar jerked once, tusks scraping stone, then went still. No alarm. No chase.",
            "They worked quickly. The fire was small, shielded, but the fat hissed as it hit the flame. Smoke curled upward, fighting the fungal fog. For the first time in days, the air smelled of meat instead of rot.",
            "Laughter stirred, low and cautious.",
            "Ian gnawed happily on a rib almost too big for him. He leaned close to Rik and whispered, conspiratorial, “Papa… deer is tastier. But this boar’s still good.”",
            "Rik chuckled, ruffling his ears. “Savor it,” he said. “This is the taste of roads unbroken.”",
            "They vanished deeper into the glowing maze.",
            "Behind them, something shifted. Hoofbeats echoed faintly, then louder, closing the distance.",
            "The escape had begun. And the miasma had cost them time they could not afford."
          ],
          visual: { img: "images/episodes/ep1-4.jpg", grad: "linear-gradient(160deg, #2a1c12 0%, #1c130b 48%, #0a0604 100%)", tint: "rgba(200,120,50,.14)", glow: "#d9a05e", fx: "heat" }
        }
      ],
      end: {
        title: "The night thins. The hoofbeats close. The road north goes on.",
        links: [
          { label: "Next · Episode 02 →", action: "goto:episode/2" },
          { label: "⟁ All Chronicles", action: "goto:chronicles" },
          { label: "↑ Back to the top", action: "top" }
        ],
        visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #101a18 0%, #080d0d 55%, #040606 100%)", tint: "rgba(40,90,80,.16)", glow: "#79e8cf", fx: "spore" }
      }
    },

    /* ═══ EPISODE 02 · THE ROAD THAT KNOWS YOUR NAME ════════════════ */
    {
      slug: "2",
      title: "Episode 02 · The Road That Knows Your Name",
      hero: {
        kicker: "The Chronicles · Episode 02",
        title: "The Road That<br>Knows Your <em>Name</em>",
        sub: "Some are saved. Others are simply moved aside.",
        scrollcue: "SCROLL TO WALK THE ROAD",
        visual: { img: "", grad: "linear-gradient(160deg, #2a2740 0%, #34304e 35%, #1e2236 70%, #0f111d 100%)", tint: "rgba(70,60,110,.22)", glow: "#9d92d6", fx: "dust" }
      },
      railHead: "Episode 02<br>// The Road",
      railFoot: "RECORD 02 SECURE<br>NINE DAYS TO DAWN",
      phases: [
        {
          id: "e2-1",
          tag: "SCENE 01 · TWILIGHT",
          title: "The Bruised Road",
          railLabel: "THE ROAD", railSub: "SCENE 01", railLen: 2,
          paragraphs: [
            { lead: true, text: "Twilight pressed low against the road: neither true day nor night, only a bruised strip of sky where colors bled into one another like an old wound that refused to heal. The road itself was old, stone-packed and narrow, cutting through scrubland like a scar that refused to close." },
            "Six days out from the village. Nine left until dawn.",
            "Rik walked with his head down.",
            "Ruby kept Ian close, one paw resting on his shoulder, guiding his small steps over the uneven stone. Jack stayed slightly behind Rik, eyes always moving, counting shadows, listening for sounds that didn't belong.",
            "Two mules plodded at the rear, their loads shifting faintly with each step: dried fungi slabs, coiled rope, the quiet inventory of people who had packed for survival, not comfort.",
            "Ahead of them, two bulls walked slowly.",
            "They were old: broad-backed, heavy-boned, their hides pale as river-washed stone. Each step was deliberate, unhurried, as if the road itself would wait for them. There was no cart, no escort, just the quiet confidence of creatures who had never been forced to hurry.",
            "One of them glanced back once, brief and unhurried, as if cataloguing what shared the road with him. Then his eyes returned forward.",
            "Rik felt the familiar tightening in his chest. Not fear exactly. Something older. Conditioned. His pace did not change. Overtaking them would be unthinkable, even here, even now, even though no one knew his name in this land.",
            "Both groups were aware of each other. No words passed. They shared the road, and yet did not."
          ],
          visual: { img: "", grad: "linear-gradient(165deg, #2c2841 0%, #221f33 45%, #100f1c 100%)", tint: "rgba(70,60,110,.20)", glow: "#9d92d6", fx: "dust" }
        },
        {
          id: "e2-2",
          tag: "SCENE 02 · THE PATROL",
          title: "Hooves",
          railLabel: "THE PATROL", railSub: "SCENE 02", railLen: 2,
          paragraphs: [
            { lead: true, text: "Then came the sound of hooves." },
            "Sharp. Fast. Unmistakable.",
            "Jack stiffened first.",
            "Two buffalo riders emerged from behind, dark and imposing, their armor dulled by use. Vanguard patrol. Enforcers. Not holy. Not symbolic. Practical. They sat tall on broad mules bred for distance, their eyes already sweeping the road, already assessing, already judging.",
            "They had seen Rik and his group.",
            "Rik slowed his breath. The village was far behind them. No one here knew who he was. No marks. No chains. Just another rat on a road.",
            "<em>Keep walking</em>, he told himself. <em>Stopping is guilt.</em>",
            "The patrol shouted.",
            "\"Oi! You there. Stop!\"",
            "Rik did not turn. Neither did Ruby. Neither did Jack. They walked as if the word had never been spoken.",
            "Ian flinched at the shout, pressing tighter against Ruby's side. She squeezed his shoulder once without looking down.",
            "The distance between them and the bulls closed. Rik could smell the dust on their hides now, hear the steady scrape of hoof against stone.",
            "The riders shouted again, louder, angrier.",
            "The buffaloes surged forward on their mounts, cutting past Rik's group and wheeling around in front of them. The mules brayed and stamped as the patrol blocked the road.",
            "\"STOP!\"",
            "The shout cracked like a whip. Rik froze.",
            "One rider dismounted heavily, boots striking the stone with intent. He was already cursing: filthy rats, stubborn silence, open disrespect. His partner stayed mounted, eyes drifting across the mules’ loads, lingering too long on the quarry-filched picks bundled beneath the rope.",
            "Rik’s nightmare had found him. The thing he had run from did not need walls or villages. It only needed a road.",
            "The patrolman raised his whip.",
            "Ian buried his face against Ruby’s leg, small body trembling, both paws gripping the fabric of her wrap like it was the last solid thing in the world.",
            "Rik’s gaze snapped to them: the exact image from his dream. The same shadow falling over his son.",
            "A high, thin whistle rose in his ears, sourceless and piercing. The world outside it dulled: the patrol’s snarling, Jack’s sharp breathing, the mules shifting weight. Everything pulled underwater, replaced by that single note: the sound the body makes when it has already chosen violence before the mind can catch up.",
            "His fingers closed around the wooden staff strapped to the mule before he had decided to reach for it. Muscles coiled. Not resolve. Not decision. Something rawer. Something cornered.",
            "Jack saw it.",
            "\"No,\" Jack hissed, gripping Rik's arm. \"Don't.\"",
            "The air shifted."
          ],
          visual: { img: "", grad: "linear-gradient(160deg, #241722 0%, #1a111a 48%, #0b070c 100%)", tint: "rgba(120,50,70,.16)", glow: "#c98a8a", fx: "dust" }
        },
        {
          id: "e2-3",
          tag: "SCENE 03 · THE INTERVENTION",
          title: "Enough",
          railLabel: "ENOUGH", railSub: "SCENE 03", railLen: 2,
          paragraphs: [
            { lead: true, text: "Before the strike could fall, a deep voice cut through the moment." },
            "\"Enough.\"",
            "It wasn't shouted. It didn't need to be.",
            "Both bulls had turned now, massive forms facing the patrol. The speaking bull stood calmly, his voice steady, trained by generations of being obeyed.",
            "The patrolman froze.",
            "Slowly, angrily, he turned.",
            "\"What did you say?\" the buffalo snarled.",
            "The bull inhaled, visibly composing himself. The command drained from his tone, replaced by something smoother. Practiced.",
            "\"These people are with me,\" he said. \"I hired them. I am taking them to my village. There was work.\"",
            "A lie. Clean. Effortless.",
            "The patrolman spat into the dust.",
            "\"All of you deaf?\" he snapped. \"We've been shouting since the bend.\"",
            "His gaze settled on Rik. Predatory. Measuring. Then it dropped to Ian, small and shaking, still clutching Ruby's leg, and something flickered across the patrolman's face. Not sympathy. Calculation. A kit that age, out here, on foot.",
            "\"Village name.\"",
            "Before the silence could condemn him, the bull spoke again.",
            "\"Whitehorn,\" he said. The name came without hesitation, easy as breath, as if it had been waiting in his mouth all along. It meant nothing to anyone present.",
            "The patrolman frowned.",
            "The mounted rider leaned down and muttered something to his partner. The standing buffalo glanced at the quarry picks one more time, then back at the bull. The bull met his gaze without blinking, without hurrying, as if he had nowhere else to be and nothing to prove.",
            "Then the patrolman muttered something low, a promise or a warning it was impossible to tell, and mounted his mule. The patrol rode off, hooves swallowed by the thin morning light. But one rider glanced back at the last bend before the road curved away."
          ],
          visual: { img: "", grad: "linear-gradient(165deg, #2b2a24 0%, #201f1a 48%, #0d0c09 100%)", tint: "rgba(160,150,120,.14)", glow: "#cdbf9a", fx: "dust" }
        },
        {
          id: "e2-4",
          tag: "SCENE 04 · THE FORK",
          title: "Never on My Conscience",
          railLabel: "THE FORK", railSub: "SCENE 04", railLen: 2,
          paragraphs: [
            { lead: true, text: "Jack watched until they disappeared." },
            "\"They'll remember us,\" he said quietly.",
            "Rik said nothing. He already knew.",
            "The bulls did not look back. They simply resumed walking, slow as before, as if nothing had happened.",
            "Rik stood with the staff still in his hand, the grip leaving marks in his palm. After a moment, he forced himself to move and caught up.",
            "\"Why did you stop them?\" Rik asked.",
            "The bull kept his eyes on the road.",
            "\"They were about to make trouble,\" he said.",
            "\"They weren't stopping you,\" Rik replied.",
            "\"No.\"",
            "\"They were stopping us.\"",
            "The bull's tail flicked once.",
            "\"My journey requires a clear path,\" he said after a moment. \"Violence at this hour would have followed me the rest of the day.\"",
            "Rik felt a chill.",
            "\"You mean you didn't want to see it.\"",
            "The bull did not deny it.",
            "\"There are things I do not interfere with,\" he said. \"And things I do not wish to walk beside.\"",
            "Rik's voice hardened.",
            "\"So if they had taken us farther back…\"",
            "The bull interrupted gently.",
            "\"Then we would not be having this conversation.\"",
            "They walked on.",
            "After several steps, the bull spoke again, as if recalling a minor errand.",
            "\"Two bends ahead, the road forks. The patrol will double back along the wide path.\"",
            "Rik stopped.",
            "\"You're telling us to take the other one.\"",
            "\"I am telling you where they will be.\"",
            "Rik studied the bull's face.",
            "\"So we disappear. Off your road. Out of your conscience.\"",
            "The bull exhaled slowly.",
            "\"You were never on my conscience.\"",
            "The road forked ahead.",
            "The bull did not slow. But his voice came back one final time, low and without malice.",
            "\"Do not walk close behind us again.\""
          ],
          visual: { img: "", grad: "linear-gradient(160deg, #23242a 0%, #191a20 48%, #0b0c10 100%)", tint: "rgba(120,130,150,.14)", glow: "#a8b0bd", fx: "dust" }
        },
        {
          id: "e2-5",
          tag: "SCENE 05 · THE NARROW PATH",
          title: "Swept Aside",
          railLabel: "SWEPT ASIDE", railSub: "SCENE 05", railLen: 2,
          paragraphs: [
            { lead: true, text: "The bulls took the wider road. Their pale forms receded into the early light, unhurried, untouched." },
            "Rik stood at the mouth of the narrow path, mules breathing softly beside him. Ruby’s hand found his arm in the half-dark. Not comfort, just quiet presence. Ian looked up, wide eyes searching his father’s face for answers neither of them had.",
            "Rik rested a paw on the boy’s head. He had nothing left to give but forward.",
            "In that moment, he understood. The bull had not saved them. He had simply swept them aside, the way one shoos stray dogs from a doorstep when their fighting grows too loud and messy. Not out of cruelty. Out of tidiness.",
            "Survival was not the same as being saved.",
            "They stepped onto the narrow path. Behind them, the wide road swallowed the bulls whole, and the growing dawn erased them as quietly as if they had never shared the same stone."
          ],
          visual: { img: "", grad: "linear-gradient(165deg, #2e2b26 0%, #211f1b 48%, #0d0c0a 100%)", tint: "rgba(180,160,120,.14)", glow: "#d8c9a3", fx: "heat" }
        },
        {
          id: "e2-6",
          tag: "SCENE 06 · WHERE THE GLOW STOPS",
          title: "Into the Gray",
          railLabel: "THE GRAY", railSub: "SCENE 06", railLen: 2,
          paragraphs: [
            { lead: true, text: "Ahead, the fungal glow thinned. Then it stopped altogether." },
            "The air changed first: a fine, ghostly ash began to settle on their fur, carried on a wind that tasted of iron and silence. The stone beneath their feet darkened, stained with something that had burned long and slow.",
            "“Papa,” Ian whispered, “why does the air taste wrong?”",
            "Rik didn’t answer.",
            "He only looked at the footprints pressed deep into the soot-stained dirt ahead: narrow, desperate, scattered.",
            "The footprints of people who had run out of roads.",
            "He gripped the mule’s lead and pulled them forward into the gray."
          ],
          visual: { img: "", grad: "linear-gradient(160deg, #1c1d20 0%, #141518 48%, #08090b 100%)", tint: "rgba(90,110,130,.16)", glow: "#a2b4c7", fx: "ash" }
        }
      ],
      end: {
        title: "The gray road leads to the border. What waits there has already burned.",
        links: [
          { label: "Next · Episode 03 →", action: "goto:episode/3" },
          { label: "← Episode 01", action: "goto:episode/1" },
          { label: "⟁ All Chronicles", action: "goto:chronicles" }
        ],
        visual: { img: "", grad: "linear-gradient(160deg, #1c1d20 0%, #121316 50%, #060708 100%)", tint: "rgba(90,110,130,.16)", glow: "#a2b4c7", fx: "ash" }
      }
    },

    /* ═══ EPISODE 03 · THE SIGIL'S WEIGHT ═══════════════════════════ */
    {
      slug: "3",
      title: "Episode 03 · The Sigil's Weight",
      hero: {
        kicker: "The Chronicles · Episode 03",
        title: "The Sigil's<br><em>Weight</em>",
        sub: "Some debts cannot be paid. Some lines, once crossed, stay crossed.",
        scrollcue: "SCROLL TO CROSS THE BORDER",
        visual: { img: "", grad: "linear-gradient(165deg, #26201c 0%, #1a1512 45%, #0b0908 100%)", tint: "rgba(150,120,90,.16)", glow: "#c9a37a", fx: "ash" }
      },
      railHead: "Episode 03<br>// The Sigil",
      railFoot: "RECORD 03 SECURE<br>THE THAW BEGINS",
      phases: [
        {
          id: "e3-1",
          tag: "SCENE 01 · THE BORDER VILLAGE",
          title: "Ash in the Soil",
          railLabel: "THE VILLAGE", railSub: "SCENE 01", railLen: 2,
          paragraphs: [
            { lead: true, text: "As they approached the border, the land told the story before anyone spoke." },
            "Ash had mixed into the soil like old guilt. Footprints pressed deep and never erased. Walls leaned inward, not outward, as if the village had folded in on itself to hide from what was coming.",
            "Rik slowed.",
            "Rat-built. Low huts. Narrow lanes. Reinforced interiors. Homes built by those who assumed every stranger would take, never give.",
            "Not a soul in sight.",
            "<em>Even better</em>, Rik thought.",
            "At the center of the village, a plank lay half-buried in soot. A rat family had been tied there: two adults, two juveniles. Not burned. Just broken.",
            "Ruby turned Ian's head before his eyes could settle. The boy didn't resist. His small body had already gone rigid.",
            "They moved on.",
            "A shape stirred inside a collapsed hut. The woman stepped out first: thin, coiled tight, one arm wrapped across three children clustered at her side. Not protecting them so much as holding herself together.",
            "She looked at Rik the way survivors look at strangers after the burning: eyes that had already decided you were useless.",
            "Jack stepped up beside him, having scouted the perimeter in silence. Ruby stayed a half-step back, hands open and still.",
            "\"You're passing through,\" the woman said. Not a question.",
            "\"North,\" Rik answered. \"Hyena border.\"",
            "She made a sound, not quite a laugh. \"Of course you are.\"",
            "Rik glanced at the ruined huts. \"What happened here?\"",
            "Her jaw tightened. \"The young ones got ideas. Talked to hyenas out in the scrub. Showed them the back-ways, the ones the buffaloes miss.\" A hard, flat pause. Her voice did not change. \"My eldest walked with them.\" Another pause. \"Buffaloes figured it out. We were the only village they didn't torch first. So naturally, we looked guilty.\"",
            "She looked at the plank, then away.",
            "\"They came yesterday.\"",
            "Silence.",
            "\"Why didn't you run?\" Jack asked.",
            "The woman's eyes cut to him. \"Where?\"",
            "Ruby's voice came soft. \"We have room. You could…\"",
            "\"I'm not going anywhere,\" she said. Flat. Final. There was no grief in it. Just certainty.",
            "She looked at the children pressed against her, then back at Rik. \"You need somewhere to rest before the border push. Fine. One night. Don't touch anything.\""
          ],
          visual: { img: "", grad: "linear-gradient(160deg, #221d19 0%, #181410 48%, #0a0806 100%)", tint: "rgba(140,110,80,.14)", glow: "#c9a37a", fx: "ash" }
        },
        {
          id: "e3-2",
          tag: "SCENE 02 · THE CAMP",
          title: "One Night",
          railLabel: "ONE NIGHT", railSub: "SCENE 02", railLen: 2,
          paragraphs: [
            { lead: true, text: "They made camp at the edge of the village. Small fire. Low voices. Ian fell asleep early, curled against Ruby." },
            "Jack kept watch, whiskers low. Rik sat near the woman, who hadn't slept, hadn't eaten, hadn't moved much. She stared into the gray between the huts, that flat pre-dawn light that showed everything and softened nothing, like she was waiting for the last blow to fall.",
            "He didn't try to fill the silence.",
            "After a long while, she spoke.",
            "\"You think the hyenas will take you in? Give you work?\"",
            "\"It's a better chance than the quarries,\" Rik said.",
            "She almost smiled. Didn't. \"That's what the young ones thought too. That there was always a better chance just a little further north.\"",
            "Rik said nothing.",
            "\"You've got a kid,\" she observed, not warmly.",
            "\"Yeah.\"",
            "\"Then keep moving. Don't stop. Don't look back. Places like this,\" she nodded at the ruins around them, \"they're what happens when rats start thinking they can negotiate with the world.\""
          ],
          visual: { img: "", grad: "linear-gradient(165deg, #17120e 0%, #110d0a 50%, #070504 100%)", tint: "rgba(180,110,50,.12)", glow: "#d9a05e", fx: "dust" }
        },
        {
          id: "e3-3",
          tag: "SCENE 03 · THE RIDGE",
          title: "The Sigil",
          railLabel: "THE SIGIL", railSub: "SCENE 03", railLen: 2,
          paragraphs: [
            { lead: true, text: "The sound hit before anyone saw them." },
            "Hoofbeats. Several.",
            "Dawn was breaking, pale and flat, light enough to see everything, dark enough to hide nothing.",
            "A hyena patrol crested the ridge at the village's northern edge. Four riders, moving at an easy, unhurried pace. Not hunting. They weren’t chasing anything. They had time to look.",
            "The woman was on her feet in an instant. \"Inside,\" she hissed at her children. \"Now.\"",
            "The patrol didn't slow. The lead rider's eyes swept the group the way one sweeps a room for valuables, not people. They landed on Rik and Jack.",
            "\"The males,\" he said, thumb jerking sideways.",
            "Two riders dismounted, hands already moving.",
            "The woman stepped between them. She unwrapped the cloth bundle at her waist and held the disc up: flat, deeply carved, unmistakably hyena-marked. Along its rim ran a single word in the hyenas' angular script, cut by someone who had earned the right to be written down.",
            "The lead rider leaned forward in the saddle. A long look. Then he straightened.",
            "\"Move on,\" he said to no one in particular.",
            "The patrol rode through without another word.",
            "Silence flooded back.",
            "The woman stood motionless until the hoofbeats faded completely. Then she rewrapped the sigil. Slowly. Deliberately. Tucked it back against her waist.",
            "She didn't look at Rik.",
            "\"Get some sleep,\" she said. \"You move at first light.\""
          ],
          visual: { img: "", grad: "linear-gradient(165deg, #2b2a26 0%, #1f1e1b 48%, #0c0c0a 100%)", tint: "rgba(160,150,120,.14)", glow: "#cdbf9a", fx: "dust" }
        },
        {
          id: "e3-4",
          tag: "SCENE 04 · BEFORE FIRST LIGHT",
          title: "The Theft",
          railLabel: "THE THEFT", railSub: "SCENE 04", railLen: 2,
          paragraphs: [
            { lead: true, text: "The fire had died to embers." },
            "Dawn had broken fully now, pale light seeping through the gaps in the hut walls, slow and indifferent.",
            "The children slept pressed into their mother. The woman slept with one hand resting on the cloth bundle at her waist.",
            "Rik lay still, staring at the ceiling.",
            "Ian's sleeping face. The patrol leader's thumb jerking sideways. Two riders dismounting.",
            "<em>We go in there without it, we're gone.</em>",
            "He sat up.",
            "Moved like shadow.",
            "Crossed the room without sound.",
            "Knelt beside the woman.",
            "Her hand still rested near the bundle, the same hand that had held the sigil up like a prayer only hours ago.",
            "Rik's fingers, calloused and steady, worked the knot. She stirred with a soft sound, nothing more.",
            "He slid the disc free.",
            "Stood.",
            "Didn't look at her face.",
            "Signaled to Jack and Ruby.",
            "The jungle swallowed them.",
            "They were a mile out before Jack grabbed his shoulder and spun him around.",
            "\"You took it.\" Jack's voice was low and wrecked. \"She pulled that out to save us. You watched her do it. And you took it while she slept.\"",
            "\"We go in there without a sigil, we're dead at the gate,\" Rik said.",
            "\"Those kids…\"",
            "\"I know.\"",
            "\"Rik…\"",
            "\"I know, Jack.\"",
            "Jack looked at him like he was seeing something for the first time. Something he didn't want to see.",
            "\"The buffaloes take from us because they think we're animals,\" Jack said quietly. \"What's our excuse?\"",
            "Rik met his gaze and held it.",
            "\"Survival,\" he said. \"That's all we've got left.\"",
            "Jack had no reply.",
            "They walked into the dark."
          ],
          visual: { img: "", grad: "linear-gradient(160deg, #0c0f14 0%, #090b0f 50%, #040507 100%)", tint: "rgba(90,110,140,.14)", glow: "#8fa3b8", fx: "dust" }
        },
        {
          id: "e3-5",
          tag: "SCENE 05 · THE CROSSING",
          title: "You Must Be Samos",
          railLabel: "THE CROSSING", railSub: "SCENE 05", railLen: 2,
          paragraphs: [
            { lead: true, text: "Rik crossed the border alone." },
            "The hyena camp opened ahead: orderly, loud, smelling of iron and wet hide.",
            "A patrol stopped him. The commander didn't bother dismounting. He took the sigil with two fingers, as if it might stain him, turned it once, and glanced Rik up and down like cargo.",
            "\"You must be Samos,\" he said, already checking a box and moving on. \"See the quartermaster for gear. We've got use for more rats.\"",
            "He turned his back.",
            "The way ahead opened.",
            "Rik walked through.",
            "Behind him, a village waited. Unprotected. Without even knowing it yet.",
            "The hyenas gave them a corner: a half-ruined shed at the edge of camp. Walls patched with scavenged hides. Floor still smelling of old blood and iron.",
            "Ruby's shoulders sagged with exhaustion. Jack said nothing. Ian's eyes were already heavy.",
            "\"Rest,\" Rik said quietly. \"All of you.\"",
            "He turned before anyone could answer.",
            "Jack's voice followed him into the daylight. \"Rik…\"",
            "He was already moving."
          ],
          visual: { img: "", grad: "linear-gradient(160deg, #1c222b 0%, #14181f 48%, #090b0e 100%)", tint: "rgba(90,110,130,.16)", glow: "#a2b4c7", fx: "dust" }
        },
        {
          id: "e3-6",
          tag: "SCENE 06 · THE TEARING THAW",
          title: "The First Light",
          railLabel: "THE RUN", railSub: "SCENE 06", railLen: 2,
          paragraphs: [
            { lead: true, text: "He ran." },
            "Not walked. Not scouted.",
            "Ran.",
            "The thaw had begun: the first true light in four months, low and climbing, ice cracking open along every path. Nowhere to hide. No fungal mist to soften the edges. No night to forgive. And behind this pale sun, already promised, the long daylight waited its turn.",
            "His paws bled on frozen ground and ash-choked paths. Scars burned like fresh whips across his back.",
            "<em>She saved us with that sigil. Without it, her children have nothing.</em>",
            "<em>The next patrol will come. They'll see the mark is gone. And they'll finish what the buffaloes started.</em>",
            "He pushed harder. Muscles screamed.",
            "He ran until his lungs burned hotter than his scars.",
            "The village appeared as a wound in the new light.",
            "No shadows to soften it. No gray to blur the edges. Everything exposed: the ash, the plank, the drag marks, all of it clear and pitiless under the first sun in four months, a sun with nowhere else to be for a long time yet.",
            "He found the woman first.",
            "Tied to the same plank. Body broken further. Eyes open, staring at nothing.",
            "The children. Gone.",
            "Drag marks in the ash. Small prints ending where larger hooves had trampled.",
            "Rik dropped to his knees.",
            "He placed the wooden disc, the hyena sigil, gently on the woman's chest.",
            "A useless offering.",
            "No scream left him. Only a low, rattling breath that tasted of spore-dust and regret.",
            "He sat there a long time.",
            "The new sun didn't move much. It never would, not for months.",
            "No darkness coming to end it. No night to tell him it was time to rise.",
            "He rose anyway."
          ],
          visual: { img: "", grad: "radial-gradient(130% 100% at 60% 28%, #f5e9c8 0%, #dcc48e 30%, #a87d47 60%, #4f3a20 100%)", tint: "rgba(255,236,180,.24)", glow: "#f0d488", fx: "heat" }
        },
        {
          id: "e3-7",
          tag: "SCENE 07 · WHAT LISTENS",
          title: "The Killing Stone",
          railLabel: "THE STONE", railSub: "SCENE 07", railLen: 2,
          paragraphs: [
            { lead: true, text: "The walk back was slower." },
            "The jungle was waking in the thaw: vines swelling overhead, roots cracking through old stone, meltwater running beneath everything, the air sweet and rotting at once. Every mile carried the weight of what he'd seen and what he'd done, pressing down with a patience that felt almost deliberate.",
            "Then he saw it.",
            "Half-swallowed by creepers, leaning where the ground had shifted beneath it: a killing stone.",
            "Rat-made. Old. Older than the villages, older than the quarries maybe.",
            "A flat slab stained so deep the color had become part of the rock itself. Around its base, small offerings had calcified into the dirt: bone fragments, seed husks, a tooth wrapped in vine-thread. Things given by hands that had nothing else to give.",
            "No carvings. No scripture. No walls to keep anyone out.",
            "Just the stone. The stain. And whatever listened.",
            "Rik stopped.",
            "He didn't kneel. Not at first.",
            "<em>The temples aren't for us. Never were.</em>",
            "<em>Our gods live here: in the root, in the rot, in the stone where you leave the blood and hope something listens.</em>",
            "<em>You don't kneel at a stone like this to be saved. Nobody ever was. You kneel to be noticed.</em>",
            "<em>I did everything right. I ran. I bled. I kept my boy from the quarries.</em>",
            "<em>So why does it keep asking for more?</em>",
            "He looked at his hands. Still steady. Still stained from the woman's plank where he'd placed the sigil back on her chest.",
            "<em>You give the offering and the altar stays hungry. You cut the throat and the ground drinks it and says: again.</em>",
            "<em>Is that what a god is? Just a mouth that never closes?</em>",
            "He knelt then. Not in worship. In exhaustion.",
            "<em>The ones who rule? Their gods speak in visions. In light. In commandments carved on temple walls we're not allowed to touch.</em>",
            "<em>Our gods don't speak. They just take. And if you're still breathing after, that's the answer.</em>",
            "<em>That's the whole mercy.</em>",
            "Somewhere above him the jungle noise thinned, then stopped, the way a forest sometimes forgets itself.",
            "His forehead touched the stone. Cool. Ancient. Indifferent in a way that felt almost honest.",
            "<em>So what do you call it when you do everything the blood asks, and it still isn't enough?</em>",
            "<em>Not fate. Not punishment.</em>",
            "<em>Just the price of being born on the wrong side of the altar.</em>",
            "He stayed there longer than he should have.",
            "Then he rose. Legs shaking. Mind quieter than it should have been.",
            "And walked on.",
            "The makeshift shed was quiet when he returned. Daylight pressed through every gap in the walls: the thaw light, thin but relentless, the first installment of a sun that would not stop climbing for months. Jack breathed steady in the corner, his body still running on the old rhythm of night-sleep. Ian lay curled on a scrap of hide, small chest rising and falling. One paw still clutching the crude wooden toy from the old hut.",
            "Ruby was awake.",
            "Her eyes found him in the doorway. The stains. The hour. The place at his belt where the sigil had been, and was not.",
            "She asked nothing. After a long moment she turned back to Ian and closed her eyes.",
            "Rik stood over him.",
            "No words came.",
            "Only a low, rattling breath escaped him: the sound of something vital cracking inside, not loud enough to wake anyone, not soft enough to ignore.",
            "He sank slowly to his knees beside his son, claws digging into the dirt floor the same way they had on the night he first dreamed of the whip.",
            "Outside, the thaw light stretched on, pale and unbroken. The world kept turning, vast and uncaring, as if nothing had happened at all."
          ],
          visual: { img: "", grad: "linear-gradient(170deg, #172420 0%, #0e1614 40%, #040606 100%)", tint: "rgba(40,80,60,.20)", glow: "#63ab87", fx: "spore" }
        }
      ],
      end: {
        title: "The record continues. The thaw has begun, and the long light is still owed.",
        links: [
          { label: "Next · Episode 04 →", action: "goto:episode/4" },
          { label: "← Episode 02", action: "goto:episode/2" },
          { label: "⟁ All Chronicles", action: "goto:chronicles" }
        ],
        visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
      }
    },

    /* ═══ EPISODE 04 · WHAT THE WHIP TAUGHT ═════════════════════════ */
    {
      slug: "4",
      title: "Episode 04 · What the Whip Taught",
      hero: {
        kicker: "The Chronicles · Episode 04",
        title: "What the<br>Whip <em>Taught</em>",
        sub: "Some cages have bars. Others have ladders.",
        scrollcue: "SCROLL TO CLIMB",
        visual: { img: "", grad: "linear-gradient(160deg, #3a2f1e 0%, #2a2115 45%, #0f0b06 100%)", tint: "rgba(210,170,90,.16)", glow: "#e8c878", fx: "heat" }
      },
      railHead: "Episode 04<br>// The Whip",
      railFoot: "RECORD 04 SECURE<br>THE LONG LIGHT HOLDS",
      phases: [
        {
          id: "e4-1",
          tag: "SCENE 01 · THE FIRST CYCLE",
          title: "Two Small Wounds",
          railLabel: "THE WOUNDS", railSub: "SCENE 01", railLen: 2,
          paragraphs: [
            { lead: true, text: "The training cycle ended at dusk, or what the hyenas called dusk: a bell, a shouted order, the long light dimming not at all. Twelve days of drills, of carrying, of learning to string a bow the hyena way, faster and crueler than the quarry-made bows had ever asked. Rik's shoulders ached in new places. The old scars had company now." },
            "He and Jack walked back through the camp toward the sheds at its edge, past cookfires that never went out because the sun never left to make them necessary. The thaw was over. The long light had settled in for its four-month hold, and the camp had stopped pretending at night. Sleep was declared now, by bell and by banner. Even darkness here was issued like a ration.",
            "The shed door hung crooked on its hide hinges. Rik pushed through.",
            "Ruby sat with her back to the wall, Ian's head in her lap.",
            "Two wounds. One above the left ear, one at the crown, both cleaned, both packed with chewed fungus-pulp the way the quarry mothers had always done it. The fur around them had been clipped away. Small dark scabs in small pale circles.",
            "Rik crossed the floor without feeling his legs move.",
            "\"He's fine,\" Ruby said. Her voice was level. It was the level of a floor swept too many times. \"Pebbles. Hyena kits, by the well. Six of them, maybe seven.\"",
            "Ian did not look up at his father. That was the thing Rik noticed second, and could not stop noticing after. The boy's eyes stayed on the floor, and his shoulders had learned a new shape: rounded in, folded down, the shape of taking up less room. Rik knew that shape. He had worn it thirty years. He had walked through a miasma detour and a burned village and a stolen sigil so that his son would never learn it.",
            "Twelve days. That was all it had taken.",
            "\"Did they say anything,\" Rik asked. \"Before.\"",
            "\"Kits don't need reasons,\" Ruby said. \"They were laughing.\"",
            "Jack stood in the doorway, very still.",
            "Rik knelt. \"Ian.\"",
            "The boy looked up. There was no accusation in his face. That would have been easier. There was only a kind of careful blankness, an accounting behind the eyes: what is safe to show, what is safe to want. Rik had seen that arithmetic done on a hundred rat faces in the quarries. He had never once thought to see it done on this one.",
            "\"Where's your toy?\" Rik asked, because it was the only question small enough to hold.",
            "Ian's gaze slid sideways, to the corner, to a fold of hide. Hidden. Not lost. Hidden.",
            "\"The kits by the well,\" Ruby said quietly. \"One of them took it for a while. Made a game of it. He got it back.\"",
            "She did not say what the game was. Ian's ears had gone flat against his skull, and that said enough.",
            "\"He doesn't go out anymore,\" Ruby said. \"He waits for me to fetch water. He waits for everything now.\"",
            "Rik put his paw on his son's head, careful of the crown wound, and Ian let him, and that was somehow the worst part: the letting. Patient as a stone. A boy who had eaten boar by a fire in the fungal wilds and whispered that deer was tastier, conspiratorial, alive, folded down now into a small quiet shape that let things happen to it.",
            "That night, sleep was declared and did not come.",
            "Rik lay on his back and watched the long light burn through the gaps in the shed wall. Ruby breathed beside him, awake or not, he couldn't tell anymore. She had a stillness now that worked in both directions.",
            "The thought arrived the way spores drift: without invitation, settling before he knew the air carried it.",
            "<em>At least the whip had rules.</em>",
            "He lay very still.",
            "In the quarries you knew. A short load, a slow step, a wrong look: the whip. A full load, a fast step, eyes down: no whip. The lash was a ledger, and the ledger was honest in its way. You could teach a son the ledger. You could keep him unmarked inside it, if you bled enough on his behalf.",
            "Here there was no ledger. Ian had made no mistake. He had existed at throwing distance. That was the whole crime and the whole trial, and there was no load he could carry full or step he could take fast that would buy the verdict back.",
            "<em>At least the whip. At least the whip.</em>",
            "Rik heard the thought a third time and understood, with a lurch like ice giving way underfoot, that he was defending the quarry. Lying in a hyena camp, a free rat, missing the logic of his own chains. Grieving the ledger. He pressed his palms flat against the dirt floor, claws in, the old gesture from the old nightmare, and asked the dark between the roofbeams what this place had already done to him, twelve days in, that the whip could look like order.",
            "The dark declined to answer. It was the long light anyway. There was no real dark left to ask.",
            "Somewhere across the camp a sentry called the hour to another sentry, bored, unafraid, at home.",
            "Rik turned his head. Ian slept curled tight, both paws empty. The toy stayed in its corner, under the fold of hide, hidden the way you hide the things you love in a place where loving things is dangerous.",
            "<em>Some inherit land</em>, Rik thought. The old words, the ones etched into him deeper than the scars.",
            "He had run four hundred miles to break the sentence in half.",
            "The wounds had crossed the border anyway. They had simply changed hands."
          ],
          visual: { img: "", grad: "linear-gradient(165deg, #2b2018 0%, #1d1610 48%, #0b0806 100%)", tint: "rgba(170,120,80,.14)", glow: "#d9a05e", fx: "dust" }
        },
        {
          id: "e4-2",
          tag: "SCENE 02 · THE IRON CATECHISM",
          title: "Benches",
          railLabel: "THE BENCHES", railSub: "SCENE 02", railLen: 2,
          paragraphs: [
            { lead: true, text: "The training ground was a scraped circle of earth at the camp's northern edge, and the long light had baked it hard as kiln-brick. Forty recruits drilled there each cycle. Nine were rats." },
            "The hyenas trained them without cruelty, which surprised Rik at first, until he understood it was the same absence of cruelty a smith shows iron. You do not hate the metal. You heat it, you bend it, you strike it where it must bend, and if it cracks you throw it on the pile and reach for the next bar. The drill-masters corrected Rik's grip with two fingers and moved on. Nobody cursed him. Nobody looked at him long enough to curse him.",
            "Jack said it was the most peaceful abuse he'd ever taken.",
            "The ninth rat in the cohort was called Tesk. Young, quarry-born like the rest of them, escaped two years longer than Rik had been free, with a fast tongue and a way of standing that hadn't fully unlearned the fold. It was Tesk who found them at the water trough on the fourth day of the second cycle, while the mules drank and the drill-masters argued over a broken cart axle.",
            "\"You've got a family,\" Tesk said. Not a question. Camp knew things. \"Kit and a wife, shed row, eastern edge.\"",
            "Rik nodded once.",
            "\"Then you want to hear about the hamlets.\"",
            "He laid it out the way traders lay out cloth: unhurried, letting the colors do the arguing. Rat villages, real ones, inside the Matriarchy's borders. Not sheds at a camp's edge. Walls. Wells that rat kits could walk to. A market. Roofs that had been repaired more than once, which was how you knew a place expected to last. Three days north and east, past the garrison line.",
            "\"Rats live there under hyena law,\" Tesk said. \"Protected. Same as any subject people. You buy in with mission credit. Quartermaster keeps the book. Enough credit, you get settlement rights, and your family walks out of shed row and never sees this camp again.\" He scratched behind his ear, easy, like a man discussing weather. \"It's not a story. I've seen the walls myself. Little further north, that's all. Everything good is always a little further north.\"",
            "Rik's chest did something complicated at that. The words had a shape he knew, worn smooth like the edges of an old map, and for half a breath he was standing in spore-mist listening to a camel trader promise the north.",
            "He asked how much credit.",
            "\"Depends on the missions,\" Tesk said. \"Depends what you'll carry.\" And smiled, and the smile was the first thing about him that looked quarry-born after all.",
            "The sermons came at cycle's end, every cycle, in the long shed the hyenas called the speaking house.",
            "Benches ran its length in ranked rows, worn shiny. Hyenas by seniority, wild dogs behind. The nine rats sat at the back, on the ground. No one had ever ordered it. There were simply never enough benches, cycle after cycle, in a camp that could raise a watchtower in a day, and by now the rats filed to their patch of dirt the way water files downhill.",
            "Jack lowered himself beside Rik and arranged his legs on the packed earth.",
            "\"New masters,\" he said, to no one. \"Same benches.\"",
            "The catechist was old for a hyena, gray at the muzzle, one ear gone to some argument the other party had presumably lost worse. She did not shout. Khamseen's teachers never shouted, Rik had learned. The doctrine did its own shouting.",
            "\"Strength reveals truth,\" she began, as she began every time. The room answered in one voice. The rats answered too. That had also never been ordered. It had also happened anyway.",
            "\"Weakness creates lies,\" she said. \"And no one has built more lies than the hoof-lords of the south. Consider their scripture. Every creature has a place. A fine sentence. Who assigns the places? The ones already standing on top. Every place has a duty. Finer still. Whose duty is dying in the quarries, and whose is blessing the quarry from a temple the diggers may not enter?\"",
            "And here was the trap, Rik thought, here was the thing that made the dirt floor bearable: she wasn't wrong. Every sentence was a stone that fit his own wall. He had thought these exact thoughts, kneeling at a killing stone with the border woman's blood two days old on his conscience. He had raged at <em>the temples not for us</em>, at the gods carved into walls rats were forbidden to touch. She was saying it out loud, with a state behind her, and something in him leaned toward the warmth of it the way cold bodies lean toward any fire at all, without first asking what the fire was for.",
            "\"Their harmony is a ledger written by the fed,\" the catechist said. \"And when the Sky finally audits it, the audit will come through us. Suffering is not punishment. Suffering is the fire, and the fire does not apologize to the ore.\" She paused, and her eye found the back of the room, and Rik felt the whole shed pivot on that look. \"Even Suvartan's own filth knows the lie. Ask them.\"",
            "Silence. Forty faces turning.",
            "\"Well,\" she said, patient as a drill-master with iron. \"Quarry-born. Was it harmony?\"",
            "Somewhere to Rik's left, Tesk said, \"No.\"",
            "\"Louder.\"",
            "\"No,\" said Tesk, and two other rats said it with him, and then, because the silence after was worse than the word, they all said it. Rik heard his own voice inside the chorus, saying the true thing on command, and could not have explained to anyone the difference between testimony and performance, except that one of them belongs to you after.",
            "The catechist nodded, satisfied, a point entered into evidence, and turned back to the benches. She was done with them. They had been furniture that talked, briefly, and now they were furniture again.",
            "\"The hoof-lords will tell you their god is balance,\" she said to the rows of hyenas. \"Ours does not flatter us with balance. Ours only promises that the fire sorts. What survives it was true. What burns was always kindling, whatever name it carved above its temple door.\"",
            "Rik sat on the dirt and listened to a god who kept accounts.",
            "That was the difference, he understood slowly, and the understanding had a taste like iron. The stone in the jungle asked for blood and promised nothing. You knelt, you bled, and if you were still breathing after, that was the whole mercy: no meaning, no sorting, no rank in the ash. He had hated that silence all his life. And here was a faith built of the same blood and the same stone, except it had done the one thing the killing stones never stooped to. It had added a ledger. It looked at a rat's thirty years of scars and said: not filth, not fate. Evidence. You were being tested, and look, you are still here, so you passed, and everyone who broke beneath you failed, and the whole screaming quarry of it meant something after all.",
            "He wanted it to be true the way starving men want bread. That was how he knew to be afraid of it.",
            "Beside him Tesk sat forward, ears up, mouthing the responses half a beat ahead of the room, the way you mouth a song you're teaching yourself. Somewhere in the last two years, between the escape and this bench-less floor, the doctrine had stopped being the hyenas' and started being his. Rik watched him and thought: that is what it looks like when a man trades a god who doesn't answer for a god who flatters. It looked, from the outside, almost exactly like hope.",
            "\"The fire is coming for the south,\" the catechist finished. \"Be worth the burning.\"",
            "The room emptied by rank. The rats waited, as water waits, and went out last into the long light.",
            "Jack walked beside him, quiet until the speaking house was well behind them.",
            "\"She's right about them,\" he said at last. \"That's the ugly part. Every word about the hoof-lords, right as rain.\" He spat into the dust. \"Notice she never said what happens to the ore that the fire sorts out.\"",
            "Rik said nothing. In his chest the sermon and the trough-side pitch had already begun braiding themselves into a single rope: credit, walls, a well Ian could walk to. Everything good a little further north.",
            "He thought about ropes, and which end of them he had ever been allowed to hold."
          ],
          visual: { img: "", grad: "linear-gradient(160deg, #26221d 0%, #1a1714 48%, #0b0a08 100%)", tint: "rgba(150,130,100,.14)", glow: "#cdbf9a", fx: "dust" }
        },
        {
          id: "e4-3",
          tag: "SCENE 03 · THE BOOK AND THE FIRE",
          title: "Whitehorn",
          railLabel: "THE BOOK", railSub: "SCENE 03", railLen: 2,
          paragraphs: [
            { lead: true, text: "The quartermaster's shed smelled of tallow, ink, and hide. He was a wild dog, not a hyena, narrow-shouldered and gray-lipped, and he ran the credit book the way the drill-masters ran iron: without heat." },
            "Nine rats stood before his table. He did not look up for the first several lines of writing.",
            "\"Cohort nine,\" he said at last. \"You've been asked for.\"",
            "He turned the book toward them, though none of them could read the hyenas' script, and tapped one entry with a claw. The gesture wasn't for their benefit. It was for the book's. Things here happened on paper first and in the world after, and Rik was beginning to understand that this was what a state was: a place where the writing came first.",
            "\"Suvartan hamlet, four days southwest, across the line. Twelve homesteads, one shrine, brick boundary wall, two gate guards after their sleep-bell.\" He said it in the voice men use for grain counts. \"Sacred herd stock. Cattle, no garrison. The wall is rated against raiders on hoof.\" He looked at them then, for the first time, a flat professional assessment. \"You are not on hooves.\"",
            "Silence in the shed.",
            "\"The tasking is the wall breached, the hamlet burned, the population thinned. Priority on the shrine.\" He dipped his pen. \"Full completion clears one third of settlement buy-in. Per head.\"",
            "A third. Rik heard Tesk's breath change beside him. Three missions, then. Three missions between shed row and walls, a well, a market. Between Ian folded small in a corner and Ian walking to water in daylight. The arithmetic performed itself without his permission, instant and shameless, and only after it finished did the other words land in order: burned, thinned, shrine.",
            "\"Questions.\"",
            "\"The name,\" Rik said. His voice came out wrong, and he didn't yet know why he'd asked. Some part of him had already heard it coming, the way you hear the whip's arm go back. \"The hamlet. Does it have a name.\"",
            "The quartermaster consulted the book, not because he needed to.",
            "\"Whitehorn,\" he said.",
            "The shed stayed level. The floor stayed under Rik's feet. Somewhere behind his ribs a bull's voice said the word again, easy as breath, on a bruised road two seasons and a lifetime ago: a name offered without hesitation, a lie that had parted a patrol like water and let four rats and a child walk out from under the whip.",
            "He had never asked whether it was a real place. It had not mattered. It had been a key, and the door it opened was the rest of their lives, and now the same key sat in a wild dog's ledger with burned and thinned written beside it.",
            "Maybe it was the bull's own village. Maybe the old one had reached for the nearest sacred name the way a man grabs the nearest stone, and the name belonged to strangers, and the bull was walking some far road this cycle with no idea what he had painted on twelve homesteads the day he'd been too tidy to watch a rat family die. Rik would never know. That was the part that settled in his stomach like cold iron: he would burn the answer before he could ask it.",
            "\"You know it?\" the quartermaster said, without interest.",
            "\"No,\" Rik said.",
            "The pen scratched. Nine names entered a book none of them could read, under a heading none of them would ever be shown.",
            "Outside, an officer waited for them in the long light: a true hyena this one, young, silver-collared, with the loose-jointed ease of someone whose place in every room had been decided before her birth. She looked the nine of them over and seemed pleased in a way that had nothing to do with them, the way one is pleased with a well-made tool found at the bottom of a borrowed kit.",
            "\"You understand why it's you,\" she said.",
            "No one answered. It hadn't sounded like it wanted an answer.",
            "\"Any company in this camp could take that wall. Ladders, fire-arrows, an hour's work.\" She walked slowly down their line, unhurried, catechist-cadenced. \"And the south would call it war, and mourn, and rebuild, and their priests would say the Sky sent a storm. Storms are survivable. Storms are even flattering.\" She stopped in front of Rik, close enough that he could smell the oil on her collar. \"But their scripture says every creature has a place. So we send them their scripture's own foundation stones. When that wall comes down and the ones inside see who came over it: that is not a storm. That is the floor rising. A wall burned by rats proves what a wall burned by hyenas never could.\"",
            "She smiled with just her eyes.",
            "\"You are not soldiers tonight. You are an argument.\"",
            "The blessing came at the departure hour, at the camp's western gate, with the mules already loaded: rope, oil-skins, pitch, bows, the quiet inventory of people packed for someone else's ruin.",
            "Rik had expected nothing. Rats were not blessed. In the Vanguard lands the priests had sanctified the quarry, the stone, the tools, the tally-house, everything a rat touched and never the rat: he had watched a cow priest anoint a hauling-sledge while the team that pulled it stood in the ditch, waiting for the holy oil to dry.",
            "The Khamseen field-priest was old, blind in one eye, robed in undyed gray. He walked the line of nine and stopped at each of them. Each one. At Rik he paused, took a pinch of ash from the iron bowl at his hip, and pressed it to Rik's brow, between the ears, firm as a brand.",
            "\"The fire does not ask what the wood was,\" the priest said. \"Only what it gives.\"",
            "Then he moved to Jack, and said it again, the same words, the same ash, and down the line, and Rik stood at the western gate with a dead fire's mark on his forehead and understood that he had just received the first religious ceremony ever performed for him rather than around him, in thirty years of kneeling at stones that never answered.",
            "It was for a massacre.",
            "He waited to feel the irony cut. It didn't cut. That frightened him more than the ledger, more than the officer's smile, more than the name in the book. It sat warm on his brow like a hand, and some starved animal in him, some creature that had waited its whole life in the ditch for the oil to dry, was grateful.",
            "The gate opened onto the long light.",
            "Nine rats walked out under it, blessed and entered in the book, four days southwest of a name that had once saved them all."
          ],
          visual: { img: "", grad: "linear-gradient(165deg, #2e2419 0%, #201912 48%, #0d0a06 100%)", tint: "rgba(200,140,70,.16)", glow: "#e0b26e", fx: "ash" }
        },
        {
          id: "e4-4",
          tag: "SCENE 04 · THE FIRST NIGHT OUT",
          title: "The Push",
          railLabel: "THE PUSH", railSub: "SCENE 04", railLen: 2,
          paragraphs: [
            { lead: true, text: "They made camp where the scrub thinned, a day's march southwest of the gate, in the shallow lee of a rock spine that gave the only shade the long light allowed. No fire. The sun did fire's work and would not be turning in." },
            "Nine rats, two mules, and a silence that had walked with them all day.",
            "Tesk drew up the watch order, two awake at all hours, and led the others around the far side of the spine with their bedrolls, leaving Rik and Jack the near shade without being asked. Sleep was called by no bell out here, but twelve days of the camp's clock had marched out the gate inside them: at the accustomed hour, bodies folded down one by one into the shadow line, faces to the stone, tails curled over eyes against the light, the old quarry way of sleeping through the pale months.",
            "Rik checked the oil-skins on the second mule twice, for no reason, and when he came around the rock spine he found Jack sitting apart, back against the stone, head down, both paws laced over the back of his skull like a man waiting out a rockfall.",
            "The ash was still on his brow. None of them had wiped it off. Rik had noticed that on the march and declined to think about it.",
            "He sat down beside him. For a while the long light did all the talking.",
            "\"I keep counting it,\" Jack said at last, to the ground. \"Twelve homesteads. Cattle run what, six to a roof, eight. Kits in that.\" His voice stayed low and even, which was worse than breaking. \"I was fine at the gate. I was fine all day. Then the light started going flat and I thought: this hour tomorrow, and the day after, and then we're at the wall. And my legs sat me down here and that was that.\"",
            "Rik said nothing yet. He had learned that from Ruby, or from the border woman, or from stones. Silence first. Let the other one empty out.",
            "\"I'm not turning back,\" Jack said. \"That's the joke of it. There's no back. Behind us is a book with my name in it. I just.\" He stopped. His paws tightened over his skull. \"I need to hear somebody say it. Out loud. What we're for.\"",
            "So this was the shape of it, Rik thought. Not an argument. A door standing open, waiting for one push, and hating itself for waiting.",
            "He looked at his own paws and started badly, which was the only honest way to start.",
            "\"I don't have a speech.\"",
            "\"Good,\" Jack said. \"I'd have walked.\"",
            "\"We don't decide things,\" Rik said. \"That's first. You know it, I know it. Deciding needs power and we've never held any. Not in the quarry, not on the road, not here. Every choice I've ever made was between two doors somebody else built.\" He heard how thin it sounded and pushed on anyway. \"But the credit is real. Tesk's walls are real, or real enough. And past the walls.\" He stopped. Breathed. \"I'm going to say a thing now and you're going to let me finish it even if it sounds cracked.\"",
            "Jack lifted his head.",
            "\"Shadow's Teeth,\" Rik said.",
            "Jack made a sound that was not quite a laugh. \"The bedtime story.\"",
            "\"Maybe. Probably.\" Rik turned to face him. \"But hear the order of it. Missions buy the hamlet. The hamlet buys quiet, and quiet buys saving. Coin, kit by kit. And coin buys a camel road east, one day, when there's enough of it, and whatever's at the end of that road, myth or mud, we go and see with our own eyes. And if it's mud, we'll have coin in a place where nobody knows our names, which is more than any rat we were born beside will ever hold.\" The words were coming faster now, finding a rhythm, smooth and unhurried, and somewhere inside them Rik heard it: the cadence. Unrolled like cloth, letting the colors argue. A trader's voice. Tesk's voice. Everything good a little further on.",
            "He heard it, and he watched himself keep talking anyway, because Jack's head was up now, and because the door needed the push, and because some part of him had crossed a line in a wild dog's ledger this morning and was already spending what it bought.",
            "\"And when we're out,\" Rik said, quieter, \"when we're on the far side of all of it. I'll stand for you. Find you a rat lady with sense and bad taste enough to have you. Get your marriage done proper, under a roof you own.\" He faltered, hearing how it sounded, a wedding offered on the road to a burning, and pushed the last of it out anyway. \"You'd start fresh. Whole. All of this: a thing that happened to two other rats, a long time ago, somewhere south.\"",
            "The long light lay flat on the scrub. Jack looked at him for a while.",
            "\"You've gotten better at that,\" he said. \"Talking.\"",
            "Rik held his eyes and didn't flinch, because flinching would have made it worse, and because it was true.",
            "Jack looked away first, out at the flatness. When he spoke again it was almost gentle, the tone of a man laying a tool back in its box.",
            "\"What's our excuse, Rik?\"",
            "The old question. Third time asked, if Rik was counting, and he was always counting now. A mile out from a sleeping woman and a stolen sigil it had been an accusation. Now it came out like liturgy: a thing said because it must be said, so the answer could be entered in whatever book the two of them kept between them.",
            "The first time, Rik had said survival. He understood, sitting in the dirt with ash on his brow, that survival was no longer true. Survival was behind them, in the shed, breathing. What lay ahead was purchase.",
            "\"Ian,\" Rik said.",
            "Nothing else. He did not dress it. A boy folded small in a corner, hiding the thing he loved under a fold of hide, learning arithmetic no child should know. A well he could walk to. That was the whole excuse, and it was monstrous, and it was the truth, and Rik put it down between them and left it there.",
            "Jack sat with it. The light did not change, because it never did.",
            "Then he rose. Not slowly. He rose the way he had dipped his chin in a doorway two seasons ago: a man concluding business with himself. He took up his bow from where it leaned against the rock, braced it, and ran two fingers down the string. Checked the nock. Checked the wrap. Small dry sounds in the flat silence, and the last of them was a short clean note off the drawn string, plucked once and damped.",
            "The quiet click of a pact. Rik had heard it before, in spore-mist, at the start of everything. It had sounded braver then. Or he had known less about what pacts were.",
            "\"First watch is Tesk's,\" Jack said, already turning. \"Sleep. You look like a man who owes money.\"",
            "He walked to his bedroll. Rik sat a while longer under the light that would not leave, beside the rock, in the middle of the scrub, four days northeast of a name, and did not pray, because the only god he trusted was the kind you don't ask for things.",
            "Just once, before he slept, he looked up: past the flat glare, toward where the stars would be if the sky ever rested out here.",
            "Noticed or not. He couldn't tell.",
            "He never could."
          ],
          visual: { img: "", grad: "radial-gradient(130% 100% at 60% 30%, #d8c294 0%, #a8895c 35%, #5c4a30 65%, #241d12 100%)", tint: "rgba(255,230,170,.20)", glow: "#f0d488", fx: "heat" }
        }
      ],
      end: {
        title: "The gate is behind them. Four days southwest, a borrowed name waits to be repaid.",
        links: [
          { label: "Next · Episode 05 →", action: "goto:episode/5" },
          { label: "← Episode 03", action: "goto:episode/3" },
          { label: "⟁ All Chronicles", action: "goto:chronicles" }
        ],
        visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #221c12 0%, #100c08 55%, #060504 100%)", tint: "rgba(200,170,100,.14)", glow: "#e8c878", fx: "heat" }
      }
    },

    /* ═══ EPISODE 05 · THE COMMISSION ═══════════════════════════════ */
    {
      slug: "5",
      title: "Episode 05 · The Commission",
      hero: {
        kicker: "The Chronicles · Episode 05",
        title: "The<br><em>Commission</em>",
        sub: "Some walls keep the world out. Others only keep the proof in.",
        scrollcue: "SCROLL TO REACH THE WALL",
        visual: { img: "", grad: "linear-gradient(160deg, #3a1c14 0%, #2a140e 45%, #0f0605 100%)", tint: "rgba(220,110,60,.18)", glow: "#f0916a", fx: "ash" }
      },
      railHead: "Episode 05<br>// The Commission",
      railFoot: "RECORD 05 SECURE<br>THE DEBT STANDS",
      phases: [
        {
          id: "e5-1",
          tag: "SCENE 01 · FOUR DAYS SOUTHWEST",
          title: "The Ordinary Evening",
          railLabel: "THE APPROACH", railSub: "SCENE 01", railLen: 2,
          paragraphs: [
            { lead: true, text: "They crossed the line on the third day, though no stone marked it. The scrub simply gave way to managed land: hedgerows, a drainage cut running straight as scripture, the first grazed field. Vanguard country. The rats moved through it by the low routes, dry ditches and hedge-shadow, and the long light lay over everything like a held breath." },
            "On the fourth day, from a rise of broom and thornbush a half-mile out, Rik saw Whitehorn.",
            "It sat where the land folded, twelve roofs and a shrine tower inside a boundary wall of pale fired brick, and the first thing Rik understood about it was that it was loved. The wall was old but pointed with fresh mortar. The gate timbers had been oiled this season. Someone climbed that shrine tower with a brush and whitewash every year of their life, because it stood up out of the fold like a lily, clean against the baked land, visible for miles.",
            "<em>A key</em>, he thought. <em>It looks like a key.</em>",
            "They lay in the broom through the hamlet's whole evening and watched it live.",
            "Cattle came in from the near fields at the ringing of a small bell, unhurried, in the order of creatures who had walked the same path so long the path had opinions. Calves broke the order, were gathered back. Smoke rose from four of the twelve roofs: cookfires, dung and wood by the smell of it, drifting flat in the still air. An old cow drew water at the well in the little square, and a young one carried it for her, and the old one said something that made the young one laugh, and the sound came all the way out to the broom on the flat evening air, small and clear.",
            "Nobody around Rik spoke. Tesk had gone very still beside him, ears flat. Whatever the speaking house had built in him, it had been built out of words, and Whitehorn was not made of words. It was made of oiled timber and a laugh crossing a half-mile of grass.",
            "<em>You are an argument</em>, the officer had said. Rik lay in the thorns and watched the argument's other side water its garden.",
            "The sleep-bell rang at the appointed hour: three slow strokes from the shrine tower, unhurried as everything here. Rik watched the hamlet obey it the way the camp obeyed its own bell, the way his own body now obeyed, every creature under the long light keeping darkness alive by discipline because the sky had stopped providing it. Doors closed. Shutters swung to. The smoke thinned to nothing. Two figures took the gate: bulls, broad even at this distance, one with a spear, one with a staff, settling against the timbers with the ease of a duty that had never once been needed.",
            "<em>The wall is rated against raiders on hoof</em>, the quartermaster had said. <em>You are not on hooves.</em>",
            "They waited out the first hour of the hamlet's sleep in the broom, and then they went to work.",
            "The dig point had chosen itself from the rise: the northeast corner, where the drainage cut passed within forty paces of the wall and the ground between lay in the tower's own shadow-line, such as shadow was. Old water had been this way before them. The soil in the cut's bank was quarry-legible, and Rik read it with his palms the way he had read stone his whole life: silt over clay, clay over the packed rubble of the wall's footing, and the footing shallow. Bricklayers built against hooves and rams. They built the wall's weight down only as far as a hoofed thing could dig, which was, for practical purposes, nowhere.",
            "Nine rats, five of them quarry-born, with quarry-filched picks worn to the length of their forearms.",
            "\"Two spans down, four across, come up inside the wall's own shade,\" Rik breathed. \"Spoil into the cut. No higher than the grass line.\"",
            "It was, he thought, the first order he had ever given that was obeyed instantly, by everyone, without a glance toward anyone larger. The thought arrived and he set it aside the way you set aside a tool that is wrong for the work, quickly, before your hand learns the feel of it.",
            "They dug in shifts of four, in silence, in the long light's flat glare. It was quarry work and their bodies fell into it with something horribly like relief: the known weight, the known rhythm, pick and palm and pass-it-back, the oldest language any of them spoke. Jack worked beside him, breath even, face closed. The ash was gone from every brow by now, sweated off in the ditches of Vanguard country, but Rik could still feel the priest's thumb between his ears, firm as a brand: <em>the fire does not ask what the wood was</em>.",
            "The soil asked nothing either. It parted for them the way it had parted for them their whole lives.",
            "An hour in, Rik's pick met the footing rubble, and he worked along its underside with his claws, feeling for the seam where the builders' diligence had run out. He found it where he knew it would be: a hand-span of laziness a hundred years old, some dead mason's shortcut on a hot afternoon, waiting all this time for someone thin enough and low enough to need it.",
            "<em>Every wall is honest at the bottom</em>, his father used to say, in the quarry, of stone. It was the only theology the old rat had ever offered him.",
            "They came up inside the wall in the deep shade of its northeast angle, one at a time, into a kitchen garden. Bean rows. A propped hoe. A child's carved bird sitting on an upturned pail, wings spread, waiting for morning.",
            "Nine rats stood up out of the earth of Whitehorn, silent as roots, and the hamlet slept on around them, keeping its ration of dark.",
            "Rik looked at the carved bird for one heartbeat longer than the raid could afford.",
            "Then he raised his paw, and pointed twice: Jack and Tesk toward the gate, where two bulls dozed against oiled timber over the only door out of the proof."
          ],
          visual: { img: "", grad: "linear-gradient(165deg, #38321f 0%, #262214 48%, #0d0b07 100%)", tint: "rgba(190,180,110,.16)", glow: "#d8cd8e", fx: "heat" }
        },
        {
          id: "e5-2",
          tag: "SCENE 02 · THE PROOF",
          title: "What the Wall Kept In",
          railLabel: "THE PROOF", railSub: "SCENE 02", railLen: 2,
          paragraphs: [
            { lead: true, text: "The gate guards died the way the plan said they would, which was the worst thing about it." },
            "Jack and Tesk crossed the square through the well's shadow and put four arrows into the two bulls from fifteen paces, throat and eye, throat and eye, and the spear never left its lean against the timber. One bull made a sound like a dropped sack. The other made no sound at all. Rik had braced all four days of the march for something to go wrong at the gate, and nothing went wrong, and he understood as he watched the second bull fold that he had been counting on something going wrong: some resistance, some alarm, some shape the night could take that would make what followed a battle instead of what it was.",
            "The night declined to provide one.",
            "They opened the gate from inside, quietly, and barred it again from without: the great crossbeam run through its iron keeps and pegged, a thing built to be worked by cattle strength and defeated in moments by four rats and a lever. Then back through their tunnel, up into the bean rows, and the nine of them moved out along the wall's inner face with the oil-skins and the pitch.",
            "Thatch first, at the eaves, where the long light had baked every roof to tinder. Then the timber sills. Then the hay-store by the byres, which did not so much catch as inhale.",
            "Rik fired the roofs he was given. His hands did the work of tipping oil and striking spark with the same competence they brought to all work, the quarry competence, the body's old habit of doing well whatever it was set to, and some sealed-off room of him watched the hands and thought: they would have hauled stone this well forever. It was never the hands that were owed anything.",
            "Whitehorn woke by its own light.",
            "The bell began, wild and off-rhythm, nothing like the three slow strokes: someone in the shrine tower hauling the rope as if the rope could undo it. Doors opened onto burning dooryards. Voices went up, first questioning, then not. The cattle of twelve homesteads came out into their one square and found the gate barred from a side no hand could reach, and the wall they had pointed with fresh mortar standing between them and all the world's air, and the rats already gone up the inner stair to the wall-walk, bows drawn, exactly where the tasking said to be.",
            "<em>Thinned</em>, the book had said. The book's word.",
            "Rik was on the wall-walk and he drew and loosed with the rest, into the smoke, into the square, and he would not afterward count how many times, though he counted everything now: that number alone he let the smoke keep. Below, the ones who ran for the gate learned it was barred. The ones who ran for the well learned what a well is against twelve roofs. A great bull, gray to the shoulders, organized six others into a ram against the gate timbers with a voice like the bell's brother, steady, enormous, and for a moment Rik on the wall above him hoped: break it. Break it and scatter and live, and let the tasking be only mostly done.",
            "The timbers held through two charges. On the third the crossbeam's pegs sheared and the gate burst outward, and the gray bull and his six came through the gap into the open land, into the flat glare, moving with the speed of creatures who had never once been fast, and the wall-walk was already turned and waiting because the plan had said the gate would be the place, and the plan was good, and the arrows went down into them until the open land held six shapes, then seven, and no more ram, and no more voice like the bell's brother.",
            "Rik stood on the wall of Whitehorn with an empty bow and looked down at what proving looks like.",
            "Behind him, the shrine caught.",
            "He went down into the square. He would tell himself afterward that he went to check the fire's spread, and it would not be true, and no one would ask.",
            "The shrine door stood open. Whoever had rung the bell had gone up, not out; the rope still swayed. Inside, the fire was in the roof but not yet in the room, and the room was small, and the walls were written.",
            "Rik stood in a burning Suvartan shrine and read what rats were forbidden to touch.",
            "He had expected commandments. Ranks. The ledger of places, the scripture of his thirty years, the words that had sent his line to the quarries and blessed the sledge while the team stood in the ditch. He read the whitewashed walls by fire-light, slowly, the way the quarry's one lettered rat had taught him in trade for hoarded grain, and what the walls said was:",
            "<em>The river has its duty, which is to carry.</em>",
            "<em>The rain has its duty, which is to return.</em>",
            "<em>The great have their duty, which is to shelter.</em>",
            "<em>The small have their duty, which is to be many, and to continue.</em>",
            "<em>No duty is higher. The wheel has no top.</em>",
            "The wheel has no top.",
            "Rik read it three times. Somewhere above him the roof-fire ate toward the bell. He stood in the middle of the oldest lie of his life and found, at the bottom of it, underneath the castes and the quarries and the priests and the whip, a thing that had never been a lie at all: some ancient hand's plain instruction for a world in balance, harmony written in a village shrine by people who were only ever given the first innocent line of it, and who had oiled their gate and whitewashed their tower and laughed across the evening grass, downstream of a corruption they did not commit.",
            "<em>Only its readers were</em>, the old scholars said.",
            "The readers, Rik thought. And the burners.",
            "<em>The fire does not ask what the wood was.</em> He had a torch in his belt he had not needed; the roof had gone up from the eaves like everything else. He was not holding fire. He had only brought it. That was the whole of what Khamseen had made him tonight: not the flame, the delivery.",
            "The room's silence deepened, and then, for a moment, it did the thing.",
            "The roar of the burning hamlet, the bell-clang, the cattle voices in the square: all of it thinned, and stopped, the way a forest sometimes forgets itself. Not muffled. Withdrawn. Rik stood in a bubble of perfect quiet in the middle of the proof, alone with the sentence on the wall and every thought he had spent four days not having, and his body moved before his mind could countermand it: his hand went to his belt, to the small pocket where a rat keeps what a rat keeps, and took out the boar's tooth he had carried since the fire in the wilds, since Ian's laugh, since the taste of roads unbroken, and set it at the base of the written wall.",
            "An offering. At the foot of another god's scripture, in a shrine he was burning, placed by hands that had loosed into the smoke uncounted.",
            "<em>Notice this</em>, the gesture said, before he could stop it saying anything. <em>Not the fire. This. That I knew what it was while I did it.</em>",
            "The silence held one breath longer.",
            "Then the roof came in over the far end of the room, and the world's noise fell back in with it, bell and roar and voices, and Rik was out the door with sparks in his fur, and whether anything had been in the quiet or the quiet had only been smoke and blood-rush in a burning room, he could not tell.",
            "He never could.",
            "In the square, through the smoke, Jack stood with his bow down at his side, not raised, watching the broken gate.",
            "Three shapes were coming out through it, low and slow, into the flat glare of the open land. Not bulls.",
            "Cows. Three of them. Kits pressed against their legs: two, four, five small shapes, moving the way small things move when the world has come apart, in bursts and freezes.",
            "Down the wall-walk, a bow came up.",
            "\"Hold,\" Rik heard himself say, in a voice he did not know he owned: the gray bull's register, the voice like the bell's brother, an order given as if the square were his.",
            "The bow held.",
            "The women stopped in the burned light beyond the gate, children gathered into them, and turned, and looked back: at the wall, at the smoke, at the nine small shapes upon and before it. Rik stood in the gate's broken mouth and met their eyes across the ruin of the argument, and what was in their faces was fear, and hate, and beneath both, worst, recognition: the flat sorting look of survivors, the border woman's look, the look that files you where you now belong.",
            "The proof was complete. The night had thinned nothing in him. It had only shown what was there."
          ],
          visual: { img: "", grad: "radial-gradient(130% 100% at 55% 35%, #4a1a10 0%, #35110a 40%, #1a0805 70%, #070302 100%)", tint: "rgba(255,120,60,.22)", glow: "#ff9d5c", fx: "ash" }
        },
        {
          id: "e5-3",
          tag: "SCENE 03 · THE ONES WHO CAME OUT",
          title: "Nine Rats and the Arithmetic",
          railLabel: "THE ARGUMENT", railSub: "SCENE 03", railLen: 2,
          paragraphs: [
            { lead: true, text: "They regrouped in the broom on the rise, upwind of their own smoke, and the argument began before the last of them was down in the thorns." },
            "The three cows had not run. That was the thing that forced the argument: they had gone perhaps two hundred paces from the gate and then simply stopped, out in the open grass, children pressed into their legs, standing the way creatures stand when every direction is the same direction. Behind them Whitehorn poured itself into the sky. The long light and the fire made two different kinds of glare, and the women stood between them, waiting for whichever one would claim them.",
            "\"Tasking said thinned,\" said one of the cohort, a scarred dock-rat called Brye. He said it without appetite, reading the book aloud. \"Wall-walk could have finished it. Still could.\"",
            "\"No,\" Rik said.",
            "\"They saw us. Nine rats, faces, the tunnel corner if they thought to look. First Vanguard patrol they meet, we're described from ears to tail.\"",
            "\"No,\" Rik said again, and did not explain, because the explanation was three children and a plank, a shape he could not kill twice, and there was no way to enter that in anyone's book but his own.",
            "Brye looked to Jack, of all of them. Jack looked at the smoke.",
            "\"Escort them, then,\" Jack said slowly. \"Not far. Buffalo territory has a garrison line two days east; every cow in the south knows to walk toward it. We point them, walk them the first stretch so the scavengers don't, and turn north. They live, and by the time any patrol hears a description, we're across the line.\"",
            "\"And the description walks with them,\" Rik said. \"Two days is nothing. A buffalo band on good mules makes it up in one, and it isn't nine strangers they'll be hunting then, it's nine rats placed, on a bearing, with a start that shrinks every hour. We'd be handing them our shadow and asking them to hold it gently.\" He shook his head. \"East is death with better manners.\"",
            "\"And leaving them here?\" Jack's voice stayed level, which from Jack was shouting. \"No water they can reach, no walls, kits in the long light. That's death too, Rik. Slower and with no arrow to blame.\"",
            "\"I know it.\"",
            "\"Then say the third thing, because I'm not walking north with the second one.\"",
            "The silence in the broom was its own country for a moment. Below, the fire found something new in the ruin and stood taller.",
            "\"There's a third thing,\" Tesk said.",
            "Everyone turned. He had been quiet since the wall-walk, quiet in a way that had rearranged his face; the catechism sat on him now like a coat borrowed from a bigger rat. He drew in the dirt with a claw as he spoke, quick and certain.",
            "\"Old ruin, north and west of here, off every road. Half a day's detour, maybe more with kits at cattle pace. I laid up there two years back, coming out.\" He did not say coming out of what; none of them ever did. \"There's water. A tank, rat-cut, still holding after all this time. Standing walls, real shade. We walk them there, leave them what dried stores the mules can spare, and we cut for the border next waking. They're off every path a patrol rides, they've got water and dark, and when the Vanguards find them, and they will, cattle voices carry, we're a full cycle gone and no bearing given.\" He sat back. \"It costs us the day. That's all it costs us.\"",
            "The arithmetic stood in the dirt where he'd drawn it, and no one could improve it, and that was that.",
            "Rik walked down the rise alone, bow slung, paws open and empty, to tell three women whose family he had killed that they were coming with him now, for their own good.",
            "They watched him come the whole way. When he stopped, ten paces off, the eldest of the three moved without hurry to stand between him and the children, and the movement said everything either side needed: not a negotiation. A weather report. Here is the storm; here is where I will stand in it.",
            "\"There's water north of here,\" Rik said. \"Shelter. We'll take you there and leave you food. Then you'll never see us again.\"",
            "The eldest cow looked at him for a long time. She was gray at the muzzle, heavy, burned along one flank where the byre had gone up, and her eyes did the thing he had known they would do, the filing thing, and he stood still for it because he had earned the file.",
            "\"The well,\" she said at last. Her voice was cracked with smoke and level as Ruby's floor. \"My mother drew from that well. Her mother dug it.\" A pause. \"You people dig.\"",
            "\"Yes,\" Rik said.",
            "\"I thought so. The corner came up too clean for weather.\" She turned her head and looked at the fire a while, and then at the children clustered against the other two, and Rik watched her do her own arithmetic, the same sums exactly, water and kits and days, and reach the same total.",
            "\"North, then,\" she said, as if it were her plan now. In whatever was left of her world, it had to be."
          ],
          visual: { img: "", grad: "linear-gradient(160deg, #2c2620 0%, #1e1a16 48%, #0c0a08 100%)", tint: "rgba(160,130,100,.14)", glow: "#c9a37a", fx: "ash" }
        },
        {
          id: "e5-4",
          tag: "SCENE 04 · THE TANK",
          title: "What the Makers' Children Made",
          railLabel: "THE RUIN", railSub: "SCENE 04", railLen: 2,
          paragraphs: [
            { lead: true, text: "The ruin took the whole march to reach and announced itself the way old things do in the Garden: first as a wrongness in the land, lines too straight beneath the scrub, then as walls." },
            "Rat-built. There was no mistaking it and no explaining it either. The doorways were low and wide, cut for a people who went on all fours when they chose to; the passages branched and rejoined like burrow-work rendered in dressed stone; and the stone itself was dressed, true-edged, laid dry and still standing after a span of Rains no one present could count. Rik walked through the outer courts touching things. Quarry-born hands know worked stone the way herders know a beast's age, and every surface here said the same impossible thing: we cut this. Our kind. Long before the quarries, someone taught us and we built, and then something happened, and the something was so complete that even the story of us drowned.",
            "Shadow's Teeth, the whispered kingdom, more myth than promise. Rik had carried the name his whole life like a coin too precious to spend. Standing in the ruin's central court, he understood for the first time that the myth was not a promise at all. It was a memory. Rats did not dream of a kingdom because kingdoms were dreamable. They remembered one, the way an amputation remembers weight.",
            "The tank was where Tesk said: a great square cistern cut down into living rock, steps descending its inner faces on all four sides, and dark water standing at the bottom, sweet and cold, roofed over by a half-fallen vault that kept the long light off it. The cows drank, and watered the children, and the children, being children, were asleep within the hour in the deepest shade, in bursts and freezes even in sleep.",
            "The rats made their cold camp across the court. No fire. Nothing left to say that a fire could improve.",
            "Rik took the middle watch, and in its stillest stretch he walked the court alone, and found, in a side chapel whose vault still held, the socket.",
            "He knew it instantly and could not have said how. A niche in the eastern wall, waist-high to a rat, its base a pedestal of the same dressed stone, and in the pedestal's top a shallow rectangular seat, cut with care, polished by handling at its rim: the shape of an absence. Something had stood here. Something sized to be touched by many hands over long years, set at kneeling height, facing the east where the stars would rise when the lattice rested. And at some point, in the drowned story, someone had pried it out and carried it away.",
            "A killing stone. Or the ancestor of one: the thing the killing stones scattered through the forgotten forests were descended from, the way the whispered kingdom was descended from these walls. His people had not always prayed at rough slabs in the wild. Once, they had built houses for the silence, and dressed its seat in true-edged stone, and when everything else was taken from them, they had taken the god and run, and set it down in the forests, and kept kneeling.",
            "<em>You do not pray to be saved. You pray to be noticed.</em>",
            "They had carried that all the way down. Through the fall of whatever fell here, through the drowning of the story, through the quarries. Everything else lost: the letters, the stonecraft, the kingdom, the name. The one thing his line had refused to leave behind was a god that promises nothing.",
            "Rik knelt at the empty socket, because his body decided to, and his pocket was empty too, the boar's tooth spent in another god's burning house, and so he offered the only thing on him, which was nothing, two open paws resting on the cold rim where ten thousand dead hands had polished it.",
            "No silence fell. The night insects went on. The water in the tank spoke its small water-language. Whatever had sat in that seat had been gone a very long time, and if it noticed anything now, it noticed from far away, without comment, as was its whole nature.",
            "It was, Rik thought, the most honest prayer of his life. Both parties absent.",
            "When he came back across the court, the eldest cow was awake, sitting up against the cistern's rim in the dark, watching him. She had been watching, he understood, the entire time.",
            "Neither spoke. But she had seen a rat kneel at an empty hole in a wall in the middle of the ruin of his own people, on the night of the burning of hers, and something in her filing look had shifted one increment: not toward mercy. Toward comprehension, which was worse. She looked at him now the way one looks at weather that has explained itself. Still the storm. But now she knew what kind.",
            "Rik lay down across the court from her and did not sleep, and the long light waited for them all above the broken vault."
          ],
          visual: { img: "", grad: "linear-gradient(170deg, #16222b 0%, #0e161d 45%, #05080b 100%)", tint: "rgba(60,110,130,.18)", glow: "#7fb4c9", fx: "dust" }
        },
        {
          id: "e5-5",
          tag: "SCENE 05 · THE LINE",
          title: "The Filing System",
          railLabel: "THE LINE", railSub: "SCENE 05", railLen: 2,
          paragraphs: [
            { lead: true, text: "They came up on the border at the waking hour of the second cycle, nine rats, two mules, three cows, five kits, all of them walking the way the last mile makes everyone walk: not faster, only more finished." },
            "The eldest cow had said nothing since the ruin. The children had stopped freezing and only moved in bursts now, which the other two women seemed to take for improvement. Rik walked at the front and did not look back at them, because every time he looked back the eldest was already looking at him, filing, refining the file.",
            "The crossing post had grown since they'd marched out: a second watchtower going up, timber skeleton against the flat sky, hyenas moving on it with the loose ease of creatures building in their own yard. The border commander came down from the finished tower himself when the sentries called it in, and Rik recognized him at forty paces. The same commander. The one who had turned a stolen sigil in two fingers, a season and a lifetime ago, and read a dead collaborator's name off it, and opened the way.",
            "He stood at the line and watched them come in, and his tail began to swing, slow and pleased, before they had halved the distance.",
            "\"Cohort nine.\" He had the tally already; a rider must have gone ahead from the last picket. \"Whitehorn. Confirmed burned from the far watch, smoke standing two days.\" He looked along the line of them, professional, and then past them, and his ears came forward, and his whole face opened into something warm.",
            "\"And stock,\" he said. \"Walked in on its own feet. You've done a full season's work in one tasking, quarry-born. Burned the argument and salvaged the assets.\"",
            "\"Sir,\" Rik said. \"They're not stock. They're refugees. Their hamlet is gone. We brought them out because…\"",
            "He heard his own sentence run out of road.",
            "The commander laughed. It was not cruel. That was the whole horror of it: it was the laugh of a man being told the well is full of water, warm, uncomplicated, almost fond.",
            "\"Refugees,\" he said, tasting the word like something regional. \"There are no Bovidae refugees in hyena territory, rat. There's no such shelf.\" He gestured, easy, at the whole of the land behind him, the towers, the camp, the roads north. \"Everything that crosses this line gets entered as what it's for. And these three walked in sound, unbranded, house-raised.\" He looked the women over the way the quartermaster had looked at the book, and named it the way customs men name tariffs. \"Temple-herd cattle from a burned Suvartan shrine. The caravans bid on that. The Dominions pay for the enemy's sacred blood the way collectors pay for the enemy's flags, and what the priests pass over, Midas' factors take west for the households.\" He turned back to Rik, without a flicker of insult, a clerk explaining the form to someone holding it upside down. \"So. Bovidae are for the markets. You lot are for the book. There's no third column. There's never been a third column. What would it even say?\"",
            "And Rik, standing on the line with the long light on his neck, heard the sentence's true grammar arrive a half-second behind the words, the way thunder arrives behind the strike.",
            "There was no third column. There never had been. Not for the cows, and not, on the day a season ago when a rat family walked up to this same post out of the ash of a borrowed name, for them. He had thought they'd crossed as a family seeking shelter. They had crossed as entries. Ruby: entered. Ian: entered, undersized, hold for growth. Rik: entered as what he was for, and everything since, the shed, the training, the book, the blessing, the tasking, had only been the entry maturing.",
            "Tesk's voice, at the trough, easy as weather: <em>protected, same as any subject people</em>. The camp's polite phrase for the same shelf.",
            "\"Don't hang your ears,\" the commander said, misreading him entirely, kindly. \"You'll get the full commission. Tasking cleared, plus salvage at market rate, the kits count as halves now and mature to full.\" He was already turning, already calling up to the tower for the intake detail. \"Caravan comes through inside the month. Good timing, cohort. Good cohort.\"",
            "The intake detail came down: four hyenas with switches and a rope line, unhurried, doing a done thing.",
            "Rik made himself turn and look, because not looking would have been one more thing taken quietly, and he was done taking things quietly from himself.",
            "The two younger cows had understood and were gathering the children in, uselessly, the oldest instinct performing itself past its own ending. The eldest did not move at all. She stood at the line with the rope detail walking toward her and looked at Rik across the ten paces between them, and there was no surprise anywhere in her face. She was temple-herd, border-country born; she had known her whole life what the caravans carried. That was the last entry in her file on him, and he watched her make it: not murderer, not liar. Something more exact.",
            "<em>Courier.</em>",
            "He had carried them here. Through the burning, through the argument in the broom, through the ruin and the water and the one increment of comprehension in the dark: all of it, every mercy, every mile, had been delivery. <em>The fire does not ask what the wood was.</em> Neither does the wagon.",
            "She turned away from him before the rope reached her, and gave the detail no trouble, and walked north into the Matriarchy at cattle pace with her children counted as halves, and did not look back, because there was nothing behind her she had any further use for.",
            "Jack stood beside Rik at the line. He had not spoken since the post came in sight.",
            "\"Third time,\" he said quietly. \"When you're ready. Not today.\"",
            "He walked through the post. After a while, Rik followed.",
            "The commission was paid before the next sleep-bell: entered, cleared, a third of the buy-in struck from nine columns, and over it, salvage. The salvage came partly in coin and partly in kind, and the kind came to shed row in a hyena porter's basket. Grain. Dried river fish. A jar of rendered fat. A twist of southern spice, Vanguard plunder, worth more than everything else in the basket together.",
            "Ruby unpacked it on the floor of the shed and asked nothing. She looked at the fish, and at the spice, and at her husband, and Rik stood in the doorway and let her look, and her stillness worked in both directions for a long moment, and then she turned to the cold hearth and began to cook, because whatever the food had cost, the boy needed feeding, and that arithmetic outranked all others in her book as it did in everyone's, and that was how the whole world worked now, and she knew it, and Rik knew she knew it.",
            "Ian ate the way he had not eaten since the fungal wilds. The fish first, then the grain porridge slicked with fat, then more fish, his ears coming up off his skull degree by degree with each mouthful, his shoulders unfolding out of the small shape, and somewhere in the middle of it he began, quietly, to hum: tuneless, unconscious, the sound a kit makes when the body is briefly, entirely, without fear.",
            "Then he stopped, and looked up at his father, and held out the last piece of fish.",
            "\"Papa. It's good. Better than boar, even.\" A pause, and the old conspiratorial light, guttering somewhere far down, tried the wick: \"Not better than deer.\"",
            "Rik looked at the fish in the small held-out paw.",
            "<em>The taste of roads unbroken</em>, he had said once, by a shielded fire, in the freest hour of his life, and his paw had gone to the boar's tooth in his pocket every day since, a coin too precious to spend. The pocket was empty now. The tooth stood at the foot of a burned god's wall in the ash of a hamlet whose name had once saved everyone in this room, and the fish had been paid for with three women walking north at cattle pace, and the whole supper was salvage, and the boy holding it out to him was the excuse, entered in the book between them, the only column Rik had left.",
            "He could not take the fish. He could not refuse it. Ian's ears were up.",
            "Rik crossed the floor and sat beside his son, and closed the small paw back around the fish, gently, both of his own around it.",
            "\"Yours,\" he said. \"All of it. That's what it was for.\"",
            "And Ian, satisfied, ate, and hummed, and Rik sat with his arm around the boy's unfolding shoulders and watched him chew, because not watching would have been one more thing taken quietly, and he was owed nothing, and he watched.",
            "Outside the long light burned on, entered in no book, answerable to nothing, three months and more remaining on its schedule."
          ],
          visual: { img: "", grad: "linear-gradient(165deg, #2a2a26 0%, #1c1c19 48%, #0b0b09 100%)", tint: "rgba(150,150,130,.14)", glow: "#cdc9a8", fx: "dust" }
        }
      ],
      end: {
        title: "The record continues. The salvage is spent. The debt is not.",
        links: [
          { label: "⟁ All Chronicles", action: "goto:chronicles" },
          { label: "← Episode 04", action: "goto:episode/4" },
          { label: "↑ Back to the top", action: "top" }
        ],
        visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #241812 0%, #100a08 55%, #060404 100%)", tint: "rgba(200,120,80,.16)", glow: "#f0916a", fx: "ash" }
      }
    }
  ]
};
