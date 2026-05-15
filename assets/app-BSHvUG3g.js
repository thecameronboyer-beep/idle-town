import"./modulepreload-polyfill-Cf3xff8G.js";/* empty css              */var e=[`craftGlassVial`,`brewHealthPotion`,`brewManaPotion`],t=[{actionId:`craftGlassVial`,label:`Craft Glass Vial`,verb:`firing glass vials`,panel:`brewing`,kind:`vessel`,durationMs:18e3,cost:{sand:3,coal:1},output:{glassVial:2},blurb:`Fire clean desert sand into small potion vessels.`,unlockHint:`Build Stone Furnace`},{actionId:`brewHealthPotion`,label:`Brew Health Potion`,verb:`brewing a health potion`,panel:`brewing`,kind:`potion`,durationMs:26e3,cost:{glassVial:1,water:1,yarrow:1,plantainLeaf:1},output:{healthPotion:1},blurb:`Steep meadow medicines into a vial for future healing.`,unlockHint:`Craft Glass Vial and find Meadow Ingredients`},{actionId:`brewManaPotion`,label:`Brew Mana Potion`,verb:`brewing a mana potion`,panel:`brewing`,kind:`potion`,durationMs:26e3,cost:{glassVial:1,water:1,riverMint:1,silverleafHerb:1},output:{manaPotion:1},blurb:`Steep river herbs into a vial for future mana recovery.`,unlockHint:`Craft Glass Vial and find River Ingredients`}],n=t.filter(e=>e.panel===`brewing`).map(e=>e.actionId);function r(e){return t.find(t=>t.actionId===e)}function i(t){return e.some(e=>e===t)}var a=[`smeltCopperBar`,`smeltBronzeBar`,`craftPot`,`craftLadle`,`craftCopperPickaxe`,`craftCopperHatchet`,`craftCopperKnife`,`craftBronzePickaxe`,`craftBronzeHatchet`,`craftBronzeKnife`],o=[{actionId:`smeltCopperBar`,label:`Smelt Copper Bar`,verb:`smelting copper`,kind:`smelting`,material:`copper`,durationMs:22e3,cost:{copper:2,coal:1},output:{copperBar:1},blurb:`Refine soft copper ore into a first workable bar.`,unlockHint:`Build Stone Furnace`},{actionId:`smeltBronzeBar`,label:`Smelt Bronze Bar`,verb:`smelting bronze`,kind:`smelting`,material:`bronze`,durationMs:32e3,cost:{copper:2,tin:1,coal:2},output:{bronzeBar:1},blurb:`Blend copper and tin into a harder bronze bar.`,unlockHint:`Craft a Copper Tool`},{actionId:`craftPot`,label:`Craft Pot`,verb:`shaping a pot`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:2},output:{pot:1},blurb:`Hammer copper into a simple vessel.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftLadle`,label:`Craft Ladle`,verb:`shaping a ladle`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:14e3,cost:{copperBar:1,stick:1},output:{ladle:1},blurb:`Rivet a small copper cup to a wooden handle.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftCopperPickaxe`,label:`Craft Copper Pickaxe`,verb:`smithing a copper pickaxe`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:24e3,cost:{copperBar:3,stick:1,flaxFiber:1},toolId:`copperPickaxe`,blurb:`A softer metal pick with better balance than stone.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperHatchet`,label:`Craft Copper Hatchet`,verb:`smithing a copper hatchet`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:22e3,cost:{copperBar:2,stick:1,flaxFiber:1},toolId:`copperHatchet`,blurb:`A compact copper chopping head lashed to a handle.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperKnife`,label:`Craft Copper Knife`,verb:`smithing a copper knife`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:1,stick:1,flaxFiber:1},toolId:`copperKnife`,blurb:`A sharper, longer-lasting knife for camp work.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftBronzePickaxe`,label:`Craft Bronze Pickaxe`,verb:`smithing a bronze pickaxe`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:3e4,cost:{bronzeBar:3,stick:1,flaxFiber:1},toolId:`bronzePickaxe`,blurb:`A sturdy bronze mining tool with a harder edge.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeHatchet`,label:`Craft Bronze Hatchet`,verb:`smithing a bronze hatchet`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:28e3,cost:{bronzeBar:2,stick:1,flaxFiber:1},toolId:`bronzeHatchet`,blurb:`A bronze chopping tool that holds its bite.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeKnife`,label:`Craft Bronze Knife`,verb:`smithing a bronze knife`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:22e3,cost:{bronzeBar:1,stick:1,flaxFiber:1},toolId:`bronzeKnife`,blurb:`A reliable bronze edge for finer butchering.`,unlockHint:`Smelt Bronze Bar`}],s=o.filter(e=>e.kind===`smelting`).map(e=>e.actionId),c=o.filter(e=>e.kind===`smithing`).map(e=>e.actionId);function l(e){return o.find(t=>t.actionId===e)}function u(e){return a.some(t=>t===e)}var d=[`copperNeedle`,`bronzeNeedle`],f=[{actionId:`retFlax`,label:`Ret Flax`,verb:`retting flax`,kind:`retting`,durationMs:6e4,cost:{flaxPlant:3},output:{rettedFlax:3},blurb:`Soak and wait out whole flax stalks until the fibers loosen from the woody stem.`,unlockHint:`Gather Flax Plant`,requiredSeenResources:[`flaxPlant`]},{actionId:`separateFlaxFiber`,label:`Separate Flax Fiber`,verb:`breaking flax`,kind:`fiber`,durationMs:3e4,cost:{rettedFlax:2},output:{flaxFiber:3},blurb:`Break, scrape, and comb retted stalks into clean flax fiber.`,unlockHint:`Ret Flax`,requiredSeenResources:[`rettedFlax`]},{actionId:`handSpinLinenThread`,label:`Hand Spin Linen Thread`,verb:`hand-spinning thread`,kind:`spinning`,durationMs:26e3,cost:{flaxFiber:1},output:{linenThread:1},blurb:`Twist clean flax fiber into usable linen thread by hand.`,unlockHint:`Separate Flax Fiber`,requiredSeenResources:[`flaxFiber`]},{actionId:`spinLinenThread`,label:`Spin Linen Thread`,verb:`spinning thread`,kind:`spinning`,durationMs:18e3,cost:{flaxFiber:5},output:{linenThread:5},blurb:`Use the spinning wheel to turn a batch of flax fiber into thread more quickly.`,unlockHint:`Build Primitive Spinning Wheel`,requiredBuildings:[`primitiveSpinningWheel`],requiredSeenResources:[`flaxFiber`]},{actionId:`weaveLinenCloth`,label:`Weave Linen Cloth`,verb:`weaving linen cloth`,kind:`weaving`,durationMs:36e3,cost:{linenThread:4},output:{linenCloth:1},blurb:`Work linen thread across the loom into a sturdy cloth panel.`,unlockHint:`Build Primitive Loom`,requiredBuildings:[`primitiveLoom`],requiredSeenResources:[`linenThread`]},{actionId:`craftCopperNeedle`,label:`Craft Copper Needle`,verb:`crafting a copper needle`,kind:`tooling`,durationMs:12e3,cost:{copperBar:1},output:{copperNeedle:1},blurb:`Draw a soft copper bar into a basic needle for stitching linen.`,unlockHint:`Smelt Copper Bar`,requiredSeenResources:[`copperBar`]},{actionId:`craftBronzeNeedle`,label:`Craft Bronze Needle`,verb:`crafting a bronze needle`,kind:`tooling`,durationMs:14e3,cost:{bronzeBar:1},output:{bronzeNeedle:1},blurb:`Shape a harder bronze needle for steadier sewing work.`,unlockHint:`Smelt Bronze Bar`,requiredSeenResources:[`bronzeBar`]},{actionId:`sewClothWrap`,label:`Sew Cloth Wrap`,verb:`sewing a cloth wrap`,kind:`sewing`,durationMs:14e3,cost:{linenCloth:1,linenThread:1},output:{clothWrap:1},blurb:`Hem a small linen wrap for tying and protecting loose goods.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...d]},{actionId:`sewLinenBandage`,label:`Sew Linen Bandage`,verb:`sewing a linen bandage`,kind:`sewing`,durationMs:12e3,cost:{linenCloth:1},output:{linenBandage:1},blurb:`Cut and stitch clean linen into simple bandage strips.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...d]},{actionId:`sewSimplePouch`,label:`Sew Simple Pouch`,verb:`sewing a simple pouch`,kind:`sewing`,durationMs:22e3,cost:{linenCloth:2,linenThread:2},output:{simplePouch:1},blurb:`Sew a small pouch with tied corners and a linen drawstring.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...d]},{actionId:`sewLinenHood`,label:`Sew Linen Hood`,verb:`sewing a linen hood`,kind:`sewing`,durationMs:24e3,cost:{linenCloth:2,linenThread:2},output:{linenHood:1},blurb:`Cut and sew a simple linen hood from woven cloth panels.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...d]},{actionId:`sewLinenShirt`,label:`Sew Linen Shirt`,verb:`sewing a linen shirt`,kind:`sewing`,durationMs:3e4,cost:{linenCloth:4,linenThread:3},output:{linenShirt:1},blurb:`Stitch linen panels into a simple shirt for future clothing systems.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...d]}],p=f.map(e=>e.actionId),m=x(`retting`),h=x(`fiber`),g=x(`spinning`),_=x(`weaving`),v=x(`tooling`),ee=x(`sewing`);function y(e){return f.find(t=>t.actionId===e)}function b(e){return f.some(t=>t.actionId===e)}function x(e){return f.filter(t=>t.kind===e).map(e=>e.actionId)}var S=[{id:`gatherSticks`,label:`Gather Sticks`,verb:`gathering sticks`,durationMs:7e3,blurb:`Slow, reliable foraging near camp.`},{id:`gatherStones`,label:`Gather Stones`,verb:`searching for stones`,durationMs:8500,blurb:`Cameron checks creek beds and exposed roots.`},{id:`gatherFlaxPlants`,label:`Gather Flax Plants`,verb:`cutting flax plants`,durationMs:11e3,blurb:`Cut whole flax stalks for later retting and fiber work.`},{id:`gatherFlaxFibers`,label:`Gather Flax Fibers`,verb:`pulling flax fibers`,durationMs:1e4,blurb:`Thin stalks stripped by hand for future craft.`},{id:`gatherMeadowIngredients`,label:`Gather Meadow Ingredients`,verb:`gathering meadow ingredients`,durationMs:12e3,blurb:`Search the meadow for herbs, flowers, roots, and small fruit.`},{id:`gatherForestIngredients`,label:`Gather Forest Forage`,verb:`gathering forest forage`,durationMs:14e3,blurb:`Search the forest floor for berries, herbs, nuts, fungus, and resin.`},{id:`gatherRiverIngredients`,label:`Gather River Forage`,verb:`gathering river forage`,durationMs:13500,blurb:`Search the riverbank for wetland herbs, roots, seeds, and fungus.`},{id:`gatherMineIngredients`,label:`Gather Mine Forage`,verb:`gathering mine forage`,durationMs:17e3,blurb:`Search the mine for cave herbs, fungus, roots, crystals, and lichens.`},{id:`gatherDesertIngredients`,label:`Gather Desert Forage`,verb:`gathering desert forage`,durationMs:18e3,blurb:`Search the desert scrub for hardy herbs, fruits, roots, flowers, and fungus.`},{id:`gatherSand`,label:`Gather Sand`,verb:`gathering sand`,durationMs:1e4,blurb:`Collect clean desert sand for furnace glasswork.`},{id:`mineCoal`,label:`Mine Coal`,verb:`mining coal`,durationMs:3e4,blurb:`Chip dark fuel from the mine wall.`},{id:`mineCopper`,label:`Mine Copper`,verb:`mining copper`,durationMs:3e4,blurb:`Break reddish ore from stone seams.`},{id:`mineTin`,label:`Mine Tin`,verb:`mining tin`,durationMs:3e4,blurb:`Work pale ore from fractured rock.`},{id:`fishRiver`,label:`Fishing River`,verb:`fishing the river`,durationMs:15e3,blurb:`Cast into the shallows for small river fish.`},{id:`gatherWater`,label:`Gather Water`,verb:`gathering water`,durationMs:9e3,blurb:`Carry usable river water back for camp cooking.`},{id:`craftLowestTool`,label:`Primitive Tools`,verb:`balancing tool stock`,durationMs:15e3,blurb:`Craft whichever primitive tool has the lowest current stock.`},{id:`craftBasket`,label:`Craft Basket`,verb:`crafting a basket`,durationMs:15e3,blurb:`Weave flax fibers around a simple stick frame.`},{id:`craftWoodenSpoon`,label:`Craft Wooden Spoon`,verb:`carving a wooden spoon`,durationMs:1e4,blurb:`Carve a small wooden spoon for eating hot camp stew.`},{id:`craftFishingPole`,label:`Craft Fishing Pole`,verb:`crafting a fishing pole`,durationMs:15e3,blurb:`Bind flax line to a flexible stick.`},{id:`craftWoodenBowl`,label:`Craft Wooden Bowl`,verb:`carving a wooden bowl`,durationMs:12e3,blurb:`Carve a simple camp bowl from usable wood.`},{id:`craftStoneKnife`,label:`Craft Stone Knife`,verb:`crafting a stone knife`,durationMs:15e3,blurb:`Shape a compact edge for hide work and close combat.`},{id:`craftStoneAxe`,label:`Craft Stone Hatchet`,verb:`crafting a stone hatchet`,durationMs:15e3,blurb:`Bind a chopping head to a short haft.`},{id:`craftStonePickAxe`,label:`Craft Stone Pick Axe`,verb:`crafting a stone pick axe`,durationMs:15e3,blurb:`Lash a pointed stone head to a sturdy handle.`},{id:`craftStoneSpear`,label:`Craft Stone Spear`,verb:`crafting a stone spear`,durationMs:15e3,blurb:`Lash a stone point to a balanced shaft.`},{id:`craftWoodenClub`,label:`Craft Wooden Club`,verb:`crafting a wooden club`,durationMs:16e3,blurb:`Shape hardwood into a heavier primitive weapon.`},{id:`craftWoodenTwoHandedClub`,label:`Craft Wooden 2H Club`,verb:`crafting a wooden two-handed club`,durationMs:18e3,blurb:`Shape a larger club for slower, stronger blows.`},{id:`craftWoodenSword`,label:`Craft Wooden Sword`,verb:`crafting a wooden sword`,durationMs:17e3,blurb:`Harden and bind a wooden blade for controlled combat.`},{id:`craftWoodenTwoHandedSword`,label:`Craft Wooden 2H Sword`,verb:`crafting a wooden two-handed sword`,durationMs:2e4,blurb:`Shape a long wooden blade that favors power over speed.`},{id:`craftShortBow`,label:`Craft Short Bow`,verb:`crafting a short bow`,durationMs:2e4,blurb:`Bend wood and flax fiber into a simple ranged weapon.`},{id:`craftWoodenTotem`,label:`Craft Wooden Totem`,verb:`carving a wooden totem`,durationMs:19e3,blurb:`Carve a wooden focus for steadier primitive combat.`},{id:`chopTrees`,label:`Chop Trees`,verb:`chopping trees`,durationMs:18e3,blurb:`The first real push beyond loose branches.`},{id:`huntSmallAnimals`,label:`Hunt Small Animals`,verb:`hunting small animals`,durationMs:28e3,blurb:`Bring back whole rabbits or squirrels for later work.`},{id:`butcherFish`,label:`Butcher Fish`,verb:`butchering fish`,durationMs:15e3,blurb:`Clean one carried fish into matching filets at half weight.`},{id:`butcherRabbit`,label:`Butcher Rabbit`,verb:`butchering a rabbit`,durationMs:18e3,blurb:`Break down a rabbit into useful parts.`},{id:`butcherSquirrel`,label:`Butcher Squirrel`,verb:`butchering a squirrel`,durationMs:14e3,blurb:`Break down a squirrel into useful parts.`},{id:`cookRabbitMeat`,label:`Cook Rabbit Meat`,verb:`cooking rabbit meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`cookSquirrelMeat`,label:`Cook Squirrel Meat`,verb:`cooking squirrel meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`tanHide`,label:`Tan Hide`,verb:`working hide`,durationMs:36e3,blurb:`Scrape, stretch, wait, repeat.`},{id:`craftLeatherBackpack`,label:`Craft Leather Backpack`,verb:`crafting a leather backpack`,durationMs:15e3,blurb:`Knot a crude leather sling pouch with a drawstring.`},...o.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...t.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...f.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb}))];function C(e){return S.find(t=>t.id===e)}var te=[{id:`fighter`,label:`Fighter`,weaponLabel:`Sword`,role:`A steady front-line duelist.`,range:`melee`,maxHp:34,maxMana:10},{id:`warrior`,label:`Warrior`,weaponLabel:`2H Sword`,role:`A slower heavy striker.`,range:`melee`,maxHp:38,maxMana:8},{id:`bruiser`,label:`Bruiser`,weaponLabel:`Club`,role:`A rugged close-range brawler.`,range:`melee`,maxHp:36,maxMana:8},{id:`crusher`,label:`Crusher`,weaponLabel:`2H Club`,role:`A heavy impact fighter.`,range:`melee`,maxHp:40,maxMana:6},{id:`archer`,label:`Archer`,weaponLabel:`Short Bow`,role:`A ranged skirmisher.`,range:`ranged`,maxHp:28,maxMana:12},{id:`shaman`,label:`Shaman`,weaponLabel:`Totem`,role:`A focus user prepared for future support magic.`,range:`focus`,maxHp:30,maxMana:30},{id:`mage`,label:`Mage`,weaponLabel:`Wand`,role:`A focused caster placeholder for future wand combat.`,range:`focus`,maxHp:24,maxMana:36},{id:`caster`,label:`Caster`,weaponLabel:`Staff`,role:`A long-form spellcaster placeholder for future staff combat.`,range:`focus`,maxHp:26,maxMana:40},{id:`rogue`,label:`Rogue`,weaponLabel:`Dagger`,role:`A fast close-range striker.`,range:`melee`,maxHp:30,maxMana:14}],ne={woodenSword:`fighter`,woodenTwoHandedSword:`warrior`,woodenClub:`bruiser`,woodenTwoHandedClub:`crusher`,shortBow:`archer`,woodenTotem:`shaman`,stoneKnife:`rogue`,stoneSpear:`warrior`},re=[{id:`goblin`,label:`Goblin`,blurb:`A small melee raider that closes distance and swings at nearby party members.`,glyph:`G`,maxHp:16,maxMana:0,damage:2,attackRange:1,actEveryMs:2200}],ie=[{id:`ruins`,label:`The Ruins`,blurb:`Broken stone lanes where the first hostile creatures test the camp's fighters.`,gridWidth:7,gridHeight:5,enemyIds:[`goblin`]}],ae=te.map(e=>e.id),oe=re.map(e=>e.id),se=ie.map(e=>e.id);function ce(e){return te.find(t=>t.id===e)??te[0]}function le(e){return re.find(t=>t.id===e)??re[0]}function ue(e){return ie.find(t=>t.id===e)??ie[0]}var de=[{id:`campfire`,name:`Campfire`,label:`Campfire`,requiredBuildingId:`campfire`,tags:[`primitive`,`stew`,`open-fire`],fuelMode:`existing-campfire`,description:`A simple fire ring that can hold one primitive cooking job at a time.`}],fe=[be({id:`rabbitStew`,name:`Rabbit Stew`,outputId:`rabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`dandelionGreens`,role:`plant`}],hunger:24,xpReward:220,tags:[`meat`,`starter`]}),be({id:`squirrelHerbStew`,name:`Squirrel Herb Stew`,outputId:`squirrelHerbStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`plantainLeaf`,role:`plant`},{id:`yarrow`,role:`seasoning`}],hunger:19,xpReward:240,tags:[`meat`,`herbal`]}),be({id:`rootStew`,name:`Root Stew`,outputId:`rootStew`,ingredients:[{id:`sunrootTubers`,role:`plant`},{id:`wildCarrot`,role:`plant`},{id:`clover`,role:`plant`}],hunger:18,xpReward:210,tags:[`meadow`,`vegetarian`,`roots`]}),be({id:`wildGarlicRabbitStew`,name:`Wild Garlic Rabbit Stew`,outputId:`wildGarlicRabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`wildGarlic`,role:`seasoning`},{id:`sorrel`,role:`plant`}],hunger:28,xpReward:275,levelRequirement:2,tags:[`meat`,`allium`,`sour`]}),be({id:`meadowStew`,name:`Meadow Stew`,outputId:`meadowStew`,ingredients:[{id:`dandelionGreens`,role:`plant`},{id:`clover`,role:`plant`},{id:`plantainLeaf`,role:`plant`},{id:`wildOnion`,role:`seasoning`},{id:`sunrootTubers`,role:`plant`}],hunger:22,xpReward:260,levelRequirement:2,tags:[`meadow`,`vegetarian`,`five-plant`]}),be({id:`mintedSquirrelStew`,name:`Minted Squirrel Stew`,outputId:`mintedSquirrelStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`mint`,role:`seasoning`},{id:`wildOnion`,role:`seasoning`}],hunger:22,xpReward:285,levelRequirement:3,tags:[`meat`,`aromatic`]}),...ye(`rabbitMeat`,`Rabbit`,[[`sorrel`,`Sorrel`,25],[`yarrow`,`Yarrow`,24],[`hearthcap`,`Hearthcap`,27]]),...ye(`squirrelMeat`,`Squirrel`,[[`wildGarlic`,`Wild Garlic`,22],[`fennel`,`Fennel`,21],[`hearthcap`,`Hearthcap`,23]])],pe=fe.map(e=>e.id);fe.filter(e=>e.tags.includes(`stew`)),fe.flatMap(e=>e.outputs.map(e=>e.resourceId));var me=fe.map(e=>({id:e.outputs[0].resourceId,label:e.name,group:`food`,blurb:xe(e),stackSize:20,weight:.8,value:Math.max(6,Math.round(e.xpReward/35)),rarity:e.levelRequirement>=3?`uncommon`:`common`,nutrition:e.nutrition,spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`prepared`,`stew`,...e.tags],compatibility:[`eat`,`serve`,`tavern`]}}));function he(e){return de.find(t=>t.id===e)}function ge(e){return fe.find(t=>t.id===e)}function _e(e){return e.ingredients.reduce((e,t)=>(t.resourceId&&t.consumed!==!1&&(e[t.resourceId]=(e[t.resourceId]??0)+t.amount),e),{})}function ve(e){return e.outputs.reduce((e,t)=>(e[t.resourceId]=(e[t.resourceId]??0)+t.amount,e),{})}function ye(e,t,n){return n.map(([n,r,i],a)=>be({id:`${n}${t}Stew`,name:`${r} ${t} Stew`,outputId:`${n}${t}Stew`,ingredients:[{id:e,role:`meat`},{id:n,role:`seasoning`},{id:a%2==0?`dandelionGreens`:`plantainLeaf`,role:`plant`}],hunger:i,xpReward:250+a*20,levelRequirement:2+a,tags:[`meat`,`generated`,`accent`]}))}function be(e){let t=[{resourceId:e.outputId,amount:1},{resourceId:`dirtyBowl`,amount:1}];return{id:e.id,name:e.name,station:`campfire`,cookTimeMs:e.cookTimeMs??24e3,ingredients:[{resourceId:`water`,amount:1,role:`liquid`},{resourceId:`woodenBowl`,amount:1,role:`vessel`},...e.ingredients.map(e=>({resourceId:e.id,amount:e.amount??1,role:e.role}))],outputs:t,xpReward:e.xpReward,levelRequirement:e.levelRequirement??1,tags:[`stew`,`primitive`,...e.tags??[]],nutrition:{hunger:e.hunger},failureChance:e.failureChance??.03,modifiers:[`quality-ready`,`season-ready`,`station-ready`]}}function xe(e){return e.tags.includes(`vegetarian`)?`A rough bowl of meadow plants simmered until soft enough to fill the belly.`:e.tags.includes(`aromatic`)||e.tags.includes(`accent`)?`A primitive stew carried by a strong meadow scent and small-game broth.`:`A simple campfire stew of water, gathered plants, and whatever meat the day allowed.`}var w=[{id:`stoneKnife`,label:`Stone Knife`,craftActionId:`craftStoneKnife`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A compact stone edge for butchering and close-quarters combat.`,maxDurability:18,roles:[`butchering`,`hunting`],roleTiers:{butchering:1},tier:`primitive`,weapon:{damage:2.2,speed:1.2,hands:1,range:`melee`},quickCraft:!0},{id:`stoneAxe`,label:`Stone Hatchet`,craftActionId:`craftStoneAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Heavy enough to bite into small trees.`,maxDurability:12,roles:[`woodcutting`],roleTiers:{woodcutting:1},tier:`primitive`,quickCraft:!0},{id:`stonePickAxe`,label:`Stone Pick Axe`,craftActionId:`craftStonePickAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A pointed stone head for breaking stubborn ground.`,maxDurability:12,roles:[`mining`],roleTiers:{mining:1},tier:`primitive`,quickCraft:!0},{id:`stoneSpear`,label:`Stone Spear`,craftActionId:`craftStoneSpear`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A reach weapon for rabbits and squirrels.`,maxDurability:10,roles:[`hunting`],tier:`primitive`,weapon:{damage:2.4,speed:.9,hands:2,range:`melee`},quickCraft:!0},{id:`woodenClub`,label:`Wooden Club`,craftActionId:`craftWoodenClub`,recipe:{wood:2},blurb:`A shaped hardwood weapon with more heft than loose branches.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3,speed:.9,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedClub`,label:`Wooden 2H Club`,craftActionId:`craftWoodenTwoHandedClub`,recipe:{wood:4},blurb:`A heavy two-handed cudgel for decisive primitive strikes.`,maxDurability:24,roles:[`hunting`],tier:`primitive`,weapon:{damage:4,speed:.75,hands:2,range:`melee`},quickCraft:!0},{id:`woodenSword`,label:`Wooden Sword`,craftActionId:`craftWoodenSword`,recipe:{wood:2,flaxFiber:1},blurb:`A hardened wooden blade for controlled early combat.`,maxDurability:20,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.4,speed:1,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedSword`,label:`Wooden 2H Sword`,craftActionId:`craftWoodenTwoHandedSword`,recipe:{wood:4,flaxFiber:2},blurb:`A long wooden blade that trades speed for stronger blows.`,maxDurability:26,roles:[`hunting`],tier:`primitive`,weapon:{damage:4.3,speed:.85,hands:2,range:`melee`},quickCraft:!0},{id:`shortBow`,label:`Short Bow`,craftActionId:`craftShortBow`,recipe:{wood:2,flaxFiber:3},blurb:`A simple bow that brings safer range to small-game hunts.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.8,speed:1.1,hands:2,range:`ranged`},quickCraft:!0},{id:`woodenTotem`,label:`Wooden Totem`,craftActionId:`craftWoodenTotem`,recipe:{wood:3,flaxFiber:2},blurb:`A carved focus that steadies the hand during primitive combat.`,maxDurability:22,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.2,speed:.8,hands:1,range:`focus`},quickCraft:!0},{id:`copperPickaxe`,label:`Copper Pickaxe`,recipe:{copperBar:3,stick:1,flaxFiber:1},blurb:`A softer metal pick with better balance than stone.`,maxDurability:24,roles:[`mining`],roleTiers:{mining:2},tier:`copper`},{id:`copperHatchet`,label:`Copper Hatchet`,recipe:{copperBar:2,stick:1,flaxFiber:1},blurb:`A compact copper chopping head lashed to a handle.`,maxDurability:22,roles:[`woodcutting`],roleTiers:{woodcutting:2},tier:`copper`},{id:`copperKnife`,label:`Copper Knife`,recipe:{copperBar:1,stick:1,flaxFiber:1},blurb:`A sharper, longer-lasting knife for camp work.`,maxDurability:30,roles:[`butchering`],roleTiers:{butchering:2},tier:`copper`},{id:`bronzePickaxe`,label:`Bronze Pickaxe`,recipe:{bronzeBar:3,stick:1,flaxFiber:1},blurb:`A sturdy bronze mining tool with a harder edge.`,maxDurability:42,roles:[`mining`],roleTiers:{mining:3},tier:`bronze`},{id:`bronzeHatchet`,label:`Bronze Hatchet`,recipe:{bronzeBar:2,stick:1,flaxFiber:1},blurb:`A bronze chopping tool that holds its bite.`,maxDurability:38,roles:[`woodcutting`],roleTiers:{woodcutting:3},tier:`bronze`},{id:`bronzeKnife`,label:`Bronze Knife`,recipe:{bronzeBar:1,stick:1,flaxFiber:1},blurb:`A reliable bronze edge for finer butchering.`,maxDurability:48,roles:[`butchering`],roleTiers:{butchering:3},tier:`bronze`},{id:`fishingPole`,label:`Fishing Pole`,craftActionId:`craftFishingPole`,recipe:{stick:1,flaxFiber:1},blurb:`A simple line and hook for working the river.`,maxDurability:16,roles:[`fishing`],roleTiers:{fishing:1},tier:`primitive`,quickCraft:!0},{id:`basket`,label:`Basket`,craftActionId:`craftBasket`,recipe:{stick:1,flaxFiber:3},blurb:`A one-hand woven carrier for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`,quickCraft:!0},{id:`leatherBackpack`,label:`Leather Backpack`,recipe:{leather:10},blurb:`A crude sling pouch for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`}],Se=w.filter(e=>!!(e.craftActionId&&e.quickCraft)),Ce=[{id:`campfire`,label:`Campfire`,recipe:{stick:8,stone:5},blurb:`A fixed fire ring for cooking meat.`},{id:`tanningRack`,label:`Tanning Rack`,recipe:{stick:6,wood:4,stone:2},blurb:`A rough frame for turning hide into leather.`},{id:`hideTent`,label:`Hide Tent`,recipe:{wood:5,hide:10},blurb:`A hide shelter for holding warmth at camp.`},{id:`crudeStoneFurnace`,label:`Stone Furnace`,recipe:{stone:16,stick:6,wood:4},blurb:`A low stone furnace hot enough for first smelting.`},{id:`primitiveSpinningWheel`,label:`Primitive Spinning Wheel`,recipe:{wood:8,stick:6,linenThread:2},blurb:`A simple frame, spindle, and wheel for turning flax fiber into thread faster.`},{id:`primitiveLoom`,label:`Primitive Loom`,recipe:{wood:10,stick:8,linenThread:4},blurb:`A wooden frame for stretching warp threads and weaving linen cloth.`}],we=[Fe(`wildGarlic`,`Wild Garlic`,`Sharp green shoots with a clean bite. Good for waking up thin broth.`,9,[`allium`,`pungent`,`meadow`]),Fe(`dandelionGreens`,`Dandelion Greens`,`Bitter young leaves that soften in hot water.`,13,[`bitter`,`leafy`,`meadow`]),Fe(`clover`,`Clover`,`Tender meadow clover with a mild grassy sweetness.`,11,[`leafy`,`mild`,`meadow`]),Ie(`chamomile`,`Chamomile`,`Small pale flowers with a warm apple scent.`,7,[`calming`,`floral`,`meadow`]),Ie(`yarrow`,`Yarrow`,`Feathery leaves and tight flower heads with a resin edge.`,6,[`bitter`,`medicinal`,`meadow`]),Fe(`wildOnion`,`Wild Onion`,`Slender onion bulbs and greens pulled from loose soil.`,8,[`allium`,`pungent`,`meadow`]),Fe(`sorrel`,`Sorrel`,`Sour leaves that cut through fatty meat.`,8,[`sour`,`leafy`,`meadow`]),Fe(`plantainLeaf`,`Plantain Leaf`,`Broad, sturdy leaves that hold up in a pot.`,10,[`leafy`,`earthy`,`meadow`]),Fe(`mint`,`Mint`,`Cool bright leaves from damp meadow edges.`,6,[`cooling`,`aromatic`,`meadow`]),Be(`fennel`,`Fennel`,`Fine fronds with a sweet anise scent.`,5,[`aromatic`,`sweet`,`meadow`]),Ie(`lavender`,`Lavender`,`Purple flower spikes with a strong dry perfume.`,4,[`aromatic`,`floral`,`meadow`]),Be(`hearthcap`,`Hearthcap`,`Russet caps with a peppery smell when warmed by the fire.`,3,[`peppery`,`savory`,`meadow`]),Re(`sunrootTubers`,`Sunroot Tubers`,`Knobbly tubers with a nutty bite after boiling.`,6,[`starchy`,`earthy`,`meadow`]),ze(`wildCarrot`,`Wild Carrot`,`Thin pale roots with more scent than flesh.`,5,[`root`,`sweet`,`meadow`]),Le(`blueberries`,`Blueberries`,`Small blue fruit from low bushes along the meadow edge.`,7,[`fruit`,`sweet`,`meadow`]),Le(`strawberries`,`Strawberries`,`Tiny red berries hiding under leaves.`,5,[`fruit`,`sweet`,`meadow`]),Ie(`elderflowers`,`Elderflowers`,`Creamy flower clusters with a clean green scent.`,4,[`floral`,`sweet`,`meadow`]),Le(`roseHips`,`Rose Hips`,`Tart red hips that stain the fingers.`,4,[`tart`,`fruit`,`meadow`])],Te=[T(`blackberries`,`Blackberries`,`berry`,10,[`fruit`,`sweet`]),T(`juniperBerries`,`Juniper Berries`,`berry`,6,[`resinous`,`aromatic`]),T(`pineNeedles`,`Pine Needles`,`seasoning`,10,[`resinous`,`evergreen`]),T(`birchBark`,`Birch Bark`,`seasoning`,8,[`woody`,`bitter`]),T(`acorns`,`Acorns`,`vegetable`,9,[`nut`,`earthy`]),T(`hazelnuts`,`Hazelnuts`,`vegetable`,7,[`nut`,`rich`]),T(`nettles`,`Nettles`,`herb`,9,[`leafy`,`stinging`]),T(`mossHerbs`,`Moss Herbs`,`herb`,8,[`moss`,`damp`]),T(`bloodleaf`,`Bloodleaf`,`herb`,4,[`medicinal`,`red`]),T(`shadowThyme`,`Shadow Thyme`,`seasoning`,5,[`aromatic`,`shade`]),T(`wildSage`,`Wild Sage`,`seasoning`,6,[`aromatic`,`savory`]),T(`crowcapMushrooms`,`Crowcap Mushrooms`,`herb`,5,[`fungus`,`dark`]),T(`emberFern`,`Ember Fern`,`herb`,4,[`warm`,`fern`]),T(`treeSapResin`,`Tree Sap Resin`,`seasoning`,5,[`resin`,`sticky`])],Ee=[E(`watercress`,`Watercress`,`vegetable`,11,[`leafy`,`peppery`]),E(`riverMint`,`River Mint`,`herb`,8,[`cooling`,`aromatic`]),E(`cattailShoots`,`Cattail Shoots`,`vegetable`,9,[`shoot`,`marsh`]),E(`reedGrass`,`Reed Grass`,`herb`,10,[`grass`,`fibrous`]),E(`marshParsley`,`Marsh Parsley`,`seasoning`,7,[`aromatic`,`green`]),E(`frogroot`,`Frogroot`,`root`,6,[`root`,`marsh`]),E(`lotusSeeds`,`Lotus Seeds`,`seasoning`,5,[`seed`,`calming`]),E(`swampOnion`,`Swamp Onion`,`vegetable`,7,[`allium`,`pungent`]),E(`mudGinger`,`Mud Ginger`,`root`,5,[`warming`,`spice`]),E(`algaeClumps`,`Algae Clumps`,`herb`,9,[`algae`,`wet`]),E(`riverKelp`,`River Kelp`,`vegetable`,6,[`kelp`,`briny`]),E(`cranberries`,`Cranberries`,`berry`,5,[`fruit`,`tart`]),E(`wildRice`,`Wild Rice`,`vegetable`,4,[`grain`,`marsh`]),E(`silverleafHerb`,`Silverleaf Herb`,`herb`,4,[`mana`,`silver`]),E(`driftwoodFungus`,`Driftwood Fungus`,`herb`,5,[`fungus`,`wood`])],De=[D(`glowcaps`,`Glowcaps`,`herb`,6,[`fungus`,`glowing`]),D(`crystalMoss`,`Crystal Moss`,`herb`,5,[`moss`,`mineral`]),D(`stoneTruffle`,`Stone Truffle`,`root`,5,[`fungus`,`earthy`]),D(`batMint`,`Bat Mint`,`herb`,7,[`cooling`,`cave`]),D(`sulfurHerb`,`Sulfur Herb`,`herb`,5,[`sulfur`,`sharp`]),D(`ironroot`,`Ironroot`,`root`,6,[`root`,`mineral`]),D(`deepFungus`,`Deep Fungus`,`herb`,6,[`fungus`,`deep`]),D(`blindrootTubers`,`Blindroot Tubers`,`root`,5,[`tuber`,`dark`]),D(`caveGarlic`,`Cave Garlic`,`vegetable`,6,[`allium`,`pungent`]),D(`saltCrystals`,`Salt Crystals`,`seasoning`,7,[`salt`,`mineral`]),D(`mineralLichen`,`Mineral Lichen`,`herb`,7,[`lichen`,`mineral`]),D(`ashCaps`,`Ash Caps`,`herb`,5,[`fungus`,`ash`]),D(`ghostMushrooms`,`Ghost Mushrooms`,`herb`,4,[`fungus`,`pale`]),D(`emberSpores`,`Ember Spores`,`seasoning`,4,[`spore`,`warm`])],Oe=[O(`pricklyPear`,`Prickly Pear`,`berry`,9,[`fruit`,`cactus`]),O(`agaveHearts`,`Agave Hearts`,`vegetable`,7,[`sweet`,`succulent`]),O(`desertSage`,`Desert Sage`,`seasoning`,7,[`aromatic`,`dry`]),O(`sandThyme`,`Sand Thyme`,`seasoning`,6,[`aromatic`,`dry`]),O(`sunleafHerb`,`Sunleaf Herb`,`herb`,6,[`sun`,`leafy`]),O(`dustMint`,`Dust Mint`,`herb`,6,[`cooling`,`dust`]),O(`aloeLeaves`,`Aloe Leaves`,`herb`,8,[`succulent`,`soothing`]),O(`dryrootTubers`,`Dryroot Tubers`,`root`,7,[`tuber`,`dry`]),O(`fireBlossom`,`Fire Blossom`,`flower`,4,[`flower`,`warm`]),O(`saltbrush`,`Saltbrush`,`herb`,7,[`salty`,`brush`]),O(`bitterYucca`,`Bitter Yucca`,`vegetable`,6,[`bitter`,`succulent`]),O(`cactusFruit`,`Cactus Fruit`,`berry`,8,[`fruit`,`cactus`]),O(`redNeedleHerb`,`Red Needle Herb`,`herb`,5,[`needle`,`red`]),O(`scorchleaf`,`Scorchleaf`,`herb`,4,[`heat`,`leafy`]),O(`sandOnion`,`Sand Onion`,`vegetable`,6,[`allium`,`pungent`]),O(`desertLavender`,`Desert Lavender`,`flower`,5,[`floral`,`aromatic`]),O(`duneFennel`,`Dune Fennel`,`seasoning`,5,[`aromatic`,`sweet`]),O(`ironThornPods`,`Iron Thorn Pods`,`vegetable`,4,[`pod`,`thorn`]),O(`wildMesquiteBeans`,`Wild Mesquite Beans`,`vegetable`,6,[`bean`,`sweet`]),O(`sunbloomPetals`,`Sunbloom Petals`,`flower`,4,[`floral`,`sun`]),O(`sandcaps`,`Sandcaps`,`herb`,5,[`fungus`,`sand`]),O(`dustmorels`,`Dustmorels`,`herb`,4,[`fungus`,`dust`]),O(`drygillMushrooms`,`Drygill Mushrooms`,`herb`,4,[`fungus`,`dry`]),O(`suncrackFungus`,`Suncrack Fungus`,`herb`,3,[`fungus`,`sun`]),O(`cavePuffballs`,`Cave Puffballs`,`herb`,4,[`fungus`,`puffball`]),O(`bonecapMushrooms`,`Bonecap Mushrooms`,`herb`,3,[`fungus`,`bone`])],ke=[...we,...Te,...Ee,...De,...Oe];we.map(e=>e.id),Te.map(e=>e.id),Ee.map(e=>e.id),De.map(e=>e.id),Oe.map(e=>e.id);var Ae={meadow:Ne(`meadow`,`Meadow Ingredients`,we,[`spring`,`summer`,`autumn-ready`],[`meadow`,`grassland`,`edge`]),forest:Ne(`forest`,`Forest Forage`,Te,[`spring`,`summer`,`autumn-ready`],[`forest`,`canopy`,`old-growth`]),river:Ne(`river`,`River Forage`,Ee,[`spring`,`summer`,`wetland`],[`river`,`marsh`,`bank`]),mine:Ne(`mine`,`Mine Forage`,De,[`year-round`,`underground`],[`mine`,`cavern`,`mineral`]),desert:Ne(`desert`,`Desert Forage`,Oe,[`dry-season`,`sun-baked`],[`desert`,`dune`,`scrub`])},je=ke.map(e=>({id:e.id,label:e.displayName,group:`ingredients`,blurb:e.description,stackSize:99,weight:Je(e.category),value:e.value,rarity:e.rarity,nutrition:e.nutrition,spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:e.category,tags:e.tags,compatibility:Ye(e.category,e.tags)}}));function Me(e){return Ae[e]}function Ne(e,t,n,r,i){return{locationId:e,label:t,categories:Array.from(new Set(n.map(e=>e.category))),seasonalTags:r,biomeTags:i,entries:n.map(e=>({id:e.id,category:e.category,weight:e.gatherWeight,minAmount:Ke(e.category),maxAmount:qe(e.category),gatherTimeModifier:e.gatherTimeModifier,tags:e.tags,rarity:e.rarity}))}}function T(e,t,n,r,i){return Pe(`forest`,`forest`,e,t,n,r,i)}function E(e,t,n,r,i){return Pe(`river`,`riverbank`,e,t,n,r,i)}function D(e,t,n,r,i){return Pe(`mine`,`mine`,e,t,n,r,i)}function O(e,t,n,r,i){return Pe(`desert`,`desert`,e,t,n,r,i)}function Pe(e,t,n,r,i,a,o){let s=Ve(a);return{id:n,displayName:r,category:i,description:`${r} gathered from the ${t} for cooking, brewing, and camp experiments.`,gatherWeight:a,gatherTimeModifier:He(i)*Ue(e),tags:Array.from(new Set([...o,e,`alchemy`])),value:We(i,s),rarity:s,nutrition:Ge(i)}}function Fe(e,t,n,r,i){return{id:e,displayName:t,category:`herb`,description:n,gatherWeight:r,gatherTimeModifier:1,tags:i,value:2,rarity:r<=6?`uncommon`:`common`,nutrition:{hunger:1}}}function Ie(e,t,n,r,i){return{id:e,displayName:t,category:`flower`,description:n,gatherWeight:r,gatherTimeModifier:1.08,tags:i,value:2,rarity:r<=4?`uncommon`:`common`,nutrition:{hunger:1}}}function Le(e,t,n,r,i){return{id:e,displayName:t,category:`berry`,description:n,gatherWeight:r,gatherTimeModifier:1.04,tags:i,value:3,rarity:r<=4?`uncommon`:`common`,nutrition:{hunger:2,hydration:1}}}function Re(e,t,n,r,i){return{id:e,displayName:t,category:`root`,description:n,gatherWeight:r,gatherTimeModifier:1.18,tags:i,value:4,rarity:`uncommon`,nutrition:{hunger:4}}}function ze(e,t,n,r,i){return{id:e,displayName:t,category:`vegetable`,description:n,gatherWeight:r,gatherTimeModifier:1.14,tags:i,value:4,rarity:`uncommon`,nutrition:{hunger:3}}}function Be(e,t,n,r,i){return{id:e,displayName:t,category:`seasoning`,description:n,gatherWeight:r,gatherTimeModifier:1.2,tags:i,value:5,rarity:`rare`,nutrition:{hunger:1}}}function Ve(e){return e<=3?`rare`:e<=6?`uncommon`:`common`}function He(e){switch(e){case`flower`:return 1.08;case`root`:return 1.18;case`vegetable`:return 1.14;case`seasoning`:return 1.2;case`berry`:return 1.04;default:return 1}}function Ue(e){switch(e){case`forest`:return 1.08;case`river`:return 1.06;case`mine`:return 1.18;case`desert`:return 1.16;default:return 1}}function We(e,t){let n=t===`rare`?3:+(t===`uncommon`);switch(e){case`root`:case`vegetable`:return 4+n;case`seasoning`:return 5+n;case`berry`:return 3+n;default:return 2+n}}function Ge(e){switch(e){case`berry`:return{hunger:2,hydration:1};case`root`:return{hunger:4};case`vegetable`:return{hunger:3};default:return{hunger:1}}}function Ke(e){return e===`berry`?2:1}function qe(e){switch(e){case`berry`:return 4;case`root`:case`vegetable`:return 2;default:return 3}}function Je(e){switch(e){case`root`:case`vegetable`:return .4;case`berry`:return .1;default:return .1}}function Ye(e,t){let n=[`stew`,`campfire`];return(e===`berry`||t.includes(`sweet`))&&n.push(`preserve`,`brew`),(e===`seasoning`||t.includes(`aromatic`))&&n.push(`seasoning`),(e===`root`||e===`vegetable`)&&n.push(`hearty-stew`),t.includes(`alchemy`)&&!n.includes(`brew`)&&n.push(`brew`),n}var Xe=[{id:`stick`,label:`Stick`,group:`resources`,blurb:`Dry kindling and crude handles.`},{id:`stone`,label:`Stone`,group:`resources`,blurb:`Weight, edge, and spark.`},{id:`flaxPlant`,label:`Flax Plant`,group:`resources`,blurb:`Fresh flax stalks that need retting before useful fiber can be combed free.`},{id:`rettedFlax`,label:`Retted Flax`,group:`resources`,blurb:`Soaked and loosened flax stems ready for breaking and combing.`},{id:`flaxFiber`,label:`Flax Fiber`,group:`resources`,blurb:`Pale plant fiber for future cordage and cloth.`},{id:`linenThread`,label:`Linen Thread`,group:`crafted`,blurb:`Twisted flax fiber ready for weaving, stitching, and more precise craft.`},{id:`linenCloth`,label:`Linen Cloth`,group:`crafted`,blurb:`Woven linen panels ready for sewing into useful camp goods.`},{id:`wood`,label:`Wood`,group:`resources`,blurb:`Usable lengths from felled trees.`},{id:`woodenBowl`,label:`Wooden Bowl`,group:`utensils`,blurb:`A hand-carved wooden bowl for simple camp meals.`,stackSize:20,weight:.5,value:3,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`vessel`,`primitive`],compatibility:[`stew`]}},{id:`coal`,label:`Coal`,group:`resources`,blurb:`Dark fuel chipped from the mine.`},{id:`copper`,label:`Copper`,group:`resources`,blurb:`Soft reddish ore for future metalwork.`},{id:`tin`,label:`Tin`,group:`resources`,blurb:`Pale ore that will matter once bronze is possible.`},{id:`sand`,label:`Sand`,group:`resources`,blurb:`Clean desert sand ready for furnace glasswork.`,stackSize:99,weight:.2,value:1,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`copperBar`,label:`Copper Bar`,group:`crafted`,blurb:`A worked bar ready for first metal tools.`},{id:`bronzeBar`,label:`Bronze Bar`,group:`crafted`,blurb:`A harder alloy bar for sturdier tools.`},{id:`copperNeedle`,label:`Copper Needle`,group:`crafted`,blurb:`A simple metal needle for first linen sewing.`},{id:`bronzeNeedle`,label:`Bronze Needle`,group:`crafted`,blurb:`A stronger needle for steady linen sewing work.`},{id:`clothWrap`,label:`Cloth Wrap`,group:`crafted`,blurb:`A simple folded linen wrap for bundling small supplies.`},{id:`linenBandage`,label:`Linen Bandage`,group:`crafted`,blurb:`Clean linen strips prepared for future medical use.`},{id:`simplePouch`,label:`Simple Pouch`,group:`crafted`,blurb:`A small sewn linen pouch for organizing camp goods.`},{id:`linenHood`,label:`Linen Hood`,group:`crafted`,blurb:`A simple sewn hood for future clothing systems.`},{id:`linenShirt`,label:`Linen Shirt`,group:`crafted`,blurb:`A plain linen shirt, ready for later equipment and quality systems.`},{id:`pot`,label:`Pot`,group:`crafted`,blurb:`A simple worked vessel for holding heat and liquid.`},{id:`ladle`,label:`Ladle`,group:`crafted`,blurb:`A small handled tool for moving hot metal safely.`},{id:`glassVial`,label:`Glass Vial`,group:`crafted`,blurb:`A small fired vessel for careful alchemy work.`,stackSize:50,weight:.1,value:4,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`healthPotion`,label:`Health Potion`,group:`liquids`,blurb:`A red meadow brew prepared for future healing systems.`,stackSize:20,weight:.2,value:12,rarity:`uncommon`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`manaPotion`,label:`Mana Potion`,group:`liquids`,blurb:`A blue river brew prepared for future mana recovery systems.`,stackSize:20,weight:.2,value:12,rarity:`uncommon`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1}},{id:`water`,label:`Water`,group:`liquids`,blurb:`Clean enough river water stored for camp cooking.`,stackSize:50,weight:1,value:1,rarity:`common`,nutrition:{hydration:8},spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`water`,`liquid`,`stew-base`],compatibility:[`stew`,`brew`]}},{id:`dirtyBowl`,label:`Dirty Bowl`,group:`utensils`,blurb:`A used bowl with stew clinging to the inside. Washing can come later.`,stackSize:20,weight:.5,value:1,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`dirty`,`reuse-hook`],compatibility:[`washing`]}},{id:`woodenSpoon`,label:`Wooden Spoon`,group:`utensils`,blurb:`A small carved wooden spoon for eating hot stew without burning fingers.`,stackSize:20,weight:.2,value:2,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`spoon`,`utensil`,`primitive`],compatibility:[`eat-stew`]}},{id:`minnow`,label:`Minnow`,group:`fish`,blurb:`Tiny river fish, quick to smoke or stew.`},{id:`stoneLoach`,label:`Stone Loach`,group:`fish`,blurb:`Bottom-feeding fish from cold stones.`},{id:`mudskipper`,label:`Mudskipper`,group:`fish`,blurb:`A stubborn shore fish pulled from muddy shallows.`},{id:`brookStickleback`,label:`Brook Stickleback`,group:`fish`,blurb:`Small, sharp-backed fish from fast water.`},{id:`pebblePerch`,label:`Pebble Perch`,group:`fish`,blurb:`A broad little perch hiding under river stones.`},{id:`minnowFilet`,label:`Minnow Filet`,group:`fish`,blurb:`Cleaned minnow meat, lighter after butchering.`},{id:`stoneLoachFilet`,label:`Stone Loach Filet`,group:`fish`,blurb:`Cleaned stone loach meat, lighter after butchering.`},{id:`mudskipperFilet`,label:`Mudskipper Filet`,group:`fish`,blurb:`Cleaned mudskipper meat, lighter after butchering.`},{id:`brookSticklebackFilet`,label:`Brook Stickleback Filet`,group:`fish`,blurb:`Cleaned brook stickleback meat, lighter after butchering.`},{id:`pebblePerchFilet`,label:`Pebble Perch Filet`,group:`fish`,blurb:`Cleaned pebble perch meat, lighter after butchering.`},{id:`rabbit`,label:`Rabbit`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`squirrel`,label:`Squirrel`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`rabbitMeat`,label:`Rabbit Meat`,group:`hunted`,blurb:`Fresh rabbit meat that wants fire soon.`,weight:.5,value:4,rarity:`common`,nutrition:{hunger:8},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`rabbit`],compatibility:[`stew`,`roast`]}},{id:`squirrelMeat`,label:`Squirrel Meat`,group:`hunted`,blurb:`Fresh squirrel meat that wants fire soon.`,weight:.4,value:3,rarity:`common`,nutrition:{hunger:6},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`squirrel`],compatibility:[`stew`,`roast`]}},{id:`cookedRabbitMeat`,label:`Cooked Rabbit Meat`,group:`crafted`,blurb:`A small cooked rabbit ration.`,weight:.5,value:5,rarity:`common`,nutrition:{hunger:12},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`rabbit`],compatibility:[`eat`,`stew-addition`]}},{id:`cookedSquirrelMeat`,label:`Cooked Squirrel Meat`,group:`crafted`,blurb:`A small cooked squirrel ration.`,weight:.4,value:4,rarity:`common`,nutrition:{hunger:9},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`squirrel`],compatibility:[`eat`,`stew-addition`]}},{id:`hide`,label:`Hide`,group:`resources`,blurb:`Rough animal hide, ready for scraping.`},{id:`bone`,label:`Bone`,group:`resources`,blurb:`Hard scraps for later craft.`},{id:`leather`,label:`Leather`,group:`crafted`,blurb:`Worked hide for future bags and armor.`},...je,...me],k=Xe.map(e=>e.id),Ze=[`stick`,`stone`];Xe.filter(e=>!!e.cooking?.ingredientCategory).map(e=>e.id);var Qe=Xe.filter(e=>(e.nutrition?.hunger??0)>0).map(e=>e.id),$e=[`minnow`,`stoneLoach`,`mudskipper`,`brookStickleback`,`pebblePerch`],et=[`minnowFilet`,`stoneLoachFilet`,`mudskipperFilet`,`brookSticklebackFilet`,`pebblePerchFilet`],tt={minnow:`minnowFilet`,stoneLoach:`stoneLoachFilet`,mudskipper:`mudskipperFilet`,brookStickleback:`brookSticklebackFilet`,pebblePerch:`pebblePerchFilet`},nt=[...$e,`rabbit`,`squirrel`],rt=[...$e,...et,`rabbit`,`squirrel`];function it(e){return rt.includes(e)}function at(e){return nt.includes(e)}function ot(e){return Qe.includes(e)}function A(e,t){let n=Math.max(0,Number.isFinite(t)?t:0);return it(e)?Math.round(n*10)/10:Math.floor(n)}function st(e,t){let n=A(e,t);return it(e)?lt(n):`${n}`}function j(e){return ct(e)?.label??e}function ct(e){return Xe.find(t=>t.id===e)}function lt(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}var ut=1;function dt(){return ut}function ft(e){return ut=e===10||e===100?e:1,ut}function pt(e){return e*ut}function mt(e){return ut===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,(t??0)*ut]))}function ht(e){return ut===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Math.max(0,Math.floor((t??0)*ut))]))}var gt=1e3,_t=[{id:`foraging`,label:`Foraging`,description:`Gathering loose food and camp materials.`},{id:`mining`,label:`Mining`,description:`Breaking stone for ore and fuel.`},{id:`fishing`,label:`Fishing`,description:`Catching river fish.`},{id:`woodcutting`,label:`Woodcutting`,description:`Chopping trees into useful wood.`},{id:`hunting`,label:`Hunting`,description:`Tracking and taking small animals.`},{id:`crafting`,label:`Crafting`,description:`Making tools and useful camp goods.`},{id:`smithing`,label:`Smithing`,description:`Smelting ore and shaping early metalwork.`},{id:`alchemy`,label:`Alchemy`,description:`Firing vials and brewing experimental potions.`},{id:`textiles`,label:`Tailoring`,description:`Retting flax, spinning thread, weaving cloth, and sewing goods.`},{id:`butchering`,label:`Butchering`,description:`Breaking animals and fish into usable parts.`},{id:`cooking`,label:`Cooking`,description:`Preparing food over fire.`},{id:`leatherworking`,label:`Leatherworking`,description:`Turning hide into leather.`},{id:`construction`,label:`Construction`,description:`Building and improving camp structures.`},{id:`agility`,label:`Agility`,description:`Moving between camp and wilderness locations.`}],vt=_t.map(e=>e.id),yt={gatherSticks:{skillId:`foraging`,xp:70},gatherStones:{skillId:`foraging`,xp:85},gatherFlaxPlants:{skillId:`foraging`,xp:110},gatherFlaxFibers:{skillId:`foraging`,xp:100},gatherMeadowIngredients:{skillId:`foraging`,xp:120},gatherForestIngredients:{skillId:`foraging`,xp:140},gatherRiverIngredients:{skillId:`foraging`,xp:135},gatherMineIngredients:{skillId:`foraging`,xp:170},gatherDesertIngredients:{skillId:`foraging`,xp:180},gatherSand:{skillId:`foraging`,xp:100},gatherWater:{skillId:`foraging`,xp:90},mineCoal:{skillId:`mining`,xp:360},mineCopper:{skillId:`mining`,xp:360},mineTin:{skillId:`mining`,xp:360},fishRiver:{skillId:`fishing`,xp:180},craftLowestTool:{skillId:`crafting`,xp:150},craftBasket:{skillId:`crafting`,xp:150},craftWoodenSpoon:{skillId:`crafting`,xp:100},craftFishingPole:{skillId:`crafting`,xp:150},craftWoodenBowl:{skillId:`crafting`,xp:120},craftStoneKnife:{skillId:`crafting`,xp:150},craftStoneAxe:{skillId:`crafting`,xp:170},craftStonePickAxe:{skillId:`crafting`,xp:180},craftStoneSpear:{skillId:`crafting`,xp:180},craftWoodenSword:{skillId:`crafting`,xp:200},craftWoodenTwoHandedSword:{skillId:`crafting`,xp:230},craftWoodenClub:{skillId:`crafting`,xp:180},craftWoodenTwoHandedClub:{skillId:`crafting`,xp:210},craftShortBow:{skillId:`crafting`,xp:220},craftWoodenTotem:{skillId:`crafting`,xp:220},chopTrees:{skillId:`woodcutting`,xp:220},huntSmallAnimals:{skillId:`hunting`,xp:340},butcherFish:{skillId:`butchering`,xp:150},butcherRabbit:{skillId:`butchering`,xp:220},butcherSquirrel:{skillId:`butchering`,xp:170},cookRabbitMeat:{skillId:`cooking`,xp:160},cookSquirrelMeat:{skillId:`cooking`,xp:160},tanHide:{skillId:`leatherworking`,xp:430},craftLeatherBackpack:{skillId:`leatherworking`,xp:900},retFlax:{skillId:`textiles`,xp:420},separateFlaxFiber:{skillId:`textiles`,xp:260},handSpinLinenThread:{skillId:`textiles`,xp:190},spinLinenThread:{skillId:`textiles`,xp:420},weaveLinenCloth:{skillId:`textiles`,xp:520},craftCopperNeedle:{skillId:`smithing`,xp:120},craftBronzeNeedle:{skillId:`smithing`,xp:150},sewClothWrap:{skillId:`textiles`,xp:180},sewLinenBandage:{skillId:`textiles`,xp:150},sewSimplePouch:{skillId:`textiles`,xp:260},sewLinenHood:{skillId:`textiles`,xp:300},sewLinenShirt:{skillId:`textiles`,xp:420},smeltCopperBar:{skillId:`smithing`,xp:260},smeltBronzeBar:{skillId:`smithing`,xp:420},craftPot:{skillId:`smithing`,xp:220},craftLadle:{skillId:`smithing`,xp:180},craftCopperPickaxe:{skillId:`smithing`,xp:320},craftCopperHatchet:{skillId:`smithing`,xp:280},craftCopperKnife:{skillId:`smithing`,xp:220},craftBronzePickaxe:{skillId:`smithing`,xp:500},craftBronzeHatchet:{skillId:`smithing`,xp:440},craftBronzeKnife:{skillId:`smithing`,xp:340},craftGlassVial:{skillId:`alchemy`,xp:180},brewHealthPotion:{skillId:`alchemy`,xp:320},brewManaPotion:{skillId:`alchemy`,xp:320}},bt={campfire:80,tanningRack:320,hideTent:450,crudeStoneFurnace:520,primitiveSpinningWheel:360,primitiveLoom:480};function xt(){return Object.fromEntries(vt.map(e=>[e,Lt()]))}function St(e){let t=xt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of vt)t[e]=Rt(n[e]);return t}function Ct(e){return vt.some(t=>t===e)}function wt(e){return _t.find(t=>t.id===e)??_t[0]}function M(e){let t=Ut(e,1,gt);return 50*(t-1)*t*(2*t-1)/6}function Tt(e){return Vt(e.prestige)}function Et(e){let t=Tt(e),n=e.level>=t,r=M(e.level),i=e.level>=1e3?r:M(e.level+1),a=Math.max(0,i-r),o=n?a:Math.max(0,Math.min(e.xp-r,a));return{cap:t,currentLevelXp:r,nextLevelXp:i,xpIntoLevel:o,xpForLevel:a,ratio:a<=0?1:o/a,atCap:n,canPrestige:Dt(e)}}function Dt(e){let t=Tt(e);return t<1e3&&e.level>=t}function Ot(e,t,n=Date.now()){Ht(e);let r=e.skills[t];return Dt(r)?(r.prestige=Ut(r.prestige+1,0,9),r.level=1,r.xp=0,e.updatedAt=n,e.lastSimulatedAt=n,!0):!1}function kt(e,t,n=Date.now()){let r=yt[t];Nt(e,r.skillId,r.xp,n)}function At(e,t,n=Date.now()){Nt(e,`construction`,bt[t],n)}function jt(e,t,n=Date.now()){t<=0||Nt(e,`agility`,Math.max(1,Math.round(t/1e3*2)),n)}function Mt(e,t,n=Date.now()){Nt(e,`cooking`,t,n)}function Nt(e,t,n,r=Date.now()){let i=Math.max(0,Math.floor(pt(n)));if(i<=0)return;Ht(e);let a=e.skills[t],o=Tt(a);a.totalXp+=i,a.xp=Math.min(M(o),a.xp+i),a.level=Bt(a.xp,o),e.updatedAt=r,e.lastSimulatedAt=r}function Pt(e){return yt[e].skillId}function Ft(e){return pt(yt[e].xp)}function It(e){return pt(bt[e])}function N(e){let t=Math.max(0,e);return t>=1e9?`${Gt(t/1e9)}B`:t>=1e6?`${Gt(t/1e6)}M`:t>=1e3?`${Gt(t/1e3)}K`:Math.round(t).toLocaleString(`en-US`)}function Lt(){return{level:1,xp:0,totalXp:0,prestige:0,bonuses:[]}}function Rt(e){if(!e||typeof e!=`object`)return Lt();let t=Ut(e.prestige,0,9),n=Vt(t),r=Wt(e.xp,0,M(n)),i=Math.max(r,Math.max(0,Math.floor(Number(e.totalXp??0))));return{level:Bt(r,n),xp:r,totalXp:i,prestige:t,bonuses:zt(e.bonuses)}}function zt(e){return Array.isArray(e)?e.filter(e=>{if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.id==`string`&&typeof t.label==`string`}):[]}function Bt(e,t){let n=1;for(;n<t&&e>=M(n+1);)n+=1;return n}function Vt(e){let t=Ut(e,0,9);return Math.min(gt,(t+1)*100)}function Ht(e){e.skills=St(e.skills)}function Ut(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Wt(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Gt(e){return e.toFixed(2).replace(/\.?0+$/,``)}function Kt(){return Object.fromEntries(k.map(e=>[e,0]))}function qt(){return Object.fromEntries(k.map(e=>[e,0]))}function Jt(){return Object.fromEntries(w.map(e=>[e.id,{owned:!1,durability:0,quantity:0}]))}function Yt(){return{campfire:0,tanningRack:0,hideTent:0,crudeStoneFurnace:0,primitiveSpinningWheel:0,primitiveLoom:0}}function Xt(e=Date.now()){return{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:e,updatedAt:e}}function Zt(){return{hp:34,maxHp:34,mana:10,maxMana:10}}function Qt(){return{hunger:100,maxHunger:100}}function $t(){return{level:1,xp:0,totalXp:0}}function en(){return Object.fromEntries(ae.map(e=>[e,$t()]))}function tn(){return{selectedLocationId:`ruins`,encounter:null,log:[]}}function nn(){return{queue:[],knownRecipeIds:[],completedRecipeCounts:{}}}function rn(e=Date.now()){return{version:10,createdAt:e,updatedAt:e,lastSimulatedAt:e,selectedCharacterId:`cameron`,characters:[{id:`cameron`,name:`Cameron`,epithet:`Alone at the treeline`,condition:`resting`,locationId:`camp`,combat:Zt(),needs:Qt(),classProgress:en(),inventory:Kt(),resourceCounts:qt(),actionLoopId:`loop-forage-sticks`}],inventory:Kt(),characterInventory:Kt(),resourceCounts:qt(),characterResourceCounts:qt(),tools:Jt(),buildings:{campfire:!1,tanningRack:!1,hideTent:!1,crudeStoneFurnace:!1,primitiveSpinningWheel:!1,primitiveLoom:!1},buildingCounts:Yt(),campfireExpiresAt:null,seenResources:[...Ze],skills:xt(),cooking:nn(),combat:tn(),actionLoops:[Xt(e)],currentActions:[],currentAction:null,log:[{id:`${e}-start`,time:e,text:`Cameron wakes beneath cold branches with empty hands.`,tone:`muted`,scope:`camp`}]}}var an=48,on=`camp`,sn=[`action:`,`craft:`,`deposit:`],cn=[`Cameron stops `,`Cameron lacks `,`Cameron crafted `,`Cameron butchered `,`Cameron returned `,`The saved trail grows quiet`];function P(e,t,n=`muted`,r=Date.now(),i=on){e.log.unshift({id:`${r}-${Math.random().toString(36).slice(2)}`,time:r,text:t,tone:n,scope:i}),e.log=e.log.slice(0,an)}function ln(e,t){let n=t.now??Date.now(),r=t.scope??on,i=e.log.findIndex(e=>e.aggregateKey===t.aggregateKey&&un(e)===r),a=dn(t.resources);if(i>=0){let[o]=e.log.splice(i,1);o.time=n,o.text=t.text,o.tone=t.tone??o.tone,o.scope=r,Object.keys(a).length>0?(o.aggregateItems=fn(pn(o),a),delete o.aggregateTotal,delete o.aggregateUnit):(o.aggregateTotal=(o.aggregateTotal??0)+(t.amount??0),o.aggregateUnit=t.unit),e.log.unshift(o);return}e.log.unshift({id:`${n}-${Math.random().toString(36).slice(2)}`,time:n,text:t.text,tone:t.tone??`muted`,scope:r,aggregateKey:t.aggregateKey,...Object.keys(a).length>0?{aggregateItems:a}:{aggregateTotal:t.amount??0,aggregateUnit:t.unit}}),e.log=e.log.slice(0,an)}function un(e){return e.scope?e.scope:e.aggregateKey&&sn.some(t=>e.aggregateKey?.startsWith(t))||cn.some(t=>e.text.startsWith(t))||/\bbreaks(?:\.|;)/.test(e.text)?`character`:on}function dn(e){let t={};for(let[n,r]of Object.entries(e??{})){let e=n,i=A(e,r??0);i>0&&(t[e]=i)}return t}function fn(e,t){let n={...e??{}};for(let[e,r]of Object.entries(t)){let t=e;n[t]=A(t,(n[t]??0)+(r??0))}return n}function pn(e){if(e.aggregateItems)return e.aggregateItems;let t=mn(e.aggregateUnit);if(!(!t||!e.aggregateTotal))return{[t]:e.aggregateTotal}}function mn(e){switch(e?.toLowerCase()){case`sticks`:return`stick`;case`stones`:return`stone`;default:return}}var hn=`rowan`;function gn(e,t){return Math.max(0,Math.floor(e.buildingCounts?.[t]??+!!e.buildings[t]))}function _n(e,t){let n=gn(e,t)+1;return e.buildingCounts[t]=n,n}function vn(e,t,n){e.buildingCounts[t]=Math.max(0,Math.floor(n))}function yn(e){return e.characters.length}function bn(e){return gn(e,`hideTent`)}function xn(e,t=Date.now()){return bn(e)<2||e.characters.some(e=>e.id===hn)?!1:(e.characters.push({id:hn,name:`Rowan`,epithet:`Drawn to the second shelter`,condition:`resting`,locationId:`camp`,combat:Zt(),needs:Qt(),classProgress:en(),inventory:Kt(),resourceCounts:qt()}),P(e,`Rowan joins the camp after the second hide tent goes up.`,`craft`,t),!0)}function Sn(e){for(let t of k)e.inventory[t]=A(t,e.inventory[t]??0),e.characterInventory[t]=A(t,e.characterInventory[t]??0),e.resourceCounts[t]=Wn(t,e.inventory[t],e.resourceCounts[t]??0),e.characterResourceCounts[t]=Wn(t,e.characterInventory[t],e.characterResourceCounts[t]??0);for(let t of e.characters)t.inventory=Hn(t.inventory),t.resourceCounts=Un(t.inventory,t.resourceCounts);kn(e)}function F(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=(n??0))}function Cn(e,t){for(let[n,r]of Object.entries(t)){let t=n;e.inventory[t]=A(t,e.inventory[t]-(r??0))}}function wn(e,t,n={}){for(let[r,i]of Object.entries(t)){let t=r,a=i??0;a<=0||(e.inventory[t]=A(t,e.inventory[t]+a),Gn(e.resourceCounts,t,n[t]??0),e.seenResources.includes(t)||e.seenResources.push(t))}}function Tn(e){let t=ct(e)?.weight;if(typeof t==`number`)return t;switch(e){case`wood`:return 2;case`stick`:case`stone`:case`flaxPlant`:case`rettedFlax`:case`flaxFiber`:return 1;case`linenThread`:case`linenCloth`:case`copperNeedle`:case`bronzeNeedle`:return .1;default:return 1}}function En(e){let t=k.reduce((t,n)=>t+(e[n]??0)*Tn(n),0);return Math.round(t*10)/10}function Dn(e,t=e.selectedCharacterId){let n=zn(e,t);return n.inventory||=Bn(),n.inventory}function On(e,t=e.selectedCharacterId){let n=zn(e,t);return n.resourceCounts||=Vn(),n.resourceCounts}function kn(e){let t=Dn(e),n=On(e);for(let r of k)e.characterInventory[r]=t[r]??0,e.characterResourceCounts[r]=n[r]??0}function An(e,t=e.selectedCharacterId){return En(Dn(e,t))}function jn(e,t=e.selectedCharacterId){let n=e.tools.basket,r=e.tools.leatherBackpack;return 10+(n?.owned&&n.durability>0?5:0)+(r?.owned&&r.durability>0?15:0)}function Mn(e,t,n={},r=e.selectedCharacterId){let i={},a=Dn(e,r),o=On(e,r),s=An(e,r),c=jn(e,r);for(let r of k){let l=A(r,t[r]??0);if(l<=0)continue;let u=Tn(r),d=c-s,f=u>0?A(r,it(r)?l*u<=d?l:0:Math.min(l,Math.floor(d/u))):l;f<=0||(i[r]=f,a[r]=A(r,a[r]+f),Gn(o,r,qn(r,l,f,n[r])),s=Math.round((s+f*u)*10)/10,e.seenResources.includes(r)||e.seenResources.push(r))}return kn(e),i}function Nn(e,t=e.selectedCharacterId){let n={},r=Dn(e,t),i=On(e,t);for(let t of k){let a=r[t];a<=0||(n[t]=a,e.inventory[t]=A(t,e.inventory[t]+a),Kn(i,e.resourceCounts,t),r[t]=0,e.seenResources.includes(t)||e.seenResources.push(t))}return kn(e),n}function Pn(e,t,n=`camp`,r=e.selectedCharacterId){let i=Rn(e,n,r);return at(t)?Math.max(0,Math.floor(i[t]??0)):Math.floor(Ln(e,n,r)[t]??0)}function Fn(e,t,n=`camp`,r=e.selectedCharacterId){return Pn(e,t,n,r)>0}function In(e,t,n=`camp`,r=e.selectedCharacterId){if(!at(t))return 0;let i=Ln(e,n,r),a=Rn(e,n,r),o=Pn(e,t,n,r),s=A(t,i[t]??0);if(o<=0||s<=0)return i[t]=0,a[t]=0,kn(e),0;let c=A(t,o<=1?s:s/o);return a[t]=Math.max(0,o-1),i[t]=a[t]<=0?0:A(t,s-c),kn(e),c}function I(e){return Object.entries(e).map(([e,t])=>{let n=e;return`${st(n,t??0)}${it(n)?` lb`:``} ${j(n)}`}).join(`, `)}function Ln(e,t,n){return t===`character`?Dn(e,n):e.inventory}function Rn(e,t,n){return t===`character`?On(e,n):e.resourceCounts}function zn(e,t){return e.characters.find(e=>e.id===t)??e.characters[0]}function Bn(){return Object.fromEntries(k.map(e=>[e,0]))}function Vn(){return Object.fromEntries(k.map(e=>[e,0]))}function Hn(e){let t=Bn();for(let n of k)t[n]=A(n,e?.[n]??0);return t}function Un(e,t){let n=Vn();for(let r of k)n[r]=Wn(r,e[r],t?.[r]??0);return n}function Wn(e,t,n){return!at(e)||t<=0?0:Math.max(1,Math.floor(Math.max(0,Number.isFinite(n)?n:0)))}function Gn(e,t,n){!at(t)||n<=0||(e[t]=Math.floor((e[t]??0)+n))}function Kn(e,t,n){if(!at(n))return;let r=Math.max(0,Math.floor(e[n]??0));r<=0||(t[n]=Math.floor((t[n]??0)+r),e[n]=0)}function qn(e,t,n,r=0){return!at(e)||n<=0||n<t?0:Math.max(0,Math.floor(r))}var Jn=`idle-town:first-survival-slice:v1`,Yn=10,Xn=900*1e3,Zn={minnow:1,stoneLoach:2,mudskipper:3,brookStickleback:1.25,pebblePerch:4.75,rabbit:3.5,squirrel:1.25};function Qn(){let e=window.localStorage.getItem(Jn);if(!e)return rn();try{let t=JSON.parse(e),n=rn(),r={...n.buildings,...t.buildings??{}},i=typeof t.selectedCharacterId==`string`?t.selectedCharacterId:n.selectedCharacterId,a=er(t.characters,n.characters,t.characterInventory,t.characterResourceCounts,i),o=pr(t.currentActions,t.currentAction),s=lr(t.actionLoops,t.currentAction,n.actionLoops),c={...n,...t,selectedCharacterId:i,inventory:{...Kt(),...t.inventory??{}},characterInventory:{...Kt(),...t.characterInventory??{}},resourceCounts:{...qt(),...t.resourceCounts??{}},characterResourceCounts:{...qt(),...t.characterResourceCounts??{}},tools:zr(t.tools),buildings:r,buildingCounts:$n(t.buildingCounts,r,n.buildingCounts),campfireExpiresAt:typeof t.campfireExpiresAt==`number`?t.campfireExpiresAt:n.campfireExpiresAt,characters:a,seenResources:t.seenResources?.length?t.seenResources:n.seenResources,skills:St(t.skills),cooking:Ar(t.cooking,n.cooking),combat:ar(t.combat,n.combat,a),actionLoops:s,currentActions:o,currentAction:o.find(e=>e.characterId===i)??o[0]??null,log:t.log?.length?t.log:n.log,version:Yn},l=typeof t.version==`number`?t.version:1;return Or(c,l),Er(c,l),Dr(c,l),Tr(c,l),xn(c),Sn(c),c}catch{return rn()}}function $n(e,t,n){let r={...Yt(),...n};if(e&&typeof e==`object`){let t=e;for(let e of Object.keys(r))r[e]=Math.max(0,Math.floor(Number(t[e]??r[e])))}for(let e of Object.keys(t))t[e]&&r[e]<=0&&(r[e]=1);return r}function er(e,t,n,r,i){return!Array.isArray(e)||!e.length?t:e.map((e,a)=>{let o=t[a]??t[0];if(!e||typeof e!=`object`)return o;let s=e,c=s.id===i&&!s.inventory&&n&&typeof n==`object`,l=Lr(c?n:s.inventory),u=Rr(l,c?r:s.resourceCounts);return{...o,...s,locationId:vr(s.locationId)?s.locationId:o.locationId,combat:nr(s.combat,o.combat),needs:tr(s.needs,o.needs),classProgress:rr(s.classProgress),inventory:l,resourceCounts:u,actionLoopId:typeof s.actionLoopId==`string`?s.actionLoopId:o.actionLoopId}})}function tr(e,t=Qt()){if(!e||typeof e!=`object`)return t;let n=e,r=L(n.maxHunger,1,999);return{maxHunger:r,hunger:L(n.hunger,0,r)}}function nr(e,t=Zt()){if(!e||typeof e!=`object`)return t;let n=e,r=L(n.maxHp,1,999),i=L(n.maxMana,0,999);return{maxHp:r,hp:L(n.hp,0,r),maxMana:i,mana:L(n.mana,0,i)}}function rr(e){let t=en();if(!e||typeof e!=`object`)return t;let n=e;for(let e of ae)t[e]=ir(n[e]);return t}function ir(e){if(!e||typeof e!=`object`)return{level:1,xp:0,totalXp:0};let t=L(e.xp,0,2**53-1);return{level:L(e.level,1,1e3),xp:t,totalXp:Math.max(t,L(e.totalXp,0,2**53-1))}}function ar(e,t=tn(),n){if(!e||typeof e!=`object`)return t;let r=e;return{selectedLocationId:br(r.selectedLocationId)?r.selectedLocationId:t.selectedLocationId,encounter:or(r.encounter,n),log:cr(r.log)}}function or(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!br(n.locationId)||typeof n.id!=`string`)return null;let r=Array.isArray(n.units)?n.units.map(e=>sr(e,t)).filter(e=>!!e):[];return{id:n.id,locationId:n.locationId,startedAt:L(n.startedAt,0,2**53-1),updatedAt:L(n.updatedAt,0,2**53-1),wave:L(n.wave,1,999),defeatedEnemies:L(n.defeatedEnemies,0,2**53-1),units:r,message:typeof n.message==`string`?n.message:``}}function sr(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!Cr(n.kind)||typeof n.id!=`string`||typeof n.name!=`string`||n.kind===`party`&&!t.some(e=>e.id===n.characterId)||n.kind===`enemy`&&!xr(n.enemyId))return null;let r=L(n.maxHp,1,999),i=L(n.maxMana,0,999);return{id:n.id,kind:n.kind,name:n.name,hp:L(n.hp,0,r),maxHp:r,mana:L(n.mana,0,i),maxMana:i,x:L(n.x,0,99),y:L(n.y,0,99),damage:L(n.damage,0,999),attackRange:L(n.attackRange,1,99),actEveryMs:L(n.actEveryMs,500,6e4),nextActAt:L(n.nextActAt,0,2**53-1),characterId:typeof n.characterId==`string`?n.characterId:void 0,enemyId:xr(n.enemyId)?n.enemyId:void 0,classId:Sr(n.classId)?n.classId:void 0,weaponId:n.weaponId}}function cr(e){return Array.isArray(e)?e.filter(e=>!!(e&&typeof e==`object`)).map((e,t)=>({id:typeof e.id==`string`?e.id:`combat-log-${t+1}`,time:L(e.time,0,2**53-1),text:typeof e.text==`string`?e.text:``,tone:wr(e.tone)?e.tone:`muted`})).filter(e=>e.text).slice(0,20):[]}function lr(e,t,n){if(Array.isArray(e)){let t=e.map((e,t)=>ur(e,t)).filter(e=>!!e);if(t.length)return t}let r=dr(t);return r?[r]:n}function ur(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=Array.isArray(n.actionIds)?n.actionIds.map(e=>gr(e)).filter(e=>!!e):[];return r.length?{id:typeof n.id==`string`&&n.id?n.id:`loop-${t+1}`,name:typeof n.name==`string`&&n.name?n.name:`Loop ${t+1}`,actionIds:r,locationIds:fr(r,n.locationIds),createdAt:typeof n.createdAt==`number`?n.createdAt:Date.now(),updatedAt:typeof n.updatedAt==`number`?n.updatedAt:Date.now()}:null}function dr(e){if(!e||typeof e!=`object`)return null;let t=e,n=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>gr(e)).filter(e=>!!e):gr(t.actionId)?[gr(t.actionId)]:[];if(!n.length)return null;let r=Date.now();return{id:`loop-saved-work`,name:`Saved Work Loop`,actionIds:n,locationIds:fr(n,t.loopLocationIds),createdAt:r,updatedAt:r}}function fr(e,t){let n=Array.isArray(t)?t:[];return e.map((e,t)=>{let r=n[t];return yr(r)?r:null})}function pr(e,t){return(Array.isArray(e)?e:t?[t]:[]).map(e=>mr(e)).filter(e=>!!e)}function mr(e){if(!e||typeof e!=`object`)return null;let t=e,n=gr(t.actionId);if(!n||typeof t.characterId!=`string`||!_r(t.phase)||typeof t.startedAt!=`number`||typeof t.endsAt!=`number`)return null;let r=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>gr(e)).filter(e=>!!e):void 0,i=gr(t.followUpActionId);return{...t,actionId:n,characterId:t.characterId,phase:t.phase,loopActionIds:r,followUpActionId:i??void 0,startedAt:t.startedAt,endsAt:t.endsAt,repeat:!!t.repeat}}function hr(e){return typeof e==`string`&&S.some(t=>t.id===e)}function gr(e){return e===`gatherMushrooms`||e===`gatherBerries`?`gatherMeadowIngredients`:hr(e)?e:null}function _r(e){return e===`travelingTo`||e===`working`||e===`followUp`||e===`travelingBack`}function vr(e){return e===`camp`||e===`meadow`||e===`river`||e===`forest`||e===`mine`||e===`desert`}function yr(e){return e===`meadow`||e===`river`||e===`forest`||e===`mine`||e===`desert`}function br(e){return typeof e==`string`&&se.some(t=>t===e)}function xr(e){return typeof e==`string`&&oe.some(t=>t===e)}function Sr(e){return typeof e==`string`&&ae.some(t=>t===e)}function Cr(e){return e===`party`||e===`enemy`}function wr(e){return e===`muted`||e===`gain`||e===`warning`}function Tr(e,t){let n=Date.now();if(!e.buildings.campfire){e.campfireExpiresAt=null;return}t<4&&!e.campfireExpiresAt&&(e.campfireExpiresAt=n+Xn),(typeof e.campfireExpiresAt!=`number`||e.campfireExpiresAt<=n)&&(e.buildings.campfire=!1,e.campfireExpiresAt=null)}function Er(e,t){if(!(t>=2)){e.inventory.rabbit*=Zn.rabbit??1,e.characterInventory.rabbit*=Zn.rabbit??1,e.inventory.squirrel*=Zn.squirrel??1,e.characterInventory.squirrel*=Zn.squirrel??1;for(let t of e.characters)t.inventory.rabbit*=Zn.rabbit??1,t.inventory.squirrel*=Zn.squirrel??1}}function Dr(e,t){if(!(t>=Yn))for(let t of nt){e.resourceCounts[t]=Ir(t,e.inventory[t]),e.characterResourceCounts[t]=Ir(t,e.characterInventory[t]);for(let n of e.characters)n.resourceCounts[t]=Ir(t,n.inventory[t])}}function Or(e,t){if(!(t>=10)){kr(e.inventory,`mushroom`,`hearthcap`),kr(e.characterInventory,`mushroom`,`hearthcap`),kr(e.inventory,`berry`,`blueberries`),kr(e.characterInventory,`berry`,`blueberries`);for(let t of e.characters)kr(t.inventory,`mushroom`,`hearthcap`),kr(t.inventory,`berry`,`blueberries`);e.seenResources=e.seenResources.map(e=>e===`mushroom`?`hearthcap`:e===`berry`?`blueberries`:e).filter((e,t,n)=>n.indexOf(e)===t)}}function kr(e,t,n){let r=Number(e[t]??0);r>0&&(e[n]=Number(e[n]??0)+r),delete e[t]}function Ar(e,t=nn()){if(!e||typeof e!=`object`)return t;let n=e,r=Array.isArray(n.queue)?n.queue.map(e=>jr(e)).filter(e=>!!e):[],i=!1;return{queue:r.map(e=>{let t=e.startedAt!==null&&e.endsAt!==null;return!t||!i?(i||=t,e):{...e,startedAt:null,endsAt:null}}),knownRecipeIds:Mr(n.knownRecipeIds),completedRecipeCounts:Nr(n.completedRecipeCounts)}}function jr(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.id!=`string`||!Pr(t.recipeId)?null:{id:t.id,recipeId:t.recipeId,stationId:Fr(t.stationId),queuedAt:L(t.queuedAt,0,2**53-1),startedAt:typeof t.startedAt==`number`?L(t.startedAt,0,2**53-1):null,endsAt:typeof t.endsAt==`number`?L(t.endsAt,0,2**53-1):null}}function Mr(e){return Array.isArray(e)?e.filter(e=>Pr(e)).filter((e,t,n)=>n.indexOf(e)===t):[]}function Nr(e){if(!e||typeof e!=`object`)return{};let t={},n=e;for(let[e,r]of Object.entries(n))Pr(e)&&(t[e]=L(r,0,2**53-1));return t}function Pr(e){return typeof e==`string`&&pe.includes(e)}function Fr(e){return`campfire`}function Ir(e,t){if(t<=0)return 0;let n=Zn[e]??1;return Math.max(1,Math.round(t/n))}function Lr(e){let t=Kt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of Object.keys(t))t[e]=Number(n[e]??0);return t}function Rr(e,t){let n=qt();if(t&&typeof t==`object`){let e=t;for(let t of Object.keys(n))n[t]=Math.max(0,Math.floor(Number(e[t]??0)))}for(let t of nt)e[t]>0&&n[t]<=0&&(n[t]=Ir(t,e[t]));return n}function zr(e){let t=Jt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of w){let r=n[e.id];if(typeof r==`boolean`){t[e.id]={owned:r,durability:r?e.maxDurability:0,quantity:0};continue}if(!r||typeof r!=`object`)continue;let i=!!r.owned,a=Number(r.durability??0),o=Number(r.quantity??0);t[e.id]={owned:i,durability:i?Math.min(e.maxDurability,Math.max(0,Math.floor(a))):0,quantity:Math.max(0,Math.floor(o))}}return t}function L(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Br(e){window.localStorage.setItem(Jn,JSON.stringify(e))}function Vr(){return window.localStorage.removeItem(Jn),rn()}var Hr=900*1e3;function Ur(e,t=Date.now()){e.buildings.campfire=!0,e.campfireExpiresAt=t+Hr}function R(e,t=Date.now()){return!!(e.buildings.campfire&&Gr(e)>t)}function Wr(e,t=Date.now()){let n=Gr(e);return n>t?n-t:0}function Gr(e){return e.buildings.campfire&&typeof e.campfireExpiresAt==`number`?e.campfireExpiresAt:0}function Kr(e,t=Date.now()){let n=Gr(e);return!n||n>t?!1:(e.buildings.campfire=!1,e.campfireExpiresAt=null,P(e,`The campfire burns down to charred wood.`,`muted`,n),e.updatedAt=n,e.lastSimulatedAt=n,!0)}var qr=[`copperPickaxe`,`copperHatchet`,`copperKnife`];function Jr(e){return!!e.buildings.crudeStoneFurnace}function Yr(e){return{furnaceBuilt:Jr(e),coal:Math.max(0,Math.floor(e.inventory.coal??0))}}function Xr(e){return s.some(t=>t===e)}function Zr(e,t){if(!u(t))return!1;switch(t){case`smeltCopperBar`:return Jr(e);case`craftPot`:case`craftLadle`:return ti(e,`copperBar`);case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return ei(e);case`smeltBronzeBar`:return Jr(e)&&ni(e);case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return ti(e,`bronzeBar`)}}function Qr(e,t){if(!u(t))return``;switch(t){case`smeltCopperBar`:return Jr(e)?``:`Needs Stone Furnace`;case`craftPot`:case`craftLadle`:return ti(e,`copperBar`)?``:`Smelt Copper Bar`;case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return ei(e)?``:`Craft Pot and Ladle`;case`smeltBronzeBar`:return Jr(e)?ni(e)?``:`Craft a Copper Tool`:`Needs Stone Furnace`;case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return ti(e,`bronzeBar`)?``:`Smelt Bronze Bar`}}function $r(e){let t=l(e);return t?t.label.replace(/^(Craft|Smelt) /,`1 `):``}function ei(e){return ti(e,`pot`)&&ti(e,`ladle`)}function ti(e,t){return e.seenResources.includes(t)||e.inventory[t]>0}function ni(e){let t=e.tools;return qr.some(e=>{let n=t[e];return!!(n?.owned||(n?.quantity??0)>0)})}var ri=[`yarrow`,`plantainLeaf`],ii=[`riverMint`,`silverleafHerb`];function ai(e){return{furnaceBuilt:Jr(e),coal:Math.max(0,Math.floor(e.inventory.coal??0)),vials:Math.max(0,Math.floor(e.inventory.glassVial??0))}}function oi(e,t){if(!i(t))return!1;switch(t){case`craftGlassVial`:return Jr(e);case`brewHealthPotion`:return ui(e,`glassVial`)&&li(e,ri);case`brewManaPotion`:return ui(e,`glassVial`)&&li(e,ii)}}function si(e,t){if(!i(t))return``;switch(t){case`craftGlassVial`:return Jr(e)?``:`Needs Stone Furnace`;case`brewHealthPotion`:return ui(e,`glassVial`)?li(e,ri)?``:`Find Meadow Ingredients`:`Craft Glass Vial`;case`brewManaPotion`:return ui(e,`glassVial`)?li(e,ii)?``:`Find River Ingredients`:`Craft Glass Vial`}}function ci(e){let t=r(e);return t?Object.entries(t.output).map(([e,t])=>`${t??0} ${j(e)}`).join(`, `):``}function li(e,t){return t.some(t=>ui(e,t))}function ui(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function di(e,t){return!y(t)||!b(t)?!1:fi(e,t)===``}function fi(e,t){let n=y(t);if(!n||!b(t))return``;let r=n.requiredBuildings?.find(t=>!e.buildings[t]);if(r)return`Needs ${gi(r)}`;let i=n.requiredSeenResources?.find(t=>!mi(e,t));return i?n.unlockHint||`Needs ${j(i)}`:n.requiredAnyResources?.length&&!n.requiredAnyResources.some(t=>mi(e,t))?`Needs ${n.requiredAnyResources.map(e=>j(e)).join(` or `)}`:``}function pi(e){return hi(e.output)}function mi(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function hi(e){return Object.entries(e).map(([e,t])=>`${t??0} ${j(e)}`).join(`, `)}function gi(e){switch(e){case`campfire`:return`Campfire`;case`tanningRack`:return`Tanning Rack`;case`hideTent`:return`Hide Tent`;case`crudeStoneFurnace`:return`Stone Furnace`;case`primitiveSpinningWheel`:return`Primitive Spinning Wheel`;case`primitiveLoom`:return`Primitive Loom`}}function _i(e){return w.find(t=>t.id===e)}function vi(e){return _i(e)?.maxDurability??1}function yi(e,t){let n=e.tools[t];return!!(n?.owned&&n.durability>0)}function bi(e){return w.filter(t=>t.roles.includes(e)).sort((t,n)=>wi(n.id,e)-wi(t.id,e))}function xi(e,t){return bi(t).find(t=>yi(e,t.id))?.id??null}function Si(e,t){return!!xi(e,t)}function Ci(e,t){let n=xi(e,t);return n?wi(n,t):0}function wi(e,t){let n=_i(e);return n?.roles.includes(t)?n.roleTiers?.[t]??n.weapon?.damage??1:0}function Ti(e){return _i(e)?.weapon?.damage??0}function Ei(e,t){let n=xi(e,t);return n?Ti(n):0}function Di(e,t){let n=e.tools[t];return!n||n.quantity<=0?!1:(--n.quantity,n.owned=!0,n.durability=vi(t),!0)}function Oi(e,t,n,r=Date.now(),i=`Cameron`){let a=e.tools[t];if(!(!a?.owned||a.durability<=0)&&(a.durability=Math.max(0,a.durability-n),a.durability===0)){let n=_i(t)?.label??`Tool`;if(Di(e,t)){P(e,`${n} breaks; ${i} takes a fresh one from inventory.`,`warning`,r,`character`);return}a.owned=!1,P(e,`${n} breaks. No spare remains.`,`warning`,r,`character`)}}function ki(e,t,n,r=Date.now(),i=`Cameron`){let a=xi(e,t);a&&Oi(e,a,n,r,i)}var Ai=Se.map(e=>e.craftActionId);function ji(e){return e.seenResources.includes(`rabbitMeat`)||e.seenResources.includes(`squirrelMeat`)}function Mi(e){return $e.some(t=>e.seenResources.includes(t)||e.characters.some(e=>(e.inventory?.[t]??0)>0||(e.resourceCounts?.[t]??0)>0)||e.characterInventory[t]>0||e.inventory[t]>0||e.characterResourceCounts[t]>0||e.resourceCounts[t]>0)}function Ni(e){return e.seenResources.some(e=>{let t=Xe.find(t=>t.id===e);return!!(t?.cooking?.ingredientCategory||t?.cooking?.tags.includes(`stew-base`)||t?.cooking?.tags.includes(`vessel`)||t?.cooking?.tags.includes(`utensil`))})}function z(e,t,n=Date.now()){if(Zr(e,t)||oi(e,t))return!0;if(y(t))return di(e,t);if(Qr(e,t)||si(e,t))return!1;if(t===`craftLowestTool`||Ai.includes(t)||t===`craftWoodenBowl`)return!0;switch(t){case`gatherSticks`:case`gatherStones`:case`gatherFlaxPlants`:case`gatherFlaxFibers`:case`gatherMeadowIngredients`:case`gatherForestIngredients`:case`gatherRiverIngredients`:case`gatherMineIngredients`:case`gatherDesertIngredients`:case`gatherSand`:case`gatherWater`:case`craftWoodenSpoon`:return!0;case`fishRiver`:return Si(e,`fishing`);case`mineCoal`:case`mineCopper`:case`mineTin`:return Si(e,`mining`);case`chopTrees`:return Si(e,`woodcutting`);case`huntSmallAnimals`:return Si(e,`hunting`);case`butcherFish`:return Mi(e);case`butcherRabbit`:return e.seenResources.includes(`rabbit`);case`butcherSquirrel`:return e.seenResources.includes(`squirrel`);case`cookRabbitMeat`:return R(e,n)&&e.seenResources.includes(`rabbitMeat`);case`cookSquirrelMeat`:return R(e,n)&&e.seenResources.includes(`squirrelMeat`);case`tanHide`:return e.buildings.tanningRack&&e.seenResources.includes(`hide`);case`craftLeatherBackpack`:return e.buildings.tanningRack&&e.seenResources.includes(`leather`)}return!1}function Pi(e,t){let n=Qr(e,t);if(n)return n;let r=si(e,t);if(r)return r;let i=fi(e,t);if(i)return i;switch(t){case`fishRiver`:return`Needs Fishing Pole`;case`mineCoal`:case`mineCopper`:case`mineTin`:return`Needs Mining Tool`;case`chopTrees`:return`Needs Woodcutting Tool`;case`huntSmallAnimals`:return`Needs Hunting Weapon`;case`butcherFish`:return`Needs Carried Fish`;case`butcherRabbit`:return`Needs Rabbit`;case`butcherSquirrel`:return`Needs Squirrel`;case`cookRabbitMeat`:return R(e)?`Needs Rabbit Meat`:`Needs Lit Campfire`;case`cookSquirrelMeat`:return R(e)?`Needs Squirrel Meat`:`Needs Lit Campfire`;case`tanHide`:return e.buildings.tanningRack?`Needs Hide`:`Needs Tanning Rack`;case`craftLeatherBackpack`:return e.buildings.tanningRack?`Needs Leather`:`Needs Tanning Rack`;case`craftLowestTool`:return`Needs Craft Materials`;case`craftWoodenBowl`:return`Needs Wood`;default:return``}}function Fi(e,t,n=Date.now()){return!0}function Ii(e,t,n=Date.now()){switch(t){case`campfire`:return R(e,n)||ji(e)||Ni(e);case`tanningRack`:return e.buildings.tanningRack||e.seenResources.includes(`hide`);case`hideTent`:return e.buildings.hideTent||e.seenResources.includes(`hide`);case`crudeStoneFurnace`:return e.buildings.crudeStoneFurnace||e.seenResources.includes(`coal`)||e.seenResources.includes(`copper`);case`primitiveSpinningWheel`:return e.buildings.primitiveSpinningWheel||e.seenResources.includes(`linenThread`);case`primitiveLoom`:return e.buildings.primitiveLoom||e.seenResources.includes(`linenThread`)}}function Li(e,t){switch(t){case`campfire`:return`See Meat, Water, or Meadow Ingredients`;case`tanningRack`:case`hideTent`:return`See Hide`;case`crudeStoneFurnace`:return`See Coal or Copper`;case`primitiveSpinningWheel`:return`See Linen Thread`;case`primitiveLoom`:return`See Linen Thread`}}var Ri={meadow:1e4,river:15e3,forest:3e4,mine:6e4,desert:75e3};function zi(e){return e.loopActionIds?.length?[...e.loopActionIds]:e.followUpActionId?[e.actionId,e.followUpActionId]:[e.actionId]}function Bi(e){return ia(e)||e===`huntSmallAnimals`||e===`chopTrees`}function Vi(e,t){return Bi(e)?t??aa(e):null}function Hi(e,t=zi(e)){return e.loopLocationIds?.length?t.map((t,n)=>Vi(t,e.loopLocationIds?.[n]??void 0)):t.map((t,n)=>n===0&&Bi(t)?e.locationId??`meadow`:Vi(t,void 0))}function Ui(e,t){let n=zi(e),r=n[B(t,n)];return Hi(e,n)[B(t,n)]??(Bi(r)?`meadow`:void 0)}function Wi(e,t){let n=zi(e),r=n[B(t,n)];return Gi(r,Ui(e,t))}function Gi(e,t){return Bi(e)?t??aa(e):`camp`}function Ki(e){return e.targetLocationId??e.locationId??`camp`}function qi(e,t){return e.characters.find(e=>e.id===t)?.locationId??`camp`}function Ji(e,t,n){let r=e.characters.find(e=>e.id===t);r&&(r.locationId=n)}function Yi(e,t){return e.phase===`travelingTo`||e.phase===`travelingBack`?e.originLocationId??t:Ki(e)}function Xi(e){return e===`camp`?`camp`:`the ${e}`}function Zi(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Qi(e,t){let n=zi(e);return n[B(t,n)]??e.actionId}function $i(e){let t=zi(e);return B(e.nextLoopIndex??e.loopIndex??0,t)}function ea(e){return na(e,e.loopIndex??0)}function ta(e){return na(e,e.loopIndex??0)}function na(e,t){let n=zi(e);if(n.length<=1)return B(t,n);let r=(B(t,n)+1)%n.length;for(;n[r]===`butcherFish`&&r!==t;)r=(r+1)%n.length;return r}function B(e,t){return t.length?Math.min(t.length-1,Math.max(0,Math.floor(e))):0}function ra(e,t){return e===t?0:sa(e)+sa(t)}function ia(e){return e===`gatherSticks`||e===`gatherStones`||e===`gatherFlaxPlants`||e===`gatherFlaxFibers`||e===`gatherMeadowIngredients`||e===`gatherForestIngredients`||e===`gatherRiverIngredients`||e===`gatherMineIngredients`||e===`gatherDesertIngredients`||e===`gatherSand`||e===`gatherWater`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`||e===`fishRiver`}function aa(e){return e===`gatherWater`||e===`fishRiver`||e===`gatherRiverIngredients`?`river`:e===`gatherForestIngredients`||e===`chopTrees`?`forest`:e===`gatherMineIngredients`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`?`mine`:e===`gatherDesertIngredients`||e===`gatherSand`?`desert`:`meadow`}function oa(e){return Ri[e]}function sa(e){return e===`camp`?0:oa(e)}function ca(e){return Array.isArray(e.currentActions)||(e.currentActions=e.currentAction?[e.currentAction]:[]),e.currentActions}function V(e,t=e.selectedCharacterId){return ca(e).find(e=>e.characterId===t)??null}function la(e){let t=ca(e);e.currentAction=t.find(t=>t.characterId===e.selectedCharacterId)??t[0]??null}function ua(e,t){let n=ca(e),r=n.findIndex(e=>e.characterId===t.characterId);r>=0?n[r]=t:n.push(t),e.currentActions=n,pa(e,!0,t.characterId),la(e)}function H(e,t){e.currentActions=ca(e).filter(e=>e.characterId!==t),pa(e,!1,t),la(e)}function da(e){return[...ca(e)].sort((e,t)=>e.endsAt===t.endsAt?e.characterId.localeCompare(t.characterId):e.endsAt-t.endsAt)[0]??null}function fa(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function U(e,t){return e.characters.find(e=>e.id===t)?.name??`Someone`}function pa(e,t,n=e.selectedCharacterId){let r=e.characters.find(e=>e.id===n);r&&(r.condition=t?`working`:`resting`)}function ma(e,t=Date.now()){ba(e,t);let n=e.actionLoops.length+1,r={id:`loop-${t.toString(36)}-${Math.random().toString(36).slice(2,7)}`,name:`Loop ${n}`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:t,updatedAt:t};return e.actionLoops.push(r),fa(e,t),r}function ha(e,t,n=Date.now()){if(ba(e,n),e.actionLoops.length<=1)return e.actionLoops[0]?.id??null;let r=e.actionLoops.findIndex(e=>e.id===t);if(r<0)return e.actionLoops[0]?.id??null;e.actionLoops.splice(r,1);for(let n of e.characters)n.actionLoopId===t&&(n.actionLoopId=void 0);return fa(e,n),e.actionLoops[Math.max(0,r-1)]?.id??e.actionLoops[0]?.id??null}function W(e,t){return ba(e),e.actionLoops.find(e=>e.id===t)??e.actionLoops[0]??null}function ga(e,t,n){let r=Sa(t,e);return n===`butcherFish`?e.actionIds[r]===`fishRiver`:!0}function _a(e,t,n,r,i={},a=Date.now()){let o=W(e,t);if(!o||!ga(o,n,r))return!1;let s=Sa(n,o)+1;return o.actionIds.splice(s,0,r),o.locationIds.splice(s,0,Vi(r,i.locationId)),o.updatedAt=a,xa(e,o),fa(e,a),!0}function va(e,t,n,r=Date.now()){let i=W(e,t);if(!i||i.actionIds.length<=1)return 0;let a=Sa(n,i);return i.actionIds.splice(a,1),i.locationIds.splice(a,1),i.updatedAt=r,xa(e,i),fa(e,r),Math.max(0,a-1)}function ya(e){return e.actionIds.map((t,n)=>Vi(t,e.locationIds[n]??void 0))}function ba(e,t=Date.now()){if(Array.isArray(e.actionLoops)&&e.actionLoops.length)return;let n=e.currentAction?.loopActionIds?.length?{actionIds:[...e.currentAction.loopActionIds],locationIds:[...e.currentAction.loopLocationIds??[]]}:{actionIds:[`gatherSticks`],locationIds:[`meadow`]};e.actionLoops=[{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:n.actionIds,locationIds:n.actionIds.map((e,t)=>Vi(e,n.locationIds[t]??void 0)),createdAt:t,updatedAt:t}]}function xa(e,t){for(let n of e.characters){if(n.actionLoopId!==t.id)continue;let r=V(e,n.id);if(!r)continue;let i=B(r.loopIndex??0,t.actionIds);ua(e,{...r,loopActionIds:[...t.actionIds],loopLocationIds:ya(t),loopIndex:i})}}function Sa(e,t){return t.actionIds.length?Math.min(t.actionIds.length-1,Math.max(0,Math.floor(e))):0}function Ca(e,t,n){return Math.min(n,Math.max(t,e))}function G(e,t){return Math.floor(Math.random()*(t-e+1))+e}function wa(e,t,n=1){let r=10**n;return Math.round((Math.random()*(t-e)+e)*r)/r}function K(e){let t=Math.max(0,Math.ceil(e/1e3));if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function Ta(e){let t=Me(e);if(!t?.entries.length)return{resources:{},message:`Cameron searches carefully, but finds nothing useful.`};let n=Math.random()<.28?2:1,r={},i=[];for(let e=0;e<n;e+=1){let e=Da(t.entries);if(!e)continue;let n=G(e.minAmount,e.maxAmount);r[e.id]=(r[e.id]??0)+n,i.push(e)}let a=Object.entries(r).filter(([,e])=>(e??0)>0).map(([e,t])=>`${t} ${j(e)}`);return{resources:r,message:a.length?`Cameron gathers ${Oa(a)} from the ${t.locationId}.`:`Cameron searches carefully, but finds nothing useful.`}}function Ea(e){let t=Me(e);return t?.entries.length?`${t.categories.map(e=>e[0].toUpperCase()+e.slice(1)).join(`, `)} from weighted ${t.label.toLowerCase()} table`:`No known gatherables.`}function Da(e){let t=e.reduce((e,t)=>e+Math.max(0,t.weight),0);if(t<=0)return null;let n=Math.random()*t;for(let t of e)if(n-=Math.max(0,t.weight),n<=0)return t;return e[e.length-1]??null}function Oa(e){return e.length<=1?e[0]??`nothing`:`${e.slice(0,-1).join(`, `)} and ${e[e.length-1]}`}var ka=Se.map(e=>({actionId:e.craftActionId,toolId:e.id})),Aa=[{id:`minnow`,minWeight:.5,maxWeight:1.5},{id:`stoneLoach`,minWeight:1,maxWeight:3},{id:`mudskipper`,minWeight:1.5,maxWeight:4.5},{id:`brookStickleback`,minWeight:.5,maxWeight:2},{id:`pebblePerch`,minWeight:2,maxWeight:7.5}],ja=[{id:`rabbit`,minWeight:2,maxWeight:5},{id:`squirrel`,minWeight:.5,maxWeight:2}];function Ma(e){return w.find(t=>t.id===e)?.recipe??{}}function Na(e,t){let n=e.tools[t];return(n?.quantity??0)+ +!!n?.owned}function Pa(e,t){return Ua(Fa(e,t))}function Fa(e,t){let n=l(t);if(n)return{resources:n.output??{},message:`Cameron finishes ${n.label.toLowerCase()}.`,tone:`craft`};let i=r(t);if(i)return{resources:i.output,message:`Cameron finishes ${i.label.toLowerCase()}.`,tone:`craft`};let a=y(t);if(a)return{resources:a.output,message:`Cameron finishes ${a.label.toLowerCase()}.`,tone:`craft`};switch(t){case`gatherSticks`:{let e=G(1,3);return{resources:{stick:e},message:`Cameron gathers ${e} ${Ya(`Stick`,e)}.`,tone:`gain`}}case`gatherStones`:{let e=G(1,2);return{resources:{stone:e},message:`Cameron finds ${e} ${Ya(`Stone`,e)}.`,tone:`gain`}}case`gatherFlaxPlants`:{let e=G(2,4);return{resources:{flaxPlant:e},message:`Cameron cuts ${e} ${Ya(`Flax Plant`,e)} from the meadow.`,tone:`gain`}}case`gatherFlaxFibers`:{let e=G(1,3);return{resources:{flaxFiber:e},message:`Cameron pulls ${e} ${Ya(`Flax Fiber`,e)} from the brush.`,tone:`gain`}}case`gatherMeadowIngredients`:return Wa(`meadow`);case`gatherForestIngredients`:return Wa(`forest`);case`gatherRiverIngredients`:return Wa(`river`);case`gatherMineIngredients`:return Wa(`mine`);case`gatherDesertIngredients`:return Wa(`desert`);case`gatherSand`:{let e=G(2,5);return{resources:{sand:e},message:`Cameron gathers ${e} ${Ya(`Sand`,e)} from the desert.`,tone:`gain`}}case`gatherWater`:{let e=G(1,3);return{resources:{water:e},message:`Cameron fills ${e} ${e===1?`skin`:`skins`} of river water.`,tone:`gain`}}case`mineCoal`:return Ka(e,`coal`);case`mineCopper`:return Ka(e,`copper`);case`mineTin`:return Ka(e,`tin`);case`fishRiver`:return Ga();case`craftLowestTool`:case`craftLeatherBackpack`:break;case`craftWoodenSpoon`:return{resources:{woodenSpoon:1},message:`Cameron carves a wooden spoon.`,tone:`craft`};case`chopTrees`:{let t=Ci(e,`woodcutting`),n=t>=3?1:+(t>=2&&Math.random()<.5),r=G(2,4)+n,i=+(Math.random()<.35);return{resources:{wood:r,stick:i},message:`Cameron chops ${r} ${Ya(`Wood`,r)}${i?` and saves a usable stick`:``}.`,tone:`gain`}}case`huntSmallAnimals`:return qa(e);case`butcherFish`:return{resources:{},message:`Cameron butchers carried fish.`,tone:`gain`};case`butcherRabbit`:return Ja(e,`rabbit`);case`butcherSquirrel`:return Ja(e,`squirrel`);case`cookRabbitMeat`:return{resources:{cookedRabbitMeat:1},message:`Cameron cooks rabbit meat over the coals.`,tone:`craft`};case`cookSquirrelMeat`:return{resources:{cookedSquirrelMeat:1},message:`Cameron cooks squirrel meat over the coals.`,tone:`craft`};case`craftWoodenBowl`:return{resources:{woodenBowl:1},message:`Cameron carves a wooden bowl.`,tone:`craft`};case`tanHide`:return{resources:{leather:1},message:`Cameron works a hide into rough leather.`,tone:`craft`}}let o=Ia(t);return o?{resources:{},message:`Cameron finishes ${Za(o).toLowerCase()}.`,tone:`craft`}:{resources:{},message:`Cameron finishes the work.`,tone:`craft`}}function Ia(e){let t=l(e);if(t?.toolId)return t.toolId;let n=ka.find(t=>t.actionId===e);return n?n.toolId:e===`craftLeatherBackpack`?`leatherBackpack`:null}function La(e,t,n,r,i){let a=w.find(e=>e.id===r);a&&(e.tools[r].quantity+=1,yi(e,r)||Di(e,r),ln(e,{aggregateKey:`craft:${t}:${r}`,text:`${n} crafted ${Xa(a.label)}`,amount:1,unit:Xa(a.label),tone:`craft`,now:i,scope:`character`}))}function Ra(e,t,n,r){let i=Ha(e,t);Object.values(i).some(e=>(e??0)>0)&&ln(e,{aggregateKey:`action:${t}:butcherFish`,text:`${n} butchered fish`,resources:i,tone:`gain`,now:r,scope:`character`})}function za(e,t=e.selectedCharacterId){return $e.some(n=>Fn(e,n,`character`,t))}function Ba(e,t,n,r){switch(t){case`fishRiver`:ki(e,`fishing`,1,n,r);break;case`mineCoal`:case`mineCopper`:case`mineTin`:ki(e,`mining`,1,n,r);break;case`chopTrees`:ki(e,`woodcutting`,1,n,r);break;case`huntSmallAnimals`:ki(e,`hunting`,1,n,r);break;case`butcherRabbit`:case`butcherSquirrel`:ki(e,`butchering`,1,n,r);break;default:break}}function Va(e,t=`Cameron`){let n=l(e);if(n)return`${t} completed ${n.label.toLowerCase()}`;let i=r(e);if(i)return`${t} completed ${i.label.toLowerCase()}`;let a=y(e);if(a)return`${t} completed ${a.label.toLowerCase()}`;switch(e){case`gatherSticks`:return`${t} gathered sticks`;case`gatherStones`:return`${t} gathered stones`;case`gatherFlaxPlants`:return`${t} gathered flax plants`;case`gatherFlaxFibers`:return`${t} gathered flax fibers`;case`gatherMeadowIngredients`:return`${t} gathered meadow ingredients`;case`gatherForestIngredients`:return`${t} gathered forest forage`;case`gatherRiverIngredients`:return`${t} gathered river forage`;case`gatherMineIngredients`:return`${t} gathered mine forage`;case`gatherDesertIngredients`:return`${t} gathered desert forage`;case`gatherSand`:return`${t} gathered sand`;case`gatherWater`:return`${t} gathered water`;case`mineCoal`:return`${t} mined coal`;case`mineCopper`:return`${t} mined copper`;case`mineTin`:return`${t} mined tin`;case`fishRiver`:return`${t} caught river fish`;case`craftLowestTool`:return`${t} balanced tool stock`;case`craftWoodenSpoon`:return`${t} crafted wooden spoons`;case`craftWoodenBowl`:return`${t} carved wooden bowls`;case`craftLeatherBackpack`:return`${t} crafted leather backpacks`;case`chopTrees`:return`${t} chopped trees`;case`huntSmallAnimals`:return`${t} hunted small animals`;case`butcherFish`:return`${t} butchered fish`;case`butcherRabbit`:return`${t} butchered rabbits`;case`butcherSquirrel`:return`${t} butchered squirrels`;case`cookRabbitMeat`:return`${t} cooked rabbit meat`;case`cookSquirrelMeat`:return`${t} cooked squirrel meat`;case`tanHide`:return`${t} tanned hide`}let o=Ia(e);return o?`${t} crafted ${Xa(Za(o)).toLowerCase()}`:`${t} completed work`}function Ha(e,t){let n={},r=Dn(e,t);for(let i of $e){let a=tt[i];if(!a||!Fn(e,i,`character`,t))continue;let o=A(a,In(e,i,`character`,t)*.5*dt());return o<=0?n:(r[a]=A(a,r[a]+o),n[a]=A(a,(n[a]??0)+o),e.seenResources.includes(a)||e.seenResources.push(a),n)}return n}function Ua(e){return{...e,resources:mt(e.resources),resourceCounts:e.resourceCounts?ht(e.resourceCounts):void 0}}function Wa(e){let t=Ta(e);return{resources:t.resources,message:t.message,tone:`gain`}}function Ga(){let e=Aa[G(0,Aa.length-1)],t=wa(e.minWeight,e.maxWeight,1),n=j(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron catches a ${st(e.id,t)} lb ${n}.`,tone:`gain`}}function Ka(e,t){let n=j(t),r=Ci(e,`mining`),i=1+ +(Math.random()<(r>=3?.35:r>=2?.18:0));return{resources:{[t]:i},message:`Cameron mines ${i} ${n}.`,tone:`gain`}}function qa(e){let t=Ei(e,`hunting`),n=Math.min(.76,.52+t*.025),r=ja[Math.random()<n?0:1],i=Math.min(.8,Math.max(0,t-2.4)*.12),a=wa(r.minWeight,r.maxWeight+i,1),o=j(r.id);return{resources:{[r.id]:a},resourceCounts:{[r.id]:1},message:`Cameron brings back a ${st(r.id,a)} lb ${o}.`,tone:`gain`}}function Ja(e,t){if(In(e,t)<=0)return{resources:{},message:`Cameron has no ${t} to butcher.`,tone:`gain`};let n=t===`rabbit`?`rabbitMeat`:`squirrelMeat`,r=t===`rabbit`?G(1,2):1,i=Ci(e,`butchering`),a=Si(e,`butchering`),o=i>=3?.18:i>=2?.08:0,s=Math.min(.9,(t===`rabbit`?.65:.42)+o),c=Math.min(.75,(t===`rabbit`?.24:.14)+o),l=+(Math.random()<s),u=+(Math.random()<c),d={[n]:r,hide:a?l:0,bone:a?u:0},f=Object.entries({hide:l,bone:u}).filter(([,e])=>a&&e>0).map(([e,t])=>`${t} ${j(e)}`);return{resources:d,message:`Cameron butchers a ${t} for ${r} ${j(n)}${f.length?`, plus ${f.join(` and `)}`:``}.`,tone:`gain`}}function Ya(e,t){return t===1?e:`${e}s`}function Xa(e){return e.endsWith(`Knife`)?`${e.slice(0,-5)}Knives`:e.endsWith(`s`)?e:`${e}s`}function Za(e){return w.find(t=>t.id===e)?.label??`Tool`}var Qa=7200*1e3;function $a(e,t=Date.now()){let n=ka.filter(({actionId:n})=>z(e,n,t)&&F(e,q(n)));return n.length?n.reduce((t,n)=>Na(e,n.toolId)<Na(e,t.toolId)?n:t,n[0]).actionId:null}function eo(e,t,n=e.selectedCharacterId,r=Date.now()){let i=W(e,t),a=e.characters.find(e=>e.id===n);return!i||!a?!1:(a.actionLoopId=i.id,to(e,i.id,n,r))}function to(e,t,n=e.selectedCharacterId,r=Date.now()){let i=W(e,t);return i?.actionIds.length?go(e,{actionId:i.actionIds[0],characterId:n,phase:`working`,loopActionIds:[...i.actionIds],loopLocationIds:ya(i),loopIndex:0,startedAt:r,endsAt:r,repeat:!0},0,r):!1}function q(e){let t=l(e);if(t)return t.cost;let n=r(e);if(n)return n.cost;let i=y(e);if(i)return i.cost;let a=Ia(e);if(a)return Ma(a);switch(e){case`craftWoodenBowl`:return{wood:1};case`cookRabbitMeat`:return{rabbitMeat:1};case`cookSquirrelMeat`:return{squirrelMeat:1};case`craftWoodenSpoon`:return{wood:1};case`tanHide`:return{hide:1};case`craftLowestTool`:return{};default:return{}}}function J(e,t,n=Date.now(),r=e.selectedCharacterId){return no(e,r)?!1:t===`craftLowestTool`?z(e,t,n)&&!!$a(e,n):t===`butcherFish`?z(e,t,n)&&za(e,r):t===`butcherRabbit`?z(e,t,n)&&Fn(e,`rabbit`):t===`butcherSquirrel`?z(e,t,n)&&Fn(e,`squirrel`):z(e,t,n)&&F(e,q(t))}function no(e,t){return!!e.combat?.encounter?.units.some(e=>e.kind===`party`&&e.characterId===t)}function ro(e,t,n=Date.now(),r={}){let i=C(t),a=e.selectedCharacterId;if(!i||!J(e,t,n,a))return!1;let o=Gi(t,r.locationId),s=qi(e,a),c=ra(s,o),l={actionId:t,characterId:a,phase:c>0?`travelingTo`:`working`,originLocationId:s,targetLocationId:o,locationId:o===`camp`?void 0:o,loopActionIds:[t],loopLocationIds:[o===`camp`?null:o],loopIndex:0,startedAt:n,endsAt:n+(c||i.durationMs),repeat:!0};return c<=0&&Ji(e,a,o),ua(e,l),fa(e,n),!0}function io(e,t=Date.now()){let n=V(e);if(!n)return;let r=C(n.actionId),i=Yi(n,qi(e,n.characterId));if(Ji(e,n.characterId,i),i!==`camp`){ua(e,{...n,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i,startedAt:t,endsAt:t+ra(i,`camp`),repeat:!1}),fa(e,t),P(e,`${U(e,n.characterId)} stops ${r?.verb??`working`} at ${Xi(i)} and heads back to camp.`,`muted`,t,`character`);return}let a=i===`camp`?ao(e,t,n.characterId):!1;H(e,n.characterId),fa(e,t),P(e,a?`${U(e,n.characterId)} stops ${r?.verb??`working`} and returns to camp.`:`${U(e,n.characterId)} stops ${r?.verb??`working`} at ${Xi(i)}.`,`muted`,t,`character`)}function ao(e,t=Date.now(),n=e.selectedCharacterId){if(qi(e,n)!==`camp`)return!1;let r=Nn(e,n);return Object.keys(r).length<=0?!1:(ln(e,{aggregateKey:`deposit:camp`,text:`${U(e,n)} returned resources to camp`,resources:r,tone:`gain`,now:t,scope:`character`}),fa(e,t),!0)}function oo(e,t=Date.now()){let n=Math.min(t,e.lastSimulatedAt+Qa);la(e);let r=0;for(;r<500;){let t=yo(e,n),i=da(e),a=i?.endsAt??1/0;if(t===null&&a>n)break;if(t!==null&&t<=a){Kr(e,t);for(let n of[...ca(e)])vo(Zi(n))&&(P(e,`${U(e,n.characterId)} stops cooking as the campfire goes out.`,`warning`,t,`character`),H(e,n.characterId));continue}if(i&&a<=n){let t=i,a=t.endsAt;co(e,t,a,n),r+=1;continue}break}t>n&&r>0&&P(e,`The saved trail grows quiet after two hours away.`,`muted`,n,`character`),e.lastSimulatedAt=t,e.updatedAt=t;for(let t of e.characters)V(e,t.id)||pa(e,!1,t.id);la(e)}function so(e,t=Date.now(),n=e.selectedCharacterId){let r=V(e,n);if(!r)return 0;let i=r.endsAt-r.startedAt;return i<=0?1:(t-r.startedAt)/i}function co(e,t,n,r){if(t.phase===`travelingTo`){jt(e,t.endsAt-t.startedAt,n),Ji(e,t.characterId,Ki(t)),fo(e,t,n);return}if(t.phase===`travelingBack`){if(jt(e,t.endsAt-t.startedAt,n),Ji(e,t.characterId,`camp`),ao(e,n,t.characterId),t.repeat&&go(e,t,$i(t),n))return;if(t.repeat&&J(e,t.actionId,n,t.characterId)){po(e,t,n);return}H(e,t.characterId);return}if(t.phase===`followUp`){lo(e,t,n,r);return}uo(e,t,n)}function lo(e,t,n,r){let i=Zi(t);if(i!==`butcherFish`){mo(e,t,r,ta(t));return}if(Ra(e,t.characterId,U(e,t.characterId),n),kt(e,i,n),za(e,t.characterId)){ho(e,t,t.loopIndex??0,n);return}mo(e,t,r,ta(t))}function uo(e,t,n){let r=xo(e,t.actionId,n);if(!r){P(e,`${U(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),H(e,t.characterId);return}let i=q(r);if(!F(e,i)){P(e,`${U(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),H(e,t.characterId);return}if(Cn(e,i),r===`butcherFish`){if(Ra(e,t.characterId,U(e,t.characterId),n),kt(e,r,n),t.repeat&&J(e,r,n,t.characterId)){fo(e,t,n);return}H(e,t.characterId);return}let a=Ia(r);if(a){if(La(e,t.characterId,U(e,t.characterId),a,n),kt(e,r,n),t.repeat&&J(e,r,n,t.characterId)){fo(e,t,n);return}H(e,t.characterId);return}let o=Pa(e,r),s=Bi(r)?Mn(e,o.resources,o.resourceCounts,t.characterId):o.resources;if(Bi(r)?_o(e,t.characterId,r,s,n):(wn(e,o.resources,o.resourceCounts),ln(e,{aggregateKey:`action:${t.characterId}:${r}`,text:Va(r,U(e,t.characterId)),resources:o.resources,tone:o.tone,now:n,scope:`character`})),Ba(e,r,n,U(e,t.characterId)),kt(e,r,n),Bi(r)&&bo(o.resources,s,e,t.characterId)){let i=ea(t);if(r===`fishRiver`&&Qi(t,i)===`butcherFish`&&za(e,t.characterId)){ho(e,t,i,n);return}mo(e,t,n,ta(t));return}if(!Bi(r)&&zi(t).length>1){go(e,t,ta(t),n);return}if(t.repeat&&J(e,r,n,t.characterId)){fo(e,t,n);return}H(e,t.characterId)}function fo(e,t,n){let r=C(t.actionId);if(!r){H(e,t.characterId);return}let i=Ki(t);Ji(e,t.characterId,i),ua(e,{...t,phase:`working`,originLocationId:i,targetLocationId:i,locationId:i===`camp`?void 0:i,startedAt:n,endsAt:n+r.durationMs})}function po(e,t,n){let r=Wi(t,t.loopIndex??0),i=qi(e,t.characterId),a=ra(i,r);if(a<=0){fo(e,{...t,targetLocationId:r,locationId:r===`camp`?void 0:r},n);return}ua(e,{...t,phase:`travelingTo`,originLocationId:i,targetLocationId:r,locationId:r===`camp`?void 0:r,startedAt:n,endsAt:n+a})}function mo(e,t,n,r=ta(t)){let i=Ki(t);ua(e,{...t,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i===`camp`?void 0:i,nextLoopIndex:r,startedAt:n,endsAt:n+ra(i,`camp`)})}function ho(e,t,n,r){let i=Qi(t,n),a=C(i);if(!a){mo(e,t,r,ta(t));return}ua(e,{...t,actionId:i,phase:`followUp`,originLocationId:Ki(t),targetLocationId:Ki(t),loopIndex:n,startedAt:r,endsAt:r+a.durationMs})}function go(e,t,n,r){let i=zi(t);if(!i.length)return!1;let a=B(n,i),o=i[a];if(o===`butcherFish`||!J(e,o,r,t.characterId)){let n=na(t,a);return n===a?!1:go(e,t,n,r)}let s=C(o);if(!s)return!1;let c=Wi(t,a),l=qi(e,t.characterId),u=ra(l,c);return ua(e,{...t,actionId:o,phase:u>0?`travelingTo`:`working`,originLocationId:l,targetLocationId:c,locationId:c===`camp`?void 0:c,loopActionIds:i,loopLocationIds:Hi(t,i),loopIndex:a,nextLoopIndex:void 0,followUpActionId:void 0,startedAt:r,endsAt:r+(u||s.durationMs)}),u<=0&&Ji(e,t.characterId,c),!0}function _o(e,t,n,r,i){Object.values(r).some(e=>(e??0)>0)&&ln(e,{aggregateKey:`action:${t}:${n}`,text:Va(n,U(e,t)),resources:r,tone:`gain`,now:i,scope:`character`})}function vo(e){return e===`cookRabbitMeat`||e===`cookSquirrelMeat`}function yo(e,t){let n=Gr(e);return n&&n<=t?n:null}function bo(e,t,n,r){let i=Object.values(e).reduce((e,t)=>e+(t??0),0),a=Object.values(t).reduce((e,t)=>e+(t??0),0);return An(n,r)>=jn(n,r)||i>0&&a<i}function xo(e,t,n){return t===`craftLowestTool`?$a(e,n):t}S.map(e=>e.id);var So=1.4,Co=.8;function wo(e){let t=w.filter(t=>t.weapon&&yi(e,t.id));return t.sort((e,t)=>No(t.id)-No(e.id)),t[0]?.id??null}function To(e){return e?ne[e]??`fighter`:`fighter`}function Eo(e,t=e.selectedCharacterId){let n=wo(e),r=n?_i(n):null,i=To(n),a=ce(i),o=r?.weapon;return{classId:i,classLabel:a.label,weaponId:n,weaponLabel:r?.label??`Unarmed`,damage:o?.damage??So,speed:o?.speed??Co,range:o?.range??a.range,attackRange:Mo(o?.range??a.range),maxHp:a.maxHp,maxMana:a.maxMana}}function Do(e,t=e.selectedCharacterId){let n=e.characters.find(e=>e.id===t);if(!n)return Zt();let r=Eo(e,t),i=n.combat??Zt(),a=r.maxHp,o=r.maxMana,s=i.maxHp>0?i.hp/i.maxHp:1,c=i.maxMana>0?i.mana/i.maxMana:1;return n.combat={maxHp:a,hp:i.hp<=0?0:Fo(Math.round(a*s),1,a),maxMana:o,mana:o<=0?0:Fo(Math.round(o*c),0,o)},n.combat}function Oo(e){let t=en(),n=e.classProgress;if(n)for(let e of te)t[e.id]={...t[e.id],...n[e.id]??{}};return e.classProgress=t,t}function ko(e,t,n,r,i=Date.now()){let a=Math.max(0,Math.floor(r));if(a<=0)return;let o=e.characters.find(e=>e.id===t);if(!o)return;let s=Oo(o)[n];s.totalXp+=a,s.xp=Math.min(M(gt),s.xp+a),s.level=Po(s.xp),e.updatedAt=i,e.lastSimulatedAt=i}function Ao(e){let t=M(e.level),n=e.level>=1e3?t:M(e.level+1),r=Math.max(0,n-t),i=Math.max(0,Math.min(e.xp-t,r));return{currentLevelXp:t,nextLevelXp:n,xpIntoLevel:i,xpForLevel:r,ratio:r<=0?1:i/r,atCap:e.level>=gt}}function jo(e){return N(e)}function Mo(e){return e===`ranged`?3:e===`focus`?2:1}function No(e){let t=_i(e)?.weapon;if(!t)return 0;let n=t.range===`ranged`?.35:t.range===`focus`?.2:0;return t.damage*t.speed+n}function Po(e){let t=1;for(;t<1e3&&e>=M(t+1);)t+=1;return t}function Fo(e,t,n){return Number.isFinite(e)?Math.min(n,Math.max(t,e)):t}var Io=1e3,Lo=120,Ro=24,zo=5,Bo=22;function Vo(e,t=e.selectedCharacterId,n=`ruins`,r=Date.now()){fs(e);let i=e.characters.find(e=>e.id===t);if(!i||Wo(e,t)||ds(e,t))return!1;let a=ue(n),o=Qo(e,n,r),s=Eo(e,t),c=Do(e,t);c.hp<=0&&(c.hp=c.maxHp),c.mana<=0&&c.maxMana>0&&(c.mana=Math.ceil(c.maxMana*.5));let l=rs(o);return o.units.push({id:`party-${i.id}`,kind:`party`,characterId:i.id,name:i.name,hp:c.hp,maxHp:c.maxHp,mana:c.mana,maxMana:c.maxMana,x:l.x,y:l.y,damage:us(e,i.id,s.damage),attackRange:s.attackRange,actEveryMs:ls(s.speed),nextActAt:r+ls(s.speed),classId:s.classId,weaponId:s.weaponId??void 0}),i.condition=`working`,e.combat.selectedLocationId=n,o.message=`${i.name} enters ${a.label}.`,ps(e,o.message,`muted`,r),Xo(o,r),ms(e,r),!0}function Ho(e,t=e.selectedCharacterId,n=Date.now()){fs(e);let r=e.combat.encounter;if(!r)return!1;let i=Go(e,t);if(!i)return!1;ts(e,i),r.units=r.units.filter(e=>e.id!==i.id);let a=e.characters.find(e=>e.id===t);return a&&!ds(e,t)&&(a.condition=`resting`),ps(e,`${i.name} withdraws from The Ruins.`,`warning`,n),Ko(r).length?(r.updatedAt=n,r.message=`${i.name} withdraws.`):e.combat.encounter=null,ms(e,n),!0}function Uo(e,t=Date.now()){fs(e);let n=e.combat.encounter;if(!n)return;let r=0;for(;n&&n.updatedAt+Io<=t&&r<Lo;){let t=n.updatedAt+Io;Jo(e,n,t),n=e.combat.encounter,n&&(n.updatedAt=t),r+=1}r>0&&ms(e,Math.min(t,e.combat.encounter?.updatedAt??t))}function Wo(e,t){return!!Go(e,t)}function Go(e,t){return e.combat?.encounter?.units.find(e=>e.kind===`party`&&e.characterId===t)??null}function Ko(e){return e?.units.filter(e=>e.kind===`party`&&e.hp>0)??[]}function qo(e){return e?.units.filter(e=>e.kind===`enemy`&&e.hp>0)??[]}function Jo(e,t,n){if(!Ko(t).length){$o(e,t,n);return}if(!qo(t).length){Xo(t,n);return}let r=t.units.filter(e=>e.hp>0&&e.nextActAt<=n).sort((e,t)=>e.nextActAt-t.nextActAt);for(let i of r){if(i.hp<=0||e.combat.encounter!==t)continue;let r=i.kind===`party`?qo(t):Ko(t);if(!r.length)continue;let a=os(i,r);a&&(ss(i,a)<=i.attackRange?Yo(e,t,i,a,n):(ns(t,i,a),t.message=`${i.name} moves closer.`),i.nextActAt=n+cs(i))}if(t.units=t.units.filter(e=>e.kind===`party`||e.hp>0),es(e,t),!Ko(t).length){$o(e,t,n);return}qo(t).length||(t.wave+=1,Xo(t,n))}function Yo(e,t,n,r,i){let a=Math.max(1,Math.round(n.damage));if(r.hp=Math.max(0,r.hp-a),t.message=`${n.name} hits ${r.name} for ${a}.`,n.kind===`party`&&n.characterId&&n.classId&&ko(e,n.characterId,n.classId,r.hp<=0?zo+Bo:zo,i),r.kind===`enemy`&&r.hp<=0){t.defeatedEnemies+=1,ps(e,`${n.name} defeats ${r.name}.`,`gain`,i);return}r.kind===`party`&&r.hp<=0&&(ts(e,r),ps(e,`${r.name} is forced back from the fight.`,`warning`,i))}function Xo(e,t){if(qo(e).length||!Ko(e).length)return;let n=Math.min(3,1+Math.floor((e.wave-1)/2));for(let r=0;r<n;r+=1)e.units.push(Zo(e,r,t));e.message=`Goblin wave ${e.wave} enters The Ruins.`,e.updatedAt=t}function Zo(e,t,n){let r=ue(e.locationId),i=le(`goblin`),a=is(e,t);return{id:`goblin-${e.wave}-${t+1}-${n}`,kind:`enemy`,enemyId:i.id,name:i.label,hp:i.maxHp,maxHp:i.maxHp,mana:i.maxMana,maxMana:i.maxMana,x:Math.min(r.gridWidth-1,a.x),y:Math.min(r.gridHeight-1,a.y),damage:i.damage,attackRange:i.attackRange,actEveryMs:i.actEveryMs,nextActAt:n+i.actEveryMs}}function Qo(e,t,n){return e.combat.encounter?.locationId===t||(e.combat.encounter={id:`combat-${t}-${n}`,locationId:t,startedAt:n,updatedAt:n,wave:1,defeatedEnemies:0,units:[],message:`The Ruins are quiet.`}),e.combat.encounter}function $o(e,t,n){es(e,t);for(let n of t.units.filter(e=>e.kind===`party`)){let t=n.characterId?e.characters.find(e=>e.id===n.characterId):null;t&&!ds(e,t.id)&&(t.condition=`resting`)}ps(e,`The party withdraws from The Ruins to recover.`,`warning`,n),e.combat.encounter=null,ms(e,n)}function es(e,t){for(let n of t.units)n.kind===`party`&&ts(e,n)}function ts(e,t){if(!t.characterId)return;let n=e.characters.find(e=>e.id===t.characterId);n&&(n.combat={hp:t.hp,maxHp:t.maxHp,mana:t.mana,maxMana:t.maxMana})}function ns(e,t,n){let r=ue(e.locationId),i=new Set(e.units.filter(e=>e.hp>0&&e.id!==t.id).map(e=>`${e.x},${e.y}`)),a=Math.sign(n.x-t.x),o=Math.sign(n.y-t.y),s=[{x:t.x+a,y:t.y},{x:t.x,y:t.y+o},{x:t.x,y:t.y-o},{x:t.x-a,y:t.y}].filter(e=>e.x>=0&&e.y>=0&&e.x<r.gridWidth&&e.y<r.gridHeight&&!i.has(`${e.x},${e.y}`)).sort((e,t)=>ss(e,n)-ss(t,n))[0];s&&(t.x=s.x,t.y=s.y)}function rs(e){let t=ue(e.locationId);return as(e,[Math.floor(t.gridHeight/2),1,t.gridHeight-2,0,t.gridHeight-1].map(e=>({x:0,y:e})))??{x:0,y:0}}function is(e,t){let n=ue(e.locationId),r=[Math.floor(n.gridHeight/2),1,n.gridHeight-2,0,n.gridHeight-1].flatMap(e=>[{x:n.gridWidth-1,y:e},{x:n.gridWidth-2,y:e}]);return as(e,r.slice(t).concat(r.slice(0,t)))??{x:n.gridWidth-1,y:Math.floor(n.gridHeight/2)}}function as(e,t){let n=new Set(e.units.filter(e=>e.hp>0).map(e=>`${e.x},${e.y}`));return t.find(e=>!n.has(`${e.x},${e.y}`))??null}function os(e,t){return t.slice().sort((t,n)=>ss(e,t)-ss(e,n))[0]??null}function ss(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function cs(e){return Math.max(500,e.actEveryMs)}function ls(e){return Math.max(900,Math.round(2400/Math.max(.4,e)))}function us(e,t,n){let r=e.characters.find(e=>e.id===t);if(!r)return n;let i=Eo(e,t).classId,a=r.classProgress?.[i]?.level??1;return n+Math.max(0,a-1)*.08}function ds(e,t){return e.currentActions.some(e=>e.characterId===t)}function fs(e){e.combat??=tn()}function ps(e,t,n,r){e.combat.log=[{id:`${r}-${e.combat.log.length}-${t.slice(0,12)}`,time:r,text:t,tone:n},...e.combat.log].slice(0,Ro)}function ms(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function hs(e,t,n=Date.now()){let r=ge(t);return!r||!xs(e,r,n)?!1:(Cn(e,_e(r)),e.cooking.queue.push({id:`${n}-${r.id}-${e.cooking.queue.length+1}`,recipeId:r.id,stationId:r.station,queuedAt:n,startedAt:null,endsAt:null}),js(e,r.id),Es(e,n),Ns(e,n),!0)}function gs(e,t=Date.now()){Es(e,t);let n=0;for(;n<100;){let r=_s(e);if(!r)break;let i=Gr(e);if(!i||i<=t){Os(e,t);break}if(!r.endsAt||r.endsAt>t)break;Ds(e,r,r.endsAt),n+=1,Es(e,r.endsAt)}}function _s(e){return e.cooking.queue.find(e=>e.startedAt!==null&&e.endsAt!==null)??null}function vs(e,t=Date.now()){if(e.startedAt===null||e.endsAt===null)return 0;let n=e.endsAt-e.startedAt;return n<=0?1:Math.max(0,Math.min(1,(t-e.startedAt)/n))}function ys(e){return[...fe].sort((e,t)=>e.levelRequirement-t.levelRequirement||e.name.localeCompare(t.name))}function bs(e){let t=fe.filter(t=>Ms(e,t)).map(e=>e.id);for(let n of t)js(e,n);return t}function xs(e,t,n=Date.now()){let r=typeof t==`string`?ge(t):t;return!!(r&&!Ss(e,r,n))}function Ss(e,t,n=Date.now()){let r=typeof t==`string`?ge(t):t;if(!r)return`Unknown recipe`;if(e.skills.cooking.level<r.levelRequirement)return`Needs Cooking Lv ${r.levelRequirement}`;if(!R(e,n))return`Needs Lit Campfire`;if(e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`)return`Needs cook at camp`;let i=ks(e,r);return i.length?`Needs ${i.join(`, `)}`:``}function Cs(e){let t=mt(ve(e));return Object.entries(t).map(([e,t])=>`${t} ${j(e)}`).join(`, `)}function ws(e){return e.ingredients.map(e=>{if(!e.resourceId)return e.category??`Ingredient`;let t=j(e.resourceId);return e.consumed===!1?`${e.amount} ${t} available`:`${e.amount} ${t}`}).join(`, `)}function Ts(e,t,n=Date.now()){let r=he(t);return r?r.id===`campfire`?R(e,n)?`Campfire lit`:`Needs lit campfire`:`Station unavailable`:`Unknown station`}function Es(e,t){if(bs(e),_s(e)||!R(e,t))return;let n=e.cooking.queue.find(e=>e.startedAt===null&&e.endsAt===null);if(!n)return;let r=ge(n.recipeId);if(!r){e.cooking.queue=e.cooking.queue.filter(e=>e.id!==n.id);return}n.startedAt=t,n.endsAt=t+r.cookTimeMs,Ns(e,t)}function Ds(e,t,n){let r=ge(t.recipeId);if(e.cooking.queue=e.cooking.queue.filter(e=>e.id!==t.id),!r){Ns(e,n);return}let i=mt(ve(r));wn(e,i),Mt(e,r.xpReward,n),e.cooking.completedRecipeCounts[r.id]=(e.cooking.completedRecipeCounts[r.id]??0)+1,js(e,r.id),ln(e,{aggregateKey:`cook:${r.id}`,text:`Cameron cooked ${r.name.toLowerCase()}`,resources:i,tone:`craft`,now:n,scope:`camp`}),Ns(e,n)}function Os(e,t){let n=_s(e);n&&(n.startedAt=null,n.endsAt=null,P(e,`Cooking waits for a lit campfire.`,`warning`,t,`camp`),Ns(e,t))}function ks(e,t){let n=_e(t),r=[];if(!F(e,n)){let t=As(e,n);t&&r.push(t)}for(let n of t.ingredients)!n.resourceId||n.consumed!==!1||(e.inventory[n.resourceId]??0)<n.amount&&r.push(`${n.amount} ${j(n.resourceId)}`);return r}function As(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-(e.inventory[t]??0));a>0&&(n[t]=a)}return Object.keys(n).length?I(n):``}function js(e,t){e.cooking.knownRecipeIds.includes(t)||e.cooking.knownRecipeIds.push(t)}function Ms(e,t){return e.cooking.knownRecipeIds.includes(t.id)?!0:e.skills.cooking.level<t.levelRequirement?!1:t.ingredients.some(t=>!!(t.resourceId&&e.seenResources.includes(t.resourceId)))}function Ns(e,t){e.updatedAt=t}var Ps=``+new URL(`bone-icon-DsPaT320.png`,import.meta.url).href,Fs=``+new URL(`brook-stickleback-icon-CwY54faB.png`,import.meta.url).href,Is=``+new URL(`basket-empty-slot-BQ3m_a4i.png`,import.meta.url).href,Ls=``+new URL(`basket-background-1-border-1-DAqcyfrl.png`,import.meta.url).href,Rs=``+new URL(`camp-location-icon--vnRMwCB.png`,import.meta.url).href,zs=``+new URL(`campfire-2x2-Bq-ELFVu.png`,import.meta.url).href,Bs=``+new URL(`campfire-unlit-2x2-HI8ea9KO.png`,import.meta.url).href,Vs=``+new URL(`coal-icon-CPItI7lv.png`,import.meta.url).href,Hs=``+new URL(`copper-icon-Dl9RQPBM.png`,import.meta.url).href,Us=``+new URL(`craft-materials-bundle-button-D-JGRyoh.png`,import.meta.url).href,Ws=``+new URL(`fish-filet-icon-BHEr_iIj.png`,import.meta.url).href,Gs=``+new URL(`fishing-pole-empty-slot-CBM-0Us1.png`,import.meta.url).href,Ks=``+new URL(`fishing-pole-background-1-border-1-BKeUI82e.png`,import.meta.url).href,Y=``+new URL(`flax-fiber-icon-xz-yYl-m.png`,import.meta.url).href,qs=``+new URL(`forest-location-icon-VKGIFi31.png`,import.meta.url).href,Js=`data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20256'%20role='img'%20aria-label='Desert'%3e%3cdefs%3e%3clinearGradient%20id='sky'%20x1='0'%20x2='0'%20y1='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%23d9a45f'/%3e%3cstop%20offset='0.56'%20stop-color='%23e7c27a'/%3e%3cstop%20offset='1'%20stop-color='%23c78542'/%3e%3c/linearGradient%3e%3clinearGradient%20id='dune'%20x1='0'%20x2='1'%20y1='0'%20y2='0'%3e%3cstop%20offset='0'%20stop-color='%237d5a2d'/%3e%3cstop%20offset='0.45'%20stop-color='%23c5904b'/%3e%3cstop%20offset='1'%20stop-color='%23f0c979'/%3e%3c/linearGradient%3e%3clinearGradient%20id='shadow'%20x1='0'%20x2='1'%20y1='0'%20y2='0'%3e%3cstop%20offset='0'%20stop-color='%233a2b20'/%3e%3cstop%20offset='1'%20stop-color='%239b6730'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='512'%20height='256'%20fill='url(%23sky)'/%3e%3ccircle%20cx='402'%20cy='58'%20r='34'%20fill='%23ffe2a2'/%3e%3cpath%20d='M0%20161c74-39%20139-47%20195-24%2073%2030%20129%2027%20202-7%2043-20%2080-24%20115-12v138H0z'%20fill='url(%23shadow)'/%3e%3cpath%20d='M0%20190c63-27%20137-24%20222%209%2096%2037%20194%2032%20290-14v71H0z'%20fill='url(%23dune)'/%3e%3cpath%20d='M66%20228c52-23%20113-26%20183-7%2094%2025%20164%2023%20234-9'%20fill='none'%20stroke='%23f7d994'%20stroke-width='7'%20stroke-linecap='round'%20opacity='.6'/%3e%3cpath%20d='M93%20202c38-14%2080-15%20126-2'%20fill='none'%20stroke='%23493321'%20stroke-width='5'%20stroke-linecap='round'%20opacity='.38'/%3e%3cpath%20d='M316%20195c41-9%2082-18%20125-36'%20fill='none'%20stroke='%23493321'%20stroke-width='5'%20stroke-linecap='round'%20opacity='.32'/%3e%3cg%20fill='%235d6d3f'%3e%3cpath%20d='M118%20167c-10-12-12-27-5-45%2013%2011%2017%2026%2011%2045z'/%3e%3cpath%20d='M132%20171c-1-19%208-34%2027-45%205%2019-3%2035-22%2047z'/%3e%3cpath%20d='M126%20169c9-16%2024-24%2045-24-5%2020-19%2030-40%2030z'/%3e%3c/g%3e%3cg%20fill='%236f7c48'%3e%3cpath%20d='M338%20146c-9-10-10-22-4-37%2011%2010%2014%2022%208%2037z'/%3e%3cpath%20d='M351%20150c0-16%208-29%2023-38%204%2016-3%2030-19%2039z'/%3e%3cpath%20d='M346%20148c8-13%2020-20%2038-20-5%2017-17%2025-34%2025z'/%3e%3c/g%3e%3c/svg%3e`,Ys=``+new URL(`berry-icon-DEz1wEqt.png`,import.meta.url).href,Xs=``+new URL(`hide-icon-BWeGfM2U.png`,import.meta.url).href,Zs=``+new URL(`leather-backpack-equipped-slot-DhoXwslM.png`,import.meta.url).href,Qs=``+new URL(`meadow-location-icon-v2-CqdYJu9g.png`,import.meta.url).href,$s=``+new URL(`mine-location-icon-BbZJUyhx.png`,import.meta.url).href,ec=``+new URL(`minnow-icon-ANpglcnc.png`,import.meta.url).href,tc=``+new URL(`mudskipper-icon-_bxkPxea.png`,import.meta.url).href,nc=``+new URL(`mushroom-icon-B9zVCy80.png`,import.meta.url).href,rc=``+new URL(`pebble-perch-icon-CHh-9clF.png`,import.meta.url).href,ic=``+new URL(`rabbit-icon-DGNcKYc7.png`,import.meta.url).href,ac=``+new URL(`river-location-icon-v2-BqOU5iqQ.png`,import.meta.url).href,oc=``+new URL(`squirrel-icon-BM6RAXNK.png`,import.meta.url).href,sc=``+new URL(`stick-icon-Q8m3FMqw.png`,import.meta.url).href,cc=``+new URL(`stone-axe-empty-slot-C8iH4xki.png`,import.meta.url).href,lc=``+new URL(`stone-hatchet-background-1-border-1-CZNIcvIL.png`,import.meta.url).href,uc=``+new URL(`stone-knife-background-1-border-1-BKz_ubCn.png`,import.meta.url).href,dc=``+new URL(`stone-knife-empty-slot-Bc5j7Rbw.png`,import.meta.url).href,fc=``+new URL(`stone-pick-axe-empty-slot-DOLVpXRk.png`,import.meta.url).href,pc=``+new URL(`stone-pick-axe-background-1-border-1-DOAIoZ7O.png`,import.meta.url).href,mc=``+new URL(`stone-spear-empty-slot-BTpRxmYT.png`,import.meta.url).href,hc=``+new URL(`stone-spear-background-1-border-1-wlFNpfhc.png`,import.meta.url).href,gc=``+new URL(`stone-icon-yRG7nuNE.png`,import.meta.url).href,_c=``+new URL(`stone-loach-icon-4ySXaf0_.png`,import.meta.url).href,vc=``+new URL(`stone-furnace-2x2-54_TDZso.png`,import.meta.url).href,yc=``+new URL(`short-bow-background-1-border-1-CMIlkEMG.png`,import.meta.url).href,bc=``+new URL(`tin-icon-B9xoPCj0.png`,import.meta.url).href,xc=``+new URL(`hide-tent-2x2-B-STXQiW.png`,import.meta.url).href,Sc=``+new URL(`tanning-rack-2x2-DotflpMM.png`,import.meta.url).href,Cc=``+new URL(`wooden-bowl-background-1-border-1-C2wDRzy6.png`,import.meta.url).href,wc=``+new URL(`wooden-club-background-1-border-1-zKAKo9tf.png`,import.meta.url).href,Tc=``+new URL(`wooden-spoon-background-1-border-1-B1C5KdJm.png`,import.meta.url).href,Ec=``+new URL(`wooden-sword-background-1-border-1-BPis69Er.png`,import.meta.url).href,Dc=``+new URL(`wooden-totem-background-1-border-1-Dk-pmYjA.png`,import.meta.url).href,Oc=``+new URL(`wooden-two-handed-club-background-1-border-1-Dyis-qJI.png`,import.meta.url).href,kc=``+new URL(`wooden-two-handed-sword-background-1-border-1-DVH5QhM0.png`,import.meta.url).href,Ac=``+new URL(`wood-icon-CxwJtOlQ.png`,import.meta.url).href;function jc(e,t,n=Date.now()){Kr(e,n);let r=Ce.find(e=>e.id===t),i=t===`campfire`?R(e,n):t===`hideTent`?!1:e.buildings[t];if(!r||i||e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`||!Ii(e,t,n)||!F(e,r.recipe))return!1;if(Cn(e,r.recipe),t===`campfire`)Ur(e,n),vn(e,t,1),P(e,`Cameron builds a campfire and brings it to flame.`,`craft`,n);else if(t===`hideTent`){let r=_n(e,t);e.buildings[t]=!0,P(e,`Cameron raises hide tent ${r}.`,`craft`,n),xn(e,n)}else e.buildings[t]=!0,vn(e,t,1),P(e,`Cameron builds a ${r.label}.`,`craft`,n);return At(e,t,n),Nc(e,n),!0}function Mc(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-e.inventory[t]);a>0&&(n[t]=a)}return I(n)}function Nc(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function Pc(e){let t=ct(e)?.nutrition;return{hunger:Math.max(0,Math.floor(t?.hunger??0))}}function Fc(e,t){return!Ic(e,t)}function Ic(e,t){if(Pc(t).hunger<=0)return`Not edible`;if(!F(e,{[t]:1}))return`Needs ${j(t)}`;if(zc(t)&&!F(e,{woodenSpoon:1}))return`Needs Wooden Spoon`;let n=e.characters.find(t=>t.id===e.selectedCharacterId);return n?n.needs.hunger>=n.needs.maxHunger?`Hunger full`:``:`No character`}function Lc(e,t,n=Date.now()){if(!Fc(e,t))return!1;let r=e.characters.find(t=>t.id===e.selectedCharacterId);if(!r)return!1;let i=Pc(t);return Cn(e,{[t]:1}),r.needs.hunger=Math.min(r.needs.maxHunger,r.needs.hunger+i.hunger),P(e,`${r.name} eats ${j(t).toLowerCase()} and restores ${i.hunger} hunger.`,`gain`,n,`camp`),e.updatedAt=n,!0}function Rc(e){return ot(e)}function zc(e){return ct(e)?.cooking?.tags.includes(`stew`)??!1}var Bc=[{id:`foraging`,label:`Forage`,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,`gatherFlaxFibers`,`gatherMeadowIngredients`,`gatherForestIngredients`,`gatherRiverIngredients`,`gatherMineIngredients`,`gatherDesertIngredients`,`gatherSand`,`gatherWater`]},{id:`fishing`,label:`Fishing`,actionIds:[`fishRiver`]},{id:`mining`,label:`Mining`,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]},{id:`hunting`,label:`Hunting`,actionIds:[`huntSmallAnimals`]},{id:`woodcutting`,label:`Woodcutting`,actionIds:[`chopTrees`]},{id:`crafting`,label:`Crafting`,actionIds:[`craftLowestTool`,`craftBasket`,`craftWoodenSpoon`,`craftFishingPole`,`craftWoodenBowl`,`craftStoneKnife`,`craftStoneAxe`,`craftStonePickAxe`,`craftStoneSpear`,`craftWoodenClub`,`craftWoodenTwoHandedClub`,`craftWoodenSword`,`craftWoodenTwoHandedSword`,`craftShortBow`,`craftWoodenTotem`]},{id:`smithing`,label:`Smithing`,actionIds:[...a]},{id:`alchemy`,label:`Alchemy`,actionIds:[...e]},{id:`textiles`,label:`Tailoring`,actionIds:[...p]},{id:`butchering`,label:`Butchering`,actionIds:[`butcherFish`,`butcherRabbit`,`butcherSquirrel`]},{id:`cooking`,label:`Cooking`,actionIds:[]},{id:`leatherworking`,label:`Leatherworking`,actionIds:[`tanHide`,`craftLeatherBackpack`]}],Vc=[{id:`gather`,label:`Gather`,filterIds:[`foraging`,`mining`,`fishing`,`hunting`,`woodcutting`]},{id:`processing`,label:`Processing`,filterIds:[`crafting`,`smithing`,`alchemy`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{id:`camp`,label:`Camp`,filterIds:[]}],Hc={crafting:`crafting`,smithing:`smithing`,alchemy:`alchemy`,textiles:`textiles`,foraging:`foraging`,mining:`mining`,fishing:`fishing`,woodcutting:`woodcutting`,hunting:`hunting`,butchering:`butchering`,cooking:`cooking`,leatherworking:`leatherworking`},Uc=[{label:`Gather`,skillIds:[`foraging`,`mining`,`fishing`,`woodcutting`,`hunting`]},{label:`Process`,skillIds:[`crafting`,`smithing`,`alchemy`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{label:`Combat`,skillIds:[]},{label:`Other`,skillIds:[`construction`,`agility`]}],Wc={copper:`Copper Bar`,bronze:`Bronze Bar`},Gc=[{id:`tool`,label:`Tool`},{id:`weapon`,label:`Weapon`},{id:`armor`,label:`Armor`}],Kc=[{id:`brewing`,label:`Brewing`,emptyLabel:`Brewing`},{id:`transmutation`,label:`Transmute`,emptyLabel:`Transmutation`},{id:`decomposition`,label:`Decomp`,emptyLabel:`Decomposition`}],qc={vessel:`Glassware`,potion:`Potions`},Jc={primitive:`Primitive`},Yc={primitive:`Wood, stone, fiber`},Xc=[{id:`tool`,label:`Tool`},{id:`weapon`,label:`Weapon`}],Zc={craftLowestTool:{material:`primitive`,productCategory:`tool`},craftBasket:{material:`primitive`,productCategory:`tool`},craftWoodenSpoon:{material:`primitive`,productCategory:`tool`},craftFishingPole:{material:`primitive`,productCategory:`tool`},craftWoodenBowl:{material:`primitive`,productCategory:`tool`},craftStoneKnife:{material:`primitive`,productCategory:`tool`},craftStoneAxe:{material:`primitive`,productCategory:`tool`},craftStonePickAxe:{material:`primitive`,productCategory:`tool`},craftStoneSpear:{material:`primitive`,productCategory:`weapon`},craftWoodenClub:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedClub:{material:`primitive`,productCategory:`weapon`},craftWoodenSword:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedSword:{material:`primitive`,productCategory:`weapon`},craftShortBow:{material:`primitive`,productCategory:`weapon`},craftWoodenTotem:{material:`primitive`,productCategory:`weapon`}},X=[{id:`meadow`,label:`Meadow`,iconUrl:Qs,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,`gatherMeadowIngredients`]},{id:`river`,label:`River`,iconUrl:ac,actionIds:[`gatherStones`,`gatherFlaxFibers`,`gatherWater`,`gatherRiverIngredients`]},{id:`forest`,label:`Forest`,iconUrl:qs,actionIds:[`gatherForestIngredients`]},{id:`mine`,label:`Mine`,iconUrl:$s,actionIds:[`gatherMineIngredients`]},{id:`desert`,label:`Desert`,iconUrl:Js,actionIds:[`gatherSand`,`gatherDesertIngredients`]}],Qc={label:`Camp`,iconUrl:Rs},$c=24,el=[`fishingPole`,`stoneKnife`,`copperKnife`,`bronzeKnife`,`stoneSpear`,`woodenClub`,`woodenTwoHandedClub`,`woodenSword`,`woodenTwoHandedSword`,`shortBow`,`woodenTotem`,`stoneAxe`,`copperHatchet`,`bronzeHatchet`,`stonePickAxe`,`copperPickaxe`,`bronzePickaxe`,`basket`,`leatherBackpack`,null,null,null,null,null],tl=[{label:`Armor`,slots:[`Head`,`Face`,`Neck`,`Shoulders`,`Chest`,`Backpack`,`Cape`,`Arms`,`Hands`,`Waist`,`Legs`,`Feet`]},{label:`Accessories`,slots:[`Ring Slot 1`,`Ring Slot 2`,`Toe Ring 1`,`Toe Ring 2`,`Bracelet 1`,`Bracelet 2`,`Earring 1`,`Earring 2`]},{label:`Held Gear`,slots:[`Main Hand`,`Off Hand`,`Quiver`,`Ammo Belt`]}],nl={basket:Ls,fishingPole:Ks,leatherBackpack:Zs,stoneKnife:uc,stoneAxe:lc,stonePickAxe:pc,stoneSpear:hc,woodenClub:wc,woodenTwoHandedClub:Oc,woodenSword:Ec,woodenTwoHandedSword:kc,shortBow:yc,woodenTotem:Dc},rl={basket:Is,fishingPole:Gs,stoneKnife:dc,stoneAxe:cc,stonePickAxe:fc,stoneSpear:mc,woodenClub:wc,woodenTwoHandedClub:Oc,woodenSword:Ec,woodenTwoHandedSword:kc,shortBow:yc,woodenTotem:Dc},il={basket:`Basket`,fishingPole:`Pole`,leatherBackpack:`Backpack`,stoneKnife:`Knife`,stoneAxe:`Hatchet`,stonePickAxe:`Pick`,stoneSpear:`Spear`,woodenClub:`Club`,woodenTwoHandedClub:`2H Club`,woodenSword:`Sword`,woodenTwoHandedSword:`2H Sword`,shortBow:`Bow`,woodenTotem:`Totem`},al={blueberries:Ys,bone:Ps,brookStickleback:Fs,brookSticklebackFilet:Ws,coal:Vs,copper:Hs,minnowFilet:Ws,mudskipperFilet:Ws,pebblePerchFilet:Ws,stoneLoachFilet:Ws,flaxFiber:Y,chamomile:Y,clover:Y,dandelionGreens:Y,dirtyBowl:Ac,elderflowers:Y,fennel:Y,hearthcap:nc,hide:Xs,lavender:Y,meadowStew:nc,minnow:ec,mint:Y,mudskipper:tc,pebblePerch:rc,rabbit:ic,rabbitStew:ic,roseHips:Ys,rootStew:nc,sorrel:Y,squirrelHerbStew:oc,squirrel:oc,strawberries:Ys,stick:sc,stone:gc,stoneLoach:_c,tin:bc,water:ac,wildCarrot:Y,wildGarlic:Y,wildGarlicRabbitStew:ic,wildOnion:Y,yarrow:Y,woodenBowl:Cc,woodenSpoon:Tc,wood:Ac},ol={basket:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+5 lb carry capacity`},{label:`Capacity`,value:`15 lb equipped`}],leatherBackpack:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+15 lb carry capacity`},{label:`Capacity`,value:`25 lb equipped`}],fishingPole:[{label:`Slot`,value:`Fishing tool`},{label:`Effect`,value:`Fishing River unlocked`},{label:`Use`,value:`River fishing`}],stoneKnife:[{label:`Slot`,value:`Butchering weapon`},{label:`Unlocks`,value:`Hide and bone recovery`},{label:`Use`,value:`Butchering and combat`}],stoneAxe:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Chop Trees unlocked`},{label:`Wood yield`,value:`2-4`}],stonePickAxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Future mining work`},{label:`Use`,value:`Breaking stone`}],stoneSpear:[{label:`Slot`,value:`Two-handed weapon`},{label:`Effect`,value:`Hunt Small Animals unlocked`},{label:`Targets`,value:`Rabbit, Squirrel`}],copperPickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Mining upgrade`},{label:`Durability`,value:`2x stone`}],copperHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Woodcutting upgrade`},{label:`Durability`,value:`Better than stone`}],copperKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Cleaner butchering`},{label:`Durability`,value:`Better than stone`}],bronzePickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Best early mining`},{label:`Durability`,value:`Better than copper`}],bronzeHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Best early chopping`},{label:`Durability`,value:`Better than copper`}],bronzeKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Best early butchering`},{label:`Durability`,value:`Better than copper`}]};function sl(e){let t=w.find(t=>t.id===e),n=ol[e]??[];return t?.weapon?[{label:`Slot`,value:`${t.weapon.hands}H ${cl(t.weapon.range)} weapon`},{label:`Power`,value:ul(t.weapon.damage)},{label:`Speed`,value:`${ul(t.weapon.speed)}x`},{label:`Tier`,value:ll(t.tier)},...n.filter(e=>e.label!==`Slot`)]:n}function cl(e){switch(e){case`ranged`:return`ranged`;case`focus`:return`focus`;case`melee`:return`melee`}}function ll(e){return e[0].toUpperCase()+e.slice(1)}function ul(e){return Number.isInteger(e)?`${e}`:e.toFixed(1)}function dl(e,t){let n=`gather`,r=`foraging`,i=`meadow`,a=`inventory`,o=`primitive`,s=`copper`,c=`brewing`,l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,g=null,_=null,v=0,ee=null,y=null;return e.addEventListener(`click`,e=>{let y=e.target.closest(`[data-command]`);if(!y||y.disabled||y.dataset.disabled===`true`)return;let b=y.dataset.command,x=y.dataset.id,S=ee;if(S){if(b===`set-test-reward-multiplier`&&(x===`10`||x===`100`)){t.setTestRewardMultiplier(Number(x)),t.requestRender();return}if(b===`set-action-category`&&Yu(x)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,n=x;let e=Ju(n);e.length&&!e.some(e=>e.id===r)&&(r=e[0]?.id??r),t.requestRender();return}if(b===`set-action-filter`&&$u(x)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,r=x,t.requestRender();return}if(b===`select-smithing-material`&&Xu(x)){s=x,t.requestRender();return}if(b===`select-alchemy-panel`&&Zu(x)){c=x,t.requestRender();return}if(b===`select-crafting-material`&&Qu(x)){o=x,t.requestRender();return}if(b===`set-location`&&rd(x)){u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,i=x,t.requestRender();return}if(b===`set-character-detail-tab`&&id(x)){a=x,l=!1,u=!1,d=!1,f=!0,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`toggle-camp-log`){l=!l,u=!1,d=!1,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`open-party`){l=!1,u=!0,d=!1,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`open-character-panel`){l=!1,u=!1,d=!0,f=!1,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`open-character-details`){l=!1,u=!1,d=!1,f=!0,p=!1,m=!1,h=!1,t.requestRender();return}if(b===`open-settings`){l=!1,u=!1,d=!1,f=!1,p=!1,h=!1,m=!0,t.requestRender();return}if(b===`open-action-loops`){l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=!0,t.requestRender();return}if(b===`open-combat`){l=!1,u=!1,d=!1,f=!1,p=!0,m=!1,h=!1,t.requestRender();return}if(b===`dispatch-combat`){Vo(S,y.dataset.characterId??S.selectedCharacterId,`ruins`,t.getNow()),u=!0,p=!1,l=!1,d=!1,f=!1,m=!1,h=!1,t.persist(),t.requestRender();return}if(b===`recall-combat`){Ho(S,y.dataset.characterId??S.selectedCharacterId,t.getNow()),u=!0,p=!1,l=!1,d=!1,f=!1,m=!1,h=!1,t.persist(),t.requestRender();return}if(b===`select-character`&&x&&S.characters.some(e=>e.id===x)){S.selectedCharacterId=x,_=nd(S)??_,u=!1,d=!0,f=!1,t.persist(),t.requestRender();return}if(b===`select-loop-step`){_=td(y,S,_),v=ed(x,v),g=null,t.requestRender();return}if(b===`insert-loop-after`){let e=td(y,S,_);if(!e)return;_=e,v=ed(x,v),g={loopId:e,afterIndex:v},h=!1,t.requestRender();return}if(b===`remove-loop-step`){let e=td(y,S,_);if(!e)return;_=e,v=va(S,e,ed(x,v),t.getNow()),g=null,t.persist(),t.requestRender();return}if(b===`create-loop`){_=ma(S,t.getNow()).id,v=0,g=null,t.persist(),t.requestRender();return}if(b===`delete-loop`){let e=td(y,S,_);if(!e)return;_=ha(S,e,t.getNow()),v=0,g=null,t.persist(),t.requestRender();return}if(b===`assign-loop`){let e=td(y,S,_),n=y.dataset.characterId??S.selectedCharacterId;if(!e)return;_=e,eo(S,e,n,t.getNow()),t.persist(),t.requestRender();return}if(b===`start-action`&&x){let e=x,n=t.getNow();if(g){_a(S,g.loopId,g.afterIndex,e,{locationId:md(e,i)},n)&&(_=g.loopId,v=g.afterIndex+1,g=null,h=!0),t.persist(),t.requestRender();return}g=null,ro(S,e,n,{locationId:md(e,i)})}if(b===`stop-action`&&(g=null,io(S,t.getNow())),b===`deposit-carried`&&(V(S)||ao(S,t.getNow())),b===`build-structure`&&x&&jc(S,x,t.getNow()),b===`queue-cooking`&&x&&hs(S,x,t.getNow()),b===`eat-food`&&x&&Lc(S,x,t.getNow()),b===`prestige-skill`&&Ct(x)){Ot(S,x,t.getNow()),t.persist(),t.requestRender();return}if(b===`reset`){t.reset();return}t.persist(),t.requestRender()}}),e.addEventListener(`pointerover`,t=>{let n=mf(t.target,e);n&&(y=n,hf(e,n))}),e.addEventListener(`pointerout`,t=>{if(!y)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!y.contains(n))&&(y=null,gf(e))}),e.addEventListener(`focusin`,t=>{let n=mf(t.target,e);n&&(y=n,hf(e,n))}),e.addEventListener(`focusout`,t=>{if(!y)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!y.contains(n))&&(y=null,gf(e))}),e.addEventListener(`scroll`,()=>{y?.isConnected&&_f(e,y)},!0),window.addEventListener(`resize`,()=>{y?.isConnected&&_f(e,y)}),(b,x=t.getNow())=>{ee=b;let S=W(b,_??nd(b));_=S?.id??null,v=S?Math.min(S.actionIds.length-1,Math.max(0,v)):0,g&&!W(b,g.loopId)&&(g=null);let C=yf(e);e.innerHTML=fl(b,r,n,a,i,o,s,c,l,u,d,f,p,m,h,g,_,v,x,t.getTestRewardMultiplier()),y=null,bf(e,C)}}function fl(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,ee){return`
    <div class="game-shell" data-editor-id="game-shell" data-editor-label="Game shell" data-editor-files="src/ui/render.ts, src/style.css">
      ${pl(e,n,c,l,u,d,f,p,m,ee)}
      <main class="main-panel" data-editor-id="main-panel" data-editor-label="Main game panel" data-editor-files="src/ui/render.ts, src/style.css">
        ${Fu(e,v)}
        ${d?Bd(e,r):m?Yd(e,g,_,h):p?ml():u?hl(e):f?Dl(e,v):l?gl(e):c?yl(e):Pl(e,n,t,i,a,o,s,h,v)}
      </main>
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `}function pl(e,t,n,r,i,a,o,s,c,l){let u=Z(e),d=Gu(e,u),f=!n&&!r&&!i&&!a&&!o&&!s&&!c;return`
    <aside class="character-sidebar panel" data-editor-id="character-sidebar" data-editor-label="Character sidebar" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${vl(l)}
        </div>
      </div>
      <button
        class="character-card selected ${a?`active`:``}"
        type="button"
        data-command="open-character-details"
        aria-expanded="${a}"
      >
        <span class="portrait" aria-hidden="true">${zl(u.name)}</span>
        <span>
          <strong>${u.name}</strong>
          <small>${d}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${Vc.map(e=>El(e,t,f)).join(``)}
              ${xl(i)}
              ${Cl(r)}
              ${Sl(o)}
            </div>
          </nav>
          <div class="sidebar-footer">
            ${bl(c)}
            ${Ud(n)}
            <button class="ghost-button ${s?`active`:``}" type="button" data-command="open-settings" aria-pressed="${s}">Settings</button>
          </div>
    </aside>
  `}function ml(){return`
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
  `}function hl(e){return`
    <div class="work-area single-panel">
      <section class="panel character-panel" aria-label="Characters" data-editor-id="character-panel" data-editor-label="Character roster panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Characters</span>
        </div>
        <div class="character-roster-grid">
          ${e.characters.map(t=>_l(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function gl(e){let t=e.characters.filter(t=>Wo(e,t.id)).length,n=e.characters.filter(t=>V(e,t.id)).length,r=e.characters.filter(t=>!Wo(e,t.id)&&!V(e,t.id)).length;return`
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
          ${e.characters.map(t=>wl(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function _l(e,t){let n=e.selectedCharacterId===t.id,r=!!(V(e,t.id)||Go(e,t.id)),i=Eo(e,t.id);return`
    <button
      class="character-select-card ${n?`selected`:``} ${r?`working`:``}"
      type="button"
      data-command="select-character"
      data-id="${t.id}"
      aria-pressed="${n}"
    >
      <span class="portrait" aria-hidden="true">${zl(t.name)}</span>
      <span class="character-select-copy">
        <strong>${t.name}</strong>
        <small>${t.epithet}</small>
        <small>${i.classLabel} - ${i.weaponLabel}</small>
        <em>${Gu(e,t)}</em>
      </span>
      <span class="character-select-badge">${n?`Selected`:`Select`}</span>
    </button>
  `}function vl(e){return`
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
  `}function yl(e){return`
    <div class="work-area single-panel">
      ${xf(e,`camp`,`Camp Log`,`main-log-panel panel`)}
    </div>
  `}function bl(e){return`
    <button
      class="action-loops-toggle ${e?`active`:``}"
      type="button"
      data-command="open-action-loops"
      aria-pressed="${e}"
    >
      Action Loops
    </button>
  `}function xl(e){return`
    <button
      class="category-button characters-button ${e?`active`:``}"
      type="button"
      data-command="open-character-panel"
      aria-pressed="${e}"
    >
      <span>Characters</span>
    </button>
  `}function Sl(e){return`
    <button
      class="category-button combat-button ${e?`active`:``}"
      type="button"
      data-command="open-combat"
      aria-pressed="${e}"
    >
      <span>Ruins</span>
    </button>
  `}function Cl(e){return`
    <button
      class="category-button party-button ${e?`active`:``}"
      type="button"
      data-command="open-party"
      aria-pressed="${e}"
    >
      <span>Party</span>
    </button>
  `}function wl(e,t){let n=Go(e,t.id),r=!!n,i=V(e,t.id),a=Eo(e,t.id),o=n??t.combat,s=n?.maxHp??a.maxHp,c=n?.maxMana??a.maxMana,l=Math.min(s,o.hp),u=Math.min(c,o.mana),d=r?`In Ruins`:i?`Working`:`Ready`,f=r?`recall-combat`:`dispatch-combat`,p=!r&&!!i;return`
    <article class="party-member ${r?`dispatched`:``}">
      <div class="party-member-topline">
        <span class="portrait small" aria-hidden="true">${zl(t.name)}</span>
        <span>
          <strong>${t.name}</strong>
          <small>${a.classLabel} - ${d}</small>
        </span>
      </div>
      ${Tl(`HP`,l,s,`hp`)}
      ${Tl(`Mana`,u,c,`mana`)}
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
  `}function Tl(e,t,n,r){let i=Math.max(1,n),a=Math.max(0,Math.min(i,t));return`
    <div class="vitals-row ${r}">
      <span>${e}</span>
      <div class="vitals-track" aria-hidden="true">
        <span style="transform: scaleX(${(a/i).toFixed(4)})"></span>
      </div>
      <strong>${Math.round(a)}/${Math.round(i)}</strong>
    </div>
  `}function El(e,t,n){let r=n&&e.id===t;return`
    <button
      class="category-button ${r?`active`:``}"
      type="button"
      data-command="set-action-category"
      data-id="${e.id}"
      aria-pressed="${r}"
    >
      <span>${e.label}</span>
    </button>
  `}function Dl(e,t){let n=ue(`ruins`),r=e.combat.encounter,i=qo(r).length,a=e.characters.filter(t=>Wo(e,t.id)).length;return`
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
        ${Ol(e,t)}
      </section>
      <aside class="panel combat-side-panel" aria-label="Combat status" data-editor-id="combat-side-panel" data-editor-label="Combat side panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Status</span>
        </div>
        ${Al(e,t)}
        ${Nl(e)}
      </aside>
    </div>
  `}function Ol(e,t){let n=ue(`ruins`),r=e.combat.encounter,i=[];for(let e=0;e<n.gridHeight;e+=1)for(let a=0;a<n.gridWidth;a+=1){let n=r?.units.find(t=>t.x===a&&t.y===e&&t.hp>0)??null;i.push(kl(n,a,e,t))}return`
    <div class="combat-field" style="--combat-cols: ${n.gridWidth}; --combat-rows: ${n.gridHeight};" aria-label="Combat grid">
      ${i.join(``)}
    </div>
    <div class="combat-field-message">${r?.message??`Open Party to dispatch someone.`}</div>
  `}function kl(e,t,n,r){if(!e)return`<div class="combat-cell" data-grid-x="${t}" data-grid-y="${n}"></div>`;let i=e.kind===`enemy`&&e.enemyId?le(e.enemyId).glyph:zl(e.name),a=Math.max(0,e.nextActAt-r);return`
    <div class="combat-cell occupied ${e.kind}" data-grid-x="${t}" data-grid-y="${n}" title="${e.name}">
      <span class="combat-unit-glyph">${i}</span>
      <span class="combat-unit-name">${e.name}</span>
      <span class="combat-unit-timer">${K(a)}</span>
      ${Tl(`HP`,e.hp,e.maxHp,`hp`)}
    </div>
  `}function Al(e,t){let n=e.combat.encounter;return n?`
    <div class="combat-roster-list">
      ${n.units.map(e=>jl(e,t)).join(``)}
    </div>
  `:`<div class="empty-line">No one is fighting.</div>`}function jl(e,t){let n=e.classId?Ml(e.classId):`Enemy`,r=e.hp>0?`Acts in ${K(e.nextActAt-t)}`:`Down`;return`
    <article class="combat-roster-unit ${e.kind}">
      <div>
        <strong>${e.name}</strong>
        <small>${n} - ${r}</small>
      </div>
      ${Tl(`HP`,e.hp,e.maxHp,`hp`)}
      ${e.maxMana>0?Tl(`Mana`,e.mana,e.maxMana,`mana`):``}
    </article>
  `}function Ml(e){return te.find(t=>t.id===e)?.label??`Fighter`}function Nl(e){let t=e.combat.log.slice(0,8);return`
    <section class="combat-event-log" aria-label="Combat log">
      <h3>Combat Log</h3>
      <div class="combat-log-list">
        ${t.length?t.map(e=>`<div class="combat-log-entry ${e.tone}">${e.text}</div>`).join(``):`<div class="empty-line">No combat events yet.</div>`}
      </div>
    </section>
  `}function Pl(e,t,n,r,i,a,o,s,c){return t===`camp`?`
      <div class="work-area camp-work-area">
        ${Fl(e)}
        ${Od(e,c)}
      </div>
    `:`
      <div class="work-area">
      ${Vl(e,t,n)}
      ${Bl(e,n,r,i,a,o,s,c)}
    </div>
  `}function Fl(e){let t=Z(e);return`
    <section class="panel camp-stats-panel" aria-label="Camp stats" data-editor-id="camp-stats-panel" data-editor-label="Camp stats panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Stats</span>
      </div>
      <div class="camp-stat-list">
        <div class="camp-stat-row">
          <span>Population</span>
          <strong>${yn(e)}/${bn(e)}</strong>
        </div>
        <div class="camp-stat-row">
          <span>${t.name} Hunger</span>
          <strong>${Math.round(t.needs.hunger)}/${Math.round(t.needs.maxHunger)}</strong>
        </div>
      </div>
    </section>
  `}function Il(e){return e.targetLocationId?e.targetLocationId:e.phase===`travelingBack`?`camp`:e.locationId??`camp`}function Ll(e,t){return e.originLocationId?e.originLocationId:e.phase===`travelingBack`?e.locationId??t:t}function Rl(e){return e.replace(/[^a-zA-Z0-9_-]/g,`-`)}function zl(e){return(e.trim().split(/\s+/).map(e=>e[0]).join(``)||`?`).slice(0,2).toUpperCase()}function Bl(e,t,n,r,i,a,o,s){return`
    <div class="action-stack">
      ${ld(qu(t),n)}
      ${Ul(e,t,n,r,i,a,o,s)}
    </div>
  `}function Vl(e,t,n){return`
    <section class="panel skill-panel" data-editor-id="skill-filter-panel" data-editor-label="Skill filter panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-grid">
        ${Ju(t).map(t=>Hl(e,t,n)).join(``)}
      </div>
    </section>
  `}function Hl(e,t,n){let r=t.id===n,i=Uu(e,t.actionIds??[]),a=e.skills[Hc[t.id]],o=Et(a),s=i||(o.canPrestige?`Prestige ready`:`Lv ${a.level} - ${N(o.xpIntoLevel)}/${N(o.xpForLevel)} XP`);return`
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
  `}function Ul(e,t,n,r,i,a,o,s){let c=qu(t),l=c.id===`foraging`?pd(fd(c.id,n)):(c.id,c.actionIds??[]);return c.id===`crafting`?Wl(e,l,r,o,s):c.id===`smithing`?iu(e,l,i,o,s):c.id===`alchemy`?mu(e,l,a,o,s):c.id===`textiles`?Cu(e,l,o,s):c.id===`cooking`?Du(e,s):`
      <section class="action-panel" data-editor-id="action-panel-${t}" data-editor-label="${c.label} action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="action-grid">
          ${l.map(t=>bd(e,t,o)).join(``)}
        </div>
    </section>
  `}function Wl(e,t,n,r,i){let a=`craftLowestTool`,o=t.filter(ql),s=Gl(n,o);return`
    <section class="action-panel crafting-action-panel" data-editor-id="action-panel-crafting" data-editor-label="Crafting action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card crafting-panel-card">
        <div class="smithing-workbench crafting-workbench">
          <div class="smithing-furnace-column crafting-workbench-column">
            ${Jl(o,s)}
            ${Yl(e,i)}
            ${t.includes(a)?yd(e,a,r):``}
          </div>
          ${Xl(o,s)}
        </div>
        ${$l(e,o,s,r)}
      </div>
    </section>
  `}function Gl(e,t){let n=Kl(t);return n.includes(e)?e:n[0]??e}function Kl(e){let t=e.map(e=>Zc[e]?.material).filter(e=>!!e);return Array.from(new Set(t))}function ql(e){return!!Zc[e]}function Jl(e,t){let n=e.filter(e=>e!==`craftLowestTool`).length;return`
    <div class="smithing-status-grid crafting-status-grid">
      <div class="smithing-status-item">
        <span>Work Bench</span>
        <strong>Hand Craft</strong>
      </div>
      <div class="smithing-status-item">
        <span>Materials</span>
        <strong>${Jc[t]}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Recipes</span>
        <strong>${n}</strong>
      </div>
    </div>
  `}function Yl(e,t){let n=V(e),r=n?Q(n):null;if(!n||!r||!ql(r))return`
      <div class="smithing-active-row idle crafting-active-row">
        <span>No active craft</span>
        <strong>Bench idle</strong>
      </div>
    `;let i=C(r),a=Ca(so(e,t),0,1);return`
    <div class="smithing-active-row crafting-active-row">
      <span>Active craft</span>
      <strong>${i?.label??`Crafting`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${K(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Xl(e,t){return`
    <div class="smithing-smelt-column crafting-material-column">
      <div class="section-heading">
        <span>Materials Type</span>
      </div>
      <div class="smithing-smelt-grid crafting-material-grid">
        ${Kl(e).map(n=>Zl(e,n,t)).join(``)}
      </div>
    </div>
  `}function Zl(e,t,n){let r=t===n,i=Ql(e,t);return`
    <article class="smithing-smelt-card crafting-material-card ${r?`selected`:``}">
      <button
        class="smithing-smelt-select crafting-material-select"
        type="button"
        data-command="select-crafting-material"
        data-id="${t}"
        aria-pressed="${r}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${xd(`craftLowestTool`)}</span>
        <span class="smithing-recipe-copy">
          <strong>${Jc[t]}</strong>
          <small>${r?`Selected type`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${i} recipes</b>
          <small>${Yc[t]}</small>
        </span>
      </button>
    </article>
  `}function Ql(e,t){return e.filter(e=>e!==`craftLowestTool`&&Zc[e]?.material===t).length}function $l(e,t,n,r){let i=t.filter(e=>e!==`craftLowestTool`&&Zc[e]?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section crafting-recipe-section">
      <div class="section-heading">
        <span>${Jc[n]} Crafting</span>
        <small>Filtered by materials type</small>
      </div>
      <div class="smithing-craft-columns crafting-craft-columns">
        ${Xc.map(t=>eu(e,i,n,t,r)).join(``)}
      </div>
    </div>
  `}function eu(e,t,n,r,i){let a=t.filter(e=>Zc[e]?.productCategory===r.id);return`
    <section class="smithing-craft-column crafting-craft-column" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading">
        <span>${r.label}</span>
        <small>${a.length}</small>
      </div>
      ${a.length?`<div class="smithing-recipe-grid crafting-recipe-grid">${a.map(t=>nu(e,t,i)).join(``)}</div>`:`<div class="smithing-empty-column">No ${Jc[n].toLowerCase()} ${r.label.toLowerCase()} recipes yet.</div>`}
    </section>
  `}function tu(e,t,n){let r=C(t);if(!r||!ql(t))return null;let i=z(e,t),a=q(t),o=J(e,t),s=n?W(e,n.loopId):null,c=V(e),l=!!(n&&s),u=!!(l&&s&&n&&ga(s,n.afterIndex,t)),d=c?Q(c)===t:!1,f=l?!u:!o||d,p=Mc(e,a),m=o?``:i?p:Pi(e,t);return{definition:r,cost:a,unlocked:i,canAssignFollowUp:u,active:d,disabled:f,statusText:l?u?`Set as action loop step`:`Not valid for this loop`:d?`Running`:!o&&m?m:`Ready`,buttonLabel:l?`Set`:d?`Running`:o?`Start`:`Locked`,tooltipRows:Dd(t,r.durationMs)}}function nu(e,t,n){let r=tu(e,t,n);if(!r)return``;let{definition:i,cost:a,unlocked:o,canAssignFollowUp:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=r;return`
    <button
      class="smithing-recipe-card crafting-recipe-card ${c?`active`:``} ${s?`assignable`:``} ${!o&&!s?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="crafting-recipe-${t}"
      data-editor-label="Crafting recipe: ${i.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${l}"
      data-tooltip-source
      aria-disabled="${l}"
      aria-label="${d} ${i.label}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">${xd(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${i.label}</strong>
        <small>${u}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${ru(t)}</b>
        <small>${I(a)}</small>
      </span>
      ${Sd(i.label,f,u)}
    </button>
  `}function ru(e){let t=wd(e);if(t)return`1 ${t.label}`;switch(e){case`craftLowestTool`:return`Lowest Stock`;case`craftWoodenSpoon`:return`1 Wooden Spoon`;case`craftWoodenBowl`:return`1 Wooden Bowl`;default:return C(e)?.label.replace(/^Craft /,`1 `)??`1 item`}}function iu(e,t,n,r,i){let a=t.filter(e=>s.some(t=>t===e)),o=t.filter(e=>c.some(t=>t===e)),l=Yr(e),u=au(n,a);return`
    <section class="action-panel smithing-action-panel" data-editor-id="action-panel-smithing" data-editor-label="Smithing action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card">
        <div class="smithing-workbench">
          <div class="smithing-furnace-column">
            ${ou(l)}
            ${su(e,i)}
          </div>
          ${cu(e,a,u,r)}
        </div>
        ${uu(e,o,u,r)}
      </div>
    </section>
  `}function au(e,t){let n=t.map(e=>l(e)?.material).filter(e=>!!e);return n.includes(e)?e:n[0]??e}function ou(e){return`
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
  `}function su(e,t){let n=V(e),r=n?Q(n):null;if(!n||!r||!Xr(r))return`
      <div class="smithing-active-row idle">
        <span>No active smelt</span>
        <strong>Furnace idle</strong>
      </div>
    `;let i=l(r),a=Ca(so(e,t),0,1);return`
    <div class="smithing-active-row">
      <span>Active smelt</span>
      <strong>${i?.label??`Smelting`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${K(n.endsAt-t)}</em>
      </div>
    </div>
  `}function cu(e,t,n,r){return`
    <div class="smithing-smelt-column">
      <div class="section-heading">
        <span>Smelting</span>
      </div>
      <div class="smithing-smelt-grid">
        ${t.map(t=>lu(e,t,n,r)).join(``)}
      </div>
    </div>
  `}function lu(e,t,n,r){let i=fu(e,t,r);if(!i)return``;let{definition:a,recipe:o,cost:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=i,p=o.material===n,m=d===`Set`?`Set Smelt`:c?`Smelting`:d===`Start`?`Smelt`:d;return`
    <article class="smithing-smelt-card ${p?`selected`:``} ${c?`active`:``}">
      <button
        class="smithing-smelt-select"
        type="button"
        data-command="select-smithing-material"
        data-id="${o.material}"
        aria-pressed="${p}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${xd(t)}</span>
        <span class="smithing-recipe-copy">
          <strong>${Wc[o.material]}</strong>
          <small>${p?`Selected material`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${$r(o.actionId)}</b>
          <small>${I(s)}</small>
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
        ${Sd(a.label,f,u)}
      </button>
    </article>
  `}function uu(e,t,n,r){let i=t.filter(e=>l(e)?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section">
      <div class="section-heading">
        <span>${Wc[n]} Smithing</span>
        <small>Filtered by selected bar</small>
      </div>
      <div class="smithing-craft-columns">
        ${Gc.map(t=>du(e,i,n,t,r)).join(``)}
      </div>
    </div>
  `}function du(e,t,n,r,i){let a=t.filter(e=>(l(e)?.productCategory??`tool`)===r.id);return`
    <section class="smithing-craft-column" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading">
        <span>${r.label}</span>
        <small>${a.length}</small>
      </div>
      ${a.length?`<div class="smithing-recipe-grid">${a.map(t=>pu(e,t,i)).join(``)}</div>`:`<div class="smithing-empty-column">No ${Wc[n].toLowerCase()} ${r.label.toLowerCase()} recipes yet.</div>`}
    </section>
  `}function fu(e,t,n){let r=C(t),i=l(t);if(!r||!i)return null;let a=z(e,t),o=q(t),s=J(e,t),c=n?W(e,n.loopId):null,u=V(e),d=!!(n&&c),f=!!(d&&c&&n&&ga(c,n.afterIndex,t)),p=u?Q(u)===t:!1,m=d?!f:!s||p,h=Mc(e,o),g=s?``:a?h:Pi(e,t);return{definition:r,recipe:i,cost:o,unlocked:a,canAssignFollowUp:f,active:p,disabled:m,statusText:d?f?`Set as action loop step`:`Not valid for this loop`:p?`Running`:!s&&g?g:`Ready`,buttonLabel:d?`Set`:p?`Running`:s?`Start`:`Locked`,tooltipRows:Dd(t,r.durationMs)}}function pu(e,t,n){let r=fu(e,t,n);if(!r)return``;let{definition:i,recipe:a,cost:o,unlocked:s,canAssignFollowUp:c,active:l,disabled:u,statusText:d,buttonLabel:f,tooltipRows:p}=r;return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${xd(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${i.label}</strong>
        <small>${d}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${$r(a.actionId)}</b>
        <small>${I(o)}</small>
      </span>
      ${Sd(i.label,p,d)}
    </button>
  `}function mu(e,t,n,r,i){let a=Kc.some(e=>e.id===n)?n:`brewing`;return`
    <section class="action-panel alchemy-action-panel" data-editor-id="action-panel-alchemy" data-editor-label="Alchemy action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card alchemy-panel-card">
        ${hu(a)}
        ${a===`brewing`?gu(e,t,r,i):Su(a)}
      </div>
    </section>
  `}function hu(e){return`
    <div class="alchemy-mode-tabs" role="tablist" aria-label="Alchemy panels">
      ${Kc.map(t=>{let n=t.id===e;return`
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
  `}function gu(e,t,i,a){let o=t.filter(e=>n.some(t=>t===e)),s=o.filter(e=>r(e)?.kind===`vessel`),c=o.filter(e=>r(e)?.kind===`potion`);return`
    <div class="alchemy-brewing-panel">
      ${_u(e)}
      ${vu(e,a)}
      ${yu(e,qc.vessel,s,i)}
      ${yu(e,qc.potion,c,i)}
    </div>
  `}function _u(e){let t=ai(e);return`
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
  `}function vu(e,t){let n=V(e),i=n?Q(n):null,a=i?r(i):void 0;if(!n||!a)return`
      <div class="smithing-active-row idle alchemy-active-row">
        <span>No active brew</span>
        <strong>Bench idle</strong>
      </div>
    `;let o=Ca(so(e,t),0,1);return`
    <div class="smithing-active-row alchemy-active-row">
      <span>Active alchemy</span>
      <strong>${a.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-alchemy-action-progress style="transform: scaleX(${o.toFixed(4)})"></span>
        <em data-alchemy-action-remaining>${K(n.endsAt-t)}</em>
      </div>
    </div>
  `}function yu(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section alchemy-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid alchemy-recipe-grid">
        ${n.map(t=>bu(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function bu(e,t,n){let r=xu(e,t,n);if(!r)return``;let{definition:i,recipe:a,cost:o,unlocked:s,canAssignFollowUp:c,active:l,disabled:u,statusText:d,buttonLabel:f,tooltipRows:p}=r;return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${xd(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${i.label}</strong>
        <small>${d}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${ci(a.actionId)}</b>
        <small>${I(o)}</small>
      </span>
      ${Sd(i.label,p,d)}
    </button>
  `}function xu(e,t,n){let i=C(t),a=r(t);if(!i||!a)return null;let o=z(e,t),s=q(t),c=J(e,t),l=n?W(e,n.loopId):null,u=V(e),d=!!(n&&l),f=!!(d&&l&&n&&ga(l,n.afterIndex,t)),p=u?Q(u)===t:!1,m=d?!f:!c||p,h=Mc(e,s),g=c?``:o?h:Pi(e,t);return{definition:i,recipe:a,cost:s,unlocked:o,canAssignFollowUp:f,active:p,disabled:m,statusText:d?f?`Set as action loop step`:`Not valid for this loop`:p?`Running`:!c&&g?g:`Ready`,buttonLabel:d?`Set`:p?`Running`:c?`Start`:`Locked`,tooltipRows:Dd(t,i.durationMs)}}function Su(e){let t=Kc.find(t=>t.id===e)??Kc[0];return`
    <div class="alchemy-empty-panel" role="tabpanel" aria-label="${t.emptyLabel}">
      <div class="smithing-empty-column">No ${t.emptyLabel.toLowerCase()} recipes yet.</div>
    </div>
  `}function Cu(e,t,n,r){let i=t.filter(e=>m.some(t=>t===e)),a=t.filter(e=>h.some(t=>t===e)),o=t.filter(e=>g.some(t=>t===e)),s=t.filter(e=>_.some(t=>t===e)),c=t.filter(e=>v.some(t=>t===e)),l=t.filter(e=>ee.some(t=>t===e));return`
    <section class="action-panel textile-action-panel" data-editor-id="action-panel-textiles" data-editor-label="Tailoring action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card textile-panel-card">
        <div class="smithing-status-grid textile-status-grid">
          <div class="smithing-status-item">
            <span>Flax Chain</span>
            <strong>${Mu(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Stations</span>
            <strong>${Nu(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Needles</span>
            <strong>${Pu(e)}</strong>
          </div>
        </div>
        ${wu(e,r)}
        ${Tu(e,`Flax Prep`,[...i,...a],n)}
        ${Tu(e,`Spinning`,o,n)}
        ${Tu(e,`Weaving`,s,n)}
        ${Tu(e,`Needles`,c,n)}
        ${Tu(e,`Sewing`,l,n)}
      </div>
    </section>
  `}function wu(e,t){let n=V(e),r=n?Q(n):null,i=r?y(r):void 0;if(!n||!i)return`
      <div class="smithing-active-row idle textile-active-row">
        <span>No active tailoring work</span>
        <strong>Chain idle</strong>
      </div>
    `;let a=Ca(so(e,t),0,1);return`
    <div class="smithing-active-row textile-active-row">
      <span>Active tailoring work</span>
      <strong>${i.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-textile-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-textile-action-remaining>${K(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Tu(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section textile-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid textile-recipe-grid">
        ${n.map(t=>Eu(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function Eu(e,t,n){let r=C(t),i=y(t);if(!r||!i)return``;let a=z(e,t),o=q(t),s=J(e,t),c=n?W(e,n.loopId):null,l=V(e),u=!!(n&&c),d=!!(u&&c&&n&&ga(c,n.afterIndex,t)),f=l?Q(l)===t:!1,p=u?!d:!s||f,m=Mc(e,o),h=s?``:a?m:Pi(e,t),g=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&h?h:`Ready`,_=u?`Set`:f?`Running`:s?`Start`:`Locked`,v=Dd(t,r.durationMs);return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${xd(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${r.label}</strong>
        <small>${g}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${pi(i)}</b>
        <small>${I(o)}</small>
      </span>
      ${Sd(r.label,v,g)}
    </button>
  `}function Du(e,t){let n=ys(e).filter(e=>e.tags.includes(`stew`)),r=e.skills.cooking,i=Et(r);return`
    <section class="action-panel cooking-action-panel" data-editor-id="action-panel-cooking" data-editor-label="Cooking recipe panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card cooking-panel-card">
        <div class="smithing-status-grid cooking-status-grid">
          <div class="smithing-status-item">
            <span>Station</span>
            <strong>${Ts(e,`campfire`,t)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Cooking</span>
            <strong>Lv ${r.level} (${N(i.xpIntoLevel)}/${N(i.xpForLevel)})</strong>
          </div>
          <div class="smithing-status-item">
            <span>Queue</span>
            <strong>${e.cooking.queue.length}</strong>
          </div>
        </div>
        ${Ou(e,t)}
        ${ku(e,t)}
        ${Au(e,`Stews`,n,t)}
      </div>
    </section>
  `}function Ou(e,t){let n=_s(e),r=n?ys(e).find(e=>e.id===n.recipeId):void 0;if(!n||!r)return`
      <div class="smithing-active-row idle cooking-active-row">
        <span>No active cooking</span>
        <strong>${e.cooking.queue.length?`Waiting for campfire`:`Queue idle`}</strong>
      </div>
    `;let i=Ca(vs(n,t),0,1),a=Math.max(0,(n.endsAt??t)-t);return`
    <div class="smithing-active-row cooking-active-row">
      <span>Active cooking</span>
      <strong>${r.name}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-cooking-action-progress style="transform: scaleX(${i.toFixed(4)})"></span>
        <em data-cooking-action-remaining>${K(a)}</em>
      </div>
    </div>
  `}function ku(e,t){let n=e.cooking.queue.filter(e=>e.startedAt===null||e.endsAt===null);return n.length?`
    <div class="cooking-queue-panel">
      <div class="section-heading">
        <span>Queued</span>
      </div>
      <div class="cooking-queue-list">
        ${n.map(n=>`
              <div class="cooking-queue-row">
                <strong>${ys(e).find(e=>e.id===n.recipeId)?.name??n.recipeId}</strong>
                <small>${R(e,t)?`Waiting turn`:`Needs lit campfire`}</small>
              </div>
            `).join(``)}
      </div>
    </div>
  `:``}function Au(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section cooking-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid cooking-recipe-grid">
        ${n.map(t=>ju(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function ju(e,t,n){let r=xs(e,t,n),i=Ss(e,t,n),a=!r,o=_e(t),s=e.cooking.completedRecipeCounts[t.id]??0,c=[{label:`Station`,value:`Campfire`},{label:`Speed`,value:K(t.cookTimeMs)},{label:`Skill`,value:`Cooking +${N(t.xpReward)} XP`},{label:`Level`,value:`Cooking Lv ${t.levelRequirement}`},{label:`Uses`,value:ws(t)},{label:`Makes`,value:Cs(t)},{label:`Nutrition`,value:`${t.nutrition.hunger??0} hunger`},{label:`Cooked`,value:`${s}`},{label:`Eating`,value:`Stews need a Wooden Spoon`},{label:`Failure`,value:`${Math.round(t.failureChance*100)}% base chance later`}],l=r?`Ready`:i;return`
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
        <b>${Cs(t)}</b>
        <small>${I(o)}${s?`; cooked ${s}`:``}</small>
      </span>
      ${Sd(t.name,c,l)}
    </button>
  `}function Mu(e){return e.seenResources.includes(`linenCloth`)||e.inventory.linenCloth>0?`Cloth`:e.seenResources.includes(`linenThread`)||e.inventory.linenThread>0?`Thread`:e.seenResources.includes(`flaxFiber`)||e.inventory.flaxFiber>0?`Fiber`:e.seenResources.includes(`rettedFlax`)||e.inventory.rettedFlax>0?`Retted`:e.seenResources.includes(`flaxPlant`)||e.inventory.flaxPlant>0?`Fresh flax`:`Find flax`}function Nu(e){let t=e.buildings.primitiveSpinningWheel,n=e.buildings.primitiveLoom;return t&&n?`Wheel + Loom`:t?`Wheel built`:n?`Loom built`:`Hand work`}function Pu(e){let t=Math.max(0,Math.floor(e.inventory.copperNeedle??0)),n=Math.max(0,Math.floor(e.inventory.bronzeNeedle??0));return t||n?`Copper ${t} / Bronze ${n}`:`None`}function Fu(e,t){let n=V(e),r=Z(e);if(!n)return`
      <section class="current-action-panel panel idle" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="current-action-content idle">
          <div class="current-action-detail current-action-location">
            <span>Location</span>
            ${zu(r.locationId)}
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
    `;let i=Ca(so(e,t),0,1),a=K(n.endsAt-t),o=Bu(e,n),s=Hu(e);return`
    <section class="current-action-panel panel" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="current-action-content">
        <div class="current-action-detail current-action-location">
          <span>Location</span>
          ${zu(o)}
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
  `}function Iu(e,t,n,r){let i=W(e,t);if(!i)return``;let a=Math.min(i.actionIds.length-1,Math.max(0,r));return`
    <div class="action-loop-controls" aria-label="Action loop">
      ${i.actionIds.map((e,t)=>Lu(i.id,e,t,a,n,i.actionIds.length)).join(``)}
    </div>
  `}function Lu(e,t,n,r,i,a){let o=n===r,s=i?.loopId===e&&i.afterIndex===n;return`
    <div class="action-loop-row ${o?`selected`:``}">
      <button
        class="action-loop-step ${o?`selected`:``} ${s?`assigning`:``}"
        type="button"
        data-command="select-loop-step"
        data-loop-id="${e}"
        data-id="${n}"
        aria-pressed="${o}"
      >
        ${Ru(t)}
      </button>
      ${o?`<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-loop-id="${e}" data-id="${n}" title="Add action after ${Ru(t)}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-loop-id="${e}" data-id="${n}" title="Remove ${Ru(t)}" ${a<=1?`disabled`:``}>-</button>
            </span>`:``}
    </div>
  `}function Ru(e){return e===`fishRiver`?`Fish River`:C(e)?.label??`Action`}function zu(e){let t=Vu(e);return`
    <div class="current-location-image" aria-label="${t.label} location">
      <img src="${t.iconUrl}" alt="" aria-hidden="true" />
    </div>
  `}function Bu(e,t){let n=Ll(t,Z(e).locationId),r=Il(t);return r===`camp`?n===`camp`?r:n:r}function Vu(e){return e===`camp`?Qc:ud(e)}function Hu(e){let t=V(e);if(!t)return`Working`;let n=od(Il(t)),r=od(Ll(t,`camp`));return t.phase===`travelingTo`?`Traveling to ${n}`:t.phase===`travelingBack`?`Returning to camp from ${r}`:t.phase===`followUp`?Q(t)===`butcherFish`?`Butchering Fish`:C(Q(t))?.label??`Working`:C(t.actionId)?.label??`Working`}function Uu(e,t){let n=V(e);if(!n)return null;let r=Q(n);return t.includes(r)?C(r)?.label??`Working`:null}function Z(e){return e.characters.find(t=>t.id===e.selectedCharacterId)??e.characters[0]}function Wu(e){return e.endsWith(`s`)?`${e}'`:`${e}'s`}function Gu(e,t){return Go(e,t.id)?`fighting in The Ruins`:V(e,t.id)?Ku(e,t.id):`at ${od(t.locationId)}`}function Ku(e,t=e.selectedCharacterId){let n=V(e,t);if(!n)return`keeping still`;let r=od(Il(n)),i=od(Ll(n,`camp`));return n.phase===`travelingTo`?`traveling to ${r}`:n.phase===`travelingBack`?`returning to camp from ${i}`:n.phase===`followUp`?C(Q(n))?.verb??`working`:C(n.actionId)?.verb??`working`}function Q(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function qu(e){return Bc.find(t=>t.id===e)??Bc[0]}function Ju(e){return(Vc.find(t=>t.id===e)??Vc[0]).filterIds.map(e=>qu(e))}function Yu(e){return Vc.some(t=>t.id===e)}function Xu(e){return e===`copper`||e===`bronze`}function Zu(e){return e===`brewing`||e===`transmutation`||e===`decomposition`}function Qu(e){return e===`primitive`}function $u(e){return Bc.some(t=>t.id===e)}function ed(e,t){let n=Number(e);return Number.isFinite(n)?Math.max(0,Math.floor(n)):t}function td(e,t,n){return W(t,e.dataset.loopId??n)?.id??null}function nd(e){return W(e,Z(e).actionLoopId)?.id??null}function rd(e){return X.some(t=>t.id===e)}function id(e){return e===`inventory`||e===`equipment`||e===`skills`||e===`log`}function ad(e){return e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId===`camp`}function od(e){return e===`camp`?`camp`:`the ${ud(e).label.toLowerCase()}`}function sd(e){return e===`foraging`||e===`mining`||e===`fishing`||e===`hunting`||e===`woodcutting`}function cd(e){return Ju(`processing`).some(t=>t.id===e)}function ld(e,t){return sd(e.id)?gd(e,t):cd(e.id)?_d(e):``}function ud(e,t){let n=t?dd(t):X;return n.find(t=>t.id===e)??n[0]}function dd(e){switch(e){case`mining`:return X.filter(e=>e.id===`mine`);case`fishing`:return X.filter(e=>e.id===`river`);case`hunting`:return X.filter(e=>e.id===`meadow`);case`woodcutting`:return X.filter(e=>e.id===`forest`);case`foraging`:return X;default:return X.filter(e=>e.id===`meadow`||e.id===`river`)}}function fd(e,t){return e===`mining`?`mine`:e===`hunting`?`meadow`:e===`fishing`?`river`:e===`woodcutting`?`forest`:X.some(e=>e.id===t)?t:`meadow`}function pd(e){return ud(e,`foraging`).actionIds}function md(e,t){return hd(e)?`mine`:e===`huntSmallAnimals`?`meadow`:e===`fishRiver`||e===`gatherWater`||e===`gatherRiverIngredients`?`river`:e===`gatherForestIngredients`?`forest`:e===`gatherMineIngredients`?`mine`:e===`gatherDesertIngredients`||e===`gatherSand`?`desert`:e===`chopTrees`?`forest`:t}function hd(e){return e===`mineCoal`||e===`mineCopper`||e===`mineTin`}function gd(e,t){return`
    <section class="panel location-panel" data-editor-id="location-panel" data-editor-label="Location tabs panel" data-editor-files="src/ui/render.ts, src/style.css">
      ${vd(dd(e.id),fd(e.id,t),e.label)}
    </section>
  `}function _d(e){return`
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
          <img class="location-tab-image" src="${Qc.iconUrl}" alt="" aria-hidden="true" />
          <span class="location-tab-label">Camp</span>
        </button>
      </div>
    </section>
  `}function vd(e,t,n){return`
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
  `}function yd(e,t,n){let r=C(t);if(!r)return``;let i=$a(e),a=i?C(i):void 0,o=z(e,t),s=J(e,t),c=n?W(e,n.loopId):null,l=V(e),u=!!(n&&c),d=!!(u&&c&&n&&ga(c,n.afterIndex,t)),f=l?Q(l)===t:!1,p=u?!d:!s||f,m=s?``:Pi(e,t),h=i??t,g=Pt(h),_=[{label:`Speed`,value:K(r.durationMs)},{label:`Skill`,value:`${wt(g).label} +${N(Ft(h))} XP`},{label:`Uses`,value:i?I(q(i)):`Varies by target`},{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}],v=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&m?m:a?`Next: ${a.label}`:``,ee=u?`Set`:f?`Running`:s?`Start`:`Locked`,y=a?a.label.replace(/^Craft /,``):ru(t),b=i?I(q(i)):`Varies by target`;return`
    <button
      class="smithing-recipe-card craft-priority-button ${f?`active`:``} ${d?`assignable`:``} ${!o&&!d?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-editor-id="action-card-${t}"
      data-editor-label="Action card: ${r.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${p}"
      data-tooltip-source
      aria-disabled="${p}"
      aria-label="${ee} ${r.label}${a?`, next ${a.label}`:``}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">
        ${xd(t)}
      </span>
      <span class="smithing-recipe-copy">
        <strong>${r.label}</strong>
        <small>${v||`Balance stock`}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${y}</b>
        <small>${b}</small>
      </span>
      ${Sd(r.label,_,v)}
    </button>
  `}function bd(e,t,n){let r=C(t);if(!r)return``;let i=z(e,t),a=q(t),o=J(e,t),s=n?W(e,n.loopId):null,c=V(e),l=!!(n&&s),u=!!(l&&s&&n&&ga(s,n.afterIndex,t)),d=c?Q(c)===t:!1,f=l?!u:!o||d,p=t===`butcherFish`||t===`butcherRabbit`||t===`butcherSquirrel`||t===`cookRabbitMeat`||t===`cookSquirrelMeat`?Pi(e,t):Mc(e,a),m=o?``:i?p:Pi(e,t),h=Dd(t,r.durationMs),g=l?u?`Set as action loop step`:`Not valid for this loop`:!o&&m?m:``,_=l?`Set`:d?`Running`:o?`Start`:`Locked`;return`
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
        ${xd(t)}
      </span>
      ${Sd(r.label,h,g)}
    </button>
  `}function xd(e){let t=Cd(e);return t.length?`
    <span class="action-card-icon ${t.length>1?`multi`:``}">
      ${t.map(e=>`<img src="${e}" alt="" aria-hidden="true" />`).join(``)}
    </span>
  `:`<span class="action-card-glyph">${Ed(e)}</span>`}function Sd(e,t,n){return`
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
  `}function Cd(e){let t=wd(e);if(t)return Td(t.id);switch(e){case`gatherSticks`:return[sc];case`gatherStones`:return[gc];case`gatherFlaxPlants`:return[Y];case`gatherFlaxFibers`:return[Y];case`gatherMeadowIngredients`:return[nc,Ys];case`gatherForestIngredients`:return[qs,Ys];case`gatherRiverIngredients`:return[ac,nc];case`gatherMineIngredients`:return[$s,nc];case`gatherDesertIngredients`:return[Js,Ys];case`gatherSand`:return[Js,gc];case`gatherWater`:return[ac];case`mineCoal`:return[Vs];case`mineCopper`:return[Hs];case`mineTin`:return[bc];case`fishRiver`:return[ec];case`craftLowestTool`:return[Us];case`craftWoodenSpoon`:return[Tc];case`craftWoodenBowl`:return[Cc];case`craftLeatherBackpack`:return[Zs];case`chopTrees`:return[Ac];case`huntSmallAnimals`:return[ic,oc];case`butcherFish`:return[Ws];case`butcherRabbit`:case`cookRabbitMeat`:return[ic];case`butcherSquirrel`:case`cookSquirrelMeat`:return[oc];case`tanHide`:return[Xs];case`retFlax`:case`separateFlaxFiber`:case`handSpinLinenThread`:case`spinLinenThread`:case`weaveLinenCloth`:return[Y];case`craftCopperNeedle`:return[Hs];case`craftBronzeNeedle`:return[Hs,bc];case`sewClothWrap`:case`sewLinenBandage`:case`sewSimplePouch`:case`sewLinenHood`:case`sewLinenShirt`:return[Y];case`smeltCopperBar`:return[Hs,Vs];case`smeltBronzeBar`:return[Hs,bc];case`craftPot`:case`craftLadle`:case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return[Hs];case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return[Hs,bc];case`craftGlassVial`:return[vc,Js];case`brewHealthPotion`:return[Ys,nc];case`brewManaPotion`:return[ac,Ys]}return[]}function wd(e){return w.find(t=>t.craftActionId===e)}function Td(e){let t=nl[e];if(t)return[t];let n=w.find(t=>t.id===e);return n?.weapon?.range===`ranged`||n?.id.startsWith(`wooden`)?[Ac]:n?.weapon?[gc]:[]}function Ed(e){let t=C(e);return t?t.label.split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase():`?`}function Dd(e,t){let n=Pt(e),i=[{label:`Speed`,value:K(t)},{label:`Skill`,value:`${wt(n).label} +${N(Ft(e))} XP`}],a=l(e);if(a)return[...i,{label:`Uses`,value:I(a.cost)},{label:`Makes`,value:a.toolId?a.label.replace(`Craft `,`1 `):I(a.output??{})},{label:`Unlock`,value:a.unlockHint}];let o=r(e);if(o){let e=o.actionId===`craftGlassVial`?`Stone Furnace`:`Alchemy bench`;return[...i,{label:`Panel`,value:`Brewing`},{label:`Station`,value:e},{label:`Uses`,value:I(o.cost)},{label:`Makes`,value:ci(o.actionId)},{label:`Unlock`,value:o.unlockHint}]}let s=y(e);if(s){let e=s.requiredBuildings?.length?s.requiredBuildings.map(e=>Rd(e)).join(`, `):`Camp`;return[...i,{label:`Station`,value:e},{label:`Uses`,value:I(s.cost)},{label:`Makes`,value:pi(s)},{label:`Unlock`,value:s.unlockHint}]}let c=wd(e);if(c)return[...i,{label:`Makes`,value:`1 ${c.label}`},{label:`Uses`,value:I(q(e))},...c.weapon?[{label:`Power`,value:ul(c.weapon.damage)},{label:`Style`,value:`${c.weapon.hands}H ${cl(c.weapon.range)}`}]:[]];switch(e){case`gatherSticks`:return[...i,{label:`Pickup`,value:`1-3 Sticks`},{label:`Each`,value:`1 weight`}];case`gatherStones`:return[...i,{label:`Pickup`,value:`1-2 Stones`},{label:`Each`,value:`1 weight`}];case`gatherFlaxPlants`:return[...i,{label:`Pickup`,value:`2-4 Flax Plants`},{label:`Each`,value:`1 weight`}];case`gatherFlaxFibers`:return[...i,{label:`Pickup`,value:`1-3 Flax Fibers`},{label:`Each`,value:`1 weight`}];case`gatherMeadowIngredients`:return[...i,{label:`Table`,value:Ea(`meadow`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Herbs, flowers, berries, roots, vegetables, seasonings`}];case`gatherForestIngredients`:return[...i,{label:`Table`,value:Ea(`forest`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Berries, herbs, nuts, fungus, resin`}];case`gatherRiverIngredients`:return[...i,{label:`Table`,value:Ea(`river`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Wetland herbs, roots, seeds, fungus`}];case`gatherMineIngredients`:return[...i,{label:`Table`,value:Ea(`mine`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Cave herbs, fungus, roots, lichen`}];case`gatherDesertIngredients`:return[...i,{label:`Table`,value:Ea(`desert`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Desert herbs, fruits, roots, flowers, fungus`}];case`gatherSand`:return[...i,{label:`Pickup`,value:`2-5 Sand`},{label:`Place`,value:`Desert`}];case`gatherWater`:return[...i,{label:`Pickup`,value:`1-3 Water`},{label:`Place`,value:`River`}];case`mineCoal`:return[...i,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Coal`},{label:`Each`,value:`1 weight`}];case`mineCopper`:return[...i,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Copper`},{label:`Each`,value:`1 weight`}];case`mineTin`:return[...i,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Tin`},{label:`Each`,value:`1 weight`}];case`fishRiver`:return[...i,{label:`Requires`,value:`Fishing Pole`},{label:`Pickup`,value:`1 fish`},{label:`Each`,value:`0.5-7.5 lb`},{label:`Fish`,value:`Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb`}];case`chopTrees`:return[...i,{label:`Pickup`,value:`2-4 Wood, 35% chance for 1 Stick`},{label:`Each`,value:`Wood 2 weight, Stick 1 weight`}];case`huntSmallAnimals`:return[...i,{label:`Pickup`,value:`1 Rabbit or Squirrel`},{label:`Each`,value:`Rabbit 2-5 lb, Squirrel 0.5-2 lb`}];case`craftLowestTool`:return[...i,{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}];case`craftBasket`:return[...i,{label:`Makes`,value:`1 Basket`},{label:`Uses`,value:I(q(e))}];case`craftWoodenSpoon`:return[...i,{label:`Makes`,value:`1 Wooden Spoon`},{label:`Uses`,value:I(q(e))}];case`craftFishingPole`:return[...i,{label:`Makes`,value:`1 Fishing Pole`},{label:`Uses`,value:I(q(e))}];case`craftLeatherBackpack`:return[...i,{label:`Makes`,value:`1 Leather Backpack`},{label:`Uses`,value:I(q(e))}];case`butcherFish`:return[...i,{label:`Uses`,value:`1 carried fish`},{label:`Makes`,value:`Matching filet at 50% fish weight`}];case`butcherRabbit`:return[...i,{label:`Uses`,value:`1 Rabbit`},{label:`Each`,value:`2-5 lb`},{label:`Makes`,value:`1-2 Rabbit Meat; knife can recover Hide or Bone`}];case`butcherSquirrel`:return[...i,{label:`Uses`,value:`1 Squirrel`},{label:`Each`,value:`0.5-2 lb`},{label:`Makes`,value:`1 Squirrel Meat; knife can recover Hide or Bone`}];case`cookRabbitMeat`:return[...i,{label:`Uses`,value:`1 Rabbit Meat`},{label:`Makes`,value:`1 Cooked Rabbit Meat`}];case`cookSquirrelMeat`:return[...i,{label:`Uses`,value:`1 Squirrel Meat`},{label:`Makes`,value:`1 Cooked Squirrel Meat`}];case`tanHide`:return[...i,{label:`Uses`,value:`1 Hide`},{label:`Makes`,value:`1 Leather`}]}return i}function Od(e,t){let n=Ce.filter(n=>Fi(e,n.id,t));return`
    <section class="panel camp-panel" data-editor-id="camp-panel" data-editor-label="Camp structures and inventory panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="camp-panel-section">
        <div class="section-heading">
          <span>Structures</span>
        </div>
        <div class="craft-list">
          ${n.length?n.map(n=>Md(e,n,t)).join(``):`<div class="empty-line">Nothing sturdy enough to name yet.</div>`}
        </div>
      </div>
      ${kd(e)}
    </section>
  `}function kd(e){let t=k.filter(t=>e.inventory[t]>0||Pn(e,t)>0),n=Xe.reduce((e,n)=>(t.includes(n.id)&&(e[n.group]=e[n.group]??[],e[n.group].push(n.id)),e),{}),r=w.some(t=>e.tools[t.id].quantity>0);return`
    <div class="camp-panel-section camp-inventory-section" data-editor-id="camp-inventory-section" data-editor-label="Camp inventory section" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Camp Inventory</span>
      </div>
      ${t.length||r?`
            <div class="camp-inventory-content">
              ${Object.entries(n).map(([t,n])=>$d(e,t,n)).join(``)}
              ${nf(e)}
              ${Ad(e)}
            </div>
          `:`<div class="empty-line">No supplies stored yet.</div>`}
    </div>
  `}function Ad(e){let t=k.filter(t=>e.inventory[t]>0&&Rc(t));return t.length?`
    <section class="resource-group food-use-panel" data-editor-id="food-use-panel" data-editor-label="Food use panel" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Food</h3>
      <div class="food-use-list">
        ${t.map(t=>jd(e,t)).join(``)}
      </div>
    </section>
  `:``}function jd(e,t){let n=Ic(e,t),r=Fc(e,t),i=Pc(t);return`
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
  `}function Md(e,t,n){let r=Pd(e,t.id,n),i=Ii(e,t.id,n),a=F(e,t.recipe),o=ad(e),s=Fd(t.id),c=!i||!s&&r||!a||!o,l=Id(e,t.id,n),u=i?Ld(e,t.id,n):`Locked`;return`
    <article class="craft-item building-card ${r||gn(e,t.id)>0?`owned`:``} ${i?``:`locked`} ${t.id===`campfire`&&r?`lit`:``}" data-editor-id="building-card-${t.id}" data-editor-label="Building card: ${t.label}" data-editor-files="src/ui/render.ts, src/style.css">
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
        ${Nd(e,t,n)}
      </button>
    </article>
  `}function Nd(e,t,n){let r=Pd(e,t.id,n),i=Ii(e,t.id,n),a=F(e,t.recipe),o=ad(e),s=[{label:`Status`,value:zd(e,t.id,n,r,a,o,i)},{label:`Unlock`,value:Li(e,t.id)},{label:`Skill`,value:`Construction +${N(It(t.id))} XP`},{label:`Cost`,value:I(t.recipe)},{label:`Use`,value:t.blurb}];return`
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
  `}function Pd(e,t,n){return Fd(t)?!1:t===`campfire`?R(e,n):e.buildings[t]}function Fd(e){return e===`hideTent`}function Id(e,t,n){switch(t){case`campfire`:return R(e,n)?zs:Bs;case`tanningRack`:return Sc;case`hideTent`:return xc;case`crudeStoneFurnace`:return vc;case`primitiveSpinningWheel`:case`primitiveLoom`:return Bs}}function Ld(e,t,n){return Fd(t)?`Build`:t===`campfire`&&R(e,n)?`Lit`:Pd(e,t,n)?`Built`:`Build`}function Rd(e){return Ce.find(t=>t.id===e)?.label??e}function zd(e,t,n,r,i,a,o){if(!o)return`Locked: ${Li(e,t)}`;if(!a&&!r)return`Needs ${Z(e).name} at camp`;if(t===`hideTent`){let n=gn(e,t);return i?`Tents: ${n}; next gives +1 housing`:`Tents: ${n}; needs ${Mc(e,Ce.find(e=>e.id===t)?.recipe??{})}`}return t===`campfire`?r?`Lit, burns out in <b data-campfire-remaining>${K(Wr(e,n))}</b>`:i?`Ready to build, burns for 15m`:`Needs ${Mc(e,Ce.find(e=>e.id===t)?.recipe??{})}`:r?`Built`:i?`Ready to build`:`Needs ${Mc(e,Ce.find(e=>e.id===t)?.recipe??{})}`}function Bd(e,t){let n=Z(e);return`
    <div class="work-area single-panel">
      <section class="panel character-detail-panel" aria-label="${n.name} details" data-active-tab="${t}" data-editor-id="character-detail-panel" data-editor-label="Character detail panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="character-detail-heading">
          <span class="portrait" aria-hidden="true">${zl(n.name)}</span>
          <span class="character-detail-title">
            <strong>${n.name}</strong>
            <small>${Gu(e,n)}</small>
          </span>
        </div>
        ${Vd(e)}
      </section>
    </div>
  `}function Vd(e){return`
    <div class="character-detail-content character-overview-content">
      <div class="character-overview-full">
        ${Qd(e)}
      </div>
      <div class="character-overview-pair">
        <section class="character-overview-section" aria-label="Equipment overview" data-editor-id="character-overview-equipment" data-editor-label="Character overview equipment" data-editor-files="src/ui/render.ts, src/style.css">
          ${af(e,!1)}
        </section>
        ${Hd(e)}
      </div>
      <div class="character-overview-full">
        <section class="character-overview-section" aria-label="Skills overview" data-editor-id="character-overview-skills" data-editor-label="Character overview skills" data-editor-files="src/ui/render.ts, src/style.css">
          ${Wd(e)}
        </section>
      </div>
    </div>
  `}function Hd(e){let t=Z(e),n=V(e,t.id),r=t.actionLoopId?W(e,t.actionLoopId):null,i=n?C(Q(n))?.label??`Working`:`Idle`,a=Eo(e,t.id),o=Go(e,t.id)??t.combat;return`
    <section class="character-overview-section character-stats-overview" aria-label="Character stats" data-editor-id="character-overview-stats" data-editor-label="Character overview stats" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Stats</h3>
      <dl class="character-stat-list">
        ${[{label:`Status`,value:Gu(e,t)},{label:`Location`,value:od(t.locationId)},{label:`Current`,value:i},{label:`Action Loop`,value:r?.name??`None`},{label:`Class`,value:a.classLabel},{label:`Weapon`,value:a.weaponLabel},{label:`Hunger`,value:`${Math.round(t.needs.hunger)} / ${Math.round(t.needs.maxHunger)}`},{label:`HP`,value:`${Math.round(o.hp)} / ${Math.round(o.maxHp)}`},{label:`Mana`,value:`${Math.round(o.mana)} / ${Math.round(o.maxMana)}`},...cf(e)].map(e=>`
            <div class="character-stat-row">
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
      </dl>
    </section>
  `}function Ud(e){return`
    <button
      class="camp-log-toggle ${e?`active`:``}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${e}"
    >
      Camp Log
    </button>
  `}function Wd(e){return`
    <h3>Skills</h3>
    <section class="side-panel-content skills-screen" aria-label="Skills" data-editor-id="skills-screen" data-editor-label="Skills screen" data-editor-files="src/ui/render.ts, src/style.css">
      ${Uc.filter(e=>e.skillIds.length>0).map(t=>Gd(e,t)).join(``)}
      ${qd(e)}
    </section>
  `}function Gd(e,t){let n=t.skillIds.filter(e=>_t.some(t=>t.id===e)).map(t=>Kd(e,t)).join(``);return`
    <section class="skill-group" aria-label="${t.label} skills">
      <h4>${t.label}</h4>
      <div class="skill-group-list">
        ${n||`<div class="empty-line">No skills yet.</div>`}
      </div>
    </section>
  `}function Kd(e,t){let n=wt(t),r=e.skills[t],i=Et(r),a=i.atCap?i.canPrestige?`Prestige ready`:`Max level`:`${N(i.xpIntoLevel)} / ${N(i.xpForLevel)} XP`,o=r.prestige>0?`P${r.prestige}`:`P0`;return`
    <article class="skill-row ${i.canPrestige?`prestige-ready`:``}" data-editor-id="skill-row-${t}" data-editor-label="Skill row: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${n.label}</strong>
          <small>Total ${N(r.totalXp)} XP</small>
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
  `}function qd(e){let t=Z(e),n=Eo(e,t.id);return`
    <section class="skill-group combat-class-group" aria-label="Combat class experience">
      <h4>Combat Classes</h4>
      <div class="skill-group-list">
        ${te.filter(e=>{let r=t.classProgress[e.id];return e.id===n.classId||(r?.totalXp??0)>0}).map(t=>Jd(e,t.id)).join(``)}
      </div>
    </section>
  `}function Jd(e,t){let n=Z(e),r=te.find(e=>e.id===t)??te[0],i=n.classProgress[t],a=Ao(i),o=a.atCap?`Max level`:`${jo(a.xpIntoLevel)} / ${jo(a.xpForLevel)} XP`;return`
    <article class="skill-row combat-class-row" data-editor-id="combat-class-row-${t}" data-editor-label="Combat class row: ${r.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${r.label}</strong>
          <small>${r.weaponLabel} - Total ${jo(i.totalXp)} XP</small>
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
  `}function Yd(e,t,n,r){let i=W(e,t),a=ca(e).length;return`
    <div class="work-area single-panel">
      <section class="panel action-loop-page-panel action-loop-panel" aria-label="Action loops" data-editor-id="action-loops-panel" data-editor-label="Action loops panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="loop-panel-heading">
          <h3>Action Loops</h3>
          <button class="loop-create-button" type="button" data-command="create-loop">New</button>
        </div>
        <div class="loop-picker" aria-label="Saved action loops">
          ${e.actionLoops.map(t=>Xd(e,t.id,i?.id??null)).join(``)}
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
                ${Iu(e,i.id,r,n)}
                <div class="loop-assignment-list">
                  ${e.characters.map(t=>Zd(e,i.id,t)).join(``)}
                </div>
              </div>
            `:`<div class="empty-line">No loops built yet.</div>`}
      </section>
    </div>
  `}function Xd(e,t,n){let r=W(e,t);if(!r)return``;let i=e.characters.filter(e=>e.actionLoopId===r.id).length,a=n===r.id;return`
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
  `}function Zd(e,t,n){let r=n.actionLoopId===t,i=V(e,n.id),a=r?i?`Running`:`Assigned`:`Assign`;return`
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
        <small>${Gu(e,n)}</small>
      </span>
      <em>${a}</em>
    </button>
  `}function Qd(e){let t=Z(e),n=Wu(t.name),r=Dn(e,t.id),i=k.filter(n=>r[n]>0||Pn(e,n,`character`,t.id)>0),a=An(e,t.id),o=jn(e,t.id),s=i.filter(e=>!!al[e]),c=i.filter(e=>!al[e]),l=!V(e)&&ad(e);return`
    <div class="resource-group character-inventory-group" data-editor-id="character-inventory-group" data-editor-label="Character inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="inventory-summary-heading">
        <h3>${n} Inventory</h3>
        <span>${wf(a)}/${wf(o)}</span>
      </div>
      ${i.length?`<button class="deposit-button" type="button" data-command="deposit-carried" ${l?``:`disabled`}>Store at Camp</button>`:``}
      ${i.length?`
            ${s.length?`<div class="inventory-resource-grid" aria-label="${n} carried inventory">
                    ${s.map(n=>tf(e,n,r,`character`,t.id)).join(``)}
                  </div>`:``}
            ${c.map(e=>ef(e,r)).join(``)}
          `:`<div class="empty-line">Pack empty.</div>`}
    </div>
  `}function $d(e,t,n){let r=n.filter(e=>!!al[e]),i=n.filter(e=>!al[e]);return`
    <div class="resource-group" data-editor-id="resource-group-${t}" data-editor-label="${Ef(t)} resource group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${Ef(t)}</h3>
      ${r.length?`<div class="inventory-resource-grid" aria-label="${Ef(t)} inventory">
              ${r.map(t=>tf(e,t)).join(``)}
            </div>`:``}
      ${i.map(t=>`
        ${ef(t,e.inventory)}
      `).join(``)}
    </div>
  `}function ef(e,t){return`
    <div class="resource-row">
      <span>
        <strong>${j(e)}</strong>
        <small>${Xe.find(t=>t.id===e)?.blurb??``}</small>
      </span>
      <b>${Cf(e,t[e])}</b>
    </div>
  `}function tf(e,t,n=e.inventory,r=`camp`,i=e.selectedCharacterId){let a=al[t],o=Xe.find(e=>e.id===t);if(!a||!o)return``;let s=Pn(e,t,r,i),c=at(t)?`, quantity ${s}`:``;return`
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${o.label}, ${Cf(t,n[t])}${c}" data-editor-id="inventory-resource-${r}-${t}" data-editor-label="Inventory resource: ${o.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <img class="slot-item-icon" src="${a}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${st(t,n[t])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${o.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${Ef(o.group)}</dd>
          </div>
          ${it(t)?`<div>
                  <dt>Total</dt>
                  <dd>${Cf(t,n[t])}</dd>
                </div>`:``}
          ${at(t)?`<div>
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
  `}function nf(e){let t=w.filter(t=>e.tools[t.id].quantity>0);return t.length?`
    <section class="resource-group tool-inventory" data-editor-id="tool-inventory-group" data-editor-label="Tool inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${t.map(t=>rf(e,t.id)).join(``)}
      </div>
    </section>
  `:``}function rf(e,t){let n=w.find(e=>e.id===t),r=e.tools[t];if(!n||r.quantity<=0)return``;let i=vi(t),a=[{label:`Durability`,value:`${i}/${i}`},...sl(t)];return`
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${n.label}, ${r.quantity} ${r.quantity===1?`spare`:`spares`}" data-editor-id="inventory-tool-${t}" data-editor-label="Inventory tool: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${df(t)}
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
  `}function af(e,t=!0){return`
    <section class="side-panel-content equipment-screen" data-editor-id="equipment-screen" data-editor-label="Equipment screen" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="equipment-section">
        <h3>Equipment</h3>
        <div class="equipment-grid" aria-label="Tool equipment slots">
          ${el.slice(0,$c).map((t,n)=>t&&e.tools[t].owned?uf(e,t):ff(n,t)).join(``)}
        </div>
      </div>
      ${tl.map(e=>of(e)).join(``)}
      ${t?`<div class="equipment-section equipment-stats-section">
              <h3>Equipment Stats</h3>
              <dl class="equipment-stat-list">
                ${cf(e).map(e=>`
                    <div class="equipment-stat-row">
                      <dt>${e.label}</dt>
                      <dd>${e.value}</dd>
                    </div>
                  `).join(``)}
              </dl>
            </div>`:``}
    </section>
  `}function of(e){return`
    <div class="equipment-section equipment-placeholder-section" data-editor-id="equipment-placeholder-${Rl(e.label)}" data-editor-label="${e.label} equipment slots" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${e.label}</h3>
      <div class="equipment-placeholder-grid" aria-label="${e.label} slots">
        ${e.slots.map(t=>sf(e.label,t)).join(``)}
      </div>
    </div>
  `}function sf(e,t){return`
    <div class="equipment-slot empty equipment-placeholder-slot" aria-label="Empty ${t} slot" data-editor-id="equipment-placeholder-${Rl(e)}-${Rl(t)}" data-editor-label="Equipment placeholder: ${t}" data-editor-files="src/ui/render.ts, src/style.css">
      <strong>${t}</strong>
    </div>
  `}function cf(e){let t=Z(e),n=w.filter(t=>e.tools[t.id].owned).filter(t=>e.tools[t.id].durability>0),r=w.reduce((t,n)=>t+e.tools[n.id].quantity,0),i=An(e,t.id),a=jn(e,t.id),o=Math.max(0,a-10),s=lf(e);return[{label:`Carry`,value:`${wf(i)} / ${wf(a)} lb`},{label:`Carry Bonus`,value:o>0?`+${wf(o)} lb`:`None`},{label:`Usable Tools`,value:`${n.length} / ${el.filter(Boolean).length}`},{label:`Spares`,value:r>0?`${r}`:`None`},{label:`Field Effects`,value:s.length?s.join(`, `):`None`}]}function lf(e){let t=[];for(let[n,r]of[[`fishing`,`Fishing`],[`butchering`,`Butchering`],[`woodcutting`,`Woodcutting`],[`mining`,`Mining`],[`hunting`,`Hunting`]]){let i=xi(e,n);if(!i)continue;let a=w.find(e=>e.id===i),o=a&&a.tier!==`primitive`?`${ll(a.tier)} `:``;t.push(n===`hunting`&&a?`${r} (${a.label})`:`${o}${r}`)}return t}function uf(e,t){let n=w.find(e=>e.id===t),r=e.tools[t];if(!n||!r.owned)return``;let i=vi(t),a=Math.max(0,r.durability),o=a>0,s=(a/i*100).toFixed(1),c=[{label:`Durability`,value:o?`${a}/${i}`:`Broken`},{label:`Inventory`,value:`${r.quantity} ${r.quantity===1?`spare`:`spares`}`},...sl(t)],l=!!nl[t];return`
    <article class="equipment-slot ${o?``:`broken`} ${l?`icon-only`:``}" tabindex="0" data-tooltip-source aria-label="${n.label}" data-editor-id="equipment-slot-${t}" data-editor-label="Equipment slot: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${df(t)}
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
  `}function df(e){let t=nl[e];return t?`<img class="slot-item-icon" src="${t}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${pf(e)}</span>`}function ff(e,t){let n=t?rl[t]:void 0,r=t?il[t]??`Empty`:`Empty`;return`
    <div class="equipment-slot empty ${n?`image-empty`:``}" aria-label="Empty equipment slot ${e+1}">
      ${n?`<img class="slot-shadow-icon" src="${n}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${t?pf(t):`+`}</span>`}
      <strong>${r}</strong>
    </div>
  `}function pf(e){switch(e){case`basket`:return`BK`;case`leatherBackpack`:return`BP`;case`fishingPole`:return`FP`;case`stoneAxe`:return`HT`;case`stonePickAxe`:return`PX`;case`copperPickaxe`:return`CP`;case`copperHatchet`:return`CH`;case`copperKnife`:return`CK`;case`bronzePickaxe`:return`BP`;case`bronzeHatchet`:return`BH`;case`bronzeKnife`:return`BK`;case`stoneSpear`:return`SP`;case`stoneKnife`:return`SK`;case`woodenSword`:return`WS`;case`woodenTwoHandedSword`:return`2S`;case`woodenClub`:return`WC`;case`woodenTwoHandedClub`:return`2C`;case`shortBow`:return`SB`;case`woodenTotem`:return`WT`}return(w.find(t=>t.id===e)?.label??e).split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase()}function mf(e,t){if(!(e instanceof Element))return null;let n=e.closest(`[data-tooltip-source]`);return n&&t.contains(n)?n:null}function hf(e,t){let n=t.querySelector(`.slot-tooltip`),r=vf(e);!n||!r||(r.innerHTML=n.innerHTML,r.setAttribute(`aria-hidden`,`false`),r.classList.add(`visible`),_f(e,t))}function gf(e){let t=vf(e);t&&(t.classList.remove(`visible`),t.setAttribute(`aria-hidden`,`true`),t.innerHTML=``)}function _f(e,t){let n=vf(e);if(!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth,o=window.innerHeight,s=i.width,c=i.height,l=r.left-s-8;if(l<12){let e=r.right+8;l=e+s<=a-12?e:a-s-12}let u=Math.max(12,o-c-12),d=Math.min(Math.max(r.top,12),u);n.style.left=`${Math.max(12,Math.round(l))}px`,n.style.top=`${Math.round(d)}px`}function vf(e){return e.querySelector(`.tooltip-layer`)}function yf(e){return new Map([`.log-list`,`.side-panel-content`].map(t=>[t,e.querySelector(t)?.scrollTop??0]))}function bf(e,t){for(let[n,r]of t){let t=e.querySelector(n);t&&(t.scrollTop=r)}}function xf(e,t,n,r=``){let i=e.log.filter(e=>un(e)===t);return`
    <section class="log-panel ${r}" data-editor-id="${t}-log-panel" data-editor-label="${n}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>${n}</span>
        <span class="quiet">${i.length}</span>
      </div>
        <div class="log-list">
          ${i.map(e=>`
            <p class="log-entry ${e.tone}">
              <span>${e.text}</span>
              ${Sf(e)}
            </p>
          `).join(``)}
        </div>
    </section>
  `}function Sf(e){if(e.aggregateItems){let t=k.filter(t=>(e.aggregateItems?.[t]??0)>0).map(t=>{let n=e.aggregateItems?.[t]??0;return`<b>+${st(t,n)} ${Tf(t,n)}</b>`});return t.length?`<span class="log-gains">${t.join(``)}</span>`:``}return e.aggregateTotal?`<span class="log-gains"><b>+${e.aggregateTotal} ${e.aggregateUnit??``}</b></span>`:``}function Cf(e,t){return it(e)?`${st(e,t)} lb`:st(e,t)}function wf(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}function Tf(e,t){let n=j(e);if(it(e))return`lb ${n}`;if(t===1)return n;switch(e){case`wood`:case`rabbitMeat`:case`squirrelMeat`:case`cookedRabbitMeat`:case`cookedSquirrelMeat`:case`leather`:case`rettedFlax`:case`linenThread`:case`linenCloth`:return n;case`flaxPlant`:return`Flax Plants`;case`flaxFiber`:return`Flax Fibers`;case`coal`:case`copper`:case`tin`:case`copperBar`:case`bronzeBar`:case`pot`:case`ladle`:return n;case`copperNeedle`:return`Copper Needles`;case`bronzeNeedle`:return`Bronze Needles`;case`water`:return`Water`;case`dirtyBowl`:return`Dirty Bowls`;case`woodenSpoon`:return`Wooden Spoons`;case`clothWrap`:return`Cloth Wraps`;case`linenBandage`:return`Linen Bandages`;case`simplePouch`:return`Simple Pouches`;case`linenHood`:return`Linen Hoods`;case`linenShirt`:return`Linen Shirts`;default:return n.endsWith(`s`)?n:`${n}s`}}function Ef(e){switch(e){case`resources`:return`Resources`;case`animals`:return`Animals`;case`hunted`:return`Hunted`;case`fish`:return`Fish`;case`crafted`:return`Worked`;case`ingredients`:return`Ingredients`;case`food`:return`Food`;case`liquids`:return`Liquids`;case`utensils`:return`Utensils`;default:return e}}var Df=document.querySelector(`#app`);if(!Df)throw Error(`App root was not found.`);var $=Qn(),Of=1,kf=Math.max(Date.now(),$.lastSimulatedAt),Af=Date.now(),jf=dl(Df,{requestRender:()=>Mf(),persist:()=>Br($),reset:()=>{zf(),$=Vr(),Mf()},getNow:()=>Rf(),getTestRewardMultiplier:()=>Of,setTestRewardMultiplier:e=>{Of=Of===e?1:e,ft(Of)}});function Mf(){let e=Rf();jf($,e)}function Nf(){let e=Rf(),t=Ff();if(oo($,e),bs($),gs($,e),Uo($,e),t!==Ff()){Mf();return}If()}Mf(),Pf(),window.setInterval(Nf,1e3),window.setInterval(()=>Br($),2e3),window.addEventListener(`beforeunload`,()=>Br($));function Pf(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./service-worker.js`).catch(()=>{})})}function Ff(){return JSON.stringify({inventory:$.inventory,characterInventory:$.characterInventory,resourceCounts:$.resourceCounts,characterResourceCounts:$.characterResourceCounts,characters:$.characters.map(e=>({id:e.id,condition:e.condition,locationId:e.locationId,needs:e.needs,actionLoopId:e.actionLoopId,combat:e.combat,classProgress:e.classProgress,inventory:e.inventory,resourceCounts:e.resourceCounts})),tools:$.tools,buildings:$.buildings,buildingCounts:$.buildingCounts,campfireExpiresAt:$.campfireExpiresAt,seenResources:$.seenResources,skills:$.skills,cooking:$.cooking,combat:$.combat,actionLoops:$.actionLoops,currentActions:ca($).map(e=>({actionId:e.actionId,characterId:e.characterId,phase:e.phase,originLocationId:e.originLocationId,targetLocationId:e.targetLocationId,locationId:e.locationId,loopActionIds:e.loopActionIds,loopLocationIds:e.loopLocationIds,loopIndex:e.loopIndex,nextLoopIndex:e.nextLoopIndex,followUpActionId:e.followUpActionId,startedAt:e.startedAt,endsAt:e.endsAt})),logHead:$.log[0]?.id??``,logLength:$.log.length})}function If(){let e=Rf();Lf(e);let t=document.querySelector(`[data-action-progress]`),n=document.querySelector(`[data-action-remaining]`),r=document.querySelector(`[data-smithing-action-progress]`),i=document.querySelector(`[data-smithing-action-remaining]`),a=document.querySelector(`[data-alchemy-action-progress]`),o=document.querySelector(`[data-alchemy-action-remaining]`),s=document.querySelector(`[data-textile-action-progress]`),c=document.querySelector(`[data-textile-action-remaining]`),l=document.querySelector(`[data-cooking-action-progress]`),u=document.querySelector(`[data-cooking-action-remaining]`),d=V($);if(d){let l=Math.min(1,Math.max(0,so($,e)));t&&(t.style.transform=`scaleX(${l.toFixed(4)})`),n&&(n.textContent=K(d.endsAt-e)),r&&(r.style.transform=`scaleX(${l.toFixed(4)})`),i&&(i.textContent=K(d.endsAt-e)),a&&(a.style.transform=`scaleX(${l.toFixed(4)})`),o&&(o.textContent=K(d.endsAt-e)),s&&(s.style.transform=`scaleX(${l.toFixed(4)})`),c&&(c.textContent=K(d.endsAt-e))}let f=_s($);if(f){let t=vs(f,e);l&&(l.style.transform=`scaleX(${t.toFixed(4)})`),u&&(u.textContent=K((f.endsAt??e)-e))}}function Lf(e){let t=document.querySelectorAll(`[data-campfire-remaining]`);if(!(!t.length||!$.campfireExpiresAt))for(let n of t)n.textContent=K($.campfireExpiresAt-e)}function Rf(){let e=Date.now(),t=Math.max(0,e-Af);return kf+=t,Af=e,kf}function zf(){let e=Date.now();kf=e,Af=e}function Bf(){If(),window.requestAnimationFrame(Bf)}window.requestAnimationFrame(Bf);