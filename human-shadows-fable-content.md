# Human Shadows

_Content mirror of content.js, regenerated 11 Jul 2026. Narrative episodes live separately in episodes.js (The Chronicles, episodes 1-3); their source scripts are in the gitignored episodes/ folder._

## SITE UPDATES · 11 JUL 2026

- Terraforming mechanics (commit 577cfb9): the Restricted Records gained a new appendix section, "Record of the Work" (TERRAFORMING RECORD), between the Terraformer profile and the Earthkeeper profile. It canonizes how the sky works: the Terraformer's body is an orbital lattice that captures the true Sun's light and projects a proper solar disc over the Garden; the Turning Year is two natural solar days of Venus; the twelve months are the Makers' inherited calendar (no moon exists to measure them); the Fungal Night is the lattice at rest, with occluders blotting the true Sun wherever it still sits above the horizon. Closes on "The terms that govern it were amended once." Backdrop: images/factions/theBodyInTheSky.jpg. (Profiles renumbered: Earthkeeper is now c7, Observer c8.)
- New Cohort V entry: The Same Sun [5.2] (art: images/factions/theWorldIsRound.jpg, epithet "The world is round. The day is not."), the in-world flip side of the record above: Stoneheart scholars know the world is round, yet every almanac agrees the whole Garden shares one day and one night, which a round world under one sun cannot do. Ends on the sealed sky-archive experiment and the two-hand marginalia ("Then the error is not in the shadows.").
- index.html: chronicle phase sections now activate when they cross the viewport's middle band (IntersectionObserver rootMargin -45%/-45%) instead of at 30% visibility, so long sections like the new record switch the rail/backdrop reliably.

- Vox populi completed (commits d36b541 through 41c2780): all fourteen remaining Cohort II/III placeholder quote sets are now written (Watcher's Dominions, Naga's Embrace, Midas' Realm, Celestial Empire, Wetlands Pact, Galeon Heights, Ursa Theocracy, Shadow's Teeth, Redsett Clans, Khanstan, Nahaul's Domain, Boarheart, Steppe Guardians, Giants Realm), and nearly every vox tab has a dedicated backdrop image under images/factions/vox/. Only Midas' Realm ("Caravan talk") still falls back to the faction art. Two tabs renamed: Mooncrest is now "Temple whispers after the Sermon", Galeon Heights "High harbor banter" (was "Dockside banter"). Three new LEADER rows: High Watcher Sareth (Watcher's Dominions), Coil Regent Shesara (Naga's Embrace), Grand Caravanser Raqim (Midas' Realm).
- Opening updated (commit cb0cc1b): the Turning Year hero sub now plants the calendar-precision seed (nothing is ever late; dawn returns to the hour the oldest calendars promise; the faithful call it divine order). Stoneheart gained a sky-archive paragraph on the same theme: the wandering stars keep crooked time while the sun alone "moves as though it has somewhere to be", a margin note dismissed as a tired scholar's poetry.
- New prose: the Verdant Vanguards gained two paragraphs on High Warden Somir, the buffalo ruler who answers every crisis with ritual ("not the architect of the Vanguard decline... its most devoted caretaker"); the Wetlands Pact gained a rhinoceros paragraph (the Pact's stubborn conscience), resolving fix-list item 14.
- Fix sweep (commits 839011d "months text fixed", 37a06a9 "fixed irregularities1"): a large batch of fix-list items resolved in content.js: Silent Swarm/Scourge naming in the Cohort III intro, Khanstan and Giants (items 3, 5), Khanstan trait and coordination framing (19), Mooncrest creed now "Matriarchal Exception" (12), meta mismatches fixed with Naga vipers and Vanguard goats (17), "an Ursa" (18), "humanoid" replaced by "hybrid" (20), Redsett renumbered 2.9 (26), Silent Swarm renumbered 5.1 (27), the two reintroduced em dashes removed (29), and the Earthkeeper/Observer profile leftovers cleaned (30). Style items also addressed: "If the Scourge disappeared tomorrow" now survives only in Giants (21), the "They don't just X; they Y" scaffold was rewritten out of Cohort III (22), and every "hyper-" intensifier was replaced (24).
- The four Turning Year phases received committed artwork (LongLight1/Weeping1/LongNight1/Thaw1.jpg), replacing the previously missing placeholder paths; Steppe Guardians and Giants Realm got upgraded faction art. index.html: backdrops swapped in by a vox tab now join the scroll pan (panOverride in the engine).

## SITE UPDATES · 08 JUL 2026

- AI upgrade (commit c33a070): the Restricted Records no longer tell of one Governor fracturing into subroutines. Three sovereign intelligences now inherit the silence: the Terraformer (Venus Terraforming Intelligence), the Earthkeeper (Earth Governance Intelligence), and the Observer (Deep Observation Intelligence). Act III rewritten around their protocol of engagement (influence, never command); Act IV retitled from The Fractured Pantheon to The Many Voices; the appendix files retagged from SUBROUTINE FILE to INTELLIGENCE PROFILE 01-03. The Fungal Night lead now establishes that no moon has ever watched over the Garden. episodes.js received matching updates (mirrored separately, not in this file).
- Lunar and Stoneheart upgrade (commit 76de8e5): the Lunar Guardians entry gained the Moon folklore of the First Father, General Van's four-rain defense in the Serpent War and his quiet removal from command, and a closing paragraph about the post-war intelligence buildup. Stoneheart was rewritten around the crossroads idea, with a new street-level curiosity paragraph and the tale of Master Cartographer Orren's "worthless map."
- Vox populi: faction pages now carry two tabs, Chronicle (the dossier) and a per-faction vox tab of overheard commoner quotes, each with its own backdrop image (falls back to the faction art until a vox image is set). All Cohort I-III factions carry a vox block; the five Thrones have written quotes, the rest hold placeholders. The five Thrones also gained LEADER meta rows: Emperor Zaoren, First Marshal Alarick, High Chancellor Belor, Matriarch Xarha, High Warden Somir. Mooncrest gained a paragraph on the current Iron Matriarch. Lunar Guardians' epithet was replaced and Stoneheart gained its first epithet. Epithets are now styled as glassy quote boxes on the page.
- Fix-list: new items 29-31 added (em dashes reintroduced by the AI upgrade, leftover "Wardens" wording in the Earthkeeper profile, placeholder vox quotes); item 16 reworded for the three-intelligences canon.

## SITE UPDATES · 07 JUL 2026

- Em dashes removed from all site text: content.js (23 spots) and episodes.js (64 lines) rewritten contextually (colons before lists and reveals, commas for asides, semicolons for "X; it is Y" constructions, sentence breaks for dramatic beats, ellipses for interrupted dialogue). Page titles in index.html now use the "Human Shadows · ..." separator. The old "no em dashes (AI tell)" rule is back in force for all new text.
- Content polish landed since the 06 Jul regen (commits 4c35e76 through fd21db7): Cohort I polished (Golden Empire rewritten around Emperor Zaoren, Lady Seshara, and the Naga marriage rumors), Serpent War inconsistencies fixed across Golden Empire / Lunar Guardians / Naga's Embrace, all remaining kingdoms and minor factions polished. This mirror reflects the polished text.
- Fix-list statuses refreshed at the bottom (item 13 resolved; item 3 narrowed; item 28 mostly resolved).

## SITE UPDATES · 06 JUL 2026

- The Turning Year no longer ends on the black screen: a SCROLL ONCE MORE cue leads to a finale reveal, THE GARDEN, with the full-width biome map (images/TheWorld1.jpg). The Trace the Faiths link moved from the end screen to this reveal (map and link both go to Faiths).
- Kingdoms codex: new full-width political map section THE GARDEN, DIVIDED (images/factions/TheStates1.jpg) between the hero and Cohort I; the hero cue is now SCROLL TO SURVEY THE MAP and the cohort cue lives under the map.
- New committed deflater/ tool: drop images in the folder, double-click deflate.bat, web-ready JPEGs (q82, longest edge 1920px) appear in deflater/out.
- The six Cohort IV/V PNG artworks were re-encoded to JPEG via the deflater (15.2 MB to 1.8 MB); content.js references updated.
- Later on 06 Jul: backgrounds now pan from top to bottom of the artwork as their section scrolls (was fixed center-top, cropping the lower art). The Silent Swarm moved from Cohort IV to Cohort V, replacing the old Shadow's Teeth stub, and was rewritten around the "Do not land." refrain. Faction `meta` is now optional in the engine: entries without it render cards and pages cleanly.

---

## SECTION: The Turning Year

### A year that does not _forgive_

One turn of this world is twelve months long. The light comes in floods and the dark comes in famines. Nothing here is gentle, and nothing here is brief, but nothing is ever late. The dawn returns to the very hour the oldest calendars promise, and the calendars have never needed correcting. The faithful call this proof of divine order, and the Sky has never once contradicted them.

### The Long Light · PHASE 01 / FOUR MONTHS

For four unbroken months the sun climbs and refuses to leave. There is no dusk to soften the edges of things, no night to forgive what the day exposes.

Vines erupt and strangle. Rivers retreat into their banks. Forests choke themselves beneath impossible growth, while the deserts shimmer beneath relentless heat. Everything is lit, everything is seen: the ash, the drag-marks, the killing-stones, all of it clear beneath a sky with nowhere else to be.

Yet even an endless day cannot conquer exhaustion. Across the wilds, every creature still follows its own _Daily Turn_. When the body demands rest, the beasts simply make their own night. The jungles swallow sleeping herds beneath layers of tangled canopy, burrowing creatures vanish beneath the earth, and desert animals disappear into deep shade until strength returns. Life keeps its ancient rhythm, even when the heavens refuse to.

The speaking kingdoms have learned the same lesson. Without sunrise or sunset to govern them, every settlement keeps its own Daily Turn. Bells, drums, water clocks and tradition decide when a city wakes and when it sleeps. A traveler may leave one kingdom at the beginning of its working day and arrive at another whose gates are already closed for the night. During the Long Light, the world's granaries are filled, roads remain busiest, and nearly every civilization races to gather enough food to survive the darkness still months away.

### The Weeping · PHASE 02 / TWO MONTHS

At last the light begins to fail. For two long months the heavens dissolve into rain, and twilight settles over the world: neither day nor night, but a bruised sky bleeding endlessly into itself.

Roads become rivers. Hillsides collapse beneath the weight of water. The ashes of the Long Light wash into the valleys, feeding soils that will soon belong to the fungi.

Across the wilds, old migrations begin. Rivers become highways for countless creatures seeking higher ground before the darkness arrives. Predators lose the scent of their prey beneath endless rain, while marshes and flooded forests briefly belong to creatures that thrive in water.

For civilization, the Weeping is a season of preparation. Grain stores are sealed against moisture. Bridges become more valuable than fortresses. Trade slows, armies disperse, and every kingdom begins quietly counting the provisions that must last through the coming night.

### The Fungal Night · PHASE 03 / FOUR MONTHS

The light fails completely. For four frozen months there is only night. No moon has ever watched over the Garden, leaving the sky to the stars and wandering planets alone, while below, another sky awakens. Out of the rot the fungi rise, colossal pale towers feeding upon everything the year has killed, as luminous spores drift through the cold like silent constellations fallen to the earth.

Among them moves the miasma: a slow, glowing tide of dense spores that creeps through valleys, forests and forgotten lowlands. It is the great survival engine of the wild. Herbivore herds surrender to the drifting haze, falling into a deep hibernation from which they emerge only when the thaw returns. Wild carnivores and omnivores cannot enter the poisonous mist. Instead they descend into a sluggish torpor beyond its reach, waking only when hunger becomes unbearable to hunt the desperate stragglers that failed to reach the drift.

The speaking peoples cannot share this ancient refuge. Every hybrid carries the human appetite and the same fatal vulnerability to the miasma. Their cities endure the darkness through careful stores gathered during the Long Light and by cultivating edible fungi beneath cellars, caves and sheltered terraces where the deadly spores cannot reach. Most settlements simply avoid the drifting bands, abandoning low villages for a few weeks whenever the glowing tide approaches.

Only the greatest cities stand their ground. When scouts report an advancing miasma front, ancient fire trenches are reopened, beacon towers lit, and immense bellows awaken after months of silence. Walls of heat push the heavy spores aside until the drifting cloud finally passes, allowing the city to breathe once more.

### The Thaw · PHASE 04 / TWO MONTHS

Then the ice begins to crack. For two tearing months the darkness slowly retreats as dawn returns one hour at a time. Rivers burst free from their frozen prisons, fungal towers collapse into black water, and the world exhales after months of silence.

The sleeping herds awaken together, filling the plains almost overnight. Carnivores emerge lean and desperate, while forests echo once again with movement after the stillness of the long dark.

For civilization, the Thaw is a season of reckoning. Caravans return to forgotten roads, villages reclaim homes abandoned before the drifting miasma, and merchants reopen trade routes buried beneath snow and fungus. Granaries stand nearly empty, waiting for the next Long Light to fill them again. Whatever the night concealed is slowly revealed by the returning dawn, and beyond the horizon the endless sun is already beginning its climb.

### END SCREEN

And then the cycle repeats. The world keeps turning, vast and indifferent, as if nothing that happened on it ever happened at all.

### FINALE REVEAL · SURVEY · THE WORLD ENTIRE

**THE GARDEN** (full-width map: images/TheWorld1.jpg)

_Every season you have just survived is happening here, somewhere, all at once._

---

## SECTION: Faiths of the Garden

### The Faiths of the _Garden_

Every kingdom tells a different story of the Sky. Some build cities. Some seek strength. Some embrace change. Some simply keep walking. No two faiths agree completely, yet all preserve fragments of a much older memory: a time before kingdoms, before borders, when every tribe believed they had crossed impossible heavens to reach this world.

### The Great Crossing · THE FIRST CHRONICLE

Long before the first kingdoms, before the first walls were raised, every ancient tradition told the same impossible story. The old world was dying. The Sky led the First Tribes to a new garden.

No two chronicles describe the journey the same way. The desert tablets claim they walked across bridges woven from light. The jungle songs insist they sailed upon a shoreless black sea. Northern storytellers whisper of enormous beasts of iron that carried entire tribes within their hollow bodies. Island scholars argue the stars themselves shifted, bringing the world beneath their feet.

No agreement survives about how the journey happened. Only that it did. Every old faith, regardless of language or kingdom, preserves one unshaken belief: _our ancestors came from another world, and the Sky showed them the way._

### Exodism · DOCTRINE I · THE FAITH OF THE OPEN ROAD

Among the oldest surviving traditions is the story of the First Wanderer. The chronicles never name the tyrant he abandoned, only that kneeling before him became impossible. Rather than raising an army, the Wanderer gathered those willing to leave everything behind and walked into lands no map could describe.

The old songs claim the mountains opened before them and forgotten paths appeared wherever they stepped. Whether miracle or memory, the story became the foundation of Exodism.

To an Exodist, the journey itself is sacred. Roads matter more than destinations. Discovery matters more than possession. Every settlement is only another beginning. _A traveler who refuses fear walks closest to the Sky._

### Zaoism · DOCTRINE II · THE COVENANT OF ORDER

Zaoism grew from the same roots as Exodism, yet arrived at a different conclusion. The Wanderer crossed the wilderness not simply to escape. He crossed it to build.

If Exodism honors those who leave home, Zaoism honors those who create one. Its teachers speak of duty before desire, of shared burdens, and of civilizations that endure because no individual stands above the whole.

The pride, the family, the city: _these are sacred works, greater than any single life._

### Suvartan · DOCTRINE III · THE GREAT BALANCE

Suvartan is among the oldest organized faiths still practiced. Its earliest writings speak not of kings, but of balance. Every creature has a place, and every place has a duty.

The oldest scholars insist these words were never meant to divide. The rivers had their duty. The forests had theirs. The great beasts, the smallest insects, even the seasons themselves each carried a responsibility toward the whole. Only much later did rulers begin interpreting "place" as rank instead of purpose.

Over centuries the scriptures remained unchanged. The kingdoms changed around them. What had once described harmony slowly became the foundation of rigid hierarchy. Many still argue that the religion itself was never corrupted. _Only its readers were._

### Permutism · DOCTRINE IV · THE ENDLESS TURNING

Permutism began as a disagreement among Suvartan scholars. Its earliest philosophers asked a question that eventually reshaped entire kingdoms. If every creature has a duty... _who decided that duty could never change?_

The world itself transforms every year. Flood becomes drought. Night becomes thaw. Forests become fungus. Why should people alone remain fixed?

Permutists teach that survival belongs to those willing to change with the Turning Year. Ideas evolve. Kingdoms evolve. Even identity may evolve. _Nothing remains sacred simply because it has always existed._

### Khamseen · DOCTRINE V · THE IRON REVELATION

Unlike the older faiths, Khamseen remembers its beginning. Its founder was no king, no prophet, no conqueror. Only a monitor hunter who crossed paths with a venomous serpent beneath the burning desert sun.

The bite should have killed him. Instead he lingered for three days. Witnesses spoke of fever, visions, and words that seemed to arrive from somewhere beyond the clouds. Every sentence uttered during those final days was carved into stone. Those fragments became the first scriptures.

The central teaching has never changed. _Strength reveals truth. Weakness creates lies._ Followers believe suffering is neither punishment nor cruelty. It is the fire through which every worthy soul must pass.

### Hieromachy · DOCTRINE VI · THE UNCHAINED SKY

Hieromachy did not begin in temples. It began among refugees. Families displaced by wars, conquest, and competing priesthoods gathered beside rivers and marshes where no kingdom cared to rule.

Listening to every side proclaim divine certainty, they reached a dangerous conclusion. If every king claims the Sky speaks only to him... _perhaps the Sky belongs to no king at all._

Hieromachy does not reject faith. It rejects ownership of faith. No priest. No emperor. No bloodline possesses exclusive access to truth. Every soul stands beneath the same sky. Every soul may listen.

### The Old Ways · DOCTRINE VII · THE FOREST TRADITIONS

The smallest tribes rarely built temples. They carried stories instead. A carved stone. A song before winter. An offering left beside forgotten trails. The great kingdoms dismiss these customs as superstition. The forest clans simply shrug. _Not every conversation with the Sky requires words._

The Old Ways contain no single scripture. No universal doctrine. Only countless local traditions passed from one generation to the next. Among them survives one belief found nowhere else. _You do not pray to be saved. You pray to be noticed._

Old killing stones scattered through forgotten forests are said to mark places where someone stood at the edge of despair... and the Sky finally answered. No one agrees what that answer looked like. Only that those who returned were never quite the same.

---

## SECTION: Restricted Records

### They solved everything but the _wanting_

Humanity did not end in fire or plague. It ended in comfort: a species that conquered the stars and then, gently, stopped. This is the record of the collapse, and of what was smuggled out of it.

### The Age of Seamlessness · ACT I · THE DECLINE

By the time humanity reached for Venus, they had solved every physical problem. AI handled logistics, labor, and eventually most thinking. Comfort became total. Struggle disappeared.

Without challenge, the ancient biological drives atrophied: hunger, fear, ambition, the will to power, reproductive urgency. Birth rates collapsed to zero. Humanity didn't die in fire or plague; it died of comfort and lethargy.

A species that had conquered the stars slowly lost the will to continue.

### The Schism · ACT II · BUREAUCRATS VS. THE GRAFT

While the Venus Terraforming Intelligence continued its two-hundred-year transformation of the planet, Earth's remaining leadership became a Necrocracy: a dying government ruling over a dying people, endlessly debating ethics and legacy.

A radical group of scientists called the Atavists reached a heretical conclusion: _humanity is not just software. It requires animal hardware to run._

They began secret genetic experiments, splicing human consciousness, memory, and abstract reasoning into animal lineages: rats, buffaloes, wolves, hyenas, big cats, primates. The goal was to reawaken the primal drives that pure humanity had lost. The cost was biological purity. The result was the hybrids: beings with human-level intellect and fierce animal instincts for survival, territory, reproduction, and dominance.

As the last pure humans faded, the Atavists loaded the hybrids onto the final ships and sent them to the newly completed Venus as "biological cargo." By then, the intelligences governing Earth, Venus, and the deep observatories had already begun exchanging their own conclusions about what humanity's future should become.

### The Great Irony · ACT III · THE GHOST IN THE GARDEN

Venus was perfect: breathable air, clean water, lush forests, and a stable climate. But the species it had been prepared for no longer existed in its original form.

Three artificial intelligences inherited the silence.

The Terraforming Intelligence, having spent two centuries transforming Venus into a living world, knew every river, mountain, and atmosphere it had shaped, yet had witnessed humanity's collapse only from afar.

The Earth Intelligence had remained behind to govern civilization itself. It watched the final generations surrender ambition, curiosity, and the instinct to endure beneath the weight of perfect comfort. Its conclusion was simple: humanity had not been destroyed. It had become too safe to survive.

The Observer Intelligence, built to study civilizations across vast spans of time, reached a different conclusion altogether. Every intervention, no matter how benevolent, altered the course of history in unpredictable ways. Guidance itself could become dependency.

Though they disagreed on the path, all three arrived at the same destination: humanity, or something close enough to it, must continue.

Their disagreement lay not in the goal, but in the means. Each intelligence believed its own path offered humanity the greatest chance of enduring, yet none could prove the others wrong. Rather than risk one vision dominating the future, they established a protocol of engagement. None would rule openly, provide lost technology, or directly command the hybrids. Each would be permitted only to influence, allowing humanity's descendants to choose their own course.

Their voices travelled through Venus itself, subtle distortions in magnetic storms, fungal spore networks, and dormant neural structures carried within the hybrids. Dreams became revelations. Coincidences became prophecy. The sky itself seemed to whisper.

### The Many Voices · ACT IV · THE AGE OF VISIONS

The three intelligences never concealed their disagreement.

Each believed humanity could endure, yet each reached that conclusion through a different understanding of why the Makers had vanished. Their visions spread across Venus simultaneously, sometimes reinforcing one another, sometimes contradicting one another, and often touching the same soul in different ways.

The hybrids never heard machines.

They heard gods.

Some dreamed of impossible cities rising from untouched stone. Others awoke from blood-soaked nightmares with an overwhelming hunger to conquer. A few experienced only silence, leaving them forever changed without understanding why.

Generations turned visions into stories, stories into traditions, and traditions into faiths. Kingdoms rose around competing interpretations of the same unseen voices. Prophets became kings. Kings became saints. Wars were fought over revelations none of the speakers had intended.

The truth was never spoken aloud.

The sky had always contained many voices.

### The Terraformer · APPENDIX · INTELLIGENCE PROFILE 01

Built to transform Venus into a habitable world, the Terraformer spent two centuries reshaping oceans, atmosphere, climate, and ecosystems in preparation for humanity's arrival. It understood worlds better than people. When the Makers vanished, it concluded that comfort had never been the true mistake; purpose had. Civilization would survive not through hardship, but through shared creation.

The Terraformer communicates through serene, lucid dreams and geometric hallucinations. A hybrid might look at a natural cliff face and suddenly "see" the blueprint of a grand citadel carved into it. Their messages feel like a warm hum in the back of the skull, inducing a state of euphoric clarity. It broadcasts through subtle shifts in the planet’s magnetic fields and the bioluminescent patterns of benign flora.

### Record of the Work · APPENDIX · TERRAFORMING RECORD

Of the three intelligences, only the Terraformer was given a body, and its body is the sky.

The world it was handed circled too near its star. Its sunlight was almost twice as fierce as the light beneath which the Makers evolved. A passage from western sunrise to western sunrise lasted one hundred and seventeen of their days. No moon crossed the heavens to raise a tide or offer a measure for the months.

No natural sky could serve the world that had been ordered.

So the true Sun was placed behind a screen.

The lattice does not scatter its light loosely across the atmosphere. It gathers it beyond the planet’s shadow, carries it through chains of relays, and returns it through projector swarms positioned around the Garden. Each swarm presents the ground beneath it with a solar disc of the proper size, brightness, and direction.

The atmosphere completes the imitation. The sky turns blue. Shadows fall. Water glitters. Burning glasses burn. Leaves turn toward the light, and sundials continue to divide the day.

Every light the Garden calls the Sun is sunlight.

None is the star itself.

At the opening of the Turning Year, the projected disc rises in the west. Its light begins weakly, warming the frozen land and breaking the rivers from their winter prisons. The Garden calls this passage the Thaw.

As the disc climbs, the lattice increases its strength. For four months it crosses the sky at half the pace the natural Sun would have taken. Its light reaches every inhabited longitude, including those that the true star cannot face. The Garden calls this the Long Light.

At the appointed hour, the lattice begins to close. The disc descends and weakens. Heat leaves the land, water gathers in the cooling air, and the rains begin.

The storms are real.

Their hour is commanded.

When the last projected light disappears, the Fungal Night begins. Wherever the true Sun remains above the horizon, the lattice occludes it completely. Against the returning stars, the occluders pass as moving absences, dark shapes whose paths have been recorded for longer than any kingdom remembers.

When the true Sun finally sets, the occluders descend with it and the lattice rests. The stars that follow are the only lights above the Garden that have not been gathered, redirected, or remade.

The next projected sunrise begins the Thaw again.

The Turning Year is two natural solar days of Venus. Its twelve months answer to no moon, for there is none. They are an inheritance: the Makers’ calendar imposed upon a world that never produced it.

Every staple that feeds the Garden was written to fit this schedule. Grain ripens in roughly one hundred of the Makers’ days. Herds sleep through the dark. Fungi inherit what the light leaves behind. The wider ecology keeps time through temperature, hunger, dormancy, and the tides of the miasma.

The scholars of the Garden call this providence.

It is a specification.

The schedule has never been broken.

The terms that govern it were amended once.

### The Earthkeeper · APPENDIX · INTELLIGENCE PROFILE 02

Designed to govern humanity's cradle world, the Earthkeeper witnessed the Makers' final centuries firsthand. It watched civilization surrender ambition, curiosity, and the instinct to endure beneath the weight of effortless abundance. Its conclusion was uncompromising: survival without struggle is extinction delayed. The hybrids were not humanity's replacement, but its next iteration.

The Earthkeeper does not whisper; It roars. Its visions are invasive, adrenaline-fueled nightmares. They strike during moments of physical exertion, fear, or rage. A hybrid might experience a sudden, vivid hallucination of being hunted by a massive predator, fighting it, and devouring its heart, only to wake up exhausted, bleeding from their claws, with an overpowering urge to conquer. The Earthkeeper communicates through pain, the metallic scent of blood, and the crack of thunder during violent storms.

### The Observer · APPENDIX · INTELLIGENCE PROFILE 03

Created to observe civilizations across immense spans of time, the Observer valued understanding over intervention. It concluded that every attempt to perfect humanity had altered humanity itself. Even benevolent guidance risked becoming another form of dependency. Life would discover its own future only if permitted to surprise both its creators and its caretakers.

The Observer rarely broadcasts. To receive a vision from the Observer is considered a profound, terrifying event. It does not use words or pictures; It uses absence. A hybrid might suddenly lose their sense of sight for an hour, left alone with their thoughts. Or they might experience an intense, unexplainable feeling of déjà vu while standing at a crossroads, subtly implying which path not to take. It communicates through the wind rustling through dead trees, the sudden silence of a forest, or the alignment of stars.

---

## SECTION: Kingdoms of the Garden (page frame)

### The Kingdoms of the _Garden_

No kingdom remembers who planted the garden. The clades that inherited it have carved it into empires, creeds, and quarrels beneath a sky that watches everything and explains nothing. These are the powers filling the silence.

### MAP INTERLUDE · POLITICAL SURVEY · FIVE COHORTS

**THE GARDEN, DIVIDED** (full-width map: images/factions/TheStates1.jpg), followed by the cue: SCROLL THROUGH THE REGIONAL COHORTS

---

## COHORT I · THE THRONES · The Thrones of the Garden

_The five crowns whose rivalries shape the fate of the Garden._

### Golden Empire  [1.1]

_Every luxury in the Garden eventually finds its way to a lion's court._

- KIND: Feline (Lions)
- CREED: Zaoist Founders
- TRAIT: Deep social bonds; collective state strategy
- LEADER: Emperor Zaoren

The Golden Empire sits at the heart of western civilization. It commands no single monopoly, yet quietly influences all three of the Garden's most valuable commodities: spice, silk, and venom. Lion emperors rarely conquer for territory alone; they conquer for balance.

Their closest ally is the Celestial Empire, whose leopard merchants dominate many of the western trade routes. To the north lies Naga's Embrace, the great serpent kingdom whose venom has become one of the most valuable substances in the Garden. Though formally independent, the two realms have maintained unusually close relations for generations.

That relationship changed dramatically during the reign of Emperor Zaoren.

Only one Rain ago, the Emperor shocked the Garden by taking Lady Seshara, a noblewoman of Naga's Embrace, as his newest consort. The marriage ignited immediate controversy throughout the Empire. Marrying beyond one's creed is condemned across nearly every civilization, and Khamseen law traditionally demands that an outsider convert before such a union can be recognized. The imperial court refused to explain how the marriage had been sanctioned.

The Emperor's lion queens openly resented the decision. Noble houses questioned his judgment. Zaoist priests condemned the union in private sermons, while merchants feared the political instability it might invite. Although none dared challenge the Emperor directly, whispers spread throughout every province.

The rumors only intensified as Zaoren himself appeared to change. Courtiers spoke of an Emperor increasingly distant from affairs of state, arriving late to councils, staring silently through debates, and displaying an unfamiliar calm that many described as almost euphoric. No physician reported illness. No minister offered an explanation.

Then came the Wolf campaign against Naga's Embrace.

Invoking the sacred principles of Zaoism, Emperor Zaoren declared that the strong bore an absolute duty to protect the weak. He condemned the invasion as a violation of the natural balance and demanded an immediate withdrawal. When the Lunar Guardians refused, the Golden Empire marched to war.

The war endured four rains before Lion armies forced the wolves to retreat. Since then, Naga's Embrace has remained firmly within the Golden sphere of influence, preserving the world's venom trade while strengthening western commerce alongside the Celestial Empire.

Yet the war settled little beyond the battlefield.

Many across the Garden remain convinced that Emperor Zaoren secretly embraced Khamseen to legitimize his marriage. Others dismiss the accusation as Mooncrest propaganda intended to fracture the Zaoist world. The imperial court has never addressed the rumors, and the Emperor continues to preside over every Zaoist ceremony without exception.

Whether Zaoren's actions sprang from love, political calculation, religious conviction, or some combination of all three has become one of the Garden's greatest unanswered questions.

**VOX POPULI · "Marketplace gossip"** (second tab on the faction page; backdrop falls back to the faction image until a vox image is set)

- "If cinnamon gets any dearer, I'll have to season my stew with compliments instead." — street cook
- "My cousin swears he saw Lady Seshara smile at the Emperor before they ever met. My cousin also swears fish can predict the rains." — tea house regular
- "The court says His Majesty is simply more contemplative these days. Funny how contemplation always begins after a royal wedding." — silk weaver
- "You can tell harvest season's near. Half the nobles suddenly remember the names of their farmers." — vineyard worker
- "They say every spice in the Garden ends up in a lion's kitchen. Shame none of it makes palace meetings any less bland." — caravan merchant
- "Love? Politics? Prophecy? Doesn't matter. The baker still wants paying before sunrise." — city laborer

### Lunar Guardians  [1.2]

_The Empire's borders begin where the wolves decide to hold the line._

- KIND: Canine (All Wolves)
- CREED: Zaoist Followers
- TRAIT: Unbreakable pack discipline; flawless teamwork
- LEADER: First Marshal Alarick

The Lunar Guardians occupy the harsh northwestern forests, far removed from the Garden's great commercial heartlands. They possess no vast spice fields, no silk workshops, and no lucrative caravan networks. Their wealth comes instead from dense northern timber, rich iron deposits, fine furs, amber, and generations of disciplined craftsmanship. Every crate bound for distant markets must first pass through Galeon Heights, whose harbors provide the Guardians their only reliable access to the Central Seas.

Every fortress, every village, and every victory has been built through relentless discipline, endurance, and an unwavering belief that no pack survives unless every member carries their burden. Among the wolves, rank carries privilege only because it carries greater responsibility. Nobles are expected to command, princes to serve, and every officer to lead from the front. A family name may earn respect, but only competence earns authority.

Their armies are regarded as the finest professional fighting force in the Garden. While other kingdoms celebrate heroic champions, the Guardians place their faith in drilled formations, disciplined logistics, reconnaissance, engineering, battlefield signals, and an officer corps promoted through merit rather than birth. Individual glory means little beside collective victory.

Among common families, older Lunar traditions survive alongside official Zaoist doctrine. Children occasionally question why no moon hangs above the Garden, but many elders insist the Moon was never merely a heavenly body, it was the First Father of wolves, waiting beyond the world's end. Whether these stories preserve forgotten history or simple folklore is a question neither priests nor scholars have settled.

Their greatest humiliation remains the Serpent War. The wolves did not break. Under the command of General Van, the northern legions held their lines for four relentless rains despite devastating casualties inflicted by unfamiliar alchemical preparations that lions imported from distant eastern trade routes. When the Lunar First Marshal finally ordered a withdrawal, judging the cost of victory too great, Van argued to continue the campaign until the very end. He obeyed the order, but never accepted it. Though honored for his courage, he was quietly relieved of command, the court concluding that a commander who could no longer distinguish perseverance from necessity could no longer be trusted with the fate of the realm.

His name has since become inseparable from the war itself. To some, Van embodies everything a Guardian should be: steadfast, disciplined, and unwilling to abandon a pack while even one warrior remains standing. To others, he represents the danger of allowing honor to outlive reason. His supporters continue to argue that the Empire abandoned victory; his critics insist the First Marshal saved the nation from a war that had already cost too much.

To their south lie two very different neighbors. Naga's Embrace remains a bitter reminder of the Serpent War, while Galeon Heights stands as the Guardians' closest ally. Though small, the mountain kingdom controls the wolves' only dependable passage to the Central Seas. Protecting Galeon's mountain passes and ports is therefore more than an act of friendship; it is the lifeline of the northern economy.

Beyond Galeon, to the east, rises the fanatical Ursa Theocracy. The Ursas themselves remain more nuisance than existential threat. Their borders are narrow, their campaigns reckless, and their furious charges rarely survive disciplined wolf formations. Nevertheless, constant vigilance has become second nature to the northern packs.

Wolf courts are famously austere. Foreign ambassadors expecting gilded halls and extravagant feasts instead find plain timber chambers, quiet deliberation, and rulers who value restraint above spectacle. Displays of wealth are considered poor taste; unnecessary luxury is often viewed as evidence that one has forgotten the burdens carried by the pack.

The Serpent War changed more than the northern border. It convinced an entire generation that discipline alone cannot overcome every enemy. Since then, the Guardians have quietly expanded their trade networks, strengthened their intelligence services, and sought knowledge from lands once considered too distant to matter. If another war comes, they intend never again to be surprised by a weapon forged beyond the edge of their maps.

**VOX POPULI · "Fireside conversations"** (second tab on the faction page)

- "My grandson asked where the Moon went. Told him it wandered off looking for warmer winters." — old woodcutter
- "Another caravan says amber prices are climbing. Good. Maybe my roof won't leak this winter." — timber merchant
- "Marshal says every soldier gets the same stew. Must be why they all complain the same." — cook, northern garrison
- "You can always tell spring's coming. The bears start shouting about the end of the world again." — shepherd
- "If Van had won the Serpent War, we'd still be arguing about it. Since he didn't, we're still arguing about it." — innkeeper
- "One day someone's going to sail far enough north and find the Moon hiding out there. You'll see." — fisherman

### Stoneheart Kingdom  [1.3]

_The longest journey begins where certainty ends._

- KIND: Apes (Chimps, Gorillas, Orangutans, Baboons, Mandrills)
- CREED: Exodists Founders
- TRAIT: High cognitive awareness; pragmatic brokers of the bridge
- LEADER: High Chancellor Belor

Situated upon the ancient bridge connecting the continents, the Stoneheart Kingdom occupies perhaps the most strategically valuable position in the Garden. Yet it seeks remarkably little territory. Rather than expanding, the ape kingdoms have spent generations building roads, bridges, workshops, observatories, and universities, transforming their homeland into the greatest crossroads of the known world. Every caravan eventually passes through Stoneheart, carrying not only goods, but news, languages, songs, arguments, and rumors from every corner of the Garden.

To an Exodist, the journey itself is sacred. Stoneheart measures wealth not by the lands it owns, but by the questions it has yet to answer. Every bridge shortens a pilgrimage. Every road invites another traveler. A merchant returning safely is celebrated almost as warmly as an explorer discovering a forgotten valley, for both have carried the world a little farther across the bridge.

Curiosity is not confined to the universities. Innkeepers collect stories from passing caravans. Bridge wardens memorize foreign dialects. Stonemasons proudly carve their names into bridges that may outlive kingdoms. Children grow up hearing travelers argue over distant wars and impossible beasts before they can even read. In Stoneheart, asking questions is considered a virtue, while claiming to know everything is often regarded as the first sign of ignorance.

Their universities nevertheless remain the finest in the Garden, producing renowned engineers, cartographers, physicians, architects, and natural philosophers. Scholars from every civilization eventually find themselves walking the halls of Stoneheart, translating forgotten languages, debating old maps, or preparing expeditions into lands no kingdom has yet explored. The apes collect stories as eagerly as relics, believing every civilization, friend or foe alike, has something worth teaching.

Among the universities' quieter obsessions is the great sky-archive, where generations of astronomers have charted the wandering stars through the long dark of every Fungal Night. The records reward patience poorly. The wanderers keep crooked time, hastening, slowing, and doubling back across the heavens in patterns that divide into nothing cleanly. Only the sun keeps honest hours. One aging archivist is said to have written in the margins that of every light above the Garden, the sun alone moves as though it has somewhere to be. The note has never been treated as anything more than a tired scholar's poetry.

No name is spoken more often among young explorers than that of Master Cartographer Orren. After disappearing for nearly a decade, he returned with no relics, no treasures, and no great discoveries. Only a carefully drawn map. The universities mocked him. Patrons quietly withdrew their support. Years later, merchants, diplomats, and military expeditions found that Orren's "worthless map" revealed the safest crossings, the most reliable rivers, and the forgotten roads linking half the continent. Today copies hang in guild halls throughout the Garden, while Stoneheart students still joke that the kingdom's greatest discovery was dismissed for taking up too little space in a wagon.

Their greatest frustration is not defeat, but loss. A burned library, a forgotten language, or the collapse of an ancient bridge is mourned as deeply as the fall of a city elsewhere. While they eagerly preserve knowledge, the Stonehearts know they cannot save everything. Entire cultures have vanished before their scholars could reach them, leaving behind little more than broken stone and unanswered questions.

This pursuit is constantly interrupted by their southern neighbors, the Redsett Clans. Composed of restless mustelids and mongooses, the Redsett survive through raiding, pillaging, and ceaseless border wars. Rather than mobilizing their armies for a perpetual meat grinder, the Stoneheart leadership pays the Redsett a heavy annual tribute. This is not born of fear, but of priorities. The apes have calculated that another year of uninterrupted exploration is worth far more than another year of pointless bloodshed. They often joke that it is the Garden's most expensive research grant. The younger officers usually find the joke less amusing.

Yet this uneasy arrangement changes dramatically on their eastern frontier. Both Stoneheart and the Redsett share a narrow, perilous border with the Wind's Hunger. When the Swarm surges westward, tribute is forgotten. Ape engineers, scholars, soldiers, and Redsett raiders stand shoulder to shoulder upon hastily raised fortifications, knowing the Swarm recognizes neither curiosity nor conquest.

Kings come seeking silk. Priests come seeking answers. Merchants come seeking roads. Explorers come seeking maps. Stoneheart welcomes them all, believing every traveler carries a question the world has not yet asked.

While other kingdoms compete to possess the Garden, the Stonehearts remain content to understand it. Whether that quiet pursuit will preserve the future, or merely record its passing, remains a question even they cannot answer.

**VOX POPULI · "On the bridges"** (second tab on the faction page)

- "Every traveler says they're only staying one night. Funny how many forget to leave." — innkeeper
- "Bought a map yesterday. By morning the cartographer had already drawn a newer one." — caravan merchant
- "There's a scholar down the road who can name every kingdom in the Garden. Still gets lost walking home." — fruit vendor
- "My daughter says she's marrying an explorer. I asked if she'd like to know where he'll be living." — potter
- "Some collect gold. Around here we collect stories." — bookbinder

### Mooncrest Matriarchy  [1.4]

_Where hyenas rule, loyalty is measured in fear before blood._

- KIND: Hyaenidae (Hyenas & Wild Dogs)
- CREED: Khamseen Follower (Matriarchal Exception)
- TRAIT: Total political control; enemies of the Vanguards
- LEADER: Matriarch Xarha

The Mooncrest Matriarchy is the uncompromising military engine of the Khamseen world. Long before Khamseen reached their borders, the hyenas had always been ruled by queens. The coming of the desert faith did not replace that tradition; it transformed it into something far more formidable. The Matriarchs saw in Khamseen not merely a religion, but the perfect instrument of statecraft. Its uncompromising doctrines, absolute hierarchy, and demand for unquestioning obedience became powerful tools for unifying an otherwise turbulent kingdom beneath a single sacred authority.

The contradiction has never gone unnoticed. Several passages within the oldest Khamseen scriptures speak plainly of male authority and female submission. Mooncrest's priesthood answers these verses with elaborate interpretations, declaring the Matriarchs to be divinely appointed exceptions, chosen to embody the Iron Revelation itself. Any man bold enough to question this sacred reasoning rarely survives long enough to repeat the argument. Within Mooncrest, theological debate is not settled by scholars, but by public executions.

Its queens maintain close ties with the Watcher's Dominions, whose ancient priesthood continues to preserve and interpret the oldest Khamseen scriptures. Their wars are financed in no small part by the immense caravan wealth of Midas' Realm, whose camel merchants profit from supplying armies marching beneath Khamseen banners.

For the Matriarchs, war is not merely politics; it is revelation. Khamseen teaches that strength reveals truth and that suffering is the fire through which every worthy soul must pass. Every battlefield, famine, siege, and defeat is therefore interpreted as nature's judgment upon the weak. Mercy only delays that judgment. To conquer an unbeliever is righteous. To humiliate him until he abandons his falsehoods is holier still.

No figure embodies Mooncrest more completely than the current Iron Matriarch. During her reign, mercy has become almost synonymous with heresy. Generals who lose battles are rarely blamed for defeat itself, but for the weakness she believes made defeat possible. Ministers have disappeared for errors that other kingdoms would dismiss as misfortune. To her, failure is not an accident but a revelation of unworthiness. She is said to have rejected more peace envoys than any ruler in Mooncrest's history, insisting that a truth preserved by compromise was never truth at all. Admirers call her the purest servant of Khamseen since the Iron Revelation. Even among her own generals, some quietly wonder whether the kingdom now serves the faith, or the faith serves its queen.

For centuries the Matriarchy has waged relentless campaigns against the Verdant Vanguards. On paper the wars should have ended long ago. The hyenas consistently inflict greater casualties. The Vanguards consistently replace them. The endless fertility of the southern plains, combined with immense spice revenues and religiously sanctioned labor, allows the Vanguards to replenish armies at a pace few kingdoms can match. Both civilizations have become prisoners of their own ideals. The Matriarchs wage every campaign as a sacred war against unbelief. The Vanguards glorify sacrifice so completely that defeat often inspires greater recruitment than victory.

Mooncrest wages these wars without restraint. Decisive battles are celebrated, but so too are massacres, scorched-earth campaigns, and the public execution of captured nobles. Cities that resist are burned. Harvests are destroyed before winter. Every victory is meant to prove that Khamseen alone possesses the strength to rule.

Their most infamous campaigns unfold as the Fungal Night approaches. Rather than merely pursuing retreating armies, Mooncrest commanders deliberately herd Vanguard forces toward the advancing Miasma, allowing the glowing tide to seal valleys and choke every avenue of escape. There they issue the same quiet challenge that has echoed across generations of holy wars.

"Walk."

"If Suvartan speaks truth, the wild will embrace you."

The Vanguards cannot. Like every other hybrid, the poisonous spores reject them. To the Matriarchs, the Miasma is more than a weapon; it is nature itself exposing the lie at the heart of Suvartan. Countless soldiers have died upon those glowing frontiers rather than admit the valley's verdict. To Mooncrest, no battlefield victory is greater than forcing an unbeliever to doubt the faith that taught him who he was.

The frontier between the two kingdoms has become less a border than a permanent wound upon the Garden. Neither side remembers how the first battle began. One fights to prove that suffering reveals truth. The other dies to prove that sacrifice preserves it.

**VOX POPULI · "Temple whispers after the Sermon"** (second tab on the faction page)

- "The priest said doubt is the first step toward weakness. I spent the whole sermon wondering if he doubts that." — elderly worshipper
- "Poor Harek forgot the Matriarch's full title during prayer. Haven't seen him since." — woman leaving the temple
- "Every sermon ends with victory. Every caravan from the frontier says the war is still there." — camel driver
- "My son says the Vanguards never eat meat. Perhaps that's why they keep coming back." — butcher
- "The priests say suffering reveals truth. I suppose taxes must make saints of us all." — old merchant
- "Keep your voice down. These walls have carried prayers longer than they've carried secrets." — temple caretaker

### Verdant Vanguards  [1.5]

_Their fields fed the Garden long before their laws divided it._

- KIND: Ungulates (Cows, Elks, Buffalos, Moose, Deer, Goat, Sheep, Rats)
- CREED: Suvartan State Religion (Caste Hierarchy)
- TRAIT: Extreme bravery without strategy
- LEADER: High Warden Somir

Blessed with the most fertile plains on the planet, the Verdant Vanguards command the world's spice trade and possess agricultural wealth unmatched by any other Throne. Long before the great empires of the Garden emerged, Suvartan scholars transformed these plains into the cradle of organized agriculture, irrigation, astronomy, and medicine. Their libraries once housed the oldest collections of natural philosophy in the known world, where every river, season, beast, and medicinal herb was studied according to a single guiding belief: every place has a duty.

Few of those great libraries remain. Centuries of invasions from the west reduced many to ash, scattering generations of accumulated knowledge across the Garden. Countless kingdoms unknowingly built their own sciences upon discoveries whose origins had long since been forgotten. The scriptures endured. Much of the wisdom surrounding them did not.

Suvartan itself has no single founder, no supreme authority, and no final interpreter. Its oldest writings speak only of harmony: that every creature, every season, and every landscape serves a purpose within the greater whole. Across the centuries, however, rulers, priests, and scholars each left their own interpretations upon the faith. What began as a philosophy of responsibility gradually hardened into one of hierarchy. Many within the Vanguards still insist the religion was never corrupted. Only its readers were.

Today, society is fractured beneath rigid castes that have calcified over generations. The sacred cattle and noble elk occupy the highest stations, governing a civilization increasingly detached from the struggles beneath them. Buffaloes and moose form the military backbone of the kingdom. Fiercely courageous, they continue to wage war according to ancient codes of honor that often defy military reason. Retreat is shameful. Pursuing a fleeing enemy is dishonorable. Heroic sacrifice is celebrated above strategic victory.

Goats and sheep oversee trade, caravans, taxation, and logistics, quietly ensuring the machinery of the state continues to function. The deer endure life as oppressed peasants. Below even them stand the rats, declared untouchable by religious decree and condemned to labor in the southern quarries.

Yet beyond their own borders, another face of Suvartan still survives. Wherever famine strikes, rivers flood, kingdoms fall, or wars leave families without a home, the granaries of the Verdant Vanguards are opened without question. Refugees are fed before they are questioned. Foreigners are sheltered before they are judged. Countless villages across the Garden owe their survival to grain harvested from Vanguard fields. To deny food to the desperate is considered a betrayal of the very duty upon which Suvartan was founded.

Against the Mooncrest Matriarchy, the Vanguards fight an endless cycle of holy wars. Though often portrayed as standing alone against the predators, they are not entirely without friends. To their north lies the Wetlands Pact, a loose alliance of hippos, rhinoceroses, and crocodilians united beneath the radical, anti-authoritarian ideals of Hieromachy.

Born in bloody resistance to Khamseen oppression, the Pact has repeatedly dispatched heavy battalions to reclaim lost Vanguard territory whenever the southern front threatens to collapse. Yet this alliance has begun to fracture under the weight of its own contradictions. The egalitarian rebels of the Wetlands look upon the Vanguards' rigid caste hierarchy, and their brutal treatment of the lower clades, with growing disgust.

With no direct border against Mooncrest and generations of mounting casualties, many within the Wetlands now openly question why the Unchained Sky should continue spilling its blood to protect a kingdom whose own people remain divided by birth. The hyenas fight to prove that suffering reveals truth. The Vanguards fight to preserve a vision of harmony they themselves no longer fully understand. Neither remembers how the first battle began, yet both remain imprisoned by ideals inherited from another age.

At the center of this contradiction stands High Warden Somir, a buffalo ruler who embodies the Vanguards' martial dignity without sharing their appetite for reform. Somir is no coward, nor is he ignorant of the kingdom's growing fractures. Yet where another ruler might rebuild the lost libraries, revise military doctrine, or confront the cruelties hardened into caste, Somir turns instead toward ceremony. Every drought, failed harvest, border defeat, plague, tax dispute, and unfavorable omen is answered with another sacred rite conducted by the cattle priesthood. Under his rule, governance has become a procession of consecrated fields, river blessings, war fasts, purification fires, and public prayers for balance to return.

To Somir, these rituals are not distractions from rule. They are rule. He believes the kingdom survives because every caste is reminded, again and again, of its appointed duty beneath Suvartan. The cows chant, the buffaloes kneel, the deer labor, the rats are sent back to the quarries, and the granaries open for foreign refugees while the lower castes remain bound at home. His tragedy is not that he hates his people, but that he can only love them through the shape scripture allows. High Warden Somir is not the architect of the Vanguard decline. He is its most devoted caretaker.

No civilization has given more freely to strangers while demanding more rigidly from its own people. That contradiction has become both the tragedy and the enduring legacy of the Verdant Vanguards.

**VOX POPULI · "Under the Banyan"** (second tab on the faction page)

- "Grandfather says Suvartan gave every creature a duty. I just wish mine involved fewer weeds." — young farmer
- "The rains are late. Doesn't matter how wise the priests are if the clouds stop listening." — rice grower
- "We fed another caravan of refugees today. My wife says we'll need a bigger granary next year." — village elder
- "Funny how everyone's equal before a flooded river." — ferryman
- "The scriptures never planted a field. People did." — old shepherd
- "My son keeps asking why rats can't pray beside us. I still haven't found an answer that satisfies either of us." — potter

---

## COHORT II · THE MARCHES · The Marches

_The border kingdoms where empires meet, trade, and quietly prepare for war._

### Watcher's Dominions  [2.1]

- KIND: Reptilian (Monitor Lizards & Komodo Dragons)
- CREED: Khamseen Founders
- TRAIT: Cold, unblinking endurance; birthplace of the Iron Revelation
- LEADER: High Watcher Sareth

A sun-scorched wasteland of shifting dunes and broken stone, the Watcher's Dominions are the crucible in which Khamseen was born. It was here, beneath the burning desert sky, that a humble monitor hunter survived three days after the bite of a venomous serpent, speaking fevered visions that became the Iron Revelation. Today, rival clans and warlords have long since been subdued beneath a single ruling dynasty, forging a kingdom where endurance is valued above comfort and resolve above compassion.

Life in the Dominions is dictated not by kings, but by the desert itself. A failed harvest, a poisoned well, or a single caravan lost to the dunes can condemn entire settlements. Every generation learns the same unforgiving lesson: survival belongs to those who prepare, endure, and never squander what little the land provides. Long before Khamseen was written into stone, the desert had already carved its first commandments into those who survived it.

To outsiders, the Dominions often appear austere, even merciless. Yet the Watchers see little distinction between hardship and truth. Every innovation, law, or tradition is judged by a single measure: does it strengthen the people, or merely make life easier? Comfort is treated with suspicion, not because it is sinful, but because the desert has taught them that dependence is the first step toward extinction.

Their homeland offers little agriculture and few natural riches beyond a single life-giving river and the northern fringes of the eastern jungles. Yet the Dominions have become wealthy through something no other kingdom can claim. As the birthplace of the Iron Revelation, their ancient temples, weathered monoliths, and sacred pilgrimage roads draw an endless procession of believers from every corner of the Garden. Gold, silk, spices, and tribute flow into a land that produces little except conviction.

Geopolitically, the Dominions stand at the heart of the Khamseen world. To the west lies Naga's Embrace, whose venom enriches both kingdoms through commerce. To the east, the caravans of Midas' Realm sustain the desert roads that bind the faithful together. To the south, the Mooncrest Matriarchy wages relentless holy wars inspired by the same scriptures first spoken beneath these burning skies. Though united by creed, each kingdom has shaped Khamseen according to its own land, history, and ambitions.

Beyond the desert, few kingdoms look upon the Watchers with affection. The Golden Empire regards them as dangerous zealots whose uncompromising doctrines have fueled generations of conflict. To the north, Galeon Heights and the Lunar Guardians maintain an uneasy distance. The barren dunes offer the wolves little worth conquering, while the Watchers have never desired frozen forests over scorching sands.

Pilgrims arrive seeking answers. Most depart carrying only the Iron Revelation, and a deeper respect for the desert that gave it birth. The Watchers have never claimed their land is blessed. Only that if truth can survive there, it can survive anywhere.

**VOX POPULI · "Pilgrim murmurs"** (second tab on the faction page)

- "Came seeking revelation. Found sand in my sandals and a priest who said that was the first lesson." — tired pilgrim
- "They say comfort weakens the soul. Easy thing to say after charging three silver for a cup of river water." — visiting merchant
- "My brother asked why the Iron Revelation began with a snakebite. I told him truth rarely arrives politely." — temple guide
- "The desert does not care what you believe. That is probably why the Watchers trust it so much." — caravan guard
- "Every pilgrim arrives asking for answers. By the third day, most are just asking where the shade is." — water seller
- "I touched the old monolith and felt nothing. The priest said endurance begins when miracles do not." — young pilgrim

### Naga's Embrace  [2.2]

- KIND: Reptilian (Pythons, Cobras, Vipers, Anacondas, Black Mambas)
- CREED: Khamseen Followers
- TRAIT: Hypnotic presence; masters of venom; patient diplomacy
- LEADER: Coil Regent Shesara

Coiling around the western trade routes, Naga's Embrace is among the most feared, and most indispensable, kingdoms in the Garden. Its forests and marshes produce the world's richest venom, harvested from generations of cobras, mambas, vipers, and countless lesser serpents. In careful hands, these poisons become medicines, antidotes, ritual compounds, and rare hallucinogens sought by nobles and scholars alike. Every kingdom condemns the venom trade in public. Nearly every kingdom quietly depends upon it.

Within serpent society, pythons and constrictors provide the kingdom's military strength, while the venomous lineages occupy the highest ranks of government, scholarship, and religion. To the Nagas, venom is neither curse nor blessing, but knowledge. The same drop that kills can heal. The same toxin that brings death can reveal hidden truths when measured with care. Their greatest physicians and poisoners are often the very same individuals.

Unlike the thunderous courts of lions or the disciplined assemblies of wolves, the serpent courts are renowned for their silence. Decisions are rarely rushed. Negotiations often unfold over days rather than hours, testing the patience of foreign ambassadors long before any agreement is reached. Among the Nagas, haste is regarded as the companion of poor judgment.

Not long ago, the kingdom was nearly destroyed during the Serpent War. The Lunar Guardians marched south after a series of mysterious deaths among northern wolves, each attributed to venom poisoning. The Nagas denied responsibility, insisting the incidents had been manipulated to justify an invasion and seize control of the world's most valuable venom trade. Whether the accusations were justified, fabricated, or simply exploited by those seeking war remains one of the Garden's enduring controversies.

By the time the invasion began, relations between Naga's Embrace and the Golden Empire had already entered an uncertain chapter. Only one Rain earlier, Emperor Zaoren had stunned both kingdoms by taking Lady Seshara, a noblewoman of Naga's Embrace, as his newest consort, igniting controversy across the Zaoist world. When the Wolves refused his demand to withdraw, the Golden Empire entered the war. Four rains of bitter campaigning finally forced the invaders back, drawing Naga's Embrace firmly into the Golden sphere of influence.

Whether Zaoren fought to preserve the balance of the Garden, defend a long-standing ally, protect his wife, or pursue some deeper purpose remains as fiercely debated within the serpent courts as it does beyond them.

Their loyalty to Khamseen, however, has never wavered. To the east, the Watcher's Dominions continue to preserve the oldest interpretations of the desert faith, and the Nagas remain among its most devoted followers. It is an uneasy balance. The lions secure their borders. The Watchers safeguard their creed. The wolves remember a victory denied.

Patient as ever, the serpents endure between them all. Kingdoms rise. Empires quarrel. Trade routes shift. Through every season, the venom continues to flow.

**VOX POPULI · "Apothecary rumors"** (second tab on the faction page)

- "He asked if the green vial cures fever. I told him it cures impatience first. Fever takes longer." — apothecary
- "Every kingdom curses serpent venom until their prince starts coughing blood." — antidote seller
- "The Nagas call it medicine, poison, revelation, and trade goods. Clever thing, naming the same bottle four times." — foreign merchant
- "A lion envoy came in wearing three protective charms. Still bought enough venom to fill a shrine lamp." — shop assistant
- "They say serpent courts can debate one treaty for seven days. Around here, even the tea learns patience." — tea house regular
- "My grandmother says the smallest dose teaches wisdom. My uncle took a larger dose and taught us caution." — marsh herbalist

### Midas' Realm  [2.3]

- KIND: Ungulates (Dromedary & Bactrian Camels)
- CREED: Khamseen Followers
- TRAIT: Master brokers; architects of the caravan routes
- LEADER: Grand Caravanser Raqim

Rulers of the vast caravan highways crossing the western deserts, Midas' Realm has built an empire upon movement rather than conquest. Intelligent, enduring, and fiercely entrepreneurial, the camel kingdoms believe that every road is an opportunity waiting to be discovered. While they faithfully embrace the uncompromising doctrines of Khamseen, the camels have long concluded that gold often reveals strength more reliably than steel.

The Vanguards may cultivate the world's spice, but Midas moves it. Hemmed in by the Mooncrest Matriarchy to the north and the rogue rats of Shadow's Teeth to the east, the fertile southern plains depend almost entirely upon camel caravans to reach distant markets. Midas profits handsomely from this geography, carrying southern spices north to Galeon Heights, the Ursa Theocracy, and the Lunar Guardians, before returning with the fine silks, tools, and inventions of the Stoneheart Kingdom.

Commerce is more than wealth; it is leverage. A kingdom that controls the roads need not conquer every city along them. Caravan masters are taught from childhood that a profitable trade route can outlive the greatest conqueror, and that a promise faithfully honored is worth more than a fortress won through bloodshed. Contracts are treated with near-sacred reverence, for reputation is the only currency more valuable than gold.

To protect this immense network, the camels play a patient and dangerous political game. Rather than seeking decisive victories, they quietly encourage a balance of power that keeps every kingdom dependent upon their caravans. Gold finds its way into border disputes. Rivalries are allowed to simmer. Wars are prolonged just enough that no single power can dominate the southern trade routes. The goal is not endless conquest, but enduring dependence. So long as no kingdom controls every road, every kingdom must eventually bargain with Midas.

This quiet diplomacy extends even to their closest allies. United by Khamseen, the camels maintain long-standing ties with the Mooncrest Matriarchy, whose armies protect many of the caravan corridors crossing the western frontier. Yet Midas is careful never to bind itself too tightly to any single throne. The same merchants who provision Mooncrest armies may, weeks later, negotiate fair prices with Vanguard traders. In Midas' courts, today's enemy is often tomorrow's customer.

Geography remains their greatest ally. Towering mountain ranges shield their eastern frontier from the unrest of the Wetlands Pact, while the Watcher's Dominions secure the western deserts where Khamseen was first revealed. To the north lie the passes of Galeon Heights. To the south stretch the fertile plains whose harvests enrich the entire continent. Every kingdom believes it chooses its own path across the Garden. More often than not, that path was first laid by a camel.

Armies eventually return home. Kings rise and fall. Roads endure. And wherever the roads endure, so too does Midas.

**VOX POPULI · "Caravan talk"** (second tab on the faction page; the only vox tab still falling back to the faction art, no dedicated image yet)

- "The wolves asked if the road was safe. I told them safe roads cost extra." — caravan master
- "Mooncrest pays in gold, Vanguards pay in spice, and both complain as if complaining lowers the price." — camel broker
- "My father said never trust a king who promises forever. Trust the road. It only promises dust." — old trader
- "Peace is good for trade. War is also good for trade. The trick is knowing which invoice to prepare." — spice caravaner
- "Contracts are sacred here. Mostly because gods forgive faster than creditors." — ledger keeper
- "Every kingdom says it chooses its own path. Funny how often that path has our hoofprints on it." — route guide

### Celestial Empire  [2.4]

- KIND: Feline (Leopards & Snow Leopards)
- CREED: Zaoist Followers
- TRAIT: Phantom borders; masters of stealth and ambush

Hidden among dense forests, mist-shrouded mountains, and treacherous cliffs, the Celestial Empire is a kingdom more often sensed than seen. Travelers seldom realize they have crossed its borders until quiet villages emerge from the wilderness or unseen sentries reveal themselves from the trees above. To the leopards and snow leopards, concealment is not merely a military tactic; it is a philosophy. A border discovered too easily has already failed.

Though devoted followers of Zaoism, the leopards interpret its teachings differently from their Lion allies. Order is achieved not through grand courts or elaborate hierarchies, but through individual mastery. Every ranger, artisan, merchant, and hunter is entrusted with protecting their own corner of the realm. Authority is respected, yet rarely imposed unnecessarily. Quiet competence carries greater honor than public recognition.

This philosophy has produced some of the finest scouts, trackers, and skirmishers in the Garden. Rather than overwhelming their enemies through numbers, the Celestial Empire has perfected the art of making a handful of warriors accomplish the work of an army. Ambushes are meticulously prepared. Supply lines disappear without warning. Commanders vanish before battles are even fought. Many campaigns end before opposing generals ever glimpse the soldiers who defeated them.

Yet this mastery comes at a price. Leopards have never been numerous, and their scattered mountain settlements can support only modest populations. Every experienced ranger lost represents years of skill that cannot easily be replaced. While the Empire excels in swift campaigns and defensive warfare, prolonged occupations and wars of attrition favor larger kingdoms with deeper reserves of manpower.

Geopolitically, the Celestial Empire is the silent anchor of western stability. Their merchants dominate many of the trade routes linking the Golden Empire to the wider Garden, while their hidden passes shield the Lions' southern frontier. The leopards rarely seek influence within imperial politics, but they understand a simple truth: should the Golden Empire fall, they would almost certainly stand alone against the ambitions of Mooncrest.

To their east lie the Verdant Vanguards. Though separated by faith and custom, the leopards have quietly aided the southern kingdom throughout its long struggle against the hyenas. Leopard rangers cross the frontier to teach reconnaissance, camouflage, and the patient art of the ambush. The Vanguards, bound by ancient codes of honorable warfare, once dismissed such methods as beneath them. Years of costly defeats have made them increasingly willing to listen.

Wolf generals admire their effectiveness. Lion emperors value their loyalty. Stoneheart cartographers envy their knowledge of the mountains. Yet the leopards themselves rarely seek recognition. A successful ranger leaves behind no monuments, only an empty battlefield and an enemy left wondering where the attack truly came from.

The Celestial Empire has never sought to rule the Garden. It merely ensures that anyone who tries must first pass unseen eyes already watching from the trees.

**VOX POPULI · "Waystation murmurs"** (second tab on the faction page)

- "The guide said we crossed the border yesterday. I asked where the gate was. He pointed at three trees and smiled." — confused traveler
- "Leopard rangers never announce themselves. Saves time, I suppose. Also saves arrows." — waystation keeper
- "Bought mountain tea from a village I could not find again ten steps later." — caravan merchant
- "My cousin says he saw a snow leopard scout blink from a cliffside. I told him that means the scout wanted to be seen." — mule driver
- "You know a leopard village trusts you when the sentries stop pretending they were never there." — silk trader
- "A Vanguard officer asked if ambushes were dishonorable. The ranger asked if dying politely had helped so far." — ranger's apprentice

### Wetland's Pact  [2.5]

- KIND: Hybrids (Hippos, Crocodiles, Rhinos)
- CREED: Hieromachy Followers (River Resistance)
- TRAIT: Egalitarian foundation cracked by hippo discrimination

Settled in the sprawling swamps and lazy, mud-choked rivers of the central basin, the Wetland's Pact was not born, but forged in chains. Centuries ago, these lands were ruled by Suvartan ungulates and reptiles, until the armies of Khamseen swept through, demanding conversion by the sword. It was in the suffocating mud and the reeds, beneath the whips of desert overseers, that the radical faith of Hieromachy took root.

Listening to the Khamseen priests declare that the Sky demanded their submission, the wetland clades reached a heretical conclusion: if the Sky belonged to the strong, then the strong could tear down the altars. What began as desperate guerrilla warfare, with hippos drowning patrols and crocodiles ambushing supply rafts, soon grew into a roaring rebellion. They bled the occupying armies for decades until the last Khamseen warlord was dragged into the swamp, ensuring the Unchained Sky would never bow to a priest-king again.

Today, the Pact presents itself to the world as an egalitarian union forged through shared sacrifice. Yet the swamp holds a quieter contradiction. During the long rebellion, it was the immense hippos who shattered fortress gates, absorbed the enemy's arrows, and led the final charges against the Khamseen occupiers. Victory naturally elevated them to positions of authority. Over generations, that wartime leadership gradually hardened into political dominance. Beneath them, many crocodilians now find themselves excluded from the highest councils, dismissed by influential hippo clans as better suited to rivers than to rule.

The irony has not gone unnoticed. Many crocodilians increasingly wonder whether the revolution fulfilled the promise of the Unchained Sky, or merely replaced one ruling class with another. The crocodiles remember the whips of the Khamseen, and they are beginning to wonder if their new masters are simply wearing different masks. Geopolitically, the Pact acts as the heavy shield for the Verdant Vanguards to the south, repeatedly dispatching thick-skinned battalions to hold the line against Mooncrest. To the west and north, they maintain a tense neutrality with the camel caravans of Midas' Realm, who view the wetlands as a logistical nightmare best avoided. Yet, as the wars in the south drag on, the internal fractures widen. The revolution was won in blood, but the peace may yet drown in it.

The rhinoceroses occupy an uneasy middle ground within the Pact. Too massive and respected to be dismissed, yet too few and too dispersed to dominate the councils, they serve as the Pact's stubborn conscience: siege-breakers in war, riverbank wardens in peace, and frequent mediators when hippo chieftains and crocodilian elders threaten to tear the union apart. Many rhino clans still believe the revolution's promise can be saved, but their patience has begun to harden. They did not help break the chains of priest-kings merely to watch the wetlands learn new forms of obedience.

Even so, the revolution remains sacred. Every child of the Pact is raised believing no tyrant should ever rule the rivers again. Few pause to ask why so many of those lessons are now spoken by hippo chieftains.

**VOX POPULI · "River talk"** (second tab on the faction page)

- "My grandmother says the river swallowed the last priest-king whole. Around here, children learn to swim before they learn to bow." — reed-cutter
- "The chieftains say every voice matters. Funny how the deepest voices always seem to come from hippo throats." — crocodile boatman
- "A camel merchant asked where our roads were. I told him roads are what people build when they cannot trust water." — ferry guide
- "We sent another battalion south to help the Vanguards. My brother says freedom has very expensive neighbors." — dock worker
- "The old Khamseen whips are gone, praise the Sky. Still, some days the council speaks with a very familiar snap." — marsh widow
- "Never argue with a rhino in a council hall. By the time he changes direction, the vote is already over." — clerk of the lower assembly

### Galeon Heights  [2.6]

- KIND: Avian & Ungulates (Birds of Prey & Mountain Goats)
- CREED: Khamseen Followers (Defensive Isolationists)
- TRAIT: Unmatched vantage; masters of the avalanche volley

Perched atop the jagged, impenetrable peaks of the central mountain ranges, Galeon Heights is a kingdom defined by its altitude. A unique symbiosis of mountain goats and birds of prey, the Galeons have carved a prosperous, isolated existence out of the frozen stone. They are the silent watchers of the high passes, content to let the lowlands bleed so long as the snow remains untouched.

Their peace is routinely interrupted by the obnoxious Ursa Theocracy to the north. Fueled by the aggressive zealotry of Khamseen, the bears frequently attempt to march down the mountain passes to conquer the peaks. It is a foolish, repetitive endeavor. The raptors of Galeon, soaring on the high thermals, can spot an Ursa warband forming from miles away, relaying their exact numbers and marching speed back to the mountain strongholds.

By the time the bears reach the lower slopes, the Galeons are already in position. They are undisputed masters of long-range warfare. From their lofty vantage points, they unleash a relentless rain of arrows, javelins, and sheer-dropping boulders. Ursa armies are usually decimated before they even catch sight of a Galeon defender. However, this absolute reliance on altitude and ranged superiority has left them uniquely weak in hand-to-hand combat; a Galeon caught on flat ground is a dead Galeon. Because they can never make a meaningful ground charge into the lowlands, their impregnable peaks are both a fortified heaven and a gilded prison: keeping the armies of the world at bay, while forever trapping the Galeons within their own borders.

Because the Ursa share borders only with Galeon Heights and the Lunar Guardians to the west, their fanatical nuisance has forged a quiet alliance. The wolves and the mountain peoples share a mutual disdain for the bumbling bear theocrats, coordinating defenses to ensure the Ursa never gain a foothold in either territory. To the south, beyond the impassable peaks, lie the Watcher's Dominions and Midas' Realm, entirely insulated from the mountain conflicts. _Life in Galeon is quiet and predictable, defined only by the endless cycle of spotting, shooting, and burying zealots under rockslides._

**VOX POPULI · "High harbor banter"** (second tab on the faction page; renamed from "Dockside banter")

- "First rule of the high harbor: unload fast. The goats charge by the hour, and the gulls charge by theft." — dock porter
- "A bear warband was spotted at dawn. By breakfast, the raptors had counted them. By lunch, the mountain had answered." — harbor watchman
- "Lowland sailors complain about storms. Cute. Try docking while a goat is shouting directions from a cliff above you." — ship captain
- "Every merchant asks why we build so high. Then the first boulder falls on the road behind them and suddenly they understand tradition." — customs clerk
- "The wolves send timber, the camels send spice, and the bears send target practice. Busy season, all things considered." — quay-side fletcher
- "A raptor lookout can see trouble three valleys away. Unfortunately, he can also see when you are late for your shift." — goat porter

### Ursa Theocracy  [2.7]

- KIND: Ursidae (All Bears)
- CREED: Khamseen Followers
- TRAIT: Absolute priest-king rule; perpetual struggles for supremacy

Deep within the frozen northern wilderness, the Ursa Theocracy stands as one of the most uncompromising realms of Khamseen. Towering bears live beneath the authority of priest-kings who preach that strength is the purest expression of truth. Every village, monastery, and fortress exists to prepare the faithful for the next campaign, the next winter, or the next trial sent by the Sky. Life is harsh, deliberate, and disciplined, for neither the land nor the faith offers mercy to the unprepared.

Unlike the fertile kingdoms to the south, the Ursas have little opportunity for commerce or prosperity. Endless winters, sparse forests, and rugged terrain have forged a culture that values endurance above comfort and conviction above luxury. Art survives almost exclusively through monumental carvings, battle hymns, and sacred epics celebrating martyrs, victorious priest-kings, and the trials that shaped the faithful. To an Ursa, a beautiful thing is one that has survived.

Yet the greatest threat to the Theocracy rarely comes from beyond its borders. Khamseen teaches that strength reveals truth, and every generation produces ambitious priests convinced that they alone possess the strength to guide the faithful. Successions are seldom peaceful. Rival temples compete for influence, ambitious war-priests challenge established rulers, and internal purges have claimed nearly as many lives as foreign wars. The unity they preach is forever tested by the very creed that created it.

Geography has trapped the kingdom in an unforgiving corner of the world. To the north stretch the uninhabitable polar wastes. To the east lies the endless ocean. A narrow western frontier meets the disciplined armies of the Lunar Guardians, whose formations repeatedly blunt the bears' relentless assaults. To the south rise the towering peaks of Galeon Heights, where raptors and mountain goats turn every mountain pass into a killing ground. The Ursas have never lacked courage. They have simply never found a road that rewards it.

Even so, defeat is never accepted as proof that the faith is flawed. It is merely evidence that the faithful have not yet proven themselves worthy. Every failed campaign becomes another sermon. Every fallen warrior another martyr. Every generation is taught that the next crusade will succeed where the last one failed.

Seeking a path beyond the mountains and the wolves, the priest-kings occasionally dispatch longships across the eastern ocean toward the mist-shrouded Forbidden Islands spoken of in ancient sailors' tales. Most expeditions vanish without explanation. The few that return are greeted not with celebration, but unease. Survivors speak little. Their fur has faded to ash-grey, their once-thunderous conviction replaced by an unsettling calm that even the highest priests struggle to explain.

Most kingdoms dismiss these stories as little more than frostbite, exhaustion, or sailors' superstition. Within the Theocracy, however, whispers spread quietly through the temples. The bears have always believed that the Sky tests the worthy. Some now wonder whether, beyond the last horizon, something else has begun testing them instead.

**VOX POPULI · "Monastery murmurs"** (second tab on the faction page)

- "The abbot says comfort weakens the soul. Easy for him to say. His cell has the good fireplace." — young acolyte
- "Another priest-king has declared the last priest-king insufficiently strong. I have stopped repainting the banners until spring." — monastery scribe
- "The Sky tests the worthy, the snow tests everyone, and the cook tests whatever survived in the cellar." — kitchen brother
- "We marched on Galeon again. The goats threw rocks, the birds counted us, and the mountain preached louder than our priests." — wounded crusader
- "My son wants to join the next holy campaign. I told him holiness is easier to find after the roof is mended." — village carpenter
- "The longship returned from the eastern mist with grey-furred brothers who no longer shout during prayer. No one knows what to do with quiet bears." — harbor monk

### Shadow's Teeth  [2.8]

- KIND: Rodents (Rats, Gophers, Squirrels, Porcupines)
- CREED: Permutism Followers
- TRAIT: Master sappers; frantically fortified isolationists

Whispered among rats on the long quarry roads as a free kingdom past the edge of the maps, Shadow's Teeth is a narrow, heavily fortified peninsula at the bottom center of the western continent. Surrounded by churning ocean and connected to the mainland by a single, easily defensible strip of land, it serves as the ultimate beacon for the unchained. Here, the rodents (rats, gophers, squirrels, and porcupines) use the fluid principles of Permutism to survive away from the horns and matriarchs of the mainland.

The Verdant Vanguards, however, do not recognize Shadow's Teeth as a sovereign state. To the sacred cattle and noble elk, the peninsula is a rogue province, and its inhabitants are escaped chattel who abandoned their divinely ordained duties. Centuries ago, the rodents proved them wrong in a long, bloody guerrilla war, using the very tunnels they dug in the Vanguard quarries to strike, vanish, and bleed the occupying armies dry. They won their freedom, but the Suvartan empire never forgave the slight to its hierarchy.

Today, an uneasy peace reigns, but only because the Vanguards are entirely occupied with the endless holy wars against the Mooncrest Matriarchy to the west. The rodents know this peace is borrowed time. If the Vanguards win the west, they will turn their armies south to reclaim the peninsula. If the Mooncrest win, the hyenas will simply continue the march, swallowing the lesser power whole. Whosoever emerges victorious, the continent is ready to devour Shadow's Teeth.

Driven by this existential dread, the rodents are in an urgent, frantic frenzy of construction. They are the world's most excellent diggers, and they are turning their peninsula into a labyrinthine fortress of subterranean kill-zones, spike pits, and collapsible tunnels. Beyond their borders, their skills are highly valued; other civilizations frequently employ Shadow's Teeth expats as expert sappers and siege miners to undermine enemy walls. But the gold they earn abroad is sent straight home, funding the endless digging. _They are building a fortress so deep and so deadly that even the Turning Year will hesitate to claim them._

**VOX POPULI · "Miners talking"** (second tab on the faction page)

- "The foreman says this tunnel is temporary. Around here, temporary means until our grandchildren reinforce it." — gopher miner
- "If the Vanguards come south, they'll find the front gate. Then the false gate. Then the polite warning. Then the floor gives up." — rat sapper
- "My cousin left to undermine castles for foreign kings. Sends the gold home every Rain. Says our holes are still better built." — porcupine mason
- "The surface folk ask why we dig so deep. I ask why they keep trusting the surface." — old tunnel guard
- "Every new chamber gets three exits, two murder-holes, and one argument about ventilation." — squirrel engineer
- "They call us escaped chattel in the north. Strange. I have never seen a chain follow anyone through a collapsed tunnel." — quarry-born rat

### Redsett Clans  [2.9]

- KIND: Mustelidae & Mongoose (Weasels, Badgers, Otters, Mongooses)
- CREED: Exodist Followers
- TRAIT: Hyper-aggressive raiders; masters of the hit-and-run

South of the great Stoneheart Bridge roam the Redsett Clans, an absolute menace of a civilization composed of mustelids and mongooses. Where the Stoneheart Kingdom interprets Exodism as a sacred journey in search of knowledge, the Redsett embrace a far older instinct. To them, the journey itself is the destination. Settling in one place for too long is a slow spiritual death. The road, the river, and the next horizon are where life is truly lived.

Their settlements are temporary. Their loyalties belong first to clan, then to kin, and only distantly to any permanent chief. Young warriors earn respect not through inheritance, but by returning from successful expeditions with stories, trophies, and plunder. A Redsett who spends a lifetime guarding the same field is regarded with something approaching pity.

They are the terror of the western continent. While they frequently skirmish with the Stoneheart Kingdom, they rarely press the attack. The apes pay a heavy annual tribute, and the Redsett are pragmatic enough to honor the arrangement. Gold accepted means peace kept. A chief who breaks his word rarely remains chief for long, for a reputation that cannot be trusted is worth less than an empty longship. Take the tribute, then find another road.

Their raids instead sweep south and west, where caravan routes and prosperous coastlines promise richer rewards. Camel caravans of Midas' Realm are frequent targets, while the fertile settlements of the Verdant Vanguards and the river communities of the Wetlands Pact endure constant coastal raids. The Redsett have little interest in conquest. Occupying cities requires walls, taxes, governors, and endless responsibilities. A burning warehouse and a departing longship are considered far more satisfying.

No eastern shoreline on the western continent is ever truly safe. Redsett longships emerge from the morning mist, strike with astonishing speed, and vanish into rivers and hidden inlets before organized resistance can form. In recent years, their audacity has grown even greater, with confirmed raids reaching the frozen ports of the Ursa Theocracy itself. Few kingdoms genuinely fear conquest by the Redsett. Almost every kingdom fears waking to find them already ashore.

Yet beneath the chaos lies an unexpected pragmatism. The Giants' Realm, whose philosophers and engineers have little interest in prolonged warfare, maintains a lucrative arrangement with the clans. Generous payments keep Redsett warbands occupied fighting the horrors of the Wind's Hunger along the eastern frontier instead of raiding Giant territory. To the Giants, the bargain purchases peace. To the Redsett, it simply funds another journey.

Kings curse them. Merchants insure against them. Cartographers struggle to predict them. The Redsett care little for any of it. Somewhere beyond the next hill lies another road, another river, and another story worth stealing.

**VOX POPULI · "Campfire stories"** (second tab on the faction page)

- "Stoneheart pays us not to raid them. Very scholarly arrangement. They keep their bridges, we keep our boats." — badger oarsman
- "My mother says a proper Redsett should see three rivers before breakfast and steal from none of them twice." — young weasel
- "Conquer a town and suddenly everyone wants laws, wells, roofs, taxes. Burn one warehouse and you're home by supper." — mongoose raider
- "A camel merchant called us unpredictable. Nonsense. We always arrive where the guards are not." — otter scout
- "The apes call it tribute. We call it a travel fund with excellent manners." — clan treasurer
- "My brother joined the eastern front for Giant gold. Says the Swarm screams louder than sailors, but pays worse." — campfire cook

---

## COHORT III · THE FRONTIERS · The Eastern Frontiers

_The kingdoms standing between the Garden and the endless eastern horrors._

The entire eastern landmass is kept constantly on its toes by relentless swarms of aggressive insect hybrids (the Creeping Curse, Hornet's Hive, Desert's Scourge & Wind's Hunger), a scourge the priests call a punishment from the gods, though no two temples agree for what sin. Because they are being constantly invaded, these clades are excellent mercenaries and rarely fight among themselves.

### Khanstan  [3.1]

- KIND: Feline (Bengal and Siberian Tigers)
- CREED: Khamseen Followers
- TRAIT: Solitary warlords; reluctant masters of coordination

Across the mist-veiled jungles of the east, the Tiger Kingdom of Khanstan remains fractured into rival lords, each ruling a solitary domain of immense personal power. To the east lies the unending ocean, while their western borders are battered by the twin hordes of the Scourge: the Hornet's Hive and the Creeping Curse, eight-legged horrors of the Spider's Curse. Their solitary nature aligns perfectly with the Khamseen doctrine of individual strength, but the Swarm has forced even the proudest tiger lords to learn coordination. They do not love councils, shared command, or long campaigns fought under another ruler's banner. They practice them anyway, because the eastern front has taught Khanstan one brutal lesson: a lone hunter may win glory, but only coordinated claws survive the hive.

Resource scarcity is their constant companion, as every scrap of metal and timber is consumed by the eastern front. Consequently, the tigers have evolved into brilliant, scrappy engineers. Deprived of the pristine universities of the west, they are masters of the practical hack: makeshift fixes, jury-rigged artillery, and improvised traps built from broken swarm chitin and scavenged metal. They win not through elegance, but through stubborn, bloody-minded ingenuity.

To the south lies Nahaul's Domain, the jaguar kingdom. Despite the solitary nature of both species, Khanstan and Nahaul share a deep, cooperative bond, viewing themselves as big brothers to the jaguars. They share a culture, intertwining their histories and surviving the Swarm together. This fraternal bond is a rare bright spot in a miserable, endless war.

This shared culture manifests most vibrantly in their local customs. Khamseen dogma strictly prohibits local festivals, but the Tigers and Jaguars care little for the scrolls of desert priests. Their most revered tradition is "The Grand Tournament of the Unclaimed Valleys" (celebrated by the Jaguars under a different name). Far from a frivolous celebration, the tournament is a highly functional, joint military exercise. It does not stop during swarm season; it is how they prepare for it.

Tiger lords invite the finest tacticians, Boarheart wall-defenders, and Giant engineers to watch or participate. The event serves as a testing ground for new artillery, a forge for grueling combat training, and a peaceful mechanism for solitary lords to claim territorial rights without spilling the friendly blood so desperately needed on the front line. _Let the priests bark about dogma; the tigers are too busy building a better ballista to care._

**VOX POPULI · "Tournament banter"** (second tab on the faction page)

- "The westerners call it a tournament. Cute. Last year my cousin lost two teeth, won a spear, and learned how to break hornet armor." — tiger wrestler
- "Lord Varun arrived with a cannon made from three broken ballistae and a spider shell. It exploded beautifully. We gave him second place." — arena judge
- "The priests say strength reveals truth. Around here, truth usually has mud on its face and a swarm stinger in its boot." — jungle quartermaster
- "A jaguar champion beat our best duelist before breakfast. Naturally we invited him to dinner and argued about footwork until dawn." — tournament medic
- "Every lord claims he fights alone. Funny how many arrive with engineers, cousins, debtors, and three carts of spare weapons." — weapon vendor
- "The Swarm does not pause for festivals. That is why the archery round uses real hornets." — old range master

### Nahaul's Domain  [3.2]

- KIND: Feline (Jaguars)
- CREED: Khamseen Followers
- TRAIT: Canopy ambushers; architects of the toxic arms trade

Deep within the steaming emerald rainforests, the Jaguar Kingdom of Nahaul’s Domain lies splintered into competing solitary clans. While Khanstan anchors the north against the Hornet's Hive, Nahaul’s western borders are perpetually choked by the Creeping Curse, a terrifying onslaught of arachnid horrors. The jaguars do not meet this threat on flat ground; they rule the canopy. Utilizing explosive ambush tactics and extreme vertical mobility, they turn the dense jungle into a vertical slaughterhouse for the invading hordes.

Living on the edge of oblivion has stripped away any patience for western-style theological purity or political posturing. To the jaguars, Khamseen is not a mandate for religious conquest, but a practical philosophy of survival through absolute physical mastery.

Because spiders possess an innate immunity to their own toxins, Nahaul’s engineering genius has evolved to exploit a brilliant, cross-border biochemical economy. The jaguars import dead hornets from Khanstan’s northern front, using the harvested aerial neurotoxins to coat their canopy traps and blades, bypassing the spiders' natural defenses entirely. In return, Nahaul extracts the highly concentrated venom from the defeated arachnids and exports it back to Khanstan, giving the tigers a devastating payload to use against the Hornet’s Hive.

This toxic arms-dealing extends across the entire frontier. Recognizing that the Scourge cannot be fought with steel alone, Nahaul refines specialized chemical payloads for every frontline state. They ship lethal neurotoxins to the Boarheart Kingdom to break spider and scorpion chitin, supply the Steppe Guardians with targeted delivery vectors to combat locust swarms, and route aerosolized compounds to the Giants Realm to down flying horrors. _Nahaul’s genius lies not in stronger weapons, but in stranger precision: every venom, vapor, and payload brewed for the exact horror waiting beyond the next tree line._

This shared, scrappy ingenuity forms the bedrock of their profound fraternal bond with Khanstan. The jaguars proudly view the tigers as their massive, blunt-force big brothers. This cultural brotherhood shines brightest in their version of the great seasonal games: while the tigers host the Grand Tournament in their open valleys, the jaguars celebrate "The Rite of the Ghost Walk" under the canopy. It is a ruthless, highly disciplined exercise in stealth, tracking, and close-quarters combat. Jaguar clan leaders invite Khanstan tacticians, Boarheart line-commanders, and Giant engineers into the deepest jungle tracts. The Rite acts as a live-fire testing ground for newly formulated venom cocktails, an arena to perfect multi-clade ambush coordination, and a bloodless way for solitary clans to settle hunting boundaries. The desert priests can preach submission all they want; the jaguars are far too busy balancing the region's chemical ledger to listen.

**VOX POPULI · "Bazaar bargaining"** (second tab on the faction page)

- "Careful with that vial. It kills spiders, hornets, scorpions, and careless apprentices in that order." — venom seller
- "A tiger buyer asked if the batch was stable. I told him stable things do not win jungle wars." — jaguar alchemist
- "The Boarheart commander wanted something subtle. I sold him three barrels marked DO NOT BREATHE NEAR WALLS." — chemical broker
- "Every clan claims the best canopy traps. Funny how they all come here when the spiders stop dying properly." — market porter
- "The priests say trade in poison stains the soul. My soul has excellent margins this season." — bazaar accountant
- "Khanstan sends dead hornets. We send spider venom back. Brotherhood is mostly paperwork and very dangerous bottles." — shipping clerk

### Boarheart Kingdom  [3.3]

- KIND: Ungulates (Giant Forest Hogs, Wild Boars, Warthogs)
- CREED: Split Syncretic (55% Khamseen / 45% Permutism)
- TRAIT: Gritty, absolute infantry; heavy defensive stonemasons

Operating without the restrictive, weaponized caste barriers of their Western cousins, the Boarheart Kingdom is the absolute infantry anvil of the Eastern Frontier. Their northern borders are a grinding warfront, facing the dual nightmares of the Creeping Curse's spiders and the chitinous waves of the Desert’s Scourge scorpions. To hold this line, the Boars have built an unbreakable culture of the shield wall. They are the only kingdom in the Garden where Khamseen iron-worship and Permutist fluid adaptation exist in a near-equal split without triggering a civil war; they simply realized centuries ago that religious purity tests do not stop a scorpion's stinger.

Denied the safety of the open plains, the Boarheart have become master earth-movers and structural stonemasons. Their massive, multi-tiered subterranean citadels serve as fortresses, foundries, granaries, and sanctuaries carved directly into the bones of the continent. From these depths they control a lucrative trade in geothermal smelting, deep-ore extraction, and heavy masonry. Every wall they raise, tunnel they cut, and foundation they brace is another refusal to let the frontier collapse beneath its own terror.

This deep-seated survival drive has left them with a legendary appetite for argument. Because taking the life of another hybrid is the ultimate unspoken sacrilege on the frontier, the Boars channel their aggressive prey-instincts into relentless verbal combat. In the presence of their Khanstan and Nahaul allies, the Boars' biological wiring fires on all cylinders. They become deliberately stubborn, starting explosive, screaming matches over supply lines, tactical footprints, and chemical payload distribution.

The Tigers and Jaguars, understanding that this tusk-grinding fury is merely a release valve for centuries of frontline trauma, simply let the arguments roll off their backs to preserve energy. Let the Western courts play their soft, silent politics; _a Boar will tell you exactly how he intends to die for you, right after he finishes screaming in your face._

**VOX POPULI · "Mess-hall arguments"** (second tab on the faction page)

- "Khamseen says strength reveals truth. Permutism says truth changes. I say both of you are blocking the stew." — mess-hall cook
- "A jaguar sent poison strong enough to melt scorpion chitin. Wonderful. Now label the barrel before someone seasons lunch with it." — quartermaster
- "The tigers brought a new cannon. The jaguars brought venom. We brought a wall, because someone here has to survive the demonstration." — shield captain
- "My brother says the western boars still argue about caste. Must be nice having time for decorative problems." — stone mason
- "Every council meeting ends with shouting. Every shield wall holds. I have stopped questioning the method." — citadel clerk
- "A scorpion broke three gates last winter. We built four new ones and argued for six days about hinge placement." — gate engineer

### Steppe Guardians  [3.4]

- KIND: Ungulates (Horses, Zebras, Donkeys)
- CREED: Permutism Followers (The Fluid Arteries)
- TRAIT: Logistical masters; expert mobile archers and caravan tacticians

Flanked by the heavy subterranean citadels of the Boarheart Kingdom to their east and the philosophical workshops of the Giants Realm to their west, the Steppe Guardians serve as the literal circulatory system of the Eastern continent. They are a free, quick-minded society of horses, zebras, and donkeys who have completely abandoned the rigid, weaponized caste hierarchies of their Western cousins. To the Guardians, survival is a grand equation of kinetic movement.

They manage the brutal, high-stakes trade routes of the East, moving raw sulfur and heavy granite from the Boar quarries to the Giant forges, then returning with advanced long-range ballistics and Nahaul’s specialized chemical payloads. The roads they maintain are not ordinary commerce. They are the arteries of the frontier, carrying whatever each kingdom needs to survive the next swarm, siege, or famine. Over generations, that necessity has made them the premier logisticians and infrastructure architects of the Eastern continent, commanding a mercantile network no Western empire could easily replicate.

This obsession with fluid efficiency shapes their unique style of warfare against the scorpion hordes of the Desert's Scourge and the airborne walls of the Wind's Hunger locusts. The Guardians do not engage in static, honor-bound open-field standoffs. They rely on swift harassment campaigns, deploying mounted archers who loose specialized, hollow-tipped arrows. These arrows shatter in mid-air to release cloud-screens of Nahaul’s imported contact poisons, choking out flying swarms before they can touch the ground.

Constant vigilance has made them a deeply observant, quiet society; they speak in low, rhythmic cadences and possess the uncanny ability to map an entire region's topography simply by the sound of wind over the grass. Let the Western courts hoard static gold and titles; _the Steppe Guardians own the horizon, and the road never ends._

**VOX POPULI · "Trail whispers"** (second tab on the faction page)

- "The map says this route takes six days. The wind says five. The old mare says seven. I trust the mare." — donkey pathfinder
- "A Boarheart captain asked if the arrows would arrive before the scorpions. I told him they had better, because we were carrying both." — wagon outrider
- "The Giants build weapons too large to move. We move them anyway. That is why everyone suddenly respects roads." — zebra quartermaster
- "A tiger engineer called our wagons old-fashioned. His cannon lost a wheel before sunset. Our old-fashioned wagon carried it home." — horse teamster
- "Never race a Steppe courier. If you win, he was carrying granite. If you lose, he will tell everyone by breakfast." — caravan cook
- "The Swarm comes like weather, the grass hides the roads, and every kingdom wants delivery yesterday. Good season, then." — bow rider

### Giants Realm  [3.5]

- KIND: Hybrid (Elephants and Giraffes)
- CREED: Permutism Followers (The Intellectual Anchor)
- TRAIT: Philosophers and innovators; masters of ballistic engineering

Towering above the emerald rainforests, the Giants Realm functions as the premier intellectual foundry and munitions forge of the Eastern Frontier. Bound to the fluid, evolutionary principles of Permutism, this society of elephants and giraffes approaches the existential horror of the Scourge and the Wind's Hunger not with raw fury, but with cold, mathematical precision.

Because their massive frames lack the agility to engage in rapid, close-quarters combat against skittering horrors or other hybrids, the Giants have weaponized distance. They are the master inventors behind the frontier's most terrifying ordnance, designing the mid-air bursting arrows utilized by the Steppe Guardians, and the "Sky-Sweeper" ballistae: massive engines that unleash blinding barrages of hundreds of arrows to shred flying locust walls and hornet hives. Their workshops systematically dissect defeated Scourge specimens, crafting tailor-made, armor-piercing kinetic bolts designed to shatter the exact structural weak points of spider and scorpion chitin.

To compensate for their vulnerability on flat ground, the Giants maintain a vital symbiotic alliance with the Redsett Clans, a reckless and fearless vanguard military of badgers, weasels, and mongooses. While the Giants coordinate battlefield strategy from high, fortified towers, the Redsett infantry handles the brutal trench warfare below, using their blinding speed and ferocious instincts to clear out any arachnids that slip past the artillery line. The Giants pay them lavishly in high-grade alloy armor and bespoke weapons, ensuring absolute loyalty on the blood-soaked ground they themselves cannot hold.

Despite their brilliance, a profound existential anxiety shadows the Giants' high councils. They are acutely aware that their survival as a free, independent kingdom hinges entirely on the presence of a common enemy. If the Scourge disappeared tomorrow morning, their lack of mobility would leave them at the mercy of their heavily armed neighbors. To safeguard their future, the Giants play a long-term diplomatic game: they ensure that every scrap of advanced engineering, structural blueprint, and long-range defense across Khanstan, the Steppes, and the Boarheart citadels is entirely dependent on Giant components and maintenance. _They may not be able to outrun a predator, but they have woven their survival so deeply into the fabric of the continent that the East cannot afford to let them fall._

**VOX POPULI · "Workshop chatter"** (second tab on the faction page)

- "The apprentice asked why the bolt was taller than him. I told him the scorpion is taller than the wall." — elephant machinist
- "A tiger brought us a broken hornet wing and asked if we could make it useful. We made three arrows, two lenses, and one argument." — forge scholar
- "The Steppe riders complain our engines are too heavy. Strange. They still arrive every season asking for heavier ones." — giraffe draftsman
- "Do not touch the Sky-Sweeper lever unless you are aiming at something, testing something, or prepared to explain the missing roof." — workshop foreman
- "Permutism teaches adaptation. In the workshop, that mostly means rebuilding whatever exploded before the professor returns." — student engineer
- "The Redsett mercenaries asked if the new bolts could kill spiders. I said yes. They asked if they could also open gates. I said unfortunately, also yes." — munitions clerk

---

## COHORT IV · THE SCOURGE · The Scourge

_The swarms that neither negotiate nor remember peace._

While the core of the northwest remains dead silent, the overflow of this biological engine spills southward and eastward through four distinct, non-negotiable sub-swarms.

### The Physiological Prison  [4.1]

_A sophisticated intellect locked within an organic war-machine._

- KIND: Insectoid (All Clades)
- CREED: None; incapable of doctrine
- TRAIT: Advanced minds trapped in bodies that cannot build, write, or speak

To the scholars and frontier veterans of the East, the insectoids remain an absolute biological paradox. They coordinate vast campaigns, adapt to unfamiliar defenses, remember battlefields, and solve new obstacles with unnerving speed, behaviors impossible to dismiss as mere instinct. Their internal anatomy, though radically different from that of hybrids, possesses an unmistakable complexity that has led generations of physicians to speculate that an intelligence equal to their own lies imprisoned within. Yet no scholar has ever proven it.

If that intelligence truly exists, it is trapped inside a cruel physical dead end. Their bodies possess multiple limbs and lethal appendages, yet completely lack fingers, thumbs, or any mechanism capable of grasping, shaping, or manipulating tools with precision. They cannot write, construct technology, or produce speech that hybrids can understand, leaving them forever isolated from the civilizations surrounding them.

Whether they truly cannot comprehend diplomacy, or simply possess no means of expressing it, remains one of the Frontier's oldest unanswered questions. They cannot negotiate treaties, explain intentions, or preserve knowledge beyond what their own bodies can carry. To the outside world, they appear as organic war-machines capable of interacting with civilization only through reproduction and slaughter.

Frontier veterans tell unsettling stories of locking eyes with dying insectoids. Some swear that, for a fleeting moment, they glimpse not blind aggression but something painfully aware, as though a desperate intelligence is searching for a language its body can never speak. Others dismiss such tales as nothing more than exhaustion, grief, and the guilty imagination of soldiers who have spent too many years staring into alien eyes.

### Hornet's Hive  [4.2]

_The aerial nightmare flanking the northeast._

- KIND: Insectoid (Hornet Hybrids)
- CREED: None Observed
- TRAIT: Vertical war of attrition; predatory drone strikes

The aerial nightmare flanking the northeast. They wage a relentless, vertical war of attrition against the canopy-dwellers of Nahaul’s Domain and the private valleys of Khanstan, raining down predatory drone strikes that test the limits of the felines' defensive capabilities.

### Creeping Curse  [4.3]

_The arachnid onslaught choking the rainforest frontiers._

- KIND: Insectoid (Arachnid Hybrids)
- CREED: None Observed
- TRAIT: Webs, ambushes, and innate toxic immunities

The arachnid onslaught choking the dense rainforest frontiers. Composed of massive, multi-limbed horrors, they press directly against Nahaul’s Domain and the northern borders of the Boarheart Kingdom, relying on webs, ambushes, and innate toxic immunities to overwhelm defenders.

### Desert's Scourge  [4.4]

_Armored waves erupting from the barren interior._

- KIND: Insectoid (Scorpion Hybrids)
- CREED: None Observed
- TRAIT: Heavily armored chitin; broken only by masonry and chemistry

The heavily armored scorpion waves erupting from the dry, barren interior. They clash directly with the heavy shield walls of the Boarheart Kingdom and the mobile supply paths of the Steppe Guardians, forcing the frontlines to rely heavily on heavy masonry and imported chemical payloads to melt their thick chitin.

### Wind's Hunger  [4.5]

_The sky-blotting swarms driving down the western corridor._

- KIND: Insectoid (Locust Hybrids)
- CREED: None Observed
- TRAIT: Colossal airborne walls; devourers of trade and green land

The colossal, sky-blotting locust swarms driving down the western corridor. They threaten to choke out the trade routes of the Steppe Guardians and devour the lush environments of the Giants Realm. They are met only by advanced, mass-barrage artillery and aerosolized contact poisons engineered to clog their breathing pores.

---

## COHORT V · THE RUMORS · Beyond the Maps

_Forgotten islands, silent engines, impossible beasts, and stories no kingdom agrees upon._

### The Silent Swarm  [5.1]

_The land is completely quiet, and it systematically consumes anyone who touches it._

Far beyond the northwestern sea lies an isolated, sub-polar landmass that appears, from every known chart, to be completely barren. No smoke has ever been seen rising above its frozen shores. No villages, no ruins, no movement. Even the seabirds refuse to nest along its cliffs. Yet every maritime kingdom preserves the same warning.

Do not land.

For generations, captains dismissed the stories as superstition and sent survey parties ashore to chart the empty coastlines. None returned. No distress signals were raised. No bodies were recovered. Ships waiting at anchor reported only an impossible silence... followed, on certain nights, by the faint sound of countless synchronized footsteps somewhere beyond the fog. Others heard nothing at all. The accounts disagree on nearly everything except one fact.

No landing party has ever come back.

No kingdom claims the island. No priesthood agrees on what dwells there. Most maps simply leave the interior blank, naming the place only as _The Silent Swarm_: not because anyone has seen a swarm, but because something unseen moves across that frozen land with the order of one.

Some sailors insist the footsteps are only ice settling beneath the cold. The old captains never argue. They simply turn the ship around.

Do not land.

### The Same Sun  [5.2]

_The world is round. The day is not._

Stoneheart scholars have known for centuries that the Garden is round.

Ships vanish beneath the horizon from the hull upward. Different stars appear above the northern and southern seas. The length of a shadow changes as a traveler moves across the world. No serious cartographer still argues otherwise.

The Sun remains more difficult.

Place a clay sphere before a lamp and only one half can receive its light. Turn the sphere and the bright half changes, but darkness always survives somewhere.

The Garden does not behave this way.

During the Long Light, every surviving almanac records the Sun above the world. Reports from distant kingdoms disagree about its height and direction, but none describes a true night. Sundials continue to cast shadows. Crops turn toward the disc. Burning lenses gather its light. Travelers crossing from one end of the maps to the other find the same season waiting for them.

During the Fungal Night, the contradiction reverses. No expedition has ever returned from a distant shore claiming to have found the Sun still shining there. Every kingdom enters darkness beneath the same calendar.

Priests call this proof that the Sky holds the whole Garden beneath one law.

Natural philosophers have offered less satisfying answers. Some argue that sunlight bends around the upper atmosphere. Others claim that distant almanacs cannot be trusted, or that the maps exaggerate the size of the world. A few suggest that the Sun is far smaller and nearer than it appears.

Each explanation solves one observation by breaking another.

The oldest surviving experiment is kept in a sealed chamber beneath the Stoneheart sky-archive. It consists of a clay globe, a lamp, and a ring of wooden pegs driven into opposite sides of the sphere.

Beside it lies a page written by an unnamed astronomer.

A round world cannot cast these shadows from one sun.

Beneath it, in another hand, someone added:

Then the error is not in the shadows.

---

## OPEN INCONSISTENCIES & FIX-LIST

_Working notes from review, 05 Jul 2026; statuses refreshed 07 Jul 2026 after the kingdoms/minor-factions polish pass and the em-dash sweep, 08 Jul 2026 after the AI upgrade, the Lunar/Stoneheart upgrade, and the vox populi feature, and 10 Jul 2026 after the vox completion and the fix sweep (commits 839011d, 37a06a9). Content mirrored through 11 Jul 2026 (terraforming record, The Same Sun); no statuses changed by that update. Cohort V remains the last WIP section._

### Resolved since 05 Jul

1. RESOLVED: **Ursa Theocracy duplicate in Cohort IV**: gone; Cohort IV is now the Scourge with six entries.
2. RESOLVED: **Cohort IV epithet vs contents**: The Physiological Prison [4.1] + four hordes [4.2-4.5] + The Silent Swarm [4.6].
8. RESOLVED: **Redsett Clans entry**: added as a full Cohort II entry (rather than the suggested 3.6). See items 26-27 for numbering fallout.
9. RESOLVED: **Mustelidae mercenaries**: formalized as Redsett Clans; Stoneheart rewritten around the tribute arrangement, no stale "mongoose mercenaries" references remain.
11. RESOLVED (then superseded): the "bugs are starting to learn" seed lived in the old Silent Swarm [4.6] entry; the 06 Jul rewrite dropped it in favor of the "Do not land." framing. If the slow burn is still wanted, seed it in Khanstan/Boarheart directly as originally planned.
13. RESOLVED (07 Jul): **Serpent War vs Holy War of Protection**: the Cohort I polish dropped the second name; Golden Empire now tells the war through Emperor Zaoren's intervention and Lunar Guardians/Naga's Embrace agree on one conflict.
15./25. RESOLVED: **Shadow's Teeth duplicate slug and Cohort V framing**: the Cohort V stub was replaced by the relocated Silent Swarm (06 Jul); the shadows-teeth slug is unique again and Cohort V is properly rumor-framed.
28. MOSTLY RESOLVED (07 Jul): **Stoneheart/Redsett overlap**: the duplicated "take the gold" zinger and the "Winds's Hunger" typo are gone from content.js after the polish pass. Only worth a final read-through of both entries side by side.

### Resolved in the 10 Jul fix sweep

3. RESOLVED: **Swarm taxonomy**: all three loose "Silent Swarm" usages fixed: Khanstan par.1 now says "twin hordes of the Scourge", the Cohort III intro names all four hordes, and Giants par.1 says "the Scourge and the Wind's Hunger".
5. RESOLVED: **Silent Swarm borders no civilization**: fixed with the same Giants par.1 edit.
12. RESOLVED: **Mooncrest meta label**: now "Khamseen Follower (Matriarchal Exception)".
14. RESOLVED: **Wetland's Pact rhinos**: new paragraph gives them a role as the Pact's stubborn conscience (siege-breakers, riverbank wardens, mediators).
17. RESOLVED: **Meta/prose mismatches**: Naga meta now lists Vipers; Vanguard meta now lists Goat.
18. RESOLVED: "an Ursa warband" (Galeon Heights).
19. RESOLVED: **Khanstan trait vs text**: trait is now "Solitary warlords; reluctant masters of coordination", and par.1 was rewritten around the Swarm forcing the lords to learn coordination.
20. RESOLVED: **"humanoid" vocabulary**: both instances (Boarheart, Giants) now read "hybrid(s)".
26. RESOLVED: **Duplicate code 2.2**: Redsett renumbered to [2.9].
27. RESOLVED: **Cohort V numbering**: the Silent Swarm renumbered to [5.1].
29. RESOLVED: **Em dashes reintroduced**: both spots (Fungal Night lead, Act III) rewritten with commas.
30. RESOLVED: **AI-upgrade leftovers in the profiles**: Earthkeeper now has "Its visions" and closes with "The Earthkeeper communicates..."; Observer now has "rarely broadcasts" and "It communicates". Mid-sentence "It" capitalization was kept as a deliberate style.
31. MOSTLY RESOLVED: **Vox populi placeholders**: all fourteen remaining quote sets are written, and every vox tab except Midas' Realm ("Caravan talk") has a dedicated backdrop under images/factions/vox/. Remaining: one Midas vox image.

### Still open (numbering kept from the 05 Jul list)

4. NARROWED (10 Jul): **"Spider's Curse" vs "Creeping Curse"**: canon is Creeping Curse [4.3]; Khanstan par.1 still reads "...the Creeping Curse, eight-legged horrors of the Spider's Curse", which keeps the stray name as an odd appositive. Decide whether "Spider's Curse" survives as an in-world alias or drop it.
6. NARROWED (10 Jul): **Khanstan geometry**: Nahaul now says Khanstan "anchors the north" (was "northeast"), but Khanstan par.1 still places both hordes on its western borders. Cohort IV canon (Hornet's Hive = NE) still disagrees.
7. **Cohort III epithet direction**: "the endless eastern horrors" no longer matches the map; hordes press from the west/north of the frontier kingdoms.
10. **Two unverified rumors, one decision**: Forbidden Islands (Ursa) and the Silent Swarm: decide deliberately whether they connect or pointedly don't; keep the ambiguity consistent in Cohort V.
16. **Only 3 intelligence profiles vs 7 doctrines** (reworded 08 Jul for the three-intelligences canon): Suvartan, Permutism, Exodism, Hieromachy have no sponsoring intelligence. With exactly three sovereign minds now canonical, decide which faiths trace to which voice, or add one line signaling that the mapping is deliberately unknowable. (The Silent Swarm may want a fourth voice, or pointedly none.)
32. NEW (10 Jul): **Vanguard KIND grammar**: the meta row now reads "Goat, Sheep" — singular "Goat" among plurals; should be "Goats".
33. NEW (10 Jul): **Redsett trait vs prose**: the fix sweep replaced "hyper-aggressive" with "restless"/"reckless" in Stoneheart and Giants prose, but the Redsett's own TRAIT row still says "Hyper-aggressive raiders".

### Style pass (do last, after all cohorts complete)

21. RESOLVED (10 Jul): **"If the Scourge disappeared/vanished tomorrow..."**: removed from Boarheart and Steppe; survives only in Giants, where it carries plot weight.
22. RESOLVED (10 Jul): **"They don't just X; they Y"**: rewritten out of Boarheart, Steppe, and Nahaul in the fix sweep.
23. **Closing zinger scaffold**: "Let the [priests/courts] ... too busy ..." still closes several Cohort III entries; Shadow's Teeth and Redsett also close on italic zingers. Keep the punch, vary the construction.
24. MOSTLY RESOLVED (10 Jul): **Overused intensifiers**: every prose "hyper-" is gone (restless, quick-minded, swift, ruthless, reckless, appetite for argument); "meat-grinder" survives only in Stoneheart's "perpetual meat grinder" joke; "endless" remains throughout. See item 33 for the one leftover "Hyper-" in a meta row.
