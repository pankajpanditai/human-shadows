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
      }
    ],
    end: {
      title: "The record is incomplete. The long light has only begun.",
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
        visual: { img: "", grad: "radial-gradient(120% 100% at 40% 70%, #0c2622 0%, #081417 45%, #04060a 100%)", tint: "rgba(40,120,110,.20)", glow: "#79e8cf", fx: "spore" }
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
          visual: { img: "", grad: "linear-gradient(165deg, #10181a 0%, #0b1214 45%, #05080a 100%)", tint: "rgba(40,110,100,.14)", glow: "#7fd0bd", fx: "dust" }
        },
        {
          id: "e1-2",
          tag: "SCENE 02 · BEFORE THE GRAY DAWN",
          title: "Doors in the Dark",
          railLabel: "THE DOORS", railSub: "SCENE 02", railLen: 2,
          paragraphs: [
            { lead: true, text: "He reached for Ruby and shook her gently awake. Her eyes snapped open, sharp with fear as the fungal glow painted the walls. She didn’t ask why. She already knew what running meant: hostile lands, patrols that could crush them without slowing." },
            "Rik pulled out the map. Its lines had been etched by a camel trader, one of the long-haul wanderers who crossed the wastes trading rumors and routes no rat could afford outright. The path led north, toward the territory of the Mooncrest Matriarch, the hyena kingdom.",
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
            "No wide-eyed recoil. No flinch. Just steady eyes, deep-set and shadowed, the kind that had seen too many dawn-whips to waste breath on fear.",
            "Rik laid out the plan in a low rush: hyena borders, stolen miles, freedom without chains. Jack listened without interrupting. His muzzle twitched once. Then he dipped his chin.",
            "“Risky as a spore-storm,” he said. He paused. “But staying?” Another pause. “That’s the real grave for us.”",
            "No grin. No celebration. Just the quiet click of a pact being made.",
            "As dawn sharpened, the small group gathered in the thinning gloom. Mules groaned under scant loads: dried fungi slabs that crunched like old regrets, quarry-filched picks, ropes coiled tight, rags stiff with ochre dust.",
            "They moved together into the spore-mist, steps falling into rhythm. No speeches. No brave cries. Only the simple, terrible courage of turning their backs on the only hell they had ever known."
          ],
          visual: { img: "", grad: "linear-gradient(160deg, #0d1218 0%, #0a0e13 50%, #04060a 100%)", tint: "rgba(60,90,90,.14)", glow: "#9db8b0", fx: "dust" }
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
          visual: { img: "", grad: "radial-gradient(120% 100% at 45% 60%, #103029 0%, #0a1a18 50%, #04080a 100%)", tint: "rgba(40,130,115,.20)", glow: "#79e8cf", fx: "spore" }
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
          visual: { img: "", grad: "linear-gradient(160deg, #2a1c12 0%, #1c130b 48%, #0a0604 100%)", tint: "rgba(200,120,50,.14)", glow: "#d9a05e", fx: "heat" }
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
            "Before the silence could condemn him, the bull spoke again: a name, offered without hesitation, that meant nothing and everything to no one present.",
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
      railFoot: "RECORD 03 SECURE<br>THE LONG LIGHT BEGINS",
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
            "Her jaw tightened. \"The young ones got ideas. Talked to hyenas out in the scrub. Showed them the back-ways, the ones the buffaloes miss.\" A hard, flat pause. \"Buffaloes figured it out. We were the only village they didn't torch first. So naturally, we looked guilty.\"",
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
            "The woman stepped between them. She unwrapped the cloth bundle at her waist and held the disc up: flat, deeply carved, unmistakably hyena-marked.",
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
          tag: "SCENE 06 · FOUR MONTHS OF SUN",
          title: "The Long Light",
          railLabel: "THE RUN", railSub: "SCENE 06", railLen: 2,
          paragraphs: [
            { lead: true, text: "He ran." },
            "Not walked. Not scouted.",
            "Ran.",
            "The long daylight had begun: four months of unrelenting sun, climbing higher and refusing to leave. Nowhere to hide. No fungal mist to soften the edges. No night to forgive.",
            "His paws bled on frozen ground and ash-choked paths. Scars burned like fresh whips across his back.",
            "<em>She saved us with that sigil. Without it, her children have nothing.</em>",
            "<em>The next patrol will come. They'll see the mark is gone. And they'll finish what the buffaloes started.</em>",
            "He pushed harder. Muscles screamed.",
            "He ran until his lungs burned hotter than his scars.",
            "The village appeared as a wound in full, merciless light.",
            "No shadows to soften it. No gray to blur the edges. Everything exposed: the ash, the plank, the drag marks, all of it clear and bright under a sun that had four months of nowhere else to be.",
            "He found the woman first.",
            "Tied to the same plank. Body broken further. Eyes open, staring at nothing.",
            "The children. Gone.",
            "Drag marks in the ash. Small prints ending where larger hooves had trampled.",
            "Rik dropped to his knees.",
            "He placed the wooden disc, the hyena sigil, gently on the woman's chest.",
            "A useless offering.",
            "No scream left him. Only a low, rattling breath that tasted of spore-dust and regret.",
            "He sat there a long time.",
            "The sun didn't move much. It never would, not for months.",
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
            "The jungle had thickened in the long light: vines knotting overhead, roots cracking through old stone, the air sweet and rotting at once. Every mile carried the weight of what he'd seen and what he'd done, pressing down with a patience that felt almost deliberate.",
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
            "<em>I did everything right. I ran. I bled. I kept my boy from the quarries.</em>",
            "<em>So why does it keep asking for more?</em>",
            "He looked at his hands. Still steady. Still stained from the woman's plank where he'd placed the sigil back on her chest.",
            "<em>You give the offering and the altar stays hungry. You cut the throat and the ground drinks it and says: again.</em>",
            "<em>Is that what a god is? Just a mouth that never closes?</em>",
            "He knelt then. Not in worship. In exhaustion.",
            "<em>The ones who rule? Their gods speak in visions. In light. In commandments carved on temple walls we're not allowed to touch.</em>",
            "<em>Our gods don't speak. They just take. And if you're still breathing after, that's the answer.</em>",
            "<em>That's the whole mercy.</em>",
            "His forehead touched the stone. Cool. Ancient. Indifferent in a way that felt almost honest.",
            "<em>So what do you call it when you do everything the blood asks, and it still isn't enough?</em>",
            "<em>Not fate. Not punishment.</em>",
            "<em>Just the price of being born on the wrong side of the altar.</em>",
            "He stayed there longer than he should have.",
            "Then he rose. Legs shaking. Mind quieter than it should have been.",
            "And walked on.",
            "The makeshift shed was quiet when he returned. Daylight pressed through every gap in the walls: the long sun, just beginning its four-month hold. Ruby stirred but didn’t wake. Jack breathed steady in the corner, bodies still running on the old rhythm of night-sleep. Ian lay curled on a scrap of hide, small chest rising and falling. One paw still clutching the crude wooden toy from the old hut.",
            "Rik stood over him.",
            "No words came.",
            "Only a low, rattling breath escaped him: the sound of something vital cracking inside, not loud enough to wake anyone, not soft enough to ignore.",
            "He sank slowly to his knees beside his son, claws digging into the dirt floor the same way they had on the night he first dreamed of the whip.",
            "Outside, the long daylight stretched on, merciless and unbroken. The world kept turning, vast and uncaring, as if nothing had happened at all."
          ],
          visual: { img: "", grad: "linear-gradient(170deg, #172420 0%, #0e1614 40%, #040606 100%)", tint: "rgba(40,80,60,.20)", glow: "#63ab87", fx: "spore" }
        }
      ],
      end: {
        title: "The record continues. The long light has three months and more to burn.",
        links: [
          { label: "⟁ All Chronicles", action: "goto:chronicles" },
          { label: "← Episode 02", action: "goto:episode/2" },
          { label: "↑ Back to the top", action: "top" }
        ],
        visual: { img: "", grad: "radial-gradient(120% 90% at 70% 10%, #1a1c24 0%, #0a0b10 55%, #060709 100%)", tint: "rgba(40,44,60,.18)", glow: "#cdbf9a", fx: "dust" }
      }
    }
  ]
};
