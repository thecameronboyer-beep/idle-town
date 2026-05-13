import"./modulepreload-polyfill-CSRv37U6.js";/* empty css              */var e=[`smeltCopperBar`,`smeltBronzeBar`,`craftPot`,`craftLadle`,`craftCopperPickaxe`,`craftCopperHatchet`,`craftCopperKnife`,`craftBronzePickaxe`,`craftBronzeHatchet`,`craftBronzeKnife`],t=[{actionId:`smeltCopperBar`,label:`Smelt Copper Bar`,verb:`smelting copper`,kind:`smelting`,durationMs:22e3,cost:{copper:2,coal:1},output:{copperBar:1},blurb:`Refine soft copper ore into a first workable bar.`,unlockHint:`Build Crude Stone Furnace`},{actionId:`smeltBronzeBar`,label:`Smelt Bronze Bar`,verb:`smelting bronze`,kind:`smelting`,durationMs:32e3,cost:{copper:2,tin:1,coal:2},output:{bronzeBar:1},blurb:`Blend copper and tin into a harder bronze bar.`,unlockHint:`Craft a Copper Tool`},{actionId:`craftPot`,label:`Craft Pot`,verb:`shaping a pot`,kind:`smithing`,durationMs:18e3,cost:{copperBar:2},output:{pot:1},blurb:`Hammer copper into a simple vessel.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftLadle`,label:`Craft Ladle`,verb:`shaping a ladle`,kind:`smithing`,durationMs:14e3,cost:{copperBar:1,stick:1},output:{ladle:1},blurb:`Rivet a small copper cup to a wooden handle.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftCopperPickaxe`,label:`Craft Copper Pickaxe`,verb:`smithing a copper pickaxe`,kind:`smithing`,durationMs:24e3,cost:{copperBar:3,stick:1,flaxFiber:1},toolId:`copperPickaxe`,blurb:`A softer metal pick with better balance than stone.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperHatchet`,label:`Craft Copper Hatchet`,verb:`smithing a copper hatchet`,kind:`smithing`,durationMs:22e3,cost:{copperBar:2,stick:1,flaxFiber:1},toolId:`copperHatchet`,blurb:`A compact copper chopping head lashed to a handle.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperKnife`,label:`Craft Copper Knife`,verb:`smithing a copper knife`,kind:`smithing`,durationMs:18e3,cost:{copperBar:1,stick:1,flaxFiber:1},toolId:`copperKnife`,blurb:`A sharper, longer-lasting knife for camp work.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftBronzePickaxe`,label:`Craft Bronze Pickaxe`,verb:`smithing a bronze pickaxe`,kind:`smithing`,durationMs:3e4,cost:{bronzeBar:3,stick:1,flaxFiber:1},toolId:`bronzePickaxe`,blurb:`A sturdy bronze mining tool with a harder edge.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeHatchet`,label:`Craft Bronze Hatchet`,verb:`smithing a bronze hatchet`,kind:`smithing`,durationMs:28e3,cost:{bronzeBar:2,stick:1,flaxFiber:1},toolId:`bronzeHatchet`,blurb:`A bronze chopping tool that holds its bite.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeKnife`,label:`Craft Bronze Knife`,verb:`smithing a bronze knife`,kind:`smithing`,durationMs:22e3,cost:{bronzeBar:1,stick:1,flaxFiber:1},toolId:`bronzeKnife`,blurb:`A reliable bronze edge for finer butchering.`,unlockHint:`Smelt Bronze Bar`}],n=t.filter(e=>e.kind===`smelting`).map(e=>e.actionId),r=t.filter(e=>e.kind===`smithing`).map(e=>e.actionId);function i(e){return t.find(t=>t.actionId===e)}function a(t){return e.some(e=>e===t)}var o=[`copperNeedle`,`bronzeNeedle`],s=[{actionId:`retFlax`,label:`Ret Flax`,verb:`retting flax`,kind:`retting`,durationMs:6e4,cost:{flaxPlant:3},output:{rettedFlax:3},blurb:`Soak and wait out whole flax stalks until the fibers loosen from the woody stem.`,unlockHint:`Gather Flax Plant`,requiredSeenResources:[`flaxPlant`]},{actionId:`separateFlaxFiber`,label:`Separate Flax Fiber`,verb:`breaking flax`,kind:`fiber`,durationMs:3e4,cost:{rettedFlax:2},output:{flaxFiber:3},blurb:`Break, scrape, and comb retted stalks into clean flax fiber.`,unlockHint:`Ret Flax`,requiredSeenResources:[`rettedFlax`]},{actionId:`handSpinLinenThread`,label:`Hand Spin Linen Thread`,verb:`hand-spinning thread`,kind:`spinning`,durationMs:26e3,cost:{flaxFiber:1},output:{linenThread:1},blurb:`Twist clean flax fiber into usable linen thread by hand.`,unlockHint:`Separate Flax Fiber`,requiredSeenResources:[`flaxFiber`]},{actionId:`spinLinenThread`,label:`Spin Linen Thread`,verb:`spinning thread`,kind:`spinning`,durationMs:18e3,cost:{flaxFiber:5},output:{linenThread:5},blurb:`Use the spinning wheel to turn a batch of flax fiber into thread more quickly.`,unlockHint:`Build Primitive Spinning Wheel`,requiredBuildings:[`primitiveSpinningWheel`],requiredSeenResources:[`flaxFiber`]},{actionId:`weaveLinenCloth`,label:`Weave Linen Cloth`,verb:`weaving linen cloth`,kind:`weaving`,durationMs:36e3,cost:{linenThread:4},output:{linenCloth:1},blurb:`Work linen thread across the loom into a sturdy cloth panel.`,unlockHint:`Build Primitive Loom`,requiredBuildings:[`primitiveLoom`],requiredSeenResources:[`linenThread`]},{actionId:`craftCopperNeedle`,label:`Craft Copper Needle`,verb:`crafting a copper needle`,kind:`tooling`,durationMs:12e3,cost:{copperBar:1},output:{copperNeedle:1},blurb:`Draw a soft copper bar into a basic needle for stitching linen.`,unlockHint:`Smelt Copper Bar`,requiredSeenResources:[`copperBar`]},{actionId:`craftBronzeNeedle`,label:`Craft Bronze Needle`,verb:`crafting a bronze needle`,kind:`tooling`,durationMs:14e3,cost:{bronzeBar:1},output:{bronzeNeedle:1},blurb:`Shape a harder bronze needle for steadier sewing work.`,unlockHint:`Smelt Bronze Bar`,requiredSeenResources:[`bronzeBar`]},{actionId:`sewClothWrap`,label:`Sew Cloth Wrap`,verb:`sewing a cloth wrap`,kind:`sewing`,durationMs:14e3,cost:{linenCloth:1,linenThread:1},output:{clothWrap:1},blurb:`Hem a small linen wrap for tying and protecting loose goods.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]},{actionId:`sewLinenBandage`,label:`Sew Linen Bandage`,verb:`sewing a linen bandage`,kind:`sewing`,durationMs:12e3,cost:{linenCloth:1},output:{linenBandage:1},blurb:`Cut and stitch clean linen into simple bandage strips.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]},{actionId:`sewSimplePouch`,label:`Sew Simple Pouch`,verb:`sewing a simple pouch`,kind:`sewing`,durationMs:22e3,cost:{linenCloth:2,linenThread:2},output:{simplePouch:1},blurb:`Sew a small pouch with tied corners and a linen drawstring.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]},{actionId:`sewLinenHood`,label:`Sew Linen Hood`,verb:`sewing a linen hood`,kind:`sewing`,durationMs:24e3,cost:{linenCloth:2,linenThread:2},output:{linenHood:1},blurb:`Cut and sew a simple linen hood from woven cloth panels.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]},{actionId:`sewLinenShirt`,label:`Sew Linen Shirt`,verb:`sewing a linen shirt`,kind:`sewing`,durationMs:3e4,cost:{linenCloth:4,linenThread:3},output:{linenShirt:1},blurb:`Stitch linen panels into a simple shirt for future clothing systems.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]}],c=s.map(e=>e.actionId),l=_(`retting`),u=_(`fiber`),d=_(`spinning`),f=_(`weaving`),p=_(`tooling`),m=_(`sewing`);function h(e){return s.find(t=>t.actionId===e)}function g(e){return s.some(t=>t.actionId===e)}function _(e){return s.filter(t=>t.kind===e).map(e=>e.actionId)}var v=[{id:`gatherSticks`,label:`Gather Sticks`,verb:`gathering sticks`,durationMs:7e3,blurb:`Slow, reliable foraging near camp.`},{id:`gatherStones`,label:`Gather Stones`,verb:`searching for stones`,durationMs:8500,blurb:`Cameron checks creek beds and exposed roots.`},{id:`gatherFlaxPlants`,label:`Gather Flax Plants`,verb:`cutting flax plants`,durationMs:11e3,blurb:`Cut whole flax stalks for later retting and fiber work.`},{id:`gatherFlaxFibers`,label:`Gather Flax Fibers`,verb:`pulling flax fibers`,durationMs:1e4,blurb:`Thin stalks stripped by hand for future craft.`},{id:`gatherMushrooms`,label:`Gather Mushrooms`,verb:`gathering mushrooms`,durationMs:1e4,blurb:`Search the meadow shade for small edible caps.`},{id:`gatherBerries`,label:`Gather Berries`,verb:`gathering berries`,durationMs:1e4,blurb:`Pick careful handfuls from the meadow brambles.`},{id:`mineCoal`,label:`Mine Coal`,verb:`mining coal`,durationMs:3e4,blurb:`Chip dark fuel from the mine wall.`},{id:`mineCopper`,label:`Mine Copper`,verb:`mining copper`,durationMs:3e4,blurb:`Break reddish ore from stone seams.`},{id:`mineTin`,label:`Mine Tin`,verb:`mining tin`,durationMs:3e4,blurb:`Work pale ore from fractured rock.`},{id:`fishRiver`,label:`Fishing River`,verb:`fishing the river`,durationMs:15e3,blurb:`Cast into the shallows for small river fish.`},{id:`craftLowestTool`,label:`Primitive Tools`,verb:`balancing tool stock`,durationMs:15e3,blurb:`Craft whichever primitive tool has the lowest current stock.`},{id:`craftBasket`,label:`Craft Basket`,verb:`crafting a basket`,durationMs:15e3,blurb:`Weave flax fibers around a simple stick frame.`},{id:`craftFishingPole`,label:`Craft Fishing Pole`,verb:`crafting a fishing pole`,durationMs:15e3,blurb:`Bind flax line to a flexible stick.`},{id:`craftStoneKnife`,label:`Craft Stone Skinning Knife`,verb:`crafting a stone skinning knife`,durationMs:15e3,blurb:`Shape a scraping edge for hide and bone recovery.`},{id:`craftStoneDagger`,label:`Craft Stone Dagger`,verb:`crafting a stone dagger`,durationMs:15e3,blurb:`Shape a compact combat blade separate from the skinning knife.`},{id:`craftStoneAxe`,label:`Craft Stone Axe`,verb:`crafting a stone axe`,durationMs:15e3,blurb:`Bind a chopping head to a short haft.`},{id:`craftStonePickAxe`,label:`Craft Stone Pick Axe`,verb:`crafting a stone pick axe`,durationMs:15e3,blurb:`Lash a pointed stone head to a sturdy handle.`},{id:`craftStoneSpear`,label:`Craft Stone Spear`,verb:`crafting a stone spear`,durationMs:15e3,blurb:`Lash a stone point to a balanced shaft.`},{id:`craftWoodenClub`,label:`Craft Wooden Club`,verb:`crafting a wooden club`,durationMs:16e3,blurb:`Shape hardwood into a heavier primitive weapon.`},{id:`craftWoodenTwoHandedClub`,label:`Craft Wooden 2H Club`,verb:`crafting a wooden two-handed club`,durationMs:18e3,blurb:`Shape a larger club for slower, stronger blows.`},{id:`craftWoodenSword`,label:`Craft Wooden Sword`,verb:`crafting a wooden sword`,durationMs:17e3,blurb:`Harden and bind a wooden blade for controlled combat.`},{id:`craftWoodenTwoHandedSword`,label:`Craft Wooden 2H Sword`,verb:`crafting a wooden two-handed sword`,durationMs:2e4,blurb:`Shape a long wooden blade that favors power over speed.`},{id:`craftShortBow`,label:`Craft Short Bow`,verb:`crafting a short bow`,durationMs:2e4,blurb:`Bend wood and flax fiber into a simple ranged weapon.`},{id:`craftWoodenTotem`,label:`Craft Wooden Totem`,verb:`carving a wooden totem`,durationMs:19e3,blurb:`Carve a wooden focus for steadier primitive combat.`},{id:`chopTrees`,label:`Chop Trees`,verb:`chopping trees`,durationMs:18e3,blurb:`The first real push beyond loose branches.`},{id:`huntSmallAnimals`,label:`Hunt Small Animals`,verb:`hunting small animals`,durationMs:28e3,blurb:`Bring back whole rabbits or squirrels for later work.`},{id:`butcherFish`,label:`Butcher Fish`,verb:`butchering fish`,durationMs:15e3,blurb:`Clean one carried fish into matching filets at half weight.`},{id:`butcherRabbit`,label:`Butcher Rabbit`,verb:`butchering a rabbit`,durationMs:18e3,blurb:`Break down a rabbit into useful parts.`},{id:`butcherSquirrel`,label:`Butcher Squirrel`,verb:`butchering a squirrel`,durationMs:14e3,blurb:`Break down a squirrel into useful parts.`},{id:`cookRabbitMeat`,label:`Cook Rabbit Meat`,verb:`cooking rabbit meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`cookSquirrelMeat`,label:`Cook Squirrel Meat`,verb:`cooking squirrel meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`tanHide`,label:`Tan Hide`,verb:`working hide`,durationMs:36e3,blurb:`Scrape, stretch, wait, repeat.`},{id:`craftLeatherBackpack`,label:`Craft Leather Backpack`,verb:`crafting a leather backpack`,durationMs:15e3,blurb:`Knot a crude leather sling pouch with a drawstring.`},...t.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...s.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb}))];function y(e){return v.find(t=>t.id===e)}var b=[{id:`fighter`,label:`Fighter`,weaponLabel:`Sword`,role:`A steady front-line duelist.`,range:`melee`,maxHp:34,maxMana:10},{id:`warrior`,label:`Warrior`,weaponLabel:`2H Sword`,role:`A slower heavy striker.`,range:`melee`,maxHp:38,maxMana:8},{id:`bruiser`,label:`Bruiser`,weaponLabel:`Club`,role:`A rugged close-range brawler.`,range:`melee`,maxHp:36,maxMana:8},{id:`crusher`,label:`Crusher`,weaponLabel:`2H Club`,role:`A heavy impact fighter.`,range:`melee`,maxHp:40,maxMana:6},{id:`archer`,label:`Archer`,weaponLabel:`Short Bow`,role:`A ranged skirmisher.`,range:`ranged`,maxHp:28,maxMana:12},{id:`shaman`,label:`Shaman`,weaponLabel:`Totem`,role:`A focus user prepared for future support magic.`,range:`focus`,maxHp:30,maxMana:30},{id:`mage`,label:`Mage`,weaponLabel:`Wand`,role:`A focused caster placeholder for future wand combat.`,range:`focus`,maxHp:24,maxMana:36},{id:`caster`,label:`Caster`,weaponLabel:`Staff`,role:`A long-form spellcaster placeholder for future staff combat.`,range:`focus`,maxHp:26,maxMana:40},{id:`rogue`,label:`Rogue`,weaponLabel:`Dagger`,role:`A fast close-range striker.`,range:`melee`,maxHp:30,maxMana:14}],ee={woodenSword:`fighter`,woodenTwoHandedSword:`warrior`,woodenClub:`bruiser`,woodenTwoHandedClub:`crusher`,shortBow:`archer`,woodenTotem:`shaman`,stoneDagger:`rogue`,stoneSpear:`warrior`},te=[{id:`goblin`,label:`Goblin`,blurb:`A small melee raider that closes distance and swings at nearby party members.`,glyph:`G`,maxHp:16,maxMana:0,damage:2,attackRange:1,actEveryMs:2200}],ne=[{id:`ruins`,label:`The Ruins`,blurb:`Broken stone lanes where the first hostile creatures test the camp's fighters.`,gridWidth:7,gridHeight:5,enemyIds:[`goblin`]}],re=b.map(e=>e.id),ie=te.map(e=>e.id),ae=ne.map(e=>e.id);function oe(e){return b.find(t=>t.id===e)??b[0]}function se(e){return te.find(t=>t.id===e)??te[0]}function ce(e){return ne.find(t=>t.id===e)??ne[0]}var x=[{id:`stoneKnife`,label:`Stone Skinning Knife`,craftActionId:`craftStoneKnife`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A dedicated scraping edge for hide and bone recovery while butchering.`,maxDurability:18,roles:[`butchering`],roleTiers:{butchering:1},tier:`primitive`,quickCraft:!0},{id:`stoneAxe`,label:`Stone Axe`,craftActionId:`craftStoneAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Heavy enough to bite into small trees.`,maxDurability:12,roles:[`woodcutting`],roleTiers:{woodcutting:1},tier:`primitive`,quickCraft:!0},{id:`stonePickAxe`,label:`Stone Pick Axe`,craftActionId:`craftStonePickAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A pointed stone head for breaking stubborn ground.`,maxDurability:12,roles:[`mining`],roleTiers:{mining:1},tier:`primitive`,quickCraft:!0},{id:`stoneSpear`,label:`Stone Spear`,craftActionId:`craftStoneSpear`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A reach weapon for rabbits and squirrels.`,maxDurability:10,roles:[`hunting`],tier:`primitive`,weapon:{damage:2.4,speed:.9,hands:2,range:`melee`},quickCraft:!0},{id:`stoneDagger`,label:`Stone Dagger`,craftActionId:`craftStoneDagger`,recipe:{stick:1,stone:2,flaxFiber:1},blurb:`A compact combat blade separate from the skinning knife.`,maxDurability:12,roles:[`hunting`],tier:`primitive`,weapon:{damage:2.2,speed:1.2,hands:1,range:`melee`},quickCraft:!0},{id:`woodenClub`,label:`Wooden Club`,craftActionId:`craftWoodenClub`,recipe:{wood:2},blurb:`A shaped hardwood weapon with more heft than loose branches.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3,speed:.9,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedClub`,label:`Wooden 2H Club`,craftActionId:`craftWoodenTwoHandedClub`,recipe:{wood:4},blurb:`A heavy two-handed cudgel for decisive primitive strikes.`,maxDurability:24,roles:[`hunting`],tier:`primitive`,weapon:{damage:4,speed:.75,hands:2,range:`melee`},quickCraft:!0},{id:`woodenSword`,label:`Wooden Sword`,craftActionId:`craftWoodenSword`,recipe:{wood:2,flaxFiber:1},blurb:`A hardened wooden blade for controlled early combat.`,maxDurability:20,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.4,speed:1,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedSword`,label:`Wooden 2H Sword`,craftActionId:`craftWoodenTwoHandedSword`,recipe:{wood:4,flaxFiber:2},blurb:`A long wooden blade that trades speed for stronger blows.`,maxDurability:26,roles:[`hunting`],tier:`primitive`,weapon:{damage:4.3,speed:.85,hands:2,range:`melee`},quickCraft:!0},{id:`shortBow`,label:`Short Bow`,craftActionId:`craftShortBow`,recipe:{wood:2,flaxFiber:3},blurb:`A simple bow that brings safer range to small-game hunts.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.8,speed:1.1,hands:2,range:`ranged`},quickCraft:!0},{id:`woodenTotem`,label:`Wooden Totem`,craftActionId:`craftWoodenTotem`,recipe:{wood:3,flaxFiber:2},blurb:`A carved focus that steadies the hand during primitive combat.`,maxDurability:22,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.2,speed:.8,hands:1,range:`focus`},quickCraft:!0},{id:`copperPickaxe`,label:`Copper Pickaxe`,recipe:{copperBar:3,stick:1,flaxFiber:1},blurb:`A softer metal pick with better balance than stone.`,maxDurability:24,roles:[`mining`],roleTiers:{mining:2},tier:`copper`},{id:`copperHatchet`,label:`Copper Hatchet`,recipe:{copperBar:2,stick:1,flaxFiber:1},blurb:`A compact copper chopping head lashed to a handle.`,maxDurability:22,roles:[`woodcutting`],roleTiers:{woodcutting:2},tier:`copper`},{id:`copperKnife`,label:`Copper Knife`,recipe:{copperBar:1,stick:1,flaxFiber:1},blurb:`A sharper, longer-lasting knife for camp work.`,maxDurability:30,roles:[`butchering`],roleTiers:{butchering:2},tier:`copper`},{id:`bronzePickaxe`,label:`Bronze Pickaxe`,recipe:{bronzeBar:3,stick:1,flaxFiber:1},blurb:`A sturdy bronze mining tool with a harder edge.`,maxDurability:42,roles:[`mining`],roleTiers:{mining:3},tier:`bronze`},{id:`bronzeHatchet`,label:`Bronze Hatchet`,recipe:{bronzeBar:2,stick:1,flaxFiber:1},blurb:`A bronze chopping tool that holds its bite.`,maxDurability:38,roles:[`woodcutting`],roleTiers:{woodcutting:3},tier:`bronze`},{id:`bronzeKnife`,label:`Bronze Knife`,recipe:{bronzeBar:1,stick:1,flaxFiber:1},blurb:`A reliable bronze edge for finer butchering.`,maxDurability:48,roles:[`butchering`],roleTiers:{butchering:3},tier:`bronze`},{id:`fishingPole`,label:`Fishing Pole`,craftActionId:`craftFishingPole`,recipe:{stick:1,flaxFiber:1},blurb:`A simple line and hook for working the river.`,maxDurability:16,roles:[`fishing`],roleTiers:{fishing:1},tier:`primitive`,quickCraft:!0},{id:`basket`,label:`Basket`,craftActionId:`craftBasket`,recipe:{stick:1,flaxFiber:3},blurb:`A one-hand woven carrier for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`,quickCraft:!0},{id:`leatherBackpack`,label:`Leather Backpack`,recipe:{leather:10},blurb:`A crude sling pouch for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`}],le=x.filter(e=>!!(e.craftActionId&&e.quickCraft)),ue=[{id:`campfire`,label:`Campfire`,recipe:{stick:8,stone:5},blurb:`A fixed fire ring for cooking meat.`},{id:`tanningRack`,label:`Tanning Rack`,recipe:{stick:6,wood:4,stone:2},blurb:`A rough frame for turning hide into leather.`},{id:`hideTent`,label:`Hide Tent`,recipe:{wood:5,hide:10},blurb:`A hide shelter for holding warmth at camp.`},{id:`crudeStoneFurnace`,label:`Crude Stone Furnace`,recipe:{stone:16,stick:6,wood:4},blurb:`A low stone furnace hot enough for first smelting.`},{id:`primitiveSpinningWheel`,label:`Primitive Spinning Wheel`,recipe:{wood:8,stick:6,linenThread:2},blurb:`A simple frame, spindle, and wheel for turning flax fiber into thread faster.`},{id:`primitiveLoom`,label:`Primitive Loom`,recipe:{wood:10,stick:8,linenThread:4},blurb:`A wooden frame for stretching warp threads and weaving linen cloth.`}],de=[{id:`stick`,label:`Stick`,group:`resources`,blurb:`Dry kindling and crude handles.`},{id:`stone`,label:`Stone`,group:`resources`,blurb:`Weight, edge, and spark.`},{id:`flaxPlant`,label:`Flax Plant`,group:`resources`,blurb:`Fresh flax stalks that need retting before useful fiber can be combed free.`},{id:`rettedFlax`,label:`Retted Flax`,group:`resources`,blurb:`Soaked and loosened flax stems ready for breaking and combing.`},{id:`flaxFiber`,label:`Flax Fiber`,group:`resources`,blurb:`Pale plant fiber for future cordage and cloth.`},{id:`linenThread`,label:`Linen Thread`,group:`crafted`,blurb:`Twisted flax fiber ready for weaving, stitching, and more precise craft.`},{id:`linenCloth`,label:`Linen Cloth`,group:`crafted`,blurb:`Woven linen panels ready for sewing into useful camp goods.`},{id:`mushroom`,label:`Mushroom`,group:`resources`,blurb:`Soft meadow caps gathered for later meals.`},{id:`berry`,label:`Berry`,group:`resources`,blurb:`Bright handfuls from low meadow brambles.`},{id:`wood`,label:`Wood`,group:`resources`,blurb:`Usable lengths from felled trees.`},{id:`coal`,label:`Coal`,group:`resources`,blurb:`Dark fuel chipped from the mine.`},{id:`copper`,label:`Copper`,group:`resources`,blurb:`Soft reddish ore for future metalwork.`},{id:`tin`,label:`Tin`,group:`resources`,blurb:`Pale ore that will matter once bronze is possible.`},{id:`copperBar`,label:`Copper Bar`,group:`crafted`,blurb:`A worked bar ready for first metal tools.`},{id:`bronzeBar`,label:`Bronze Bar`,group:`crafted`,blurb:`A harder alloy bar for sturdier tools.`},{id:`copperNeedle`,label:`Copper Needle`,group:`crafted`,blurb:`A simple metal needle for first linen sewing.`},{id:`bronzeNeedle`,label:`Bronze Needle`,group:`crafted`,blurb:`A stronger needle for steady linen sewing work.`},{id:`clothWrap`,label:`Cloth Wrap`,group:`crafted`,blurb:`A simple folded linen wrap for bundling small supplies.`},{id:`linenBandage`,label:`Linen Bandage`,group:`crafted`,blurb:`Clean linen strips prepared for future medical use.`},{id:`simplePouch`,label:`Simple Pouch`,group:`crafted`,blurb:`A small sewn linen pouch for organizing camp goods.`},{id:`linenHood`,label:`Linen Hood`,group:`crafted`,blurb:`A simple sewn hood for future clothing systems.`},{id:`linenShirt`,label:`Linen Shirt`,group:`crafted`,blurb:`A plain linen shirt, ready for later equipment and quality systems.`},{id:`pot`,label:`Pot`,group:`crafted`,blurb:`A simple worked vessel for holding heat and liquid.`},{id:`ladle`,label:`Ladle`,group:`crafted`,blurb:`A small handled tool for moving hot metal safely.`},{id:`minnow`,label:`Minnow`,group:`fish`,blurb:`Tiny river fish, quick to smoke or stew.`},{id:`stoneLoach`,label:`Stone Loach`,group:`fish`,blurb:`Bottom-feeding fish from cold stones.`},{id:`mudskipper`,label:`Mudskipper`,group:`fish`,blurb:`A stubborn shore fish pulled from muddy shallows.`},{id:`brookStickleback`,label:`Brook Stickleback`,group:`fish`,blurb:`Small, sharp-backed fish from fast water.`},{id:`pebblePerch`,label:`Pebble Perch`,group:`fish`,blurb:`A broad little perch hiding under river stones.`},{id:`minnowFilet`,label:`Minnow Filet`,group:`fish`,blurb:`Cleaned minnow meat, lighter after butchering.`},{id:`stoneLoachFilet`,label:`Stone Loach Filet`,group:`fish`,blurb:`Cleaned stone loach meat, lighter after butchering.`},{id:`mudskipperFilet`,label:`Mudskipper Filet`,group:`fish`,blurb:`Cleaned mudskipper meat, lighter after butchering.`},{id:`brookSticklebackFilet`,label:`Brook Stickleback Filet`,group:`fish`,blurb:`Cleaned brook stickleback meat, lighter after butchering.`},{id:`pebblePerchFilet`,label:`Pebble Perch Filet`,group:`fish`,blurb:`Cleaned pebble perch meat, lighter after butchering.`},{id:`rabbit`,label:`Rabbit`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`squirrel`,label:`Squirrel`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`rabbitMeat`,label:`Rabbit Meat`,group:`hunted`,blurb:`Fresh rabbit meat that wants fire soon.`},{id:`squirrelMeat`,label:`Squirrel Meat`,group:`hunted`,blurb:`Fresh squirrel meat that wants fire soon.`},{id:`cookedRabbitMeat`,label:`Cooked Rabbit Meat`,group:`crafted`,blurb:`A small cooked rabbit ration.`},{id:`cookedSquirrelMeat`,label:`Cooked Squirrel Meat`,group:`crafted`,blurb:`A small cooked squirrel ration.`},{id:`hide`,label:`Hide`,group:`resources`,blurb:`Rough animal hide, ready for scraping.`},{id:`bone`,label:`Bone`,group:`resources`,blurb:`Hard scraps for later craft.`},{id:`leather`,label:`Leather`,group:`crafted`,blurb:`Worked hide for future bags and armor.`}],S=de.map(e=>e.id),fe=[`stick`,`stone`],pe=[`minnow`,`stoneLoach`,`mudskipper`,`brookStickleback`,`pebblePerch`],me=[`minnowFilet`,`stoneLoachFilet`,`mudskipperFilet`,`brookSticklebackFilet`,`pebblePerchFilet`],he={minnow:`minnowFilet`,stoneLoach:`stoneLoachFilet`,mudskipper:`mudskipperFilet`,brookStickleback:`brookSticklebackFilet`,pebblePerch:`pebblePerchFilet`},ge=[...pe,`rabbit`,`squirrel`],_e=[...pe,...me,`rabbit`,`squirrel`];function ve(e){return _e.includes(e)}function C(e){return ge.includes(e)}function w(e,t){let n=Math.max(0,Number.isFinite(t)?t:0);return ve(e)?Math.round(n*10)/10:Math.floor(n)}function T(e,t){let n=w(e,t);return ve(e)?ye(n):`${n}`}function E(e){return de.find(t=>t.id===e)?.label??e}function ye(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}var be=1e3,xe=[{id:`foraging`,label:`Foraging`,description:`Gathering loose food and camp materials.`},{id:`mining`,label:`Mining`,description:`Breaking stone for ore and fuel.`},{id:`fishing`,label:`Fishing`,description:`Catching river fish.`},{id:`woodcutting`,label:`Woodcutting`,description:`Chopping trees into useful wood.`},{id:`hunting`,label:`Hunting`,description:`Tracking and taking small animals.`},{id:`crafting`,label:`Crafting`,description:`Making tools and useful camp goods.`},{id:`smithing`,label:`Smithing`,description:`Smelting ore and shaping early metalwork.`},{id:`textiles`,label:`Tailoring`,description:`Retting flax, spinning thread, weaving cloth, and sewing goods.`},{id:`butchering`,label:`Butchering`,description:`Breaking animals and fish into usable parts.`},{id:`cooking`,label:`Cooking`,description:`Preparing food over fire.`},{id:`leatherworking`,label:`Leatherworking`,description:`Turning hide into leather.`},{id:`construction`,label:`Construction`,description:`Building and improving camp structures.`},{id:`agility`,label:`Agility`,description:`Moving between camp and wilderness locations.`}],Se=xe.map(e=>e.id),Ce={gatherSticks:{skillId:`foraging`,xp:70},gatherStones:{skillId:`foraging`,xp:85},gatherFlaxPlants:{skillId:`foraging`,xp:110},gatherFlaxFibers:{skillId:`foraging`,xp:100},gatherMushrooms:{skillId:`foraging`,xp:100},gatherBerries:{skillId:`foraging`,xp:100},mineCoal:{skillId:`mining`,xp:360},mineCopper:{skillId:`mining`,xp:360},mineTin:{skillId:`mining`,xp:360},fishRiver:{skillId:`fishing`,xp:180},craftLowestTool:{skillId:`crafting`,xp:150},craftBasket:{skillId:`crafting`,xp:150},craftFishingPole:{skillId:`crafting`,xp:150},craftStoneKnife:{skillId:`crafting`,xp:150},craftStoneDagger:{skillId:`crafting`,xp:160},craftStoneAxe:{skillId:`crafting`,xp:170},craftStonePickAxe:{skillId:`crafting`,xp:180},craftStoneSpear:{skillId:`crafting`,xp:180},craftWoodenSword:{skillId:`crafting`,xp:200},craftWoodenTwoHandedSword:{skillId:`crafting`,xp:230},craftWoodenClub:{skillId:`crafting`,xp:180},craftWoodenTwoHandedClub:{skillId:`crafting`,xp:210},craftShortBow:{skillId:`crafting`,xp:220},craftWoodenTotem:{skillId:`crafting`,xp:220},chopTrees:{skillId:`woodcutting`,xp:220},huntSmallAnimals:{skillId:`hunting`,xp:340},butcherFish:{skillId:`butchering`,xp:150},butcherRabbit:{skillId:`butchering`,xp:220},butcherSquirrel:{skillId:`butchering`,xp:170},cookRabbitMeat:{skillId:`cooking`,xp:160},cookSquirrelMeat:{skillId:`cooking`,xp:160},tanHide:{skillId:`leatherworking`,xp:430},craftLeatherBackpack:{skillId:`leatherworking`,xp:900},retFlax:{skillId:`textiles`,xp:420},separateFlaxFiber:{skillId:`textiles`,xp:260},handSpinLinenThread:{skillId:`textiles`,xp:190},spinLinenThread:{skillId:`textiles`,xp:420},weaveLinenCloth:{skillId:`textiles`,xp:520},craftCopperNeedle:{skillId:`smithing`,xp:120},craftBronzeNeedle:{skillId:`smithing`,xp:150},sewClothWrap:{skillId:`textiles`,xp:180},sewLinenBandage:{skillId:`textiles`,xp:150},sewSimplePouch:{skillId:`textiles`,xp:260},sewLinenHood:{skillId:`textiles`,xp:300},sewLinenShirt:{skillId:`textiles`,xp:420},smeltCopperBar:{skillId:`smithing`,xp:260},smeltBronzeBar:{skillId:`smithing`,xp:420},craftPot:{skillId:`smithing`,xp:220},craftLadle:{skillId:`smithing`,xp:180},craftCopperPickaxe:{skillId:`smithing`,xp:320},craftCopperHatchet:{skillId:`smithing`,xp:280},craftCopperKnife:{skillId:`smithing`,xp:220},craftBronzePickaxe:{skillId:`smithing`,xp:500},craftBronzeHatchet:{skillId:`smithing`,xp:440},craftBronzeKnife:{skillId:`smithing`,xp:340}},we={campfire:80,tanningRack:320,hideTent:450,crudeStoneFurnace:520,primitiveSpinningWheel:360,primitiveLoom:480};function Te(){return Object.fromEntries(Se.map(e=>[e,Be()]))}function Ee(e){let t=Te();if(!e||typeof e!=`object`)return t;let n=e;for(let e of Se)t[e]=Ve(n[e]);return t}function De(e){return Se.some(t=>t===e)}function Oe(e){return xe.find(t=>t.id===e)??xe[0]}function D(e){let t=Ke(e,1,be);return 50*(t-1)*t*(2*t-1)/6}function ke(e){return We(e.prestige)}function Ae(e){let t=ke(e),n=e.level>=t,r=D(e.level),i=e.level>=1e3?r:D(e.level+1),a=Math.max(0,i-r),o=n?a:Math.max(0,Math.min(e.xp-r,a));return{cap:t,currentLevelXp:r,nextLevelXp:i,xpIntoLevel:o,xpForLevel:a,ratio:a<=0?1:o/a,atCap:n,canPrestige:je(e)}}function je(e){let t=ke(e);return t<1e3&&e.level>=t}function Me(e,t,n=Date.now()){Ge(e);let r=e.skills[t];return je(r)?(r.prestige=Ke(r.prestige+1,0,9),r.level=1,r.xp=0,e.updatedAt=n,e.lastSimulatedAt=n,!0):!1}function Ne(e,t,n=Date.now()){let r=Ce[t];Ie(e,r.skillId,r.xp,n)}function Pe(e,t,n=Date.now()){Ie(e,`construction`,we[t],n)}function Fe(e,t,n=Date.now()){t<=0||Ie(e,`agility`,Math.max(1,Math.round(t/1e3*2)),n)}function Ie(e,t,n,r=Date.now()){let i=Math.max(0,Math.floor(n));if(i<=0)return;Ge(e);let a=e.skills[t],o=ke(a);a.totalXp+=i,a.xp=Math.min(D(o),a.xp+i),a.level=Ue(a.xp,o),e.updatedAt=r,e.lastSimulatedAt=r}function Le(e){return Ce[e].skillId}function Re(e){return Ce[e].xp}function ze(e){return we[e]}function O(e){let t=Math.max(0,e);return t>=1e9?`${Je(t/1e9)}B`:t>=1e6?`${Je(t/1e6)}M`:t>=1e3?`${Je(t/1e3)}K`:Math.round(t).toLocaleString(`en-US`)}function Be(){return{level:1,xp:0,totalXp:0,prestige:0,bonuses:[]}}function Ve(e){if(!e||typeof e!=`object`)return Be();let t=Ke(e.prestige,0,9),n=We(t),r=qe(e.xp,0,D(n)),i=Math.max(r,Math.max(0,Math.floor(Number(e.totalXp??0))));return{level:Ue(r,n),xp:r,totalXp:i,prestige:t,bonuses:He(e.bonuses)}}function He(e){return Array.isArray(e)?e.filter(e=>{if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.id==`string`&&typeof t.label==`string`}):[]}function Ue(e,t){let n=1;for(;n<t&&e>=D(n+1);)n+=1;return n}function We(e){let t=Ke(e,0,9);return Math.min(be,(t+1)*100)}function Ge(e){e.skills=Ee(e.skills)}function Ke(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function qe(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Je(e){return e.toFixed(2).replace(/\.?0+$/,``)}function Ye(){return Object.fromEntries(S.map(e=>[e,0]))}function k(){return Object.fromEntries(S.map(e=>[e,0]))}function Xe(){return Object.fromEntries(x.map(e=>[e.id,{owned:!1,durability:0,quantity:0}]))}function Ze(){return{campfire:0,tanningRack:0,hideTent:0,crudeStoneFurnace:0,primitiveSpinningWheel:0,primitiveLoom:0}}function Qe(e=Date.now()){return{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:e,updatedAt:e}}function $e(){return{hp:34,maxHp:34,mana:10,maxMana:10}}function et(){return{level:1,xp:0,totalXp:0}}function tt(){return Object.fromEntries(re.map(e=>[e,et()]))}function nt(){return{selectedLocationId:`ruins`,encounter:null,log:[]}}function rt(e=Date.now()){return{version:9,createdAt:e,updatedAt:e,lastSimulatedAt:e,selectedCharacterId:`cameron`,characters:[{id:`cameron`,name:`Cameron`,epithet:`Alone at the treeline`,condition:`resting`,locationId:`camp`,combat:$e(),classProgress:tt(),inventory:Ye(),resourceCounts:k(),actionLoopId:`loop-forage-sticks`}],inventory:Ye(),characterInventory:Ye(),resourceCounts:k(),characterResourceCounts:k(),tools:Xe(),buildings:{campfire:!1,tanningRack:!1,hideTent:!1,crudeStoneFurnace:!1,primitiveSpinningWheel:!1,primitiveLoom:!1},buildingCounts:Ze(),campfireExpiresAt:null,seenResources:[...fe],skills:Te(),combat:nt(),actionLoops:[Qe(e)],currentActions:[],currentAction:null,log:[{id:`${e}-start`,time:e,text:`Cameron wakes beneath cold branches with empty hands.`,tone:`muted`,scope:`camp`}]}}var it=48,at=`camp`,ot=[`action:`,`craft:`,`deposit:`],st=[`Cameron stops `,`Cameron lacks `,`Cameron crafted `,`Cameron butchered `,`Cameron returned `,`The saved trail grows quiet`];function A(e,t,n=`muted`,r=Date.now(),i=at){e.log.unshift({id:`${r}-${Math.random().toString(36).slice(2)}`,time:r,text:t,tone:n,scope:i}),e.log=e.log.slice(0,it)}function ct(e,t){let n=t.now??Date.now(),r=t.scope??at,i=e.log.findIndex(e=>e.aggregateKey===t.aggregateKey&&lt(e)===r),a=ut(t.resources);if(i>=0){let[o]=e.log.splice(i,1);o.time=n,o.text=t.text,o.tone=t.tone??o.tone,o.scope=r,Object.keys(a).length>0?(o.aggregateItems=dt(ft(o),a),delete o.aggregateTotal,delete o.aggregateUnit):(o.aggregateTotal=(o.aggregateTotal??0)+(t.amount??0),o.aggregateUnit=t.unit),e.log.unshift(o);return}e.log.unshift({id:`${n}-${Math.random().toString(36).slice(2)}`,time:n,text:t.text,tone:t.tone??`muted`,scope:r,aggregateKey:t.aggregateKey,...Object.keys(a).length>0?{aggregateItems:a}:{aggregateTotal:t.amount??0,aggregateUnit:t.unit}}),e.log=e.log.slice(0,it)}function lt(e){return e.scope?e.scope:e.aggregateKey&&ot.some(t=>e.aggregateKey?.startsWith(t))||st.some(t=>e.text.startsWith(t))||/\bbreaks(?:\.|;)/.test(e.text)?`character`:at}function ut(e){let t={};for(let[n,r]of Object.entries(e??{})){let e=n,i=w(e,r??0);i>0&&(t[e]=i)}return t}function dt(e,t){let n={...e??{}};for(let[e,r]of Object.entries(t)){let t=e;n[t]=w(t,(n[t]??0)+(r??0))}return n}function ft(e){if(e.aggregateItems)return e.aggregateItems;let t=pt(e.aggregateUnit);if(!(!t||!e.aggregateTotal))return{[t]:e.aggregateTotal}}function pt(e){switch(e?.toLowerCase()){case`sticks`:return`stick`;case`stones`:return`stone`;default:return}}var mt=`rowan`;function ht(e,t){return Math.max(0,Math.floor(e.buildingCounts?.[t]??+!!e.buildings[t]))}function gt(e,t){let n=ht(e,t)+1;return e.buildingCounts[t]=n,n}function _t(e,t,n){e.buildingCounts[t]=Math.max(0,Math.floor(n))}function vt(e){return e.characters.length}function yt(e){return ht(e,`hideTent`)}function bt(e,t=Date.now()){return yt(e)<2||e.characters.some(e=>e.id===mt)?!1:(e.characters.push({id:mt,name:`Rowan`,epithet:`Drawn to the second shelter`,condition:`resting`,locationId:`camp`,combat:$e(),classProgress:tt(),inventory:Ye(),resourceCounts:k()}),A(e,`Rowan joins the camp after the second hide tent goes up.`,`craft`,t),!0)}function xt(e){for(let t of S)e.inventory[t]=w(t,e.inventory[t]??0),e.characterInventory[t]=w(t,e.characterInventory[t]??0),e.resourceCounts[t]=Wt(t,e.inventory[t],e.resourceCounts[t]??0),e.characterResourceCounts[t]=Wt(t,e.characterInventory[t],e.characterResourceCounts[t]??0);for(let t of e.characters)t.inventory=Ht(t.inventory),t.resourceCounts=Ut(t.inventory,t.resourceCounts);kt(e)}function St(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=(n??0))}function Ct(e,t){for(let[n,r]of Object.entries(t)){let t=n;e.inventory[t]=w(t,e.inventory[t]-(r??0))}}function wt(e,t,n={}){for(let[r,i]of Object.entries(t)){let t=r,a=i??0;a<=0||(e.inventory[t]=w(t,e.inventory[t]+a),Gt(e.resourceCounts,t,n[t]??0),e.seenResources.includes(t)||e.seenResources.push(t))}}function Tt(e){switch(e){case`wood`:return 2;case`stick`:case`stone`:case`flaxPlant`:case`rettedFlax`:case`flaxFiber`:return 1;case`linenThread`:case`linenCloth`:case`copperNeedle`:case`bronzeNeedle`:return .1;case`mushroom`:case`berry`:return .1;default:return 1}}function Et(e){let t=S.reduce((t,n)=>t+(e[n]??0)*Tt(n),0);return Math.round(t*10)/10}function Dt(e,t=e.selectedCharacterId){let n=zt(e,t);return n.inventory||=Bt(),n.inventory}function Ot(e,t=e.selectedCharacterId){let n=zt(e,t);return n.resourceCounts||=Vt(),n.resourceCounts}function kt(e){let t=Dt(e),n=Ot(e);for(let r of S)e.characterInventory[r]=t[r]??0,e.characterResourceCounts[r]=n[r]??0}function At(e,t=e.selectedCharacterId){return Et(Dt(e,t))}function jt(e,t=e.selectedCharacterId){let n=e.tools.basket,r=e.tools.leatherBackpack;return 10+(n?.owned&&n.durability>0?5:0)+(r?.owned&&r.durability>0?15:0)}function Mt(e,t,n={},r=e.selectedCharacterId){let i={},a=Dt(e,r),o=Ot(e,r),s=At(e,r),c=jt(e,r);for(let r of S){let l=w(r,t[r]??0);if(l<=0)continue;let u=Tt(r),d=c-s,f=u>0?w(r,ve(r)?l*u<=d?l:0:Math.min(l,Math.floor(d/u))):l;f<=0||(i[r]=f,a[r]=w(r,a[r]+f),Gt(o,r,qt(r,l,f,n[r])),s=Math.round((s+f*u)*10)/10,e.seenResources.includes(r)||e.seenResources.push(r))}return kt(e),i}function Nt(e,t=e.selectedCharacterId){let n={},r=Dt(e,t),i=Ot(e,t);for(let t of S){let a=r[t];a<=0||(n[t]=a,e.inventory[t]=w(t,e.inventory[t]+a),Kt(i,e.resourceCounts,t),r[t]=0,e.seenResources.includes(t)||e.seenResources.push(t))}return kt(e),n}function Pt(e,t,n=`camp`,r=e.selectedCharacterId){let i=Rt(e,n,r);return C(t)?Math.max(0,Math.floor(i[t]??0)):Math.floor(Lt(e,n,r)[t]??0)}function Ft(e,t,n=`camp`,r=e.selectedCharacterId){return Pt(e,t,n,r)>0}function It(e,t,n=`camp`,r=e.selectedCharacterId){if(!C(t))return 0;let i=Lt(e,n,r),a=Rt(e,n,r),o=Pt(e,t,n,r),s=w(t,i[t]??0);if(o<=0||s<=0)return i[t]=0,a[t]=0,kt(e),0;let c=w(t,o<=1?s:s/o);return a[t]=Math.max(0,o-1),i[t]=a[t]<=0?0:w(t,s-c),kt(e),c}function j(e){return Object.entries(e).map(([e,t])=>{let n=e;return`${T(n,t??0)}${ve(n)?` lb`:``} ${E(n)}`}).join(`, `)}function Lt(e,t,n){return t===`character`?Dt(e,n):e.inventory}function Rt(e,t,n){return t===`character`?Ot(e,n):e.resourceCounts}function zt(e,t){return e.characters.find(e=>e.id===t)??e.characters[0]}function Bt(){return Object.fromEntries(S.map(e=>[e,0]))}function Vt(){return Object.fromEntries(S.map(e=>[e,0]))}function Ht(e){let t=Bt();for(let n of S)t[n]=w(n,e?.[n]??0);return t}function Ut(e,t){let n=Vt();for(let r of S)n[r]=Wt(r,e[r],t?.[r]??0);return n}function Wt(e,t,n){return!C(e)||t<=0?0:Math.max(1,Math.floor(Math.max(0,Number.isFinite(n)?n:0)))}function Gt(e,t,n){!C(t)||n<=0||(e[t]=Math.floor((e[t]??0)+n))}function Kt(e,t,n){if(!C(n))return;let r=Math.max(0,Math.floor(e[n]??0));r<=0||(t[n]=Math.floor((t[n]??0)+r),e[n]=0)}function qt(e,t,n,r=0){return!C(e)||n<=0||n<t?0:Math.max(0,Math.floor(r))}var Jt=`idle-town:first-survival-slice:v1`,Yt=9,Xt=900*1e3,M={minnow:1,stoneLoach:2,mudskipper:3,brookStickleback:1.25,pebblePerch:4.75,rabbit:3.5,squirrel:1.25};function Zt(){let e=window.localStorage.getItem(Jt);if(!e)return rt();try{let t=JSON.parse(e),n=rt(),r={...n.buildings,...t.buildings??{}},i=typeof t.selectedCharacterId==`string`?t.selectedCharacterId:n.selectedCharacterId,a=$t(t.characters,n.characters,t.characterInventory,t.characterResourceCounts,i),o=fn(t.currentActions,t.currentAction),s=cn(t.actionLoops,t.currentAction,n.actionLoops),c={...n,...t,selectedCharacterId:i,inventory:{...Ye(),...t.inventory??{}},characterInventory:{...Ye(),...t.characterInventory??{}},resourceCounts:{...k(),...t.resourceCounts??{}},characterResourceCounts:{...k(),...t.characterResourceCounts??{}},tools:kn(t.tools),buildings:r,buildingCounts:Qt(t.buildingCounts,r,n.buildingCounts),campfireExpiresAt:typeof t.campfireExpiresAt==`number`?t.campfireExpiresAt:n.campfireExpiresAt,characters:a,seenResources:t.seenResources?.length?t.seenResources:n.seenResources,skills:Ee(t.skills),combat:rn(t.combat,n.combat,a),actionLoops:s,currentActions:o,currentAction:o.find(e=>e.characterId===i)??o[0]??null,log:t.log?.length?t.log:n.log,version:Yt},l=typeof t.version==`number`?t.version:1;return wn(c,l),Tn(c,l),Cn(c,l),bt(c),xt(c),c}catch{return rt()}}function Qt(e,t,n){let r={...Ze(),...n};if(e&&typeof e==`object`){let t=e;for(let e of Object.keys(r))r[e]=Math.max(0,Math.floor(Number(t[e]??r[e])))}for(let e of Object.keys(t))t[e]&&r[e]<=0&&(r[e]=1);return r}function $t(e,t,n,r,i){return!Array.isArray(e)||!e.length?t:e.map((e,a)=>{let o=t[a]??t[0];if(!e||typeof e!=`object`)return o;let s=e,c=s.id===i&&!s.inventory&&n&&typeof n==`object`,l=Dn(c?n:s.inventory),u=On(l,c?r:s.resourceCounts);return{...o,...s,locationId:gn(s.locationId)?s.locationId:o.locationId,combat:en(s.combat,o.combat),classProgress:tn(s.classProgress),inventory:l,resourceCounts:u,actionLoopId:typeof s.actionLoopId==`string`?s.actionLoopId:o.actionLoopId}})}function en(e,t=$e()){if(!e||typeof e!=`object`)return t;let n=e,r=N(n.maxHp,1,999),i=N(n.maxMana,0,999);return{maxHp:r,hp:N(n.hp,0,r),maxMana:i,mana:N(n.mana,0,i)}}function tn(e){let t=tt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of re)t[e]=nn(n[e]);return t}function nn(e){if(!e||typeof e!=`object`)return{level:1,xp:0,totalXp:0};let t=N(e.xp,0,2**53-1);return{level:N(e.level,1,1e3),xp:t,totalXp:Math.max(t,N(e.totalXp,0,2**53-1))}}function rn(e,t=nt(),n){if(!e||typeof e!=`object`)return t;let r=e;return{selectedLocationId:vn(r.selectedLocationId)?r.selectedLocationId:t.selectedLocationId,encounter:an(r.encounter,n),log:sn(r.log)}}function an(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!vn(n.locationId)||typeof n.id!=`string`)return null;let r=Array.isArray(n.units)?n.units.map(e=>on(e,t)).filter(e=>!!e):[];return{id:n.id,locationId:n.locationId,startedAt:N(n.startedAt,0,2**53-1),updatedAt:N(n.updatedAt,0,2**53-1),wave:N(n.wave,1,999),defeatedEnemies:N(n.defeatedEnemies,0,2**53-1),units:r,message:typeof n.message==`string`?n.message:``}}function on(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!xn(n.kind)||typeof n.id!=`string`||typeof n.name!=`string`||n.kind===`party`&&!t.some(e=>e.id===n.characterId)||n.kind===`enemy`&&!yn(n.enemyId))return null;let r=N(n.maxHp,1,999),i=N(n.maxMana,0,999);return{id:n.id,kind:n.kind,name:n.name,hp:N(n.hp,0,r),maxHp:r,mana:N(n.mana,0,i),maxMana:i,x:N(n.x,0,99),y:N(n.y,0,99),damage:N(n.damage,0,999),attackRange:N(n.attackRange,1,99),actEveryMs:N(n.actEveryMs,500,6e4),nextActAt:N(n.nextActAt,0,2**53-1),characterId:typeof n.characterId==`string`?n.characterId:void 0,enemyId:yn(n.enemyId)?n.enemyId:void 0,classId:bn(n.classId)?n.classId:void 0,weaponId:n.weaponId}}function sn(e){return Array.isArray(e)?e.filter(e=>!!(e&&typeof e==`object`)).map((e,t)=>({id:typeof e.id==`string`?e.id:`combat-log-${t+1}`,time:N(e.time,0,2**53-1),text:typeof e.text==`string`?e.text:``,tone:Sn(e.tone)?e.tone:`muted`})).filter(e=>e.text).slice(0,20):[]}function cn(e,t,n){if(Array.isArray(e)){let t=e.map((e,t)=>ln(e,t)).filter(e=>!!e);if(t.length)return t}let r=un(t);return r?[r]:n}function ln(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=Array.isArray(n.actionIds)?n.actionIds.filter(e=>mn(e)):[];return r.length?{id:typeof n.id==`string`&&n.id?n.id:`loop-${t+1}`,name:typeof n.name==`string`&&n.name?n.name:`Loop ${t+1}`,actionIds:r,locationIds:dn(r,n.locationIds),createdAt:typeof n.createdAt==`number`?n.createdAt:Date.now(),updatedAt:typeof n.updatedAt==`number`?n.updatedAt:Date.now()}:null}function un(e){if(!e||typeof e!=`object`)return null;let t=e,n=Array.isArray(t.loopActionIds)?t.loopActionIds.filter(e=>mn(e)):mn(t.actionId)?[t.actionId]:[];if(!n.length)return null;let r=Date.now();return{id:`loop-saved-work`,name:`Saved Work Loop`,actionIds:n,locationIds:dn(n,t.loopLocationIds),createdAt:r,updatedAt:r}}function dn(e,t){let n=Array.isArray(t)?t:[];return e.map((e,t)=>{let r=n[t];return _n(r)?r:null})}function fn(e,t){return(Array.isArray(e)?e:t?[t]:[]).filter(e=>pn(e))}function pn(e){if(!e||typeof e!=`object`)return!1;let t=e;return mn(t.actionId)&&typeof t.characterId==`string`&&hn(t.phase)&&typeof t.startedAt==`number`&&typeof t.endsAt==`number`}function mn(e){return typeof e==`string`&&v.some(t=>t.id===e)}function hn(e){return e===`travelingTo`||e===`working`||e===`followUp`||e===`travelingBack`}function gn(e){return e===`camp`||e===`meadow`||e===`river`||e===`forest`||e===`mine`}function _n(e){return e===`meadow`||e===`river`||e===`forest`||e===`mine`}function vn(e){return typeof e==`string`&&ae.some(t=>t===e)}function yn(e){return typeof e==`string`&&ie.some(t=>t===e)}function bn(e){return typeof e==`string`&&re.some(t=>t===e)}function xn(e){return e===`party`||e===`enemy`}function Sn(e){return e===`muted`||e===`gain`||e===`warning`}function Cn(e,t){let n=Date.now();if(!e.buildings.campfire){e.campfireExpiresAt=null;return}t<4&&!e.campfireExpiresAt&&(e.campfireExpiresAt=n+Xt),(typeof e.campfireExpiresAt!=`number`||e.campfireExpiresAt<=n)&&(e.buildings.campfire=!1,e.campfireExpiresAt=null)}function wn(e,t){if(!(t>=2)){e.inventory.rabbit*=M.rabbit??1,e.characterInventory.rabbit*=M.rabbit??1,e.inventory.squirrel*=M.squirrel??1,e.characterInventory.squirrel*=M.squirrel??1;for(let t of e.characters)t.inventory.rabbit*=M.rabbit??1,t.inventory.squirrel*=M.squirrel??1}}function Tn(e,t){if(!(t>=Yt))for(let t of ge){e.resourceCounts[t]=En(t,e.inventory[t]),e.characterResourceCounts[t]=En(t,e.characterInventory[t]);for(let n of e.characters)n.resourceCounts[t]=En(t,n.inventory[t])}}function En(e,t){if(t<=0)return 0;let n=M[e]??1;return Math.max(1,Math.round(t/n))}function Dn(e){let t=Ye();if(!e||typeof e!=`object`)return t;let n=e;for(let e of Object.keys(t))t[e]=Number(n[e]??0);return t}function On(e,t){let n=k();if(t&&typeof t==`object`){let e=t;for(let t of Object.keys(n))n[t]=Math.max(0,Math.floor(Number(e[t]??0)))}for(let t of ge)e[t]>0&&n[t]<=0&&(n[t]=En(t,e[t]));return n}function kn(e){let t=Xe();if(!e||typeof e!=`object`)return t;let n=e;for(let e of x){let r=n[e.id];if(typeof r==`boolean`){t[e.id]={owned:r,durability:r?e.maxDurability:0,quantity:0};continue}if(!r||typeof r!=`object`)continue;let i=!!r.owned,a=Number(r.durability??0),o=Number(r.quantity??0);t[e.id]={owned:i,durability:i?Math.min(e.maxDurability,Math.max(0,Math.floor(a))):0,quantity:Math.max(0,Math.floor(o))}}return t}function N(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function An(e){window.localStorage.setItem(Jt,JSON.stringify(e))}function jn(){return window.localStorage.removeItem(Jt),rt()}var Mn=900*1e3;function Nn(e,t=Date.now()){e.buildings.campfire=!0,e.campfireExpiresAt=t+Mn}function P(e,t=Date.now()){return!!(e.buildings.campfire&&Fn(e)>t)}function Pn(e,t=Date.now()){let n=Fn(e);return n>t?n-t:0}function Fn(e){return e.buildings.campfire&&typeof e.campfireExpiresAt==`number`?e.campfireExpiresAt:0}function In(e,t=Date.now()){let n=Fn(e);return!n||n>t?!1:(e.buildings.campfire=!1,e.campfireExpiresAt=null,A(e,`The campfire burns down to charred wood.`,`muted`,n),e.updatedAt=n,e.lastSimulatedAt=n,!0)}var Ln=[`copperPickaxe`,`copperHatchet`,`copperKnife`];function Rn(e){return!!e.buildings.crudeStoneFurnace}function zn(e){return{furnaceBuilt:Rn(e),coal:Math.max(0,Math.floor(e.inventory.coal??0))}}function Bn(e){return n.some(t=>t===e)}function Vn(e,t){if(!a(t))return!1;switch(t){case`smeltCopperBar`:return Rn(e);case`craftPot`:case`craftLadle`:return Gn(e,`copperBar`);case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return Wn(e);case`smeltBronzeBar`:return Rn(e)&&Kn(e);case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return Gn(e,`bronzeBar`)}}function Hn(e,t){if(!a(t))return``;switch(t){case`smeltCopperBar`:return Rn(e)?``:`Needs Crude Stone Furnace`;case`craftPot`:case`craftLadle`:return Gn(e,`copperBar`)?``:`Smelt Copper Bar`;case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return Wn(e)?``:`Craft Pot and Ladle`;case`smeltBronzeBar`:return Rn(e)?Kn(e)?``:`Craft a Copper Tool`:`Needs Crude Stone Furnace`;case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return Gn(e,`bronzeBar`)?``:`Smelt Bronze Bar`}}function Un(e){let t=i(e);return t?t.label.replace(/^(Craft|Smelt) /,`1 `):``}function Wn(e){return Gn(e,`pot`)&&Gn(e,`ladle`)}function Gn(e,t){return e.seenResources.includes(t)||e.inventory[t]>0}function Kn(e){let t=e.tools;return Ln.some(e=>{let n=t[e];return!!(n?.owned||(n?.quantity??0)>0)})}function qn(e,t){return!h(t)||!g(t)?!1:Jn(e,t)===``}function Jn(e,t){let n=h(t);if(!n||!g(t))return``;let r=n.requiredBuildings?.find(t=>!e.buildings[t]);if(r)return`Needs ${Qn(r)}`;let i=n.requiredSeenResources?.find(t=>!Xn(e,t));return i?n.unlockHint||`Needs ${E(i)}`:n.requiredAnyResources?.length&&!n.requiredAnyResources.some(t=>Xn(e,t))?`Needs ${n.requiredAnyResources.map(e=>E(e)).join(` or `)}`:``}function Yn(e){return Zn(e.output)}function Xn(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function Zn(e){return Object.entries(e).map(([e,t])=>`${t??0} ${E(e)}`).join(`, `)}function Qn(e){switch(e){case`campfire`:return`Campfire`;case`tanningRack`:return`Tanning Rack`;case`hideTent`:return`Hide Tent`;case`crudeStoneFurnace`:return`Crude Stone Furnace`;case`primitiveSpinningWheel`:return`Primitive Spinning Wheel`;case`primitiveLoom`:return`Primitive Loom`}}function $n(e){return x.find(t=>t.id===e)}function er(e){return $n(e)?.maxDurability??1}function tr(e,t){let n=e.tools[t];return!!(n?.owned&&n.durability>0)}function nr(e){return x.filter(t=>t.roles.includes(e)).sort((t,n)=>or(n.id,e)-or(t.id,e))}function rr(e,t){return nr(t).find(t=>tr(e,t.id))?.id??null}function ir(e,t){return!!rr(e,t)}function ar(e,t){let n=rr(e,t);return n?or(n,t):0}function or(e,t){let n=$n(e);return n?.roles.includes(t)?n.roleTiers?.[t]??n.weapon?.damage??1:0}function sr(e){return $n(e)?.weapon?.damage??0}function cr(e,t){let n=rr(e,t);return n?sr(n):0}function lr(e,t){let n=e.tools[t];return!n||n.quantity<=0?!1:(--n.quantity,n.owned=!0,n.durability=er(t),!0)}function ur(e,t,n,r=Date.now(),i=`Cameron`){let a=e.tools[t];if(!(!a?.owned||a.durability<=0)&&(a.durability=Math.max(0,a.durability-n),a.durability===0)){let n=$n(t)?.label??`Tool`;if(lr(e,t)){A(e,`${n} breaks; ${i} takes a fresh one from inventory.`,`warning`,r,`character`);return}a.owned=!1,A(e,`${n} breaks. No spare remains.`,`warning`,r,`character`)}}function dr(e,t,n,r=Date.now(),i=`Cameron`){let a=rr(e,t);a&&ur(e,a,n,r,i)}var fr=le.map(e=>e.craftActionId);function pr(e){return e.seenResources.includes(`rabbitMeat`)||e.seenResources.includes(`squirrelMeat`)}function mr(e){return pe.some(t=>e.seenResources.includes(t)||e.characters.some(e=>(e.inventory?.[t]??0)>0||(e.resourceCounts?.[t]??0)>0)||e.characterInventory[t]>0||e.inventory[t]>0||e.characterResourceCounts[t]>0||e.resourceCounts[t]>0)}function F(e,t,n=Date.now()){if(Vn(e,t))return!0;if(h(t))return qn(e,t);if(Hn(e,t))return!1;if(t===`craftLowestTool`||fr.includes(t))return!0;switch(t){case`gatherSticks`:case`gatherStones`:case`gatherFlaxPlants`:case`gatherFlaxFibers`:case`gatherMushrooms`:case`gatherBerries`:return!0;case`fishRiver`:return ir(e,`fishing`);case`mineCoal`:case`mineCopper`:case`mineTin`:return ir(e,`mining`);case`chopTrees`:return ir(e,`woodcutting`);case`huntSmallAnimals`:return ir(e,`hunting`);case`butcherFish`:return mr(e);case`butcherRabbit`:return e.seenResources.includes(`rabbit`);case`butcherSquirrel`:return e.seenResources.includes(`squirrel`);case`cookRabbitMeat`:return P(e,n)&&e.seenResources.includes(`rabbitMeat`);case`cookSquirrelMeat`:return P(e,n)&&e.seenResources.includes(`squirrelMeat`);case`tanHide`:return e.buildings.tanningRack&&e.seenResources.includes(`hide`);case`craftLeatherBackpack`:return e.buildings.tanningRack&&e.seenResources.includes(`leather`)}return!1}function hr(e,t){let n=Hn(e,t);if(n)return n;let r=Jn(e,t);if(r)return r;switch(t){case`fishRiver`:return`Needs Fishing Pole`;case`mineCoal`:case`mineCopper`:case`mineTin`:return`Needs Mining Tool`;case`chopTrees`:return`Needs Woodcutting Tool`;case`huntSmallAnimals`:return`Needs Hunting Weapon`;case`butcherFish`:return`Needs Carried Fish`;case`butcherRabbit`:return`Needs Rabbit`;case`butcherSquirrel`:return`Needs Squirrel`;case`cookRabbitMeat`:return P(e)?`Needs Rabbit Meat`:`Needs Lit Campfire`;case`cookSquirrelMeat`:return P(e)?`Needs Squirrel Meat`:`Needs Lit Campfire`;case`tanHide`:return e.buildings.tanningRack?`Needs Hide`:`Needs Tanning Rack`;case`craftLeatherBackpack`:return e.buildings.tanningRack?`Needs Leather`:`Needs Tanning Rack`;case`craftLowestTool`:return`Needs Craft Materials`;default:return``}}function gr(e,t,n=Date.now()){return!0}function _r(e,t,n=Date.now()){switch(t){case`campfire`:return P(e,n)||pr(e);case`tanningRack`:return e.buildings.tanningRack||e.seenResources.includes(`hide`);case`hideTent`:return e.buildings.hideTent||e.seenResources.includes(`hide`);case`crudeStoneFurnace`:return e.buildings.crudeStoneFurnace||e.seenResources.includes(`coal`)||e.seenResources.includes(`copper`);case`primitiveSpinningWheel`:return e.buildings.primitiveSpinningWheel||e.seenResources.includes(`linenThread`);case`primitiveLoom`:return e.buildings.primitiveLoom||e.seenResources.includes(`linenThread`)}}function vr(e,t){switch(t){case`campfire`:return`See Rabbit Meat or Squirrel Meat`;case`tanningRack`:case`hideTent`:return`See Hide`;case`crudeStoneFurnace`:return`See Coal or Copper`;case`primitiveSpinningWheel`:return`See Linen Thread`;case`primitiveLoom`:return`See Linen Thread`}}var yr={meadow:1e4,river:15e3,forest:3e4,mine:6e4};function I(e){return e.loopActionIds?.length?[...e.loopActionIds]:e.followUpActionId?[e.actionId,e.followUpActionId]:[e.actionId]}function L(e){return Lr(e)||e===`huntSmallAnimals`||e===`chopTrees`}function br(e,t){return L(e)?t??`meadow`:null}function xr(e,t=I(e)){return e.loopLocationIds?.length?t.map((t,n)=>br(t,e.loopLocationIds?.[n]??void 0)):t.map((t,n)=>n===0&&L(t)?e.locationId??`meadow`:br(t,void 0))}function Sr(e,t){let n=I(e),r=n[R(t,n)];return xr(e,n)[R(t,n)]??(L(r)?`meadow`:void 0)}function Cr(e,t){let n=I(e),r=n[R(t,n)];return wr(r,Sr(e,t))}function wr(e,t){return L(e)?t??`meadow`:`camp`}function Tr(e){return e.targetLocationId??e.locationId??`camp`}function Er(e,t){return e.characters.find(e=>e.id===t)?.locationId??`camp`}function Dr(e,t,n){let r=e.characters.find(e=>e.id===t);r&&(r.locationId=n)}function Or(e,t){return e.phase===`travelingTo`||e.phase===`travelingBack`?e.originLocationId??t:Tr(e)}function kr(e){return e===`camp`?`camp`:`the ${e}`}function Ar(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function jr(e,t){let n=I(e);return n[R(t,n)]??e.actionId}function Mr(e){let t=I(e);return R(e.nextLoopIndex??e.loopIndex??0,t)}function Nr(e){return Fr(e,e.loopIndex??0)}function Pr(e){return Fr(e,e.loopIndex??0)}function Fr(e,t){let n=I(e);if(n.length<=1)return R(t,n);let r=(R(t,n)+1)%n.length;for(;n[r]===`butcherFish`&&r!==t;)r=(r+1)%n.length;return r}function R(e,t){return t.length?Math.min(t.length-1,Math.max(0,Math.floor(e))):0}function Ir(e,t){return e===t?0:zr(e)+zr(t)}function Lr(e){return e===`gatherSticks`||e===`gatherStones`||e===`gatherFlaxPlants`||e===`gatherFlaxFibers`||e===`gatherMushrooms`||e===`gatherBerries`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`||e===`fishRiver`}function Rr(e){return yr[e]}function zr(e){return e===`camp`?0:Rr(e)}function z(e){return Array.isArray(e.currentActions)||(e.currentActions=e.currentAction?[e.currentAction]:[]),e.currentActions}function B(e,t=e.selectedCharacterId){return z(e).find(e=>e.characterId===t)??null}function Br(e){let t=z(e);e.currentAction=t.find(t=>t.characterId===e.selectedCharacterId)??t[0]??null}function V(e,t){let n=z(e),r=n.findIndex(e=>e.characterId===t.characterId);r>=0?n[r]=t:n.push(t),e.currentActions=n,Hr(e,!0,t.characterId),Br(e)}function H(e,t){e.currentActions=z(e).filter(e=>e.characterId!==t),Hr(e,!1,t),Br(e)}function Vr(e){return[...z(e)].sort((e,t)=>e.endsAt===t.endsAt?e.characterId.localeCompare(t.characterId):e.endsAt-t.endsAt)[0]??null}function U(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function W(e,t){return e.characters.find(e=>e.id===t)?.name??`Someone`}function Hr(e,t,n=e.selectedCharacterId){let r=e.characters.find(e=>e.id===n);r&&(r.condition=t?`working`:`resting`)}function Ur(e,t=Date.now()){Yr(e,t);let n=e.actionLoops.length+1,r={id:`loop-${t.toString(36)}-${Math.random().toString(36).slice(2,7)}`,name:`Loop ${n}`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:t,updatedAt:t};return e.actionLoops.push(r),U(e,t),r}function Wr(e,t,n=Date.now()){if(Yr(e,n),e.actionLoops.length<=1)return e.actionLoops[0]?.id??null;let r=e.actionLoops.findIndex(e=>e.id===t);if(r<0)return e.actionLoops[0]?.id??null;e.actionLoops.splice(r,1);for(let n of e.characters)n.actionLoopId===t&&(n.actionLoopId=void 0);return U(e,n),e.actionLoops[Math.max(0,r-1)]?.id??e.actionLoops[0]?.id??null}function G(e,t){return Yr(e),e.actionLoops.find(e=>e.id===t)??e.actionLoops[0]??null}function Gr(e,t,n){let r=Zr(t,e);return n===`butcherFish`?e.actionIds[r]===`fishRiver`:!0}function Kr(e,t,n,r,i={},a=Date.now()){let o=G(e,t);if(!o||!Gr(o,n,r))return!1;let s=Zr(n,o)+1;return o.actionIds.splice(s,0,r),o.locationIds.splice(s,0,br(r,i.locationId)),o.updatedAt=a,Xr(e,o),U(e,a),!0}function qr(e,t,n,r=Date.now()){let i=G(e,t);if(!i||i.actionIds.length<=1)return 0;let a=Zr(n,i);return i.actionIds.splice(a,1),i.locationIds.splice(a,1),i.updatedAt=r,Xr(e,i),U(e,r),Math.max(0,a-1)}function Jr(e){return e.actionIds.map((t,n)=>br(t,e.locationIds[n]??void 0))}function Yr(e,t=Date.now()){if(Array.isArray(e.actionLoops)&&e.actionLoops.length)return;let n=e.currentAction?.loopActionIds?.length?{actionIds:[...e.currentAction.loopActionIds],locationIds:[...e.currentAction.loopLocationIds??[]]}:{actionIds:[`gatherSticks`],locationIds:[`meadow`]};e.actionLoops=[{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:n.actionIds,locationIds:n.actionIds.map((e,t)=>br(e,n.locationIds[t]??void 0)),createdAt:t,updatedAt:t}]}function Xr(e,t){for(let n of e.characters){if(n.actionLoopId!==t.id)continue;let r=B(e,n.id);if(!r)continue;let i=R(r.loopIndex??0,t.actionIds);V(e,{...r,loopActionIds:[...t.actionIds],loopLocationIds:Jr(t),loopIndex:i})}}function Zr(e,t){return t.actionIds.length?Math.min(t.actionIds.length-1,Math.max(0,Math.floor(e))):0}function Qr(e,t,n){return Math.min(n,Math.max(t,e))}function K(e,t){return Math.floor(Math.random()*(t-e+1))+e}function $r(e,t,n=1){let r=10**n;return Math.round((Math.random()*(t-e)+e)*r)/r}function q(e){let t=Math.max(0,Math.ceil(e/1e3));if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}var ei=le.map(e=>({actionId:e.craftActionId,toolId:e.id})),ti=[{id:`minnow`,minWeight:.5,maxWeight:1.5},{id:`stoneLoach`,minWeight:1,maxWeight:3},{id:`mudskipper`,minWeight:1.5,maxWeight:4.5},{id:`brookStickleback`,minWeight:.5,maxWeight:2},{id:`pebblePerch`,minWeight:2,maxWeight:7.5}],ni=[{id:`rabbit`,minWeight:2,maxWeight:5},{id:`squirrel`,minWeight:.5,maxWeight:2}];function ri(e){return x.find(t=>t.id===e)?.recipe??{}}function ii(e,t){let n=e.tools[t];return(n?.quantity??0)+ +!!n?.owned}function ai(e,t){let n=i(t);if(n)return{resources:n.output??{},message:`Cameron finishes ${n.label.toLowerCase()}.`,tone:`craft`};let r=h(t);if(r)return{resources:r.output,message:`Cameron finishes ${r.label.toLowerCase()}.`,tone:`craft`};switch(t){case`gatherSticks`:{let e=K(1,3);return{resources:{stick:e},message:`Cameron gathers ${e} ${_i(`Stick`,e)}.`,tone:`gain`}}case`gatherStones`:{let e=K(1,2);return{resources:{stone:e},message:`Cameron finds ${e} ${_i(`Stone`,e)}.`,tone:`gain`}}case`gatherFlaxPlants`:{let e=K(2,4);return{resources:{flaxPlant:e},message:`Cameron cuts ${e} ${_i(`Flax Plant`,e)} from the meadow.`,tone:`gain`}}case`gatherFlaxFibers`:{let e=K(1,3);return{resources:{flaxFiber:e},message:`Cameron pulls ${e} ${_i(`Flax Fiber`,e)} from the brush.`,tone:`gain`}}case`gatherMushrooms`:{let e=K(1,3);return{resources:{mushroom:e},message:`Cameron gathers ${e} ${_i(`Mushroom`,e)} from the meadow shade.`,tone:`gain`}}case`gatherBerries`:{let e=K(2,5);return{resources:{berry:e},message:`Cameron picks ${e} ${e===1?`Berry`:`Berries`} from the brambles.`,tone:`gain`}}case`mineCoal`:return mi(e,`coal`);case`mineCopper`:return mi(e,`copper`);case`mineTin`:return mi(e,`tin`);case`fishRiver`:return pi();case`craftLowestTool`:case`craftLeatherBackpack`:break;case`chopTrees`:{let t=ar(e,`woodcutting`),n=t>=3?1:+(t>=2&&Math.random()<.5),r=K(2,4)+n,i=+(Math.random()<.35);return{resources:{wood:r,stick:i},message:`Cameron chops ${r} ${_i(`Wood`,r)}${i?` and saves a usable stick`:``}.`,tone:`gain`}}case`huntSmallAnimals`:return hi(e);case`butcherFish`:return{resources:{},message:`Cameron butchers carried fish.`,tone:`gain`};case`butcherRabbit`:return gi(e,`rabbit`);case`butcherSquirrel`:return gi(e,`squirrel`);case`cookRabbitMeat`:return{resources:{cookedRabbitMeat:1},message:`Cameron cooks rabbit meat over the coals.`,tone:`craft`};case`cookSquirrelMeat`:return{resources:{cookedSquirrelMeat:1},message:`Cameron cooks squirrel meat over the coals.`,tone:`craft`};case`tanHide`:return{resources:{leather:1},message:`Cameron works a hide into rough leather.`,tone:`craft`}}let a=oi(t);return a?{resources:{},message:`Cameron finishes ${yi(a).toLowerCase()}.`,tone:`craft`}:{resources:{},message:`Cameron finishes the work.`,tone:`craft`}}function oi(e){let t=i(e);if(t?.toolId)return t.toolId;let n=ei.find(t=>t.actionId===e);return n?n.toolId:e===`craftLeatherBackpack`?`leatherBackpack`:null}function si(e,t,n,r,i){let a=x.find(e=>e.id===r);a&&(e.tools[r].quantity+=1,tr(e,r)||lr(e,r),ct(e,{aggregateKey:`craft:${t}:${r}`,text:`${n} crafted ${vi(a.label)}`,amount:1,unit:vi(a.label),tone:`craft`,now:i,scope:`character`}))}function ci(e,t,n,r){let i=fi(e,t);Object.values(i).some(e=>(e??0)>0)&&ct(e,{aggregateKey:`action:${t}:butcherFish`,text:`${n} butchered fish`,resources:i,tone:`gain`,now:r,scope:`character`})}function li(e,t=e.selectedCharacterId){return pe.some(n=>Ft(e,n,`character`,t))}function ui(e,t,n,r){switch(t){case`fishRiver`:dr(e,`fishing`,1,n,r);break;case`mineCoal`:case`mineCopper`:case`mineTin`:dr(e,`mining`,1,n,r);break;case`chopTrees`:dr(e,`woodcutting`,1,n,r);break;case`huntSmallAnimals`:dr(e,`hunting`,1,n,r);break;case`butcherRabbit`:case`butcherSquirrel`:dr(e,`butchering`,1,n,r);break;default:break}}function di(e,t=`Cameron`){let n=i(e);if(n)return`${t} completed ${n.label.toLowerCase()}`;let r=h(e);if(r)return`${t} completed ${r.label.toLowerCase()}`;switch(e){case`gatherSticks`:return`${t} gathered sticks`;case`gatherStones`:return`${t} gathered stones`;case`gatherFlaxPlants`:return`${t} gathered flax plants`;case`gatherFlaxFibers`:return`${t} gathered flax fibers`;case`gatherMushrooms`:return`${t} gathered mushrooms`;case`gatherBerries`:return`${t} gathered berries`;case`mineCoal`:return`${t} mined coal`;case`mineCopper`:return`${t} mined copper`;case`mineTin`:return`${t} mined tin`;case`fishRiver`:return`${t} caught river fish`;case`craftLowestTool`:return`${t} balanced tool stock`;case`craftLeatherBackpack`:return`${t} crafted leather backpacks`;case`chopTrees`:return`${t} chopped trees`;case`huntSmallAnimals`:return`${t} hunted small animals`;case`butcherFish`:return`${t} butchered fish`;case`butcherRabbit`:return`${t} butchered rabbits`;case`butcherSquirrel`:return`${t} butchered squirrels`;case`cookRabbitMeat`:return`${t} cooked rabbit meat`;case`cookSquirrelMeat`:return`${t} cooked squirrel meat`;case`tanHide`:return`${t} tanned hide`}let a=oi(e);return a?`${t} crafted ${vi(yi(a)).toLowerCase()}`:`${t} completed work`}function fi(e,t){let n={},r=Dt(e,t);for(let i of pe){let a=he[i];if(!a||!Ft(e,i,`character`,t))continue;let o=w(a,It(e,i,`character`,t)*.5);return o<=0?n:(r[a]=w(a,r[a]+o),n[a]=w(a,(n[a]??0)+o),e.seenResources.includes(a)||e.seenResources.push(a),n)}return n}function pi(){let e=ti[K(0,ti.length-1)],t=$r(e.minWeight,e.maxWeight,1),n=E(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron catches a ${T(e.id,t)} lb ${n}.`,tone:`gain`}}function mi(e,t){let n=E(t),r=ar(e,`mining`),i=1+ +(Math.random()<(r>=3?.35:r>=2?.18:0));return{resources:{[t]:i},message:`Cameron mines ${i} ${n}.`,tone:`gain`}}function hi(e){let t=cr(e,`hunting`),n=Math.min(.76,.52+t*.025),r=ni[Math.random()<n?0:1],i=Math.min(.8,Math.max(0,t-2.4)*.12),a=$r(r.minWeight,r.maxWeight+i,1),o=E(r.id);return{resources:{[r.id]:a},resourceCounts:{[r.id]:1},message:`Cameron brings back a ${T(r.id,a)} lb ${o}.`,tone:`gain`}}function gi(e,t){if(It(e,t)<=0)return{resources:{},message:`Cameron has no ${t} to butcher.`,tone:`gain`};let n=t===`rabbit`?`rabbitMeat`:`squirrelMeat`,r=t===`rabbit`?K(1,2):1,i=ar(e,`butchering`),a=ir(e,`butchering`),o=i>=3?.18:i>=2?.08:0,s=Math.min(.9,(t===`rabbit`?.65:.42)+o),c=Math.min(.75,(t===`rabbit`?.24:.14)+o),l=+(Math.random()<s),u=+(Math.random()<c),d={[n]:r,hide:a?l:0,bone:a?u:0},f=Object.entries({hide:l,bone:u}).filter(([,e])=>a&&e>0).map(([e,t])=>`${t} ${E(e)}`);return{resources:d,message:`Cameron butchers a ${t} for ${r} ${E(n)}${f.length?`, plus ${f.join(` and `)}`:``}.`,tone:`gain`}}function _i(e,t){return t===1?e:`${e}s`}function vi(e){return e.endsWith(`Knife`)?`${e.slice(0,-5)}Knives`:e.endsWith(`s`)?e:`${e}s`}function yi(e){return x.find(t=>t.id===e)?.label??`Tool`}var bi=7200*1e3;function xi(e,t=Date.now()){let n=ei.filter(({actionId:n})=>F(e,n,t)&&St(e,J(n)));return n.length?n.reduce((t,n)=>ii(e,n.toolId)<ii(e,t.toolId)?n:t,n[0]).actionId:null}function Si(e,t,n=e.selectedCharacterId,r=Date.now()){let i=G(e,t),a=e.characters.find(e=>e.id===n);return!i||!a?!1:(a.actionLoopId=i.id,Ci(e,i.id,n,r))}function Ci(e,t,n=e.selectedCharacterId,r=Date.now()){let i=G(e,t);return i?.actionIds.length?Li(e,{actionId:i.actionIds[0],characterId:n,phase:`working`,loopActionIds:[...i.actionIds],loopLocationIds:Jr(i),loopIndex:0,startedAt:r,endsAt:r,repeat:!0},0,r):!1}function J(e){let t=i(e);if(t)return t.cost;let n=h(e);if(n)return n.cost;let r=oi(e);if(r)return ri(r);switch(e){case`cookRabbitMeat`:return{rabbitMeat:1};case`cookSquirrelMeat`:return{squirrelMeat:1};case`tanHide`:return{hide:1};case`craftLowestTool`:return{};default:return{}}}function Y(e,t,n=Date.now(),r=e.selectedCharacterId){return wi(e,r)?!1:t===`craftLowestTool`?F(e,t,n)&&!!xi(e,n):t===`butcherFish`?F(e,t,n)&&li(e,r):t===`butcherRabbit`?F(e,t,n)&&Ft(e,`rabbit`):t===`butcherSquirrel`?F(e,t,n)&&Ft(e,`squirrel`):F(e,t,n)&&St(e,J(t))}function wi(e,t){return!!e.combat?.encounter?.units.some(e=>e.kind===`party`&&e.characterId===t)}function Ti(e,t,n=Date.now(),r={}){let i=y(t),a=e.selectedCharacterId;if(!i||!Y(e,t,n,a))return!1;let o=wr(t,r.locationId),s=Er(e,a),c=Ir(s,o),l={actionId:t,characterId:a,phase:c>0?`travelingTo`:`working`,originLocationId:s,targetLocationId:o,locationId:o===`camp`?void 0:o,loopActionIds:[t],loopLocationIds:[o===`camp`?null:o],loopIndex:0,startedAt:n,endsAt:n+(c||i.durationMs),repeat:!0};return c<=0&&Dr(e,a,o),V(e,l),U(e,n),!0}function Ei(e,t=Date.now()){let n=B(e);if(!n)return;let r=y(n.actionId),i=Or(n,Er(e,n.characterId));if(Dr(e,n.characterId,i),i!==`camp`){V(e,{...n,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i,startedAt:t,endsAt:t+Ir(i,`camp`),repeat:!1}),U(e,t),A(e,`${W(e,n.characterId)} stops ${r?.verb??`working`} at ${kr(i)} and heads back to camp.`,`muted`,t,`character`);return}let a=i===`camp`?Di(e,t,n.characterId):!1;H(e,n.characterId),U(e,t),A(e,a?`${W(e,n.characterId)} stops ${r?.verb??`working`} and returns to camp.`:`${W(e,n.characterId)} stops ${r?.verb??`working`} at ${kr(i)}.`,`muted`,t,`character`)}function Di(e,t=Date.now(),n=e.selectedCharacterId){if(Er(e,n)!==`camp`)return!1;let r=Nt(e,n);return Object.keys(r).length<=0?!1:(ct(e,{aggregateKey:`deposit:camp`,text:`${W(e,n)} returned resources to camp`,resources:r,tone:`gain`,now:t,scope:`character`}),U(e,t),!0)}function Oi(e,t=Date.now()){let n=Math.min(t,e.lastSimulatedAt+bi);Br(e);let r=0;for(;r<500;){let t=Bi(e,n),i=Vr(e),a=i?.endsAt??1/0;if(t===null&&a>n)break;if(t!==null&&t<=a){In(e,t);for(let n of[...z(e)])zi(Ar(n))&&(A(e,`${W(e,n.characterId)} stops cooking as the campfire goes out.`,`warning`,t,`character`),H(e,n.characterId));continue}if(i&&a<=n){let t=i,a=t.endsAt;Ai(e,t,a,n),r+=1;continue}break}t>n&&r>0&&A(e,`The saved trail grows quiet after two hours away.`,`muted`,n,`character`),e.lastSimulatedAt=t,e.updatedAt=t;for(let t of e.characters)B(e,t.id)||Hr(e,!1,t.id);Br(e)}function ki(e,t=Date.now(),n=e.selectedCharacterId){let r=B(e,n);if(!r)return 0;let i=r.endsAt-r.startedAt;return i<=0?1:(t-r.startedAt)/i}function Ai(e,t,n,r){if(t.phase===`travelingTo`){Fe(e,t.endsAt-t.startedAt,n),Dr(e,t.characterId,Tr(t)),Ni(e,t,n);return}if(t.phase===`travelingBack`){if(Fe(e,t.endsAt-t.startedAt,n),Dr(e,t.characterId,`camp`),Di(e,n,t.characterId),t.repeat&&Li(e,t,Mr(t),n))return;if(t.repeat&&Y(e,t.actionId,n,t.characterId)){Pi(e,t,n);return}H(e,t.characterId);return}if(t.phase===`followUp`){ji(e,t,n,r);return}Mi(e,t,n)}function ji(e,t,n,r){let i=Ar(t);if(i!==`butcherFish`){Fi(e,t,r,Pr(t));return}if(ci(e,t.characterId,W(e,t.characterId),n),Ne(e,i,n),li(e,t.characterId)){Ii(e,t,t.loopIndex??0,n);return}Fi(e,t,r,Pr(t))}function Mi(e,t,n){let r=Hi(e,t.actionId,n);if(!r){A(e,`${W(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),H(e,t.characterId);return}let i=J(r);if(!St(e,i)){A(e,`${W(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),H(e,t.characterId);return}if(Ct(e,i),r===`butcherFish`){if(ci(e,t.characterId,W(e,t.characterId),n),Ne(e,r,n),t.repeat&&Y(e,r,n,t.characterId)){Ni(e,t,n);return}H(e,t.characterId);return}let a=oi(r);if(a){if(si(e,t.characterId,W(e,t.characterId),a,n),Ne(e,r,n),t.repeat&&Y(e,r,n,t.characterId)){Ni(e,t,n);return}H(e,t.characterId);return}let o=ai(e,r),s=L(r)?Mt(e,o.resources,o.resourceCounts,t.characterId):o.resources;if(L(r)?Ri(e,t.characterId,r,s,n):(wt(e,o.resources,o.resourceCounts),ct(e,{aggregateKey:`action:${t.characterId}:${r}`,text:di(r,W(e,t.characterId)),resources:o.resources,tone:o.tone,now:n,scope:`character`})),ui(e,r,n,W(e,t.characterId)),Ne(e,r,n),L(r)&&Vi(o.resources,s,e,t.characterId)){let i=Nr(t);if(r===`fishRiver`&&jr(t,i)===`butcherFish`&&li(e,t.characterId)){Ii(e,t,i,n);return}Fi(e,t,n,Pr(t));return}if(!L(r)&&I(t).length>1){Li(e,t,Pr(t),n);return}if(t.repeat&&Y(e,r,n,t.characterId)){Ni(e,t,n);return}H(e,t.characterId)}function Ni(e,t,n){let r=y(t.actionId);if(!r){H(e,t.characterId);return}let i=Tr(t);Dr(e,t.characterId,i),V(e,{...t,phase:`working`,originLocationId:i,targetLocationId:i,locationId:i===`camp`?void 0:i,startedAt:n,endsAt:n+r.durationMs})}function Pi(e,t,n){let r=Cr(t,t.loopIndex??0),i=Er(e,t.characterId),a=Ir(i,r);if(a<=0){Ni(e,{...t,targetLocationId:r,locationId:r===`camp`?void 0:r},n);return}V(e,{...t,phase:`travelingTo`,originLocationId:i,targetLocationId:r,locationId:r===`camp`?void 0:r,startedAt:n,endsAt:n+a})}function Fi(e,t,n,r=Pr(t)){let i=Tr(t);V(e,{...t,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i===`camp`?void 0:i,nextLoopIndex:r,startedAt:n,endsAt:n+Ir(i,`camp`)})}function Ii(e,t,n,r){let i=jr(t,n),a=y(i);if(!a){Fi(e,t,r,Pr(t));return}V(e,{...t,actionId:i,phase:`followUp`,originLocationId:Tr(t),targetLocationId:Tr(t),loopIndex:n,startedAt:r,endsAt:r+a.durationMs})}function Li(e,t,n,r){let i=I(t);if(!i.length)return!1;let a=R(n,i),o=i[a];if(o===`butcherFish`||!Y(e,o,r,t.characterId)){let n=Fr(t,a);return n===a?!1:Li(e,t,n,r)}let s=y(o);if(!s)return!1;let c=Cr(t,a),l=Er(e,t.characterId),u=Ir(l,c);return V(e,{...t,actionId:o,phase:u>0?`travelingTo`:`working`,originLocationId:l,targetLocationId:c,locationId:c===`camp`?void 0:c,loopActionIds:i,loopLocationIds:xr(t,i),loopIndex:a,nextLoopIndex:void 0,followUpActionId:void 0,startedAt:r,endsAt:r+(u||s.durationMs)}),u<=0&&Dr(e,t.characterId,c),!0}function Ri(e,t,n,r,i){Object.values(r).some(e=>(e??0)>0)&&ct(e,{aggregateKey:`action:${t}:${n}`,text:di(n,W(e,t)),resources:r,tone:`gain`,now:i,scope:`character`})}function zi(e){return e===`cookRabbitMeat`||e===`cookSquirrelMeat`}function Bi(e,t){let n=Fn(e);return n&&n<=t?n:null}function Vi(e,t,n,r){let i=Object.values(e).reduce((e,t)=>e+(t??0),0),a=Object.values(t).reduce((e,t)=>e+(t??0),0);return At(n,r)>=jt(n,r)||i>0&&a<i}function Hi(e,t,n){return t===`craftLowestTool`?xi(e,n):t}v.map(e=>e.id);var Ui=1.4,Wi=.8;function Gi(e){let t=x.filter(t=>t.weapon&&tr(e,t.id));return t.sort((e,t)=>ea(t.id)-ea(e.id)),t[0]?.id??null}function Ki(e){return e?ee[e]??`fighter`:`fighter`}function qi(e,t=e.selectedCharacterId){let n=Gi(e),r=n?$n(n):null,i=Ki(n),a=oe(i),o=r?.weapon;return{classId:i,classLabel:a.label,weaponId:n,weaponLabel:r?.label??`Unarmed`,damage:o?.damage??Ui,speed:o?.speed??Wi,range:o?.range??a.range,attackRange:$i(o?.range??a.range),maxHp:a.maxHp,maxMana:a.maxMana}}function Ji(e,t=e.selectedCharacterId){let n=e.characters.find(e=>e.id===t);if(!n)return $e();let r=qi(e,t),i=n.combat??$e(),a=r.maxHp,o=r.maxMana,s=i.maxHp>0?i.hp/i.maxHp:1,c=i.maxMana>0?i.mana/i.maxMana:1;return n.combat={maxHp:a,hp:i.hp<=0?0:na(Math.round(a*s),1,a),maxMana:o,mana:o<=0?0:na(Math.round(o*c),0,o)},n.combat}function Yi(e){let t=tt(),n=e.classProgress;if(n)for(let e of b)t[e.id]={...t[e.id],...n[e.id]??{}};return e.classProgress=t,t}function Xi(e,t,n,r,i=Date.now()){let a=Math.max(0,Math.floor(r));if(a<=0)return;let o=e.characters.find(e=>e.id===t);if(!o)return;let s=Yi(o)[n];s.totalXp+=a,s.xp=Math.min(D(be),s.xp+a),s.level=ta(s.xp),e.updatedAt=i,e.lastSimulatedAt=i}function Zi(e){let t=D(e.level),n=e.level>=1e3?t:D(e.level+1),r=Math.max(0,n-t),i=Math.max(0,Math.min(e.xp-t,r));return{currentLevelXp:t,nextLevelXp:n,xpIntoLevel:i,xpForLevel:r,ratio:r<=0?1:i/r,atCap:e.level>=be}}function Qi(e){return O(e)}function $i(e){return e===`ranged`?3:e===`focus`?2:1}function ea(e){let t=$n(e)?.weapon;if(!t)return 0;let n=t.range===`ranged`?.35:t.range===`focus`?.2:0;return t.damage*t.speed+n}function ta(e){let t=1;for(;t<1e3&&e>=D(t+1);)t+=1;return t}function na(e,t,n){return Number.isFinite(e)?Math.min(n,Math.max(t,e)):t}var ra=1e3,ia=120,aa=24,oa=5,sa=22;function ca(e,t=e.selectedCharacterId,n=`ruins`,r=Date.now()){Na(e);let i=e.characters.find(e=>e.id===t);if(!i||da(e,t)||Ma(e,t))return!1;let a=ce(n),o=ya(e,n,r),s=qi(e,t),c=Ji(e,t);c.hp<=0&&(c.hp=c.maxHp),c.mana<=0&&c.maxMana>0&&(c.mana=Math.ceil(c.maxMana*.5));let l=wa(o);return o.units.push({id:`party-${i.id}`,kind:`party`,characterId:i.id,name:i.name,hp:c.hp,maxHp:c.maxHp,mana:c.mana,maxMana:c.maxMana,x:l.x,y:l.y,damage:ja(e,i.id,s.damage),attackRange:s.attackRange,actEveryMs:Aa(s.speed),nextActAt:r+Aa(s.speed),classId:s.classId,weaponId:s.weaponId??void 0}),i.condition=`working`,e.combat.selectedLocationId=n,o.message=`${i.name} enters ${a.label}.`,Pa(e,o.message,`muted`,r),_a(o,r),Fa(e,r),!0}function la(e,t=e.selectedCharacterId,n=Date.now()){Na(e);let r=e.combat.encounter;if(!r)return!1;let i=fa(e,t);if(!i)return!1;Sa(e,i),r.units=r.units.filter(e=>e.id!==i.id);let a=e.characters.find(e=>e.id===t);return a&&!Ma(e,t)&&(a.condition=`resting`),Pa(e,`${i.name} withdraws from The Ruins.`,`warning`,n),pa(r).length?(r.updatedAt=n,r.message=`${i.name} withdraws.`):e.combat.encounter=null,Fa(e,n),!0}function ua(e,t=Date.now()){Na(e);let n=e.combat.encounter;if(!n)return;let r=0;for(;n&&n.updatedAt+ra<=t&&r<ia;){let t=n.updatedAt+ra;ha(e,n,t),n=e.combat.encounter,n&&(n.updatedAt=t),r+=1}r>0&&Fa(e,Math.min(t,e.combat.encounter?.updatedAt??t))}function da(e,t){return!!fa(e,t)}function fa(e,t){return e.combat?.encounter?.units.find(e=>e.kind===`party`&&e.characterId===t)??null}function pa(e){return e?.units.filter(e=>e.kind===`party`&&e.hp>0)??[]}function ma(e){return e?.units.filter(e=>e.kind===`enemy`&&e.hp>0)??[]}function ha(e,t,n){if(!pa(t).length){ba(e,t,n);return}if(!ma(t).length){_a(t,n);return}let r=t.units.filter(e=>e.hp>0&&e.nextActAt<=n).sort((e,t)=>e.nextActAt-t.nextActAt);for(let i of r){if(i.hp<=0||e.combat.encounter!==t)continue;let r=i.kind===`party`?ma(t):pa(t);if(!r.length)continue;let a=Da(i,r);a&&(Oa(i,a)<=i.attackRange?ga(e,t,i,a,n):(Ca(t,i,a),t.message=`${i.name} moves closer.`),i.nextActAt=n+ka(i))}if(t.units=t.units.filter(e=>e.kind===`party`||e.hp>0),xa(e,t),!pa(t).length){ba(e,t,n);return}ma(t).length||(t.wave+=1,_a(t,n))}function ga(e,t,n,r,i){let a=Math.max(1,Math.round(n.damage));if(r.hp=Math.max(0,r.hp-a),t.message=`${n.name} hits ${r.name} for ${a}.`,n.kind===`party`&&n.characterId&&n.classId&&Xi(e,n.characterId,n.classId,r.hp<=0?oa+sa:oa,i),r.kind===`enemy`&&r.hp<=0){t.defeatedEnemies+=1,Pa(e,`${n.name} defeats ${r.name}.`,`gain`,i);return}r.kind===`party`&&r.hp<=0&&(Sa(e,r),Pa(e,`${r.name} is forced back from the fight.`,`warning`,i))}function _a(e,t){if(ma(e).length||!pa(e).length)return;let n=Math.min(3,1+Math.floor((e.wave-1)/2));for(let r=0;r<n;r+=1)e.units.push(va(e,r,t));e.message=`Goblin wave ${e.wave} enters The Ruins.`,e.updatedAt=t}function va(e,t,n){let r=ce(e.locationId),i=se(`goblin`),a=Ta(e,t);return{id:`goblin-${e.wave}-${t+1}-${n}`,kind:`enemy`,enemyId:i.id,name:i.label,hp:i.maxHp,maxHp:i.maxHp,mana:i.maxMana,maxMana:i.maxMana,x:Math.min(r.gridWidth-1,a.x),y:Math.min(r.gridHeight-1,a.y),damage:i.damage,attackRange:i.attackRange,actEveryMs:i.actEveryMs,nextActAt:n+i.actEveryMs}}function ya(e,t,n){return e.combat.encounter?.locationId===t||(e.combat.encounter={id:`combat-${t}-${n}`,locationId:t,startedAt:n,updatedAt:n,wave:1,defeatedEnemies:0,units:[],message:`The Ruins are quiet.`}),e.combat.encounter}function ba(e,t,n){xa(e,t);for(let n of t.units.filter(e=>e.kind===`party`)){let t=n.characterId?e.characters.find(e=>e.id===n.characterId):null;t&&!Ma(e,t.id)&&(t.condition=`resting`)}Pa(e,`The party withdraws from The Ruins to recover.`,`warning`,n),e.combat.encounter=null,Fa(e,n)}function xa(e,t){for(let n of t.units)n.kind===`party`&&Sa(e,n)}function Sa(e,t){if(!t.characterId)return;let n=e.characters.find(e=>e.id===t.characterId);n&&(n.combat={hp:t.hp,maxHp:t.maxHp,mana:t.mana,maxMana:t.maxMana})}function Ca(e,t,n){let r=ce(e.locationId),i=new Set(e.units.filter(e=>e.hp>0&&e.id!==t.id).map(e=>`${e.x},${e.y}`)),a=Math.sign(n.x-t.x),o=Math.sign(n.y-t.y),s=[{x:t.x+a,y:t.y},{x:t.x,y:t.y+o},{x:t.x,y:t.y-o},{x:t.x-a,y:t.y}].filter(e=>e.x>=0&&e.y>=0&&e.x<r.gridWidth&&e.y<r.gridHeight&&!i.has(`${e.x},${e.y}`)).sort((e,t)=>Oa(e,n)-Oa(t,n))[0];s&&(t.x=s.x,t.y=s.y)}function wa(e){let t=ce(e.locationId);return Ea(e,[Math.floor(t.gridHeight/2),1,t.gridHeight-2,0,t.gridHeight-1].map(e=>({x:0,y:e})))??{x:0,y:0}}function Ta(e,t){let n=ce(e.locationId),r=[Math.floor(n.gridHeight/2),1,n.gridHeight-2,0,n.gridHeight-1].flatMap(e=>[{x:n.gridWidth-1,y:e},{x:n.gridWidth-2,y:e}]);return Ea(e,r.slice(t).concat(r.slice(0,t)))??{x:n.gridWidth-1,y:Math.floor(n.gridHeight/2)}}function Ea(e,t){let n=new Set(e.units.filter(e=>e.hp>0).map(e=>`${e.x},${e.y}`));return t.find(e=>!n.has(`${e.x},${e.y}`))??null}function Da(e,t){return t.slice().sort((t,n)=>Oa(e,t)-Oa(e,n))[0]??null}function Oa(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function ka(e){return Math.max(500,e.actEveryMs)}function Aa(e){return Math.max(900,Math.round(2400/Math.max(.4,e)))}function ja(e,t,n){let r=e.characters.find(e=>e.id===t);if(!r)return n;let i=qi(e,t).classId,a=r.classProgress?.[i]?.level??1;return n+Math.max(0,a-1)*.08}function Ma(e,t){return e.currentActions.some(e=>e.characterId===t)}function Na(e){e.combat??=nt()}function Pa(e,t,n,r){e.combat.log=[{id:`${r}-${e.combat.log.length}-${t.slice(0,12)}`,time:r,text:t,tone:n},...e.combat.log].slice(0,aa)}function Fa(e,t){e.updatedAt=t,e.lastSimulatedAt=t}var Ia=``+new URL(`bone-icon-DsPaT320.png`,import.meta.url).href,La=``+new URL(`brook-stickleback-icon-CwY54faB.png`,import.meta.url).href,Ra=``+new URL(`basket-empty-slot-BQ3m_a4i.png`,import.meta.url).href,za=``+new URL(`basket-equipped-slot-DPu5tuXe.png`,import.meta.url).href,Ba=``+new URL(`camp-location-icon--vnRMwCB.png`,import.meta.url).href,Va=``+new URL(`campfire-2x2-Bq-ELFVu.png`,import.meta.url).href,Ha=``+new URL(`campfire-unlit-2x2-HI8ea9KO.png`,import.meta.url).href,Ua=``+new URL(`coal-icon-CPItI7lv.png`,import.meta.url).href,X=``+new URL(`copper-icon-Dl9RQPBM.png`,import.meta.url).href,Wa=``+new URL(`craft-materials-bundle-button-D-JGRyoh.png`,import.meta.url).href,Ga=``+new URL(`fish-filet-icon-BHEr_iIj.png`,import.meta.url).href,Ka=``+new URL(`fishing-pole-empty-slot-CBM-0Us1.png`,import.meta.url).href,qa=``+new URL(`fishing-pole-equipped-slot-BoLpLWOS.png`,import.meta.url).href,Ja=``+new URL(`flax-fiber-icon-xz-yYl-m.png`,import.meta.url).href,Ya=``+new URL(`forest-location-icon-VKGIFi31.png`,import.meta.url).href,Xa=``+new URL(`berry-icon-DEz1wEqt.png`,import.meta.url).href,Za=``+new URL(`hide-icon-BWeGfM2U.png`,import.meta.url).href,Qa=``+new URL(`leather-backpack-equipped-slot-DhoXwslM.png`,import.meta.url).href,$a=``+new URL(`meadow-location-icon-v2-CqdYJu9g.png`,import.meta.url).href,eo=``+new URL(`mine-location-icon-BbZJUyhx.png`,import.meta.url).href,to=``+new URL(`minnow-icon-ANpglcnc.png`,import.meta.url).href,no=``+new URL(`mudskipper-icon-_bxkPxea.png`,import.meta.url).href,ro=``+new URL(`mushroom-icon-B9zVCy80.png`,import.meta.url).href,io=``+new URL(`pebble-perch-icon-CHh-9clF.png`,import.meta.url).href,ao=``+new URL(`rabbit-icon-DGNcKYc7.png`,import.meta.url).href,oo=``+new URL(`river-location-icon-v2-BqOU5iqQ.png`,import.meta.url).href,so=``+new URL(`squirrel-icon-BM6RAXNK.png`,import.meta.url).href,co=``+new URL(`stick-icon-Q8m3FMqw.png`,import.meta.url).href,lo=``+new URL(`stone-axe-empty-slot-C8iH4xki.png`,import.meta.url).href,uo=``+new URL(`stone-axe-equipped-slot-BwqHFyCM.png`,import.meta.url).href,fo=``+new URL(`stone-knife-equipped-slot-I-QJxd8H.png`,import.meta.url).href,po=``+new URL(`stone-knife-empty-slot-Bc5j7Rbw.png`,import.meta.url).href,mo=``+new URL(`stone-pick-axe-empty-slot-DOLVpXRk.png`,import.meta.url).href,ho=``+new URL(`stone-pick-axe-equipped-slot-Cn17-ZkZ.png`,import.meta.url).href,go=``+new URL(`stone-spear-empty-slot-BTpRxmYT.png`,import.meta.url).href,_o=``+new URL(`stone-spear-equipped-slot-q16KfMg3.png`,import.meta.url).href,vo=``+new URL(`stone-icon-yRG7nuNE.png`,import.meta.url).href,yo=``+new URL(`stone-loach-icon-4ySXaf0_.png`,import.meta.url).href,bo=``+new URL(`tin-icon-B9xoPCj0.png`,import.meta.url).href,xo=``+new URL(`hide-tent-2x2-B-STXQiW.png`,import.meta.url).href,So=``+new URL(`tanning-rack-2x2-DotflpMM.png`,import.meta.url).href,Co=``+new URL(`wood-icon-CxwJtOlQ.png`,import.meta.url).href;function wo(e,t,n=Date.now()){In(e,n);let r=ue.find(e=>e.id===t),i=t===`campfire`?P(e,n):t===`hideTent`?!1:e.buildings[t];if(!r||i||e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`||!_r(e,t,n)||!St(e,r.recipe))return!1;if(Ct(e,r.recipe),t===`campfire`)Nn(e,n),_t(e,t,1),A(e,`Cameron builds a campfire and brings it to flame.`,`craft`,n);else if(t===`hideTent`){let r=gt(e,t);e.buildings[t]=!0,A(e,`Cameron raises hide tent ${r}.`,`craft`,n),bt(e,n)}else e.buildings[t]=!0,_t(e,t,1),A(e,`Cameron builds a ${r.label}.`,`craft`,n);return Pe(e,t,n),Eo(e,n),!0}function To(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-e.inventory[t]);a>0&&(n[t]=a)}return j(n)}function Eo(e,t){e.updatedAt=t,e.lastSimulatedAt=t}var Do=[{id:`foraging`,label:`Forage`,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,`gatherFlaxFibers`,`gatherMushrooms`,`gatherBerries`]},{id:`fishing`,label:`Fishing`,actionIds:[`fishRiver`]},{id:`mining`,label:`Mining`,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]},{id:`hunting`,label:`Hunting`,actionIds:[`huntSmallAnimals`]},{id:`woodcutting`,label:`Woodcutting`,actionIds:[`chopTrees`]},{id:`crafting`,label:`Crafting`,actionIds:[`craftLowestTool`,`craftBasket`,`craftFishingPole`,`craftStoneKnife`,`craftStoneDagger`,`craftStoneAxe`,`craftStonePickAxe`,`craftStoneSpear`,`craftWoodenClub`,`craftWoodenTwoHandedClub`,`craftWoodenSword`,`craftWoodenTwoHandedSword`,`craftShortBow`,`craftWoodenTotem`]},{id:`smithing`,label:`Smithing`,actionIds:[...e]},{id:`textiles`,label:`Tailoring`,actionIds:[...c]},{id:`butchering`,label:`Butchering`,actionIds:[`butcherFish`,`butcherRabbit`,`butcherSquirrel`]},{id:`cooking`,label:`Cooking`,actionIds:[`cookRabbitMeat`,`cookSquirrelMeat`]},{id:`leatherworking`,label:`Leatherworking`,actionIds:[`tanHide`,`craftLeatherBackpack`]}],Oo=[{id:`gather`,label:`Gather`,filterIds:[`foraging`,`mining`,`fishing`,`hunting`,`woodcutting`]},{id:`processing`,label:`Processing`,filterIds:[`crafting`,`smithing`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{id:`camp`,label:`Camp`,filterIds:[]}],ko={crafting:`crafting`,smithing:`smithing`,textiles:`textiles`,foraging:`foraging`,mining:`mining`,fishing:`fishing`,woodcutting:`woodcutting`,hunting:`hunting`,butchering:`butchering`,cooking:`cooking`,leatherworking:`leatherworking`},Ao=[{label:`Gather`,skillIds:[`foraging`,`mining`,`fishing`,`woodcutting`,`hunting`]},{label:`Process`,skillIds:[`crafting`,`smithing`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{label:`Combat`,skillIds:[]},{label:`Other`,skillIds:[`construction`,`agility`]}],jo=[{id:`meadow`,label:`Meadow`,iconUrl:$a,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,`gatherMushrooms`,`gatherBerries`]},{id:`river`,label:`River`,iconUrl:oo,actionIds:[`gatherStones`,`gatherFlaxFibers`]},{id:`forest`,label:`Forest`,iconUrl:Ya,actionIds:[`chopTrees`]},{id:`mine`,label:`Mine`,iconUrl:eo,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]}],Mo={label:`Camp`,iconUrl:Ba},No=`./Map.png`,Po={camp:{x:746,y:603},meadow:{x:260,y:793},river:{x:1327,y:810},forest:{x:410,y:270},mine:{x:1080,y:270}},Fo={meadow:`M746 603 C656 666 566 716 456 751 C381 777 318 790 260 793`,river:`M746 603 C860 646 994 715 1128 807 C1190 850 1262 841 1327 810`,forest:`M746 603 C676 558 612 506 565 424 C529 360 483 306 410 270`,mine:`M746 603 C824 540 870 482 900 407 C927 338 992 290 1080 270`},Io={meadow:`M260 793 C318 790 381 777 456 751 C566 716 656 666 746 603`,river:`M1327 810 C1262 841 1190 850 1128 807 C994 715 860 646 746 603`,forest:`M410 270 C483 306 529 360 565 424 C612 506 676 558 746 603`,mine:`M1080 270 C992 290 927 338 900 407 C870 482 824 540 746 603`},Lo=24,Ro=[`fishingPole`,`stoneKnife`,`copperKnife`,`bronzeKnife`,`stoneDagger`,`stoneSpear`,`woodenClub`,`woodenTwoHandedClub`,`woodenSword`,`woodenTwoHandedSword`,`shortBow`,`woodenTotem`,`stoneAxe`,`copperHatchet`,`bronzeHatchet`,`stonePickAxe`,`copperPickaxe`,`bronzePickaxe`,`basket`,`leatherBackpack`,null,null,null,null],zo=[{label:`Armor`,slots:[`Head`,`Face`,`Neck`,`Shoulders`,`Chest`,`Backpack`,`Cape`,`Arms`,`Hands`,`Waist`,`Legs`,`Feet`]},{label:`Accessories`,slots:[`Ring Slot 1`,`Ring Slot 2`,`Toe Ring 1`,`Toe Ring 2`,`Bracelet 1`,`Bracelet 2`,`Earring 1`,`Earring 2`]},{label:`Held Gear`,slots:[`Main Hand`,`Off Hand`,`Quiver`,`Ammo Belt`]}],Bo={basket:za,fishingPole:qa,leatherBackpack:Qa,stoneKnife:fo,stoneAxe:uo,stonePickAxe:ho,stoneSpear:_o},Vo={basket:Ra,fishingPole:Ka,stoneKnife:po,stoneAxe:lo,stonePickAxe:mo,stoneSpear:go},Ho={basket:`Basket`,fishingPole:`Pole`,leatherBackpack:`Backpack`,stoneKnife:`Skinning Knife`,stoneDagger:`Dagger`,stoneAxe:`Axe`,stonePickAxe:`Pick`,stoneSpear:`Spear`,woodenClub:`Club`,woodenTwoHandedClub:`2H Club`,woodenSword:`Sword`,woodenTwoHandedSword:`2H Sword`,shortBow:`Bow`,woodenTotem:`Totem`},Uo={berry:Xa,bone:Ia,brookStickleback:La,brookSticklebackFilet:Ga,coal:Ua,copper:X,minnowFilet:Ga,mudskipperFilet:Ga,pebblePerchFilet:Ga,stoneLoachFilet:Ga,flaxFiber:Ja,hide:Za,minnow:to,mudskipper:no,mushroom:ro,pebblePerch:io,rabbit:ao,squirrel:so,stick:co,stone:vo,stoneLoach:yo,tin:bo,wood:Co},Wo={basket:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+5 lb carry capacity`},{label:`Capacity`,value:`15 lb equipped`}],leatherBackpack:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+15 lb carry capacity`},{label:`Capacity`,value:`25 lb equipped`}],fishingPole:[{label:`Slot`,value:`Fishing tool`},{label:`Effect`,value:`Fishing River unlocked`},{label:`Use`,value:`River fishing`}],stoneKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Unlocks`,value:`Hide and bone recovery`},{label:`Use`,value:`Butchering small animals`}],stoneAxe:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Chop Trees unlocked`},{label:`Wood yield`,value:`2-4`}],stonePickAxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Future mining work`},{label:`Use`,value:`Breaking stone`}],stoneSpear:[{label:`Slot`,value:`Two-handed weapon`},{label:`Effect`,value:`Hunt Small Animals unlocked`},{label:`Targets`,value:`Rabbit, Squirrel`}],copperPickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Mining upgrade`},{label:`Durability`,value:`2x stone`}],copperHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Woodcutting upgrade`},{label:`Durability`,value:`Better than stone`}],copperKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Cleaner butchering`},{label:`Durability`,value:`Better than stone`}],bronzePickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Best early mining`},{label:`Durability`,value:`Better than copper`}],bronzeHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Best early chopping`},{label:`Durability`,value:`Better than copper`}],bronzeKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Best early butchering`},{label:`Durability`,value:`Better than copper`}]};function Go(e){let t=x.find(t=>t.id===e),n=Wo[e]??[];return t?.weapon?[{label:`Slot`,value:`${t.weapon.hands}H ${Ko(t.weapon.range)} weapon`},{label:`Power`,value:Jo(t.weapon.damage)},{label:`Speed`,value:`${Jo(t.weapon.speed)}x`},{label:`Tier`,value:qo(t.tier)},...n.filter(e=>e.label!==`Slot`)]:n}function Ko(e){switch(e){case`ranged`:return`ranged`;case`focus`:return`focus`;case`melee`:return`melee`}}function qo(e){return e[0].toUpperCase()+e.slice(1)}function Jo(e){return Number.isInteger(e)?`${e}`:e.toFixed(1)}function Yo(e,t){let n=`gather`,r=`foraging`,i=`meadow`,a=`inventory`,o=!1,s=!1,c=!1,l=!1,u=!1,d=!1,f=!1,p=null,m=null,h=0,g=null,_=null;return e.addEventListener(`click`,e=>{let _=e.target.closest(`[data-command]`);if(!_||_.disabled||_.dataset.disabled===`true`)return;let v=_.dataset.command,y=_.dataset.id,b=g;if(b){if(v===`toggle-test-speed`){t.toggleTestSpeed(),t.requestRender();return}if(v===`set-action-category`&&cc(y)){s=!1,c=!1,l=!1,u=!1,d=!1,f=!1,n=y;let e=sc(n);e.length&&!e.some(e=>e.id===r)&&(r=e[0]?.id??r),t.requestRender();return}if(v===`set-action-filter`&&lc(y)){s=!1,c=!1,l=!1,u=!1,d=!1,f=!1,r=y,t.requestRender();return}if(v===`set-location`&&pc(y)){s=!1,c=!1,l=!1,u=!1,d=!1,f=!1,i=y,t.requestRender();return}if(v===`set-character-detail-tab`&&mc(y)){a=y,o=!1,s=!1,c=!1,l=!0,u=!1,d=!1,f=!1,t.requestRender();return}if(v===`toggle-camp-log`){o=!o,s=!1,c=!1,l=!1,u=!1,d=!1,f=!1,t.requestRender();return}if(v===`open-map`){o=!1,s=!0,c=!1,l=!1,u=!1,d=!1,f=!1,t.requestRender();return}if(v===`open-character-panel`){o=!1,s=!1,c=!0,l=!1,u=!1,d=!1,f=!1,t.requestRender();return}if(v===`open-character-details`){o=!1,s=!1,c=!1,l=!0,u=!1,d=!1,f=!1,t.requestRender();return}if(v===`open-settings`){o=!1,s=!1,c=!1,l=!1,u=!1,f=!1,d=!0,t.requestRender();return}if(v===`open-action-loops`){o=!1,s=!1,c=!1,l=!1,u=!1,d=!1,f=!0,t.requestRender();return}if(v===`open-combat`){o=!1,s=!1,c=!1,l=!1,u=!0,d=!1,f=!1,t.requestRender();return}if(v===`dispatch-combat`){ca(b,_.dataset.characterId??b.selectedCharacterId,`ruins`,t.getNow()),u=!0,o=!1,s=!1,c=!1,l=!1,d=!1,f=!1,t.persist(),t.requestRender();return}if(v===`recall-combat`){la(b,_.dataset.characterId??b.selectedCharacterId,t.getNow()),u=!0,t.persist(),t.requestRender();return}if(v===`select-character`&&y&&b.characters.some(e=>e.id===y)){b.selectedCharacterId=y,m=fc(b)??m,c=!0,l=!1,t.persist(),t.requestRender();return}if(v===`select-loop-step`){m=dc(_,b,m),h=uc(y,h),p=null,t.requestRender();return}if(v===`insert-loop-after`){let e=dc(_,b,m);if(!e)return;m=e,h=uc(y,h),p={loopId:e,afterIndex:h},f=!1,t.requestRender();return}if(v===`remove-loop-step`){let e=dc(_,b,m);if(!e)return;m=e,h=qr(b,e,uc(y,h),t.getNow()),p=null,t.persist(),t.requestRender();return}if(v===`create-loop`){m=Ur(b,t.getNow()).id,h=0,p=null,t.persist(),t.requestRender();return}if(v===`delete-loop`){let e=dc(_,b,m);if(!e)return;m=Wr(b,e,t.getNow()),h=0,p=null,t.persist(),t.requestRender();return}if(v===`assign-loop`){let e=dc(_,b,m),n=_.dataset.characterId??b.selectedCharacterId;if(!e)return;m=e,Si(b,e,n,t.getNow()),t.persist(),t.requestRender();return}if(v===`start-action`&&y){let e=y,n=t.getNow();if(p){Kr(b,p.loopId,p.afterIndex,e,{locationId:xc(e,i)},n)&&(m=p.loopId,h=p.afterIndex+1,p=null,f=!0),t.persist(),t.requestRender();return}p=null,Ti(b,e,n,{locationId:xc(e,i)})}if(v===`stop-action`&&(p=null,Ei(b,t.getNow())),v===`deposit-carried`&&(B(b)||Di(b,t.getNow())),v===`build-structure`&&y&&wo(b,y,t.getNow()),v===`prestige-skill`&&De(y)){Me(b,y,t.getNow()),t.persist(),t.requestRender();return}if(v===`reset`){t.reset();return}t.persist(),t.requestRender()}}),e.addEventListener(`pointerover`,t=>{let n=_l(t.target,e);n&&(_=n,vl(e,n))}),e.addEventListener(`pointerout`,t=>{if(!_)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!_.contains(n))&&(_=null,yl(e))}),e.addEventListener(`focusin`,t=>{let n=_l(t.target,e);n&&(_=n,vl(e,n))}),e.addEventListener(`focusout`,t=>{if(!_)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!_.contains(n))&&(_=null,yl(e))}),e.addEventListener(`scroll`,()=>{_?.isConnected&&bl(e,_)},!0),window.addEventListener(`resize`,()=>{_?.isConnected&&bl(e,_)}),(v,y=t.getNow())=>{g=v;let b=G(v,m??fc(v));m=b?.id??null,h=b?Math.min(b.actionIds.length-1,Math.max(0,h)):0,p&&!G(v,p.loopId)&&(p=null);let ee=Sl(e);e.innerHTML=Xo(v,r,n,a,i,o,s,c,l,u,d,f,p,m,h,y,t.getTestSpeedMultiplier()),_=null,Cl(e,ee)}}function Xo(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){return`
    <div class="game-shell" data-editor-id="game-shell" data-editor-label="Game shell" data-editor-files="src/ui/render.ts, src/style.css">
      ${Zo(e,n,a,o,s,c,l,u,d,g)}
      <main class="main-panel" data-editor-id="main-panel" data-editor-label="Main game panel" data-editor-files="src/ui/render.ts, src/style.css">
        ${Js(e,h)}
        ${c?Wc(e,r):d?$c(e,p,m,f):u?Qo():s?$o(e):l?ds(e,h):o?bs(e,h):a?ns(e):vs(e,n,t,i,f,h)}
      </main>
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `}function Zo(e,t,n,r,i,a,o,s,c,l){let u=Z(e),d=ic(e,u),f=!n&&!r&&!i&&!a&&!o&&!s&&!c;return`
    <aside class="character-sidebar panel" data-editor-id="character-sidebar" data-editor-label="Character sidebar" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${ts(l)}
        </div>
      </div>
      <button
        class="character-card selected ${a?`active`:``}"
        type="button"
        data-command="open-character-details"
        aria-expanded="${a}"
      >
        <span class="portrait" aria-hidden="true">${js(u.name)}</span>
        <span>
          <strong>${u.name}</strong>
          <small>${d}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${Oo.map(e=>ls(e,t,f)).join(``)}
              ${is(i)}
              ${as(o)}
              ${us(r)}
            </div>
          </nav>
          ${os(e)}
          <div class="sidebar-footer">
            ${rs(c)}
            ${qc(n)}
            <button class="ghost-button ${s?`active`:``}" type="button" data-command="open-settings" aria-pressed="${s}">Settings</button>
          </div>
    </aside>
  `}function Qo(){return`
    <div class="work-area single-panel">
      <section class="panel settings-panel" aria-label="Settings" data-editor-id="settings-panel" data-editor-label="Settings panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Settings</span>
        </div>
        <div class="settings-list">
          <button class="danger-button" type="button" data-command="reset">Reset</button>
        </div>
      </section>
    </div>
  `}function $o(e){return`
    <div class="work-area single-panel">
      <section class="panel character-panel" aria-label="Characters" data-editor-id="character-panel" data-editor-label="Character roster panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Characters</span>
        </div>
        <div class="character-roster-grid">
          ${e.characters.map(t=>es(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function es(e,t){let n=e.selectedCharacterId===t.id,r=!!(B(e,t.id)||fa(e,t.id)),i=qi(e,t.id);return`
    <button
      class="character-select-card ${n?`selected`:``} ${r?`working`:``}"
      type="button"
      data-command="select-character"
      data-id="${t.id}"
      aria-pressed="${n}"
    >
      <span class="portrait" aria-hidden="true">${js(t.name)}</span>
      <span class="character-select-copy">
        <strong>${t.name}</strong>
        <small>${t.epithet}</small>
        <small>${i.classLabel} - ${i.weaponLabel}</small>
        <em>${ic(e,t)}</em>
      </span>
      <span class="character-select-badge">${n?`Selected`:`Select`}</span>
    </button>
  `}function ts(e){let t=e===10;return`
    <button
      class="test-speed-button ${t?`active`:``}"
      type="button"
      data-command="toggle-test-speed"
      aria-pressed="${t}"
      title="Toggle 10x test speed"
    >
      10x
    </button>
  `}function ns(e){return`
    <div class="work-area single-panel">
      ${wl(e,`camp`,`Camp Log`,`main-log-panel panel`)}
    </div>
  `}function rs(e){return`
    <button
      class="action-loops-toggle ${e?`active`:``}"
      type="button"
      data-command="open-action-loops"
      aria-pressed="${e}"
    >
      Action Loops
    </button>
  `}function is(e){return`
    <button
      class="category-button characters-button ${e?`active`:``}"
      type="button"
      data-command="open-character-panel"
      aria-pressed="${e}"
    >
      <span>Characters</span>
    </button>
  `}function as(e){return`
    <button
      class="category-button combat-button ${e?`active`:``}"
      type="button"
      data-command="open-combat"
      aria-pressed="${e}"
    >
      <span>Ruins</span>
    </button>
  `}function os(e){return`
    <section class="party-rail" aria-label="Party">
      <div class="party-rail-heading">
        <span>Party</span>
        <small>${e.characters.length} available</small>
      </div>
      <div class="party-member-list">
        ${e.characters.map(t=>ss(e,t)).join(``)}
      </div>
    </section>
  `}function ss(e,t){let n=fa(e,t.id),r=!!n,i=B(e,t.id),a=qi(e,t.id),o=n??t.combat,s=n?.maxHp??a.maxHp,c=n?.maxMana??a.maxMana,l=Math.min(s,o.hp),u=Math.min(c,o.mana),d=r?`In Ruins`:i?`Working`:`Ready`,f=r?`recall-combat`:`dispatch-combat`,p=!r&&!!i;return`
    <article class="party-member ${r?`dispatched`:``}">
      <div class="party-member-topline">
        <span class="portrait small" aria-hidden="true">${js(t.name)}</span>
        <span>
          <strong>${t.name}</strong>
          <small>${a.classLabel} - ${d}</small>
        </span>
      </div>
      ${cs(`HP`,l,s,`hp`)}
      ${cs(`Mana`,u,c,`mana`)}
      <button
        class="party-dispatch-button"
        type="button"
        data-command="${f}"
        data-character-id="${t.id}"
        ${p?`disabled`:``}
      >
        ${r?`Recall`:`Dispatch`}
      </button>
    </article>
  `}function cs(e,t,n,r){let i=Math.max(1,n),a=Math.max(0,Math.min(i,t));return`
    <div class="vitals-row ${r}">
      <span>${e}</span>
      <div class="vitals-track" aria-hidden="true">
        <span style="transform: scaleX(${(a/i).toFixed(4)})"></span>
      </div>
      <strong>${Math.round(a)}/${Math.round(i)}</strong>
    </div>
  `}function ls(e,t,n){let r=n&&e.id===t;return`
    <button
      class="category-button ${r?`active`:``}"
      type="button"
      data-command="set-action-category"
      data-id="${e.id}"
      aria-pressed="${r}"
    >
      <span>${e.label}</span>
    </button>
  `}function us(e){return`
    <button
      class="category-button map-button ${e?`active`:``}"
      type="button"
      data-command="open-map"
      aria-pressed="${e}"
    >
      <span>Map</span>
    </button>
  `}function ds(e,t){let n=ce(`ruins`),r=e.combat.encounter,i=ma(r).length,a=e.characters.filter(t=>da(e,t.id)).length;return`
    <div class="work-area combat-work-area">
      <section class="panel combat-panel" aria-label="${n.label}" data-editor-id="combat-panel" data-editor-label="Combat panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="combat-panel-heading">
          <span>
            <span class="kicker">Combat Location</span>
            <h2>${n.label}</h2>
          </span>
          <span class="combat-status-pill">${r?`Wave ${r.wave}`:`Quiet`}</span>
        </div>
        <p class="combat-location-blurb">${n.blurb}</p>
        <div class="combat-summary-grid">
          <div>
            <strong>${a}</strong>
            <small>Dispatched</small>
          </div>
          <div>
            <strong>${i}</strong>
            <small>Enemies</small>
          </div>
          <div>
            <strong>${r?.defeatedEnemies??0}</strong>
            <small>Defeated</small>
          </div>
        </div>
        ${fs(e,t)}
      </section>
      <aside class="panel combat-side-panel" aria-label="Combat status" data-editor-id="combat-side-panel" data-editor-label="Combat side panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Status</span>
        </div>
        ${ms(e,t)}
        ${_s(e)}
      </aside>
    </div>
  `}function fs(e,t){let n=ce(`ruins`),r=e.combat.encounter,i=[];for(let e=0;e<n.gridHeight;e+=1)for(let a=0;a<n.gridWidth;a+=1){let n=r?.units.find(t=>t.x===a&&t.y===e&&t.hp>0)??null;i.push(ps(n,a,e,t))}return`
    <div class="combat-field" style="--combat-cols: ${n.gridWidth}; --combat-rows: ${n.gridHeight};" aria-label="Combat grid">
      ${i.join(``)}
    </div>
    <div class="combat-field-message">${r?.message??`Dispatch a party member from the left rail.`}</div>
  `}function ps(e,t,n,r){if(!e)return`<div class="combat-cell" data-grid-x="${t}" data-grid-y="${n}"></div>`;let i=e.kind===`enemy`&&e.enemyId?se(e.enemyId).glyph:js(e.name),a=Math.max(0,e.nextActAt-r);return`
    <div class="combat-cell occupied ${e.kind}" data-grid-x="${t}" data-grid-y="${n}" title="${e.name}">
      <span class="combat-unit-glyph">${i}</span>
      <span class="combat-unit-name">${e.name}</span>
      <span class="combat-unit-timer">${q(a)}</span>
      ${cs(`HP`,e.hp,e.maxHp,`hp`)}
    </div>
  `}function ms(e,t){let n=e.combat.encounter;return n?`
    <div class="combat-roster-list">
      ${n.units.map(e=>hs(e,t)).join(``)}
    </div>
  `:`<div class="empty-line">No one is fighting.</div>`}function hs(e,t){let n=e.classId?gs(e.classId):`Enemy`,r=e.hp>0?`Acts in ${q(e.nextActAt-t)}`:`Down`;return`
    <article class="combat-roster-unit ${e.kind}">
      <div>
        <strong>${e.name}</strong>
        <small>${n} - ${r}</small>
      </div>
      ${cs(`HP`,e.hp,e.maxHp,`hp`)}
      ${e.maxMana>0?cs(`Mana`,e.mana,e.maxMana,`mana`):``}
    </article>
  `}function gs(e){return b.find(t=>t.id===e)?.label??`Fighter`}function _s(e){let t=e.combat.log.slice(0,8);return`
    <section class="combat-event-log" aria-label="Combat log">
      <h3>Combat Log</h3>
      <div class="combat-log-list">
        ${t.length?t.map(e=>`<div class="combat-log-entry ${e.tone}">${e.text}</div>`).join(``):`<div class="empty-line">No combat events yet.</div>`}
      </div>
    </section>
  `}function vs(e,t,n,r,i,a){return t===`camp`?`
      <div class="work-area camp-work-area">
        ${ys(e)}
        ${Pc(e,a)}
      </div>
    `:`
      <div class="work-area">
      ${Ns(e,t,n)}
      ${Ms(e,n,r,i,a)}
    </div>
  `}function ys(e){return`
    <section class="panel camp-stats-panel" aria-label="Camp stats" data-editor-id="camp-stats-panel" data-editor-label="Camp stats panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Stats</span>
      </div>
      <div class="camp-stat-list">
        <div class="camp-stat-row">
          <span>Population</span>
          <strong>${vt(e)}/${yt(e)}</strong>
        </div>
      </div>
    </section>
  `}function bs(e,t){return`
    <div class="work-area single-panel">
      <section class="panel location-map-panel" aria-label="World map" data-editor-id="location-map-panel" data-editor-label="World map panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="location-map-frame">
          <img class="location-map-image" src="${No}" alt="Idle Town parchment world map" />
          <svg class="location-map-traveler-layer" viewBox="0 0 1536 1000" aria-hidden="true">
            <defs>
              ${Object.entries(Fo).map(([e,t])=>`<path id="map-route-${e}" class="location-map-route" d="${t}" />`).join(``)}
              ${Object.entries(Io).map(([e,t])=>`<path id="map-return-route-${e}" class="location-map-route" d="${t}" />`).join(``)}
            </defs>
            ${e.characters.map((n,r)=>xs(e,n,r,t)).join(``)}
          </svg>
        </div>
      </section>
    </div>
  `}function xs(e,t,n,r){let i=B(e,t.id),a=t.locationId??`camp`,o=As(n);if(i&&(i.phase===`travelingTo`||i.phase===`travelingBack`)){let e=Ds(i,a),n=Es(i);if(e!==n)return Ss(t,i,e,n,o,r)}return Cs(t,i&&(i.phase===`working`||i.phase===`followUp`)?Po[Es(i)]:Po[a],o,!!i)}function Ss(e,t,n,r,i,a){let o=Ts(t,a),s=`map-character-route-${ks(e.id)}`,c=Os(n,r),l=o;return`
    <path id="${s}" class="location-map-route" d="${c}" />
    <g class="location-map-character moving">
      <animateMotion
        dur="${Math.max(250,t.endsAt-a).toFixed(0)}ms"
        fill="freeze"
        repeatCount="1"
        keyPoints="${l.toFixed(4)};1"
        keyTimes="0;1"
        calcMode="linear"
      >
        <mpath href="#${s}" />
      </animateMotion>
      <g transform="translate(${i.x} ${i.y})">
        ${ws(e,!0)}
      </g>
    </g>
  `}function Cs(e,t,n,r){return`
    <g class="location-map-character ${r?`working`:`idle`}" transform="translate(${t.x+n.x} ${t.y+n.y})">
      ${ws(e,r)}
    </g>
  `}function ws(e,t){return`
    <circle class="location-map-character-shadow" cx="0" cy="4" r="15" />
    <circle class="location-map-character-ring" cx="0" cy="0" r="13" />
    <circle class="location-map-character-face ${t?`active`:``}" cx="0" cy="0" r="10" />
    <text class="location-map-character-initial" x="0" y="4">${js(e.name)}</text>
    <text class="location-map-character-name" x="0" y="29">${e.name}</text>
  `}function Ts(e,t){let n=e.endsAt-e.startedAt;return n<=0?1:Qr((t-e.startedAt)/n,0,1)}function Es(e){return e.targetLocationId?e.targetLocationId:e.phase===`travelingBack`?`camp`:e.locationId??`camp`}function Ds(e,t){return e.originLocationId?e.originLocationId:e.phase===`travelingBack`?e.locationId??t:t}function Os(e,t){if(e===t){let t=Po[e];return`M${t.x} ${t.y}`}if(e===`camp`&&t!==`camp`)return Fo[t];if(e!==`camp`&&t===`camp`)return Io[e];let n=e,r=t;return`${Io[n]} ${Fo[r].replace(/^M746 603\s+/,``)}`}function ks(e){return e.replace(/[^a-zA-Z0-9_-]/g,`-`)}function As(e){let t=[{x:0,y:0},{x:26,y:-10},{x:-26,y:12},{x:14,y:24}];return t[e%t.length]??t[0]}function js(e){return(e.trim().split(/\s+/).map(e=>e[0]).join(``)||`?`).slice(0,2).toUpperCase()}function Ms(e,t,n,r,i){let a=oc(t);return`
    <div class="action-stack">
      ${_c(a.id)?Cc(a,n):``}
      ${Fs(e,t,n,r,i)}
    </div>
  `}function Ns(e,t,n){return`
    <section class="panel skill-panel" data-editor-id="skill-filter-panel" data-editor-label="Skill filter panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-grid">
        ${sc(t).map(t=>Ps(e,t,n)).join(``)}
      </div>
    </section>
  `}function Ps(e,t,n){let r=t.id===n,i=nc(e,t.actionIds??[]),a=e.skills[ko[t.id]],o=Ae(a),s=i||(o.canPrestige?`Prestige ready`:`Lv ${a.level} - ${O(o.xpIntoLevel)}/${O(o.xpForLevel)} XP`);return`
    <button
      class="skill-button ${r?`active`:``} ${i?`current`:``}"
      type="button"
      data-command="set-action-filter"
      data-id="${t.id}"
      aria-pressed="${r}"
    >
      <span>${t.label}</span>
      <small>${s}</small>
    </button>
  `}function Fs(e,t,n,r,i){let a=oc(t),o=a.id===`foraging`||a.id===`woodcutting`?vc(n,a.id).actionIds:a.actionIds??[];return a.id===`crafting`?Is(e,o,r):a.id===`smithing`?Ls(e,o,r,i):a.id===`textiles`?Vs(e,o,r,i):`
      <section class="action-panel" data-editor-id="action-panel-${t}" data-editor-label="${a.label} action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="action-grid">
          ${o.map(t=>Ec(e,t,r)).join(``)}
        </div>
    </section>
  `}function Is(e,t,n){let r=`craftLowestTool`,i=t.filter(e=>e!==r);return`
    <section class="action-panel crafting-action-panel" data-editor-id="action-panel-crafting" data-editor-label="Crafting action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="crafting-card">
        ${Tc(e,r,n)}
        <div class="crafting-action-grid">
          ${i.map(t=>Ec(e,t,n)).join(``)}
        </div>
      </div>
    </section>
  `}function Ls(e,t,i,a){let o=t.filter(e=>n.some(t=>t===e)),s=t.filter(e=>r.some(t=>t===e)),c=zn(e);return`
    <section class="action-panel smithing-action-panel" data-editor-id="action-panel-smithing" data-editor-label="Smithing action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card">
        <div class="smithing-status-grid">
          <div class="smithing-status-item">
            <span>Furnace</span>
            <strong>${c.furnaceBuilt?`Crude Stone Furnace`:`Not built`}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Coal</span>
            <strong>${c.coal}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Fuel</span>
            <strong>${c.furnaceBuilt?c.coal>0?`Ready`:`Needs coal`:`Furnace locked`}</strong>
          </div>
        </div>
        ${Rs(e,a)}
        ${zs(e,`Smelting`,o,i)}
        ${zs(e,`Smithing`,s,i)}
      </div>
    </section>
  `}function Rs(e,t){let n=B(e),r=n?Q(n):null;if(!n||!r||!Bn(r))return`
      <div class="smithing-active-row idle">
        <span>No active smelt</span>
        <strong>Furnace idle</strong>
      </div>
    `;let a=i(r),o=Qr(ki(e,t),0,1);return`
    <div class="smithing-active-row">
      <span>Active smelt</span>
      <strong>${a?.label??`Smelting`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${o.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${q(n.endsAt-t)}</em>
      </div>
    </div>
  `}function zs(e,t,n,r){return`
    <div class="smithing-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid">
        ${n.map(t=>Bs(e,t,r)).join(``)}
      </div>
    </div>
  `}function Bs(e,t,n){let r=y(t),a=i(t);if(!r||!a)return``;let o=F(e,t),s=J(t),c=Y(e,t),l=n?G(e,n.loopId):null,u=B(e),d=!!(n&&l),f=!!(d&&l&&n&&Gr(l,n.afterIndex,t)),p=u?Q(u)===t:!1,m=d?!f:!c||p,h=To(e,s),g=c?``:o?h:hr(e,t),_=d?f?`Set as action loop step`:`Not valid for this loop`:p?`Running`:!c&&g?g:`Ready`,v=d?`Set`:p?`Running`:c?`Start`:`Locked`,b=Nc(t,r.durationMs);return`
    <button
      class="smithing-recipe-card ${p?`active`:``} ${f?`assignable`:``} ${!o&&!f?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="smithing-recipe-${t}"
      data-editor-label="Smithing recipe: ${r.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${m}"
      data-tooltip-source
      aria-disabled="${m}"
      aria-label="${v} ${r.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Dc(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${r.label}</strong>
        <small>${_}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${Un(a.actionId)}</b>
        <small>${j(s)}</small>
      </span>
      ${Oc(r.label,b,_)}
    </button>
  `}function Vs(e,t,n,r){let i=t.filter(e=>l.some(t=>t===e)),a=t.filter(e=>u.some(t=>t===e)),o=t.filter(e=>d.some(t=>t===e)),s=t.filter(e=>f.some(t=>t===e)),c=t.filter(e=>p.some(t=>t===e)),h=t.filter(e=>m.some(t=>t===e));return`
    <section class="action-panel textile-action-panel" data-editor-id="action-panel-textiles" data-editor-label="Tailoring action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card textile-panel-card">
        <div class="smithing-status-grid textile-status-grid">
          <div class="smithing-status-item">
            <span>Flax Chain</span>
            <strong>${Gs(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Stations</span>
            <strong>${Ks(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Needles</span>
            <strong>${qs(e)}</strong>
          </div>
        </div>
        ${Hs(e,r)}
        ${Us(e,`Flax Prep`,[...i,...a],n)}
        ${Us(e,`Spinning`,o,n)}
        ${Us(e,`Weaving`,s,n)}
        ${Us(e,`Needles`,c,n)}
        ${Us(e,`Sewing`,h,n)}
      </div>
    </section>
  `}function Hs(e,t){let n=B(e),r=n?Q(n):null,i=r?h(r):void 0;if(!n||!i)return`
      <div class="smithing-active-row idle textile-active-row">
        <span>No active tailoring work</span>
        <strong>Chain idle</strong>
      </div>
    `;let a=Qr(ki(e,t),0,1);return`
    <div class="smithing-active-row textile-active-row">
      <span>Active tailoring work</span>
      <strong>${i.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-textile-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-textile-action-remaining>${q(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Us(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section textile-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid textile-recipe-grid">
        ${n.map(t=>Ws(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function Ws(e,t,n){let r=y(t),i=h(t);if(!r||!i)return``;let a=F(e,t),o=J(t),s=Y(e,t),c=n?G(e,n.loopId):null,l=B(e),u=!!(n&&c),d=!!(u&&c&&n&&Gr(c,n.afterIndex,t)),f=l?Q(l)===t:!1,p=u?!d:!s||f,m=To(e,o),g=s?``:a?m:hr(e,t),_=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&g?g:`Ready`,v=u?`Set`:f?`Running`:s?`Start`:`Locked`,b=Nc(t,r.durationMs);return`
    <button
      class="smithing-recipe-card textile-recipe-card ${f?`active`:``} ${d?`assignable`:``} ${!a&&!d?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="textile-recipe-${t}"
      data-editor-label="Tailoring recipe: ${r.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${p}"
      data-tooltip-source
      aria-disabled="${p}"
      aria-label="${v} ${r.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Dc(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${r.label}</strong>
        <small>${_}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${Yn(i)}</b>
        <small>${j(o)}</small>
      </span>
      ${Oc(r.label,b,_)}
    </button>
  `}function Gs(e){return e.seenResources.includes(`linenCloth`)||e.inventory.linenCloth>0?`Cloth`:e.seenResources.includes(`linenThread`)||e.inventory.linenThread>0?`Thread`:e.seenResources.includes(`flaxFiber`)||e.inventory.flaxFiber>0?`Fiber`:e.seenResources.includes(`rettedFlax`)||e.inventory.rettedFlax>0?`Retted`:e.seenResources.includes(`flaxPlant`)||e.inventory.flaxPlant>0?`Fresh flax`:`Find flax`}function Ks(e){let t=e.buildings.primitiveSpinningWheel,n=e.buildings.primitiveLoom;return t&&n?`Wheel + Loom`:t?`Wheel built`:n?`Loom built`:`Hand work`}function qs(e){let t=Math.max(0,Math.floor(e.inventory.copperNeedle??0)),n=Math.max(0,Math.floor(e.inventory.bronzeNeedle??0));return t||n?`Copper ${t} / Bronze ${n}`:`None`}function Js(e,t){let n=B(e),r=Z(e);if(!n)return`
      <section class="current-action-panel panel idle" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="current-action-content idle">
          <div class="current-action-detail current-action-location">
            <span>Location</span>
            ${Qs(r.locationId)}
          </div>
          <div class="current-action-detail current-action-copy">
            <span>Current action</span>
            <strong>No active work</strong>
          </div>
          <button class="icon-button" type="button" data-command="stop-action" title="Stop action" disabled>Stop</button>
          <div class="progress-track idle">
            <span data-action-progress style="transform: scaleX(0)"></span>
            <em data-action-remaining>Idle</em>
          </div>
        </div>
      </section>
    `;let i=Qr(ki(e,t),0,1),a=q(n.endsAt-t),o=$s(e,n),s=tc(e);return`
    <section class="current-action-panel panel" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="current-action-content">
        <div class="current-action-detail current-action-location">
          <span>Location</span>
          ${Qs(o)}
        </div>
        <div class="current-action-detail current-action-copy">
          <span>Current action</span>
          <strong>${s}</strong>
        </div>
        <button class="icon-button" type="button" data-command="stop-action" title="Stop action">Stop</button>
        <div class="progress-track">
          <span data-action-progress style="transform: scaleX(${i.toFixed(4)})"></span>
          <em data-action-remaining>${a}</em>
        </div>
      </div>
    </section>
  `}function Ys(e,t,n,r){let i=G(e,t);if(!i)return``;let a=Math.min(i.actionIds.length-1,Math.max(0,r));return`
    <div class="action-loop-controls" aria-label="Action loop">
      ${i.actionIds.map((e,t)=>Xs(i.id,e,t,a,n,i.actionIds.length)).join(``)}
    </div>
  `}function Xs(e,t,n,r,i,a){let o=n===r,s=i?.loopId===e&&i.afterIndex===n;return`
    <div class="action-loop-row ${o?`selected`:``}">
      <button
        class="action-loop-step ${o?`selected`:``} ${s?`assigning`:``}"
        type="button"
        data-command="select-loop-step"
        data-loop-id="${e}"
        data-id="${n}"
        aria-pressed="${o}"
      >
        ${Zs(t)}
      </button>
      ${o?`<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-loop-id="${e}" data-id="${n}" title="Add action after ${Zs(t)}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-loop-id="${e}" data-id="${n}" title="Remove ${Zs(t)}" ${a<=1?`disabled`:``}>-</button>
            </span>`:``}
    </div>
  `}function Zs(e){return e===`fishRiver`?`Fish River`:y(e)?.label??`Action`}function Qs(e){let t=ec(e);return`
    <div class="current-location-image" aria-label="${t.label} location">
      <img src="${t.iconUrl}" alt="" aria-hidden="true" />
    </div>
  `}function $s(e,t){let n=Ds(t,Z(e).locationId),r=Es(t);return r===`camp`?n===`camp`?r:n:r}function ec(e){return e===`camp`?Mo:vc(e)}function tc(e){let t=B(e);if(!t)return`Working`;let n=gc(Es(t)),r=gc(Ds(t,`camp`));return t.phase===`travelingTo`?`Traveling to ${n}`:t.phase===`travelingBack`?`Returning to camp from ${r}`:t.phase===`followUp`?Q(t)===`butcherFish`?`Butchering Fish`:y(Q(t))?.label??`Working`:y(t.actionId)?.label??`Working`}function nc(e,t){let n=B(e);if(!n)return null;let r=Q(n);return t.includes(r)?y(r)?.label??`Working`:null}function Z(e){return e.characters.find(t=>t.id===e.selectedCharacterId)??e.characters[0]}function rc(e){return e.endsWith(`s`)?`${e}'`:`${e}'s`}function ic(e,t){return fa(e,t.id)?`fighting in The Ruins`:B(e,t.id)?ac(e,t.id):`at ${gc(t.locationId)}`}function ac(e,t=e.selectedCharacterId){let n=B(e,t);if(!n)return`keeping still`;let r=gc(Es(n)),i=gc(Ds(n,`camp`));return n.phase===`travelingTo`?`traveling to ${r}`:n.phase===`travelingBack`?`returning to camp from ${i}`:n.phase===`followUp`?y(Q(n))?.verb??`working`:y(n.actionId)?.verb??`working`}function Q(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function oc(e){return Do.find(t=>t.id===e)??Do[0]}function sc(e){return(Oo.find(t=>t.id===e)??Oo[0]).filterIds.map(e=>oc(e))}function cc(e){return Oo.some(t=>t.id===e)}function lc(e){return Do.some(t=>t.id===e)}function uc(e,t){let n=Number(e);return Number.isFinite(n)?Math.max(0,Math.floor(n)):t}function dc(e,t,n){return G(t,e.dataset.loopId??n)?.id??null}function fc(e){return G(e,Z(e).actionLoopId)?.id??null}function pc(e){return jo.some(t=>t.id===e)}function mc(e){return e===`inventory`||e===`equipment`||e===`skills`||e===`log`}function hc(e){return e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId===`camp`}function gc(e){return e===`camp`?`camp`:`the ${vc(e).label.toLowerCase()}`}function _c(e){return e===`foraging`||e===`mining`||e===`fishing`||e===`hunting`||e===`woodcutting`}function vc(e,t){let n=t?yc(t):jo;return n.find(t=>t.id===e)??n[0]}function yc(e){switch(e){case`mining`:return jo.filter(e=>e.id===`mine`);case`fishing`:return jo.filter(e=>e.id===`river`);case`hunting`:return jo.filter(e=>e.id===`meadow`);case`woodcutting`:return jo.filter(e=>e.id===`forest`);default:return jo.filter(e=>e.id===`meadow`||e.id===`river`)}}function bc(e,t){return e===`mining`?`mine`:e===`hunting`?`meadow`:e===`fishing`?`river`:e===`woodcutting`?`forest`:t===`meadow`||t===`river`?t:`meadow`}function xc(e,t){return Sc(e)?`mine`:e===`huntSmallAnimals`?`meadow`:e===`fishRiver`?`river`:e===`chopTrees`?`forest`:t===`forest`?`meadow`:t}function Sc(e){return e===`mineCoal`||e===`mineCopper`||e===`mineTin`}function Cc(e,t){return`
    <section class="panel location-panel" data-editor-id="location-panel" data-editor-label="Location tabs panel" data-editor-files="src/ui/render.ts, src/style.css">
      ${wc(yc(e.id),bc(e.id,t),e.label)}
    </section>
  `}function wc(e,t,n){return`
    <div class="location-tabs location-count-${e.length}" role="tablist" aria-label="${n} locations">
      ${e.map(e=>{let n=e.id===t;return`
            <button
              class="location-tab ${n?`active`:``}"
              type="button"
              role="tab"
              aria-selected="${n}"
              aria-label="${e.label} location"
              data-command="set-location"
              data-id="${e.id}"
              data-editor-id="location-tab-${e.id}"
              data-editor-label="${e.label} location tab"
              data-editor-files="src/ui/render.ts, src/style.css"
            >
              <img class="location-tab-image" src="${e.iconUrl}" alt="" aria-hidden="true" />
              <span class="location-tab-label">${e.label}</span>
            </button>
          `}).join(``)}
    </div>
  `}function Tc(e,t,n){let r=y(t);if(!r)return``;let i=xi(e),a=i?y(i):void 0,o=F(e,t),s=Y(e,t),c=n?G(e,n.loopId):null,l=B(e),u=!!(n&&c),d=!!(u&&c&&n&&Gr(c,n.afterIndex,t)),f=l?Q(l)===t:!1,p=u?!d:!s||f,m=s?``:hr(e,t),h=i??t,g=Le(h),_=[{label:`Speed`,value:q(r.durationMs)},{label:`Skill`,value:`${Oe(g).label} +${O(Re(h))} XP`},{label:`Uses`,value:i?j(J(i)):`Varies by target`},{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}],v=u?d?`Set as action loop step`:`Not valid for this loop`:!s&&m?m:a?`Next: ${a.label}`:``,b=u?`Set`:f?`Running`:s?`Start`:`Locked`;return`
    <button
      class="craft-priority-button ${f?`active`:``} ${d?`assignable`:``} ${!o&&!d?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="action-card-${t}"
      data-editor-label="Action card: ${r.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${p}"
      data-tooltip-source
      aria-disabled="${p}"
      aria-label="${b} ${r.label}${a?`, next ${a.label}`:``}"
    >
      <span class="craft-priority-main" aria-hidden="true">
        <img src="${Wa}" alt="" aria-hidden="true" />
      </span>
      ${Oc(r.label,_,v)}
    </button>
  `}function Ec(e,t,n){let r=y(t);if(!r)return``;let i=F(e,t),a=J(t),o=Y(e,t),s=n?G(e,n.loopId):null,c=B(e),l=!!(n&&s),u=!!(l&&s&&n&&Gr(s,n.afterIndex,t)),d=c?Q(c)===t:!1,f=l?!u:!o||d,p=t===`butcherFish`||t===`butcherRabbit`||t===`butcherSquirrel`||t===`cookRabbitMeat`||t===`cookSquirrelMeat`?hr(e,t):To(e,a),m=o?``:i?p:hr(e,t),h=Nc(t,r.durationMs),g=l?u?`Set as action loop step`:`Not valid for this loop`:!o&&m?m:``,_=l?`Set`:d?`Running`:o?`Start`:`Locked`;return`
    <button
      class="action-card ${d?`active`:``} ${u?`assignable`:``} ${!i&&!u?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="action-card-${t}"
      data-editor-label="Action card: ${r.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${f}"
      data-tooltip-source
      aria-disabled="${f}"
      aria-label="${_} ${r.label}"
    >
      <span class="action-card-main" aria-hidden="true">
        ${Dc(t)}
      </span>
      ${Oc(r.label,h,g)}
    </button>
  `}function Dc(e){let t=kc(e);return t.length?`
    <span class="action-card-icon ${t.length>1?`multi`:``}">
      ${t.map(e=>`<img src="${e}" alt="" aria-hidden="true" />`).join(``)}
    </span>
  `:`<span class="action-card-glyph">${Mc(e)}</span>`}function Oc(e,t,n){return`
    <div class="slot-tooltip" role="tooltip">
      <div class="tooltip-title">
        <strong>${e}</strong>
      </div>
      <dl>
        ${(n?[{label:`Status`,value:n},...t]:t).map(e=>`
            <div>
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
      </dl>
    </div>
  `}function kc(e){let t=Ac(e);if(t)return jc(t.id);switch(e){case`gatherSticks`:return[co];case`gatherStones`:return[vo];case`gatherFlaxPlants`:return[Ja];case`gatherFlaxFibers`:return[Ja];case`gatherMushrooms`:return[ro];case`gatherBerries`:return[Xa];case`mineCoal`:return[Ua];case`mineCopper`:return[X];case`mineTin`:return[bo];case`fishRiver`:return[to];case`craftLowestTool`:return[Wa];case`craftLeatherBackpack`:return[Qa];case`chopTrees`:return[Co];case`huntSmallAnimals`:return[ao,so];case`butcherFish`:return[Ga];case`butcherRabbit`:case`cookRabbitMeat`:return[ao];case`butcherSquirrel`:case`cookSquirrelMeat`:return[so];case`tanHide`:return[Za];case`retFlax`:case`separateFlaxFiber`:case`handSpinLinenThread`:case`spinLinenThread`:case`weaveLinenCloth`:return[Ja];case`craftCopperNeedle`:return[X];case`craftBronzeNeedle`:return[X,bo];case`sewClothWrap`:case`sewLinenBandage`:case`sewSimplePouch`:case`sewLinenHood`:case`sewLinenShirt`:return[Ja];case`smeltCopperBar`:return[X,Ua];case`smeltBronzeBar`:return[X,bo];case`craftPot`:case`craftLadle`:case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return[X];case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return[X,bo]}return[]}function Ac(e){return x.find(t=>t.craftActionId===e)}function jc(e){let t=Bo[e];if(t)return[t];let n=x.find(t=>t.id===e);return n?.weapon?.range===`ranged`||n?.id.startsWith(`wooden`)?[Co]:n?.weapon?[vo]:[]}function Mc(e){let t=y(e);return t?t.label.split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase():`?`}function Nc(e,t){let n=Le(e),r=[{label:`Speed`,value:q(t)},{label:`Skill`,value:`${Oe(n).label} +${O(Re(e))} XP`}],a=i(e);if(a)return[...r,{label:`Uses`,value:j(a.cost)},{label:`Makes`,value:a.toolId?a.label.replace(`Craft `,`1 `):j(a.output??{})},{label:`Unlock`,value:a.unlockHint}];let o=h(e);if(o){let e=o.requiredBuildings?.length?o.requiredBuildings.map(e=>Hc(e)).join(`, `):`Camp`;return[...r,{label:`Station`,value:e},{label:`Uses`,value:j(o.cost)},{label:`Makes`,value:Yn(o)},{label:`Unlock`,value:o.unlockHint}]}let s=Ac(e);if(s)return[...r,{label:`Makes`,value:`1 ${s.label}`},{label:`Uses`,value:j(J(e))},...s.weapon?[{label:`Power`,value:Jo(s.weapon.damage)},{label:`Style`,value:`${s.weapon.hands}H ${Ko(s.weapon.range)}`}]:[]];switch(e){case`gatherSticks`:return[...r,{label:`Pickup`,value:`1-3 Sticks`},{label:`Each`,value:`1 weight`}];case`gatherStones`:return[...r,{label:`Pickup`,value:`1-2 Stones`},{label:`Each`,value:`1 weight`}];case`gatherFlaxPlants`:return[...r,{label:`Pickup`,value:`2-4 Flax Plants`},{label:`Each`,value:`1 weight`}];case`gatherFlaxFibers`:return[...r,{label:`Pickup`,value:`1-3 Flax Fibers`},{label:`Each`,value:`1 weight`}];case`gatherMushrooms`:return[...r,{label:`Pickup`,value:`1-3 Mushrooms`},{label:`Each`,value:`0.1 weight`}];case`gatherBerries`:return[...r,{label:`Pickup`,value:`2-5 Berries`},{label:`Each`,value:`0.1 weight`}];case`mineCoal`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Coal`},{label:`Each`,value:`1 weight`}];case`mineCopper`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Copper`},{label:`Each`,value:`1 weight`}];case`mineTin`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Tin`},{label:`Each`,value:`1 weight`}];case`fishRiver`:return[...r,{label:`Requires`,value:`Fishing Pole`},{label:`Pickup`,value:`1 fish`},{label:`Each`,value:`0.5-7.5 lb`},{label:`Fish`,value:`Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb`}];case`chopTrees`:return[...r,{label:`Pickup`,value:`2-4 Wood, 35% chance for 1 Stick`},{label:`Each`,value:`Wood 2 weight, Stick 1 weight`}];case`huntSmallAnimals`:return[...r,{label:`Pickup`,value:`1 Rabbit or Squirrel`},{label:`Each`,value:`Rabbit 2-5 lb, Squirrel 0.5-2 lb`}];case`craftLowestTool`:return[...r,{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}];case`craftBasket`:return[...r,{label:`Makes`,value:`1 Basket`},{label:`Uses`,value:j(J(e))}];case`craftFishingPole`:return[...r,{label:`Makes`,value:`1 Fishing Pole`},{label:`Uses`,value:j(J(e))}];case`craftLeatherBackpack`:return[...r,{label:`Makes`,value:`1 Leather Backpack`},{label:`Uses`,value:j(J(e))}];case`butcherFish`:return[...r,{label:`Uses`,value:`1 carried fish`},{label:`Makes`,value:`Matching filet at 50% fish weight`}];case`butcherRabbit`:return[...r,{label:`Uses`,value:`1 Rabbit`},{label:`Each`,value:`2-5 lb`},{label:`Makes`,value:`1-2 Rabbit Meat; knife can recover Hide or Bone`}];case`butcherSquirrel`:return[...r,{label:`Uses`,value:`1 Squirrel`},{label:`Each`,value:`0.5-2 lb`},{label:`Makes`,value:`1 Squirrel Meat; knife can recover Hide or Bone`}];case`cookRabbitMeat`:return[...r,{label:`Uses`,value:`1 Rabbit Meat`},{label:`Makes`,value:`1 Cooked Rabbit Meat`}];case`cookSquirrelMeat`:return[...r,{label:`Uses`,value:`1 Squirrel Meat`},{label:`Makes`,value:`1 Cooked Squirrel Meat`}];case`tanHide`:return[...r,{label:`Uses`,value:`1 Hide`},{label:`Makes`,value:`1 Leather`}]}return r}function Pc(e,t){let n=ue.filter(n=>gr(e,n.id,t));return`
    <section class="panel camp-panel" data-editor-id="camp-panel" data-editor-label="Camp structures and inventory panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="camp-panel-section">
        <div class="section-heading">
          <span>Structures</span>
        </div>
        <div class="craft-list">
          ${n.length?n.map(n=>Ic(e,n,t)).join(``):`<div class="empty-line">Nothing sturdy enough to name yet.</div>`}
        </div>
      </div>
      ${Fc(e)}
    </section>
  `}function Fc(e){let t=S.filter(t=>e.inventory[t]>0||Pt(e,t)>0),n=de.reduce((e,n)=>(t.includes(n.id)&&(e[n.group]=e[n.group]??[],e[n.group].push(n.id)),e),{}),r=x.some(t=>e.tools[t.id].quantity>0);return`
    <div class="camp-panel-section camp-inventory-section" data-editor-id="camp-inventory-section" data-editor-label="Camp inventory section" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Camp Inventory</span>
      </div>
      ${t.length||r?`
            <div class="camp-inventory-content">
              ${Object.entries(n).map(([t,n])=>rl(e,t,n)).join(``)}
              ${ol(e)}
            </div>
          `:`<div class="empty-line">No supplies stored yet.</div>`}
    </div>
  `}function Ic(e,t,n){let r=Rc(e,t.id,n),i=_r(e,t.id,n),a=St(e,t.recipe),o=hc(e),s=zc(t.id),c=!i||!s&&r||!a||!o,l=Bc(e,t.id,n),u=i?Vc(e,t.id,n):`Locked`;return`
    <article class="craft-item building-card ${r||ht(e,t.id)>0?`owned`:``} ${i?``:`locked`} ${t.id===`campfire`&&r?`lit`:``}" data-editor-id="building-card-${t.id}" data-editor-label="Building card: ${t.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <button
        class="building-image-button"
        type="button"
        data-command="build-structure"
        data-id="${t.id}"
        data-disabled="${c}"
        data-tooltip-source
        aria-disabled="${c}"
        aria-label="${u} ${t.label}"
      >
        <img class="building-image" src="${l}" alt="" aria-hidden="true" />
        ${Lc(e,t,n)}
      </button>
    </article>
  `}function Lc(e,t,n){let r=Rc(e,t.id,n),i=_r(e,t.id,n),a=St(e,t.recipe),o=hc(e),s=[{label:`Status`,value:Uc(e,t.id,n,r,a,o,i)},{label:`Unlock`,value:vr(e,t.id)},{label:`Skill`,value:`Construction +${O(ze(t.id))} XP`},{label:`Cost`,value:j(t.recipe)},{label:`Use`,value:t.blurb}];return`
    <div class="slot-tooltip" role="tooltip">
      <div class="tooltip-title">
        <strong>${t.label}</strong>
      </div>
      <dl>
        ${s.map(e=>`
            <div>
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
      </dl>
    </div>
  `}function Rc(e,t,n){return zc(t)?!1:t===`campfire`?P(e,n):e.buildings[t]}function zc(e){return e===`hideTent`}function Bc(e,t,n){switch(t){case`campfire`:return P(e,n)?Va:Ha;case`tanningRack`:return So;case`hideTent`:return xo;case`crudeStoneFurnace`:case`primitiveSpinningWheel`:case`primitiveLoom`:return Ha}}function Vc(e,t,n){return zc(t)?`Build`:t===`campfire`&&P(e,n)?`Lit`:Rc(e,t,n)?`Built`:`Build`}function Hc(e){return ue.find(t=>t.id===e)?.label??e}function Uc(e,t,n,r,i,a,o){if(!o)return`Locked: ${vr(e,t)}`;if(!a&&!r)return`Needs ${Z(e).name} at camp`;if(t===`hideTent`){let n=ht(e,t);return i?`Tents: ${n}; next gives +1 housing`:`Tents: ${n}; needs ${To(e,ue.find(e=>e.id===t)?.recipe??{})}`}return t===`campfire`?r?`Lit, burns out in <b data-campfire-remaining>${q(Pn(e,n))}</b>`:i?`Ready to build, burns for 15m`:`Needs ${To(e,ue.find(e=>e.id===t)?.recipe??{})}`:r?`Built`:i?`Ready to build`:`Needs ${To(e,ue.find(e=>e.id===t)?.recipe??{})}`}function Wc(e,t){let n=Z(e);return`
    <div class="work-area single-panel">
      <section class="panel character-detail-panel" aria-label="${n.name} details" data-active-tab="${t}" data-editor-id="character-detail-panel" data-editor-label="Character detail panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="character-detail-heading">
          <span class="portrait" aria-hidden="true">${js(n.name)}</span>
          <span class="character-detail-title">
            <strong>${n.name}</strong>
            <small>${ic(e,n)}</small>
          </span>
        </div>
        ${Gc(e)}
      </section>
    </div>
  `}function Gc(e){return`
    <div class="character-detail-content character-overview-content">
      <div class="character-overview-full">
        ${nl(e)}
      </div>
      <div class="character-overview-pair">
        <section class="character-overview-section" aria-label="Equipment overview" data-editor-id="character-overview-equipment" data-editor-label="Character overview equipment" data-editor-files="src/ui/render.ts, src/style.css">
          ${cl(e,!1)}
        </section>
        ${Kc(e)}
      </div>
      <div class="character-overview-full">
        <section class="character-overview-section" aria-label="Skills overview" data-editor-id="character-overview-skills" data-editor-label="Character overview skills" data-editor-files="src/ui/render.ts, src/style.css">
          ${Jc(e)}
        </section>
      </div>
    </div>
  `}function Kc(e){let t=Z(e),n=B(e,t.id),r=t.actionLoopId?G(e,t.actionLoopId):null,i=n?y(Q(n))?.label??`Working`:`Idle`,a=qi(e,t.id),o=fa(e,t.id)??t.combat;return`
    <section class="character-overview-section character-stats-overview" aria-label="Character stats" data-editor-id="character-overview-stats" data-editor-label="Character overview stats" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Stats</h3>
      <dl class="character-stat-list">
        ${[{label:`Status`,value:ic(e,t)},{label:`Location`,value:gc(t.locationId)},{label:`Current`,value:i},{label:`Action Loop`,value:r?.name??`None`},{label:`Class`,value:a.classLabel},{label:`Weapon`,value:a.weaponLabel},{label:`HP`,value:`${Math.round(o.hp)} / ${Math.round(o.maxHp)}`},{label:`Mana`,value:`${Math.round(o.mana)} / ${Math.round(o.maxMana)}`},...dl(e)].map(e=>`
            <div class="character-stat-row">
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
      </dl>
    </section>
  `}function qc(e){return`
    <button
      class="camp-log-toggle ${e?`active`:``}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${e}"
    >
      Camp Log
    </button>
  `}function Jc(e){return`
    <h3>Skills</h3>
    <section class="side-panel-content skills-screen" aria-label="Skills" data-editor-id="skills-screen" data-editor-label="Skills screen" data-editor-files="src/ui/render.ts, src/style.css">
      ${Ao.filter(e=>e.skillIds.length>0).map(t=>Yc(e,t)).join(``)}
      ${Zc(e)}
    </section>
  `}function Yc(e,t){let n=t.skillIds.filter(e=>xe.some(t=>t.id===e)).map(t=>Xc(e,t)).join(``);return`
    <section class="skill-group" aria-label="${t.label} skills">
      <h4>${t.label}</h4>
      <div class="skill-group-list">
        ${n||`<div class="empty-line">No skills yet.</div>`}
      </div>
    </section>
  `}function Xc(e,t){let n=Oe(t),r=e.skills[t],i=Ae(r),a=i.atCap?i.canPrestige?`Prestige ready`:`Max level`:`${O(i.xpIntoLevel)} / ${O(i.xpForLevel)} XP`,o=r.prestige>0?`P${r.prestige}`:`P0`;return`
    <article class="skill-row ${i.canPrestige?`prestige-ready`:``}" data-editor-id="skill-row-${t}" data-editor-label="Skill row: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${n.label}</strong>
          <small>Total ${O(r.totalXp)} XP</small>
        </span>
        <span class="skill-level-pill">Lv ${r.level}</span>
      </div>
      <div class="skill-progress-track" aria-hidden="true">
        <span style="transform: scaleX(${Math.min(1,Math.max(0,i.ratio)).toFixed(4)})"></span>
      </div>
      <div class="skill-row-meta">
        <span>${a}</span>
        <span>${o} - Cap ${i.cap}</span>
      </div>
      ${i.canPrestige?`<button class="skill-prestige-button" type="button" data-command="prestige-skill" data-id="${t}">Prestige</button>`:``}
    </article>
  `}function Zc(e){let t=Z(e),n=qi(e,t.id);return`
    <section class="skill-group combat-class-group" aria-label="Combat class experience">
      <h4>Combat Classes</h4>
      <div class="skill-group-list">
        ${b.filter(e=>{let r=t.classProgress[e.id];return e.id===n.classId||(r?.totalXp??0)>0}).map(t=>Qc(e,t.id)).join(``)}
      </div>
    </section>
  `}function Qc(e,t){let n=Z(e),r=b.find(e=>e.id===t)??b[0],i=n.classProgress[t],a=Zi(i),o=a.atCap?`Max level`:`${Qi(a.xpIntoLevel)} / ${Qi(a.xpForLevel)} XP`;return`
    <article class="skill-row combat-class-row" data-editor-id="combat-class-row-${t}" data-editor-label="Combat class row: ${r.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${r.label}</strong>
          <small>${r.weaponLabel} - Total ${Qi(i.totalXp)} XP</small>
        </span>
        <span class="skill-level-pill">Lv ${i.level}</span>
      </div>
      <div class="skill-progress-track" aria-hidden="true">
        <span style="transform: scaleX(${Math.min(1,Math.max(0,a.ratio)).toFixed(4)})"></span>
      </div>
      <div class="skill-row-meta">
        <span>${o}</span>
        <span>${r.role}</span>
      </div>
    </article>
  `}function $c(e,t,n,r){let i=G(e,t),a=z(e).length;return`
    <div class="work-area single-panel">
      <section class="panel action-loop-page-panel action-loop-panel" aria-label="Action loops" data-editor-id="action-loops-panel" data-editor-label="Action loops panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="loop-panel-heading">
          <h3>Action Loops</h3>
          <button class="loop-create-button" type="button" data-command="create-loop">New</button>
        </div>
        <div class="loop-picker" aria-label="Saved action loops">
          ${e.actionLoops.map(t=>el(e,t.id,i?.id??null)).join(``)}
        </div>
        ${i?`
              <div class="loop-editor">
                <div class="loop-editor-heading">
                  <span>
                    <strong>${i.name}</strong>
                    <small>${i.actionIds.length} ${i.actionIds.length===1?`step`:`steps`}; ${a} active</small>
                  </span>
                  <button
                    class="loop-delete-button"
                    type="button"
                    data-command="delete-loop"
                    data-loop-id="${i.id}"
                    ${e.actionLoops.length<=1?`disabled`:``}
                  >
                    Delete
                  </button>
                </div>
                ${Ys(e,i.id,r,n)}
                <div class="loop-assignment-list">
                  ${e.characters.map(t=>tl(e,i.id,t)).join(``)}
                </div>
              </div>
            `:`<div class="empty-line">No loops built yet.</div>`}
      </section>
    </div>
  `}function el(e,t,n){let r=G(e,t);if(!r)return``;let i=e.characters.filter(e=>e.actionLoopId===r.id).length,a=n===r.id;return`
    <button
      class="loop-picker-button ${a?`active`:``}"
      type="button"
      data-command="select-loop-step"
      data-loop-id="${r.id}"
      data-id="0"
      aria-pressed="${a}"
    >
      <span>${r.name}</span>
      <small>${i} assigned</small>
    </button>
  `}function tl(e,t,n){let r=n.actionLoopId===t,i=B(e,n.id),a=r?i?`Running`:`Assigned`:`Assign`;return`
    <button
      class="loop-assignment-button ${r?`assigned`:``} ${i?`running`:``}"
      type="button"
      data-command="assign-loop"
      data-loop-id="${t}"
      data-character-id="${n.id}"
      aria-pressed="${r}"
    >
      <span>
        <strong>${n.name}</strong>
        <small>${ic(e,n)}</small>
      </span>
      <em>${a}</em>
    </button>
  `}function nl(e){let t=Z(e),n=rc(t.name),r=Dt(e,t.id),i=S.filter(n=>r[n]>0||Pt(e,n,`character`,t.id)>0),a=At(e,t.id),o=jt(e,t.id),s=i.filter(e=>!!Uo[e]),c=i.filter(e=>!Uo[e]),l=!B(e)&&hc(e);return`
    <div class="resource-group character-inventory-group" data-editor-id="character-inventory-group" data-editor-label="Character inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="inventory-summary-heading">
        <h3>${n} Inventory</h3>
        <span>${Dl(a)}/${Dl(o)}</span>
      </div>
      ${i.length?`<button class="deposit-button" type="button" data-command="deposit-carried" ${l?``:`disabled`}>Store at Camp</button>`:``}
      ${i.length?`
            ${s.length?`<div class="inventory-resource-grid" aria-label="${n} carried inventory">
                    ${s.map(n=>al(e,n,r,`character`,t.id)).join(``)}
                  </div>`:``}
            ${c.map(e=>il(e,r)).join(``)}
          `:`<div class="empty-line">Pack empty.</div>`}
    </div>
  `}function rl(e,t,n){let r=n.filter(e=>!!Uo[e]),i=n.filter(e=>!Uo[e]);return`
    <div class="resource-group" data-editor-id="resource-group-${t}" data-editor-label="${kl(t)} resource group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${kl(t)}</h3>
      ${r.length?`<div class="inventory-resource-grid" aria-label="${kl(t)} inventory">
              ${r.map(t=>al(e,t)).join(``)}
            </div>`:``}
      ${i.map(t=>`
        ${il(t,e.inventory)}
      `).join(``)}
    </div>
  `}function il(e,t){return`
    <div class="resource-row">
      <span>
        <strong>${E(e)}</strong>
        <small>${de.find(t=>t.id===e)?.blurb??``}</small>
      </span>
      <b>${El(e,t[e])}</b>
    </div>
  `}function al(e,t,n=e.inventory,r=`camp`,i=e.selectedCharacterId){let a=Uo[t],o=de.find(e=>e.id===t);if(!a||!o)return``;let s=Pt(e,t,r,i),c=C(t)?`, quantity ${s}`:``;return`
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${o.label}, ${El(t,n[t])}${c}" data-editor-id="inventory-resource-${r}-${t}" data-editor-label="Inventory resource: ${o.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <img class="slot-item-icon" src="${a}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${T(t,n[t])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${o.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${kl(o.group)}</dd>
          </div>
          ${ve(t)?`<div>
                  <dt>Total</dt>
                  <dd>${El(t,n[t])}</dd>
                </div>`:``}
          ${C(t)?`<div>
                  <dt>Quantity</dt>
                  <dd>${s}</dd>
                </div>`:``}
          <div>
            <dt>Use</dt>
            <dd>${o.blurb}</dd>
          </div>
        </dl>
      </div>
    </article>
  `}function ol(e){let t=x.filter(t=>e.tools[t.id].quantity>0);return t.length?`
    <section class="resource-group tool-inventory" data-editor-id="tool-inventory-group" data-editor-label="Tool inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${t.map(t=>sl(e,t.id)).join(``)}
      </div>
    </section>
  `:``}function sl(e,t){let n=x.find(e=>e.id===t),r=e.tools[t];if(!n||r.quantity<=0)return``;let i=er(t),a=[{label:`Durability`,value:`${i}/${i}`},...Go(t)];return`
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${n.label}, ${r.quantity} ${r.quantity===1?`spare`:`spares`}" data-editor-id="inventory-tool-${t}" data-editor-label="Inventory tool: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${ml(t)}
      <span class="item-quantity" aria-hidden="true">${r.quantity}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${n.label}</strong>
        </div>
        <dl>
          ${a.map(e=>`
            <div>
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
        </dl>
      </div>
    </article>
  `}function cl(e,t=!0){return`
    <section class="side-panel-content equipment-screen" data-editor-id="equipment-screen" data-editor-label="Equipment screen" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="equipment-section">
        <h3>Equipment</h3>
        <div class="equipment-grid" aria-label="Tool equipment slots">
          ${Ro.slice(0,Lo).map((t,n)=>t&&e.tools[t].owned?pl(e,t):hl(n,t)).join(``)}
        </div>
      </div>
      ${zo.map(e=>ll(e)).join(``)}
      ${t?`<div class="equipment-section equipment-stats-section">
              <h3>Equipment Stats</h3>
              <dl class="equipment-stat-list">
                ${dl(e).map(e=>`
                    <div class="equipment-stat-row">
                      <dt>${e.label}</dt>
                      <dd>${e.value}</dd>
                    </div>
                  `).join(``)}
              </dl>
            </div>`:``}
    </section>
  `}function ll(e){return`
    <div class="equipment-section equipment-placeholder-section" data-editor-id="equipment-placeholder-${ks(e.label)}" data-editor-label="${e.label} equipment slots" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${e.label}</h3>
      <div class="equipment-placeholder-grid" aria-label="${e.label} slots">
        ${e.slots.map(t=>ul(e.label,t)).join(``)}
      </div>
    </div>
  `}function ul(e,t){return`
    <div class="equipment-slot empty equipment-placeholder-slot" aria-label="Empty ${t} slot" data-editor-id="equipment-placeholder-${ks(e)}-${ks(t)}" data-editor-label="Equipment placeholder: ${t}" data-editor-files="src/ui/render.ts, src/style.css">
      <strong>${t}</strong>
    </div>
  `}function dl(e){let t=Z(e),n=x.filter(t=>e.tools[t.id].owned).filter(t=>e.tools[t.id].durability>0),r=x.reduce((t,n)=>t+e.tools[n.id].quantity,0),i=At(e,t.id),a=jt(e,t.id),o=Math.max(0,a-10),s=fl(e);return[{label:`Carry`,value:`${Dl(i)} / ${Dl(a)} lb`},{label:`Carry Bonus`,value:o>0?`+${Dl(o)} lb`:`None`},{label:`Usable Tools`,value:`${n.length} / ${Ro.filter(Boolean).length}`},{label:`Spares`,value:r>0?`${r}`:`None`},{label:`Field Effects`,value:s.length?s.join(`, `):`None`}]}function fl(e){let t=[];for(let[n,r]of[[`fishing`,`Fishing`],[`butchering`,`Butchering`],[`woodcutting`,`Woodcutting`],[`mining`,`Mining`],[`hunting`,`Hunting`]]){let i=rr(e,n);if(!i)continue;let a=x.find(e=>e.id===i),o=a&&a.tier!==`primitive`?`${qo(a.tier)} `:``;t.push(n===`hunting`&&a?`${r} (${a.label})`:`${o}${r}`)}return t}function pl(e,t){let n=x.find(e=>e.id===t),r=e.tools[t];if(!n||!r.owned)return``;let i=er(t),a=Math.max(0,r.durability),o=a>0,s=(a/i*100).toFixed(1),c=[{label:`Durability`,value:o?`${a}/${i}`:`Broken`},{label:`Inventory`,value:`${r.quantity} ${r.quantity===1?`spare`:`spares`}`},...Go(t)],l=!!Bo[t];return`
    <article class="equipment-slot ${o?``:`broken`} ${l?`icon-only`:``}" tabindex="0" data-tooltip-source aria-label="${n.label}" data-editor-id="equipment-slot-${t}" data-editor-label="Equipment slot: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${ml(t)}
      ${l?``:`<strong>${n.label}</strong>
            <span class="slot-durability" aria-label="${n.label} durability">
              <span>
                <b style="width: ${s}%"></b>
              </span>
              <em>${o?`${a}/${i}`:`Broken`}</em>
            </span>`}
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${n.label}</strong>
          <em>${o?`${a}/${i}`:`Broken`}</em>
        </div>
        <dl>
          ${c.map(e=>`
            <div>
              <dt>${e.label}</dt>
              <dd>${o?e.value:`Inactive`}</dd>
            </div>
          `).join(``)}
        </dl>
      </div>
    </article>
  `}function ml(e){let t=Bo[e];return t?`<img class="slot-item-icon" src="${t}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${gl(e)}</span>`}function hl(e,t){let n=t?Vo[t]:void 0,r=t?Ho[t]??`Empty`:`Empty`;return`
    <div class="equipment-slot empty ${n?`image-empty`:``}" aria-label="Empty equipment slot ${e+1}">
      ${n?`<img class="slot-shadow-icon" src="${n}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${t?gl(t):`+`}</span>`}
      <strong>${r}</strong>
    </div>
  `}function gl(e){switch(e){case`basket`:return`BK`;case`leatherBackpack`:return`BP`;case`fishingPole`:return`FP`;case`stoneAxe`:return`AX`;case`stonePickAxe`:return`PX`;case`copperPickaxe`:return`CP`;case`copperHatchet`:return`CH`;case`copperKnife`:return`CK`;case`bronzePickaxe`:return`BP`;case`bronzeHatchet`:return`BH`;case`bronzeKnife`:return`BK`;case`stoneSpear`:return`SP`;case`stoneKnife`:return`SK`;case`stoneDagger`:return`DG`;case`woodenSword`:return`WS`;case`woodenTwoHandedSword`:return`2S`;case`woodenClub`:return`WC`;case`woodenTwoHandedClub`:return`2C`;case`shortBow`:return`SB`;case`woodenTotem`:return`WT`}return(x.find(t=>t.id===e)?.label??e).split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase()}function _l(e,t){if(!(e instanceof Element))return null;let n=e.closest(`[data-tooltip-source]`);return n&&t.contains(n)?n:null}function vl(e,t){let n=t.querySelector(`.slot-tooltip`),r=xl(e);!n||!r||(r.innerHTML=n.innerHTML,r.setAttribute(`aria-hidden`,`false`),r.classList.add(`visible`),bl(e,t))}function yl(e){let t=xl(e);t&&(t.classList.remove(`visible`),t.setAttribute(`aria-hidden`,`true`),t.innerHTML=``)}function bl(e,t){let n=xl(e);if(!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth,o=window.innerHeight,s=i.width,c=i.height,l=r.left-s-8;if(l<12){let e=r.right+8;l=e+s<=a-12?e:a-s-12}let u=Math.max(12,o-c-12),d=Math.min(Math.max(r.top,12),u);n.style.left=`${Math.max(12,Math.round(l))}px`,n.style.top=`${Math.round(d)}px`}function xl(e){return e.querySelector(`.tooltip-layer`)}function Sl(e){return new Map([`.log-list`,`.side-panel-content`].map(t=>[t,e.querySelector(t)?.scrollTop??0]))}function Cl(e,t){for(let[n,r]of t){let t=e.querySelector(n);t&&(t.scrollTop=r)}}function wl(e,t,n,r=``){let i=e.log.filter(e=>lt(e)===t);return`
    <section class="log-panel ${r}" data-editor-id="${t}-log-panel" data-editor-label="${n}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>${n}</span>
        <span class="quiet">${i.length}</span>
      </div>
        <div class="log-list">
          ${i.map(e=>`
            <p class="log-entry ${e.tone}">
              <span>${e.text}</span>
              ${Tl(e)}
            </p>
          `).join(``)}
        </div>
    </section>
  `}function Tl(e){if(e.aggregateItems){let t=S.filter(t=>(e.aggregateItems?.[t]??0)>0).map(t=>{let n=e.aggregateItems?.[t]??0;return`<b>+${T(t,n)} ${Ol(t,n)}</b>`});return t.length?`<span class="log-gains">${t.join(``)}</span>`:``}return e.aggregateTotal?`<span class="log-gains"><b>+${e.aggregateTotal} ${e.aggregateUnit??``}</b></span>`:``}function El(e,t){return ve(e)?`${T(e,t)} lb`:T(e,t)}function Dl(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}function Ol(e,t){let n=E(e);if(ve(e))return`lb ${n}`;if(t===1)return n;switch(e){case`wood`:case`rabbitMeat`:case`squirrelMeat`:case`cookedRabbitMeat`:case`cookedSquirrelMeat`:case`leather`:case`rettedFlax`:case`linenThread`:case`linenCloth`:return n;case`flaxPlant`:return`Flax Plants`;case`flaxFiber`:return`Flax Fibers`;case`berry`:return`Berries`;case`coal`:case`copper`:case`tin`:case`copperBar`:case`bronzeBar`:case`pot`:case`ladle`:return n;case`copperNeedle`:return`Copper Needles`;case`bronzeNeedle`:return`Bronze Needles`;case`clothWrap`:return`Cloth Wraps`;case`linenBandage`:return`Linen Bandages`;case`simplePouch`:return`Simple Pouches`;case`linenHood`:return`Linen Hoods`;case`linenShirt`:return`Linen Shirts`;default:return`${n}s`}}function kl(e){switch(e){case`resources`:return`Resources`;case`animals`:return`Animals`;case`hunted`:return`Hunted`;case`fish`:return`Fish`;case`crafted`:return`Worked`;default:return e}}var Al=document.querySelector(`#app`);if(!Al)throw Error(`App root was not found.`);var $=Zt(),jl=1,Ml=Date.now(),Nl=Ml,Pl=Yo(Al,{requestRender:()=>Fl(),persist:()=>An($),reset:()=>{Hl(),$=jn(),Fl()},getNow:()=>Vl(),getTestSpeedMultiplier:()=>jl,toggleTestSpeed:()=>{Vl(),jl=jl===10?1:10}});function Fl(){let e=Vl();Pl($,e)}function Il(){let e=Vl(),t=Rl();if(Oi($,e),ua($,e),t!==Rl()){Fl();return}zl()}Fl(),Ll(),window.setInterval(Il,1e3),window.setInterval(()=>An($),2e3),window.addEventListener(`beforeunload`,()=>An($));function Ll(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./service-worker.js`).catch(()=>{})})}function Rl(){return JSON.stringify({inventory:$.inventory,characterInventory:$.characterInventory,resourceCounts:$.resourceCounts,characterResourceCounts:$.characterResourceCounts,characters:$.characters.map(e=>({id:e.id,condition:e.condition,locationId:e.locationId,actionLoopId:e.actionLoopId,combat:e.combat,classProgress:e.classProgress,inventory:e.inventory,resourceCounts:e.resourceCounts})),tools:$.tools,buildings:$.buildings,buildingCounts:$.buildingCounts,campfireExpiresAt:$.campfireExpiresAt,seenResources:$.seenResources,skills:$.skills,combat:$.combat,actionLoops:$.actionLoops,currentActions:z($).map(e=>({actionId:e.actionId,characterId:e.characterId,phase:e.phase,originLocationId:e.originLocationId,targetLocationId:e.targetLocationId,locationId:e.locationId,loopActionIds:e.loopActionIds,loopLocationIds:e.loopLocationIds,loopIndex:e.loopIndex,nextLoopIndex:e.nextLoopIndex,followUpActionId:e.followUpActionId,startedAt:e.startedAt,endsAt:e.endsAt})),logHead:$.log[0]?.id??``,logLength:$.log.length})}function zl(){let e=Vl();Bl(e);let t=B($);if(!t)return;let n=Math.min(1,Math.max(0,ki($,e))),r=document.querySelector(`[data-action-progress]`),i=document.querySelector(`[data-action-remaining]`),a=document.querySelector(`[data-smithing-action-progress]`),o=document.querySelector(`[data-smithing-action-remaining]`),s=document.querySelector(`[data-textile-action-progress]`),c=document.querySelector(`[data-textile-action-remaining]`);r&&(r.style.transform=`scaleX(${n.toFixed(4)})`),i&&(i.textContent=q(t.endsAt-e)),a&&(a.style.transform=`scaleX(${n.toFixed(4)})`),o&&(o.textContent=q(t.endsAt-e)),s&&(s.style.transform=`scaleX(${n.toFixed(4)})`),c&&(c.textContent=q(t.endsAt-e))}function Bl(e){let t=document.querySelectorAll(`[data-campfire-remaining]`);if(!(!t.length||!$.campfireExpiresAt))for(let n of t)n.textContent=q($.campfireExpiresAt-e)}function Vl(){let e=Date.now(),t=Math.max(0,e-Nl);return Ml+=t*jl,Nl=e,Ml}function Hl(){Ml=Date.now(),Nl=Ml}function Ul(){zl(),window.requestAnimationFrame(Ul)}window.requestAnimationFrame(Ul);