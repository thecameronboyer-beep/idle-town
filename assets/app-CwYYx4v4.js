import"./modulepreload-polyfill-CSRv37U6.js";/* empty css              */import{a as e,c as t,d as n,f as r,i,l as a,m as o,n as s,o as c,p as l,r as u,s as d,u as f}from"./gatherables-CYwZvo_S.js";var p=[`craftGlassVial`,`brewHealthPotion`,`brewManaPotion`],m=[{actionId:`craftGlassVial`,label:`Craft Glass Vial`,verb:`firing glass vials`,panel:`brewing`,kind:`vessel`,durationMs:18e3,cost:{sand:3,coal:1},output:{glassVial:2},blurb:`Fire clean desert sand into small potion vessels.`,unlockHint:`Build Stone Furnace`},{actionId:`brewHealthPotion`,label:`Brew Health Potion`,verb:`brewing a health potion`,panel:`brewing`,kind:`potion`,durationMs:26e3,cost:{glassVial:1,water:1,yarrow:1,plantainLeaf:1},output:{healthPotion:1},blurb:`Steep meadow medicines into a vial for future healing.`,unlockHint:`Craft Glass Vial and find Meadow Ingredients`},{actionId:`brewManaPotion`,label:`Brew Mana Potion`,verb:`brewing a mana potion`,panel:`brewing`,kind:`potion`,durationMs:26e3,cost:{glassVial:1,water:1,silverleafHerb:1},output:{manaPotion:1},blurb:`Steep river herbs into a vial for future mana recovery.`,unlockHint:`Craft Glass Vial and find River Ingredients`}],h=m.filter(e=>e.panel===`brewing`).map(e=>e.actionId);function g(e){return m.find(t=>t.actionId===e)}function _(e){return p.some(t=>t===e)}var v=[`smeltCopperBar`,`smeltBronzeBar`,`craftPot`,`craftLadle`,`craftCopperPickaxe`,`craftCopperHatchet`,`craftCopperKnife`,`craftBronzePickaxe`,`craftBronzeHatchet`,`craftBronzeKnife`],y=[{actionId:`smeltCopperBar`,label:`Smelt Copper Bar`,verb:`smelting copper`,kind:`smelting`,material:`copper`,durationMs:22e3,cost:{copper:2,coal:1},output:{copperBar:1},blurb:`Refine soft copper ore into a first workable bar.`,unlockHint:`Build Stone Furnace`},{actionId:`smeltBronzeBar`,label:`Smelt Bronze Bar`,verb:`smelting bronze`,kind:`smelting`,material:`bronze`,durationMs:32e3,cost:{copper:2,tin:1,coal:2},output:{bronzeBar:1},blurb:`Blend copper and tin into a harder bronze bar.`,unlockHint:`Craft a Copper Tool`},{actionId:`craftPot`,label:`Craft Pot`,verb:`shaping a pot`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:2},output:{pot:1},blurb:`Hammer copper into a simple vessel.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftLadle`,label:`Craft Ladle`,verb:`shaping a ladle`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:14e3,cost:{copperBar:1,stick:1},output:{ladle:1},blurb:`Rivet a small copper cup to a wooden handle.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftCopperPickaxe`,label:`Craft Copper Pickaxe`,verb:`smithing a copper pickaxe`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:24e3,cost:{copperBar:3,stick:1,flaxFiber:1},toolId:`copperPickaxe`,blurb:`A softer metal pick with better balance than stone.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperHatchet`,label:`Craft Copper Hatchet`,verb:`smithing a copper hatchet`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:22e3,cost:{copperBar:2,stick:1,flaxFiber:1},toolId:`copperHatchet`,blurb:`A compact copper chopping head lashed to a handle.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperKnife`,label:`Craft Copper Knife`,verb:`smithing a copper knife`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:1,stick:1,flaxFiber:1},toolId:`copperKnife`,blurb:`A sharper, longer-lasting knife for camp work.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftBronzePickaxe`,label:`Craft Bronze Pickaxe`,verb:`smithing a bronze pickaxe`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:3e4,cost:{bronzeBar:3,stick:1,flaxFiber:1},toolId:`bronzePickaxe`,blurb:`A sturdy bronze mining tool with a harder edge.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeHatchet`,label:`Craft Bronze Hatchet`,verb:`smithing a bronze hatchet`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:28e3,cost:{bronzeBar:2,stick:1,flaxFiber:1},toolId:`bronzeHatchet`,blurb:`A bronze chopping tool that holds its bite.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeKnife`,label:`Craft Bronze Knife`,verb:`smithing a bronze knife`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:22e3,cost:{bronzeBar:1,stick:1,flaxFiber:1},toolId:`bronzeKnife`,blurb:`A reliable bronze edge for finer butchering.`,unlockHint:`Smelt Bronze Bar`}],b=y.filter(e=>e.kind===`smelting`).map(e=>e.actionId),ee=y.filter(e=>e.kind===`smithing`).map(e=>e.actionId);function x(e){return y.find(t=>t.actionId===e)}function S(e){return v.some(t=>t===e)}var C=[`copperNeedle`,`bronzeNeedle`],w=[{actionId:`retFlax`,label:`Ret Flax`,verb:`retting flax`,kind:`retting`,durationMs:6e4,cost:{flaxPlant:3},output:{rettedFlax:3},blurb:`Soak and wait out whole flax stalks until the fibers loosen from the woody stem.`,unlockHint:`Gather Flax Plant`,requiredSeenResources:[`flaxPlant`]},{actionId:`separateFlaxFiber`,label:`Separate Flax Fiber`,verb:`breaking flax`,kind:`fiber`,durationMs:3e4,cost:{rettedFlax:2},output:{flaxFiber:3},blurb:`Break, scrape, and comb retted stalks into clean flax fiber.`,unlockHint:`Ret Flax`,requiredSeenResources:[`rettedFlax`]},{actionId:`handSpinLinenThread`,label:`Hand Spin Linen Thread`,verb:`hand-spinning thread`,kind:`spinning`,durationMs:26e3,cost:{flaxFiber:1},output:{linenThread:1},blurb:`Twist clean flax fiber into usable linen thread by hand.`,unlockHint:`Separate Flax Fiber`,requiredSeenResources:[`flaxFiber`]},{actionId:`spinLinenThread`,label:`Spin Linen Thread`,verb:`spinning thread`,kind:`spinning`,durationMs:18e3,cost:{flaxFiber:5},output:{linenThread:5},blurb:`Use the spinning wheel to turn a batch of flax fiber into thread more quickly.`,unlockHint:`Build Primitive Spinning Wheel`,requiredBuildings:[`primitiveSpinningWheel`],requiredSeenResources:[`flaxFiber`]},{actionId:`weaveLinenCloth`,label:`Weave Linen Cloth`,verb:`weaving linen cloth`,kind:`weaving`,durationMs:36e3,cost:{linenThread:4},output:{linenCloth:1},blurb:`Work linen thread across the loom into a sturdy cloth panel.`,unlockHint:`Build Primitive Loom`,requiredBuildings:[`primitiveLoom`],requiredSeenResources:[`linenThread`]},{actionId:`craftCopperNeedle`,label:`Craft Copper Needle`,verb:`crafting a copper needle`,kind:`tooling`,durationMs:12e3,cost:{copperBar:1},output:{copperNeedle:1},blurb:`Draw a soft copper bar into a basic needle for stitching linen.`,unlockHint:`Smelt Copper Bar`,requiredSeenResources:[`copperBar`]},{actionId:`craftBronzeNeedle`,label:`Craft Bronze Needle`,verb:`crafting a bronze needle`,kind:`tooling`,durationMs:14e3,cost:{bronzeBar:1},output:{bronzeNeedle:1},blurb:`Shape a harder bronze needle for steadier sewing work.`,unlockHint:`Smelt Bronze Bar`,requiredSeenResources:[`bronzeBar`]},{actionId:`sewClothWrap`,label:`Sew Cloth Wrap`,verb:`sewing a cloth wrap`,kind:`sewing`,durationMs:14e3,cost:{linenCloth:1,linenThread:1},output:{clothWrap:1},blurb:`Hem a small linen wrap for tying and protecting loose goods.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...C]},{actionId:`sewLinenBandage`,label:`Sew Linen Bandage`,verb:`sewing a linen bandage`,kind:`sewing`,durationMs:12e3,cost:{linenCloth:1},output:{linenBandage:1},blurb:`Cut and stitch clean linen into simple bandage strips.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...C]},{actionId:`sewSimplePouch`,label:`Sew Simple Pouch`,verb:`sewing a simple pouch`,kind:`sewing`,durationMs:22e3,cost:{linenCloth:2,linenThread:2},output:{simplePouch:1},blurb:`Sew a small pouch with tied corners and a linen drawstring.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...C]},{actionId:`sewLinenHood`,label:`Sew Linen Hood`,verb:`sewing a linen hood`,kind:`sewing`,durationMs:24e3,cost:{linenCloth:2,linenThread:2},output:{linenHood:1},blurb:`Cut and sew a simple linen hood from woven cloth panels.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...C]},{actionId:`sewLinenShirt`,label:`Sew Linen Shirt`,verb:`sewing a linen shirt`,kind:`sewing`,durationMs:3e4,cost:{linenCloth:4,linenThread:3},output:{linenShirt:1},blurb:`Stitch linen panels into a simple shirt for future clothing systems.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...C]}],T=w.map(e=>e.actionId),te=ce(`retting`),ne=ce(`fiber`),re=ce(`spinning`),ie=ce(`weaving`),ae=ce(`tooling`),oe=ce(`sewing`);function E(e){return w.find(t=>t.actionId===e)}function se(e){return w.some(t=>t.actionId===e)}function ce(e){return w.filter(t=>t.kind===e).map(e=>e.actionId)}var le=[{id:`gatherSticks`,label:`Gather Sticks`,verb:`gathering sticks`,durationMs:7e3,blurb:`Slow, reliable foraging near camp.`},{id:`gatherStones`,label:`Gather Stones`,verb:`searching for stones`,durationMs:8500,blurb:`Cameron checks creek beds and exposed roots.`},{id:`gatherFlaxPlants`,label:`Gather Flax Plants`,verb:`cutting flax plants`,durationMs:11e3,blurb:`Cut whole flax stalks for later retting and fiber work.`},{id:`gatherFlaxFibers`,label:`Gather Flax Fibers`,verb:`pulling flax fibers`,durationMs:1e4,blurb:`Thin stalks stripped by hand for future craft.`},{id:`gatherMeadowIngredients`,label:`Gather Meadow Ingredients`,verb:`gathering meadow ingredients`,durationMs:12e3,blurb:`Search the meadow for herbs, flowers, berries, fruit, roots, vegetables, and staples.`},{id:`gatherForestIngredients`,label:`Gather Forest Forage`,verb:`gathering forest forage`,durationMs:14e3,blurb:`Search the forest floor for berries, herbs, nuts, fungus, and resin.`},{id:`gatherRiverIngredients`,label:`Gather River Forage`,verb:`gathering river forage`,durationMs:13500,blurb:`Search the riverbank for wetland herbs, roots, seeds, and fungus.`},{id:`gatherMineIngredients`,label:`Gather Mine Forage`,verb:`gathering mine forage`,durationMs:17e3,blurb:`Search the mine for cave herbs, fungus, roots, crystals, and lichens.`},{id:`gatherDesertIngredients`,label:`Gather Desert Forage`,verb:`gathering desert forage`,durationMs:18e3,blurb:`Search the desert scrub for hardy herbs, fruit, roots, flowers, and fungus.`},...s.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...i.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),{id:`gatherSand`,label:`Gather Sand`,verb:`gathering sand`,durationMs:1e4,blurb:`Collect clean desert sand for furnace glasswork.`},{id:`mineCoal`,label:`Mine Coal`,verb:`mining coal`,durationMs:3e4,blurb:`Chip dark fuel from the mine wall.`},{id:`mineCopper`,label:`Mine Copper`,verb:`mining copper`,durationMs:3e4,blurb:`Break reddish ore from stone seams.`},{id:`mineTin`,label:`Mine Tin`,verb:`mining tin`,durationMs:3e4,blurb:`Work pale ore from fractured rock.`},{id:`fishRiver`,label:`Fishing River`,verb:`fishing the river`,durationMs:15e3,blurb:`Cast into the shallows for small river fish.`},{id:`gatherWater`,label:`Gather Water`,verb:`gathering water`,durationMs:9e3,blurb:`Carry usable river water back for camp cooking.`},{id:`craftLowestTool`,label:`Primitive Tools`,verb:`balancing tool stock`,durationMs:15e3,blurb:`Craft whichever primitive tool has the lowest current stock.`},{id:`craftBasket`,label:`Craft Basket`,verb:`crafting a basket`,durationMs:15e3,blurb:`Weave flax fibers around a simple stick frame.`},{id:`craftWoodenSpoon`,label:`Craft Wooden Spoon`,verb:`carving a wooden spoon`,durationMs:1e4,blurb:`Carve a small wooden spoon for eating hot camp stew.`},{id:`craftFishingPole`,label:`Craft Fishing Pole`,verb:`crafting a fishing pole`,durationMs:15e3,blurb:`Bind flax line to a flexible stick.`},{id:`craftWoodenBowl`,label:`Craft Wooden Bowl`,verb:`carving a wooden bowl`,durationMs:12e3,blurb:`Carve a simple camp bowl from usable wood.`},{id:`craftStoneKnife`,label:`Craft Stone Knife`,verb:`crafting a stone knife`,durationMs:15e3,blurb:`Shape a compact edge for hide work and close combat.`},{id:`craftStoneAxe`,label:`Craft Stone Hatchet`,verb:`crafting a stone hatchet`,durationMs:15e3,blurb:`Bind a chopping head to a short haft.`},{id:`craftStonePickAxe`,label:`Craft Stone Pick Axe`,verb:`crafting a stone pick axe`,durationMs:15e3,blurb:`Lash a pointed stone head to a sturdy handle.`},{id:`craftStoneSpear`,label:`Craft Stone Spear`,verb:`crafting a stone spear`,durationMs:15e3,blurb:`Lash a stone point to a balanced shaft.`},{id:`craftWoodenClub`,label:`Craft Wooden Club`,verb:`crafting a wooden club`,durationMs:16e3,blurb:`Shape hardwood into a heavier primitive weapon.`},{id:`craftWoodenTwoHandedClub`,label:`Craft Wooden 2H Club`,verb:`crafting a wooden two-handed club`,durationMs:18e3,blurb:`Shape a larger club for slower, stronger blows.`},{id:`craftWoodenSword`,label:`Craft Wooden Sword`,verb:`crafting a wooden sword`,durationMs:17e3,blurb:`Harden and bind a wooden blade for controlled combat.`},{id:`craftWoodenTwoHandedSword`,label:`Craft Wooden 2H Sword`,verb:`crafting a wooden two-handed sword`,durationMs:2e4,blurb:`Shape a long wooden blade that favors power over speed.`},{id:`craftShortBow`,label:`Craft Short Bow`,verb:`crafting a short bow`,durationMs:2e4,blurb:`Bend wood and flax fiber into a simple ranged weapon.`},{id:`craftWoodenTotem`,label:`Craft Wooden Totem`,verb:`carving a wooden totem`,durationMs:19e3,blurb:`Carve a wooden focus for steadier primitive combat.`},{id:`chopTrees`,label:`Chop Trees`,verb:`chopping trees`,durationMs:18e3,blurb:`The first real push beyond loose branches.`},{id:`huntSmallAnimals`,label:`Hunt Small Animals`,verb:`hunting small animals`,durationMs:28e3,blurb:`Bring back whole rabbits or squirrels for later work.`},{id:`butcherFish`,label:`Butcher Fish`,verb:`butchering fish`,durationMs:15e3,blurb:`Clean one carried fish into matching filets at half weight.`},{id:`butcherRabbit`,label:`Butcher Rabbit`,verb:`butchering a rabbit`,durationMs:18e3,blurb:`Break down a rabbit into useful parts.`},{id:`butcherSquirrel`,label:`Butcher Squirrel`,verb:`butchering a squirrel`,durationMs:14e3,blurb:`Break down a squirrel into useful parts.`},{id:`cookRabbitMeat`,label:`Cook Rabbit Meat`,verb:`cooking rabbit meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`cookSquirrelMeat`,label:`Cook Squirrel Meat`,verb:`cooking squirrel meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`tanHide`,label:`Tan Hide`,verb:`working hide`,durationMs:36e3,blurb:`Scrape, stretch, wait, repeat.`},{id:`craftLeatherBackpack`,label:`Craft Leather Backpack`,verb:`crafting a leather backpack`,durationMs:15e3,blurb:`Knot a crude leather sling pouch with a drawstring.`},...y.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...m.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...w.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb}))];function D(e){return le.find(t=>t.id===e)}var ue=[{id:`fighter`,label:`Fighter`,weaponLabel:`Sword`,role:`A steady front-line duelist.`,range:`melee`,maxHp:34,maxMana:10},{id:`warrior`,label:`Warrior`,weaponLabel:`2H Sword`,role:`A slower heavy striker.`,range:`melee`,maxHp:38,maxMana:8},{id:`bruiser`,label:`Bruiser`,weaponLabel:`Club`,role:`A rugged close-range brawler.`,range:`melee`,maxHp:36,maxMana:8},{id:`crusher`,label:`Crusher`,weaponLabel:`2H Club`,role:`A heavy impact fighter.`,range:`melee`,maxHp:40,maxMana:6},{id:`archer`,label:`Archer`,weaponLabel:`Short Bow`,role:`A ranged skirmisher.`,range:`ranged`,maxHp:28,maxMana:12},{id:`shaman`,label:`Shaman`,weaponLabel:`Totem`,role:`A focus user prepared for future support magic.`,range:`focus`,maxHp:30,maxMana:30},{id:`mage`,label:`Mage`,weaponLabel:`Wand`,role:`A focused caster placeholder for future wand combat.`,range:`focus`,maxHp:24,maxMana:36},{id:`caster`,label:`Caster`,weaponLabel:`Staff`,role:`A long-form spellcaster placeholder for future staff combat.`,range:`focus`,maxHp:26,maxMana:40},{id:`rogue`,label:`Rogue`,weaponLabel:`Dagger`,role:`A fast close-range striker.`,range:`melee`,maxHp:30,maxMana:14}],de={woodenSword:`fighter`,woodenTwoHandedSword:`warrior`,woodenClub:`bruiser`,woodenTwoHandedClub:`crusher`,shortBow:`archer`,woodenTotem:`shaman`,stoneKnife:`rogue`,stoneSpear:`warrior`},fe=[{id:`goblin`,label:`Goblin`,blurb:`A small melee raider that closes distance and swings at nearby party members.`,glyph:`G`,maxHp:16,maxMana:0,damage:2,attackRange:1,actEveryMs:2200}],pe=[{id:`ruins`,label:`The Ruins`,blurb:`Broken stone lanes where the first hostile creatures test the camp's fighters.`,gridWidth:7,gridHeight:5,enemyIds:[`goblin`]}],me=ue.map(e=>e.id),he=fe.map(e=>e.id),ge=pe.map(e=>e.id);function _e(e){return ue.find(t=>t.id===e)??ue[0]}function ve(e){return fe.find(t=>t.id===e)??fe[0]}function ye(e){return pe.find(t=>t.id===e)??pe[0]}var be=[{id:`campfire`,name:`Campfire`,label:`Campfire`,requiredBuildingId:`campfire`,tags:[`primitive`,`stew`,`open-fire`],fuelMode:`existing-campfire`,description:`A simple fire ring that can hold one primitive cooking job at a time.`}],xe=[ke({id:`rabbitStew`,name:`Rabbit Stew`,outputId:`rabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`dandelionGreens`,role:`plant`}],hunger:24,xpReward:220,tags:[`meat`,`starter`]}),ke({id:`squirrelHerbStew`,name:`Squirrel Herb Stew`,outputId:`squirrelHerbStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`plantainLeaf`,role:`plant`},{id:`yarrow`,role:`seasoning`}],hunger:19,xpReward:240,tags:[`meat`,`herbal`]}),ke({id:`rootStew`,name:`Root Stew`,outputId:`rootStew`,ingredients:[{id:`sunrootTubers`,role:`plant`},{id:`wildCarrot`,role:`plant`},{id:`clover`,role:`plant`}],hunger:18,xpReward:210,tags:[`meadow`,`vegetarian`,`roots`]}),ke({id:`wildGarlicRabbitStew`,name:`Wild Garlic Rabbit Stew`,outputId:`wildGarlicRabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`wildGarlic`,role:`seasoning`},{id:`sorrel`,role:`plant`}],hunger:28,xpReward:275,levelRequirement:2,tags:[`meat`,`allium`,`sour`]}),ke({id:`meadowStew`,name:`Meadow Stew`,outputId:`meadowStew`,ingredients:[{id:`dandelionGreens`,role:`plant`},{id:`clover`,role:`plant`},{id:`plantainLeaf`,role:`plant`},{id:`wildOnion`,role:`seasoning`},{id:`sunrootTubers`,role:`plant`}],hunger:22,xpReward:260,levelRequirement:2,tags:[`meadow`,`vegetarian`,`five-plant`]}),ke({id:`mintedSquirrelStew`,name:`Minted Squirrel Stew`,outputId:`mintedSquirrelStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`mint`,role:`seasoning`},{id:`wildOnion`,role:`seasoning`}],hunger:22,xpReward:285,levelRequirement:3,tags:[`meat`,`aromatic`]}),...Oe(`rabbitMeat`,`Rabbit`,[[`sorrel`,`Sorrel`,25],[`yarrow`,`Yarrow`,24],[`hearthcap`,`Hearthcap`,27]]),...Oe(`squirrelMeat`,`Squirrel`,[[`wildGarlic`,`Wild Garlic`,22],[`fennel`,`Fennel`,21],[`hearthcap`,`Hearthcap`,23]])],Se=xe.map(e=>e.id);xe.filter(e=>e.tags.includes(`stew`)),xe.flatMap(e=>e.outputs.map(e=>e.resourceId));var Ce=xe.map(e=>({id:e.outputs[0].resourceId,label:e.name,group:`food`,blurb:Ae(e),stackSize:20,weight:.8,value:Math.max(6,Math.round(e.xpReward/35)),rarity:e.levelRequirement>=3?`uncommon`:`common`,nutrition:e.nutrition,spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`prepared`,`stew`,...e.tags],compatibility:[`eat`,`serve`,`tavern`]}}));function we(e){return be.find(t=>t.id===e)}function Te(e){return xe.find(t=>t.id===e)}function Ee(e){return e.ingredients.reduce((e,t)=>(t.resourceId&&t.consumed!==!1&&(e[t.resourceId]=(e[t.resourceId]??0)+t.amount),e),{})}function De(e){return e.outputs.reduce((e,t)=>(e[t.resourceId]=(e[t.resourceId]??0)+t.amount,e),{})}function Oe(e,t,n){return n.map(([n,r,i],a)=>ke({id:`${n}${t}Stew`,name:`${r} ${t} Stew`,outputId:`${n}${t}Stew`,ingredients:[{id:e,role:`meat`},{id:n,role:`seasoning`},{id:a%2==0?`dandelionGreens`:`plantainLeaf`,role:`plant`}],hunger:i,xpReward:250+a*20,levelRequirement:2+a,tags:[`meat`,`generated`,`accent`]}))}function ke(e){let t=[{resourceId:e.outputId,amount:1},{resourceId:`dirtyBowl`,amount:1}];return{id:e.id,name:e.name,station:`campfire`,cookTimeMs:e.cookTimeMs??24e3,ingredients:[{resourceId:`water`,amount:1,role:`liquid`},{resourceId:`woodenBowl`,amount:1,role:`vessel`},...e.ingredients.map(e=>({resourceId:e.id,amount:e.amount??1,role:e.role}))],outputs:t,xpReward:e.xpReward,levelRequirement:e.levelRequirement??1,tags:[`stew`,`primitive`,...e.tags??[]],nutrition:{hunger:e.hunger},failureChance:e.failureChance??.03,modifiers:[`quality-ready`,`season-ready`,`station-ready`]}}function Ae(e){return e.tags.includes(`vegetarian`)?`A rough bowl of meadow plants simmered until soft enough to fill the belly.`:e.tags.includes(`aromatic`)||e.tags.includes(`accent`)?`A primitive stew carried by a strong meadow scent and small-game broth.`:`A simple campfire stew of water, gathered plants, and whatever meat the day allowed.`}var O=[{id:`stoneKnife`,label:`Stone Knife`,craftActionId:`craftStoneKnife`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A compact stone edge for butchering and close-quarters combat.`,maxDurability:18,roles:[`butchering`,`hunting`],roleTiers:{butchering:1},tier:`primitive`,weapon:{damage:2.2,speed:1.2,hands:1,range:`melee`},quickCraft:!0},{id:`stoneAxe`,label:`Stone Hatchet`,craftActionId:`craftStoneAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Heavy enough to bite into small trees.`,maxDurability:12,roles:[`woodcutting`],roleTiers:{woodcutting:1},tier:`primitive`,quickCraft:!0},{id:`stonePickAxe`,label:`Stone Pick Axe`,craftActionId:`craftStonePickAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A pointed stone head for breaking stubborn ground.`,maxDurability:12,roles:[`mining`],roleTiers:{mining:1},tier:`primitive`,quickCraft:!0},{id:`stoneSpear`,label:`Stone Spear`,craftActionId:`craftStoneSpear`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A reach weapon for rabbits and squirrels.`,maxDurability:10,roles:[`hunting`],tier:`primitive`,weapon:{damage:2.4,speed:.9,hands:2,range:`melee`},quickCraft:!0},{id:`woodenClub`,label:`Wooden Club`,craftActionId:`craftWoodenClub`,recipe:{wood:2},blurb:`A shaped hardwood weapon with more heft than loose branches.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3,speed:.9,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedClub`,label:`Wooden 2H Club`,craftActionId:`craftWoodenTwoHandedClub`,recipe:{wood:4},blurb:`A heavy two-handed cudgel for decisive primitive strikes.`,maxDurability:24,roles:[`hunting`],tier:`primitive`,weapon:{damage:4,speed:.75,hands:2,range:`melee`},quickCraft:!0},{id:`woodenSword`,label:`Wooden Sword`,craftActionId:`craftWoodenSword`,recipe:{wood:2,flaxFiber:1},blurb:`A hardened wooden blade for controlled early combat.`,maxDurability:20,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.4,speed:1,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedSword`,label:`Wooden 2H Sword`,craftActionId:`craftWoodenTwoHandedSword`,recipe:{wood:4,flaxFiber:2},blurb:`A long wooden blade that trades speed for stronger blows.`,maxDurability:26,roles:[`hunting`],tier:`primitive`,weapon:{damage:4.3,speed:.85,hands:2,range:`melee`},quickCraft:!0},{id:`shortBow`,label:`Short Bow`,craftActionId:`craftShortBow`,recipe:{wood:2,flaxFiber:3},blurb:`A simple bow that brings safer range to small-game hunts.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.8,speed:1.1,hands:2,range:`ranged`},quickCraft:!0},{id:`woodenTotem`,label:`Wooden Totem`,craftActionId:`craftWoodenTotem`,recipe:{wood:3,flaxFiber:2},blurb:`A carved focus that steadies the hand during primitive combat.`,maxDurability:22,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.2,speed:.8,hands:1,range:`focus`},quickCraft:!0},{id:`copperPickaxe`,label:`Copper Pickaxe`,recipe:{copperBar:3,stick:1,flaxFiber:1},blurb:`A softer metal pick with better balance than stone.`,maxDurability:24,roles:[`mining`],roleTiers:{mining:2},tier:`copper`},{id:`copperHatchet`,label:`Copper Hatchet`,recipe:{copperBar:2,stick:1,flaxFiber:1},blurb:`A compact copper chopping head lashed to a handle.`,maxDurability:22,roles:[`woodcutting`],roleTiers:{woodcutting:2},tier:`copper`},{id:`copperKnife`,label:`Copper Knife`,recipe:{copperBar:1,stick:1,flaxFiber:1},blurb:`A sharper, longer-lasting knife for camp work.`,maxDurability:30,roles:[`butchering`],roleTiers:{butchering:2},tier:`copper`},{id:`bronzePickaxe`,label:`Bronze Pickaxe`,recipe:{bronzeBar:3,stick:1,flaxFiber:1},blurb:`A sturdy bronze mining tool with a harder edge.`,maxDurability:42,roles:[`mining`],roleTiers:{mining:3},tier:`bronze`},{id:`bronzeHatchet`,label:`Bronze Hatchet`,recipe:{bronzeBar:2,stick:1,flaxFiber:1},blurb:`A bronze chopping tool that holds its bite.`,maxDurability:38,roles:[`woodcutting`],roleTiers:{woodcutting:3},tier:`bronze`},{id:`bronzeKnife`,label:`Bronze Knife`,recipe:{bronzeBar:1,stick:1,flaxFiber:1},blurb:`A reliable bronze edge for finer butchering.`,maxDurability:48,roles:[`butchering`],roleTiers:{butchering:3},tier:`bronze`},{id:`fishingPole`,label:`Fishing Pole`,craftActionId:`craftFishingPole`,recipe:{stick:1,flaxFiber:1},blurb:`A simple line and hook for working the river.`,maxDurability:16,roles:[`fishing`],roleTiers:{fishing:1},tier:`primitive`,quickCraft:!0},{id:`basket`,label:`Basket`,craftActionId:`craftBasket`,recipe:{stick:1,flaxFiber:3},blurb:`A one-hand woven carrier for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`,quickCraft:!0},{id:`leatherBackpack`,label:`Leather Backpack`,recipe:{leather:10},blurb:`A crude sling pouch for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`}],je=O.filter(e=>!!(e.craftActionId&&e.quickCraft)),Me=[{id:`campfire`,label:`Campfire`,recipe:{stick:8,stone:5},blurb:`A fixed fire ring for cooking meat.`},{id:`tanningRack`,label:`Tanning Rack`,recipe:{stick:6,wood:4,stone:2},blurb:`A rough frame for turning hide into leather.`},{id:`hideTent`,label:`Hide Tent`,recipe:{wood:5,hide:10},blurb:`A hide shelter for holding warmth at camp.`},{id:`crudeStoneFurnace`,label:`Stone Furnace`,recipe:{stone:16,stick:6,wood:4},blurb:`A low stone furnace hot enough for first smelting.`},{id:`primitiveSpinningWheel`,label:`Primitive Spinning Wheel`,recipe:{wood:8,stick:6,linenThread:2},blurb:`A simple frame, spindle, and wheel for turning flax fiber into thread faster.`},{id:`primitiveLoom`,label:`Primitive Loom`,recipe:{wood:10,stick:8,linenThread:4},blurb:`A wooden frame for stretching warp threads and weaving linen cloth.`}],Ne=[{id:`stick`,label:`Stick`,group:`resources`,blurb:`Dry kindling and crude handles.`},{id:`stone`,label:`Stone`,group:`resources`,blurb:`Weight, edge, and spark.`},{id:`flaxPlant`,label:`Flax Plant`,group:`resources`,blurb:`Fresh flax stalks that need retting before useful fiber can be combed free.`},{id:`rettedFlax`,label:`Retted Flax`,group:`resources`,blurb:`Soaked and loosened flax stems ready for breaking and combing.`},{id:`flaxFiber`,label:`Flax Fiber`,group:`resources`,blurb:`Pale plant fiber for future cordage and cloth.`},{id:`linenThread`,label:`Linen Thread`,group:`crafted`,blurb:`Twisted flax fiber ready for weaving, stitching, and more precise craft.`},{id:`linenCloth`,label:`Linen Cloth`,group:`crafted`,blurb:`Woven linen panels ready for sewing into useful camp goods.`},{id:`wood`,label:`Wood`,group:`resources`,blurb:`Usable lengths from felled trees.`},{id:`woodenBowl`,label:`Wooden Bowl`,group:`utensils`,blurb:`A hand-carved wooden bowl for simple camp meals.`,stackSize:20,weight:.5,value:3,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`vessel`,`primitive`],compatibility:[`stew`]}},{id:`coal`,label:`Coal`,group:`resources`,blurb:`Dark fuel chipped from the mine.`},{id:`copper`,label:`Copper`,group:`resources`,blurb:`Soft reddish ore for future metalwork.`},{id:`tin`,label:`Tin`,group:`resources`,blurb:`Pale ore that will matter once bronze is possible.`},{id:`sand`,label:`Sand`,group:`resources`,blurb:`Clean desert sand ready for furnace glasswork.`,stackSize:99,weight:.2,value:1,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`copperBar`,label:`Copper Bar`,group:`crafted`,blurb:`A worked bar ready for first metal tools.`},{id:`bronzeBar`,label:`Bronze Bar`,group:`crafted`,blurb:`A harder alloy bar for sturdier tools.`},{id:`copperNeedle`,label:`Copper Needle`,group:`crafted`,blurb:`A simple metal needle for first linen sewing.`},{id:`bronzeNeedle`,label:`Bronze Needle`,group:`crafted`,blurb:`A stronger needle for steady linen sewing work.`},{id:`clothWrap`,label:`Cloth Wrap`,group:`crafted`,blurb:`A simple folded linen wrap for bundling small resources.`},{id:`linenBandage`,label:`Linen Bandage`,group:`crafted`,blurb:`Clean linen strips prepared for future medical use.`},{id:`simplePouch`,label:`Simple Pouch`,group:`crafted`,blurb:`A small sewn linen pouch for organizing camp goods.`},{id:`linenHood`,label:`Linen Hood`,group:`crafted`,blurb:`A simple sewn hood for future clothing systems.`},{id:`linenShirt`,label:`Linen Shirt`,group:`crafted`,blurb:`A plain linen shirt, ready for later equipment and quality systems.`},{id:`pot`,label:`Pot`,group:`crafted`,blurb:`A simple worked vessel for holding heat and liquid.`},{id:`ladle`,label:`Ladle`,group:`crafted`,blurb:`A small handled tool for moving hot metal safely.`},{id:`glassVial`,label:`Glass Vial`,group:`crafted`,blurb:`A small fired vessel for careful alchemy work.`,stackSize:50,weight:.1,value:4,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`healthPotion`,label:`Health Potion`,group:`liquids`,blurb:`A red meadow brew prepared for future healing systems.`,stackSize:20,weight:.2,value:12,rarity:`uncommon`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`manaPotion`,label:`Mana Potion`,group:`liquids`,blurb:`A blue river brew prepared for future mana recovery systems.`,stackSize:20,weight:.2,value:12,rarity:`uncommon`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`water`,label:`Water`,group:`liquids`,blurb:`Clean enough river water stored for camp cooking.`,stackSize:50,weight:1,value:1,rarity:`common`,nutrition:{hydration:8},spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`water`,`liquid`,`stew-base`],compatibility:[`stew`,`brew`]}},{id:`dirtyBowl`,label:`Dirty Bowl`,group:`utensils`,blurb:`A used bowl with stew clinging to the inside. Washing can come later.`,stackSize:20,weight:.5,value:1,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`dirty`,`reuse-hook`],compatibility:[`washing`]}},{id:`woodenSpoon`,label:`Wooden Spoon`,group:`utensils`,blurb:`A small carved wooden spoon for eating hot stew without burning fingers.`,stackSize:20,weight:.2,value:2,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`spoon`,`utensil`,`primitive`],compatibility:[`eat-stew`]}},{id:`minnow`,label:`Minnow`,group:`fish`,blurb:`Tiny river fish, quick to smoke or stew.`},{id:`stoneLoach`,label:`Stone Loach`,group:`fish`,blurb:`Bottom-feeding fish from cold stones.`},{id:`mudskipper`,label:`Mudskipper`,group:`fish`,blurb:`A stubborn shore fish pulled from muddy shallows.`},{id:`brookStickleback`,label:`Brook Stickleback`,group:`fish`,blurb:`Small, sharp-backed fish from fast water.`},{id:`pebblePerch`,label:`Pebble Perch`,group:`fish`,blurb:`A broad little perch hiding under river stones.`},{id:`minnowFilet`,label:`Minnow Filet`,group:`fish`,blurb:`Cleaned minnow meat, lighter after butchering.`},{id:`stoneLoachFilet`,label:`Stone Loach Filet`,group:`fish`,blurb:`Cleaned stone loach meat, lighter after butchering.`},{id:`mudskipperFilet`,label:`Mudskipper Filet`,group:`fish`,blurb:`Cleaned mudskipper meat, lighter after butchering.`},{id:`brookSticklebackFilet`,label:`Brook Stickleback Filet`,group:`fish`,blurb:`Cleaned brook stickleback meat, lighter after butchering.`},{id:`pebblePerchFilet`,label:`Pebble Perch Filet`,group:`fish`,blurb:`Cleaned pebble perch meat, lighter after butchering.`},{id:`rabbit`,label:`Rabbit`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`squirrel`,label:`Squirrel`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`rabbitMeat`,label:`Rabbit Meat`,group:`hunted`,blurb:`Fresh rabbit meat that wants fire soon.`,weight:.5,value:4,rarity:`common`,nutrition:{hunger:8},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`rabbit`],compatibility:[`stew`,`roast`]}},{id:`squirrelMeat`,label:`Squirrel Meat`,group:`hunted`,blurb:`Fresh squirrel meat that wants fire soon.`,weight:.4,value:3,rarity:`common`,nutrition:{hunger:6},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`squirrel`],compatibility:[`stew`,`roast`]}},{id:`cookedRabbitMeat`,label:`Cooked Rabbit Meat`,group:`crafted`,blurb:`A small cooked rabbit ration.`,weight:.5,value:5,rarity:`common`,nutrition:{hunger:12},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`rabbit`],compatibility:[`eat`,`stew-addition`]}},{id:`cookedSquirrelMeat`,label:`Cooked Squirrel Meat`,group:`crafted`,blurb:`A small cooked squirrel ration.`,weight:.4,value:4,rarity:`common`,nutrition:{hunger:9},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`squirrel`],compatibility:[`eat`,`stew-addition`]}},{id:`hide`,label:`Hide`,group:`resources`,blurb:`Rough animal hide, ready for scraping.`},{id:`bone`,label:`Bone`,group:`resources`,blurb:`Hard scraps for later craft.`},{id:`leather`,label:`Leather`,group:`crafted`,blurb:`Worked hide for future bags and armor.`},...c,...Ce],k=Ne.map(e=>e.id),Pe=[`stick`,`stone`];Ne.filter(e=>!!e.cooking?.ingredientCategory).map(e=>e.id);var Fe=Ne.filter(e=>(e.nutrition?.hunger??0)>0).map(e=>e.id),Ie=[`minnow`,`stoneLoach`,`mudskipper`,`brookStickleback`,`pebblePerch`],Le=[`minnowFilet`,`stoneLoachFilet`,`mudskipperFilet`,`brookSticklebackFilet`,`pebblePerchFilet`],Re={minnow:`minnowFilet`,stoneLoach:`stoneLoachFilet`,mudskipper:`mudskipperFilet`,brookStickleback:`brookSticklebackFilet`,pebblePerch:`pebblePerchFilet`},ze=[...Ie,`rabbit`,`squirrel`],Be=[...Ie,...Le,`rabbit`,`squirrel`];function Ve(e){return Be.includes(e)}function He(e){return ze.includes(e)}function Ue(e){return Fe.includes(e)}function A(e,t){let n=Math.max(0,Number.isFinite(t)?t:0);return Ve(e)?Math.round(n*10)/10:Math.floor(n)}function We(e,t){let n=A(e,t);return Ve(e)?Ke(n):`${n}`}function j(e){return Ge(e)?.label??e}function Ge(e){return Ne.find(t=>t.id===e)}function Ke(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}var qe=1;function Je(){return qe}function Ye(e){return qe=e===10||e===100?e:1,qe}function Xe(e){return e*qe}function Ze(e){return qe===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,(t??0)*qe]))}function Qe(e){return qe===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Math.max(0,Math.floor((t??0)*qe))]))}var $e=1e3,et=[{id:`foraging`,label:`Foraging`,description:`Gathering loose food and camp materials.`},{id:`mining`,label:`Mining`,description:`Breaking stone for ore and fuel.`},{id:`fishing`,label:`Fishing`,description:`Catching river fish.`},{id:`woodcutting`,label:`Woodcutting`,description:`Chopping trees into useful wood.`},{id:`hunting`,label:`Hunting`,description:`Tracking and taking small animals.`},{id:`crafting`,label:`Crafting`,description:`Making tools and useful camp goods.`},{id:`smithing`,label:`Smithing`,description:`Smelting ore and shaping early metalwork.`},{id:`alchemy`,label:`Alchemy`,description:`Firing vials and brewing experimental potions.`},{id:`textiles`,label:`Tailoring`,description:`Retting flax, spinning thread, weaving cloth, and sewing goods.`},{id:`butchering`,label:`Butchering`,description:`Breaking animals and fish into usable parts.`},{id:`cooking`,label:`Cooking`,description:`Preparing food over fire.`},{id:`leatherworking`,label:`Leatherworking`,description:`Turning hide into leather.`},{id:`construction`,label:`Construction`,description:`Building and improving camp structures.`},{id:`agility`,label:`Agility`,description:`Moving between camp and wilderness locations.`}],tt=et.map(e=>e.id),nt=Object.fromEntries(s.map(e=>[e.actionId,{skillId:`foraging`,xp:e.xp}])),rt=Object.fromEntries(i.map(e=>[e.actionId,{skillId:`foraging`,xp:e.xp}])),it={gatherSticks:{skillId:`foraging`,xp:70},gatherStones:{skillId:`foraging`,xp:85},gatherFlaxPlants:{skillId:`foraging`,xp:110},gatherFlaxFibers:{skillId:`foraging`,xp:100},gatherMeadowIngredients:{skillId:`foraging`,xp:120},gatherForestIngredients:{skillId:`foraging`,xp:140},gatherRiverIngredients:{skillId:`foraging`,xp:135},gatherMineIngredients:{skillId:`foraging`,xp:170},gatherDesertIngredients:{skillId:`foraging`,xp:180},...nt,...rt,gatherSand:{skillId:`foraging`,xp:100},gatherWater:{skillId:`foraging`,xp:90},mineCoal:{skillId:`mining`,xp:360},mineCopper:{skillId:`mining`,xp:360},mineTin:{skillId:`mining`,xp:360},fishRiver:{skillId:`fishing`,xp:180},craftLowestTool:{skillId:`crafting`,xp:150},craftBasket:{skillId:`crafting`,xp:150},craftWoodenSpoon:{skillId:`crafting`,xp:100},craftFishingPole:{skillId:`crafting`,xp:150},craftWoodenBowl:{skillId:`crafting`,xp:120},craftStoneKnife:{skillId:`crafting`,xp:150},craftStoneAxe:{skillId:`crafting`,xp:170},craftStonePickAxe:{skillId:`crafting`,xp:180},craftStoneSpear:{skillId:`crafting`,xp:180},craftWoodenSword:{skillId:`crafting`,xp:200},craftWoodenTwoHandedSword:{skillId:`crafting`,xp:230},craftWoodenClub:{skillId:`crafting`,xp:180},craftWoodenTwoHandedClub:{skillId:`crafting`,xp:210},craftShortBow:{skillId:`crafting`,xp:220},craftWoodenTotem:{skillId:`crafting`,xp:220},chopTrees:{skillId:`woodcutting`,xp:220},huntSmallAnimals:{skillId:`hunting`,xp:340},butcherFish:{skillId:`butchering`,xp:150},butcherRabbit:{skillId:`butchering`,xp:220},butcherSquirrel:{skillId:`butchering`,xp:170},cookRabbitMeat:{skillId:`cooking`,xp:160},cookSquirrelMeat:{skillId:`cooking`,xp:160},tanHide:{skillId:`leatherworking`,xp:430},craftLeatherBackpack:{skillId:`leatherworking`,xp:900},retFlax:{skillId:`textiles`,xp:420},separateFlaxFiber:{skillId:`textiles`,xp:260},handSpinLinenThread:{skillId:`textiles`,xp:190},spinLinenThread:{skillId:`textiles`,xp:420},weaveLinenCloth:{skillId:`textiles`,xp:520},craftCopperNeedle:{skillId:`smithing`,xp:120},craftBronzeNeedle:{skillId:`smithing`,xp:150},sewClothWrap:{skillId:`textiles`,xp:180},sewLinenBandage:{skillId:`textiles`,xp:150},sewSimplePouch:{skillId:`textiles`,xp:260},sewLinenHood:{skillId:`textiles`,xp:300},sewLinenShirt:{skillId:`textiles`,xp:420},smeltCopperBar:{skillId:`smithing`,xp:260},smeltBronzeBar:{skillId:`smithing`,xp:420},craftPot:{skillId:`smithing`,xp:220},craftLadle:{skillId:`smithing`,xp:180},craftCopperPickaxe:{skillId:`smithing`,xp:320},craftCopperHatchet:{skillId:`smithing`,xp:280},craftCopperKnife:{skillId:`smithing`,xp:220},craftBronzePickaxe:{skillId:`smithing`,xp:500},craftBronzeHatchet:{skillId:`smithing`,xp:440},craftBronzeKnife:{skillId:`smithing`,xp:340},craftGlassVial:{skillId:`alchemy`,xp:180},brewHealthPotion:{skillId:`alchemy`,xp:320},brewManaPotion:{skillId:`alchemy`,xp:320}},at={campfire:80,tanningRack:320,hideTent:450,crudeStoneFurnace:520,primitiveSpinningWheel:360,primitiveLoom:480};function ot(){return Object.fromEntries(tt.map(e=>[e,Ct()]))}function st(e){let t=ot();if(!e||typeof e!=`object`)return t;let n=e;for(let e of tt)t[e]=wt(n[e]);return t}function ct(e){return tt.some(t=>t===e)}function lt(e){return et.find(t=>t.id===e)??et[0]}function ut(e){let t=kt(e,1,$e);return 50*(t-1)*t*(2*t-1)/6}function dt(e){return Dt(e.prestige)}function ft(e){let t=dt(e),n=e.level>=t,r=ut(e.level),i=e.level>=1e3?r:ut(e.level+1),a=Math.max(0,i-r),o=n?a:Math.max(0,Math.min(e.xp-r,a));return{cap:t,currentLevelXp:r,nextLevelXp:i,xpIntoLevel:o,xpForLevel:a,ratio:a<=0?1:o/a,atCap:n,canPrestige:pt(e)}}function pt(e){let t=dt(e);return t<1e3&&e.level>=t}function mt(e,t,n=Date.now()){Ot(e);let r=e.skills[t];return pt(r)?(r.prestige=kt(r.prestige+1,0,9),r.level=1,r.xp=0,e.updatedAt=n,e.lastSimulatedAt=n,!0):!1}function ht(e,t,n=Date.now()){let r=it[t];yt(e,r.skillId,r.xp,n)}function gt(e,t,n=Date.now()){yt(e,`construction`,at[t],n)}function _t(e,t,n=Date.now()){t<=0||yt(e,`agility`,Math.max(1,Math.round(t/1e3*2)),n)}function vt(e,t,n=Date.now()){yt(e,`cooking`,t,n)}function yt(e,t,n,r=Date.now()){let i=Math.max(0,Math.floor(Xe(n)));if(i<=0)return;Ot(e);let a=e.skills[t],o=dt(a);a.totalXp+=i,a.xp=Math.min(ut(o),a.xp+i),a.level=Et(a.xp,o),e.updatedAt=r,e.lastSimulatedAt=r}function bt(e){return it[e].skillId}function xt(e){return Xe(it[e].xp)}function St(e){return Xe(at[e])}function M(e){let t=Math.max(0,e);return t>=1e9?`${jt(t/1e9)}B`:t>=1e6?`${jt(t/1e6)}M`:t>=1e3?`${jt(t/1e3)}K`:Math.round(t).toLocaleString(`en-US`)}function Ct(){return{level:1,xp:0,totalXp:0,prestige:0,bonuses:[]}}function wt(e){if(!e||typeof e!=`object`)return Ct();let t=kt(e.prestige,0,9),n=Dt(t),r=At(e.xp,0,ut(n)),i=Math.max(r,Math.max(0,Math.floor(Number(e.totalXp??0))));return{level:Et(r,n),xp:r,totalXp:i,prestige:t,bonuses:Tt(e.bonuses)}}function Tt(e){return Array.isArray(e)?e.filter(e=>{if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.id==`string`&&typeof t.label==`string`}):[]}function Et(e,t){let n=1;for(;n<t&&e>=ut(n+1);)n+=1;return n}function Dt(e){let t=kt(e,0,9);return Math.min($e,(t+1)*100)}function Ot(e){e.skills=st(e.skills)}function kt(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function At(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function jt(e){return e.toFixed(2).replace(/\.?0+$/,``)}function Mt(){return Object.fromEntries(k.map(e=>[e,0]))}function Nt(){return Object.fromEntries(k.map(e=>[e,0]))}function Pt(){return Object.fromEntries(O.map(e=>[e.id,{owned:!1,durability:0,quantity:0}]))}function Ft(){return{campfire:0,tanningRack:0,hideTent:0,crudeStoneFurnace:0,primitiveSpinningWheel:0,primitiveLoom:0}}function It(e=Date.now()){return{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:[`gatherSticks`],locationIds:[`meadow`],advanceRules:[{mode:`smart`}],createdAt:e,updatedAt:e}}function Lt(){return{hp:34,maxHp:34,mana:10,maxMana:10}}function Rt(){return{hunger:100,maxHunger:100}}function zt(){return{level:1,xp:0,totalXp:0}}function Bt(){return Object.fromEntries(me.map(e=>[e,zt()]))}function Vt(){return{selectedLocationId:`ruins`,encounter:null,log:[]}}function Ht(){return{queue:[],knownRecipeIds:[],completedRecipeCounts:{}}}function Ut(e=Date.now()){return{version:10,createdAt:e,updatedAt:e,lastSimulatedAt:e,selectedCharacterId:`cameron`,characters:[{id:`cameron`,name:`Cameron`,epithet:`Alone at the treeline`,condition:`resting`,locationId:`camp`,combat:Lt(),needs:Rt(),classProgress:Bt(),inventory:Mt(),resourceCounts:Nt(),actionLoopId:`loop-forage-sticks`}],inventory:Mt(),characterInventory:Mt(),resourceCounts:Nt(),characterResourceCounts:Nt(),tools:Pt(),buildings:{campfire:!1,tanningRack:!1,hideTent:!1,crudeStoneFurnace:!1,primitiveSpinningWheel:!1,primitiveLoom:!1},buildingCounts:Ft(),campfireExpiresAt:null,seenResources:[...Pe],skills:ot(),cooking:Ht(),combat:Vt(),actionLoops:[It(e)],currentActions:[],currentAction:null,log:[{id:`${e}-start`,time:e,text:`Cameron wakes beneath cold branches with empty hands.`,tone:`muted`,scope:`camp`}]}}var Wt=48,Gt=`camp`,Kt=[`action:`,`craft:`,`deposit:`],qt=[`Cameron stops `,`Cameron lacks `,`Cameron crafted `,`Cameron butchered `,`Cameron returned `,`The saved trail grows quiet`];function N(e,t,n=`muted`,r=Date.now(),i=Gt){e.log.unshift({id:`${r}-${Math.random().toString(36).slice(2)}`,time:r,text:t,tone:n,scope:i}),e.log=e.log.slice(0,Wt)}function Jt(e,t){let n=t.now??Date.now(),r=t.scope??Gt,i=e.log.findIndex(e=>e.aggregateKey===t.aggregateKey&&Yt(e)===r),a=Xt(t.resources);if(i>=0){let[o]=e.log.splice(i,1);o.time=n,o.text=t.text,o.tone=t.tone??o.tone,o.scope=r,Object.keys(a).length>0?(o.aggregateItems=Zt(Qt(o),a),delete o.aggregateTotal,delete o.aggregateUnit):(o.aggregateTotal=(o.aggregateTotal??0)+(t.amount??0),o.aggregateUnit=t.unit),e.log.unshift(o);return}e.log.unshift({id:`${n}-${Math.random().toString(36).slice(2)}`,time:n,text:t.text,tone:t.tone??`muted`,scope:r,aggregateKey:t.aggregateKey,...Object.keys(a).length>0?{aggregateItems:a}:{aggregateTotal:t.amount??0,aggregateUnit:t.unit}}),e.log=e.log.slice(0,Wt)}function Yt(e){return e.scope?e.scope:e.aggregateKey&&Kt.some(t=>e.aggregateKey?.startsWith(t))||qt.some(t=>e.text.startsWith(t))||/\bbreaks(?:\.|;)/.test(e.text)?`character`:Gt}function Xt(e){let t={};for(let[n,r]of Object.entries(e??{})){let e=n,i=A(e,r??0);i>0&&(t[e]=i)}return t}function Zt(e,t){let n={...e??{}};for(let[e,r]of Object.entries(t)){let t=e;n[t]=A(t,(n[t]??0)+(r??0))}return n}function Qt(e){if(e.aggregateItems)return e.aggregateItems;let t=$t(e.aggregateUnit);if(!(!t||!e.aggregateTotal))return{[t]:e.aggregateTotal}}function $t(e){switch(e?.toLowerCase()){case`sticks`:return`stick`;case`stones`:return`stone`;default:return}}var en=`rowan`;function tn(e,t){return Math.max(0,Math.floor(e.buildingCounts?.[t]??+!!e.buildings[t]))}function nn(e,t){let n=tn(e,t)+1;return e.buildingCounts[t]=n,n}function rn(e,t,n){e.buildingCounts[t]=Math.max(0,Math.floor(n))}function an(e){return e.characters.length}function on(e){return tn(e,`hideTent`)}function sn(e,t=Date.now()){return on(e)<2||e.characters.some(e=>e.id===en)?!1:(e.characters.push({id:en,name:`Rowan`,epithet:`Drawn to the second shelter`,condition:`resting`,locationId:`camp`,combat:Lt(),needs:Rt(),classProgress:Bt(),inventory:Mt(),resourceCounts:Nt()}),N(e,`Rowan joins the camp after the second hide tent goes up.`,`craft`,t),!0)}function cn(e){for(let t of k)e.inventory[t]=A(t,e.inventory[t]??0),e.characterInventory[t]=A(t,e.characterInventory[t]??0),e.resourceCounts[t]=jn(t,e.inventory[t],e.resourceCounts[t]??0),e.characterResourceCounts[t]=jn(t,e.characterInventory[t],e.characterResourceCounts[t]??0);for(let t of e.characters)t.inventory=kn(t.inventory),t.resourceCounts=An(t.inventory,t.resourceCounts);gn(e)}function ln(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=(n??0))}function un(e,t){for(let[n,r]of Object.entries(t)){let t=n;e.inventory[t]=A(t,e.inventory[t]-(r??0))}}function dn(e,t,n={}){for(let[r,i]of Object.entries(t)){let t=r,a=i??0;a<=0||(e.inventory[t]=A(t,e.inventory[t]+a),Mn(e.resourceCounts,t,n[t]??0),e.seenResources.includes(t)||e.seenResources.push(t))}}function fn(e){let t=Ge(e)?.weight;if(typeof t==`number`)return t;switch(e){case`wood`:return 2;case`stick`:case`stone`:case`flaxPlant`:case`rettedFlax`:case`flaxFiber`:return 1;case`linenThread`:case`linenCloth`:case`copperNeedle`:case`bronzeNeedle`:return .1;default:return 1}}function pn(e){let t=k.reduce((t,n)=>t+(e[n]??0)*fn(n),0);return Math.round(t*10)/10}function mn(e,t=e.selectedCharacterId){let n=En(e,t);return n.inventory||=Dn(),n.inventory}function hn(e,t=e.selectedCharacterId){let n=En(e,t);return n.resourceCounts||=On(),n.resourceCounts}function gn(e){let t=mn(e),n=hn(e);for(let r of k)e.characterInventory[r]=t[r]??0,e.characterResourceCounts[r]=n[r]??0}function _n(e,t=e.selectedCharacterId){return pn(mn(e,t))}function vn(e,t=e.selectedCharacterId){let n=e.tools.basket,r=e.tools.leatherBackpack;return 10+(n?.owned&&n.durability>0?5:0)+(r?.owned&&r.durability>0?15:0)}function yn(e,t,n={},r=e.selectedCharacterId){let i={},a=mn(e,r),o=hn(e,r),s=_n(e,r),c=vn(e,r);for(let r of k){let l=A(r,t[r]??0);if(l<=0)continue;let u=fn(r),d=c-s,f=u>0?A(r,Ve(r)?l*u<=d?l:0:Math.min(l,Math.floor(d/u))):l;f<=0||(i[r]=f,a[r]=A(r,a[r]+f),Mn(o,r,Pn(r,l,f,n[r])),s=Math.round((s+f*u)*10)/10,e.seenResources.includes(r)||e.seenResources.push(r))}return gn(e),i}function bn(e,t=e.selectedCharacterId){let n={},r=mn(e,t),i=hn(e,t);for(let t of k){let a=r[t];a<=0||(n[t]=a,e.inventory[t]=A(t,e.inventory[t]+a),Nn(i,e.resourceCounts,t),r[t]=0,e.seenResources.includes(t)||e.seenResources.push(t))}return gn(e),n}function xn(e,t,n=`camp`,r=e.selectedCharacterId){let i=Tn(e,n,r);return He(t)?Math.max(0,Math.floor(i[t]??0)):Math.floor(wn(e,n,r)[t]??0)}function Sn(e,t,n=`camp`,r=e.selectedCharacterId){return xn(e,t,n,r)>0}function Cn(e,t,n=`camp`,r=e.selectedCharacterId){if(!He(t))return 0;let i=wn(e,n,r),a=Tn(e,n,r),o=xn(e,t,n,r),s=A(t,i[t]??0);if(o<=0||s<=0)return i[t]=0,a[t]=0,gn(e),0;let c=A(t,o<=1?s:s/o);return a[t]=Math.max(0,o-1),i[t]=a[t]<=0?0:A(t,s-c),gn(e),c}function P(e){return Object.entries(e).map(([e,t])=>{let n=e;return`${We(n,t??0)}${Ve(n)?` lb`:``} ${j(n)}`}).join(`, `)}function wn(e,t,n){return t===`character`?mn(e,n):e.inventory}function Tn(e,t,n){return t===`character`?hn(e,n):e.resourceCounts}function En(e,t){return e.characters.find(e=>e.id===t)??e.characters[0]}function Dn(){return Object.fromEntries(k.map(e=>[e,0]))}function On(){return Object.fromEntries(k.map(e=>[e,0]))}function kn(e){let t=Dn();for(let n of k)t[n]=A(n,e?.[n]??0);return t}function An(e,t){let n=On();for(let r of k)n[r]=jn(r,e[r],t?.[r]??0);return n}function jn(e,t,n){return!He(e)||t<=0?0:Math.max(1,Math.floor(Math.max(0,Number.isFinite(n)?n:0)))}function Mn(e,t,n){!He(t)||n<=0||(e[t]=Math.floor((e[t]??0)+n))}function Nn(e,t,n){if(!He(n))return;let r=Math.max(0,Math.floor(e[n]??0));r<=0||(t[n]=Math.floor((t[n]??0)+r),e[n]=0)}function Pn(e,t,n,r=0){return!He(e)||n<=0||n<t?0:Math.max(0,Math.floor(r))}var Fn=`idle-town:first-survival-slice:v1`,In=10,Ln=900*1e3,Rn={minnow:1,stoneLoach:2,mudskipper:3,brookStickleback:1.25,pebblePerch:4.75,rabbit:3.5,squirrel:1.25};function zn(){let e=window.localStorage.getItem(Fn);if(!e)return Ut();try{let t=JSON.parse(e),n=Ut(),r={...n.buildings,...t.buildings??{}},i=typeof t.selectedCharacterId==`string`?t.selectedCharacterId:n.selectedCharacterId,a=Vn(t.characters,n.characters,t.characterInventory,t.characterResourceCounts,i),o=rr(t.currentActions,t.currentAction),s=Xn(t.actionLoops,t.currentAction,n.actionLoops),c={...n,...t,selectedCharacterId:i,inventory:{...Mt(),...t.inventory??{}},characterInventory:{...Mt(),...t.characterInventory??{}},resourceCounts:{...Nt(),...t.resourceCounts??{}},characterResourceCounts:{...Nt(),...t.characterResourceCounts??{}},tools:Mr(t.tools),buildings:r,buildingCounts:Bn(t.buildingCounts,r,n.buildingCounts),campfireExpiresAt:typeof t.campfireExpiresAt==`number`?t.campfireExpiresAt:n.campfireExpiresAt,characters:a,seenResources:t.seenResources?.length?t.seenResources:n.seenResources,skills:st(t.skills),cooking:Cr(t.cooking,n.cooking),combat:Kn(t.combat,n.combat,a),actionLoops:s,currentActions:o,currentAction:o.find(e=>e.characterId===i)??o[0]??null,log:t.log?.length?t.log:n.log,version:In},l=typeof t.version==`number`?t.version:1;return xr(c,l),yr(c,l),br(c,l),vr(c,l),sn(c),cn(c),c}catch{return Ut()}}function Bn(e,t,n){let r={...Ft(),...n};if(e&&typeof e==`object`){let t=e;for(let e of Object.keys(r))r[e]=Math.max(0,Math.floor(Number(t[e]??r[e])))}for(let e of Object.keys(t))t[e]&&r[e]<=0&&(r[e]=1);return r}function Vn(e,t,n,r,i){return!Array.isArray(e)||!e.length?t:e.map((e,a)=>{let o=t[a]??t[0];if(!e||typeof e!=`object`)return o;let s=e,c=s.id===i&&!s.inventory&&n&&typeof n==`object`,l=Ar(c?n:s.inventory),u=jr(l,c?r:s.resourceCounts);return{...o,...s,locationId:cr(s.locationId)?s.locationId:o.locationId,combat:Un(s.combat,o.combat),needs:Hn(s.needs,o.needs),classProgress:Wn(s.classProgress),inventory:l,resourceCounts:u,actionLoopId:typeof s.actionLoopId==`string`?s.actionLoopId:o.actionLoopId}})}function Hn(e,t=Rt()){if(!e||typeof e!=`object`)return t;let n=e,r=F(n.maxHunger,1,999);return{maxHunger:r,hunger:F(n.hunger,0,r)}}function Un(e,t=Lt()){if(!e||typeof e!=`object`)return t;let n=e,r=F(n.maxHp,1,999),i=F(n.maxMana,0,999);return{maxHp:r,hp:F(n.hp,0,r),maxMana:i,mana:F(n.mana,0,i)}}function Wn(e){let t=Bt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of me)t[e]=Gn(n[e]);return t}function Gn(e){if(!e||typeof e!=`object`)return{level:1,xp:0,totalXp:0};let t=F(e.xp,0,2**53-1);return{level:F(e.level,1,1e3),xp:t,totalXp:Math.max(t,F(e.totalXp,0,2**53-1))}}function Kn(e,t=Vt(),n){if(!e||typeof e!=`object`)return t;let r=e;return{selectedLocationId:pr(r.selectedLocationId)?r.selectedLocationId:t.selectedLocationId,encounter:qn(r.encounter,n),log:Yn(r.log)}}function qn(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!pr(n.locationId)||typeof n.id!=`string`)return null;let r=Array.isArray(n.units)?n.units.map(e=>Jn(e,t)).filter(e=>!!e):[];return{id:n.id,locationId:n.locationId,startedAt:F(n.startedAt,0,2**53-1),updatedAt:F(n.updatedAt,0,2**53-1),wave:F(n.wave,1,999),defeatedEnemies:F(n.defeatedEnemies,0,2**53-1),units:r,message:typeof n.message==`string`?n.message:``}}function Jn(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!gr(n.kind)||typeof n.id!=`string`||typeof n.name!=`string`||n.kind===`party`&&!t.some(e=>e.id===n.characterId)||n.kind===`enemy`&&!mr(n.enemyId))return null;let r=F(n.maxHp,1,999),i=F(n.maxMana,0,999);return{id:n.id,kind:n.kind,name:n.name,hp:F(n.hp,0,r),maxHp:r,mana:F(n.mana,0,i),maxMana:i,x:F(n.x,0,99),y:F(n.y,0,99),damage:F(n.damage,0,999),attackRange:F(n.attackRange,1,99),actEveryMs:F(n.actEveryMs,500,6e4),nextActAt:F(n.nextActAt,0,2**53-1),characterId:typeof n.characterId==`string`?n.characterId:void 0,enemyId:mr(n.enemyId)?n.enemyId:void 0,classId:hr(n.classId)?n.classId:void 0,weaponId:n.weaponId}}function Yn(e){return Array.isArray(e)?e.filter(e=>!!(e&&typeof e==`object`)).map((e,t)=>({id:typeof e.id==`string`?e.id:`combat-log-${t+1}`,time:F(e.time,0,2**53-1),text:typeof e.text==`string`?e.text:``,tone:_r(e.tone)?e.tone:`muted`})).filter(e=>e.text).slice(0,20):[]}function Xn(e,t,n){if(Array.isArray(e)){let t=e.map((e,t)=>Zn(e,t)).filter(e=>!!e);if(t.length)return t}let r=Qn(t);return r?[r]:n}function Zn(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=Array.isArray(n.actionIds)?n.actionIds.map(e=>or(e)).filter(e=>!!e):[];return r.length?{id:typeof n.id==`string`&&n.id?n.id:`loop-${t+1}`,name:typeof n.name==`string`&&n.name?n.name:`Loop ${t+1}`,actionIds:r,locationIds:$n(r,n.locationIds),advanceRules:er(r,n.advanceRules),createdAt:typeof n.createdAt==`number`?n.createdAt:Date.now(),updatedAt:typeof n.updatedAt==`number`?n.updatedAt:Date.now()}:null}function Qn(e){if(!e||typeof e!=`object`)return null;let t=e,n=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>or(e)).filter(e=>!!e):or(t.actionId)?[or(t.actionId)]:[];if(!n.length)return null;let r=Date.now();return{id:`loop-saved-work`,name:`Saved Work Loop`,actionIds:n,locationIds:$n(n,t.loopLocationIds),advanceRules:n.map(e=>nr(e)),createdAt:r,updatedAt:r}}function $n(e,t){let n=Array.isArray(t)?t:[];return e.map((e,t)=>{let r=n[t];return lr(r)?r:null})}function er(e,t){let n=Array.isArray(t)?t:[];return e.map((e,t)=>tr(e,n[t]))}function tr(e,t){if(!t||typeof t!=`object`)return nr(e);let n=t,r=dr(n.mode)?n.mode:nr(e).mode;return r===`whenResourceAtLeast`?{mode:r,resourceId:ur(n.resourceId)?n.resourceId:void 0,amount:F(n.amount,1,999999),scope:fr(n.scope)?n.scope:`camp`}:{mode:r}}function nr(e){return{mode:`smart`}}function rr(e,t){return(Array.isArray(e)?e:t?[t]:[]).map(e=>ir(e)).filter(e=>!!e)}function ir(e){if(!e||typeof e!=`object`)return null;let t=e,n=or(t.actionId);if(!n||typeof t.characterId!=`string`||!sr(t.phase)||typeof t.startedAt!=`number`||typeof t.endsAt!=`number`)return null;let r=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>or(e)).filter(e=>!!e):void 0,i=or(t.followUpActionId);return{...t,actionId:n,characterId:t.characterId,phase:t.phase,loopActionIds:r,followUpActionId:i??void 0,startedAt:t.startedAt,endsAt:t.endsAt,repeat:!!t.repeat}}function ar(e){return typeof e==`string`&&le.some(t=>t.id===e)}function or(e){return e===`gatherMushrooms`||e===`gatherBerries`?`gatherMeadowIngredients`:ar(e)?e:null}function sr(e){return e===`travelingTo`||e===`working`||e===`followUp`||e===`travelingBack`}function cr(e){return e===`camp`||e===`meadow`||e===`river`||e===`forest`||e===`mine`||e===`desert`}function lr(e){return e===`meadow`||e===`river`||e===`forest`||e===`mine`||e===`desert`}function ur(e){return typeof e==`string`&&k.includes(e)}function dr(e){return e===`smart`||e===`afterCompletion`||e===`whenInventoryFull`||e===`whenResourceAtLeast`||e===`whenCannotStart`||e===`manual`}function fr(e){return e===`camp`||e===`character`}function pr(e){return typeof e==`string`&&ge.some(t=>t===e)}function mr(e){return typeof e==`string`&&he.some(t=>t===e)}function hr(e){return typeof e==`string`&&me.some(t=>t===e)}function gr(e){return e===`party`||e===`enemy`}function _r(e){return e===`muted`||e===`gain`||e===`warning`}function vr(e,t){let n=Date.now();if(!e.buildings.campfire){e.campfireExpiresAt=null;return}t<4&&!e.campfireExpiresAt&&(e.campfireExpiresAt=n+Ln),(typeof e.campfireExpiresAt!=`number`||e.campfireExpiresAt<=n)&&(e.buildings.campfire=!1,e.campfireExpiresAt=null)}function yr(e,t){if(!(t>=2)){e.inventory.rabbit*=Rn.rabbit??1,e.characterInventory.rabbit*=Rn.rabbit??1,e.inventory.squirrel*=Rn.squirrel??1,e.characterInventory.squirrel*=Rn.squirrel??1;for(let t of e.characters)t.inventory.rabbit*=Rn.rabbit??1,t.inventory.squirrel*=Rn.squirrel??1}}function br(e,t){if(!(t>=In))for(let t of ze){e.resourceCounts[t]=kr(t,e.inventory[t]),e.characterResourceCounts[t]=kr(t,e.characterInventory[t]);for(let n of e.characters)n.resourceCounts[t]=kr(t,n.inventory[t])}}function xr(e,t){if(!(t>=10)){Sr(e.inventory,`mushroom`,`hearthcap`),Sr(e.characterInventory,`mushroom`,`hearthcap`),Sr(e.inventory,`berry`,`blueberries`),Sr(e.characterInventory,`berry`,`blueberries`);for(let t of e.characters)Sr(t.inventory,`mushroom`,`hearthcap`),Sr(t.inventory,`berry`,`blueberries`);e.seenResources=e.seenResources.map(e=>e===`mushroom`?`hearthcap`:e===`berry`?`blueberries`:e).filter((e,t,n)=>n.indexOf(e)===t)}}function Sr(e,t,n){let r=Number(e[t]??0);r>0&&(e[n]=Number(e[n]??0)+r),delete e[t]}function Cr(e,t=Ht()){if(!e||typeof e!=`object`)return t;let n=e,r=Array.isArray(n.queue)?n.queue.map(e=>wr(e)).filter(e=>!!e):[],i=!1;return{queue:r.map(e=>{let t=e.startedAt!==null&&e.endsAt!==null;return!t||!i?(i||=t,e):{...e,startedAt:null,endsAt:null}}),knownRecipeIds:Tr(n.knownRecipeIds),completedRecipeCounts:Er(n.completedRecipeCounts)}}function wr(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.id!=`string`||!Dr(t.recipeId)?null:{id:t.id,recipeId:t.recipeId,stationId:Or(t.stationId),queuedAt:F(t.queuedAt,0,2**53-1),startedAt:typeof t.startedAt==`number`?F(t.startedAt,0,2**53-1):null,endsAt:typeof t.endsAt==`number`?F(t.endsAt,0,2**53-1):null}}function Tr(e){return Array.isArray(e)?e.filter(e=>Dr(e)).filter((e,t,n)=>n.indexOf(e)===t):[]}function Er(e){if(!e||typeof e!=`object`)return{};let t={},n=e;for(let[e,r]of Object.entries(n))Dr(e)&&(t[e]=F(r,0,2**53-1));return t}function Dr(e){return typeof e==`string`&&Se.includes(e)}function Or(e){return`campfire`}function kr(e,t){if(t<=0)return 0;let n=Rn[e]??1;return Math.max(1,Math.round(t/n))}function Ar(e){let t=Mt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of Object.keys(t))t[e]=Number(n[e]??0);return t}function jr(e,t){let n=Nt();if(t&&typeof t==`object`){let e=t;for(let t of Object.keys(n))n[t]=Math.max(0,Math.floor(Number(e[t]??0)))}for(let t of ze)e[t]>0&&n[t]<=0&&(n[t]=kr(t,e[t]));return n}function Mr(e){let t=Pt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of O){let r=n[e.id];if(typeof r==`boolean`){t[e.id]={owned:r,durability:r?e.maxDurability:0,quantity:0};continue}if(!r||typeof r!=`object`)continue;let i=!!r.owned,a=Number(r.durability??0),o=Number(r.quantity??0);t[e.id]={owned:i,durability:i?Math.min(e.maxDurability,Math.max(0,Math.floor(a))):0,quantity:Math.max(0,Math.floor(o))}}return t}function F(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Nr(e){window.localStorage.setItem(Fn,JSON.stringify(e))}function Pr(){return window.localStorage.removeItem(Fn),Ut()}var Fr=900*1e3;function Ir(e,t=Date.now()){e.buildings.campfire=!0,e.campfireExpiresAt=t+Fr}function I(e,t=Date.now()){return!!(e.buildings.campfire&&Rr(e)>t)}function Lr(e,t=Date.now()){let n=Rr(e);return n>t?n-t:0}function Rr(e){return e.buildings.campfire&&typeof e.campfireExpiresAt==`number`?e.campfireExpiresAt:0}function zr(e,t=Date.now()){let n=Rr(e);return!n||n>t?!1:(e.buildings.campfire=!1,e.campfireExpiresAt=null,N(e,`The campfire burns down to charred wood.`,`muted`,n),e.updatedAt=n,e.lastSimulatedAt=n,!0)}var Br=[`copperPickaxe`,`copperHatchet`,`copperKnife`];function Vr(e){return!!e.buildings.crudeStoneFurnace}function Hr(e){return{furnaceBuilt:Vr(e),coal:Math.max(0,Math.floor(e.inventory.coal??0))}}function Ur(e){return b.some(t=>t===e)}function Wr(e,t){if(!S(t))return!1;switch(t){case`smeltCopperBar`:return Vr(e);case`craftPot`:case`craftLadle`:return Jr(e,`copperBar`);case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return qr(e);case`smeltBronzeBar`:return Vr(e)&&Yr(e);case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return Jr(e,`bronzeBar`)}}function Gr(e,t){if(!S(t))return``;switch(t){case`smeltCopperBar`:return Vr(e)?``:`Needs Stone Furnace`;case`craftPot`:case`craftLadle`:return Jr(e,`copperBar`)?``:`Smelt Copper Bar`;case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return qr(e)?``:`Craft Pot and Ladle`;case`smeltBronzeBar`:return Vr(e)?Yr(e)?``:`Craft a Copper Tool`:`Needs Stone Furnace`;case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return Jr(e,`bronzeBar`)?``:`Smelt Bronze Bar`}}function Kr(e){let t=x(e);return t?t.label.replace(/^(Craft|Smelt) /,`1 `):``}function qr(e){return Jr(e,`pot`)&&Jr(e,`ladle`)}function Jr(e,t){return e.seenResources.includes(t)||e.inventory[t]>0}function Yr(e){let t=e.tools;return Br.some(e=>{let n=t[e];return!!(n?.owned||(n?.quantity??0)>0)})}var Xr=[`yarrow`,`plantainLeaf`],Zr=[`silverleafHerb`];function Qr(e){return{furnaceBuilt:Vr(e),coal:Math.max(0,Math.floor(e.inventory.coal??0)),vials:Math.max(0,Math.floor(e.inventory.glassVial??0))}}function $r(e,t){if(!_(t))return!1;switch(t){case`craftGlassVial`:return Vr(e);case`brewHealthPotion`:return ri(e,`glassVial`)&&ni(e,Xr);case`brewManaPotion`:return ri(e,`glassVial`)&&ni(e,Zr)}}function ei(e,t){if(!_(t))return``;switch(t){case`craftGlassVial`:return Vr(e)?``:`Needs Stone Furnace`;case`brewHealthPotion`:return ri(e,`glassVial`)?ni(e,Xr)?``:`Find Meadow Ingredients`:`Craft Glass Vial`;case`brewManaPotion`:return ri(e,`glassVial`)?ni(e,Zr)?``:`Find River Ingredients`:`Craft Glass Vial`}}function ti(e){let t=g(e);return t?Object.entries(t.output).map(([e,t])=>`${t??0} ${j(e)}`).join(`, `):``}function ni(e,t){return t.some(t=>ri(e,t))}function ri(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function ii(e,t){return!E(t)||!se(t)?!1:ai(e,t)===``}function ai(e,t){let n=E(t);if(!n||!se(t))return``;let r=n.requiredBuildings?.find(t=>!e.buildings[t]);if(r)return`Needs ${li(r)}`;let i=n.requiredSeenResources?.find(t=>!si(e,t));return i?n.unlockHint||`Needs ${j(i)}`:n.requiredAnyResources?.length&&!n.requiredAnyResources.some(t=>si(e,t))?`Needs ${n.requiredAnyResources.map(e=>j(e)).join(` or `)}`:``}function oi(e){return ci(e.output)}function si(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function ci(e){return Object.entries(e).map(([e,t])=>`${t??0} ${j(e)}`).join(`, `)}function li(e){switch(e){case`campfire`:return`Campfire`;case`tanningRack`:return`Tanning Rack`;case`hideTent`:return`Hide Tent`;case`crudeStoneFurnace`:return`Stone Furnace`;case`primitiveSpinningWheel`:return`Primitive Spinning Wheel`;case`primitiveLoom`:return`Primitive Loom`}}function ui(e){return O.find(t=>t.id===e)}function di(e){return ui(e)?.maxDurability??1}function fi(e,t){let n=e.tools[t];return!!(n?.owned&&n.durability>0)}function pi(e){return O.filter(t=>t.roles.includes(e)).sort((t,n)=>_i(n.id,e)-_i(t.id,e))}function mi(e,t){return pi(t).find(t=>fi(e,t.id))?.id??null}function hi(e,t){return!!mi(e,t)}function gi(e,t){let n=mi(e,t);return n?_i(n,t):0}function _i(e,t){let n=ui(e);return n?.roles.includes(t)?n.roleTiers?.[t]??n.weapon?.damage??1:0}function vi(e){return ui(e)?.weapon?.damage??0}function yi(e,t){let n=mi(e,t);return n?vi(n):0}function bi(e,t){let n=e.tools[t];return!n||n.quantity<=0?!1:(--n.quantity,n.owned=!0,n.durability=di(t),!0)}function xi(e,t,n,r=Date.now(),i=`Cameron`){let a=e.tools[t];if(!(!a?.owned||a.durability<=0)&&(a.durability=Math.max(0,a.durability-n),a.durability===0)){let n=ui(t)?.label??`Tool`;if(bi(e,t)){N(e,`${n} breaks; ${i} takes a fresh one from inventory.`,`warning`,r,`character`);return}a.owned=!1,N(e,`${n} breaks. No spare remains.`,`warning`,r,`character`)}}function Si(e,t,n,r=Date.now(),i=`Cameron`){let a=mi(e,t);a&&xi(e,a,n,r,i)}var Ci=je.map(e=>e.craftActionId);function wi(e){return e.seenResources.includes(`rabbitMeat`)||e.seenResources.includes(`squirrelMeat`)}function Ti(e){return Ie.some(t=>e.seenResources.includes(t)||e.characters.some(e=>(e.inventory?.[t]??0)>0||(e.resourceCounts?.[t]??0)>0)||e.characterInventory[t]>0||e.inventory[t]>0||e.characterResourceCounts[t]>0||e.resourceCounts[t]>0)}function Ei(e){return e.seenResources.some(e=>{let t=Ne.find(t=>t.id===e);return!!(t?.cooking?.ingredientCategory||t?.cooking?.tags.includes(`stew-base`)||t?.cooking?.tags.includes(`vessel`)||t?.cooking?.tags.includes(`utensil`))})}function L(e,t,n=Date.now()){if(Wr(e,t)||$r(e,t))return!0;if(E(t))return ii(e,t);if(Gr(e,t)||ei(e,t))return!1;if(t===`craftLowestTool`||Ci.includes(t)||t===`craftWoodenBowl`||l(t)||o(t))return!0;switch(t){case`gatherSticks`:case`gatherStones`:case`gatherFlaxPlants`:case`gatherFlaxFibers`:case`gatherMeadowIngredients`:case`gatherForestIngredients`:case`gatherRiverIngredients`:case`gatherMineIngredients`:case`gatherDesertIngredients`:case`gatherSand`:case`gatherWater`:case`craftWoodenSpoon`:return!0;case`fishRiver`:return hi(e,`fishing`);case`mineCoal`:case`mineCopper`:case`mineTin`:return hi(e,`mining`);case`chopTrees`:return hi(e,`woodcutting`);case`huntSmallAnimals`:return hi(e,`hunting`);case`butcherFish`:return Ti(e);case`butcherRabbit`:return e.seenResources.includes(`rabbit`);case`butcherSquirrel`:return e.seenResources.includes(`squirrel`);case`cookRabbitMeat`:return I(e,n)&&e.seenResources.includes(`rabbitMeat`);case`cookSquirrelMeat`:return I(e,n)&&e.seenResources.includes(`squirrelMeat`);case`tanHide`:return e.buildings.tanningRack&&e.seenResources.includes(`hide`);case`craftLeatherBackpack`:return e.buildings.tanningRack&&e.seenResources.includes(`leather`)}return!1}function Di(e,t){let n=Gr(e,t);if(n)return n;let r=ei(e,t);if(r)return r;let i=ai(e,t);if(i)return i;switch(t){case`fishRiver`:return`Needs Fishing Pole`;case`mineCoal`:case`mineCopper`:case`mineTin`:return`Needs Mining Tool`;case`chopTrees`:return`Needs Woodcutting Tool`;case`huntSmallAnimals`:return`Needs Hunting Weapon`;case`butcherFish`:return`Needs Carried Fish`;case`butcherRabbit`:return`Needs Rabbit`;case`butcherSquirrel`:return`Needs Squirrel`;case`cookRabbitMeat`:return I(e)?`Needs Rabbit Meat`:`Needs Lit Campfire`;case`cookSquirrelMeat`:return I(e)?`Needs Squirrel Meat`:`Needs Lit Campfire`;case`tanHide`:return e.buildings.tanningRack?`Needs Hide`:`Needs Tanning Rack`;case`craftLeatherBackpack`:return e.buildings.tanningRack?`Needs Leather`:`Needs Tanning Rack`;case`craftLowestTool`:return`Needs Craft Materials`;case`craftWoodenBowl`:return`Needs Wood`;default:return``}}function Oi(e,t,n=Date.now()){return!0}function ki(e,t,n=Date.now()){switch(t){case`campfire`:return I(e,n)||wi(e)||Ei(e);case`tanningRack`:return e.buildings.tanningRack||e.seenResources.includes(`hide`);case`hideTent`:return e.buildings.hideTent||e.seenResources.includes(`hide`);case`crudeStoneFurnace`:return e.buildings.crudeStoneFurnace||e.seenResources.includes(`coal`)||e.seenResources.includes(`copper`);case`primitiveSpinningWheel`:return e.buildings.primitiveSpinningWheel||e.seenResources.includes(`linenThread`);case`primitiveLoom`:return e.buildings.primitiveLoom||e.seenResources.includes(`linenThread`)}}function Ai(e,t){switch(t){case`campfire`:return`See Meat, Water, or Meadow Ingredients`;case`tanningRack`:case`hideTent`:return`See Hide`;case`crudeStoneFurnace`:return`See Coal or Copper`;case`primitiveSpinningWheel`:return`See Linen Thread`;case`primitiveLoom`:return`See Linen Thread`}}var ji={meadow:1e4,river:15e3,forest:3e4,mine:6e4,desert:75e3};function Mi(e){return e.loopActionIds?.length?[...e.loopActionIds]:e.followUpActionId?[e.actionId,e.followUpActionId]:[e.actionId]}function R(e){return Xi(e)||e===`huntSmallAnimals`||e===`chopTrees`}function Ni(e,t){return R(e)?t??Zi(e):null}function Pi(e,t=Mi(e)){return e.loopLocationIds?.length?t.map((t,n)=>Ni(t,e.loopLocationIds?.[n]??void 0)):t.map((t,n)=>n===0&&R(t)?e.locationId??`meadow`:Ni(t,void 0))}function Fi(e,t){let n=Mi(e),r=n[Ji(t,n)];return Pi(e,n)[Ji(t,n)]??(R(r)?`meadow`:void 0)}function Ii(e,t){let n=Mi(e),r=n[Ji(t,n)];return Li(r,Fi(e,t))}function Li(e,t){return R(e)?t??Zi(e):`camp`}function Ri(e){return e.targetLocationId??e.locationId??`camp`}function zi(e,t){return e.characters.find(e=>e.id===t)?.locationId??`camp`}function Bi(e,t,n){let r=e.characters.find(e=>e.id===t);r&&(r.locationId=n)}function Vi(e,t){return e.phase===`travelingTo`||e.phase===`travelingBack`?e.originLocationId??t:Ri(e)}function Hi(e){return e===`camp`?`camp`:`the ${e}`}function Ui(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Wi(e,t){let n=Mi(e);return n[Ji(t,n)]??e.actionId}function Gi(e){let t=Mi(e);return Ji(e.nextLoopIndex??e.loopIndex??0,t)}function Ki(e){return qi(e,e.loopIndex??0)}function qi(e,t){let n=Mi(e);if(n.length<=1)return Ji(t,n);let r=(Ji(t,n)+1)%n.length;for(;n[r]===`butcherFish`&&r!==t;)r=(r+1)%n.length;return r}function Ji(e,t){return t.length?Math.min(t.length-1,Math.max(0,Math.floor(e))):0}function Yi(e,t){return e===t?0:$i(e)+$i(t)}function Xi(e){return l(e)||o(e)||e===`gatherSticks`||e===`gatherStones`||e===`gatherFlaxPlants`||e===`gatherFlaxFibers`||e===`gatherMeadowIngredients`||e===`gatherForestIngredients`||e===`gatherRiverIngredients`||e===`gatherMineIngredients`||e===`gatherDesertIngredients`||e===`gatherSand`||e===`gatherWater`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`||e===`fishRiver`}function Zi(e){let n=t(e);if(n)return n.locationId;let r=d(e);return r?r.locationId:e===`gatherWater`||e===`fishRiver`||e===`gatherRiverIngredients`?`river`:e===`gatherForestIngredients`||e===`chopTrees`?`forest`:e===`gatherMineIngredients`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`?`mine`:e===`gatherDesertIngredients`||e===`gatherSand`?`desert`:`meadow`}function Qi(e){return ji[e]}function $i(e){return e===`camp`?0:Qi(e)}function ea(e){return Array.isArray(e.currentActions)||(e.currentActions=e.currentAction?[e.currentAction]:[]),e.currentActions}function z(e,t=e.selectedCharacterId){return ea(e).find(e=>e.characterId===t)??null}function ta(e){let t=ea(e);e.currentAction=t.find(t=>t.characterId===e.selectedCharacterId)??t[0]??null}function na(e,t){let n=ea(e),r=n.findIndex(e=>e.characterId===t.characterId);r>=0?n[r]=t:n.push(t),e.currentActions=n,aa(e,!0,t.characterId),ta(e)}function ra(e,t){e.currentActions=ea(e).filter(e=>e.characterId!==t),aa(e,!1,t),ta(e)}function ia(e){return[...ea(e)].sort((e,t)=>e.endsAt===t.endsAt?e.characterId.localeCompare(t.characterId):e.endsAt-t.endsAt)[0]??null}function B(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function V(e,t){return e.characters.find(e=>e.id===t)?.name??`Someone`}function aa(e,t,n=e.selectedCharacterId){let r=e.characters.find(e=>e.id===n);r&&(r.condition=t?`working`:`resting`)}var oa=42;function sa(e,t=Date.now()){ba(e,t);let n=e.actionLoops.length+1,r={id:`loop-${t.toString(36)}-${Math.random().toString(36).slice(2,7)}`,name:`Loop ${n}`,actionIds:[`gatherSticks`],locationIds:[`meadow`],advanceRules:[ya(`gatherSticks`)],createdAt:t,updatedAt:t};return e.actionLoops.push(r),B(e,t),r}function ca(e,t,n=Date.now()){if(ba(e,n),e.actionLoops.length<=1)return e.actionLoops[0]?.id??null;let r=e.actionLoops.findIndex(e=>e.id===t);if(r<0)return e.actionLoops[0]?.id??null;e.actionLoops.splice(r,1);for(let n of e.characters)n.actionLoopId===t&&(n.actionLoopId=void 0);return B(e,n),e.actionLoops[Math.max(0,r-1)]?.id??e.actionLoops[0]?.id??null}function H(e,t){return ba(e),e.actionLoops.find(e=>e.id===t)??e.actionLoops[0]??null}function la(e,t,n){pa(e);let r=Sa(t,e);return n===`butcherFish`?e.actionIds[r]===`fishRiver`:!0}function ua(e,t,n,r,i={},a=Date.now()){let o=H(e,t);if(!o||!la(o,n,r))return!1;let s=Sa(n,o)+1;return pa(o),o.actionIds.splice(s,0,r),o.locationIds.splice(s,0,Ni(r,i.locationId)),o.advanceRules.splice(s,0,ya(r)),o.updatedAt=a,xa(e,o),B(e,a),!0}function da(e,t,n,r=Date.now()){let i=H(e,t);if(!i||i.actionIds.length<=1)return 0;let a=Sa(n,i);return pa(i),i.actionIds.splice(a,1),i.locationIds.splice(a,1),i.advanceRules.splice(a,1),i.updatedAt=r,xa(e,i),B(e,r),Math.max(0,a-1)}function fa(e){return e.actionIds.map((t,n)=>Ni(t,e.locationIds[n]??void 0))}function pa(e){let t=Array.isArray(e.advanceRules)?e.advanceRules:[];return e.advanceRules=e.actionIds.map((e,n)=>Ca(t[n],e)),e.advanceRules}function ma(e,t){return pa(e)[Sa(t,e)]??ya(e.actionIds[0]??`gatherSticks`)}function ha(e,t,n,r=Date.now()){let i=H(e,t);if(!i)return!1;let a=wa(n);return i.name===a?!1:(i.name=a,i.updatedAt=r,B(e,r),!0)}function ga(e,t,n,r,i=Date.now()){let a=H(e,t);if(!a)return!1;let o=Sa(n,a),s=Ca({...pa(a)[o]??ya(a.actionIds[o]),...r},a.actionIds[o]);return a.advanceRules[o]=s,a.updatedAt=i,B(e,i),!0}function _a(e,t,n,r,i={},a=Date.now()){let o=H(e,t);if(!o)return!1;let s=Sa(n,o);pa(o);let c=Ni(r,i.locationId??o.locationIds[s]??void 0);return o.actionIds[s]===r&&o.locationIds[s]===c?!1:(o.actionIds[s]=r,o.locationIds[s]=c,o.advanceRules[s]=ya(r),o.updatedAt=a,xa(e,o),B(e,a),!0)}function va(e,t,n,r,i=Date.now()){let a=H(e,t);if(!a)return!1;let o=Sa(n,a),s=Ni(a.actionIds[o],r);return a.locationIds[o]===s?!1:(a.locationIds[o]=s,a.updatedAt=i,xa(e,a),B(e,i),!0)}function ya(e){return{mode:`smart`}}function ba(e,t=Date.now()){if(Array.isArray(e.actionLoops)&&e.actionLoops.length)return;let n=e.currentAction?.loopActionIds?.length?{actionIds:[...e.currentAction.loopActionIds],locationIds:[...e.currentAction.loopLocationIds??[]]}:{actionIds:[`gatherSticks`],locationIds:[`meadow`]};e.actionLoops=[{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:n.actionIds,locationIds:n.actionIds.map((e,t)=>Ni(e,n.locationIds[t]??void 0)),advanceRules:n.actionIds.map(e=>ya(e)),createdAt:t,updatedAt:t}]}function xa(e,t){for(let n of e.characters){if(n.actionLoopId!==t.id)continue;let r=z(e,n.id);if(!r)continue;let i=Ji(r.loopIndex??0,t.actionIds);na(e,{...r,loopActionIds:[...t.actionIds],loopLocationIds:fa(t),loopIndex:i})}}function Sa(e,t){return t.actionIds.length?Math.min(t.actionIds.length-1,Math.max(0,Math.floor(e))):0}function Ca(e,t){let n=Ea(e?.mode)?e.mode:ya(t).mode;return n===`whenResourceAtLeast`?{mode:n,resourceId:typeof e?.resourceId==`string`?e.resourceId:void 0,amount:Ta(e?.amount),scope:Da(e?.scope)?e.scope:`camp`}:{mode:n}}function wa(e){return(e.trim().replace(/\s+/g,` `)||`Action Loop`).slice(0,oa)}function Ta(e){let t=Number(e??1);return Number.isFinite(t)?Math.max(1,Math.floor(t)):1}function Ea(e){return e===`smart`||e===`afterCompletion`||e===`whenInventoryFull`||e===`whenResourceAtLeast`||e===`whenCannotStart`||e===`manual`}function Da(e){return e===`camp`||e===`character`}function Oa(e,t,n){return Math.min(n,Math.max(t,e))}function U(e,t){return Math.floor(Math.random()*(t-e+1))+e}function ka(e,t,n=1){let r=10**n;return Math.round((Math.random()*(t-e)+e)*r)/r}function W(e){let t=Math.max(0,Math.ceil(e/1e3));if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function Aa(e,t){let i=r(e),a=t?i?.entries.filter(e=>e.category===t):i?.entries;if(!i||!a?.length)return{resources:{},message:`Cameron searches carefully, but finds nothing useful.`};let o=Math.random()<.28?2:1,s={},c=[];for(let e=0;e<o;e+=1){let e=Na(a);if(!e)continue;let t=U(e.minAmount,e.maxAmount);s[e.id]=(s[e.id]??0)+t,c.push(e)}let l=Object.entries(s).filter(([,e])=>(e??0)>0).map(([e,t])=>`${t} ${j(e)}`);return{resources:s,message:l.length?`Cameron gathers ${Pa(l)} from the ${i.locationId}${t?` ${n(t).toLowerCase()}`:``}.`:`Cameron searches carefully, but finds nothing useful.`}}function ja(e,t){let n=r(e),i=n?.entries.find(e=>e.id===t);if(!n||!i)return{resources:{},message:`Cameron searches carefully, but finds nothing useful.`};let a=U(i.minAmount,i.maxAmount);return{resources:{[i.id]:a},message:`Cameron gathers ${a} ${j(i.id)} from the ${n.locationId}.`}}function Ma(e,t){let i=r(e),a=t?i?.entries.filter(e=>e.category===t):i?.entries;return!i||!a?.length?`No known gatherables.`:t?`${n(t)} from weighted ${i.label.toLowerCase()} table`:`${i.categories.map(e=>n(e)).join(`, `)} from weighted ${i.label.toLowerCase()} table`}function Na(e){let t=e.reduce((e,t)=>e+Math.max(0,t.weight),0);if(t<=0)return null;let n=Math.random()*t;for(let t of e)if(n-=Math.max(0,t.weight),n<=0)return t;return e[e.length-1]??null}function Pa(e){return e.length<=1?e[0]??`nothing`:`${e.slice(0,-1).join(`, `)} and ${e[e.length-1]}`}var Fa=je.map(e=>({actionId:e.craftActionId,toolId:e.id})),Ia=[{id:`minnow`,minWeight:.5,maxWeight:1.5},{id:`stoneLoach`,minWeight:1,maxWeight:3},{id:`mudskipper`,minWeight:1.5,maxWeight:4.5},{id:`brookStickleback`,minWeight:.5,maxWeight:2},{id:`pebblePerch`,minWeight:2,maxWeight:7.5}],La=[{id:`rabbit`,minWeight:2,maxWeight:5},{id:`squirrel`,minWeight:.5,maxWeight:2}];function Ra(e){return O.find(t=>t.id===e)?.recipe??{}}function za(e,t){let n=e.tools[t];return(n?.quantity??0)+ +!!n?.owned}function Ba(e,t){return Ya(Va(e,t))}function Va(e,n){let r=x(n);if(r)return{resources:r.output??{},message:`Cameron finishes ${r.label.toLowerCase()}.`,tone:`craft`};let i=g(n);if(i)return{resources:i.output,message:`Cameron finishes ${i.label.toLowerCase()}.`,tone:`craft`};let a=E(n);if(a)return{resources:a.output,message:`Cameron finishes ${a.label.toLowerCase()}.`,tone:`craft`};let o=d(n);if(o)return Xa(o.locationId,o.category);let s=t(n);if(s)return Za(s.locationId,s.resourceId);switch(n){case`gatherSticks`:{let e=U(1,3);return{resources:{stick:e},message:`Cameron gathers ${e} ${no(`Stick`,e)}.`,tone:`gain`}}case`gatherStones`:{let e=U(1,2);return{resources:{stone:e},message:`Cameron finds ${e} ${no(`Stone`,e)}.`,tone:`gain`}}case`gatherFlaxPlants`:{let e=U(2,4);return{resources:{flaxPlant:e},message:`Cameron cuts ${e} ${no(`Flax Plant`,e)} from the meadow.`,tone:`gain`}}case`gatherFlaxFibers`:{let e=U(1,3);return{resources:{flaxFiber:e},message:`Cameron pulls ${e} ${no(`Flax Fiber`,e)} from the brush.`,tone:`gain`}}case`gatherMeadowIngredients`:return Xa(`meadow`);case`gatherForestIngredients`:return Xa(`forest`);case`gatherRiverIngredients`:return Xa(`river`);case`gatherMineIngredients`:return Xa(`mine`);case`gatherDesertIngredients`:return Xa(`desert`);case`gatherSand`:{let e=U(2,5);return{resources:{sand:e},message:`Cameron gathers ${e} ${no(`Sand`,e)} from the desert.`,tone:`gain`}}case`gatherWater`:{let e=U(1,3);return{resources:{water:e},message:`Cameron fills ${e} ${e===1?`skin`:`skins`} of river water.`,tone:`gain`}}case`mineCoal`:return $a(e,`coal`);case`mineCopper`:return $a(e,`copper`);case`mineTin`:return $a(e,`tin`);case`fishRiver`:return Qa();case`craftLowestTool`:case`craftLeatherBackpack`:break;case`craftWoodenSpoon`:return{resources:{woodenSpoon:1},message:`Cameron carves a wooden spoon.`,tone:`craft`};case`chopTrees`:{let t=gi(e,`woodcutting`),n=t>=3?1:+(t>=2&&Math.random()<.5),r=U(2,4)+n,i=+(Math.random()<.35);return{resources:{wood:r,stick:i},message:`Cameron chops ${r} ${no(`Wood`,r)}${i?` and saves a usable stick`:``}.`,tone:`gain`}}case`huntSmallAnimals`:return eo(e);case`butcherFish`:return{resources:{},message:`Cameron butchers carried fish.`,tone:`gain`};case`butcherRabbit`:return to(e,`rabbit`);case`butcherSquirrel`:return to(e,`squirrel`);case`cookRabbitMeat`:return{resources:{cookedRabbitMeat:1},message:`Cameron cooks rabbit meat over the coals.`,tone:`craft`};case`cookSquirrelMeat`:return{resources:{cookedSquirrelMeat:1},message:`Cameron cooks squirrel meat over the coals.`,tone:`craft`};case`craftWoodenBowl`:return{resources:{woodenBowl:1},message:`Cameron carves a wooden bowl.`,tone:`craft`};case`tanHide`:return{resources:{leather:1},message:`Cameron works a hide into rough leather.`,tone:`craft`}}let c=Ha(n);return c?{resources:{},message:`Cameron finishes ${io(c).toLowerCase()}.`,tone:`craft`}:{resources:{},message:`Cameron finishes the work.`,tone:`craft`}}function Ha(e){let t=x(e);if(t?.toolId)return t.toolId;let n=Fa.find(t=>t.actionId===e);return n?n.toolId:e===`craftLeatherBackpack`?`leatherBackpack`:null}function Ua(e,t,n,r,i){let a=O.find(e=>e.id===r);a&&(e.tools[r].quantity+=1,fi(e,r)||bi(e,r),Jt(e,{aggregateKey:`craft:${t}:${r}`,text:`${n} crafted ${ro(a.label)}`,amount:1,unit:ro(a.label),tone:`craft`,now:i,scope:`character`}))}function Wa(e,t,n,r){let i=Ja(e,t);Object.values(i).some(e=>(e??0)>0)&&Jt(e,{aggregateKey:`action:${t}:butcherFish`,text:`${n} butchered fish`,resources:i,tone:`gain`,now:r,scope:`character`})}function Ga(e,t=e.selectedCharacterId){return Ie.some(n=>Sn(e,n,`character`,t))}function Ka(e,t,n,r){switch(t){case`fishRiver`:Si(e,`fishing`,1,n,r);break;case`mineCoal`:case`mineCopper`:case`mineTin`:Si(e,`mining`,1,n,r);break;case`chopTrees`:Si(e,`woodcutting`,1,n,r);break;case`huntSmallAnimals`:Si(e,`hunting`,1,n,r);break;case`butcherRabbit`:case`butcherSquirrel`:Si(e,`butchering`,1,n,r);break;default:break}}function qa(e,n=`Cameron`){let r=x(e);if(r)return`${n} completed ${r.label.toLowerCase()}`;let i=g(e);if(i)return`${n} completed ${i.label.toLowerCase()}`;let a=E(e);if(a)return`${n} completed ${a.label.toLowerCase()}`;let o=d(e);if(o)return`${n} gathered ${o.label.replace(`Gather `,``).toLowerCase()}`;let s=t(e);if(s)return`${n} gathered ${s.resourceLabel.toLowerCase()}`;switch(e){case`gatherSticks`:return`${n} gathered sticks`;case`gatherStones`:return`${n} gathered stones`;case`gatherFlaxPlants`:return`${n} gathered flax plants`;case`gatherFlaxFibers`:return`${n} gathered flax fibers`;case`gatherMeadowIngredients`:return`${n} gathered meadow ingredients`;case`gatherForestIngredients`:return`${n} gathered forest forage`;case`gatherRiverIngredients`:return`${n} gathered river forage`;case`gatherMineIngredients`:return`${n} gathered mine forage`;case`gatherDesertIngredients`:return`${n} gathered desert forage`;case`gatherSand`:return`${n} gathered sand`;case`gatherWater`:return`${n} gathered water`;case`mineCoal`:return`${n} mined coal`;case`mineCopper`:return`${n} mined copper`;case`mineTin`:return`${n} mined tin`;case`fishRiver`:return`${n} caught river fish`;case`craftLowestTool`:return`${n} balanced tool stock`;case`craftWoodenSpoon`:return`${n} crafted wooden spoons`;case`craftWoodenBowl`:return`${n} carved wooden bowls`;case`craftLeatherBackpack`:return`${n} crafted leather backpacks`;case`chopTrees`:return`${n} chopped trees`;case`huntSmallAnimals`:return`${n} hunted small animals`;case`butcherFish`:return`${n} butchered fish`;case`butcherRabbit`:return`${n} butchered rabbits`;case`butcherSquirrel`:return`${n} butchered squirrels`;case`cookRabbitMeat`:return`${n} cooked rabbit meat`;case`cookSquirrelMeat`:return`${n} cooked squirrel meat`;case`tanHide`:return`${n} tanned hide`}let c=Ha(e);return c?`${n} crafted ${ro(io(c)).toLowerCase()}`:`${n} completed work`}function Ja(e,t){let n={},r=mn(e,t);for(let i of Ie){let a=Re[i];if(!a||!Sn(e,i,`character`,t))continue;let o=A(a,Cn(e,i,`character`,t)*.5*Je());return o<=0?n:(r[a]=A(a,r[a]+o),n[a]=A(a,(n[a]??0)+o),e.seenResources.includes(a)||e.seenResources.push(a),n)}return n}function Ya(e){return{...e,resources:Ze(e.resources),resourceCounts:e.resourceCounts?Qe(e.resourceCounts):void 0}}function Xa(e,t){let n=Aa(e,t);return{resources:n.resources,message:n.message,tone:`gain`}}function Za(e,t){let n=ja(e,t);return{resources:n.resources,message:n.message,tone:`gain`}}function Qa(){let e=Ia[U(0,Ia.length-1)],t=ka(e.minWeight,e.maxWeight,1),n=j(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron catches a ${We(e.id,t)} lb ${n}.`,tone:`gain`}}function $a(e,t){let n=j(t),r=gi(e,`mining`),i=1+ +(Math.random()<(r>=3?.35:r>=2?.18:0));return{resources:{[t]:i},message:`Cameron mines ${i} ${n}.`,tone:`gain`}}function eo(e){let t=yi(e,`hunting`),n=Math.min(.76,.52+t*.025),r=La[Math.random()<n?0:1],i=Math.min(.8,Math.max(0,t-2.4)*.12),a=ka(r.minWeight,r.maxWeight+i,1),o=j(r.id);return{resources:{[r.id]:a},resourceCounts:{[r.id]:1},message:`Cameron brings back a ${We(r.id,a)} lb ${o}.`,tone:`gain`}}function to(e,t){if(Cn(e,t)<=0)return{resources:{},message:`Cameron has no ${t} to butcher.`,tone:`gain`};let n=t===`rabbit`?`rabbitMeat`:`squirrelMeat`,r=t===`rabbit`?U(1,2):1,i=gi(e,`butchering`),a=hi(e,`butchering`),o=i>=3?.18:i>=2?.08:0,s=Math.min(.9,(t===`rabbit`?.65:.42)+o),c=Math.min(.75,(t===`rabbit`?.24:.14)+o),l=+(Math.random()<s),u=+(Math.random()<c),d={[n]:r,hide:a?l:0,bone:a?u:0},f=Object.entries({hide:l,bone:u}).filter(([,e])=>a&&e>0).map(([e,t])=>`${t} ${j(e)}`);return{resources:d,message:`Cameron butchers a ${t} for ${r} ${j(n)}${f.length?`, plus ${f.join(` and `)}`:``}.`,tone:`gain`}}function no(e,t){return t===1?e:`${e}s`}function ro(e){return e.endsWith(`Knife`)?`${e.slice(0,-5)}Knives`:e.endsWith(`s`)?e:`${e}s`}function io(e){return O.find(t=>t.id===e)?.label??`Tool`}var ao=7200*1e3;function oo(e,t=Date.now()){let n=Fa.filter(({actionId:n})=>L(e,n,t)&&ln(e,G(n)));return n.length?n.reduce((t,n)=>za(e,n.toolId)<za(e,t.toolId)?n:t,n[0]).actionId:null}function so(e,t,n=e.selectedCharacterId,r=Date.now()){let i=H(e,t),a=e.characters.find(e=>e.id===n);return!i||!a?!1:(a.actionLoopId=i.id,co(e,i.id,n,r))}function co(e,t,n=e.selectedCharacterId,r=Date.now()){let i=H(e,t);return i?.actionIds.length?Mo(e,{actionId:i.actionIds[0],characterId:n,phase:`working`,loopActionIds:[...i.actionIds],loopLocationIds:fa(i),loopIndex:0,startedAt:r,endsAt:r,repeat:!0},0,r):!1}function G(e){let t=x(e);if(t)return t.cost;let n=g(e);if(n)return n.cost;let r=E(e);if(r)return r.cost;let i=Ha(e);if(i)return Ra(i);switch(e){case`craftWoodenBowl`:return{wood:1};case`cookRabbitMeat`:return{rabbitMeat:1};case`cookSquirrelMeat`:return{squirrelMeat:1};case`craftWoodenSpoon`:return{wood:1};case`tanHide`:return{hide:1};case`craftLowestTool`:return{};default:return{}}}function K(e,t,n=Date.now(),r=e.selectedCharacterId){return lo(e,r)?!1:t===`craftLowestTool`?L(e,t,n)&&!!oo(e,n):t===`butcherFish`?L(e,t,n)&&Ga(e,r):t===`butcherRabbit`?L(e,t,n)&&Sn(e,`rabbit`):t===`butcherSquirrel`?L(e,t,n)&&Sn(e,`squirrel`):L(e,t,n)&&ln(e,G(t))}function lo(e,t){return!!e.combat?.encounter?.units.some(e=>e.kind===`party`&&e.characterId===t)}function uo(e,t,n=Date.now(),r={}){let i=D(t),a=e.selectedCharacterId;if(!i||!K(e,t,n,a))return!1;let o=Li(t,r.locationId),s=zi(e,a),c=Yi(s,o),l={actionId:t,characterId:a,phase:c>0?`travelingTo`:`working`,originLocationId:s,targetLocationId:o,locationId:o===`camp`?void 0:o,loopActionIds:[t],loopLocationIds:[o===`camp`?null:o],loopIndex:0,startedAt:n,endsAt:n+(c||i.durationMs),repeat:!0};return c<=0&&Bi(e,a,o),na(e,l),B(e,n),!0}function fo(e,t=Date.now()){let n=z(e);if(!n)return;let r=D(n.actionId),i=Vi(n,zi(e,n.characterId));if(Bi(e,n.characterId,i),i!==`camp`){na(e,{...n,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i,startedAt:t,endsAt:t+Yi(i,`camp`),repeat:!1}),B(e,t),N(e,`${V(e,n.characterId)} stops ${r?.verb??`working`} at ${Hi(i)} and heads back to camp.`,`muted`,t,`character`);return}let a=i===`camp`?po(e,t,n.characterId):!1;ra(e,n.characterId),B(e,t),N(e,a?`${V(e,n.characterId)} stops ${r?.verb??`working`} and returns to camp.`:`${V(e,n.characterId)} stops ${r?.verb??`working`} at ${Hi(i)}.`,`muted`,t,`character`)}function po(e,t=Date.now(),n=e.selectedCharacterId){if(zi(e,n)!==`camp`)return!1;let r=bn(e,n);return Object.keys(r).length<=0?!1:(Jt(e,{aggregateKey:`deposit:camp`,text:`${V(e,n)} returned resources to camp`,resources:r,tone:`gain`,now:t,scope:`character`}),B(e,t),!0)}function mo(e,t=Date.now()){let n=Math.min(t,e.lastSimulatedAt+ao);ta(e);let r=0;for(;r<500;){let t=Io(e,n),i=ia(e),a=i?.endsAt??1/0;if(t===null&&a>n)break;if(t!==null&&t<=a){zr(e,t);for(let n of[...ea(e)])Fo(Ui(n))&&(N(e,`${V(e,n.characterId)} stops cooking as the campfire goes out.`,`warning`,t,`character`),ra(e,n.characterId));continue}if(i&&a<=n){let t=i,a=t.endsAt;go(e,t,a,n),r+=1;continue}break}t>n&&r>0&&N(e,`The saved trail grows quiet after two hours away.`,`muted`,n,`character`),e.lastSimulatedAt=t,e.updatedAt=t;for(let t of e.characters)z(e,t.id)||aa(e,!1,t.id);ta(e)}function ho(e,t=Date.now(),n=e.selectedCharacterId){let r=z(e,n);if(!r)return 0;let i=r.endsAt-r.startedAt;return i<=0?1:(t-r.startedAt)/i}function go(e,t,n,r){if(t.phase===`travelingTo`){_t(e,t.endsAt-t.startedAt,n),Bi(e,t.characterId,Ri(t)),Oo(e,t,n);return}if(t.phase===`travelingBack`){if(_t(e,t.endsAt-t.startedAt,n),Bi(e,t.characterId,`camp`),po(e,n,t.characterId),t.repeat&&Mo(e,t,Gi(t),n))return;if(t.repeat&&K(e,t.actionId,n,t.characterId)){ko(e,t,n);return}ra(e,t.characterId);return}if(t.phase===`followUp`){_o(e,t,n,r);return}vo(e,t,n)}function _o(e,t,n,r){let i=Ui(t);if(i!==`butcherFish`){Ao(e,t,r,Ki(t));return}if(Wa(e,t.characterId,V(e,t.characterId),n),ht(e,i,n),Ga(e,t.characterId)){jo(e,t,t.loopIndex??0,n);return}Ao(e,t,r,Ki(t))}function vo(e,t,n){let r=Ro(e,t.actionId,n);if(!r){yo(e,t,n);return}let i=G(r);if(!ln(e,i)){yo(e,t,n);return}if(un(e,i),r===`butcherFish`){Wa(e,t.characterId,V(e,t.characterId),n),ht(e,r,n),bo(e,t,r,n);return}let a=Ha(r);if(a){Ua(e,t.characterId,V(e,t.characterId),a,n),ht(e,r,n),bo(e,t,r,n);return}let o=Ba(e,r),s=R(r)?yn(e,o.resources,o.resourceCounts,t.characterId):o.resources;R(r)?Po(e,t.characterId,r,s,n):(dn(e,o.resources,o.resourceCounts),Jt(e,{aggregateKey:`action:${t.characterId}:${r}`,text:qa(r,V(e,t.characterId)),resources:o.resources,tone:o.tone,now:n,scope:`character`})),Ka(e,r,n,V(e,t.characterId)),ht(e,r,n),bo(e,t,r,n,{returnToCamp:R(r)&&Lo(o.resources,s,e,t.characterId)})}function yo(e,t,n){wo(e,t).mode===`whenCannotStart`&&Mi(t).length>1&&xo(e,t,n)||(N(e,`${V(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),ra(e,t.characterId))}function bo(e,t,n,r,i={}){let a=Co(e,t,n,r,!!i.returnToCamp);if(i.returnToCamp){let i=a?Ki(t):t.loopIndex??0;if(a&&So(e,t,n,i,r))return;Ao(e,t,r,i);return}if(!(a&&Mi(t).length>1&&xo(e,t,r))){if(t.repeat&&K(e,t.actionId,r,t.characterId)){Oo(e,t,r);return}ra(e,t.characterId)}}function xo(e,t,n){let r=Ki(t);return So(e,t,t.actionId,r,n)?!0:Ii(t,r)===`camp`&&zi(e,t.characterId)!==`camp`?(Ao(e,t,n,r),!0):Mo(e,t,r,n)}function So(e,t,n,r,i){return n===`fishRiver`&&Wi(t,r)===`butcherFish`&&Ga(e,t.characterId)?(jo(e,t,r,i),!0):!1}function Co(e,t,n,r,i){let a=wo(e,t);switch(a.mode){case`manual`:return!1;case`afterCompletion`:return!0;case`whenInventoryFull`:return i||Eo(e,t.characterId);case`whenResourceAtLeast`:return To(e,t,a,n);case`whenCannotStart`:return!K(e,t.actionId,r,t.characterId);default:return R(n)?i:!0}}function wo(e,t,n=t.loopIndex??0){let r=e.characters.find(e=>e.id===t.characterId),i=r?.actionLoopId?H(e,r.actionLoopId):null;return i?ma(i,n):{mode:`smart`}}function To(e,t,n,r){let i=Math.max(1,Math.floor(n.amount??1));return xn(e,n.resourceId??Do(r),n.scope??`camp`,t.characterId)>=i}function Eo(e,t){return _n(e,t)>=vn(e,t)}function Do(e){if(e.startsWith(`gatherIngredient:`))return e.slice(17);switch(e){case`gatherSticks`:return`stick`;case`gatherStones`:return`stone`;case`gatherFlaxPlants`:return`flaxPlant`;case`gatherFlaxFibers`:return`flaxFiber`;case`gatherSand`:return`sand`;case`gatherWater`:return`water`;case`mineCoal`:return`coal`;case`mineCopper`:return`copper`;case`mineTin`:return`tin`;case`chopTrees`:return`wood`;case`huntSmallAnimals`:return`rabbit`;case`fishRiver`:return`minnow`;default:return`stick`}}function Oo(e,t,n){let r=D(t.actionId);if(!r){ra(e,t.characterId);return}let i=Ri(t);Bi(e,t.characterId,i),na(e,{...t,phase:`working`,originLocationId:i,targetLocationId:i,locationId:i===`camp`?void 0:i,startedAt:n,endsAt:n+r.durationMs})}function ko(e,t,n){let r=Ii(t,t.loopIndex??0),i=zi(e,t.characterId),a=Yi(i,r);if(a<=0){Oo(e,{...t,targetLocationId:r,locationId:r===`camp`?void 0:r},n);return}na(e,{...t,phase:`travelingTo`,originLocationId:i,targetLocationId:r,locationId:r===`camp`?void 0:r,startedAt:n,endsAt:n+a})}function Ao(e,t,n,r=Ki(t)){let i=Ri(t);na(e,{...t,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i===`camp`?void 0:i,nextLoopIndex:r,startedAt:n,endsAt:n+Yi(i,`camp`)})}function jo(e,t,n,r){let i=Wi(t,n),a=D(i);if(!a){Ao(e,t,r,Ki(t));return}na(e,{...t,actionId:i,phase:`followUp`,originLocationId:Ri(t),targetLocationId:Ri(t),loopIndex:n,startedAt:r,endsAt:r+a.durationMs})}function Mo(e,t,n,r,i=0){let a=Mi(t);if(!a.length||i>=a.length)return!1;let o=Ji(n,a),s=a[o];if(s===`butcherFish`||No(e,t,o,s)||!K(e,s,r,t.characterId)){let n=qi(t,o);return n===o?!1:Mo(e,t,n,r,i+1)}let c=D(s);if(!c)return!1;let l=Ii(t,o),u=zi(e,t.characterId),d=Yi(u,l);return na(e,{...t,actionId:s,phase:d>0?`travelingTo`:`working`,originLocationId:u,targetLocationId:l,locationId:l===`camp`?void 0:l,loopActionIds:a,loopLocationIds:Pi(t,a),loopIndex:o,nextLoopIndex:void 0,followUpActionId:void 0,startedAt:r,endsAt:r+(d||c.durationMs)}),d<=0&&Bi(e,t.characterId,l),!0}function No(e,t,n,r){let i=wo(e,t,n);return i.mode===`whenInventoryFull`?Eo(e,t.characterId):i.mode===`whenResourceAtLeast`?To(e,t,i,r):!1}function Po(e,t,n,r,i){Object.values(r).some(e=>(e??0)>0)&&Jt(e,{aggregateKey:`action:${t}:${n}`,text:qa(n,V(e,t)),resources:r,tone:`gain`,now:i,scope:`character`})}function Fo(e){return e===`cookRabbitMeat`||e===`cookSquirrelMeat`}function Io(e,t){let n=Rr(e);return n&&n<=t?n:null}function Lo(e,t,n,r){let i=Object.values(e).reduce((e,t)=>e+(t??0),0),a=Object.values(t).reduce((e,t)=>e+(t??0),0);return _n(n,r)>=vn(n,r)||i>0&&a<i}function Ro(e,t,n){return t===`craftLowestTool`?oo(e,n):t}le.map(e=>e.id);var zo=1.4,Bo=.8;function Vo(e){let t=O.filter(t=>t.weapon&&fi(e,t.id));return t.sort((e,t)=>Xo(t.id)-Xo(e.id)),t[0]?.id??null}function Ho(e){return e?de[e]??`fighter`:`fighter`}function Uo(e,t=e.selectedCharacterId){let n=Vo(e),r=n?ui(n):null,i=Ho(n),a=_e(i),o=r?.weapon;return{classId:i,classLabel:a.label,weaponId:n,weaponLabel:r?.label??`Unarmed`,damage:o?.damage??zo,speed:o?.speed??Bo,range:o?.range??a.range,attackRange:Yo(o?.range??a.range),maxHp:a.maxHp,maxMana:a.maxMana}}function Wo(e,t=e.selectedCharacterId){let n=e.characters.find(e=>e.id===t);if(!n)return Lt();let r=Uo(e,t),i=n.combat??Lt(),a=r.maxHp,o=r.maxMana,s=i.maxHp>0?i.hp/i.maxHp:1,c=i.maxMana>0?i.mana/i.maxMana:1;return n.combat={maxHp:a,hp:i.hp<=0?0:Qo(Math.round(a*s),1,a),maxMana:o,mana:o<=0?0:Qo(Math.round(o*c),0,o)},n.combat}function Go(e){let t=Bt(),n=e.classProgress;if(n)for(let e of ue)t[e.id]={...t[e.id],...n[e.id]??{}};return e.classProgress=t,t}function Ko(e,t,n,r,i=Date.now()){let a=Math.max(0,Math.floor(r));if(a<=0)return;let o=e.characters.find(e=>e.id===t);if(!o)return;let s=Go(o)[n];s.totalXp+=a,s.xp=Math.min(ut($e),s.xp+a),s.level=Zo(s.xp),e.updatedAt=i,e.lastSimulatedAt=i}function qo(e){let t=ut(e.level),n=e.level>=1e3?t:ut(e.level+1),r=Math.max(0,n-t),i=Math.max(0,Math.min(e.xp-t,r));return{currentLevelXp:t,nextLevelXp:n,xpIntoLevel:i,xpForLevel:r,ratio:r<=0?1:i/r,atCap:e.level>=$e}}function Jo(e){return M(e)}function Yo(e){return e===`ranged`?3:e===`focus`?2:1}function Xo(e){let t=ui(e)?.weapon;if(!t)return 0;let n=t.range===`ranged`?.35:t.range===`focus`?.2:0;return t.damage*t.speed+n}function Zo(e){let t=1;for(;t<1e3&&e>=ut(t+1);)t+=1;return t}function Qo(e,t,n){return Number.isFinite(e)?Math.min(n,Math.max(t,e)):t}var $o=1e3,es=120,ts=24,ns=5,rs=22;function is(e,t=e.selectedCharacterId,n=`ruins`,r=Date.now()){ks(e);let i=e.characters.find(e=>e.id===t);if(!i||ss(e,t)||Os(e,t))return!1;let a=ye(n),o=hs(e,n,r),s=Uo(e,t),c=Wo(e,t);c.hp<=0&&(c.hp=c.maxHp),c.mana<=0&&c.maxMana>0&&(c.mana=Math.ceil(c.maxMana*.5));let l=bs(o);return o.units.push({id:`party-${i.id}`,kind:`party`,characterId:i.id,name:i.name,hp:c.hp,maxHp:c.maxHp,mana:c.mana,maxMana:c.maxMana,x:l.x,y:l.y,damage:Ds(e,i.id,s.damage),attackRange:s.attackRange,actEveryMs:Es(s.speed),nextActAt:r+Es(s.speed),classId:s.classId,weaponId:s.weaponId??void 0}),i.condition=`working`,e.combat.selectedLocationId=n,o.message=`${i.name} enters ${a.label}.`,As(e,o.message,`muted`,r),ps(o,r),js(e,r),!0}function as(e,t=e.selectedCharacterId,n=Date.now()){ks(e);let r=e.combat.encounter;if(!r)return!1;let i=cs(e,t);if(!i)return!1;vs(e,i),r.units=r.units.filter(e=>e.id!==i.id);let a=e.characters.find(e=>e.id===t);return a&&!Os(e,t)&&(a.condition=`resting`),As(e,`${i.name} withdraws from The Ruins.`,`warning`,n),ls(r).length?(r.updatedAt=n,r.message=`${i.name} withdraws.`):e.combat.encounter=null,js(e,n),!0}function os(e,t=Date.now()){ks(e);let n=e.combat.encounter;if(!n)return;let r=0;for(;n&&n.updatedAt+$o<=t&&r<es;){let t=n.updatedAt+$o;ds(e,n,t),n=e.combat.encounter,n&&(n.updatedAt=t),r+=1}r>0&&js(e,Math.min(t,e.combat.encounter?.updatedAt??t))}function ss(e,t){return!!cs(e,t)}function cs(e,t){return e.combat?.encounter?.units.find(e=>e.kind===`party`&&e.characterId===t)??null}function ls(e){return e?.units.filter(e=>e.kind===`party`&&e.hp>0)??[]}function us(e){return e?.units.filter(e=>e.kind===`enemy`&&e.hp>0)??[]}function ds(e,t,n){if(!ls(t).length){gs(e,t,n);return}if(!us(t).length){ps(t,n);return}let r=t.units.filter(e=>e.hp>0&&e.nextActAt<=n).sort((e,t)=>e.nextActAt-t.nextActAt);for(let i of r){if(i.hp<=0||e.combat.encounter!==t)continue;let r=i.kind===`party`?us(t):ls(t);if(!r.length)continue;let a=Cs(i,r);a&&(ws(i,a)<=i.attackRange?fs(e,t,i,a,n):(ys(t,i,a),t.message=`${i.name} moves closer.`),i.nextActAt=n+Ts(i))}if(t.units=t.units.filter(e=>e.kind===`party`||e.hp>0),_s(e,t),!ls(t).length){gs(e,t,n);return}us(t).length||(t.wave+=1,ps(t,n))}function fs(e,t,n,r,i){let a=Math.max(1,Math.round(n.damage));if(r.hp=Math.max(0,r.hp-a),t.message=`${n.name} hits ${r.name} for ${a}.`,n.kind===`party`&&n.characterId&&n.classId&&Ko(e,n.characterId,n.classId,r.hp<=0?ns+rs:ns,i),r.kind===`enemy`&&r.hp<=0){t.defeatedEnemies+=1,As(e,`${n.name} defeats ${r.name}.`,`gain`,i);return}r.kind===`party`&&r.hp<=0&&(vs(e,r),As(e,`${r.name} is forced back from the fight.`,`warning`,i))}function ps(e,t){if(us(e).length||!ls(e).length)return;let n=Math.min(3,1+Math.floor((e.wave-1)/2));for(let r=0;r<n;r+=1)e.units.push(ms(e,r,t));e.message=`Goblin wave ${e.wave} enters The Ruins.`,e.updatedAt=t}function ms(e,t,n){let r=ye(e.locationId),i=ve(`goblin`),a=xs(e,t);return{id:`goblin-${e.wave}-${t+1}-${n}`,kind:`enemy`,enemyId:i.id,name:i.label,hp:i.maxHp,maxHp:i.maxHp,mana:i.maxMana,maxMana:i.maxMana,x:Math.min(r.gridWidth-1,a.x),y:Math.min(r.gridHeight-1,a.y),damage:i.damage,attackRange:i.attackRange,actEveryMs:i.actEveryMs,nextActAt:n+i.actEveryMs}}function hs(e,t,n){return e.combat.encounter?.locationId===t||(e.combat.encounter={id:`combat-${t}-${n}`,locationId:t,startedAt:n,updatedAt:n,wave:1,defeatedEnemies:0,units:[],message:`The Ruins are quiet.`}),e.combat.encounter}function gs(e,t,n){_s(e,t);for(let n of t.units.filter(e=>e.kind===`party`)){let t=n.characterId?e.characters.find(e=>e.id===n.characterId):null;t&&!Os(e,t.id)&&(t.condition=`resting`)}As(e,`The party withdraws from The Ruins to recover.`,`warning`,n),e.combat.encounter=null,js(e,n)}function _s(e,t){for(let n of t.units)n.kind===`party`&&vs(e,n)}function vs(e,t){if(!t.characterId)return;let n=e.characters.find(e=>e.id===t.characterId);n&&(n.combat={hp:t.hp,maxHp:t.maxHp,mana:t.mana,maxMana:t.maxMana})}function ys(e,t,n){let r=ye(e.locationId),i=new Set(e.units.filter(e=>e.hp>0&&e.id!==t.id).map(e=>`${e.x},${e.y}`)),a=Math.sign(n.x-t.x),o=Math.sign(n.y-t.y),s=[{x:t.x+a,y:t.y},{x:t.x,y:t.y+o},{x:t.x,y:t.y-o},{x:t.x-a,y:t.y}].filter(e=>e.x>=0&&e.y>=0&&e.x<r.gridWidth&&e.y<r.gridHeight&&!i.has(`${e.x},${e.y}`)).sort((e,t)=>ws(e,n)-ws(t,n))[0];s&&(t.x=s.x,t.y=s.y)}function bs(e){let t=ye(e.locationId);return Ss(e,[Math.floor(t.gridHeight/2),1,t.gridHeight-2,0,t.gridHeight-1].map(e=>({x:0,y:e})))??{x:0,y:0}}function xs(e,t){let n=ye(e.locationId),r=[Math.floor(n.gridHeight/2),1,n.gridHeight-2,0,n.gridHeight-1].flatMap(e=>[{x:n.gridWidth-1,y:e},{x:n.gridWidth-2,y:e}]);return Ss(e,r.slice(t).concat(r.slice(0,t)))??{x:n.gridWidth-1,y:Math.floor(n.gridHeight/2)}}function Ss(e,t){let n=new Set(e.units.filter(e=>e.hp>0).map(e=>`${e.x},${e.y}`));return t.find(e=>!n.has(`${e.x},${e.y}`))??null}function Cs(e,t){return t.slice().sort((t,n)=>ws(e,t)-ws(e,n))[0]??null}function ws(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function Ts(e){return Math.max(500,e.actEveryMs)}function Es(e){return Math.max(900,Math.round(2400/Math.max(.4,e)))}function Ds(e,t,n){let r=e.characters.find(e=>e.id===t);if(!r)return n;let i=Uo(e,t).classId,a=r.classProgress?.[i]?.level??1;return n+Math.max(0,a-1)*.08}function Os(e,t){return e.currentActions.some(e=>e.characterId===t)}function ks(e){e.combat??=Vt()}function As(e,t,n,r){e.combat.log=[{id:`${r}-${e.combat.log.length}-${t.slice(0,12)}`,time:r,text:t,tone:n},...e.combat.log].slice(0,ts)}function js(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function Ms(e,t,n=Date.now()){let r=Te(t);return!r||!Rs(e,r,n)?!1:(un(e,Ee(r)),e.cooking.queue.push({id:`${n}-${r.id}-${e.cooking.queue.length+1}`,recipeId:r.id,stationId:r.station,queuedAt:n,startedAt:null,endsAt:null}),Js(e,r.id),Us(e,n),Xs(e,n),!0)}function Ns(e,t=Date.now()){Us(e,t);let n=0;for(;n<100;){let r=Ps(e);if(!r)break;let i=Rr(e);if(!i||i<=t){Gs(e,t);break}if(!r.endsAt||r.endsAt>t)break;Ws(e,r,r.endsAt),n+=1,Us(e,r.endsAt)}}function Ps(e){return e.cooking.queue.find(e=>e.startedAt!==null&&e.endsAt!==null)??null}function Fs(e,t=Date.now()){if(e.startedAt===null||e.endsAt===null)return 0;let n=e.endsAt-e.startedAt;return n<=0?1:Math.max(0,Math.min(1,(t-e.startedAt)/n))}function Is(e){return[...xe].sort((e,t)=>e.levelRequirement-t.levelRequirement||e.name.localeCompare(t.name))}function Ls(e){let t=xe.filter(t=>Ys(e,t)).map(e=>e.id);for(let n of t)Js(e,n);return t}function Rs(e,t,n=Date.now()){let r=typeof t==`string`?Te(t):t;return!!(r&&!zs(e,r,n))}function zs(e,t,n=Date.now()){let r=typeof t==`string`?Te(t):t;if(!r)return`Unknown recipe`;if(e.skills.cooking.level<r.levelRequirement)return`Needs Cooking Lv ${r.levelRequirement}`;if(!I(e,n))return`Needs Lit Campfire`;if(e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`)return`Needs cook at camp`;let i=Ks(e,r);return i.length?`Needs ${i.join(`, `)}`:``}function Bs(e){let t=Ze(De(e));return Object.entries(t).map(([e,t])=>`${t} ${j(e)}`).join(`, `)}function Vs(e){return e.ingredients.map(e=>{if(!e.resourceId)return e.category??`Ingredient`;let t=j(e.resourceId);return e.consumed===!1?`${e.amount} ${t} available`:`${e.amount} ${t}`}).join(`, `)}function Hs(e,t,n=Date.now()){let r=we(t);return r?r.id===`campfire`?I(e,n)?`Campfire lit`:`Needs lit campfire`:`Station unavailable`:`Unknown station`}function Us(e,t){if(Ls(e),Ps(e)||!I(e,t))return;let n=e.cooking.queue.find(e=>e.startedAt===null&&e.endsAt===null);if(!n)return;let r=Te(n.recipeId);if(!r){e.cooking.queue=e.cooking.queue.filter(e=>e.id!==n.id);return}n.startedAt=t,n.endsAt=t+r.cookTimeMs,Xs(e,t)}function Ws(e,t,n){let r=Te(t.recipeId);if(e.cooking.queue=e.cooking.queue.filter(e=>e.id!==t.id),!r){Xs(e,n);return}let i=Ze(De(r));dn(e,i),vt(e,r.xpReward,n),e.cooking.completedRecipeCounts[r.id]=(e.cooking.completedRecipeCounts[r.id]??0)+1,Js(e,r.id),Jt(e,{aggregateKey:`cook:${r.id}`,text:`Cameron cooked ${r.name.toLowerCase()}`,resources:i,tone:`craft`,now:n,scope:`camp`}),Xs(e,n)}function Gs(e,t){let n=Ps(e);n&&(n.startedAt=null,n.endsAt=null,N(e,`Cooking waits for a lit campfire.`,`warning`,t,`camp`),Xs(e,t))}function Ks(e,t){let n=Ee(t),r=[];if(!ln(e,n)){let t=qs(e,n);t&&r.push(t)}for(let n of t.ingredients)!n.resourceId||n.consumed!==!1||(e.inventory[n.resourceId]??0)<n.amount&&r.push(`${n.amount} ${j(n.resourceId)}`);return r}function qs(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-(e.inventory[t]??0));a>0&&(n[t]=a)}return Object.keys(n).length?P(n):``}function Js(e,t){e.cooking.knownRecipeIds.includes(t)||e.cooking.knownRecipeIds.push(t)}function Ys(e,t){return e.cooking.knownRecipeIds.includes(t.id)?!0:e.skills.cooking.level<t.levelRequirement?!1:t.ingredients.some(t=>!!(t.resourceId&&e.seenResources.includes(t.resourceId)))}function Xs(e,t){e.updatedAt=t}var Zs=``+new URL(`aloe-leaves-icon-BC3NZCE_.png`,import.meta.url).href,Qs=``+new URL(`bone-icon-DsPaT320.png`,import.meta.url).href,$s=``+new URL(`brook-stickleback-icon-CwY54faB.png`,import.meta.url).href,ec=``+new URL(`basket-background-1-border-1-DAqcyfrl.png`,import.meta.url).href,tc=``+new URL(`camp-location-icon--vnRMwCB.png`,import.meta.url).href,nc=``+new URL(`campfire-2x2-Bq-ELFVu.png`,import.meta.url).href,rc=``+new URL(`campfire-unlit-2x2-HI8ea9KO.png`,import.meta.url).href,ic=``+new URL(`chamomile-icon-BiiYA-tr.png`,import.meta.url).href,ac=``+new URL(`clover-icon-B_7BApnL.png`,import.meta.url).href,oc=``+new URL(`coal-icon-CPItI7lv.png`,import.meta.url).href,sc=``+new URL(`copper-icon-Dl9RQPBM.png`,import.meta.url).href,cc=``+new URL(`crystal-bloom-icon-dnhLq2ds.png`,import.meta.url).href,lc=``+new URL(`craft-materials-bundle-button-D-JGRyoh.png`,import.meta.url).href,uc=``+new URL(`dandelion-icon-CFJR6jpX.png`,import.meta.url).href,dc=``+new URL(`fire-blossom-icon-CUDE9oL_.png`,import.meta.url).href,fc=``+new URL(`fish-filet-icon-BHEr_iIj.png`,import.meta.url).href,pc=``+new URL(`fishing-pole-background-1-border-1-BKeUI82e.png`,import.meta.url).href,q=``+new URL(`flax-fiber-icon-xz-yYl-m.png`,import.meta.url).href,mc=``+new URL(`forest-location-icon-VKGIFi31.png`,import.meta.url).href,hc=``+new URL(`desert-location-icon-B5UHUyjT.png`,import.meta.url).href,gc=``+new URL(`foraging-skill-banner-BeZiWPXh.png`,import.meta.url).href,_c=``+new URL(`berry-icon-DEz1wEqt.png`,import.meta.url).href,vc=``+new URL(`blueberry-icon-BzI1Ku5H.png`,import.meta.url).href,yc=``+new URL(`elder-flowers-icon-D2cV17xG.png`,import.meta.url).href,bc=``+new URL(`hearthcap-icon-DhCzm8_Q.png`,import.meta.url).href,xc=``+new URL(`hide-icon-BWeGfM2U.png`,import.meta.url).href,Sc=``+new URL(`leather-backpack-equipped-slot-DhoXwslM.png`,import.meta.url).href,Cc=``+new URL(`lavender-icon-W4y_Mfy2.png`,import.meta.url).href,wc=``+new URL(`marsh-iris-icon-BZExTePG.png`,import.meta.url).href,Tc=``+new URL(`meadow-location-icon-v2-CqdYJu9g.png`,import.meta.url).href,Ec=``+new URL(`mine-location-icon-BbZJUyhx.png`,import.meta.url).href,Dc=``+new URL(`mint-icon-D087DAdu.png`,import.meta.url).href,Oc=``+new URL(`minnow-icon-ANpglcnc.png`,import.meta.url).href,kc=``+new URL(`mudskipper-icon-_bxkPxea.png`,import.meta.url).href,Ac=``+new URL(`mushroom-icon-B9zVCy80.png`,import.meta.url).href,jc=``+new URL(`palecap-flowers-icon-BMBJ8DXK.png`,import.meta.url).href,Mc=``+new URL(`pebble-perch-icon-CHh-9clF.png`,import.meta.url).href,Nc=``+new URL(`plantain-leaf-icon-CIfMOgsh.png`,import.meta.url).href,Pc=``+new URL(`rabbit-icon-DGNcKYc7.png`,import.meta.url).href,Fc=``+new URL(`rabbit-meat-icon-Bx0Odi_j.png`,import.meta.url).href,Ic=``+new URL(`river-location-icon-v2-BqOU5iqQ.png`,import.meta.url).href,Lc=``+new URL(`rose-hips-icon-CV8z7OyS.png`,import.meta.url).href,Rc=``+new URL(`sorrel-icon-DKy8ofYd.png`,import.meta.url).href,zc=``+new URL(`squirrel-icon-BM6RAXNK.png`,import.meta.url).href,Bc=``+new URL(`squirrel-meat-icon-hPhcJQOd.png`,import.meta.url).href,Vc=``+new URL(`stick-icon-Q8m3FMqw.png`,import.meta.url).href,Hc=``+new URL(`stone-hatchet-background-1-border-1-CZNIcvIL.png`,import.meta.url).href,Uc=``+new URL(`stone-knife-background-1-border-1-BKz_ubCn.png`,import.meta.url).href,Wc=``+new URL(`stone-pick-axe-background-1-border-1-DOAIoZ7O.png`,import.meta.url).href,Gc=``+new URL(`stone-spear-background-1-border-1-wlFNpfhc.png`,import.meta.url).href,Kc=``+new URL(`stone-icon-yRG7nuNE.png`,import.meta.url).href,qc=``+new URL(`stone-loach-icon-4ySXaf0_.png`,import.meta.url).href,Jc=``+new URL(`stone-furnace-2x2-54_TDZso.png`,import.meta.url).href,Yc=``+new URL(`short-bow-background-1-border-1-CMIlkEMG.png`,import.meta.url).href,Xc=``+new URL(`strawberry-icon-DDMbCWsT.png`,import.meta.url).href,Zc=``+new URL(`sunbloom-petals-icon-GfaNp-0q.png`,import.meta.url).href,Qc=``+new URL(`tin-icon-B9xoPCj0.png`,import.meta.url).href,$c=``+new URL(`hide-tent-2x2-B-STXQiW.png`,import.meta.url).href,el=``+new URL(`tanning-rack-2x2-DotflpMM.png`,import.meta.url).href,tl=``+new URL(`trillium-blossoms-icon-DX9BmT8e.png`,import.meta.url).href,nl=``+new URL(`water-lilies-icon-DaKvHiSe.png`,import.meta.url).href,rl=``+new URL(`wooden-bowl-background-1-border-1-C2wDRzy6.png`,import.meta.url).href,il=``+new URL(`wooden-club-background-1-border-1-zKAKo9tf.png`,import.meta.url).href,al=``+new URL(`wooden-spoon-background-1-border-1-B1C5KdJm.png`,import.meta.url).href,ol=``+new URL(`wooden-sword-background-1-border-1-BPis69Er.png`,import.meta.url).href,sl=``+new URL(`wooden-totem-background-1-border-1-Dk-pmYjA.png`,import.meta.url).href,cl=``+new URL(`wooden-two-handed-club-background-1-border-1-Dyis-qJI.png`,import.meta.url).href,ll=``+new URL(`wooden-two-handed-sword-background-1-border-1-DVH5QhM0.png`,import.meta.url).href,ul=``+new URL(`wild-garlic-icon-CYYjAsti.png`,import.meta.url).href,dl=``+new URL(`wild-onion-icon-CzFQCrOc.png`,import.meta.url).href,fl=``+new URL(`wood-icon-CxwJtOlQ.png`,import.meta.url).href,pl=``+new URL(`wood-violets-icon-DueTDCEb.png`,import.meta.url).href,ml=``+new URL(`yarrow-icon-CgaSHIG2.png`,import.meta.url).href;function hl(e,t,n=Date.now()){zr(e,n);let r=Me.find(e=>e.id===t),i=t===`campfire`?I(e,n):t===`hideTent`?!1:e.buildings[t];if(!r||i||e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`||!ki(e,t,n)||!ln(e,r.recipe))return!1;if(un(e,r.recipe),t===`campfire`)Ir(e,n),rn(e,t,1),N(e,`Cameron builds a campfire and brings it to flame.`,`craft`,n);else if(t===`hideTent`){let r=nn(e,t);e.buildings[t]=!0,N(e,`Cameron raises hide tent ${r}.`,`craft`,n),sn(e,n)}else e.buildings[t]=!0,rn(e,t,1),N(e,`Cameron builds a ${r.label}.`,`craft`,n);return gt(e,t,n),gl(e,n),!0}function J(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-e.inventory[t]);a>0&&(n[t]=a)}return P(n)}function gl(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function _l(e){let t=Ge(e)?.nutrition;return{hunger:Math.max(0,Math.floor(t?.hunger??0))}}function vl(e,t){return!yl(e,t)}function yl(e,t){if(_l(t).hunger<=0)return`Not edible`;if(!ln(e,{[t]:1}))return`Needs ${j(t)}`;if(Sl(t)&&!ln(e,{woodenSpoon:1}))return`Needs Wooden Spoon`;let n=e.characters.find(t=>t.id===e.selectedCharacterId);return n?n.needs.hunger>=n.needs.maxHunger?`Hunger full`:``:`No character`}function bl(e,t,n=Date.now()){if(!vl(e,t))return!1;let r=e.characters.find(t=>t.id===e.selectedCharacterId);if(!r)return!1;let i=_l(t);return un(e,{[t]:1}),r.needs.hunger=Math.min(r.needs.maxHunger,r.needs.hunger+i.hunger),N(e,`${r.name} eats ${j(t).toLowerCase()} and restores ${i.hunger} hunger.`,`gain`,n,`camp`),e.updatedAt=n,!0}function xl(e){return Ue(e)}function Sl(e){return Ge(e)?.cooking?.tags.includes(`stew`)??!1}var Cl=[{id:`smart`,label:`Smart default`},{id:`afterCompletion`,label:`After one completion`},{id:`whenInventoryFull`,label:`When pack is full`},{id:`whenResourceAtLeast`,label:`When stock reaches`},{id:`whenCannotStart`,label:`When blocked`},{id:`manual`,label:`Stay on this step`}],wl=[`herb`,`flower`,`berry`,`fruit`,`fungal`,`root`,`vegetable`,`staple`,`seasoning`],Tl=new Set([`bean`,`grain`,`nut`,`pod`,`succulent`,`thorn`,`tuber`]),El=[{id:`foraging`,label:`Forage`,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,`gatherFlaxFibers`,`gatherMeadowIngredients`,`gatherForestIngredients`,`gatherRiverIngredients`,`gatherMineIngredients`,`gatherDesertIngredients`,...u,...e,`gatherSand`,`gatherWater`]},{id:`fishing`,label:`Fishing`,actionIds:[`fishRiver`]},{id:`mining`,label:`Mining`,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]},{id:`hunting`,label:`Hunting`,actionIds:[`huntSmallAnimals`]},{id:`woodcutting`,label:`Woodcutting`,actionIds:[`chopTrees`]},{id:`crafting`,label:`Crafting`,actionIds:[`craftLowestTool`,`craftBasket`,`craftWoodenSpoon`,`craftFishingPole`,`craftWoodenBowl`,`craftStoneKnife`,`craftStoneAxe`,`craftStonePickAxe`,`craftStoneSpear`,`craftWoodenClub`,`craftWoodenTwoHandedClub`,`craftWoodenSword`,`craftWoodenTwoHandedSword`,`craftShortBow`,`craftWoodenTotem`]},{id:`smithing`,label:`Smithing`,actionIds:[...v]},{id:`alchemy`,label:`Alchemy`,actionIds:[...p]},{id:`textiles`,label:`Tailoring`,actionIds:[...T]},{id:`butchering`,label:`Butchering`,actionIds:[`butcherFish`,`butcherRabbit`,`butcherSquirrel`]},{id:`cooking`,label:`Cooking`,actionIds:[]},{id:`leatherworking`,label:`Leatherworking`,actionIds:[`tanHide`,`craftLeatherBackpack`]}],Dl=[{id:`gather`,label:`Gather`,filterIds:[`foraging`,`mining`,`fishing`,`hunting`,`woodcutting`]},{id:`processing`,label:`Processing`,filterIds:[`crafting`,`smithing`,`alchemy`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{id:`camp`,label:`Camp`,filterIds:[]}],Ol={crafting:`crafting`,smithing:`smithing`,alchemy:`alchemy`,textiles:`textiles`,foraging:`foraging`,mining:`mining`,fishing:`fishing`,woodcutting:`woodcutting`,hunting:`hunting`,butchering:`butchering`,cooking:`cooking`,leatherworking:`leatherworking`},kl={butchering:`butcherRabbit`},Al=El.flatMap(e=>{let t=Ol[e.id],n=kl[t]??e.actionIds?.[0];return n?[{skillId:t,actionId:n}]:[]}),jl={foraging:{shortLabel:`Fg`,accent:`#7ba867`,shade:`rgba(123, 168, 103, 0.38)`},mining:{shortLabel:`Mi`,accent:`#9ca3af`,shade:`rgba(104, 116, 139, 0.42)`},fishing:{shortLabel:`Fi`,accent:`#73a8a0`,shade:`rgba(72, 139, 168, 0.38)`},woodcutting:{shortLabel:`Wd`,accent:`#b88955`,shade:`rgba(124, 91, 59, 0.44)`},hunting:{shortLabel:`Hu`,accent:`#d6a451`,shade:`rgba(159, 89, 63, 0.36)`},crafting:{shortLabel:`Cr`,accent:`#c7b27a`,shade:`rgba(199, 178, 122, 0.34)`},smithing:{shortLabel:`Sm`,accent:`#d08b6a`,shade:`rgba(145, 76, 60, 0.42)`},alchemy:{shortLabel:`Al`,accent:`#9bc96c`,shade:`rgba(82, 123, 82, 0.4)`},textiles:{shortLabel:`Ta`,accent:`#caa0c8`,shade:`rgba(122, 85, 128, 0.36)`},butchering:{shortLabel:`Bu`,accent:`#c96458`,shade:`rgba(135, 55, 50, 0.42)`},cooking:{shortLabel:`Co`,accent:`#e0b05e`,shade:`rgba(156, 94, 45, 0.38)`},leatherworking:{shortLabel:`Le`,accent:`#a8784f`,shade:`rgba(109, 72, 48, 0.42)`},construction:{shortLabel:`Cn`,accent:`#b7a781`,shade:`rgba(112, 103, 79, 0.38)`},agility:{shortLabel:`Ag`,accent:`#8fc4b7`,shade:`rgba(81, 129, 120, 0.38)`}},Ml=[{label:`Gather`,skillIds:[`foraging`,`mining`,`fishing`,`woodcutting`,`hunting`]},{label:`Process`,skillIds:[`crafting`,`smithing`,`alchemy`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{label:`Combat`,skillIds:[]},{label:`Other`,skillIds:[`construction`,`agility`]}],Nl={copper:`Copper Bar`,bronze:`Bronze Bar`},Pl=[{id:`tool`,label:`Tool`},{id:`weapon`,label:`Weapon`},{id:`armor`,label:`Armor`}],Fl=[{id:`brewing`,label:`Brewing`,emptyLabel:`Brewing`},{id:`transmutation`,label:`Transmute`,emptyLabel:`Transmutation`},{id:`decomposition`,label:`Decomp`,emptyLabel:`Decomposition`}],Il={vessel:`Glassware`,potion:`Potions`},Ll={primitive:`Primitive`},Rl={primitive:`Wood, stone, fiber`},zl=[{id:`tool`,label:`Tools`},{id:`weapon`,label:`Weapons`}],Bl={craftLowestTool:{material:`primitive`,productCategory:`tool`},craftBasket:{material:`primitive`,productCategory:`tool`},craftWoodenSpoon:{material:`primitive`,productCategory:`tool`},craftFishingPole:{material:`primitive`,productCategory:`tool`},craftWoodenBowl:{material:`primitive`,productCategory:`tool`},craftStoneKnife:{material:`primitive`,productCategory:`tool`},craftStoneAxe:{material:`primitive`,productCategory:`tool`},craftStonePickAxe:{material:`primitive`,productCategory:`tool`},craftStoneSpear:{material:`primitive`,productCategory:`weapon`},craftWoodenClub:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedClub:{material:`primitive`,productCategory:`weapon`},craftWoodenSword:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedSword:{material:`primitive`,productCategory:`weapon`},craftShortBow:{material:`primitive`,productCategory:`weapon`},craftWoodenTotem:{material:`primitive`,productCategory:`weapon`}},Y=[{id:`meadow`,label:`Meadow`,iconUrl:Tc,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,...f(`meadow`)]},{id:`river`,label:`River`,iconUrl:Ic,actionIds:[`gatherStones`,`gatherFlaxFibers`,`gatherWater`,...f(`river`)]},{id:`forest`,label:`Forest`,iconUrl:mc,actionIds:[...f(`forest`)]},{id:`mine`,label:`Mine`,iconUrl:Ec,actionIds:[...f(`mine`)]},{id:`desert`,label:`Desert`,iconUrl:hc,actionIds:[`gatherSand`,...f(`desert`)]}],Vl={label:`Camp`,iconUrl:tc},Hl=24,Ul=[`fishingPole`,`stoneKnife`,`copperKnife`,`bronzeKnife`,`stoneSpear`,`woodenClub`,`woodenTwoHandedClub`,`woodenSword`,`woodenTwoHandedSword`,`shortBow`,`woodenTotem`,`stoneAxe`,`copperHatchet`,`bronzeHatchet`,`stonePickAxe`,`copperPickaxe`,`bronzePickaxe`,`basket`,`leatherBackpack`,null,null,null,null,null],Wl=[{label:`Armor`,slots:[`Head`,`Face`,`Neck`,`Shoulders`,`Chest`,`Backpack`,`Cape`,`Arms`,`Hands`,`Waist`,`Legs`,`Feet`]},{label:`Accessories`,slots:[`Ring Slot 1`,`Ring Slot 2`,`Toe Ring 1`,`Toe Ring 2`,`Bracelet 1`,`Bracelet 2`,`Earring 1`,`Earring 2`]},{label:`Held Gear`,slots:[`Main Hand`,`Off Hand`,`Quiver`,`Ammo Belt`]}],Gl={basket:ec,fishingPole:pc,leatherBackpack:Sc,stoneKnife:Uc,stoneAxe:Hc,stonePickAxe:Wc,stoneSpear:Gc,woodenClub:il,woodenTwoHandedClub:cl,woodenSword:ol,woodenTwoHandedSword:ll,shortBow:Yc,woodenTotem:sl},Kl={basket:`Basket`,fishingPole:`Pole`,leatherBackpack:`Backpack`,stoneKnife:`Knife`,stoneAxe:`Hatchet`,stonePickAxe:`Pick`,stoneSpear:`Spear`,woodenClub:`Club`,woodenTwoHandedClub:`2H Club`,woodenSword:`Sword`,woodenTwoHandedSword:`2H Sword`,shortBow:`Bow`,woodenTotem:`Totem`},ql={aloeLeaves:Zs,blueberries:vc,bone:Qs,brookStickleback:$s,brookSticklebackFilet:fc,coal:oc,copper:sc,crystalBlooms:cc,minnowFilet:fc,mudskipperFilet:fc,pebblePerchFilet:fc,stoneLoachFilet:fc,flaxFiber:q,chamomile:ic,clover:ac,dandelionGreens:uc,dirtyBowl:fl,elderflowers:yc,fennel:q,fireBlossom:dc,hearthcap:bc,hide:xc,lavender:Cc,marshIris:wc,meadowStew:Ac,minnow:Oc,mint:Dc,mudskipper:kc,palecapFlowers:jc,pebblePerch:Mc,plantainLeaf:Nc,rabbit:Pc,rabbitMeat:Fc,rabbitStew:Pc,roseHips:Lc,rootStew:Ac,sorrel:Rc,squirrelHerbStew:zc,squirrel:zc,squirrelMeat:Bc,strawberries:Xc,sunbloomPetals:Zc,stick:Vc,stone:Kc,stoneLoach:qc,tin:Qc,trilliumBlossoms:tl,water:Ic,waterLilies:nl,wildCarrot:q,wildGarlic:ul,wildGarlicRabbitStew:Pc,wildOnion:dl,woodViolets:pl,yarrow:ml,woodenBowl:rl,woodenSpoon:al,wood:fl},Jl={basket:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+5 lb carry capacity`},{label:`Capacity`,value:`15 lb equipped`}],leatherBackpack:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+15 lb carry capacity`},{label:`Capacity`,value:`25 lb equipped`}],fishingPole:[{label:`Slot`,value:`Fishing tool`},{label:`Effect`,value:`Fishing River unlocked`},{label:`Use`,value:`River fishing`}],stoneKnife:[{label:`Slot`,value:`Butchering weapon`},{label:`Unlocks`,value:`Hide and bone recovery`},{label:`Use`,value:`Butchering and combat`}],stoneAxe:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Chop Trees unlocked`},{label:`Wood yield`,value:`2-4`}],stonePickAxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Future mining work`},{label:`Use`,value:`Breaking stone`}],stoneSpear:[{label:`Slot`,value:`Two-handed weapon`},{label:`Effect`,value:`Hunt Small Animals unlocked`},{label:`Targets`,value:`Rabbit, Squirrel`}],copperPickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Mining upgrade`},{label:`Durability`,value:`2x stone`}],copperHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Woodcutting upgrade`},{label:`Durability`,value:`Better than stone`}],copperKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Cleaner butchering`},{label:`Durability`,value:`Better than stone`}],bronzePickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Best early mining`},{label:`Durability`,value:`Better than copper`}],bronzeHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Best early chopping`},{label:`Durability`,value:`Better than copper`}],bronzeKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Best early butchering`},{label:`Durability`,value:`Better than copper`}]};function Yl(e){let t=O.find(t=>t.id===e),n=Jl[e]??[];return t?.weapon?[{label:`Slot`,value:`${t.weapon.hands}H ${Xl(t.weapon.range)} weapon`},{label:`Power`,value:Ql(t.weapon.damage)},{label:`Speed`,value:`${Ql(t.weapon.speed)}x`},{label:`Tier`,value:Zl(t.tier)},...n.filter(e=>e.label!==`Slot`)]:n}function Xl(e){switch(e){case`ranged`:return`ranged`;case`focus`:return`focus`;case`melee`:return`melee`}}function Zl(e){return e[0].toUpperCase()+e.slice(1)}function Ql(e){return Number.isInteger(e)?`${e}`:e.toFixed(1)}function $l(e,t){let n=`gather`,r=`foraging`,i=`meadow`,a=`inventory`,o=`primitive`,s=`copper`,c=`brewing`,l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=null,_=null,v=null,y=null,b=0,ee=null,x=null;return e.addEventListener(`change`,e=>{let n=e.target,r=ee;if(!(n instanceof HTMLInputElement||n instanceof HTMLSelectElement)||!r)return;let i=n.dataset.loopId,a=n.dataset.loopField;if(!i||!a)return;let o=t.getNow(),s=Zd(n.dataset.id,b),c=!1;a===`name`&&(c=ha(r,i,n.value,o)),a===`step-location`&&gf(n.value)&&(c=va(r,i,s,n.value,o)),a===`advance-mode`&&pf(n.value)&&(c=ga(r,i,s,ef(r,i,s,n.value),o)),a===`advance-resource`&&hf(n.value)&&(c=ga(r,i,s,{resourceId:n.value},o)),a===`advance-scope`&&mf(n.value)&&(c=ga(r,i,s,{scope:n.value},o)),a===`advance-amount`&&(c=ga(r,i,s,{amount:Number(n.value)},o)),c&&(y=i,b=s,t.persist(),t.requestRender())}),e.addEventListener(`click`,e=>{let x=e.target,S=x.closest(`[data-command]`);if(!S||S.disabled||S.dataset.disabled===`true`){(_||v)&&!x.closest(`.loop-location-picker`)&&!x.closest(`.loop-skill-picker`)&&(_=null,v=null,t.requestRender());return}let C=S.dataset.command,w=S.dataset.id,T=ee;if(!T)return;let te=C===`toggle-loop-location-menu`||C===`set-loop-step-location`,ne=C===`toggle-loop-skill-menu`||C===`set-loop-step-skill`;if(te||(_=null),ne||(v=null),C===`set-test-reward-multiplier`&&(w===`10`||w===`100`)){t.setTestRewardMultiplier(Number(w)),t.requestRender();return}if(C===`set-action-category`&&Kd(w)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,n=w;let e=Wd(n);e.length&&!e.some(e=>e.id===r)&&(r=e[0]?.id??r),t.requestRender();return}if(C===`set-action-filter`&&Xd(w)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,r=w,n=Gd(w)??n,t.requestRender();return}if(C===`select-smithing-material`&&qd(w)){s=w,t.requestRender();return}if(C===`select-alchemy-panel`&&Jd(w)){c=w,t.requestRender();return}if(C===`select-crafting-material`&&Yd(w)){o=w,t.requestRender();return}if(C===`set-location`&&gf(w)){i=w,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(C===`set-character-detail-tab`&&_f(w)){a=w,l=!1,u=!1,d=!1,f=!0,p=!1,m=!1,h=!1,t.requestRender();return}if(C===`toggle-camp-log`){l=!l,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(C===`open-party`){l=!1,u=!0,d=!1,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(C===`open-character-panel`){l=!1,u=!1,d=!0,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(C===`open-character-details`){l=!1,u=!1,d=!1,f=!0,p=!1,m=!1,h=!1,t.requestRender();return}if(C===`open-character-skill-panel`&&w===`foraging`){n=`gather`,r=`foraging`,l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(C===`open-settings`){l=!1,u=!1,d=!1,f=!1,p=!1,h=!1,m=!0,t.requestRender();return}if(C===`open-action-loops`){l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!0,t.requestRender();return}if(C===`open-combat`){l=!1,u=!1,d=!1,f=!1,p=!0,m=!1,h=!1,t.requestRender();return}if(C===`dispatch-combat`){is(T,S.dataset.characterId??T.selectedCharacterId,`ruins`,t.getNow()),u=!0,p=!1,l=!1,d=!1,f=!1,m=!1,h=!1,t.persist(),t.requestRender();return}if(C===`recall-combat`){as(T,S.dataset.characterId??T.selectedCharacterId,t.getNow()),u=!0,p=!1,l=!1,d=!1,f=!1,m=!1,h=!1,t.persist(),t.requestRender();return}if(C===`select-character`&&w&&T.characters.some(e=>e.id===w)){T.selectedCharacterId=w,y=$d(T)??y,u=!1,d=!0,f=!1,t.persist(),t.requestRender();return}if(C===`select-loop-step`){y=Qd(S,T,y),b=Zd(w,b),g=null,t.requestRender();return}if(C===`toggle-loop-location-menu`){let e=Qd(S,T,y);if(!e)return;let n=Zd(w,b);y=e,b=n,g=null,_=_?.loopId===e&&_.index===n?null:{loopId:e,index:n},v=null,t.requestRender();return}if(C===`set-loop-step-location`){let e=Qd(S,T,y),n=S.dataset.locationId;if(!e||!gf(n))return;let r=Zd(w,b);y=e,b=r,g=null,_=null,v=null,va(T,e,r,n,t.getNow())&&t.persist(),t.requestRender();return}if(C===`toggle-loop-skill-menu`){let e=Qd(S,T,y);if(!e)return;let n=Zd(w,b);y=e,b=n,g=null,_=null,v=v?.loopId===e&&v.index===n?null:{loopId:e,index:n},t.requestRender();return}if(C===`set-loop-step-skill`){let e=Qd(S,T,y),n=S.dataset.skillId,r=Al.find(e=>e.skillId===n);if(!e||!r)return;let i=Zd(w,b),a=H(T,e),o=a?Math.min(a.actionIds.length-1,Math.max(0,i)):0,s=a?.actionIds[o],c=s?lf(s,a?.locationIds[o]??null):void 0;y=e,b=o,g=null,_=null,v=null,_a(T,e,o,r.actionId,{locationId:c},t.getNow())&&t.persist(),t.requestRender();return}if(C===`insert-loop-after`){let e=Qd(S,T,y);if(!e)return;y=e,b=Zd(w,b),g={loopId:e,afterIndex:b},h=!1,t.requestRender();return}if(C===`remove-loop-step`){let e=Qd(S,T,y);if(!e)return;y=e,b=da(T,e,Zd(w,b),t.getNow()),g=null,t.persist(),t.requestRender();return}if(C===`create-loop`){y=sa(T,t.getNow()).id,b=0,g=null,t.persist(),t.requestRender();return}if(C===`delete-loop`){let e=Qd(S,T,y);if(!e)return;y=ca(T,e,t.getNow()),b=0,g=null,t.persist(),t.requestRender();return}if(C===`assign-loop`){let e=Qd(S,T,y),n=S.dataset.characterId??T.selectedCharacterId;if(!e)return;y=e,so(T,e,n,t.getNow()),t.persist(),t.requestRender();return}if(C===`start-action`&&w){let e=w,n=t.getNow();if(g){ua(T,g.loopId,g.afterIndex,e,{locationId:Df(e,i)},n)&&(y=g.loopId,b=g.afterIndex+1,g=null,h=!0),t.persist(),t.requestRender();return}g=null,uo(T,e,n,{locationId:Df(e,i)})}if(C===`stop-action`&&(g=null,fo(T,t.getNow())),C===`deposit-carried`&&(z(T)||po(T,t.getNow())),C===`build-structure`&&w&&hl(T,w,t.getNow()),C===`queue-cooking`&&w&&Ms(T,w,t.getNow()),C===`eat-food`&&w&&bl(T,w,t.getNow()),C===`prestige-skill`&&ct(w)){mt(T,w,t.getNow()),t.persist(),t.requestRender();return}if(C===`reset`){t.reset();return}t.persist(),t.requestRender()}),e.addEventListener(`pointerover`,t=>{let n=Fp(t.target,e);n&&(x=n,Ip(e,n))}),e.addEventListener(`pointerout`,t=>{if(!x)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!x.contains(n))&&(x=null,Lp(e))}),e.addEventListener(`focusin`,t=>{let n=Fp(t.target,e);n&&(x=n,Ip(e,n))}),e.addEventListener(`focusout`,t=>{if(!x)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!x.contains(n))&&(x=null,Lp(e))}),e.addEventListener(`scroll`,()=>{x?.isConnected&&Rp(e,x)},!0),window.addEventListener(`resize`,()=>{x?.isConnected&&Rp(e,x)}),(S,C=t.getNow())=>{ee=S;let w=H(S,y??$d(S));if(y=w?.id??null,b=w?Math.min(w.actionIds.length-1,Math.max(0,b)):0,g&&!H(S,g.loopId)&&(g=null),_){let e=H(S,_.loopId);(!e||_.index<0||_.index>=e.actionIds.length)&&(_=null)}if(v){let e=H(S,v.loopId);(!e||v.index<0||v.index>=e.actionIds.length)&&(v=null)}let T=Bp(e);e.innerHTML=eu(S,r,n,a,i,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,C,t.getTestRewardMultiplier()),x=null,Vp(e,T)}}function eu(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,ee){return`
    <div class="game-shell" data-editor-id="game-shell" data-editor-label="Game shell" data-editor-files="src/ui/render.ts, src/style.css">
      ${tu(e,n,c,l,u,d,f,p,m,ee)}
      <main class="main-panel" data-editor-id="main-panel" data-editor-label="Main game panel" data-editor-files="src/ui/render.ts, src/style.css">
        ${jd(e,b)}
        ${d?np(e,r):m?fp(e,v,y,h,g,_):p?nu():u?ru(e):f?hu(e,b):l?iu(e):c?su(e):Su(e,n,t,i,a,o,s,h,b)}
      </main>
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `}function tu(e,t,n,r,i,a,o,s,c,l){let u=X(e),d=Vd(e,u),f=!n&&!r&&!i&&!a&&!o&&!s&&!c;return`
    <aside class="character-sidebar panel" data-editor-id="character-sidebar" data-editor-label="Character sidebar" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${ou(l)}
        </div>
      </div>
      <button
        class="character-card selected ${a?`active`:``}"
        type="button"
        data-command="open-character-details"
        aria-expanded="${a}"
      >
        <span class="portrait" aria-hidden="true">${Du(u.name)}</span>
        <span>
          <strong>${u.name}</strong>
          <small>${d}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${Dl.filter(e=>e.id!==`gather`&&e.id!==`processing`).map(e=>mu(e,t,f)).join(``)}
              ${lu(i)}
              ${du(r)}
              ${uu(o)}
            </div>
          </nav>
          <div class="sidebar-footer">
            ${cu(c)}
            ${ap(n)}
            <button class="ghost-button ${s?`active`:``}" type="button" data-command="open-settings" aria-pressed="${s}">Settings</button>
          </div>
    </aside>
  `}function nu(){return`
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
  `}function ru(e){return`
    <div class="work-area single-panel">
      <section class="panel character-panel" aria-label="Characters" data-editor-id="character-panel" data-editor-label="Character roster panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Characters</span>
        </div>
        <div class="character-roster-grid">
          ${e.characters.map(t=>au(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function iu(e){let t=e.characters.filter(t=>ss(e,t.id)).length,n=e.characters.filter(t=>z(e,t.id)).length,r=e.characters.filter(t=>!ss(e,t.id)&&!z(e,t.id)).length;return`
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
          ${e.characters.map(t=>fu(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function au(e,t){let n=e.selectedCharacterId===t.id,r=!!(z(e,t.id)||cs(e,t.id)),i=Uo(e,t.id);return`
    <button
      class="character-select-card ${n?`selected`:``} ${r?`working`:``}"
      type="button"
      data-command="select-character"
      data-id="${t.id}"
      aria-pressed="${n}"
    >
      <span class="portrait" aria-hidden="true">${Du(t.name)}</span>
      <span class="character-select-copy">
        <strong>${t.name}</strong>
        <small>${t.epithet}</small>
        <small>${i.classLabel} - ${i.weaponLabel}</small>
        <em>${Vd(e,t)}</em>
      </span>
      <span class="character-select-badge">${n?`Selected`:`Select`}</span>
    </button>
  `}function ou(e){return`
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
  `}function su(e){return`
    <div class="work-area single-panel">
      ${Hp(e,`camp`,`Camp Log`,`main-log-panel panel`)}
    </div>
  `}function cu(e){return`
    <button
      class="action-loops-toggle ${e?`active`:``}"
      type="button"
      data-command="open-action-loops"
      aria-pressed="${e}"
    >
      Action Loops
    </button>
  `}function lu(e){return`
    <button
      class="category-button characters-button ${e?`active`:``}"
      type="button"
      data-command="open-character-panel"
      aria-pressed="${e}"
    >
      <span>Characters</span>
    </button>
  `}function uu(e){return`
    <button
      class="category-button combat-button ${e?`active`:``}"
      type="button"
      data-command="open-combat"
      aria-pressed="${e}"
    >
      <span>Ruins</span>
    </button>
  `}function du(e){return`
    <button
      class="category-button party-button ${e?`active`:``}"
      type="button"
      data-command="open-party"
      aria-pressed="${e}"
    >
      <span>Party</span>
    </button>
  `}function fu(e,t){let n=cs(e,t.id),r=!!n,i=z(e,t.id),a=Uo(e,t.id),o=n??t.combat,s=n?.maxHp??a.maxHp,c=n?.maxMana??a.maxMana,l=Math.min(s,o.hp),u=Math.min(c,o.mana),d=r?`In Ruins`:i?`Working`:`Ready`,f=r?`recall-combat`:`dispatch-combat`,p=!r&&!!i;return`
    <article class="party-member ${r?`dispatched`:``}">
      <div class="party-member-topline">
        <span class="portrait small" aria-hidden="true">${Du(t.name)}</span>
        <span>
          <strong>${t.name}</strong>
          <small>${a.classLabel} - ${d}</small>
        </span>
      </div>
      ${pu(`HP`,l,s,`hp`)}
      ${pu(`Mana`,u,c,`mana`)}
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
  `}function pu(e,t,n,r){let i=Math.max(1,n),a=Math.max(0,Math.min(i,t));return`
    <div class="vitals-row ${r}">
      <span>${e}</span>
      <div class="vitals-track" aria-hidden="true">
        <span style="transform: scaleX(${(a/i).toFixed(4)})"></span>
      </div>
      <strong>${Math.round(a)}/${Math.round(i)}</strong>
    </div>
  `}function mu(e,t,n){let r=n&&e.id===t;return`
    <button
      class="category-button ${r?`active`:``}"
      type="button"
      data-command="set-action-category"
      data-id="${e.id}"
      aria-pressed="${r}"
    >
      <span>${e.label}</span>
    </button>
  `}function hu(e,t){let n=ye(`ruins`),r=e.combat.encounter,i=us(r).length,a=e.characters.filter(t=>ss(e,t.id)).length;return`
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
        ${gu(e,t)}
      </section>
      <aside class="panel combat-side-panel" aria-label="Combat status" data-editor-id="combat-side-panel" data-editor-label="Combat side panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Status</span>
        </div>
        ${vu(e,t)}
        ${xu(e)}
      </aside>
    </div>
  `}function gu(e,t){let n=ye(`ruins`),r=e.combat.encounter,i=[];for(let e=0;e<n.gridHeight;e+=1)for(let a=0;a<n.gridWidth;a+=1){let n=r?.units.find(t=>t.x===a&&t.y===e&&t.hp>0)??null;i.push(_u(n,a,e,t))}return`
    <div class="combat-field" style="--combat-cols: ${n.gridWidth}; --combat-rows: ${n.gridHeight};" aria-label="Combat grid">
      ${i.join(``)}
    </div>
    <div class="combat-field-message">${r?.message??`Open Party to dispatch someone.`}</div>
  `}function _u(e,t,n,r){if(!e)return`<div class="combat-cell" data-grid-x="${t}" data-grid-y="${n}"></div>`;let i=e.kind===`enemy`&&e.enemyId?ve(e.enemyId).glyph:Du(e.name),a=Math.max(0,e.nextActAt-r);return`
    <div class="combat-cell occupied ${e.kind}" data-grid-x="${t}" data-grid-y="${n}" title="${e.name}">
      <span class="combat-unit-glyph">${i}</span>
      <span class="combat-unit-name">${e.name}</span>
      <span class="combat-unit-timer">${W(a)}</span>
      ${pu(`HP`,e.hp,e.maxHp,`hp`)}
    </div>
  `}function vu(e,t){let n=e.combat.encounter;return n?`
    <div class="combat-roster-list">
      ${n.units.map(e=>yu(e,t)).join(``)}
    </div>
  `:`<div class="empty-line">No one is fighting.</div>`}function yu(e,t){let n=e.classId?bu(e.classId):`Enemy`,r=e.hp>0?`Acts in ${W(e.nextActAt-t)}`:`Down`;return`
    <article class="combat-roster-unit ${e.kind}">
      <div>
        <strong>${e.name}</strong>
        <small>${n} - ${r}</small>
      </div>
      ${pu(`HP`,e.hp,e.maxHp,`hp`)}
      ${e.maxMana>0?pu(`Mana`,e.mana,e.maxMana,`mana`):``}
    </article>
  `}function bu(e){return ue.find(t=>t.id===e)?.label??`Fighter`}function xu(e){let t=e.combat.log.slice(0,8);return`
    <section class="combat-event-log" aria-label="Combat log">
      <h3>Combat Log</h3>
      <div class="combat-log-list">
        ${t.length?t.map(e=>`<div class="combat-log-entry ${e.tone}">${e.text}</div>`).join(``):`<div class="empty-line">No combat events yet.</div>`}
      </div>
    </section>
  `}function Su(e,t,n,r,i,a,o,s,c){return t===`camp`?`
      <div class="work-area camp-work-area">
        ${Cu(e)}
        ${Hf(e,c)}
      </div>
    `:`
    <div class="work-area">
      ${ku(Ud(n))}
      ${Ou(e,n,r,i,a,o,s,c)}
    </div>
  `}function Cu(e){let t=X(e);return`
    <section class="panel camp-stats-panel" aria-label="Camp stats" data-editor-id="camp-stats-panel" data-editor-label="Camp stats panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Stats</span>
      </div>
      <div class="camp-stat-list">
        <div class="camp-stat-row">
          <span>Population</span>
          <strong>${an(e)}/${on(e)}</strong>
        </div>
        <div class="camp-stat-row">
          <span>${t.name} Hunger</span>
          <strong>${Math.round(t.needs.hunger)}/${Math.round(t.needs.maxHunger)}</strong>
        </div>
      </div>
    </section>
  `}function wu(e){return e.targetLocationId?e.targetLocationId:e.phase===`travelingBack`?`camp`:e.locationId??`camp`}function Tu(e,t){return e.originLocationId?e.originLocationId:e.phase===`travelingBack`?e.locationId??t:t}function Eu(e){return e.replace(/[^a-zA-Z0-9_-]/g,`-`)}function Du(e){return(e.trim().split(/\s+/).map(e=>e[0]).join(``)||`?`).slice(0,2).toUpperCase()}function Ou(e,t,n,r,i,a,o,s){return`
    <div class="action-stack">
      ${Sf(Ud(t),n)}
      ${Au(e,t,n,r,i,a,o,s)}
    </div>
  `}function ku(e){let t=e.id===`foraging`?gc:null;return`
    <section class="panel focused-skill-panel" aria-label="${e.label} panel" data-editor-id="focused-action-panel-${e.id}" data-editor-label="${e.label} focused action panel" data-editor-files="src/ui/render.ts, src/style.css">
      ${t?`<div class="focused-skill-banner" aria-label="${e.label}">
              <img class="focused-skill-banner-image" src="${t}" alt="" aria-hidden="true" />
            </div>`:`<div class="focused-skill-title">${e.label}</div>`}
    </section>
  `}function Au(e,t,n,r,i,a,o,s){let c=Ud(t),l=c.id===`foraging`?Ef(Tf(c.id,n)):(c.id,c.actionIds??[]);return c.id===`crafting`?zu(e,l,r,o,s):c.id===`smithing`?ed(e,l,i,o,s):c.id===`alchemy`?ud(e,l,a,o,s):c.id===`textiles`?yd(e,l,o,s):c.id===`cooking`?Cd(e,s):c.id===`foraging`?ju(e,Tf(c.id,n),o):`
      <section class="action-panel" data-editor-id="action-panel-${t}" data-editor-label="${c.label} action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="action-grid">
          ${l.map(t=>Nf(e,t,o)).join(``)}
        </div>
    </section>
  `}function ju(e,n,r){let i=Ef(n).filter(e=>!t(e)),o=a(n);return`
      <section class="action-panel" data-editor-id="action-panel-foraging" data-editor-label="Forage action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="smithing-craft-columns crafting-craft-columns forage-category-columns">
          ${i.length?Nu(e,i,r):``}
          ${wl.map(t=>Mu(e,t,o.filter(e=>Fu(e)===t),r)).join(``)}
        </div>
      </section>
  `}function Mu(e,t,n,r){let i=Iu(t);return Pu(`${i} forage`,i,n.map(t=>Lu(e,t.actionId,r)),`No ${i.toLowerCase()} here.`)}function Nu(e,t,n){return Pu(`Forage resources`,`Resources`,t.map(t=>Ru(e,t,n)),`No resources here.`)}function Pu(e,t,n,r){let i=n.filter(Boolean);return`
    <section class="smithing-craft-column crafting-category-card forage-category-card" aria-label="${e}">
      <div class="smithing-craft-column-heading crafting-category-heading">
        <span>${t}</span>
        <small>${i.length}</small>
      </div>
      ${i.length?`<div class="smithing-recipe-grid crafting-recipe-grid crafting-category-recipes forage-item-grid">${i.join(``)}</div>`:`<div class="smithing-empty-column">${r}</div>`}
    </section>
  `}function Fu(e){return e.tags.includes(`fungus`)?`fungal`:(e.category===`vegetable`||e.category===`root`)&&e.tags.some(e=>Tl.has(e))?`staple`:e.category}function Iu(e){return e===`fungal`?`Fungal`:e===`staple`?`Staples`:e===`vegetable`?`Vegetables`:n(e)}function Lu(e,n,r){let i=D(n),a=t(n);if(!i||!a)return``;let o=L(e,n),s=G(n),c=K(e,n),l=r?H(e,r.loopId):null,u=z(e),d=!!(r&&l),f=!!(d&&l&&r&&la(l,r.afterIndex,n)),p=u?Z(u)===n:!1,m=d?!f:!c||p,h=J(e,s),g=c?``:o?h:Di(e,n),_=d?f?`Set as action loop step`:`Not valid for this loop`:p?`Running`:!c&&g?g:`Ready`,v=d?`Set`:p?`Running`:c?`Start`:`Locked`,y=Vf(n,i.durationMs),b=a.minAmount===a.maxAmount?`${a.minAmount}`:`${a.minAmount}-${a.maxAmount}`;return`
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
      aria-label="${v} ${a.resourceLabel}. Finds ${b}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${Q(n)}</span>
      ${Pf(i.label,y,_)}
    </button>
  `}function Ru(e,t,n){let r=D(t);if(!r)return``;let i=L(e,t),a=G(t),o=K(e,t),s=n?H(e,n.loopId):null,c=z(e),l=!!(n&&s),u=!!(l&&s&&n&&la(s,n.afterIndex,t)),d=c?Z(c)===t:!1,f=l?!u:!o||d,p=J(e,a),m=o?``:i?p:Di(e,t),h=l?u?`Set as action loop step`:`Not valid for this loop`:d?`Running`:!o&&m?m:`Ready`,g=l?`Set`:d?`Running`:o?`Start`:`Locked`,_=Vf(t,r.durationMs);return`
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
      ${Pf(r.label,_,h)}
    </button>
  `}function zu(e,t,n,r,i){let a=`craftLowestTool`,o=t.filter(Hu),s=Bu(n,o);return`
    <section class="action-panel crafting-action-panel" data-editor-id="action-panel-crafting" data-editor-label="Crafting action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card crafting-panel-card">
        <div class="smithing-workbench crafting-workbench">
          <div class="smithing-furnace-column crafting-workbench-column">
            ${Uu(o,s)}
            ${Wu(e,i)}
            ${t.includes(a)?Mf(e,a,r):``}
          </div>
          ${Gu(o,s)}
        </div>
        ${Ju(e,o,s,r)}
      </div>
    </section>
  `}function Bu(e,t){let n=Vu(t);return n.includes(e)?e:n[0]??e}function Vu(e){let t=e.map(e=>Bl[e]?.material).filter(e=>!!e);return Array.from(new Set(t))}function Hu(e){return!!Bl[e]}function Uu(e,t){let n=e.filter(e=>e!==`craftLowestTool`).length;return`
    <div class="smithing-status-grid crafting-status-grid">
      <div class="smithing-status-item">
        <span>Work Bench</span>
        <strong>Hand Craft</strong>
      </div>
      <div class="smithing-status-item">
        <span>Materials</span>
        <strong>${Ll[t]}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Recipes</span>
        <strong>${n}</strong>
      </div>
    </div>
  `}function Wu(e,t){let n=z(e),r=n?Z(n):null;if(!n||!r||!Hu(r))return`
      <div class="smithing-active-row idle crafting-active-row">
        <span>No active craft</span>
        <strong>Bench idle</strong>
      </div>
    `;let i=D(r),a=Oa(ho(e,t),0,1);return`
    <div class="smithing-active-row crafting-active-row">
      <span>Active craft</span>
      <strong>${i?Qu(i.label):`Recipe`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${W(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Gu(e,t){return`
    <div class="smithing-smelt-column crafting-material-column">
      <div class="section-heading">
        <span>Materials Type</span>
      </div>
      <div class="smithing-smelt-grid crafting-material-grid">
        ${Vu(e).map(n=>Ku(e,n,t)).join(``)}
      </div>
    </div>
  `}function Ku(e,t,n){let r=t===n,i=qu(e,t);return`
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
          <strong>${Ll[t]}</strong>
          <small>${r?`Selected type`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${i} recipes</b>
          <small>${Rl[t]}</small>
        </span>
      </button>
    </article>
  `}function qu(e,t){return e.filter(e=>e!==`craftLowestTool`&&Bl[e]?.material===t).length}function Ju(e,t,n,r){let i=t.filter(e=>e!==`craftLowestTool`&&Bl[e]?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section crafting-recipe-section">
      <div class="smithing-craft-columns crafting-craft-columns">
        ${zl.map(t=>Yu(e,i,n,t,r)).join(``)}
      </div>
    </div>
  `}function Yu(e,t,n,r,i){let a=t.filter(e=>Bl[e]?.productCategory===r.id);return`
    <section class="smithing-craft-column crafting-craft-column crafting-category-card" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading crafting-category-heading">
        <span>${r.label}</span>
        <small>${a.length}</small>
      </div>
      ${a.length?`<div class="smithing-recipe-grid crafting-recipe-grid crafting-category-recipes">${a.map(t=>Zu(e,t,i)).join(``)}</div>`:`<div class="smithing-empty-column">No ${Ll[n].toLowerCase()} ${r.label.toLowerCase()} yet.</div>`}
    </section>
  `}function Xu(e,t,n){let r=D(t);if(!r||!Hu(t))return null;let i=L(e,t),a=G(t),o=K(e,t),s=n?H(e,n.loopId):null,c=z(e),l=!!(n&&s),u=!!(l&&s&&n&&la(s,n.afterIndex,t)),d=c?Z(c)===t:!1,f=l?!u:!o||d,p=J(e,a),m=o?``:i?p:Di(e,t);return{definition:r,cost:a,unlocked:i,canAssignFollowUp:u,active:d,disabled:f,statusText:l?u?`Set as action loop step`:`Not valid for this loop`:d?`Running`:!o&&m?m:`Ready`,buttonLabel:l?`Set`:d?`Running`:o?`Start`:`Locked`,tooltipRows:Vf(t,r.durationMs)}}function Zu(e,t,n){let r=Xu(e,t,n);if(!r)return``;let{definition:i,cost:a,unlocked:o,canAssignFollowUp:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=r,p=Qu(i.label),m=P(a);return`
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
      ${Pf(p,f,u)}
    </button>
  `}function Qu(e){return e===`Craft Lowest Tool`?`Lowest Stock Tool`:e.replace(/^Craft\s+/,``)}function $u(e){let t=Rf(e);if(t)return`1 ${t.label}`;switch(e){case`craftLowestTool`:return`Lowest Stock`;case`craftWoodenSpoon`:return`1 Wooden Spoon`;case`craftWoodenBowl`:return`1 Wooden Bowl`;default:return D(e)?.label.replace(/^Craft /,`1 `)??`1 item`}}function ed(e,t,n,r,i){let a=t.filter(e=>b.some(t=>t===e)),o=t.filter(e=>ee.some(t=>t===e)),s=Hr(e),c=td(n,a);return`
    <section class="action-panel smithing-action-panel" data-editor-id="action-panel-smithing" data-editor-label="Smithing action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card">
        <div class="smithing-workbench">
          <div class="smithing-furnace-column">
            ${nd(s)}
            ${rd(e,i)}
          </div>
          ${id(e,a,c,r)}
        </div>
        ${od(e,o,c,r)}
      </div>
    </section>
  `}function td(e,t){let n=t.map(e=>x(e)?.material).filter(e=>!!e);return n.includes(e)?e:n[0]??e}function nd(e){return`
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
  `}function rd(e,t){let n=z(e),r=n?Z(n):null;if(!n||!r||!Ur(r))return`
      <div class="smithing-active-row idle">
        <span>No active smelt</span>
        <strong>Furnace idle</strong>
      </div>
    `;let i=x(r),a=Oa(ho(e,t),0,1);return`
    <div class="smithing-active-row">
      <span>Active smelt</span>
      <strong>${i?.label??`Smelting`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${W(n.endsAt-t)}</em>
      </div>
    </div>
  `}function id(e,t,n,r){return`
    <div class="smithing-smelt-column">
      <div class="section-heading">
        <span>Smelting</span>
      </div>
      <div class="smithing-smelt-grid">
        ${t.map(t=>ad(e,t,n,r)).join(``)}
      </div>
    </div>
  `}function ad(e,t,n,r){let i=cd(e,t,r);if(!i)return``;let{definition:a,recipe:o,cost:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=i,p=o.material===n,m=d===`Set`?`Set Smelt`:c?`Smelting`:d===`Start`?`Smelt`:d;return`
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
          <strong>${Nl[o.material]}</strong>
          <small>${p?`Selected material`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${Kr(o.actionId)}</b>
          <small>${P(s)}</small>
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
        ${Pf(a.label,f,u)}
      </button>
    </article>
  `}function od(e,t,n,r){let i=t.filter(e=>x(e)?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section">
      <div class="section-heading">
        <span>${Nl[n]} Smithing</span>
        <small>Filtered by selected bar</small>
      </div>
      <div class="smithing-craft-columns">
        ${Pl.map(t=>sd(e,i,n,t,r)).join(``)}
      </div>
    </div>
  `}function sd(e,t,n,r,i){let a=t.filter(e=>(x(e)?.productCategory??`tool`)===r.id);return`
    <section class="smithing-craft-column" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading">
        <span>${r.label}</span>
        <small>${a.length}</small>
      </div>
      ${a.length?`<div class="smithing-recipe-grid">${a.map(t=>ld(e,t,i)).join(``)}</div>`:`<div class="smithing-empty-column">No ${Nl[n].toLowerCase()} ${r.label.toLowerCase()} recipes yet.</div>`}
    </section>
  `}function cd(e,t,n){let r=D(t),i=x(t);if(!r||!i)return null;let a=L(e,t),o=G(t),s=K(e,t),c=n?H(e,n.loopId):null,l=z(e),u=!!(n&&c),d=!!(u&&c&&n&&la(c,n.afterIndex,t)),f=l?Z(l)===t:!1,p=u?!d:!s||f,m=J(e,o),h=s?``:a?m:Di(e,t);return{definition:r,recipe:i,cost:o,unlocked:a,canAssignFollowUp:d,active:f,disabled:p,statusText:u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,buttonLabel:u?`Set`:f?`Running`:s?`Start`:`Locked`,tooltipRows:Vf(t,r.durationMs)}}function ld(e,t,n){let r=cd(e,t,n);if(!r)return``;let{definition:i,recipe:a,cost:o,unlocked:s,canAssignFollowUp:c,active:l,disabled:u,statusText:d,buttonLabel:f,tooltipRows:p}=r;return`
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
        <b>${Kr(a.actionId)}</b>
        <small>${P(o)}</small>
      </span>
      ${Pf(i.label,p,d)}
    </button>
  `}function ud(e,t,n,r,i){let a=Fl.some(e=>e.id===n)?n:`brewing`;return`
    <section class="action-panel alchemy-action-panel" data-editor-id="action-panel-alchemy" data-editor-label="Alchemy action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card alchemy-panel-card">
        ${dd(a)}
        ${a===`brewing`?fd(e,t,r,i):vd(a)}
      </div>
    </section>
  `}function dd(e){return`
    <div class="alchemy-mode-tabs" role="tablist" aria-label="Alchemy panels">
      ${Fl.map(t=>{let n=t.id===e;return`
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
  `}function fd(e,t,n,r){let i=t.filter(e=>h.some(t=>t===e)),a=i.filter(e=>g(e)?.kind===`vessel`),o=i.filter(e=>g(e)?.kind===`potion`);return`
    <div class="alchemy-brewing-panel">
      ${pd(e)}
      ${md(e,r)}
      ${hd(e,Il.vessel,a,n)}
      ${hd(e,Il.potion,o,n)}
    </div>
  `}function pd(e){let t=Qr(e);return`
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
  `}function md(e,t){let n=z(e),r=n?Z(n):null,i=r?g(r):void 0;if(!n||!i)return`
      <div class="smithing-active-row idle alchemy-active-row">
        <span>No active brew</span>
        <strong>Bench idle</strong>
      </div>
    `;let a=Oa(ho(e,t),0,1);return`
    <div class="smithing-active-row alchemy-active-row">
      <span>Active alchemy</span>
      <strong>${i.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-alchemy-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-alchemy-action-remaining>${W(n.endsAt-t)}</em>
      </div>
    </div>
  `}function hd(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section alchemy-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid alchemy-recipe-grid">
        ${n.map(t=>gd(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function gd(e,t,n){let r=_d(e,t,n);if(!r)return``;let{definition:i,recipe:a,cost:o,unlocked:s,canAssignFollowUp:c,active:l,disabled:u,statusText:d,buttonLabel:f,tooltipRows:p}=r;return`
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
        <b>${ti(a.actionId)}</b>
        <small>${P(o)}</small>
      </span>
      ${Pf(i.label,p,d)}
    </button>
  `}function _d(e,t,n){let r=D(t),i=g(t);if(!r||!i)return null;let a=L(e,t),o=G(t),s=K(e,t),c=n?H(e,n.loopId):null,l=z(e),u=!!(n&&c),d=!!(u&&c&&n&&la(c,n.afterIndex,t)),f=l?Z(l)===t:!1,p=u?!d:!s||f,m=J(e,o),h=s?``:a?m:Di(e,t);return{definition:r,recipe:i,cost:o,unlocked:a,canAssignFollowUp:d,active:f,disabled:p,statusText:u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,buttonLabel:u?`Set`:f?`Running`:s?`Start`:`Locked`,tooltipRows:Vf(t,r.durationMs)}}function vd(e){let t=Fl.find(t=>t.id===e)??Fl[0];return`
    <div class="alchemy-empty-panel" role="tabpanel" aria-label="${t.emptyLabel}">
      <div class="smithing-empty-column">No ${t.emptyLabel.toLowerCase()} recipes yet.</div>
    </div>
  `}function yd(e,t,n,r){let i=t.filter(e=>te.some(t=>t===e)),a=t.filter(e=>ne.some(t=>t===e)),o=t.filter(e=>re.some(t=>t===e)),s=t.filter(e=>ie.some(t=>t===e)),c=t.filter(e=>ae.some(t=>t===e)),l=t.filter(e=>oe.some(t=>t===e));return`
    <section class="action-panel textile-action-panel" data-editor-id="action-panel-textiles" data-editor-label="Tailoring action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card textile-panel-card">
        <div class="smithing-status-grid textile-status-grid">
          <div class="smithing-status-item">
            <span>Flax Chain</span>
            <strong>${Od(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Stations</span>
            <strong>${kd(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Needles</span>
            <strong>${Ad(e)}</strong>
          </div>
        </div>
        ${bd(e,r)}
        ${xd(e,`Flax Prep`,[...i,...a],n)}
        ${xd(e,`Spinning`,o,n)}
        ${xd(e,`Weaving`,s,n)}
        ${xd(e,`Needles`,c,n)}
        ${xd(e,`Sewing`,l,n)}
      </div>
    </section>
  `}function bd(e,t){let n=z(e),r=n?Z(n):null,i=r?E(r):void 0;if(!n||!i)return`
      <div class="smithing-active-row idle textile-active-row">
        <span>No active tailoring work</span>
        <strong>Chain idle</strong>
      </div>
    `;let a=Oa(ho(e,t),0,1);return`
    <div class="smithing-active-row textile-active-row">
      <span>Active tailoring work</span>
      <strong>${i.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-textile-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-textile-action-remaining>${W(n.endsAt-t)}</em>
      </div>
    </div>
  `}function xd(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section textile-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid textile-recipe-grid">
        ${n.map(t=>Sd(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function Sd(e,t,n){let r=D(t),i=E(t);if(!r||!i)return``;let a=L(e,t),o=G(t),s=K(e,t),c=n?H(e,n.loopId):null,l=z(e),u=!!(n&&c),d=!!(u&&c&&n&&la(c,n.afterIndex,t)),f=l?Z(l)===t:!1,p=u?!d:!s||f,m=J(e,o),h=s?``:a?m:Di(e,t),g=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,_=u?`Set`:f?`Running`:s?`Start`:`Locked`,v=Vf(t,r.durationMs);return`
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
        <b>${oi(i)}</b>
        <small>${P(o)}</small>
      </span>
      ${Pf(r.label,v,g)}
    </button>
  `}function Cd(e,t){let n=Is(e).filter(e=>e.tags.includes(`stew`)),r=e.skills.cooking,i=ft(r);return`
    <section class="action-panel cooking-action-panel" data-editor-id="action-panel-cooking" data-editor-label="Cooking recipe panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card cooking-panel-card">
        <div class="smithing-status-grid cooking-status-grid">
          <div class="smithing-status-item">
            <span>Station</span>
            <strong>${Hs(e,`campfire`,t)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Cooking</span>
            <strong>Lv ${r.level} (${M(i.xpIntoLevel)}/${M(i.xpForLevel)})</strong>
          </div>
          <div class="smithing-status-item">
            <span>Queue</span>
            <strong>${e.cooking.queue.length}</strong>
          </div>
        </div>
        ${wd(e,t)}
        ${Td(e,t)}
        ${Ed(e,`Stews`,n,t)}
      </div>
    </section>
  `}function wd(e,t){let n=Ps(e),r=n?Is(e).find(e=>e.id===n.recipeId):void 0;if(!n||!r)return`
      <div class="smithing-active-row idle cooking-active-row">
        <span>No active cooking</span>
        <strong>${e.cooking.queue.length?`Waiting for campfire`:`Queue idle`}</strong>
      </div>
    `;let i=Oa(Fs(n,t),0,1),a=Math.max(0,(n.endsAt??t)-t);return`
    <div class="smithing-active-row cooking-active-row">
      <span>Active cooking</span>
      <strong>${r.name}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-cooking-action-progress style="transform: scaleX(${i.toFixed(4)})"></span>
        <em data-cooking-action-remaining>${W(a)}</em>
      </div>
    </div>
  `}function Td(e,t){let n=e.cooking.queue.filter(e=>e.startedAt===null||e.endsAt===null);return n.length?`
    <div class="cooking-queue-panel">
      <div class="section-heading">
        <span>Queued</span>
      </div>
      <div class="cooking-queue-list">
        ${n.map(n=>`
              <div class="cooking-queue-row">
                <strong>${Is(e).find(e=>e.id===n.recipeId)?.name??n.recipeId}</strong>
                <small>${I(e,t)?`Waiting turn`:`Needs lit campfire`}</small>
              </div>
            `).join(``)}
      </div>
    </div>
  `:``}function Ed(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section cooking-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid cooking-recipe-grid">
        ${n.map(t=>Dd(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function Dd(e,t,n){let r=Rs(e,t,n),i=zs(e,t,n),a=!r,o=Ee(t),s=e.cooking.completedRecipeCounts[t.id]??0,c=[{label:`Station`,value:`Campfire`},{label:`Speed`,value:W(t.cookTimeMs)},{label:`Skill`,value:`Cooking +${M(t.xpReward)} XP`},{label:`Level`,value:`Cooking Lv ${t.levelRequirement}`},{label:`Uses`,value:Vs(t)},{label:`Makes`,value:Bs(t)},{label:`Nutrition`,value:`${t.nutrition.hunger??0} hunger`},{label:`Cooked`,value:`${s}`},{label:`Eating`,value:`Stews need a Wooden Spoon`},{label:`Failure`,value:`${Math.round(t.failureChance*100)}% base chance later`}],l=r?`Ready`:i;return`
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
        <b>${Bs(t)}</b>
        <small>${P(o)}${s?`; cooked ${s}`:``}</small>
      </span>
      ${Pf(t.name,c,l)}
    </button>
  `}function Od(e){return e.seenResources.includes(`linenCloth`)||e.inventory.linenCloth>0?`Cloth`:e.seenResources.includes(`linenThread`)||e.inventory.linenThread>0?`Thread`:e.seenResources.includes(`flaxFiber`)||e.inventory.flaxFiber>0?`Fiber`:e.seenResources.includes(`rettedFlax`)||e.inventory.rettedFlax>0?`Retted`:e.seenResources.includes(`flaxPlant`)||e.inventory.flaxPlant>0?`Fresh flax`:`Find flax`}function kd(e){let t=e.buildings.primitiveSpinningWheel,n=e.buildings.primitiveLoom;return t&&n?`Wheel + Loom`:t?`Wheel built`:n?`Loom built`:`Hand work`}function Ad(e){let t=Math.max(0,Math.floor(e.inventory.copperNeedle??0)),n=Math.max(0,Math.floor(e.inventory.bronzeNeedle??0));return t||n?`Copper ${t} / Bronze ${n}`:`None`}function jd(e,t){let n=z(e),r=X(e);if(!n)return`
      <section class="current-action-panel panel idle" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="current-action-content idle">
          <div class="current-action-detail current-action-location">
            <span>Location</span>
            ${Id(r.locationId)}
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
    `;let i=Oa(ho(e,t),0,1),a=W(n.endsAt-t),o=Ld(e,n),s=zd(e);return`
    <section class="current-action-panel panel" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="current-action-content">
        <div class="current-action-detail current-action-location">
          <span>Location</span>
          ${Id(o)}
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
  `}function Md(e,t,n,r){let i=H(e,t);if(!i)return``;let a=Math.min(i.actionIds.length-1,Math.max(0,r));return`
    <div class="action-loop-controls" aria-label="Action loop">
      ${i.actionIds.map((t,r)=>Nd(e,i,t,r,a,n)).join(``)}
    </div>
  `}function Nd(e,t,n,r,i,a){let o=r===i,s=a?.loopId===t.id&&a.afterIndex===r,c=Pd(n);return`
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
        <small>${Fd(e,t,r)}</small>
      </button>
      ${o?`<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-loop-id="${t.id}" data-id="${r}" title="Add action after ${c}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-loop-id="${t.id}" data-id="${r}" title="Remove ${c}" ${t.actionIds.length<=1?`disabled`:``}>-</button>
            </span>`:``}
    </div>
  `}function Pd(e){return e===`fishRiver`?`Fish River`:D(e)?.label??`Action`}function Fd(e,t,n){let r=t.actionIds[n];return`${cf(r,t.locationIds[n]??null)} - ${tf(e,ma(t,n),r)}`}function Id(e){let t=Rd(e);return`
    <div class="current-location-image" aria-label="${t.label} location">
      <img src="${t.iconUrl}" alt="" aria-hidden="true" />
    </div>
  `}function Ld(e,t){let n=Tu(t,X(e).locationId),r=wu(t);return r===`camp`?n===`camp`?r:n:r}function Rd(e){return e===`camp`?Vl:Cf(e)}function zd(e){let t=z(e);if(!t)return`Working`;let n=yf(wu(t)),r=yf(Tu(t,`camp`));return t.phase===`travelingTo`?`Traveling to ${n}`:t.phase===`travelingBack`?`Returning to camp from ${r}`:t.phase===`followUp`?Z(t)===`butcherFish`?`Butchering Fish`:D(Z(t))?.label??`Working`:D(t.actionId)?.label??`Working`}function X(e){return e.characters.find(t=>t.id===e.selectedCharacterId)??e.characters[0]}function Bd(e){return e.endsWith(`s`)?`${e}'`:`${e}'s`}function Vd(e,t){return cs(e,t.id)?`fighting in The Ruins`:z(e,t.id)?Hd(e,t.id):`at ${yf(t.locationId)}`}function Hd(e,t=e.selectedCharacterId){let n=z(e,t);if(!n)return`keeping still`;let r=yf(wu(n)),i=yf(Tu(n,`camp`));return n.phase===`travelingTo`?`traveling to ${r}`:n.phase===`travelingBack`?`returning to camp from ${i}`:n.phase===`followUp`?D(Z(n))?.verb??`working`:D(n.actionId)?.verb??`working`}function Z(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Ud(e){return El.find(t=>t.id===e)??El[0]}function Wd(e){return(Dl.find(t=>t.id===e)??Dl[0]).filterIds.map(e=>Ud(e))}function Gd(e){return Dl.find(t=>t.filterIds.includes(e))?.id??null}function Kd(e){return Dl.some(t=>t.id===e)}function qd(e){return e===`copper`||e===`bronze`}function Jd(e){return e===`brewing`||e===`transmutation`||e===`decomposition`}function Yd(e){return e===`primitive`}function Xd(e){return El.some(t=>t.id===e)}function Zd(e,t){let n=Number(e);return Number.isFinite(n)?Math.max(0,Math.floor(n)):t}function Qd(e,t,n){return H(t,e.dataset.loopId??n)?.id??null}function $d(e){return H(e,X(e).actionLoopId)?.id??null}function ef(e,t,n,r){let i=H(e,t),a=i?.actionIds[n]??`gatherSticks`,o=i?ma(i,n):{mode:`smart`};return r===`whenResourceAtLeast`?{mode:r,resourceId:o.resourceId??af(a),amount:o.amount??5,scope:o.scope??`camp`}:{mode:r}}function tf(e,t,n){switch(t.mode){case`manual`:return`stays here`;case`afterCompletion`:return`next after one`;case`whenInventoryFull`:return`next when pack fills`;case`whenCannotStart`:return`next when blocked`;case`whenResourceAtLeast`:{let r=rf(t,n),i=t.scope??`camp`,a=xn(e,r,i);return`${i===`camp`?`camp`:`carried`} ${j(r)} ${a}/${t.amount??1}`}default:return`smart advance`}}function nf(e){switch(e){case`manual`:return`This step repeats until the character can no longer perform it.`;case`afterCompletion`:return`The loop moves on after one finished work cycle.`;case`whenInventoryFull`:return`The loop moves on once carried inventory is full, then returns to camp if needed.`;case`whenResourceAtLeast`:return`The loop moves on when the selected stock reaches the target amount.`;case`whenCannotStart`:return`The loop repeats this step until materials, tools, or unlocks block it.`;default:return`Field work repeats until the pack fills; camp work advances after one completion.`}}function rf(e,t){return hf(e.resourceId)?e.resourceId:af(t)}function af(e){let n=t(e);if(n)return n.resourceId;let r=of(e);if(r)return r;switch(e){case`gatherSticks`:return`stick`;case`gatherStones`:return`stone`;case`gatherFlaxPlants`:return`flaxPlant`;case`gatherFlaxFibers`:return`flaxFiber`;case`gatherSand`:return`sand`;case`gatherWater`:return`water`;case`mineCoal`:return`coal`;case`mineCopper`:return`copper`;case`mineTin`:return`tin`;case`chopTrees`:return`wood`;case`huntSmallAnimals`:return`rabbit`;case`fishRiver`:return`minnow`;default:return`stick`}}function of(e){let t=x(e)?.output??g(e)?.output??E(e)?.output??sf(e),n=Object.keys(t)[0];return hf(n)?n:null}function sf(e){switch(e){case`craftWoodenSpoon`:return{woodenSpoon:1};case`craftWoodenBowl`:return{woodenBowl:1};case`cookRabbitMeat`:return{cookedRabbitMeat:1};case`cookSquirrelMeat`:return{cookedSquirrelMeat:1};case`tanHide`:return{leather:1};default:return{}}}function cf(e,t){return R(e)?Cf(lf(e,t)).label:`Camp`}function lf(e,t){return t??Df(e,`meadow`)}function uf(e){return R(e)?Y:[Cf(Df(e,`meadow`))]}function df(e,t){return`
    <span class="loop-skill-mark" aria-hidden="true">${jl[e].shortLabel}</span>
    <span class="loop-skill-label">${t}</span>
  `}function ff(e){let t=jl[e];return`--skill-accent: ${t.accent}; --skill-shade: ${t.shade};`}function pf(e){return Cl.some(t=>t.id===e)}function mf(e){return e===`camp`||e===`character`}function hf(e){return typeof e==`string`&&k.includes(e)}function gf(e){return Y.some(t=>t.id===e)}function _f(e){return e===`inventory`||e===`equipment`||e===`skills`||e===`log`}function vf(e){return e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId===`camp`}function yf(e){return e===`camp`?`camp`:`the ${Cf(e).label.toLowerCase()}`}function bf(e){return e===`foraging`||e===`mining`||e===`fishing`||e===`hunting`||e===`woodcutting`}function xf(e){return Wd(`processing`).some(t=>t.id===e)}function Sf(e,t){return bf(e.id)?kf(e,t):xf(e.id)?Af(e):``}function Cf(e,t){let n=t?wf(t):Y;return n.find(t=>t.id===e)??n[0]}function wf(e){switch(e){case`mining`:return Y.filter(e=>e.id===`mine`);case`fishing`:return Y.filter(e=>e.id===`river`);case`hunting`:return Y.filter(e=>e.id===`meadow`);case`woodcutting`:return Y.filter(e=>e.id===`forest`);case`foraging`:return Y;default:return Y.filter(e=>e.id===`meadow`||e.id===`river`)}}function Tf(e,t){return e===`mining`?`mine`:e===`hunting`?`meadow`:e===`fishing`?`river`:e===`woodcutting`?`forest`:Y.some(e=>e.id===t)?t:`meadow`}function Ef(e){return Cf(e,`foraging`).actionIds}function Df(e,n){let r=t(e);if(r)return r.locationId;let i=d(e);return i?i.locationId:Of(e)?`mine`:e===`huntSmallAnimals`?`meadow`:e===`fishRiver`||e===`gatherWater`||e===`gatherRiverIngredients`?`river`:e===`gatherForestIngredients`?`forest`:e===`gatherMineIngredients`?`mine`:e===`gatherDesertIngredients`||e===`gatherSand`?`desert`:e===`chopTrees`?`forest`:n}function Of(e){return e===`mineCoal`||e===`mineCopper`||e===`mineTin`}function kf(e,t){return`
    <section class="panel location-panel" data-editor-id="location-panel" data-editor-label="Location tabs panel" data-editor-files="src/ui/render.ts, src/style.css">
      ${jf(wf(e.id),Tf(e.id,t),e.label)}
    </section>
  `}function Af(e){return`
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
          <img class="location-tab-image" src="${Vl.iconUrl}" alt="" aria-hidden="true" />
          <span class="location-tab-label">Camp</span>
        </button>
      </div>
    </section>
  `}function jf(e,t,n){return`
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
  `}function Mf(e,t,n){let r=D(t);if(!r)return``;let i=oo(e),a=i?D(i):void 0,o=L(e,t),s=K(e,t),c=n?H(e,n.loopId):null,l=z(e),u=!!(n&&c),d=!!(u&&c&&n&&la(c,n.afterIndex,t)),f=l?Z(l)===t:!1,p=u?!d:!s||f,m=s?``:Di(e,t),h=i??t,g=bt(h),_=[{label:`Speed`,value:W(r.durationMs)},{label:`Skill`,value:`${lt(g).label} +${M(xt(h))} XP`},{label:`Uses`,value:i?P(G(i)):`Varies by target`},{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}],v=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&m?m:a?`Next: ${Qu(a.label)}`:``,y=u?`Set`:f?`Running`:s?`Start`:`Locked`,b=Qu(r.label),ee=a?Qu(a.label):``,x=ee||$u(t),S=i?P(G(i)):`Varies by target`;return`
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
      aria-label="${y} ${b}${ee?`, next ${ee}`:``}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">
        ${Q(t)}
      </span>
      <span class="smithing-recipe-copy">
        <strong>${b}</strong>
        <small>${v||`Balance stock`}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${x}</b>
        <small>${S}</small>
      </span>
      ${Pf(b,_,v)}
    </button>
  `}function Nf(e,t,n){let r=D(t);if(!r)return``;let i=L(e,t),a=G(t),o=K(e,t),s=n?H(e,n.loopId):null,c=z(e),l=!!(n&&s),u=!!(l&&s&&n&&la(s,n.afterIndex,t)),d=c?Z(c)===t:!1,f=l?!u:!o||d,p=t===`butcherFish`||t===`butcherRabbit`||t===`butcherSquirrel`||t===`cookRabbitMeat`||t===`cookSquirrelMeat`?Di(e,t):J(e,a),m=o?``:i?p:Di(e,t),h=Vf(t,r.durationMs),g=l?u?`Set as action loop step`:`Not valid for this loop`:!o&&m?m:``,_=l?`Set`:d?`Running`:o?`Start`:`Locked`;return`
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
      ${Pf(r.label,h,g)}
    </button>
  `}function Q(e){let t=Ff(e);return t.length?`
    <span class="action-card-icon ${t.length>1?`multi`:``}">
      ${t.map(e=>`<img src="${e}" alt="" aria-hidden="true" />`).join(``)}
    </span>
  `:`<span class="action-card-glyph">${Bf(e)}</span>`}function Pf(e,t,n){return`
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
  `}function Ff(e){let t=Rf(e);if(t)return zf(t.id);let n=If(e);if(n.length)return n;switch(e){case`gatherSticks`:return[Vc];case`gatherStones`:return[Kc];case`gatherFlaxPlants`:return[q];case`gatherFlaxFibers`:return[q];case`gatherMeadowIngredients`:return[Ac,_c];case`gatherForestIngredients`:return[mc,_c];case`gatherRiverIngredients`:return[Ic,Ac];case`gatherMineIngredients`:return[Ec,Ac];case`gatherDesertIngredients`:return[hc,_c];case`gatherSand`:return[hc,Kc];case`gatherWater`:return[Ic];case`mineCoal`:return[oc];case`mineCopper`:return[sc];case`mineTin`:return[Qc];case`fishRiver`:return[Oc];case`craftLowestTool`:return[lc];case`craftWoodenSpoon`:return[al];case`craftWoodenBowl`:return[rl];case`craftLeatherBackpack`:return[Sc];case`chopTrees`:return[fl];case`huntSmallAnimals`:return[Pc,zc];case`butcherFish`:return[fc];case`butcherRabbit`:case`cookRabbitMeat`:return[Fc];case`butcherSquirrel`:case`cookSquirrelMeat`:return[Bc];case`tanHide`:return[xc];case`retFlax`:case`separateFlaxFiber`:case`handSpinLinenThread`:case`spinLinenThread`:case`weaveLinenCloth`:return[q];case`craftCopperNeedle`:return[sc];case`craftBronzeNeedle`:return[sc,Qc];case`sewClothWrap`:case`sewLinenBandage`:case`sewSimplePouch`:case`sewLinenHood`:case`sewLinenShirt`:return[q];case`smeltCopperBar`:return[sc,oc];case`smeltBronzeBar`:return[sc,Qc];case`craftPot`:case`craftLadle`:case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return[sc];case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return[sc,Qc];case`craftGlassVial`:return[Jc,hc];case`brewHealthPotion`:return[_c,Ac];case`brewManaPotion`:return[Ic,_c]}return[]}function If(e){let n=t(e);if(n)return[ql[n.resourceId]??Lf(Fu(n))];let r=d(e);return r?[Lf(r.category)]:[]}function Lf(e){switch(e){case`fungal`:return Ac;case`berry`:case`fruit`:return _c;case`root`:return Ac;case`vegetable`:case`staple`:return q;case`seasoning`:return Ac;case`flower`:return q;default:return q}}function Rf(e){return O.find(t=>t.craftActionId===e)}function zf(e){let t=Gl[e];if(t)return[t];let n=O.find(t=>t.id===e);return n?.weapon?.range===`ranged`||n?.id.startsWith(`wooden`)?[fl]:n?.weapon?[Kc]:[]}function Bf(e){let t=D(e);return t?t.label.split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase():`?`}function Vf(e,n){let r=bt(e),i=[{label:`Speed`,value:W(n)},{label:`Skill`,value:`${lt(r).label} +${M(xt(e))} XP`}],a=x(e);if(a)return[...i,{label:`Uses`,value:P(a.cost)},{label:`Makes`,value:a.toolId?a.label.replace(`Craft `,`1 `):P(a.output??{})},{label:`Unlock`,value:a.unlockHint}];let o=g(e);if(o){let e=o.actionId===`craftGlassVial`?`Stone Furnace`:`Alchemy bench`;return[...i,{label:`Panel`,value:`Brewing`},{label:`Station`,value:e},{label:`Uses`,value:P(o.cost)},{label:`Makes`,value:ti(o.actionId)},{label:`Unlock`,value:o.unlockHint}]}let s=E(e);if(s){let e=s.requiredBuildings?.length?s.requiredBuildings.map(e=>ep(e)).join(`, `):`Camp`;return[...i,{label:`Station`,value:e},{label:`Uses`,value:P(s.cost)},{label:`Makes`,value:oi(s)},{label:`Unlock`,value:s.unlockHint}]}let c=Rf(e);if(c)return[...i,{label:`Makes`,value:`1 ${c.label}`},{label:`Uses`,value:P(G(e))},...c.weapon?[{label:`Power`,value:Ql(c.weapon.damage)},{label:`Style`,value:`${c.weapon.hands}H ${Xl(c.weapon.range)}`}]:[]];let l=d(e);if(l)return[...i,{label:`Table`,value:Ma(l.locationId,l.category)},{label:`Pickup`,value:`1-2 weighted ${l.category} rolls`},{label:`Place`,value:Cf(l.locationId).label}];let u=t(e);if(u){let e=u.minAmount===u.maxAmount?`${u.minAmount}`:`${u.minAmount}-${u.maxAmount}`;return[...i,{label:`Finds`,value:u.resourceLabel},{label:`Pickup`,value:`${e} per gather`},{label:`Type`,value:Iu(Fu(u))},{label:`Place`,value:Cf(u.locationId).label}]}switch(e){case`gatherSticks`:return[...i,{label:`Pickup`,value:`1-3 Sticks`},{label:`Each`,value:`1 weight`}];case`gatherStones`:return[...i,{label:`Pickup`,value:`1-2 Stones`},{label:`Each`,value:`1 weight`}];case`gatherFlaxPlants`:return[...i,{label:`Pickup`,value:`2-4 Flax Plants`},{label:`Each`,value:`1 weight`}];case`gatherFlaxFibers`:return[...i,{label:`Pickup`,value:`1-3 Flax Fibers`},{label:`Each`,value:`1 weight`}];case`gatherMeadowIngredients`:return[...i,{label:`Table`,value:Ma(`meadow`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Herbs, flowers, berries, fruit, roots, vegetables, staples, seasonings`}];case`gatherForestIngredients`:return[...i,{label:`Table`,value:Ma(`forest`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Berries, herbs, nuts, fungus, resin`}];case`gatherRiverIngredients`:return[...i,{label:`Table`,value:Ma(`river`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Wetland herbs, roots, seeds, fungus`}];case`gatherMineIngredients`:return[...i,{label:`Table`,value:Ma(`mine`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Cave herbs, fungus, roots, lichen`}];case`gatherDesertIngredients`:return[...i,{label:`Table`,value:Ma(`desert`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Desert herbs, fruit, roots, flowers, fungus`}];case`gatherSand`:return[...i,{label:`Pickup`,value:`2-5 Sand`},{label:`Place`,value:`Desert`}];case`gatherWater`:return[...i,{label:`Pickup`,value:`1-3 Water`},{label:`Place`,value:`River`}];case`mineCoal`:return[...i,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Coal`},{label:`Each`,value:`1 weight`}];case`mineCopper`:return[...i,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Copper`},{label:`Each`,value:`1 weight`}];case`mineTin`:return[...i,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Tin`},{label:`Each`,value:`1 weight`}];case`fishRiver`:return[...i,{label:`Requires`,value:`Fishing Pole`},{label:`Pickup`,value:`1 fish`},{label:`Each`,value:`0.5-7.5 lb`},{label:`Fish`,value:`Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb`}];case`chopTrees`:return[...i,{label:`Pickup`,value:`2-4 Wood, 35% chance for 1 Stick`},{label:`Each`,value:`Wood 2 weight, Stick 1 weight`}];case`huntSmallAnimals`:return[...i,{label:`Pickup`,value:`1 Rabbit or Squirrel`},{label:`Each`,value:`Rabbit 2-5 lb, Squirrel 0.5-2 lb`}];case`craftLowestTool`:return[...i,{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}];case`craftBasket`:return[...i,{label:`Makes`,value:`1 Basket`},{label:`Uses`,value:P(G(e))}];case`craftWoodenSpoon`:return[...i,{label:`Makes`,value:`1 Wooden Spoon`},{label:`Uses`,value:P(G(e))}];case`craftFishingPole`:return[...i,{label:`Makes`,value:`1 Fishing Pole`},{label:`Uses`,value:P(G(e))}];case`craftLeatherBackpack`:return[...i,{label:`Makes`,value:`1 Leather Backpack`},{label:`Uses`,value:P(G(e))}];case`butcherFish`:return[...i,{label:`Uses`,value:`1 carried fish`},{label:`Makes`,value:`Matching filet at 50% fish weight`}];case`butcherRabbit`:return[...i,{label:`Uses`,value:`1 Rabbit`},{label:`Each`,value:`2-5 lb`},{label:`Makes`,value:`1-2 Rabbit Meat; knife can recover Hide or Bone`}];case`butcherSquirrel`:return[...i,{label:`Uses`,value:`1 Squirrel`},{label:`Each`,value:`0.5-2 lb`},{label:`Makes`,value:`1 Squirrel Meat; knife can recover Hide or Bone`}];case`cookRabbitMeat`:return[...i,{label:`Uses`,value:`1 Rabbit Meat`},{label:`Makes`,value:`1 Cooked Rabbit Meat`}];case`cookSquirrelMeat`:return[...i,{label:`Uses`,value:`1 Squirrel Meat`},{label:`Makes`,value:`1 Cooked Squirrel Meat`}];case`tanHide`:return[...i,{label:`Uses`,value:`1 Hide`},{label:`Makes`,value:`1 Leather`}]}return i}function Hf(e,t){let n=Me.filter(n=>Oi(e,n.id,t));return`
    <section class="panel camp-panel" data-editor-id="camp-panel" data-editor-label="Camp structures and inventory panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="camp-panel-section">
        <div class="section-heading">
          <span>Structures</span>
        </div>
        <div class="craft-list">
          ${n.length?n.map(n=>Jf(e,n,t)).join(``):`<div class="empty-line">Nothing sturdy enough to name yet.</div>`}
        </div>
      </div>
      ${Uf(e)}
    </section>
  `}function Uf(e){let t=k.filter(t=>e.inventory[t]>0||xn(e,t)>0),n=Wf(t),r=O.some(t=>e.tools[t.id].quantity>0);return`
    <div class="camp-panel-section camp-inventory-section" data-editor-id="camp-inventory-section" data-editor-label="Camp inventory section" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Camp Inventory</span>
      </div>
      ${t.length||r?`
            <div class="camp-inventory-content">
              ${n.map(t=>bp(e,t)).join(``)}
              ${wp(e)}
              ${Kf(e)}
            </div>
          `:`<div class="empty-line">No resources stored yet.</div>`}
    </div>
  `}function Wf(e){let t=new Map(wl.map(e=>[e,[]])),n=new Map,r=[];for(let i of e){let e=Ne.find(e=>e.id===i);if(!e)continue;let a=Gf(e),o=a?`forage`:e.group;r.includes(o)||r.push(o),a?t.get(a)?.push(i):n.set(e.group,[...n.get(e.group)??[],i])}return r.flatMap(e=>{if(e===`forage`)return wl.flatMap(e=>{let n=t.get(e)??[];return n.length?[{id:`forage-${e}`,label:Iu(e),ids:n,usePlaceholderIcons:!0}]:[]});let r=n.get(e)??[];return r.length?[{id:e,label:Jp(e),ids:r}]:[]})}function Gf(e){let t=e.cooking?.ingredientCategory;return!t||t===`meat`?null:Fu({category:t,tags:e.cooking?.tags??[]})}function Kf(e){let t=k.filter(t=>e.inventory[t]>0&&xl(t));return t.length?`
    <section class="resource-group food-use-panel" data-editor-id="food-use-panel" data-editor-label="Food use panel" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Food</h3>
      <div class="food-use-list">
        ${t.map(t=>qf(e,t)).join(``)}
      </div>
    </section>
  `:``}function qf(e,t){let n=yl(e,t),r=vl(e,t),i=_l(t);return`
    <div class="food-use-row">
      <span>
        <strong>${j(t)}</strong>
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
  `}function Jf(e,t,n){let r=Xf(e,t.id,n),i=ki(e,t.id,n),a=ln(e,t.recipe),o=vf(e),s=Zf(t.id),c=!i||!s&&r||!a||!o,l=Qf(e,t.id,n),u=i?$f(e,t.id,n):`Locked`;return`
    <article class="craft-item building-card ${r||tn(e,t.id)>0?`owned`:``} ${i?``:`locked`} ${t.id===`campfire`&&r?`lit`:``}" data-editor-id="building-card-${t.id}" data-editor-label="Building card: ${t.label}" data-editor-files="src/ui/render.ts, src/style.css">
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
        ${Yf(e,t,n)}
      </button>
    </article>
  `}function Yf(e,t,n){let r=Xf(e,t.id,n),i=ki(e,t.id,n),a=ln(e,t.recipe),o=vf(e),s=[{label:`Status`,value:tp(e,t.id,n,r,a,o,i)},{label:`Unlock`,value:Ai(e,t.id)},{label:`Skill`,value:`Construction +${M(St(t.id))} XP`},{label:`Cost`,value:P(t.recipe)},{label:`Use`,value:t.blurb}];return`
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
  `}function Xf(e,t,n){return Zf(t)?!1:t===`campfire`?I(e,n):e.buildings[t]}function Zf(e){return e===`hideTent`}function Qf(e,t,n){switch(t){case`campfire`:return I(e,n)?nc:rc;case`tanningRack`:return el;case`hideTent`:return $c;case`crudeStoneFurnace`:return Jc;case`primitiveSpinningWheel`:case`primitiveLoom`:return rc}}function $f(e,t,n){return Zf(t)?`Build`:t===`campfire`&&I(e,n)?`Lit`:Xf(e,t,n)?`Built`:`Build`}function ep(e){return Me.find(t=>t.id===e)?.label??e}function tp(e,t,n,r,i,a,o){if(!o)return`Locked: ${Ai(e,t)}`;if(!a&&!r)return`Needs ${X(e).name} at camp`;if(t===`hideTent`){let n=tn(e,t);return i?`Tents: ${n}; next gives +1 housing`:`Tents: ${n}; needs ${J(e,Me.find(e=>e.id===t)?.recipe??{})}`}return t===`campfire`?r?`Lit, burns out in <b data-campfire-remaining>${W(Lr(e,n))}</b>`:i?`Ready to build, burns for 15m`:`Needs ${J(e,Me.find(e=>e.id===t)?.recipe??{})}`:r?`Built`:i?`Ready to build`:`Needs ${J(e,Me.find(e=>e.id===t)?.recipe??{})}`}function np(e,t){let n=X(e);return`
    <div class="work-area single-panel">
      <section class="panel character-detail-panel" aria-label="${n.name} details" data-active-tab="${t}" data-editor-id="character-detail-panel" data-editor-label="Character detail panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="character-detail-heading">
          <span class="portrait" aria-hidden="true">${Du(n.name)}</span>
          <span class="character-detail-title">
            <strong>${n.name}</strong>
            <small>${Vd(e,n)}</small>
          </span>
        </div>
        ${rp(e)}
      </section>
    </div>
  `}function rp(e){return`
    <div class="character-detail-content character-overview-content">
      <div class="character-overview-full">
        ${yp(e)}
      </div>
      <div class="character-overview-pair">
        <section class="character-overview-section" aria-label="Equipment overview" data-editor-id="character-overview-equipment" data-editor-label="Character overview equipment" data-editor-files="src/ui/render.ts, src/style.css">
          ${Ep(e,!1)}
        </section>
        ${ip(e)}
      </div>
      <div class="character-overview-full">
        <section class="character-overview-section" aria-label="Skills overview" data-editor-id="character-overview-skills" data-editor-label="Character overview skills" data-editor-files="src/ui/render.ts, src/style.css">
          ${op(e)}
        </section>
      </div>
    </div>
  `}function ip(e){let t=X(e),n=z(e,t.id),r=t.actionLoopId?H(e,t.actionLoopId):null,i=n?D(Z(n))?.label??`Working`:`Idle`,a=Uo(e,t.id),o=cs(e,t.id)??t.combat;return`
    <section class="character-overview-section character-stats-overview" aria-label="Character stats" data-editor-id="character-overview-stats" data-editor-label="Character overview stats" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Stats</h3>
      <dl class="character-stat-list">
        ${[{label:`Status`,value:Vd(e,t)},{label:`Location`,value:yf(t.locationId)},{label:`Current`,value:i},{label:`Action Loop`,value:r?qp(r.name):`None`},{label:`Class`,value:a.classLabel},{label:`Weapon`,value:a.weaponLabel},{label:`Hunger`,value:`${Math.round(t.needs.hunger)} / ${Math.round(t.needs.maxHunger)}`},{label:`HP`,value:`${Math.round(o.hp)} / ${Math.round(o.maxHp)}`},{label:`Mana`,value:`${Math.round(o.mana)} / ${Math.round(o.maxMana)}`},...kp(e)].map(e=>`
            <div class="character-stat-row">
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
      </dl>
    </section>
  `}function ap(e){return`
    <button
      class="camp-log-toggle ${e?`active`:``}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${e}"
    >
      Camp Log
    </button>
  `}function op(e){return`
    <h3>Skills</h3>
    <section class="side-panel-content skills-screen" aria-label="Skills" data-editor-id="skills-screen" data-editor-label="Skills screen" data-editor-files="src/ui/render.ts, src/style.css">
      ${Ml.filter(e=>e.skillIds.length>0).map(t=>sp(e,t)).join(``)}
      ${up(e)}
    </section>
  `}function sp(e,t){let n=t.skillIds.filter(e=>et.some(t=>t.id===e)).map(t=>cp(e,t)).join(``);return`
    <section class="skill-group" aria-label="${t.label} skills">
      <h4>${t.label}</h4>
      <div class="skill-group-list">
        ${n||`<div class="empty-line">No skills yet.</div>`}
      </div>
    </section>
  `}function cp(e,t){let n=lt(t),r=e.skills[t],i=ft(r),a=i.atCap?i.canPrestige?`Prestige ready`:`Max level`:`${M(i.xpIntoLevel)} / ${M(i.xpForLevel)} XP`,o=r.prestige>0?`P${r.prestige}`:`P0`;return`
    <article class="skill-row ${i.canPrestige?`prestige-ready`:``}" data-editor-id="skill-row-${t}" data-editor-label="Skill row: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${t===`foraging`?lp():``}
      <div class="skill-row-heading">
        <span>
          <strong>${n.label}</strong>
          <small>Total ${M(r.totalXp)} XP</small>
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
  `}function lp(){return`
    <button
      class="character-skill-banner-button"
      type="button"
      data-command="open-character-skill-panel"
      data-id="foraging"
      aria-label="Go to Gather Foraging actions"
    >
      <img class="character-skill-banner-image" src="${gc}" alt="" aria-hidden="true" />
    </button>
  `}function up(e){let t=X(e),n=Uo(e,t.id);return`
    <section class="skill-group combat-class-group" aria-label="Combat class experience">
      <h4>Combat Classes</h4>
      <div class="skill-group-list">
        ${ue.filter(e=>{let r=t.classProgress[e.id];return e.id===n.classId||(r?.totalXp??0)>0}).map(t=>dp(e,t.id)).join(``)}
      </div>
    </section>
  `}function dp(e,t){let n=X(e),r=ue.find(e=>e.id===t)??ue[0],i=n.classProgress[t],a=qo(i),o=a.atCap?`Max level`:`${Jo(a.xpIntoLevel)} / ${Jo(a.xpForLevel)} XP`;return`
    <article class="skill-row combat-class-row" data-editor-id="combat-class-row-${t}" data-editor-label="Combat class row: ${r.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${r.label}</strong>
          <small>${r.weaponLabel} - Total ${Jo(i.totalXp)} XP</small>
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
  `}function fp(e,t,n,r,i,a){let o=H(e,t),s=ea(e).length;return`
    <div class="work-area single-panel">
      <section class="panel action-loop-page-panel action-loop-panel" aria-label="Action loops" data-editor-id="action-loops-panel" data-editor-label="Action loops panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="loop-panel-heading">
          <h3>Action Loops</h3>
          <button class="loop-create-button" type="button" data-command="create-loop">New</button>
        </div>
        <div class="loop-picker" aria-label="Saved action loops">
          ${e.actionLoops.map(t=>_p(e,t.id,o?.id??null)).join(``)}
        </div>
        ${o?`
              <div class="loop-editor">
                <div class="loop-editor-heading">
                  <label class="loop-name-field">
                    <span>Name</span>
                    <input
                      type="text"
                      value="${qp(o.name)}"
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
                ${pp(e,o,n,i,a)}
                ${Md(e,o.id,r,n)}
                <div class="loop-assignment-list">
                  ${e.characters.map(t=>vp(e,o.id,t)).join(``)}
                </div>
              </div>
            `:`<div class="empty-line">No loops built yet.</div>`}
      </section>
    </div>
  `}function pp(e,t,n,r,i){let a=Math.min(t.actionIds.length-1,Math.max(0,n)),o=t.actionIds[a],s=ma(t,a),c=Pd(o);return`
    <section class="loop-step-editor" aria-label="Selected loop step" data-editor-id="loop-step-editor" data-editor-label="Loop step editor" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="loop-step-editor-heading">
        <span>
          <strong>Step ${a+1}: ${c}</strong>
          <small>${Fd(e,t,a)}</small>
        </span>
      </div>
      <div class="loop-step-field-grid">
        ${mp(t,a,o,r)}
        ${hp(t,a,o,i)}
        <label class="loop-step-field">
          <span>Advance</span>
          <select data-loop-field="advance-mode" data-loop-id="${t.id}" data-id="${a}">
            ${Cl.map(e=>`
                <option value="${e.id}" ${s.mode===e.id?`selected`:``}>${e.label}</option>
              `).join(``)}
          </select>
        </label>
        ${gp(t,a,o,s)}
      </div>
      <small class="loop-step-hint">${nf(s.mode)}</small>
    </section>
  `}function mp(e,t,n,r){if(!R(n))return`
      <div class="loop-step-field readonly">
        <span>Location</span>
        <strong>Camp</strong>
      </div>
    `;let i=uf(n),a=lf(n,e.locationIds[t]??null),o=Cf(a);if(i.length<=1)return`
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
  `}function hp(e,t,n,r){let i=bt(n),a=lt(i),o=r?.loopId===e.id&&r.index===t;return`
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
          style="${ff(i)}"
        >
          ${df(i,a.label)}
        </button>
        ${o?`<div class="loop-skill-menu" role="menu" aria-label="Choose step skill">
                ${Al.map(n=>{let r=lt(n.skillId),a=n.skillId===i;return`
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
                        style="${ff(n.skillId)}"
                      >
                        ${df(n.skillId,r.label)}
                      </button>
                    `}).join(``)}
              </div>`:``}
      </div>
    </div>
  `}function gp(e,t,n,r){if(r.mode!==`whenResourceAtLeast`)return``;let i=rf(r,n),a=r.scope??`camp`,o=Math.max(1,Math.floor(r.amount??1));return`
    <label class="loop-step-field">
      <span>Stock</span>
      <select data-loop-field="advance-resource" data-loop-id="${e.id}" data-id="${t}">
        ${k.map(e=>`
            <option value="${e}" ${i===e?`selected`:``}>${j(e)}</option>
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
  `}function _p(e,t,n){let r=H(e,t);if(!r)return``;let i=e.characters.filter(e=>e.actionLoopId===r.id).length,a=n===r.id;return`
    <button
      class="loop-picker-button ${a?`active`:``}"
      type="button"
      data-command="select-loop-step"
      data-loop-id="${r.id}"
      data-id="0"
      aria-pressed="${a}"
    >
      <span>${qp(r.name)}</span>
      <small>${i} assigned</small>
    </button>
  `}function vp(e,t,n){let r=n.actionLoopId===t,i=z(e,n.id),a=r?i?`Running`:`Assigned`:`Assign`;return`
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
        <small>${Vd(e,n)}</small>
      </span>
      <em>${a}</em>
    </button>
  `}function yp(e){let t=X(e),n=Bd(t.name),r=mn(e,t.id),i=k.filter(n=>r[n]>0||xn(e,n,`character`,t.id)>0),a=_n(e,t.id),o=vn(e,t.id),s=i.filter(e=>!!ql[e]),c=i.filter(e=>!ql[e]),l=!z(e)&&vf(e);return`
    <div class="resource-group character-inventory-group" data-editor-id="character-inventory-group" data-editor-label="Character inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="inventory-summary-heading">
        <h3>${n} Inventory</h3>
        <span>${Gp(a)}/${Gp(o)}</span>
      </div>
      ${i.length?`<button class="deposit-button" type="button" data-command="deposit-carried" ${l?``:`disabled`}>Store at Camp</button>`:``}
      ${i.length?`
            ${s.length?`<div class="inventory-resource-grid" aria-label="${n} carried inventory">
                    ${s.map(n=>Sp(e,n,r,`character`,t.id)).join(``)}
                  </div>`:``}
            ${c.map(e=>xp(e,r)).join(``)}
          `:`<div class="empty-line">Pack empty.</div>`}
    </div>
  `}function bp(e,t){let n=t.usePlaceholderIcons?t.ids:t.ids.filter(e=>!!ql[e]),r=t.usePlaceholderIcons?[]:t.ids.filter(e=>!ql[e]),i=t.usePlaceholderIcons?` camp-forage-inventory-group`:``,a=t.usePlaceholderIcons?` camp-forage-inventory-grid`:``;return`
    <div class="resource-group${i}" data-editor-id="resource-group-${t.id}" data-editor-label="${t.label} resource group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${t.label}</h3>
      ${n.length?`<div class="inventory-resource-grid${a}" aria-label="${t.label} inventory">
              ${n.map(n=>Sp(e,n,e.inventory,`camp`,e.selectedCharacterId,t.usePlaceholderIcons?q:void 0)).join(``)}
            </div>`:``}
      ${r.map(t=>`
        ${xp(t,e.inventory)}
      `).join(``)}
    </div>
  `}function xp(e,t){return`
    <div class="resource-row">
      <span>
        <strong>${j(e)}</strong>
        <small>${Ne.find(t=>t.id===e)?.blurb??``}</small>
      </span>
      <b>${Wp(e,t[e])}</b>
    </div>
  `}function Sp(e,t,n=e.inventory,r=`camp`,i=e.selectedCharacterId,a){let o=ql[t]??a,s=Ne.find(e=>e.id===t);if(!o||!s)return``;let c=Cp(s),l=xn(e,t,r,i),u=He(t)?`, quantity ${l}`:``;return`
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${s.label}, ${Wp(t,n[t])}${u}" data-editor-id="inventory-resource-${r}-${t}" data-editor-label="Inventory resource: ${s.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <img class="slot-item-icon" src="${o}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${We(t,n[t])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${s.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${c}</dd>
          </div>
          ${Ve(t)?`<div>
                  <dt>Total</dt>
                  <dd>${Wp(t,n[t])}</dd>
                </div>`:``}
          ${He(t)?`<div>
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
  `}function Cp(e){let t=Gf(e);return t?Iu(t):Jp(e.group)}function wp(e){let t=O.filter(t=>e.tools[t.id].quantity>0);return t.length?`
    <section class="resource-group tool-inventory" data-editor-id="tool-inventory-group" data-editor-label="Tool inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${t.map(t=>Tp(e,t.id)).join(``)}
      </div>
    </section>
  `:``}function Tp(e,t){let n=O.find(e=>e.id===t),r=e.tools[t];if(!n||r.quantity<=0)return``;let i=di(t),a=[{label:`Durability`,value:`${i}/${i}`},...Yl(t)];return`
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${n.label}, ${r.quantity} ${r.quantity===1?`spare`:`spares`}" data-editor-id="inventory-tool-${t}" data-editor-label="Inventory tool: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${Mp(t)}
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
  `}function Ep(e,t=!0){return`
    <section class="side-panel-content equipment-screen" data-editor-id="equipment-screen" data-editor-label="Equipment screen" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="equipment-section">
        <h3>Equipment</h3>
        <div class="equipment-grid" aria-label="Tool equipment slots">
          ${Ul.slice(0,Hl).map((t,n)=>t&&e.tools[t].owned?jp(e,t):Np(n,t)).join(``)}
        </div>
      </div>
      ${Wl.map(e=>Dp(e)).join(``)}
      ${t?`<div class="equipment-section equipment-stats-section">
              <h3>Equipment Stats</h3>
              <dl class="equipment-stat-list">
                ${kp(e).map(e=>`
                    <div class="equipment-stat-row">
                      <dt>${e.label}</dt>
                      <dd>${e.value}</dd>
                    </div>
                  `).join(``)}
              </dl>
            </div>`:``}
    </section>
  `}function Dp(e){return`
    <div class="equipment-section equipment-placeholder-section" data-editor-id="equipment-placeholder-${Eu(e.label)}" data-editor-label="${e.label} equipment slots" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${e.label}</h3>
      <div class="equipment-placeholder-grid" aria-label="${e.label} slots">
        ${e.slots.map(t=>Op(e.label,t)).join(``)}
      </div>
    </div>
  `}function Op(e,t){return`
    <div class="equipment-slot empty equipment-placeholder-slot" aria-label="Empty ${t} slot" data-editor-id="equipment-placeholder-${Eu(e)}-${Eu(t)}" data-editor-label="Equipment placeholder: ${t}" data-editor-files="src/ui/render.ts, src/style.css">
      <strong>${t}</strong>
    </div>
  `}function kp(e){let t=X(e),n=O.filter(t=>e.tools[t.id].owned).filter(t=>e.tools[t.id].durability>0),r=O.reduce((t,n)=>t+e.tools[n.id].quantity,0),i=_n(e,t.id),a=vn(e,t.id),o=Math.max(0,a-10),s=Ap(e);return[{label:`Carry`,value:`${Gp(i)} / ${Gp(a)} lb`},{label:`Carry Bonus`,value:o>0?`+${Gp(o)} lb`:`None`},{label:`Usable Tools`,value:`${n.length} / ${Ul.filter(Boolean).length}`},{label:`Spares`,value:r>0?`${r}`:`None`},{label:`Field Effects`,value:s.length?s.join(`, `):`None`}]}function Ap(e){let t=[];for(let[n,r]of[[`fishing`,`Fishing`],[`butchering`,`Butchering`],[`woodcutting`,`Woodcutting`],[`mining`,`Mining`],[`hunting`,`Hunting`]]){let i=mi(e,n);if(!i)continue;let a=O.find(e=>e.id===i),o=a&&a.tier!==`primitive`?`${Zl(a.tier)} `:``;t.push(n===`hunting`&&a?`${r} (${a.label})`:`${o}${r}`)}return t}function jp(e,t){let n=O.find(e=>e.id===t),r=e.tools[t];if(!n||!r.owned)return``;let i=di(t),a=Math.max(0,r.durability),o=a>0,s=(a/i*100).toFixed(1),c=[{label:`Durability`,value:o?`${a}/${i}`:`Broken`},{label:`Inventory`,value:`${r.quantity} ${r.quantity===1?`spare`:`spares`}`},...Yl(t)],l=!!Gl[t];return`
    <article class="equipment-slot ${o?``:`broken`} ${l?`icon-only`:``}" tabindex="0" data-tooltip-source aria-label="${n.label}" data-editor-id="equipment-slot-${t}" data-editor-label="Equipment slot: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${Mp(t)}
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
  `}function Mp(e){let t=Gl[e];return t?`<img class="slot-item-icon" src="${t}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${Pp(e)}</span>`}function Np(e,t){let n=t?Kl[t]??`Empty`:`Empty`;return`
    <div class="equipment-slot empty" aria-label="Empty equipment slot ${e+1}">
      <span class="slot-glyph">${t?Pp(t):`+`}</span>
      <strong>${n}</strong>
    </div>
  `}function Pp(e){switch(e){case`basket`:return`BK`;case`leatherBackpack`:return`BP`;case`fishingPole`:return`FP`;case`stoneAxe`:return`HT`;case`stonePickAxe`:return`PX`;case`copperPickaxe`:return`CP`;case`copperHatchet`:return`CH`;case`copperKnife`:return`CK`;case`bronzePickaxe`:return`BP`;case`bronzeHatchet`:return`BH`;case`bronzeKnife`:return`BK`;case`stoneSpear`:return`SP`;case`stoneKnife`:return`SK`;case`woodenSword`:return`WS`;case`woodenTwoHandedSword`:return`2S`;case`woodenClub`:return`WC`;case`woodenTwoHandedClub`:return`2C`;case`shortBow`:return`SB`;case`woodenTotem`:return`WT`}return(O.find(t=>t.id===e)?.label??e).split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase()}function Fp(e,t){if(!(e instanceof Element))return null;let n=e.closest(`[data-tooltip-source]`);return n&&t.contains(n)?n:null}function Ip(e,t){let n=t.querySelector(`.slot-tooltip`),r=zp(e);!n||!r||(r.innerHTML=n.innerHTML,r.setAttribute(`aria-hidden`,`false`),r.classList.add(`visible`),Rp(e,t))}function Lp(e){let t=zp(e);t&&(t.classList.remove(`visible`),t.setAttribute(`aria-hidden`,`true`),t.innerHTML=``)}function Rp(e,t){let n=zp(e);if(!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth,o=window.innerHeight,s=i.width,c=i.height,l=r.left-s-8;if(l<12){let e=r.right+8;l=e+s<=a-12?e:a-s-12}let u=Math.max(12,o-c-12),d=Math.min(Math.max(r.top,12),u);n.style.left=`${Math.max(12,Math.round(l))}px`,n.style.top=`${Math.round(d)}px`}function zp(e){return e.querySelector(`.tooltip-layer`)}function Bp(e){return new Map([`.log-list`,`.side-panel-content`,`.character-overview-content`].map(t=>[t,e.querySelector(t)?.scrollTop??0]))}function Vp(e,t){for(let[n,r]of t){let t=e.querySelector(n);t&&(t.scrollTop=r)}}function Hp(e,t,n,r=``){let i=e.log.filter(e=>Yt(e)===t);return`
    <section class="log-panel ${r}" data-editor-id="${t}-log-panel" data-editor-label="${n}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>${n}</span>
        <span class="quiet">${i.length}</span>
      </div>
        <div class="log-list">
          ${i.map(e=>`
            <p class="log-entry ${e.tone}">
              <span>${e.text}</span>
              ${Up(e)}
            </p>
          `).join(``)}
        </div>
    </section>
  `}function Up(e){if(e.aggregateItems){let t=k.filter(t=>(e.aggregateItems?.[t]??0)>0).map(t=>{let n=e.aggregateItems?.[t]??0;return`<b>+${We(t,n)} ${Kp(t,n)}</b>`});return t.length?`<span class="log-gains">${t.join(``)}</span>`:``}return e.aggregateTotal?`<span class="log-gains"><b>+${e.aggregateTotal} ${e.aggregateUnit??``}</b></span>`:``}function Wp(e,t){return Ve(e)?`${We(e,t)} lb`:We(e,t)}function Gp(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}function Kp(e,t){let n=j(e);if(Ve(e))return`lb ${n}`;if(t===1)return n;switch(e){case`wood`:case`rabbitMeat`:case`squirrelMeat`:case`cookedRabbitMeat`:case`cookedSquirrelMeat`:case`leather`:case`rettedFlax`:case`linenThread`:case`linenCloth`:return n;case`flaxPlant`:return`Flax Plants`;case`flaxFiber`:return`Flax Fibers`;case`coal`:case`copper`:case`tin`:case`copperBar`:case`bronzeBar`:case`pot`:case`ladle`:return n;case`copperNeedle`:return`Copper Needles`;case`bronzeNeedle`:return`Bronze Needles`;case`water`:return`Water`;case`dirtyBowl`:return`Dirty Bowls`;case`woodenSpoon`:return`Wooden Spoons`;case`clothWrap`:return`Cloth Wraps`;case`linenBandage`:return`Linen Bandages`;case`simplePouch`:return`Simple Pouches`;case`linenHood`:return`Linen Hoods`;case`linenShirt`:return`Linen Shirts`;default:return n.endsWith(`s`)?n:`${n}s`}}function qp(e){return e.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}})}function Jp(e){switch(e){case`resources`:return`Resources`;case`animals`:return`Animals`;case`hunted`:return`Meats`;case`fish`:return`Fish`;case`crafted`:return`Worked`;case`ingredients`:return`Ingredients`;case`food`:return`Food`;case`liquids`:return`Liquids`;case`utensils`:return`Utensils`;default:return e}}var Yp=document.querySelector(`#app`);if(!Yp)throw Error(`App root was not found.`);var $=zn(),Xp=1,Zp=Math.max(Date.now(),$.lastSimulatedAt),Qp=Date.now(),$p=$l(Yp,{requestRender:()=>em(),persist:()=>Nr($),reset:()=>{sm(),$=Pr(),em()},getNow:()=>om(),getTestRewardMultiplier:()=>Xp,setTestRewardMultiplier:e=>{Xp=Xp===e?1:e,Ye(Xp)}});function em(){let e=om();$p($,e)}function tm(){let e=om(),t=rm();if(mo($,e),Ls($),Ns($,e),os($,e),t!==rm()){em();return}im()}em(),nm(),window.setInterval(tm,1e3),window.setInterval(()=>Nr($),2e3),window.addEventListener(`beforeunload`,()=>Nr($));function nm(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./service-worker.js`).catch(()=>{})})}function rm(){return JSON.stringify({inventory:$.inventory,characterInventory:$.characterInventory,resourceCounts:$.resourceCounts,characterResourceCounts:$.characterResourceCounts,characters:$.characters.map(e=>({id:e.id,condition:e.condition,locationId:e.locationId,needs:e.needs,actionLoopId:e.actionLoopId,combat:e.combat,classProgress:e.classProgress,inventory:e.inventory,resourceCounts:e.resourceCounts})),tools:$.tools,buildings:$.buildings,buildingCounts:$.buildingCounts,campfireExpiresAt:$.campfireExpiresAt,seenResources:$.seenResources,skills:$.skills,cooking:$.cooking,combat:$.combat,actionLoops:$.actionLoops,currentActions:ea($).map(e=>({actionId:e.actionId,characterId:e.characterId,phase:e.phase,originLocationId:e.originLocationId,targetLocationId:e.targetLocationId,locationId:e.locationId,loopActionIds:e.loopActionIds,loopLocationIds:e.loopLocationIds,loopIndex:e.loopIndex,nextLoopIndex:e.nextLoopIndex,followUpActionId:e.followUpActionId,startedAt:e.startedAt,endsAt:e.endsAt})),logHead:$.log[0]?.id??``,logLength:$.log.length})}function im(){let e=om();am(e);let t=document.querySelector(`[data-action-progress]`),n=document.querySelector(`[data-action-remaining]`),r=document.querySelector(`[data-smithing-action-progress]`),i=document.querySelector(`[data-smithing-action-remaining]`),a=document.querySelector(`[data-alchemy-action-progress]`),o=document.querySelector(`[data-alchemy-action-remaining]`),s=document.querySelector(`[data-textile-action-progress]`),c=document.querySelector(`[data-textile-action-remaining]`),l=document.querySelector(`[data-cooking-action-progress]`),u=document.querySelector(`[data-cooking-action-remaining]`),d=z($);if(d){let l=Math.min(1,Math.max(0,ho($,e)));t&&(t.style.transform=`scaleX(${l.toFixed(4)})`),n&&(n.textContent=W(d.endsAt-e)),r&&(r.style.transform=`scaleX(${l.toFixed(4)})`),i&&(i.textContent=W(d.endsAt-e)),a&&(a.style.transform=`scaleX(${l.toFixed(4)})`),o&&(o.textContent=W(d.endsAt-e)),s&&(s.style.transform=`scaleX(${l.toFixed(4)})`),c&&(c.textContent=W(d.endsAt-e))}let f=Ps($);if(f){let t=Fs(f,e);l&&(l.style.transform=`scaleX(${t.toFixed(4)})`),u&&(u.textContent=W((f.endsAt??e)-e))}}function am(e){let t=document.querySelectorAll(`[data-campfire-remaining]`);if(!(!t.length||!$.campfireExpiresAt))for(let n of t)n.textContent=W($.campfireExpiresAt-e)}function om(){let e=Date.now(),t=Math.max(0,e-Qp);return Zp+=t,Qp=e,Zp}function sm(){let e=Date.now();Zp=e,Qp=e}function cm(){im(),window.requestAnimationFrame(cm)}window.requestAnimationFrame(cm);