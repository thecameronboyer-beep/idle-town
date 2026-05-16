import"./modulepreload-polyfill-CSRv37U6.js";/* empty css              */import{a as e,c as t,d as n,f as r,i,l as a,m as o,n as s,o as c,p as l,r as u,s as d,u as f}from"./gatherables-CDOyq50F.js";var p=[`craftGlassVial`,`brewHealthPotion`,`brewManaPotion`],m=[{actionId:`craftGlassVial`,label:`Craft Glass Vial`,verb:`firing glass vials`,panel:`brewing`,kind:`vessel`,durationMs:18e3,cost:{sand:3,coal:1},output:{glassVial:2},blurb:`Fire clean desert sand into small potion vessels.`,unlockHint:`Build Stone Furnace`},{actionId:`brewHealthPotion`,label:`Brew Health Potion`,verb:`brewing a health potion`,panel:`brewing`,kind:`potion`,durationMs:26e3,cost:{glassVial:1,water:1,yarrow:1,plantainLeaf:1},output:{healthPotion:1},blurb:`Steep meadow medicines into a vial for future healing.`,unlockHint:`Craft Glass Vial and find Meadow Ingredients`},{actionId:`brewManaPotion`,label:`Brew Mana Potion`,verb:`brewing a mana potion`,panel:`brewing`,kind:`potion`,durationMs:26e3,cost:{glassVial:1,water:1,riverMint:1,silverleafHerb:1},output:{manaPotion:1},blurb:`Steep river herbs into a vial for future mana recovery.`,unlockHint:`Craft Glass Vial and find River Ingredients`}],h=m.filter(e=>e.panel===`brewing`).map(e=>e.actionId);function g(e){return m.find(t=>t.actionId===e)}function _(e){return p.some(t=>t===e)}var v=[`smeltCopperBar`,`smeltBronzeBar`,`craftPot`,`craftLadle`,`craftCopperPickaxe`,`craftCopperHatchet`,`craftCopperKnife`,`craftBronzePickaxe`,`craftBronzeHatchet`,`craftBronzeKnife`],ee=[{actionId:`smeltCopperBar`,label:`Smelt Copper Bar`,verb:`smelting copper`,kind:`smelting`,material:`copper`,durationMs:22e3,cost:{copper:2,coal:1},output:{copperBar:1},blurb:`Refine soft copper ore into a first workable bar.`,unlockHint:`Build Stone Furnace`},{actionId:`smeltBronzeBar`,label:`Smelt Bronze Bar`,verb:`smelting bronze`,kind:`smelting`,material:`bronze`,durationMs:32e3,cost:{copper:2,tin:1,coal:2},output:{bronzeBar:1},blurb:`Blend copper and tin into a harder bronze bar.`,unlockHint:`Craft a Copper Tool`},{actionId:`craftPot`,label:`Craft Pot`,verb:`shaping a pot`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:2},output:{pot:1},blurb:`Hammer copper into a simple vessel.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftLadle`,label:`Craft Ladle`,verb:`shaping a ladle`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:14e3,cost:{copperBar:1,stick:1},output:{ladle:1},blurb:`Rivet a small copper cup to a wooden handle.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftCopperPickaxe`,label:`Craft Copper Pickaxe`,verb:`smithing a copper pickaxe`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:24e3,cost:{copperBar:3,stick:1,flaxFiber:1},toolId:`copperPickaxe`,blurb:`A softer metal pick with better balance than stone.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperHatchet`,label:`Craft Copper Hatchet`,verb:`smithing a copper hatchet`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:22e3,cost:{copperBar:2,stick:1,flaxFiber:1},toolId:`copperHatchet`,blurb:`A compact copper chopping head lashed to a handle.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperKnife`,label:`Craft Copper Knife`,verb:`smithing a copper knife`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:1,stick:1,flaxFiber:1},toolId:`copperKnife`,blurb:`A sharper, longer-lasting knife for camp work.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftBronzePickaxe`,label:`Craft Bronze Pickaxe`,verb:`smithing a bronze pickaxe`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:3e4,cost:{bronzeBar:3,stick:1,flaxFiber:1},toolId:`bronzePickaxe`,blurb:`A sturdy bronze mining tool with a harder edge.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeHatchet`,label:`Craft Bronze Hatchet`,verb:`smithing a bronze hatchet`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:28e3,cost:{bronzeBar:2,stick:1,flaxFiber:1},toolId:`bronzeHatchet`,blurb:`A bronze chopping tool that holds its bite.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeKnife`,label:`Craft Bronze Knife`,verb:`smithing a bronze knife`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:22e3,cost:{bronzeBar:1,stick:1,flaxFiber:1},toolId:`bronzeKnife`,blurb:`A reliable bronze edge for finer butchering.`,unlockHint:`Smelt Bronze Bar`}],y=ee.filter(e=>e.kind===`smelting`).map(e=>e.actionId),b=ee.filter(e=>e.kind===`smithing`).map(e=>e.actionId);function x(e){return ee.find(t=>t.actionId===e)}function S(e){return v.some(t=>t===e)}var te=[`copperNeedle`,`bronzeNeedle`],ne=[{actionId:`retFlax`,label:`Ret Flax`,verb:`retting flax`,kind:`retting`,durationMs:6e4,cost:{flaxPlant:3},output:{rettedFlax:3},blurb:`Soak and wait out whole flax stalks until the fibers loosen from the woody stem.`,unlockHint:`Gather Flax Plant`,requiredSeenResources:[`flaxPlant`]},{actionId:`separateFlaxFiber`,label:`Separate Flax Fiber`,verb:`breaking flax`,kind:`fiber`,durationMs:3e4,cost:{rettedFlax:2},output:{flaxFiber:3},blurb:`Break, scrape, and comb retted stalks into clean flax fiber.`,unlockHint:`Ret Flax`,requiredSeenResources:[`rettedFlax`]},{actionId:`handSpinLinenThread`,label:`Hand Spin Linen Thread`,verb:`hand-spinning thread`,kind:`spinning`,durationMs:26e3,cost:{flaxFiber:1},output:{linenThread:1},blurb:`Twist clean flax fiber into usable linen thread by hand.`,unlockHint:`Separate Flax Fiber`,requiredSeenResources:[`flaxFiber`]},{actionId:`spinLinenThread`,label:`Spin Linen Thread`,verb:`spinning thread`,kind:`spinning`,durationMs:18e3,cost:{flaxFiber:5},output:{linenThread:5},blurb:`Use the spinning wheel to turn a batch of flax fiber into thread more quickly.`,unlockHint:`Build Primitive Spinning Wheel`,requiredBuildings:[`primitiveSpinningWheel`],requiredSeenResources:[`flaxFiber`]},{actionId:`weaveLinenCloth`,label:`Weave Linen Cloth`,verb:`weaving linen cloth`,kind:`weaving`,durationMs:36e3,cost:{linenThread:4},output:{linenCloth:1},blurb:`Work linen thread across the loom into a sturdy cloth panel.`,unlockHint:`Build Primitive Loom`,requiredBuildings:[`primitiveLoom`],requiredSeenResources:[`linenThread`]},{actionId:`craftCopperNeedle`,label:`Craft Copper Needle`,verb:`crafting a copper needle`,kind:`tooling`,durationMs:12e3,cost:{copperBar:1},output:{copperNeedle:1},blurb:`Draw a soft copper bar into a basic needle for stitching linen.`,unlockHint:`Smelt Copper Bar`,requiredSeenResources:[`copperBar`]},{actionId:`craftBronzeNeedle`,label:`Craft Bronze Needle`,verb:`crafting a bronze needle`,kind:`tooling`,durationMs:14e3,cost:{bronzeBar:1},output:{bronzeNeedle:1},blurb:`Shape a harder bronze needle for steadier sewing work.`,unlockHint:`Smelt Bronze Bar`,requiredSeenResources:[`bronzeBar`]},{actionId:`sewClothWrap`,label:`Sew Cloth Wrap`,verb:`sewing a cloth wrap`,kind:`sewing`,durationMs:14e3,cost:{linenCloth:1,linenThread:1},output:{clothWrap:1},blurb:`Hem a small linen wrap for tying and protecting loose goods.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]},{actionId:`sewLinenBandage`,label:`Sew Linen Bandage`,verb:`sewing a linen bandage`,kind:`sewing`,durationMs:12e3,cost:{linenCloth:1},output:{linenBandage:1},blurb:`Cut and stitch clean linen into simple bandage strips.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]},{actionId:`sewSimplePouch`,label:`Sew Simple Pouch`,verb:`sewing a simple pouch`,kind:`sewing`,durationMs:22e3,cost:{linenCloth:2,linenThread:2},output:{simplePouch:1},blurb:`Sew a small pouch with tied corners and a linen drawstring.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]},{actionId:`sewLinenHood`,label:`Sew Linen Hood`,verb:`sewing a linen hood`,kind:`sewing`,durationMs:24e3,cost:{linenCloth:2,linenThread:2},output:{linenHood:1},blurb:`Cut and sew a simple linen hood from woven cloth panels.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]},{actionId:`sewLinenShirt`,label:`Sew Linen Shirt`,verb:`sewing a linen shirt`,kind:`sewing`,durationMs:3e4,cost:{linenCloth:4,linenThread:3},output:{linenShirt:1},blurb:`Stitch linen panels into a simple shirt for future clothing systems.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]}],re=ne.map(e=>e.actionId),ie=de(`retting`),ae=de(`fiber`),oe=de(`spinning`),se=de(`weaving`),ce=de(`tooling`),le=de(`sewing`);function C(e){return ne.find(t=>t.actionId===e)}function ue(e){return ne.some(t=>t.actionId===e)}function de(e){return ne.filter(t=>t.kind===e).map(e=>e.actionId)}var fe=[{id:`gatherSticks`,label:`Gather Sticks`,verb:`gathering sticks`,durationMs:7e3,blurb:`Slow, reliable foraging near camp.`},{id:`gatherStones`,label:`Gather Stones`,verb:`searching for stones`,durationMs:8500,blurb:`Cameron checks creek beds and exposed roots.`},{id:`gatherFlaxPlants`,label:`Gather Flax Plants`,verb:`cutting flax plants`,durationMs:11e3,blurb:`Cut whole flax stalks for later retting and fiber work.`},{id:`gatherFlaxFibers`,label:`Gather Flax Fibers`,verb:`pulling flax fibers`,durationMs:1e4,blurb:`Thin stalks stripped by hand for future craft.`},{id:`gatherMeadowIngredients`,label:`Gather Meadow Ingredients`,verb:`gathering meadow ingredients`,durationMs:12e3,blurb:`Search the meadow for herbs, flowers, roots, and small fruit.`},{id:`gatherForestIngredients`,label:`Gather Forest Forage`,verb:`gathering forest forage`,durationMs:14e3,blurb:`Search the forest floor for berries, herbs, nuts, fungus, and resin.`},{id:`gatherRiverIngredients`,label:`Gather River Forage`,verb:`gathering river forage`,durationMs:13500,blurb:`Search the riverbank for wetland herbs, roots, seeds, and fungus.`},{id:`gatherMineIngredients`,label:`Gather Mine Forage`,verb:`gathering mine forage`,durationMs:17e3,blurb:`Search the mine for cave herbs, fungus, roots, crystals, and lichens.`},{id:`gatherDesertIngredients`,label:`Gather Desert Forage`,verb:`gathering desert forage`,durationMs:18e3,blurb:`Search the desert scrub for hardy herbs, fruits, roots, flowers, and fungus.`},...s.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...i.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),{id:`gatherSand`,label:`Gather Sand`,verb:`gathering sand`,durationMs:1e4,blurb:`Collect clean desert sand for furnace glasswork.`},{id:`mineCoal`,label:`Mine Coal`,verb:`mining coal`,durationMs:3e4,blurb:`Chip dark fuel from the mine wall.`},{id:`mineCopper`,label:`Mine Copper`,verb:`mining copper`,durationMs:3e4,blurb:`Break reddish ore from stone seams.`},{id:`mineTin`,label:`Mine Tin`,verb:`mining tin`,durationMs:3e4,blurb:`Work pale ore from fractured rock.`},{id:`fishRiver`,label:`Fishing River`,verb:`fishing the river`,durationMs:15e3,blurb:`Cast into the shallows for small river fish.`},{id:`gatherWater`,label:`Gather Water`,verb:`gathering water`,durationMs:9e3,blurb:`Carry usable river water back for camp cooking.`},{id:`craftLowestTool`,label:`Primitive Tools`,verb:`balancing tool stock`,durationMs:15e3,blurb:`Craft whichever primitive tool has the lowest current stock.`},{id:`craftBasket`,label:`Craft Basket`,verb:`crafting a basket`,durationMs:15e3,blurb:`Weave flax fibers around a simple stick frame.`},{id:`craftWoodenSpoon`,label:`Craft Wooden Spoon`,verb:`carving a wooden spoon`,durationMs:1e4,blurb:`Carve a small wooden spoon for eating hot camp stew.`},{id:`craftFishingPole`,label:`Craft Fishing Pole`,verb:`crafting a fishing pole`,durationMs:15e3,blurb:`Bind flax line to a flexible stick.`},{id:`craftWoodenBowl`,label:`Craft Wooden Bowl`,verb:`carving a wooden bowl`,durationMs:12e3,blurb:`Carve a simple camp bowl from usable wood.`},{id:`craftStoneKnife`,label:`Craft Stone Knife`,verb:`crafting a stone knife`,durationMs:15e3,blurb:`Shape a compact edge for hide work and close combat.`},{id:`craftStoneAxe`,label:`Craft Stone Hatchet`,verb:`crafting a stone hatchet`,durationMs:15e3,blurb:`Bind a chopping head to a short haft.`},{id:`craftStonePickAxe`,label:`Craft Stone Pick Axe`,verb:`crafting a stone pick axe`,durationMs:15e3,blurb:`Lash a pointed stone head to a sturdy handle.`},{id:`craftStoneSpear`,label:`Craft Stone Spear`,verb:`crafting a stone spear`,durationMs:15e3,blurb:`Lash a stone point to a balanced shaft.`},{id:`craftWoodenClub`,label:`Craft Wooden Club`,verb:`crafting a wooden club`,durationMs:16e3,blurb:`Shape hardwood into a heavier primitive weapon.`},{id:`craftWoodenTwoHandedClub`,label:`Craft Wooden 2H Club`,verb:`crafting a wooden two-handed club`,durationMs:18e3,blurb:`Shape a larger club for slower, stronger blows.`},{id:`craftWoodenSword`,label:`Craft Wooden Sword`,verb:`crafting a wooden sword`,durationMs:17e3,blurb:`Harden and bind a wooden blade for controlled combat.`},{id:`craftWoodenTwoHandedSword`,label:`Craft Wooden 2H Sword`,verb:`crafting a wooden two-handed sword`,durationMs:2e4,blurb:`Shape a long wooden blade that favors power over speed.`},{id:`craftShortBow`,label:`Craft Short Bow`,verb:`crafting a short bow`,durationMs:2e4,blurb:`Bend wood and flax fiber into a simple ranged weapon.`},{id:`craftWoodenTotem`,label:`Craft Wooden Totem`,verb:`carving a wooden totem`,durationMs:19e3,blurb:`Carve a wooden focus for steadier primitive combat.`},{id:`chopTrees`,label:`Chop Trees`,verb:`chopping trees`,durationMs:18e3,blurb:`The first real push beyond loose branches.`},{id:`huntSmallAnimals`,label:`Hunt Small Animals`,verb:`hunting small animals`,durationMs:28e3,blurb:`Bring back whole rabbits or squirrels for later work.`},{id:`butcherFish`,label:`Butcher Fish`,verb:`butchering fish`,durationMs:15e3,blurb:`Clean one carried fish into matching filets at half weight.`},{id:`butcherRabbit`,label:`Butcher Rabbit`,verb:`butchering a rabbit`,durationMs:18e3,blurb:`Break down a rabbit into useful parts.`},{id:`butcherSquirrel`,label:`Butcher Squirrel`,verb:`butchering a squirrel`,durationMs:14e3,blurb:`Break down a squirrel into useful parts.`},{id:`cookRabbitMeat`,label:`Cook Rabbit Meat`,verb:`cooking rabbit meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`cookSquirrelMeat`,label:`Cook Squirrel Meat`,verb:`cooking squirrel meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`tanHide`,label:`Tan Hide`,verb:`working hide`,durationMs:36e3,blurb:`Scrape, stretch, wait, repeat.`},{id:`craftLeatherBackpack`,label:`Craft Leather Backpack`,verb:`crafting a leather backpack`,durationMs:15e3,blurb:`Knot a crude leather sling pouch with a drawstring.`},...ee.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...m.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...ne.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb}))];function w(e){return fe.find(t=>t.id===e)}var pe=[{id:`fighter`,label:`Fighter`,weaponLabel:`Sword`,role:`A steady front-line duelist.`,range:`melee`,maxHp:34,maxMana:10},{id:`warrior`,label:`Warrior`,weaponLabel:`2H Sword`,role:`A slower heavy striker.`,range:`melee`,maxHp:38,maxMana:8},{id:`bruiser`,label:`Bruiser`,weaponLabel:`Club`,role:`A rugged close-range brawler.`,range:`melee`,maxHp:36,maxMana:8},{id:`crusher`,label:`Crusher`,weaponLabel:`2H Club`,role:`A heavy impact fighter.`,range:`melee`,maxHp:40,maxMana:6},{id:`archer`,label:`Archer`,weaponLabel:`Short Bow`,role:`A ranged skirmisher.`,range:`ranged`,maxHp:28,maxMana:12},{id:`shaman`,label:`Shaman`,weaponLabel:`Totem`,role:`A focus user prepared for future support magic.`,range:`focus`,maxHp:30,maxMana:30},{id:`mage`,label:`Mage`,weaponLabel:`Wand`,role:`A focused caster placeholder for future wand combat.`,range:`focus`,maxHp:24,maxMana:36},{id:`caster`,label:`Caster`,weaponLabel:`Staff`,role:`A long-form spellcaster placeholder for future staff combat.`,range:`focus`,maxHp:26,maxMana:40},{id:`rogue`,label:`Rogue`,weaponLabel:`Dagger`,role:`A fast close-range striker.`,range:`melee`,maxHp:30,maxMana:14}],me={woodenSword:`fighter`,woodenTwoHandedSword:`warrior`,woodenClub:`bruiser`,woodenTwoHandedClub:`crusher`,shortBow:`archer`,woodenTotem:`shaman`,stoneKnife:`rogue`,stoneSpear:`warrior`},he=[{id:`goblin`,label:`Goblin`,blurb:`A small melee raider that closes distance and swings at nearby party members.`,glyph:`G`,maxHp:16,maxMana:0,damage:2,attackRange:1,actEveryMs:2200}],ge=[{id:`ruins`,label:`The Ruins`,blurb:`Broken stone lanes where the first hostile creatures test the camp's fighters.`,gridWidth:7,gridHeight:5,enemyIds:[`goblin`]}],_e=pe.map(e=>e.id),ve=he.map(e=>e.id),ye=ge.map(e=>e.id);function be(e){return pe.find(t=>t.id===e)??pe[0]}function xe(e){return he.find(t=>t.id===e)??he[0]}function Se(e){return ge.find(t=>t.id===e)??ge[0]}var Ce=[{id:`campfire`,name:`Campfire`,label:`Campfire`,requiredBuildingId:`campfire`,tags:[`primitive`,`stew`,`open-fire`],fuelMode:`existing-campfire`,description:`A simple fire ring that can hold one primitive cooking job at a time.`}],we=[Me({id:`rabbitStew`,name:`Rabbit Stew`,outputId:`rabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`dandelionGreens`,role:`plant`}],hunger:24,xpReward:220,tags:[`meat`,`starter`]}),Me({id:`squirrelHerbStew`,name:`Squirrel Herb Stew`,outputId:`squirrelHerbStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`plantainLeaf`,role:`plant`},{id:`yarrow`,role:`seasoning`}],hunger:19,xpReward:240,tags:[`meat`,`herbal`]}),Me({id:`rootStew`,name:`Root Stew`,outputId:`rootStew`,ingredients:[{id:`sunrootTubers`,role:`plant`},{id:`wildCarrot`,role:`plant`},{id:`clover`,role:`plant`}],hunger:18,xpReward:210,tags:[`meadow`,`vegetarian`,`roots`]}),Me({id:`wildGarlicRabbitStew`,name:`Wild Garlic Rabbit Stew`,outputId:`wildGarlicRabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`wildGarlic`,role:`seasoning`},{id:`sorrel`,role:`plant`}],hunger:28,xpReward:275,levelRequirement:2,tags:[`meat`,`allium`,`sour`]}),Me({id:`meadowStew`,name:`Meadow Stew`,outputId:`meadowStew`,ingredients:[{id:`dandelionGreens`,role:`plant`},{id:`clover`,role:`plant`},{id:`plantainLeaf`,role:`plant`},{id:`wildOnion`,role:`seasoning`},{id:`sunrootTubers`,role:`plant`}],hunger:22,xpReward:260,levelRequirement:2,tags:[`meadow`,`vegetarian`,`five-plant`]}),Me({id:`mintedSquirrelStew`,name:`Minted Squirrel Stew`,outputId:`mintedSquirrelStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`mint`,role:`seasoning`},{id:`wildOnion`,role:`seasoning`}],hunger:22,xpReward:285,levelRequirement:3,tags:[`meat`,`aromatic`]}),...je(`rabbitMeat`,`Rabbit`,[[`sorrel`,`Sorrel`,25],[`yarrow`,`Yarrow`,24],[`hearthcap`,`Hearthcap`,27]]),...je(`squirrelMeat`,`Squirrel`,[[`wildGarlic`,`Wild Garlic`,22],[`fennel`,`Fennel`,21],[`hearthcap`,`Hearthcap`,23]])],Te=we.map(e=>e.id);we.filter(e=>e.tags.includes(`stew`)),we.flatMap(e=>e.outputs.map(e=>e.resourceId));var Ee=we.map(e=>({id:e.outputs[0].resourceId,label:e.name,group:`food`,blurb:Ne(e),stackSize:20,weight:.8,value:Math.max(6,Math.round(e.xpReward/35)),rarity:e.levelRequirement>=3?`uncommon`:`common`,nutrition:e.nutrition,spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`prepared`,`stew`,...e.tags],compatibility:[`eat`,`serve`,`tavern`]}}));function De(e){return Ce.find(t=>t.id===e)}function Oe(e){return we.find(t=>t.id===e)}function ke(e){return e.ingredients.reduce((e,t)=>(t.resourceId&&t.consumed!==!1&&(e[t.resourceId]=(e[t.resourceId]??0)+t.amount),e),{})}function Ae(e){return e.outputs.reduce((e,t)=>(e[t.resourceId]=(e[t.resourceId]??0)+t.amount,e),{})}function je(e,t,n){return n.map(([n,r,i],a)=>Me({id:`${n}${t}Stew`,name:`${r} ${t} Stew`,outputId:`${n}${t}Stew`,ingredients:[{id:e,role:`meat`},{id:n,role:`seasoning`},{id:a%2==0?`dandelionGreens`:`plantainLeaf`,role:`plant`}],hunger:i,xpReward:250+a*20,levelRequirement:2+a,tags:[`meat`,`generated`,`accent`]}))}function Me(e){let t=[{resourceId:e.outputId,amount:1},{resourceId:`dirtyBowl`,amount:1}];return{id:e.id,name:e.name,station:`campfire`,cookTimeMs:e.cookTimeMs??24e3,ingredients:[{resourceId:`water`,amount:1,role:`liquid`},{resourceId:`woodenBowl`,amount:1,role:`vessel`},...e.ingredients.map(e=>({resourceId:e.id,amount:e.amount??1,role:e.role}))],outputs:t,xpReward:e.xpReward,levelRequirement:e.levelRequirement??1,tags:[`stew`,`primitive`,...e.tags??[]],nutrition:{hunger:e.hunger},failureChance:e.failureChance??.03,modifiers:[`quality-ready`,`season-ready`,`station-ready`]}}function Ne(e){return e.tags.includes(`vegetarian`)?`A rough bowl of meadow plants simmered until soft enough to fill the belly.`:e.tags.includes(`aromatic`)||e.tags.includes(`accent`)?`A primitive stew carried by a strong meadow scent and small-game broth.`:`A simple campfire stew of water, gathered plants, and whatever meat the day allowed.`}var T=[{id:`stoneKnife`,label:`Stone Knife`,craftActionId:`craftStoneKnife`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A compact stone edge for butchering and close-quarters combat.`,maxDurability:18,roles:[`butchering`,`hunting`],roleTiers:{butchering:1},tier:`primitive`,weapon:{damage:2.2,speed:1.2,hands:1,range:`melee`},quickCraft:!0},{id:`stoneAxe`,label:`Stone Hatchet`,craftActionId:`craftStoneAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Heavy enough to bite into small trees.`,maxDurability:12,roles:[`woodcutting`],roleTiers:{woodcutting:1},tier:`primitive`,quickCraft:!0},{id:`stonePickAxe`,label:`Stone Pick Axe`,craftActionId:`craftStonePickAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A pointed stone head for breaking stubborn ground.`,maxDurability:12,roles:[`mining`],roleTiers:{mining:1},tier:`primitive`,quickCraft:!0},{id:`stoneSpear`,label:`Stone Spear`,craftActionId:`craftStoneSpear`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A reach weapon for rabbits and squirrels.`,maxDurability:10,roles:[`hunting`],tier:`primitive`,weapon:{damage:2.4,speed:.9,hands:2,range:`melee`},quickCraft:!0},{id:`woodenClub`,label:`Wooden Club`,craftActionId:`craftWoodenClub`,recipe:{wood:2},blurb:`A shaped hardwood weapon with more heft than loose branches.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3,speed:.9,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedClub`,label:`Wooden 2H Club`,craftActionId:`craftWoodenTwoHandedClub`,recipe:{wood:4},blurb:`A heavy two-handed cudgel for decisive primitive strikes.`,maxDurability:24,roles:[`hunting`],tier:`primitive`,weapon:{damage:4,speed:.75,hands:2,range:`melee`},quickCraft:!0},{id:`woodenSword`,label:`Wooden Sword`,craftActionId:`craftWoodenSword`,recipe:{wood:2,flaxFiber:1},blurb:`A hardened wooden blade for controlled early combat.`,maxDurability:20,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.4,speed:1,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedSword`,label:`Wooden 2H Sword`,craftActionId:`craftWoodenTwoHandedSword`,recipe:{wood:4,flaxFiber:2},blurb:`A long wooden blade that trades speed for stronger blows.`,maxDurability:26,roles:[`hunting`],tier:`primitive`,weapon:{damage:4.3,speed:.85,hands:2,range:`melee`},quickCraft:!0},{id:`shortBow`,label:`Short Bow`,craftActionId:`craftShortBow`,recipe:{wood:2,flaxFiber:3},blurb:`A simple bow that brings safer range to small-game hunts.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.8,speed:1.1,hands:2,range:`ranged`},quickCraft:!0},{id:`woodenTotem`,label:`Wooden Totem`,craftActionId:`craftWoodenTotem`,recipe:{wood:3,flaxFiber:2},blurb:`A carved focus that steadies the hand during primitive combat.`,maxDurability:22,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.2,speed:.8,hands:1,range:`focus`},quickCraft:!0},{id:`copperPickaxe`,label:`Copper Pickaxe`,recipe:{copperBar:3,stick:1,flaxFiber:1},blurb:`A softer metal pick with better balance than stone.`,maxDurability:24,roles:[`mining`],roleTiers:{mining:2},tier:`copper`},{id:`copperHatchet`,label:`Copper Hatchet`,recipe:{copperBar:2,stick:1,flaxFiber:1},blurb:`A compact copper chopping head lashed to a handle.`,maxDurability:22,roles:[`woodcutting`],roleTiers:{woodcutting:2},tier:`copper`},{id:`copperKnife`,label:`Copper Knife`,recipe:{copperBar:1,stick:1,flaxFiber:1},blurb:`A sharper, longer-lasting knife for camp work.`,maxDurability:30,roles:[`butchering`],roleTiers:{butchering:2},tier:`copper`},{id:`bronzePickaxe`,label:`Bronze Pickaxe`,recipe:{bronzeBar:3,stick:1,flaxFiber:1},blurb:`A sturdy bronze mining tool with a harder edge.`,maxDurability:42,roles:[`mining`],roleTiers:{mining:3},tier:`bronze`},{id:`bronzeHatchet`,label:`Bronze Hatchet`,recipe:{bronzeBar:2,stick:1,flaxFiber:1},blurb:`A bronze chopping tool that holds its bite.`,maxDurability:38,roles:[`woodcutting`],roleTiers:{woodcutting:3},tier:`bronze`},{id:`bronzeKnife`,label:`Bronze Knife`,recipe:{bronzeBar:1,stick:1,flaxFiber:1},blurb:`A reliable bronze edge for finer butchering.`,maxDurability:48,roles:[`butchering`],roleTiers:{butchering:3},tier:`bronze`},{id:`fishingPole`,label:`Fishing Pole`,craftActionId:`craftFishingPole`,recipe:{stick:1,flaxFiber:1},blurb:`A simple line and hook for working the river.`,maxDurability:16,roles:[`fishing`],roleTiers:{fishing:1},tier:`primitive`,quickCraft:!0},{id:`basket`,label:`Basket`,craftActionId:`craftBasket`,recipe:{stick:1,flaxFiber:3},blurb:`A one-hand woven carrier for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`,quickCraft:!0},{id:`leatherBackpack`,label:`Leather Backpack`,recipe:{leather:10},blurb:`A crude sling pouch for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`}],Pe=T.filter(e=>!!(e.craftActionId&&e.quickCraft)),Fe=[{id:`campfire`,label:`Campfire`,recipe:{stick:8,stone:5},blurb:`A fixed fire ring for cooking meat.`},{id:`tanningRack`,label:`Tanning Rack`,recipe:{stick:6,wood:4,stone:2},blurb:`A rough frame for turning hide into leather.`},{id:`hideTent`,label:`Hide Tent`,recipe:{wood:5,hide:10},blurb:`A hide shelter for holding warmth at camp.`},{id:`crudeStoneFurnace`,label:`Stone Furnace`,recipe:{stone:16,stick:6,wood:4},blurb:`A low stone furnace hot enough for first smelting.`},{id:`primitiveSpinningWheel`,label:`Primitive Spinning Wheel`,recipe:{wood:8,stick:6,linenThread:2},blurb:`A simple frame, spindle, and wheel for turning flax fiber into thread faster.`},{id:`primitiveLoom`,label:`Primitive Loom`,recipe:{wood:10,stick:8,linenThread:4},blurb:`A wooden frame for stretching warp threads and weaving linen cloth.`}],Ie=[{id:`stick`,label:`Stick`,group:`resources`,blurb:`Dry kindling and crude handles.`},{id:`stone`,label:`Stone`,group:`resources`,blurb:`Weight, edge, and spark.`},{id:`flaxPlant`,label:`Flax Plant`,group:`resources`,blurb:`Fresh flax stalks that need retting before useful fiber can be combed free.`},{id:`rettedFlax`,label:`Retted Flax`,group:`resources`,blurb:`Soaked and loosened flax stems ready for breaking and combing.`},{id:`flaxFiber`,label:`Flax Fiber`,group:`resources`,blurb:`Pale plant fiber for future cordage and cloth.`},{id:`linenThread`,label:`Linen Thread`,group:`crafted`,blurb:`Twisted flax fiber ready for weaving, stitching, and more precise craft.`},{id:`linenCloth`,label:`Linen Cloth`,group:`crafted`,blurb:`Woven linen panels ready for sewing into useful camp goods.`},{id:`wood`,label:`Wood`,group:`resources`,blurb:`Usable lengths from felled trees.`},{id:`woodenBowl`,label:`Wooden Bowl`,group:`utensils`,blurb:`A hand-carved wooden bowl for simple camp meals.`,stackSize:20,weight:.5,value:3,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`vessel`,`primitive`],compatibility:[`stew`]}},{id:`coal`,label:`Coal`,group:`resources`,blurb:`Dark fuel chipped from the mine.`},{id:`copper`,label:`Copper`,group:`resources`,blurb:`Soft reddish ore for future metalwork.`},{id:`tin`,label:`Tin`,group:`resources`,blurb:`Pale ore that will matter once bronze is possible.`},{id:`sand`,label:`Sand`,group:`resources`,blurb:`Clean desert sand ready for furnace glasswork.`,stackSize:99,weight:.2,value:1,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`copperBar`,label:`Copper Bar`,group:`crafted`,blurb:`A worked bar ready for first metal tools.`},{id:`bronzeBar`,label:`Bronze Bar`,group:`crafted`,blurb:`A harder alloy bar for sturdier tools.`},{id:`copperNeedle`,label:`Copper Needle`,group:`crafted`,blurb:`A simple metal needle for first linen sewing.`},{id:`bronzeNeedle`,label:`Bronze Needle`,group:`crafted`,blurb:`A stronger needle for steady linen sewing work.`},{id:`clothWrap`,label:`Cloth Wrap`,group:`crafted`,blurb:`A simple folded linen wrap for bundling small supplies.`},{id:`linenBandage`,label:`Linen Bandage`,group:`crafted`,blurb:`Clean linen strips prepared for future medical use.`},{id:`simplePouch`,label:`Simple Pouch`,group:`crafted`,blurb:`A small sewn linen pouch for organizing camp goods.`},{id:`linenHood`,label:`Linen Hood`,group:`crafted`,blurb:`A simple sewn hood for future clothing systems.`},{id:`linenShirt`,label:`Linen Shirt`,group:`crafted`,blurb:`A plain linen shirt, ready for later equipment and quality systems.`},{id:`pot`,label:`Pot`,group:`crafted`,blurb:`A simple worked vessel for holding heat and liquid.`},{id:`ladle`,label:`Ladle`,group:`crafted`,blurb:`A small handled tool for moving hot metal safely.`},{id:`glassVial`,label:`Glass Vial`,group:`crafted`,blurb:`A small fired vessel for careful alchemy work.`,stackSize:50,weight:.1,value:4,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`healthPotion`,label:`Health Potion`,group:`liquids`,blurb:`A red meadow brew prepared for future healing systems.`,stackSize:20,weight:.2,value:12,rarity:`uncommon`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`manaPotion`,label:`Mana Potion`,group:`liquids`,blurb:`A blue river brew prepared for future mana recovery systems.`,stackSize:20,weight:.2,value:12,rarity:`uncommon`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`water`,label:`Water`,group:`liquids`,blurb:`Clean enough river water stored for camp cooking.`,stackSize:50,weight:1,value:1,rarity:`common`,nutrition:{hydration:8},spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`water`,`liquid`,`stew-base`],compatibility:[`stew`,`brew`]}},{id:`dirtyBowl`,label:`Dirty Bowl`,group:`utensils`,blurb:`A used bowl with stew clinging to the inside. Washing can come later.`,stackSize:20,weight:.5,value:1,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`dirty`,`reuse-hook`],compatibility:[`washing`]}},{id:`woodenSpoon`,label:`Wooden Spoon`,group:`utensils`,blurb:`A small carved wooden spoon for eating hot stew without burning fingers.`,stackSize:20,weight:.2,value:2,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`spoon`,`utensil`,`primitive`],compatibility:[`eat-stew`]}},{id:`minnow`,label:`Minnow`,group:`fish`,blurb:`Tiny river fish, quick to smoke or stew.`},{id:`stoneLoach`,label:`Stone Loach`,group:`fish`,blurb:`Bottom-feeding fish from cold stones.`},{id:`mudskipper`,label:`Mudskipper`,group:`fish`,blurb:`A stubborn shore fish pulled from muddy shallows.`},{id:`brookStickleback`,label:`Brook Stickleback`,group:`fish`,blurb:`Small, sharp-backed fish from fast water.`},{id:`pebblePerch`,label:`Pebble Perch`,group:`fish`,blurb:`A broad little perch hiding under river stones.`},{id:`minnowFilet`,label:`Minnow Filet`,group:`fish`,blurb:`Cleaned minnow meat, lighter after butchering.`},{id:`stoneLoachFilet`,label:`Stone Loach Filet`,group:`fish`,blurb:`Cleaned stone loach meat, lighter after butchering.`},{id:`mudskipperFilet`,label:`Mudskipper Filet`,group:`fish`,blurb:`Cleaned mudskipper meat, lighter after butchering.`},{id:`brookSticklebackFilet`,label:`Brook Stickleback Filet`,group:`fish`,blurb:`Cleaned brook stickleback meat, lighter after butchering.`},{id:`pebblePerchFilet`,label:`Pebble Perch Filet`,group:`fish`,blurb:`Cleaned pebble perch meat, lighter after butchering.`},{id:`rabbit`,label:`Rabbit`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`squirrel`,label:`Squirrel`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`rabbitMeat`,label:`Rabbit Meat`,group:`hunted`,blurb:`Fresh rabbit meat that wants fire soon.`,weight:.5,value:4,rarity:`common`,nutrition:{hunger:8},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`rabbit`],compatibility:[`stew`,`roast`]}},{id:`squirrelMeat`,label:`Squirrel Meat`,group:`hunted`,blurb:`Fresh squirrel meat that wants fire soon.`,weight:.4,value:3,rarity:`common`,nutrition:{hunger:6},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`squirrel`],compatibility:[`stew`,`roast`]}},{id:`cookedRabbitMeat`,label:`Cooked Rabbit Meat`,group:`crafted`,blurb:`A small cooked rabbit ration.`,weight:.5,value:5,rarity:`common`,nutrition:{hunger:12},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`rabbit`],compatibility:[`eat`,`stew-addition`]}},{id:`cookedSquirrelMeat`,label:`Cooked Squirrel Meat`,group:`crafted`,blurb:`A small cooked squirrel ration.`,weight:.4,value:4,rarity:`common`,nutrition:{hunger:9},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`squirrel`],compatibility:[`eat`,`stew-addition`]}},{id:`hide`,label:`Hide`,group:`resources`,blurb:`Rough animal hide, ready for scraping.`},{id:`bone`,label:`Bone`,group:`resources`,blurb:`Hard scraps for later craft.`},{id:`leather`,label:`Leather`,group:`crafted`,blurb:`Worked hide for future bags and armor.`},...c,...Ee],E=Ie.map(e=>e.id),Le=[`stick`,`stone`];Ie.filter(e=>!!e.cooking?.ingredientCategory).map(e=>e.id);var Re=Ie.filter(e=>(e.nutrition?.hunger??0)>0).map(e=>e.id),ze=[`minnow`,`stoneLoach`,`mudskipper`,`brookStickleback`,`pebblePerch`],Be=[`minnowFilet`,`stoneLoachFilet`,`mudskipperFilet`,`brookSticklebackFilet`,`pebblePerchFilet`],Ve={minnow:`minnowFilet`,stoneLoach:`stoneLoachFilet`,mudskipper:`mudskipperFilet`,brookStickleback:`brookSticklebackFilet`,pebblePerch:`pebblePerchFilet`},He=[...ze,`rabbit`,`squirrel`],Ue=[...ze,...Be,`rabbit`,`squirrel`];function We(e){return Ue.includes(e)}function Ge(e){return He.includes(e)}function Ke(e){return Re.includes(e)}function D(e,t){let n=Math.max(0,Number.isFinite(t)?t:0);return We(e)?Math.round(n*10)/10:Math.floor(n)}function qe(e,t){let n=D(e,t);return We(e)?Ye(n):`${n}`}function O(e){return Je(e)?.label??e}function Je(e){return Ie.find(t=>t.id===e)}function Ye(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}var Xe=1;function Ze(){return Xe}function Qe(e){return Xe=e===10||e===100?e:1,Xe}function $e(e){return e*Xe}function et(e){return Xe===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,(t??0)*Xe]))}function tt(e){return Xe===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Math.max(0,Math.floor((t??0)*Xe))]))}var nt=1e3,rt=[{id:`foraging`,label:`Foraging`,description:`Gathering loose food and camp materials.`},{id:`mining`,label:`Mining`,description:`Breaking stone for ore and fuel.`},{id:`fishing`,label:`Fishing`,description:`Catching river fish.`},{id:`woodcutting`,label:`Woodcutting`,description:`Chopping trees into useful wood.`},{id:`hunting`,label:`Hunting`,description:`Tracking and taking small animals.`},{id:`crafting`,label:`Crafting`,description:`Making tools and useful camp goods.`},{id:`smithing`,label:`Smithing`,description:`Smelting ore and shaping early metalwork.`},{id:`alchemy`,label:`Alchemy`,description:`Firing vials and brewing experimental potions.`},{id:`textiles`,label:`Tailoring`,description:`Retting flax, spinning thread, weaving cloth, and sewing goods.`},{id:`butchering`,label:`Butchering`,description:`Breaking animals and fish into usable parts.`},{id:`cooking`,label:`Cooking`,description:`Preparing food over fire.`},{id:`leatherworking`,label:`Leatherworking`,description:`Turning hide into leather.`},{id:`construction`,label:`Construction`,description:`Building and improving camp structures.`},{id:`agility`,label:`Agility`,description:`Moving between camp and wilderness locations.`}],it=rt.map(e=>e.id),at=Object.fromEntries(s.map(e=>[e.actionId,{skillId:`foraging`,xp:e.xp}])),ot=Object.fromEntries(i.map(e=>[e.actionId,{skillId:`foraging`,xp:e.xp}])),st={gatherSticks:{skillId:`foraging`,xp:70},gatherStones:{skillId:`foraging`,xp:85},gatherFlaxPlants:{skillId:`foraging`,xp:110},gatherFlaxFibers:{skillId:`foraging`,xp:100},gatherMeadowIngredients:{skillId:`foraging`,xp:120},gatherForestIngredients:{skillId:`foraging`,xp:140},gatherRiverIngredients:{skillId:`foraging`,xp:135},gatherMineIngredients:{skillId:`foraging`,xp:170},gatherDesertIngredients:{skillId:`foraging`,xp:180},...at,...ot,gatherSand:{skillId:`foraging`,xp:100},gatherWater:{skillId:`foraging`,xp:90},mineCoal:{skillId:`mining`,xp:360},mineCopper:{skillId:`mining`,xp:360},mineTin:{skillId:`mining`,xp:360},fishRiver:{skillId:`fishing`,xp:180},craftLowestTool:{skillId:`crafting`,xp:150},craftBasket:{skillId:`crafting`,xp:150},craftWoodenSpoon:{skillId:`crafting`,xp:100},craftFishingPole:{skillId:`crafting`,xp:150},craftWoodenBowl:{skillId:`crafting`,xp:120},craftStoneKnife:{skillId:`crafting`,xp:150},craftStoneAxe:{skillId:`crafting`,xp:170},craftStonePickAxe:{skillId:`crafting`,xp:180},craftStoneSpear:{skillId:`crafting`,xp:180},craftWoodenSword:{skillId:`crafting`,xp:200},craftWoodenTwoHandedSword:{skillId:`crafting`,xp:230},craftWoodenClub:{skillId:`crafting`,xp:180},craftWoodenTwoHandedClub:{skillId:`crafting`,xp:210},craftShortBow:{skillId:`crafting`,xp:220},craftWoodenTotem:{skillId:`crafting`,xp:220},chopTrees:{skillId:`woodcutting`,xp:220},huntSmallAnimals:{skillId:`hunting`,xp:340},butcherFish:{skillId:`butchering`,xp:150},butcherRabbit:{skillId:`butchering`,xp:220},butcherSquirrel:{skillId:`butchering`,xp:170},cookRabbitMeat:{skillId:`cooking`,xp:160},cookSquirrelMeat:{skillId:`cooking`,xp:160},tanHide:{skillId:`leatherworking`,xp:430},craftLeatherBackpack:{skillId:`leatherworking`,xp:900},retFlax:{skillId:`textiles`,xp:420},separateFlaxFiber:{skillId:`textiles`,xp:260},handSpinLinenThread:{skillId:`textiles`,xp:190},spinLinenThread:{skillId:`textiles`,xp:420},weaveLinenCloth:{skillId:`textiles`,xp:520},craftCopperNeedle:{skillId:`smithing`,xp:120},craftBronzeNeedle:{skillId:`smithing`,xp:150},sewClothWrap:{skillId:`textiles`,xp:180},sewLinenBandage:{skillId:`textiles`,xp:150},sewSimplePouch:{skillId:`textiles`,xp:260},sewLinenHood:{skillId:`textiles`,xp:300},sewLinenShirt:{skillId:`textiles`,xp:420},smeltCopperBar:{skillId:`smithing`,xp:260},smeltBronzeBar:{skillId:`smithing`,xp:420},craftPot:{skillId:`smithing`,xp:220},craftLadle:{skillId:`smithing`,xp:180},craftCopperPickaxe:{skillId:`smithing`,xp:320},craftCopperHatchet:{skillId:`smithing`,xp:280},craftCopperKnife:{skillId:`smithing`,xp:220},craftBronzePickaxe:{skillId:`smithing`,xp:500},craftBronzeHatchet:{skillId:`smithing`,xp:440},craftBronzeKnife:{skillId:`smithing`,xp:340},craftGlassVial:{skillId:`alchemy`,xp:180},brewHealthPotion:{skillId:`alchemy`,xp:320},brewManaPotion:{skillId:`alchemy`,xp:320}},ct={campfire:80,tanningRack:320,hideTent:450,crudeStoneFurnace:520,primitiveSpinningWheel:360,primitiveLoom:480};function lt(){return Object.fromEntries(it.map(e=>[e,Tt()]))}function ut(e){let t=lt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of it)t[e]=Et(n[e]);return t}function dt(e){return it.some(t=>t===e)}function ft(e){return rt.find(t=>t.id===e)??rt[0]}function k(e){let t=jt(e,1,nt);return 50*(t-1)*t*(2*t-1)/6}function pt(e){return kt(e.prestige)}function mt(e){let t=pt(e),n=e.level>=t,r=k(e.level),i=e.level>=1e3?r:k(e.level+1),a=Math.max(0,i-r),o=n?a:Math.max(0,Math.min(e.xp-r,a));return{cap:t,currentLevelXp:r,nextLevelXp:i,xpIntoLevel:o,xpForLevel:a,ratio:a<=0?1:o/a,atCap:n,canPrestige:ht(e)}}function ht(e){let t=pt(e);return t<1e3&&e.level>=t}function gt(e,t,n=Date.now()){At(e);let r=e.skills[t];return ht(r)?(r.prestige=jt(r.prestige+1,0,9),r.level=1,r.xp=0,e.updatedAt=n,e.lastSimulatedAt=n,!0):!1}function _t(e,t,n=Date.now()){let r=st[t];xt(e,r.skillId,r.xp,n)}function vt(e,t,n=Date.now()){xt(e,`construction`,ct[t],n)}function yt(e,t,n=Date.now()){t<=0||xt(e,`agility`,Math.max(1,Math.round(t/1e3*2)),n)}function bt(e,t,n=Date.now()){xt(e,`cooking`,t,n)}function xt(e,t,n,r=Date.now()){let i=Math.max(0,Math.floor($e(n)));if(i<=0)return;At(e);let a=e.skills[t],o=pt(a);a.totalXp+=i,a.xp=Math.min(k(o),a.xp+i),a.level=Ot(a.xp,o),e.updatedAt=r,e.lastSimulatedAt=r}function St(e){return st[e].skillId}function Ct(e){return $e(st[e].xp)}function wt(e){return $e(ct[e])}function A(e){let t=Math.max(0,e);return t>=1e9?`${Nt(t/1e9)}B`:t>=1e6?`${Nt(t/1e6)}M`:t>=1e3?`${Nt(t/1e3)}K`:Math.round(t).toLocaleString(`en-US`)}function Tt(){return{level:1,xp:0,totalXp:0,prestige:0,bonuses:[]}}function Et(e){if(!e||typeof e!=`object`)return Tt();let t=jt(e.prestige,0,9),n=kt(t),r=Mt(e.xp,0,k(n)),i=Math.max(r,Math.max(0,Math.floor(Number(e.totalXp??0))));return{level:Ot(r,n),xp:r,totalXp:i,prestige:t,bonuses:Dt(e.bonuses)}}function Dt(e){return Array.isArray(e)?e.filter(e=>{if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.id==`string`&&typeof t.label==`string`}):[]}function Ot(e,t){let n=1;for(;n<t&&e>=k(n+1);)n+=1;return n}function kt(e){let t=jt(e,0,9);return Math.min(nt,(t+1)*100)}function At(e){e.skills=ut(e.skills)}function jt(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Mt(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Nt(e){return e.toFixed(2).replace(/\.?0+$/,``)}function Pt(){return Object.fromEntries(E.map(e=>[e,0]))}function Ft(){return Object.fromEntries(E.map(e=>[e,0]))}function It(){return Object.fromEntries(T.map(e=>[e.id,{owned:!1,durability:0,quantity:0}]))}function Lt(){return{campfire:0,tanningRack:0,hideTent:0,crudeStoneFurnace:0,primitiveSpinningWheel:0,primitiveLoom:0}}function Rt(e=Date.now()){return{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:e,updatedAt:e}}function zt(){return{hp:34,maxHp:34,mana:10,maxMana:10}}function Bt(){return{hunger:100,maxHunger:100}}function Vt(){return{level:1,xp:0,totalXp:0}}function Ht(){return Object.fromEntries(_e.map(e=>[e,Vt()]))}function Ut(){return{selectedLocationId:`ruins`,encounter:null,log:[]}}function Wt(){return{queue:[],knownRecipeIds:[],completedRecipeCounts:{}}}function Gt(e=Date.now()){return{version:10,createdAt:e,updatedAt:e,lastSimulatedAt:e,selectedCharacterId:`cameron`,characters:[{id:`cameron`,name:`Cameron`,epithet:`Alone at the treeline`,condition:`resting`,locationId:`camp`,combat:zt(),needs:Bt(),classProgress:Ht(),inventory:Pt(),resourceCounts:Ft(),actionLoopId:`loop-forage-sticks`}],inventory:Pt(),characterInventory:Pt(),resourceCounts:Ft(),characterResourceCounts:Ft(),tools:It(),buildings:{campfire:!1,tanningRack:!1,hideTent:!1,crudeStoneFurnace:!1,primitiveSpinningWheel:!1,primitiveLoom:!1},buildingCounts:Lt(),campfireExpiresAt:null,seenResources:[...Le],skills:lt(),cooking:Wt(),combat:Ut(),actionLoops:[Rt(e)],currentActions:[],currentAction:null,log:[{id:`${e}-start`,time:e,text:`Cameron wakes beneath cold branches with empty hands.`,tone:`muted`,scope:`camp`}]}}var Kt=48,qt=`camp`,Jt=[`action:`,`craft:`,`deposit:`],Yt=[`Cameron stops `,`Cameron lacks `,`Cameron crafted `,`Cameron butchered `,`Cameron returned `,`The saved trail grows quiet`];function j(e,t,n=`muted`,r=Date.now(),i=qt){e.log.unshift({id:`${r}-${Math.random().toString(36).slice(2)}`,time:r,text:t,tone:n,scope:i}),e.log=e.log.slice(0,Kt)}function Xt(e,t){let n=t.now??Date.now(),r=t.scope??qt,i=e.log.findIndex(e=>e.aggregateKey===t.aggregateKey&&Zt(e)===r),a=Qt(t.resources);if(i>=0){let[o]=e.log.splice(i,1);o.time=n,o.text=t.text,o.tone=t.tone??o.tone,o.scope=r,Object.keys(a).length>0?(o.aggregateItems=$t(en(o),a),delete o.aggregateTotal,delete o.aggregateUnit):(o.aggregateTotal=(o.aggregateTotal??0)+(t.amount??0),o.aggregateUnit=t.unit),e.log.unshift(o);return}e.log.unshift({id:`${n}-${Math.random().toString(36).slice(2)}`,time:n,text:t.text,tone:t.tone??`muted`,scope:r,aggregateKey:t.aggregateKey,...Object.keys(a).length>0?{aggregateItems:a}:{aggregateTotal:t.amount??0,aggregateUnit:t.unit}}),e.log=e.log.slice(0,Kt)}function Zt(e){return e.scope?e.scope:e.aggregateKey&&Jt.some(t=>e.aggregateKey?.startsWith(t))||Yt.some(t=>e.text.startsWith(t))||/\bbreaks(?:\.|;)/.test(e.text)?`character`:qt}function Qt(e){let t={};for(let[n,r]of Object.entries(e??{})){let e=n,i=D(e,r??0);i>0&&(t[e]=i)}return t}function $t(e,t){let n={...e??{}};for(let[e,r]of Object.entries(t)){let t=e;n[t]=D(t,(n[t]??0)+(r??0))}return n}function en(e){if(e.aggregateItems)return e.aggregateItems;let t=tn(e.aggregateUnit);if(!(!t||!e.aggregateTotal))return{[t]:e.aggregateTotal}}function tn(e){switch(e?.toLowerCase()){case`sticks`:return`stick`;case`stones`:return`stone`;default:return}}var nn=`rowan`;function rn(e,t){return Math.max(0,Math.floor(e.buildingCounts?.[t]??+!!e.buildings[t]))}function an(e,t){let n=rn(e,t)+1;return e.buildingCounts[t]=n,n}function on(e,t,n){e.buildingCounts[t]=Math.max(0,Math.floor(n))}function sn(e){return e.characters.length}function cn(e){return rn(e,`hideTent`)}function ln(e,t=Date.now()){return cn(e)<2||e.characters.some(e=>e.id===nn)?!1:(e.characters.push({id:nn,name:`Rowan`,epithet:`Drawn to the second shelter`,condition:`resting`,locationId:`camp`,combat:zt(),needs:Bt(),classProgress:Ht(),inventory:Pt(),resourceCounts:Ft()}),j(e,`Rowan joins the camp after the second hide tent goes up.`,`craft`,t),!0)}function un(e){for(let t of E)e.inventory[t]=D(t,e.inventory[t]??0),e.characterInventory[t]=D(t,e.characterInventory[t]??0),e.resourceCounts[t]=Nn(t,e.inventory[t],e.resourceCounts[t]??0),e.characterResourceCounts[t]=Nn(t,e.characterInventory[t],e.characterResourceCounts[t]??0);for(let t of e.characters)t.inventory=jn(t.inventory),t.resourceCounts=Mn(t.inventory,t.resourceCounts);vn(e)}function dn(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=(n??0))}function fn(e,t){for(let[n,r]of Object.entries(t)){let t=n;e.inventory[t]=D(t,e.inventory[t]-(r??0))}}function pn(e,t,n={}){for(let[r,i]of Object.entries(t)){let t=r,a=i??0;a<=0||(e.inventory[t]=D(t,e.inventory[t]+a),Pn(e.resourceCounts,t,n[t]??0),e.seenResources.includes(t)||e.seenResources.push(t))}}function mn(e){let t=Je(e)?.weight;if(typeof t==`number`)return t;switch(e){case`wood`:return 2;case`stick`:case`stone`:case`flaxPlant`:case`rettedFlax`:case`flaxFiber`:return 1;case`linenThread`:case`linenCloth`:case`copperNeedle`:case`bronzeNeedle`:return .1;default:return 1}}function hn(e){let t=E.reduce((t,n)=>t+(e[n]??0)*mn(n),0);return Math.round(t*10)/10}function gn(e,t=e.selectedCharacterId){let n=On(e,t);return n.inventory||=kn(),n.inventory}function _n(e,t=e.selectedCharacterId){let n=On(e,t);return n.resourceCounts||=An(),n.resourceCounts}function vn(e){let t=gn(e),n=_n(e);for(let r of E)e.characterInventory[r]=t[r]??0,e.characterResourceCounts[r]=n[r]??0}function yn(e,t=e.selectedCharacterId){return hn(gn(e,t))}function bn(e,t=e.selectedCharacterId){let n=e.tools.basket,r=e.tools.leatherBackpack;return 10+(n?.owned&&n.durability>0?5:0)+(r?.owned&&r.durability>0?15:0)}function xn(e,t,n={},r=e.selectedCharacterId){let i={},a=gn(e,r),o=_n(e,r),s=yn(e,r),c=bn(e,r);for(let r of E){let l=D(r,t[r]??0);if(l<=0)continue;let u=mn(r),d=c-s,f=u>0?D(r,We(r)?l*u<=d?l:0:Math.min(l,Math.floor(d/u))):l;f<=0||(i[r]=f,a[r]=D(r,a[r]+f),Pn(o,r,In(r,l,f,n[r])),s=Math.round((s+f*u)*10)/10,e.seenResources.includes(r)||e.seenResources.push(r))}return vn(e),i}function Sn(e,t=e.selectedCharacterId){let n={},r=gn(e,t),i=_n(e,t);for(let t of E){let a=r[t];a<=0||(n[t]=a,e.inventory[t]=D(t,e.inventory[t]+a),Fn(i,e.resourceCounts,t),r[t]=0,e.seenResources.includes(t)||e.seenResources.push(t))}return vn(e),n}function Cn(e,t,n=`camp`,r=e.selectedCharacterId){let i=Dn(e,n,r);return Ge(t)?Math.max(0,Math.floor(i[t]??0)):Math.floor(En(e,n,r)[t]??0)}function wn(e,t,n=`camp`,r=e.selectedCharacterId){return Cn(e,t,n,r)>0}function Tn(e,t,n=`camp`,r=e.selectedCharacterId){if(!Ge(t))return 0;let i=En(e,n,r),a=Dn(e,n,r),o=Cn(e,t,n,r),s=D(t,i[t]??0);if(o<=0||s<=0)return i[t]=0,a[t]=0,vn(e),0;let c=D(t,o<=1?s:s/o);return a[t]=Math.max(0,o-1),i[t]=a[t]<=0?0:D(t,s-c),vn(e),c}function M(e){return Object.entries(e).map(([e,t])=>{let n=e;return`${qe(n,t??0)}${We(n)?` lb`:``} ${O(n)}`}).join(`, `)}function En(e,t,n){return t===`character`?gn(e,n):e.inventory}function Dn(e,t,n){return t===`character`?_n(e,n):e.resourceCounts}function On(e,t){return e.characters.find(e=>e.id===t)??e.characters[0]}function kn(){return Object.fromEntries(E.map(e=>[e,0]))}function An(){return Object.fromEntries(E.map(e=>[e,0]))}function jn(e){let t=kn();for(let n of E)t[n]=D(n,e?.[n]??0);return t}function Mn(e,t){let n=An();for(let r of E)n[r]=Nn(r,e[r],t?.[r]??0);return n}function Nn(e,t,n){return!Ge(e)||t<=0?0:Math.max(1,Math.floor(Math.max(0,Number.isFinite(n)?n:0)))}function Pn(e,t,n){!Ge(t)||n<=0||(e[t]=Math.floor((e[t]??0)+n))}function Fn(e,t,n){if(!Ge(n))return;let r=Math.max(0,Math.floor(e[n]??0));r<=0||(t[n]=Math.floor((t[n]??0)+r),e[n]=0)}function In(e,t,n,r=0){return!Ge(e)||n<=0||n<t?0:Math.max(0,Math.floor(r))}var Ln=`idle-town:first-survival-slice:v1`,Rn=10,zn=900*1e3,Bn={minnow:1,stoneLoach:2,mudskipper:3,brookStickleback:1.25,pebblePerch:4.75,rabbit:3.5,squirrel:1.25};function Vn(){let e=window.localStorage.getItem(Ln);if(!e)return Gt();try{let t=JSON.parse(e),n=Gt(),r={...n.buildings,...t.buildings??{}},i=typeof t.selectedCharacterId==`string`?t.selectedCharacterId:n.selectedCharacterId,a=Un(t.characters,n.characters,t.characterInventory,t.characterResourceCounts,i),o=nr(t.currentActions,t.currentAction),s=Qn(t.actionLoops,t.currentAction,n.actionLoops),c={...n,...t,selectedCharacterId:i,inventory:{...Pt(),...t.inventory??{}},characterInventory:{...Pt(),...t.characterInventory??{}},resourceCounts:{...Ft(),...t.resourceCounts??{}},characterResourceCounts:{...Ft(),...t.characterResourceCounts??{}},tools:Or(t.tools),buildings:r,buildingCounts:Hn(t.buildingCounts,r,n.buildingCounts),campfireExpiresAt:typeof t.campfireExpiresAt==`number`?t.campfireExpiresAt:n.campfireExpiresAt,characters:a,seenResources:t.seenResources?.length?t.seenResources:n.seenResources,skills:ut(t.skills),cooking:yr(t.cooking,n.cooking),combat:Jn(t.combat,n.combat,a),actionLoops:s,currentActions:o,currentAction:o.find(e=>e.characterId===i)??o[0]??null,log:t.log?.length?t.log:n.log,version:Rn},l=typeof t.version==`number`?t.version:1;return _r(c,l),hr(c,l),gr(c,l),mr(c,l),ln(c),un(c),c}catch{return Gt()}}function Hn(e,t,n){let r={...Lt(),...n};if(e&&typeof e==`object`){let t=e;for(let e of Object.keys(r))r[e]=Math.max(0,Math.floor(Number(t[e]??r[e])))}for(let e of Object.keys(t))t[e]&&r[e]<=0&&(r[e]=1);return r}function Un(e,t,n,r,i){return!Array.isArray(e)||!e.length?t:e.map((e,a)=>{let o=t[a]??t[0];if(!e||typeof e!=`object`)return o;let s=e,c=s.id===i&&!s.inventory&&n&&typeof n==`object`,l=Er(c?n:s.inventory),u=Dr(l,c?r:s.resourceCounts);return{...o,...s,locationId:sr(s.locationId)?s.locationId:o.locationId,combat:Gn(s.combat,o.combat),needs:Wn(s.needs,o.needs),classProgress:Kn(s.classProgress),inventory:l,resourceCounts:u,actionLoopId:typeof s.actionLoopId==`string`?s.actionLoopId:o.actionLoopId}})}function Wn(e,t=Bt()){if(!e||typeof e!=`object`)return t;let n=e,r=N(n.maxHunger,1,999);return{maxHunger:r,hunger:N(n.hunger,0,r)}}function Gn(e,t=zt()){if(!e||typeof e!=`object`)return t;let n=e,r=N(n.maxHp,1,999),i=N(n.maxMana,0,999);return{maxHp:r,hp:N(n.hp,0,r),maxMana:i,mana:N(n.mana,0,i)}}function Kn(e){let t=Ht();if(!e||typeof e!=`object`)return t;let n=e;for(let e of _e)t[e]=qn(n[e]);return t}function qn(e){if(!e||typeof e!=`object`)return{level:1,xp:0,totalXp:0};let t=N(e.xp,0,2**53-1);return{level:N(e.level,1,1e3),xp:t,totalXp:Math.max(t,N(e.totalXp,0,2**53-1))}}function Jn(e,t=Ut(),n){if(!e||typeof e!=`object`)return t;let r=e;return{selectedLocationId:lr(r.selectedLocationId)?r.selectedLocationId:t.selectedLocationId,encounter:Yn(r.encounter,n),log:Zn(r.log)}}function Yn(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!lr(n.locationId)||typeof n.id!=`string`)return null;let r=Array.isArray(n.units)?n.units.map(e=>Xn(e,t)).filter(e=>!!e):[];return{id:n.id,locationId:n.locationId,startedAt:N(n.startedAt,0,2**53-1),updatedAt:N(n.updatedAt,0,2**53-1),wave:N(n.wave,1,999),defeatedEnemies:N(n.defeatedEnemies,0,2**53-1),units:r,message:typeof n.message==`string`?n.message:``}}function Xn(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!fr(n.kind)||typeof n.id!=`string`||typeof n.name!=`string`||n.kind===`party`&&!t.some(e=>e.id===n.characterId)||n.kind===`enemy`&&!ur(n.enemyId))return null;let r=N(n.maxHp,1,999),i=N(n.maxMana,0,999);return{id:n.id,kind:n.kind,name:n.name,hp:N(n.hp,0,r),maxHp:r,mana:N(n.mana,0,i),maxMana:i,x:N(n.x,0,99),y:N(n.y,0,99),damage:N(n.damage,0,999),attackRange:N(n.attackRange,1,99),actEveryMs:N(n.actEveryMs,500,6e4),nextActAt:N(n.nextActAt,0,2**53-1),characterId:typeof n.characterId==`string`?n.characterId:void 0,enemyId:ur(n.enemyId)?n.enemyId:void 0,classId:dr(n.classId)?n.classId:void 0,weaponId:n.weaponId}}function Zn(e){return Array.isArray(e)?e.filter(e=>!!(e&&typeof e==`object`)).map((e,t)=>({id:typeof e.id==`string`?e.id:`combat-log-${t+1}`,time:N(e.time,0,2**53-1),text:typeof e.text==`string`?e.text:``,tone:pr(e.tone)?e.tone:`muted`})).filter(e=>e.text).slice(0,20):[]}function Qn(e,t,n){if(Array.isArray(e)){let t=e.map((e,t)=>$n(e,t)).filter(e=>!!e);if(t.length)return t}let r=er(t);return r?[r]:n}function $n(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=Array.isArray(n.actionIds)?n.actionIds.map(e=>ar(e)).filter(e=>!!e):[];return r.length?{id:typeof n.id==`string`&&n.id?n.id:`loop-${t+1}`,name:typeof n.name==`string`&&n.name?n.name:`Loop ${t+1}`,actionIds:r,locationIds:tr(r,n.locationIds),createdAt:typeof n.createdAt==`number`?n.createdAt:Date.now(),updatedAt:typeof n.updatedAt==`number`?n.updatedAt:Date.now()}:null}function er(e){if(!e||typeof e!=`object`)return null;let t=e,n=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>ar(e)).filter(e=>!!e):ar(t.actionId)?[ar(t.actionId)]:[];if(!n.length)return null;let r=Date.now();return{id:`loop-saved-work`,name:`Saved Work Loop`,actionIds:n,locationIds:tr(n,t.loopLocationIds),createdAt:r,updatedAt:r}}function tr(e,t){let n=Array.isArray(t)?t:[];return e.map((e,t)=>{let r=n[t];return cr(r)?r:null})}function nr(e,t){return(Array.isArray(e)?e:t?[t]:[]).map(e=>rr(e)).filter(e=>!!e)}function rr(e){if(!e||typeof e!=`object`)return null;let t=e,n=ar(t.actionId);if(!n||typeof t.characterId!=`string`||!or(t.phase)||typeof t.startedAt!=`number`||typeof t.endsAt!=`number`)return null;let r=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>ar(e)).filter(e=>!!e):void 0,i=ar(t.followUpActionId);return{...t,actionId:n,characterId:t.characterId,phase:t.phase,loopActionIds:r,followUpActionId:i??void 0,startedAt:t.startedAt,endsAt:t.endsAt,repeat:!!t.repeat}}function ir(e){return typeof e==`string`&&fe.some(t=>t.id===e)}function ar(e){return e===`gatherMushrooms`||e===`gatherBerries`?`gatherMeadowIngredients`:ir(e)?e:null}function or(e){return e===`travelingTo`||e===`working`||e===`followUp`||e===`travelingBack`}function sr(e){return e===`camp`||e===`meadow`||e===`river`||e===`forest`||e===`mine`||e===`desert`}function cr(e){return e===`meadow`||e===`river`||e===`forest`||e===`mine`||e===`desert`}function lr(e){return typeof e==`string`&&ye.some(t=>t===e)}function ur(e){return typeof e==`string`&&ve.some(t=>t===e)}function dr(e){return typeof e==`string`&&_e.some(t=>t===e)}function fr(e){return e===`party`||e===`enemy`}function pr(e){return e===`muted`||e===`gain`||e===`warning`}function mr(e,t){let n=Date.now();if(!e.buildings.campfire){e.campfireExpiresAt=null;return}t<4&&!e.campfireExpiresAt&&(e.campfireExpiresAt=n+zn),(typeof e.campfireExpiresAt!=`number`||e.campfireExpiresAt<=n)&&(e.buildings.campfire=!1,e.campfireExpiresAt=null)}function hr(e,t){if(!(t>=2)){e.inventory.rabbit*=Bn.rabbit??1,e.characterInventory.rabbit*=Bn.rabbit??1,e.inventory.squirrel*=Bn.squirrel??1,e.characterInventory.squirrel*=Bn.squirrel??1;for(let t of e.characters)t.inventory.rabbit*=Bn.rabbit??1,t.inventory.squirrel*=Bn.squirrel??1}}function gr(e,t){if(!(t>=Rn))for(let t of He){e.resourceCounts[t]=Tr(t,e.inventory[t]),e.characterResourceCounts[t]=Tr(t,e.characterInventory[t]);for(let n of e.characters)n.resourceCounts[t]=Tr(t,n.inventory[t])}}function _r(e,t){if(!(t>=10)){vr(e.inventory,`mushroom`,`hearthcap`),vr(e.characterInventory,`mushroom`,`hearthcap`),vr(e.inventory,`berry`,`blueberries`),vr(e.characterInventory,`berry`,`blueberries`);for(let t of e.characters)vr(t.inventory,`mushroom`,`hearthcap`),vr(t.inventory,`berry`,`blueberries`);e.seenResources=e.seenResources.map(e=>e===`mushroom`?`hearthcap`:e===`berry`?`blueberries`:e).filter((e,t,n)=>n.indexOf(e)===t)}}function vr(e,t,n){let r=Number(e[t]??0);r>0&&(e[n]=Number(e[n]??0)+r),delete e[t]}function yr(e,t=Wt()){if(!e||typeof e!=`object`)return t;let n=e,r=Array.isArray(n.queue)?n.queue.map(e=>br(e)).filter(e=>!!e):[],i=!1;return{queue:r.map(e=>{let t=e.startedAt!==null&&e.endsAt!==null;return!t||!i?(i||=t,e):{...e,startedAt:null,endsAt:null}}),knownRecipeIds:xr(n.knownRecipeIds),completedRecipeCounts:Sr(n.completedRecipeCounts)}}function br(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.id!=`string`||!Cr(t.recipeId)?null:{id:t.id,recipeId:t.recipeId,stationId:wr(t.stationId),queuedAt:N(t.queuedAt,0,2**53-1),startedAt:typeof t.startedAt==`number`?N(t.startedAt,0,2**53-1):null,endsAt:typeof t.endsAt==`number`?N(t.endsAt,0,2**53-1):null}}function xr(e){return Array.isArray(e)?e.filter(e=>Cr(e)).filter((e,t,n)=>n.indexOf(e)===t):[]}function Sr(e){if(!e||typeof e!=`object`)return{};let t={},n=e;for(let[e,r]of Object.entries(n))Cr(e)&&(t[e]=N(r,0,2**53-1));return t}function Cr(e){return typeof e==`string`&&Te.includes(e)}function wr(e){return`campfire`}function Tr(e,t){if(t<=0)return 0;let n=Bn[e]??1;return Math.max(1,Math.round(t/n))}function Er(e){let t=Pt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of Object.keys(t))t[e]=Number(n[e]??0);return t}function Dr(e,t){let n=Ft();if(t&&typeof t==`object`){let e=t;for(let t of Object.keys(n))n[t]=Math.max(0,Math.floor(Number(e[t]??0)))}for(let t of He)e[t]>0&&n[t]<=0&&(n[t]=Tr(t,e[t]));return n}function Or(e){let t=It();if(!e||typeof e!=`object`)return t;let n=e;for(let e of T){let r=n[e.id];if(typeof r==`boolean`){t[e.id]={owned:r,durability:r?e.maxDurability:0,quantity:0};continue}if(!r||typeof r!=`object`)continue;let i=!!r.owned,a=Number(r.durability??0),o=Number(r.quantity??0);t[e.id]={owned:i,durability:i?Math.min(e.maxDurability,Math.max(0,Math.floor(a))):0,quantity:Math.max(0,Math.floor(o))}}return t}function N(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function kr(e){window.localStorage.setItem(Ln,JSON.stringify(e))}function Ar(){return window.localStorage.removeItem(Ln),Gt()}var jr=900*1e3;function Mr(e,t=Date.now()){e.buildings.campfire=!0,e.campfireExpiresAt=t+jr}function P(e,t=Date.now()){return!!(e.buildings.campfire&&Pr(e)>t)}function Nr(e,t=Date.now()){let n=Pr(e);return n>t?n-t:0}function Pr(e){return e.buildings.campfire&&typeof e.campfireExpiresAt==`number`?e.campfireExpiresAt:0}function Fr(e,t=Date.now()){let n=Pr(e);return!n||n>t?!1:(e.buildings.campfire=!1,e.campfireExpiresAt=null,j(e,`The campfire burns down to charred wood.`,`muted`,n),e.updatedAt=n,e.lastSimulatedAt=n,!0)}var Ir=[`copperPickaxe`,`copperHatchet`,`copperKnife`];function Lr(e){return!!e.buildings.crudeStoneFurnace}function Rr(e){return{furnaceBuilt:Lr(e),coal:Math.max(0,Math.floor(e.inventory.coal??0))}}function zr(e){return y.some(t=>t===e)}function Br(e,t){if(!S(t))return!1;switch(t){case`smeltCopperBar`:return Lr(e);case`craftPot`:case`craftLadle`:return Wr(e,`copperBar`);case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return Ur(e);case`smeltBronzeBar`:return Lr(e)&&Gr(e);case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return Wr(e,`bronzeBar`)}}function Vr(e,t){if(!S(t))return``;switch(t){case`smeltCopperBar`:return Lr(e)?``:`Needs Stone Furnace`;case`craftPot`:case`craftLadle`:return Wr(e,`copperBar`)?``:`Smelt Copper Bar`;case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return Ur(e)?``:`Craft Pot and Ladle`;case`smeltBronzeBar`:return Lr(e)?Gr(e)?``:`Craft a Copper Tool`:`Needs Stone Furnace`;case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return Wr(e,`bronzeBar`)?``:`Smelt Bronze Bar`}}function Hr(e){let t=x(e);return t?t.label.replace(/^(Craft|Smelt) /,`1 `):``}function Ur(e){return Wr(e,`pot`)&&Wr(e,`ladle`)}function Wr(e,t){return e.seenResources.includes(t)||e.inventory[t]>0}function Gr(e){let t=e.tools;return Ir.some(e=>{let n=t[e];return!!(n?.owned||(n?.quantity??0)>0)})}var Kr=[`yarrow`,`plantainLeaf`],qr=[`riverMint`,`silverleafHerb`];function Jr(e){return{furnaceBuilt:Lr(e),coal:Math.max(0,Math.floor(e.inventory.coal??0)),vials:Math.max(0,Math.floor(e.inventory.glassVial??0))}}function Yr(e,t){if(!_(t))return!1;switch(t){case`craftGlassVial`:return Lr(e);case`brewHealthPotion`:return $r(e,`glassVial`)&&Qr(e,Kr);case`brewManaPotion`:return $r(e,`glassVial`)&&Qr(e,qr)}}function Xr(e,t){if(!_(t))return``;switch(t){case`craftGlassVial`:return Lr(e)?``:`Needs Stone Furnace`;case`brewHealthPotion`:return $r(e,`glassVial`)?Qr(e,Kr)?``:`Find Meadow Ingredients`:`Craft Glass Vial`;case`brewManaPotion`:return $r(e,`glassVial`)?Qr(e,qr)?``:`Find River Ingredients`:`Craft Glass Vial`}}function Zr(e){let t=g(e);return t?Object.entries(t.output).map(([e,t])=>`${t??0} ${O(e)}`).join(`, `):``}function Qr(e,t){return t.some(t=>$r(e,t))}function $r(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function ei(e,t){return!C(t)||!ue(t)?!1:ti(e,t)===``}function ti(e,t){let n=C(t);if(!n||!ue(t))return``;let r=n.requiredBuildings?.find(t=>!e.buildings[t]);if(r)return`Needs ${ai(r)}`;let i=n.requiredSeenResources?.find(t=>!ri(e,t));return i?n.unlockHint||`Needs ${O(i)}`:n.requiredAnyResources?.length&&!n.requiredAnyResources.some(t=>ri(e,t))?`Needs ${n.requiredAnyResources.map(e=>O(e)).join(` or `)}`:``}function ni(e){return ii(e.output)}function ri(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function ii(e){return Object.entries(e).map(([e,t])=>`${t??0} ${O(e)}`).join(`, `)}function ai(e){switch(e){case`campfire`:return`Campfire`;case`tanningRack`:return`Tanning Rack`;case`hideTent`:return`Hide Tent`;case`crudeStoneFurnace`:return`Stone Furnace`;case`primitiveSpinningWheel`:return`Primitive Spinning Wheel`;case`primitiveLoom`:return`Primitive Loom`}}function oi(e){return T.find(t=>t.id===e)}function si(e){return oi(e)?.maxDurability??1}function ci(e,t){let n=e.tools[t];return!!(n?.owned&&n.durability>0)}function li(e){return T.filter(t=>t.roles.includes(e)).sort((t,n)=>pi(n.id,e)-pi(t.id,e))}function ui(e,t){return li(t).find(t=>ci(e,t.id))?.id??null}function di(e,t){return!!ui(e,t)}function fi(e,t){let n=ui(e,t);return n?pi(n,t):0}function pi(e,t){let n=oi(e);return n?.roles.includes(t)?n.roleTiers?.[t]??n.weapon?.damage??1:0}function mi(e){return oi(e)?.weapon?.damage??0}function hi(e,t){let n=ui(e,t);return n?mi(n):0}function gi(e,t){let n=e.tools[t];return!n||n.quantity<=0?!1:(--n.quantity,n.owned=!0,n.durability=si(t),!0)}function _i(e,t,n,r=Date.now(),i=`Cameron`){let a=e.tools[t];if(!(!a?.owned||a.durability<=0)&&(a.durability=Math.max(0,a.durability-n),a.durability===0)){let n=oi(t)?.label??`Tool`;if(gi(e,t)){j(e,`${n} breaks; ${i} takes a fresh one from inventory.`,`warning`,r,`character`);return}a.owned=!1,j(e,`${n} breaks. No spare remains.`,`warning`,r,`character`)}}function vi(e,t,n,r=Date.now(),i=`Cameron`){let a=ui(e,t);a&&_i(e,a,n,r,i)}var yi=Pe.map(e=>e.craftActionId);function bi(e){return e.seenResources.includes(`rabbitMeat`)||e.seenResources.includes(`squirrelMeat`)}function xi(e){return ze.some(t=>e.seenResources.includes(t)||e.characters.some(e=>(e.inventory?.[t]??0)>0||(e.resourceCounts?.[t]??0)>0)||e.characterInventory[t]>0||e.inventory[t]>0||e.characterResourceCounts[t]>0||e.resourceCounts[t]>0)}function Si(e){return e.seenResources.some(e=>{let t=Ie.find(t=>t.id===e);return!!(t?.cooking?.ingredientCategory||t?.cooking?.tags.includes(`stew-base`)||t?.cooking?.tags.includes(`vessel`)||t?.cooking?.tags.includes(`utensil`))})}function F(e,t,n=Date.now()){if(Br(e,t)||Yr(e,t))return!0;if(C(t))return ei(e,t);if(Vr(e,t)||Xr(e,t))return!1;if(t===`craftLowestTool`||yi.includes(t)||t===`craftWoodenBowl`||l(t)||o(t))return!0;switch(t){case`gatherSticks`:case`gatherStones`:case`gatherFlaxPlants`:case`gatherFlaxFibers`:case`gatherMeadowIngredients`:case`gatherForestIngredients`:case`gatherRiverIngredients`:case`gatherMineIngredients`:case`gatherDesertIngredients`:case`gatherSand`:case`gatherWater`:case`craftWoodenSpoon`:return!0;case`fishRiver`:return di(e,`fishing`);case`mineCoal`:case`mineCopper`:case`mineTin`:return di(e,`mining`);case`chopTrees`:return di(e,`woodcutting`);case`huntSmallAnimals`:return di(e,`hunting`);case`butcherFish`:return xi(e);case`butcherRabbit`:return e.seenResources.includes(`rabbit`);case`butcherSquirrel`:return e.seenResources.includes(`squirrel`);case`cookRabbitMeat`:return P(e,n)&&e.seenResources.includes(`rabbitMeat`);case`cookSquirrelMeat`:return P(e,n)&&e.seenResources.includes(`squirrelMeat`);case`tanHide`:return e.buildings.tanningRack&&e.seenResources.includes(`hide`);case`craftLeatherBackpack`:return e.buildings.tanningRack&&e.seenResources.includes(`leather`)}return!1}function I(e,t){let n=Vr(e,t);if(n)return n;let r=Xr(e,t);if(r)return r;let i=ti(e,t);if(i)return i;switch(t){case`fishRiver`:return`Needs Fishing Pole`;case`mineCoal`:case`mineCopper`:case`mineTin`:return`Needs Mining Tool`;case`chopTrees`:return`Needs Woodcutting Tool`;case`huntSmallAnimals`:return`Needs Hunting Weapon`;case`butcherFish`:return`Needs Carried Fish`;case`butcherRabbit`:return`Needs Rabbit`;case`butcherSquirrel`:return`Needs Squirrel`;case`cookRabbitMeat`:return P(e)?`Needs Rabbit Meat`:`Needs Lit Campfire`;case`cookSquirrelMeat`:return P(e)?`Needs Squirrel Meat`:`Needs Lit Campfire`;case`tanHide`:return e.buildings.tanningRack?`Needs Hide`:`Needs Tanning Rack`;case`craftLeatherBackpack`:return e.buildings.tanningRack?`Needs Leather`:`Needs Tanning Rack`;case`craftLowestTool`:return`Needs Craft Materials`;case`craftWoodenBowl`:return`Needs Wood`;default:return``}}function Ci(e,t,n=Date.now()){return!0}function wi(e,t,n=Date.now()){switch(t){case`campfire`:return P(e,n)||bi(e)||Si(e);case`tanningRack`:return e.buildings.tanningRack||e.seenResources.includes(`hide`);case`hideTent`:return e.buildings.hideTent||e.seenResources.includes(`hide`);case`crudeStoneFurnace`:return e.buildings.crudeStoneFurnace||e.seenResources.includes(`coal`)||e.seenResources.includes(`copper`);case`primitiveSpinningWheel`:return e.buildings.primitiveSpinningWheel||e.seenResources.includes(`linenThread`);case`primitiveLoom`:return e.buildings.primitiveLoom||e.seenResources.includes(`linenThread`)}}function Ti(e,t){switch(t){case`campfire`:return`See Meat, Water, or Meadow Ingredients`;case`tanningRack`:case`hideTent`:return`See Hide`;case`crudeStoneFurnace`:return`See Coal or Copper`;case`primitiveSpinningWheel`:return`See Linen Thread`;case`primitiveLoom`:return`See Linen Thread`}}var Ei={meadow:1e4,river:15e3,forest:3e4,mine:6e4,desert:75e3};function Di(e){return e.loopActionIds?.length?[...e.loopActionIds]:e.followUpActionId?[e.actionId,e.followUpActionId]:[e.actionId]}function Oi(e){return Ki(e)||e===`huntSmallAnimals`||e===`chopTrees`}function ki(e,t){return Oi(e)?t??qi(e):null}function Ai(e,t=Di(e)){return e.loopLocationIds?.length?t.map((t,n)=>ki(t,e.loopLocationIds?.[n]??void 0)):t.map((t,n)=>n===0&&Oi(t)?e.locationId??`meadow`:ki(t,void 0))}function ji(e,t){let n=Di(e),r=n[L(t,n)];return Ai(e,n)[L(t,n)]??(Oi(r)?`meadow`:void 0)}function Mi(e,t){let n=Di(e),r=n[L(t,n)];return Ni(r,ji(e,t))}function Ni(e,t){return Oi(e)?t??qi(e):`camp`}function Pi(e){return e.targetLocationId??e.locationId??`camp`}function Fi(e,t){return e.characters.find(e=>e.id===t)?.locationId??`camp`}function Ii(e,t,n){let r=e.characters.find(e=>e.id===t);r&&(r.locationId=n)}function Li(e,t){return e.phase===`travelingTo`||e.phase===`travelingBack`?e.originLocationId??t:Pi(e)}function Ri(e){return e===`camp`?`camp`:`the ${e}`}function zi(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Bi(e,t){let n=Di(e);return n[L(t,n)]??e.actionId}function Vi(e){let t=Di(e);return L(e.nextLoopIndex??e.loopIndex??0,t)}function Hi(e){return Wi(e,e.loopIndex??0)}function Ui(e){return Wi(e,e.loopIndex??0)}function Wi(e,t){let n=Di(e);if(n.length<=1)return L(t,n);let r=(L(t,n)+1)%n.length;for(;n[r]===`butcherFish`&&r!==t;)r=(r+1)%n.length;return r}function L(e,t){return t.length?Math.min(t.length-1,Math.max(0,Math.floor(e))):0}function Gi(e,t){return e===t?0:Yi(e)+Yi(t)}function Ki(e){return l(e)||o(e)||e===`gatherSticks`||e===`gatherStones`||e===`gatherFlaxPlants`||e===`gatherFlaxFibers`||e===`gatherMeadowIngredients`||e===`gatherForestIngredients`||e===`gatherRiverIngredients`||e===`gatherMineIngredients`||e===`gatherDesertIngredients`||e===`gatherSand`||e===`gatherWater`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`||e===`fishRiver`}function qi(e){let n=t(e);if(n)return n.locationId;let r=d(e);return r?r.locationId:e===`gatherWater`||e===`fishRiver`||e===`gatherRiverIngredients`?`river`:e===`gatherForestIngredients`||e===`chopTrees`?`forest`:e===`gatherMineIngredients`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`?`mine`:e===`gatherDesertIngredients`||e===`gatherSand`?`desert`:`meadow`}function Ji(e){return Ei[e]}function Yi(e){return e===`camp`?0:Ji(e)}function Xi(e){return Array.isArray(e.currentActions)||(e.currentActions=e.currentAction?[e.currentAction]:[]),e.currentActions}function R(e,t=e.selectedCharacterId){return Xi(e).find(e=>e.characterId===t)??null}function Zi(e){let t=Xi(e);e.currentAction=t.find(t=>t.characterId===e.selectedCharacterId)??t[0]??null}function Qi(e,t){let n=Xi(e),r=n.findIndex(e=>e.characterId===t.characterId);r>=0?n[r]=t:n.push(t),e.currentActions=n,ta(e,!0,t.characterId),Zi(e)}function z(e,t){e.currentActions=Xi(e).filter(e=>e.characterId!==t),ta(e,!1,t),Zi(e)}function $i(e){return[...Xi(e)].sort((e,t)=>e.endsAt===t.endsAt?e.characterId.localeCompare(t.characterId):e.endsAt-t.endsAt)[0]??null}function ea(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function B(e,t){return e.characters.find(e=>e.id===t)?.name??`Someone`}function ta(e,t,n=e.selectedCharacterId){let r=e.characters.find(e=>e.id===n);r&&(r.condition=t?`working`:`resting`)}function na(e,t=Date.now()){ca(e,t);let n=e.actionLoops.length+1,r={id:`loop-${t.toString(36)}-${Math.random().toString(36).slice(2,7)}`,name:`Loop ${n}`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:t,updatedAt:t};return e.actionLoops.push(r),ea(e,t),r}function ra(e,t,n=Date.now()){if(ca(e,n),e.actionLoops.length<=1)return e.actionLoops[0]?.id??null;let r=e.actionLoops.findIndex(e=>e.id===t);if(r<0)return e.actionLoops[0]?.id??null;e.actionLoops.splice(r,1);for(let n of e.characters)n.actionLoopId===t&&(n.actionLoopId=void 0);return ea(e,n),e.actionLoops[Math.max(0,r-1)]?.id??e.actionLoops[0]?.id??null}function V(e,t){return ca(e),e.actionLoops.find(e=>e.id===t)??e.actionLoops[0]??null}function ia(e,t,n){let r=ua(t,e);return n===`butcherFish`?e.actionIds[r]===`fishRiver`:!0}function aa(e,t,n,r,i={},a=Date.now()){let o=V(e,t);if(!o||!ia(o,n,r))return!1;let s=ua(n,o)+1;return o.actionIds.splice(s,0,r),o.locationIds.splice(s,0,ki(r,i.locationId)),o.updatedAt=a,la(e,o),ea(e,a),!0}function oa(e,t,n,r=Date.now()){let i=V(e,t);if(!i||i.actionIds.length<=1)return 0;let a=ua(n,i);return i.actionIds.splice(a,1),i.locationIds.splice(a,1),i.updatedAt=r,la(e,i),ea(e,r),Math.max(0,a-1)}function sa(e){return e.actionIds.map((t,n)=>ki(t,e.locationIds[n]??void 0))}function ca(e,t=Date.now()){if(Array.isArray(e.actionLoops)&&e.actionLoops.length)return;let n=e.currentAction?.loopActionIds?.length?{actionIds:[...e.currentAction.loopActionIds],locationIds:[...e.currentAction.loopLocationIds??[]]}:{actionIds:[`gatherSticks`],locationIds:[`meadow`]};e.actionLoops=[{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:n.actionIds,locationIds:n.actionIds.map((e,t)=>ki(e,n.locationIds[t]??void 0)),createdAt:t,updatedAt:t}]}function la(e,t){for(let n of e.characters){if(n.actionLoopId!==t.id)continue;let r=R(e,n.id);if(!r)continue;let i=L(r.loopIndex??0,t.actionIds);Qi(e,{...r,loopActionIds:[...t.actionIds],loopLocationIds:sa(t),loopIndex:i})}}function ua(e,t){return t.actionIds.length?Math.min(t.actionIds.length-1,Math.max(0,Math.floor(e))):0}function da(e,t,n){return Math.min(n,Math.max(t,e))}function H(e,t){return Math.floor(Math.random()*(t-e+1))+e}function fa(e,t,n=1){let r=10**n;return Math.round((Math.random()*(t-e)+e)*r)/r}function U(e){let t=Math.max(0,Math.ceil(e/1e3));if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function pa(e,t){let i=r(e),a=t?i?.entries.filter(e=>e.category===t):i?.entries;if(!i||!a?.length)return{resources:{},message:`Cameron searches carefully, but finds nothing useful.`};let o=Math.random()<.28?2:1,s={},c=[];for(let e=0;e<o;e+=1){let e=ga(a);if(!e)continue;let t=H(e.minAmount,e.maxAmount);s[e.id]=(s[e.id]??0)+t,c.push(e)}let l=Object.entries(s).filter(([,e])=>(e??0)>0).map(([e,t])=>`${t} ${O(e)}`);return{resources:s,message:l.length?`Cameron gathers ${_a(l)} from the ${i.locationId}${t?` ${n(t).toLowerCase()}`:``}.`:`Cameron searches carefully, but finds nothing useful.`}}function ma(e,t){let n=r(e),i=n?.entries.find(e=>e.id===t);if(!n||!i)return{resources:{},message:`Cameron searches carefully, but finds nothing useful.`};let a=H(i.minAmount,i.maxAmount);return{resources:{[i.id]:a},message:`Cameron gathers ${a} ${O(i.id)} from the ${n.locationId}.`}}function ha(e,t){let i=r(e),a=t?i?.entries.filter(e=>e.category===t):i?.entries;return!i||!a?.length?`No known gatherables.`:t?`${n(t)} from weighted ${i.label.toLowerCase()} table`:`${i.categories.map(e=>n(e)).join(`, `)} from weighted ${i.label.toLowerCase()} table`}function ga(e){let t=e.reduce((e,t)=>e+Math.max(0,t.weight),0);if(t<=0)return null;let n=Math.random()*t;for(let t of e)if(n-=Math.max(0,t.weight),n<=0)return t;return e[e.length-1]??null}function _a(e){return e.length<=1?e[0]??`nothing`:`${e.slice(0,-1).join(`, `)} and ${e[e.length-1]}`}var va=Pe.map(e=>({actionId:e.craftActionId,toolId:e.id})),ya=[{id:`minnow`,minWeight:.5,maxWeight:1.5},{id:`stoneLoach`,minWeight:1,maxWeight:3},{id:`mudskipper`,minWeight:1.5,maxWeight:4.5},{id:`brookStickleback`,minWeight:.5,maxWeight:2},{id:`pebblePerch`,minWeight:2,maxWeight:7.5}],ba=[{id:`rabbit`,minWeight:2,maxWeight:5},{id:`squirrel`,minWeight:.5,maxWeight:2}];function xa(e){return T.find(t=>t.id===e)?.recipe??{}}function Sa(e,t){let n=e.tools[t];return(n?.quantity??0)+ +!!n?.owned}function Ca(e,t){return Ma(wa(e,t))}function wa(e,n){let r=x(n);if(r)return{resources:r.output??{},message:`Cameron finishes ${r.label.toLowerCase()}.`,tone:`craft`};let i=g(n);if(i)return{resources:i.output,message:`Cameron finishes ${i.label.toLowerCase()}.`,tone:`craft`};let a=C(n);if(a)return{resources:a.output,message:`Cameron finishes ${a.label.toLowerCase()}.`,tone:`craft`};let o=d(n);if(o)return Na(o.locationId,o.category);let s=t(n);if(s)return Pa(s.locationId,s.resourceId);switch(n){case`gatherSticks`:{let e=H(1,3);return{resources:{stick:e},message:`Cameron gathers ${e} ${za(`Stick`,e)}.`,tone:`gain`}}case`gatherStones`:{let e=H(1,2);return{resources:{stone:e},message:`Cameron finds ${e} ${za(`Stone`,e)}.`,tone:`gain`}}case`gatherFlaxPlants`:{let e=H(2,4);return{resources:{flaxPlant:e},message:`Cameron cuts ${e} ${za(`Flax Plant`,e)} from the meadow.`,tone:`gain`}}case`gatherFlaxFibers`:{let e=H(1,3);return{resources:{flaxFiber:e},message:`Cameron pulls ${e} ${za(`Flax Fiber`,e)} from the brush.`,tone:`gain`}}case`gatherMeadowIngredients`:return Na(`meadow`);case`gatherForestIngredients`:return Na(`forest`);case`gatherRiverIngredients`:return Na(`river`);case`gatherMineIngredients`:return Na(`mine`);case`gatherDesertIngredients`:return Na(`desert`);case`gatherSand`:{let e=H(2,5);return{resources:{sand:e},message:`Cameron gathers ${e} ${za(`Sand`,e)} from the desert.`,tone:`gain`}}case`gatherWater`:{let e=H(1,3);return{resources:{water:e},message:`Cameron fills ${e} ${e===1?`skin`:`skins`} of river water.`,tone:`gain`}}case`mineCoal`:return Ia(e,`coal`);case`mineCopper`:return Ia(e,`copper`);case`mineTin`:return Ia(e,`tin`);case`fishRiver`:return Fa();case`craftLowestTool`:case`craftLeatherBackpack`:break;case`craftWoodenSpoon`:return{resources:{woodenSpoon:1},message:`Cameron carves a wooden spoon.`,tone:`craft`};case`chopTrees`:{let t=fi(e,`woodcutting`),n=t>=3?1:+(t>=2&&Math.random()<.5),r=H(2,4)+n,i=+(Math.random()<.35);return{resources:{wood:r,stick:i},message:`Cameron chops ${r} ${za(`Wood`,r)}${i?` and saves a usable stick`:``}.`,tone:`gain`}}case`huntSmallAnimals`:return La(e);case`butcherFish`:return{resources:{},message:`Cameron butchers carried fish.`,tone:`gain`};case`butcherRabbit`:return Ra(e,`rabbit`);case`butcherSquirrel`:return Ra(e,`squirrel`);case`cookRabbitMeat`:return{resources:{cookedRabbitMeat:1},message:`Cameron cooks rabbit meat over the coals.`,tone:`craft`};case`cookSquirrelMeat`:return{resources:{cookedSquirrelMeat:1},message:`Cameron cooks squirrel meat over the coals.`,tone:`craft`};case`craftWoodenBowl`:return{resources:{woodenBowl:1},message:`Cameron carves a wooden bowl.`,tone:`craft`};case`tanHide`:return{resources:{leather:1},message:`Cameron works a hide into rough leather.`,tone:`craft`}}let c=Ta(n);return c?{resources:{},message:`Cameron finishes ${Va(c).toLowerCase()}.`,tone:`craft`}:{resources:{},message:`Cameron finishes the work.`,tone:`craft`}}function Ta(e){let t=x(e);if(t?.toolId)return t.toolId;let n=va.find(t=>t.actionId===e);return n?n.toolId:e===`craftLeatherBackpack`?`leatherBackpack`:null}function Ea(e,t,n,r,i){let a=T.find(e=>e.id===r);a&&(e.tools[r].quantity+=1,ci(e,r)||gi(e,r),Xt(e,{aggregateKey:`craft:${t}:${r}`,text:`${n} crafted ${Ba(a.label)}`,amount:1,unit:Ba(a.label),tone:`craft`,now:i,scope:`character`}))}function Da(e,t,n,r){let i=ja(e,t);Object.values(i).some(e=>(e??0)>0)&&Xt(e,{aggregateKey:`action:${t}:butcherFish`,text:`${n} butchered fish`,resources:i,tone:`gain`,now:r,scope:`character`})}function Oa(e,t=e.selectedCharacterId){return ze.some(n=>wn(e,n,`character`,t))}function ka(e,t,n,r){switch(t){case`fishRiver`:vi(e,`fishing`,1,n,r);break;case`mineCoal`:case`mineCopper`:case`mineTin`:vi(e,`mining`,1,n,r);break;case`chopTrees`:vi(e,`woodcutting`,1,n,r);break;case`huntSmallAnimals`:vi(e,`hunting`,1,n,r);break;case`butcherRabbit`:case`butcherSquirrel`:vi(e,`butchering`,1,n,r);break;default:break}}function Aa(e,n=`Cameron`){let r=x(e);if(r)return`${n} completed ${r.label.toLowerCase()}`;let i=g(e);if(i)return`${n} completed ${i.label.toLowerCase()}`;let a=C(e);if(a)return`${n} completed ${a.label.toLowerCase()}`;let o=d(e);if(o)return`${n} gathered ${o.label.replace(`Gather `,``).toLowerCase()}`;let s=t(e);if(s)return`${n} gathered ${s.resourceLabel.toLowerCase()}`;switch(e){case`gatherSticks`:return`${n} gathered sticks`;case`gatherStones`:return`${n} gathered stones`;case`gatherFlaxPlants`:return`${n} gathered flax plants`;case`gatherFlaxFibers`:return`${n} gathered flax fibers`;case`gatherMeadowIngredients`:return`${n} gathered meadow ingredients`;case`gatherForestIngredients`:return`${n} gathered forest forage`;case`gatherRiverIngredients`:return`${n} gathered river forage`;case`gatherMineIngredients`:return`${n} gathered mine forage`;case`gatherDesertIngredients`:return`${n} gathered desert forage`;case`gatherSand`:return`${n} gathered sand`;case`gatherWater`:return`${n} gathered water`;case`mineCoal`:return`${n} mined coal`;case`mineCopper`:return`${n} mined copper`;case`mineTin`:return`${n} mined tin`;case`fishRiver`:return`${n} caught river fish`;case`craftLowestTool`:return`${n} balanced tool stock`;case`craftWoodenSpoon`:return`${n} crafted wooden spoons`;case`craftWoodenBowl`:return`${n} carved wooden bowls`;case`craftLeatherBackpack`:return`${n} crafted leather backpacks`;case`chopTrees`:return`${n} chopped trees`;case`huntSmallAnimals`:return`${n} hunted small animals`;case`butcherFish`:return`${n} butchered fish`;case`butcherRabbit`:return`${n} butchered rabbits`;case`butcherSquirrel`:return`${n} butchered squirrels`;case`cookRabbitMeat`:return`${n} cooked rabbit meat`;case`cookSquirrelMeat`:return`${n} cooked squirrel meat`;case`tanHide`:return`${n} tanned hide`}let c=Ta(e);return c?`${n} crafted ${Ba(Va(c)).toLowerCase()}`:`${n} completed work`}function ja(e,t){let n={},r=gn(e,t);for(let i of ze){let a=Ve[i];if(!a||!wn(e,i,`character`,t))continue;let o=D(a,Tn(e,i,`character`,t)*.5*Ze());return o<=0?n:(r[a]=D(a,r[a]+o),n[a]=D(a,(n[a]??0)+o),e.seenResources.includes(a)||e.seenResources.push(a),n)}return n}function Ma(e){return{...e,resources:et(e.resources),resourceCounts:e.resourceCounts?tt(e.resourceCounts):void 0}}function Na(e,t){let n=pa(e,t);return{resources:n.resources,message:n.message,tone:`gain`}}function Pa(e,t){let n=ma(e,t);return{resources:n.resources,message:n.message,tone:`gain`}}function Fa(){let e=ya[H(0,ya.length-1)],t=fa(e.minWeight,e.maxWeight,1),n=O(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron catches a ${qe(e.id,t)} lb ${n}.`,tone:`gain`}}function Ia(e,t){let n=O(t),r=fi(e,`mining`),i=1+ +(Math.random()<(r>=3?.35:r>=2?.18:0));return{resources:{[t]:i},message:`Cameron mines ${i} ${n}.`,tone:`gain`}}function La(e){let t=hi(e,`hunting`),n=Math.min(.76,.52+t*.025),r=ba[Math.random()<n?0:1],i=Math.min(.8,Math.max(0,t-2.4)*.12),a=fa(r.minWeight,r.maxWeight+i,1),o=O(r.id);return{resources:{[r.id]:a},resourceCounts:{[r.id]:1},message:`Cameron brings back a ${qe(r.id,a)} lb ${o}.`,tone:`gain`}}function Ra(e,t){if(Tn(e,t)<=0)return{resources:{},message:`Cameron has no ${t} to butcher.`,tone:`gain`};let n=t===`rabbit`?`rabbitMeat`:`squirrelMeat`,r=t===`rabbit`?H(1,2):1,i=fi(e,`butchering`),a=di(e,`butchering`),o=i>=3?.18:i>=2?.08:0,s=Math.min(.9,(t===`rabbit`?.65:.42)+o),c=Math.min(.75,(t===`rabbit`?.24:.14)+o),l=+(Math.random()<s),u=+(Math.random()<c),d={[n]:r,hide:a?l:0,bone:a?u:0},f=Object.entries({hide:l,bone:u}).filter(([,e])=>a&&e>0).map(([e,t])=>`${t} ${O(e)}`);return{resources:d,message:`Cameron butchers a ${t} for ${r} ${O(n)}${f.length?`, plus ${f.join(` and `)}`:``}.`,tone:`gain`}}function za(e,t){return t===1?e:`${e}s`}function Ba(e){return e.endsWith(`Knife`)?`${e.slice(0,-5)}Knives`:e.endsWith(`s`)?e:`${e}s`}function Va(e){return T.find(t=>t.id===e)?.label??`Tool`}var Ha=7200*1e3;function Ua(e,t=Date.now()){let n=va.filter(({actionId:n})=>F(e,n,t)&&dn(e,W(n)));return n.length?n.reduce((t,n)=>Sa(e,n.toolId)<Sa(e,t.toolId)?n:t,n[0]).actionId:null}function Wa(e,t,n=e.selectedCharacterId,r=Date.now()){let i=V(e,t),a=e.characters.find(e=>e.id===n);return!i||!a?!1:(a.actionLoopId=i.id,Ga(e,i.id,n,r))}function Ga(e,t,n=e.selectedCharacterId,r=Date.now()){let i=V(e,t);return i?.actionIds.length?ao(e,{actionId:i.actionIds[0],characterId:n,phase:`working`,loopActionIds:[...i.actionIds],loopLocationIds:sa(i),loopIndex:0,startedAt:r,endsAt:r,repeat:!0},0,r):!1}function W(e){let t=x(e);if(t)return t.cost;let n=g(e);if(n)return n.cost;let r=C(e);if(r)return r.cost;let i=Ta(e);if(i)return xa(i);switch(e){case`craftWoodenBowl`:return{wood:1};case`cookRabbitMeat`:return{rabbitMeat:1};case`cookSquirrelMeat`:return{squirrelMeat:1};case`craftWoodenSpoon`:return{wood:1};case`tanHide`:return{hide:1};case`craftLowestTool`:return{};default:return{}}}function G(e,t,n=Date.now(),r=e.selectedCharacterId){return Ka(e,r)?!1:t===`craftLowestTool`?F(e,t,n)&&!!Ua(e,n):t===`butcherFish`?F(e,t,n)&&Oa(e,r):t===`butcherRabbit`?F(e,t,n)&&wn(e,`rabbit`):t===`butcherSquirrel`?F(e,t,n)&&wn(e,`squirrel`):F(e,t,n)&&dn(e,W(t))}function Ka(e,t){return!!e.combat?.encounter?.units.some(e=>e.kind===`party`&&e.characterId===t)}function qa(e,t,n=Date.now(),r={}){let i=w(t),a=e.selectedCharacterId;if(!i||!G(e,t,n,a))return!1;let o=Ni(t,r.locationId),s=Fi(e,a),c=Gi(s,o),l={actionId:t,characterId:a,phase:c>0?`travelingTo`:`working`,originLocationId:s,targetLocationId:o,locationId:o===`camp`?void 0:o,loopActionIds:[t],loopLocationIds:[o===`camp`?null:o],loopIndex:0,startedAt:n,endsAt:n+(c||i.durationMs),repeat:!0};return c<=0&&Ii(e,a,o),Qi(e,l),ea(e,n),!0}function Ja(e,t=Date.now()){let n=R(e);if(!n)return;let r=w(n.actionId),i=Li(n,Fi(e,n.characterId));if(Ii(e,n.characterId,i),i!==`camp`){Qi(e,{...n,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i,startedAt:t,endsAt:t+Gi(i,`camp`),repeat:!1}),ea(e,t),j(e,`${B(e,n.characterId)} stops ${r?.verb??`working`} at ${Ri(i)} and heads back to camp.`,`muted`,t,`character`);return}let a=i===`camp`?Ya(e,t,n.characterId):!1;z(e,n.characterId),ea(e,t),j(e,a?`${B(e,n.characterId)} stops ${r?.verb??`working`} and returns to camp.`:`${B(e,n.characterId)} stops ${r?.verb??`working`} at ${Ri(i)}.`,`muted`,t,`character`)}function Ya(e,t=Date.now(),n=e.selectedCharacterId){if(Fi(e,n)!==`camp`)return!1;let r=Sn(e,n);return Object.keys(r).length<=0?!1:(Xt(e,{aggregateKey:`deposit:camp`,text:`${B(e,n)} returned resources to camp`,resources:r,tone:`gain`,now:t,scope:`character`}),ea(e,t),!0)}function Xa(e,t=Date.now()){let n=Math.min(t,e.lastSimulatedAt+Ha);Zi(e);let r=0;for(;r<500;){let t=co(e,n),i=$i(e),a=i?.endsAt??1/0;if(t===null&&a>n)break;if(t!==null&&t<=a){Fr(e,t);for(let n of[...Xi(e)])so(zi(n))&&(j(e,`${B(e,n.characterId)} stops cooking as the campfire goes out.`,`warning`,t,`character`),z(e,n.characterId));continue}if(i&&a<=n){let t=i,a=t.endsAt;Qa(e,t,a,n),r+=1;continue}break}t>n&&r>0&&j(e,`The saved trail grows quiet after two hours away.`,`muted`,n,`character`),e.lastSimulatedAt=t,e.updatedAt=t;for(let t of e.characters)R(e,t.id)||ta(e,!1,t.id);Zi(e)}function Za(e,t=Date.now(),n=e.selectedCharacterId){let r=R(e,n);if(!r)return 0;let i=r.endsAt-r.startedAt;return i<=0?1:(t-r.startedAt)/i}function Qa(e,t,n,r){if(t.phase===`travelingTo`){yt(e,t.endsAt-t.startedAt,n),Ii(e,t.characterId,Pi(t)),to(e,t,n);return}if(t.phase===`travelingBack`){if(yt(e,t.endsAt-t.startedAt,n),Ii(e,t.characterId,`camp`),Ya(e,n,t.characterId),t.repeat&&ao(e,t,Vi(t),n))return;if(t.repeat&&G(e,t.actionId,n,t.characterId)){no(e,t,n);return}z(e,t.characterId);return}if(t.phase===`followUp`){$a(e,t,n,r);return}eo(e,t,n)}function $a(e,t,n,r){let i=zi(t);if(i!==`butcherFish`){ro(e,t,r,Ui(t));return}if(Da(e,t.characterId,B(e,t.characterId),n),_t(e,i,n),Oa(e,t.characterId)){io(e,t,t.loopIndex??0,n);return}ro(e,t,r,Ui(t))}function eo(e,t,n){let r=uo(e,t.actionId,n);if(!r){j(e,`${B(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),z(e,t.characterId);return}let i=W(r);if(!dn(e,i)){j(e,`${B(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),z(e,t.characterId);return}if(fn(e,i),r===`butcherFish`){if(Da(e,t.characterId,B(e,t.characterId),n),_t(e,r,n),t.repeat&&G(e,r,n,t.characterId)){to(e,t,n);return}z(e,t.characterId);return}let a=Ta(r);if(a){if(Ea(e,t.characterId,B(e,t.characterId),a,n),_t(e,r,n),t.repeat&&G(e,r,n,t.characterId)){to(e,t,n);return}z(e,t.characterId);return}let o=Ca(e,r),s=Oi(r)?xn(e,o.resources,o.resourceCounts,t.characterId):o.resources;if(Oi(r)?oo(e,t.characterId,r,s,n):(pn(e,o.resources,o.resourceCounts),Xt(e,{aggregateKey:`action:${t.characterId}:${r}`,text:Aa(r,B(e,t.characterId)),resources:o.resources,tone:o.tone,now:n,scope:`character`})),ka(e,r,n,B(e,t.characterId)),_t(e,r,n),Oi(r)&&lo(o.resources,s,e,t.characterId)){let i=Hi(t);if(r===`fishRiver`&&Bi(t,i)===`butcherFish`&&Oa(e,t.characterId)){io(e,t,i,n);return}ro(e,t,n,Ui(t));return}if(!Oi(r)&&Di(t).length>1){ao(e,t,Ui(t),n);return}if(t.repeat&&G(e,r,n,t.characterId)){to(e,t,n);return}z(e,t.characterId)}function to(e,t,n){let r=w(t.actionId);if(!r){z(e,t.characterId);return}let i=Pi(t);Ii(e,t.characterId,i),Qi(e,{...t,phase:`working`,originLocationId:i,targetLocationId:i,locationId:i===`camp`?void 0:i,startedAt:n,endsAt:n+r.durationMs})}function no(e,t,n){let r=Mi(t,t.loopIndex??0),i=Fi(e,t.characterId),a=Gi(i,r);if(a<=0){to(e,{...t,targetLocationId:r,locationId:r===`camp`?void 0:r},n);return}Qi(e,{...t,phase:`travelingTo`,originLocationId:i,targetLocationId:r,locationId:r===`camp`?void 0:r,startedAt:n,endsAt:n+a})}function ro(e,t,n,r=Ui(t)){let i=Pi(t);Qi(e,{...t,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i===`camp`?void 0:i,nextLoopIndex:r,startedAt:n,endsAt:n+Gi(i,`camp`)})}function io(e,t,n,r){let i=Bi(t,n),a=w(i);if(!a){ro(e,t,r,Ui(t));return}Qi(e,{...t,actionId:i,phase:`followUp`,originLocationId:Pi(t),targetLocationId:Pi(t),loopIndex:n,startedAt:r,endsAt:r+a.durationMs})}function ao(e,t,n,r){let i=Di(t);if(!i.length)return!1;let a=L(n,i),o=i[a];if(o===`butcherFish`||!G(e,o,r,t.characterId)){let n=Wi(t,a);return n===a?!1:ao(e,t,n,r)}let s=w(o);if(!s)return!1;let c=Mi(t,a),l=Fi(e,t.characterId),u=Gi(l,c);return Qi(e,{...t,actionId:o,phase:u>0?`travelingTo`:`working`,originLocationId:l,targetLocationId:c,locationId:c===`camp`?void 0:c,loopActionIds:i,loopLocationIds:Ai(t,i),loopIndex:a,nextLoopIndex:void 0,followUpActionId:void 0,startedAt:r,endsAt:r+(u||s.durationMs)}),u<=0&&Ii(e,t.characterId,c),!0}function oo(e,t,n,r,i){Object.values(r).some(e=>(e??0)>0)&&Xt(e,{aggregateKey:`action:${t}:${n}`,text:Aa(n,B(e,t)),resources:r,tone:`gain`,now:i,scope:`character`})}function so(e){return e===`cookRabbitMeat`||e===`cookSquirrelMeat`}function co(e,t){let n=Pr(e);return n&&n<=t?n:null}function lo(e,t,n,r){let i=Object.values(e).reduce((e,t)=>e+(t??0),0),a=Object.values(t).reduce((e,t)=>e+(t??0),0);return yn(n,r)>=bn(n,r)||i>0&&a<i}function uo(e,t,n){return t===`craftLowestTool`?Ua(e,n):t}fe.map(e=>e.id);var fo=1.4,po=.8;function mo(e){let t=T.filter(t=>t.weapon&&ci(e,t.id));return t.sort((e,t)=>Co(t.id)-Co(e.id)),t[0]?.id??null}function ho(e){return e?me[e]??`fighter`:`fighter`}function go(e,t=e.selectedCharacterId){let n=mo(e),r=n?oi(n):null,i=ho(n),a=be(i),o=r?.weapon;return{classId:i,classLabel:a.label,weaponId:n,weaponLabel:r?.label??`Unarmed`,damage:o?.damage??fo,speed:o?.speed??po,range:o?.range??a.range,attackRange:So(o?.range??a.range),maxHp:a.maxHp,maxMana:a.maxMana}}function _o(e,t=e.selectedCharacterId){let n=e.characters.find(e=>e.id===t);if(!n)return zt();let r=go(e,t),i=n.combat??zt(),a=r.maxHp,o=r.maxMana,s=i.maxHp>0?i.hp/i.maxHp:1,c=i.maxMana>0?i.mana/i.maxMana:1;return n.combat={maxHp:a,hp:i.hp<=0?0:To(Math.round(a*s),1,a),maxMana:o,mana:o<=0?0:To(Math.round(o*c),0,o)},n.combat}function vo(e){let t=Ht(),n=e.classProgress;if(n)for(let e of pe)t[e.id]={...t[e.id],...n[e.id]??{}};return e.classProgress=t,t}function yo(e,t,n,r,i=Date.now()){let a=Math.max(0,Math.floor(r));if(a<=0)return;let o=e.characters.find(e=>e.id===t);if(!o)return;let s=vo(o)[n];s.totalXp+=a,s.xp=Math.min(k(nt),s.xp+a),s.level=wo(s.xp),e.updatedAt=i,e.lastSimulatedAt=i}function bo(e){let t=k(e.level),n=e.level>=1e3?t:k(e.level+1),r=Math.max(0,n-t),i=Math.max(0,Math.min(e.xp-t,r));return{currentLevelXp:t,nextLevelXp:n,xpIntoLevel:i,xpForLevel:r,ratio:r<=0?1:i/r,atCap:e.level>=nt}}function xo(e){return A(e)}function So(e){return e===`ranged`?3:e===`focus`?2:1}function Co(e){let t=oi(e)?.weapon;if(!t)return 0;let n=t.range===`ranged`?.35:t.range===`focus`?.2:0;return t.damage*t.speed+n}function wo(e){let t=1;for(;t<1e3&&e>=k(t+1);)t+=1;return t}function To(e,t,n){return Number.isFinite(e)?Math.min(n,Math.max(t,e)):t}var Eo=1e3,Do=120,Oo=24,ko=5,Ao=22;function jo(e,t=e.selectedCharacterId,n=`ruins`,r=Date.now()){ns(e);let i=e.characters.find(e=>e.id===t);if(!i||Po(e,t)||ts(e,t))return!1;let a=Se(n),o=Ho(e,n,r),s=go(e,t),c=_o(e,t);c.hp<=0&&(c.hp=c.maxHp),c.mana<=0&&c.maxMana>0&&(c.mana=Math.ceil(c.maxMana*.5));let l=qo(o);return o.units.push({id:`party-${i.id}`,kind:`party`,characterId:i.id,name:i.name,hp:c.hp,maxHp:c.maxHp,mana:c.mana,maxMana:c.maxMana,x:l.x,y:l.y,damage:es(e,i.id,s.damage),attackRange:s.attackRange,actEveryMs:$o(s.speed),nextActAt:r+$o(s.speed),classId:s.classId,weaponId:s.weaponId??void 0}),i.condition=`working`,e.combat.selectedLocationId=n,o.message=`${i.name} enters ${a.label}.`,rs(e,o.message,`muted`,r),Bo(o,r),is(e,r),!0}function Mo(e,t=e.selectedCharacterId,n=Date.now()){ns(e);let r=e.combat.encounter;if(!r)return!1;let i=Fo(e,t);if(!i)return!1;Go(e,i),r.units=r.units.filter(e=>e.id!==i.id);let a=e.characters.find(e=>e.id===t);return a&&!ts(e,t)&&(a.condition=`resting`),rs(e,`${i.name} withdraws from The Ruins.`,`warning`,n),Io(r).length?(r.updatedAt=n,r.message=`${i.name} withdraws.`):e.combat.encounter=null,is(e,n),!0}function No(e,t=Date.now()){ns(e);let n=e.combat.encounter;if(!n)return;let r=0;for(;n&&n.updatedAt+Eo<=t&&r<Do;){let t=n.updatedAt+Eo;Ro(e,n,t),n=e.combat.encounter,n&&(n.updatedAt=t),r+=1}r>0&&is(e,Math.min(t,e.combat.encounter?.updatedAt??t))}function Po(e,t){return!!Fo(e,t)}function Fo(e,t){return e.combat?.encounter?.units.find(e=>e.kind===`party`&&e.characterId===t)??null}function Io(e){return e?.units.filter(e=>e.kind===`party`&&e.hp>0)??[]}function Lo(e){return e?.units.filter(e=>e.kind===`enemy`&&e.hp>0)??[]}function Ro(e,t,n){if(!Io(t).length){Uo(e,t,n);return}if(!Lo(t).length){Bo(t,n);return}let r=t.units.filter(e=>e.hp>0&&e.nextActAt<=n).sort((e,t)=>e.nextActAt-t.nextActAt);for(let i of r){if(i.hp<=0||e.combat.encounter!==t)continue;let r=i.kind===`party`?Lo(t):Io(t);if(!r.length)continue;let a=Xo(i,r);a&&(Zo(i,a)<=i.attackRange?zo(e,t,i,a,n):(Ko(t,i,a),t.message=`${i.name} moves closer.`),i.nextActAt=n+Qo(i))}if(t.units=t.units.filter(e=>e.kind===`party`||e.hp>0),Wo(e,t),!Io(t).length){Uo(e,t,n);return}Lo(t).length||(t.wave+=1,Bo(t,n))}function zo(e,t,n,r,i){let a=Math.max(1,Math.round(n.damage));if(r.hp=Math.max(0,r.hp-a),t.message=`${n.name} hits ${r.name} for ${a}.`,n.kind===`party`&&n.characterId&&n.classId&&yo(e,n.characterId,n.classId,r.hp<=0?ko+Ao:ko,i),r.kind===`enemy`&&r.hp<=0){t.defeatedEnemies+=1,rs(e,`${n.name} defeats ${r.name}.`,`gain`,i);return}r.kind===`party`&&r.hp<=0&&(Go(e,r),rs(e,`${r.name} is forced back from the fight.`,`warning`,i))}function Bo(e,t){if(Lo(e).length||!Io(e).length)return;let n=Math.min(3,1+Math.floor((e.wave-1)/2));for(let r=0;r<n;r+=1)e.units.push(Vo(e,r,t));e.message=`Goblin wave ${e.wave} enters The Ruins.`,e.updatedAt=t}function Vo(e,t,n){let r=Se(e.locationId),i=xe(`goblin`),a=Jo(e,t);return{id:`goblin-${e.wave}-${t+1}-${n}`,kind:`enemy`,enemyId:i.id,name:i.label,hp:i.maxHp,maxHp:i.maxHp,mana:i.maxMana,maxMana:i.maxMana,x:Math.min(r.gridWidth-1,a.x),y:Math.min(r.gridHeight-1,a.y),damage:i.damage,attackRange:i.attackRange,actEveryMs:i.actEveryMs,nextActAt:n+i.actEveryMs}}function Ho(e,t,n){return e.combat.encounter?.locationId===t||(e.combat.encounter={id:`combat-${t}-${n}`,locationId:t,startedAt:n,updatedAt:n,wave:1,defeatedEnemies:0,units:[],message:`The Ruins are quiet.`}),e.combat.encounter}function Uo(e,t,n){Wo(e,t);for(let n of t.units.filter(e=>e.kind===`party`)){let t=n.characterId?e.characters.find(e=>e.id===n.characterId):null;t&&!ts(e,t.id)&&(t.condition=`resting`)}rs(e,`The party withdraws from The Ruins to recover.`,`warning`,n),e.combat.encounter=null,is(e,n)}function Wo(e,t){for(let n of t.units)n.kind===`party`&&Go(e,n)}function Go(e,t){if(!t.characterId)return;let n=e.characters.find(e=>e.id===t.characterId);n&&(n.combat={hp:t.hp,maxHp:t.maxHp,mana:t.mana,maxMana:t.maxMana})}function Ko(e,t,n){let r=Se(e.locationId),i=new Set(e.units.filter(e=>e.hp>0&&e.id!==t.id).map(e=>`${e.x},${e.y}`)),a=Math.sign(n.x-t.x),o=Math.sign(n.y-t.y),s=[{x:t.x+a,y:t.y},{x:t.x,y:t.y+o},{x:t.x,y:t.y-o},{x:t.x-a,y:t.y}].filter(e=>e.x>=0&&e.y>=0&&e.x<r.gridWidth&&e.y<r.gridHeight&&!i.has(`${e.x},${e.y}`)).sort((e,t)=>Zo(e,n)-Zo(t,n))[0];s&&(t.x=s.x,t.y=s.y)}function qo(e){let t=Se(e.locationId);return Yo(e,[Math.floor(t.gridHeight/2),1,t.gridHeight-2,0,t.gridHeight-1].map(e=>({x:0,y:e})))??{x:0,y:0}}function Jo(e,t){let n=Se(e.locationId),r=[Math.floor(n.gridHeight/2),1,n.gridHeight-2,0,n.gridHeight-1].flatMap(e=>[{x:n.gridWidth-1,y:e},{x:n.gridWidth-2,y:e}]);return Yo(e,r.slice(t).concat(r.slice(0,t)))??{x:n.gridWidth-1,y:Math.floor(n.gridHeight/2)}}function Yo(e,t){let n=new Set(e.units.filter(e=>e.hp>0).map(e=>`${e.x},${e.y}`));return t.find(e=>!n.has(`${e.x},${e.y}`))??null}function Xo(e,t){return t.slice().sort((t,n)=>Zo(e,t)-Zo(e,n))[0]??null}function Zo(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function Qo(e){return Math.max(500,e.actEveryMs)}function $o(e){return Math.max(900,Math.round(2400/Math.max(.4,e)))}function es(e,t,n){let r=e.characters.find(e=>e.id===t);if(!r)return n;let i=go(e,t).classId,a=r.classProgress?.[i]?.level??1;return n+Math.max(0,a-1)*.08}function ts(e,t){return e.currentActions.some(e=>e.characterId===t)}function ns(e){e.combat??=Ut()}function rs(e,t,n,r){e.combat.log=[{id:`${r}-${e.combat.log.length}-${t.slice(0,12)}`,time:r,text:t,tone:n},...e.combat.log].slice(0,Oo)}function is(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function as(e,t,n=Date.now()){let r=Oe(t);return!r||!ds(e,r,n)?!1:(fn(e,ke(r)),e.cooking.queue.push({id:`${n}-${r.id}-${e.cooking.queue.length+1}`,recipeId:r.id,stationId:r.station,queuedAt:n,startedAt:null,endsAt:null}),xs(e,r.id),gs(e,n),Cs(e,n),!0)}function os(e,t=Date.now()){gs(e,t);let n=0;for(;n<100;){let r=ss(e);if(!r)break;let i=Pr(e);if(!i||i<=t){vs(e,t);break}if(!r.endsAt||r.endsAt>t)break;_s(e,r,r.endsAt),n+=1,gs(e,r.endsAt)}}function ss(e){return e.cooking.queue.find(e=>e.startedAt!==null&&e.endsAt!==null)??null}function cs(e,t=Date.now()){if(e.startedAt===null||e.endsAt===null)return 0;let n=e.endsAt-e.startedAt;return n<=0?1:Math.max(0,Math.min(1,(t-e.startedAt)/n))}function ls(e){return[...we].sort((e,t)=>e.levelRequirement-t.levelRequirement||e.name.localeCompare(t.name))}function us(e){let t=we.filter(t=>Ss(e,t)).map(e=>e.id);for(let n of t)xs(e,n);return t}function ds(e,t,n=Date.now()){let r=typeof t==`string`?Oe(t):t;return!!(r&&!fs(e,r,n))}function fs(e,t,n=Date.now()){let r=typeof t==`string`?Oe(t):t;if(!r)return`Unknown recipe`;if(e.skills.cooking.level<r.levelRequirement)return`Needs Cooking Lv ${r.levelRequirement}`;if(!P(e,n))return`Needs Lit Campfire`;if(e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`)return`Needs cook at camp`;let i=ys(e,r);return i.length?`Needs ${i.join(`, `)}`:``}function ps(e){let t=et(Ae(e));return Object.entries(t).map(([e,t])=>`${t} ${O(e)}`).join(`, `)}function ms(e){return e.ingredients.map(e=>{if(!e.resourceId)return e.category??`Ingredient`;let t=O(e.resourceId);return e.consumed===!1?`${e.amount} ${t} available`:`${e.amount} ${t}`}).join(`, `)}function hs(e,t,n=Date.now()){let r=De(t);return r?r.id===`campfire`?P(e,n)?`Campfire lit`:`Needs lit campfire`:`Station unavailable`:`Unknown station`}function gs(e,t){if(us(e),ss(e)||!P(e,t))return;let n=e.cooking.queue.find(e=>e.startedAt===null&&e.endsAt===null);if(!n)return;let r=Oe(n.recipeId);if(!r){e.cooking.queue=e.cooking.queue.filter(e=>e.id!==n.id);return}n.startedAt=t,n.endsAt=t+r.cookTimeMs,Cs(e,t)}function _s(e,t,n){let r=Oe(t.recipeId);if(e.cooking.queue=e.cooking.queue.filter(e=>e.id!==t.id),!r){Cs(e,n);return}let i=et(Ae(r));pn(e,i),bt(e,r.xpReward,n),e.cooking.completedRecipeCounts[r.id]=(e.cooking.completedRecipeCounts[r.id]??0)+1,xs(e,r.id),Xt(e,{aggregateKey:`cook:${r.id}`,text:`Cameron cooked ${r.name.toLowerCase()}`,resources:i,tone:`craft`,now:n,scope:`camp`}),Cs(e,n)}function vs(e,t){let n=ss(e);n&&(n.startedAt=null,n.endsAt=null,j(e,`Cooking waits for a lit campfire.`,`warning`,t,`camp`),Cs(e,t))}function ys(e,t){let n=ke(t),r=[];if(!dn(e,n)){let t=bs(e,n);t&&r.push(t)}for(let n of t.ingredients)!n.resourceId||n.consumed!==!1||(e.inventory[n.resourceId]??0)<n.amount&&r.push(`${n.amount} ${O(n.resourceId)}`);return r}function bs(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-(e.inventory[t]??0));a>0&&(n[t]=a)}return Object.keys(n).length?M(n):``}function xs(e,t){e.cooking.knownRecipeIds.includes(t)||e.cooking.knownRecipeIds.push(t)}function Ss(e,t){return e.cooking.knownRecipeIds.includes(t.id)?!0:e.skills.cooking.level<t.levelRequirement?!1:t.ingredients.some(t=>!!(t.resourceId&&e.seenResources.includes(t.resourceId)))}function Cs(e,t){e.updatedAt=t}var ws=``+new URL(`aloe-leaves-icon-BC3NZCE_.png`,import.meta.url).href,Ts=``+new URL(`bone-icon-DsPaT320.png`,import.meta.url).href,Es=``+new URL(`brook-stickleback-icon-CwY54faB.png`,import.meta.url).href,Ds=``+new URL(`basket-background-1-border-1-DAqcyfrl.png`,import.meta.url).href,Os=``+new URL(`camp-location-icon--vnRMwCB.png`,import.meta.url).href,ks=``+new URL(`campfire-2x2-Bq-ELFVu.png`,import.meta.url).href,As=``+new URL(`campfire-unlit-2x2-HI8ea9KO.png`,import.meta.url).href,js=``+new URL(`chamomile-icon-BiiYA-tr.png`,import.meta.url).href,Ms=``+new URL(`coal-icon-CPItI7lv.png`,import.meta.url).href,Ns=``+new URL(`copper-icon-Dl9RQPBM.png`,import.meta.url).href,Ps=``+new URL(`craft-materials-bundle-button-D-JGRyoh.png`,import.meta.url).href,Fs=``+new URL(`fish-filet-icon-BHEr_iIj.png`,import.meta.url).href,Is=``+new URL(`fishing-pole-background-1-border-1-BKeUI82e.png`,import.meta.url).href,K=``+new URL(`flax-fiber-icon-xz-yYl-m.png`,import.meta.url).href,Ls=``+new URL(`forest-location-icon-VKGIFi31.png`,import.meta.url).href,Rs=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20256'%20role='img'%20aria-label='Desert'%3e%3cdefs%3e%3clinearGradient%20id='sky'%20x1='0'%20x2='0'%20y1='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23d9a45f'/%3e%3cstop%20offset='0.56'%20stop-color='%23e7c27a'/%3e%3cstop%20offset='1'%20stop-color='%23c78542'/%3e%3c/linearGradient%3e%3clinearGradient%20id='dune'%20x1='0'%20x2='1'%20y1='0'%20y2='0'%3e%3cstop%20offset='0'%20stop-color='%237d5a2d'/%3e%3cstop%20offset='0.45'%20stop-color='%23c5904b'/%3e%3cstop%20offset='1'%20stop-color='%23f0c979'/%3e%3c/linearGradient%3e%3clinearGradient%20id='shadow'%20x1='0'%20x2='1'%20y1='0'%20y2='0'%3e%3cstop%20offset='0'%20stop-color='%233a2b20'/%3e%3cstop%20offset='1'%20stop-color='%239b6730'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='512'%20height='256'%20fill='url(%23sky)'/%3e%3ccircle%20cx='402'%20cy='58'%20r='34'%20fill='%23ffe2a2'/%3e%3cpath%20d='M0%20161c74-39%20139-47%20195-24%2073%2030%20129%2027%20202-7%2043-20%2080-24%20115-12v138H0z'%20fill='url(%23shadow)'/%3e%3cpath%20d='M0%20190c63-27%20137-24%20222%209%2096%2037%20194%2032%20290-14v71H0z'%20fill='url(%23dune)'/%3e%3cpath%20d='M66%20228c52-23%20113-26%20183-7%2094%2025%20164%2023%20234-9'%20fill='none'%20stroke='%23f7d994'%20stroke-width='7'%20stroke-linecap='round'%20opacity='.6'/%3e%3cpath%20d='M93%20202c38-14%2080-15%20126-2'%20fill='none'%20stroke='%23493321'%20stroke-width='5'%20stroke-linecap='round'%20opacity='.38'/%3e%3cpath%20d='M316%20195c41-9%2082-18%20125-36'%20fill='none'%20stroke='%23493321'%20stroke-width='5'%20stroke-linecap='round'%20opacity='.32'/%3e%3cg%20fill='%235d6d3f'%3e%3cpath%20d='M118%20167c-10-12-12-27-5-45%2013%2011%2017%2026%2011%2045z'/%3e%3cpath%20d='M132%20171c-1-19%208-34%2027-45%205%2019-3%2035-22%2047z'/%3e%3cpath%20d='M126%20169c9-16%2024-24%2045-24-5%2020-19%2030-40%2030z'/%3e%3c/g%3e%3cg%20fill='%236f7c48'%3e%3cpath%20d='M338%20146c-9-10-10-22-4-37%2011%2010%2014%2022%208%2037z'/%3e%3cpath%20d='M351%20150c0-16%208-29%2023-38%204%2016-3%2030-19%2039z'/%3e%3cpath%20d='M346%20148c8-13%2020-20%2038-20-5%2017-17%2025-34%2025z'/%3e%3c/g%3e%3c/svg%3e`,zs=``+new URL(`berry-icon-DEz1wEqt.png`,import.meta.url).href,Bs=``+new URL(`elder-flowers-icon-D2cV17xG.png`,import.meta.url).href,Vs=``+new URL(`hide-icon-BWeGfM2U.png`,import.meta.url).href,Hs=``+new URL(`leather-backpack-equipped-slot-DhoXwslM.png`,import.meta.url).href,Us=``+new URL(`lavender-icon-W4y_Mfy2.png`,import.meta.url).href,Ws=``+new URL(`meadow-location-icon-v2-CqdYJu9g.png`,import.meta.url).href,Gs=``+new URL(`mine-location-icon-BbZJUyhx.png`,import.meta.url).href,Ks=``+new URL(`minnow-icon-ANpglcnc.png`,import.meta.url).href,qs=``+new URL(`mudskipper-icon-_bxkPxea.png`,import.meta.url).href,q=``+new URL(`mushroom-icon-B9zVCy80.png`,import.meta.url).href,Js=``+new URL(`pebble-perch-icon-CHh-9clF.png`,import.meta.url).href,Ys=``+new URL(`rabbit-icon-DGNcKYc7.png`,import.meta.url).href,Xs=``+new URL(`rabbit-meat-icon-Bx0Odi_j.png`,import.meta.url).href,Zs=``+new URL(`river-location-icon-v2-BqOU5iqQ.png`,import.meta.url).href,Qs=``+new URL(`squirrel-icon-BM6RAXNK.png`,import.meta.url).href,$s=``+new URL(`squirrel-meat-icon-hPhcJQOd.png`,import.meta.url).href,ec=``+new URL(`stick-icon-Q8m3FMqw.png`,import.meta.url).href,tc=``+new URL(`stone-hatchet-background-1-border-1-CZNIcvIL.png`,import.meta.url).href,nc=``+new URL(`stone-knife-background-1-border-1-BKz_ubCn.png`,import.meta.url).href,rc=``+new URL(`stone-pick-axe-background-1-border-1-DOAIoZ7O.png`,import.meta.url).href,ic=``+new URL(`stone-spear-background-1-border-1-wlFNpfhc.png`,import.meta.url).href,ac=``+new URL(`stone-icon-yRG7nuNE.png`,import.meta.url).href,oc=``+new URL(`stone-loach-icon-4ySXaf0_.png`,import.meta.url).href,sc=``+new URL(`stone-furnace-2x2-54_TDZso.png`,import.meta.url).href,cc=``+new URL(`short-bow-background-1-border-1-CMIlkEMG.png`,import.meta.url).href,lc=``+new URL(`tin-icon-B9xoPCj0.png`,import.meta.url).href,uc=``+new URL(`hide-tent-2x2-B-STXQiW.png`,import.meta.url).href,dc=``+new URL(`tanning-rack-2x2-DotflpMM.png`,import.meta.url).href,fc=``+new URL(`wooden-bowl-background-1-border-1-C2wDRzy6.png`,import.meta.url).href,pc=``+new URL(`wooden-club-background-1-border-1-zKAKo9tf.png`,import.meta.url).href,mc=``+new URL(`wooden-spoon-background-1-border-1-B1C5KdJm.png`,import.meta.url).href,hc=``+new URL(`wooden-sword-background-1-border-1-BPis69Er.png`,import.meta.url).href,gc=``+new URL(`wooden-totem-background-1-border-1-Dk-pmYjA.png`,import.meta.url).href,_c=``+new URL(`wooden-two-handed-club-background-1-border-1-Dyis-qJI.png`,import.meta.url).href,vc=``+new URL(`wooden-two-handed-sword-background-1-border-1-DVH5QhM0.png`,import.meta.url).href,yc=``+new URL(`wood-icon-CxwJtOlQ.png`,import.meta.url).href,bc=``+new URL(`yarrow-icon-CgaSHIG2.png`,import.meta.url).href;function xc(e,t,n=Date.now()){Fr(e,n);let r=Fe.find(e=>e.id===t),i=t===`campfire`?P(e,n):t===`hideTent`?!1:e.buildings[t];if(!r||i||e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`||!wi(e,t,n)||!dn(e,r.recipe))return!1;if(fn(e,r.recipe),t===`campfire`)Mr(e,n),on(e,t,1),j(e,`Cameron builds a campfire and brings it to flame.`,`craft`,n);else if(t===`hideTent`){let r=an(e,t);e.buildings[t]=!0,j(e,`Cameron raises hide tent ${r}.`,`craft`,n),ln(e,n)}else e.buildings[t]=!0,on(e,t,1),j(e,`Cameron builds a ${r.label}.`,`craft`,n);return vt(e,t,n),Sc(e,n),!0}function J(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-e.inventory[t]);a>0&&(n[t]=a)}return M(n)}function Sc(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function Cc(e){let t=Je(e)?.nutrition;return{hunger:Math.max(0,Math.floor(t?.hunger??0))}}function wc(e,t){return!Tc(e,t)}function Tc(e,t){if(Cc(t).hunger<=0)return`Not edible`;if(!dn(e,{[t]:1}))return`Needs ${O(t)}`;if(Oc(t)&&!dn(e,{woodenSpoon:1}))return`Needs Wooden Spoon`;let n=e.characters.find(t=>t.id===e.selectedCharacterId);return n?n.needs.hunger>=n.needs.maxHunger?`Hunger full`:``:`No character`}function Ec(e,t,n=Date.now()){if(!wc(e,t))return!1;let r=e.characters.find(t=>t.id===e.selectedCharacterId);if(!r)return!1;let i=Cc(t);return fn(e,{[t]:1}),r.needs.hunger=Math.min(r.needs.maxHunger,r.needs.hunger+i.hunger),j(e,`${r.name} eats ${O(t).toLowerCase()} and restores ${i.hunger} hunger.`,`gain`,n,`camp`),e.updatedAt=n,!0}function Dc(e){return Ke(e)}function Oc(e){return Je(e)?.cooking?.tags.includes(`stew`)??!1}var kc=[`herb`,`flower`,`berry`,`fungal`,`root`,`vegetable`,`seasoning`],Ac=[{id:`foraging`,label:`Forage`,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,`gatherFlaxFibers`,`gatherMeadowIngredients`,`gatherForestIngredients`,`gatherRiverIngredients`,`gatherMineIngredients`,`gatherDesertIngredients`,...u,...e,`gatherSand`,`gatherWater`]},{id:`fishing`,label:`Fishing`,actionIds:[`fishRiver`]},{id:`mining`,label:`Mining`,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]},{id:`hunting`,label:`Hunting`,actionIds:[`huntSmallAnimals`]},{id:`woodcutting`,label:`Woodcutting`,actionIds:[`chopTrees`]},{id:`crafting`,label:`Crafting`,actionIds:[`craftLowestTool`,`craftBasket`,`craftWoodenSpoon`,`craftFishingPole`,`craftWoodenBowl`,`craftStoneKnife`,`craftStoneAxe`,`craftStonePickAxe`,`craftStoneSpear`,`craftWoodenClub`,`craftWoodenTwoHandedClub`,`craftWoodenSword`,`craftWoodenTwoHandedSword`,`craftShortBow`,`craftWoodenTotem`]},{id:`smithing`,label:`Smithing`,actionIds:[...v]},{id:`alchemy`,label:`Alchemy`,actionIds:[...p]},{id:`textiles`,label:`Tailoring`,actionIds:[...re]},{id:`butchering`,label:`Butchering`,actionIds:[`butcherFish`,`butcherRabbit`,`butcherSquirrel`]},{id:`cooking`,label:`Cooking`,actionIds:[]},{id:`leatherworking`,label:`Leatherworking`,actionIds:[`tanHide`,`craftLeatherBackpack`]}],jc=[{id:`gather`,label:`Gather`,filterIds:[`foraging`,`mining`,`fishing`,`hunting`,`woodcutting`]},{id:`processing`,label:`Processing`,filterIds:[`crafting`,`smithing`,`alchemy`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{id:`camp`,label:`Camp`,filterIds:[]}],Mc={crafting:`crafting`,smithing:`smithing`,alchemy:`alchemy`,textiles:`textiles`,foraging:`foraging`,mining:`mining`,fishing:`fishing`,woodcutting:`woodcutting`,hunting:`hunting`,butchering:`butchering`,cooking:`cooking`,leatherworking:`leatherworking`},Nc=[{label:`Gather`,skillIds:[`foraging`,`mining`,`fishing`,`woodcutting`,`hunting`]},{label:`Process`,skillIds:[`crafting`,`smithing`,`alchemy`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{label:`Combat`,skillIds:[]},{label:`Other`,skillIds:[`construction`,`agility`]}],Pc={copper:`Copper Bar`,bronze:`Bronze Bar`},Fc=[{id:`tool`,label:`Tool`},{id:`weapon`,label:`Weapon`},{id:`armor`,label:`Armor`}],Ic=[{id:`brewing`,label:`Brewing`,emptyLabel:`Brewing`},{id:`transmutation`,label:`Transmute`,emptyLabel:`Transmutation`},{id:`decomposition`,label:`Decomp`,emptyLabel:`Decomposition`}],Lc={vessel:`Glassware`,potion:`Potions`},Rc={primitive:`Primitive`},zc={primitive:`Wood, stone, fiber`},Bc=[{id:`tool`,label:`Tools`},{id:`weapon`,label:`Weapons`}],Vc={craftLowestTool:{material:`primitive`,productCategory:`tool`},craftBasket:{material:`primitive`,productCategory:`tool`},craftWoodenSpoon:{material:`primitive`,productCategory:`tool`},craftFishingPole:{material:`primitive`,productCategory:`tool`},craftWoodenBowl:{material:`primitive`,productCategory:`tool`},craftStoneKnife:{material:`primitive`,productCategory:`tool`},craftStoneAxe:{material:`primitive`,productCategory:`tool`},craftStonePickAxe:{material:`primitive`,productCategory:`tool`},craftStoneSpear:{material:`primitive`,productCategory:`weapon`},craftWoodenClub:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedClub:{material:`primitive`,productCategory:`weapon`},craftWoodenSword:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedSword:{material:`primitive`,productCategory:`weapon`},craftShortBow:{material:`primitive`,productCategory:`weapon`},craftWoodenTotem:{material:`primitive`,productCategory:`weapon`}},Hc=[{id:`meadow`,label:`Meadow`,iconUrl:Ws,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,...f(`meadow`)]},{id:`river`,label:`River`,iconUrl:Zs,actionIds:[`gatherStones`,`gatherFlaxFibers`,`gatherWater`,...f(`river`)]},{id:`forest`,label:`Forest`,iconUrl:Ls,actionIds:[...f(`forest`)]},{id:`mine`,label:`Mine`,iconUrl:Gs,actionIds:[...f(`mine`)]},{id:`desert`,label:`Desert`,iconUrl:Rs,actionIds:[`gatherSand`,...f(`desert`)]}],Uc={label:`Camp`,iconUrl:Os},Wc=24,Gc=[`fishingPole`,`stoneKnife`,`copperKnife`,`bronzeKnife`,`stoneSpear`,`woodenClub`,`woodenTwoHandedClub`,`woodenSword`,`woodenTwoHandedSword`,`shortBow`,`woodenTotem`,`stoneAxe`,`copperHatchet`,`bronzeHatchet`,`stonePickAxe`,`copperPickaxe`,`bronzePickaxe`,`basket`,`leatherBackpack`,null,null,null,null,null],Kc=[{label:`Armor`,slots:[`Head`,`Face`,`Neck`,`Shoulders`,`Chest`,`Backpack`,`Cape`,`Arms`,`Hands`,`Waist`,`Legs`,`Feet`]},{label:`Accessories`,slots:[`Ring Slot 1`,`Ring Slot 2`,`Toe Ring 1`,`Toe Ring 2`,`Bracelet 1`,`Bracelet 2`,`Earring 1`,`Earring 2`]},{label:`Held Gear`,slots:[`Main Hand`,`Off Hand`,`Quiver`,`Ammo Belt`]}],qc={basket:Ds,fishingPole:Is,leatherBackpack:Hs,stoneKnife:nc,stoneAxe:tc,stonePickAxe:rc,stoneSpear:ic,woodenClub:pc,woodenTwoHandedClub:_c,woodenSword:hc,woodenTwoHandedSword:vc,shortBow:cc,woodenTotem:gc},Jc={basket:`Basket`,fishingPole:`Pole`,leatherBackpack:`Backpack`,stoneKnife:`Knife`,stoneAxe:`Hatchet`,stonePickAxe:`Pick`,stoneSpear:`Spear`,woodenClub:`Club`,woodenTwoHandedClub:`2H Club`,woodenSword:`Sword`,woodenTwoHandedSword:`2H Sword`,shortBow:`Bow`,woodenTotem:`Totem`},Yc={aloeLeaves:ws,blueberries:zs,bone:Ts,brookStickleback:Es,brookSticklebackFilet:Fs,coal:Ms,copper:Ns,minnowFilet:Fs,mudskipperFilet:Fs,pebblePerchFilet:Fs,stoneLoachFilet:Fs,flaxFiber:K,chamomile:js,clover:K,dandelionGreens:K,dirtyBowl:yc,elderflowers:Bs,fennel:K,hearthcap:q,hide:Vs,lavender:Us,meadowStew:q,minnow:Ks,mint:K,mudskipper:qs,pebblePerch:Js,rabbit:Ys,rabbitMeat:Xs,rabbitStew:Ys,roseHips:zs,rootStew:q,sorrel:K,squirrelHerbStew:Qs,squirrel:Qs,squirrelMeat:$s,strawberries:zs,stick:ec,stone:ac,stoneLoach:oc,tin:lc,water:Zs,wildCarrot:K,wildGarlic:K,wildGarlicRabbitStew:Ys,wildOnion:K,yarrow:bc,woodenBowl:fc,woodenSpoon:mc,wood:yc},Xc={basket:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+5 lb carry capacity`},{label:`Capacity`,value:`15 lb equipped`}],leatherBackpack:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+15 lb carry capacity`},{label:`Capacity`,value:`25 lb equipped`}],fishingPole:[{label:`Slot`,value:`Fishing tool`},{label:`Effect`,value:`Fishing River unlocked`},{label:`Use`,value:`River fishing`}],stoneKnife:[{label:`Slot`,value:`Butchering weapon`},{label:`Unlocks`,value:`Hide and bone recovery`},{label:`Use`,value:`Butchering and combat`}],stoneAxe:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Chop Trees unlocked`},{label:`Wood yield`,value:`2-4`}],stonePickAxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Future mining work`},{label:`Use`,value:`Breaking stone`}],stoneSpear:[{label:`Slot`,value:`Two-handed weapon`},{label:`Effect`,value:`Hunt Small Animals unlocked`},{label:`Targets`,value:`Rabbit, Squirrel`}],copperPickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Mining upgrade`},{label:`Durability`,value:`2x stone`}],copperHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Woodcutting upgrade`},{label:`Durability`,value:`Better than stone`}],copperKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Cleaner butchering`},{label:`Durability`,value:`Better than stone`}],bronzePickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Best early mining`},{label:`Durability`,value:`Better than copper`}],bronzeHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Best early chopping`},{label:`Durability`,value:`Better than copper`}],bronzeKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Best early butchering`},{label:`Durability`,value:`Better than copper`}]};function Zc(e){let t=T.find(t=>t.id===e),n=Xc[e]??[];return t?.weapon?[{label:`Slot`,value:`${t.weapon.hands}H ${Qc(t.weapon.range)} weapon`},{label:`Power`,value:el(t.weapon.damage)},{label:`Speed`,value:`${el(t.weapon.speed)}x`},{label:`Tier`,value:$c(t.tier)},...n.filter(e=>e.label!==`Slot`)]:n}function Qc(e){switch(e){case`ranged`:return`ranged`;case`focus`:return`focus`;case`melee`:return`melee`}}function $c(e){return e[0].toUpperCase()+e.slice(1)}function el(e){return Number.isInteger(e)?`${e}`:e.toFixed(1)}function tl(e,t){let n=`gather`,r=`foraging`,i=`meadow`,a=`inventory`,o=`primitive`,s=`copper`,c=`brewing`,l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=null,_=null,v=0,ee=null,y=null;return e.addEventListener(`click`,e=>{let y=e.target.closest(`[data-command]`);if(!y||y.disabled||y.dataset.disabled===`true`)return;let b=y.dataset.command,x=y.dataset.id,S=ee;if(S){if(b===`set-test-reward-multiplier`&&(x===`10`||x===`100`)){t.setTestRewardMultiplier(Number(x)),t.requestRender();return}if(b===`set-action-category`&&Ju(x)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,n=x;let e=qu(n);e.length&&!e.some(e=>e.id===r)&&(r=e[0]?.id??r),t.requestRender();return}if(b===`set-action-filter`&&Qu(x)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,r=x,t.requestRender();return}if(b===`select-smithing-material`&&Yu(x)){s=x,t.requestRender();return}if(b===`select-alchemy-panel`&&Xu(x)){c=x,t.requestRender();return}if(b===`select-crafting-material`&&Zu(x)){o=x,t.requestRender();return}if(b===`set-location`&&nd(x)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,i=x,t.requestRender();return}if(b===`set-character-detail-tab`&&rd(x)){a=x,l=!1,u=!1,d=!1,f=!0,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`toggle-camp-log`){l=!l,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`open-party`){l=!1,u=!0,d=!1,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`open-character-panel`){l=!1,u=!1,d=!0,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`open-character-details`){l=!1,u=!1,d=!1,f=!0,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`open-settings`){l=!1,u=!1,d=!1,f=!1,p=!1,h=!1,m=!0,t.requestRender();return}if(b===`open-action-loops`){l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!0,t.requestRender();return}if(b===`open-combat`){l=!1,u=!1,d=!1,f=!1,p=!0,m=!1,h=!1,t.requestRender();return}if(b===`dispatch-combat`){jo(S,y.dataset.characterId??S.selectedCharacterId,`ruins`,t.getNow()),u=!0,p=!1,l=!1,d=!1,f=!1,m=!1,h=!1,t.persist(),t.requestRender();return}if(b===`recall-combat`){Mo(S,y.dataset.characterId??S.selectedCharacterId,t.getNow()),u=!0,p=!1,l=!1,d=!1,f=!1,m=!1,h=!1,t.persist(),t.requestRender();return}if(b===`select-character`&&x&&S.characters.some(e=>e.id===x)){S.selectedCharacterId=x,_=td(S)??_,u=!1,d=!0,f=!1,t.persist(),t.requestRender();return}if(b===`select-loop-step`){_=ed(y,S,_),v=$u(x,v),g=null,t.requestRender();return}if(b===`insert-loop-after`){let e=ed(y,S,_);if(!e)return;_=e,v=$u(x,v),g={loopId:e,afterIndex:v},h=!1,t.requestRender();return}if(b===`remove-loop-step`){let e=ed(y,S,_);if(!e)return;_=e,v=oa(S,e,$u(x,v),t.getNow()),g=null,t.persist(),t.requestRender();return}if(b===`create-loop`){_=na(S,t.getNow()).id,v=0,g=null,t.persist(),t.requestRender();return}if(b===`delete-loop`){let e=ed(y,S,_);if(!e)return;_=ra(S,e,t.getNow()),v=0,g=null,t.persist(),t.requestRender();return}if(b===`assign-loop`){let e=ed(y,S,_),n=y.dataset.characterId??S.selectedCharacterId;if(!e)return;_=e,Wa(S,e,n,t.getNow()),t.persist(),t.requestRender();return}if(b===`start-action`&&x){let e=x,n=t.getNow();if(g){aa(S,g.loopId,g.afterIndex,e,{locationId:pd(e,i)},n)&&(_=g.loopId,v=g.afterIndex+1,g=null,h=!0),t.persist(),t.requestRender();return}g=null,qa(S,e,n,{locationId:pd(e,i)})}if(b===`stop-action`&&(g=null,Ja(S,t.getNow())),b===`deposit-carried`&&(R(S)||Ya(S,t.getNow())),b===`build-structure`&&x&&xc(S,x,t.getNow()),b===`queue-cooking`&&x&&as(S,x,t.getNow()),b===`eat-food`&&x&&Ec(S,x,t.getNow()),b===`prestige-skill`&&dt(x)){gt(S,x,t.getNow()),t.persist(),t.requestRender();return}if(b===`reset`){t.reset();return}t.persist(),t.requestRender()}}),e.addEventListener(`pointerover`,t=>{let n=pf(t.target,e);n&&(y=n,mf(e,n))}),e.addEventListener(`pointerout`,t=>{if(!y)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!y.contains(n))&&(y=null,hf(e))}),e.addEventListener(`focusin`,t=>{let n=pf(t.target,e);n&&(y=n,mf(e,n))}),e.addEventListener(`focusout`,t=>{if(!y)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!y.contains(n))&&(y=null,hf(e))}),e.addEventListener(`scroll`,()=>{y?.isConnected&&gf(e,y)},!0),window.addEventListener(`resize`,()=>{y?.isConnected&&gf(e,y)}),(b,x=t.getNow())=>{ee=b;let S=V(b,_??td(b));_=S?.id??null,v=S?Math.min(S.actionIds.length-1,Math.max(0,v)):0,g&&!V(b,g.loopId)&&(g=null);let te=vf(e);e.innerHTML=nl(b,r,n,a,i,o,s,c,l,u,d,f,p,m,h,g,_,v,x,t.getTestRewardMultiplier()),y=null,yf(e,te)}}function nl(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,ee){return`
    <div class="game-shell" data-editor-id="game-shell" data-editor-label="Game shell" data-editor-files="src/ui/render.ts, src/style.css">
      ${rl(e,n,c,l,u,d,f,p,m,ee)}
      <main class="main-panel" data-editor-id="main-panel" data-editor-label="Main game panel" data-editor-files="src/ui/render.ts, src/style.css">
        ${Pu(e,v)}
        ${d?zd(e,r):m?Jd(e,g,_,h):p?il():u?al(e):f?_l(e,v):l?ol(e):c?ll(e):wl(e,n,t,i,a,o,s,h,v)}
      </main>
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `}function rl(e,t,n,r,i,a,o,s,c,l){let u=Y(e),d=Wu(e,u),f=!n&&!r&&!i&&!a&&!o&&!s&&!c;return`
    <aside class="character-sidebar panel" data-editor-id="character-sidebar" data-editor-label="Character sidebar" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${cl(l)}
        </div>
      </div>
      <button
        class="character-card selected ${a?`active`:``}"
        type="button"
        data-command="open-character-details"
        aria-expanded="${a}"
      >
        <span class="portrait" aria-hidden="true">${kl(u.name)}</span>
        <span>
          <strong>${u.name}</strong>
          <small>${d}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${jc.map(e=>gl(e,t,f)).join(``)}
              ${dl(i)}
              ${pl(r)}
              ${fl(o)}
            </div>
          </nav>
          <div class="sidebar-footer">
            ${ul(c)}
            ${Hd(n)}
            <button class="ghost-button ${s?`active`:``}" type="button" data-command="open-settings" aria-pressed="${s}">Settings</button>
          </div>
    </aside>
  `}function il(){return`
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
  `}function al(e){return`
    <div class="work-area single-panel">
      <section class="panel character-panel" aria-label="Characters" data-editor-id="character-panel" data-editor-label="Character roster panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Characters</span>
        </div>
        <div class="character-roster-grid">
          ${e.characters.map(t=>sl(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function ol(e){let t=e.characters.filter(t=>Po(e,t.id)).length,n=e.characters.filter(t=>R(e,t.id)).length,r=e.characters.filter(t=>!Po(e,t.id)&&!R(e,t.id)).length;return`
    <div class="work-area single-panel">
      <section class="panel party-panel" aria-label="Party" data-editor-id="party-panel" data-editor-label="Party panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Party</span>
          <small>${e.characters.length} members</small>
        </div>
        <div class="party-panel-summary" aria-label="Party status">
          <span><strong>${t}</strong> in ruins</span>
          <span><strong>${n}</strong> working</span>
          <span><strong>${r}</strong> ready</span>
        </div>
        <div class="party-panel-grid">
          ${e.characters.map(t=>ml(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function sl(e,t){let n=e.selectedCharacterId===t.id,r=!!(R(e,t.id)||Fo(e,t.id)),i=go(e,t.id);return`
    <button
      class="character-select-card ${n?`selected`:``} ${r?`working`:``}"
      type="button"
      data-command="select-character"
      data-id="${t.id}"
      aria-pressed="${n}"
    >
      <span class="portrait" aria-hidden="true">${kl(t.name)}</span>
      <span class="character-select-copy">
        <strong>${t.name}</strong>
        <small>${t.epithet}</small>
        <small>${i.classLabel} - ${i.weaponLabel}</small>
        <em>${Wu(e,t)}</em>
      </span>
      <span class="character-select-badge">${n?`Selected`:`Select`}</span>
    </button>
  `}function cl(e){return`
    <div class="test-reward-controls" aria-label="Test reward multiplier">
      ${[10,100].map(t=>`
          <button
            class="test-reward-button ${e===t?`active`:``}"
            type="button"
            data-command="set-test-reward-multiplier"
            data-id="${t}"
            aria-pressed="${e===t}"
            title="${t}x resources and XP"
          >
            ${t}x
          </button>
        `).join(``)}
    </div>
  `}function ll(e){return`
    <div class="work-area single-panel">
      ${bf(e,`camp`,`Camp Log`,`main-log-panel panel`)}
    </div>
  `}function ul(e){return`
    <button
      class="action-loops-toggle ${e?`active`:``}"
      type="button"
      data-command="open-action-loops"
      aria-pressed="${e}"
    >
      Action Loops
    </button>
  `}function dl(e){return`
    <button
      class="category-button characters-button ${e?`active`:``}"
      type="button"
      data-command="open-character-panel"
      aria-pressed="${e}"
    >
      <span>Characters</span>
    </button>
  `}function fl(e){return`
    <button
      class="category-button combat-button ${e?`active`:``}"
      type="button"
      data-command="open-combat"
      aria-pressed="${e}"
    >
      <span>Ruins</span>
    </button>
  `}function pl(e){return`
    <button
      class="category-button party-button ${e?`active`:``}"
      type="button"
      data-command="open-party"
      aria-pressed="${e}"
    >
      <span>Party</span>
    </button>
  `}function ml(e,t){let n=Fo(e,t.id),r=!!n,i=R(e,t.id),a=go(e,t.id),o=n??t.combat,s=n?.maxHp??a.maxHp,c=n?.maxMana??a.maxMana,l=Math.min(s,o.hp),u=Math.min(c,o.mana),d=r?`In Ruins`:i?`Working`:`Ready`,f=r?`recall-combat`:`dispatch-combat`,p=!r&&!!i;return`
    <article class="party-member ${r?`dispatched`:``}">
      <div class="party-member-topline">
        <span class="portrait small" aria-hidden="true">${kl(t.name)}</span>
        <span>
          <strong>${t.name}</strong>
          <small>${a.classLabel} - ${d}</small>
        </span>
      </div>
      ${hl(`HP`,l,s,`hp`)}
      ${hl(`Mana`,u,c,`mana`)}
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
  `}function hl(e,t,n,r){let i=Math.max(1,n),a=Math.max(0,Math.min(i,t));return`
    <div class="vitals-row ${r}">
      <span>${e}</span>
      <div class="vitals-track" aria-hidden="true">
        <span style="transform: scaleX(${(a/i).toFixed(4)})"></span>
      </div>
      <strong>${Math.round(a)}/${Math.round(i)}</strong>
    </div>
  `}function gl(e,t,n){let r=n&&e.id===t;return`
    <button
      class="category-button ${r?`active`:``}"
      type="button"
      data-command="set-action-category"
      data-id="${e.id}"
      aria-pressed="${r}"
    >
      <span>${e.label}</span>
    </button>
  `}function _l(e,t){let n=Se(`ruins`),r=e.combat.encounter,i=Lo(r).length,a=e.characters.filter(t=>Po(e,t.id)).length;return`
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
        ${vl(e,t)}
      </section>
      <aside class="panel combat-side-panel" aria-label="Combat status" data-editor-id="combat-side-panel" data-editor-label="Combat side panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Status</span>
        </div>
        ${bl(e,t)}
        ${Cl(e)}
      </aside>
    </div>
  `}function vl(e,t){let n=Se(`ruins`),r=e.combat.encounter,i=[];for(let e=0;e<n.gridHeight;e+=1)for(let a=0;a<n.gridWidth;a+=1){let n=r?.units.find(t=>t.x===a&&t.y===e&&t.hp>0)??null;i.push(yl(n,a,e,t))}return`
    <div class="combat-field" style="--combat-cols: ${n.gridWidth}; --combat-rows: ${n.gridHeight};" aria-label="Combat grid">
      ${i.join(``)}
    </div>
    <div class="combat-field-message">${r?.message??`Open Party to dispatch someone.`}</div>
  `}function yl(e,t,n,r){if(!e)return`<div class="combat-cell" data-grid-x="${t}" data-grid-y="${n}"></div>`;let i=e.kind===`enemy`&&e.enemyId?xe(e.enemyId).glyph:kl(e.name),a=Math.max(0,e.nextActAt-r);return`
    <div class="combat-cell occupied ${e.kind}" data-grid-x="${t}" data-grid-y="${n}" title="${e.name}">
      <span class="combat-unit-glyph">${i}</span>
      <span class="combat-unit-name">${e.name}</span>
      <span class="combat-unit-timer">${U(a)}</span>
      ${hl(`HP`,e.hp,e.maxHp,`hp`)}
    </div>
  `}function bl(e,t){let n=e.combat.encounter;return n?`
    <div class="combat-roster-list">
      ${n.units.map(e=>xl(e,t)).join(``)}
    </div>
  `:`<div class="empty-line">No one is fighting.</div>`}function xl(e,t){let n=e.classId?Sl(e.classId):`Enemy`,r=e.hp>0?`Acts in ${U(e.nextActAt-t)}`:`Down`;return`
    <article class="combat-roster-unit ${e.kind}">
      <div>
        <strong>${e.name}</strong>
        <small>${n} - ${r}</small>
      </div>
      ${hl(`HP`,e.hp,e.maxHp,`hp`)}
      ${e.maxMana>0?hl(`Mana`,e.mana,e.maxMana,`mana`):``}
    </article>
  `}function Sl(e){return pe.find(t=>t.id===e)?.label??`Fighter`}function Cl(e){let t=e.combat.log.slice(0,8);return`
    <section class="combat-event-log" aria-label="Combat log">
      <h3>Combat Log</h3>
      <div class="combat-log-list">
        ${t.length?t.map(e=>`<div class="combat-log-entry ${e.tone}">${e.text}</div>`).join(``):`<div class="empty-line">No combat events yet.</div>`}
      </div>
    </section>
  `}function wl(e,t,n,r,i,a,o,s,c){return t===`camp`?`
      <div class="work-area camp-work-area">
        ${Tl(e)}
        ${Dd(e,c)}
      </div>
    `:`
      <div class="work-area">
      ${jl(e,t,n)}
      ${Al(e,n,r,i,a,o,s,c)}
    </div>
  `}function Tl(e){let t=Y(e);return`
    <section class="panel camp-stats-panel" aria-label="Camp stats" data-editor-id="camp-stats-panel" data-editor-label="Camp stats panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Stats</span>
      </div>
      <div class="camp-stat-list">
        <div class="camp-stat-row">
          <span>Population</span>
          <strong>${sn(e)}/${cn(e)}</strong>
        </div>
        <div class="camp-stat-row">
          <span>${t.name} Hunger</span>
          <strong>${Math.round(t.needs.hunger)}/${Math.round(t.needs.maxHunger)}</strong>
        </div>
      </div>
    </section>
  `}function El(e){return e.targetLocationId?e.targetLocationId:e.phase===`travelingBack`?`camp`:e.locationId??`camp`}function Dl(e,t){return e.originLocationId?e.originLocationId:e.phase===`travelingBack`?e.locationId??t:t}function Ol(e){return e.replace(/[^a-zA-Z0-9_-]/g,`-`)}function kl(e){return(e.trim().split(/\s+/).map(e=>e[0]).join(``)||`?`).slice(0,2).toUpperCase()}function Al(e,t,n,r,i,a,o,s){return`
    <div class="action-stack">
      ${cd(Ku(t),n)}
      ${Nl(e,t,n,r,i,a,o,s)}
    </div>
  `}function jl(e,t,n){return`
    <section class="panel skill-panel" data-editor-id="skill-filter-panel" data-editor-label="Skill filter panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-grid">
        ${qu(t).map(t=>Ml(e,t,n)).join(``)}
      </div>
    </section>
  `}function Ml(e,t,n){let r=t.id===n,i=Hu(e,t.actionIds??[]),a=e.skills[Mc[t.id]],o=mt(a),s=i||(o.canPrestige?`Prestige ready`:`Lv ${a.level} - ${A(o.xpIntoLevel)}/${A(o.xpForLevel)} XP`);return`
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
  `}function Nl(e,t,n,r,i,a,o,s){let c=Ku(t),l=c.id===`foraging`?fd(dd(c.id,n)):(c.id,c.actionIds??[]);return c.id===`crafting`?Hl(e,l,r,o,s):c.id===`smithing`?ru(e,l,i,o,s):c.id===`alchemy`?pu(e,l,a,o,s):c.id===`textiles`?Su(e,l,o,s):c.id===`cooking`?Eu(e,s):c.id===`foraging`?Pl(e,dd(c.id,n),o):`
      <section class="action-panel" data-editor-id="action-panel-${t}" data-editor-label="${c.label} action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="action-grid">
          ${l.map(t=>yd(e,t,o)).join(``)}
        </div>
    </section>
  `}function Pl(e,n,r){let i=fd(n).filter(e=>!t(e)),o=a(n);return`
      <section class="action-panel" data-editor-id="action-panel-foraging" data-editor-label="Forage action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="smithing-craft-columns crafting-craft-columns forage-category-columns">
          ${i.length?Il(e,i,r):``}
          ${kc.map(t=>Fl(e,t,o.filter(e=>Rl(e)===t),r)).join(``)}
        </div>
      </section>
  `}function Fl(e,t,n,r){let i=zl(t);return Ll(`${i} forage`,i,n.map(t=>Bl(e,t.actionId,r)),`No ${i.toLowerCase()} here.`)}function Il(e,t,n){return Ll(`Forage supplies`,`Supplies`,t.map(t=>Vl(e,t,n)),`No supplies here.`)}function Ll(e,t,n,r){let i=n.filter(Boolean);return`
    <section class="smithing-craft-column crafting-category-card forage-category-card" aria-label="${e}">
      <div class="smithing-craft-column-heading crafting-category-heading">
        <span>${t}</span>
        <small>${i.length}</small>
      </div>
      ${i.length?`<div class="smithing-recipe-grid crafting-recipe-grid crafting-category-recipes forage-item-grid">${i.join(``)}</div>`:`<div class="smithing-empty-column">${r}</div>`}
    </section>
  `}function Rl(e){return e.tags.includes(`fungus`)?`fungal`:e.category}function zl(e){return e===`fungal`?`Fungal`:n(e)}function Bl(e,n,r){let i=w(n),a=t(n);if(!i||!a)return``;let o=F(e,n),s=W(n),c=G(e,n),l=r?V(e,r.loopId):null,u=R(e),d=!!(r&&l),f=!!(d&&l&&r&&ia(l,r.afterIndex,n)),p=u?X(u)===n:!1,m=d?!f:!c||p,h=J(e,s),g=c?``:o?h:I(e,n),_=d?f?`Set as action loop step`:`Not valid for this loop`:p?`Running`:!c&&g?g:`Ready`,v=d?`Set`:p?`Running`:c?`Start`:`Locked`,ee=Ed(n,i.durationMs),y=a.minAmount===a.maxAmount?`${a.minAmount}`:`${a.minAmount}-${a.maxAmount}`;return`
    <button
      class="smithing-recipe-card crafting-recipe-card forage-item-card ${p?`active`:``} ${f?`assignable`:``} ${!o&&!f?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${n}"
      data-editor-id="forage-item-${a.resourceId}"
      data-editor-label="Forage item: ${a.resourceLabel}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${m}"
      data-tooltip-source
      aria-disabled="${m}"
      aria-label="${v} ${a.resourceLabel}. Finds ${y}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Z(n)}</span>
      ${Q(i.label,ee,_)}
    </button>
  `}function Vl(e,t,n){let r=w(t);if(!r)return``;let i=F(e,t),a=W(t),o=G(e,t),s=n?V(e,n.loopId):null,c=R(e),l=!!(n&&s),u=!!(l&&s&&n&&ia(s,n.afterIndex,t)),d=c?X(c)===t:!1,f=l?!u:!o||d,p=J(e,a),m=o?``:i?p:I(e,t),h=l?u?`Set as action loop step`:`Not valid for this loop`:d?`Running`:!o&&m?m:`Ready`,g=l?`Set`:d?`Running`:o?`Start`:`Locked`,_=Ed(t,r.durationMs);return`
    <button
      class="smithing-recipe-card crafting-recipe-card forage-item-card ${d?`active`:``} ${u?`assignable`:``} ${!i&&!u?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="forage-action-${t}"
      data-editor-label="Forage action: ${r.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${f}"
      data-tooltip-source
      aria-disabled="${f}"
      aria-label="${g} ${r.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Z(t)}</span>
      ${Q(r.label,_,h)}
    </button>
  `}function Hl(e,t,n,r,i){let a=`craftLowestTool`,o=t.filter(Gl),s=Ul(n,o);return`
    <section class="action-panel crafting-action-panel" data-editor-id="action-panel-crafting" data-editor-label="Crafting action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card crafting-panel-card">
        <div class="smithing-workbench crafting-workbench">
          <div class="smithing-furnace-column crafting-workbench-column">
            ${Kl(o,s)}
            ${ql(e,i)}
            ${t.includes(a)?vd(e,a,r):``}
          </div>
          ${Jl(o,s)}
        </div>
        ${Zl(e,o,s,r)}
      </div>
    </section>
  `}function Ul(e,t){let n=Wl(t);return n.includes(e)?e:n[0]??e}function Wl(e){let t=e.map(e=>Vc[e]?.material).filter(e=>!!e);return Array.from(new Set(t))}function Gl(e){return!!Vc[e]}function Kl(e,t){let n=e.filter(e=>e!==`craftLowestTool`).length;return`
    <div class="smithing-status-grid crafting-status-grid">
      <div class="smithing-status-item">
        <span>Work Bench</span>
        <strong>Hand Craft</strong>
      </div>
      <div class="smithing-status-item">
        <span>Materials</span>
        <strong>${Rc[t]}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Recipes</span>
        <strong>${n}</strong>
      </div>
    </div>
  `}function ql(e,t){let n=R(e),r=n?X(n):null;if(!n||!r||!Gl(r))return`
      <div class="smithing-active-row idle crafting-active-row">
        <span>No active craft</span>
        <strong>Bench idle</strong>
      </div>
    `;let i=w(r),a=da(Za(e,t),0,1);return`
    <div class="smithing-active-row crafting-active-row">
      <span>Active craft</span>
      <strong>${i?tu(i.label):`Recipe`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${U(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Jl(e,t){return`
    <div class="smithing-smelt-column crafting-material-column">
      <div class="section-heading">
        <span>Materials Type</span>
      </div>
      <div class="smithing-smelt-grid crafting-material-grid">
        ${Wl(e).map(n=>Yl(e,n,t)).join(``)}
      </div>
    </div>
  `}function Yl(e,t,n){let r=t===n,i=Xl(e,t);return`
    <article class="smithing-smelt-card crafting-material-card ${r?`selected`:``}">
      <button
        class="smithing-smelt-select crafting-material-select"
        type="button"
        data-command="select-crafting-material"
        data-id="${t}"
        aria-pressed="${r}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${Z(`craftLowestTool`)}</span>
        <span class="smithing-recipe-copy">
          <strong>${Rc[t]}</strong>
          <small>${r?`Selected type`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${i} recipes</b>
          <small>${zc[t]}</small>
        </span>
      </button>
    </article>
  `}function Xl(e,t){return e.filter(e=>e!==`craftLowestTool`&&Vc[e]?.material===t).length}function Zl(e,t,n,r){let i=t.filter(e=>e!==`craftLowestTool`&&Vc[e]?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section crafting-recipe-section">
      <div class="smithing-craft-columns crafting-craft-columns">
        ${Bc.map(t=>Ql(e,i,n,t,r)).join(``)}
      </div>
    </div>
  `}function Ql(e,t,n,r,i){let a=t.filter(e=>Vc[e]?.productCategory===r.id);return`
    <section class="smithing-craft-column crafting-craft-column crafting-category-card" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading crafting-category-heading">
        <span>${r.label}</span>
        <small>${a.length}</small>
      </div>
      ${a.length?`<div class="smithing-recipe-grid crafting-recipe-grid crafting-category-recipes">${a.map(t=>eu(e,t,i)).join(``)}</div>`:`<div class="smithing-empty-column">No ${Rc[n].toLowerCase()} ${r.label.toLowerCase()} yet.</div>`}
    </section>
  `}function $l(e,t,n){let r=w(t);if(!r||!Gl(t))return null;let i=F(e,t),a=W(t),o=G(e,t),s=n?V(e,n.loopId):null,c=R(e),l=!!(n&&s),u=!!(l&&s&&n&&ia(s,n.afterIndex,t)),d=c?X(c)===t:!1,f=l?!u:!o||d,p=J(e,a),m=o?``:i?p:I(e,t);return{definition:r,cost:a,unlocked:i,canAssignFollowUp:u,active:d,disabled:f,statusText:l?u?`Set as action loop step`:`Not valid for this loop`:d?`Running`:!o&&m?m:`Ready`,buttonLabel:l?`Set`:d?`Running`:o?`Start`:`Locked`,tooltipRows:Ed(t,r.durationMs)}}function eu(e,t,n){let r=$l(e,t,n);if(!r)return``;let{definition:i,cost:a,unlocked:o,canAssignFollowUp:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=r,p=tu(i.label),m=M(a);return`
    <button
      class="smithing-recipe-card crafting-recipe-card ${c?`active`:``} ${s?`assignable`:``} ${!o&&!s?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="crafting-recipe-${t}"
      data-editor-label="Crafting recipe: ${p}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${l}"
      data-tooltip-source
      aria-disabled="${l}"
      aria-label="${d} ${p}. Uses ${m}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Z(t)}</span>
      ${Q(p,f,u)}
    </button>
  `}function tu(e){return e===`Craft Lowest Tool`?`Lowest Stock Tool`:e.replace(/^Craft\s+/,``)}function nu(e){let t=Cd(e);if(t)return`1 ${t.label}`;switch(e){case`craftLowestTool`:return`Lowest Stock`;case`craftWoodenSpoon`:return`1 Wooden Spoon`;case`craftWoodenBowl`:return`1 Wooden Bowl`;default:return w(e)?.label.replace(/^Craft /,`1 `)??`1 item`}}function ru(e,t,n,r,i){let a=t.filter(e=>y.some(t=>t===e)),o=t.filter(e=>b.some(t=>t===e)),s=Rr(e),c=iu(n,a);return`
    <section class="action-panel smithing-action-panel" data-editor-id="action-panel-smithing" data-editor-label="Smithing action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card">
        <div class="smithing-workbench">
          <div class="smithing-furnace-column">
            ${au(s)}
            ${ou(e,i)}
          </div>
          ${su(e,a,c,r)}
        </div>
        ${lu(e,o,c,r)}
      </div>
    </section>
  `}function iu(e,t){let n=t.map(e=>x(e)?.material).filter(e=>!!e);return n.includes(e)?e:n[0]??e}function au(e){return`
    <div class="smithing-status-grid">
      <div class="smithing-status-item">
        <span>Furnace</span>
        <strong>${e.furnaceBuilt?`Stone Furnace`:`Not built`}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Coal</span>
        <strong>${e.coal}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Fuel</span>
        <strong>${e.furnaceBuilt?e.coal>0?`Ready`:`Needs coal`:`Furnace locked`}</strong>
      </div>
    </div>
  `}function ou(e,t){let n=R(e),r=n?X(n):null;if(!n||!r||!zr(r))return`
      <div class="smithing-active-row idle">
        <span>No active smelt</span>
        <strong>Furnace idle</strong>
      </div>
    `;let i=x(r),a=da(Za(e,t),0,1);return`
    <div class="smithing-active-row">
      <span>Active smelt</span>
      <strong>${i?.label??`Smelting`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${U(n.endsAt-t)}</em>
      </div>
    </div>
  `}function su(e,t,n,r){return`
    <div class="smithing-smelt-column">
      <div class="section-heading">
        <span>Smelting</span>
      </div>
      <div class="smithing-smelt-grid">
        ${t.map(t=>cu(e,t,n,r)).join(``)}
      </div>
    </div>
  `}function cu(e,t,n,r){let i=du(e,t,r);if(!i)return``;let{definition:a,recipe:o,cost:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=i,p=o.material===n,m=d===`Set`?`Set Smelt`:c?`Smelting`:d===`Start`?`Smelt`:d;return`
    <article class="smithing-smelt-card ${p?`selected`:``} ${c?`active`:``}">
      <button
        class="smithing-smelt-select"
        type="button"
        data-command="select-smithing-material"
        data-id="${o.material}"
        aria-pressed="${p}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${Z(t)}</span>
        <span class="smithing-recipe-copy">
          <strong>${Pc[o.material]}</strong>
          <small>${p?`Selected material`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${Hr(o.actionId)}</b>
          <small>${M(s)}</small>
        </span>
      </button>
      <button
        class="smithing-smelt-button"
        type="button"
        data-command="start-action"
        data-id="${t}"
        data-disabled="${l}"
        data-tooltip-source
        aria-disabled="${l}"
        aria-label="${m} ${a.label}"
      >
        ${m}
        ${Q(a.label,f,u)}
      </button>
    </article>
  `}function lu(e,t,n,r){let i=t.filter(e=>x(e)?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section">
      <div class="section-heading">
        <span>${Pc[n]} Smithing</span>
        <small>Filtered by selected bar</small>
      </div>
      <div class="smithing-craft-columns">
        ${Fc.map(t=>uu(e,i,n,t,r)).join(``)}
      </div>
    </div>
  `}function uu(e,t,n,r,i){let a=t.filter(e=>(x(e)?.productCategory??`tool`)===r.id);return`
    <section class="smithing-craft-column" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading">
        <span>${r.label}</span>
        <small>${a.length}</small>
      </div>
      ${a.length?`<div class="smithing-recipe-grid">${a.map(t=>fu(e,t,i)).join(``)}</div>`:`<div class="smithing-empty-column">No ${Pc[n].toLowerCase()} ${r.label.toLowerCase()} recipes yet.</div>`}
    </section>
  `}function du(e,t,n){let r=w(t),i=x(t);if(!r||!i)return null;let a=F(e,t),o=W(t),s=G(e,t),c=n?V(e,n.loopId):null,l=R(e),u=!!(n&&c),d=!!(u&&c&&n&&ia(c,n.afterIndex,t)),f=l?X(l)===t:!1,p=u?!d:!s||f,m=J(e,o),h=s?``:a?m:I(e,t);return{definition:r,recipe:i,cost:o,unlocked:a,canAssignFollowUp:d,active:f,disabled:p,statusText:u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,buttonLabel:u?`Set`:f?`Running`:s?`Start`:`Locked`,tooltipRows:Ed(t,r.durationMs)}}function fu(e,t,n){let r=du(e,t,n);if(!r)return``;let{definition:i,recipe:a,cost:o,unlocked:s,canAssignFollowUp:c,active:l,disabled:u,statusText:d,buttonLabel:f,tooltipRows:p}=r;return`
    <button
      class="smithing-recipe-card ${l?`active`:``} ${c?`assignable`:``} ${!s&&!c?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="smithing-recipe-${t}"
      data-editor-label="Smithing recipe: ${i.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${u}"
      data-tooltip-source
      aria-disabled="${u}"
      aria-label="${f} ${i.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Z(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${i.label}</strong>
        <small>${d}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${Hr(a.actionId)}</b>
        <small>${M(o)}</small>
      </span>
      ${Q(i.label,p,d)}
    </button>
  `}function pu(e,t,n,r,i){let a=Ic.some(e=>e.id===n)?n:`brewing`;return`
    <section class="action-panel alchemy-action-panel" data-editor-id="action-panel-alchemy" data-editor-label="Alchemy action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card alchemy-panel-card">
        ${mu(a)}
        ${a===`brewing`?hu(e,t,r,i):xu(a)}
      </div>
    </section>
  `}function mu(e){return`
    <div class="alchemy-mode-tabs" role="tablist" aria-label="Alchemy panels">
      ${Ic.map(t=>{let n=t.id===e;return`
            <button
              class="alchemy-mode-button ${n?`active`:``}"
              type="button"
              role="tab"
              data-command="select-alchemy-panel"
              data-id="${t.id}"
              aria-selected="${n}"
              aria-pressed="${n}"
            >
              ${t.label}
            </button>
          `}).join(``)}
    </div>
  `}function hu(e,t,n,r){let i=t.filter(e=>h.some(t=>t===e)),a=i.filter(e=>g(e)?.kind===`vessel`),o=i.filter(e=>g(e)?.kind===`potion`);return`
    <div class="alchemy-brewing-panel">
      ${gu(e)}
      ${_u(e,r)}
      ${vu(e,Lc.vessel,a,n)}
      ${vu(e,Lc.potion,o,n)}
    </div>
  `}function gu(e){let t=Jr(e);return`
    <div class="smithing-status-grid alchemy-status-grid">
      <div class="smithing-status-item">
        <span>Furnace</span>
        <strong>${t.furnaceBuilt?`Stone Furnace`:`Not built`}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Coal</span>
        <strong>${t.coal}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Vials</span>
        <strong>${t.vials}</strong>
      </div>
    </div>
  `}function _u(e,t){let n=R(e),r=n?X(n):null,i=r?g(r):void 0;if(!n||!i)return`
      <div class="smithing-active-row idle alchemy-active-row">
        <span>No active brew</span>
        <strong>Bench idle</strong>
      </div>
    `;let a=da(Za(e,t),0,1);return`
    <div class="smithing-active-row alchemy-active-row">
      <span>Active alchemy</span>
      <strong>${i.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-alchemy-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-alchemy-action-remaining>${U(n.endsAt-t)}</em>
      </div>
    </div>
  `}function vu(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section alchemy-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid alchemy-recipe-grid">
        ${n.map(t=>yu(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function yu(e,t,n){let r=bu(e,t,n);if(!r)return``;let{definition:i,recipe:a,cost:o,unlocked:s,canAssignFollowUp:c,active:l,disabled:u,statusText:d,buttonLabel:f,tooltipRows:p}=r;return`
    <button
      class="smithing-recipe-card alchemy-recipe-card ${l?`active`:``} ${c?`assignable`:``} ${!s&&!c?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="alchemy-recipe-${t}"
      data-editor-label="Alchemy recipe: ${i.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${u}"
      data-tooltip-source
      aria-disabled="${u}"
      aria-label="${f} ${i.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Z(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${i.label}</strong>
        <small>${d}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${Zr(a.actionId)}</b>
        <small>${M(o)}</small>
      </span>
      ${Q(i.label,p,d)}
    </button>
  `}function bu(e,t,n){let r=w(t),i=g(t);if(!r||!i)return null;let a=F(e,t),o=W(t),s=G(e,t),c=n?V(e,n.loopId):null,l=R(e),u=!!(n&&c),d=!!(u&&c&&n&&ia(c,n.afterIndex,t)),f=l?X(l)===t:!1,p=u?!d:!s||f,m=J(e,o),h=s?``:a?m:I(e,t);return{definition:r,recipe:i,cost:o,unlocked:a,canAssignFollowUp:d,active:f,disabled:p,statusText:u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,buttonLabel:u?`Set`:f?`Running`:s?`Start`:`Locked`,tooltipRows:Ed(t,r.durationMs)}}function xu(e){let t=Ic.find(t=>t.id===e)??Ic[0];return`
    <div class="alchemy-empty-panel" role="tabpanel" aria-label="${t.emptyLabel}">
      <div class="smithing-empty-column">No ${t.emptyLabel.toLowerCase()} recipes yet.</div>
    </div>
  `}function Su(e,t,n,r){let i=t.filter(e=>ie.some(t=>t===e)),a=t.filter(e=>ae.some(t=>t===e)),o=t.filter(e=>oe.some(t=>t===e)),s=t.filter(e=>se.some(t=>t===e)),c=t.filter(e=>ce.some(t=>t===e)),l=t.filter(e=>le.some(t=>t===e));return`
    <section class="action-panel textile-action-panel" data-editor-id="action-panel-textiles" data-editor-label="Tailoring action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card textile-panel-card">
        <div class="smithing-status-grid textile-status-grid">
          <div class="smithing-status-item">
            <span>Flax Chain</span>
            <strong>${ju(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Stations</span>
            <strong>${Mu(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Needles</span>
            <strong>${Nu(e)}</strong>
          </div>
        </div>
        ${Cu(e,r)}
        ${wu(e,`Flax Prep`,[...i,...a],n)}
        ${wu(e,`Spinning`,o,n)}
        ${wu(e,`Weaving`,s,n)}
        ${wu(e,`Needles`,c,n)}
        ${wu(e,`Sewing`,l,n)}
      </div>
    </section>
  `}function Cu(e,t){let n=R(e),r=n?X(n):null,i=r?C(r):void 0;if(!n||!i)return`
      <div class="smithing-active-row idle textile-active-row">
        <span>No active tailoring work</span>
        <strong>Chain idle</strong>
      </div>
    `;let a=da(Za(e,t),0,1);return`
    <div class="smithing-active-row textile-active-row">
      <span>Active tailoring work</span>
      <strong>${i.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-textile-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-textile-action-remaining>${U(n.endsAt-t)}</em>
      </div>
    </div>
  `}function wu(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section textile-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid textile-recipe-grid">
        ${n.map(t=>Tu(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function Tu(e,t,n){let r=w(t),i=C(t);if(!r||!i)return``;let a=F(e,t),o=W(t),s=G(e,t),c=n?V(e,n.loopId):null,l=R(e),u=!!(n&&c),d=!!(u&&c&&n&&ia(c,n.afterIndex,t)),f=l?X(l)===t:!1,p=u?!d:!s||f,m=J(e,o),h=s?``:a?m:I(e,t),g=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,_=u?`Set`:f?`Running`:s?`Start`:`Locked`,v=Ed(t,r.durationMs);return`
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
      aria-label="${_} ${r.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Z(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${r.label}</strong>
        <small>${g}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${ni(i)}</b>
        <small>${M(o)}</small>
      </span>
      ${Q(r.label,v,g)}
    </button>
  `}function Eu(e,t){let n=ls(e).filter(e=>e.tags.includes(`stew`)),r=e.skills.cooking,i=mt(r);return`
    <section class="action-panel cooking-action-panel" data-editor-id="action-panel-cooking" data-editor-label="Cooking recipe panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card cooking-panel-card">
        <div class="smithing-status-grid cooking-status-grid">
          <div class="smithing-status-item">
            <span>Station</span>
            <strong>${hs(e,`campfire`,t)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Cooking</span>
            <strong>Lv ${r.level} (${A(i.xpIntoLevel)}/${A(i.xpForLevel)})</strong>
          </div>
          <div class="smithing-status-item">
            <span>Queue</span>
            <strong>${e.cooking.queue.length}</strong>
          </div>
        </div>
        ${Du(e,t)}
        ${Ou(e,t)}
        ${ku(e,`Stews`,n,t)}
      </div>
    </section>
  `}function Du(e,t){let n=ss(e),r=n?ls(e).find(e=>e.id===n.recipeId):void 0;if(!n||!r)return`
      <div class="smithing-active-row idle cooking-active-row">
        <span>No active cooking</span>
        <strong>${e.cooking.queue.length?`Waiting for campfire`:`Queue idle`}</strong>
      </div>
    `;let i=da(cs(n,t),0,1),a=Math.max(0,(n.endsAt??t)-t);return`
    <div class="smithing-active-row cooking-active-row">
      <span>Active cooking</span>
      <strong>${r.name}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-cooking-action-progress style="transform: scaleX(${i.toFixed(4)})"></span>
        <em data-cooking-action-remaining>${U(a)}</em>
      </div>
    </div>
  `}function Ou(e,t){let n=e.cooking.queue.filter(e=>e.startedAt===null||e.endsAt===null);return n.length?`
    <div class="cooking-queue-panel">
      <div class="section-heading">
        <span>Queued</span>
      </div>
      <div class="cooking-queue-list">
        ${n.map(n=>`
              <div class="cooking-queue-row">
                <strong>${ls(e).find(e=>e.id===n.recipeId)?.name??n.recipeId}</strong>
                <small>${P(e,t)?`Waiting turn`:`Needs lit campfire`}</small>
              </div>
            `).join(``)}
      </div>
    </div>
  `:``}function ku(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section cooking-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid cooking-recipe-grid">
        ${n.map(t=>Au(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function Au(e,t,n){let r=ds(e,t,n),i=fs(e,t,n),a=!r,o=ke(t),s=e.cooking.completedRecipeCounts[t.id]??0,c=[{label:`Station`,value:`Campfire`},{label:`Speed`,value:U(t.cookTimeMs)},{label:`Skill`,value:`Cooking +${A(t.xpReward)} XP`},{label:`Level`,value:`Cooking Lv ${t.levelRequirement}`},{label:`Uses`,value:ms(t)},{label:`Makes`,value:ps(t)},{label:`Nutrition`,value:`${t.nutrition.hunger??0} hunger`},{label:`Cooked`,value:`${s}`},{label:`Eating`,value:`Stews need a Wooden Spoon`},{label:`Failure`,value:`${Math.round(t.failureChance*100)}% base chance later`}],l=r?`Ready`:i;return`
    <button
      class="smithing-recipe-card cooking-recipe-card ${r?``:`locked`}"
      type="button"
      data-command="queue-cooking"
      data-id="${t.id}"
      data-editor-id="cooking-recipe-${t.id}"
      data-editor-label="Cooking recipe: ${t.name}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${a}"
      data-tooltip-source
      aria-disabled="${a}"
      aria-label="${r?`Queue`:`Locked`} ${t.name}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true"><span class="action-card-glyph">ST</span></span>
      <span class="smithing-recipe-copy">
        <strong>${t.name}</strong>
        <small>${l}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${ps(t)}</b>
        <small>${M(o)}${s?`; cooked ${s}`:``}</small>
      </span>
      ${Q(t.name,c,l)}
    </button>
  `}function ju(e){return e.seenResources.includes(`linenCloth`)||e.inventory.linenCloth>0?`Cloth`:e.seenResources.includes(`linenThread`)||e.inventory.linenThread>0?`Thread`:e.seenResources.includes(`flaxFiber`)||e.inventory.flaxFiber>0?`Fiber`:e.seenResources.includes(`rettedFlax`)||e.inventory.rettedFlax>0?`Retted`:e.seenResources.includes(`flaxPlant`)||e.inventory.flaxPlant>0?`Fresh flax`:`Find flax`}function Mu(e){let t=e.buildings.primitiveSpinningWheel,n=e.buildings.primitiveLoom;return t&&n?`Wheel + Loom`:t?`Wheel built`:n?`Loom built`:`Hand work`}function Nu(e){let t=Math.max(0,Math.floor(e.inventory.copperNeedle??0)),n=Math.max(0,Math.floor(e.inventory.bronzeNeedle??0));return t||n?`Copper ${t} / Bronze ${n}`:`None`}function Pu(e,t){let n=R(e),r=Y(e);if(!n)return`
      <section class="current-action-panel panel idle" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="current-action-content idle">
          <div class="current-action-detail current-action-location">
            <span>Location</span>
            ${Ru(r.locationId)}
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
    `;let i=da(Za(e,t),0,1),a=U(n.endsAt-t),o=zu(e,n),s=Vu(e);return`
    <section class="current-action-panel panel" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="current-action-content">
        <div class="current-action-detail current-action-location">
          <span>Location</span>
          ${Ru(o)}
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
  `}function Fu(e,t,n,r){let i=V(e,t);if(!i)return``;let a=Math.min(i.actionIds.length-1,Math.max(0,r));return`
    <div class="action-loop-controls" aria-label="Action loop">
      ${i.actionIds.map((e,t)=>Iu(i.id,e,t,a,n,i.actionIds.length)).join(``)}
    </div>
  `}function Iu(e,t,n,r,i,a){let o=n===r,s=i?.loopId===e&&i.afterIndex===n;return`
    <div class="action-loop-row ${o?`selected`:``}">
      <button
        class="action-loop-step ${o?`selected`:``} ${s?`assigning`:``}"
        type="button"
        data-command="select-loop-step"
        data-loop-id="${e}"
        data-id="${n}"
        aria-pressed="${o}"
      >
        ${Lu(t)}
      </button>
      ${o?`<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-loop-id="${e}" data-id="${n}" title="Add action after ${Lu(t)}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-loop-id="${e}" data-id="${n}" title="Remove ${Lu(t)}" ${a<=1?`disabled`:``}>-</button>
            </span>`:``}
    </div>
  `}function Lu(e){return e===`fishRiver`?`Fish River`:w(e)?.label??`Action`}function Ru(e){let t=Bu(e);return`
    <div class="current-location-image" aria-label="${t.label} location">
      <img src="${t.iconUrl}" alt="" aria-hidden="true" />
    </div>
  `}function zu(e,t){let n=Dl(t,Y(e).locationId),r=El(t);return r===`camp`?n===`camp`?r:n:r}function Bu(e){return e===`camp`?Uc:ld(e)}function Vu(e){let t=R(e);if(!t)return`Working`;let n=ad(El(t)),r=ad(Dl(t,`camp`));return t.phase===`travelingTo`?`Traveling to ${n}`:t.phase===`travelingBack`?`Returning to camp from ${r}`:t.phase===`followUp`?X(t)===`butcherFish`?`Butchering Fish`:w(X(t))?.label??`Working`:w(t.actionId)?.label??`Working`}function Hu(e,t){let n=R(e);if(!n)return null;let r=X(n);return t.includes(r)?w(r)?.label??`Working`:null}function Y(e){return e.characters.find(t=>t.id===e.selectedCharacterId)??e.characters[0]}function Uu(e){return e.endsWith(`s`)?`${e}'`:`${e}'s`}function Wu(e,t){return Fo(e,t.id)?`fighting in The Ruins`:R(e,t.id)?Gu(e,t.id):`at ${ad(t.locationId)}`}function Gu(e,t=e.selectedCharacterId){let n=R(e,t);if(!n)return`keeping still`;let r=ad(El(n)),i=ad(Dl(n,`camp`));return n.phase===`travelingTo`?`traveling to ${r}`:n.phase===`travelingBack`?`returning to camp from ${i}`:n.phase===`followUp`?w(X(n))?.verb??`working`:w(n.actionId)?.verb??`working`}function X(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Ku(e){return Ac.find(t=>t.id===e)??Ac[0]}function qu(e){return(jc.find(t=>t.id===e)??jc[0]).filterIds.map(e=>Ku(e))}function Ju(e){return jc.some(t=>t.id===e)}function Yu(e){return e===`copper`||e===`bronze`}function Xu(e){return e===`brewing`||e===`transmutation`||e===`decomposition`}function Zu(e){return e===`primitive`}function Qu(e){return Ac.some(t=>t.id===e)}function $u(e,t){let n=Number(e);return Number.isFinite(n)?Math.max(0,Math.floor(n)):t}function ed(e,t,n){return V(t,e.dataset.loopId??n)?.id??null}function td(e){return V(e,Y(e).actionLoopId)?.id??null}function nd(e){return Hc.some(t=>t.id===e)}function rd(e){return e===`inventory`||e===`equipment`||e===`skills`||e===`log`}function id(e){return e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId===`camp`}function ad(e){return e===`camp`?`camp`:`the ${ld(e).label.toLowerCase()}`}function od(e){return e===`foraging`||e===`mining`||e===`fishing`||e===`hunting`||e===`woodcutting`}function sd(e){return qu(`processing`).some(t=>t.id===e)}function cd(e,t){return od(e.id)?hd(e,t):sd(e.id)?gd(e):``}function ld(e,t){let n=t?ud(t):Hc;return n.find(t=>t.id===e)??n[0]}function ud(e){switch(e){case`mining`:return Hc.filter(e=>e.id===`mine`);case`fishing`:return Hc.filter(e=>e.id===`river`);case`hunting`:return Hc.filter(e=>e.id===`meadow`);case`woodcutting`:return Hc.filter(e=>e.id===`forest`);case`foraging`:return Hc;default:return Hc.filter(e=>e.id===`meadow`||e.id===`river`)}}function dd(e,t){return e===`mining`?`mine`:e===`hunting`?`meadow`:e===`fishing`?`river`:e===`woodcutting`?`forest`:Hc.some(e=>e.id===t)?t:`meadow`}function fd(e){return ld(e,`foraging`).actionIds}function pd(e,n){let r=t(e);if(r)return r.locationId;let i=d(e);return i?i.locationId:md(e)?`mine`:e===`huntSmallAnimals`?`meadow`:e===`fishRiver`||e===`gatherWater`||e===`gatherRiverIngredients`?`river`:e===`gatherForestIngredients`?`forest`:e===`gatherMineIngredients`?`mine`:e===`gatherDesertIngredients`||e===`gatherSand`?`desert`:e===`chopTrees`?`forest`:n}function md(e){return e===`mineCoal`||e===`mineCopper`||e===`mineTin`}function hd(e,t){return`
    <section class="panel location-panel" data-editor-id="location-panel" data-editor-label="Location tabs panel" data-editor-files="src/ui/render.ts, src/style.css">
      ${_d(ud(e.id),dd(e.id,t),e.label)}
    </section>
  `}function gd(e){return`
    <section class="panel location-panel" data-editor-id="location-panel-processing-${e.id}" data-editor-label="${e.label} location panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="location-tabs location-count-1" role="tablist" aria-label="${e.label} locations">
        <button
          class="location-tab active"
          type="button"
          role="tab"
          aria-selected="true"
          aria-label="Camp location"
          data-editor-id="location-tab-camp-${e.id}"
          data-editor-label="Camp location tab"
          data-editor-files="src/ui/render.ts, src/style.css"
        >
          <img class="location-tab-image" src="${Uc.iconUrl}" alt="" aria-hidden="true" />
          <span class="location-tab-label">Camp</span>
        </button>
      </div>
    </section>
  `}function _d(e,t,n){return`
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
  `}function vd(e,t,n){let r=w(t);if(!r)return``;let i=Ua(e),a=i?w(i):void 0,o=F(e,t),s=G(e,t),c=n?V(e,n.loopId):null,l=R(e),u=!!(n&&c),d=!!(u&&c&&n&&ia(c,n.afterIndex,t)),f=l?X(l)===t:!1,p=u?!d:!s||f,m=s?``:I(e,t),h=i??t,g=St(h),_=[{label:`Speed`,value:U(r.durationMs)},{label:`Skill`,value:`${ft(g).label} +${A(Ct(h))} XP`},{label:`Uses`,value:i?M(W(i)):`Varies by target`},{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}],v=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&m?m:a?`Next: ${tu(a.label)}`:``,ee=u?`Set`:f?`Running`:s?`Start`:`Locked`,y=tu(r.label),b=a?tu(a.label):``,x=b||nu(t),S=i?M(W(i)):`Varies by target`;return`
    <button
      class="smithing-recipe-card craft-priority-button ${f?`active`:``} ${d?`assignable`:``} ${!o&&!d?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="action-card-${t}"
      data-editor-label="Action card: ${y}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${p}"
      data-tooltip-source
      aria-disabled="${p}"
      aria-label="${ee} ${y}${b?`, next ${b}`:``}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">
        ${Z(t)}
      </span>
      <span class="smithing-recipe-copy">
        <strong>${y}</strong>
        <small>${v||`Balance stock`}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${x}</b>
        <small>${S}</small>
      </span>
      ${Q(y,_,v)}
    </button>
  `}function yd(e,t,n){let r=w(t);if(!r)return``;let i=F(e,t),a=W(t),o=G(e,t),s=n?V(e,n.loopId):null,c=R(e),l=!!(n&&s),u=!!(l&&s&&n&&ia(s,n.afterIndex,t)),d=c?X(c)===t:!1,f=l?!u:!o||d,p=t===`butcherFish`||t===`butcherRabbit`||t===`butcherSquirrel`||t===`cookRabbitMeat`||t===`cookSquirrelMeat`?I(e,t):J(e,a),m=o?``:i?p:I(e,t),h=Ed(t,r.durationMs),g=l?u?`Set as action loop step`:`Not valid for this loop`:!o&&m?m:``,_=l?`Set`:d?`Running`:o?`Start`:`Locked`;return`
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
        ${Z(t)}
      </span>
      ${Q(r.label,h,g)}
    </button>
  `}function Z(e){let t=bd(e);return t.length?`
    <span class="action-card-icon ${t.length>1?`multi`:``}">
      ${t.map(e=>`<img src="${e}" alt="" aria-hidden="true" />`).join(``)}
    </span>
  `:`<span class="action-card-glyph">${Td(e)}</span>`}function Q(e,t,n){return`
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
  `}function bd(e){let t=Cd(e);if(t)return wd(t.id);let n=xd(e);if(n.length)return n;switch(e){case`gatherSticks`:return[ec];case`gatherStones`:return[ac];case`gatherFlaxPlants`:return[K];case`gatherFlaxFibers`:return[K];case`gatherMeadowIngredients`:return[q,zs];case`gatherForestIngredients`:return[Ls,zs];case`gatherRiverIngredients`:return[Zs,q];case`gatherMineIngredients`:return[Gs,q];case`gatherDesertIngredients`:return[Rs,zs];case`gatherSand`:return[Rs,ac];case`gatherWater`:return[Zs];case`mineCoal`:return[Ms];case`mineCopper`:return[Ns];case`mineTin`:return[lc];case`fishRiver`:return[Ks];case`craftLowestTool`:return[Ps];case`craftWoodenSpoon`:return[mc];case`craftWoodenBowl`:return[fc];case`craftLeatherBackpack`:return[Hs];case`chopTrees`:return[yc];case`huntSmallAnimals`:return[Ys,Qs];case`butcherFish`:return[Fs];case`butcherRabbit`:case`cookRabbitMeat`:return[Xs];case`butcherSquirrel`:case`cookSquirrelMeat`:return[$s];case`tanHide`:return[Vs];case`retFlax`:case`separateFlaxFiber`:case`handSpinLinenThread`:case`spinLinenThread`:case`weaveLinenCloth`:return[K];case`craftCopperNeedle`:return[Ns];case`craftBronzeNeedle`:return[Ns,lc];case`sewClothWrap`:case`sewLinenBandage`:case`sewSimplePouch`:case`sewLinenHood`:case`sewLinenShirt`:return[K];case`smeltCopperBar`:return[Ns,Ms];case`smeltBronzeBar`:return[Ns,lc];case`craftPot`:case`craftLadle`:case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return[Ns];case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return[Ns,lc];case`craftGlassVial`:return[sc,Rs];case`brewHealthPotion`:return[zs,q];case`brewManaPotion`:return[Zs,zs]}return[]}function xd(e){let n=t(e);if(n)return[Yc[n.resourceId]??Sd(Rl(n))];let r=d(e);return r?[Sd(r.category)]:[]}function Sd(e){switch(e){case`fungal`:return q;case`berry`:return zs;case`root`:return q;case`vegetable`:return K;case`seasoning`:return q;case`flower`:return K;default:return K}}function Cd(e){return T.find(t=>t.craftActionId===e)}function wd(e){let t=qc[e];if(t)return[t];let n=T.find(t=>t.id===e);return n?.weapon?.range===`ranged`||n?.id.startsWith(`wooden`)?[yc]:n?.weapon?[ac]:[]}function Td(e){let t=w(e);return t?t.label.split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase():`?`}function Ed(e,n){let r=St(e),i=[{label:`Speed`,value:U(n)},{label:`Skill`,value:`${ft(r).label} +${A(Ct(e))} XP`}],a=x(e);if(a)return[...i,{label:`Uses`,value:M(a.cost)},{label:`Makes`,value:a.toolId?a.label.replace(`Craft `,`1 `):M(a.output??{})},{label:`Unlock`,value:a.unlockHint}];let o=g(e);if(o){let e=o.actionId===`craftGlassVial`?`Stone Furnace`:`Alchemy bench`;return[...i,{label:`Panel`,value:`Brewing`},{label:`Station`,value:e},{label:`Uses`,value:M(o.cost)},{label:`Makes`,value:Zr(o.actionId)},{label:`Unlock`,value:o.unlockHint}]}let s=C(e);if(s){let e=s.requiredBuildings?.length?s.requiredBuildings.map(e=>Ld(e)).join(`, `):`Camp`;return[...i,{label:`Station`,value:e},{label:`Uses`,value:M(s.cost)},{label:`Makes`,value:ni(s)},{label:`Unlock`,value:s.unlockHint}]}let c=Cd(e);if(c)return[...i,{label:`Makes`,value:`1 ${c.label}`},{label:`Uses`,value:M(W(e))},...c.weapon?[{label:`Power`,value:el(c.weapon.damage)},{label:`Style`,value:`${c.weapon.hands}H ${Qc(c.weapon.range)}`}]:[]];let l=d(e);if(l)return[...i,{label:`Table`,value:ha(l.locationId,l.category)},{label:`Pickup`,value:`1-2 weighted ${l.category} rolls`},{label:`Place`,value:ld(l.locationId).label}];let u=t(e);if(u){let e=u.minAmount===u.maxAmount?`${u.minAmount}`:`${u.minAmount}-${u.maxAmount}`;return[...i,{label:`Finds`,value:u.resourceLabel},{label:`Pickup`,value:`${e} per gather`},{label:`Type`,value:zl(Rl(u))},{label:`Place`,value:ld(u.locationId).label}]}switch(e){case`gatherSticks`:return[...i,{label:`Pickup`,value:`1-3 Sticks`},{label:`Each`,value:`1 weight`}];case`gatherStones`:return[...i,{label:`Pickup`,value:`1-2 Stones`},{label:`Each`,value:`1 weight`}];case`gatherFlaxPlants`:return[...i,{label:`Pickup`,value:`2-4 Flax Plants`},{label:`Each`,value:`1 weight`}];case`gatherFlaxFibers`:return[...i,{label:`Pickup`,value:`1-3 Flax Fibers`},{label:`Each`,value:`1 weight`}];case`gatherMeadowIngredients`:return[...i,{label:`Table`,value:ha(`meadow`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Herbs, flowers, berries, roots, vegetables, seasonings`}];case`gatherForestIngredients`:return[...i,{label:`Table`,value:ha(`forest`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Berries, herbs, nuts, fungus, resin`}];case`gatherRiverIngredients`:return[...i,{label:`Table`,value:ha(`river`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Wetland herbs, roots, seeds, fungus`}];case`gatherMineIngredients`:return[...i,{label:`Table`,value:ha(`mine`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Cave herbs, fungus, roots, lichen`}];case`gatherDesertIngredients`:return[...i,{label:`Table`,value:ha(`desert`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Desert herbs, fruits, roots, flowers, fungus`}];case`gatherSand`:return[...i,{label:`Pickup`,value:`2-5 Sand`},{label:`Place`,value:`Desert`}];case`gatherWater`:return[...i,{label:`Pickup`,value:`1-3 Water`},{label:`Place`,value:`River`}];case`mineCoal`:return[...i,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Coal`},{label:`Each`,value:`1 weight`}];case`mineCopper`:return[...i,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Copper`},{label:`Each`,value:`1 weight`}];case`mineTin`:return[...i,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Tin`},{label:`Each`,value:`1 weight`}];case`fishRiver`:return[...i,{label:`Requires`,value:`Fishing Pole`},{label:`Pickup`,value:`1 fish`},{label:`Each`,value:`0.5-7.5 lb`},{label:`Fish`,value:`Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb`}];case`chopTrees`:return[...i,{label:`Pickup`,value:`2-4 Wood, 35% chance for 1 Stick`},{label:`Each`,value:`Wood 2 weight, Stick 1 weight`}];case`huntSmallAnimals`:return[...i,{label:`Pickup`,value:`1 Rabbit or Squirrel`},{label:`Each`,value:`Rabbit 2-5 lb, Squirrel 0.5-2 lb`}];case`craftLowestTool`:return[...i,{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}];case`craftBasket`:return[...i,{label:`Makes`,value:`1 Basket`},{label:`Uses`,value:M(W(e))}];case`craftWoodenSpoon`:return[...i,{label:`Makes`,value:`1 Wooden Spoon`},{label:`Uses`,value:M(W(e))}];case`craftFishingPole`:return[...i,{label:`Makes`,value:`1 Fishing Pole`},{label:`Uses`,value:M(W(e))}];case`craftLeatherBackpack`:return[...i,{label:`Makes`,value:`1 Leather Backpack`},{label:`Uses`,value:M(W(e))}];case`butcherFish`:return[...i,{label:`Uses`,value:`1 carried fish`},{label:`Makes`,value:`Matching filet at 50% fish weight`}];case`butcherRabbit`:return[...i,{label:`Uses`,value:`1 Rabbit`},{label:`Each`,value:`2-5 lb`},{label:`Makes`,value:`1-2 Rabbit Meat; knife can recover Hide or Bone`}];case`butcherSquirrel`:return[...i,{label:`Uses`,value:`1 Squirrel`},{label:`Each`,value:`0.5-2 lb`},{label:`Makes`,value:`1 Squirrel Meat; knife can recover Hide or Bone`}];case`cookRabbitMeat`:return[...i,{label:`Uses`,value:`1 Rabbit Meat`},{label:`Makes`,value:`1 Cooked Rabbit Meat`}];case`cookSquirrelMeat`:return[...i,{label:`Uses`,value:`1 Squirrel Meat`},{label:`Makes`,value:`1 Cooked Squirrel Meat`}];case`tanHide`:return[...i,{label:`Uses`,value:`1 Hide`},{label:`Makes`,value:`1 Leather`}]}return i}function Dd(e,t){let n=Fe.filter(n=>Ci(e,n.id,t));return`
    <section class="panel camp-panel" data-editor-id="camp-panel" data-editor-label="Camp structures and inventory panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="camp-panel-section">
        <div class="section-heading">
          <span>Structures</span>
        </div>
        <div class="craft-list">
          ${n.length?n.map(n=>jd(e,n,t)).join(``):`<div class="empty-line">Nothing sturdy enough to name yet.</div>`}
        </div>
      </div>
      ${Od(e)}
    </section>
  `}function Od(e){let t=E.filter(t=>e.inventory[t]>0||Cn(e,t)>0),n=Ie.reduce((e,n)=>(t.includes(n.id)&&(e[n.group]=e[n.group]??[],e[n.group].push(n.id)),e),{}),r=T.some(t=>e.tools[t.id].quantity>0);return`
    <div class="camp-panel-section camp-inventory-section" data-editor-id="camp-inventory-section" data-editor-label="Camp inventory section" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Camp Inventory</span>
      </div>
      ${t.length||r?`
            <div class="camp-inventory-content">
              ${Object.entries(n).map(([t,n])=>Qd(e,t,n)).join(``)}
              ${tf(e)}
              ${kd(e)}
            </div>
          `:`<div class="empty-line">No supplies stored yet.</div>`}
    </div>
  `}function kd(e){let t=E.filter(t=>e.inventory[t]>0&&Dc(t));return t.length?`
    <section class="resource-group food-use-panel" data-editor-id="food-use-panel" data-editor-label="Food use panel" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Food</h3>
      <div class="food-use-list">
        ${t.map(t=>Ad(e,t)).join(``)}
      </div>
    </section>
  `:``}function Ad(e,t){let n=Tc(e,t),r=wc(e,t),i=Cc(t);return`
    <div class="food-use-row">
      <span>
        <strong>${O(t)}</strong>
        <small>${r?`Restores ${i.hunger} hunger`:n}</small>
      </span>
      <button
        type="button"
        data-command="eat-food"
        data-id="${t}"
        data-disabled="${!r}"
        aria-disabled="${!r}"
      >
        Eat
      </button>
    </div>
  `}function jd(e,t,n){let r=Nd(e,t.id,n),i=wi(e,t.id,n),a=dn(e,t.recipe),o=id(e),s=Pd(t.id),c=!i||!s&&r||!a||!o,l=Fd(e,t.id,n),u=i?Id(e,t.id,n):`Locked`;return`
    <article class="craft-item building-card ${r||rn(e,t.id)>0?`owned`:``} ${i?``:`locked`} ${t.id===`campfire`&&r?`lit`:``}" data-editor-id="building-card-${t.id}" data-editor-label="Building card: ${t.label}" data-editor-files="src/ui/render.ts, src/style.css">
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
        ${Md(e,t,n)}
      </button>
    </article>
  `}function Md(e,t,n){let r=Nd(e,t.id,n),i=wi(e,t.id,n),a=dn(e,t.recipe),o=id(e),s=[{label:`Status`,value:Rd(e,t.id,n,r,a,o,i)},{label:`Unlock`,value:Ti(e,t.id)},{label:`Skill`,value:`Construction +${A(wt(t.id))} XP`},{label:`Cost`,value:M(t.recipe)},{label:`Use`,value:t.blurb}];return`
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
  `}function Nd(e,t,n){return Pd(t)?!1:t===`campfire`?P(e,n):e.buildings[t]}function Pd(e){return e===`hideTent`}function Fd(e,t,n){switch(t){case`campfire`:return P(e,n)?ks:As;case`tanningRack`:return dc;case`hideTent`:return uc;case`crudeStoneFurnace`:return sc;case`primitiveSpinningWheel`:case`primitiveLoom`:return As}}function Id(e,t,n){return Pd(t)?`Build`:t===`campfire`&&P(e,n)?`Lit`:Nd(e,t,n)?`Built`:`Build`}function Ld(e){return Fe.find(t=>t.id===e)?.label??e}function Rd(e,t,n,r,i,a,o){if(!o)return`Locked: ${Ti(e,t)}`;if(!a&&!r)return`Needs ${Y(e).name} at camp`;if(t===`hideTent`){let n=rn(e,t);return i?`Tents: ${n}; next gives +1 housing`:`Tents: ${n}; needs ${J(e,Fe.find(e=>e.id===t)?.recipe??{})}`}return t===`campfire`?r?`Lit, burns out in <b data-campfire-remaining>${U(Nr(e,n))}</b>`:i?`Ready to build, burns for 15m`:`Needs ${J(e,Fe.find(e=>e.id===t)?.recipe??{})}`:r?`Built`:i?`Ready to build`:`Needs ${J(e,Fe.find(e=>e.id===t)?.recipe??{})}`}function zd(e,t){let n=Y(e);return`
    <div class="work-area single-panel">
      <section class="panel character-detail-panel" aria-label="${n.name} details" data-active-tab="${t}" data-editor-id="character-detail-panel" data-editor-label="Character detail panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="character-detail-heading">
          <span class="portrait" aria-hidden="true">${kl(n.name)}</span>
          <span class="character-detail-title">
            <strong>${n.name}</strong>
            <small>${Wu(e,n)}</small>
          </span>
        </div>
        ${Bd(e)}
      </section>
    </div>
  `}function Bd(e){return`
    <div class="character-detail-content character-overview-content">
      <div class="character-overview-full">
        ${Zd(e)}
      </div>
      <div class="character-overview-pair">
        <section class="character-overview-section" aria-label="Equipment overview" data-editor-id="character-overview-equipment" data-editor-label="Character overview equipment" data-editor-files="src/ui/render.ts, src/style.css">
          ${rf(e,!1)}
        </section>
        ${Vd(e)}
      </div>
      <div class="character-overview-full">
        <section class="character-overview-section" aria-label="Skills overview" data-editor-id="character-overview-skills" data-editor-label="Character overview skills" data-editor-files="src/ui/render.ts, src/style.css">
          ${Ud(e)}
        </section>
      </div>
    </div>
  `}function Vd(e){let t=Y(e),n=R(e,t.id),r=t.actionLoopId?V(e,t.actionLoopId):null,i=n?w(X(n))?.label??`Working`:`Idle`,a=go(e,t.id),o=Fo(e,t.id)??t.combat;return`
    <section class="character-overview-section character-stats-overview" aria-label="Character stats" data-editor-id="character-overview-stats" data-editor-label="Character overview stats" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Stats</h3>
      <dl class="character-stat-list">
        ${[{label:`Status`,value:Wu(e,t)},{label:`Location`,value:ad(t.locationId)},{label:`Current`,value:i},{label:`Action Loop`,value:r?.name??`None`},{label:`Class`,value:a.classLabel},{label:`Weapon`,value:a.weaponLabel},{label:`Hunger`,value:`${Math.round(t.needs.hunger)} / ${Math.round(t.needs.maxHunger)}`},{label:`HP`,value:`${Math.round(o.hp)} / ${Math.round(o.maxHp)}`},{label:`Mana`,value:`${Math.round(o.mana)} / ${Math.round(o.maxMana)}`},...sf(e)].map(e=>`
            <div class="character-stat-row">
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
      </dl>
    </section>
  `}function Hd(e){return`
    <button
      class="camp-log-toggle ${e?`active`:``}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${e}"
    >
      Camp Log
    </button>
  `}function Ud(e){return`
    <h3>Skills</h3>
    <section class="side-panel-content skills-screen" aria-label="Skills" data-editor-id="skills-screen" data-editor-label="Skills screen" data-editor-files="src/ui/render.ts, src/style.css">
      ${Nc.filter(e=>e.skillIds.length>0).map(t=>Wd(e,t)).join(``)}
      ${Kd(e)}
    </section>
  `}function Wd(e,t){let n=t.skillIds.filter(e=>rt.some(t=>t.id===e)).map(t=>Gd(e,t)).join(``);return`
    <section class="skill-group" aria-label="${t.label} skills">
      <h4>${t.label}</h4>
      <div class="skill-group-list">
        ${n||`<div class="empty-line">No skills yet.</div>`}
      </div>
    </section>
  `}function Gd(e,t){let n=ft(t),r=e.skills[t],i=mt(r),a=i.atCap?i.canPrestige?`Prestige ready`:`Max level`:`${A(i.xpIntoLevel)} / ${A(i.xpForLevel)} XP`,o=r.prestige>0?`P${r.prestige}`:`P0`;return`
    <article class="skill-row ${i.canPrestige?`prestige-ready`:``}" data-editor-id="skill-row-${t}" data-editor-label="Skill row: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${n.label}</strong>
          <small>Total ${A(r.totalXp)} XP</small>
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
  `}function Kd(e){let t=Y(e),n=go(e,t.id);return`
    <section class="skill-group combat-class-group" aria-label="Combat class experience">
      <h4>Combat Classes</h4>
      <div class="skill-group-list">
        ${pe.filter(e=>{let r=t.classProgress[e.id];return e.id===n.classId||(r?.totalXp??0)>0}).map(t=>qd(e,t.id)).join(``)}
      </div>
    </section>
  `}function qd(e,t){let n=Y(e),r=pe.find(e=>e.id===t)??pe[0],i=n.classProgress[t],a=bo(i),o=a.atCap?`Max level`:`${xo(a.xpIntoLevel)} / ${xo(a.xpForLevel)} XP`;return`
    <article class="skill-row combat-class-row" data-editor-id="combat-class-row-${t}" data-editor-label="Combat class row: ${r.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${r.label}</strong>
          <small>${r.weaponLabel} - Total ${xo(i.totalXp)} XP</small>
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
  `}function Jd(e,t,n,r){let i=V(e,t),a=Xi(e).length;return`
    <div class="work-area single-panel">
      <section class="panel action-loop-page-panel action-loop-panel" aria-label="Action loops" data-editor-id="action-loops-panel" data-editor-label="Action loops panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="loop-panel-heading">
          <h3>Action Loops</h3>
          <button class="loop-create-button" type="button" data-command="create-loop">New</button>
        </div>
        <div class="loop-picker" aria-label="Saved action loops">
          ${e.actionLoops.map(t=>Yd(e,t.id,i?.id??null)).join(``)}
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
                ${Fu(e,i.id,r,n)}
                <div class="loop-assignment-list">
                  ${e.characters.map(t=>Xd(e,i.id,t)).join(``)}
                </div>
              </div>
            `:`<div class="empty-line">No loops built yet.</div>`}
      </section>
    </div>
  `}function Yd(e,t,n){let r=V(e,t);if(!r)return``;let i=e.characters.filter(e=>e.actionLoopId===r.id).length,a=n===r.id;return`
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
  `}function Xd(e,t,n){let r=n.actionLoopId===t,i=R(e,n.id),a=r?i?`Running`:`Assigned`:`Assign`;return`
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
        <small>${Wu(e,n)}</small>
      </span>
      <em>${a}</em>
    </button>
  `}function Zd(e){let t=Y(e),n=Uu(t.name),r=gn(e,t.id),i=E.filter(n=>r[n]>0||Cn(e,n,`character`,t.id)>0),a=yn(e,t.id),o=bn(e,t.id),s=i.filter(e=>!!Yc[e]),c=i.filter(e=>!Yc[e]),l=!R(e)&&id(e);return`
    <div class="resource-group character-inventory-group" data-editor-id="character-inventory-group" data-editor-label="Character inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="inventory-summary-heading">
        <h3>${n} Inventory</h3>
        <span>${Cf(a)}/${Cf(o)}</span>
      </div>
      ${i.length?`<button class="deposit-button" type="button" data-command="deposit-carried" ${l?``:`disabled`}>Store at Camp</button>`:``}
      ${i.length?`
            ${s.length?`<div class="inventory-resource-grid" aria-label="${n} carried inventory">
                    ${s.map(n=>ef(e,n,r,`character`,t.id)).join(``)}
                  </div>`:``}
            ${c.map(e=>$d(e,r)).join(``)}
          `:`<div class="empty-line">Pack empty.</div>`}
    </div>
  `}function Qd(e,t,n){let r=n.filter(e=>!!Yc[e]),i=n.filter(e=>!Yc[e]);return`
    <div class="resource-group" data-editor-id="resource-group-${t}" data-editor-label="${Tf(t)} resource group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${Tf(t)}</h3>
      ${r.length?`<div class="inventory-resource-grid" aria-label="${Tf(t)} inventory">
              ${r.map(t=>ef(e,t)).join(``)}
            </div>`:``}
      ${i.map(t=>`
        ${$d(t,e.inventory)}
      `).join(``)}
    </div>
  `}function $d(e,t){return`
    <div class="resource-row">
      <span>
        <strong>${O(e)}</strong>
        <small>${Ie.find(t=>t.id===e)?.blurb??``}</small>
      </span>
      <b>${Sf(e,t[e])}</b>
    </div>
  `}function ef(e,t,n=e.inventory,r=`camp`,i=e.selectedCharacterId){let a=Yc[t],o=Ie.find(e=>e.id===t);if(!a||!o)return``;let s=Cn(e,t,r,i),c=Ge(t)?`, quantity ${s}`:``;return`
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${o.label}, ${Sf(t,n[t])}${c}" data-editor-id="inventory-resource-${r}-${t}" data-editor-label="Inventory resource: ${o.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <img class="slot-item-icon" src="${a}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${qe(t,n[t])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${o.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${Tf(o.group)}</dd>
          </div>
          ${We(t)?`<div>
                  <dt>Total</dt>
                  <dd>${Sf(t,n[t])}</dd>
                </div>`:``}
          ${Ge(t)?`<div>
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
  `}function tf(e){let t=T.filter(t=>e.tools[t.id].quantity>0);return t.length?`
    <section class="resource-group tool-inventory" data-editor-id="tool-inventory-group" data-editor-label="Tool inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${t.map(t=>nf(e,t.id)).join(``)}
      </div>
    </section>
  `:``}function nf(e,t){let n=T.find(e=>e.id===t),r=e.tools[t];if(!n||r.quantity<=0)return``;let i=si(t),a=[{label:`Durability`,value:`${i}/${i}`},...Zc(t)];return`
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${n.label}, ${r.quantity} ${r.quantity===1?`spare`:`spares`}" data-editor-id="inventory-tool-${t}" data-editor-label="Inventory tool: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${uf(t)}
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
  `}function rf(e,t=!0){return`
    <section class="side-panel-content equipment-screen" data-editor-id="equipment-screen" data-editor-label="Equipment screen" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="equipment-section">
        <h3>Equipment</h3>
        <div class="equipment-grid" aria-label="Tool equipment slots">
          ${Gc.slice(0,Wc).map((t,n)=>t&&e.tools[t].owned?lf(e,t):df(n,t)).join(``)}
        </div>
      </div>
      ${Kc.map(e=>af(e)).join(``)}
      ${t?`<div class="equipment-section equipment-stats-section">
              <h3>Equipment Stats</h3>
              <dl class="equipment-stat-list">
                ${sf(e).map(e=>`
                    <div class="equipment-stat-row">
                      <dt>${e.label}</dt>
                      <dd>${e.value}</dd>
                    </div>
                  `).join(``)}
              </dl>
            </div>`:``}
    </section>
  `}function af(e){return`
    <div class="equipment-section equipment-placeholder-section" data-editor-id="equipment-placeholder-${Ol(e.label)}" data-editor-label="${e.label} equipment slots" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${e.label}</h3>
      <div class="equipment-placeholder-grid" aria-label="${e.label} slots">
        ${e.slots.map(t=>of(e.label,t)).join(``)}
      </div>
    </div>
  `}function of(e,t){return`
    <div class="equipment-slot empty equipment-placeholder-slot" aria-label="Empty ${t} slot" data-editor-id="equipment-placeholder-${Ol(e)}-${Ol(t)}" data-editor-label="Equipment placeholder: ${t}" data-editor-files="src/ui/render.ts, src/style.css">
      <strong>${t}</strong>
    </div>
  `}function sf(e){let t=Y(e),n=T.filter(t=>e.tools[t.id].owned).filter(t=>e.tools[t.id].durability>0),r=T.reduce((t,n)=>t+e.tools[n.id].quantity,0),i=yn(e,t.id),a=bn(e,t.id),o=Math.max(0,a-10),s=cf(e);return[{label:`Carry`,value:`${Cf(i)} / ${Cf(a)} lb`},{label:`Carry Bonus`,value:o>0?`+${Cf(o)} lb`:`None`},{label:`Usable Tools`,value:`${n.length} / ${Gc.filter(Boolean).length}`},{label:`Spares`,value:r>0?`${r}`:`None`},{label:`Field Effects`,value:s.length?s.join(`, `):`None`}]}function cf(e){let t=[];for(let[n,r]of[[`fishing`,`Fishing`],[`butchering`,`Butchering`],[`woodcutting`,`Woodcutting`],[`mining`,`Mining`],[`hunting`,`Hunting`]]){let i=ui(e,n);if(!i)continue;let a=T.find(e=>e.id===i),o=a&&a.tier!==`primitive`?`${$c(a.tier)} `:``;t.push(n===`hunting`&&a?`${r} (${a.label})`:`${o}${r}`)}return t}function lf(e,t){let n=T.find(e=>e.id===t),r=e.tools[t];if(!n||!r.owned)return``;let i=si(t),a=Math.max(0,r.durability),o=a>0,s=(a/i*100).toFixed(1),c=[{label:`Durability`,value:o?`${a}/${i}`:`Broken`},{label:`Inventory`,value:`${r.quantity} ${r.quantity===1?`spare`:`spares`}`},...Zc(t)],l=!!qc[t];return`
    <article class="equipment-slot ${o?``:`broken`} ${l?`icon-only`:``}" tabindex="0" data-tooltip-source aria-label="${n.label}" data-editor-id="equipment-slot-${t}" data-editor-label="Equipment slot: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${uf(t)}
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
  `}function uf(e){let t=qc[e];return t?`<img class="slot-item-icon" src="${t}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${ff(e)}</span>`}function df(e,t){let n=t?Jc[t]??`Empty`:`Empty`;return`
    <div class="equipment-slot empty" aria-label="Empty equipment slot ${e+1}">
      <span class="slot-glyph">${t?ff(t):`+`}</span>
      <strong>${n}</strong>
    </div>
  `}function ff(e){switch(e){case`basket`:return`BK`;case`leatherBackpack`:return`BP`;case`fishingPole`:return`FP`;case`stoneAxe`:return`HT`;case`stonePickAxe`:return`PX`;case`copperPickaxe`:return`CP`;case`copperHatchet`:return`CH`;case`copperKnife`:return`CK`;case`bronzePickaxe`:return`BP`;case`bronzeHatchet`:return`BH`;case`bronzeKnife`:return`BK`;case`stoneSpear`:return`SP`;case`stoneKnife`:return`SK`;case`woodenSword`:return`WS`;case`woodenTwoHandedSword`:return`2S`;case`woodenClub`:return`WC`;case`woodenTwoHandedClub`:return`2C`;case`shortBow`:return`SB`;case`woodenTotem`:return`WT`}return(T.find(t=>t.id===e)?.label??e).split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase()}function pf(e,t){if(!(e instanceof Element))return null;let n=e.closest(`[data-tooltip-source]`);return n&&t.contains(n)?n:null}function mf(e,t){let n=t.querySelector(`.slot-tooltip`),r=_f(e);!n||!r||(r.innerHTML=n.innerHTML,r.setAttribute(`aria-hidden`,`false`),r.classList.add(`visible`),gf(e,t))}function hf(e){let t=_f(e);t&&(t.classList.remove(`visible`),t.setAttribute(`aria-hidden`,`true`),t.innerHTML=``)}function gf(e,t){let n=_f(e);if(!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth,o=window.innerHeight,s=i.width,c=i.height,l=r.left-s-8;if(l<12){let e=r.right+8;l=e+s<=a-12?e:a-s-12}let u=Math.max(12,o-c-12),d=Math.min(Math.max(r.top,12),u);n.style.left=`${Math.max(12,Math.round(l))}px`,n.style.top=`${Math.round(d)}px`}function _f(e){return e.querySelector(`.tooltip-layer`)}function vf(e){return new Map([`.log-list`,`.side-panel-content`].map(t=>[t,e.querySelector(t)?.scrollTop??0]))}function yf(e,t){for(let[n,r]of t){let t=e.querySelector(n);t&&(t.scrollTop=r)}}function bf(e,t,n,r=``){let i=e.log.filter(e=>Zt(e)===t);return`
    <section class="log-panel ${r}" data-editor-id="${t}-log-panel" data-editor-label="${n}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>${n}</span>
        <span class="quiet">${i.length}</span>
      </div>
        <div class="log-list">
          ${i.map(e=>`
            <p class="log-entry ${e.tone}">
              <span>${e.text}</span>
              ${xf(e)}
            </p>
          `).join(``)}
        </div>
    </section>
  `}function xf(e){if(e.aggregateItems){let t=E.filter(t=>(e.aggregateItems?.[t]??0)>0).map(t=>{let n=e.aggregateItems?.[t]??0;return`<b>+${qe(t,n)} ${wf(t,n)}</b>`});return t.length?`<span class="log-gains">${t.join(``)}</span>`:``}return e.aggregateTotal?`<span class="log-gains"><b>+${e.aggregateTotal} ${e.aggregateUnit??``}</b></span>`:``}function Sf(e,t){return We(e)?`${qe(e,t)} lb`:qe(e,t)}function Cf(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}function wf(e,t){let n=O(e);if(We(e))return`lb ${n}`;if(t===1)return n;switch(e){case`wood`:case`rabbitMeat`:case`squirrelMeat`:case`cookedRabbitMeat`:case`cookedSquirrelMeat`:case`leather`:case`rettedFlax`:case`linenThread`:case`linenCloth`:return n;case`flaxPlant`:return`Flax Plants`;case`flaxFiber`:return`Flax Fibers`;case`coal`:case`copper`:case`tin`:case`copperBar`:case`bronzeBar`:case`pot`:case`ladle`:return n;case`copperNeedle`:return`Copper Needles`;case`bronzeNeedle`:return`Bronze Needles`;case`water`:return`Water`;case`dirtyBowl`:return`Dirty Bowls`;case`woodenSpoon`:return`Wooden Spoons`;case`clothWrap`:return`Cloth Wraps`;case`linenBandage`:return`Linen Bandages`;case`simplePouch`:return`Simple Pouches`;case`linenHood`:return`Linen Hoods`;case`linenShirt`:return`Linen Shirts`;default:return n.endsWith(`s`)?n:`${n}s`}}function Tf(e){switch(e){case`resources`:return`Resources`;case`animals`:return`Animals`;case`hunted`:return`Hunted`;case`fish`:return`Fish`;case`crafted`:return`Worked`;case`ingredients`:return`Ingredients`;case`food`:return`Food`;case`liquids`:return`Liquids`;case`utensils`:return`Utensils`;default:return e}}var Ef=document.querySelector(`#app`);if(!Ef)throw Error(`App root was not found.`);var $=Vn(),Df=1,Of=Math.max(Date.now(),$.lastSimulatedAt),kf=Date.now(),Af=tl(Ef,{requestRender:()=>jf(),persist:()=>kr($),reset:()=>{Rf(),$=Ar(),jf()},getNow:()=>Lf(),getTestRewardMultiplier:()=>Df,setTestRewardMultiplier:e=>{Df=Df===e?1:e,Qe(Df)}});function jf(){let e=Lf();Af($,e)}function Mf(){let e=Lf(),t=Pf();if(Xa($,e),us($),os($,e),No($,e),t!==Pf()){jf();return}Ff()}jf(),Nf(),window.setInterval(Mf,1e3),window.setInterval(()=>kr($),2e3),window.addEventListener(`beforeunload`,()=>kr($));function Nf(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./service-worker.js`).catch(()=>{})})}function Pf(){return JSON.stringify({inventory:$.inventory,characterInventory:$.characterInventory,resourceCounts:$.resourceCounts,characterResourceCounts:$.characterResourceCounts,characters:$.characters.map(e=>({id:e.id,condition:e.condition,locationId:e.locationId,needs:e.needs,actionLoopId:e.actionLoopId,combat:e.combat,classProgress:e.classProgress,inventory:e.inventory,resourceCounts:e.resourceCounts})),tools:$.tools,buildings:$.buildings,buildingCounts:$.buildingCounts,campfireExpiresAt:$.campfireExpiresAt,seenResources:$.seenResources,skills:$.skills,cooking:$.cooking,combat:$.combat,actionLoops:$.actionLoops,currentActions:Xi($).map(e=>({actionId:e.actionId,characterId:e.characterId,phase:e.phase,originLocationId:e.originLocationId,targetLocationId:e.targetLocationId,locationId:e.locationId,loopActionIds:e.loopActionIds,loopLocationIds:e.loopLocationIds,loopIndex:e.loopIndex,nextLoopIndex:e.nextLoopIndex,followUpActionId:e.followUpActionId,startedAt:e.startedAt,endsAt:e.endsAt})),logHead:$.log[0]?.id??``,logLength:$.log.length})}function Ff(){let e=Lf();If(e);let t=document.querySelector(`[data-action-progress]`),n=document.querySelector(`[data-action-remaining]`),r=document.querySelector(`[data-smithing-action-progress]`),i=document.querySelector(`[data-smithing-action-remaining]`),a=document.querySelector(`[data-alchemy-action-progress]`),o=document.querySelector(`[data-alchemy-action-remaining]`),s=document.querySelector(`[data-textile-action-progress]`),c=document.querySelector(`[data-textile-action-remaining]`),l=document.querySelector(`[data-cooking-action-progress]`),u=document.querySelector(`[data-cooking-action-remaining]`),d=R($);if(d){let l=Math.min(1,Math.max(0,Za($,e)));t&&(t.style.transform=`scaleX(${l.toFixed(4)})`),n&&(n.textContent=U(d.endsAt-e)),r&&(r.style.transform=`scaleX(${l.toFixed(4)})`),i&&(i.textContent=U(d.endsAt-e)),a&&(a.style.transform=`scaleX(${l.toFixed(4)})`),o&&(o.textContent=U(d.endsAt-e)),s&&(s.style.transform=`scaleX(${l.toFixed(4)})`),c&&(c.textContent=U(d.endsAt-e))}let f=ss($);if(f){let t=cs(f,e);l&&(l.style.transform=`scaleX(${t.toFixed(4)})`),u&&(u.textContent=U((f.endsAt??e)-e))}}function If(e){let t=document.querySelectorAll(`[data-campfire-remaining]`);if(!(!t.length||!$.campfireExpiresAt))for(let n of t)n.textContent=U($.campfireExpiresAt-e)}function Lf(){let e=Date.now(),t=Math.max(0,e-kf);return Of+=t,kf=e,Of}function Rf(){let e=Date.now();Of=e,kf=e}function zf(){Ff(),window.requestAnimationFrame(zf)}window.requestAnimationFrame(zf);