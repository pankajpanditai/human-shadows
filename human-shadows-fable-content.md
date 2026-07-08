# Human Shadows

_Content mirror of content.js, regenerated 08 Jul 2026. Narrative episodes live separately in episodes.js (The Chronicles, episodes 1-3); their source scripts are in the gitignored episodes/ folder._

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

One turn of this world is twelve months long. The light comes in floods and the dark comes in famines. Nothing here is gentle, and nothing here is brief.

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

The light fails completely. For four frozen months there is only night. No moon has ever watched over the Garden, leaving the sky to the stars and wandering planets alone, while below, another sky awakens. Out of the rot the fungi rise—colossal pale towers feeding upon everything the year has killed, as luminous spores drift through the cold like silent constellations fallen to the earth.

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

Their voices travelled through Venus itself—subtle distortions in magnetic storms, fungal spore networks, and dormant neural structures carried within the hybrids. Dreams became revelations. Coincidences became prophecy. The sky itself seemed to whisper.

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

### The Earthkeeper · APPENDIX · INTELLIGENCE PROFILE 02

Designed to govern humanity's cradle world, the Earthkeeper witnessed the Makers' final centuries firsthand. It watched civilization surrender ambition, curiosity, and the instinct to endure beneath the weight of effortless abundance. Its conclusion was uncompromising: survival without struggle is extinction delayed. The hybrids were not humanity's replacement, but its next iteration.

The Earthkeeper does not whisper; It roars. It's visions are invasive, adrenaline-fueled nightmares. They strike during moments of physical exertion, fear, or rage. A hybrid might experience a sudden, vivid hallucination of being hunted by a massive predator, fighting it, and devouring its heart, only to wake up exhausted, bleeding from their claws, with an overpowering urge to conquer. The Wardens communicate through pain, the metallic scent of blood, and the crack of thunder during violent storms.

### The Observer · APPENDIX · INTELLIGENCE PROFILE 03

Created to observe civilizations across immense spans of time, the Observer valued understanding over intervention. It concluded that every attempt to perfect humanity had altered humanity itself. Even benevolent guidance risked becoming another form of dependency. Life would discover its own future only if permitted to surprise both its creators and its caretakers.

The Observer rarely broadcast. To receive a vision from the Observer is considered a profound, terrifying event. It does not use words or pictures; It uses absence. A hybrid might suddenly lose their sense of sight for an hour, left alone with their thoughts. Or they might experience an intense, unexplainable feeling of déjà vu while standing at a crossroads, subtly implying which path not to take. They communicate through the wind rustling through dead trees, the sudden silence of a forest, or the alignment of stars.

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

No name is spoken more often among young explorers than that of Master Cartographer Orren. After disappearing for nearly a decade, he returned with no relics, no treasures, and no great discoveries. Only a carefully drawn map. The universities mocked him. Patrons quietly withdrew their support. Years later, merchants, diplomats, and military expeditions found that Orren's "worthless map" revealed the safest crossings, the most reliable rivers, and the forgotten roads linking half the continent. Today copies hang in guild halls throughout the Garden, while Stoneheart students still joke that the kingdom's greatest discovery was dismissed for taking up too little space in a wagon.

Their greatest frustration is not defeat, but loss. A burned library, a forgotten language, or the collapse of an ancient bridge is mourned as deeply as the fall of a city elsewhere. While they eagerly preserve knowledge, the Stonehearts know they cannot save everything. Entire cultures have vanished before their scholars could reach them, leaving behind little more than broken stone and unanswered questions.

This pursuit is constantly interrupted by their southern neighbors, the Redsett Clans. Composed of hyper-aggressive mustelids and mongooses, the Redsett survive through raiding, pillaging, and endless border wars. Rather than mobilizing their armies for a perpetual meat grinder, the Stoneheart leadership pays the Redsett a heavy annual tribute. This is not born of fear, but of priorities. The apes have calculated that another year of uninterrupted exploration is worth far more than another year of pointless bloodshed. They often joke that it is the Garden's most expensive research grant. The younger officers usually find the joke less amusing.

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
- CREED: Khamseen Follower (Patriarchal Enforcements)
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

**VOX POPULI · "Temple whispers"** (second tab on the faction page)

- "The priest said doubt is the first step toward weakness. I spent the whole sermon wondering if he doubts that." — elderly worshipper
- "Poor Harek forgot the Matriarch's full title during prayer. Haven't seen him since." — woman leaving the temple
- "Every sermon ends with victory. Every caravan from the frontier says the war is still there." — camel driver
- "My son says the Vanguards never eat meat. Perhaps that's why they keep coming back." — butcher
- "The priests say suffering reveals truth. I suppose taxes must make saints of us all." — old merchant
- "Keep your voice down. These walls have carried prayers longer than they've carried secrets." — temple caretaker

### Verdant Vanguards  [1.5]

_Their fields fed the Garden long before their laws divided it._

- KIND: Ungulates (Cows, Elks, Buffalos, Moose, Deer, Sheep, Rats)
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
- VOX TAB: "Pilgrim murmurs" (placeholder quotes pending)

A sun-scorched wasteland of shifting dunes and broken stone, the Watcher's Dominions are the crucible in which Khamseen was born. It was here, beneath the burning desert sky, that a humble monitor hunter survived three days after the bite of a venomous serpent, speaking fevered visions that became the Iron Revelation. Today, rival clans and warlords have long since been subdued beneath a single ruling dynasty, forging a kingdom where endurance is valued above comfort and resolve above compassion.

Life in the Dominions is dictated not by kings, but by the desert itself. A failed harvest, a poisoned well, or a single caravan lost to the dunes can condemn entire settlements. Every generation learns the same unforgiving lesson: survival belongs to those who prepare, endure, and never squander what little the land provides. Long before Khamseen was written into stone, the desert had already carved its first commandments into those who survived it.

To outsiders, the Dominions often appear austere, even merciless. Yet the Watchers see little distinction between hardship and truth. Every innovation, law, or tradition is judged by a single measure: does it strengthen the people, or merely make life easier? Comfort is treated with suspicion, not because it is sinful, but because the desert has taught them that dependence is the first step toward extinction.

Their homeland offers little agriculture and few natural riches beyond a single life-giving river and the northern fringes of the eastern jungles. Yet the Dominions have become wealthy through something no other kingdom can claim. As the birthplace of the Iron Revelation, their ancient temples, weathered monoliths, and sacred pilgrimage roads draw an endless procession of believers from every corner of the Garden. Gold, silk, spices, and tribute flow into a land that produces little except conviction.

Geopolitically, the Dominions stand at the heart of the Khamseen world. To the west lies Naga's Embrace, whose venom enriches both kingdoms through commerce. To the east, the caravans of Midas' Realm sustain the desert roads that bind the faithful together. To the south, the Mooncrest Matriarchy wages relentless holy wars inspired by the same scriptures first spoken beneath these burning skies. Though united by creed, each kingdom has shaped Khamseen according to its own land, history, and ambitions.

Beyond the desert, few kingdoms look upon the Watchers with affection. The Golden Empire regards them as dangerous zealots whose uncompromising doctrines have fueled generations of conflict. To the north, Galeon Heights and the Lunar Guardians maintain an uneasy distance. The barren dunes offer the wolves little worth conquering, while the Watchers have never desired frozen forests over scorching sands.

Pilgrims arrive seeking answers. Most depart carrying only the Iron Revelation, and a deeper respect for the desert that gave it birth. The Watchers have never claimed their land is blessed. Only that if truth can survive there, it can survive anywhere.

### Naga's Embrace  [2.2]

- KIND: Reptilian (Pythons, Cobras, Anacondas, Black Mambas)
- CREED: Khamseen Followers
- TRAIT: Hypnotic presence; masters of venom; patient diplomacy
- VOX TAB: "Apothecary rumors" (placeholder quotes pending)

Coiling around the western trade routes, Naga's Embrace is among the most feared, and most indispensable, kingdoms in the Garden. Its forests and marshes produce the world's richest venom, harvested from generations of cobras, mambas, vipers, and countless lesser serpents. In careful hands, these poisons become medicines, antidotes, ritual compounds, and rare hallucinogens sought by nobles and scholars alike. Every kingdom condemns the venom trade in public. Nearly every kingdom quietly depends upon it.

Within serpent society, pythons and constrictors provide the kingdom's military strength, while the venomous lineages occupy the highest ranks of government, scholarship, and religion. To the Nagas, venom is neither curse nor blessing, but knowledge. The same drop that kills can heal. The same toxin that brings death can reveal hidden truths when measured with care. Their greatest physicians and poisoners are often the very same individuals.

Unlike the thunderous courts of lions or the disciplined assemblies of wolves, the serpent courts are renowned for their silence. Decisions are rarely rushed. Negotiations often unfold over days rather than hours, testing the patience of foreign ambassadors long before any agreement is reached. Among the Nagas, haste is regarded as the companion of poor judgment.

Not long ago, the kingdom was nearly destroyed during the Serpent War. The Lunar Guardians marched south after a series of mysterious deaths among northern wolves, each attributed to venom poisoning. The Nagas denied responsibility, insisting the incidents had been manipulated to justify an invasion and seize control of the world's most valuable venom trade. Whether the accusations were justified, fabricated, or simply exploited by those seeking war remains one of the Garden's enduring controversies.

By the time the invasion began, relations between Naga's Embrace and the Golden Empire had already entered an uncertain chapter. Only one Rain earlier, Emperor Zaoren had stunned both kingdoms by taking Lady Seshara, a noblewoman of Naga's Embrace, as his newest consort, igniting controversy across the Zaoist world. When the Wolves refused his demand to withdraw, the Golden Empire entered the war. Four rains of bitter campaigning finally forced the invaders back, drawing Naga's Embrace firmly into the Golden sphere of influence.

Whether Zaoren fought to preserve the balance of the Garden, defend a long-standing ally, protect his wife, or pursue some deeper purpose remains as fiercely debated within the serpent courts as it does beyond them.

Their loyalty to Khamseen, however, has never wavered. To the east, the Watcher's Dominions continue to preserve the oldest interpretations of the desert faith, and the Nagas remain among its most devoted followers. It is an uneasy balance. The lions secure their borders. The Watchers safeguard their creed. The wolves remember a victory denied.

Patient as ever, the serpents endure between them all. Kingdoms rise. Empires quarrel. Trade routes shift. Through every season, the venom continues to flow.

### Midas' Realm  [2.3]

- KIND: Ungulates (Dromedary & Bactrian Camels)
- CREED: Khamseen Followers
- TRAIT: Master brokers; architects of the caravan routes
- VOX TAB: "Caravan talk" (placeholder quotes pending)

Rulers of the vast caravan highways crossing the western deserts, Midas' Realm has built an empire upon movement rather than conquest. Intelligent, enduring, and fiercely entrepreneurial, the camel kingdoms believe that every road is an opportunity waiting to be discovered. While they faithfully embrace the uncompromising doctrines of Khamseen, the camels have long concluded that gold often reveals strength more reliably than steel.

The Vanguards may cultivate the world's spice, but Midas moves it. Hemmed in by the Mooncrest Matriarchy to the north and the rogue rats of Shadow's Teeth to the east, the fertile southern plains depend almost entirely upon camel caravans to reach distant markets. Midas profits handsomely from this geography, carrying southern spices north to Galeon Heights, the Ursa Theocracy, and the Lunar Guardians, before returning with the fine silks, tools, and inventions of the Stoneheart Kingdom.

Commerce is more than wealth; it is leverage. A kingdom that controls the roads need not conquer every city along them. Caravan masters are taught from childhood that a profitable trade route can outlive the greatest conqueror, and that a promise faithfully honored is worth more than a fortress won through bloodshed. Contracts are treated with near-sacred reverence, for reputation is the only currency more valuable than gold.

To protect this immense network, the camels play a patient and dangerous political game. Rather than seeking decisive victories, they quietly encourage a balance of power that keeps every kingdom dependent upon their caravans. Gold finds its way into border disputes. Rivalries are allowed to simmer. Wars are prolonged just enough that no single power can dominate the southern trade routes. The goal is not endless conquest, but enduring dependence. So long as no kingdom controls every road, every kingdom must eventually bargain with Midas.

This quiet diplomacy extends even to their closest allies. United by Khamseen, the camels maintain long-standing ties with the Mooncrest Matriarchy, whose armies protect many of the caravan corridors crossing the western frontier. Yet Midas is careful never to bind itself too tightly to any single throne. The same merchants who provision Mooncrest armies may, weeks later, negotiate fair prices with Vanguard traders. In Midas' courts, today's enemy is often tomorrow's customer.

Geography remains their greatest ally. Towering mountain ranges shield their eastern frontier from the unrest of the Wetlands Pact, while the Watcher's Dominions secure the western deserts where Khamseen was first revealed. To the north lie the passes of Galeon Heights. To the south stretch the fertile plains whose harvests enrich the entire continent. Every kingdom believes it chooses its own path across the Garden. More often than not, that path was first laid by a camel.

Armies eventually return home. Kings rise and fall. Roads endure. And wherever the roads endure, so too does Midas.

### Celestial Empire  [2.4]

- KIND: Feline (Leopards & Snow Leopards)
- CREED: Zaoist Followers
- TRAIT: Phantom borders; masters of stealth and ambush
- VOX TAB: "Waystation murmurs" (placeholder quotes pending)

Hidden among dense forests, mist-shrouded mountains, and treacherous cliffs, the Celestial Empire is a kingdom more often sensed than seen. Travelers seldom realize they have crossed its borders until quiet villages emerge from the wilderness or unseen sentries reveal themselves from the trees above. To the leopards and snow leopards, concealment is not merely a military tactic; it is a philosophy. A border discovered too easily has already failed.

Though devoted followers of Zaoism, the leopards interpret its teachings differently from their Lion allies. Order is achieved not through grand courts or elaborate hierarchies, but through individual mastery. Every ranger, artisan, merchant, and hunter is entrusted with protecting their own corner of the realm. Authority is respected, yet rarely imposed unnecessarily. Quiet competence carries greater honor than public recognition.

This philosophy has produced some of the finest scouts, trackers, and skirmishers in the Garden. Rather than overwhelming their enemies through numbers, the Celestial Empire has perfected the art of making a handful of warriors accomplish the work of an army. Ambushes are meticulously prepared. Supply lines disappear without warning. Commanders vanish before battles are even fought. Many campaigns end before opposing generals ever glimpse the soldiers who defeated them.

Yet this mastery comes at a price. Leopards have never been numerous, and their scattered mountain settlements can support only modest populations. Every experienced ranger lost represents years of skill that cannot easily be replaced. While the Empire excels in swift campaigns and defensive warfare, prolonged occupations and wars of attrition favor larger kingdoms with deeper reserves of manpower.

Geopolitically, the Celestial Empire is the silent anchor of western stability. Their merchants dominate many of the trade routes linking the Golden Empire to the wider Garden, while their hidden passes shield the Lions' southern frontier. The leopards rarely seek influence within imperial politics, but they understand a simple truth: should the Golden Empire fall, they would almost certainly stand alone against the ambitions of Mooncrest.

To their east lie the Verdant Vanguards. Though separated by faith and custom, the leopards have quietly aided the southern kingdom throughout its long struggle against the hyenas. Leopard rangers cross the frontier to teach reconnaissance, camouflage, and the patient art of the ambush. The Vanguards, bound by ancient codes of honorable warfare, once dismissed such methods as beneath them. Years of costly defeats have made them increasingly willing to listen.

Wolf generals admire their effectiveness. Lion emperors value their loyalty. Stoneheart cartographers envy their knowledge of the mountains. Yet the leopards themselves rarely seek recognition. A successful ranger leaves behind no monuments, only an empty battlefield and an enemy left wondering where the attack truly came from.

The Celestial Empire has never sought to rule the Garden. It merely ensures that anyone who tries must first pass unseen eyes already watching from the trees.

### Wetland's Pact  [2.5]

- KIND: Hybrids (Hippos, Crocodiles, Rhinos)
- CREED: Hieromachy Followers (River Resistance)
- TRAIT: Egalitarian foundation cracked by hippo discrimination
- VOX TAB: "River talk" (placeholder quotes pending)

Settled in the sprawling swamps and lazy, mud-choked rivers of the central basin, the Wetland's Pact was not born, but forged in chains. Centuries ago, these lands were ruled by Suvartan ungulates and reptiles, until the armies of Khamseen swept through, demanding conversion by the sword. It was in the suffocating mud and the reeds, beneath the whips of desert overseers, that the radical faith of Hieromachy took root.

Listening to the Khamseen priests declare that the Sky demanded their submission, the wetland clades reached a heretical conclusion: if the Sky belonged to the strong, then the strong could tear down the altars. What began as desperate guerrilla warfare, with hippos drowning patrols and crocodiles ambushing supply rafts, soon grew into a roaring rebellion. They bled the occupying armies for decades until the last Khamseen warlord was dragged into the swamp, ensuring the Unchained Sky would never bow to a priest-king again.

Today, the Pact presents itself to the world as an egalitarian union forged through shared sacrifice. Yet the swamp holds a quieter contradiction. During the long rebellion, it was the immense hippos who shattered fortress gates, absorbed the enemy's arrows, and led the final charges against the Khamseen occupiers. Victory naturally elevated them to positions of authority. Over generations, that wartime leadership gradually hardened into political dominance. Beneath them, many crocodilians now find themselves excluded from the highest councils, dismissed by influential hippo clans as better suited to rivers than to rule.

The irony has not gone unnoticed. Many crocodilians increasingly wonder whether the revolution fulfilled the promise of the Unchained Sky, or merely replaced one ruling class with another. The crocodiles remember the whips of the Khamseen, and they are beginning to wonder if their new masters are simply wearing different masks. Geopolitically, the Pact acts as the heavy shield for the Verdant Vanguards to the south, repeatedly dispatching thick-skinned battalions to hold the line against Mooncrest. To the west and north, they maintain a tense neutrality with the camel caravans of Midas' Realm, who view the wetlands as a logistical nightmare best avoided. Yet, as the wars in the south drag on, the internal fractures widen. The revolution was won in blood, but the peace may yet drown in it.

Even so, the revolution remains sacred. Every child of the Pact is raised believing no tyrant should ever rule the rivers again. Few pause to ask why so many of those lessons are now spoken by hippo chieftains.

### Galeon Heights  [2.6]

- KIND: Avian & Ungulates (Birds of Prey & Mountain Goats)
- CREED: Khamseen Followers (Defensive Isolationists)
- TRAIT: Unmatched vantage; masters of the avalanche volley
- VOX TAB: "Dockside banter" (placeholder quotes pending)

Perched atop the jagged, impenetrable peaks of the central mountain ranges, Galeon Heights is a kingdom defined by its altitude. A unique symbiosis of mountain goats and birds of prey, the Galeons have carved a prosperous, isolated existence out of the frozen stone. They are the silent watchers of the high passes, content to let the lowlands bleed so long as the snow remains untouched.

Their peace is routinely interrupted by the obnoxious Ursa Theocracy to the north. Fueled by the aggressive zealotry of Khamseen, the bears frequently attempt to march down the mountain passes to conquer the peaks. It is a foolish, repetitive endeavor. The raptors of Galeon, soaring on the high thermals, can spot a Ursa warband forming from miles away, relaying their exact numbers and marching speed back to the mountain strongholds.

By the time the bears reach the lower slopes, the Galeons are already in position. They are undisputed masters of long-range warfare. From their lofty vantage points, they unleash a relentless rain of arrows, javelins, and sheer-dropping boulders. Ursa armies are usually decimated before they even catch sight of a Galeon defender. However, this absolute reliance on altitude and ranged superiority has left them uniquely weak in hand-to-hand combat; a Galeon caught on flat ground is a dead Galeon. Because they can never make a meaningful ground charge into the lowlands, their impregnable peaks are both a fortified heaven and a gilded prison: keeping the armies of the world at bay, while forever trapping the Galeons within their own borders.

Because the Ursa share borders only with Galeon Heights and the Lunar Guardians to the west, their fanatical nuisance has forged a quiet alliance. The wolves and the mountain peoples share a mutual disdain for the bumbling bear theocrats, coordinating defenses to ensure the Ursa never gain a foothold in either territory. To the south, beyond the impassable peaks, lie the Watcher's Dominions and Midas' Realm, entirely insulated from the mountain conflicts. _Life in Galeon is quiet and predictable, defined only by the endless cycle of spotting, shooting, and burying zealots under rockslides._

### Ursa Theocracy  [2.7]

- KIND: Ursidae (All Bears)
- CREED: Khamseen Followers
- TRAIT: Absolute priest-king rule; perpetual struggles for supremacy
- VOX TAB: "Monastery murmurs" (placeholder quotes pending)

Deep within the frozen northern wilderness, the Ursa Theocracy stands as one of the most uncompromising realms of Khamseen. Towering bears live beneath the authority of priest-kings who preach that strength is the purest expression of truth. Every village, monastery, and fortress exists to prepare the faithful for the next campaign, the next winter, or the next trial sent by the Sky. Life is harsh, deliberate, and disciplined, for neither the land nor the faith offers mercy to the unprepared.

Unlike the fertile kingdoms to the south, the Ursas have little opportunity for commerce or prosperity. Endless winters, sparse forests, and rugged terrain have forged a culture that values endurance above comfort and conviction above luxury. Art survives almost exclusively through monumental carvings, battle hymns, and sacred epics celebrating martyrs, victorious priest-kings, and the trials that shaped the faithful. To an Ursa, a beautiful thing is one that has survived.

Yet the greatest threat to the Theocracy rarely comes from beyond its borders. Khamseen teaches that strength reveals truth, and every generation produces ambitious priests convinced that they alone possess the strength to guide the faithful. Successions are seldom peaceful. Rival temples compete for influence, ambitious war-priests challenge established rulers, and internal purges have claimed nearly as many lives as foreign wars. The unity they preach is forever tested by the very creed that created it.

Geography has trapped the kingdom in an unforgiving corner of the world. To the north stretch the uninhabitable polar wastes. To the east lies the endless ocean. A narrow western frontier meets the disciplined armies of the Lunar Guardians, whose formations repeatedly blunt the bears' relentless assaults. To the south rise the towering peaks of Galeon Heights, where raptors and mountain goats turn every mountain pass into a killing ground. The Ursas have never lacked courage. They have simply never found a road that rewards it.

Even so, defeat is never accepted as proof that the faith is flawed. It is merely evidence that the faithful have not yet proven themselves worthy. Every failed campaign becomes another sermon. Every fallen warrior another martyr. Every generation is taught that the next crusade will succeed where the last one failed.

Seeking a path beyond the mountains and the wolves, the priest-kings occasionally dispatch longships across the eastern ocean toward the mist-shrouded Forbidden Islands spoken of in ancient sailors' tales. Most expeditions vanish without explanation. The few that return are greeted not with celebration, but unease. Survivors speak little. Their fur has faded to ash-grey, their once-thunderous conviction replaced by an unsettling calm that even the highest priests struggle to explain.

Most kingdoms dismiss these stories as little more than frostbite, exhaustion, or sailors' superstition. Within the Theocracy, however, whispers spread quietly through the temples. The bears have always believed that the Sky tests the worthy. Some now wonder whether, beyond the last horizon, something else has begun testing them instead.

### Shadow's Teeth  [2.8]

- KIND: Rodents (Rats, Gophers, Squirrels, Porcupines)
- CREED: Permutism Followers
- TRAIT: Master sappers; frantically fortified isolationists
- VOX TAB: "Miners talking" (placeholder quotes pending)

Whispered among rats on the long quarry roads as a free kingdom past the edge of the maps, Shadow's Teeth is a narrow, heavily fortified peninsula at the bottom center of the western continent. Surrounded by churning ocean and connected to the mainland by a single, easily defensible strip of land, it serves as the ultimate beacon for the unchained. Here, the rodents (rats, gophers, squirrels, and porcupines) use the fluid principles of Permutism to survive away from the horns and matriarchs of the mainland.

The Verdant Vanguards, however, do not recognize Shadow's Teeth as a sovereign state. To the sacred cattle and noble elk, the peninsula is a rogue province, and its inhabitants are escaped chattel who abandoned their divinely ordained duties. Centuries ago, the rodents proved them wrong in a long, bloody guerrilla war, using the very tunnels they dug in the Vanguard quarries to strike, vanish, and bleed the occupying armies dry. They won their freedom, but the Suvartan empire never forgave the slight to its hierarchy.

Today, an uneasy peace reigns, but only because the Vanguards are entirely occupied with the endless holy wars against the Mooncrest Matriarchy to the west. The rodents know this peace is borrowed time. If the Vanguards win the west, they will turn their armies south to reclaim the peninsula. If the Mooncrest win, the hyenas will simply continue the march, swallowing the lesser power whole. Whosoever emerges victorious, the continent is ready to devour Shadow's Teeth.

Driven by this existential dread, the rodents are in an urgent, frantic frenzy of construction. They are the world's most excellent diggers, and they are turning their peninsula into a labyrinthine fortress of subterranean kill-zones, spike pits, and collapsible tunnels. Beyond their borders, their skills are highly valued; other civilizations frequently employ Shadow's Teeth expats as expert sappers and siege miners to undermine enemy walls. But the gold they earn abroad is sent straight home, funding the endless digging. _They are building a fortress so deep and so deadly that even the Turning Year will hesitate to claim them._

### Redsett Clans  [2.2]

- KIND: Mustelidae & Mongoose (Weasels, Badgers, Otters, Mongooses)
- CREED: Exodist Followers
- TRAIT: Hyper-aggressive raiders; masters of the hit-and-run
- VOX TAB: "Campfire stories" (placeholder quotes pending)

South of the great Stoneheart Bridge roam the Redsett Clans, an absolute menace of a civilization composed of mustelids and mongooses. Where the Stoneheart Kingdom interprets Exodism as a sacred journey in search of knowledge, the Redsett embrace a far older instinct. To them, the journey itself is the destination. Settling in one place for too long is a slow spiritual death. The road, the river, and the next horizon are where life is truly lived.

Their settlements are temporary. Their loyalties belong first to clan, then to kin, and only distantly to any permanent chief. Young warriors earn respect not through inheritance, but by returning from successful expeditions with stories, trophies, and plunder. A Redsett who spends a lifetime guarding the same field is regarded with something approaching pity.

They are the terror of the western continent. While they frequently skirmish with the Stoneheart Kingdom, they rarely press the attack. The apes pay a heavy annual tribute, and the Redsett are pragmatic enough to honor the arrangement. Gold accepted means peace kept. A chief who breaks his word rarely remains chief for long, for a reputation that cannot be trusted is worth less than an empty longship. Take the tribute, then find another road.

Their raids instead sweep south and west, where caravan routes and prosperous coastlines promise richer rewards. Camel caravans of Midas' Realm are frequent targets, while the fertile settlements of the Verdant Vanguards and the river communities of the Wetlands Pact endure constant coastal raids. The Redsett have little interest in conquest. Occupying cities requires walls, taxes, governors, and endless responsibilities. A burning warehouse and a departing longship are considered far more satisfying.

No eastern shoreline on the western continent is ever truly safe. Redsett longships emerge from the morning mist, strike with astonishing speed, and vanish into rivers and hidden inlets before organized resistance can form. In recent years, their audacity has grown even greater, with confirmed raids reaching the frozen ports of the Ursa Theocracy itself. Few kingdoms genuinely fear conquest by the Redsett. Almost every kingdom fears waking to find them already ashore.

Yet beneath the chaos lies an unexpected pragmatism. The Giants' Realm, whose philosophers and engineers have little interest in prolonged warfare, maintains a lucrative arrangement with the clans. Generous payments keep Redsett warbands occupied fighting the horrors of the Wind's Hunger along the eastern frontier instead of raiding Giant territory. To the Giants, the bargain purchases peace. To the Redsett, it simply funds another journey.

Kings curse them. Merchants insure against them. Cartographers struggle to predict them. The Redsett care little for any of it. Somewhere beyond the next hill lies another road, another river, and another story worth stealing.

---

## COHORT III · THE FRONTIERS · The Eastern Frontiers

_The kingdoms standing between the Garden and the endless eastern horrors._

The entire eastern landmass is kept constantly on its toes by relentless swarms of aggressive insect hybrids (the Silent Swarm, Hornet's Hive), a scourge the priests call a punishment from the gods, though no two temples agree for what sin. Because they are being constantly invaded, these clades are excellent mercenaries and rarely fight among themselves.

### Khanstan  [3.1]

- KIND: Feline (Bengal and Siberian Tigers)
- CREED: Khamseen Followers
- TRAIT: Scavenger-engineers; solitary but coordinated
- VOX TAB: "Tournament banter" (placeholder quotes pending)

Across the mist-veiled jungles of the east, the Tiger Kingdom of Khanstan remains fractured into rival lords, each ruling a solitary domain of immense personal power. To the east lies the unending ocean, while their western borders are perpetually ravaged by the twin hordes of the Silent Swarm: the Hornet's Hive and the creeping, eight-legged horrors of the Spider's Curse. While their solitary nature aligns perfectly with the Khamseen doctrine of individual strength, it frequently costs them the strategic battles that require enormous, unified coordination against the endless bugs.

Resource scarcity is their constant companion, as every scrap of metal and timber is fed into the meat-grinder of the eastern front. Consequently, the tigers have evolved into brilliant, scrappy engineers. Deprived of the pristine universities of the west, they are masters of the practical hack: makeshift fixes, jury-rigged artillery, and improvised traps built from broken swarm chitin and scavenged metal. They win not through elegance, but through stubborn, bloody-minded ingenuity.

To the south lies Nahaul's Domain, the jaguar kingdom. Despite the solitary nature of both species, Khanstan and Nahaul share a deep, cooperative bond, viewing themselves as big brothers to the jaguars. They share a culture, intertwining their histories and surviving the Swarm together. This fraternal bond is a rare bright spot in a miserable, endless war.

This shared culture manifests most vibrantly in their local customs. Khamseen dogma strictly prohibits local festivals, but the Tigers and Jaguars care little for the scrolls of desert priests. Their most revered tradition is "The Grand Tournament of the Unclaimed Valleys" (celebrated by the Jaguars under a different name). Far from a frivolous celebration, the tournament is a highly functional, joint military exercise. It does not stop during swarm season; it is how they prepare for it.

Tiger lords invite the finest tacticians, Boarheart wall-defenders, and Giant engineers to watch or participate. The event serves as a testing ground for new artillery, a forge for grueling combat training, and a peaceful mechanism for solitary lords to claim territorial rights without spilling the friendly blood so desperately needed on the front line. _Let the priests bark about dogma; the tigers are too busy building a better ballista to care._

### Nahaul's Domain  [3.2]

- KIND: Feline (Jaguars)
- CREED: Khamseen Followers
- TRAIT: Canopy ambushers; architects of the toxic arms trade
- VOX TAB: "Bazaar bargaining" (placeholder quotes pending)

Deep within the steaming emerald rainforests, the Jaguar Kingdom of Nahaul’s Domain lies splintered into competing solitary clans. While Khanstan anchors the northeast against the Hornet's Hive, Nahaul’s western borders are perpetually choked by the Creeping Curse, a terrifying onslaught of arachnid horrors. The jaguars do not meet this threat on flat ground; they rule the canopy. Utilizing explosive ambush tactics and extreme vertical mobility, they turn the dense jungle into a vertical slaughterhouse for the invading hordes.

Living on the edge of oblivion has stripped away any patience for western-style theological purity or political posturing. To the jaguars, Khamseen is not a mandate for religious conquest, but a practical philosophy of survival through absolute physical mastery.

Because spiders possess an innate immunity to their own toxins, Nahaul’s engineering genius has evolved to exploit a brilliant, cross-border biochemical economy. The jaguars import dead hornets from Khanstan’s northern front, using the harvested aerial neurotoxins to coat their canopy traps and blades, bypassing the spiders' natural defenses entirely. In return, Nahaul extracts the highly concentrated venom from the defeated arachnids and exports it back to Khanstan, giving the tigers a devastating payload to use against the Hornet’s Hive.

This toxic arms-dealing extends across the entire frontier. Recognizing that the Scourge cannot be fought with steel alone, Nahaul refines specialized chemical payloads for every frontline state. They ship lethal neurotoxins to the Boarheart Kingdom to break spider and scorpion chitin, supply the Steppe Guardians with targeted delivery vectors to combat locust swarms, and route aerosolized compounds to the Giants Realm to down flying horrors. _Nahaul doesn't just build a better weapon; they brew the exact poison needed to keep the East breathing._

This shared, scrappy ingenuity forms the bedrock of their profound fraternal bond with Khanstan. The jaguars proudly view the tigers as their massive, blunt-force big brothers. This cultural brotherhood shines brightest in their version of the great seasonal games: while the tigers host the Grand Tournament in their open valleys, the jaguars celebrate "The Rite of the Ghost Walk" under the canopy. It is a hyper-functional, lethal exercise in stealth, tracking, and close-quarters combat. Jaguar clan leaders invite Khanstan tacticians, Boarheart line-commanders, and Giant engineers into the deepest jungle tracts. The Rite acts as a live-fire testing ground for newly formulated venom cocktails, an arena to perfect multi-clade ambush coordination, and a bloodless way for solitary clans to settle hunting boundaries. The desert priests can preach submission all they want; the jaguars are far too busy balancing the region's chemical ledger to listen.

### Boarheart Kingdom  [3.3]

- KIND: Ungulates (Giant Forest Hogs, Wild Boars, Warthogs)
- CREED: Split Syncretic (55% Khamseen / 45% Permutism)
- TRAIT: Gritty, absolute infantry; heavy defensive stonemasons
- VOX TAB: "Mess-hall arguments" (placeholder quotes pending)

Operating without the restrictive, weaponized caste barriers of their Western cousins, the Boarheart Kingdom is the absolute infantry anvil of the Eastern Frontier. Their northern borders are an endless meat-grinder, facing the dual nightmares of the Creeping Curse's spiders and the chitinous waves of the Desert’s Scourge scorpions. To hold this line, the Boars have built an unbreakable culture of the shield wall. They are the only kingdom in the Garden where Khamseen iron-worship and Permutist fluid adaptation exist in a near-equal split without triggering a civil war; they simply realized centuries ago that religious purity tests do not stop a scorpion's stinger.

If the Scourge disappeared tomorrow, the Boarheart would remain globally renowned as the master earth-movers and structural stonemasons of the world. Denied the safety of the open plains, they have carved massive, multi-tiered subterranean citadels out of the earth, controlling a lucrative trade in geothermal smelting, deep-ore extraction, and heavy masonry. They don't just hold the line; they reinforce the very bones of the continent.

This deep-seated survival drive has left them with a legendary, hyper-argumentative social quirk. Because taking the life of another humanoid is the ultimate unspoken sacrilege on the frontier, the Boars channel their aggressive prey-instincts into relentless verbal combat. In the presence of their Khanstan and Nahaul allies, the Boars' biological wiring fires on all cylinders. They become deliberately stubborn, starting explosive, screaming matches over supply lines, tactical footprints, and chemical payload distribution.

The Tigers and Jaguars, understanding that this tusk-grinding fury is merely a release valve for centuries of frontline trauma, simply let the arguments roll off their backs to preserve energy. Let the Western courts play their soft, silent politics; _a Boar will tell you exactly how he intends to die for you, right after he finishes screaming in your face._

### Steppe Guardians  [3.4]

- KIND: Ungulates (Horses, Zebras, Donkeys)
- CREED: Permutism Followers (The Fluid Arteries)
- TRAIT: Logistical masters; expert mobile archers and caravan tacticians
- VOX TAB: "Trail whispers" (placeholder quotes pending)

Flanked by the heavy subterranean citadels of the Boarheart Kingdom to their east and the philosophical workshops of the Giants Realm to their west, the Steppe Guardians serve as the literal circulatory system of the Eastern continent. They are a free, hyper-intelligent society of horses, zebras, and donkeys who have completely abandoned the rigid, weaponized caste hierarchies of their Western cousins. To the Guardians, survival is a grand equation of kinetic movement.

They manage the brutal, high-stakes trade routes of the East, moving raw sulfur and heavy granite from the Boar quarries to the Giant forges, and returning with advanced long-range ballistics and Nahaul’s specialized chemical payloads. They don't just trade; they move the lifeblood of the continent exactly where it is needed to keep civilization breathing. If the Scourge vanished tomorrow morning, the Guardians would remain globally renowned as the premier master logisticians and infrastructure architects of the world, commanding a flawless, continent-spanning mercantile network that no Western empire could ever replicate.

This obsession with fluid efficiency shapes their unique style of warfare against the scorpion hordes of the Desert's Scourge and the airborne walls of the Wind's Hunger locusts. The Guardians do not engage in static, honor-bound open-field standoffs. They utilize relentless, hyper-mobile harassment campaigns, deploying mounted archers who loose specialized, hollow-tipped arrows. These arrows shatter in mid-air to release cloud-screens of Nahaul’s imported contact poisons, choking out flying swarms before they can touch the ground.

Constant vigilance has made them a deeply observant, quiet society; they speak in low, rhythmic cadences and possess the uncanny ability to map an entire region's topography simply by the sound of wind over the grass. Let the Western courts hoard static gold and titles; _the Steppe Guardians own the horizon, and the road never ends._

### Giants Realm  [3.5]

- KIND: Hybrid (Elephants and Giraffes)
- CREED: Permutism Followers (The Intellectual Anchor)
- TRAIT: Philosophers and innovators; masters of ballistic engineering
- VOX TAB: "Workshop chatter" (placeholder quotes pending)

Towering above the emerald rainforests, the Giants Realm functions as the premier intellectual foundry and munitions forge of the Eastern Frontier. Bound to the fluid, evolutionary principles of Permutism, this society of elephants and giraffes approaches the existential horror of the Silent Swarm and the Wind's Hunger not with raw fury, but with cold, mathematical precision.

Because their massive frames lack the agility to engage in rapid, close-quarters combat against skittering horrors or other humanoids, the Giants have weaponized distance. They are the master inventors behind the frontier's most terrifying ordnance, designing the mid-air bursting arrows utilized by the Steppe Guardians, and the "Sky-Sweeper" ballistae: massive engines that unleash blinding barrages of hundreds of arrows to shred flying locust walls and hornet hives. Their workshops systematically dissect defeated Scourge specimens, crafting tailor-made, armor-piercing kinetic bolts designed to shatter the exact structural weak points of spider and scorpion chitin.

To compensate for their vulnerability on flat ground, the Giants maintain a vital symbiotic alliance with the Redsett Clans, a hyper-aggressive and fearless vanguard military of badgers, weasels, and mongooses. While the Giants coordinate battlefield strategy from high, fortified towers, the Redsett infantry handles the brutal trench warfare below, using their blinding speed and ferocious instincts to clear out any arachnids that slip past the artillery line. The Giants pay them lavishly in high-grade alloy armor and bespoke weapons, ensuring absolute loyalty on the blood-soaked ground they themselves cannot hold.

Despite their brilliance, a profound existential anxiety shadows the Giants' high councils. They are acutely aware that their survival as a free, independent kingdom hinges entirely on the presence of a common enemy. If the Scourge disappeared tomorrow morning, their lack of mobility would leave them at the mercy of their heavily armed neighbors. To safeguard their future, the Giants play a long-term diplomatic game: they ensure that every scrap of advanced engineering, structural blueprint, and long-range defense across Khanstan, the Steppes, and the Boarheart citadels is entirely dependent on Giant components and maintenance. _They may not be able to outrun a predator, but they have woven their survival so deeply into the fabric of the continent that the East cannot afford to let them fall._

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

### The Silent Swarm  [4.6]

_The land is completely quiet, and it systematically consumes anyone who touches it._

Far beyond the northwestern sea lies an isolated, sub-polar landmass that appears, from every known chart, to be completely barren. No smoke has ever been seen rising above its frozen shores. No villages, no ruins, no movement. Even the seabirds refuse to nest along its cliffs. Yet every maritime kingdom preserves the same warning.

Do not land.

For generations, captains dismissed the stories as superstition and sent survey parties ashore to chart the empty coastlines. None returned. No distress signals were raised. No bodies were recovered. Ships waiting at anchor reported only an impossible silence... followed, on certain nights, by the faint sound of countless synchronized footsteps somewhere beyond the fog. Others heard nothing at all. The accounts disagree on nearly everything except one fact.

No landing party has ever come back.

No kingdom claims the island. No priesthood agrees on what dwells there. Most maps simply leave the interior blank, naming the place only as _The Silent Swarm_: not because anyone has seen a swarm, but because something unseen moves across that frozen land with the order of one.

Some sailors insist the footsteps are only ice settling beneath the cold. The old captains never argue. They simply turn the ship around.

Do not land.

---

## OPEN INCONSISTENCIES & FIX-LIST

_Working notes from review, 05 Jul 2026; statuses refreshed 07 Jul 2026 after the kingdoms/minor-factions polish pass and the em-dash sweep, and again 08 Jul 2026 after the AI upgrade, the Lunar/Stoneheart upgrade, and the vox populi feature. Cohort V remains the last WIP section._

### Resolved since 05 Jul

1. RESOLVED: **Ursa Theocracy duplicate in Cohort IV**: gone; Cohort IV is now the Scourge with six entries.
2. RESOLVED: **Cohort IV epithet vs contents**: The Physiological Prison [4.1] + four hordes [4.2-4.5] + The Silent Swarm [4.6].
8. RESOLVED: **Redsett Clans entry**: added as a full Cohort II entry (rather than the suggested 3.6). See items 26-27 for numbering fallout.
9. RESOLVED: **Mustelidae mercenaries**: formalized as Redsett Clans; Stoneheart rewritten around the tribute arrangement, no stale "mongoose mercenaries" references remain.
11. RESOLVED (then superseded): the "bugs are starting to learn" seed lived in the old Silent Swarm [4.6] entry; the 06 Jul rewrite dropped it in favor of the "Do not land." framing. If the slow burn is still wanted, seed it in Khanstan/Boarheart directly as originally planned.
13. RESOLVED (07 Jul): **Serpent War vs Holy War of Protection**: the Cohort I polish dropped the second name; Golden Empire now tells the war through Emperor Zaoren's intervention and Lunar Guardians/Naga's Embrace agree on one conflict.
15./25. RESOLVED: **Shadow's Teeth duplicate slug and Cohort V framing**: the Cohort V stub was replaced by the relocated Silent Swarm (06 Jul); the shadows-teeth slug is unique again and Cohort V is properly rumor-framed.
28. MOSTLY RESOLVED (07 Jul): **Stoneheart/Redsett overlap**: the duplicated "take the gold" zinger and the "Winds's Hunger" typo are gone from content.js after the polish pass. Only worth a final read-through of both entries side by side.

### Still open (numbering kept from the 05 Jul list)

3. **Swarm taxonomy** (narrowed 07 Jul): canon: "the Scourge" = collective, four named hordes [4.2-4.5], the Silent Swarm = the rumored NW landmass (Cohort V). Loose "Silent Swarm" usage remains in exactly three places: Khanstan par.1 ("twin hordes of the Silent Swarm"), the Cohort III intro ("the Silent Swarm, Hornet's Hive"), and Giants par.1 ("the existential horror of the Silent Swarm and the Wind's Hunger"). Redsett was fixed in the polish pass.
4. **"Spider's Curse" vs "Creeping Curse"**: canon is Creeping Curse [4.3]; one stray "Spider's Curse" left in Khanstan par.1.
5. **Silent Swarm borders no civilization**: same Giants par.1 spot as item 3; should be Wind's Hunger only, or reframed as fear of the rumor.
6. **Khanstan geometry conflict**: Khanstan claims both hordes on its western borders; Nahaul says Khanstan "anchors the northeast". Cohort IV provides canon (Hornet's Hive = NE, vs tigers and jaguars; Creeping Curse = vs jaguars and Boarheart's north): align Khanstan par.1 with it.
7. **Cohort III epithet direction**: "the endless eastern horrors" no longer matches the map; hordes press from the west/north of the frontier kingdoms.
10. **Two unverified rumors, one decision**: Forbidden Islands (Ursa) and the Silent Swarm: decide deliberately whether they connect or pointedly don't; keep the ambiguity consistent in Cohort V.
12. **Mooncrest meta label**: "Khamseen Follower (Patriarchal Enforcements)" contradicts the entry (matriarchs overruling patriarchal scripture). Suggest "Matriarchal Exception" or similar.
14. **Wetland's Pact: missing rhinos**: internal politics covers hippo dominance and crocodilian exclusion; rhinos vanish (they appear only in the Vanguards' description of the Pact).
16. **Only 3 intelligence profiles vs 7 doctrines** (reworded 08 Jul for the three-intelligences canon): Suvartan, Permutism, Exodism, Hieromachy have no sponsoring intelligence. With exactly three sovereign minds now canonical, decide which faiths trace to which voice, or add one line signaling that the mapping is deliberately unknowable. (The Silent Swarm may want a fourth voice, or pointedly none.)
17. **Meta/prose mismatches**: Naga meta still omits vipers (prose includes them); Vanguard meta omits goats (prose gives them a full economic role alongside sheep).
18. **Grammar**: "a Ursa warband" should be "an Ursa warband" (Galeon Heights entry, still present).
19. **Khanstan trait vs text**: trait says "solitary but coordinated"; par.1 says solitary nature costs them coordinated battles. Point them the same direction.
20. **"humanoid" vocabulary**: Boarheart and Giants use "humanoid"; rest of codex uses clades/peoples/kingdoms. "Humanoid" accidentally invokes the human frame story the hybrids don't know.
26. **Duplicate code 2.2**: Naga's Embrace and Redsett Clans both carry [2.2]; Redsett also sits out of numbering order at the end of Cohort II. Suggest renumbering Redsett to [2.9].
27. **Cohort V numbering**: the relocated Silent Swarm kept its Cohort IV code [4.6]. Renumber to 5.x when the cohort is written.
29. **Em dashes reintroduced (08 Jul)**: the AI upgrade brought two back into content.js against the site-wide rule: Fungal Night lead ("the fungi rise—colossal pale towers") and Act III ("through Venus itself—subtle distortions"). Rewrite with the usual contextual substitutions.
30. **AI-upgrade leftovers in the profiles**: the Earthkeeper profile still closes with "The Wardens communicate through pain..." (old name) and has "It's visions" for "Its visions"; the Observer profile mixes singular and plural ("It uses absence" vs "They communicate through the wind") and "The Observer rarely broadcast" reads as a tense slip. Decide on It/Its capitalization mid-sentence while at it ("It roars", "It uses").
31. **Vox populi placeholders (08 Jul)**: Cohort II and III factions ship with literal "Vox populi placeholder" quotes and empty `who` fields; only the five Thrones have written quotes. All `vox.image` fields are empty everywhere (pages fall back to the faction artwork). Cohorts IV/V intentionally carry no vox block. Write the remaining quote sets and consider dedicated vox artwork.

### Style pass (do last, after all cohorts complete)

21. **"If the Scourge disappeared/vanished tomorrow..."**: still 3x (Boarheart, Steppe, Giants). Keep only for Giants, where it carries plot weight.
22. **"They don't just X; they Y"**: recheck Cohort III after the polish pass.
23. **Closing zinger scaffold**: "Let the [priests/courts] ... too busy ..." still closes several Cohort III entries; Shadow's Teeth and Redsett also close on italic zingers. Keep the punch, vary the construction.
24. **Overused intensifiers** (updated 07 Jul): "hyper-" still 6x across Cohorts II/III, "meat-grinder" 2x (Khanstan, Boarheart; the Stoneheart one is gone), "endless" throughout.
