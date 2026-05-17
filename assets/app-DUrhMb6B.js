import"./modulepreload-polyfill-CSRv37U6.js";/* empty css              */import{_ as e,a as t,c as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,p as d,r as f,s as p,t as m,u as h,v as g,y as _}from"./vegetables-background-1-border-1-DHD2bqYi.js";var v=[`craftGlassVial`,`brewHealthPotion`,`brewManaPotion`],y=[{actionId:`craftGlassVial`,label:`Craft Glass Vial`,verb:`firing glass vials`,panel:`brewing`,kind:`vessel`,durationMs:18e3,cost:{sand:3,coal:1},output:{glassVial:2},blurb:`Fire clean desert sand into small potion vessels.`,unlockHint:`Build Stone Furnace`},{actionId:`brewHealthPotion`,label:`Brew Health Potion`,verb:`brewing a health potion`,panel:`brewing`,kind:`potion`,durationMs:26e3,cost:{glassVial:1,water:1,yarrow:1,plantainLeaf:1},output:{healthPotion:1},blurb:`Steep meadow medicines into a vial for future healing.`,unlockHint:`Craft Glass Vial and find Meadow Ingredients`},{actionId:`brewManaPotion`,label:`Brew Mana Potion`,verb:`brewing a mana potion`,panel:`brewing`,kind:`potion`,durationMs:26e3,cost:{glassVial:1,water:1,silverleafHerb:1},output:{manaPotion:1},blurb:`Steep river herbs into a vial for future mana recovery.`,unlockHint:`Craft Glass Vial and find River Ingredients`}],b=y.filter(e=>e.panel===`brewing`).map(e=>e.actionId);function x(e){return y.find(t=>t.actionId===e)}function S(e){return v.some(t=>t===e)}var ee=[`smeltCopperBar`,`smeltBronzeBar`,`craftPot`,`craftLadle`,`craftCopperPickaxe`,`craftCopperHatchet`,`craftCopperKnife`,`craftBronzePickaxe`,`craftBronzeHatchet`,`craftBronzeKnife`],C=[{actionId:`smeltCopperBar`,label:`Smelt Copper Bar`,verb:`smelting copper`,kind:`smelting`,material:`copper`,durationMs:22e3,cost:{copper:2,coal:1},output:{copperBar:1},blurb:`Refine soft copper ore into a first workable bar.`,unlockHint:`Build Stone Furnace`},{actionId:`smeltBronzeBar`,label:`Smelt Bronze Bar`,verb:`smelting bronze`,kind:`smelting`,material:`bronze`,durationMs:32e3,cost:{copper:2,tin:1,coal:2},output:{bronzeBar:1},blurb:`Blend copper and tin into a harder bronze bar.`,unlockHint:`Craft a Copper Tool`},{actionId:`craftPot`,label:`Craft Pot`,verb:`shaping a pot`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:2},output:{pot:1},blurb:`Hammer copper into a simple vessel.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftLadle`,label:`Craft Ladle`,verb:`shaping a ladle`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:14e3,cost:{copperBar:1,stick:1},output:{ladle:1},blurb:`Rivet a small copper cup to a wooden handle.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftCopperPickaxe`,label:`Craft Copper Pickaxe`,verb:`smithing a copper pickaxe`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:24e3,cost:{copperBar:3,stick:1,flaxFiber:1},toolId:`copperPickaxe`,blurb:`A softer metal pick with better balance than stone.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperHatchet`,label:`Craft Copper Hatchet`,verb:`smithing a copper hatchet`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:22e3,cost:{copperBar:2,stick:1,flaxFiber:1},toolId:`copperHatchet`,blurb:`A compact copper chopping head lashed to a handle.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperKnife`,label:`Craft Copper Knife`,verb:`smithing a copper knife`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:1,stick:1,flaxFiber:1},toolId:`copperKnife`,blurb:`A sharper, longer-lasting knife for camp work.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftBronzePickaxe`,label:`Craft Bronze Pickaxe`,verb:`smithing a bronze pickaxe`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:3e4,cost:{bronzeBar:3,stick:1,flaxFiber:1},toolId:`bronzePickaxe`,blurb:`A sturdy bronze mining tool with a harder edge.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeHatchet`,label:`Craft Bronze Hatchet`,verb:`smithing a bronze hatchet`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:28e3,cost:{bronzeBar:2,stick:1,flaxFiber:1},toolId:`bronzeHatchet`,blurb:`A bronze chopping tool that holds its bite.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeKnife`,label:`Craft Bronze Knife`,verb:`smithing a bronze knife`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:22e3,cost:{bronzeBar:1,stick:1,flaxFiber:1},toolId:`bronzeKnife`,blurb:`A reliable bronze edge for finer butchering.`,unlockHint:`Smelt Bronze Bar`}],w=C.filter(e=>e.kind===`smelting`).map(e=>e.actionId),T=C.filter(e=>e.kind===`smithing`).map(e=>e.actionId);function E(e){return C.find(t=>t.actionId===e)}function D(e){return ee.some(t=>t===e)}var te=[`copperNeedle`,`bronzeNeedle`],ne=[{actionId:`retFlax`,label:`Ret Flax`,verb:`retting flax`,kind:`retting`,durationMs:6e4,cost:{flaxPlant:3},output:{rettedFlax:3},blurb:`Soak and wait out whole flax stalks until the fibers loosen from the woody stem.`,unlockHint:`Gather Flax Plant`,requiredSeenResources:[`flaxPlant`]},{actionId:`separateFlaxFiber`,label:`Separate Flax Fiber`,verb:`breaking flax`,kind:`fiber`,durationMs:3e4,cost:{rettedFlax:2},output:{flaxFiber:3},blurb:`Break, scrape, and comb retted stalks into clean flax fiber.`,unlockHint:`Ret Flax`,requiredSeenResources:[`rettedFlax`]},{actionId:`handSpinLinenThread`,label:`Hand Spin Linen Thread`,verb:`hand-spinning thread`,kind:`spinning`,durationMs:26e3,cost:{flaxFiber:1},output:{linenThread:1},blurb:`Twist clean flax fiber into usable linen thread by hand.`,unlockHint:`Separate Flax Fiber`,requiredSeenResources:[`flaxFiber`]},{actionId:`spinLinenThread`,label:`Spin Linen Thread`,verb:`spinning thread`,kind:`spinning`,durationMs:18e3,cost:{flaxFiber:5},output:{linenThread:5},blurb:`Use the spinning wheel to turn a batch of flax fiber into thread more quickly.`,unlockHint:`Build Primitive Spinning Wheel`,requiredBuildings:[`primitiveSpinningWheel`],requiredSeenResources:[`flaxFiber`]},{actionId:`weaveLinenCloth`,label:`Weave Linen Cloth`,verb:`weaving linen cloth`,kind:`weaving`,durationMs:36e3,cost:{linenThread:4},output:{linenCloth:1},blurb:`Work linen thread across the loom into a sturdy cloth panel.`,unlockHint:`Build Primitive Loom`,requiredBuildings:[`primitiveLoom`],requiredSeenResources:[`linenThread`]},{actionId:`craftCopperNeedle`,label:`Craft Copper Needle`,verb:`crafting a copper needle`,kind:`tooling`,durationMs:12e3,cost:{copperBar:1},output:{copperNeedle:1},blurb:`Draw a soft copper bar into a basic needle for stitching linen.`,unlockHint:`Smelt Copper Bar`,requiredSeenResources:[`copperBar`]},{actionId:`craftBronzeNeedle`,label:`Craft Bronze Needle`,verb:`crafting a bronze needle`,kind:`tooling`,durationMs:14e3,cost:{bronzeBar:1},output:{bronzeNeedle:1},blurb:`Shape a harder bronze needle for steadier sewing work.`,unlockHint:`Smelt Bronze Bar`,requiredSeenResources:[`bronzeBar`]},{actionId:`sewClothWrap`,label:`Sew Cloth Wrap`,verb:`sewing a cloth wrap`,kind:`sewing`,durationMs:14e3,cost:{linenCloth:1,linenThread:1},output:{clothWrap:1},blurb:`Hem a small linen wrap for tying and protecting loose goods.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]},{actionId:`sewLinenBandage`,label:`Sew Linen Bandage`,verb:`sewing a linen bandage`,kind:`sewing`,durationMs:12e3,cost:{linenCloth:1},output:{linenBandage:1},blurb:`Cut and stitch clean linen into simple bandage strips.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]},{actionId:`sewSimplePouch`,label:`Sew Simple Pouch`,verb:`sewing a simple pouch`,kind:`sewing`,durationMs:22e3,cost:{linenCloth:2,linenThread:2},output:{simplePouch:1},blurb:`Sew a small pouch with tied corners and a linen drawstring.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]},{actionId:`sewLinenHood`,label:`Sew Linen Hood`,verb:`sewing a linen hood`,kind:`sewing`,durationMs:24e3,cost:{linenCloth:2,linenThread:2},output:{linenHood:1},blurb:`Cut and sew a simple linen hood from woven cloth panels.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]},{actionId:`sewLinenShirt`,label:`Sew Linen Shirt`,verb:`sewing a linen shirt`,kind:`sewing`,durationMs:3e4,cost:{linenCloth:4,linenThread:3},output:{linenShirt:1},blurb:`Stitch linen panels into a simple shirt for future clothing systems.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...te]}],re=ne.map(e=>e.actionId),ie=de(`retting`),ae=de(`fiber`),oe=de(`spinning`),se=de(`weaving`),ce=de(`tooling`),le=de(`sewing`);function O(e){return ne.find(t=>t.actionId===e)}function ue(e){return ne.some(t=>t.actionId===e)}function de(e){return ne.filter(t=>t.kind===e).map(e=>e.actionId)}var fe=[{id:`gatherSticks`,label:`Gather Sticks`,verb:`gathering sticks`,durationMs:7e3,blurb:`Slow, reliable foraging near camp.`},{id:`gatherStones`,label:`Gather Stones`,verb:`searching for stones`,durationMs:8500,blurb:`Cameron checks creek beds and exposed roots.`},{id:`gatherFlaxPlants`,label:`Gather Flax Plants`,verb:`cutting flax plants`,durationMs:11e3,blurb:`Cut whole flax stalks for later retting and fiber work.`},{id:`gatherFlaxFibers`,label:`Gather Flax Fibers`,verb:`pulling flax fibers`,durationMs:1e4,blurb:`Thin stalks stripped by hand for future craft.`},{id:`gatherMeadowIngredients`,label:`Gather Meadow Ingredients`,verb:`gathering meadow ingredients`,durationMs:12e3,blurb:`Search the meadow for herbs, flowers, berries, fruit, roots, vegetables, and staples.`},{id:`gatherForestIngredients`,label:`Gather Forest Forage`,verb:`gathering forest forage`,durationMs:14e3,blurb:`Search the forest floor for berries, herbs, nuts, fungus, and resin.`},{id:`gatherRiverIngredients`,label:`Gather River Forage`,verb:`gathering river forage`,durationMs:13500,blurb:`Search the riverbank for wetland herbs, roots, seeds, and fungus.`},{id:`gatherMineIngredients`,label:`Gather Mine Forage`,verb:`gathering mine forage`,durationMs:17e3,blurb:`Search the mine for cave herbs, fungus, roots, crystals, and lichens.`},{id:`gatherDesertIngredients`,label:`Gather Desert Forage`,verb:`gathering desert forage`,durationMs:18e3,blurb:`Search the desert scrub for hardy herbs, fruit, roots, flowers, and fungus.`},...p.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...c.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),{id:`gatherSand`,label:`Gather Sand`,verb:`gathering sand`,durationMs:1e4,blurb:`Collect clean desert sand for furnace glasswork.`},{id:`mineCoal`,label:`Mine Coal`,verb:`mining coal`,durationMs:3e4,blurb:`Chip dark fuel from the mine wall.`},{id:`mineCopper`,label:`Mine Copper`,verb:`mining copper`,durationMs:3e4,blurb:`Break reddish ore from stone seams.`},{id:`mineTin`,label:`Mine Tin`,verb:`mining tin`,durationMs:3e4,blurb:`Work pale ore from fractured rock.`},{id:`fishRiver`,label:`Fishing`,verb:`fishing`,durationMs:15e3,blurb:`Cast into river water or beach shallows for small fish.`},{id:`gatherWater`,label:`Gather Water`,verb:`gathering water`,durationMs:9e3,blurb:`Carry usable river water back for camp cooking.`},{id:`craftLowestTool`,label:`Primitive Tools`,verb:`balancing tool stock`,durationMs:15e3,blurb:`Craft whichever primitive tool has the lowest current stock.`},{id:`craftBasket`,label:`Craft Basket`,verb:`crafting a basket`,durationMs:15e3,blurb:`Weave flax fibers around a simple stick frame.`},{id:`craftWoodenSpoon`,label:`Craft Wooden Spoon`,verb:`carving a wooden spoon`,durationMs:1e4,blurb:`Carve a small wooden spoon for eating hot camp stew.`},{id:`craftFishingPole`,label:`Craft Fishing Pole`,verb:`crafting a fishing pole`,durationMs:15e3,blurb:`Bind flax line to a flexible stick.`},{id:`craftWoodenBowl`,label:`Craft Wooden Bowl`,verb:`carving a wooden bowl`,durationMs:12e3,blurb:`Carve a simple camp bowl from usable wood.`},{id:`craftStoneKnife`,label:`Craft Stone Knife`,verb:`crafting a stone knife`,durationMs:15e3,blurb:`Shape a compact edge for hide work and close combat.`},{id:`craftStoneAxe`,label:`Craft Stone Hatchet`,verb:`crafting a stone hatchet`,durationMs:15e3,blurb:`Bind a chopping head to a short haft.`},{id:`craftStonePickAxe`,label:`Craft Stone Pick Axe`,verb:`crafting a stone pick axe`,durationMs:15e3,blurb:`Lash a pointed stone head to a sturdy handle.`},{id:`craftStoneSpear`,label:`Craft Stone Spear`,verb:`crafting a stone spear`,durationMs:15e3,blurb:`Lash a stone point to a balanced shaft.`},{id:`craftWoodenClub`,label:`Craft Wooden Club`,verb:`crafting a wooden club`,durationMs:16e3,blurb:`Shape hardwood into a heavier primitive weapon.`},{id:`craftWoodenTwoHandedClub`,label:`Craft Wooden 2H Club`,verb:`crafting a wooden two-handed club`,durationMs:18e3,blurb:`Shape a larger club for slower, stronger blows.`},{id:`craftWoodenSword`,label:`Craft Wooden Sword`,verb:`crafting a wooden sword`,durationMs:17e3,blurb:`Harden and bind a wooden blade for controlled combat.`},{id:`craftWoodenTwoHandedSword`,label:`Craft Wooden 2H Sword`,verb:`crafting a wooden two-handed sword`,durationMs:2e4,blurb:`Shape a long wooden blade that favors power over speed.`},{id:`craftShortBow`,label:`Craft Short Bow`,verb:`crafting a short bow`,durationMs:2e4,blurb:`Bend wood and flax fiber into a simple ranged weapon.`},{id:`craftWoodenTotem`,label:`Craft Wooden Totem`,verb:`carving a wooden totem`,durationMs:19e3,blurb:`Carve a wooden focus for steadier primitive combat.`},{id:`chopTrees`,label:`Chop Trees`,verb:`chopping trees`,durationMs:18e3,blurb:`The first real push beyond loose branches.`},{id:`huntSmallAnimals`,label:`Hunt Small Animals`,verb:`hunting small animals`,durationMs:28e3,blurb:`Bring back whole rabbits or squirrels for later work.`},{id:`butcherFish`,label:`Butcher Fish`,verb:`butchering fish`,durationMs:15e3,blurb:`Clean one carried fish into matching filets at half weight.`},{id:`butcherRabbit`,label:`Butcher Rabbit`,verb:`butchering a rabbit`,durationMs:18e3,blurb:`Break down a rabbit into useful parts.`},{id:`butcherSquirrel`,label:`Butcher Squirrel`,verb:`butchering a squirrel`,durationMs:14e3,blurb:`Break down a squirrel into useful parts.`},{id:`cookRabbitMeat`,label:`Cook Rabbit Meat`,verb:`cooking rabbit meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`cookSquirrelMeat`,label:`Cook Squirrel Meat`,verb:`cooking squirrel meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`tanHide`,label:`Tan Hide`,verb:`working hide`,durationMs:36e3,blurb:`Scrape, stretch, wait, repeat.`},{id:`craftLeatherBackpack`,label:`Craft Leather Backpack`,verb:`crafting a leather backpack`,durationMs:15e3,blurb:`Knot a crude leather sling pouch with a drawstring.`},...C.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...y.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...ne.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb}))];function k(e){return fe.find(t=>t.id===e)}var pe=[{id:`fighter`,label:`Fighter`,weaponLabel:`Sword`,role:`A steady front-line duelist.`,range:`melee`,maxHp:34,maxMana:10},{id:`warrior`,label:`Warrior`,weaponLabel:`2H Sword`,role:`A slower heavy striker.`,range:`melee`,maxHp:38,maxMana:8},{id:`bruiser`,label:`Bruiser`,weaponLabel:`Club`,role:`A rugged close-range brawler.`,range:`melee`,maxHp:36,maxMana:8},{id:`crusher`,label:`Crusher`,weaponLabel:`2H Club`,role:`A heavy impact fighter.`,range:`melee`,maxHp:40,maxMana:6},{id:`archer`,label:`Archer`,weaponLabel:`Short Bow`,role:`A ranged skirmisher.`,range:`ranged`,maxHp:28,maxMana:12},{id:`shaman`,label:`Shaman`,weaponLabel:`Totem`,role:`A focus user prepared for future support magic.`,range:`focus`,maxHp:30,maxMana:30},{id:`mage`,label:`Mage`,weaponLabel:`Wand`,role:`A focused caster placeholder for future wand combat.`,range:`focus`,maxHp:24,maxMana:36},{id:`caster`,label:`Caster`,weaponLabel:`Staff`,role:`A long-form spellcaster placeholder for future staff combat.`,range:`focus`,maxHp:26,maxMana:40},{id:`rogue`,label:`Rogue`,weaponLabel:`Dagger`,role:`A fast close-range striker.`,range:`melee`,maxHp:30,maxMana:14}],me={woodenSword:`fighter`,woodenTwoHandedSword:`warrior`,woodenClub:`bruiser`,woodenTwoHandedClub:`crusher`,shortBow:`archer`,woodenTotem:`shaman`,stoneKnife:`rogue`,stoneSpear:`warrior`},he=[{id:`goblin`,label:`Goblin`,blurb:`A small melee raider that closes distance and swings at nearby party members.`,glyph:`G`,maxHp:16,maxMana:0,damage:2,attackRange:1,actEveryMs:2200}],ge=[{id:`ruins`,label:`The Ruins`,blurb:`Broken stone lanes where the first hostile creatures test the camp's fighters.`,gridWidth:7,gridHeight:5,enemyIds:[`goblin`]}],_e=pe.map(e=>e.id),ve=he.map(e=>e.id),ye=ge.map(e=>e.id);function be(e){return pe.find(t=>t.id===e)??pe[0]}function xe(e){return he.find(t=>t.id===e)??he[0]}function Se(e){return ge.find(t=>t.id===e)??ge[0]}var Ce=[{id:`campfire`,name:`Campfire`,label:`Campfire`,requiredBuildingId:`campfire`,tags:[`primitive`,`stew`,`open-fire`],fuelMode:`existing-campfire`,description:`A simple fire ring that can hold one primitive cooking job at a time.`}],we=[Me({id:`rabbitStew`,name:`Rabbit Stew`,outputId:`rabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`dandelionGreens`,role:`plant`}],hunger:24,xpReward:220,tags:[`meat`,`starter`]}),Me({id:`squirrelHerbStew`,name:`Squirrel Herb Stew`,outputId:`squirrelHerbStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`plantainLeaf`,role:`plant`},{id:`yarrow`,role:`seasoning`}],hunger:19,xpReward:240,tags:[`meat`,`herbal`]}),Me({id:`rootStew`,name:`Root Stew`,outputId:`rootStew`,ingredients:[{id:`sunrootTubers`,role:`plant`},{id:`wildCarrot`,role:`plant`},{id:`clover`,role:`plant`}],hunger:18,xpReward:210,tags:[`meadow`,`vegetarian`,`roots`]}),Me({id:`wildGarlicRabbitStew`,name:`Wild Garlic Rabbit Stew`,outputId:`wildGarlicRabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`wildGarlic`,role:`seasoning`},{id:`sorrel`,role:`plant`}],hunger:28,xpReward:275,levelRequirement:2,tags:[`meat`,`allium`,`sour`]}),Me({id:`meadowStew`,name:`Meadow Stew`,outputId:`meadowStew`,ingredients:[{id:`dandelionGreens`,role:`plant`},{id:`clover`,role:`plant`},{id:`plantainLeaf`,role:`plant`},{id:`wildOnion`,role:`seasoning`},{id:`sunrootTubers`,role:`plant`}],hunger:22,xpReward:260,levelRequirement:2,tags:[`meadow`,`vegetarian`,`five-plant`]}),Me({id:`mintedSquirrelStew`,name:`Minted Squirrel Stew`,outputId:`mintedSquirrelStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`mint`,role:`seasoning`},{id:`wildOnion`,role:`seasoning`}],hunger:22,xpReward:285,levelRequirement:3,tags:[`meat`,`aromatic`]}),...je(`rabbitMeat`,`Rabbit`,[[`sorrel`,`Sorrel`,25],[`yarrow`,`Yarrow`,24],[`hearthcap`,`Hearthcap`,27]]),...je(`squirrelMeat`,`Squirrel`,[[`wildGarlic`,`Wild Garlic`,22],[`fennel`,`Fennel`,21],[`hearthcap`,`Hearthcap`,23]])],Te=we.map(e=>e.id);we.filter(e=>e.tags.includes(`stew`)),we.flatMap(e=>e.outputs.map(e=>e.resourceId));var Ee=we.map(e=>({id:e.outputs[0].resourceId,label:e.name,group:`food`,blurb:Ne(e),stackSize:20,weight:.8,value:Math.max(6,Math.round(e.xpReward/35)),rarity:e.levelRequirement>=3?`uncommon`:`common`,nutrition:e.nutrition,spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`prepared`,`stew`,...e.tags],compatibility:[`eat`,`serve`,`tavern`]}}));function De(e){return Ce.find(t=>t.id===e)}function Oe(e){return we.find(t=>t.id===e)}function ke(e){return e.ingredients.reduce((e,t)=>(t.resourceId&&t.consumed!==!1&&(e[t.resourceId]=(e[t.resourceId]??0)+t.amount),e),{})}function Ae(e){return e.outputs.reduce((e,t)=>(e[t.resourceId]=(e[t.resourceId]??0)+t.amount,e),{})}function je(e,t,n){return n.map(([n,r,i],a)=>Me({id:`${n}${t}Stew`,name:`${r} ${t} Stew`,outputId:`${n}${t}Stew`,ingredients:[{id:e,role:`meat`},{id:n,role:`seasoning`},{id:a%2==0?`dandelionGreens`:`plantainLeaf`,role:`plant`}],hunger:i,xpReward:250+a*20,levelRequirement:2+a,tags:[`meat`,`generated`,`accent`]}))}function Me(e){let t=[{resourceId:e.outputId,amount:1},{resourceId:`dirtyBowl`,amount:1}];return{id:e.id,name:e.name,station:`campfire`,cookTimeMs:e.cookTimeMs??24e3,ingredients:[{resourceId:`water`,amount:1,role:`liquid`},{resourceId:`woodenBowl`,amount:1,role:`vessel`},...e.ingredients.map(e=>({resourceId:e.id,amount:e.amount??1,role:e.role}))],outputs:t,xpReward:e.xpReward,levelRequirement:e.levelRequirement??1,tags:[`stew`,`primitive`,...e.tags??[]],nutrition:{hunger:e.hunger},failureChance:e.failureChance??.03,modifiers:[`quality-ready`,`season-ready`,`station-ready`]}}function Ne(e){return e.tags.includes(`vegetarian`)?`A rough bowl of meadow plants simmered until soft enough to fill the belly.`:e.tags.includes(`aromatic`)||e.tags.includes(`accent`)?`A primitive stew carried by a strong meadow scent and small-game broth.`:`A simple campfire stew of water, gathered plants, and whatever meat the day allowed.`}var A=[{id:`stoneKnife`,label:`Stone Knife`,craftActionId:`craftStoneKnife`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A compact stone edge for butchering and close-quarters combat.`,maxDurability:18,roles:[`butchering`,`hunting`],roleTiers:{butchering:1},tier:`primitive`,weapon:{damage:2.2,speed:1.2,hands:1,range:`melee`},quickCraft:!0},{id:`stoneAxe`,label:`Stone Hatchet`,craftActionId:`craftStoneAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Heavy enough to bite into small trees.`,maxDurability:12,roles:[`woodcutting`],roleTiers:{woodcutting:1},tier:`primitive`,quickCraft:!0},{id:`stonePickAxe`,label:`Stone Pick Axe`,craftActionId:`craftStonePickAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A pointed stone head for breaking stubborn ground.`,maxDurability:12,roles:[`mining`],roleTiers:{mining:1},tier:`primitive`,quickCraft:!0},{id:`stoneSpear`,label:`Stone Spear`,craftActionId:`craftStoneSpear`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A reach weapon for rabbits and squirrels.`,maxDurability:10,roles:[`hunting`],tier:`primitive`,weapon:{damage:2.4,speed:.9,hands:2,range:`melee`},quickCraft:!0},{id:`woodenClub`,label:`Wooden Club`,craftActionId:`craftWoodenClub`,recipe:{wood:2},blurb:`A shaped hardwood weapon with more heft than loose branches.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3,speed:.9,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedClub`,label:`Wooden 2H Club`,craftActionId:`craftWoodenTwoHandedClub`,recipe:{wood:4},blurb:`A heavy two-handed cudgel for decisive primitive strikes.`,maxDurability:24,roles:[`hunting`],tier:`primitive`,weapon:{damage:4,speed:.75,hands:2,range:`melee`},quickCraft:!0},{id:`woodenSword`,label:`Wooden Sword`,craftActionId:`craftWoodenSword`,recipe:{wood:2,flaxFiber:1},blurb:`A hardened wooden blade for controlled early combat.`,maxDurability:20,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.4,speed:1,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedSword`,label:`Wooden 2H Sword`,craftActionId:`craftWoodenTwoHandedSword`,recipe:{wood:4,flaxFiber:2},blurb:`A long wooden blade that trades speed for stronger blows.`,maxDurability:26,roles:[`hunting`],tier:`primitive`,weapon:{damage:4.3,speed:.85,hands:2,range:`melee`},quickCraft:!0},{id:`shortBow`,label:`Short Bow`,craftActionId:`craftShortBow`,recipe:{wood:2,flaxFiber:3},blurb:`A simple bow that brings safer range to small-game hunts.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.8,speed:1.1,hands:2,range:`ranged`},quickCraft:!0},{id:`woodenTotem`,label:`Wooden Totem`,craftActionId:`craftWoodenTotem`,recipe:{wood:3,flaxFiber:2},blurb:`A carved focus that steadies the hand during primitive combat.`,maxDurability:22,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.2,speed:.8,hands:1,range:`focus`},quickCraft:!0},{id:`copperPickaxe`,label:`Copper Pickaxe`,recipe:{copperBar:3,stick:1,flaxFiber:1},blurb:`A softer metal pick with better balance than stone.`,maxDurability:24,roles:[`mining`],roleTiers:{mining:2},tier:`copper`},{id:`copperHatchet`,label:`Copper Hatchet`,recipe:{copperBar:2,stick:1,flaxFiber:1},blurb:`A compact copper chopping head lashed to a handle.`,maxDurability:22,roles:[`woodcutting`],roleTiers:{woodcutting:2},tier:`copper`},{id:`copperKnife`,label:`Copper Knife`,recipe:{copperBar:1,stick:1,flaxFiber:1},blurb:`A sharper, longer-lasting knife for camp work.`,maxDurability:30,roles:[`butchering`],roleTiers:{butchering:2},tier:`copper`},{id:`bronzePickaxe`,label:`Bronze Pickaxe`,recipe:{bronzeBar:3,stick:1,flaxFiber:1},blurb:`A sturdy bronze mining tool with a harder edge.`,maxDurability:42,roles:[`mining`],roleTiers:{mining:3},tier:`bronze`},{id:`bronzeHatchet`,label:`Bronze Hatchet`,recipe:{bronzeBar:2,stick:1,flaxFiber:1},blurb:`A bronze chopping tool that holds its bite.`,maxDurability:38,roles:[`woodcutting`],roleTiers:{woodcutting:3},tier:`bronze`},{id:`bronzeKnife`,label:`Bronze Knife`,recipe:{bronzeBar:1,stick:1,flaxFiber:1},blurb:`A reliable bronze edge for finer butchering.`,maxDurability:48,roles:[`butchering`],roleTiers:{butchering:3},tier:`bronze`},{id:`fishingPole`,label:`Fishing Pole`,craftActionId:`craftFishingPole`,recipe:{stick:1,flaxFiber:1},blurb:`A simple line and hook for working the river.`,maxDurability:16,roles:[`fishing`],roleTiers:{fishing:1},tier:`primitive`,quickCraft:!0},{id:`basket`,label:`Basket`,craftActionId:`craftBasket`,recipe:{stick:1,flaxFiber:3},blurb:`A one-hand woven carrier for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`,quickCraft:!0},{id:`leatherBackpack`,label:`Leather Backpack`,recipe:{leather:10},blurb:`A crude sling pouch for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`}],Pe=A.filter(e=>!!(e.craftActionId&&e.quickCraft)),Fe=[{id:`campfire`,label:`Campfire`,recipe:{stick:8,stone:5},blurb:`A fixed fire ring for cooking meat.`},{id:`tanningRack`,label:`Tanning Rack`,recipe:{stick:6,wood:4,stone:2},blurb:`A rough frame for turning hide into leather.`},{id:`hideTent`,label:`Hide Tent`,recipe:{wood:5,hide:10},blurb:`A hide shelter for holding warmth at camp.`},{id:`crudeStoneFurnace`,label:`Stone Furnace`,recipe:{stone:16,stick:6,wood:4},blurb:`A low stone furnace hot enough for first smelting.`},{id:`primitiveSpinningWheel`,label:`Primitive Spinning Wheel`,recipe:{wood:8,stick:6,linenThread:2},blurb:`A simple frame, spindle, and wheel for turning flax fiber into thread faster.`},{id:`primitiveLoom`,label:`Primitive Loom`,recipe:{wood:10,stick:8,linenThread:4},blurb:`A wooden frame for stretching warp threads and weaving linen cloth.`}],Ie=[{id:`stick`,label:`Stick`,group:`resources`,blurb:`Dry kindling and crude handles.`},{id:`stone`,label:`Stone`,group:`resources`,blurb:`Weight, edge, and spark.`},{id:`flaxPlant`,label:`Flax Plant`,group:`resources`,blurb:`Fresh flax stalks that need retting before useful fiber can be combed free.`},{id:`rettedFlax`,label:`Retted Flax`,group:`resources`,blurb:`Soaked and loosened flax stems ready for breaking and combing.`},{id:`flaxFiber`,label:`Flax Fiber`,group:`resources`,blurb:`Pale plant fiber for future cordage and cloth.`},{id:`linenThread`,label:`Linen Thread`,group:`crafted`,blurb:`Twisted flax fiber ready for weaving, stitching, and more precise craft.`},{id:`linenCloth`,label:`Linen Cloth`,group:`crafted`,blurb:`Woven linen panels ready for sewing into useful camp goods.`},{id:`wood`,label:`Wood`,group:`resources`,blurb:`Usable lengths from felled trees.`},{id:`woodenBowl`,label:`Wooden Bowl`,group:`utensils`,blurb:`A hand-carved wooden bowl for simple camp meals.`,stackSize:20,weight:.5,value:3,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`vessel`,`primitive`],compatibility:[`stew`]}},{id:`coal`,label:`Coal`,group:`resources`,blurb:`Dark fuel chipped from the mine.`},{id:`copper`,label:`Copper`,group:`resources`,blurb:`Soft reddish ore for future metalwork.`},{id:`tin`,label:`Tin`,group:`resources`,blurb:`Pale ore that will matter once bronze is possible.`},{id:`sand`,label:`Sand`,group:`resources`,blurb:`Clean desert sand ready for furnace glasswork.`,stackSize:99,weight:.2,value:1,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`copperBar`,label:`Copper Bar`,group:`crafted`,blurb:`A worked bar ready for first metal tools.`},{id:`bronzeBar`,label:`Bronze Bar`,group:`crafted`,blurb:`A harder alloy bar for sturdier tools.`},{id:`copperNeedle`,label:`Copper Needle`,group:`crafted`,blurb:`A simple metal needle for first linen sewing.`},{id:`bronzeNeedle`,label:`Bronze Needle`,group:`crafted`,blurb:`A stronger needle for steady linen sewing work.`},{id:`clothWrap`,label:`Cloth Wrap`,group:`crafted`,blurb:`A simple folded linen wrap for bundling small resources.`},{id:`linenBandage`,label:`Linen Bandage`,group:`crafted`,blurb:`Clean linen strips prepared for future medical use.`},{id:`simplePouch`,label:`Simple Pouch`,group:`crafted`,blurb:`A small sewn linen pouch for organizing camp goods.`},{id:`linenHood`,label:`Linen Hood`,group:`crafted`,blurb:`A simple sewn hood for future clothing systems.`},{id:`linenShirt`,label:`Linen Shirt`,group:`crafted`,blurb:`A plain linen shirt, ready for later equipment and quality systems.`},{id:`pot`,label:`Pot`,group:`crafted`,blurb:`A simple worked vessel for holding heat and liquid.`},{id:`ladle`,label:`Ladle`,group:`crafted`,blurb:`A small handled tool for moving hot metal safely.`},{id:`glassVial`,label:`Glass Vial`,group:`crafted`,blurb:`A small fired vessel for careful alchemy work.`,stackSize:50,weight:.1,value:4,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`healthPotion`,label:`Health Potion`,group:`liquids`,blurb:`A red meadow brew prepared for future healing systems.`,stackSize:20,weight:.2,value:12,rarity:`uncommon`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`manaPotion`,label:`Mana Potion`,group:`liquids`,blurb:`A blue river brew prepared for future mana recovery systems.`,stackSize:20,weight:.2,value:12,rarity:`uncommon`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`water`,label:`Water`,group:`liquids`,blurb:`Clean enough river water stored for camp cooking.`,stackSize:50,weight:1,value:1,rarity:`common`,nutrition:{hydration:8},spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`water`,`liquid`,`stew-base`],compatibility:[`stew`,`brew`]}},{id:`dirtyBowl`,label:`Dirty Bowl`,group:`utensils`,blurb:`A used bowl with stew clinging to the inside. Washing can come later.`,stackSize:20,weight:.5,value:1,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`dirty`,`reuse-hook`],compatibility:[`washing`]}},{id:`woodenSpoon`,label:`Wooden Spoon`,group:`utensils`,blurb:`A small carved wooden spoon for eating hot stew without burning fingers.`,stackSize:20,weight:.2,value:2,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`spoon`,`utensil`,`primitive`],compatibility:[`eat-stew`]}},{id:`minnow`,label:`Minnow`,group:`fish`,blurb:`Tiny river fish, quick to smoke or stew.`},{id:`stoneLoach`,label:`Stone Loach`,group:`fish`,blurb:`Bottom-feeding fish from cold stones.`},{id:`mudskipper`,label:`Mudskipper`,group:`fish`,blurb:`A stubborn shore fish pulled from muddy shallows.`},{id:`brookStickleback`,label:`Brook Stickleback`,group:`fish`,blurb:`Small, sharp-backed fish from fast water.`},{id:`pebblePerch`,label:`Pebble Perch`,group:`fish`,blurb:`A broad little perch hiding under river stones.`},{id:`minnowFilet`,label:`Minnow Filet`,group:`fish`,blurb:`Cleaned minnow meat, lighter after butchering.`},{id:`stoneLoachFilet`,label:`Stone Loach Filet`,group:`fish`,blurb:`Cleaned stone loach meat, lighter after butchering.`},{id:`mudskipperFilet`,label:`Mudskipper Filet`,group:`fish`,blurb:`Cleaned mudskipper meat, lighter after butchering.`},{id:`brookSticklebackFilet`,label:`Brook Stickleback Filet`,group:`fish`,blurb:`Cleaned brook stickleback meat, lighter after butchering.`},{id:`pebblePerchFilet`,label:`Pebble Perch Filet`,group:`fish`,blurb:`Cleaned pebble perch meat, lighter after butchering.`},{id:`rabbit`,label:`Rabbit`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`squirrel`,label:`Squirrel`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`rabbitMeat`,label:`Rabbit Meat`,group:`hunted`,blurb:`Fresh rabbit meat that wants fire soon.`,weight:.5,value:4,rarity:`common`,nutrition:{hunger:8},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`rabbit`],compatibility:[`stew`,`roast`]}},{id:`squirrelMeat`,label:`Squirrel Meat`,group:`hunted`,blurb:`Fresh squirrel meat that wants fire soon.`,weight:.4,value:3,rarity:`common`,nutrition:{hunger:6},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`squirrel`],compatibility:[`stew`,`roast`]}},{id:`cookedRabbitMeat`,label:`Cooked Rabbit Meat`,group:`crafted`,blurb:`A small cooked rabbit ration.`,weight:.5,value:5,rarity:`common`,nutrition:{hunger:12},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`rabbit`],compatibility:[`eat`,`stew-addition`]}},{id:`cookedSquirrelMeat`,label:`Cooked Squirrel Meat`,group:`crafted`,blurb:`A small cooked squirrel ration.`,weight:.4,value:4,rarity:`common`,nutrition:{hunger:9},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`squirrel`],compatibility:[`eat`,`stew-addition`]}},{id:`hide`,label:`Hide`,group:`resources`,blurb:`Rough animal hide, ready for scraping.`},{id:`bone`,label:`Bone`,group:`resources`,blurb:`Hard scraps for later craft.`},{id:`leather`,label:`Leather`,group:`crafted`,blurb:`Worked hide for future bags and armor.`},...r,...Ee],j=Ie.map(e=>e.id),Le=[`stick`,`stone`];Ie.filter(e=>!!e.cooking?.ingredientCategory).map(e=>e.id);var Re=Ie.filter(e=>(e.nutrition?.hunger??0)>0).map(e=>e.id),ze=[`minnow`,`stoneLoach`,`mudskipper`,`brookStickleback`,`pebblePerch`],Be=[`minnowFilet`,`stoneLoachFilet`,`mudskipperFilet`,`brookSticklebackFilet`,`pebblePerchFilet`],Ve={minnow:`minnowFilet`,stoneLoach:`stoneLoachFilet`,mudskipper:`mudskipperFilet`,brookStickleback:`brookSticklebackFilet`,pebblePerch:`pebblePerchFilet`},He=[...ze,`rabbit`,`squirrel`],Ue=[...ze,...Be,`rabbit`,`squirrel`];function We(e){return Ue.includes(e)}function Ge(e){return He.includes(e)}function Ke(e){return Re.includes(e)}function M(e,t){let n=Math.max(0,Number.isFinite(t)?t:0);return We(e)?Math.round(n*10)/10:Math.floor(n)}function qe(e,t){let n=M(e,t);return We(e)?Ye(n):`${n}`}function N(e){return Je(e)?.label??e}function Je(e){return Ie.find(t=>t.id===e)}function Ye(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}var Xe=1;function Ze(){return Xe}function Qe(e){return Xe=e===10||e===100?e:1,Xe}function $e(e){return e*Xe}function et(e){return Xe===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,(t??0)*Xe]))}function tt(e){return Xe===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Math.max(0,Math.floor((t??0)*Xe))]))}var nt=1e3,rt=[{id:`foraging`,label:`Foraging`,description:`Gathering loose food and camp materials.`},{id:`mining`,label:`Mining`,description:`Breaking stone for ore and fuel.`},{id:`fishing`,label:`Fishing`,description:`Catching river and beach fish.`},{id:`woodcutting`,label:`Woodcutting`,description:`Chopping trees into useful wood.`},{id:`hunting`,label:`Hunting`,description:`Tracking and taking small animals.`},{id:`crafting`,label:`Crafting`,description:`Making tools and useful camp goods.`},{id:`smithing`,label:`Smithing`,description:`Smelting ore and shaping early metalwork.`},{id:`alchemy`,label:`Alchemy`,description:`Firing vials and brewing experimental potions.`},{id:`textiles`,label:`Tailoring`,description:`Retting flax, spinning thread, weaving cloth, and sewing goods.`},{id:`butchering`,label:`Butchering`,description:`Breaking animals and fish into usable parts.`},{id:`cooking`,label:`Cooking`,description:`Preparing food over fire.`},{id:`leatherworking`,label:`Leatherworking`,description:`Turning hide into leather.`},{id:`construction`,label:`Construction`,description:`Building and improving camp structures.`},{id:`agility`,label:`Agility`,description:`Moving between camp and wilderness locations.`}],it=rt.map(e=>e.id),at=[{id:`resources`,label:`Resources`,description:`General camp forage such as sticks, stone, water, fiber, and sand.`},{id:`herb`,label:`Herb`,description:`Leafy, medicinal, and aromatic greens gathered from wild places.`},{id:`flower`,label:`Flower`,description:`Edible, useful, and alchemical blossoms from every biome.`},{id:`berries`,label:`Berries`,description:`Small sweet, tart, resinous, and strange wild berries.`},{id:`fruit`,label:`Fruit`,description:`Larger wild fruits, rose hips, and desert fruits.`},{id:`fungal`,label:`Fungal`,description:`Mushrooms, caps, spores, lichen, and deep growths.`},{id:`roots`,label:`Roots`,description:`Roots, bulbs, and buried edible plants.`},{id:`vegetables`,label:`Vegetables`,description:`Shoots, greens, and sturdy fresh vegetables.`},{id:`staples`,label:`Staples`,description:`Tubers, grains, nuts, pods, beans, and filling plants.`},{id:`seasonings`,label:`Seasonings`,description:`Aromatic, resinous, mineral, salty, and pungent accents.`}],ot=at.map(e=>e.id),st=Object.fromEntries(p.map(e=>[e.actionId,{skillId:`foraging`,xp:e.xp}])),ct=Object.fromEntries(c.map(e=>[e.actionId,{skillId:`foraging`,xp:e.xp}])),lt={gatherSticks:{skillId:`foraging`,xp:70},gatherStones:{skillId:`foraging`,xp:85},gatherFlaxPlants:{skillId:`foraging`,xp:110},gatherFlaxFibers:{skillId:`foraging`,xp:100},gatherMeadowIngredients:{skillId:`foraging`,xp:120},gatherForestIngredients:{skillId:`foraging`,xp:140},gatherRiverIngredients:{skillId:`foraging`,xp:135},gatherMineIngredients:{skillId:`foraging`,xp:170},gatherDesertIngredients:{skillId:`foraging`,xp:180},...st,...ct,gatherSand:{skillId:`foraging`,xp:100},gatherWater:{skillId:`foraging`,xp:90},mineCoal:{skillId:`mining`,xp:360},mineCopper:{skillId:`mining`,xp:360},mineTin:{skillId:`mining`,xp:360},fishRiver:{skillId:`fishing`,xp:180},craftLowestTool:{skillId:`crafting`,xp:150},craftBasket:{skillId:`crafting`,xp:150},craftWoodenSpoon:{skillId:`crafting`,xp:100},craftFishingPole:{skillId:`crafting`,xp:150},craftWoodenBowl:{skillId:`crafting`,xp:120},craftStoneKnife:{skillId:`crafting`,xp:150},craftStoneAxe:{skillId:`crafting`,xp:170},craftStonePickAxe:{skillId:`crafting`,xp:180},craftStoneSpear:{skillId:`crafting`,xp:180},craftWoodenSword:{skillId:`crafting`,xp:200},craftWoodenTwoHandedSword:{skillId:`crafting`,xp:230},craftWoodenClub:{skillId:`crafting`,xp:180},craftWoodenTwoHandedClub:{skillId:`crafting`,xp:210},craftShortBow:{skillId:`crafting`,xp:220},craftWoodenTotem:{skillId:`crafting`,xp:220},chopTrees:{skillId:`woodcutting`,xp:220},huntSmallAnimals:{skillId:`hunting`,xp:340},butcherFish:{skillId:`butchering`,xp:150},butcherRabbit:{skillId:`butchering`,xp:220},butcherSquirrel:{skillId:`butchering`,xp:170},cookRabbitMeat:{skillId:`cooking`,xp:160},cookSquirrelMeat:{skillId:`cooking`,xp:160},tanHide:{skillId:`leatherworking`,xp:430},craftLeatherBackpack:{skillId:`leatherworking`,xp:900},retFlax:{skillId:`textiles`,xp:420},separateFlaxFiber:{skillId:`textiles`,xp:260},handSpinLinenThread:{skillId:`textiles`,xp:190},spinLinenThread:{skillId:`textiles`,xp:420},weaveLinenCloth:{skillId:`textiles`,xp:520},craftCopperNeedle:{skillId:`smithing`,xp:120},craftBronzeNeedle:{skillId:`smithing`,xp:150},sewClothWrap:{skillId:`textiles`,xp:180},sewLinenBandage:{skillId:`textiles`,xp:150},sewSimplePouch:{skillId:`textiles`,xp:260},sewLinenHood:{skillId:`textiles`,xp:300},sewLinenShirt:{skillId:`textiles`,xp:420},smeltCopperBar:{skillId:`smithing`,xp:260},smeltBronzeBar:{skillId:`smithing`,xp:420},craftPot:{skillId:`smithing`,xp:220},craftLadle:{skillId:`smithing`,xp:180},craftCopperPickaxe:{skillId:`smithing`,xp:320},craftCopperHatchet:{skillId:`smithing`,xp:280},craftCopperKnife:{skillId:`smithing`,xp:220},craftBronzePickaxe:{skillId:`smithing`,xp:500},craftBronzeHatchet:{skillId:`smithing`,xp:440},craftBronzeKnife:{skillId:`smithing`,xp:340},craftGlassVial:{skillId:`alchemy`,xp:180},brewHealthPotion:{skillId:`alchemy`,xp:320},brewManaPotion:{skillId:`alchemy`,xp:320}},ut={campfire:80,tanningRack:320,hideTent:450,crudeStoneFurnace:520,primitiveSpinningWheel:360,primitiveLoom:480};function dt(){return Object.fromEntries(it.map(e=>[e,Pt()]))}function ft(e){let t=dt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of it)t[e]=Ft(n[e]);return t}function pt(e){return it.some(t=>t===e)}function mt(e){return rt.find(t=>t.id===e)??rt[0]}function ht(e){return ot.some(t=>t===e)}function gt(e){if(typeof e!=`string`)return null;switch(e.trim().toLowerCase().replace(/[\s_-]+/gu,``)){case`resource`:case`resources`:return`resources`;case`herb`:case`herbs`:return`herb`;case`flower`:case`flowers`:return`flower`;case`berry`:case`berries`:return`berries`;case`fruit`:case`fruits`:return`fruit`;case`fungal`:case`fungus`:case`mushroom`:case`mushrooms`:return`fungal`;case`root`:case`roots`:return`roots`;case`vegetable`:case`vegetables`:return`vegetables`;case`staple`:case`staples`:return`staples`;case`seasoning`:case`seasonings`:return`seasonings`;default:return null}}function _t(e){return at.find(t=>t.id===e)??at[0]}function vt(e,t){let n=e.skills.foraging,r=n.selectedForagingTreeCategory;return r?r===t?null:`${_t(r).label} is chosen until Foraging prestige.`:n.level<10?`Requires Foraging Lv 10.`:null}function yt(e,t,n=Date.now()){return zt(e),vt(e,t)?!1:(e.skills.foraging.selectedForagingTreeCategory=t,e.updatedAt=n,e.lastSimulatedAt=n,!0)}function bt(e){let t=Bt(e,1,nt);return 50*(t-1)*t*(2*t-1)/6}function xt(e){return Rt(e.prestige)}function St(e){let t=xt(e),n=e.level>=t,r=bt(e.level),i=e.level>=1e3?r:bt(e.level+1),a=Math.max(0,i-r),o=n?a:Math.max(0,Math.min(e.xp-r,a));return{cap:t,currentLevelXp:r,nextLevelXp:i,xpIntoLevel:o,xpForLevel:a,ratio:a<=0?1:o/a,atCap:n,canPrestige:Ct(e)}}function Ct(e){let t=xt(e);return t<1e3&&e.level>=t}function wt(e,t,n=Date.now()){zt(e);let r=e.skills[t];return Ct(r)?(r.prestige=Bt(r.prestige+1,0,9),r.level=1,r.xp=0,t===`foraging`&&(r.selectedForagingTreeCategory=null),e.updatedAt=n,e.lastSimulatedAt=n,!0):!1}function Tt(e,t,n=Date.now()){let r=lt[t];kt(e,r.skillId,r.xp,n)}function Et(e,t,n=Date.now()){kt(e,`construction`,ut[t],n)}function Dt(e,t,n=Date.now()){t<=0||kt(e,`agility`,Math.max(1,Math.round(t/1e3*2)),n)}function Ot(e,t,n=Date.now()){kt(e,`cooking`,t,n)}function kt(e,t,n,r=Date.now()){let i=Math.max(0,Math.floor($e(n)));if(i<=0)return;zt(e);let a=e.skills[t],o=xt(a);a.totalXp+=i,a.xp=Math.min(bt(o),a.xp+i),a.level=Lt(a.xp,o),e.updatedAt=r,e.lastSimulatedAt=r}function At(e){return lt[e].skillId}function jt(e){return $e(lt[e].xp)}function Mt(e){return $e(ut[e])}function Nt(e){let t=Math.max(0,e);return t>=1e9?`${Ht(t/1e9)}B`:t>=1e6?`${Ht(t/1e6)}M`:t>=1e3?`${Ht(t/1e3)}K`:Math.round(t).toLocaleString(`en-US`)}function Pt(){return{level:1,xp:0,totalXp:0,prestige:0,bonuses:[],selectedForagingTreeCategory:null}}function Ft(e){if(!e||typeof e!=`object`)return Pt();let t=Bt(e.prestige,0,9),n=Rt(t),r=Vt(e.xp,0,bt(n)),i=Math.max(r,Math.max(0,Math.floor(Number(e.totalXp??0))));return{level:Lt(r,n),xp:r,totalXp:i,prestige:t,bonuses:It(e.bonuses),selectedForagingTreeCategory:gt(e.selectedForagingTreeCategory)}}function It(e){return Array.isArray(e)?e.filter(e=>{if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.id==`string`&&typeof t.label==`string`}):[]}function Lt(e,t){let n=1;for(;n<t&&e>=bt(n+1);)n+=1;return n}function Rt(e){let t=Bt(e,0,9);return Math.min(nt,(t+1)*100)}function zt(e){e.skills=ft(e.skills)}function Bt(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Vt(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Ht(e){return e.toFixed(2).replace(/\.?0+$/,``)}function Ut(){return Object.fromEntries(j.map(e=>[e,0]))}function Wt(){return Object.fromEntries(j.map(e=>[e,0]))}function Gt(){return Object.fromEntries(A.map(e=>[e.id,{owned:!1,durability:0,quantity:0}]))}function Kt(){return{campfire:0,tanningRack:0,hideTent:0,crudeStoneFurnace:0,primitiveSpinningWheel:0,primitiveLoom:0}}function qt(e=Date.now()){return{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:[`gatherSticks`],locationIds:[`meadow`],advanceRules:[{mode:`smart`}],createdAt:e,updatedAt:e}}function Jt(){return{hp:34,maxHp:34,mana:10,maxMana:10}}function Yt(){return{hunger:100,maxHunger:100}}function Xt(){return{level:1,xp:0,totalXp:0}}function Zt(){return Object.fromEntries(_e.map(e=>[e,Xt()]))}function Qt(){return{selectedLocationId:`ruins`,encounter:null,log:[]}}function $t(){return{queue:[],knownRecipeIds:[],completedRecipeCounts:{}}}function en(e=Date.now()){return{version:11,createdAt:e,updatedAt:e,lastSimulatedAt:e,selectedCharacterId:`cameron`,characters:[{id:`cameron`,name:`Cameron`,epithet:`Alone at the treeline`,condition:`resting`,locationId:`camp`,combat:Jt(),needs:Yt(),classProgress:Zt(),inventory:Ut(),resourceCounts:Wt(),actionLoopId:`loop-forage-sticks`}],inventory:Ut(),characterInventory:Ut(),resourceCounts:Wt(),characterResourceCounts:Wt(),tools:Gt(),buildings:{campfire:!1,tanningRack:!1,hideTent:!1,crudeStoneFurnace:!1,primitiveSpinningWheel:!1,primitiveLoom:!1},buildingCounts:Kt(),campfireExpiresAt:null,seenResources:[...Le],skills:dt(),cooking:$t(),combat:Qt(),actionLoops:[qt(e)],currentActions:[],currentAction:null,log:[{id:`${e}-start`,time:e,text:`Cameron wakes beneath cold branches with empty hands.`,tone:`muted`,scope:`camp`}]}}var tn=48,nn=`camp`,rn=[`action:`,`craft:`,`deposit:`],an=[`Cameron stops `,`Cameron lacks `,`Cameron crafted `,`Cameron butchered `,`Cameron returned `,`The saved trail grows quiet`];function P(e,t,n=`muted`,r=Date.now(),i=nn){e.log.unshift({id:`${r}-${Math.random().toString(36).slice(2)}`,time:r,text:t,tone:n,scope:i}),e.log=e.log.slice(0,tn)}function on(e,t){let n=t.now??Date.now(),r=t.scope??nn,i=e.log.findIndex(e=>e.aggregateKey===t.aggregateKey&&sn(e)===r),a=cn(t.resources);if(i>=0){let[o]=e.log.splice(i,1);o.time=n,o.text=t.text,o.tone=t.tone??o.tone,o.scope=r,Object.keys(a).length>0?(o.aggregateItems=ln(un(o),a),delete o.aggregateTotal,delete o.aggregateUnit):(o.aggregateTotal=(o.aggregateTotal??0)+(t.amount??0),o.aggregateUnit=t.unit),e.log.unshift(o);return}e.log.unshift({id:`${n}-${Math.random().toString(36).slice(2)}`,time:n,text:t.text,tone:t.tone??`muted`,scope:r,aggregateKey:t.aggregateKey,...Object.keys(a).length>0?{aggregateItems:a}:{aggregateTotal:t.amount??0,aggregateUnit:t.unit}}),e.log=e.log.slice(0,tn)}function sn(e){return e.scope?e.scope:e.aggregateKey&&rn.some(t=>e.aggregateKey?.startsWith(t))||an.some(t=>e.text.startsWith(t))||/\bbreaks(?:\.|;)/.test(e.text)?`character`:nn}function cn(e){let t={};for(let[n,r]of Object.entries(e??{})){let e=n,i=M(e,r??0);i>0&&(t[e]=i)}return t}function ln(e,t){let n={...e??{}};for(let[e,r]of Object.entries(t)){let t=e;n[t]=M(t,(n[t]??0)+(r??0))}return n}function un(e){if(e.aggregateItems)return e.aggregateItems;let t=dn(e.aggregateUnit);if(!(!t||!e.aggregateTotal))return{[t]:e.aggregateTotal}}function dn(e){switch(e?.toLowerCase()){case`sticks`:return`stick`;case`stones`:return`stone`;default:return}}var fn=`rowan`;function pn(e,t){return Math.max(0,Math.floor(e.buildingCounts?.[t]??+!!e.buildings[t]))}function mn(e,t){let n=pn(e,t)+1;return e.buildingCounts[t]=n,n}function hn(e,t,n){e.buildingCounts[t]=Math.max(0,Math.floor(n))}function gn(e){return e.characters.length}function _n(e){return pn(e,`hideTent`)}function vn(e,t=Date.now()){return _n(e)<2||e.characters.some(e=>e.id===fn)?!1:(e.characters.push({id:fn,name:`Rowan`,epithet:`Drawn to the second shelter`,condition:`resting`,locationId:`camp`,combat:Jt(),needs:Yt(),classProgress:Zt(),inventory:Ut(),resourceCounts:Wt()}),P(e,`Rowan joins the camp after the second hide tent goes up.`,`craft`,t),!0)}function yn(e){for(let t of j)e.inventory[t]=M(t,e.inventory[t]??0),e.characterInventory[t]=M(t,e.characterInventory[t]??0),e.resourceCounts[t]=Hn(t,e.inventory[t],e.resourceCounts[t]??0),e.characterResourceCounts[t]=Hn(t,e.characterInventory[t],e.characterResourceCounts[t]??0);for(let t of e.characters)t.inventory=Bn(t.inventory),t.resourceCounts=Vn(t.inventory,t.resourceCounts);Dn(e)}function bn(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=(n??0))}function xn(e,t){for(let[n,r]of Object.entries(t)){let t=n;e.inventory[t]=M(t,e.inventory[t]-(r??0))}}function Sn(e,t,n={}){for(let[r,i]of Object.entries(t)){let t=r,a=i??0;a<=0||(e.inventory[t]=M(t,e.inventory[t]+a),Un(e.resourceCounts,t,n[t]??0),e.seenResources.includes(t)||e.seenResources.push(t))}}function Cn(e){let t=Je(e)?.weight;if(typeof t==`number`)return t;switch(e){case`wood`:return 2;case`stick`:case`stone`:case`flaxPlant`:case`rettedFlax`:case`flaxFiber`:return 1;case`linenThread`:case`linenCloth`:case`copperNeedle`:case`bronzeNeedle`:return .1;default:return 1}}function wn(e){let t=j.reduce((t,n)=>t+(e[n]??0)*Cn(n),0);return Math.round(t*10)/10}function Tn(e,t=e.selectedCharacterId){let n=Ln(e,t);return n.inventory||=Rn(),n.inventory}function En(e,t=e.selectedCharacterId){let n=Ln(e,t);return n.resourceCounts||=zn(),n.resourceCounts}function Dn(e){let t=Tn(e),n=En(e);for(let r of j)e.characterInventory[r]=t[r]??0,e.characterResourceCounts[r]=n[r]??0}function On(e,t=e.selectedCharacterId){return wn(Tn(e,t))}function kn(e,t=e.selectedCharacterId){let n=e.tools.basket,r=e.tools.leatherBackpack;return 10+(n?.owned&&n.durability>0?5:0)+(r?.owned&&r.durability>0?15:0)}function An(e,t,n={},r=e.selectedCharacterId){let i={},a=Tn(e,r),o=En(e,r),s=On(e,r),c=kn(e,r);for(let r of j){let l=M(r,t[r]??0);if(l<=0)continue;let u=Cn(r),d=c-s,f=u>0?M(r,We(r)?l*u<=d?l:0:Math.min(l,Math.floor(d/u))):l;f<=0||(i[r]=f,a[r]=M(r,a[r]+f),Un(o,r,Gn(r,l,f,n[r])),s=Math.round((s+f*u)*10)/10,e.seenResources.includes(r)||e.seenResources.push(r))}return Dn(e),i}function jn(e,t=e.selectedCharacterId){let n={},r=Tn(e,t),i=En(e,t);for(let t of j){let a=r[t];a<=0||(n[t]=a,e.inventory[t]=M(t,e.inventory[t]+a),Wn(i,e.resourceCounts,t),r[t]=0,e.seenResources.includes(t)||e.seenResources.push(t))}return Dn(e),n}function Mn(e,t,n=`camp`,r=e.selectedCharacterId){let i=In(e,n,r);return Ge(t)?Math.max(0,Math.floor(i[t]??0)):Math.floor(Fn(e,n,r)[t]??0)}function Nn(e,t,n=`camp`,r=e.selectedCharacterId){return Mn(e,t,n,r)>0}function Pn(e,t,n=`camp`,r=e.selectedCharacterId){if(!Ge(t))return 0;let i=Fn(e,n,r),a=In(e,n,r),o=Mn(e,t,n,r),s=M(t,i[t]??0);if(o<=0||s<=0)return i[t]=0,a[t]=0,Dn(e),0;let c=M(t,o<=1?s:s/o);return a[t]=Math.max(0,o-1),i[t]=a[t]<=0?0:M(t,s-c),Dn(e),c}function F(e){return Object.entries(e).map(([e,t])=>{let n=e;return`${qe(n,t??0)}${We(n)?` lb`:``} ${N(n)}`}).join(`, `)}function Fn(e,t,n){return t===`character`?Tn(e,n):e.inventory}function In(e,t,n){return t===`character`?En(e,n):e.resourceCounts}function Ln(e,t){return e.characters.find(e=>e.id===t)??e.characters[0]}function Rn(){return Object.fromEntries(j.map(e=>[e,0]))}function zn(){return Object.fromEntries(j.map(e=>[e,0]))}function Bn(e){let t=Rn();for(let n of j)t[n]=M(n,e?.[n]??0);return t}function Vn(e,t){let n=zn();for(let r of j)n[r]=Hn(r,e[r],t?.[r]??0);return n}function Hn(e,t,n){return!Ge(e)||t<=0?0:Math.max(1,Math.floor(Math.max(0,Number.isFinite(n)?n:0)))}function Un(e,t,n){!Ge(t)||n<=0||(e[t]=Math.floor((e[t]??0)+n))}function Wn(e,t,n){if(!Ge(n))return;let r=Math.max(0,Math.floor(e[n]??0));r<=0||(t[n]=Math.floor((t[n]??0)+r),e[n]=0)}function Gn(e,t,n,r=0){return!Ge(e)||n<=0||n<t?0:Math.max(0,Math.floor(r))}var Kn=`idle-town:first-survival-slice:v1`,qn=11,Jn=900*1e3,Yn={minnow:1,stoneLoach:2,mudskipper:3,brookStickleback:1.25,pebblePerch:4.75,rabbit:3.5,squirrel:1.25};function Xn(){let e=window.localStorage.getItem(Kn);if(!e)return en();try{let t=JSON.parse(e),n=en(),r={...n.buildings,...t.buildings??{}},i=typeof t.selectedCharacterId==`string`?t.selectedCharacterId:n.selectedCharacterId,a=Qn(t.characters,n.characters,t.characterInventory,t.characterResourceCounts,i),o=mr(t.currentActions,t.currentAction),s=sr(t.actionLoops,t.currentAction,n.actionLoops),c={...n,...t,selectedCharacterId:i,inventory:{...Ut(),...t.inventory??{}},characterInventory:{...Ut(),...t.characterInventory??{}},resourceCounts:{...Wt(),...t.resourceCounts??{}},characterResourceCounts:{...Wt(),...t.characterResourceCounts??{}},tools:Ur(t.tools),buildings:r,buildingCounts:Zn(t.buildingCounts,r,n.buildingCounts),campfireExpiresAt:typeof t.campfireExpiresAt==`number`?t.campfireExpiresAt:n.campfireExpiresAt,characters:a,seenResources:t.seenResources?.length?t.seenResources:n.seenResources,skills:ft(t.skills),cooking:Pr(t.cooking,n.cooking),combat:rr(t.combat,n.combat,a),actionLoops:s,currentActions:o,currentAction:o.find(e=>e.characterId===i)??o[0]??null,log:t.log?.length?t.log:n.log,version:qn},l=typeof t.version==`number`?t.version:1;return Mr(c,l),Ar(c,l),jr(c,l),kr(c,l),vn(c),yn(c),c}catch{return en()}}function Zn(e,t,n){let r={...Kt(),...n};if(e&&typeof e==`object`){let t=e;for(let e of Object.keys(r))r[e]=Math.max(0,Math.floor(Number(t[e]??r[e])))}for(let e of Object.keys(t))t[e]&&r[e]<=0&&(r[e]=1);return r}function Qn(e,t,n,r,i){return!Array.isArray(e)||!e.length?t:e.map((e,a)=>{let o=t[a]??t[0];if(!e||typeof e!=`object`)return o;let s=e,c=s.id===i&&!s.inventory&&n&&typeof n==`object`,l=Vr(c?n:s.inventory),u=Hr(l,c?r:s.resourceCounts);return{...o,...s,locationId:yr(s.locationId)?s.locationId:o.locationId,combat:er(s.combat,o.combat),needs:$n(s.needs,o.needs),classProgress:tr(s.classProgress),inventory:l,resourceCounts:u,actionLoopId:typeof s.actionLoopId==`string`?s.actionLoopId:o.actionLoopId}})}function $n(e,t=Yt()){if(!e||typeof e!=`object`)return t;let n=e,r=I(n.maxHunger,1,999);return{maxHunger:r,hunger:I(n.hunger,0,r)}}function er(e,t=Jt()){if(!e||typeof e!=`object`)return t;let n=e,r=I(n.maxHp,1,999),i=I(n.maxMana,0,999);return{maxHp:r,hp:I(n.hp,0,r),maxMana:i,mana:I(n.mana,0,i)}}function tr(e){let t=Zt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of _e)t[e]=nr(n[e]);return t}function nr(e){if(!e||typeof e!=`object`)return{level:1,xp:0,totalXp:0};let t=I(e.xp,0,2**53-1);return{level:I(e.level,1,1e3),xp:t,totalXp:Math.max(t,I(e.totalXp,0,2**53-1))}}function rr(e,t=Qt(),n){if(!e||typeof e!=`object`)return t;let r=e;return{selectedLocationId:wr(r.selectedLocationId)?r.selectedLocationId:t.selectedLocationId,encounter:ir(r.encounter,n),log:or(r.log)}}function ir(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!wr(n.locationId)||typeof n.id!=`string`)return null;let r=Array.isArray(n.units)?n.units.map(e=>ar(e,t)).filter(e=>!!e):[];return{id:n.id,locationId:n.locationId,startedAt:I(n.startedAt,0,2**53-1),updatedAt:I(n.updatedAt,0,2**53-1),wave:I(n.wave,1,999),defeatedEnemies:I(n.defeatedEnemies,0,2**53-1),units:r,message:typeof n.message==`string`?n.message:``}}function ar(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!Dr(n.kind)||typeof n.id!=`string`||typeof n.name!=`string`||n.kind===`party`&&!t.some(e=>e.id===n.characterId)||n.kind===`enemy`&&!Tr(n.enemyId))return null;let r=I(n.maxHp,1,999),i=I(n.maxMana,0,999);return{id:n.id,kind:n.kind,name:n.name,hp:I(n.hp,0,r),maxHp:r,mana:I(n.mana,0,i),maxMana:i,x:I(n.x,0,99),y:I(n.y,0,99),damage:I(n.damage,0,999),attackRange:I(n.attackRange,1,99),actEveryMs:I(n.actEveryMs,500,6e4),nextActAt:I(n.nextActAt,0,2**53-1),characterId:typeof n.characterId==`string`?n.characterId:void 0,enemyId:Tr(n.enemyId)?n.enemyId:void 0,classId:Er(n.classId)?n.classId:void 0,weaponId:n.weaponId}}function or(e){return Array.isArray(e)?e.filter(e=>!!(e&&typeof e==`object`)).map((e,t)=>({id:typeof e.id==`string`?e.id:`combat-log-${t+1}`,time:I(e.time,0,2**53-1),text:typeof e.text==`string`?e.text:``,tone:Or(e.tone)?e.tone:`muted`})).filter(e=>e.text).slice(0,20):[]}function sr(e,t,n){if(Array.isArray(e)){let t=e.map((e,t)=>cr(e,t)).filter(e=>!!e);if(t.length)return t}let r=lr(t);return r?[r]:n}function cr(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=Array.isArray(n.actionIds)?n.actionIds.map(e=>_r(e)).filter(e=>!!e):[];return r.length?{id:typeof n.id==`string`&&n.id?n.id:`loop-${t+1}`,name:typeof n.name==`string`&&n.name?n.name:`Loop ${t+1}`,actionIds:r,locationIds:ur(r,n.locationIds),advanceRules:dr(r,n.advanceRules),createdAt:typeof n.createdAt==`number`?n.createdAt:Date.now(),updatedAt:typeof n.updatedAt==`number`?n.updatedAt:Date.now()}:null}function lr(e){if(!e||typeof e!=`object`)return null;let t=e,n=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>_r(e)).filter(e=>!!e):_r(t.actionId)?[_r(t.actionId)]:[];if(!n.length)return null;let r=Date.now();return{id:`loop-saved-work`,name:`Saved Work Loop`,actionIds:n,locationIds:ur(n,t.loopLocationIds),advanceRules:n.map(e=>pr(e)),createdAt:r,updatedAt:r}}function ur(e,t){let n=Array.isArray(t)?t:[];return e.map((e,t)=>{let r=n[t];return br(r)?r:null})}function dr(e,t){let n=Array.isArray(t)?t:[];return e.map((e,t)=>fr(e,n[t]))}function fr(e,t){if(!t||typeof t!=`object`)return pr(e);let n=t,r=Sr(n.mode)?n.mode:pr(e).mode;return r===`whenResourceAtLeast`?{mode:r,resourceId:xr(n.resourceId)?n.resourceId:void 0,amount:I(n.amount,1,999999),scope:Cr(n.scope)?n.scope:`camp`}:{mode:r}}function pr(e){return{mode:`smart`}}function mr(e,t){return(Array.isArray(e)?e:t?[t]:[]).map(e=>hr(e)).filter(e=>!!e)}function hr(e){if(!e||typeof e!=`object`)return null;let t=e,n=_r(t.actionId);if(!n||typeof t.characterId!=`string`||!vr(t.phase)||typeof t.startedAt!=`number`||typeof t.endsAt!=`number`)return null;let r=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>_r(e)).filter(e=>!!e):void 0,i=_r(t.followUpActionId);return{...t,actionId:n,characterId:t.characterId,phase:t.phase,loopActionIds:r,followUpActionId:i??void 0,startedAt:t.startedAt,endsAt:t.endsAt,repeat:!!t.repeat}}function gr(e){return typeof e==`string`&&fe.some(t=>t.id===e)}function _r(e){return e===`gatherMushrooms`||e===`gatherBerries`?`gatherMeadowIngredients`:gr(e)?e:null}function vr(e){return e===`travelingTo`||e===`working`||e===`followUp`||e===`travelingBack`}function yr(e){return e===`camp`||e===`meadow`||e===`river`||e===`beach`||e===`forest`||e===`mine`||e===`desert`}function br(e){return e===`meadow`||e===`river`||e===`beach`||e===`forest`||e===`mine`||e===`desert`}function xr(e){return typeof e==`string`&&j.includes(e)}function Sr(e){return e===`smart`||e===`afterCompletion`||e===`whenInventoryFull`||e===`whenResourceAtLeast`||e===`whenCannotStart`||e===`manual`}function Cr(e){return e===`camp`||e===`character`}function wr(e){return typeof e==`string`&&ye.some(t=>t===e)}function Tr(e){return typeof e==`string`&&ve.some(t=>t===e)}function Er(e){return typeof e==`string`&&_e.some(t=>t===e)}function Dr(e){return e===`party`||e===`enemy`}function Or(e){return e===`muted`||e===`gain`||e===`warning`}function kr(e,t){let n=Date.now();if(!e.buildings.campfire){e.campfireExpiresAt=null;return}t<4&&!e.campfireExpiresAt&&(e.campfireExpiresAt=n+Jn),(typeof e.campfireExpiresAt!=`number`||e.campfireExpiresAt<=n)&&(e.buildings.campfire=!1,e.campfireExpiresAt=null)}function Ar(e,t){if(!(t>=2)){e.inventory.rabbit*=Yn.rabbit??1,e.characterInventory.rabbit*=Yn.rabbit??1,e.inventory.squirrel*=Yn.squirrel??1,e.characterInventory.squirrel*=Yn.squirrel??1;for(let t of e.characters)t.inventory.rabbit*=Yn.rabbit??1,t.inventory.squirrel*=Yn.squirrel??1}}function jr(e,t){if(!(t>=qn))for(let t of He){e.resourceCounts[t]=Br(t,e.inventory[t]),e.characterResourceCounts[t]=Br(t,e.characterInventory[t]);for(let n of e.characters)n.resourceCounts[t]=Br(t,n.inventory[t])}}function Mr(e,t){if(!(t>=10)){Nr(e.inventory,`mushroom`,`hearthcap`),Nr(e.characterInventory,`mushroom`,`hearthcap`),Nr(e.inventory,`berry`,`blueberries`),Nr(e.characterInventory,`berry`,`blueberries`);for(let t of e.characters)Nr(t.inventory,`mushroom`,`hearthcap`),Nr(t.inventory,`berry`,`blueberries`);e.seenResources=e.seenResources.map(e=>e===`mushroom`?`hearthcap`:e===`berry`?`blueberries`:e).filter((e,t,n)=>n.indexOf(e)===t)}}function Nr(e,t,n){let r=Number(e[t]??0);r>0&&(e[n]=Number(e[n]??0)+r),delete e[t]}function Pr(e,t=$t()){if(!e||typeof e!=`object`)return t;let n=e,r=Array.isArray(n.queue)?n.queue.map(e=>Fr(e)).filter(e=>!!e):[],i=!1;return{queue:r.map(e=>{let t=e.startedAt!==null&&e.endsAt!==null;return!t||!i?(i||=t,e):{...e,startedAt:null,endsAt:null}}),knownRecipeIds:Ir(n.knownRecipeIds),completedRecipeCounts:Lr(n.completedRecipeCounts)}}function Fr(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.id!=`string`||!Rr(t.recipeId)?null:{id:t.id,recipeId:t.recipeId,stationId:zr(t.stationId),queuedAt:I(t.queuedAt,0,2**53-1),startedAt:typeof t.startedAt==`number`?I(t.startedAt,0,2**53-1):null,endsAt:typeof t.endsAt==`number`?I(t.endsAt,0,2**53-1):null}}function Ir(e){return Array.isArray(e)?e.filter(e=>Rr(e)).filter((e,t,n)=>n.indexOf(e)===t):[]}function Lr(e){if(!e||typeof e!=`object`)return{};let t={},n=e;for(let[e,r]of Object.entries(n))Rr(e)&&(t[e]=I(r,0,2**53-1));return t}function Rr(e){return typeof e==`string`&&Te.includes(e)}function zr(e){return`campfire`}function Br(e,t){if(t<=0)return 0;let n=Yn[e]??1;return Math.max(1,Math.round(t/n))}function Vr(e){let t=Ut();if(!e||typeof e!=`object`)return t;let n=e;for(let e of Object.keys(t))t[e]=Number(n[e]??0);return t}function Hr(e,t){let n=Wt();if(t&&typeof t==`object`){let e=t;for(let t of Object.keys(n))n[t]=Math.max(0,Math.floor(Number(e[t]??0)))}for(let t of He)e[t]>0&&n[t]<=0&&(n[t]=Br(t,e[t]));return n}function Ur(e){let t=Gt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of A){let r=n[e.id];if(typeof r==`boolean`){t[e.id]={owned:r,durability:r?e.maxDurability:0,quantity:0};continue}if(!r||typeof r!=`object`)continue;let i=!!r.owned,a=Number(r.durability??0),o=Number(r.quantity??0);t[e.id]={owned:i,durability:i?Math.min(e.maxDurability,Math.max(0,Math.floor(a))):0,quantity:Math.max(0,Math.floor(o))}}return t}function I(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Wr(e){window.localStorage.setItem(Kn,JSON.stringify(e))}function Gr(){return window.localStorage.removeItem(Kn),en()}var Kr=900*1e3;function qr(e,t=Date.now()){e.buildings.campfire=!0,e.campfireExpiresAt=t+Kr}function L(e,t=Date.now()){return!!(e.buildings.campfire&&Yr(e)>t)}function Jr(e,t=Date.now()){let n=Yr(e);return n>t?n-t:0}function Yr(e){return e.buildings.campfire&&typeof e.campfireExpiresAt==`number`?e.campfireExpiresAt:0}function Xr(e,t=Date.now()){let n=Yr(e);return!n||n>t?!1:(e.buildings.campfire=!1,e.campfireExpiresAt=null,P(e,`The campfire burns down to charred wood.`,`muted`,n),e.updatedAt=n,e.lastSimulatedAt=n,!0)}var Zr=[`copperPickaxe`,`copperHatchet`,`copperKnife`];function Qr(e){return!!e.buildings.crudeStoneFurnace}function $r(e){return{furnaceBuilt:Qr(e),coal:Math.max(0,Math.floor(e.inventory.coal??0))}}function ei(e){return w.some(t=>t===e)}function ti(e,t){if(!D(t))return!1;switch(t){case`smeltCopperBar`:return Qr(e);case`craftPot`:case`craftLadle`:return ai(e,`copperBar`);case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return ii(e);case`smeltBronzeBar`:return Qr(e)&&oi(e);case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return ai(e,`bronzeBar`)}}function ni(e,t){if(!D(t))return``;switch(t){case`smeltCopperBar`:return Qr(e)?``:`Needs Stone Furnace`;case`craftPot`:case`craftLadle`:return ai(e,`copperBar`)?``:`Smelt Copper Bar`;case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return ii(e)?``:`Craft Pot and Ladle`;case`smeltBronzeBar`:return Qr(e)?oi(e)?``:`Craft a Copper Tool`:`Needs Stone Furnace`;case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return ai(e,`bronzeBar`)?``:`Smelt Bronze Bar`}}function ri(e){let t=E(e);return t?t.label.replace(/^(Craft|Smelt) /,`1 `):``}function ii(e){return ai(e,`pot`)&&ai(e,`ladle`)}function ai(e,t){return e.seenResources.includes(t)||e.inventory[t]>0}function oi(e){let t=e.tools;return Zr.some(e=>{let n=t[e];return!!(n?.owned||(n?.quantity??0)>0)})}var si=[`yarrow`,`plantainLeaf`],ci=[`silverleafHerb`];function li(e){return{furnaceBuilt:Qr(e),coal:Math.max(0,Math.floor(e.inventory.coal??0)),vials:Math.max(0,Math.floor(e.inventory.glassVial??0))}}function ui(e,t){if(!S(t))return!1;switch(t){case`craftGlassVial`:return Qr(e);case`brewHealthPotion`:return mi(e,`glassVial`)&&pi(e,si);case`brewManaPotion`:return mi(e,`glassVial`)&&pi(e,ci)}}function di(e,t){if(!S(t))return``;switch(t){case`craftGlassVial`:return Qr(e)?``:`Needs Stone Furnace`;case`brewHealthPotion`:return mi(e,`glassVial`)?pi(e,si)?``:`Find Meadow Ingredients`:`Craft Glass Vial`;case`brewManaPotion`:return mi(e,`glassVial`)?pi(e,ci)?``:`Find River Ingredients`:`Craft Glass Vial`}}function fi(e){let t=x(e);return t?Object.entries(t.output).map(([e,t])=>`${t??0} ${N(e)}`).join(`, `):``}function pi(e,t){return t.some(t=>mi(e,t))}function mi(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function hi(e,t){return!O(t)||!ue(t)?!1:gi(e,t)===``}function gi(e,t){let n=O(t);if(!n||!ue(t))return``;let r=n.requiredBuildings?.find(t=>!e.buildings[t]);if(r)return`Needs ${bi(r)}`;let i=n.requiredSeenResources?.find(t=>!vi(e,t));return i?n.unlockHint||`Needs ${N(i)}`:n.requiredAnyResources?.length&&!n.requiredAnyResources.some(t=>vi(e,t))?`Needs ${n.requiredAnyResources.map(e=>N(e)).join(` or `)}`:``}function _i(e){return yi(e.output)}function vi(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function yi(e){return Object.entries(e).map(([e,t])=>`${t??0} ${N(e)}`).join(`, `)}function bi(e){switch(e){case`campfire`:return`Campfire`;case`tanningRack`:return`Tanning Rack`;case`hideTent`:return`Hide Tent`;case`crudeStoneFurnace`:return`Stone Furnace`;case`primitiveSpinningWheel`:return`Primitive Spinning Wheel`;case`primitiveLoom`:return`Primitive Loom`}}function xi(e){return A.find(t=>t.id===e)}function Si(e){return xi(e)?.maxDurability??1}function Ci(e,t){let n=e.tools[t];return!!(n?.owned&&n.durability>0)}function wi(e){return A.filter(t=>t.roles.includes(e)).sort((t,n)=>Oi(n.id,e)-Oi(t.id,e))}function Ti(e,t){return wi(t).find(t=>Ci(e,t.id))?.id??null}function Ei(e,t){return!!Ti(e,t)}function Di(e,t){let n=Ti(e,t);return n?Oi(n,t):0}function Oi(e,t){let n=xi(e);return n?.roles.includes(t)?n.roleTiers?.[t]??n.weapon?.damage??1:0}function ki(e){return xi(e)?.weapon?.damage??0}function Ai(e,t){let n=Ti(e,t);return n?ki(n):0}function ji(e,t){let n=e.tools[t];return!n||n.quantity<=0?!1:(--n.quantity,n.owned=!0,n.durability=Si(t),!0)}function Mi(e,t,n,r=Date.now(),i=`Cameron`){let a=e.tools[t];if(!(!a?.owned||a.durability<=0)&&(a.durability=Math.max(0,a.durability-n),a.durability===0)){let n=xi(t)?.label??`Tool`;if(ji(e,t)){P(e,`${n} breaks; ${i} takes a fresh one from inventory.`,`warning`,r,`character`);return}a.owned=!1,P(e,`${n} breaks. No spare remains.`,`warning`,r,`character`)}}function Ni(e,t,n,r=Date.now(),i=`Cameron`){let a=Ti(e,t);a&&Mi(e,a,n,r,i)}var Pi=Pe.map(e=>e.craftActionId);function Fi(e){return e.seenResources.includes(`rabbitMeat`)||e.seenResources.includes(`squirrelMeat`)}function Ii(e){return ze.some(t=>e.seenResources.includes(t)||e.characters.some(e=>(e.inventory?.[t]??0)>0||(e.resourceCounts?.[t]??0)>0)||e.characterInventory[t]>0||e.inventory[t]>0||e.characterResourceCounts[t]>0||e.resourceCounts[t]>0)}function Li(e){return e.seenResources.some(e=>{let t=Ie.find(t=>t.id===e);return!!(t?.cooking?.ingredientCategory||t?.cooking?.tags.includes(`stew-base`)||t?.cooking?.tags.includes(`vessel`)||t?.cooking?.tags.includes(`utensil`))})}function R(e,t,n=Date.now()){if(ti(e,t)||ui(e,t))return!0;if(O(t))return hi(e,t);if(ni(e,t)||di(e,t))return!1;if(t===`craftLowestTool`||Pi.includes(t)||t===`craftWoodenBowl`||g(t)||_(t))return!0;switch(t){case`gatherSticks`:case`gatherStones`:case`gatherFlaxPlants`:case`gatherFlaxFibers`:case`gatherMeadowIngredients`:case`gatherForestIngredients`:case`gatherRiverIngredients`:case`gatherMineIngredients`:case`gatherDesertIngredients`:case`gatherSand`:case`gatherWater`:case`craftWoodenSpoon`:return!0;case`fishRiver`:return Ei(e,`fishing`);case`mineCoal`:case`mineCopper`:case`mineTin`:return Ei(e,`mining`);case`chopTrees`:return Ei(e,`woodcutting`);case`huntSmallAnimals`:return Ei(e,`hunting`);case`butcherFish`:return Ii(e);case`butcherRabbit`:return e.seenResources.includes(`rabbit`);case`butcherSquirrel`:return e.seenResources.includes(`squirrel`);case`cookRabbitMeat`:return L(e,n)&&e.seenResources.includes(`rabbitMeat`);case`cookSquirrelMeat`:return L(e,n)&&e.seenResources.includes(`squirrelMeat`);case`tanHide`:return e.buildings.tanningRack&&e.seenResources.includes(`hide`);case`craftLeatherBackpack`:return e.buildings.tanningRack&&e.seenResources.includes(`leather`)}return!1}function Ri(e,t){let n=ni(e,t);if(n)return n;let r=di(e,t);if(r)return r;let i=gi(e,t);if(i)return i;switch(t){case`fishRiver`:return`Needs Fishing Pole`;case`mineCoal`:case`mineCopper`:case`mineTin`:return`Needs Mining Tool`;case`chopTrees`:return`Needs Woodcutting Tool`;case`huntSmallAnimals`:return`Needs Hunting Weapon`;case`butcherFish`:return`Needs Carried Fish`;case`butcherRabbit`:return`Needs Rabbit`;case`butcherSquirrel`:return`Needs Squirrel`;case`cookRabbitMeat`:return L(e)?`Needs Rabbit Meat`:`Needs Lit Campfire`;case`cookSquirrelMeat`:return L(e)?`Needs Squirrel Meat`:`Needs Lit Campfire`;case`tanHide`:return e.buildings.tanningRack?`Needs Hide`:`Needs Tanning Rack`;case`craftLeatherBackpack`:return e.buildings.tanningRack?`Needs Leather`:`Needs Tanning Rack`;case`craftLowestTool`:return`Needs Craft Materials`;case`craftWoodenBowl`:return`Needs Wood`;default:return``}}function zi(e,t,n=Date.now()){return!0}function Bi(e,t,n=Date.now()){switch(t){case`campfire`:return L(e,n)||Fi(e)||Li(e);case`tanningRack`:return e.buildings.tanningRack||e.seenResources.includes(`hide`);case`hideTent`:return e.buildings.hideTent||e.seenResources.includes(`hide`);case`crudeStoneFurnace`:return e.buildings.crudeStoneFurnace||e.seenResources.includes(`coal`)||e.seenResources.includes(`copper`);case`primitiveSpinningWheel`:return e.buildings.primitiveSpinningWheel||e.seenResources.includes(`linenThread`);case`primitiveLoom`:return e.buildings.primitiveLoom||e.seenResources.includes(`linenThread`)}}function Vi(e,t){switch(t){case`campfire`:return`See Meat, Water, or Meadow Ingredients`;case`tanningRack`:case`hideTent`:return`See Hide`;case`crudeStoneFurnace`:return`See Coal or Copper`;case`primitiveSpinningWheel`:return`See Linen Thread`;case`primitiveLoom`:return`See Linen Thread`}}var Hi={meadow:1e4,river:15e3,beach:45e3,forest:3e4,mine:6e4,desert:75e3};function Ui(e){return e.loopActionIds?.length?[...e.loopActionIds]:e.followUpActionId?[e.actionId,e.followUpActionId]:[e.actionId]}function z(e){return sa(e)||e===`huntSmallAnimals`||e===`chopTrees`}function Wi(e,t){return z(e)?la(e,t):null}function Gi(e,t=Ui(e)){return e.loopLocationIds?.length?t.map((t,n)=>Wi(t,e.loopLocationIds?.[n]??void 0)):t.map((t,n)=>n===0&&z(t)?e.locationId??`meadow`:Wi(t,void 0))}function Ki(e,t){let n=Ui(e),r=n[aa(t,n)];return Gi(e,n)[aa(t,n)]??(z(r)?`meadow`:void 0)}function qi(e,t){let n=Ui(e),r=n[aa(t,n)];return Ji(r,Ki(e,t))}function Ji(e,t){return z(e)?la(e,t):`camp`}function Yi(e){return e.targetLocationId??e.locationId??`camp`}function Xi(e,t){return e.characters.find(e=>e.id===t)?.locationId??`camp`}function Zi(e,t,n){let r=e.characters.find(e=>e.id===t);r&&(r.locationId=n)}function Qi(e,t){return e.phase===`travelingTo`||e.phase===`travelingBack`?e.originLocationId??t:Yi(e)}function $i(e){return e===`camp`?`camp`:`the ${e}`}function ea(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function ta(e,t){let n=Ui(e);return n[aa(t,n)]??e.actionId}function na(e){let t=Ui(e);return aa(e.nextLoopIndex??e.loopIndex??0,t)}function ra(e){return ia(e,e.loopIndex??0)}function ia(e,t){let n=Ui(e);if(n.length<=1)return aa(t,n);let r=(aa(t,n)+1)%n.length;for(;n[r]===`butcherFish`&&r!==t;)r=(r+1)%n.length;return r}function aa(e,t){return t.length?Math.min(t.length-1,Math.max(0,Math.floor(e))):0}function oa(e,t){return e===t?0:da(e)+da(t)}function sa(e){return g(e)||_(e)||e===`gatherSticks`||e===`gatherStones`||e===`gatherFlaxPlants`||e===`gatherFlaxFibers`||e===`gatherMeadowIngredients`||e===`gatherForestIngredients`||e===`gatherRiverIngredients`||e===`gatherMineIngredients`||e===`gatherDesertIngredients`||e===`gatherSand`||e===`gatherWater`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`||e===`fishRiver`}function ca(e){let t=d(e);if(t)return t.locationId;let n=i(e);return n?n.locationId:e===`gatherWater`||e===`fishRiver`||e===`gatherRiverIngredients`?`river`:e===`gatherForestIngredients`||e===`chopTrees`?`forest`:e===`gatherMineIngredients`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`?`mine`:e===`gatherDesertIngredients`||e===`gatherSand`?`desert`:`meadow`}function la(e,t){let n=ca(e);return e===`fishRiver`?t===`river`||t===`beach`?t:n:t??n}function ua(e){return Hi[e]}function da(e){return e===`camp`?0:ua(e)}function fa(e){return Array.isArray(e.currentActions)||(e.currentActions=e.currentAction?[e.currentAction]:[]),e.currentActions}function B(e,t=e.selectedCharacterId){return fa(e).find(e=>e.characterId===t)??null}function pa(e){let t=fa(e);e.currentAction=t.find(t=>t.characterId===e.selectedCharacterId)??t[0]??null}function ma(e,t){let n=fa(e),r=n.findIndex(e=>e.characterId===t.characterId);r>=0?n[r]=t:n.push(t),e.currentActions=n,_a(e,!0,t.characterId),pa(e)}function ha(e,t){e.currentActions=fa(e).filter(e=>e.characterId!==t),_a(e,!1,t),pa(e)}function ga(e){return[...fa(e)].sort((e,t)=>e.endsAt===t.endsAt?e.characterId.localeCompare(t.characterId):e.endsAt-t.endsAt)[0]??null}function V(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function H(e,t){return e.characters.find(e=>e.id===t)?.name??`Someone`}function _a(e,t,n=e.selectedCharacterId){let r=e.characters.find(e=>e.id===n);r&&(r.condition=t?`working`:`resting`)}var va=42;function ya(e,t=Date.now()){Ma(e,t);let n=e.actionLoops.length+1,r={id:`loop-${t.toString(36)}-${Math.random().toString(36).slice(2,7)}`,name:`Loop ${n}`,actionIds:[`gatherSticks`],locationIds:[`meadow`],advanceRules:[ja(`gatherSticks`)],createdAt:t,updatedAt:t};return e.actionLoops.push(r),V(e,t),r}function ba(e,t,n=Date.now()){if(Ma(e,n),e.actionLoops.length<=1)return e.actionLoops[0]?.id??null;let r=e.actionLoops.findIndex(e=>e.id===t);if(r<0)return e.actionLoops[0]?.id??null;e.actionLoops.splice(r,1);for(let n of e.characters)n.actionLoopId===t&&(n.actionLoopId=void 0);return V(e,n),e.actionLoops[Math.max(0,r-1)]?.id??e.actionLoops[0]?.id??null}function U(e,t){return Ma(e),e.actionLoops.find(e=>e.id===t)??e.actionLoops[0]??null}function xa(e,t,n){Ta(e);let r=Pa(t,e);return n===`butcherFish`?e.actionIds[r]===`fishRiver`:!0}function Sa(e,t,n,r,i={},a=Date.now()){let o=U(e,t);if(!o||!xa(o,n,r))return!1;let s=Pa(n,o)+1;return Ta(o),o.actionIds.splice(s,0,r),o.locationIds.splice(s,0,Wi(r,i.locationId)),o.advanceRules.splice(s,0,ja(r)),o.updatedAt=a,Na(e,o),V(e,a),!0}function Ca(e,t,n,r=Date.now()){let i=U(e,t);if(!i||i.actionIds.length<=1)return 0;let a=Pa(n,i);return Ta(i),i.actionIds.splice(a,1),i.locationIds.splice(a,1),i.advanceRules.splice(a,1),i.updatedAt=r,Na(e,i),V(e,r),Math.max(0,a-1)}function wa(e){return e.actionIds.map((t,n)=>Wi(t,e.locationIds[n]??void 0))}function Ta(e){let t=Array.isArray(e.advanceRules)?e.advanceRules:[];return e.advanceRules=e.actionIds.map((e,n)=>Fa(t[n],e)),e.advanceRules}function Ea(e,t){return Ta(e)[Pa(t,e)]??ja(e.actionIds[0]??`gatherSticks`)}function Da(e,t,n,r=Date.now()){let i=U(e,t);if(!i)return!1;let a=Ia(n);return i.name===a?!1:(i.name=a,i.updatedAt=r,V(e,r),!0)}function Oa(e,t,n,r,i=Date.now()){let a=U(e,t);if(!a)return!1;let o=Pa(n,a),s=Fa({...Ta(a)[o]??ja(a.actionIds[o]),...r},a.actionIds[o]);return a.advanceRules[o]=s,a.updatedAt=i,V(e,i),!0}function ka(e,t,n,r,i={},a=Date.now()){let o=U(e,t);if(!o)return!1;let s=Pa(n,o);Ta(o);let c=Wi(r,i.locationId??o.locationIds[s]??void 0);return o.actionIds[s]===r&&o.locationIds[s]===c?!1:(o.actionIds[s]=r,o.locationIds[s]=c,o.advanceRules[s]=ja(r),o.updatedAt=a,Na(e,o),V(e,a),!0)}function Aa(e,t,n,r,i=Date.now()){let a=U(e,t);if(!a)return!1;let o=Pa(n,a),s=Wi(a.actionIds[o],r);return a.locationIds[o]===s?!1:(a.locationIds[o]=s,a.updatedAt=i,Na(e,a),V(e,i),!0)}function ja(e){return{mode:`smart`}}function Ma(e,t=Date.now()){if(Array.isArray(e.actionLoops)&&e.actionLoops.length)return;let n=e.currentAction?.loopActionIds?.length?{actionIds:[...e.currentAction.loopActionIds],locationIds:[...e.currentAction.loopLocationIds??[]]}:{actionIds:[`gatherSticks`],locationIds:[`meadow`]};e.actionLoops=[{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:n.actionIds,locationIds:n.actionIds.map((e,t)=>Wi(e,n.locationIds[t]??void 0)),advanceRules:n.actionIds.map(e=>ja(e)),createdAt:t,updatedAt:t}]}function Na(e,t){for(let n of e.characters){if(n.actionLoopId!==t.id)continue;let r=B(e,n.id);if(!r)continue;let i=aa(r.loopIndex??0,t.actionIds);ma(e,{...r,loopActionIds:[...t.actionIds],loopLocationIds:wa(t),loopIndex:i})}}function Pa(e,t){return t.actionIds.length?Math.min(t.actionIds.length-1,Math.max(0,Math.floor(e))):0}function Fa(e,t){let n=Ra(e?.mode)?e.mode:ja(t).mode;return n===`whenResourceAtLeast`?{mode:n,resourceId:typeof e?.resourceId==`string`?e.resourceId:void 0,amount:La(e?.amount),scope:za(e?.scope)?e.scope:`camp`}:{mode:n}}function Ia(e){return(e.trim().replace(/\s+/g,` `)||`Action Loop`).slice(0,va)}function La(e){let t=Number(e??1);return Number.isFinite(t)?Math.max(1,Math.floor(t)):1}function Ra(e){return e===`smart`||e===`afterCompletion`||e===`whenInventoryFull`||e===`whenResourceAtLeast`||e===`whenCannotStart`||e===`manual`}function za(e){return e===`camp`||e===`character`}function Ba(e,t,n){return Math.min(n,Math.max(t,e))}function W(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Va(e,t,n=1){let r=10**n;return Math.round((Math.random()*(t-e)+e)*r)/r}function G(e){let t=Math.max(0,Math.ceil(e/1e3));if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function Ha(t,n){let r=e(t),i=n?r?.entries.filter(e=>e.category===n):r?.entries;if(!r||!i?.length)return{resources:{},message:`Cameron searches carefully, but finds nothing useful.`};let o=Math.random()<.28?2:1,s={},c=[];for(let e=0;e<o;e+=1){let e=Ga(i);if(!e)continue;let t=W(e.minAmount,e.maxAmount);s[e.id]=(s[e.id]??0)+t,c.push(e)}let l=Object.entries(s).filter(([,e])=>(e??0)>0).map(([e,t])=>`${t} ${N(e)}`);return{resources:s,message:l.length?`Cameron gathers ${Ka(l)} from the ${r.locationId}${n?` ${a(n).toLowerCase()}`:``}.`:`Cameron searches carefully, but finds nothing useful.`}}function Ua(t,n){let r=e(t),i=r?.entries.find(e=>e.id===n);if(!r||!i)return{resources:{},message:`Cameron searches carefully, but finds nothing useful.`};let a=W(i.minAmount,i.maxAmount);return{resources:{[i.id]:a},message:`Cameron gathers ${a} ${N(i.id)} from the ${r.locationId}.`}}function Wa(t,n){let r=e(t),i=n?r?.entries.filter(e=>e.category===n):r?.entries;return!r||!i?.length?`No known gatherables.`:n?`${a(n)} from weighted ${r.label.toLowerCase()} table`:`${r.categories.map(e=>a(e)).join(`, `)} from weighted ${r.label.toLowerCase()} table`}function Ga(e){let t=e.reduce((e,t)=>e+Math.max(0,t.weight),0);if(t<=0)return null;let n=Math.random()*t;for(let t of e)if(n-=Math.max(0,t.weight),n<=0)return t;return e[e.length-1]??null}function Ka(e){return e.length<=1?e[0]??`nothing`:`${e.slice(0,-1).join(`, `)} and ${e[e.length-1]}`}var qa=Pe.map(e=>({actionId:e.craftActionId,toolId:e.id})),Ja=[{id:`minnow`,minWeight:.5,maxWeight:1.5},{id:`stoneLoach`,minWeight:1,maxWeight:3},{id:`mudskipper`,minWeight:1.5,maxWeight:4.5},{id:`brookStickleback`,minWeight:.5,maxWeight:2},{id:`pebblePerch`,minWeight:2,maxWeight:7.5}],Ya=[{id:`rabbit`,minWeight:2,maxWeight:5},{id:`squirrel`,minWeight:.5,maxWeight:2}];function Xa(e){return A.find(t=>t.id===e)?.recipe??{}}function Za(e,t){let n=e.tools[t];return(n?.quantity??0)+ +!!n?.owned}function Qa(e,t){return so($a(e,t))}function $a(e,t){let n=E(t);if(n)return{resources:n.output??{},message:`Cameron finishes ${n.label.toLowerCase()}.`,tone:`craft`};let r=x(t);if(r)return{resources:r.output,message:`Cameron finishes ${r.label.toLowerCase()}.`,tone:`craft`};let a=O(t);if(a)return{resources:a.output,message:`Cameron finishes ${a.label.toLowerCase()}.`,tone:`craft`};let o=i(t);if(o)return co(o.locationId,o.category);let s=d(t);if(s)return lo(s.locationId,s.resourceId);switch(t){case`gatherSticks`:{let e=W(1,3);return{resources:{stick:e},message:`Cameron gathers ${e} ${ho(`Stick`,e)}.`,tone:`gain`}}case`gatherStones`:{let e=W(1,2);return{resources:{stone:e},message:`Cameron finds ${e} ${ho(`Stone`,e)}.`,tone:`gain`}}case`gatherFlaxPlants`:{let e=W(2,4);return{resources:{flaxPlant:e},message:`Cameron cuts ${e} ${ho(`Flax Plant`,e)} from the meadow.`,tone:`gain`}}case`gatherFlaxFibers`:{let e=W(1,3);return{resources:{flaxFiber:e},message:`Cameron pulls ${e} ${ho(`Flax Fiber`,e)} from the brush.`,tone:`gain`}}case`gatherMeadowIngredients`:return co(`meadow`);case`gatherForestIngredients`:return co(`forest`);case`gatherRiverIngredients`:return co(`river`);case`gatherMineIngredients`:return co(`mine`);case`gatherDesertIngredients`:return co(`desert`);case`gatherSand`:{let e=W(2,5);return{resources:{sand:e},message:`Cameron gathers ${e} ${ho(`Sand`,e)} from the desert.`,tone:`gain`}}case`gatherWater`:{let e=W(1,3);return{resources:{water:e},message:`Cameron fills ${e} ${e===1?`skin`:`skins`} of river water.`,tone:`gain`}}case`mineCoal`:return fo(e,`coal`);case`mineCopper`:return fo(e,`copper`);case`mineTin`:return fo(e,`tin`);case`fishRiver`:return uo();case`craftLowestTool`:case`craftLeatherBackpack`:break;case`craftWoodenSpoon`:return{resources:{woodenSpoon:1},message:`Cameron carves a wooden spoon.`,tone:`craft`};case`chopTrees`:{let t=Di(e,`woodcutting`),n=t>=3?1:+(t>=2&&Math.random()<.5),r=W(2,4)+n,i=+(Math.random()<.35);return{resources:{wood:r,stick:i},message:`Cameron chops ${r} ${ho(`Wood`,r)}${i?` and saves a usable stick`:``}.`,tone:`gain`}}case`huntSmallAnimals`:return po(e);case`butcherFish`:return{resources:{},message:`Cameron butchers carried fish.`,tone:`gain`};case`butcherRabbit`:return mo(e,`rabbit`);case`butcherSquirrel`:return mo(e,`squirrel`);case`cookRabbitMeat`:return{resources:{cookedRabbitMeat:1},message:`Cameron cooks rabbit meat over the coals.`,tone:`craft`};case`cookSquirrelMeat`:return{resources:{cookedSquirrelMeat:1},message:`Cameron cooks squirrel meat over the coals.`,tone:`craft`};case`craftWoodenBowl`:return{resources:{woodenBowl:1},message:`Cameron carves a wooden bowl.`,tone:`craft`};case`tanHide`:return{resources:{leather:1},message:`Cameron works a hide into rough leather.`,tone:`craft`}}let c=eo(t);return c?{resources:{},message:`Cameron finishes ${_o(c).toLowerCase()}.`,tone:`craft`}:{resources:{},message:`Cameron finishes the work.`,tone:`craft`}}function eo(e){let t=E(e);if(t?.toolId)return t.toolId;let n=qa.find(t=>t.actionId===e);return n?n.toolId:e===`craftLeatherBackpack`?`leatherBackpack`:null}function to(e,t,n,r,i){let a=A.find(e=>e.id===r);a&&(e.tools[r].quantity+=1,Ci(e,r)||ji(e,r),on(e,{aggregateKey:`craft:${t}:${r}`,text:`${n} crafted ${go(a.label)}`,amount:1,unit:go(a.label),tone:`craft`,now:i,scope:`character`}))}function no(e,t,n,r){let i=oo(e,t);Object.values(i).some(e=>(e??0)>0)&&on(e,{aggregateKey:`action:${t}:butcherFish`,text:`${n} butchered fish`,resources:i,tone:`gain`,now:r,scope:`character`})}function ro(e,t=e.selectedCharacterId){return ze.some(n=>Nn(e,n,`character`,t))}function io(e,t,n,r){switch(t){case`fishRiver`:Ni(e,`fishing`,1,n,r);break;case`mineCoal`:case`mineCopper`:case`mineTin`:Ni(e,`mining`,1,n,r);break;case`chopTrees`:Ni(e,`woodcutting`,1,n,r);break;case`huntSmallAnimals`:Ni(e,`hunting`,1,n,r);break;case`butcherRabbit`:case`butcherSquirrel`:Ni(e,`butchering`,1,n,r);break;default:break}}function ao(e,t=`Cameron`){let n=E(e);if(n)return`${t} completed ${n.label.toLowerCase()}`;let r=x(e);if(r)return`${t} completed ${r.label.toLowerCase()}`;let a=O(e);if(a)return`${t} completed ${a.label.toLowerCase()}`;let o=i(e);if(o)return`${t} gathered ${o.label.replace(`Gather `,``).toLowerCase()}`;let s=d(e);if(s)return`${t} gathered ${s.resourceLabel.toLowerCase()}`;switch(e){case`gatherSticks`:return`${t} gathered sticks`;case`gatherStones`:return`${t} gathered stones`;case`gatherFlaxPlants`:return`${t} gathered flax plants`;case`gatherFlaxFibers`:return`${t} gathered flax fibers`;case`gatherMeadowIngredients`:return`${t} gathered meadow ingredients`;case`gatherForestIngredients`:return`${t} gathered forest forage`;case`gatherRiverIngredients`:return`${t} gathered river forage`;case`gatherMineIngredients`:return`${t} gathered mine forage`;case`gatherDesertIngredients`:return`${t} gathered desert forage`;case`gatherSand`:return`${t} gathered sand`;case`gatherWater`:return`${t} gathered water`;case`mineCoal`:return`${t} mined coal`;case`mineCopper`:return`${t} mined copper`;case`mineTin`:return`${t} mined tin`;case`fishRiver`:return`${t} caught fish`;case`craftLowestTool`:return`${t} balanced tool stock`;case`craftWoodenSpoon`:return`${t} crafted wooden spoons`;case`craftWoodenBowl`:return`${t} carved wooden bowls`;case`craftLeatherBackpack`:return`${t} crafted leather backpacks`;case`chopTrees`:return`${t} chopped trees`;case`huntSmallAnimals`:return`${t} hunted small animals`;case`butcherFish`:return`${t} butchered fish`;case`butcherRabbit`:return`${t} butchered rabbits`;case`butcherSquirrel`:return`${t} butchered squirrels`;case`cookRabbitMeat`:return`${t} cooked rabbit meat`;case`cookSquirrelMeat`:return`${t} cooked squirrel meat`;case`tanHide`:return`${t} tanned hide`}let c=eo(e);return c?`${t} crafted ${go(_o(c)).toLowerCase()}`:`${t} completed work`}function oo(e,t){let n={},r=Tn(e,t);for(let i of ze){let a=Ve[i];if(!a||!Nn(e,i,`character`,t))continue;let o=M(a,Pn(e,i,`character`,t)*.5*Ze());return o<=0?n:(r[a]=M(a,r[a]+o),n[a]=M(a,(n[a]??0)+o),e.seenResources.includes(a)||e.seenResources.push(a),n)}return n}function so(e){return{...e,resources:et(e.resources),resourceCounts:e.resourceCounts?tt(e.resourceCounts):void 0}}function co(e,t){let n=Ha(e,t);return{resources:n.resources,message:n.message,tone:`gain`}}function lo(e,t){let n=Ua(e,t);return{resources:n.resources,message:n.message,tone:`gain`}}function uo(){let e=Ja[W(0,Ja.length-1)],t=Va(e.minWeight,e.maxWeight,1),n=N(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron catches a ${qe(e.id,t)} lb ${n}.`,tone:`gain`}}function fo(e,t){let n=N(t),r=Di(e,`mining`),i=1+ +(Math.random()<(r>=3?.35:r>=2?.18:0));return{resources:{[t]:i},message:`Cameron mines ${i} ${n}.`,tone:`gain`}}function po(e){let t=Ai(e,`hunting`),n=Math.min(.76,.52+t*.025),r=Ya[Math.random()<n?0:1],i=Math.min(.8,Math.max(0,t-2.4)*.12),a=Va(r.minWeight,r.maxWeight+i,1),o=N(r.id);return{resources:{[r.id]:a},resourceCounts:{[r.id]:1},message:`Cameron brings back a ${qe(r.id,a)} lb ${o}.`,tone:`gain`}}function mo(e,t){if(Pn(e,t)<=0)return{resources:{},message:`Cameron has no ${t} to butcher.`,tone:`gain`};let n=t===`rabbit`?`rabbitMeat`:`squirrelMeat`,r=t===`rabbit`?W(1,2):1,i=Di(e,`butchering`),a=Ei(e,`butchering`),o=i>=3?.18:i>=2?.08:0,s=Math.min(.9,(t===`rabbit`?.65:.42)+o),c=Math.min(.75,(t===`rabbit`?.24:.14)+o),l=+(Math.random()<s),u=+(Math.random()<c),d={[n]:r,hide:a?l:0,bone:a?u:0},f=Object.entries({hide:l,bone:u}).filter(([,e])=>a&&e>0).map(([e,t])=>`${t} ${N(e)}`);return{resources:d,message:`Cameron butchers a ${t} for ${r} ${N(n)}${f.length?`, plus ${f.join(` and `)}`:``}.`,tone:`gain`}}function ho(e,t){return t===1?e:`${e}s`}function go(e){return e.endsWith(`Knife`)?`${e.slice(0,-5)}Knives`:e.endsWith(`s`)?e:`${e}s`}function _o(e){return A.find(t=>t.id===e)?.label??`Tool`}var vo=7200*1e3;function yo(e,t=Date.now()){let n=qa.filter(({actionId:n})=>R(e,n,t)&&bn(e,K(n)));return n.length?n.reduce((t,n)=>Za(e,n.toolId)<Za(e,t.toolId)?n:t,n[0]).actionId:null}function bo(e,t,n=e.selectedCharacterId,r=Date.now()){let i=U(e,t),a=e.characters.find(e=>e.id===n);return!i||!a?!1:(a.actionLoopId=i.id,xo(e,i.id,n,r))}function xo(e,t,n=e.selectedCharacterId,r=Date.now()){let i=U(e,t);return i?.actionIds.length?Wo(e,{actionId:i.actionIds[0],characterId:n,phase:`working`,loopActionIds:[...i.actionIds],loopLocationIds:wa(i),loopIndex:0,startedAt:r,endsAt:r,repeat:!0},0,r):!1}function K(e){let t=E(e);if(t)return t.cost;let n=x(e);if(n)return n.cost;let r=O(e);if(r)return r.cost;let i=eo(e);if(i)return Xa(i);switch(e){case`craftWoodenBowl`:return{wood:1};case`cookRabbitMeat`:return{rabbitMeat:1};case`cookSquirrelMeat`:return{squirrelMeat:1};case`craftWoodenSpoon`:return{wood:1};case`tanHide`:return{hide:1};case`craftLowestTool`:return{};default:return{}}}function q(e,t,n=Date.now(),r=e.selectedCharacterId){return So(e,r)?!1:t===`craftLowestTool`?R(e,t,n)&&!!yo(e,n):t===`butcherFish`?R(e,t,n)&&ro(e,r):t===`butcherRabbit`?R(e,t,n)&&Nn(e,`rabbit`):t===`butcherSquirrel`?R(e,t,n)&&Nn(e,`squirrel`):R(e,t,n)&&bn(e,K(t))}function So(e,t){return!!e.combat?.encounter?.units.some(e=>e.kind===`party`&&e.characterId===t)}function Co(e,t,n=Date.now(),r={}){let i=k(t),a=e.selectedCharacterId;if(!i||!q(e,t,n,a))return!1;let o=Ji(t,r.locationId),s=Xi(e,a),c=oa(s,o),l={actionId:t,characterId:a,phase:c>0?`travelingTo`:`working`,originLocationId:s,targetLocationId:o,locationId:o===`camp`?void 0:o,loopActionIds:[t],loopLocationIds:[o===`camp`?null:o],loopIndex:0,startedAt:n,endsAt:n+(c||i.durationMs),repeat:!0};return c<=0&&Zi(e,a,o),ma(e,l),V(e,n),!0}function wo(e,t=Date.now()){let n=B(e);if(!n)return;let r=k(n.actionId),i=Qi(n,Xi(e,n.characterId));if(Zi(e,n.characterId,i),i!==`camp`){ma(e,{...n,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i,startedAt:t,endsAt:t+oa(i,`camp`),repeat:!1}),V(e,t),P(e,`${H(e,n.characterId)} stops ${r?.verb??`working`} at ${$i(i)} and heads back to camp.`,`muted`,t,`character`);return}let a=i===`camp`?To(e,t,n.characterId):!1;ha(e,n.characterId),V(e,t),P(e,a?`${H(e,n.characterId)} stops ${r?.verb??`working`} and returns to camp.`:`${H(e,n.characterId)} stops ${r?.verb??`working`} at ${$i(i)}.`,`muted`,t,`character`)}function To(e,t=Date.now(),n=e.selectedCharacterId){if(Xi(e,n)!==`camp`)return!1;let r=jn(e,n);return Object.keys(r).length<=0?!1:(on(e,{aggregateKey:`deposit:camp`,text:`${H(e,n)} returned resources to camp`,resources:r,tone:`gain`,now:t,scope:`character`}),V(e,t),!0)}function Eo(e,t=Date.now()){let n=Math.min(t,e.lastSimulatedAt+vo);pa(e);let r=0;for(;r<500;){let t=Jo(e,n),i=ga(e),a=i?.endsAt??1/0;if(t===null&&a>n)break;if(t!==null&&t<=a){Xr(e,t);for(let n of[...fa(e)])qo(ea(n))&&(P(e,`${H(e,n.characterId)} stops cooking as the campfire goes out.`,`warning`,t,`character`),ha(e,n.characterId));continue}if(i&&a<=n){let t=i,a=t.endsAt;Oo(e,t,a,n),r+=1;continue}break}t>n&&r>0&&P(e,`The saved trail grows quiet after two hours away.`,`muted`,n,`character`),e.lastSimulatedAt=t,e.updatedAt=t;for(let t of e.characters)B(e,t.id)||_a(e,!1,t.id);pa(e)}function Do(e,t=Date.now(),n=e.selectedCharacterId){let r=B(e,n);if(!r)return 0;let i=r.endsAt-r.startedAt;return i<=0?1:(t-r.startedAt)/i}function Oo(e,t,n,r){if(t.phase===`travelingTo`){Dt(e,t.endsAt-t.startedAt,n),Zi(e,t.characterId,Yi(t)),Bo(e,t,n);return}if(t.phase===`travelingBack`){if(Dt(e,t.endsAt-t.startedAt,n),Zi(e,t.characterId,`camp`),To(e,n,t.characterId),t.repeat&&Wo(e,t,na(t),n))return;if(t.repeat&&q(e,t.actionId,n,t.characterId)){Vo(e,t,n);return}ha(e,t.characterId);return}if(t.phase===`followUp`){ko(e,t,n,r);return}Ao(e,t,n)}function ko(e,t,n,r){let i=ea(t);if(i!==`butcherFish`){Ho(e,t,r,ra(t));return}if(no(e,t.characterId,H(e,t.characterId),n),Tt(e,i,n),ro(e,t.characterId)){Uo(e,t,t.loopIndex??0,n);return}Ho(e,t,r,ra(t))}function Ao(e,t,n){let r=Xo(e,t.actionId,n);if(!r){jo(e,t,n);return}let i=K(r);if(!bn(e,i)){jo(e,t,n);return}if(xn(e,i),r===`butcherFish`){no(e,t.characterId,H(e,t.characterId),n),Tt(e,r,n),Mo(e,t,r,n);return}let a=eo(r);if(a){to(e,t.characterId,H(e,t.characterId),a,n),Tt(e,r,n),Mo(e,t,r,n);return}let o=Qa(e,r),s=z(r)?An(e,o.resources,o.resourceCounts,t.characterId):o.resources;z(r)?Ko(e,t.characterId,r,s,n):(Sn(e,o.resources,o.resourceCounts),on(e,{aggregateKey:`action:${t.characterId}:${r}`,text:ao(r,H(e,t.characterId)),resources:o.resources,tone:o.tone,now:n,scope:`character`})),io(e,r,n,H(e,t.characterId)),Tt(e,r,n),Mo(e,t,r,n,{returnToCamp:z(r)&&Yo(o.resources,s,e,t.characterId)})}function jo(e,t,n){Io(e,t).mode===`whenCannotStart`&&Ui(t).length>1&&No(e,t,n)||(P(e,`${H(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),ha(e,t.characterId))}function Mo(e,t,n,r,i={}){let a=Fo(e,t,n,r,!!i.returnToCamp);if(i.returnToCamp){let i=a?ra(t):t.loopIndex??0;if(a&&Po(e,t,n,i,r))return;Ho(e,t,r,i);return}if(!(a&&Ui(t).length>1&&No(e,t,r))){if(t.repeat&&q(e,t.actionId,r,t.characterId)){Bo(e,t,r);return}ha(e,t.characterId)}}function No(e,t,n){let r=ra(t);return Po(e,t,t.actionId,r,n)?!0:qi(t,r)===`camp`&&Xi(e,t.characterId)!==`camp`?(Ho(e,t,n,r),!0):Wo(e,t,r,n)}function Po(e,t,n,r,i){return n===`fishRiver`&&ta(t,r)===`butcherFish`&&ro(e,t.characterId)?(Uo(e,t,r,i),!0):!1}function Fo(e,t,n,r,i){let a=Io(e,t);switch(a.mode){case`manual`:return!1;case`afterCompletion`:return!0;case`whenInventoryFull`:return i||Ro(e,t.characterId);case`whenResourceAtLeast`:return Lo(e,t,a,n);case`whenCannotStart`:return!q(e,t.actionId,r,t.characterId);default:return z(n)?i:!0}}function Io(e,t,n=t.loopIndex??0){let r=e.characters.find(e=>e.id===t.characterId),i=r?.actionLoopId?U(e,r.actionLoopId):null;return i?Ea(i,n):{mode:`smart`}}function Lo(e,t,n,r){let i=Math.max(1,Math.floor(n.amount??1));return Mn(e,n.resourceId??zo(r),n.scope??`camp`,t.characterId)>=i}function Ro(e,t){return On(e,t)>=kn(e,t)}function zo(e){if(e.startsWith(`gatherIngredient:`))return e.slice(17);switch(e){case`gatherSticks`:return`stick`;case`gatherStones`:return`stone`;case`gatherFlaxPlants`:return`flaxPlant`;case`gatherFlaxFibers`:return`flaxFiber`;case`gatherSand`:return`sand`;case`gatherWater`:return`water`;case`mineCoal`:return`coal`;case`mineCopper`:return`copper`;case`mineTin`:return`tin`;case`chopTrees`:return`wood`;case`huntSmallAnimals`:return`rabbit`;case`fishRiver`:return`minnow`;default:return`stick`}}function Bo(e,t,n){let r=k(t.actionId);if(!r){ha(e,t.characterId);return}let i=Yi(t);Zi(e,t.characterId,i),ma(e,{...t,phase:`working`,originLocationId:i,targetLocationId:i,locationId:i===`camp`?void 0:i,startedAt:n,endsAt:n+r.durationMs})}function Vo(e,t,n){let r=qi(t,t.loopIndex??0),i=Xi(e,t.characterId),a=oa(i,r);if(a<=0){Bo(e,{...t,targetLocationId:r,locationId:r===`camp`?void 0:r},n);return}ma(e,{...t,phase:`travelingTo`,originLocationId:i,targetLocationId:r,locationId:r===`camp`?void 0:r,startedAt:n,endsAt:n+a})}function Ho(e,t,n,r=ra(t)){let i=Yi(t);ma(e,{...t,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i===`camp`?void 0:i,nextLoopIndex:r,startedAt:n,endsAt:n+oa(i,`camp`)})}function Uo(e,t,n,r){let i=ta(t,n),a=k(i);if(!a){Ho(e,t,r,ra(t));return}ma(e,{...t,actionId:i,phase:`followUp`,originLocationId:Yi(t),targetLocationId:Yi(t),loopIndex:n,startedAt:r,endsAt:r+a.durationMs})}function Wo(e,t,n,r,i=0){let a=Ui(t);if(!a.length||i>=a.length)return!1;let o=aa(n,a),s=a[o];if(s===`butcherFish`||Go(e,t,o,s)||!q(e,s,r,t.characterId)){let n=ia(t,o);return n===o?!1:Wo(e,t,n,r,i+1)}let c=k(s);if(!c)return!1;let l=qi(t,o),u=Xi(e,t.characterId),d=oa(u,l);return ma(e,{...t,actionId:s,phase:d>0?`travelingTo`:`working`,originLocationId:u,targetLocationId:l,locationId:l===`camp`?void 0:l,loopActionIds:a,loopLocationIds:Gi(t,a),loopIndex:o,nextLoopIndex:void 0,followUpActionId:void 0,startedAt:r,endsAt:r+(d||c.durationMs)}),d<=0&&Zi(e,t.characterId,l),!0}function Go(e,t,n,r){let i=Io(e,t,n);return i.mode===`whenInventoryFull`?Ro(e,t.characterId):i.mode===`whenResourceAtLeast`?Lo(e,t,i,r):!1}function Ko(e,t,n,r,i){Object.values(r).some(e=>(e??0)>0)&&on(e,{aggregateKey:`action:${t}:${n}`,text:ao(n,H(e,t)),resources:r,tone:`gain`,now:i,scope:`character`})}function qo(e){return e===`cookRabbitMeat`||e===`cookSquirrelMeat`}function Jo(e,t){let n=Yr(e);return n&&n<=t?n:null}function Yo(e,t,n,r){let i=Object.values(e).reduce((e,t)=>e+(t??0),0),a=Object.values(t).reduce((e,t)=>e+(t??0),0);return On(n,r)>=kn(n,r)||i>0&&a<i}function Xo(e,t,n){return t===`craftLowestTool`?yo(e,n):t}fe.map(e=>e.id);var Zo=1.4,Qo=.8;function $o(e){let t=A.filter(t=>t.weapon&&Ci(e,t.id));return t.sort((e,t)=>cs(t.id)-cs(e.id)),t[0]?.id??null}function es(e){return e?me[e]??`fighter`:`fighter`}function ts(e,t=e.selectedCharacterId){let n=$o(e),r=n?xi(n):null,i=es(n),a=be(i),o=r?.weapon;return{classId:i,classLabel:a.label,weaponId:n,weaponLabel:r?.label??`Unarmed`,damage:o?.damage??Zo,speed:o?.speed??Qo,range:o?.range??a.range,attackRange:ss(o?.range??a.range),maxHp:a.maxHp,maxMana:a.maxMana}}function ns(e,t=e.selectedCharacterId){let n=e.characters.find(e=>e.id===t);if(!n)return Jt();let r=ts(e,t),i=n.combat??Jt(),a=r.maxHp,o=r.maxMana,s=i.maxHp>0?i.hp/i.maxHp:1,c=i.maxMana>0?i.mana/i.maxMana:1;return n.combat={maxHp:a,hp:i.hp<=0?0:us(Math.round(a*s),1,a),maxMana:o,mana:o<=0?0:us(Math.round(o*c),0,o)},n.combat}function rs(e){let t=Zt(),n=e.classProgress;if(n)for(let e of pe)t[e.id]={...t[e.id],...n[e.id]??{}};return e.classProgress=t,t}function is(e,t,n,r,i=Date.now()){let a=Math.max(0,Math.floor(r));if(a<=0)return;let o=e.characters.find(e=>e.id===t);if(!o)return;let s=rs(o)[n];s.totalXp+=a,s.xp=Math.min(bt(nt),s.xp+a),s.level=ls(s.xp),e.updatedAt=i,e.lastSimulatedAt=i}function as(e){let t=bt(e.level),n=e.level>=1e3?t:bt(e.level+1),r=Math.max(0,n-t),i=Math.max(0,Math.min(e.xp-t,r));return{currentLevelXp:t,nextLevelXp:n,xpIntoLevel:i,xpForLevel:r,ratio:r<=0?1:i/r,atCap:e.level>=nt}}function os(e){return Nt(e)}function ss(e){return e===`ranged`?3:e===`focus`?2:1}function cs(e){let t=xi(e)?.weapon;if(!t)return 0;let n=t.range===`ranged`?.35:t.range===`focus`?.2:0;return t.damage*t.speed+n}function ls(e){let t=1;for(;t<1e3&&e>=bt(t+1);)t+=1;return t}function us(e,t,n){return Number.isFinite(e)?Math.min(n,Math.max(t,e)):t}var ds=1e3,fs=120,ps=24,ms=5,hs=22;function gs(e,t=e.selectedCharacterId,n=`ruins`,r=Date.now()){Vs(e);let i=e.characters.find(e=>e.id===t);if(!i||ys(e,t)||Bs(e,t))return!1;let a=Se(n),o=Ds(e,n,r),s=ts(e,t),c=ns(e,t);c.hp<=0&&(c.hp=c.maxHp),c.mana<=0&&c.maxMana>0&&(c.mana=Math.ceil(c.maxMana*.5));let l=Ms(o);return o.units.push({id:`party-${i.id}`,kind:`party`,characterId:i.id,name:i.name,hp:c.hp,maxHp:c.maxHp,mana:c.mana,maxMana:c.maxMana,x:l.x,y:l.y,damage:zs(e,i.id,s.damage),attackRange:s.attackRange,actEveryMs:Rs(s.speed),nextActAt:r+Rs(s.speed),classId:s.classId,weaponId:s.weaponId??void 0}),i.condition=`working`,e.combat.selectedLocationId=n,o.message=`${i.name} enters ${a.label}.`,Hs(e,o.message,`muted`,r),Ts(o,r),Us(e,r),!0}function _s(e,t=e.selectedCharacterId,n=Date.now()){Vs(e);let r=e.combat.encounter;if(!r)return!1;let i=bs(e,t);if(!i)return!1;As(e,i),r.units=r.units.filter(e=>e.id!==i.id);let a=e.characters.find(e=>e.id===t);return a&&!Bs(e,t)&&(a.condition=`resting`),Hs(e,`${i.name} withdraws from The Ruins.`,`warning`,n),xs(r).length?(r.updatedAt=n,r.message=`${i.name} withdraws.`):e.combat.encounter=null,Us(e,n),!0}function vs(e,t=Date.now()){Vs(e);let n=e.combat.encounter;if(!n)return;let r=0;for(;n&&n.updatedAt+ds<=t&&r<fs;){let t=n.updatedAt+ds;Cs(e,n,t),n=e.combat.encounter,n&&(n.updatedAt=t),r+=1}r>0&&Us(e,Math.min(t,e.combat.encounter?.updatedAt??t))}function ys(e,t){return!!bs(e,t)}function bs(e,t){return e.combat?.encounter?.units.find(e=>e.kind===`party`&&e.characterId===t)??null}function xs(e){return e?.units.filter(e=>e.kind===`party`&&e.hp>0)??[]}function Ss(e){return e?.units.filter(e=>e.kind===`enemy`&&e.hp>0)??[]}function Cs(e,t,n){if(!xs(t).length){Os(e,t,n);return}if(!Ss(t).length){Ts(t,n);return}let r=t.units.filter(e=>e.hp>0&&e.nextActAt<=n).sort((e,t)=>e.nextActAt-t.nextActAt);for(let i of r){if(i.hp<=0||e.combat.encounter!==t)continue;let r=i.kind===`party`?Ss(t):xs(t);if(!r.length)continue;let a=Fs(i,r);a&&(Is(i,a)<=i.attackRange?ws(e,t,i,a,n):(js(t,i,a),t.message=`${i.name} moves closer.`),i.nextActAt=n+Ls(i))}if(t.units=t.units.filter(e=>e.kind===`party`||e.hp>0),ks(e,t),!xs(t).length){Os(e,t,n);return}Ss(t).length||(t.wave+=1,Ts(t,n))}function ws(e,t,n,r,i){let a=Math.max(1,Math.round(n.damage));if(r.hp=Math.max(0,r.hp-a),t.message=`${n.name} hits ${r.name} for ${a}.`,n.kind===`party`&&n.characterId&&n.classId&&is(e,n.characterId,n.classId,r.hp<=0?ms+hs:ms,i),r.kind===`enemy`&&r.hp<=0){t.defeatedEnemies+=1,Hs(e,`${n.name} defeats ${r.name}.`,`gain`,i);return}r.kind===`party`&&r.hp<=0&&(As(e,r),Hs(e,`${r.name} is forced back from the fight.`,`warning`,i))}function Ts(e,t){if(Ss(e).length||!xs(e).length)return;let n=Math.min(3,1+Math.floor((e.wave-1)/2));for(let r=0;r<n;r+=1)e.units.push(Es(e,r,t));e.message=`Goblin wave ${e.wave} enters The Ruins.`,e.updatedAt=t}function Es(e,t,n){let r=Se(e.locationId),i=xe(`goblin`),a=Ns(e,t);return{id:`goblin-${e.wave}-${t+1}-${n}`,kind:`enemy`,enemyId:i.id,name:i.label,hp:i.maxHp,maxHp:i.maxHp,mana:i.maxMana,maxMana:i.maxMana,x:Math.min(r.gridWidth-1,a.x),y:Math.min(r.gridHeight-1,a.y),damage:i.damage,attackRange:i.attackRange,actEveryMs:i.actEveryMs,nextActAt:n+i.actEveryMs}}function Ds(e,t,n){return e.combat.encounter?.locationId===t||(e.combat.encounter={id:`combat-${t}-${n}`,locationId:t,startedAt:n,updatedAt:n,wave:1,defeatedEnemies:0,units:[],message:`The Ruins are quiet.`}),e.combat.encounter}function Os(e,t,n){ks(e,t);for(let n of t.units.filter(e=>e.kind===`party`)){let t=n.characterId?e.characters.find(e=>e.id===n.characterId):null;t&&!Bs(e,t.id)&&(t.condition=`resting`)}Hs(e,`The party withdraws from The Ruins to recover.`,`warning`,n),e.combat.encounter=null,Us(e,n)}function ks(e,t){for(let n of t.units)n.kind===`party`&&As(e,n)}function As(e,t){if(!t.characterId)return;let n=e.characters.find(e=>e.id===t.characterId);n&&(n.combat={hp:t.hp,maxHp:t.maxHp,mana:t.mana,maxMana:t.maxMana})}function js(e,t,n){let r=Se(e.locationId),i=new Set(e.units.filter(e=>e.hp>0&&e.id!==t.id).map(e=>`${e.x},${e.y}`)),a=Math.sign(n.x-t.x),o=Math.sign(n.y-t.y),s=[{x:t.x+a,y:t.y},{x:t.x,y:t.y+o},{x:t.x,y:t.y-o},{x:t.x-a,y:t.y}].filter(e=>e.x>=0&&e.y>=0&&e.x<r.gridWidth&&e.y<r.gridHeight&&!i.has(`${e.x},${e.y}`)).sort((e,t)=>Is(e,n)-Is(t,n))[0];s&&(t.x=s.x,t.y=s.y)}function Ms(e){let t=Se(e.locationId);return Ps(e,[Math.floor(t.gridHeight/2),1,t.gridHeight-2,0,t.gridHeight-1].map(e=>({x:0,y:e})))??{x:0,y:0}}function Ns(e,t){let n=Se(e.locationId),r=[Math.floor(n.gridHeight/2),1,n.gridHeight-2,0,n.gridHeight-1].flatMap(e=>[{x:n.gridWidth-1,y:e},{x:n.gridWidth-2,y:e}]);return Ps(e,r.slice(t).concat(r.slice(0,t)))??{x:n.gridWidth-1,y:Math.floor(n.gridHeight/2)}}function Ps(e,t){let n=new Set(e.units.filter(e=>e.hp>0).map(e=>`${e.x},${e.y}`));return t.find(e=>!n.has(`${e.x},${e.y}`))??null}function Fs(e,t){return t.slice().sort((t,n)=>Is(e,t)-Is(e,n))[0]??null}function Is(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function Ls(e){return Math.max(500,e.actEveryMs)}function Rs(e){return Math.max(900,Math.round(2400/Math.max(.4,e)))}function zs(e,t,n){let r=e.characters.find(e=>e.id===t);if(!r)return n;let i=ts(e,t).classId,a=r.classProgress?.[i]?.level??1;return n+Math.max(0,a-1)*.08}function Bs(e,t){return e.currentActions.some(e=>e.characterId===t)}function Vs(e){e.combat??=Qt()}function Hs(e,t,n,r){e.combat.log=[{id:`${r}-${e.combat.log.length}-${t.slice(0,12)}`,time:r,text:t,tone:n},...e.combat.log].slice(0,ps)}function Us(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function Ws(e,t,n=Date.now()){let r=Oe(t);return!r||!Xs(e,r,n)?!1:(xn(e,ke(r)),e.cooking.queue.push({id:`${n}-${r.id}-${e.cooking.queue.length+1}`,recipeId:r.id,stationId:r.station,queuedAt:n,startedAt:null,endsAt:null}),oc(e,r.id),tc(e,n),cc(e,n),!0)}function Gs(e,t=Date.now()){tc(e,t);let n=0;for(;n<100;){let r=Ks(e);if(!r)break;let i=Yr(e);if(!i||i<=t){rc(e,t);break}if(!r.endsAt||r.endsAt>t)break;nc(e,r,r.endsAt),n+=1,tc(e,r.endsAt)}}function Ks(e){return e.cooking.queue.find(e=>e.startedAt!==null&&e.endsAt!==null)??null}function qs(e,t=Date.now()){if(e.startedAt===null||e.endsAt===null)return 0;let n=e.endsAt-e.startedAt;return n<=0?1:Math.max(0,Math.min(1,(t-e.startedAt)/n))}function Js(e){return[...we].sort((e,t)=>e.levelRequirement-t.levelRequirement||e.name.localeCompare(t.name))}function Ys(e){let t=we.filter(t=>sc(e,t)).map(e=>e.id);for(let n of t)oc(e,n);return t}function Xs(e,t,n=Date.now()){let r=typeof t==`string`?Oe(t):t;return!!(r&&!Zs(e,r,n))}function Zs(e,t,n=Date.now()){let r=typeof t==`string`?Oe(t):t;if(!r)return`Unknown recipe`;if(e.skills.cooking.level<r.levelRequirement)return`Needs Cooking Lv ${r.levelRequirement}`;if(!L(e,n))return`Needs Lit Campfire`;if(e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`)return`Needs cook at camp`;let i=ic(e,r);return i.length?`Needs ${i.join(`, `)}`:``}function Qs(e){let t=et(Ae(e));return Object.entries(t).map(([e,t])=>`${t} ${N(e)}`).join(`, `)}function $s(e){return e.ingredients.map(e=>{if(!e.resourceId)return e.category??`Ingredient`;let t=N(e.resourceId);return e.consumed===!1?`${e.amount} ${t} available`:`${e.amount} ${t}`}).join(`, `)}function ec(e,t,n=Date.now()){let r=De(t);return r?r.id===`campfire`?L(e,n)?`Campfire lit`:`Needs lit campfire`:`Station unavailable`:`Unknown station`}function tc(e,t){if(Ys(e),Ks(e)||!L(e,t))return;let n=e.cooking.queue.find(e=>e.startedAt===null&&e.endsAt===null);if(!n)return;let r=Oe(n.recipeId);if(!r){e.cooking.queue=e.cooking.queue.filter(e=>e.id!==n.id);return}n.startedAt=t,n.endsAt=t+r.cookTimeMs,cc(e,t)}function nc(e,t,n){let r=Oe(t.recipeId);if(e.cooking.queue=e.cooking.queue.filter(e=>e.id!==t.id),!r){cc(e,n);return}let i=et(Ae(r));Sn(e,i),Ot(e,r.xpReward,n),e.cooking.completedRecipeCounts[r.id]=(e.cooking.completedRecipeCounts[r.id]??0)+1,oc(e,r.id),on(e,{aggregateKey:`cook:${r.id}`,text:`Cameron cooked ${r.name.toLowerCase()}`,resources:i,tone:`craft`,now:n,scope:`camp`}),cc(e,n)}function rc(e,t){let n=Ks(e);n&&(n.startedAt=null,n.endsAt=null,P(e,`Cooking waits for a lit campfire.`,`warning`,t,`camp`),cc(e,t))}function ic(e,t){let n=ke(t),r=[];if(!bn(e,n)){let t=ac(e,n);t&&r.push(t)}for(let n of t.ingredients)!n.resourceId||n.consumed!==!1||(e.inventory[n.resourceId]??0)<n.amount&&r.push(`${n.amount} ${N(n.resourceId)}`);return r}function ac(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-(e.inventory[t]??0));a>0&&(n[t]=a)}return Object.keys(n).length?F(n):``}function oc(e,t){e.cooking.knownRecipeIds.includes(t)||e.cooking.knownRecipeIds.push(t)}function sc(e,t){return e.cooking.knownRecipeIds.includes(t.id)?!0:e.skills.cooking.level<t.levelRequirement?!1:t.ingredients.some(t=>!!(t.resourceId&&e.seenResources.includes(t.resourceId)))}function cc(e,t){e.updatedAt=t}var lc=``+new URL(`aloe-leaves-icon-BC3NZCE_.png`,import.meta.url).href,uc=``+new URL(`bone-icon-DsPaT320.png`,import.meta.url).href,dc=``+new URL(`brook-stickleback-icon-CwY54faB.png`,import.meta.url).href,fc=``+new URL(`basket-background-1-border-1-DAqcyfrl.png`,import.meta.url).href,pc=``+new URL(`cameron-portrait-PN1aTLTX.png`,import.meta.url).href,mc=``+new URL(`beach-location-icon-P20tuNyE.png`,import.meta.url).href,hc=``+new URL(`camp-location-icon-CDZbDMog.png`,import.meta.url).href,gc=``+new URL(`campfire-2x2-Bq-ELFVu.png`,import.meta.url).href,_c=``+new URL(`campfire-unlit-2x2-HI8ea9KO.png`,import.meta.url).href,vc=``+new URL(`carrot-icon-M4uRJGA5.png`,import.meta.url).href,yc=``+new URL(`chamomile-icon-BiiYA-tr.png`,import.meta.url).href,bc=``+new URL(`clover-icon-B_7BApnL.png`,import.meta.url).href,xc=``+new URL(`coal-icon-CPItI7lv.png`,import.meta.url).href,Sc=``+new URL(`copper-icon-Dl9RQPBM.png`,import.meta.url).href,Cc=``+new URL(`crystal-bloom-icon-dnhLq2ds.png`,import.meta.url).href,wc=``+new URL(`craft-materials-bundle-button-D-JGRyoh.png`,import.meta.url).href,Tc=``+new URL(`dandelion-icon-CFJR6jpX.png`,import.meta.url).href,Ec=``+new URL(`earthroot-icon-CeloLBAJ.png`,import.meta.url).href,Dc=``+new URL(`fire-blossom-icon-CUDE9oL_.png`,import.meta.url).href,Oc=``+new URL(`fish-filet-icon-BHEr_iIj.png`,import.meta.url).href,kc=``+new URL(`fishing-pole-background-1-border-1-BKeUI82e.png`,import.meta.url).href,Ac=``+new URL(`flax-fiber-icon-xz-yYl-m.png`,import.meta.url).href,jc=``+new URL(`flax-plant-icon-B_IgBTuE.png`,import.meta.url).href,Mc=``+new URL(`forest-location-icon-BfXbpp8B.png`,import.meta.url).href,Nc=``+new URL(`desert-location-icon-Ce8Sec_i.png`,import.meta.url).href,Pc=``+new URL(`fishing-skill-banner-CcVZPg3D.png`,import.meta.url).href,Fc=``+new URL(`foraging-skill-banner-BeZiWPXh.png`,import.meta.url).href,Ic=``+new URL(`mining-skill-banner-D1Ad8XbJ.png`,import.meta.url).href,Lc=``+new URL(`berry-icon-DEz1wEqt.png`,import.meta.url).href,Rc=``+new URL(`blueberry-icon-BzI1Ku5H.png`,import.meta.url).href,zc=``+new URL(`elder-flowers-icon-D2cV17xG.png`,import.meta.url).href,Bc=``+new URL(`fennel-icon-Dj8cVoNJ.png`,import.meta.url).href,Vc=``+new URL(`hearthcap-icon-DhCzm8_Q.png`,import.meta.url).href,Hc=``+new URL(`hide-icon-BWeGfM2U.png`,import.meta.url).href,Uc=``+new URL(`leather-backpack-equipped-slot-DhoXwslM.png`,import.meta.url).href,Wc=``+new URL(`lavender-icon-W4y_Mfy2.png`,import.meta.url).href,Gc=``+new URL(`marsh-iris-icon-BZExTePG.png`,import.meta.url).href,Kc=``+new URL(`meadow-location-icon-v2-tDy1g2J_.png`,import.meta.url).href,qc=``+new URL(`mine-location-icon-CkSWnT7i.png`,import.meta.url).href,Jc=``+new URL(`mint-icon-D087DAdu.png`,import.meta.url).href,Yc=``+new URL(`minnow-icon-ANpglcnc.png`,import.meta.url).href,Xc=``+new URL(`mudskipper-icon-_bxkPxea.png`,import.meta.url).href,Zc=``+new URL(`mushroom-icon-B9zVCy80.png`,import.meta.url).href,Qc=``+new URL(`palecap-flowers-icon-BMBJ8DXK.png`,import.meta.url).href,$c=``+new URL(`pebble-perch-icon-CHh-9clF.png`,import.meta.url).href,el=``+new URL(`plantain-leaf-icon-CIfMOgsh.png`,import.meta.url).href,tl=``+new URL(`rabbit-icon-DGNcKYc7.png`,import.meta.url).href,nl=``+new URL(`rabbit-meat-icon-Bx0Odi_j.png`,import.meta.url).href,rl=``+new URL(`river-location-icon-v2-DPChTXcL.png`,import.meta.url).href,il=``+new URL(`rose-hips-icon-CV8z7OyS.png`,import.meta.url).href,al=``+new URL(`sorrel-icon-DKy8ofYd.png`,import.meta.url).href,ol=``+new URL(`squirrel-icon-BM6RAXNK.png`,import.meta.url).href,sl=``+new URL(`squirrel-meat-icon-hPhcJQOd.png`,import.meta.url).href,cl=``+new URL(`stick-icon-CNlEB9Op.png`,import.meta.url).href,ll=``+new URL(`stone-hatchet-background-1-border-1-CZNIcvIL.png`,import.meta.url).href,ul=``+new URL(`stone-knife-background-1-border-1-BKz_ubCn.png`,import.meta.url).href,dl=``+new URL(`stone-pick-axe-background-1-border-1-DOAIoZ7O.png`,import.meta.url).href,fl=``+new URL(`stone-spear-background-1-border-1-wlFNpfhc.png`,import.meta.url).href,pl=``+new URL(`stone-icon-BR49oRR6.png`,import.meta.url).href,ml=``+new URL(`stone-loach-icon-4ySXaf0_.png`,import.meta.url).href,hl=``+new URL(`stone-furnace-2x2-54_TDZso.png`,import.meta.url).href,gl=``+new URL(`short-bow-background-1-border-1-CMIlkEMG.png`,import.meta.url).href,_l=``+new URL(`strawberry-icon-DDMbCWsT.png`,import.meta.url).href,vl=``+new URL(`sunbloom-petals-icon-GfaNp-0q.png`,import.meta.url).href,yl=``+new URL(`sunheart-tuber-icon-BjXf7_6A.png`,import.meta.url).href,bl=``+new URL(`tin-icon-B9xoPCj0.png`,import.meta.url).href,xl=``+new URL(`hide-tent-2x2-B-STXQiW.png`,import.meta.url).href,Sl=``+new URL(`tanning-rack-2x2-DotflpMM.png`,import.meta.url).href,Cl=``+new URL(`trillium-blossoms-icon-DX9BmT8e.png`,import.meta.url).href,wl=``+new URL(`water-lilies-icon-DaKvHiSe.png`,import.meta.url).href,Tl=``+new URL(`wooden-bowl-background-1-border-1-C2wDRzy6.png`,import.meta.url).href,El=``+new URL(`wooden-club-background-1-border-1-zKAKo9tf.png`,import.meta.url).href,Dl=``+new URL(`wooden-spoon-background-1-border-1-B1C5KdJm.png`,import.meta.url).href,Ol=``+new URL(`wooden-sword-background-1-border-1-BPis69Er.png`,import.meta.url).href,kl=``+new URL(`wooden-totem-background-1-border-1-Dk-pmYjA.png`,import.meta.url).href,Al=``+new URL(`wooden-two-handed-club-background-1-border-1-Dyis-qJI.png`,import.meta.url).href,jl=``+new URL(`wooden-two-handed-sword-background-1-border-1-DVH5QhM0.png`,import.meta.url).href,Ml=``+new URL(`wild-garlic-icon-CYYjAsti.png`,import.meta.url).href,Nl=``+new URL(`wild-onion-icon-CzFQCrOc.png`,import.meta.url).href,Pl=``+new URL(`wood-icon-CxwJtOlQ.png`,import.meta.url).href,Fl=``+new URL(`wood-violets-icon-DueTDCEb.png`,import.meta.url).href,Il=``+new URL(`yarrow-icon-CgaSHIG2.png`,import.meta.url).href;function Ll(e,t,n=Date.now()){Xr(e,n);let r=Fe.find(e=>e.id===t),i=t===`campfire`?L(e,n):t===`hideTent`?!1:e.buildings[t];if(!r||i||e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`||!Bi(e,t,n)||!bn(e,r.recipe))return!1;if(xn(e,r.recipe),t===`campfire`)qr(e,n),hn(e,t,1),P(e,`Cameron builds a campfire and brings it to flame.`,`craft`,n);else if(t===`hideTent`){let r=mn(e,t);e.buildings[t]=!0,P(e,`Cameron raises hide tent ${r}.`,`craft`,n),vn(e,n)}else e.buildings[t]=!0,hn(e,t,1),P(e,`Cameron builds a ${r.label}.`,`craft`,n);return Et(e,t,n),Rl(e,n),!0}function J(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-e.inventory[t]);a>0&&(n[t]=a)}return F(n)}function Rl(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function zl(e){let t=Je(e)?.nutrition;return{hunger:Math.max(0,Math.floor(t?.hunger??0))}}function Bl(e,t){return!Vl(e,t)}function Vl(e,t){if(zl(t).hunger<=0)return`Not edible`;if(!bn(e,{[t]:1}))return`Needs ${N(t)}`;if(Wl(t)&&!bn(e,{woodenSpoon:1}))return`Needs Wooden Spoon`;let n=e.characters.find(t=>t.id===e.selectedCharacterId);return n?n.needs.hunger>=n.needs.maxHunger?`Hunger full`:``:`No character`}function Hl(e,t,n=Date.now()){if(!Bl(e,t))return!1;let r=e.characters.find(t=>t.id===e.selectedCharacterId);if(!r)return!1;let i=zl(t);return xn(e,{[t]:1}),r.needs.hunger=Math.min(r.needs.maxHunger,r.needs.hunger+i.hunger),P(e,`${r.name} eats ${N(t).toLowerCase()} and restores ${i.hunger} hunger.`,`gain`,n,`camp`),e.updatedAt=n,!0}function Ul(e){return Ke(e)}function Wl(e){return Je(e)?.cooking?.tags.includes(`stew`)??!1}var Gl={cameron:pc},Kl=[{id:`smart`,label:`Smart default`},{id:`afterCompletion`,label:`After one completion`},{id:`whenInventoryFull`,label:`When pack is full`},{id:`whenResourceAtLeast`,label:`When stock reaches`},{id:`whenCannotStart`,label:`When blocked`},{id:`manual`,label:`Stay on this step`}],ql=[`herb`,`flower`,`berry`,`fruit`,`fungal`,`root`,`vegetable`,`staple`,`seasoning`],Jl=new Set([`bean`,`grain`,`nut`,`pod`,`succulent`,`thorn`,`tuber`]),Yl={resources:`resources-background-1-border-1.png`,herb:`herb-background-1-border-1.png`,flower:`flower-background-1-border-1.png`,berries:`berries-background-1-border-1.png`,fruit:`fruit-background-1-border-1.png`,fungal:`fungal-background-1-border-1.png`,roots:`roots-background-1-border-1.png`,vegetables:`vegetables-background-1-border-1.png`,staples:`staples-background-1-border-1.png`,seasonings:`seasonings-background-1-border-1.png`},Xl=new Map(Object.entries(Object.assign({"../assets/items/resources-background-1-border-1.png":t,"../assets/items/roots-background-1-border-1.png":s,"../assets/items/seasonings-background-1-border-1.png":f,"../assets/items/staples-background-1-border-1.png":u,"../assets/items/vegetables-background-1-border-1.png":m})).map(([e,t])=>[Xf(e),t])),Zl={foraging:Fc,mining:Ic,fishing:Pc},Ql=[{id:`foraging`,label:`Forage`,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,`gatherFlaxFibers`,`gatherMeadowIngredients`,`gatherForestIngredients`,`gatherRiverIngredients`,`gatherMineIngredients`,`gatherDesertIngredients`,...n,...h,`gatherSand`,`gatherWater`]},{id:`fishing`,label:`Fishing`,actionIds:[`fishRiver`]},{id:`mining`,label:`Mining`,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]},{id:`hunting`,label:`Hunting`,actionIds:[`huntSmallAnimals`]},{id:`woodcutting`,label:`Woodcutting`,actionIds:[`chopTrees`]},{id:`crafting`,label:`Crafting`,actionIds:[`craftLowestTool`,`craftBasket`,`craftWoodenSpoon`,`craftFishingPole`,`craftWoodenBowl`,`craftStoneKnife`,`craftStoneAxe`,`craftStonePickAxe`,`craftStoneSpear`,`craftWoodenClub`,`craftWoodenTwoHandedClub`,`craftWoodenSword`,`craftWoodenTwoHandedSword`,`craftShortBow`,`craftWoodenTotem`]},{id:`smithing`,label:`Smithing`,actionIds:[...ee]},{id:`alchemy`,label:`Alchemy`,actionIds:[...v]},{id:`textiles`,label:`Tailoring`,actionIds:[...re]},{id:`butchering`,label:`Butchering`,actionIds:[`butcherFish`,`butcherRabbit`,`butcherSquirrel`]},{id:`cooking`,label:`Cooking`,actionIds:[]},{id:`leatherworking`,label:`Leatherworking`,actionIds:[`tanHide`,`craftLeatherBackpack`]}],$l=[{id:`gather`,label:`Gather`,filterIds:[`foraging`,`mining`,`fishing`,`hunting`,`woodcutting`]},{id:`processing`,label:`Processing`,filterIds:[`crafting`,`smithing`,`alchemy`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{id:`camp`,label:`Camp`,filterIds:[]}],eu={crafting:`crafting`,smithing:`smithing`,alchemy:`alchemy`,textiles:`textiles`,foraging:`foraging`,mining:`mining`,fishing:`fishing`,woodcutting:`woodcutting`,hunting:`hunting`,butchering:`butchering`,cooking:`cooking`,leatherworking:`leatherworking`},tu={butchering:`butcherRabbit`},nu=Ql.flatMap(e=>{let t=eu[e.id],n=tu[t]??e.actionIds?.[0];return n?[{skillId:t,actionId:n}]:[]}),ru={foraging:{shortLabel:`Fg`,accent:`#7ba867`,shade:`rgba(123, 168, 103, 0.38)`},mining:{shortLabel:`Mi`,accent:`#9ca3af`,shade:`rgba(104, 116, 139, 0.42)`},fishing:{shortLabel:`Fi`,accent:`#73a8a0`,shade:`rgba(72, 139, 168, 0.38)`},woodcutting:{shortLabel:`Wd`,accent:`#b88955`,shade:`rgba(124, 91, 59, 0.44)`},hunting:{shortLabel:`Hu`,accent:`#d6a451`,shade:`rgba(159, 89, 63, 0.36)`},crafting:{shortLabel:`Cr`,accent:`#c7b27a`,shade:`rgba(199, 178, 122, 0.34)`},smithing:{shortLabel:`Sm`,accent:`#d08b6a`,shade:`rgba(145, 76, 60, 0.42)`},alchemy:{shortLabel:`Al`,accent:`#9bc96c`,shade:`rgba(82, 123, 82, 0.4)`},textiles:{shortLabel:`Ta`,accent:`#caa0c8`,shade:`rgba(122, 85, 128, 0.36)`},butchering:{shortLabel:`Bu`,accent:`#c96458`,shade:`rgba(135, 55, 50, 0.42)`},cooking:{shortLabel:`Co`,accent:`#e0b05e`,shade:`rgba(156, 94, 45, 0.38)`},leatherworking:{shortLabel:`Le`,accent:`#a8784f`,shade:`rgba(109, 72, 48, 0.42)`},construction:{shortLabel:`Cn`,accent:`#b7a781`,shade:`rgba(112, 103, 79, 0.38)`},agility:{shortLabel:`Ag`,accent:`#8fc4b7`,shade:`rgba(81, 129, 120, 0.38)`}},iu=[{label:`Gather`,skillIds:[`foraging`,`mining`,`fishing`,`woodcutting`,`hunting`]},{label:`Process`,skillIds:[`crafting`,`smithing`,`alchemy`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{label:`Combat`,skillIds:[]},{label:`Other`,skillIds:[`construction`,`agility`]}],au={copper:`Copper Bar`,bronze:`Bronze Bar`},ou=[{id:`tool`,label:`Tool`},{id:`weapon`,label:`Weapon`},{id:`armor`,label:`Armor`}],su=[{id:`brewing`,label:`Brewing`,emptyLabel:`Brewing`},{id:`transmutation`,label:`Transmute`,emptyLabel:`Transmutation`},{id:`decomposition`,label:`Decomp`,emptyLabel:`Decomposition`}],cu={vessel:`Glassware`,potion:`Potions`},lu={primitive:`Primitive`},uu={primitive:`Wood, stone, fiber`},du=[{id:`tool`,label:`Tools`},{id:`weapon`,label:`Weapons`}],fu={craftLowestTool:{material:`primitive`,productCategory:`tool`},craftBasket:{material:`primitive`,productCategory:`tool`},craftWoodenSpoon:{material:`primitive`,productCategory:`tool`},craftFishingPole:{material:`primitive`,productCategory:`tool`},craftWoodenBowl:{material:`primitive`,productCategory:`tool`},craftStoneKnife:{material:`primitive`,productCategory:`tool`},craftStoneAxe:{material:`primitive`,productCategory:`tool`},craftStonePickAxe:{material:`primitive`,productCategory:`tool`},craftStoneSpear:{material:`primitive`,productCategory:`weapon`},craftWoodenClub:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedClub:{material:`primitive`,productCategory:`weapon`},craftWoodenSword:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedSword:{material:`primitive`,productCategory:`weapon`},craftShortBow:{material:`primitive`,productCategory:`weapon`},craftWoodenTotem:{material:`primitive`,productCategory:`weapon`}},Y=[{id:`meadow`,label:`Meadow`,iconUrl:Kc,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,...o(`meadow`)]},{id:`river`,label:`River`,iconUrl:rl,actionIds:[`gatherStones`,`gatherFlaxFibers`,`gatherWater`,...o(`river`)]},{id:`beach`,label:`Beach`,iconUrl:mc,actionIds:[...o(`beach`)]},{id:`forest`,label:`Forest`,iconUrl:Mc,actionIds:[...o(`forest`)]},{id:`mine`,label:`Mine`,iconUrl:qc,actionIds:[...o(`mine`)]},{id:`desert`,label:`Desert`,iconUrl:Nc,actionIds:[`gatherSand`,...o(`desert`)]}],pu={label:`Camp`,iconUrl:hc},mu=24,hu=[`fishingPole`,`stoneKnife`,`copperKnife`,`bronzeKnife`,`stoneSpear`,`woodenClub`,`woodenTwoHandedClub`,`woodenSword`,`woodenTwoHandedSword`,`shortBow`,`woodenTotem`,`stoneAxe`,`copperHatchet`,`bronzeHatchet`,`stonePickAxe`,`copperPickaxe`,`bronzePickaxe`,`basket`,`leatherBackpack`,null,null,null,null,null],gu=[{label:`Armor`,slots:[`Head`,`Face`,`Neck`,`Shoulders`,`Chest`,`Backpack`,`Cape`,`Arms`,`Hands`,`Waist`,`Legs`,`Feet`]},{label:`Accessories`,slots:[`Ring Slot 1`,`Ring Slot 2`,`Toe Ring 1`,`Toe Ring 2`,`Bracelet 1`,`Bracelet 2`,`Earring 1`,`Earring 2`]},{label:`Held Gear`,slots:[`Main Hand`,`Off Hand`,`Quiver`,`Ammo Belt`]}],_u={basket:fc,fishingPole:kc,leatherBackpack:Uc,stoneKnife:ul,stoneAxe:ll,stonePickAxe:dl,stoneSpear:fl,woodenClub:El,woodenTwoHandedClub:Al,woodenSword:Ol,woodenTwoHandedSword:jl,shortBow:gl,woodenTotem:kl},vu={basket:`Basket`,fishingPole:`Pole`,leatherBackpack:`Backpack`,stoneKnife:`Knife`,stoneAxe:`Hatchet`,stonePickAxe:`Pick`,stoneSpear:`Spear`,woodenClub:`Club`,woodenTwoHandedClub:`2H Club`,woodenSword:`Sword`,woodenTwoHandedSword:`2H Sword`,shortBow:`Bow`,woodenTotem:`Totem`},yu={aloeLeaves:lc,blueberries:Rc,bone:uc,brookStickleback:dc,brookSticklebackFilet:Oc,coal:xc,copper:Sc,crystalBlooms:Cc,minnowFilet:Oc,mudskipperFilet:Oc,pebblePerchFilet:Oc,stoneLoachFilet:Oc,flaxFiber:Ac,flaxPlant:jc,chamomile:yc,clover:bc,dandelionGreens:Tc,dirtyBowl:Pl,earthroot:Ec,elderflowers:zc,fennel:Bc,fireBlossom:Dc,hearthcap:Vc,hide:Hc,lavender:Wc,marshIris:Gc,meadowStew:Zc,minnow:Yc,mint:Jc,mudskipper:Xc,palecapFlowers:Qc,pebblePerch:$c,plantainLeaf:el,rabbit:tl,rabbitMeat:nl,rabbitStew:tl,roseHips:il,rootStew:Zc,sorrel:al,squirrelHerbStew:ol,squirrel:ol,squirrelMeat:sl,strawberries:_l,sunbloomPetals:vl,sunrootTubers:yl,stick:cl,stone:pl,stoneLoach:ml,tin:bl,trilliumBlossoms:Cl,water:rl,waterLilies:wl,wildCarrot:vc,wildGarlic:Ml,wildGarlicRabbitStew:tl,wildOnion:Nl,woodViolets:Fl,yarrow:Il,woodenBowl:Tl,woodenSpoon:Dl,wood:Pl},bu={basket:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+5 lb carry capacity`},{label:`Capacity`,value:`15 lb equipped`}],leatherBackpack:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+15 lb carry capacity`},{label:`Capacity`,value:`25 lb equipped`}],fishingPole:[{label:`Slot`,value:`Fishing tool`},{label:`Effect`,value:`Fishing unlocked`},{label:`Use`,value:`River and beach fishing`}],stoneKnife:[{label:`Slot`,value:`Butchering weapon`},{label:`Unlocks`,value:`Hide and bone recovery`},{label:`Use`,value:`Butchering and combat`}],stoneAxe:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Chop Trees unlocked`},{label:`Wood yield`,value:`2-4`}],stonePickAxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Future mining work`},{label:`Use`,value:`Breaking stone`}],stoneSpear:[{label:`Slot`,value:`Two-handed weapon`},{label:`Effect`,value:`Hunt Small Animals unlocked`},{label:`Targets`,value:`Rabbit, Squirrel`}],copperPickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Mining upgrade`},{label:`Durability`,value:`2x stone`}],copperHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Woodcutting upgrade`},{label:`Durability`,value:`Better than stone`}],copperKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Cleaner butchering`},{label:`Durability`,value:`Better than stone`}],bronzePickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Best early mining`},{label:`Durability`,value:`Better than copper`}],bronzeHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Best early chopping`},{label:`Durability`,value:`Better than copper`}],bronzeKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Best early butchering`},{label:`Durability`,value:`Better than copper`}]};function xu(e){let t=A.find(t=>t.id===e),n=bu[e]??[];return t?.weapon?[{label:`Slot`,value:`${t.weapon.hands}H ${Su(t.weapon.range)} weapon`},{label:`Power`,value:wu(t.weapon.damage)},{label:`Speed`,value:`${wu(t.weapon.speed)}x`},{label:`Tier`,value:Cu(t.tier)},...n.filter(e=>e.label!==`Slot`)]:n}function Su(e){switch(e){case`ranged`:return`ranged`;case`focus`:return`focus`;case`melee`:return`melee`}}function Cu(e){return e[0].toUpperCase()+e.slice(1)}function wu(e){return Number.isInteger(e)?`${e}`:e.toFixed(1)}function Tu(e,t){let n=`gather`,r=`foraging`,i=`meadow`,a=`inventory`,o=`primitive`,s=`copper`,c=`brewing`,l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,_=null,v=null,y=null,b=!1,x=null,S=0,ee=null,C=null;return e.addEventListener(`change`,e=>{let n=e.target,r=ee;if(!(n instanceof HTMLInputElement||n instanceof HTMLSelectElement)||!r)return;let i=n.dataset.loopId,a=n.dataset.loopField;if(!i||!a)return;let o=t.getNow(),s=Nf(n.dataset.id,S),c=!1;a===`name`&&(c=Da(r,i,n.value,o)),a===`step-location`&&ep(n.value)&&(c=Aa(r,i,s,n.value,o)),a===`advance-mode`&&Zf(n.value)&&(c=Oa(r,i,s,If(r,i,s,n.value),o)),a===`advance-resource`&&$f(n.value)&&(c=Oa(r,i,s,{resourceId:n.value},o)),a===`advance-scope`&&Qf(n.value)&&(c=Oa(r,i,s,{scope:n.value},o)),a===`advance-amount`&&(c=Oa(r,i,s,{amount:Number(n.value)},o)),c&&(x=i,S=s,t.persist(),t.requestRender())}),e.addEventListener(`keydown`,e=>{if(e.key!==`Enter`&&e.key!==` `)return;let t=e.target;if(t.closest(`button`))return;let n=t.closest(`[role="button"][data-command]`);n&&(e.preventDefault(),n.click())}),e.addEventListener(`click`,e=>{let C=e.target,w=C.closest(`[data-command]`);if(!w||w instanceof HTMLButtonElement&&w.disabled||w.dataset.disabled===`true`){(v||y)&&!C.closest(`.loop-location-picker`)&&!C.closest(`.loop-skill-picker`)&&(v=null,y=null,t.requestRender()),b&&!C.closest(`.current-action-location-picker`)&&(b=!1,t.requestRender());return}let T=w.dataset.command,E=w.dataset.id,D=ee;if(!D)return;let te=T===`toggle-loop-location-menu`||T===`set-loop-step-location`,ne=T===`toggle-loop-skill-menu`||T===`set-loop-step-skill`,re=T===`toggle-current-action-location-menu`||T===`set-current-action-location`;if(te||(v=null),ne||(y=null),re||(b=!1),T===`set-test-reward-multiplier`&&(E===`10`||E===`100`)){t.setTestRewardMultiplier(Number(E)),t.requestRender();return}if(T===`set-action-category`&&Of(E)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,n=E;let e=wf(n);e.length&&!e.some(e=>e.id===r)&&(r=e[0]?.id??r),t.requestRender();return}if(T===`set-action-filter`&&Mf(E)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,r=E,n=Tf(E)??n,t.requestRender();return}if(T===`select-smithing-material`&&kf(E)){s=E,t.requestRender();return}if(T===`select-alchemy-panel`&&Af(E)){c=E,t.requestRender();return}if(T===`select-crafting-material`&&jf(E)){o=E,t.requestRender();return}if(T===`set-location`&&ep(E)){i=E,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,t.requestRender();return}if(T===`toggle-current-action-location-menu`){b=!b,t.requestRender();return}if(T===`set-current-action-location`){if(b=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,E===`camp`){n=`camp`,t.requestRender();return}ep(E)&&(i=E,n=`gather`,cp(r).some(e=>e.id===E)||(r=`foraging`),t.requestRender());return}if(T===`set-character-detail-tab`&&tp(E)){a=E,l=!1,u=!1,d=!1,f=!0,p=!1,m=!1,h=!1,g=!1,t.requestRender();return}if(T===`toggle-camp-log`){l=!l,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,t.requestRender();return}if(T===`open-party`){l=!1,u=!0,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,t.requestRender();return}if(T===`open-character-panel`){l=!1,u=!1,d=!0,f=!1,p=!1,m=!1,h=!1,g=!1,t.requestRender();return}if(T===`open-character-details`){l=!1,u=!1,d=!1,f=!0,p=!1,m=!1,h=!1,g=!1,t.requestRender();return}if(T===`open-character-skill-panel`&&pt(E)){let e=Df(E);if(!e)return;n=Tf(e)??n,r=e,l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=!1,t.requestRender();return}if(T===`open-foraging-skill-tree`){l=!1,u=!1,d=!1,f=!1,p=!0,m=!1,h=!1,g=!1,t.requestRender();return}if(T===`select-foraging-skill-tree`&&ht(E)){yt(D,E,t.getNow())&&t.persist(),p=!0,t.requestRender();return}if(T===`open-settings`){l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,g=!1,h=!0,t.requestRender();return}if(T===`open-action-loops`){l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=!0,t.requestRender();return}if(T===`open-combat`){l=!1,u=!1,d=!1,f=!1,p=!1,m=!0,h=!1,g=!1,t.requestRender();return}if(T===`dispatch-combat`){gs(D,w.dataset.characterId??D.selectedCharacterId,`ruins`,t.getNow()),u=!0,m=!1,l=!1,d=!1,f=!1,p=!1,h=!1,g=!1,t.persist(),t.requestRender();return}if(T===`recall-combat`){_s(D,w.dataset.characterId??D.selectedCharacterId,t.getNow()),u=!0,m=!1,l=!1,d=!1,f=!1,p=!1,h=!1,g=!1,t.persist(),t.requestRender();return}if(T===`select-character`&&E&&D.characters.some(e=>e.id===E)){D.selectedCharacterId=E,x=Ff(D)??x,u=!1,d=!0,f=!1,p=!1,t.persist(),t.requestRender();return}if(T===`select-loop-step`){x=Pf(w,D,x),S=Nf(E,S),_=null,t.requestRender();return}if(T===`toggle-loop-location-menu`){let e=Pf(w,D,x);if(!e)return;let n=Nf(E,S);x=e,S=n,_=null,v=v?.loopId===e&&v.index===n?null:{loopId:e,index:n},y=null,t.requestRender();return}if(T===`set-loop-step-location`){let e=Pf(w,D,x),n=w.dataset.locationId;if(!e||!ep(n))return;let r=Nf(E,S);x=e,S=r,_=null,v=null,y=null,Aa(D,e,r,n,t.getNow())&&t.persist(),t.requestRender();return}if(T===`toggle-loop-skill-menu`){let e=Pf(w,D,x);if(!e)return;let n=Nf(E,S);x=e,S=n,_=null,v=null,y=y?.loopId===e&&y.index===n?null:{loopId:e,index:n},t.requestRender();return}if(T===`set-loop-step-skill`){let e=Pf(w,D,x),n=w.dataset.skillId,r=nu.find(e=>e.skillId===n);if(!e||!r)return;let i=Nf(E,S),a=U(D,e),o=a?Math.min(a.actionIds.length-1,Math.max(0,i)):0,s=a?.actionIds[o],c=s?Wf(s,a?.locationIds[o]??null):void 0;x=e,S=o,_=null,v=null,y=null,ka(D,e,o,r.actionId,{locationId:c},t.getNow())&&t.persist(),t.requestRender();return}if(T===`insert-loop-after`){let e=Pf(w,D,x);if(!e)return;x=e,S=Nf(E,S),_={loopId:e,afterIndex:S},g=!1,t.requestRender();return}if(T===`remove-loop-step`){let e=Pf(w,D,x);if(!e)return;x=e,S=Ca(D,e,Nf(E,S),t.getNow()),_=null,t.persist(),t.requestRender();return}if(T===`create-loop`){x=ya(D,t.getNow()).id,S=0,_=null,t.persist(),t.requestRender();return}if(T===`delete-loop`){let e=Pf(w,D,x);if(!e)return;x=ba(D,e,t.getNow()),S=0,_=null,t.persist(),t.requestRender();return}if(T===`assign-loop`){let e=Pf(w,D,x),n=w.dataset.characterId??D.selectedCharacterId;if(!e)return;x=e,bo(D,e,n,t.getNow()),t.persist(),t.requestRender();return}if(T===`start-action`&&E){let e=E,n=t.getNow();if(_){Sa(D,_.loopId,_.afterIndex,e,{locationId:dp(e,i)},n)&&(x=_.loopId,S=_.afterIndex+1,_=null,g=!0),t.persist(),t.requestRender();return}_=null,Co(D,e,n,{locationId:dp(e,i)})}if(T===`stop-action`&&(_=null,wo(D,t.getNow())),T===`deposit-carried`&&(B(D)||To(D,t.getNow())),T===`build-structure`&&E&&Ll(D,E,t.getNow()),T===`queue-cooking`&&E&&Ws(D,E,t.getNow()),T===`eat-food`&&E&&Hl(D,E,t.getNow()),T===`prestige-skill`&&pt(E)){wt(D,E,t.getNow()),t.persist(),t.requestRender();return}if(T===`reset`){t.reset();return}t.persist(),t.requestRender()}),e.addEventListener(`pointerover`,t=>{let n=Cm(t.target,e);n&&(C=n,wm(e,n))}),e.addEventListener(`pointerout`,t=>{if(!C)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!C.contains(n))&&(C=null,Tm(e))}),e.addEventListener(`focusin`,t=>{let n=Cm(t.target,e);n&&(C=n,wm(e,n))}),e.addEventListener(`focusout`,t=>{if(!C)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!C.contains(n))&&(C=null,Tm(e))}),e.addEventListener(`scroll`,()=>{C?.isConnected&&Em(e,C)},!0),window.addEventListener(`resize`,()=>{C?.isConnected&&Em(e,C)}),(w,T=t.getNow())=>{ee=w;let E=U(w,x??Ff(w));if(x=E?.id??null,S=E?Math.min(E.actionIds.length-1,Math.max(0,S)):0,_&&!U(w,_.loopId)&&(_=null),v){let e=U(w,v.loopId);(!e||v.index<0||v.index>=e.actionIds.length)&&(v=null)}if(y){let e=U(w,y.loopId);(!e||y.index<0||y.index>=e.actionIds.length)&&(y=null)}let D=Om(e);e.innerHTML=Eu(w,r,n,a,i,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,T,t.getTestRewardMultiplier()),C=null,km(e,D)}}function Eu(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,ee){let C=Ef(n,t);return`
    <div class="game-shell" data-editor-id="game-shell" data-editor-label="Game shell" data-editor-files="src/ui/render.ts, src/style.css">
      ${Du(e,n,c,l,u,d,p,m,h,ee)}
      <main class="main-panel" data-editor-id="main-panel" data-editor-label="Main game panel" data-editor-files="src/ui/render.ts, src/style.css">
        ${cf(e,C,y,S)}
        ${d?Hp(e,r):f?ku(e):h?em(e,b,x,g,_,v):m?Ou():u?Mu(e):p?Wu(e,S):l?Nu(e):c?Iu(e):Zu(e,n,t,i,a,o,s,g,S)}
      </main>
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `}function Du(e,t,n,r,i,a,o,s,c,l){let u=X(e),d=xf(e,u),f=!n&&!r&&!i&&!a&&!o&&!s&&!c;return`
    <aside class="character-sidebar panel" data-editor-id="character-sidebar" data-editor-label="Character sidebar" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${Fu(l)}
        </div>
      </div>
      <button
        class="character-card selected ${a?`active`:``}"
        type="button"
        data-command="open-character-details"
        aria-expanded="${a}"
      >
        ${id(u)}
        <span>
          <strong>${u.name}</strong>
          <small>${d}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${$l.filter(e=>e.id!==`gather`&&e.id!==`processing`).map(e=>Uu(e,t,f)).join(``)}
              ${Ru(i)}
              ${Bu(r)}
              ${zu(o)}
            </div>
          </nav>
          <div class="sidebar-footer">
            ${Lu(c)}
            ${Gp(n)}
            <button class="ghost-button ${s?`active`:``}" type="button" data-command="open-settings" aria-pressed="${s}">Settings</button>
          </div>
    </aside>
  `}function Ou(){return`
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
  `}function ku(e){let t=e.skills.foraging,n=Jf(e),r=t.level>=10,i=n?_t(n):null;return`
    <div class="work-area single-panel">
      <section class="panel foraging-skill-tree-panel" aria-label="Foraging skill tree" data-editor-id="foraging-skill-tree-panel" data-editor-label="Foraging skill tree panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading foraging-skill-tree-heading">
          <span>Foraging Skill Tree</span>
          <small>${i?`${i.label} chosen`:`Lv ${t.level} / 10`}</small>
        </div>
        ${i?Au(e,i):`
              <div class="foraging-skill-tree-intro ${r?`available`:`locked`}">
                <strong>${r?`Choose one Foraging tree`:`Unlocks at Foraging Lv 10`}</strong>
                <span>${r?`The chosen tree remains active until the next Foraging prestige.`:`Reach Lv 10 to select one category path.`}</span>
              </div>
              <div class="foraging-skill-tree-grid">
                ${at.map(t=>ju(e,t.id)).join(``)}
              </div>
            `}
      </section>
    </div>
  `}function Au(e,t){return`
    <div class="foraging-skill-tree-selected">
      ${ju(e,t.id,!0)}
      <div class="foraging-skill-tree-lock-note">
        <strong>${t.label} is active</strong>
        <span>Other Foraging trees are unavailable until Foraging prestige.</span>
      </div>
      <div class="foraging-skill-tree-grid compact">
        ${at.filter(e=>e.id!==t.id).map(t=>ju(e,t.id)).join(``)}
      </div>
    </div>
  `}function ju(e,t,n=!1){let r=_t(t),i=Jf(e)===t,a=vt(e,t),o=!i&&!a,s=Yf(t),c=i?`Selected`:a??`Available`;return`
    <article class="foraging-skill-tree-card ${i?`selected`:``} ${o?`available`:`locked`} ${n?`featured`:``}">
      <span class="foraging-tree-card-art ${s?`has-background`:`plain`}" aria-hidden="true">
        ${s?`<img src="${s}" alt="" />`:`<span>${r.label.slice(0,2)}</span>`}
      </span>
      <span class="foraging-tree-card-copy">
        <strong>${r.label}</strong>
        <small>${r.description}</small>
      </span>
      <span class="foraging-tree-card-status">${c}</span>
      ${o?`<button class="foraging-tree-select-button" type="button" data-command="select-foraging-skill-tree" data-id="${r.id}">Select</button>`:``}
    </article>
  `}function Mu(e){return`
    <div class="work-area single-panel">
      <section class="panel character-panel" aria-label="Characters" data-editor-id="character-panel" data-editor-label="Character roster panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Characters</span>
        </div>
        <div class="character-roster-grid">
          ${e.characters.map(t=>Pu(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function Nu(e){let t=e.characters.filter(t=>ys(e,t.id)).length,n=e.characters.filter(t=>B(e,t.id)).length,r=e.characters.filter(t=>!ys(e,t.id)&&!B(e,t.id)).length;return`
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
          ${e.characters.map(t=>Vu(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function Pu(e,t){let n=e.selectedCharacterId===t.id,r=!!(B(e,t.id)||bs(e,t.id)),i=ts(e,t.id);return`
    <button
      class="character-select-card ${n?`selected`:``} ${r?`working`:``}"
      type="button"
      data-command="select-character"
      data-id="${t.id}"
      aria-pressed="${n}"
    >
      ${id(t)}
      <span class="character-select-copy">
        <strong>${t.name}</strong>
        <small>${t.epithet}</small>
        <small>${i.classLabel} - ${i.weaponLabel}</small>
        <em>${xf(e,t)}</em>
      </span>
      <span class="character-select-badge">${n?`Selected`:`Select`}</span>
    </button>
  `}function Fu(e){return`
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
  `}function Iu(e){return`
    <div class="work-area single-panel">
      ${Am(e,`camp`,`Camp Log`,`main-log-panel panel`)}
    </div>
  `}function Lu(e){return`
    <button
      class="action-loops-toggle ${e?`active`:``}"
      type="button"
      data-command="open-action-loops"
      aria-pressed="${e}"
    >
      Action Loops
    </button>
  `}function Ru(e){return`
    <button
      class="category-button characters-button ${e?`active`:``}"
      type="button"
      data-command="open-character-panel"
      aria-pressed="${e}"
    >
      <span>Characters</span>
    </button>
  `}function zu(e){return`
    <button
      class="category-button combat-button ${e?`active`:``}"
      type="button"
      data-command="open-combat"
      aria-pressed="${e}"
    >
      <span>Ruins</span>
    </button>
  `}function Bu(e){return`
    <button
      class="category-button party-button ${e?`active`:``}"
      type="button"
      data-command="open-party"
      aria-pressed="${e}"
    >
      <span>Party</span>
    </button>
  `}function Vu(e,t){let n=bs(e,t.id),r=!!n,i=B(e,t.id),a=ts(e,t.id),o=n??t.combat,s=n?.maxHp??a.maxHp,c=n?.maxMana??a.maxMana,l=Math.min(s,o.hp),u=Math.min(c,o.mana),d=r?`In Ruins`:i?`Working`:`Ready`,f=r?`recall-combat`:`dispatch-combat`,p=!r&&!!i;return`
    <article class="party-member ${r?`dispatched`:``}">
      <div class="party-member-topline">
        ${id(t,`small`)}
        <span>
          <strong>${t.name}</strong>
          <small>${a.classLabel} - ${d}</small>
        </span>
      </div>
      ${Hu(`HP`,l,s,`hp`)}
      ${Hu(`Mana`,u,c,`mana`)}
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
  `}function Hu(e,t,n,r){let i=Math.max(1,n),a=Math.max(0,Math.min(i,t));return`
    <div class="vitals-row ${r}">
      <span>${e}</span>
      <div class="vitals-track" aria-hidden="true">
        <span style="transform: scaleX(${(a/i).toFixed(4)})"></span>
      </div>
      <strong>${Math.round(a)}/${Math.round(i)}</strong>
    </div>
  `}function Uu(e,t,n){let r=n&&e.id===t;return`
    <button
      class="category-button ${r?`active`:``}"
      type="button"
      data-command="set-action-category"
      data-id="${e.id}"
      aria-pressed="${r}"
    >
      <span>${e.label}</span>
    </button>
  `}function Wu(e,t){let n=Se(`ruins`),r=e.combat.encounter,i=Ss(r).length,a=e.characters.filter(t=>ys(e,t.id)).length;return`
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
        ${Gu(e,t)}
      </section>
      <aside class="panel combat-side-panel" aria-label="Combat status" data-editor-id="combat-side-panel" data-editor-label="Combat side panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Status</span>
        </div>
        ${qu(e,t)}
        ${Xu(e)}
      </aside>
    </div>
  `}function Gu(e,t){let n=Se(`ruins`),r=e.combat.encounter,i=[];for(let e=0;e<n.gridHeight;e+=1)for(let a=0;a<n.gridWidth;a+=1){let n=r?.units.find(t=>t.x===a&&t.y===e&&t.hp>0)??null;i.push(Ku(n,a,e,t))}return`
    <div class="combat-field" style="--combat-cols: ${n.gridWidth}; --combat-rows: ${n.gridHeight};" aria-label="Combat grid">
      ${i.join(``)}
    </div>
    <div class="combat-field-message">${r?.message??`Open Party to dispatch someone.`}</div>
  `}function Ku(e,t,n,r){if(!e)return`<div class="combat-cell" data-grid-x="${t}" data-grid-y="${n}"></div>`;let i=e.kind===`enemy`&&e.enemyId?xe(e.enemyId).glyph:nd(e.name),a=Math.max(0,e.nextActAt-r);return`
    <div class="combat-cell occupied ${e.kind}" data-grid-x="${t}" data-grid-y="${n}" title="${e.name}">
      <span class="combat-unit-glyph">${i}</span>
      <span class="combat-unit-name">${e.name}</span>
      <span class="combat-unit-timer">${G(a)}</span>
      ${Hu(`HP`,e.hp,e.maxHp,`hp`)}
    </div>
  `}function qu(e,t){let n=e.combat.encounter;return n?`
    <div class="combat-roster-list">
      ${n.units.map(e=>Ju(e,t)).join(``)}
    </div>
  `:`<div class="empty-line">No one is fighting.</div>`}function Ju(e,t){let n=e.classId?Yu(e.classId):`Enemy`,r=e.hp>0?`Acts in ${G(e.nextActAt-t)}`:`Down`;return`
    <article class="combat-roster-unit ${e.kind}">
      <div>
        <strong>${e.name}</strong>
        <small>${n} - ${r}</small>
      </div>
      ${Hu(`HP`,e.hp,e.maxHp,`hp`)}
      ${e.maxMana>0?Hu(`Mana`,e.mana,e.maxMana,`mana`):``}
    </article>
  `}function Yu(e){return pe.find(t=>t.id===e)?.label??`Fighter`}function Xu(e){let t=e.combat.log.slice(0,8);return`
    <section class="combat-event-log" aria-label="Combat log">
      <h3>Combat Log</h3>
      <div class="combat-log-list">
        ${t.length?t.map(e=>`<div class="combat-log-entry ${e.tone}">${e.text}</div>`).join(``):`<div class="empty-line">No combat events yet.</div>`}
      </div>
    </section>
  `}function Zu(e,t,n,r,i,a,o,s,c){return t===`camp`?`
      <div class="work-area camp-work-area">
        ${Qu(e)}
        ${Op(e,c)}
      </div>
    `:`
    <div class="work-area">
      ${ad(e,n,r,i,a,o,s,c)}
    </div>
  `}function Qu(e){let t=X(e);return`
    <section class="panel camp-stats-panel" aria-label="Camp stats" data-editor-id="camp-stats-panel" data-editor-label="Camp stats panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Stats</span>
      </div>
      <div class="camp-stat-list">
        <div class="camp-stat-row">
          <span>Population</span>
          <strong>${gn(e)}/${_n(e)}</strong>
        </div>
        <div class="camp-stat-row">
          <span>${t.name} Hunger</span>
          <strong>${Math.round(t.needs.hunger)}/${Math.round(t.needs.maxHunger)}</strong>
        </div>
      </div>
    </section>
  `}function $u(e){return e.targetLocationId?e.targetLocationId:e.phase===`travelingBack`?`camp`:e.locationId??`camp`}function ed(e,t){return e.originLocationId?e.originLocationId:e.phase===`travelingBack`?e.locationId??t:t}function td(e){return e.replace(/[^a-zA-Z0-9_-]/g,`-`)}function nd(e){return(e.trim().split(/\s+/).map(e=>e[0]).join(``)||`?`).slice(0,2).toUpperCase()}function rd(e){return Gl[e.id]??null}function id(e,t=``){let n=rd(e),r=[`portrait`,n?`character-portrait`:``,t].filter(Boolean).join(` `);return n?`
    <span class="${r}" aria-hidden="true">
      <img src="${n}" alt="" />
    </span>
  `:`<span class="${r}" aria-hidden="true">${nd(e.name)}</span>`}function ad(e,t,n,r,i,a,o,s){return`
    <div class="action-stack">
      ${op(Cf(t),n)}
      ${od(e,t,n,r,i,a,o,s)}
    </div>
  `}function od(e,t,n,r,i,a,o,s){let c=Cf(t),l=c.id===`foraging`?up(lp(c.id,n)):(c.id,c.actionIds??[]);return c.id===`crafting`?hd(e,l,r,o,s):c.id===`smithing`?Ad(e,l,i,o,s):c.id===`alchemy`?Bd(e,l,a,o,s):c.id===`textiles`?Yd(e,l,o,s):c.id===`cooking`?$d(e,s):c.id===`foraging`?sd(e,lp(c.id,n),o):`
      <section class="action-panel" data-editor-id="action-panel-${t}" data-editor-label="${c.label} action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="action-grid">
          ${l.map(t=>yp(e,t,o)).join(``)}
        </div>
    </section>
  `}function sd(e,t,n){let r=up(t).filter(e=>!d(e)),i=l(t);return`
      <section class="action-panel" data-editor-id="action-panel-foraging" data-editor-label="Forage action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="smithing-craft-columns crafting-craft-columns forage-category-columns">
          ${r.length?ld(e,r,n):``}
          ${ql.map(t=>cd(e,t,i.filter(e=>dd(e)===t),n)).join(``)}
        </div>
      </section>
  `}function cd(e,t,n,r){let i=fd(t);return ud(`${i} forage`,i,n.map(t=>pd(e,t.actionId,r)),`No ${i.toLowerCase()} here.`)}function ld(e,t,n){return ud(`Forage resources`,`Resources`,t.map(t=>md(e,t,n)),`No resources here.`)}function ud(e,t,n,r){let i=n.filter(Boolean);return`
    <section class="smithing-craft-column crafting-category-card forage-category-card" aria-label="${e}">
      <div class="smithing-craft-column-heading crafting-category-heading">
        <span>${t}</span>
        <small>${i.length}</small>
      </div>
      ${i.length?`<div class="smithing-recipe-grid crafting-recipe-grid crafting-category-recipes forage-item-grid">${i.join(``)}</div>`:`<div class="smithing-empty-column">${r}</div>`}
    </section>
  `}function dd(e){return e.tags.includes(`fungus`)?`fungal`:(e.category===`vegetable`||e.category===`root`)&&e.tags.some(e=>Jl.has(e))?`staple`:e.category}function fd(e){return e===`fungal`?`Fungal`:e===`staple`?`Staples`:e===`vegetable`?`Vegetables`:a(e)}function pd(e,t,n){let r=k(t),i=d(t);if(!r||!i)return``;let a=R(e,t),o=K(t),s=q(e,t),c=n?U(e,n.loopId):null,l=B(e),u=!!(n&&c),f=!!(u&&c&&n&&xa(c,n.afterIndex,t)),p=l?Z(l)===t:!1,m=u?!f:!s||p,h=J(e,o),g=s?``:a?h:Ri(e,t),_=u?f?`Set as action loop step`:`Not valid for this loop`:p?`Running`:!s&&g?g:`Ready`,v=u?`Set`:p?`Running`:s?`Start`:`Locked`,y=Dp(t,r.durationMs),b=i.minAmount===i.maxAmount?`${i.minAmount}`:`${i.minAmount}-${i.maxAmount}`;return`
    <button
      class="smithing-recipe-card crafting-recipe-card forage-item-card ${p?`active`:``} ${f?`assignable`:``} ${!a&&!f?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="forage-item-${i.resourceId}"
      data-editor-label="Forage item: ${i.resourceLabel}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${m}"
      data-tooltip-source
      aria-disabled="${m}"
      aria-label="${v} ${i.resourceLabel}. Finds ${b}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Q(t)}</span>
      ${bp(r.label,y,_)}
    </button>
  `}function md(e,t,n){let r=k(t);if(!r)return``;let i=R(e,t),a=K(t),o=q(e,t),s=n?U(e,n.loopId):null,c=B(e),l=!!(n&&s),u=!!(l&&s&&n&&xa(s,n.afterIndex,t)),d=c?Z(c)===t:!1,f=l?!u:!o||d,p=J(e,a),m=o?``:i?p:Ri(e,t),h=l?u?`Set as action loop step`:`Not valid for this loop`:d?`Running`:!o&&m?m:`Ready`,g=l?`Set`:d?`Running`:o?`Start`:`Locked`,_=Dp(t,r.durationMs);return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${Q(t)}</span>
      ${bp(r.label,_,h)}
    </button>
  `}function hd(e,t,n,r,i){let a=`craftLowestTool`,o=t.filter(vd),s=gd(n,o);return`
    <section class="action-panel crafting-action-panel" data-editor-id="action-panel-crafting" data-editor-label="Crafting action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card crafting-panel-card">
        <div class="smithing-workbench crafting-workbench">
          <div class="smithing-furnace-column crafting-workbench-column">
            ${yd(o,s)}
            ${bd(e,i)}
            ${t.includes(a)?vp(e,a,r):``}
          </div>
          ${xd(o,s)}
        </div>
        ${wd(e,o,s,r)}
      </div>
    </section>
  `}function gd(e,t){let n=_d(t);return n.includes(e)?e:n[0]??e}function _d(e){let t=e.map(e=>fu[e]?.material).filter(e=>!!e);return Array.from(new Set(t))}function vd(e){return!!fu[e]}function yd(e,t){let n=e.filter(e=>e!==`craftLowestTool`).length;return`
    <div class="smithing-status-grid crafting-status-grid">
      <div class="smithing-status-item">
        <span>Work Bench</span>
        <strong>Hand Craft</strong>
      </div>
      <div class="smithing-status-item">
        <span>Materials</span>
        <strong>${lu[t]}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Recipes</span>
        <strong>${n}</strong>
      </div>
    </div>
  `}function bd(e,t){let n=B(e),r=n?Z(n):null;if(!n||!r||!vd(r))return`
      <div class="smithing-active-row idle crafting-active-row">
        <span>No active craft</span>
        <strong>Bench idle</strong>
      </div>
    `;let i=k(r),a=Ba(Do(e,t),0,1);return`
    <div class="smithing-active-row crafting-active-row">
      <span>Active craft</span>
      <strong>${i?Od(i.label):`Recipe`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${G(n.endsAt-t)}</em>
      </div>
    </div>
  `}function xd(e,t){return`
    <div class="smithing-smelt-column crafting-material-column">
      <div class="section-heading">
        <span>Materials Type</span>
      </div>
      <div class="smithing-smelt-grid crafting-material-grid">
        ${_d(e).map(n=>Sd(e,n,t)).join(``)}
      </div>
    </div>
  `}function Sd(e,t,n){let r=t===n,i=Cd(e,t);return`
    <article class="smithing-smelt-card crafting-material-card ${r?`selected`:``}">
      <button
        class="smithing-smelt-select crafting-material-select"
        type="button"
        data-command="select-crafting-material"
        data-id="${t}"
        aria-pressed="${r}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${Q(`craftLowestTool`)}</span>
        <span class="smithing-recipe-copy">
          <strong>${lu[t]}</strong>
          <small>${r?`Selected type`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${i} recipes</b>
          <small>${uu[t]}</small>
        </span>
      </button>
    </article>
  `}function Cd(e,t){return e.filter(e=>e!==`craftLowestTool`&&fu[e]?.material===t).length}function wd(e,t,n,r){let i=t.filter(e=>e!==`craftLowestTool`&&fu[e]?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section crafting-recipe-section">
      <div class="smithing-craft-columns crafting-craft-columns">
        ${du.map(t=>Td(e,i,n,t,r)).join(``)}
      </div>
    </div>
  `}function Td(e,t,n,r,i){let a=t.filter(e=>fu[e]?.productCategory===r.id);return`
    <section class="smithing-craft-column crafting-craft-column crafting-category-card" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading crafting-category-heading">
        <span>${r.label}</span>
        <small>${a.length}</small>
      </div>
      ${a.length?`<div class="smithing-recipe-grid crafting-recipe-grid crafting-category-recipes">${a.map(t=>Dd(e,t,i)).join(``)}</div>`:`<div class="smithing-empty-column">No ${lu[n].toLowerCase()} ${r.label.toLowerCase()} yet.</div>`}
    </section>
  `}function Ed(e,t,n){let r=k(t);if(!r||!vd(t))return null;let i=R(e,t),a=K(t),o=q(e,t),s=n?U(e,n.loopId):null,c=B(e),l=!!(n&&s),u=!!(l&&s&&n&&xa(s,n.afterIndex,t)),d=c?Z(c)===t:!1,f=l?!u:!o||d,p=J(e,a),m=o?``:i?p:Ri(e,t);return{definition:r,cost:a,unlocked:i,canAssignFollowUp:u,active:d,disabled:f,statusText:l?u?`Set as action loop step`:`Not valid for this loop`:d?`Running`:!o&&m?m:`Ready`,buttonLabel:l?`Set`:d?`Running`:o?`Start`:`Locked`,tooltipRows:Dp(t,r.durationMs)}}function Dd(e,t,n){let r=Ed(e,t,n);if(!r)return``;let{definition:i,cost:a,unlocked:o,canAssignFollowUp:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=r,p=Od(i.label),m=F(a);return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${Q(t)}</span>
      ${bp(p,f,u)}
    </button>
  `}function Od(e){return e===`Craft Lowest Tool`?`Lowest Stock Tool`:e.replace(/^Craft\s+/,``)}function kd(e){let t=wp(e);if(t)return`1 ${t.label}`;switch(e){case`craftLowestTool`:return`Lowest Stock`;case`craftWoodenSpoon`:return`1 Wooden Spoon`;case`craftWoodenBowl`:return`1 Wooden Bowl`;default:return k(e)?.label.replace(/^Craft /,`1 `)??`1 item`}}function Ad(e,t,n,r,i){let a=t.filter(e=>w.some(t=>t===e)),o=t.filter(e=>T.some(t=>t===e)),s=$r(e),c=jd(n,a);return`
    <section class="action-panel smithing-action-panel" data-editor-id="action-panel-smithing" data-editor-label="Smithing action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card">
        <div class="smithing-workbench">
          <div class="smithing-furnace-column">
            ${Md(s)}
            ${Nd(e,i)}
          </div>
          ${Pd(e,a,c,r)}
        </div>
        ${Id(e,o,c,r)}
      </div>
    </section>
  `}function jd(e,t){let n=t.map(e=>E(e)?.material).filter(e=>!!e);return n.includes(e)?e:n[0]??e}function Md(e){return`
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
  `}function Nd(e,t){let n=B(e),r=n?Z(n):null;if(!n||!r||!ei(r))return`
      <div class="smithing-active-row idle">
        <span>No active smelt</span>
        <strong>Furnace idle</strong>
      </div>
    `;let i=E(r),a=Ba(Do(e,t),0,1);return`
    <div class="smithing-active-row">
      <span>Active smelt</span>
      <strong>${i?.label??`Smelting`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${G(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Pd(e,t,n,r){return`
    <div class="smithing-smelt-column">
      <div class="section-heading">
        <span>Smelting</span>
      </div>
      <div class="smithing-smelt-grid">
        ${t.map(t=>Fd(e,t,n,r)).join(``)}
      </div>
    </div>
  `}function Fd(e,t,n,r){let i=Rd(e,t,r);if(!i)return``;let{definition:a,recipe:o,cost:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=i,p=o.material===n,m=d===`Set`?`Set Smelt`:c?`Smelting`:d===`Start`?`Smelt`:d;return`
    <article class="smithing-smelt-card ${p?`selected`:``} ${c?`active`:``}">
      <button
        class="smithing-smelt-select"
        type="button"
        data-command="select-smithing-material"
        data-id="${o.material}"
        aria-pressed="${p}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${Q(t)}</span>
        <span class="smithing-recipe-copy">
          <strong>${au[o.material]}</strong>
          <small>${p?`Selected material`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${ri(o.actionId)}</b>
          <small>${F(s)}</small>
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
        ${bp(a.label,f,u)}
      </button>
    </article>
  `}function Id(e,t,n,r){let i=t.filter(e=>E(e)?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section">
      <div class="section-heading">
        <span>${au[n]} Smithing</span>
        <small>Filtered by selected bar</small>
      </div>
      <div class="smithing-craft-columns">
        ${ou.map(t=>Ld(e,i,n,t,r)).join(``)}
      </div>
    </div>
  `}function Ld(e,t,n,r,i){let a=t.filter(e=>(E(e)?.productCategory??`tool`)===r.id);return`
    <section class="smithing-craft-column" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading">
        <span>${r.label}</span>
        <small>${a.length}</small>
      </div>
      ${a.length?`<div class="smithing-recipe-grid">${a.map(t=>zd(e,t,i)).join(``)}</div>`:`<div class="smithing-empty-column">No ${au[n].toLowerCase()} ${r.label.toLowerCase()} recipes yet.</div>`}
    </section>
  `}function Rd(e,t,n){let r=k(t),i=E(t);if(!r||!i)return null;let a=R(e,t),o=K(t),s=q(e,t),c=n?U(e,n.loopId):null,l=B(e),u=!!(n&&c),d=!!(u&&c&&n&&xa(c,n.afterIndex,t)),f=l?Z(l)===t:!1,p=u?!d:!s||f,m=J(e,o),h=s?``:a?m:Ri(e,t);return{definition:r,recipe:i,cost:o,unlocked:a,canAssignFollowUp:d,active:f,disabled:p,statusText:u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,buttonLabel:u?`Set`:f?`Running`:s?`Start`:`Locked`,tooltipRows:Dp(t,r.durationMs)}}function zd(e,t,n){let r=Rd(e,t,n);if(!r)return``;let{definition:i,recipe:a,cost:o,unlocked:s,canAssignFollowUp:c,active:l,disabled:u,statusText:d,buttonLabel:f,tooltipRows:p}=r;return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${Q(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${i.label}</strong>
        <small>${d}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${ri(a.actionId)}</b>
        <small>${F(o)}</small>
      </span>
      ${bp(i.label,p,d)}
    </button>
  `}function Bd(e,t,n,r,i){let a=su.some(e=>e.id===n)?n:`brewing`;return`
    <section class="action-panel alchemy-action-panel" data-editor-id="action-panel-alchemy" data-editor-label="Alchemy action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card alchemy-panel-card">
        ${Vd(a)}
        ${a===`brewing`?Hd(e,t,r,i):Jd(a)}
      </div>
    </section>
  `}function Vd(e){return`
    <div class="alchemy-mode-tabs" role="tablist" aria-label="Alchemy panels">
      ${su.map(t=>{let n=t.id===e;return`
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
  `}function Hd(e,t,n,r){let i=t.filter(e=>b.some(t=>t===e)),a=i.filter(e=>x(e)?.kind===`vessel`),o=i.filter(e=>x(e)?.kind===`potion`);return`
    <div class="alchemy-brewing-panel">
      ${Ud(e)}
      ${Wd(e,r)}
      ${Gd(e,cu.vessel,a,n)}
      ${Gd(e,cu.potion,o,n)}
    </div>
  `}function Ud(e){let t=li(e);return`
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
  `}function Wd(e,t){let n=B(e),r=n?Z(n):null,i=r?x(r):void 0;if(!n||!i)return`
      <div class="smithing-active-row idle alchemy-active-row">
        <span>No active brew</span>
        <strong>Bench idle</strong>
      </div>
    `;let a=Ba(Do(e,t),0,1);return`
    <div class="smithing-active-row alchemy-active-row">
      <span>Active alchemy</span>
      <strong>${i.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-alchemy-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-alchemy-action-remaining>${G(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Gd(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section alchemy-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid alchemy-recipe-grid">
        ${n.map(t=>Kd(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function Kd(e,t,n){let r=qd(e,t,n);if(!r)return``;let{definition:i,recipe:a,cost:o,unlocked:s,canAssignFollowUp:c,active:l,disabled:u,statusText:d,buttonLabel:f,tooltipRows:p}=r;return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${Q(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${i.label}</strong>
        <small>${d}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${fi(a.actionId)}</b>
        <small>${F(o)}</small>
      </span>
      ${bp(i.label,p,d)}
    </button>
  `}function qd(e,t,n){let r=k(t),i=x(t);if(!r||!i)return null;let a=R(e,t),o=K(t),s=q(e,t),c=n?U(e,n.loopId):null,l=B(e),u=!!(n&&c),d=!!(u&&c&&n&&xa(c,n.afterIndex,t)),f=l?Z(l)===t:!1,p=u?!d:!s||f,m=J(e,o),h=s?``:a?m:Ri(e,t);return{definition:r,recipe:i,cost:o,unlocked:a,canAssignFollowUp:d,active:f,disabled:p,statusText:u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,buttonLabel:u?`Set`:f?`Running`:s?`Start`:`Locked`,tooltipRows:Dp(t,r.durationMs)}}function Jd(e){let t=su.find(t=>t.id===e)??su[0];return`
    <div class="alchemy-empty-panel" role="tabpanel" aria-label="${t.emptyLabel}">
      <div class="smithing-empty-column">No ${t.emptyLabel.toLowerCase()} recipes yet.</div>
    </div>
  `}function Yd(e,t,n,r){let i=t.filter(e=>ie.some(t=>t===e)),a=t.filter(e=>ae.some(t=>t===e)),o=t.filter(e=>oe.some(t=>t===e)),s=t.filter(e=>se.some(t=>t===e)),c=t.filter(e=>ce.some(t=>t===e)),l=t.filter(e=>le.some(t=>t===e));return`
    <section class="action-panel textile-action-panel" data-editor-id="action-panel-textiles" data-editor-label="Tailoring action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card textile-panel-card">
        <div class="smithing-status-grid textile-status-grid">
          <div class="smithing-status-item">
            <span>Flax Chain</span>
            <strong>${af(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Stations</span>
            <strong>${of(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Needles</span>
            <strong>${sf(e)}</strong>
          </div>
        </div>
        ${Xd(e,r)}
        ${Zd(e,`Flax Prep`,[...i,...a],n)}
        ${Zd(e,`Spinning`,o,n)}
        ${Zd(e,`Weaving`,s,n)}
        ${Zd(e,`Needles`,c,n)}
        ${Zd(e,`Sewing`,l,n)}
      </div>
    </section>
  `}function Xd(e,t){let n=B(e),r=n?Z(n):null,i=r?O(r):void 0;if(!n||!i)return`
      <div class="smithing-active-row idle textile-active-row">
        <span>No active tailoring work</span>
        <strong>Chain idle</strong>
      </div>
    `;let a=Ba(Do(e,t),0,1);return`
    <div class="smithing-active-row textile-active-row">
      <span>Active tailoring work</span>
      <strong>${i.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-textile-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-textile-action-remaining>${G(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Zd(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section textile-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid textile-recipe-grid">
        ${n.map(t=>Qd(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function Qd(e,t,n){let r=k(t),i=O(t);if(!r||!i)return``;let a=R(e,t),o=K(t),s=q(e,t),c=n?U(e,n.loopId):null,l=B(e),u=!!(n&&c),d=!!(u&&c&&n&&xa(c,n.afterIndex,t)),f=l?Z(l)===t:!1,p=u?!d:!s||f,m=J(e,o),h=s?``:a?m:Ri(e,t),g=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,_=u?`Set`:f?`Running`:s?`Start`:`Locked`,v=Dp(t,r.durationMs);return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${Q(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${r.label}</strong>
        <small>${g}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${_i(i)}</b>
        <small>${F(o)}</small>
      </span>
      ${bp(r.label,v,g)}
    </button>
  `}function $d(e,t){let n=Js(e).filter(e=>e.tags.includes(`stew`)),r=e.skills.cooking,i=St(r);return`
    <section class="action-panel cooking-action-panel" data-editor-id="action-panel-cooking" data-editor-label="Cooking recipe panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card cooking-panel-card">
        <div class="smithing-status-grid cooking-status-grid">
          <div class="smithing-status-item">
            <span>Station</span>
            <strong>${ec(e,`campfire`,t)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Cooking</span>
            <strong>Lv ${r.level} (${Nt(i.xpIntoLevel)}/${Nt(i.xpForLevel)})</strong>
          </div>
          <div class="smithing-status-item">
            <span>Queue</span>
            <strong>${e.cooking.queue.length}</strong>
          </div>
        </div>
        ${ef(e,t)}
        ${tf(e,t)}
        ${nf(e,`Stews`,n,t)}
      </div>
    </section>
  `}function ef(e,t){let n=Ks(e),r=n?Js(e).find(e=>e.id===n.recipeId):void 0;if(!n||!r)return`
      <div class="smithing-active-row idle cooking-active-row">
        <span>No active cooking</span>
        <strong>${e.cooking.queue.length?`Waiting for campfire`:`Queue idle`}</strong>
      </div>
    `;let i=Ba(qs(n,t),0,1),a=Math.max(0,(n.endsAt??t)-t);return`
    <div class="smithing-active-row cooking-active-row">
      <span>Active cooking</span>
      <strong>${r.name}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-cooking-action-progress style="transform: scaleX(${i.toFixed(4)})"></span>
        <em data-cooking-action-remaining>${G(a)}</em>
      </div>
    </div>
  `}function tf(e,t){let n=e.cooking.queue.filter(e=>e.startedAt===null||e.endsAt===null);return n.length?`
    <div class="cooking-queue-panel">
      <div class="section-heading">
        <span>Queued</span>
      </div>
      <div class="cooking-queue-list">
        ${n.map(n=>`
              <div class="cooking-queue-row">
                <strong>${Js(e).find(e=>e.id===n.recipeId)?.name??n.recipeId}</strong>
                <small>${L(e,t)?`Waiting turn`:`Needs lit campfire`}</small>
              </div>
            `).join(``)}
      </div>
    </div>
  `:``}function nf(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section cooking-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid cooking-recipe-grid">
        ${n.map(t=>rf(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function rf(e,t,n){let r=Xs(e,t,n),i=Zs(e,t,n),a=!r,o=ke(t),s=e.cooking.completedRecipeCounts[t.id]??0,c=[{label:`Station`,value:`Campfire`},{label:`Speed`,value:G(t.cookTimeMs)},{label:`Skill`,value:`Cooking +${Nt(t.xpReward)} XP`},{label:`Level`,value:`Cooking Lv ${t.levelRequirement}`},{label:`Uses`,value:$s(t)},{label:`Makes`,value:Qs(t)},{label:`Nutrition`,value:`${t.nutrition.hunger??0} hunger`},{label:`Cooked`,value:`${s}`},{label:`Eating`,value:`Stews need a Wooden Spoon`},{label:`Failure`,value:`${Math.round(t.failureChance*100)}% base chance later`}],l=r?`Ready`:i;return`
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
        <b>${Qs(t)}</b>
        <small>${F(o)}${s?`; cooked ${s}`:``}</small>
      </span>
      ${bp(t.name,c,l)}
    </button>
  `}function af(e){return e.seenResources.includes(`linenCloth`)||e.inventory.linenCloth>0?`Cloth`:e.seenResources.includes(`linenThread`)||e.inventory.linenThread>0?`Thread`:e.seenResources.includes(`flaxFiber`)||e.inventory.flaxFiber>0?`Fiber`:e.seenResources.includes(`rettedFlax`)||e.inventory.rettedFlax>0?`Retted`:e.seenResources.includes(`flaxPlant`)||e.inventory.flaxPlant>0?`Fresh flax`:`Find flax`}function of(e){let t=e.buildings.primitiveSpinningWheel,n=e.buildings.primitiveLoom;return t&&n?`Wheel + Loom`:t?`Wheel built`:n?`Loom built`:`Hand work`}function sf(e){let t=Math.max(0,Math.floor(e.inventory.copperNeedle??0)),n=Math.max(0,Math.floor(e.inventory.bronzeNeedle??0));return t||n?`Copper ${t} / Bronze ${n}`:`None`}function cf(e,t,n,r){let i=B(e),a=X(e),o=df(t);if(!i)return`
      <section class="current-action-panel panel idle" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="current-action-content idle with-skill-banner">
          ${o}
          <div class="current-action-detail current-action-location">
            ${hf(a.locationId,n)}
          </div>
          <div class="current-action-detail current-action-copy">
            <strong>No active work</strong>
          </div>
          ${uf(!0)}
          <div class="progress-track idle">
            <span data-action-progress style="transform: scaleX(0)"></span>
            <em data-action-remaining>Idle</em>
          </div>
        </div>
      </section>
    `;let s=Ba(Do(e,r),0,1),c=G(i.endsAt-r),l=_f(e,i),u=yf(e);return`
    <section class="current-action-panel panel" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="current-action-content with-skill-banner">
        ${o}
        <div class="current-action-detail current-action-location">
          ${hf(l,n)}
        </div>
        <div class="current-action-detail current-action-copy">
          <strong>${u}</strong>
        </div>
        ${uf(!1)}
        <div class="progress-track">
          <span data-action-progress style="transform: scaleX(${s.toFixed(4)})"></span>
          <em data-action-remaining>${c}</em>
        </div>
      </div>
    </section>
  `}function lf(e,t,n,r){let i=U(e,t);if(!i)return``;let a=Math.min(i.actionIds.length-1,Math.max(0,r));return`
    <div class="action-loop-controls" aria-label="Action loop">
      ${i.actionIds.map((t,r)=>ff(e,i,t,r,a,n)).join(``)}
    </div>
  `}function uf(e){return`
    <button
      class="icon-button current-action-return-button"
      type="button"
      data-command="stop-action"
      title="Stop and return to camp"
      aria-label="Stop action and return to camp"
      ${e?`disabled`:``}
    >
      <img src="${pu.iconUrl}" alt="" aria-hidden="true" />
    </button>
  `}function df(e){return!e.bannerUrl&&!e.label?``:`
    <div class="current-action-skill-banner ${e.bannerUrl?`has-image`:`has-title`}" aria-label="${e.label}">
      ${e.bannerUrl?`<img src="${e.bannerUrl}" alt="" aria-hidden="true" />`:`<span class="current-action-skill-title">${e.label}</span>`}
    </div>
  `}function ff(e,t,n,r,i,a){let o=r===i,s=a?.loopId===t.id&&a.afterIndex===r,c=pf(n);return`
    <div class="action-loop-row ${o?`selected`:``}">
      <button
        class="action-loop-step ${o?`selected`:``} ${s?`assigning`:``}"
        type="button"
        data-command="select-loop-step"
        data-loop-id="${t.id}"
        data-id="${r}"
        aria-pressed="${o}"
      >
        <span>${c}</span>
        <small>${mf(e,t,r)}</small>
      </button>
      ${o?`<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-loop-id="${t.id}" data-id="${r}" title="Add action after ${c}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-loop-id="${t.id}" data-id="${r}" title="Remove ${c}" ${t.actionIds.length<=1?`disabled`:``}>-</button>
            </span>`:``}
    </div>
  `}function pf(e){return e===`fishRiver`?`Fishing`:k(e)?.label??`Action`}function mf(e,t,n){let r=t.actionIds[n];return`${Uf(r,t.locationIds[n]??null)} - ${Lf(e,Ea(t,n),r)}`}function hf(e,t){let n=vf(e);return`
    <div class="current-action-location-picker">
      <button
        class="current-action-location-button"
        type="button"
        data-command="toggle-current-action-location-menu"
        aria-expanded="${t}"
        aria-haspopup="menu"
        aria-label="Choose location, current ${n.label}"
      >
        <img class="current-action-location-banner" src="${n.iconUrl}" alt="" aria-hidden="true" />
      </button>
      ${t?gf(e):``}
    </div>
  `}function gf(e){return`
    <div class="current-action-location-menu" role="menu" aria-label="Locations">
      ${[{id:`camp`,...pu},...Y.map(e=>({id:e.id,label:e.label,iconUrl:e.iconUrl}))].map(t=>{let n=t.id===e;return`
            <button
              class="current-action-location-option ${n?`active`:``}"
              type="button"
              role="menuitemradio"
              aria-checked="${n}"
              aria-label="${t.label}"
              title="${t.label}"
              data-command="set-current-action-location"
              data-id="${t.id}"
            >
              <span class="current-action-location-option-image" aria-hidden="true">
                <img src="${t.iconUrl}" alt="" />
              </span>
            </button>
          `}).join(``)}
    </div>
  `}function _f(e,t){let n=ed(t,X(e).locationId),r=$u(t);return r===`camp`?n===`camp`?r:n:r}function vf(e){return e===`camp`?pu:sp(e)}function yf(e){let t=B(e);if(!t)return`Working`;let n=rp($u(t)),r=rp(ed(t,`camp`));return t.phase===`travelingTo`?`Traveling to ${n}`:t.phase===`travelingBack`?`Returning to camp from ${r}`:t.phase===`followUp`?Z(t)===`butcherFish`?`Butchering Fish`:k(Z(t))?.label??`Working`:k(t.actionId)?.label??`Working`}function X(e){return e.characters.find(t=>t.id===e.selectedCharacterId)??e.characters[0]}function bf(e){return e.endsWith(`s`)?`${e}'`:`${e}'s`}function xf(e,t){return bs(e,t.id)?`fighting in The Ruins`:B(e,t.id)?Sf(e,t.id):`at ${rp(t.locationId)}`}function Sf(e,t=e.selectedCharacterId){let n=B(e,t);if(!n)return`keeping still`;let r=rp($u(n)),i=rp(ed(n,`camp`));return n.phase===`travelingTo`?`traveling to ${r}`:n.phase===`travelingBack`?`returning to camp from ${i}`:n.phase===`followUp`?k(Z(n))?.verb??`working`:k(n.actionId)?.verb??`working`}function Z(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Cf(e){return Ql.find(t=>t.id===e)??Ql[0]}function wf(e){return($l.find(t=>t.id===e)??$l[0]).filterIds.map(e=>Cf(e))}function Tf(e){return $l.find(t=>t.filterIds.includes(e))?.id??null}function Ef(e,t){if(e===`camp`)return{label:``};let n=eu[Cf(t).id];return{label:mt(n).label,bannerUrl:Zl[n]}}function Df(e){return Ql.find(t=>eu[t.id]===e)?.id??null}function Of(e){return $l.some(t=>t.id===e)}function kf(e){return e===`copper`||e===`bronze`}function Af(e){return e===`brewing`||e===`transmutation`||e===`decomposition`}function jf(e){return e===`primitive`}function Mf(e){return Ql.some(t=>t.id===e)}function Nf(e,t){let n=Number(e);return Number.isFinite(n)?Math.max(0,Math.floor(n)):t}function Pf(e,t,n){return U(t,e.dataset.loopId??n)?.id??null}function Ff(e){return U(e,X(e).actionLoopId)?.id??null}function If(e,t,n,r){let i=U(e,t),a=i?.actionIds[n]??`gatherSticks`,o=i?Ea(i,n):{mode:`smart`};return r===`whenResourceAtLeast`?{mode:r,resourceId:o.resourceId??Bf(a),amount:o.amount??5,scope:o.scope??`camp`}:{mode:r}}function Lf(e,t,n){switch(t.mode){case`manual`:return`stays here`;case`afterCompletion`:return`next after one`;case`whenInventoryFull`:return`next when pack fills`;case`whenCannotStart`:return`next when blocked`;case`whenResourceAtLeast`:{let r=zf(t,n),i=t.scope??`camp`,a=Mn(e,r,i);return`${i===`camp`?`camp`:`carried`} ${N(r)} ${a}/${t.amount??1}`}default:return`smart advance`}}function Rf(e){switch(e){case`manual`:return`This step repeats until the character can no longer perform it.`;case`afterCompletion`:return`The loop moves on after one finished work cycle.`;case`whenInventoryFull`:return`The loop moves on once carried inventory is full, then returns to camp if needed.`;case`whenResourceAtLeast`:return`The loop moves on when the selected stock reaches the target amount.`;case`whenCannotStart`:return`The loop repeats this step until materials, tools, or unlocks block it.`;default:return`Field work repeats until the pack fills; camp work advances after one completion.`}}function zf(e,t){return $f(e.resourceId)?e.resourceId:Bf(t)}function Bf(e){let t=d(e);if(t)return t.resourceId;let n=Vf(e);if(n)return n;switch(e){case`gatherSticks`:return`stick`;case`gatherStones`:return`stone`;case`gatherFlaxPlants`:return`flaxPlant`;case`gatherFlaxFibers`:return`flaxFiber`;case`gatherSand`:return`sand`;case`gatherWater`:return`water`;case`mineCoal`:return`coal`;case`mineCopper`:return`copper`;case`mineTin`:return`tin`;case`chopTrees`:return`wood`;case`huntSmallAnimals`:return`rabbit`;case`fishRiver`:return`minnow`;default:return`stick`}}function Vf(e){let t=E(e)?.output??x(e)?.output??O(e)?.output??Hf(e),n=Object.keys(t)[0];return $f(n)?n:null}function Hf(e){switch(e){case`craftWoodenSpoon`:return{woodenSpoon:1};case`craftWoodenBowl`:return{woodenBowl:1};case`cookRabbitMeat`:return{cookedRabbitMeat:1};case`cookSquirrelMeat`:return{cookedSquirrelMeat:1};case`tanHide`:return{leather:1};default:return{}}}function Uf(e,t){return z(e)?sp(Wf(e,t)).label:`Camp`}function Wf(e,t){return e===`fishRiver`?mp(t??`river`):t??dp(e,`meadow`)}function Gf(e){return e===`fishRiver`?cp(`fishing`):z(e)?Y:[sp(dp(e,`meadow`))]}function Kf(e,t){return`
    <span class="loop-skill-mark" aria-hidden="true">${ru[e].shortLabel}</span>
    <span class="loop-skill-label">${t}</span>
  `}function qf(e){let t=ru[e];return`--skill-accent: ${t.accent}; --skill-shade: ${t.shade};`}function Jf(e){return e.skills.foraging.selectedForagingTreeCategory}function Yf(e){return Xl.get(Yl[e])??null}function Xf(e){return e.split(/[\\/]/u).pop()??e}function Zf(e){return Kl.some(t=>t.id===e)}function Qf(e){return e===`camp`||e===`character`}function $f(e){return typeof e==`string`&&j.includes(e)}function ep(e){return Y.some(t=>t.id===e)}function tp(e){return e===`inventory`||e===`equipment`||e===`skills`||e===`log`}function np(e){return e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId===`camp`}function rp(e){return e===`camp`?`camp`:`the ${sp(e).label.toLowerCase()}`}function ip(e){return e===`foraging`||e===`mining`||e===`fishing`||e===`hunting`||e===`woodcutting`}function ap(e){return wf(`processing`).some(t=>t.id===e)}function op(e,t){return ip(e.id)?hp(e,t):ap(e.id)?gp(e):``}function sp(e,t){let n=t?cp(t):Y;return n.find(t=>t.id===e)??n[0]}function cp(e){switch(e){case`mining`:return Y.filter(e=>e.id===`mine`);case`fishing`:return Y.filter(e=>e.id===`river`||e.id===`beach`);case`hunting`:return Y.filter(e=>e.id===`meadow`);case`woodcutting`:return Y.filter(e=>e.id===`forest`);case`foraging`:return Y;default:return Y.filter(e=>e.id===`meadow`||e.id===`river`)}}function lp(e,t){return e===`mining`?`mine`:e===`hunting`?`meadow`:e===`fishing`?pp(t)?t:`river`:e===`woodcutting`?`forest`:Y.some(e=>e.id===t)?t:`meadow`}function up(e){return sp(e,`foraging`).actionIds}function dp(e,t){let n=d(e);if(n)return n.locationId;let r=i(e);return r?r.locationId:fp(e)?`mine`:e===`huntSmallAnimals`?`meadow`:e===`fishRiver`?mp(t):e===`gatherWater`||e===`gatherRiverIngredients`?`river`:e===`gatherForestIngredients`?`forest`:e===`gatherMineIngredients`?`mine`:e===`gatherDesertIngredients`||e===`gatherSand`?`desert`:e===`chopTrees`?`forest`:t}function fp(e){return e===`mineCoal`||e===`mineCopper`||e===`mineTin`}function pp(e){return e===`river`||e===`beach`}function mp(e){return pp(e)?e:`river`}function hp(e,t){return`
    <section class="panel location-panel" data-editor-id="location-panel" data-editor-label="Location tabs panel" data-editor-files="src/ui/render.ts, src/style.css">
      ${_p(cp(e.id),lp(e.id,t),e.label)}
    </section>
  `}function gp(e){return`
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
          <img class="location-tab-image" src="${pu.iconUrl}" alt="" aria-hidden="true" />
        </button>
      </div>
    </section>
  `}function _p(e,t,n){return`
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
            </button>
          `}).join(``)}
    </div>
  `}function vp(e,t,n){let r=k(t);if(!r)return``;let i=yo(e),a=i?k(i):void 0,o=R(e,t),s=q(e,t),c=n?U(e,n.loopId):null,l=B(e),u=!!(n&&c),d=!!(u&&c&&n&&xa(c,n.afterIndex,t)),f=l?Z(l)===t:!1,p=u?!d:!s||f,m=s?``:Ri(e,t),h=i??t,g=At(h),_=[{label:`Speed`,value:G(r.durationMs)},{label:`Skill`,value:`${mt(g).label} +${Nt(jt(h))} XP`},{label:`Uses`,value:i?F(K(i)):`Varies by target`},{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}],v=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&m?m:a?`Next: ${Od(a.label)}`:``,y=u?`Set`:f?`Running`:s?`Start`:`Locked`,b=Od(r.label),x=a?Od(a.label):``,S=x||kd(t),ee=i?F(K(i)):`Varies by target`;return`
    <button
      class="smithing-recipe-card craft-priority-button ${f?`active`:``} ${d?`assignable`:``} ${!o&&!d?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="action-card-${t}"
      data-editor-label="Action card: ${b}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${p}"
      data-tooltip-source
      aria-disabled="${p}"
      aria-label="${y} ${b}${x?`, next ${x}`:``}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">
        ${Q(t)}
      </span>
      <span class="smithing-recipe-copy">
        <strong>${b}</strong>
        <small>${v||`Balance stock`}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${S}</b>
        <small>${ee}</small>
      </span>
      ${bp(b,_,v)}
    </button>
  `}function yp(e,t,n){let r=k(t);if(!r)return``;let i=R(e,t),a=K(t),o=q(e,t),s=n?U(e,n.loopId):null,c=B(e),l=!!(n&&s),u=!!(l&&s&&n&&xa(s,n.afterIndex,t)),d=c?Z(c)===t:!1,f=l?!u:!o||d,p=t===`butcherFish`||t===`butcherRabbit`||t===`butcherSquirrel`||t===`cookRabbitMeat`||t===`cookSquirrelMeat`?Ri(e,t):J(e,a),m=o?``:i?p:Ri(e,t),h=Dp(t,r.durationMs),g=l?u?`Set as action loop step`:`Not valid for this loop`:!o&&m?m:``,_=l?`Set`:d?`Running`:o?`Start`:`Locked`;return`
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
        ${Q(t)}
      </span>
      ${bp(r.label,h,g)}
    </button>
  `}function Q(e){let t=xp(e);return t.length?`
    <span class="action-card-icon ${t.length>1?`multi`:``}">
      ${t.map(e=>`<img src="${e}" alt="" aria-hidden="true" />`).join(``)}
    </span>
  `:`<span class="action-card-glyph">${Ep(e)}</span>`}function bp(e,t,n){return`
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
  `}function xp(e){let t=wp(e);if(t)return Tp(t.id);let n=Sp(e);if(n.length)return n;switch(e){case`gatherSticks`:return[cl];case`gatherStones`:return[pl];case`gatherFlaxPlants`:return[jc];case`gatherFlaxFibers`:return[Ac];case`gatherMeadowIngredients`:return[Zc,Lc];case`gatherForestIngredients`:return[Mc,Lc];case`gatherRiverIngredients`:return[rl,Zc];case`gatherMineIngredients`:return[qc,Zc];case`gatherDesertIngredients`:return[Nc,Lc];case`gatherSand`:return[Nc,pl];case`gatherWater`:return[rl];case`mineCoal`:return[xc];case`mineCopper`:return[Sc];case`mineTin`:return[bl];case`fishRiver`:return[Yc];case`craftLowestTool`:return[wc];case`craftWoodenSpoon`:return[Dl];case`craftWoodenBowl`:return[Tl];case`craftLeatherBackpack`:return[Uc];case`chopTrees`:return[Pl];case`huntSmallAnimals`:return[tl,ol];case`butcherFish`:return[Oc];case`butcherRabbit`:case`cookRabbitMeat`:return[nl];case`butcherSquirrel`:case`cookSquirrelMeat`:return[sl];case`tanHide`:return[Hc];case`retFlax`:case`separateFlaxFiber`:case`handSpinLinenThread`:case`spinLinenThread`:case`weaveLinenCloth`:return[Ac];case`craftCopperNeedle`:return[Sc];case`craftBronzeNeedle`:return[Sc,bl];case`sewClothWrap`:case`sewLinenBandage`:case`sewSimplePouch`:case`sewLinenHood`:case`sewLinenShirt`:return[Ac];case`smeltCopperBar`:return[Sc,xc];case`smeltBronzeBar`:return[Sc,bl];case`craftPot`:case`craftLadle`:case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return[Sc];case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return[Sc,bl];case`craftGlassVial`:return[hl,Nc];case`brewHealthPotion`:return[Lc,Zc];case`brewManaPotion`:return[rl,Lc]}return[]}function Sp(e){let t=d(e);if(t)return[yu[t.resourceId]??Cp(dd(t))];let n=i(e);return n?[Cp(n.category)]:[]}function Cp(e){switch(e){case`fungal`:return Zc;case`berry`:case`fruit`:return Lc;case`root`:return Zc;case`vegetable`:case`staple`:return Ac;case`seasoning`:return Zc;case`flower`:return Ac;default:return Ac}}function wp(e){return A.find(t=>t.craftActionId===e)}function Tp(e){let t=_u[e];if(t)return[t];let n=A.find(t=>t.id===e);return n?.weapon?.range===`ranged`||n?.id.startsWith(`wooden`)?[Pl]:n?.weapon?[pl]:[]}function Ep(e){let t=k(e);return t?t.label.split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase():`?`}function Dp(e,t){let n=At(e),r=[{label:`Speed`,value:G(t)},{label:`Skill`,value:`${mt(n).label} +${Nt(jt(e))} XP`}],a=E(e);if(a)return[...r,{label:`Uses`,value:F(a.cost)},{label:`Makes`,value:a.toolId?a.label.replace(`Craft `,`1 `):F(a.output??{})},{label:`Unlock`,value:a.unlockHint}];let o=x(e);if(o){let e=o.actionId===`craftGlassVial`?`Stone Furnace`:`Alchemy bench`;return[...r,{label:`Panel`,value:`Brewing`},{label:`Station`,value:e},{label:`Uses`,value:F(o.cost)},{label:`Makes`,value:fi(o.actionId)},{label:`Unlock`,value:o.unlockHint}]}let s=O(e);if(s){let e=s.requiredBuildings?.length?s.requiredBuildings.map(e=>Bp(e)).join(`, `):`Camp`;return[...r,{label:`Station`,value:e},{label:`Uses`,value:F(s.cost)},{label:`Makes`,value:_i(s)},{label:`Unlock`,value:s.unlockHint}]}let c=wp(e);if(c)return[...r,{label:`Makes`,value:`1 ${c.label}`},{label:`Uses`,value:F(K(e))},...c.weapon?[{label:`Power`,value:wu(c.weapon.damage)},{label:`Style`,value:`${c.weapon.hands}H ${Su(c.weapon.range)}`}]:[]];let l=i(e);if(l)return[...r,{label:`Table`,value:Wa(l.locationId,l.category)},{label:`Pickup`,value:`1-2 weighted ${l.category} rolls`},{label:`Place`,value:sp(l.locationId).label}];let u=d(e);if(u){let e=u.minAmount===u.maxAmount?`${u.minAmount}`:`${u.minAmount}-${u.maxAmount}`;return[...r,{label:`Finds`,value:u.resourceLabel},{label:`Pickup`,value:`${e} per gather`},{label:`Type`,value:fd(dd(u))},{label:`Place`,value:sp(u.locationId).label}]}switch(e){case`gatherSticks`:return[...r,{label:`Pickup`,value:`1-3 Sticks`},{label:`Each`,value:`1 weight`}];case`gatherStones`:return[...r,{label:`Pickup`,value:`1-2 Stones`},{label:`Each`,value:`1 weight`}];case`gatherFlaxPlants`:return[...r,{label:`Pickup`,value:`2-4 Flax Plants`},{label:`Each`,value:`1 weight`}];case`gatherFlaxFibers`:return[...r,{label:`Pickup`,value:`1-3 Flax Fibers`},{label:`Each`,value:`1 weight`}];case`gatherMeadowIngredients`:return[...r,{label:`Table`,value:Wa(`meadow`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Herbs, flowers, berries, fruit, roots, vegetables, staples, seasonings`}];case`gatherForestIngredients`:return[...r,{label:`Table`,value:Wa(`forest`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Berries, herbs, nuts, fungus, resin`}];case`gatherRiverIngredients`:return[...r,{label:`Table`,value:Wa(`river`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Wetland herbs, roots, seeds, fungus`}];case`gatherMineIngredients`:return[...r,{label:`Table`,value:Wa(`mine`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Cave herbs, fungus, roots, lichen`}];case`gatherDesertIngredients`:return[...r,{label:`Table`,value:Wa(`desert`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Desert herbs, fruit, roots, flowers, fungus`}];case`gatherSand`:return[...r,{label:`Pickup`,value:`2-5 Sand`},{label:`Place`,value:`Desert`}];case`gatherWater`:return[...r,{label:`Pickup`,value:`1-3 Water`},{label:`Place`,value:`River`}];case`mineCoal`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Coal`},{label:`Each`,value:`1 weight`}];case`mineCopper`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Copper`},{label:`Each`,value:`1 weight`}];case`mineTin`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Tin`},{label:`Each`,value:`1 weight`}];case`fishRiver`:return[...r,{label:`Requires`,value:`Fishing Pole`},{label:`Pickup`,value:`1 fish`},{label:`Each`,value:`0.5-7.5 lb`},{label:`Fish`,value:`Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb`}];case`chopTrees`:return[...r,{label:`Pickup`,value:`2-4 Wood, 35% chance for 1 Stick`},{label:`Each`,value:`Wood 2 weight, Stick 1 weight`}];case`huntSmallAnimals`:return[...r,{label:`Pickup`,value:`1 Rabbit or Squirrel`},{label:`Each`,value:`Rabbit 2-5 lb, Squirrel 0.5-2 lb`}];case`craftLowestTool`:return[...r,{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}];case`craftBasket`:return[...r,{label:`Makes`,value:`1 Basket`},{label:`Uses`,value:F(K(e))}];case`craftWoodenSpoon`:return[...r,{label:`Makes`,value:`1 Wooden Spoon`},{label:`Uses`,value:F(K(e))}];case`craftFishingPole`:return[...r,{label:`Makes`,value:`1 Fishing Pole`},{label:`Uses`,value:F(K(e))}];case`craftLeatherBackpack`:return[...r,{label:`Makes`,value:`1 Leather Backpack`},{label:`Uses`,value:F(K(e))}];case`butcherFish`:return[...r,{label:`Uses`,value:`1 carried fish`},{label:`Makes`,value:`Matching filet at 50% fish weight`}];case`butcherRabbit`:return[...r,{label:`Uses`,value:`1 Rabbit`},{label:`Each`,value:`2-5 lb`},{label:`Makes`,value:`1-2 Rabbit Meat; knife can recover Hide or Bone`}];case`butcherSquirrel`:return[...r,{label:`Uses`,value:`1 Squirrel`},{label:`Each`,value:`0.5-2 lb`},{label:`Makes`,value:`1 Squirrel Meat; knife can recover Hide or Bone`}];case`cookRabbitMeat`:return[...r,{label:`Uses`,value:`1 Rabbit Meat`},{label:`Makes`,value:`1 Cooked Rabbit Meat`}];case`cookSquirrelMeat`:return[...r,{label:`Uses`,value:`1 Squirrel Meat`},{label:`Makes`,value:`1 Cooked Squirrel Meat`}];case`tanHide`:return[...r,{label:`Uses`,value:`1 Hide`},{label:`Makes`,value:`1 Leather`}]}return r}function Op(e,t){let n=Fe.filter(n=>zi(e,n.id,t));return`
    <section class="panel camp-panel" data-editor-id="camp-panel" data-editor-label="Camp structures and inventory panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="camp-panel-section">
        <div class="section-heading">
          <span>Structures</span>
        </div>
        <div class="craft-list">
          ${n.length?n.map(n=>Pp(e,n,t)).join(``):`<div class="empty-line">Nothing sturdy enough to name yet.</div>`}
        </div>
      </div>
      ${kp(e)}
    </section>
  `}function kp(e){let t=j,n=Ap(t);return`
    <div class="camp-panel-section camp-inventory-section" data-editor-id="camp-inventory-section" data-editor-label="Camp inventory section" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Camp Inventory</span>
      </div>
      ${t.length?`
            <div class="camp-inventory-content">
              ${n.map(t=>cm(e,t)).join(``)}
              ${fm(e)}
              ${Mp(e)}
            </div>
          `:`<div class="empty-line">No resources stored yet.</div>`}
    </div>
  `}function Ap(e){let t=new Map(ql.map(e=>[e,[]])),n=new Map,r=[];for(let i of e){let e=Ie.find(e=>e.id===i);if(!e)continue;let a=jp(e),o=a?`forage`:e.group;r.includes(o)||r.push(o),a?t.get(a)?.push(i):n.set(e.group,[...n.get(e.group)??[],i])}return r.flatMap(e=>{if(e===`forage`)return ql.flatMap(e=>{let n=t.get(e)??[];return n.length?[{id:`forage-${e}`,label:fd(e),ids:n,usePlaceholderIcons:!0}]:[]});let r=n.get(e)??[];return r.length?[{id:e,label:Im(e),ids:r}]:[]})}function jp(e){let t=e.cooking?.ingredientCategory;return!t||t===`meat`?null:dd({category:t,tags:e.cooking?.tags??[]})}function Mp(e){let t=j.filter(t=>e.inventory[t]>0&&Ul(t));return t.length?`
    <section class="resource-group food-use-panel" data-editor-id="food-use-panel" data-editor-label="Food use panel" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Food</h3>
      <div class="food-use-list">
        ${t.map(t=>Np(e,t)).join(``)}
      </div>
    </section>
  `:``}function Np(e,t){let n=Vl(e,t),r=Bl(e,t),i=zl(t);return`
    <div class="food-use-row">
      <span>
        <strong>${N(t)}</strong>
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
  `}function Pp(e,t,n){let r=Ip(e,t.id,n),i=Bi(e,t.id,n),a=bn(e,t.recipe),o=np(e),s=Lp(t.id),c=!i||!s&&r||!a||!o,l=Rp(e,t.id,n),u=i?zp(e,t.id,n):`Locked`;return`
    <article class="craft-item building-card ${r||pn(e,t.id)>0?`owned`:``} ${i?``:`locked`} ${t.id===`campfire`&&r?`lit`:``}" data-editor-id="building-card-${t.id}" data-editor-label="Building card: ${t.label}" data-editor-files="src/ui/render.ts, src/style.css">
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
        ${Fp(e,t,n)}
      </button>
    </article>
  `}function Fp(e,t,n){let r=Ip(e,t.id,n),i=Bi(e,t.id,n),a=bn(e,t.recipe),o=np(e),s=[{label:`Status`,value:Vp(e,t.id,n,r,a,o,i)},{label:`Unlock`,value:Vi(e,t.id)},{label:`Skill`,value:`Construction +${Nt(Mt(t.id))} XP`},{label:`Cost`,value:F(t.recipe)},{label:`Use`,value:t.blurb}];return`
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
  `}function Ip(e,t,n){return Lp(t)?!1:t===`campfire`?L(e,n):e.buildings[t]}function Lp(e){return e===`hideTent`}function Rp(e,t,n){switch(t){case`campfire`:return L(e,n)?gc:_c;case`tanningRack`:return Sl;case`hideTent`:return xl;case`crudeStoneFurnace`:return hl;case`primitiveSpinningWheel`:case`primitiveLoom`:return _c}}function zp(e,t,n){return Lp(t)?`Build`:t===`campfire`&&L(e,n)?`Lit`:Ip(e,t,n)?`Built`:`Build`}function Bp(e){return Fe.find(t=>t.id===e)?.label??e}function Vp(e,t,n,r,i,a,o){if(!o)return`Locked: ${Vi(e,t)}`;if(!a&&!r)return`Needs ${X(e).name} at camp`;if(t===`hideTent`){let n=pn(e,t);return i?`Tents: ${n}; next gives +1 housing`:`Tents: ${n}; needs ${J(e,Fe.find(e=>e.id===t)?.recipe??{})}`}return t===`campfire`?r?`Lit, burns out in <b data-campfire-remaining>${G(Jr(e,n))}</b>`:i?`Ready to build, burns for 15m`:`Needs ${J(e,Fe.find(e=>e.id===t)?.recipe??{})}`:r?`Built`:i?`Ready to build`:`Needs ${J(e,Fe.find(e=>e.id===t)?.recipe??{})}`}function Hp(e,t){let n=X(e);return`
    <div class="work-area single-panel">
      <section class="panel character-detail-panel" aria-label="${n.name} details" data-active-tab="${t}" data-editor-id="character-detail-panel" data-editor-label="Character detail panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="character-detail-heading">
          ${id(n)}
          <span class="character-detail-title">
            <strong>${n.name}</strong>
            <small>${xf(e,n)}</small>
          </span>
        </div>
        ${Up(e)}
      </section>
    </div>
  `}function Up(e){return`
    <div class="character-detail-content character-overview-content">
      <div class="character-overview-full">
        ${sm(e)}
      </div>
      <div class="character-overview-pair">
        <section class="character-overview-section" aria-label="Equipment overview" data-editor-id="character-overview-equipment" data-editor-label="Character overview equipment" data-editor-files="src/ui/render.ts, src/style.css">
          ${mm(e,!1)}
        </section>
        ${Wp(e)}
      </div>
      <div class="character-overview-full">
        <section class="character-overview-section" aria-label="Skills overview" data-editor-id="character-overview-skills" data-editor-label="Character overview skills" data-editor-files="src/ui/render.ts, src/style.css">
          ${Kp(e)}
        </section>
      </div>
    </div>
  `}function Wp(e){let t=X(e),n=B(e,t.id),r=t.actionLoopId?U(e,t.actionLoopId):null,i=n?k(Z(n))?.label??`Working`:`Idle`,a=ts(e,t.id),o=bs(e,t.id)??t.combat;return`
    <section class="character-overview-section character-stats-overview" aria-label="Character stats" data-editor-id="character-overview-stats" data-editor-label="Character overview stats" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Stats</h3>
      <dl class="character-stat-list">
        ${[{label:`Status`,value:xf(e,t)},{label:`Location`,value:rp(t.locationId)},{label:`Current`,value:i},{label:`Action Loop`,value:r?Fm(r.name):`None`},{label:`Class`,value:a.classLabel},{label:`Weapon`,value:a.weaponLabel},{label:`Hunger`,value:`${Math.round(t.needs.hunger)} / ${Math.round(t.needs.maxHunger)}`},{label:`HP`,value:`${Math.round(o.hp)} / ${Math.round(o.maxHp)}`},{label:`Mana`,value:`${Math.round(o.mana)} / ${Math.round(o.maxMana)}`},..._m(e)].map(e=>`
            <div class="character-stat-row">
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
      </dl>
    </section>
  `}function Gp(e){return`
    <button
      class="camp-log-toggle ${e?`active`:``}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${e}"
    >
      Camp Log
    </button>
  `}function Kp(e){return`
    <h3>Skills</h3>
    <section class="side-panel-content skills-screen" aria-label="Skills" data-editor-id="skills-screen" data-editor-label="Skills screen" data-editor-files="src/ui/render.ts, src/style.css">
      ${iu.filter(e=>e.skillIds.length>0).map(t=>qp(e,t)).join(``)}
      ${Qp(e)}
    </section>
  `}function qp(e,t){let n=t.skillIds.filter(e=>rt.some(t=>t.id===e)).map(t=>Jp(e,t)).join(``);return`
    <section class="skill-group skill-group-${t.label.toLowerCase()}" aria-label="${t.label} skills">
      <h4>${t.label}</h4>
      <div class="skill-group-list">
        ${n||`<div class="empty-line">No skills yet.</div>`}
      </div>
    </section>
  `}function Jp(e,t){let n=mt(t),r=e.skills[t],i=Zl[t];if(i)return`
      <div class="character-skill-control-row" data-editor-id="skill-row-${t}" data-editor-label="Skill row: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
        ${Yp(e,t,n.label,r.level,i)}
      </div>
    `;let a=St(r),o=a.atCap?a.canPrestige?`Prestige ready`:`Max level`:`${Nt(a.xpIntoLevel)} / ${Nt(a.xpForLevel)} XP`,s=r.prestige>0?`P${r.prestige}`:`P0`,c=Df(t),l=!!(c&&!a.canPrestige),u=c?`data-command="open-character-skill-panel" data-id="${t}"${l?` role="button" tabindex="0" aria-label="Open ${n.label} skill panel"`:``}`:``;return`
    <article class="skill-row ${a.canPrestige?`prestige-ready`:``} ${c?`skill-row-actionable`:``}" ${u} data-editor-id="skill-row-${t}" data-editor-label="Skill row: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${n.label}</strong>
          <small>Total ${Nt(r.totalXp)} XP</small>
        </span>
        <span class="skill-level-pill">Lv ${r.level}</span>
      </div>
      <div class="skill-progress-track" aria-hidden="true">
        <span style="transform: scaleX(${Math.min(1,Math.max(0,a.ratio)).toFixed(4)})"></span>
      </div>
      <div class="skill-row-meta">
        <span>${o}</span>
        <span>${s} - Cap ${a.cap}</span>
      </div>
      ${a.canPrestige?`<button class="skill-prestige-button" type="button" data-command="prestige-skill" data-id="${t}">Prestige</button>`:``}
    </article>
  `}function Yp(e,t,n,r,i){let a=Df(t);return`
    <div class="character-skill-banner-control">
      <button
        class="character-skill-banner-button"
        type="button"
        data-command="open-character-skill-panel"
        data-id="${t}"
        aria-label="Go to ${a?Cf(a).label:n} actions"
      >
        <img class="character-skill-banner-image" src="${i}" alt="" aria-hidden="true" />
      </button>
      ${Xp(e,t,n,r)}
    </div>
  `}function Xp(e,t,n,r){return t===`foraging`?Zp(r,Jf(e)):`
    <button
      class="character-skill-tree-button plain"
      type="button"
      data-command="open-character-skill-panel"
      data-id="${t}"
      aria-label="${n} level ${r}"
      title="Open ${n} actions"
    >
      <span class="character-skill-tree-button-label">LvL ${r}</span>
    </button>
  `}function Zp(e,t){let n=t?Yf(t):null,r=`LvL ${e}`,i=t?_t(t).label:`None`;return`
    <button
      class="character-skill-tree-button ${n?`has-background`:`plain`}"
      type="button"
      data-command="open-foraging-skill-tree"
      data-foraging-level-badge
      data-foraging-tree-category="${t??`none`}"
      aria-label="Foraging level ${e}${t?`, ${i} tree`:``}"
      title="Open Foraging skill tree"
    >
      ${n?`<img class="character-skill-tree-button-art" src="${n}" alt="" aria-hidden="true" />`:``}
      <span class="character-skill-tree-button-label">${r}</span>
    </button>
  `}function Qp(e){let t=X(e),n=ts(e,t.id);return`
    <section class="skill-group combat-class-group" aria-label="Combat class experience">
      <h4>Combat</h4>
      <div class="skill-group-list">
        ${pe.filter(e=>{let r=t.classProgress[e.id];return e.id===n.classId||(r?.totalXp??0)>0}).map(t=>$p(e,t.id)).join(``)}
      </div>
    </section>
  `}function $p(e,t){let n=X(e),r=pe.find(e=>e.id===t)??pe[0],i=n.classProgress[t],a=as(i),o=a.atCap?`Max level`:`${os(a.xpIntoLevel)} / ${os(a.xpForLevel)} XP`;return`
    <article class="skill-row combat-class-row" data-editor-id="combat-class-row-${t}" data-editor-label="Combat class row: ${r.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${r.label}</strong>
          <small>${r.weaponLabel} - Total ${os(i.totalXp)} XP</small>
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
  `}function em(e,t,n,r,i,a){let o=U(e,t),s=fa(e).length;return`
    <div class="work-area single-panel">
      <section class="panel action-loop-page-panel action-loop-panel" aria-label="Action loops" data-editor-id="action-loops-panel" data-editor-label="Action loops panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="loop-panel-heading">
          <h3>Action Loops</h3>
          <button class="loop-create-button" type="button" data-command="create-loop">New</button>
        </div>
        <div class="loop-picker" aria-label="Saved action loops">
          ${e.actionLoops.map(t=>am(e,t.id,o?.id??null)).join(``)}
        </div>
        ${o?`
              <div class="loop-editor">
                <div class="loop-editor-heading">
                  <label class="loop-name-field">
                    <span>Name</span>
                    <input
                      type="text"
                      value="${Fm(o.name)}"
                      maxlength="42"
                      data-loop-field="name"
                      data-loop-id="${o.id}"
                      aria-label="Action loop name"
                    />
                    <small>${o.actionIds.length} ${o.actionIds.length===1?`step`:`steps`}; ${s} active</small>
                  </label>
                  <button
                    class="loop-delete-button"
                    type="button"
                    data-command="delete-loop"
                    data-loop-id="${o.id}"
                    ${e.actionLoops.length<=1?`disabled`:``}
                  >
                    Delete
                  </button>
                </div>
                ${tm(e,o,n,i,a)}
                ${lf(e,o.id,r,n)}
                <div class="loop-assignment-list">
                  ${e.characters.map(t=>om(e,o.id,t)).join(``)}
                </div>
              </div>
            `:`<div class="empty-line">No loops built yet.</div>`}
      </section>
    </div>
  `}function tm(e,t,n,r,i){let a=Math.min(t.actionIds.length-1,Math.max(0,n)),o=t.actionIds[a],s=Ea(t,a),c=pf(o);return`
    <section class="loop-step-editor" aria-label="Selected loop step" data-editor-id="loop-step-editor" data-editor-label="Loop step editor" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="loop-step-editor-heading">
        <span>
          <strong>Step ${a+1}: ${c}</strong>
          <small>${mf(e,t,a)}</small>
        </span>
      </div>
      <div class="loop-step-field-grid">
        ${nm(t,a,o,r)}
        ${rm(t,a,o,i)}
        <label class="loop-step-field">
          <span>Advance</span>
          <select data-loop-field="advance-mode" data-loop-id="${t.id}" data-id="${a}">
            ${Kl.map(e=>`
                <option value="${e.id}" ${s.mode===e.id?`selected`:``}>${e.label}</option>
              `).join(``)}
          </select>
        </label>
        ${im(t,a,o,s)}
      </div>
      <small class="loop-step-hint">${Rf(s.mode)}</small>
    </section>
  `}function nm(e,t,n,r){if(!z(n))return`
      <div class="loop-step-field readonly">
        <span>Location</span>
        <strong>Camp</strong>
      </div>
    `;let i=Gf(n),a=Wf(n,e.locationIds[t]??null),o=sp(a);if(i.length<=1)return`
      <div class="loop-step-field readonly">
        <span>Location</span>
        <strong>${o.label}</strong>
      </div>
    `;let s=r?.loopId===e.id&&r.index===t;return`
    <div class="loop-step-field loop-location-field">
      <span>Location</span>
      <div class="loop-location-picker ${s?`open`:``}">
        <button
          class="loop-location-button"
          type="button"
          data-command="toggle-loop-location-menu"
          data-loop-id="${e.id}"
          data-id="${t}"
          aria-haspopup="menu"
          aria-expanded="${s}"
          aria-label="Location: ${o.label}"
        >
          <img src="${o.iconUrl}" alt="" aria-hidden="true" />
          <span class="loop-location-label">${o.label}</span>
        </button>
        ${s?`<div class="loop-location-menu" role="menu" aria-label="Choose step location">
                ${i.map(n=>{let r=n.id===a;return`
                      <button
                        class="loop-location-option ${r?`active`:``}"
                        type="button"
                        data-command="set-loop-step-location"
                        data-loop-id="${e.id}"
                        data-id="${t}"
                        data-location-id="${n.id}"
                        role="menuitemradio"
                        aria-checked="${r}"
                        title="${n.label}"
                      >
                        <img src="${n.iconUrl}" alt="" aria-hidden="true" />
                        <span class="loop-location-label">${n.label}</span>
                      </button>
                    `}).join(``)}
              </div>`:``}
      </div>
    </div>
  `}function rm(e,t,n,r){let i=At(n),a=mt(i),o=r?.loopId===e.id&&r.index===t;return`
    <div class="loop-step-field loop-skill-field">
      <span>Skill</span>
      <div class="loop-skill-picker ${o?`open`:``}">
        <button
          class="loop-skill-button"
          type="button"
          data-command="toggle-loop-skill-menu"
          data-loop-id="${e.id}"
          data-id="${t}"
          aria-haspopup="menu"
          aria-expanded="${o}"
          aria-label="Skill: ${a.label}"
          style="${qf(i)}"
        >
          ${Kf(i,a.label)}
        </button>
        ${o?`<div class="loop-skill-menu" role="menu" aria-label="Choose step skill">
                ${nu.map(n=>{let r=mt(n.skillId),a=n.skillId===i;return`
                      <button
                        class="loop-skill-option ${a?`active`:``}"
                        type="button"
                        data-command="set-loop-step-skill"
                        data-loop-id="${e.id}"
                        data-id="${t}"
                        data-skill-id="${n.skillId}"
                        role="menuitemradio"
                        aria-checked="${a}"
                        title="${r.label}"
                        style="${qf(n.skillId)}"
                      >
                        ${Kf(n.skillId,r.label)}
                      </button>
                    `}).join(``)}
              </div>`:``}
      </div>
    </div>
  `}function im(e,t,n,r){if(r.mode!==`whenResourceAtLeast`)return``;let i=zf(r,n),a=r.scope??`camp`,o=Math.max(1,Math.floor(r.amount??1));return`
    <label class="loop-step-field">
      <span>Stock</span>
      <select data-loop-field="advance-resource" data-loop-id="${e.id}" data-id="${t}">
        ${j.map(e=>`
            <option value="${e}" ${i===e?`selected`:``}>${N(e)}</option>
          `).join(``)}
      </select>
    </label>
    <label class="loop-step-field">
      <span>Source</span>
      <select data-loop-field="advance-scope" data-loop-id="${e.id}" data-id="${t}">
        <option value="camp" ${a===`camp`?`selected`:``}>Camp</option>
        <option value="character" ${a===`character`?`selected`:``}>Character</option>
      </select>
    </label>
    <label class="loop-step-field">
      <span>Amount</span>
      <input type="number" min="1" step="1" value="${o}" data-loop-field="advance-amount" data-loop-id="${e.id}" data-id="${t}" />
    </label>
  `}function am(e,t,n){let r=U(e,t);if(!r)return``;let i=e.characters.filter(e=>e.actionLoopId===r.id).length,a=n===r.id;return`
    <button
      class="loop-picker-button ${a?`active`:``}"
      type="button"
      data-command="select-loop-step"
      data-loop-id="${r.id}"
      data-id="0"
      aria-pressed="${a}"
    >
      <span>${Fm(r.name)}</span>
      <small>${i} assigned</small>
    </button>
  `}function om(e,t,n){let r=n.actionLoopId===t,i=B(e,n.id),a=r?i?`Running`:`Assigned`:`Assign`;return`
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
        <small>${xf(e,n)}</small>
      </span>
      <em>${a}</em>
    </button>
  `}function sm(e){let t=X(e),n=bf(t.name),r=Tn(e,t.id),i=j.filter(n=>r[n]>0||Mn(e,n,`character`,t.id)>0),a=On(e,t.id),o=kn(e,t.id),s=i.filter(e=>!!yu[e]),c=i.filter(e=>!yu[e]),l=!B(e)&&np(e);return`
    <div class="resource-group character-inventory-group" data-editor-id="character-inventory-group" data-editor-label="Character inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="inventory-summary-heading">
        <h3>${n} Inventory</h3>
        <span>${Nm(a)}/${Nm(o)}</span>
      </div>
      ${i.length?`<button class="deposit-button" type="button" data-command="deposit-carried" ${l?``:`disabled`}>Store at Camp</button>`:``}
      ${i.length?`
            ${s.length?`<div class="inventory-resource-grid" aria-label="${n} carried inventory">
                    ${s.map(n=>um(e,n,r,`character`,t.id)).join(``)}
                  </div>`:``}
            ${c.map(e=>lm(e,r)).join(``)}
          `:`<div class="empty-line">Pack empty.</div>`}
    </div>
  `}function cm(e,t){let n=t.usePlaceholderIcons?t.ids:t.ids.filter(e=>!!yu[e]),r=t.usePlaceholderIcons?[]:t.ids.filter(e=>!yu[e]),i=t.usePlaceholderIcons?` camp-forage-inventory-group`:``,a=t.usePlaceholderIcons?` camp-forage-inventory-grid`:``;return`
    <div class="resource-group${i}" data-editor-id="resource-group-${t.id}" data-editor-label="${t.label} resource group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${t.label}</h3>
      ${n.length?`<div class="inventory-resource-grid${a}" aria-label="${t.label} inventory">
              ${n.map(n=>um(e,n,e.inventory,`camp`,e.selectedCharacterId,t.usePlaceholderIcons?Ac:void 0)).join(``)}
            </div>`:``}
      ${r.map(t=>`
        ${lm(t,e.inventory)}
      `).join(``)}
    </div>
  `}function lm(e,t){return`
    <div class="resource-row">
      <span>
        <strong>${N(e)}</strong>
        <small>${Ie.find(t=>t.id===e)?.blurb??``}</small>
      </span>
      <b>${Mm(e,t[e])}</b>
    </div>
  `}function um(e,t,n=e.inventory,r=`camp`,i=e.selectedCharacterId,a){let o=yu[t]??a,s=Ie.find(e=>e.id===t);if(!o||!s)return``;let c=dm(s),l=Mn(e,t,r,i),u=Ge(t)?`, quantity ${l}`:``;return`
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${s.label}, ${Mm(t,n[t])}${u}" data-editor-id="inventory-resource-${r}-${t}" data-editor-label="Inventory resource: ${s.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <img class="slot-item-icon" src="${o}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${qe(t,n[t])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${s.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${c}</dd>
          </div>
          ${We(t)?`<div>
                  <dt>Total</dt>
                  <dd>${Mm(t,n[t])}</dd>
                </div>`:``}
          ${Ge(t)?`<div>
                  <dt>Quantity</dt>
                  <dd>${l}</dd>
                </div>`:``}
          <div>
            <dt>Use</dt>
            <dd>${s.blurb}</dd>
          </div>
        </dl>
      </div>
    </article>
  `}function dm(e){let t=jp(e);return t?fd(t):Im(e.group)}function fm(e){let t=A.filter(t=>e.tools[t.id].quantity>0);return t.length?`
    <section class="resource-group tool-inventory" data-editor-id="tool-inventory-group" data-editor-label="Tool inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${t.map(t=>pm(e,t.id)).join(``)}
      </div>
    </section>
  `:``}function pm(e,t){let n=A.find(e=>e.id===t),r=e.tools[t];if(!n||r.quantity<=0)return``;let i=Si(t),a=[{label:`Durability`,value:`${i}/${i}`},...xu(t)];return`
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${n.label}, ${r.quantity} ${r.quantity===1?`spare`:`spares`}" data-editor-id="inventory-tool-${t}" data-editor-label="Inventory tool: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${bm(t)}
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
  `}function mm(e,t=!0){return`
    <section class="side-panel-content equipment-screen" data-editor-id="equipment-screen" data-editor-label="Equipment screen" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="equipment-section">
        <h3>Equipment</h3>
        <div class="equipment-grid" aria-label="Tool equipment slots">
          ${hu.slice(0,mu).map((t,n)=>t&&e.tools[t].owned?ym(e,t):xm(n,t)).join(``)}
        </div>
      </div>
      ${gu.map(e=>hm(e)).join(``)}
      ${t?`<div class="equipment-section equipment-stats-section">
              <h3>Equipment Stats</h3>
              <dl class="equipment-stat-list">
                ${_m(e).map(e=>`
                    <div class="equipment-stat-row">
                      <dt>${e.label}</dt>
                      <dd>${e.value}</dd>
                    </div>
                  `).join(``)}
              </dl>
            </div>`:``}
    </section>
  `}function hm(e){return`
    <div class="equipment-section equipment-placeholder-section" data-editor-id="equipment-placeholder-${td(e.label)}" data-editor-label="${e.label} equipment slots" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${e.label}</h3>
      <div class="equipment-placeholder-grid" aria-label="${e.label} slots">
        ${e.slots.map(t=>gm(e.label,t)).join(``)}
      </div>
    </div>
  `}function gm(e,t){return`
    <div class="equipment-slot empty equipment-placeholder-slot" aria-label="Empty ${t} slot" data-editor-id="equipment-placeholder-${td(e)}-${td(t)}" data-editor-label="Equipment placeholder: ${t}" data-editor-files="src/ui/render.ts, src/style.css">
      <strong>${t}</strong>
    </div>
  `}function _m(e){let t=X(e),n=A.filter(t=>e.tools[t.id].owned).filter(t=>e.tools[t.id].durability>0),r=A.reduce((t,n)=>t+e.tools[n.id].quantity,0),i=On(e,t.id),a=kn(e,t.id),o=Math.max(0,a-10),s=vm(e);return[{label:`Carry`,value:`${Nm(i)} / ${Nm(a)} lb`},{label:`Carry Bonus`,value:o>0?`+${Nm(o)} lb`:`None`},{label:`Usable Tools`,value:`${n.length} / ${hu.filter(Boolean).length}`},{label:`Spares`,value:r>0?`${r}`:`None`},{label:`Field Effects`,value:s.length?s.join(`, `):`None`}]}function vm(e){let t=[];for(let[n,r]of[[`fishing`,`Fishing`],[`butchering`,`Butchering`],[`woodcutting`,`Woodcutting`],[`mining`,`Mining`],[`hunting`,`Hunting`]]){let i=Ti(e,n);if(!i)continue;let a=A.find(e=>e.id===i),o=a&&a.tier!==`primitive`?`${Cu(a.tier)} `:``;t.push(n===`hunting`&&a?`${r} (${a.label})`:`${o}${r}`)}return t}function ym(e,t){let n=A.find(e=>e.id===t),r=e.tools[t];if(!n||!r.owned)return``;let i=Si(t),a=Math.max(0,r.durability),o=a>0,s=(a/i*100).toFixed(1),c=[{label:`Durability`,value:o?`${a}/${i}`:`Broken`},{label:`Inventory`,value:`${r.quantity} ${r.quantity===1?`spare`:`spares`}`},...xu(t)],l=!!_u[t];return`
    <article class="equipment-slot ${o?``:`broken`} ${l?`icon-only`:``}" tabindex="0" data-tooltip-source aria-label="${n.label}" data-editor-id="equipment-slot-${t}" data-editor-label="Equipment slot: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${bm(t)}
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
  `}function bm(e){let t=_u[e];return t?`<img class="slot-item-icon" src="${t}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${Sm(e)}</span>`}function xm(e,t){let n=t?vu[t]??`Empty`:`Empty`;return`
    <div class="equipment-slot empty" aria-label="Empty equipment slot ${e+1}">
      <span class="slot-glyph">${t?Sm(t):`+`}</span>
      <strong>${n}</strong>
    </div>
  `}function Sm(e){switch(e){case`basket`:return`BK`;case`leatherBackpack`:return`BP`;case`fishingPole`:return`FP`;case`stoneAxe`:return`HT`;case`stonePickAxe`:return`PX`;case`copperPickaxe`:return`CP`;case`copperHatchet`:return`CH`;case`copperKnife`:return`CK`;case`bronzePickaxe`:return`BP`;case`bronzeHatchet`:return`BH`;case`bronzeKnife`:return`BK`;case`stoneSpear`:return`SP`;case`stoneKnife`:return`SK`;case`woodenSword`:return`WS`;case`woodenTwoHandedSword`:return`2S`;case`woodenClub`:return`WC`;case`woodenTwoHandedClub`:return`2C`;case`shortBow`:return`SB`;case`woodenTotem`:return`WT`}return(A.find(t=>t.id===e)?.label??e).split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase()}function Cm(e,t){if(!(e instanceof Element))return null;let n=e.closest(`[data-tooltip-source]`);return n&&t.contains(n)?n:null}function wm(e,t){let n=t.querySelector(`.slot-tooltip`),r=Dm(e);!n||!r||(r.innerHTML=n.innerHTML,r.setAttribute(`aria-hidden`,`false`),r.classList.add(`visible`),Em(e,t))}function Tm(e){let t=Dm(e);t&&(t.classList.remove(`visible`),t.setAttribute(`aria-hidden`,`true`),t.innerHTML=``)}function Em(e,t){let n=Dm(e);if(!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth,o=window.innerHeight,s=i.width,c=i.height,l=r.left-s-8;if(l<12){let e=r.right+8;l=e+s<=a-12?e:a-s-12}let u=Math.max(12,o-c-12),d=Math.min(Math.max(r.top,12),u);n.style.left=`${Math.max(12,Math.round(l))}px`,n.style.top=`${Math.round(d)}px`}function Dm(e){return e.querySelector(`.tooltip-layer`)}function Om(e){return new Map([`.log-list`,`.side-panel-content`,`.character-overview-content`].map(t=>[t,e.querySelector(t)?.scrollTop??0]))}function km(e,t){for(let[n,r]of t){let t=e.querySelector(n);t&&(t.scrollTop=r)}}function Am(e,t,n,r=``){let i=e.log.filter(e=>sn(e)===t);return`
    <section class="log-panel ${r}" data-editor-id="${t}-log-panel" data-editor-label="${n}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>${n}</span>
        <span class="quiet">${i.length}</span>
      </div>
        <div class="log-list">
          ${i.map(e=>`
            <p class="log-entry ${e.tone}">
              <span>${e.text}</span>
              ${jm(e)}
            </p>
          `).join(``)}
        </div>
    </section>
  `}function jm(e){if(e.aggregateItems){let t=j.filter(t=>(e.aggregateItems?.[t]??0)>0).map(t=>{let n=e.aggregateItems?.[t]??0;return`<b>+${qe(t,n)} ${Pm(t,n)}</b>`});return t.length?`<span class="log-gains">${t.join(``)}</span>`:``}return e.aggregateTotal?`<span class="log-gains"><b>+${e.aggregateTotal} ${e.aggregateUnit??``}</b></span>`:``}function Mm(e,t){return We(e)?`${qe(e,t)} lb`:qe(e,t)}function Nm(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}function Pm(e,t){let n=N(e);if(We(e))return`lb ${n}`;if(t===1)return n;switch(e){case`wood`:case`rabbitMeat`:case`squirrelMeat`:case`cookedRabbitMeat`:case`cookedSquirrelMeat`:case`leather`:case`rettedFlax`:case`linenThread`:case`linenCloth`:return n;case`flaxPlant`:return`Flax Plants`;case`flaxFiber`:return`Flax Fibers`;case`coal`:case`copper`:case`tin`:case`copperBar`:case`bronzeBar`:case`pot`:case`ladle`:return n;case`copperNeedle`:return`Copper Needles`;case`bronzeNeedle`:return`Bronze Needles`;case`water`:return`Water`;case`dirtyBowl`:return`Dirty Bowls`;case`woodenSpoon`:return`Wooden Spoons`;case`clothWrap`:return`Cloth Wraps`;case`linenBandage`:return`Linen Bandages`;case`simplePouch`:return`Simple Pouches`;case`linenHood`:return`Linen Hoods`;case`linenShirt`:return`Linen Shirts`;default:return n.endsWith(`s`)?n:`${n}s`}}function Fm(e){return e.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}})}function Im(e){switch(e){case`resources`:return`Resources`;case`animals`:return`Animals`;case`hunted`:return`Meats`;case`fish`:return`Fish`;case`crafted`:return`Worked`;case`ingredients`:return`Ingredients`;case`food`:return`Food`;case`liquids`:return`Liquids`;case`utensils`:return`Utensils`;default:return e}}var Lm=document.querySelector(`#app`);if(!Lm)throw Error(`App root was not found.`);var $=Xn(),Rm=1,zm=Math.max(Date.now(),$.lastSimulatedAt),Bm=Date.now(),Vm=Tu(Lm,{requestRender:()=>Hm(),persist:()=>Wr($),reset:()=>{Ym(),$=Gr(),Hm()},getNow:()=>Jm(),getTestRewardMultiplier:()=>Rm,setTestRewardMultiplier:e=>{Rm=Rm===e?1:e,Qe(Rm)}});function Hm(){let e=Jm();Vm($,e)}function Um(){let e=Jm(),t=Gm();if(Eo($,e),Ys($),Gs($,e),vs($,e),t!==Gm()){Hm();return}Km()}Hm(),Wm(),window.setInterval(Um,1e3),window.setInterval(()=>Wr($),2e3),window.addEventListener(`beforeunload`,()=>Wr($));function Wm(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./service-worker.js`).catch(()=>{})})}function Gm(){return JSON.stringify({inventory:$.inventory,characterInventory:$.characterInventory,resourceCounts:$.resourceCounts,characterResourceCounts:$.characterResourceCounts,characters:$.characters.map(e=>({id:e.id,condition:e.condition,locationId:e.locationId,needs:e.needs,actionLoopId:e.actionLoopId,combat:e.combat,classProgress:e.classProgress,inventory:e.inventory,resourceCounts:e.resourceCounts})),tools:$.tools,buildings:$.buildings,buildingCounts:$.buildingCounts,campfireExpiresAt:$.campfireExpiresAt,seenResources:$.seenResources,skills:$.skills,cooking:$.cooking,combat:$.combat,actionLoops:$.actionLoops,currentActions:fa($).map(e=>({actionId:e.actionId,characterId:e.characterId,phase:e.phase,originLocationId:e.originLocationId,targetLocationId:e.targetLocationId,locationId:e.locationId,loopActionIds:e.loopActionIds,loopLocationIds:e.loopLocationIds,loopIndex:e.loopIndex,nextLoopIndex:e.nextLoopIndex,followUpActionId:e.followUpActionId,startedAt:e.startedAt,endsAt:e.endsAt})),logHead:$.log[0]?.id??``,logLength:$.log.length})}function Km(){let e=Jm();qm(e);let t=document.querySelector(`[data-action-progress]`),n=document.querySelector(`[data-action-remaining]`),r=document.querySelector(`[data-smithing-action-progress]`),i=document.querySelector(`[data-smithing-action-remaining]`),a=document.querySelector(`[data-alchemy-action-progress]`),o=document.querySelector(`[data-alchemy-action-remaining]`),s=document.querySelector(`[data-textile-action-progress]`),c=document.querySelector(`[data-textile-action-remaining]`),l=document.querySelector(`[data-cooking-action-progress]`),u=document.querySelector(`[data-cooking-action-remaining]`),d=B($);if(d){let l=Math.min(1,Math.max(0,Do($,e)));t&&(t.style.transform=`scaleX(${l.toFixed(4)})`),n&&(n.textContent=G(d.endsAt-e)),r&&(r.style.transform=`scaleX(${l.toFixed(4)})`),i&&(i.textContent=G(d.endsAt-e)),a&&(a.style.transform=`scaleX(${l.toFixed(4)})`),o&&(o.textContent=G(d.endsAt-e)),s&&(s.style.transform=`scaleX(${l.toFixed(4)})`),c&&(c.textContent=G(d.endsAt-e))}let f=Ks($);if(f){let t=qs(f,e);l&&(l.style.transform=`scaleX(${t.toFixed(4)})`),u&&(u.textContent=G((f.endsAt??e)-e))}}function qm(e){let t=document.querySelectorAll(`[data-campfire-remaining]`);if(!(!t.length||!$.campfireExpiresAt))for(let n of t)n.textContent=G($.campfireExpiresAt-e)}function Jm(){let e=Date.now(),t=Math.max(0,e-Bm);return zm+=t,Bm=e,zm}function Ym(){let e=Date.now();zm=e,Bm=e}function Xm(){Km(),window.requestAnimationFrame(Xm)}window.requestAnimationFrame(Xm);