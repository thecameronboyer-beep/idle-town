import"./modulepreload-polyfill-Cf3xff8G.js";/* empty css              */var e=[`smeltCopperBar`,`smeltBronzeBar`,`craftPot`,`craftLadle`,`craftCopperPickaxe`,`craftCopperHatchet`,`craftCopperKnife`,`craftBronzePickaxe`,`craftBronzeHatchet`,`craftBronzeKnife`],t=[{actionId:`smeltCopperBar`,label:`Smelt Copper Bar`,verb:`smelting copper`,kind:`smelting`,material:`copper`,durationMs:22e3,cost:{copper:2,coal:1},output:{copperBar:1},blurb:`Refine soft copper ore into a first workable bar.`,unlockHint:`Build Stone Furnace`},{actionId:`smeltBronzeBar`,label:`Smelt Bronze Bar`,verb:`smelting bronze`,kind:`smelting`,material:`bronze`,durationMs:32e3,cost:{copper:2,tin:1,coal:2},output:{bronzeBar:1},blurb:`Blend copper and tin into a harder bronze bar.`,unlockHint:`Craft a Copper Tool`},{actionId:`craftPot`,label:`Craft Pot`,verb:`shaping a pot`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:2},output:{pot:1},blurb:`Hammer copper into a simple vessel.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftLadle`,label:`Craft Ladle`,verb:`shaping a ladle`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:14e3,cost:{copperBar:1,stick:1},output:{ladle:1},blurb:`Rivet a small copper cup to a wooden handle.`,unlockHint:`Smelt Copper Bar`},{actionId:`craftCopperPickaxe`,label:`Craft Copper Pickaxe`,verb:`smithing a copper pickaxe`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:24e3,cost:{copperBar:3,stick:1,flaxFiber:1},toolId:`copperPickaxe`,blurb:`A softer metal pick with better balance than stone.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperHatchet`,label:`Craft Copper Hatchet`,verb:`smithing a copper hatchet`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:22e3,cost:{copperBar:2,stick:1,flaxFiber:1},toolId:`copperHatchet`,blurb:`A compact copper chopping head lashed to a handle.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftCopperKnife`,label:`Craft Copper Knife`,verb:`smithing a copper knife`,kind:`smithing`,material:`copper`,productCategory:`tool`,durationMs:18e3,cost:{copperBar:1,stick:1,flaxFiber:1},toolId:`copperKnife`,blurb:`A sharper, longer-lasting knife for camp work.`,unlockHint:`Craft Pot and Ladle`},{actionId:`craftBronzePickaxe`,label:`Craft Bronze Pickaxe`,verb:`smithing a bronze pickaxe`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:3e4,cost:{bronzeBar:3,stick:1,flaxFiber:1},toolId:`bronzePickaxe`,blurb:`A sturdy bronze mining tool with a harder edge.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeHatchet`,label:`Craft Bronze Hatchet`,verb:`smithing a bronze hatchet`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:28e3,cost:{bronzeBar:2,stick:1,flaxFiber:1},toolId:`bronzeHatchet`,blurb:`A bronze chopping tool that holds its bite.`,unlockHint:`Smelt Bronze Bar`},{actionId:`craftBronzeKnife`,label:`Craft Bronze Knife`,verb:`smithing a bronze knife`,kind:`smithing`,material:`bronze`,productCategory:`tool`,durationMs:22e3,cost:{bronzeBar:1,stick:1,flaxFiber:1},toolId:`bronzeKnife`,blurb:`A reliable bronze edge for finer butchering.`,unlockHint:`Smelt Bronze Bar`}],n=t.filter(e=>e.kind===`smelting`).map(e=>e.actionId),r=t.filter(e=>e.kind===`smithing`).map(e=>e.actionId);function i(e){return t.find(t=>t.actionId===e)}function a(t){return e.some(e=>e===t)}var o=[`copperNeedle`,`bronzeNeedle`],s=[{actionId:`retFlax`,label:`Ret Flax`,verb:`retting flax`,kind:`retting`,durationMs:6e4,cost:{flaxPlant:3},output:{rettedFlax:3},blurb:`Soak and wait out whole flax stalks until the fibers loosen from the woody stem.`,unlockHint:`Gather Flax Plant`,requiredSeenResources:[`flaxPlant`]},{actionId:`separateFlaxFiber`,label:`Separate Flax Fiber`,verb:`breaking flax`,kind:`fiber`,durationMs:3e4,cost:{rettedFlax:2},output:{flaxFiber:3},blurb:`Break, scrape, and comb retted stalks into clean flax fiber.`,unlockHint:`Ret Flax`,requiredSeenResources:[`rettedFlax`]},{actionId:`handSpinLinenThread`,label:`Hand Spin Linen Thread`,verb:`hand-spinning thread`,kind:`spinning`,durationMs:26e3,cost:{flaxFiber:1},output:{linenThread:1},blurb:`Twist clean flax fiber into usable linen thread by hand.`,unlockHint:`Separate Flax Fiber`,requiredSeenResources:[`flaxFiber`]},{actionId:`spinLinenThread`,label:`Spin Linen Thread`,verb:`spinning thread`,kind:`spinning`,durationMs:18e3,cost:{flaxFiber:5},output:{linenThread:5},blurb:`Use the spinning wheel to turn a batch of flax fiber into thread more quickly.`,unlockHint:`Build Primitive Spinning Wheel`,requiredBuildings:[`primitiveSpinningWheel`],requiredSeenResources:[`flaxFiber`]},{actionId:`weaveLinenCloth`,label:`Weave Linen Cloth`,verb:`weaving linen cloth`,kind:`weaving`,durationMs:36e3,cost:{linenThread:4},output:{linenCloth:1},blurb:`Work linen thread across the loom into a sturdy cloth panel.`,unlockHint:`Build Primitive Loom`,requiredBuildings:[`primitiveLoom`],requiredSeenResources:[`linenThread`]},{actionId:`craftCopperNeedle`,label:`Craft Copper Needle`,verb:`crafting a copper needle`,kind:`tooling`,durationMs:12e3,cost:{copperBar:1},output:{copperNeedle:1},blurb:`Draw a soft copper bar into a basic needle for stitching linen.`,unlockHint:`Smelt Copper Bar`,requiredSeenResources:[`copperBar`]},{actionId:`craftBronzeNeedle`,label:`Craft Bronze Needle`,verb:`crafting a bronze needle`,kind:`tooling`,durationMs:14e3,cost:{bronzeBar:1},output:{bronzeNeedle:1},blurb:`Shape a harder bronze needle for steadier sewing work.`,unlockHint:`Smelt Bronze Bar`,requiredSeenResources:[`bronzeBar`]},{actionId:`sewClothWrap`,label:`Sew Cloth Wrap`,verb:`sewing a cloth wrap`,kind:`sewing`,durationMs:14e3,cost:{linenCloth:1,linenThread:1},output:{clothWrap:1},blurb:`Hem a small linen wrap for tying and protecting loose goods.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]},{actionId:`sewLinenBandage`,label:`Sew Linen Bandage`,verb:`sewing a linen bandage`,kind:`sewing`,durationMs:12e3,cost:{linenCloth:1},output:{linenBandage:1},blurb:`Cut and stitch clean linen into simple bandage strips.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]},{actionId:`sewSimplePouch`,label:`Sew Simple Pouch`,verb:`sewing a simple pouch`,kind:`sewing`,durationMs:22e3,cost:{linenCloth:2,linenThread:2},output:{simplePouch:1},blurb:`Sew a small pouch with tied corners and a linen drawstring.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]},{actionId:`sewLinenHood`,label:`Sew Linen Hood`,verb:`sewing a linen hood`,kind:`sewing`,durationMs:24e3,cost:{linenCloth:2,linenThread:2},output:{linenHood:1},blurb:`Cut and sew a simple linen hood from woven cloth panels.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]},{actionId:`sewLinenShirt`,label:`Sew Linen Shirt`,verb:`sewing a linen shirt`,kind:`sewing`,durationMs:3e4,cost:{linenCloth:4,linenThread:3},output:{linenShirt:1},blurb:`Stitch linen panels into a simple shirt for future clothing systems.`,unlockHint:`Craft Copper Needle or Bronze Needle`,requiredSeenResources:[`linenCloth`],requiredAnyResources:[...o]}],c=s.map(e=>e.actionId),l=_(`retting`),u=_(`fiber`),d=_(`spinning`),f=_(`weaving`),p=_(`tooling`),m=_(`sewing`);function h(e){return s.find(t=>t.actionId===e)}function g(e){return s.some(t=>t.actionId===e)}function _(e){return s.filter(t=>t.kind===e).map(e=>e.actionId)}var v=[{id:`gatherSticks`,label:`Gather Sticks`,verb:`gathering sticks`,durationMs:7e3,blurb:`Slow, reliable foraging near camp.`},{id:`gatherStones`,label:`Gather Stones`,verb:`searching for stones`,durationMs:8500,blurb:`Cameron checks creek beds and exposed roots.`},{id:`gatherFlaxPlants`,label:`Gather Flax Plants`,verb:`cutting flax plants`,durationMs:11e3,blurb:`Cut whole flax stalks for later retting and fiber work.`},{id:`gatherFlaxFibers`,label:`Gather Flax Fibers`,verb:`pulling flax fibers`,durationMs:1e4,blurb:`Thin stalks stripped by hand for future craft.`},{id:`gatherMeadowIngredients`,label:`Gather Meadow Ingredients`,verb:`gathering meadow ingredients`,durationMs:12e3,blurb:`Search the meadow for herbs, flowers, roots, and small fruit.`},{id:`mineCoal`,label:`Mine Coal`,verb:`mining coal`,durationMs:3e4,blurb:`Chip dark fuel from the mine wall.`},{id:`mineCopper`,label:`Mine Copper`,verb:`mining copper`,durationMs:3e4,blurb:`Break reddish ore from stone seams.`},{id:`mineTin`,label:`Mine Tin`,verb:`mining tin`,durationMs:3e4,blurb:`Work pale ore from fractured rock.`},{id:`fishRiver`,label:`Fishing River`,verb:`fishing the river`,durationMs:15e3,blurb:`Cast into the shallows for small river fish.`},{id:`gatherWater`,label:`Gather Water`,verb:`gathering water`,durationMs:9e3,blurb:`Carry usable river water back for camp cooking.`},{id:`craftLowestTool`,label:`Primitive Tools`,verb:`balancing tool stock`,durationMs:15e3,blurb:`Craft whichever primitive tool has the lowest current stock.`},{id:`craftBasket`,label:`Craft Basket`,verb:`crafting a basket`,durationMs:15e3,blurb:`Weave flax fibers around a simple stick frame.`},{id:`craftWoodenSpoon`,label:`Craft Wooden Spoon`,verb:`carving a wooden spoon`,durationMs:1e4,blurb:`Carve a small wooden spoon for eating hot camp stew.`},{id:`craftFishingPole`,label:`Craft Fishing Pole`,verb:`crafting a fishing pole`,durationMs:15e3,blurb:`Bind flax line to a flexible stick.`},{id:`craftWoodenBowl`,label:`Craft Wooden Bowl`,verb:`carving a wooden bowl`,durationMs:12e3,blurb:`Carve a simple camp bowl from usable wood.`},{id:`craftStoneKnife`,label:`Craft Stone Skinning Knife`,verb:`crafting a stone skinning knife`,durationMs:15e3,blurb:`Shape a scraping edge for hide and bone recovery.`},{id:`craftStoneDagger`,label:`Craft Stone Dagger`,verb:`crafting a stone dagger`,durationMs:15e3,blurb:`Shape a compact combat blade separate from the skinning knife.`},{id:`craftStoneAxe`,label:`Craft Stone Axe`,verb:`crafting a stone axe`,durationMs:15e3,blurb:`Bind a chopping head to a short haft.`},{id:`craftStonePickAxe`,label:`Craft Stone Pick Axe`,verb:`crafting a stone pick axe`,durationMs:15e3,blurb:`Lash a pointed stone head to a sturdy handle.`},{id:`craftStoneSpear`,label:`Craft Stone Spear`,verb:`crafting a stone spear`,durationMs:15e3,blurb:`Lash a stone point to a balanced shaft.`},{id:`craftWoodenClub`,label:`Craft Wooden Club`,verb:`crafting a wooden club`,durationMs:16e3,blurb:`Shape hardwood into a heavier primitive weapon.`},{id:`craftWoodenTwoHandedClub`,label:`Craft Wooden 2H Club`,verb:`crafting a wooden two-handed club`,durationMs:18e3,blurb:`Shape a larger club for slower, stronger blows.`},{id:`craftWoodenSword`,label:`Craft Wooden Sword`,verb:`crafting a wooden sword`,durationMs:17e3,blurb:`Harden and bind a wooden blade for controlled combat.`},{id:`craftWoodenTwoHandedSword`,label:`Craft Wooden 2H Sword`,verb:`crafting a wooden two-handed sword`,durationMs:2e4,blurb:`Shape a long wooden blade that favors power over speed.`},{id:`craftShortBow`,label:`Craft Short Bow`,verb:`crafting a short bow`,durationMs:2e4,blurb:`Bend wood and flax fiber into a simple ranged weapon.`},{id:`craftWoodenTotem`,label:`Craft Wooden Totem`,verb:`carving a wooden totem`,durationMs:19e3,blurb:`Carve a wooden focus for steadier primitive combat.`},{id:`chopTrees`,label:`Chop Trees`,verb:`chopping trees`,durationMs:18e3,blurb:`The first real push beyond loose branches.`},{id:`huntSmallAnimals`,label:`Hunt Small Animals`,verb:`hunting small animals`,durationMs:28e3,blurb:`Bring back whole rabbits or squirrels for later work.`},{id:`butcherFish`,label:`Butcher Fish`,verb:`butchering fish`,durationMs:15e3,blurb:`Clean one carried fish into matching filets at half weight.`},{id:`butcherRabbit`,label:`Butcher Rabbit`,verb:`butchering a rabbit`,durationMs:18e3,blurb:`Break down a rabbit into useful parts.`},{id:`butcherSquirrel`,label:`Butcher Squirrel`,verb:`butchering a squirrel`,durationMs:14e3,blurb:`Break down a squirrel into useful parts.`},{id:`cookRabbitMeat`,label:`Cook Rabbit Meat`,verb:`cooking rabbit meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`cookSquirrelMeat`,label:`Cook Squirrel Meat`,verb:`cooking squirrel meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`tanHide`,label:`Tan Hide`,verb:`working hide`,durationMs:36e3,blurb:`Scrape, stretch, wait, repeat.`},{id:`craftLeatherBackpack`,label:`Craft Leather Backpack`,verb:`crafting a leather backpack`,durationMs:15e3,blurb:`Knot a crude leather sling pouch with a drawstring.`},...t.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb})),...s.map(e=>({id:e.actionId,label:e.label,verb:e.verb,durationMs:e.durationMs,blurb:e.blurb}))];function y(e){return v.find(t=>t.id===e)}var b=[{id:`fighter`,label:`Fighter`,weaponLabel:`Sword`,role:`A steady front-line duelist.`,range:`melee`,maxHp:34,maxMana:10},{id:`warrior`,label:`Warrior`,weaponLabel:`2H Sword`,role:`A slower heavy striker.`,range:`melee`,maxHp:38,maxMana:8},{id:`bruiser`,label:`Bruiser`,weaponLabel:`Club`,role:`A rugged close-range brawler.`,range:`melee`,maxHp:36,maxMana:8},{id:`crusher`,label:`Crusher`,weaponLabel:`2H Club`,role:`A heavy impact fighter.`,range:`melee`,maxHp:40,maxMana:6},{id:`archer`,label:`Archer`,weaponLabel:`Short Bow`,role:`A ranged skirmisher.`,range:`ranged`,maxHp:28,maxMana:12},{id:`shaman`,label:`Shaman`,weaponLabel:`Totem`,role:`A focus user prepared for future support magic.`,range:`focus`,maxHp:30,maxMana:30},{id:`mage`,label:`Mage`,weaponLabel:`Wand`,role:`A focused caster placeholder for future wand combat.`,range:`focus`,maxHp:24,maxMana:36},{id:`caster`,label:`Caster`,weaponLabel:`Staff`,role:`A long-form spellcaster placeholder for future staff combat.`,range:`focus`,maxHp:26,maxMana:40},{id:`rogue`,label:`Rogue`,weaponLabel:`Dagger`,role:`A fast close-range striker.`,range:`melee`,maxHp:30,maxMana:14}],x={woodenSword:`fighter`,woodenTwoHandedSword:`warrior`,woodenClub:`bruiser`,woodenTwoHandedClub:`crusher`,shortBow:`archer`,woodenTotem:`shaman`,stoneDagger:`rogue`,stoneSpear:`warrior`},S=[{id:`goblin`,label:`Goblin`,blurb:`A small melee raider that closes distance and swings at nearby party members.`,glyph:`G`,maxHp:16,maxMana:0,damage:2,attackRange:1,actEveryMs:2200}],ee=[{id:`ruins`,label:`The Ruins`,blurb:`Broken stone lanes where the first hostile creatures test the camp's fighters.`,gridWidth:7,gridHeight:5,enemyIds:[`goblin`]}],te=b.map(e=>e.id),ne=S.map(e=>e.id),re=ee.map(e=>e.id);function ie(e){return b.find(t=>t.id===e)??b[0]}function ae(e){return S.find(t=>t.id===e)??S[0]}function oe(e){return ee.find(t=>t.id===e)??ee[0]}var se=[{id:`campfire`,name:`Campfire`,label:`Campfire`,requiredBuildingId:`campfire`,tags:[`primitive`,`stew`,`open-fire`],fuelMode:`existing-campfire`,description:`A simple fire ring that can hold one primitive cooking job at a time.`}],ce=[ge({id:`rabbitStew`,name:`Rabbit Stew`,outputId:`rabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`dandelionGreens`,role:`plant`}],hunger:24,xpReward:220,tags:[`meat`,`starter`]}),ge({id:`squirrelHerbStew`,name:`Squirrel Herb Stew`,outputId:`squirrelHerbStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`plantainLeaf`,role:`plant`},{id:`yarrow`,role:`seasoning`}],hunger:19,xpReward:240,tags:[`meat`,`herbal`]}),ge({id:`rootStew`,name:`Root Stew`,outputId:`rootStew`,ingredients:[{id:`sunrootTubers`,role:`plant`},{id:`wildCarrot`,role:`plant`},{id:`clover`,role:`plant`}],hunger:18,xpReward:210,tags:[`meadow`,`vegetarian`,`roots`]}),ge({id:`wildGarlicRabbitStew`,name:`Wild Garlic Rabbit Stew`,outputId:`wildGarlicRabbitStew`,ingredients:[{id:`rabbitMeat`,role:`meat`},{id:`wildGarlic`,role:`seasoning`},{id:`sorrel`,role:`plant`}],hunger:28,xpReward:275,levelRequirement:2,tags:[`meat`,`allium`,`sour`]}),ge({id:`meadowStew`,name:`Meadow Stew`,outputId:`meadowStew`,ingredients:[{id:`dandelionGreens`,role:`plant`},{id:`clover`,role:`plant`},{id:`plantainLeaf`,role:`plant`},{id:`wildOnion`,role:`seasoning`},{id:`sunrootTubers`,role:`plant`}],hunger:22,xpReward:260,levelRequirement:2,tags:[`meadow`,`vegetarian`,`five-plant`]}),ge({id:`mintedSquirrelStew`,name:`Minted Squirrel Stew`,outputId:`mintedSquirrelStew`,ingredients:[{id:`squirrelMeat`,role:`meat`},{id:`mint`,role:`seasoning`},{id:`wildOnion`,role:`seasoning`}],hunger:22,xpReward:285,levelRequirement:3,tags:[`meat`,`aromatic`]}),...he(`rabbitMeat`,`Rabbit`,[[`sorrel`,`Sorrel`,25],[`yarrow`,`Yarrow`,24],[`hearthcap`,`Hearthcap`,27]]),...he(`squirrelMeat`,`Squirrel`,[[`wildGarlic`,`Wild Garlic`,22],[`fennel`,`Fennel`,21],[`hearthcap`,`Hearthcap`,23]])],le=ce.map(e=>e.id);ce.filter(e=>e.tags.includes(`stew`)),ce.flatMap(e=>e.outputs.map(e=>e.resourceId));var ue=ce.map(e=>({id:e.outputs[0].resourceId,label:e.name,group:`food`,blurb:_e(e),stackSize:20,weight:.8,value:Math.max(6,Math.round(e.xpReward/35)),rarity:e.levelRequirement>=3?`uncommon`:`common`,nutrition:e.nutrition,spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`prepared`,`stew`,...e.tags],compatibility:[`eat`,`serve`,`tavern`]}}));function de(e){return se.find(t=>t.id===e)}function fe(e){return ce.find(t=>t.id===e)}function pe(e){return e.ingredients.reduce((e,t)=>(t.resourceId&&t.consumed!==!1&&(e[t.resourceId]=(e[t.resourceId]??0)+t.amount),e),{})}function me(e){return e.outputs.reduce((e,t)=>(e[t.resourceId]=(e[t.resourceId]??0)+t.amount,e),{})}function he(e,t,n){return n.map(([n,r,i],a)=>ge({id:`${n}${t}Stew`,name:`${r} ${t} Stew`,outputId:`${n}${t}Stew`,ingredients:[{id:e,role:`meat`},{id:n,role:`seasoning`},{id:a%2==0?`dandelionGreens`:`plantainLeaf`,role:`plant`}],hunger:i,xpReward:250+a*20,levelRequirement:2+a,tags:[`meat`,`generated`,`accent`]}))}function ge(e){let t=[{resourceId:e.outputId,amount:1},{resourceId:`dirtyBowl`,amount:1}];return{id:e.id,name:e.name,station:`campfire`,cookTimeMs:e.cookTimeMs??24e3,ingredients:[{resourceId:`water`,amount:1,role:`liquid`},{resourceId:`woodenBowl`,amount:1,role:`vessel`},...e.ingredients.map(e=>({resourceId:e.id,amount:e.amount??1,role:e.role}))],outputs:t,xpReward:e.xpReward,levelRequirement:e.levelRequirement??1,tags:[`stew`,`primitive`,...e.tags??[]],nutrition:{hunger:e.hunger},failureChance:e.failureChance??.03,modifiers:[`quality-ready`,`season-ready`,`station-ready`]}}function _e(e){return e.tags.includes(`vegetarian`)?`A rough bowl of meadow plants simmered until soft enough to fill the belly.`:e.tags.includes(`aromatic`)||e.tags.includes(`accent`)?`A primitive stew carried by a strong meadow scent and small-game broth.`:`A simple campfire stew of water, gathered plants, and whatever meat the day allowed.`}var C=[{id:`stoneKnife`,label:`Stone Skinning Knife`,craftActionId:`craftStoneKnife`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A dedicated scraping edge for hide and bone recovery while butchering.`,maxDurability:18,roles:[`butchering`],roleTiers:{butchering:1},tier:`primitive`,quickCraft:!0},{id:`stoneAxe`,label:`Stone Axe`,craftActionId:`craftStoneAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Heavy enough to bite into small trees.`,maxDurability:12,roles:[`woodcutting`],roleTiers:{woodcutting:1},tier:`primitive`,quickCraft:!0},{id:`stonePickAxe`,label:`Stone Pick Axe`,craftActionId:`craftStonePickAxe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A pointed stone head for breaking stubborn ground.`,maxDurability:12,roles:[`mining`],roleTiers:{mining:1},tier:`primitive`,quickCraft:!0},{id:`stoneSpear`,label:`Stone Spear`,craftActionId:`craftStoneSpear`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A reach weapon for rabbits and squirrels.`,maxDurability:10,roles:[`hunting`],tier:`primitive`,weapon:{damage:2.4,speed:.9,hands:2,range:`melee`},quickCraft:!0},{id:`stoneDagger`,label:`Stone Dagger`,craftActionId:`craftStoneDagger`,recipe:{stick:1,stone:2,flaxFiber:1},blurb:`A compact combat blade separate from the skinning knife.`,maxDurability:12,roles:[`hunting`],tier:`primitive`,weapon:{damage:2.2,speed:1.2,hands:1,range:`melee`},quickCraft:!0},{id:`woodenClub`,label:`Wooden Club`,craftActionId:`craftWoodenClub`,recipe:{wood:2},blurb:`A shaped hardwood weapon with more heft than loose branches.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3,speed:.9,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedClub`,label:`Wooden 2H Club`,craftActionId:`craftWoodenTwoHandedClub`,recipe:{wood:4},blurb:`A heavy two-handed cudgel for decisive primitive strikes.`,maxDurability:24,roles:[`hunting`],tier:`primitive`,weapon:{damage:4,speed:.75,hands:2,range:`melee`},quickCraft:!0},{id:`woodenSword`,label:`Wooden Sword`,craftActionId:`craftWoodenSword`,recipe:{wood:2,flaxFiber:1},blurb:`A hardened wooden blade for controlled early combat.`,maxDurability:20,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.4,speed:1,hands:1,range:`melee`},quickCraft:!0},{id:`woodenTwoHandedSword`,label:`Wooden 2H Sword`,craftActionId:`craftWoodenTwoHandedSword`,recipe:{wood:4,flaxFiber:2},blurb:`A long wooden blade that trades speed for stronger blows.`,maxDurability:26,roles:[`hunting`],tier:`primitive`,weapon:{damage:4.3,speed:.85,hands:2,range:`melee`},quickCraft:!0},{id:`shortBow`,label:`Short Bow`,craftActionId:`craftShortBow`,recipe:{wood:2,flaxFiber:3},blurb:`A simple bow that brings safer range to small-game hunts.`,maxDurability:18,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.8,speed:1.1,hands:2,range:`ranged`},quickCraft:!0},{id:`woodenTotem`,label:`Wooden Totem`,craftActionId:`craftWoodenTotem`,recipe:{wood:3,flaxFiber:2},blurb:`A carved focus that steadies the hand during primitive combat.`,maxDurability:22,roles:[`hunting`],tier:`primitive`,weapon:{damage:3.2,speed:.8,hands:1,range:`focus`},quickCraft:!0},{id:`copperPickaxe`,label:`Copper Pickaxe`,recipe:{copperBar:3,stick:1,flaxFiber:1},blurb:`A softer metal pick with better balance than stone.`,maxDurability:24,roles:[`mining`],roleTiers:{mining:2},tier:`copper`},{id:`copperHatchet`,label:`Copper Hatchet`,recipe:{copperBar:2,stick:1,flaxFiber:1},blurb:`A compact copper chopping head lashed to a handle.`,maxDurability:22,roles:[`woodcutting`],roleTiers:{woodcutting:2},tier:`copper`},{id:`copperKnife`,label:`Copper Knife`,recipe:{copperBar:1,stick:1,flaxFiber:1},blurb:`A sharper, longer-lasting knife for camp work.`,maxDurability:30,roles:[`butchering`],roleTiers:{butchering:2},tier:`copper`},{id:`bronzePickaxe`,label:`Bronze Pickaxe`,recipe:{bronzeBar:3,stick:1,flaxFiber:1},blurb:`A sturdy bronze mining tool with a harder edge.`,maxDurability:42,roles:[`mining`],roleTiers:{mining:3},tier:`bronze`},{id:`bronzeHatchet`,label:`Bronze Hatchet`,recipe:{bronzeBar:2,stick:1,flaxFiber:1},blurb:`A bronze chopping tool that holds its bite.`,maxDurability:38,roles:[`woodcutting`],roleTiers:{woodcutting:3},tier:`bronze`},{id:`bronzeKnife`,label:`Bronze Knife`,recipe:{bronzeBar:1,stick:1,flaxFiber:1},blurb:`A reliable bronze edge for finer butchering.`,maxDurability:48,roles:[`butchering`],roleTiers:{butchering:3},tier:`bronze`},{id:`fishingPole`,label:`Fishing Pole`,craftActionId:`craftFishingPole`,recipe:{stick:1,flaxFiber:1},blurb:`A simple line and hook for working the river.`,maxDurability:16,roles:[`fishing`],roleTiers:{fishing:1},tier:`primitive`,quickCraft:!0},{id:`basket`,label:`Basket`,craftActionId:`craftBasket`,recipe:{stick:1,flaxFiber:3},blurb:`A one-hand woven carrier for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`,quickCraft:!0},{id:`leatherBackpack`,label:`Leather Backpack`,recipe:{leather:10},blurb:`A crude sling pouch for hauling more from the wild.`,maxDurability:1,roles:[],tier:`primitive`}],ve=C.filter(e=>!!(e.craftActionId&&e.quickCraft)),ye=[{id:`campfire`,label:`Campfire`,recipe:{stick:8,stone:5},blurb:`A fixed fire ring for cooking meat.`},{id:`tanningRack`,label:`Tanning Rack`,recipe:{stick:6,wood:4,stone:2},blurb:`A rough frame for turning hide into leather.`},{id:`hideTent`,label:`Hide Tent`,recipe:{wood:5,hide:10},blurb:`A hide shelter for holding warmth at camp.`},{id:`crudeStoneFurnace`,label:`Stone Furnace`,recipe:{stone:16,stick:6,wood:4},blurb:`A low stone furnace hot enough for first smelting.`},{id:`primitiveSpinningWheel`,label:`Primitive Spinning Wheel`,recipe:{wood:8,stick:6,linenThread:2},blurb:`A simple frame, spindle, and wheel for turning flax fiber into thread faster.`},{id:`primitiveLoom`,label:`Primitive Loom`,recipe:{wood:10,stick:8,linenThread:4},blurb:`A wooden frame for stretching warp threads and weaving linen cloth.`}],be=[we(`wildGarlic`,`Wild Garlic`,`Sharp green shoots with a clean bite. Good for waking up thin broth.`,9,[`allium`,`pungent`,`meadow`]),we(`dandelionGreens`,`Dandelion Greens`,`Bitter young leaves that soften in hot water.`,13,[`bitter`,`leafy`,`meadow`]),we(`clover`,`Clover`,`Tender meadow clover with a mild grassy sweetness.`,11,[`leafy`,`mild`,`meadow`]),Te(`chamomile`,`Chamomile`,`Small pale flowers with a warm apple scent.`,7,[`calming`,`floral`,`meadow`]),Te(`yarrow`,`Yarrow`,`Feathery leaves and tight flower heads with a resin edge.`,6,[`bitter`,`medicinal`,`meadow`]),we(`wildOnion`,`Wild Onion`,`Slender onion bulbs and greens pulled from loose soil.`,8,[`allium`,`pungent`,`meadow`]),we(`sorrel`,`Sorrel`,`Sour leaves that cut through fatty meat.`,8,[`sour`,`leafy`,`meadow`]),we(`plantainLeaf`,`Plantain Leaf`,`Broad, sturdy leaves that hold up in a pot.`,10,[`leafy`,`earthy`,`meadow`]),we(`mint`,`Mint`,`Cool bright leaves from damp meadow edges.`,6,[`cooling`,`aromatic`,`meadow`]),ke(`fennel`,`Fennel`,`Fine fronds with a sweet anise scent.`,5,[`aromatic`,`sweet`,`meadow`]),Te(`lavender`,`Lavender`,`Purple flower spikes with a strong dry perfume.`,4,[`aromatic`,`floral`,`meadow`]),ke(`hearthcap`,`Hearthcap`,`Russet caps with a peppery smell when warmed by the fire.`,3,[`peppery`,`savory`,`meadow`]),De(`sunrootTubers`,`Sunroot Tubers`,`Knobbly tubers with a nutty bite after boiling.`,6,[`starchy`,`earthy`,`meadow`]),Oe(`wildCarrot`,`Wild Carrot`,`Thin pale roots with more scent than flesh.`,5,[`root`,`sweet`,`meadow`]),Ee(`blueberries`,`Blueberries`,`Small blue fruit from low bushes along the meadow edge.`,7,[`fruit`,`sweet`,`meadow`]),Ee(`strawberries`,`Strawberries`,`Tiny red berries hiding under leaves.`,5,[`fruit`,`sweet`,`meadow`]),Te(`elderflowers`,`Elderflowers`,`Creamy flower clusters with a clean green scent.`,4,[`floral`,`sweet`,`meadow`]),Ee(`roseHips`,`Rose Hips`,`Tart red hips that stain the fingers.`,4,[`tart`,`fruit`,`meadow`])];be.map(e=>e.id);var xe={meadow:{locationId:`meadow`,label:`Meadow Ingredients`,categories:[`herb`,`flower`,`berry`,`root`,`vegetable`,`seasoning`],seasonalTags:[`spring`,`summer`,`autumn-ready`],biomeTags:[`meadow`,`grassland`,`edge`],entries:be.map(e=>({id:e.id,category:e.category,weight:e.gatherWeight,minAmount:Ae(e.category),maxAmount:je(e.category),gatherTimeModifier:e.gatherTimeModifier,tags:e.tags,rarity:e.rarity}))}},Se=be.map(e=>({id:e.id,label:e.displayName,group:`ingredients`,blurb:e.description,stackSize:99,weight:Me(e.category),value:e.value,rarity:e.rarity,nutrition:e.nutrition,spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:e.category,tags:e.tags,compatibility:Ne(e.category,e.tags)}}));function Ce(e){return xe[e]}function we(e,t,n,r,i){return{id:e,displayName:t,category:`herb`,description:n,gatherWeight:r,gatherTimeModifier:1,tags:i,value:2,rarity:r<=6?`uncommon`:`common`,nutrition:{hunger:1}}}function Te(e,t,n,r,i){return{id:e,displayName:t,category:`flower`,description:n,gatherWeight:r,gatherTimeModifier:1.08,tags:i,value:2,rarity:r<=4?`uncommon`:`common`,nutrition:{hunger:1}}}function Ee(e,t,n,r,i){return{id:e,displayName:t,category:`berry`,description:n,gatherWeight:r,gatherTimeModifier:1.04,tags:i,value:3,rarity:r<=4?`uncommon`:`common`,nutrition:{hunger:2,hydration:1}}}function De(e,t,n,r,i){return{id:e,displayName:t,category:`root`,description:n,gatherWeight:r,gatherTimeModifier:1.18,tags:i,value:4,rarity:`uncommon`,nutrition:{hunger:4}}}function Oe(e,t,n,r,i){return{id:e,displayName:t,category:`vegetable`,description:n,gatherWeight:r,gatherTimeModifier:1.14,tags:i,value:4,rarity:`uncommon`,nutrition:{hunger:3}}}function ke(e,t,n,r,i){return{id:e,displayName:t,category:`seasoning`,description:n,gatherWeight:r,gatherTimeModifier:1.2,tags:i,value:5,rarity:`rare`,nutrition:{hunger:1}}}function Ae(e){return e===`berry`?2:1}function je(e){switch(e){case`berry`:return 4;case`root`:case`vegetable`:return 2;default:return 3}}function Me(e){switch(e){case`root`:case`vegetable`:return .4;case`berry`:return .1;default:return .1}}function Ne(e,t){let n=[`stew`,`campfire`];return(e===`berry`||t.includes(`sweet`))&&n.push(`preserve`,`brew`),(e===`seasoning`||t.includes(`aromatic`))&&n.push(`seasoning`),(e===`root`||e===`vegetable`)&&n.push(`hearty-stew`),n}var w=[{id:`stick`,label:`Stick`,group:`resources`,blurb:`Dry kindling and crude handles.`},{id:`stone`,label:`Stone`,group:`resources`,blurb:`Weight, edge, and spark.`},{id:`flaxPlant`,label:`Flax Plant`,group:`resources`,blurb:`Fresh flax stalks that need retting before useful fiber can be combed free.`},{id:`rettedFlax`,label:`Retted Flax`,group:`resources`,blurb:`Soaked and loosened flax stems ready for breaking and combing.`},{id:`flaxFiber`,label:`Flax Fiber`,group:`resources`,blurb:`Pale plant fiber for future cordage and cloth.`},{id:`linenThread`,label:`Linen Thread`,group:`crafted`,blurb:`Twisted flax fiber ready for weaving, stitching, and more precise craft.`},{id:`linenCloth`,label:`Linen Cloth`,group:`crafted`,blurb:`Woven linen panels ready for sewing into useful camp goods.`},{id:`wood`,label:`Wood`,group:`resources`,blurb:`Usable lengths from felled trees.`},{id:`woodenBowl`,label:`Wooden Bowl`,group:`utensils`,blurb:`A hand-carved wooden bowl for simple camp meals.`,stackSize:20,weight:.5,value:3,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`vessel`,`primitive`],compatibility:[`stew`]}},{id:`coal`,label:`Coal`,group:`resources`,blurb:`Dark fuel chipped from the mine.`},{id:`copper`,label:`Copper`,group:`resources`,blurb:`Soft reddish ore for future metalwork.`},{id:`tin`,label:`Tin`,group:`resources`,blurb:`Pale ore that will matter once bronze is possible.`},{id:`copperBar`,label:`Copper Bar`,group:`crafted`,blurb:`A worked bar ready for first metal tools.`},{id:`bronzeBar`,label:`Bronze Bar`,group:`crafted`,blurb:`A harder alloy bar for sturdier tools.`},{id:`copperNeedle`,label:`Copper Needle`,group:`crafted`,blurb:`A simple metal needle for first linen sewing.`},{id:`bronzeNeedle`,label:`Bronze Needle`,group:`crafted`,blurb:`A stronger needle for steady linen sewing work.`},{id:`clothWrap`,label:`Cloth Wrap`,group:`crafted`,blurb:`A simple folded linen wrap for bundling small supplies.`},{id:`linenBandage`,label:`Linen Bandage`,group:`crafted`,blurb:`Clean linen strips prepared for future medical use.`},{id:`simplePouch`,label:`Simple Pouch`,group:`crafted`,blurb:`A small sewn linen pouch for organizing camp goods.`},{id:`linenHood`,label:`Linen Hood`,group:`crafted`,blurb:`A simple sewn hood for future clothing systems.`},{id:`linenShirt`,label:`Linen Shirt`,group:`crafted`,blurb:`A plain linen shirt, ready for later equipment and quality systems.`},{id:`pot`,label:`Pot`,group:`crafted`,blurb:`A simple worked vessel for holding heat and liquid.`},{id:`ladle`,label:`Ladle`,group:`crafted`,blurb:`A small handled tool for moving hot metal safely.`},{id:`water`,label:`Water`,group:`liquids`,blurb:`Clean enough river water stored for camp cooking.`,stackSize:50,weight:1,value:1,rarity:`common`,nutrition:{hydration:8},spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`water`,`liquid`,`stew-base`],compatibility:[`stew`,`brew`]}},{id:`dirtyBowl`,label:`Dirty Bowl`,group:`utensils`,blurb:`A used bowl with stew clinging to the inside. Washing can come later.`,stackSize:20,weight:.5,value:1,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`bowl`,`dirty`,`reuse-hook`],compatibility:[`washing`]}},{id:`woodenSpoon`,label:`Wooden Spoon`,group:`utensils`,blurb:`A small carved wooden spoon for eating hot stew without burning fingers.`,stackSize:20,weight:.2,value:2,rarity:`common`,spoilage:{perishable:!1},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`spoon`,`utensil`,`primitive`],compatibility:[`eat-stew`]}},{id:`minnow`,label:`Minnow`,group:`fish`,blurb:`Tiny river fish, quick to smoke or stew.`},{id:`stoneLoach`,label:`Stone Loach`,group:`fish`,blurb:`Bottom-feeding fish from cold stones.`},{id:`mudskipper`,label:`Mudskipper`,group:`fish`,blurb:`A stubborn shore fish pulled from muddy shallows.`},{id:`brookStickleback`,label:`Brook Stickleback`,group:`fish`,blurb:`Small, sharp-backed fish from fast water.`},{id:`pebblePerch`,label:`Pebble Perch`,group:`fish`,blurb:`A broad little perch hiding under river stones.`},{id:`minnowFilet`,label:`Minnow Filet`,group:`fish`,blurb:`Cleaned minnow meat, lighter after butchering.`},{id:`stoneLoachFilet`,label:`Stone Loach Filet`,group:`fish`,blurb:`Cleaned stone loach meat, lighter after butchering.`},{id:`mudskipperFilet`,label:`Mudskipper Filet`,group:`fish`,blurb:`Cleaned mudskipper meat, lighter after butchering.`},{id:`brookSticklebackFilet`,label:`Brook Stickleback Filet`,group:`fish`,blurb:`Cleaned brook stickleback meat, lighter after butchering.`},{id:`pebblePerchFilet`,label:`Pebble Perch Filet`,group:`fish`,blurb:`Cleaned pebble perch meat, lighter after butchering.`},{id:`rabbit`,label:`Rabbit`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`squirrel`,label:`Squirrel`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`rabbitMeat`,label:`Rabbit Meat`,group:`hunted`,blurb:`Fresh rabbit meat that wants fire soon.`,weight:.5,value:4,rarity:`common`,nutrition:{hunger:8},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`rabbit`],compatibility:[`stew`,`roast`]}},{id:`squirrelMeat`,label:`Squirrel Meat`,group:`hunted`,blurb:`Fresh squirrel meat that wants fire soon.`,weight:.4,value:3,rarity:`common`,nutrition:{hunger:6},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{ingredientCategory:`meat`,tags:[`meat`,`small-game`,`squirrel`],compatibility:[`stew`,`roast`]}},{id:`cookedRabbitMeat`,label:`Cooked Rabbit Meat`,group:`crafted`,blurb:`A small cooked rabbit ration.`,weight:.5,value:5,rarity:`common`,nutrition:{hunger:12},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`rabbit`],compatibility:[`eat`,`stew-addition`]}},{id:`cookedSquirrelMeat`,label:`Cooked Squirrel Meat`,group:`crafted`,blurb:`A small cooked squirrel ration.`,weight:.4,value:4,rarity:`common`,nutrition:{hunger:9},spoilage:{perishable:!0},quality:{enabled:!1,baseQuality:1},cooking:{tags:[`cooked`,`meat`,`squirrel`],compatibility:[`eat`,`stew-addition`]}},{id:`hide`,label:`Hide`,group:`resources`,blurb:`Rough animal hide, ready for scraping.`},{id:`bone`,label:`Bone`,group:`resources`,blurb:`Hard scraps for later craft.`},{id:`leather`,label:`Leather`,group:`crafted`,blurb:`Worked hide for future bags and armor.`},...Se,...ue],T=w.map(e=>e.id),Pe=[`stick`,`stone`];w.filter(e=>!!e.cooking?.ingredientCategory).map(e=>e.id);var Fe=w.filter(e=>(e.nutrition?.hunger??0)>0).map(e=>e.id),Ie=[`minnow`,`stoneLoach`,`mudskipper`,`brookStickleback`,`pebblePerch`],Le=[`minnowFilet`,`stoneLoachFilet`,`mudskipperFilet`,`brookSticklebackFilet`,`pebblePerchFilet`],Re={minnow:`minnowFilet`,stoneLoach:`stoneLoachFilet`,mudskipper:`mudskipperFilet`,brookStickleback:`brookSticklebackFilet`,pebblePerch:`pebblePerchFilet`},ze=[...Ie,`rabbit`,`squirrel`],Be=[...Ie,...Le,`rabbit`,`squirrel`];function Ve(e){return Be.includes(e)}function He(e){return ze.includes(e)}function Ue(e){return Fe.includes(e)}function E(e,t){let n=Math.max(0,Number.isFinite(t)?t:0);return Ve(e)?Math.round(n*10)/10:Math.floor(n)}function We(e,t){let n=E(e,t);return Ve(e)?Ke(n):`${n}`}function D(e){return Ge(e)?.label??e}function Ge(e){return w.find(t=>t.id===e)}function Ke(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}var qe=1;function Je(){return qe}function Ye(e){return qe=e===10||e===100?e:1,qe}function Xe(e){return e*qe}function Ze(e){return qe===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,(t??0)*qe]))}function Qe(e){return qe===1?e:Object.fromEntries(Object.entries(e).map(([e,t])=>[e,Math.max(0,Math.floor((t??0)*qe))]))}var $e=1e3,et=[{id:`foraging`,label:`Foraging`,description:`Gathering loose food and camp materials.`},{id:`mining`,label:`Mining`,description:`Breaking stone for ore and fuel.`},{id:`fishing`,label:`Fishing`,description:`Catching river fish.`},{id:`woodcutting`,label:`Woodcutting`,description:`Chopping trees into useful wood.`},{id:`hunting`,label:`Hunting`,description:`Tracking and taking small animals.`},{id:`crafting`,label:`Crafting`,description:`Making tools and useful camp goods.`},{id:`smithing`,label:`Smithing`,description:`Smelting ore and shaping early metalwork.`},{id:`textiles`,label:`Tailoring`,description:`Retting flax, spinning thread, weaving cloth, and sewing goods.`},{id:`butchering`,label:`Butchering`,description:`Breaking animals and fish into usable parts.`},{id:`cooking`,label:`Cooking`,description:`Preparing food over fire.`},{id:`leatherworking`,label:`Leatherworking`,description:`Turning hide into leather.`},{id:`construction`,label:`Construction`,description:`Building and improving camp structures.`},{id:`agility`,label:`Agility`,description:`Moving between camp and wilderness locations.`}],tt=et.map(e=>e.id),nt={gatherSticks:{skillId:`foraging`,xp:70},gatherStones:{skillId:`foraging`,xp:85},gatherFlaxPlants:{skillId:`foraging`,xp:110},gatherFlaxFibers:{skillId:`foraging`,xp:100},gatherMeadowIngredients:{skillId:`foraging`,xp:120},gatherWater:{skillId:`foraging`,xp:90},mineCoal:{skillId:`mining`,xp:360},mineCopper:{skillId:`mining`,xp:360},mineTin:{skillId:`mining`,xp:360},fishRiver:{skillId:`fishing`,xp:180},craftLowestTool:{skillId:`crafting`,xp:150},craftBasket:{skillId:`crafting`,xp:150},craftWoodenSpoon:{skillId:`crafting`,xp:100},craftFishingPole:{skillId:`crafting`,xp:150},craftWoodenBowl:{skillId:`crafting`,xp:120},craftStoneKnife:{skillId:`crafting`,xp:150},craftStoneDagger:{skillId:`crafting`,xp:160},craftStoneAxe:{skillId:`crafting`,xp:170},craftStonePickAxe:{skillId:`crafting`,xp:180},craftStoneSpear:{skillId:`crafting`,xp:180},craftWoodenSword:{skillId:`crafting`,xp:200},craftWoodenTwoHandedSword:{skillId:`crafting`,xp:230},craftWoodenClub:{skillId:`crafting`,xp:180},craftWoodenTwoHandedClub:{skillId:`crafting`,xp:210},craftShortBow:{skillId:`crafting`,xp:220},craftWoodenTotem:{skillId:`crafting`,xp:220},chopTrees:{skillId:`woodcutting`,xp:220},huntSmallAnimals:{skillId:`hunting`,xp:340},butcherFish:{skillId:`butchering`,xp:150},butcherRabbit:{skillId:`butchering`,xp:220},butcherSquirrel:{skillId:`butchering`,xp:170},cookRabbitMeat:{skillId:`cooking`,xp:160},cookSquirrelMeat:{skillId:`cooking`,xp:160},tanHide:{skillId:`leatherworking`,xp:430},craftLeatherBackpack:{skillId:`leatherworking`,xp:900},retFlax:{skillId:`textiles`,xp:420},separateFlaxFiber:{skillId:`textiles`,xp:260},handSpinLinenThread:{skillId:`textiles`,xp:190},spinLinenThread:{skillId:`textiles`,xp:420},weaveLinenCloth:{skillId:`textiles`,xp:520},craftCopperNeedle:{skillId:`smithing`,xp:120},craftBronzeNeedle:{skillId:`smithing`,xp:150},sewClothWrap:{skillId:`textiles`,xp:180},sewLinenBandage:{skillId:`textiles`,xp:150},sewSimplePouch:{skillId:`textiles`,xp:260},sewLinenHood:{skillId:`textiles`,xp:300},sewLinenShirt:{skillId:`textiles`,xp:420},smeltCopperBar:{skillId:`smithing`,xp:260},smeltBronzeBar:{skillId:`smithing`,xp:420},craftPot:{skillId:`smithing`,xp:220},craftLadle:{skillId:`smithing`,xp:180},craftCopperPickaxe:{skillId:`smithing`,xp:320},craftCopperHatchet:{skillId:`smithing`,xp:280},craftCopperKnife:{skillId:`smithing`,xp:220},craftBronzePickaxe:{skillId:`smithing`,xp:500},craftBronzeHatchet:{skillId:`smithing`,xp:440},craftBronzeKnife:{skillId:`smithing`,xp:340}},rt={campfire:80,tanningRack:320,hideTent:450,crudeStoneFurnace:520,primitiveSpinningWheel:360,primitiveLoom:480};function it(){return Object.fromEntries(tt.map(e=>[e,bt()]))}function at(e){let t=it();if(!e||typeof e!=`object`)return t;let n=e;for(let e of tt)t[e]=xt(n[e]);return t}function ot(e){return tt.some(t=>t===e)}function st(e){return et.find(t=>t.id===e)??et[0]}function O(e){let t=Et(e,1,$e);return 50*(t-1)*t*(2*t-1)/6}function ct(e){return wt(e.prestige)}function lt(e){let t=ct(e),n=e.level>=t,r=O(e.level),i=e.level>=1e3?r:O(e.level+1),a=Math.max(0,i-r),o=n?a:Math.max(0,Math.min(e.xp-r,a));return{cap:t,currentLevelXp:r,nextLevelXp:i,xpIntoLevel:o,xpForLevel:a,ratio:a<=0?1:o/a,atCap:n,canPrestige:ut(e)}}function ut(e){let t=ct(e);return t<1e3&&e.level>=t}function dt(e,t,n=Date.now()){Tt(e);let r=e.skills[t];return ut(r)?(r.prestige=Et(r.prestige+1,0,9),r.level=1,r.xp=0,e.updatedAt=n,e.lastSimulatedAt=n,!0):!1}function ft(e,t,n=Date.now()){let r=nt[t];gt(e,r.skillId,r.xp,n)}function pt(e,t,n=Date.now()){gt(e,`construction`,rt[t],n)}function mt(e,t,n=Date.now()){t<=0||gt(e,`agility`,Math.max(1,Math.round(t/1e3*2)),n)}function ht(e,t,n=Date.now()){gt(e,`cooking`,t,n)}function gt(e,t,n,r=Date.now()){let i=Math.max(0,Math.floor(Xe(n)));if(i<=0)return;Tt(e);let a=e.skills[t],o=ct(a);a.totalXp+=i,a.xp=Math.min(O(o),a.xp+i),a.level=Ct(a.xp,o),e.updatedAt=r,e.lastSimulatedAt=r}function _t(e){return nt[e].skillId}function vt(e){return Xe(nt[e].xp)}function yt(e){return Xe(rt[e])}function k(e){let t=Math.max(0,e);return t>=1e9?`${Ot(t/1e9)}B`:t>=1e6?`${Ot(t/1e6)}M`:t>=1e3?`${Ot(t/1e3)}K`:Math.round(t).toLocaleString(`en-US`)}function bt(){return{level:1,xp:0,totalXp:0,prestige:0,bonuses:[]}}function xt(e){if(!e||typeof e!=`object`)return bt();let t=Et(e.prestige,0,9),n=wt(t),r=Dt(e.xp,0,O(n)),i=Math.max(r,Math.max(0,Math.floor(Number(e.totalXp??0))));return{level:Ct(r,n),xp:r,totalXp:i,prestige:t,bonuses:St(e.bonuses)}}function St(e){return Array.isArray(e)?e.filter(e=>{if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.id==`string`&&typeof t.label==`string`}):[]}function Ct(e,t){let n=1;for(;n<t&&e>=O(n+1);)n+=1;return n}function wt(e){let t=Et(e,0,9);return Math.min($e,(t+1)*100)}function Tt(e){e.skills=at(e.skills)}function Et(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Dt(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Ot(e){return e.toFixed(2).replace(/\.?0+$/,``)}function kt(){return Object.fromEntries(T.map(e=>[e,0]))}function At(){return Object.fromEntries(T.map(e=>[e,0]))}function jt(){return Object.fromEntries(C.map(e=>[e.id,{owned:!1,durability:0,quantity:0}]))}function Mt(){return{campfire:0,tanningRack:0,hideTent:0,crudeStoneFurnace:0,primitiveSpinningWheel:0,primitiveLoom:0}}function Nt(e=Date.now()){return{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:e,updatedAt:e}}function Pt(){return{hp:34,maxHp:34,mana:10,maxMana:10}}function Ft(){return{hunger:100,maxHunger:100}}function It(){return{level:1,xp:0,totalXp:0}}function Lt(){return Object.fromEntries(te.map(e=>[e,It()]))}function Rt(){return{selectedLocationId:`ruins`,encounter:null,log:[]}}function zt(){return{queue:[],knownRecipeIds:[],completedRecipeCounts:{}}}function Bt(e=Date.now()){return{version:10,createdAt:e,updatedAt:e,lastSimulatedAt:e,selectedCharacterId:`cameron`,characters:[{id:`cameron`,name:`Cameron`,epithet:`Alone at the treeline`,condition:`resting`,locationId:`camp`,combat:Pt(),needs:Ft(),classProgress:Lt(),inventory:kt(),resourceCounts:At(),actionLoopId:`loop-forage-sticks`}],inventory:kt(),characterInventory:kt(),resourceCounts:At(),characterResourceCounts:At(),tools:jt(),buildings:{campfire:!1,tanningRack:!1,hideTent:!1,crudeStoneFurnace:!1,primitiveSpinningWheel:!1,primitiveLoom:!1},buildingCounts:Mt(),campfireExpiresAt:null,seenResources:[...Pe],skills:it(),cooking:zt(),combat:Rt(),actionLoops:[Nt(e)],currentActions:[],currentAction:null,log:[{id:`${e}-start`,time:e,text:`Cameron wakes beneath cold branches with empty hands.`,tone:`muted`,scope:`camp`}]}}var Vt=48,Ht=`camp`,Ut=[`action:`,`craft:`,`deposit:`],Wt=[`Cameron stops `,`Cameron lacks `,`Cameron crafted `,`Cameron butchered `,`Cameron returned `,`The saved trail grows quiet`];function A(e,t,n=`muted`,r=Date.now(),i=Ht){e.log.unshift({id:`${r}-${Math.random().toString(36).slice(2)}`,time:r,text:t,tone:n,scope:i}),e.log=e.log.slice(0,Vt)}function Gt(e,t){let n=t.now??Date.now(),r=t.scope??Ht,i=e.log.findIndex(e=>e.aggregateKey===t.aggregateKey&&Kt(e)===r),a=qt(t.resources);if(i>=0){let[o]=e.log.splice(i,1);o.time=n,o.text=t.text,o.tone=t.tone??o.tone,o.scope=r,Object.keys(a).length>0?(o.aggregateItems=Jt(Yt(o),a),delete o.aggregateTotal,delete o.aggregateUnit):(o.aggregateTotal=(o.aggregateTotal??0)+(t.amount??0),o.aggregateUnit=t.unit),e.log.unshift(o);return}e.log.unshift({id:`${n}-${Math.random().toString(36).slice(2)}`,time:n,text:t.text,tone:t.tone??`muted`,scope:r,aggregateKey:t.aggregateKey,...Object.keys(a).length>0?{aggregateItems:a}:{aggregateTotal:t.amount??0,aggregateUnit:t.unit}}),e.log=e.log.slice(0,Vt)}function Kt(e){return e.scope?e.scope:e.aggregateKey&&Ut.some(t=>e.aggregateKey?.startsWith(t))||Wt.some(t=>e.text.startsWith(t))||/\bbreaks(?:\.|;)/.test(e.text)?`character`:Ht}function qt(e){let t={};for(let[n,r]of Object.entries(e??{})){let e=n,i=E(e,r??0);i>0&&(t[e]=i)}return t}function Jt(e,t){let n={...e??{}};for(let[e,r]of Object.entries(t)){let t=e;n[t]=E(t,(n[t]??0)+(r??0))}return n}function Yt(e){if(e.aggregateItems)return e.aggregateItems;let t=Xt(e.aggregateUnit);if(!(!t||!e.aggregateTotal))return{[t]:e.aggregateTotal}}function Xt(e){switch(e?.toLowerCase()){case`sticks`:return`stick`;case`stones`:return`stone`;default:return}}var Zt=`rowan`;function Qt(e,t){return Math.max(0,Math.floor(e.buildingCounts?.[t]??+!!e.buildings[t]))}function $t(e,t){let n=Qt(e,t)+1;return e.buildingCounts[t]=n,n}function en(e,t,n){e.buildingCounts[t]=Math.max(0,Math.floor(n))}function tn(e){return e.characters.length}function nn(e){return Qt(e,`hideTent`)}function rn(e,t=Date.now()){return nn(e)<2||e.characters.some(e=>e.id===Zt)?!1:(e.characters.push({id:Zt,name:`Rowan`,epithet:`Drawn to the second shelter`,condition:`resting`,locationId:`camp`,combat:Pt(),needs:Ft(),classProgress:Lt(),inventory:kt(),resourceCounts:At()}),A(e,`Rowan joins the camp after the second hide tent goes up.`,`craft`,t),!0)}function an(e){for(let t of T)e.inventory[t]=E(t,e.inventory[t]??0),e.characterInventory[t]=E(t,e.characterInventory[t]??0),e.resourceCounts[t]=Dn(t,e.inventory[t],e.resourceCounts[t]??0),e.characterResourceCounts[t]=Dn(t,e.characterInventory[t],e.characterResourceCounts[t]??0);for(let t of e.characters)t.inventory=Tn(t.inventory),t.resourceCounts=En(t.inventory,t.resourceCounts);fn(e)}function j(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=(n??0))}function on(e,t){for(let[n,r]of Object.entries(t)){let t=n;e.inventory[t]=E(t,e.inventory[t]-(r??0))}}function sn(e,t,n={}){for(let[r,i]of Object.entries(t)){let t=r,a=i??0;a<=0||(e.inventory[t]=E(t,e.inventory[t]+a),On(e.resourceCounts,t,n[t]??0),e.seenResources.includes(t)||e.seenResources.push(t))}}function cn(e){let t=Ge(e)?.weight;if(typeof t==`number`)return t;switch(e){case`wood`:return 2;case`stick`:case`stone`:case`flaxPlant`:case`rettedFlax`:case`flaxFiber`:return 1;case`linenThread`:case`linenCloth`:case`copperNeedle`:case`bronzeNeedle`:return .1;default:return 1}}function ln(e){let t=T.reduce((t,n)=>t+(e[n]??0)*cn(n),0);return Math.round(t*10)/10}function un(e,t=e.selectedCharacterId){let n=Sn(e,t);return n.inventory||=Cn(),n.inventory}function dn(e,t=e.selectedCharacterId){let n=Sn(e,t);return n.resourceCounts||=wn(),n.resourceCounts}function fn(e){let t=un(e),n=dn(e);for(let r of T)e.characterInventory[r]=t[r]??0,e.characterResourceCounts[r]=n[r]??0}function pn(e,t=e.selectedCharacterId){return ln(un(e,t))}function mn(e,t=e.selectedCharacterId){let n=e.tools.basket,r=e.tools.leatherBackpack;return 10+(n?.owned&&n.durability>0?5:0)+(r?.owned&&r.durability>0?15:0)}function hn(e,t,n={},r=e.selectedCharacterId){let i={},a=un(e,r),o=dn(e,r),s=pn(e,r),c=mn(e,r);for(let r of T){let l=E(r,t[r]??0);if(l<=0)continue;let u=cn(r),d=c-s,f=u>0?E(r,Ve(r)?l*u<=d?l:0:Math.min(l,Math.floor(d/u))):l;f<=0||(i[r]=f,a[r]=E(r,a[r]+f),On(o,r,An(r,l,f,n[r])),s=Math.round((s+f*u)*10)/10,e.seenResources.includes(r)||e.seenResources.push(r))}return fn(e),i}function gn(e,t=e.selectedCharacterId){let n={},r=un(e,t),i=dn(e,t);for(let t of T){let a=r[t];a<=0||(n[t]=a,e.inventory[t]=E(t,e.inventory[t]+a),kn(i,e.resourceCounts,t),r[t]=0,e.seenResources.includes(t)||e.seenResources.push(t))}return fn(e),n}function _n(e,t,n=`camp`,r=e.selectedCharacterId){let i=xn(e,n,r);return He(t)?Math.max(0,Math.floor(i[t]??0)):Math.floor(bn(e,n,r)[t]??0)}function vn(e,t,n=`camp`,r=e.selectedCharacterId){return _n(e,t,n,r)>0}function yn(e,t,n=`camp`,r=e.selectedCharacterId){if(!He(t))return 0;let i=bn(e,n,r),a=xn(e,n,r),o=_n(e,t,n,r),s=E(t,i[t]??0);if(o<=0||s<=0)return i[t]=0,a[t]=0,fn(e),0;let c=E(t,o<=1?s:s/o);return a[t]=Math.max(0,o-1),i[t]=a[t]<=0?0:E(t,s-c),fn(e),c}function M(e){return Object.entries(e).map(([e,t])=>{let n=e;return`${We(n,t??0)}${Ve(n)?` lb`:``} ${D(n)}`}).join(`, `)}function bn(e,t,n){return t===`character`?un(e,n):e.inventory}function xn(e,t,n){return t===`character`?dn(e,n):e.resourceCounts}function Sn(e,t){return e.characters.find(e=>e.id===t)??e.characters[0]}function Cn(){return Object.fromEntries(T.map(e=>[e,0]))}function wn(){return Object.fromEntries(T.map(e=>[e,0]))}function Tn(e){let t=Cn();for(let n of T)t[n]=E(n,e?.[n]??0);return t}function En(e,t){let n=wn();for(let r of T)n[r]=Dn(r,e[r],t?.[r]??0);return n}function Dn(e,t,n){return!He(e)||t<=0?0:Math.max(1,Math.floor(Math.max(0,Number.isFinite(n)?n:0)))}function On(e,t,n){!He(t)||n<=0||(e[t]=Math.floor((e[t]??0)+n))}function kn(e,t,n){if(!He(n))return;let r=Math.max(0,Math.floor(e[n]??0));r<=0||(t[n]=Math.floor((t[n]??0)+r),e[n]=0)}function An(e,t,n,r=0){return!He(e)||n<=0||n<t?0:Math.max(0,Math.floor(r))}var jn=`idle-town:first-survival-slice:v1`,Mn=10,Nn=900*1e3,Pn={minnow:1,stoneLoach:2,mudskipper:3,brookStickleback:1.25,pebblePerch:4.75,rabbit:3.5,squirrel:1.25};function Fn(){let e=window.localStorage.getItem(jn);if(!e)return Bt();try{let t=JSON.parse(e),n=Bt(),r={...n.buildings,...t.buildings??{}},i=typeof t.selectedCharacterId==`string`?t.selectedCharacterId:n.selectedCharacterId,a=Ln(t.characters,n.characters,t.characterInventory,t.characterResourceCounts,i),o=Xn(t.currentActions,t.currentAction),s=Kn(t.actionLoops,t.currentAction,n.actionLoops),c={...n,...t,selectedCharacterId:i,inventory:{...kt(),...t.inventory??{}},characterInventory:{...kt(),...t.characterInventory??{}},resourceCounts:{...At(),...t.resourceCounts??{}},characterResourceCounts:{...At(),...t.characterResourceCounts??{}},tools:Sr(t.tools),buildings:r,buildingCounts:In(t.buildingCounts,r,n.buildingCounts),campfireExpiresAt:typeof t.campfireExpiresAt==`number`?t.campfireExpiresAt:n.campfireExpiresAt,characters:a,seenResources:t.seenResources?.length?t.seenResources:n.seenResources,skills:at(t.skills),cooking:pr(t.cooking,n.cooking),combat:Hn(t.combat,n.combat,a),actionLoops:s,currentActions:o,currentAction:o.find(e=>e.characterId===i)??o[0]??null,log:t.log?.length?t.log:n.log,version:Mn},l=typeof t.version==`number`?t.version:1;return dr(c,l),lr(c,l),ur(c,l),cr(c,l),rn(c),an(c),c}catch{return Bt()}}function In(e,t,n){let r={...Mt(),...n};if(e&&typeof e==`object`){let t=e;for(let e of Object.keys(r))r[e]=Math.max(0,Math.floor(Number(t[e]??r[e])))}for(let e of Object.keys(t))t[e]&&r[e]<=0&&(r[e]=1);return r}function Ln(e,t,n,r,i){return!Array.isArray(e)||!e.length?t:e.map((e,a)=>{let o=t[a]??t[0];if(!e||typeof e!=`object`)return o;let s=e,c=s.id===i&&!s.inventory&&n&&typeof n==`object`,l=br(c?n:s.inventory),u=xr(l,c?r:s.resourceCounts);return{...o,...s,locationId:tr(s.locationId)?s.locationId:o.locationId,combat:zn(s.combat,o.combat),needs:Rn(s.needs,o.needs),classProgress:Bn(s.classProgress),inventory:l,resourceCounts:u,actionLoopId:typeof s.actionLoopId==`string`?s.actionLoopId:o.actionLoopId}})}function Rn(e,t=Ft()){if(!e||typeof e!=`object`)return t;let n=e,r=N(n.maxHunger,1,999);return{maxHunger:r,hunger:N(n.hunger,0,r)}}function zn(e,t=Pt()){if(!e||typeof e!=`object`)return t;let n=e,r=N(n.maxHp,1,999),i=N(n.maxMana,0,999);return{maxHp:r,hp:N(n.hp,0,r),maxMana:i,mana:N(n.mana,0,i)}}function Bn(e){let t=Lt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of te)t[e]=Vn(n[e]);return t}function Vn(e){if(!e||typeof e!=`object`)return{level:1,xp:0,totalXp:0};let t=N(e.xp,0,2**53-1);return{level:N(e.level,1,1e3),xp:t,totalXp:Math.max(t,N(e.totalXp,0,2**53-1))}}function Hn(e,t=Rt(),n){if(!e||typeof e!=`object`)return t;let r=e;return{selectedLocationId:rr(r.selectedLocationId)?r.selectedLocationId:t.selectedLocationId,encounter:Un(r.encounter,n),log:Gn(r.log)}}function Un(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!rr(n.locationId)||typeof n.id!=`string`)return null;let r=Array.isArray(n.units)?n.units.map(e=>Wn(e,t)).filter(e=>!!e):[];return{id:n.id,locationId:n.locationId,startedAt:N(n.startedAt,0,2**53-1),updatedAt:N(n.updatedAt,0,2**53-1),wave:N(n.wave,1,999),defeatedEnemies:N(n.defeatedEnemies,0,2**53-1),units:r,message:typeof n.message==`string`?n.message:``}}function Wn(e,t){if(!e||typeof e!=`object`)return null;let n=e;if(!or(n.kind)||typeof n.id!=`string`||typeof n.name!=`string`||n.kind===`party`&&!t.some(e=>e.id===n.characterId)||n.kind===`enemy`&&!ir(n.enemyId))return null;let r=N(n.maxHp,1,999),i=N(n.maxMana,0,999);return{id:n.id,kind:n.kind,name:n.name,hp:N(n.hp,0,r),maxHp:r,mana:N(n.mana,0,i),maxMana:i,x:N(n.x,0,99),y:N(n.y,0,99),damage:N(n.damage,0,999),attackRange:N(n.attackRange,1,99),actEveryMs:N(n.actEveryMs,500,6e4),nextActAt:N(n.nextActAt,0,2**53-1),characterId:typeof n.characterId==`string`?n.characterId:void 0,enemyId:ir(n.enemyId)?n.enemyId:void 0,classId:ar(n.classId)?n.classId:void 0,weaponId:n.weaponId}}function Gn(e){return Array.isArray(e)?e.filter(e=>!!(e&&typeof e==`object`)).map((e,t)=>({id:typeof e.id==`string`?e.id:`combat-log-${t+1}`,time:N(e.time,0,2**53-1),text:typeof e.text==`string`?e.text:``,tone:sr(e.tone)?e.tone:`muted`})).filter(e=>e.text).slice(0,20):[]}function Kn(e,t,n){if(Array.isArray(e)){let t=e.map((e,t)=>qn(e,t)).filter(e=>!!e);if(t.length)return t}let r=Jn(t);return r?[r]:n}function qn(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=Array.isArray(n.actionIds)?n.actionIds.map(e=>$n(e)).filter(e=>!!e):[];return r.length?{id:typeof n.id==`string`&&n.id?n.id:`loop-${t+1}`,name:typeof n.name==`string`&&n.name?n.name:`Loop ${t+1}`,actionIds:r,locationIds:Yn(r,n.locationIds),createdAt:typeof n.createdAt==`number`?n.createdAt:Date.now(),updatedAt:typeof n.updatedAt==`number`?n.updatedAt:Date.now()}:null}function Jn(e){if(!e||typeof e!=`object`)return null;let t=e,n=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>$n(e)).filter(e=>!!e):$n(t.actionId)?[$n(t.actionId)]:[];if(!n.length)return null;let r=Date.now();return{id:`loop-saved-work`,name:`Saved Work Loop`,actionIds:n,locationIds:Yn(n,t.loopLocationIds),createdAt:r,updatedAt:r}}function Yn(e,t){let n=Array.isArray(t)?t:[];return e.map((e,t)=>{let r=n[t];return nr(r)?r:null})}function Xn(e,t){return(Array.isArray(e)?e:t?[t]:[]).map(e=>Zn(e)).filter(e=>!!e)}function Zn(e){if(!e||typeof e!=`object`)return null;let t=e,n=$n(t.actionId);if(!n||typeof t.characterId!=`string`||!er(t.phase)||typeof t.startedAt!=`number`||typeof t.endsAt!=`number`)return null;let r=Array.isArray(t.loopActionIds)?t.loopActionIds.map(e=>$n(e)).filter(e=>!!e):void 0,i=$n(t.followUpActionId);return{...t,actionId:n,characterId:t.characterId,phase:t.phase,loopActionIds:r,followUpActionId:i??void 0,startedAt:t.startedAt,endsAt:t.endsAt,repeat:!!t.repeat}}function Qn(e){return typeof e==`string`&&v.some(t=>t.id===e)}function $n(e){return e===`gatherMushrooms`||e===`gatherBerries`?`gatherMeadowIngredients`:Qn(e)?e:null}function er(e){return e===`travelingTo`||e===`working`||e===`followUp`||e===`travelingBack`}function tr(e){return e===`camp`||e===`meadow`||e===`river`||e===`forest`||e===`mine`}function nr(e){return e===`meadow`||e===`river`||e===`forest`||e===`mine`}function rr(e){return typeof e==`string`&&re.some(t=>t===e)}function ir(e){return typeof e==`string`&&ne.some(t=>t===e)}function ar(e){return typeof e==`string`&&te.some(t=>t===e)}function or(e){return e===`party`||e===`enemy`}function sr(e){return e===`muted`||e===`gain`||e===`warning`}function cr(e,t){let n=Date.now();if(!e.buildings.campfire){e.campfireExpiresAt=null;return}t<4&&!e.campfireExpiresAt&&(e.campfireExpiresAt=n+Nn),(typeof e.campfireExpiresAt!=`number`||e.campfireExpiresAt<=n)&&(e.buildings.campfire=!1,e.campfireExpiresAt=null)}function lr(e,t){if(!(t>=2)){e.inventory.rabbit*=Pn.rabbit??1,e.characterInventory.rabbit*=Pn.rabbit??1,e.inventory.squirrel*=Pn.squirrel??1,e.characterInventory.squirrel*=Pn.squirrel??1;for(let t of e.characters)t.inventory.rabbit*=Pn.rabbit??1,t.inventory.squirrel*=Pn.squirrel??1}}function ur(e,t){if(!(t>=Mn))for(let t of ze){e.resourceCounts[t]=yr(t,e.inventory[t]),e.characterResourceCounts[t]=yr(t,e.characterInventory[t]);for(let n of e.characters)n.resourceCounts[t]=yr(t,n.inventory[t])}}function dr(e,t){if(!(t>=10)){fr(e.inventory,`mushroom`,`hearthcap`),fr(e.characterInventory,`mushroom`,`hearthcap`),fr(e.inventory,`berry`,`blueberries`),fr(e.characterInventory,`berry`,`blueberries`);for(let t of e.characters)fr(t.inventory,`mushroom`,`hearthcap`),fr(t.inventory,`berry`,`blueberries`);e.seenResources=e.seenResources.map(e=>e===`mushroom`?`hearthcap`:e===`berry`?`blueberries`:e).filter((e,t,n)=>n.indexOf(e)===t)}}function fr(e,t,n){let r=Number(e[t]??0);r>0&&(e[n]=Number(e[n]??0)+r),delete e[t]}function pr(e,t=zt()){if(!e||typeof e!=`object`)return t;let n=e,r=Array.isArray(n.queue)?n.queue.map(e=>mr(e)).filter(e=>!!e):[],i=!1;return{queue:r.map(e=>{let t=e.startedAt!==null&&e.endsAt!==null;return!t||!i?(i||=t,e):{...e,startedAt:null,endsAt:null}}),knownRecipeIds:hr(n.knownRecipeIds),completedRecipeCounts:gr(n.completedRecipeCounts)}}function mr(e){if(!e||typeof e!=`object`)return null;let t=e;return typeof t.id!=`string`||!_r(t.recipeId)?null:{id:t.id,recipeId:t.recipeId,stationId:vr(t.stationId),queuedAt:N(t.queuedAt,0,2**53-1),startedAt:typeof t.startedAt==`number`?N(t.startedAt,0,2**53-1):null,endsAt:typeof t.endsAt==`number`?N(t.endsAt,0,2**53-1):null}}function hr(e){return Array.isArray(e)?e.filter(e=>_r(e)).filter((e,t,n)=>n.indexOf(e)===t):[]}function gr(e){if(!e||typeof e!=`object`)return{};let t={},n=e;for(let[e,r]of Object.entries(n))_r(e)&&(t[e]=N(r,0,2**53-1));return t}function _r(e){return typeof e==`string`&&le.includes(e)}function vr(e){return`campfire`}function yr(e,t){if(t<=0)return 0;let n=Pn[e]??1;return Math.max(1,Math.round(t/n))}function br(e){let t=kt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of Object.keys(t))t[e]=Number(n[e]??0);return t}function xr(e,t){let n=At();if(t&&typeof t==`object`){let e=t;for(let t of Object.keys(n))n[t]=Math.max(0,Math.floor(Number(e[t]??0)))}for(let t of ze)e[t]>0&&n[t]<=0&&(n[t]=yr(t,e[t]));return n}function Sr(e){let t=jt();if(!e||typeof e!=`object`)return t;let n=e;for(let e of C){let r=n[e.id];if(typeof r==`boolean`){t[e.id]={owned:r,durability:r?e.maxDurability:0,quantity:0};continue}if(!r||typeof r!=`object`)continue;let i=!!r.owned,a=Number(r.durability??0),o=Number(r.quantity??0);t[e.id]={owned:i,durability:i?Math.min(e.maxDurability,Math.max(0,Math.floor(a))):0,quantity:Math.max(0,Math.floor(o))}}return t}function N(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Cr(e){window.localStorage.setItem(jn,JSON.stringify(e))}function wr(){return window.localStorage.removeItem(jn),Bt()}var Tr=900*1e3;function Er(e,t=Date.now()){e.buildings.campfire=!0,e.campfireExpiresAt=t+Tr}function P(e,t=Date.now()){return!!(e.buildings.campfire&&Or(e)>t)}function Dr(e,t=Date.now()){let n=Or(e);return n>t?n-t:0}function Or(e){return e.buildings.campfire&&typeof e.campfireExpiresAt==`number`?e.campfireExpiresAt:0}function kr(e,t=Date.now()){let n=Or(e);return!n||n>t?!1:(e.buildings.campfire=!1,e.campfireExpiresAt=null,A(e,`The campfire burns down to charred wood.`,`muted`,n),e.updatedAt=n,e.lastSimulatedAt=n,!0)}var Ar=[`copperPickaxe`,`copperHatchet`,`copperKnife`];function jr(e){return!!e.buildings.crudeStoneFurnace}function Mr(e){return{furnaceBuilt:jr(e),coal:Math.max(0,Math.floor(e.inventory.coal??0))}}function Nr(e){return n.some(t=>t===e)}function Pr(e,t){if(!a(t))return!1;switch(t){case`smeltCopperBar`:return jr(e);case`craftPot`:case`craftLadle`:return Rr(e,`copperBar`);case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return Lr(e);case`smeltBronzeBar`:return jr(e)&&zr(e);case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return Rr(e,`bronzeBar`)}}function Fr(e,t){if(!a(t))return``;switch(t){case`smeltCopperBar`:return jr(e)?``:`Needs Stone Furnace`;case`craftPot`:case`craftLadle`:return Rr(e,`copperBar`)?``:`Smelt Copper Bar`;case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return Lr(e)?``:`Craft Pot and Ladle`;case`smeltBronzeBar`:return jr(e)?zr(e)?``:`Craft a Copper Tool`:`Needs Stone Furnace`;case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return Rr(e,`bronzeBar`)?``:`Smelt Bronze Bar`}}function Ir(e){let t=i(e);return t?t.label.replace(/^(Craft|Smelt) /,`1 `):``}function Lr(e){return Rr(e,`pot`)&&Rr(e,`ladle`)}function Rr(e,t){return e.seenResources.includes(t)||e.inventory[t]>0}function zr(e){let t=e.tools;return Ar.some(e=>{let n=t[e];return!!(n?.owned||(n?.quantity??0)>0)})}function Br(e,t){return!h(t)||!g(t)?!1:Vr(e,t)===``}function Vr(e,t){let n=h(t);if(!n||!g(t))return``;let r=n.requiredBuildings?.find(t=>!e.buildings[t]);if(r)return`Needs ${Gr(r)}`;let i=n.requiredSeenResources?.find(t=>!Ur(e,t));return i?n.unlockHint||`Needs ${D(i)}`:n.requiredAnyResources?.length&&!n.requiredAnyResources.some(t=>Ur(e,t))?`Needs ${n.requiredAnyResources.map(e=>D(e)).join(` or `)}`:``}function Hr(e){return Wr(e.output)}function Ur(e,t){return e.seenResources.includes(t)||(e.inventory[t]??0)>0}function Wr(e){return Object.entries(e).map(([e,t])=>`${t??0} ${D(e)}`).join(`, `)}function Gr(e){switch(e){case`campfire`:return`Campfire`;case`tanningRack`:return`Tanning Rack`;case`hideTent`:return`Hide Tent`;case`crudeStoneFurnace`:return`Stone Furnace`;case`primitiveSpinningWheel`:return`Primitive Spinning Wheel`;case`primitiveLoom`:return`Primitive Loom`}}function Kr(e){return C.find(t=>t.id===e)}function qr(e){return Kr(e)?.maxDurability??1}function Jr(e,t){let n=e.tools[t];return!!(n?.owned&&n.durability>0)}function Yr(e){return C.filter(t=>t.roles.includes(e)).sort((t,n)=>$r(n.id,e)-$r(t.id,e))}function Xr(e,t){return Yr(t).find(t=>Jr(e,t.id))?.id??null}function Zr(e,t){return!!Xr(e,t)}function Qr(e,t){let n=Xr(e,t);return n?$r(n,t):0}function $r(e,t){let n=Kr(e);return n?.roles.includes(t)?n.roleTiers?.[t]??n.weapon?.damage??1:0}function ei(e){return Kr(e)?.weapon?.damage??0}function ti(e,t){let n=Xr(e,t);return n?ei(n):0}function ni(e,t){let n=e.tools[t];return!n||n.quantity<=0?!1:(--n.quantity,n.owned=!0,n.durability=qr(t),!0)}function ri(e,t,n,r=Date.now(),i=`Cameron`){let a=e.tools[t];if(!(!a?.owned||a.durability<=0)&&(a.durability=Math.max(0,a.durability-n),a.durability===0)){let n=Kr(t)?.label??`Tool`;if(ni(e,t)){A(e,`${n} breaks; ${i} takes a fresh one from inventory.`,`warning`,r,`character`);return}a.owned=!1,A(e,`${n} breaks. No spare remains.`,`warning`,r,`character`)}}function ii(e,t,n,r=Date.now(),i=`Cameron`){let a=Xr(e,t);a&&ri(e,a,n,r,i)}var ai=ve.map(e=>e.craftActionId);function oi(e){return e.seenResources.includes(`rabbitMeat`)||e.seenResources.includes(`squirrelMeat`)}function si(e){return Ie.some(t=>e.seenResources.includes(t)||e.characters.some(e=>(e.inventory?.[t]??0)>0||(e.resourceCounts?.[t]??0)>0)||e.characterInventory[t]>0||e.inventory[t]>0||e.characterResourceCounts[t]>0||e.resourceCounts[t]>0)}function ci(e){return e.seenResources.some(e=>{let t=w.find(t=>t.id===e);return!!(t?.cooking?.ingredientCategory||t?.cooking?.tags.includes(`stew-base`)||t?.cooking?.tags.includes(`vessel`)||t?.cooking?.tags.includes(`utensil`))})}function F(e,t,n=Date.now()){if(Pr(e,t))return!0;if(h(t))return Br(e,t);if(Fr(e,t))return!1;if(t===`craftLowestTool`||ai.includes(t)||t===`craftWoodenBowl`)return!0;switch(t){case`gatherSticks`:case`gatherStones`:case`gatherFlaxPlants`:case`gatherFlaxFibers`:case`gatherMeadowIngredients`:case`gatherWater`:case`craftWoodenSpoon`:return!0;case`fishRiver`:return Zr(e,`fishing`);case`mineCoal`:case`mineCopper`:case`mineTin`:return Zr(e,`mining`);case`chopTrees`:return Zr(e,`woodcutting`);case`huntSmallAnimals`:return Zr(e,`hunting`);case`butcherFish`:return si(e);case`butcherRabbit`:return e.seenResources.includes(`rabbit`);case`butcherSquirrel`:return e.seenResources.includes(`squirrel`);case`cookRabbitMeat`:return P(e,n)&&e.seenResources.includes(`rabbitMeat`);case`cookSquirrelMeat`:return P(e,n)&&e.seenResources.includes(`squirrelMeat`);case`tanHide`:return e.buildings.tanningRack&&e.seenResources.includes(`hide`);case`craftLeatherBackpack`:return e.buildings.tanningRack&&e.seenResources.includes(`leather`)}return!1}function li(e,t){let n=Fr(e,t);if(n)return n;let r=Vr(e,t);if(r)return r;switch(t){case`fishRiver`:return`Needs Fishing Pole`;case`mineCoal`:case`mineCopper`:case`mineTin`:return`Needs Mining Tool`;case`chopTrees`:return`Needs Woodcutting Tool`;case`huntSmallAnimals`:return`Needs Hunting Weapon`;case`butcherFish`:return`Needs Carried Fish`;case`butcherRabbit`:return`Needs Rabbit`;case`butcherSquirrel`:return`Needs Squirrel`;case`cookRabbitMeat`:return P(e)?`Needs Rabbit Meat`:`Needs Lit Campfire`;case`cookSquirrelMeat`:return P(e)?`Needs Squirrel Meat`:`Needs Lit Campfire`;case`tanHide`:return e.buildings.tanningRack?`Needs Hide`:`Needs Tanning Rack`;case`craftLeatherBackpack`:return e.buildings.tanningRack?`Needs Leather`:`Needs Tanning Rack`;case`craftLowestTool`:return`Needs Craft Materials`;case`craftWoodenBowl`:return`Needs Wood`;default:return``}}function ui(e,t,n=Date.now()){return!0}function di(e,t,n=Date.now()){switch(t){case`campfire`:return P(e,n)||oi(e)||ci(e);case`tanningRack`:return e.buildings.tanningRack||e.seenResources.includes(`hide`);case`hideTent`:return e.buildings.hideTent||e.seenResources.includes(`hide`);case`crudeStoneFurnace`:return e.buildings.crudeStoneFurnace||e.seenResources.includes(`coal`)||e.seenResources.includes(`copper`);case`primitiveSpinningWheel`:return e.buildings.primitiveSpinningWheel||e.seenResources.includes(`linenThread`);case`primitiveLoom`:return e.buildings.primitiveLoom||e.seenResources.includes(`linenThread`)}}function fi(e,t){switch(t){case`campfire`:return`See Meat, Water, or Meadow Ingredients`;case`tanningRack`:case`hideTent`:return`See Hide`;case`crudeStoneFurnace`:return`See Coal or Copper`;case`primitiveSpinningWheel`:return`See Linen Thread`;case`primitiveLoom`:return`See Linen Thread`}}var pi={meadow:1e4,river:15e3,forest:3e4,mine:6e4};function I(e){return e.loopActionIds?.length?[...e.loopActionIds]:e.followUpActionId?[e.actionId,e.followUpActionId]:[e.actionId]}function L(e){return ji(e)||e===`huntSmallAnimals`||e===`chopTrees`}function mi(e,t){return L(e)?t??Mi(e):null}function hi(e,t=I(e)){return e.loopLocationIds?.length?t.map((t,n)=>mi(t,e.loopLocationIds?.[n]??void 0)):t.map((t,n)=>n===0&&L(t)?e.locationId??`meadow`:mi(t,void 0))}function gi(e,t){let n=I(e),r=n[R(t,n)];return hi(e,n)[R(t,n)]??(L(r)?`meadow`:void 0)}function _i(e,t){let n=I(e),r=n[R(t,n)];return vi(r,gi(e,t))}function vi(e,t){return L(e)?t??Mi(e):`camp`}function yi(e){return e.targetLocationId??e.locationId??`camp`}function bi(e,t){return e.characters.find(e=>e.id===t)?.locationId??`camp`}function xi(e,t,n){let r=e.characters.find(e=>e.id===t);r&&(r.locationId=n)}function Si(e,t){return e.phase===`travelingTo`||e.phase===`travelingBack`?e.originLocationId??t:yi(e)}function Ci(e){return e===`camp`?`camp`:`the ${e}`}function wi(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Ti(e,t){let n=I(e);return n[R(t,n)]??e.actionId}function Ei(e){let t=I(e);return R(e.nextLoopIndex??e.loopIndex??0,t)}function Di(e){return ki(e,e.loopIndex??0)}function Oi(e){return ki(e,e.loopIndex??0)}function ki(e,t){let n=I(e);if(n.length<=1)return R(t,n);let r=(R(t,n)+1)%n.length;for(;n[r]===`butcherFish`&&r!==t;)r=(r+1)%n.length;return r}function R(e,t){return t.length?Math.min(t.length-1,Math.max(0,Math.floor(e))):0}function Ai(e,t){return e===t?0:Pi(e)+Pi(t)}function ji(e){return e===`gatherSticks`||e===`gatherStones`||e===`gatherFlaxPlants`||e===`gatherFlaxFibers`||e===`gatherMeadowIngredients`||e===`gatherWater`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`||e===`fishRiver`}function Mi(e){return e===`gatherWater`||e===`fishRiver`?`river`:`meadow`}function Ni(e){return pi[e]}function Pi(e){return e===`camp`?0:Ni(e)}function z(e){return Array.isArray(e.currentActions)||(e.currentActions=e.currentAction?[e.currentAction]:[]),e.currentActions}function B(e,t=e.selectedCharacterId){return z(e).find(e=>e.characterId===t)??null}function Fi(e){let t=z(e);e.currentAction=t.find(t=>t.characterId===e.selectedCharacterId)??t[0]??null}function V(e,t){let n=z(e),r=n.findIndex(e=>e.characterId===t.characterId);r>=0?n[r]=t:n.push(t),e.currentActions=n,Li(e,!0,t.characterId),Fi(e)}function H(e,t){e.currentActions=z(e).filter(e=>e.characterId!==t),Li(e,!1,t),Fi(e)}function Ii(e){return[...z(e)].sort((e,t)=>e.endsAt===t.endsAt?e.characterId.localeCompare(t.characterId):e.endsAt-t.endsAt)[0]??null}function U(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function W(e,t){return e.characters.find(e=>e.id===t)?.name??`Someone`}function Li(e,t,n=e.selectedCharacterId){let r=e.characters.find(e=>e.id===n);r&&(r.condition=t?`working`:`resting`)}function Ri(e,t=Date.now()){Wi(e,t);let n=e.actionLoops.length+1,r={id:`loop-${t.toString(36)}-${Math.random().toString(36).slice(2,7)}`,name:`Loop ${n}`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:t,updatedAt:t};return e.actionLoops.push(r),U(e,t),r}function zi(e,t,n=Date.now()){if(Wi(e,n),e.actionLoops.length<=1)return e.actionLoops[0]?.id??null;let r=e.actionLoops.findIndex(e=>e.id===t);if(r<0)return e.actionLoops[0]?.id??null;e.actionLoops.splice(r,1);for(let n of e.characters)n.actionLoopId===t&&(n.actionLoopId=void 0);return U(e,n),e.actionLoops[Math.max(0,r-1)]?.id??e.actionLoops[0]?.id??null}function G(e,t){return Wi(e),e.actionLoops.find(e=>e.id===t)??e.actionLoops[0]??null}function Bi(e,t,n){let r=Ki(t,e);return n===`butcherFish`?e.actionIds[r]===`fishRiver`:!0}function Vi(e,t,n,r,i={},a=Date.now()){let o=G(e,t);if(!o||!Bi(o,n,r))return!1;let s=Ki(n,o)+1;return o.actionIds.splice(s,0,r),o.locationIds.splice(s,0,mi(r,i.locationId)),o.updatedAt=a,Gi(e,o),U(e,a),!0}function Hi(e,t,n,r=Date.now()){let i=G(e,t);if(!i||i.actionIds.length<=1)return 0;let a=Ki(n,i);return i.actionIds.splice(a,1),i.locationIds.splice(a,1),i.updatedAt=r,Gi(e,i),U(e,r),Math.max(0,a-1)}function Ui(e){return e.actionIds.map((t,n)=>mi(t,e.locationIds[n]??void 0))}function Wi(e,t=Date.now()){if(Array.isArray(e.actionLoops)&&e.actionLoops.length)return;let n=e.currentAction?.loopActionIds?.length?{actionIds:[...e.currentAction.loopActionIds],locationIds:[...e.currentAction.loopLocationIds??[]]}:{actionIds:[`gatherSticks`],locationIds:[`meadow`]};e.actionLoops=[{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:n.actionIds,locationIds:n.actionIds.map((e,t)=>mi(e,n.locationIds[t]??void 0)),createdAt:t,updatedAt:t}]}function Gi(e,t){for(let n of e.characters){if(n.actionLoopId!==t.id)continue;let r=B(e,n.id);if(!r)continue;let i=R(r.loopIndex??0,t.actionIds);V(e,{...r,loopActionIds:[...t.actionIds],loopLocationIds:Ui(t),loopIndex:i})}}function Ki(e,t){return t.actionIds.length?Math.min(t.actionIds.length-1,Math.max(0,Math.floor(e))):0}function qi(e,t,n){return Math.min(n,Math.max(t,e))}function K(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Ji(e,t,n=1){let r=10**n;return Math.round((Math.random()*(t-e)+e)*r)/r}function q(e){let t=Math.max(0,Math.ceil(e/1e3));if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function Yi(e){let t=Ce(e);if(!t?.entries.length)return{resources:{},message:`Cameron searches carefully, but finds nothing useful.`};let n=Math.random()<.28?2:1,r={},i=[];for(let e=0;e<n;e+=1){let e=Zi(t.entries);if(!e)continue;let n=K(e.minAmount,e.maxAmount);r[e.id]=(r[e.id]??0)+n,i.push(e)}let a=Object.entries(r).filter(([,e])=>(e??0)>0).map(([e,t])=>`${t} ${D(e)}`);return{resources:r,message:a.length?`Cameron gathers ${Qi(a)} from the ${t.locationId}.`:`Cameron searches carefully, but finds nothing useful.`}}function Xi(e){let t=Ce(e);return t?.entries.length?`${t.categories.map(e=>e[0].toUpperCase()+e.slice(1)).join(`, `)} from weighted ${t.label.toLowerCase()} table`:`No known gatherables.`}function Zi(e){let t=e.reduce((e,t)=>e+Math.max(0,t.weight),0);if(t<=0)return null;let n=Math.random()*t;for(let t of e)if(n-=Math.max(0,t.weight),n<=0)return t;return e[e.length-1]??null}function Qi(e){return e.length<=1?e[0]??`nothing`:`${e.slice(0,-1).join(`, `)} and ${e[e.length-1]}`}var $i=ve.map(e=>({actionId:e.craftActionId,toolId:e.id})),ea=[{id:`minnow`,minWeight:.5,maxWeight:1.5},{id:`stoneLoach`,minWeight:1,maxWeight:3},{id:`mudskipper`,minWeight:1.5,maxWeight:4.5},{id:`brookStickleback`,minWeight:.5,maxWeight:2},{id:`pebblePerch`,minWeight:2,maxWeight:7.5}],ta=[{id:`rabbit`,minWeight:2,maxWeight:5},{id:`squirrel`,minWeight:.5,maxWeight:2}];function na(e){return C.find(t=>t.id===e)?.recipe??{}}function ra(e,t){let n=e.tools[t];return(n?.quantity??0)+ +!!n?.owned}function ia(e,t){return pa(aa(e,t))}function aa(e,t){let n=i(t);if(n)return{resources:n.output??{},message:`Cameron finishes ${n.label.toLowerCase()}.`,tone:`craft`};let r=h(t);if(r)return{resources:r.output,message:`Cameron finishes ${r.label.toLowerCase()}.`,tone:`craft`};switch(t){case`gatherSticks`:{let e=K(1,3);return{resources:{stick:e},message:`Cameron gathers ${e} ${va(`Stick`,e)}.`,tone:`gain`}}case`gatherStones`:{let e=K(1,2);return{resources:{stone:e},message:`Cameron finds ${e} ${va(`Stone`,e)}.`,tone:`gain`}}case`gatherFlaxPlants`:{let e=K(2,4);return{resources:{flaxPlant:e},message:`Cameron cuts ${e} ${va(`Flax Plant`,e)} from the meadow.`,tone:`gain`}}case`gatherFlaxFibers`:{let e=K(1,3);return{resources:{flaxFiber:e},message:`Cameron pulls ${e} ${va(`Flax Fiber`,e)} from the brush.`,tone:`gain`}}case`gatherMeadowIngredients`:{let e=Yi(`meadow`);return{resources:e.resources,message:e.message,tone:`gain`}}case`gatherWater`:{let e=K(1,3);return{resources:{water:e},message:`Cameron fills ${e} ${e===1?`skin`:`skins`} of river water.`,tone:`gain`}}case`mineCoal`:return ha(e,`coal`);case`mineCopper`:return ha(e,`copper`);case`mineTin`:return ha(e,`tin`);case`fishRiver`:return ma();case`craftLowestTool`:case`craftLeatherBackpack`:break;case`craftWoodenSpoon`:return{resources:{woodenSpoon:1},message:`Cameron carves a wooden spoon.`,tone:`craft`};case`chopTrees`:{let t=Qr(e,`woodcutting`),n=t>=3?1:+(t>=2&&Math.random()<.5),r=K(2,4)+n,i=+(Math.random()<.35);return{resources:{wood:r,stick:i},message:`Cameron chops ${r} ${va(`Wood`,r)}${i?` and saves a usable stick`:``}.`,tone:`gain`}}case`huntSmallAnimals`:return ga(e);case`butcherFish`:return{resources:{},message:`Cameron butchers carried fish.`,tone:`gain`};case`butcherRabbit`:return _a(e,`rabbit`);case`butcherSquirrel`:return _a(e,`squirrel`);case`cookRabbitMeat`:return{resources:{cookedRabbitMeat:1},message:`Cameron cooks rabbit meat over the coals.`,tone:`craft`};case`cookSquirrelMeat`:return{resources:{cookedSquirrelMeat:1},message:`Cameron cooks squirrel meat over the coals.`,tone:`craft`};case`craftWoodenBowl`:return{resources:{woodenBowl:1},message:`Cameron carves a wooden bowl.`,tone:`craft`};case`tanHide`:return{resources:{leather:1},message:`Cameron works a hide into rough leather.`,tone:`craft`}}let a=oa(t);return a?{resources:{},message:`Cameron finishes ${ba(a).toLowerCase()}.`,tone:`craft`}:{resources:{},message:`Cameron finishes the work.`,tone:`craft`}}function oa(e){let t=i(e);if(t?.toolId)return t.toolId;let n=$i.find(t=>t.actionId===e);return n?n.toolId:e===`craftLeatherBackpack`?`leatherBackpack`:null}function sa(e,t,n,r,i){let a=C.find(e=>e.id===r);a&&(e.tools[r].quantity+=1,Jr(e,r)||ni(e,r),Gt(e,{aggregateKey:`craft:${t}:${r}`,text:`${n} crafted ${ya(a.label)}`,amount:1,unit:ya(a.label),tone:`craft`,now:i,scope:`character`}))}function ca(e,t,n,r){let i=fa(e,t);Object.values(i).some(e=>(e??0)>0)&&Gt(e,{aggregateKey:`action:${t}:butcherFish`,text:`${n} butchered fish`,resources:i,tone:`gain`,now:r,scope:`character`})}function la(e,t=e.selectedCharacterId){return Ie.some(n=>vn(e,n,`character`,t))}function ua(e,t,n,r){switch(t){case`fishRiver`:ii(e,`fishing`,1,n,r);break;case`mineCoal`:case`mineCopper`:case`mineTin`:ii(e,`mining`,1,n,r);break;case`chopTrees`:ii(e,`woodcutting`,1,n,r);break;case`huntSmallAnimals`:ii(e,`hunting`,1,n,r);break;case`butcherRabbit`:case`butcherSquirrel`:ii(e,`butchering`,1,n,r);break;default:break}}function da(e,t=`Cameron`){let n=i(e);if(n)return`${t} completed ${n.label.toLowerCase()}`;let r=h(e);if(r)return`${t} completed ${r.label.toLowerCase()}`;switch(e){case`gatherSticks`:return`${t} gathered sticks`;case`gatherStones`:return`${t} gathered stones`;case`gatherFlaxPlants`:return`${t} gathered flax plants`;case`gatherFlaxFibers`:return`${t} gathered flax fibers`;case`gatherMeadowIngredients`:return`${t} gathered meadow ingredients`;case`gatherWater`:return`${t} gathered water`;case`mineCoal`:return`${t} mined coal`;case`mineCopper`:return`${t} mined copper`;case`mineTin`:return`${t} mined tin`;case`fishRiver`:return`${t} caught river fish`;case`craftLowestTool`:return`${t} balanced tool stock`;case`craftWoodenSpoon`:return`${t} crafted wooden spoons`;case`craftWoodenBowl`:return`${t} carved wooden bowls`;case`craftLeatherBackpack`:return`${t} crafted leather backpacks`;case`chopTrees`:return`${t} chopped trees`;case`huntSmallAnimals`:return`${t} hunted small animals`;case`butcherFish`:return`${t} butchered fish`;case`butcherRabbit`:return`${t} butchered rabbits`;case`butcherSquirrel`:return`${t} butchered squirrels`;case`cookRabbitMeat`:return`${t} cooked rabbit meat`;case`cookSquirrelMeat`:return`${t} cooked squirrel meat`;case`tanHide`:return`${t} tanned hide`}let a=oa(e);return a?`${t} crafted ${ya(ba(a)).toLowerCase()}`:`${t} completed work`}function fa(e,t){let n={},r=un(e,t);for(let i of Ie){let a=Re[i];if(!a||!vn(e,i,`character`,t))continue;let o=E(a,yn(e,i,`character`,t)*.5*Je());return o<=0?n:(r[a]=E(a,r[a]+o),n[a]=E(a,(n[a]??0)+o),e.seenResources.includes(a)||e.seenResources.push(a),n)}return n}function pa(e){return{...e,resources:Ze(e.resources),resourceCounts:e.resourceCounts?Qe(e.resourceCounts):void 0}}function ma(){let e=ea[K(0,ea.length-1)],t=Ji(e.minWeight,e.maxWeight,1),n=D(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron catches a ${We(e.id,t)} lb ${n}.`,tone:`gain`}}function ha(e,t){let n=D(t),r=Qr(e,`mining`),i=1+ +(Math.random()<(r>=3?.35:r>=2?.18:0));return{resources:{[t]:i},message:`Cameron mines ${i} ${n}.`,tone:`gain`}}function ga(e){let t=ti(e,`hunting`),n=Math.min(.76,.52+t*.025),r=ta[Math.random()<n?0:1],i=Math.min(.8,Math.max(0,t-2.4)*.12),a=Ji(r.minWeight,r.maxWeight+i,1),o=D(r.id);return{resources:{[r.id]:a},resourceCounts:{[r.id]:1},message:`Cameron brings back a ${We(r.id,a)} lb ${o}.`,tone:`gain`}}function _a(e,t){if(yn(e,t)<=0)return{resources:{},message:`Cameron has no ${t} to butcher.`,tone:`gain`};let n=t===`rabbit`?`rabbitMeat`:`squirrelMeat`,r=t===`rabbit`?K(1,2):1,i=Qr(e,`butchering`),a=Zr(e,`butchering`),o=i>=3?.18:i>=2?.08:0,s=Math.min(.9,(t===`rabbit`?.65:.42)+o),c=Math.min(.75,(t===`rabbit`?.24:.14)+o),l=+(Math.random()<s),u=+(Math.random()<c),d={[n]:r,hide:a?l:0,bone:a?u:0},f=Object.entries({hide:l,bone:u}).filter(([,e])=>a&&e>0).map(([e,t])=>`${t} ${D(e)}`);return{resources:d,message:`Cameron butchers a ${t} for ${r} ${D(n)}${f.length?`, plus ${f.join(` and `)}`:``}.`,tone:`gain`}}function va(e,t){return t===1?e:`${e}s`}function ya(e){return e.endsWith(`Knife`)?`${e.slice(0,-5)}Knives`:e.endsWith(`s`)?e:`${e}s`}function ba(e){return C.find(t=>t.id===e)?.label??`Tool`}var xa=7200*1e3;function Sa(e,t=Date.now()){let n=$i.filter(({actionId:n})=>F(e,n,t)&&j(e,J(n)));return n.length?n.reduce((t,n)=>ra(e,n.toolId)<ra(e,t.toolId)?n:t,n[0]).actionId:null}function Ca(e,t,n=e.selectedCharacterId,r=Date.now()){let i=G(e,t),a=e.characters.find(e=>e.id===n);return!i||!a?!1:(a.actionLoopId=i.id,wa(e,i.id,n,r))}function wa(e,t,n=e.selectedCharacterId,r=Date.now()){let i=G(e,t);return i?.actionIds.length?Ra(e,{actionId:i.actionIds[0],characterId:n,phase:`working`,loopActionIds:[...i.actionIds],loopLocationIds:Ui(i),loopIndex:0,startedAt:r,endsAt:r,repeat:!0},0,r):!1}function J(e){let t=i(e);if(t)return t.cost;let n=h(e);if(n)return n.cost;let r=oa(e);if(r)return na(r);switch(e){case`craftWoodenBowl`:return{wood:1};case`cookRabbitMeat`:return{rabbitMeat:1};case`cookSquirrelMeat`:return{squirrelMeat:1};case`craftWoodenSpoon`:return{wood:1};case`tanHide`:return{hide:1};case`craftLowestTool`:return{};default:return{}}}function Y(e,t,n=Date.now(),r=e.selectedCharacterId){return Ta(e,r)?!1:t===`craftLowestTool`?F(e,t,n)&&!!Sa(e,n):t===`butcherFish`?F(e,t,n)&&la(e,r):t===`butcherRabbit`?F(e,t,n)&&vn(e,`rabbit`):t===`butcherSquirrel`?F(e,t,n)&&vn(e,`squirrel`):F(e,t,n)&&j(e,J(t))}function Ta(e,t){return!!e.combat?.encounter?.units.some(e=>e.kind===`party`&&e.characterId===t)}function Ea(e,t,n=Date.now(),r={}){let i=y(t),a=e.selectedCharacterId;if(!i||!Y(e,t,n,a))return!1;let o=vi(t,r.locationId),s=bi(e,a),c=Ai(s,o),l={actionId:t,characterId:a,phase:c>0?`travelingTo`:`working`,originLocationId:s,targetLocationId:o,locationId:o===`camp`?void 0:o,loopActionIds:[t],loopLocationIds:[o===`camp`?null:o],loopIndex:0,startedAt:n,endsAt:n+(c||i.durationMs),repeat:!0};return c<=0&&xi(e,a,o),V(e,l),U(e,n),!0}function Da(e,t=Date.now()){let n=B(e);if(!n)return;let r=y(n.actionId),i=Si(n,bi(e,n.characterId));if(xi(e,n.characterId,i),i!==`camp`){V(e,{...n,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i,startedAt:t,endsAt:t+Ai(i,`camp`),repeat:!1}),U(e,t),A(e,`${W(e,n.characterId)} stops ${r?.verb??`working`} at ${Ci(i)} and heads back to camp.`,`muted`,t,`character`);return}let a=i===`camp`?Oa(e,t,n.characterId):!1;H(e,n.characterId),U(e,t),A(e,a?`${W(e,n.characterId)} stops ${r?.verb??`working`} and returns to camp.`:`${W(e,n.characterId)} stops ${r?.verb??`working`} at ${Ci(i)}.`,`muted`,t,`character`)}function Oa(e,t=Date.now(),n=e.selectedCharacterId){if(bi(e,n)!==`camp`)return!1;let r=gn(e,n);return Object.keys(r).length<=0?!1:(Gt(e,{aggregateKey:`deposit:camp`,text:`${W(e,n)} returned resources to camp`,resources:r,tone:`gain`,now:t,scope:`character`}),U(e,t),!0)}function ka(e,t=Date.now()){let n=Math.min(t,e.lastSimulatedAt+xa);Fi(e);let r=0;for(;r<500;){let t=Va(e,n),i=Ii(e),a=i?.endsAt??1/0;if(t===null&&a>n)break;if(t!==null&&t<=a){kr(e,t);for(let n of[...z(e)])Ba(wi(n))&&(A(e,`${W(e,n.characterId)} stops cooking as the campfire goes out.`,`warning`,t,`character`),H(e,n.characterId));continue}if(i&&a<=n){let t=i,a=t.endsAt;ja(e,t,a,n),r+=1;continue}break}t>n&&r>0&&A(e,`The saved trail grows quiet after two hours away.`,`muted`,n,`character`),e.lastSimulatedAt=t,e.updatedAt=t;for(let t of e.characters)B(e,t.id)||Li(e,!1,t.id);Fi(e)}function Aa(e,t=Date.now(),n=e.selectedCharacterId){let r=B(e,n);if(!r)return 0;let i=r.endsAt-r.startedAt;return i<=0?1:(t-r.startedAt)/i}function ja(e,t,n,r){if(t.phase===`travelingTo`){mt(e,t.endsAt-t.startedAt,n),xi(e,t.characterId,yi(t)),Pa(e,t,n);return}if(t.phase===`travelingBack`){if(mt(e,t.endsAt-t.startedAt,n),xi(e,t.characterId,`camp`),Oa(e,n,t.characterId),t.repeat&&Ra(e,t,Ei(t),n))return;if(t.repeat&&Y(e,t.actionId,n,t.characterId)){Fa(e,t,n);return}H(e,t.characterId);return}if(t.phase===`followUp`){Ma(e,t,n,r);return}Na(e,t,n)}function Ma(e,t,n,r){let i=wi(t);if(i!==`butcherFish`){Ia(e,t,r,Oi(t));return}if(ca(e,t.characterId,W(e,t.characterId),n),ft(e,i,n),la(e,t.characterId)){La(e,t,t.loopIndex??0,n);return}Ia(e,t,r,Oi(t))}function Na(e,t,n){let r=Ua(e,t.actionId,n);if(!r){A(e,`${W(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),H(e,t.characterId);return}let i=J(r);if(!j(e,i)){A(e,`${W(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),H(e,t.characterId);return}if(on(e,i),r===`butcherFish`){if(ca(e,t.characterId,W(e,t.characterId),n),ft(e,r,n),t.repeat&&Y(e,r,n,t.characterId)){Pa(e,t,n);return}H(e,t.characterId);return}let a=oa(r);if(a){if(sa(e,t.characterId,W(e,t.characterId),a,n),ft(e,r,n),t.repeat&&Y(e,r,n,t.characterId)){Pa(e,t,n);return}H(e,t.characterId);return}let o=ia(e,r),s=L(r)?hn(e,o.resources,o.resourceCounts,t.characterId):o.resources;if(L(r)?za(e,t.characterId,r,s,n):(sn(e,o.resources,o.resourceCounts),Gt(e,{aggregateKey:`action:${t.characterId}:${r}`,text:da(r,W(e,t.characterId)),resources:o.resources,tone:o.tone,now:n,scope:`character`})),ua(e,r,n,W(e,t.characterId)),ft(e,r,n),L(r)&&Ha(o.resources,s,e,t.characterId)){let i=Di(t);if(r===`fishRiver`&&Ti(t,i)===`butcherFish`&&la(e,t.characterId)){La(e,t,i,n);return}Ia(e,t,n,Oi(t));return}if(!L(r)&&I(t).length>1){Ra(e,t,Oi(t),n);return}if(t.repeat&&Y(e,r,n,t.characterId)){Pa(e,t,n);return}H(e,t.characterId)}function Pa(e,t,n){let r=y(t.actionId);if(!r){H(e,t.characterId);return}let i=yi(t);xi(e,t.characterId,i),V(e,{...t,phase:`working`,originLocationId:i,targetLocationId:i,locationId:i===`camp`?void 0:i,startedAt:n,endsAt:n+r.durationMs})}function Fa(e,t,n){let r=_i(t,t.loopIndex??0),i=bi(e,t.characterId),a=Ai(i,r);if(a<=0){Pa(e,{...t,targetLocationId:r,locationId:r===`camp`?void 0:r},n);return}V(e,{...t,phase:`travelingTo`,originLocationId:i,targetLocationId:r,locationId:r===`camp`?void 0:r,startedAt:n,endsAt:n+a})}function Ia(e,t,n,r=Oi(t)){let i=yi(t);V(e,{...t,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i===`camp`?void 0:i,nextLoopIndex:r,startedAt:n,endsAt:n+Ai(i,`camp`)})}function La(e,t,n,r){let i=Ti(t,n),a=y(i);if(!a){Ia(e,t,r,Oi(t));return}V(e,{...t,actionId:i,phase:`followUp`,originLocationId:yi(t),targetLocationId:yi(t),loopIndex:n,startedAt:r,endsAt:r+a.durationMs})}function Ra(e,t,n,r){let i=I(t);if(!i.length)return!1;let a=R(n,i),o=i[a];if(o===`butcherFish`||!Y(e,o,r,t.characterId)){let n=ki(t,a);return n===a?!1:Ra(e,t,n,r)}let s=y(o);if(!s)return!1;let c=_i(t,a),l=bi(e,t.characterId),u=Ai(l,c);return V(e,{...t,actionId:o,phase:u>0?`travelingTo`:`working`,originLocationId:l,targetLocationId:c,locationId:c===`camp`?void 0:c,loopActionIds:i,loopLocationIds:hi(t,i),loopIndex:a,nextLoopIndex:void 0,followUpActionId:void 0,startedAt:r,endsAt:r+(u||s.durationMs)}),u<=0&&xi(e,t.characterId,c),!0}function za(e,t,n,r,i){Object.values(r).some(e=>(e??0)>0)&&Gt(e,{aggregateKey:`action:${t}:${n}`,text:da(n,W(e,t)),resources:r,tone:`gain`,now:i,scope:`character`})}function Ba(e){return e===`cookRabbitMeat`||e===`cookSquirrelMeat`}function Va(e,t){let n=Or(e);return n&&n<=t?n:null}function Ha(e,t,n,r){let i=Object.values(e).reduce((e,t)=>e+(t??0),0),a=Object.values(t).reduce((e,t)=>e+(t??0),0);return pn(n,r)>=mn(n,r)||i>0&&a<i}function Ua(e,t,n){return t===`craftLowestTool`?Sa(e,n):t}v.map(e=>e.id);var Wa=1.4,Ga=.8;function Ka(e){let t=C.filter(t=>t.weapon&&Jr(e,t.id));return t.sort((e,t)=>to(t.id)-to(e.id)),t[0]?.id??null}function qa(e){return e?x[e]??`fighter`:`fighter`}function Ja(e,t=e.selectedCharacterId){let n=Ka(e),r=n?Kr(n):null,i=qa(n),a=ie(i),o=r?.weapon;return{classId:i,classLabel:a.label,weaponId:n,weaponLabel:r?.label??`Unarmed`,damage:o?.damage??Wa,speed:o?.speed??Ga,range:o?.range??a.range,attackRange:eo(o?.range??a.range),maxHp:a.maxHp,maxMana:a.maxMana}}function Ya(e,t=e.selectedCharacterId){let n=e.characters.find(e=>e.id===t);if(!n)return Pt();let r=Ja(e,t),i=n.combat??Pt(),a=r.maxHp,o=r.maxMana,s=i.maxHp>0?i.hp/i.maxHp:1,c=i.maxMana>0?i.mana/i.maxMana:1;return n.combat={maxHp:a,hp:i.hp<=0?0:ro(Math.round(a*s),1,a),maxMana:o,mana:o<=0?0:ro(Math.round(o*c),0,o)},n.combat}function Xa(e){let t=Lt(),n=e.classProgress;if(n)for(let e of b)t[e.id]={...t[e.id],...n[e.id]??{}};return e.classProgress=t,t}function Za(e,t,n,r,i=Date.now()){let a=Math.max(0,Math.floor(r));if(a<=0)return;let o=e.characters.find(e=>e.id===t);if(!o)return;let s=Xa(o)[n];s.totalXp+=a,s.xp=Math.min(O($e),s.xp+a),s.level=no(s.xp),e.updatedAt=i,e.lastSimulatedAt=i}function Qa(e){let t=O(e.level),n=e.level>=1e3?t:O(e.level+1),r=Math.max(0,n-t),i=Math.max(0,Math.min(e.xp-t,r));return{currentLevelXp:t,nextLevelXp:n,xpIntoLevel:i,xpForLevel:r,ratio:r<=0?1:i/r,atCap:e.level>=$e}}function $a(e){return k(e)}function eo(e){return e===`ranged`?3:e===`focus`?2:1}function to(e){let t=Kr(e)?.weapon;if(!t)return 0;let n=t.range===`ranged`?.35:t.range===`focus`?.2:0;return t.damage*t.speed+n}function no(e){let t=1;for(;t<1e3&&e>=O(t+1);)t+=1;return t}function ro(e,t,n){return Number.isFinite(e)?Math.min(n,Math.max(t,e)):t}var io=1e3,ao=120,oo=24,so=5,co=22;function lo(e,t=e.selectedCharacterId,n=`ruins`,r=Date.now()){Fo(e);let i=e.characters.find(e=>e.id===t);if(!i||po(e,t)||Po(e,t))return!1;let a=oe(n),o=xo(e,n,r),s=Ja(e,t),c=Ya(e,t);c.hp<=0&&(c.hp=c.maxHp),c.mana<=0&&c.maxMana>0&&(c.mana=Math.ceil(c.maxMana*.5));let l=Eo(o);return o.units.push({id:`party-${i.id}`,kind:`party`,characterId:i.id,name:i.name,hp:c.hp,maxHp:c.maxHp,mana:c.mana,maxMana:c.maxMana,x:l.x,y:l.y,damage:No(e,i.id,s.damage),attackRange:s.attackRange,actEveryMs:Mo(s.speed),nextActAt:r+Mo(s.speed),classId:s.classId,weaponId:s.weaponId??void 0}),i.condition=`working`,e.combat.selectedLocationId=n,o.message=`${i.name} enters ${a.label}.`,Io(e,o.message,`muted`,r),yo(o,r),Lo(e,r),!0}function uo(e,t=e.selectedCharacterId,n=Date.now()){Fo(e);let r=e.combat.encounter;if(!r)return!1;let i=mo(e,t);if(!i)return!1;wo(e,i),r.units=r.units.filter(e=>e.id!==i.id);let a=e.characters.find(e=>e.id===t);return a&&!Po(e,t)&&(a.condition=`resting`),Io(e,`${i.name} withdraws from The Ruins.`,`warning`,n),ho(r).length?(r.updatedAt=n,r.message=`${i.name} withdraws.`):e.combat.encounter=null,Lo(e,n),!0}function fo(e,t=Date.now()){Fo(e);let n=e.combat.encounter;if(!n)return;let r=0;for(;n&&n.updatedAt+io<=t&&r<ao;){let t=n.updatedAt+io;_o(e,n,t),n=e.combat.encounter,n&&(n.updatedAt=t),r+=1}r>0&&Lo(e,Math.min(t,e.combat.encounter?.updatedAt??t))}function po(e,t){return!!mo(e,t)}function mo(e,t){return e.combat?.encounter?.units.find(e=>e.kind===`party`&&e.characterId===t)??null}function ho(e){return e?.units.filter(e=>e.kind===`party`&&e.hp>0)??[]}function go(e){return e?.units.filter(e=>e.kind===`enemy`&&e.hp>0)??[]}function _o(e,t,n){if(!ho(t).length){So(e,t,n);return}if(!go(t).length){yo(t,n);return}let r=t.units.filter(e=>e.hp>0&&e.nextActAt<=n).sort((e,t)=>e.nextActAt-t.nextActAt);for(let i of r){if(i.hp<=0||e.combat.encounter!==t)continue;let r=i.kind===`party`?go(t):ho(t);if(!r.length)continue;let a=ko(i,r);a&&(Ao(i,a)<=i.attackRange?vo(e,t,i,a,n):(To(t,i,a),t.message=`${i.name} moves closer.`),i.nextActAt=n+jo(i))}if(t.units=t.units.filter(e=>e.kind===`party`||e.hp>0),Co(e,t),!ho(t).length){So(e,t,n);return}go(t).length||(t.wave+=1,yo(t,n))}function vo(e,t,n,r,i){let a=Math.max(1,Math.round(n.damage));if(r.hp=Math.max(0,r.hp-a),t.message=`${n.name} hits ${r.name} for ${a}.`,n.kind===`party`&&n.characterId&&n.classId&&Za(e,n.characterId,n.classId,r.hp<=0?so+co:so,i),r.kind===`enemy`&&r.hp<=0){t.defeatedEnemies+=1,Io(e,`${n.name} defeats ${r.name}.`,`gain`,i);return}r.kind===`party`&&r.hp<=0&&(wo(e,r),Io(e,`${r.name} is forced back from the fight.`,`warning`,i))}function yo(e,t){if(go(e).length||!ho(e).length)return;let n=Math.min(3,1+Math.floor((e.wave-1)/2));for(let r=0;r<n;r+=1)e.units.push(bo(e,r,t));e.message=`Goblin wave ${e.wave} enters The Ruins.`,e.updatedAt=t}function bo(e,t,n){let r=oe(e.locationId),i=ae(`goblin`),a=Do(e,t);return{id:`goblin-${e.wave}-${t+1}-${n}`,kind:`enemy`,enemyId:i.id,name:i.label,hp:i.maxHp,maxHp:i.maxHp,mana:i.maxMana,maxMana:i.maxMana,x:Math.min(r.gridWidth-1,a.x),y:Math.min(r.gridHeight-1,a.y),damage:i.damage,attackRange:i.attackRange,actEveryMs:i.actEveryMs,nextActAt:n+i.actEveryMs}}function xo(e,t,n){return e.combat.encounter?.locationId===t||(e.combat.encounter={id:`combat-${t}-${n}`,locationId:t,startedAt:n,updatedAt:n,wave:1,defeatedEnemies:0,units:[],message:`The Ruins are quiet.`}),e.combat.encounter}function So(e,t,n){Co(e,t);for(let n of t.units.filter(e=>e.kind===`party`)){let t=n.characterId?e.characters.find(e=>e.id===n.characterId):null;t&&!Po(e,t.id)&&(t.condition=`resting`)}Io(e,`The party withdraws from The Ruins to recover.`,`warning`,n),e.combat.encounter=null,Lo(e,n)}function Co(e,t){for(let n of t.units)n.kind===`party`&&wo(e,n)}function wo(e,t){if(!t.characterId)return;let n=e.characters.find(e=>e.id===t.characterId);n&&(n.combat={hp:t.hp,maxHp:t.maxHp,mana:t.mana,maxMana:t.maxMana})}function To(e,t,n){let r=oe(e.locationId),i=new Set(e.units.filter(e=>e.hp>0&&e.id!==t.id).map(e=>`${e.x},${e.y}`)),a=Math.sign(n.x-t.x),o=Math.sign(n.y-t.y),s=[{x:t.x+a,y:t.y},{x:t.x,y:t.y+o},{x:t.x,y:t.y-o},{x:t.x-a,y:t.y}].filter(e=>e.x>=0&&e.y>=0&&e.x<r.gridWidth&&e.y<r.gridHeight&&!i.has(`${e.x},${e.y}`)).sort((e,t)=>Ao(e,n)-Ao(t,n))[0];s&&(t.x=s.x,t.y=s.y)}function Eo(e){let t=oe(e.locationId);return Oo(e,[Math.floor(t.gridHeight/2),1,t.gridHeight-2,0,t.gridHeight-1].map(e=>({x:0,y:e})))??{x:0,y:0}}function Do(e,t){let n=oe(e.locationId),r=[Math.floor(n.gridHeight/2),1,n.gridHeight-2,0,n.gridHeight-1].flatMap(e=>[{x:n.gridWidth-1,y:e},{x:n.gridWidth-2,y:e}]);return Oo(e,r.slice(t).concat(r.slice(0,t)))??{x:n.gridWidth-1,y:Math.floor(n.gridHeight/2)}}function Oo(e,t){let n=new Set(e.units.filter(e=>e.hp>0).map(e=>`${e.x},${e.y}`));return t.find(e=>!n.has(`${e.x},${e.y}`))??null}function ko(e,t){return t.slice().sort((t,n)=>Ao(e,t)-Ao(e,n))[0]??null}function Ao(e,t){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)}function jo(e){return Math.max(500,e.actEveryMs)}function Mo(e){return Math.max(900,Math.round(2400/Math.max(.4,e)))}function No(e,t,n){let r=e.characters.find(e=>e.id===t);if(!r)return n;let i=Ja(e,t).classId,a=r.classProgress?.[i]?.level??1;return n+Math.max(0,a-1)*.08}function Po(e,t){return e.currentActions.some(e=>e.characterId===t)}function Fo(e){e.combat??=Rt()}function Io(e,t,n,r){e.combat.log=[{id:`${r}-${e.combat.log.length}-${t.slice(0,12)}`,time:r,text:t,tone:n},...e.combat.log].slice(0,oo)}function Lo(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function Ro(e,t,n=Date.now()){let r=fe(t);return!r||!Wo(e,r,n)?!1:(on(e,pe(r)),e.cooking.queue.push({id:`${n}-${r.id}-${e.cooking.queue.length+1}`,recipeId:r.id,stationId:r.station,queuedAt:n,startedAt:null,endsAt:null}),es(e,r.id),Yo(e,n),ns(e,n),!0)}function zo(e,t=Date.now()){Yo(e,t);let n=0;for(;n<100;){let r=Bo(e);if(!r)break;let i=Or(e);if(!i||i<=t){Zo(e,t);break}if(!r.endsAt||r.endsAt>t)break;Xo(e,r,r.endsAt),n+=1,Yo(e,r.endsAt)}}function Bo(e){return e.cooking.queue.find(e=>e.startedAt!==null&&e.endsAt!==null)??null}function Vo(e,t=Date.now()){if(e.startedAt===null||e.endsAt===null)return 0;let n=e.endsAt-e.startedAt;return n<=0?1:Math.max(0,Math.min(1,(t-e.startedAt)/n))}function Ho(e){return[...ce].sort((e,t)=>e.levelRequirement-t.levelRequirement||e.name.localeCompare(t.name))}function Uo(e){let t=ce.filter(t=>ts(e,t)).map(e=>e.id);for(let n of t)es(e,n);return t}function Wo(e,t,n=Date.now()){let r=typeof t==`string`?fe(t):t;return!!(r&&!Go(e,r,n))}function Go(e,t,n=Date.now()){let r=typeof t==`string`?fe(t):t;if(!r)return`Unknown recipe`;if(e.skills.cooking.level<r.levelRequirement)return`Needs Cooking Lv ${r.levelRequirement}`;if(!P(e,n))return`Needs Lit Campfire`;if(e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`)return`Needs cook at camp`;let i=Qo(e,r);return i.length?`Needs ${i.join(`, `)}`:``}function Ko(e){let t=Ze(me(e));return Object.entries(t).map(([e,t])=>`${t} ${D(e)}`).join(`, `)}function qo(e){return e.ingredients.map(e=>{if(!e.resourceId)return e.category??`Ingredient`;let t=D(e.resourceId);return e.consumed===!1?`${e.amount} ${t} available`:`${e.amount} ${t}`}).join(`, `)}function Jo(e,t,n=Date.now()){let r=de(t);return r?r.id===`campfire`?P(e,n)?`Campfire lit`:`Needs lit campfire`:`Station unavailable`:`Unknown station`}function Yo(e,t){if(Uo(e),Bo(e)||!P(e,t))return;let n=e.cooking.queue.find(e=>e.startedAt===null&&e.endsAt===null);if(!n)return;let r=fe(n.recipeId);if(!r){e.cooking.queue=e.cooking.queue.filter(e=>e.id!==n.id);return}n.startedAt=t,n.endsAt=t+r.cookTimeMs,ns(e,t)}function Xo(e,t,n){let r=fe(t.recipeId);if(e.cooking.queue=e.cooking.queue.filter(e=>e.id!==t.id),!r){ns(e,n);return}let i=Ze(me(r));sn(e,i),ht(e,r.xpReward,n),e.cooking.completedRecipeCounts[r.id]=(e.cooking.completedRecipeCounts[r.id]??0)+1,es(e,r.id),Gt(e,{aggregateKey:`cook:${r.id}`,text:`Cameron cooked ${r.name.toLowerCase()}`,resources:i,tone:`craft`,now:n,scope:`camp`}),ns(e,n)}function Zo(e,t){let n=Bo(e);n&&(n.startedAt=null,n.endsAt=null,A(e,`Cooking waits for a lit campfire.`,`warning`,t,`camp`),ns(e,t))}function Qo(e,t){let n=pe(t),r=[];if(!j(e,n)){let t=$o(e,n);t&&r.push(t)}for(let n of t.ingredients)!n.resourceId||n.consumed!==!1||(e.inventory[n.resourceId]??0)<n.amount&&r.push(`${n.amount} ${D(n.resourceId)}`);return r}function $o(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-(e.inventory[t]??0));a>0&&(n[t]=a)}return Object.keys(n).length?M(n):``}function es(e,t){e.cooking.knownRecipeIds.includes(t)||e.cooking.knownRecipeIds.push(t)}function ts(e,t){return e.cooking.knownRecipeIds.includes(t.id)?!0:e.skills.cooking.level<t.levelRequirement?!1:t.ingredients.some(t=>!!(t.resourceId&&e.seenResources.includes(t.resourceId)))}function ns(e,t){e.updatedAt=t}var rs=``+new URL(`bone-icon-DsPaT320.png`,import.meta.url).href,is=``+new URL(`brook-stickleback-icon-CwY54faB.png`,import.meta.url).href,as=``+new URL(`basket-empty-slot-BQ3m_a4i.png`,import.meta.url).href,os=``+new URL(`basket-equipped-slot-DPu5tuXe.png`,import.meta.url).href,ss=``+new URL(`camp-location-icon--vnRMwCB.png`,import.meta.url).href,cs=``+new URL(`campfire-2x2-Bq-ELFVu.png`,import.meta.url).href,ls=``+new URL(`campfire-unlit-2x2-HI8ea9KO.png`,import.meta.url).href,us=``+new URL(`coal-icon-CPItI7lv.png`,import.meta.url).href,ds=``+new URL(`copper-icon-Dl9RQPBM.png`,import.meta.url).href,fs=``+new URL(`craft-materials-bundle-button-D-JGRyoh.png`,import.meta.url).href,ps=``+new URL(`fish-filet-icon-BHEr_iIj.png`,import.meta.url).href,ms=``+new URL(`fishing-pole-empty-slot-CBM-0Us1.png`,import.meta.url).href,hs=``+new URL(`fishing-pole-equipped-slot-BoLpLWOS.png`,import.meta.url).href,X=``+new URL(`flax-fiber-icon-xz-yYl-m.png`,import.meta.url).href,gs=``+new URL(`forest-location-icon-VKGIFi31.png`,import.meta.url).href,_s=``+new URL(`berry-icon-DEz1wEqt.png`,import.meta.url).href,vs=``+new URL(`hide-icon-BWeGfM2U.png`,import.meta.url).href,ys=``+new URL(`leather-backpack-equipped-slot-DhoXwslM.png`,import.meta.url).href,bs=``+new URL(`meadow-location-icon-v2-CqdYJu9g.png`,import.meta.url).href,xs=``+new URL(`mine-location-icon-BbZJUyhx.png`,import.meta.url).href,Ss=``+new URL(`minnow-icon-ANpglcnc.png`,import.meta.url).href,Cs=``+new URL(`mudskipper-icon-_bxkPxea.png`,import.meta.url).href,ws=``+new URL(`mushroom-icon-B9zVCy80.png`,import.meta.url).href,Ts=``+new URL(`pebble-perch-icon-CHh-9clF.png`,import.meta.url).href,Es=``+new URL(`rabbit-icon-DGNcKYc7.png`,import.meta.url).href,Ds=``+new URL(`river-location-icon-v2-BqOU5iqQ.png`,import.meta.url).href,Os=``+new URL(`squirrel-icon-BM6RAXNK.png`,import.meta.url).href,ks=``+new URL(`stick-icon-Q8m3FMqw.png`,import.meta.url).href,As=``+new URL(`stone-axe-empty-slot-C8iH4xki.png`,import.meta.url).href,js=``+new URL(`stone-axe-equipped-slot-BwqHFyCM.png`,import.meta.url).href,Ms=``+new URL(`stone-dagger-equipped-slot-Cknv2-DR.png`,import.meta.url).href,Ns=``+new URL(`stone-knife-equipped-slot-I-QJxd8H.png`,import.meta.url).href,Ps=``+new URL(`stone-knife-empty-slot-Bc5j7Rbw.png`,import.meta.url).href,Fs=``+new URL(`stone-pick-axe-empty-slot-DOLVpXRk.png`,import.meta.url).href,Is=``+new URL(`stone-pick-axe-equipped-slot-Cn17-ZkZ.png`,import.meta.url).href,Ls=``+new URL(`stone-spear-empty-slot-BTpRxmYT.png`,import.meta.url).href,Rs=``+new URL(`stone-spear-equipped-slot-q16KfMg3.png`,import.meta.url).href,zs=``+new URL(`stone-icon-yRG7nuNE.png`,import.meta.url).href,Bs=``+new URL(`stone-loach-icon-4ySXaf0_.png`,import.meta.url).href,Vs=``+new URL(`stone-furnace-2x2-54_TDZso.png`,import.meta.url).href,Hs=``+new URL(`short-bow-equipped-slot-DMr9jfoE.png`,import.meta.url).href,Us=``+new URL(`tin-icon-B9xoPCj0.png`,import.meta.url).href,Ws=``+new URL(`hide-tent-2x2-B-STXQiW.png`,import.meta.url).href,Gs=``+new URL(`tanning-rack-2x2-DotflpMM.png`,import.meta.url).href,Ks=``+new URL(`wooden-bowl-icon-VjwEBLVz.png`,import.meta.url).href,qs=``+new URL(`wooden-club-equipped-slot-DSLqykiW.png`,import.meta.url).href,Js=``+new URL(`wooden-spoon-icon-5_VWx7J4.png`,import.meta.url).href,Ys=``+new URL(`wooden-sword-equipped-slot-C30U8Oso.png`,import.meta.url).href,Xs=``+new URL(`wooden-totem-equipped-slot-8HxVbwEk.png`,import.meta.url).href,Zs=``+new URL(`wooden-two-handed-club-equipped-slot-Dc9EacsE.png`,import.meta.url).href,Qs=``+new URL(`wooden-two-handed-sword-equipped-slot-1NNJusWg.png`,import.meta.url).href,$s=``+new URL(`wood-icon-CxwJtOlQ.png`,import.meta.url).href;function ec(e,t,n=Date.now()){kr(e,n);let r=ye.find(e=>e.id===t),i=t===`campfire`?P(e,n):t===`hideTent`?!1:e.buildings[t];if(!r||i||e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`||!di(e,t,n)||!j(e,r.recipe))return!1;if(on(e,r.recipe),t===`campfire`)Er(e,n),en(e,t,1),A(e,`Cameron builds a campfire and brings it to flame.`,`craft`,n);else if(t===`hideTent`){let r=$t(e,t);e.buildings[t]=!0,A(e,`Cameron raises hide tent ${r}.`,`craft`,n),rn(e,n)}else e.buildings[t]=!0,en(e,t,1),A(e,`Cameron builds a ${r.label}.`,`craft`,n);return pt(e,t,n),nc(e,n),!0}function tc(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-e.inventory[t]);a>0&&(n[t]=a)}return M(n)}function nc(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function rc(e){let t=Ge(e)?.nutrition;return{hunger:Math.max(0,Math.floor(t?.hunger??0))}}function ic(e,t){return!ac(e,t)}function ac(e,t){if(rc(t).hunger<=0)return`Not edible`;if(!j(e,{[t]:1}))return`Needs ${D(t)}`;if(cc(t)&&!j(e,{woodenSpoon:1}))return`Needs Wooden Spoon`;let n=e.characters.find(t=>t.id===e.selectedCharacterId);return n?n.needs.hunger>=n.needs.maxHunger?`Hunger full`:``:`No character`}function oc(e,t,n=Date.now()){if(!ic(e,t))return!1;let r=e.characters.find(t=>t.id===e.selectedCharacterId);if(!r)return!1;let i=rc(t);return on(e,{[t]:1}),r.needs.hunger=Math.min(r.needs.maxHunger,r.needs.hunger+i.hunger),A(e,`${r.name} eats ${D(t).toLowerCase()} and restores ${i.hunger} hunger.`,`gain`,n,`camp`),e.updatedAt=n,!0}function sc(e){return Ue(e)}function cc(e){return Ge(e)?.cooking?.tags.includes(`stew`)??!1}var lc=[{id:`foraging`,label:`Forage`,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,`gatherFlaxFibers`,`gatherMeadowIngredients`,`gatherWater`]},{id:`fishing`,label:`Fishing`,actionIds:[`fishRiver`]},{id:`mining`,label:`Mining`,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]},{id:`hunting`,label:`Hunting`,actionIds:[`huntSmallAnimals`]},{id:`woodcutting`,label:`Woodcutting`,actionIds:[`chopTrees`]},{id:`crafting`,label:`Crafting`,actionIds:[`craftLowestTool`,`craftBasket`,`craftWoodenSpoon`,`craftFishingPole`,`craftWoodenBowl`,`craftStoneKnife`,`craftStoneDagger`,`craftStoneAxe`,`craftStonePickAxe`,`craftStoneSpear`,`craftWoodenClub`,`craftWoodenTwoHandedClub`,`craftWoodenSword`,`craftWoodenTwoHandedSword`,`craftShortBow`,`craftWoodenTotem`]},{id:`smithing`,label:`Smithing`,actionIds:[...e]},{id:`textiles`,label:`Tailoring`,actionIds:[...c]},{id:`butchering`,label:`Butchering`,actionIds:[`butcherFish`,`butcherRabbit`,`butcherSquirrel`]},{id:`cooking`,label:`Cooking`,actionIds:[]},{id:`leatherworking`,label:`Leatherworking`,actionIds:[`tanHide`,`craftLeatherBackpack`]}],uc=[{id:`gather`,label:`Gather`,filterIds:[`foraging`,`mining`,`fishing`,`hunting`,`woodcutting`]},{id:`processing`,label:`Processing`,filterIds:[`crafting`,`smithing`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{id:`camp`,label:`Camp`,filterIds:[]}],dc={crafting:`crafting`,smithing:`smithing`,textiles:`textiles`,foraging:`foraging`,mining:`mining`,fishing:`fishing`,woodcutting:`woodcutting`,hunting:`hunting`,butchering:`butchering`,cooking:`cooking`,leatherworking:`leatherworking`},fc=[{label:`Gather`,skillIds:[`foraging`,`mining`,`fishing`,`woodcutting`,`hunting`]},{label:`Process`,skillIds:[`crafting`,`smithing`,`textiles`,`butchering`,`cooking`,`leatherworking`]},{label:`Combat`,skillIds:[]},{label:`Other`,skillIds:[`construction`,`agility`]}],pc={copper:`Copper Bar`,bronze:`Bronze Bar`},mc=[{id:`tool`,label:`Tool`},{id:`weapon`,label:`Weapon`},{id:`armor`,label:`Armor`}],hc={primitive:`Primitive`},gc={primitive:`Wood, stone, fiber`},_c=[{id:`tool`,label:`Tool`},{id:`weapon`,label:`Weapon`}],vc={craftLowestTool:{material:`primitive`,productCategory:`tool`},craftBasket:{material:`primitive`,productCategory:`tool`},craftWoodenSpoon:{material:`primitive`,productCategory:`tool`},craftFishingPole:{material:`primitive`,productCategory:`tool`},craftWoodenBowl:{material:`primitive`,productCategory:`tool`},craftStoneKnife:{material:`primitive`,productCategory:`tool`},craftStoneAxe:{material:`primitive`,productCategory:`tool`},craftStonePickAxe:{material:`primitive`,productCategory:`tool`},craftStoneDagger:{material:`primitive`,productCategory:`weapon`},craftStoneSpear:{material:`primitive`,productCategory:`weapon`},craftWoodenClub:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedClub:{material:`primitive`,productCategory:`weapon`},craftWoodenSword:{material:`primitive`,productCategory:`weapon`},craftWoodenTwoHandedSword:{material:`primitive`,productCategory:`weapon`},craftShortBow:{material:`primitive`,productCategory:`weapon`},craftWoodenTotem:{material:`primitive`,productCategory:`weapon`}},yc=[{id:`meadow`,label:`Meadow`,iconUrl:bs,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxPlants`,`gatherMeadowIngredients`]},{id:`river`,label:`River`,iconUrl:Ds,actionIds:[`gatherStones`,`gatherFlaxFibers`,`gatherWater`]},{id:`forest`,label:`Forest`,iconUrl:gs,actionIds:[`chopTrees`]},{id:`mine`,label:`Mine`,iconUrl:xs,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]}],bc={label:`Camp`,iconUrl:ss},xc=24,Sc=[`fishingPole`,`stoneKnife`,`copperKnife`,`bronzeKnife`,`stoneDagger`,`stoneSpear`,`woodenClub`,`woodenTwoHandedClub`,`woodenSword`,`woodenTwoHandedSword`,`shortBow`,`woodenTotem`,`stoneAxe`,`copperHatchet`,`bronzeHatchet`,`stonePickAxe`,`copperPickaxe`,`bronzePickaxe`,`basket`,`leatherBackpack`,null,null,null,null],Cc=[{label:`Armor`,slots:[`Head`,`Face`,`Neck`,`Shoulders`,`Chest`,`Backpack`,`Cape`,`Arms`,`Hands`,`Waist`,`Legs`,`Feet`]},{label:`Accessories`,slots:[`Ring Slot 1`,`Ring Slot 2`,`Toe Ring 1`,`Toe Ring 2`,`Bracelet 1`,`Bracelet 2`,`Earring 1`,`Earring 2`]},{label:`Held Gear`,slots:[`Main Hand`,`Off Hand`,`Quiver`,`Ammo Belt`]}],wc={basket:os,fishingPole:hs,leatherBackpack:ys,stoneKnife:Ns,stoneDagger:Ms,stoneAxe:js,stonePickAxe:Is,stoneSpear:Rs,woodenClub:qs,woodenTwoHandedClub:Zs,woodenSword:Ys,woodenTwoHandedSword:Qs,shortBow:Hs,woodenTotem:Xs},Tc={basket:as,fishingPole:ms,stoneKnife:Ps,stoneDagger:Ms,stoneAxe:As,stonePickAxe:Fs,stoneSpear:Ls,woodenClub:qs,woodenTwoHandedClub:Zs,woodenSword:Ys,woodenTwoHandedSword:Qs,shortBow:Hs,woodenTotem:Xs},Ec={basket:`Basket`,fishingPole:`Pole`,leatherBackpack:`Backpack`,stoneKnife:`Skinning Knife`,stoneDagger:`Dagger`,stoneAxe:`Axe`,stonePickAxe:`Pick`,stoneSpear:`Spear`,woodenClub:`Club`,woodenTwoHandedClub:`2H Club`,woodenSword:`Sword`,woodenTwoHandedSword:`2H Sword`,shortBow:`Bow`,woodenTotem:`Totem`},Dc={blueberries:_s,bone:rs,brookStickleback:is,brookSticklebackFilet:ps,coal:us,copper:ds,minnowFilet:ps,mudskipperFilet:ps,pebblePerchFilet:ps,stoneLoachFilet:ps,flaxFiber:X,chamomile:X,clover:X,dandelionGreens:X,dirtyBowl:$s,elderflowers:X,fennel:X,hearthcap:ws,hide:vs,lavender:X,meadowStew:ws,minnow:Ss,mint:X,mudskipper:Cs,pebblePerch:Ts,rabbit:Es,rabbitStew:Es,roseHips:_s,rootStew:ws,sorrel:X,squirrelHerbStew:Os,squirrel:Os,strawberries:_s,stick:ks,stone:zs,stoneLoach:Bs,tin:Us,water:Ds,wildCarrot:X,wildGarlic:X,wildGarlicRabbitStew:Es,wildOnion:X,yarrow:X,woodenBowl:Ks,woodenSpoon:Js,wood:$s},Oc={basket:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+5 lb carry capacity`},{label:`Capacity`,value:`15 lb equipped`}],leatherBackpack:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+15 lb carry capacity`},{label:`Capacity`,value:`25 lb equipped`}],fishingPole:[{label:`Slot`,value:`Fishing tool`},{label:`Effect`,value:`Fishing River unlocked`},{label:`Use`,value:`River fishing`}],stoneKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Unlocks`,value:`Hide and bone recovery`},{label:`Use`,value:`Butchering small animals`}],stoneAxe:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Chop Trees unlocked`},{label:`Wood yield`,value:`2-4`}],stonePickAxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Future mining work`},{label:`Use`,value:`Breaking stone`}],stoneSpear:[{label:`Slot`,value:`Two-handed weapon`},{label:`Effect`,value:`Hunt Small Animals unlocked`},{label:`Targets`,value:`Rabbit, Squirrel`}],copperPickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Mining upgrade`},{label:`Durability`,value:`2x stone`}],copperHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Woodcutting upgrade`},{label:`Durability`,value:`Better than stone`}],copperKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Cleaner butchering`},{label:`Durability`,value:`Better than stone`}],bronzePickaxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Best early mining`},{label:`Durability`,value:`Better than copper`}],bronzeHatchet:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Best early chopping`},{label:`Durability`,value:`Better than copper`}],bronzeKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Effect`,value:`Best early butchering`},{label:`Durability`,value:`Better than copper`}]};function kc(e){let t=C.find(t=>t.id===e),n=Oc[e]??[];return t?.weapon?[{label:`Slot`,value:`${t.weapon.hands}H ${Ac(t.weapon.range)} weapon`},{label:`Power`,value:Mc(t.weapon.damage)},{label:`Speed`,value:`${Mc(t.weapon.speed)}x`},{label:`Tier`,value:jc(t.tier)},...n.filter(e=>e.label!==`Slot`)]:n}function Ac(e){switch(e){case`ranged`:return`ranged`;case`focus`:return`focus`;case`melee`:return`melee`}}function jc(e){return e[0].toUpperCase()+e.slice(1)}function Mc(e){return Number.isInteger(e)?`${e}`:e.toFixed(1)}function Nc(e,t){let n=`gather`,r=`foraging`,i=`meadow`,a=`inventory`,o=`primitive`,s=`copper`,c=!1,l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,h=null,g=null,_=0,v=null,y=null;return e.addEventListener(`click`,e=>{let y=e.target.closest(`[data-command]`);if(!y||y.disabled||y.dataset.disabled===`true`)return;let b=y.dataset.command,x=y.dataset.id,S=v;if(S){if(b===`set-test-reward-multiplier`&&(x===`10`||x===`100`)){t.setTestRewardMultiplier(Number(x)),t.requestRender();return}if(b===`set-action-category`&&cu(x)){l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,n=x;let e=su(n);e.length&&!e.some(e=>e.id===r)&&(r=e[0]?.id??r),t.requestRender();return}if(b===`set-action-filter`&&du(x)){l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,r=x,t.requestRender();return}if(b===`select-smithing-material`&&lu(x)){s=x,t.requestRender();return}if(b===`select-crafting-material`&&uu(x)){o=x,t.requestRender();return}if(b===`set-location`&&hu(x)){l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,i=x,t.requestRender();return}if(b===`set-character-detail-tab`&&gu(x)){a=x,c=!1,l=!1,u=!1,d=!0,f=!1,p=!1,m=!1,t.requestRender();return}if(b===`toggle-camp-log`){c=!c,l=!1,u=!1,d=!1,f=!1,p=!1,m=!1,t.requestRender();return}if(b===`open-party`){c=!1,l=!0,u=!1,d=!1,f=!1,p=!1,m=!1,t.requestRender();return}if(b===`open-character-panel`){c=!1,l=!1,u=!0,d=!1,f=!1,p=!1,m=!1,t.requestRender();return}if(b===`open-character-details`){c=!1,l=!1,u=!1,d=!0,f=!1,p=!1,m=!1,t.requestRender();return}if(b===`open-settings`){c=!1,l=!1,u=!1,d=!1,f=!1,m=!1,p=!0,t.requestRender();return}if(b===`open-action-loops`){c=!1,l=!1,u=!1,d=!1,f=!1,p=!1,m=!0,t.requestRender();return}if(b===`open-combat`){c=!1,l=!1,u=!1,d=!1,f=!0,p=!1,m=!1,t.requestRender();return}if(b===`dispatch-combat`){lo(S,y.dataset.characterId??S.selectedCharacterId,`ruins`,t.getNow()),l=!0,f=!1,c=!1,u=!1,d=!1,p=!1,m=!1,t.persist(),t.requestRender();return}if(b===`recall-combat`){uo(S,y.dataset.characterId??S.selectedCharacterId,t.getNow()),l=!0,f=!1,c=!1,u=!1,d=!1,p=!1,m=!1,t.persist(),t.requestRender();return}if(b===`select-character`&&x&&S.characters.some(e=>e.id===x)){S.selectedCharacterId=x,g=mu(S)??g,l=!1,u=!0,d=!1,t.persist(),t.requestRender();return}if(b===`select-loop-step`){g=pu(y,S,g),_=fu(x,_),h=null,t.requestRender();return}if(b===`insert-loop-after`){let e=pu(y,S,g);if(!e)return;g=e,_=fu(x,_),h={loopId:e,afterIndex:_},m=!1,t.requestRender();return}if(b===`remove-loop-step`){let e=pu(y,S,g);if(!e)return;g=e,_=Hi(S,e,fu(x,_),t.getNow()),h=null,t.persist(),t.requestRender();return}if(b===`create-loop`){g=Ri(S,t.getNow()).id,_=0,h=null,t.persist(),t.requestRender();return}if(b===`delete-loop`){let e=pu(y,S,g);if(!e)return;g=zi(S,e,t.getNow()),_=0,h=null,t.persist(),t.requestRender();return}if(b===`assign-loop`){let e=pu(y,S,g),n=y.dataset.characterId??S.selectedCharacterId;if(!e)return;g=e,Ca(S,e,n,t.getNow()),t.persist(),t.requestRender();return}if(b===`start-action`&&x){let e=x,n=t.getNow();if(h){Vi(S,h.loopId,h.afterIndex,e,{locationId:Tu(e,i)},n)&&(g=h.loopId,_=h.afterIndex+1,h=null,m=!0),t.persist(),t.requestRender();return}h=null,Ea(S,e,n,{locationId:Tu(e,i)})}if(b===`stop-action`&&(h=null,Da(S,t.getNow())),b===`deposit-carried`&&(B(S)||Oa(S,t.getNow())),b===`build-structure`&&x&&ec(S,x,t.getNow()),b===`queue-cooking`&&x&&Ro(S,x,t.getNow()),b===`eat-food`&&x&&oc(S,x,t.getNow()),b===`prestige-skill`&&ot(x)){dt(S,x,t.getNow()),t.persist(),t.requestRender();return}if(b===`reset`){t.reset();return}t.persist(),t.requestRender()}}),e.addEventListener(`pointerover`,t=>{let n=wd(t.target,e);n&&(y=n,Td(e,n))}),e.addEventListener(`pointerout`,t=>{if(!y)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!y.contains(n))&&(y=null,Ed(e))}),e.addEventListener(`focusin`,t=>{let n=wd(t.target,e);n&&(y=n,Td(e,n))}),e.addEventListener(`focusout`,t=>{if(!y)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!y.contains(n))&&(y=null,Ed(e))}),e.addEventListener(`scroll`,()=>{y?.isConnected&&Dd(e,y)},!0),window.addEventListener(`resize`,()=>{y?.isConnected&&Dd(e,y)}),(b,x=t.getNow())=>{v=b;let S=G(b,g??mu(b));g=S?.id??null,_=S?Math.min(S.actionIds.length-1,Math.max(0,_)):0,h&&!G(b,h.loopId)&&(h=null);let ee=kd(e);e.innerHTML=Pc(b,r,n,a,i,o,s,c,l,u,d,f,p,m,h,g,_,x,t.getTestRewardMultiplier()),y=null,Ad(e,ee)}}function Pc(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v){return`
    <div class="game-shell" data-editor-id="game-shell" data-editor-label="Game shell" data-editor-files="src/ui/render.ts, src/style.css">
      ${Fc(e,n,s,c,l,u,d,f,p,v)}
      <main class="main-panel" data-editor-id="main-panel" data-editor-label="Main game panel" data-editor-files="src/ui/render.ts, src/style.css">
        ${Jl(e,_)}
        ${u?Zu(e,r):p?od(e,h,g,m):f?Ic():l?Lc(e):d?Yc(e,_):c?Rc(e):s?Vc(e):nl(e,n,t,i,a,o,m,_)}
      </main>
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `}function Fc(e,t,n,r,i,a,o,s,c,l){let u=Z(e),d=iu(e,u),f=!n&&!r&&!i&&!a&&!o&&!s&&!c;return`
    <aside class="character-sidebar panel" data-editor-id="character-sidebar" data-editor-label="Character sidebar" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${Bc(l)}
        </div>
      </div>
      <button
        class="character-card selected ${a?`active`:``}"
        type="button"
        data-command="open-character-details"
        aria-expanded="${a}"
      >
        <span class="portrait" aria-hidden="true">${sl(u.name)}</span>
        <span>
          <strong>${u.name}</strong>
          <small>${d}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${uc.map(e=>Jc(e,t,f)).join(``)}
              ${Uc(i)}
              ${Gc(r)}
              ${Wc(o)}
            </div>
          </nav>
          <div class="sidebar-footer">
            ${Hc(c)}
            ${ed(n)}
            <button class="ghost-button ${s?`active`:``}" type="button" data-command="open-settings" aria-pressed="${s}">Settings</button>
          </div>
    </aside>
  `}function Ic(){return`
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
  `}function Lc(e){return`
    <div class="work-area single-panel">
      <section class="panel character-panel" aria-label="Characters" data-editor-id="character-panel" data-editor-label="Character roster panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Characters</span>
        </div>
        <div class="character-roster-grid">
          ${e.characters.map(t=>zc(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function Rc(e){let t=e.characters.filter(t=>po(e,t.id)).length,n=e.characters.filter(t=>B(e,t.id)).length,r=e.characters.filter(t=>!po(e,t.id)&&!B(e,t.id)).length;return`
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
          ${e.characters.map(t=>Kc(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function zc(e,t){let n=e.selectedCharacterId===t.id,r=!!(B(e,t.id)||mo(e,t.id)),i=Ja(e,t.id);return`
    <button
      class="character-select-card ${n?`selected`:``} ${r?`working`:``}"
      type="button"
      data-command="select-character"
      data-id="${t.id}"
      aria-pressed="${n}"
    >
      <span class="portrait" aria-hidden="true">${sl(t.name)}</span>
      <span class="character-select-copy">
        <strong>${t.name}</strong>
        <small>${t.epithet}</small>
        <small>${i.classLabel} - ${i.weaponLabel}</small>
        <em>${iu(e,t)}</em>
      </span>
      <span class="character-select-badge">${n?`Selected`:`Select`}</span>
    </button>
  `}function Bc(e){return`
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
  `}function Vc(e){return`
    <div class="work-area single-panel">
      ${jd(e,`camp`,`Camp Log`,`main-log-panel panel`)}
    </div>
  `}function Hc(e){return`
    <button
      class="action-loops-toggle ${e?`active`:``}"
      type="button"
      data-command="open-action-loops"
      aria-pressed="${e}"
    >
      Action Loops
    </button>
  `}function Uc(e){return`
    <button
      class="category-button characters-button ${e?`active`:``}"
      type="button"
      data-command="open-character-panel"
      aria-pressed="${e}"
    >
      <span>Characters</span>
    </button>
  `}function Wc(e){return`
    <button
      class="category-button combat-button ${e?`active`:``}"
      type="button"
      data-command="open-combat"
      aria-pressed="${e}"
    >
      <span>Ruins</span>
    </button>
  `}function Gc(e){return`
    <button
      class="category-button party-button ${e?`active`:``}"
      type="button"
      data-command="open-party"
      aria-pressed="${e}"
    >
      <span>Party</span>
    </button>
  `}function Kc(e,t){let n=mo(e,t.id),r=!!n,i=B(e,t.id),a=Ja(e,t.id),o=n??t.combat,s=n?.maxHp??a.maxHp,c=n?.maxMana??a.maxMana,l=Math.min(s,o.hp),u=Math.min(c,o.mana),d=r?`In Ruins`:i?`Working`:`Ready`,f=r?`recall-combat`:`dispatch-combat`,p=!r&&!!i;return`
    <article class="party-member ${r?`dispatched`:``}">
      <div class="party-member-topline">
        <span class="portrait small" aria-hidden="true">${sl(t.name)}</span>
        <span>
          <strong>${t.name}</strong>
          <small>${a.classLabel} - ${d}</small>
        </span>
      </div>
      ${qc(`HP`,l,s,`hp`)}
      ${qc(`Mana`,u,c,`mana`)}
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
  `}function qc(e,t,n,r){let i=Math.max(1,n),a=Math.max(0,Math.min(i,t));return`
    <div class="vitals-row ${r}">
      <span>${e}</span>
      <div class="vitals-track" aria-hidden="true">
        <span style="transform: scaleX(${(a/i).toFixed(4)})"></span>
      </div>
      <strong>${Math.round(a)}/${Math.round(i)}</strong>
    </div>
  `}function Jc(e,t,n){let r=n&&e.id===t;return`
    <button
      class="category-button ${r?`active`:``}"
      type="button"
      data-command="set-action-category"
      data-id="${e.id}"
      aria-pressed="${r}"
    >
      <span>${e.label}</span>
    </button>
  `}function Yc(e,t){let n=oe(`ruins`),r=e.combat.encounter,i=go(r).length,a=e.characters.filter(t=>po(e,t.id)).length;return`
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
        ${Xc(e,t)}
      </section>
      <aside class="panel combat-side-panel" aria-label="Combat status" data-editor-id="combat-side-panel" data-editor-label="Combat side panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Status</span>
        </div>
        ${Qc(e,t)}
        ${tl(e)}
      </aside>
    </div>
  `}function Xc(e,t){let n=oe(`ruins`),r=e.combat.encounter,i=[];for(let e=0;e<n.gridHeight;e+=1)for(let a=0;a<n.gridWidth;a+=1){let n=r?.units.find(t=>t.x===a&&t.y===e&&t.hp>0)??null;i.push(Zc(n,a,e,t))}return`
    <div class="combat-field" style="--combat-cols: ${n.gridWidth}; --combat-rows: ${n.gridHeight};" aria-label="Combat grid">
      ${i.join(``)}
    </div>
    <div class="combat-field-message">${r?.message??`Open Party to dispatch someone.`}</div>
  `}function Zc(e,t,n,r){if(!e)return`<div class="combat-cell" data-grid-x="${t}" data-grid-y="${n}"></div>`;let i=e.kind===`enemy`&&e.enemyId?ae(e.enemyId).glyph:sl(e.name),a=Math.max(0,e.nextActAt-r);return`
    <div class="combat-cell occupied ${e.kind}" data-grid-x="${t}" data-grid-y="${n}" title="${e.name}">
      <span class="combat-unit-glyph">${i}</span>
      <span class="combat-unit-name">${e.name}</span>
      <span class="combat-unit-timer">${q(a)}</span>
      ${qc(`HP`,e.hp,e.maxHp,`hp`)}
    </div>
  `}function Qc(e,t){let n=e.combat.encounter;return n?`
    <div class="combat-roster-list">
      ${n.units.map(e=>$c(e,t)).join(``)}
    </div>
  `:`<div class="empty-line">No one is fighting.</div>`}function $c(e,t){let n=e.classId?el(e.classId):`Enemy`,r=e.hp>0?`Acts in ${q(e.nextActAt-t)}`:`Down`;return`
    <article class="combat-roster-unit ${e.kind}">
      <div>
        <strong>${e.name}</strong>
        <small>${n} - ${r}</small>
      </div>
      ${qc(`HP`,e.hp,e.maxHp,`hp`)}
      ${e.maxMana>0?qc(`Mana`,e.mana,e.maxMana,`mana`):``}
    </article>
  `}function el(e){return b.find(t=>t.id===e)?.label??`Fighter`}function tl(e){let t=e.combat.log.slice(0,8);return`
    <section class="combat-event-log" aria-label="Combat log">
      <h3>Combat Log</h3>
      <div class="combat-log-list">
        ${t.length?t.map(e=>`<div class="combat-log-entry ${e.tone}">${e.text}</div>`).join(``):`<div class="empty-line">No combat events yet.</div>`}
      </div>
    </section>
  `}function nl(e,t,n,r,i,a,o,s){return t===`camp`?`
      <div class="work-area camp-work-area">
        ${rl(e)}
        ${zu(e,s)}
      </div>
    `:`
      <div class="work-area">
      ${ll(e,t,n)}
      ${cl(e,n,r,i,a,o,s)}
    </div>
  `}function rl(e){let t=Z(e);return`
    <section class="panel camp-stats-panel" aria-label="Camp stats" data-editor-id="camp-stats-panel" data-editor-label="Camp stats panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Stats</span>
      </div>
      <div class="camp-stat-list">
        <div class="camp-stat-row">
          <span>Population</span>
          <strong>${tn(e)}/${nn(e)}</strong>
        </div>
        <div class="camp-stat-row">
          <span>${t.name} Hunger</span>
          <strong>${Math.round(t.needs.hunger)}/${Math.round(t.needs.maxHunger)}</strong>
        </div>
      </div>
    </section>
  `}function il(e){return e.targetLocationId?e.targetLocationId:e.phase===`travelingBack`?`camp`:e.locationId??`camp`}function al(e,t){return e.originLocationId?e.originLocationId:e.phase===`travelingBack`?e.locationId??t:t}function ol(e){return e.replace(/[^a-zA-Z0-9_-]/g,`-`)}function sl(e){return(e.trim().split(/\s+/).map(e=>e[0]).join(``)||`?`).slice(0,2).toUpperCase()}function cl(e,t,n,r,i,a,o){return`
    <div class="action-stack">
      ${xu(ou(t),n)}
      ${dl(e,t,n,r,i,a,o)}
    </div>
  `}function ll(e,t,n){return`
    <section class="panel skill-panel" data-editor-id="skill-filter-panel" data-editor-label="Skill filter panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-grid">
        ${su(t).map(t=>ul(e,t,n)).join(``)}
      </div>
    </section>
  `}function ul(e,t,n){let r=t.id===n,i=nu(e,t.actionIds??[]),a=e.skills[dc[t.id]],o=lt(a),s=i||(o.canPrestige?`Prestige ready`:`Lv ${a.level} - ${k(o.xpIntoLevel)}/${k(o.xpForLevel)} XP`);return`
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
  `}function dl(e,t,n,r,i,a,o){let s=ou(t),c=s.id===`foraging`||s.id===`woodcutting`?Su(n,s.id).actionIds:s.actionIds??[];return s.id===`crafting`?fl(e,c,r,a,o):s.id===`smithing`?El(e,c,i,a,o):s.id===`textiles`?Il(e,c,a,o):s.id===`cooking`?Bl(e,o):`
      <section class="action-panel" data-editor-id="action-panel-${t}" data-editor-label="${s.label} action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="action-grid">
          ${c.map(t=>ju(e,t,a)).join(``)}
        </div>
    </section>
  `}function fl(e,t,n,r,i){let a=`craftLowestTool`,o=t.filter(hl),s=pl(n,o);return`
    <section class="action-panel crafting-action-panel" data-editor-id="action-panel-crafting" data-editor-label="Crafting action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card crafting-panel-card">
        <div class="smithing-workbench crafting-workbench">
          <div class="smithing-furnace-column crafting-workbench-column">
            ${gl(o,s)}
            ${_l(e,i)}
            ${t.includes(a)?Au(e,a,r):``}
          </div>
          ${vl(o,s)}
        </div>
        ${xl(e,o,s,r)}
      </div>
    </section>
  `}function pl(e,t){let n=ml(t);return n.includes(e)?e:n[0]??e}function ml(e){let t=e.map(e=>vc[e]?.material).filter(e=>!!e);return Array.from(new Set(t))}function hl(e){return!!vc[e]}function gl(e,t){let n=e.filter(e=>e!==`craftLowestTool`).length;return`
    <div class="smithing-status-grid crafting-status-grid">
      <div class="smithing-status-item">
        <span>Work Bench</span>
        <strong>Hand Craft</strong>
      </div>
      <div class="smithing-status-item">
        <span>Materials</span>
        <strong>${hc[t]}</strong>
      </div>
      <div class="smithing-status-item">
        <span>Recipes</span>
        <strong>${n}</strong>
      </div>
    </div>
  `}function _l(e,t){let n=B(e),r=n?Q(n):null;if(!n||!r||!hl(r))return`
      <div class="smithing-active-row idle crafting-active-row">
        <span>No active craft</span>
        <strong>Bench idle</strong>
      </div>
    `;let i=y(r),a=qi(Aa(e,t),0,1);return`
    <div class="smithing-active-row crafting-active-row">
      <span>Active craft</span>
      <strong>${i?.label??`Crafting`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${q(n.endsAt-t)}</em>
      </div>
    </div>
  `}function vl(e,t){return`
    <div class="smithing-smelt-column crafting-material-column">
      <div class="section-heading">
        <span>Materials Type</span>
      </div>
      <div class="smithing-smelt-grid crafting-material-grid">
        ${ml(e).map(n=>yl(e,n,t)).join(``)}
      </div>
    </div>
  `}function yl(e,t,n){let r=t===n,i=bl(e,t);return`
    <article class="smithing-smelt-card crafting-material-card ${r?`selected`:``}">
      <button
        class="smithing-smelt-select crafting-material-select"
        type="button"
        data-command="select-crafting-material"
        data-id="${t}"
        aria-pressed="${r}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${Mu(`craftLowestTool`)}</span>
        <span class="smithing-recipe-copy">
          <strong>${hc[t]}</strong>
          <small>${r?`Selected type`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${i} recipes</b>
          <small>${gc[t]}</small>
        </span>
      </button>
    </article>
  `}function bl(e,t){return e.filter(e=>e!==`craftLowestTool`&&vc[e]?.material===t).length}function xl(e,t,n,r){let i=t.filter(e=>e!==`craftLowestTool`&&vc[e]?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section crafting-recipe-section">
      <div class="section-heading">
        <span>${hc[n]} Crafting</span>
        <small>Filtered by materials type</small>
      </div>
      <div class="smithing-craft-columns crafting-craft-columns">
        ${_c.map(t=>Sl(e,i,n,t,r)).join(``)}
      </div>
    </div>
  `}function Sl(e,t,n,r,i){let a=t.filter(e=>vc[e]?.productCategory===r.id);return`
    <section class="smithing-craft-column crafting-craft-column" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading">
        <span>${r.label}</span>
        <small>${a.length}</small>
      </div>
      ${a.length?`<div class="smithing-recipe-grid crafting-recipe-grid">${a.map(t=>wl(e,t,i)).join(``)}</div>`:`<div class="smithing-empty-column">No ${hc[n].toLowerCase()} ${r.label.toLowerCase()} recipes yet.</div>`}
    </section>
  `}function Cl(e,t,n){let r=y(t);if(!r||!hl(t))return null;let i=F(e,t),a=J(t),o=Y(e,t),s=n?G(e,n.loopId):null,c=B(e),l=!!(n&&s),u=!!(l&&s&&n&&Bi(s,n.afterIndex,t)),d=c?Q(c)===t:!1,f=l?!u:!o||d,p=tc(e,a),m=o?``:i?p:li(e,t);return{definition:r,cost:a,unlocked:i,canAssignFollowUp:u,active:d,disabled:f,statusText:l?u?`Set as action loop step`:`Not valid for this loop`:d?`Running`:!o&&m?m:`Ready`,buttonLabel:l?`Set`:d?`Running`:o?`Start`:`Locked`,tooltipRows:Ru(t,r.durationMs)}}function wl(e,t,n){let r=Cl(e,t,n);if(!r)return``;let{definition:i,cost:a,unlocked:o,canAssignFollowUp:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=r;return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${Mu(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${i.label}</strong>
        <small>${u}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${Tl(t)}</b>
        <small>${M(a)}</small>
      </span>
      ${Nu(i.label,f,u)}
    </button>
  `}function Tl(e){let t=Fu(e);if(t)return`1 ${t.label}`;switch(e){case`craftLowestTool`:return`Lowest Stock`;case`craftWoodenSpoon`:return`1 Wooden Spoon`;case`craftWoodenBowl`:return`1 Wooden Bowl`;default:return y(e)?.label.replace(/^Craft /,`1 `)??`1 item`}}function El(e,t,i,a,o){let s=t.filter(e=>n.some(t=>t===e)),c=t.filter(e=>r.some(t=>t===e)),l=Mr(e),u=Dl(i,s);return`
    <section class="action-panel smithing-action-panel" data-editor-id="action-panel-smithing" data-editor-label="Smithing action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card">
        <div class="smithing-workbench">
          <div class="smithing-furnace-column">
            ${Ol(l)}
            ${kl(e,o)}
          </div>
          ${Al(e,s,u,a)}
        </div>
        ${Ml(e,c,u,a)}
      </div>
    </section>
  `}function Dl(e,t){let n=t.map(e=>i(e)?.material).filter(e=>!!e);return n.includes(e)?e:n[0]??e}function Ol(e){return`
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
  `}function kl(e,t){let n=B(e),r=n?Q(n):null;if(!n||!r||!Nr(r))return`
      <div class="smithing-active-row idle">
        <span>No active smelt</span>
        <strong>Furnace idle</strong>
      </div>
    `;let a=i(r),o=qi(Aa(e,t),0,1);return`
    <div class="smithing-active-row">
      <span>Active smelt</span>
      <strong>${a?.label??`Smelting`}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-smithing-action-progress style="transform: scaleX(${o.toFixed(4)})"></span>
        <em data-smithing-action-remaining>${q(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Al(e,t,n,r){return`
    <div class="smithing-smelt-column">
      <div class="section-heading">
        <span>Smelting</span>
      </div>
      <div class="smithing-smelt-grid">
        ${t.map(t=>jl(e,t,n,r)).join(``)}
      </div>
    </div>
  `}function jl(e,t,n,r){let i=Pl(e,t,r);if(!i)return``;let{definition:a,recipe:o,cost:s,active:c,disabled:l,statusText:u,buttonLabel:d,tooltipRows:f}=i,p=o.material===n,m=d===`Set`?`Set Smelt`:c?`Smelting`:d===`Start`?`Smelt`:d;return`
    <article class="smithing-smelt-card ${p?`selected`:``} ${c?`active`:``}">
      <button
        class="smithing-smelt-select"
        type="button"
        data-command="select-smithing-material"
        data-id="${o.material}"
        aria-pressed="${p}"
      >
        <span class="smithing-recipe-icon" aria-hidden="true">${Mu(t)}</span>
        <span class="smithing-recipe-copy">
          <strong>${pc[o.material]}</strong>
          <small>${p?`Selected material`:`Show recipes`}</small>
        </span>
        <span class="smithing-recipe-meta">
          <b>${Ir(o.actionId)}</b>
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
        ${Nu(a.label,f,u)}
      </button>
    </article>
  `}function Ml(e,t,n,r){let a=t.filter(e=>i(e)?.material===n);return`
    <div class="smithing-recipe-section smithing-craft-section">
      <div class="section-heading">
        <span>${pc[n]} Smithing</span>
        <small>Filtered by selected bar</small>
      </div>
      <div class="smithing-craft-columns">
        ${mc.map(t=>Nl(e,a,n,t,r)).join(``)}
      </div>
    </div>
  `}function Nl(e,t,n,r,a){let o=t.filter(e=>(i(e)?.productCategory??`tool`)===r.id);return`
    <section class="smithing-craft-column" aria-label="${r.label} recipes">
      <div class="smithing-craft-column-heading">
        <span>${r.label}</span>
        <small>${o.length}</small>
      </div>
      ${o.length?`<div class="smithing-recipe-grid">${o.map(t=>Fl(e,t,a)).join(``)}</div>`:`<div class="smithing-empty-column">No ${pc[n].toLowerCase()} ${r.label.toLowerCase()} recipes yet.</div>`}
    </section>
  `}function Pl(e,t,n){let r=y(t),a=i(t);if(!r||!a)return null;let o=F(e,t),s=J(t),c=Y(e,t),l=n?G(e,n.loopId):null,u=B(e),d=!!(n&&l),f=!!(d&&l&&n&&Bi(l,n.afterIndex,t)),p=u?Q(u)===t:!1,m=d?!f:!c||p,h=tc(e,s),g=c?``:o?h:li(e,t);return{definition:r,recipe:a,cost:s,unlocked:o,canAssignFollowUp:f,active:p,disabled:m,statusText:d?f?`Set as action loop step`:`Not valid for this loop`:p?`Running`:!c&&g?g:`Ready`,buttonLabel:d?`Set`:p?`Running`:c?`Start`:`Locked`,tooltipRows:Ru(t,r.durationMs)}}function Fl(e,t,n){let r=Pl(e,t,n);if(!r)return``;let{definition:i,recipe:a,cost:o,unlocked:s,canAssignFollowUp:c,active:l,disabled:u,statusText:d,buttonLabel:f,tooltipRows:p}=r;return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${Mu(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${i.label}</strong>
        <small>${d}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${Ir(a.actionId)}</b>
        <small>${M(o)}</small>
      </span>
      ${Nu(i.label,p,d)}
    </button>
  `}function Il(e,t,n,r){let i=t.filter(e=>l.some(t=>t===e)),a=t.filter(e=>u.some(t=>t===e)),o=t.filter(e=>d.some(t=>t===e)),s=t.filter(e=>f.some(t=>t===e)),c=t.filter(e=>p.some(t=>t===e)),h=t.filter(e=>m.some(t=>t===e));return`
    <section class="action-panel textile-action-panel" data-editor-id="action-panel-textiles" data-editor-label="Tailoring action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card textile-panel-card">
        <div class="smithing-status-grid textile-status-grid">
          <div class="smithing-status-item">
            <span>Flax Chain</span>
            <strong>${Gl(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Stations</span>
            <strong>${Kl(e)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Needles</span>
            <strong>${ql(e)}</strong>
          </div>
        </div>
        ${Ll(e,r)}
        ${Rl(e,`Flax Prep`,[...i,...a],n)}
        ${Rl(e,`Spinning`,o,n)}
        ${Rl(e,`Weaving`,s,n)}
        ${Rl(e,`Needles`,c,n)}
        ${Rl(e,`Sewing`,h,n)}
      </div>
    </section>
  `}function Ll(e,t){let n=B(e),r=n?Q(n):null,i=r?h(r):void 0;if(!n||!i)return`
      <div class="smithing-active-row idle textile-active-row">
        <span>No active tailoring work</span>
        <strong>Chain idle</strong>
      </div>
    `;let a=qi(Aa(e,t),0,1);return`
    <div class="smithing-active-row textile-active-row">
      <span>Active tailoring work</span>
      <strong>${i.label}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-textile-action-progress style="transform: scaleX(${a.toFixed(4)})"></span>
        <em data-textile-action-remaining>${q(n.endsAt-t)}</em>
      </div>
    </div>
  `}function Rl(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section textile-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid textile-recipe-grid">
        ${n.map(t=>zl(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function zl(e,t,n){let r=y(t),i=h(t);if(!r||!i)return``;let a=F(e,t),o=J(t),s=Y(e,t),c=n?G(e,n.loopId):null,l=B(e),u=!!(n&&c),d=!!(u&&c&&n&&Bi(c,n.afterIndex,t)),f=l?Q(l)===t:!1,p=u?!d:!s||f,m=tc(e,o),g=s?``:a?m:li(e,t),_=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&g?g:`Ready`,v=u?`Set`:f?`Running`:s?`Start`:`Locked`,b=Ru(t,r.durationMs);return`
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
      <span class="smithing-recipe-icon" aria-hidden="true">${Mu(t)}</span>
      <span class="smithing-recipe-copy">
        <strong>${r.label}</strong>
        <small>${_}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${Hr(i)}</b>
        <small>${M(o)}</small>
      </span>
      ${Nu(r.label,b,_)}
    </button>
  `}function Bl(e,t){let n=Ho(e).filter(e=>e.tags.includes(`stew`)),r=e.skills.cooking,i=lt(r);return`
    <section class="action-panel cooking-action-panel" data-editor-id="action-panel-cooking" data-editor-label="Cooking recipe panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="smithing-panel-card cooking-panel-card">
        <div class="smithing-status-grid cooking-status-grid">
          <div class="smithing-status-item">
            <span>Station</span>
            <strong>${Jo(e,`campfire`,t)}</strong>
          </div>
          <div class="smithing-status-item">
            <span>Cooking</span>
            <strong>Lv ${r.level} (${k(i.xpIntoLevel)}/${k(i.xpForLevel)})</strong>
          </div>
          <div class="smithing-status-item">
            <span>Queue</span>
            <strong>${e.cooking.queue.length}</strong>
          </div>
        </div>
        ${Vl(e,t)}
        ${Hl(e,t)}
        ${Ul(e,`Stews`,n,t)}
      </div>
    </section>
  `}function Vl(e,t){let n=Bo(e),r=n?Ho(e).find(e=>e.id===n.recipeId):void 0;if(!n||!r)return`
      <div class="smithing-active-row idle cooking-active-row">
        <span>No active cooking</span>
        <strong>${e.cooking.queue.length?`Waiting for campfire`:`Queue idle`}</strong>
      </div>
    `;let i=qi(Vo(n,t),0,1),a=Math.max(0,(n.endsAt??t)-t);return`
    <div class="smithing-active-row cooking-active-row">
      <span>Active cooking</span>
      <strong>${r.name}</strong>
      <div class="progress-track smithing-progress-track">
        <span data-cooking-action-progress style="transform: scaleX(${i.toFixed(4)})"></span>
        <em data-cooking-action-remaining>${q(a)}</em>
      </div>
    </div>
  `}function Hl(e,t){let n=e.cooking.queue.filter(e=>e.startedAt===null||e.endsAt===null);return n.length?`
    <div class="cooking-queue-panel">
      <div class="section-heading">
        <span>Queued</span>
      </div>
      <div class="cooking-queue-list">
        ${n.map(n=>`
              <div class="cooking-queue-row">
                <strong>${Ho(e).find(e=>e.id===n.recipeId)?.name??n.recipeId}</strong>
                <small>${P(e,t)?`Waiting turn`:`Needs lit campfire`}</small>
              </div>
            `).join(``)}
      </div>
    </div>
  `:``}function Ul(e,t,n,r){return n.length?`
    <div class="smithing-recipe-section cooking-recipe-section">
      <div class="section-heading">
        <span>${t}</span>
      </div>
      <div class="smithing-recipe-grid cooking-recipe-grid">
        ${n.map(t=>Wl(e,t,r)).join(``)}
      </div>
    </div>
  `:``}function Wl(e,t,n){let r=Wo(e,t,n),i=Go(e,t,n),a=!r,o=pe(t),s=e.cooking.completedRecipeCounts[t.id]??0,c=[{label:`Station`,value:`Campfire`},{label:`Speed`,value:q(t.cookTimeMs)},{label:`Skill`,value:`Cooking +${k(t.xpReward)} XP`},{label:`Level`,value:`Cooking Lv ${t.levelRequirement}`},{label:`Uses`,value:qo(t)},{label:`Makes`,value:Ko(t)},{label:`Nutrition`,value:`${t.nutrition.hunger??0} hunger`},{label:`Cooked`,value:`${s}`},{label:`Eating`,value:`Stews need a Wooden Spoon`},{label:`Failure`,value:`${Math.round(t.failureChance*100)}% base chance later`}],l=r?`Ready`:i;return`
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
        <b>${Ko(t)}</b>
        <small>${M(o)}${s?`; cooked ${s}`:``}</small>
      </span>
      ${Nu(t.name,c,l)}
    </button>
  `}function Gl(e){return e.seenResources.includes(`linenCloth`)||e.inventory.linenCloth>0?`Cloth`:e.seenResources.includes(`linenThread`)||e.inventory.linenThread>0?`Thread`:e.seenResources.includes(`flaxFiber`)||e.inventory.flaxFiber>0?`Fiber`:e.seenResources.includes(`rettedFlax`)||e.inventory.rettedFlax>0?`Retted`:e.seenResources.includes(`flaxPlant`)||e.inventory.flaxPlant>0?`Fresh flax`:`Find flax`}function Kl(e){let t=e.buildings.primitiveSpinningWheel,n=e.buildings.primitiveLoom;return t&&n?`Wheel + Loom`:t?`Wheel built`:n?`Loom built`:`Hand work`}function ql(e){let t=Math.max(0,Math.floor(e.inventory.copperNeedle??0)),n=Math.max(0,Math.floor(e.inventory.bronzeNeedle??0));return t||n?`Copper ${t} / Bronze ${n}`:`None`}function Jl(e,t){let n=B(e),r=Z(e);if(!n)return`
      <section class="current-action-panel panel idle" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="current-action-content idle">
          <div class="current-action-detail current-action-location">
            <span>Location</span>
            ${Ql(r.locationId)}
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
    `;let i=qi(Aa(e,t),0,1),a=q(n.endsAt-t),o=$l(e,n),s=tu(e);return`
    <section class="current-action-panel panel" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="current-action-content">
        <div class="current-action-detail current-action-location">
          <span>Location</span>
          ${Ql(o)}
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
  `}function Yl(e,t,n,r){let i=G(e,t);if(!i)return``;let a=Math.min(i.actionIds.length-1,Math.max(0,r));return`
    <div class="action-loop-controls" aria-label="Action loop">
      ${i.actionIds.map((e,t)=>Xl(i.id,e,t,a,n,i.actionIds.length)).join(``)}
    </div>
  `}function Xl(e,t,n,r,i,a){let o=n===r,s=i?.loopId===e&&i.afterIndex===n;return`
    <div class="action-loop-row ${o?`selected`:``}">
      <button
        class="action-loop-step ${o?`selected`:``} ${s?`assigning`:``}"
        type="button"
        data-command="select-loop-step"
        data-loop-id="${e}"
        data-id="${n}"
        aria-pressed="${o}"
      >
        ${Zl(t)}
      </button>
      ${o?`<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-loop-id="${e}" data-id="${n}" title="Add action after ${Zl(t)}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-loop-id="${e}" data-id="${n}" title="Remove ${Zl(t)}" ${a<=1?`disabled`:``}>-</button>
            </span>`:``}
    </div>
  `}function Zl(e){return e===`fishRiver`?`Fish River`:y(e)?.label??`Action`}function Ql(e){let t=eu(e);return`
    <div class="current-location-image" aria-label="${t.label} location">
      <img src="${t.iconUrl}" alt="" aria-hidden="true" />
    </div>
  `}function $l(e,t){let n=al(t,Z(e).locationId),r=il(t);return r===`camp`?n===`camp`?r:n:r}function eu(e){return e===`camp`?bc:Su(e)}function tu(e){let t=B(e);if(!t)return`Working`;let n=vu(il(t)),r=vu(al(t,`camp`));return t.phase===`travelingTo`?`Traveling to ${n}`:t.phase===`travelingBack`?`Returning to camp from ${r}`:t.phase===`followUp`?Q(t)===`butcherFish`?`Butchering Fish`:y(Q(t))?.label??`Working`:y(t.actionId)?.label??`Working`}function nu(e,t){let n=B(e);if(!n)return null;let r=Q(n);return t.includes(r)?y(r)?.label??`Working`:null}function Z(e){return e.characters.find(t=>t.id===e.selectedCharacterId)??e.characters[0]}function ru(e){return e.endsWith(`s`)?`${e}'`:`${e}'s`}function iu(e,t){return mo(e,t.id)?`fighting in The Ruins`:B(e,t.id)?au(e,t.id):`at ${vu(t.locationId)}`}function au(e,t=e.selectedCharacterId){let n=B(e,t);if(!n)return`keeping still`;let r=vu(il(n)),i=vu(al(n,`camp`));return n.phase===`travelingTo`?`traveling to ${r}`:n.phase===`travelingBack`?`returning to camp from ${i}`:n.phase===`followUp`?y(Q(n))?.verb??`working`:y(n.actionId)?.verb??`working`}function Q(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function ou(e){return lc.find(t=>t.id===e)??lc[0]}function su(e){return(uc.find(t=>t.id===e)??uc[0]).filterIds.map(e=>ou(e))}function cu(e){return uc.some(t=>t.id===e)}function lu(e){return e===`copper`||e===`bronze`}function uu(e){return e===`primitive`}function du(e){return lc.some(t=>t.id===e)}function fu(e,t){let n=Number(e);return Number.isFinite(n)?Math.max(0,Math.floor(n)):t}function pu(e,t,n){return G(t,e.dataset.loopId??n)?.id??null}function mu(e){return G(e,Z(e).actionLoopId)?.id??null}function hu(e){return yc.some(t=>t.id===e)}function gu(e){return e===`inventory`||e===`equipment`||e===`skills`||e===`log`}function _u(e){return e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId===`camp`}function vu(e){return e===`camp`?`camp`:`the ${Su(e).label.toLowerCase()}`}function yu(e){return e===`foraging`||e===`mining`||e===`fishing`||e===`hunting`||e===`woodcutting`}function bu(e){return su(`processing`).some(t=>t.id===e)}function xu(e,t){return yu(e.id)?Du(e,t):bu(e.id)?Ou(e):``}function Su(e,t){let n=t?Cu(t):yc;return n.find(t=>t.id===e)??n[0]}function Cu(e){switch(e){case`mining`:return yc.filter(e=>e.id===`mine`);case`fishing`:return yc.filter(e=>e.id===`river`);case`hunting`:return yc.filter(e=>e.id===`meadow`);case`woodcutting`:return yc.filter(e=>e.id===`forest`);default:return yc.filter(e=>e.id===`meadow`||e.id===`river`)}}function wu(e,t){return e===`mining`?`mine`:e===`hunting`?`meadow`:e===`fishing`?`river`:e===`woodcutting`?`forest`:t===`meadow`||t===`river`?t:`meadow`}function Tu(e,t){return Eu(e)?`mine`:e===`huntSmallAnimals`?`meadow`:e===`fishRiver`||e===`gatherWater`?`river`:e===`chopTrees`?`forest`:t===`forest`?`meadow`:t}function Eu(e){return e===`mineCoal`||e===`mineCopper`||e===`mineTin`}function Du(e,t){return`
    <section class="panel location-panel" data-editor-id="location-panel" data-editor-label="Location tabs panel" data-editor-files="src/ui/render.ts, src/style.css">
      ${ku(Cu(e.id),wu(e.id,t),e.label)}
    </section>
  `}function Ou(e){return`
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
          <img class="location-tab-image" src="${bc.iconUrl}" alt="" aria-hidden="true" />
          <span class="location-tab-label">Camp</span>
        </button>
      </div>
    </section>
  `}function ku(e,t,n){return`
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
  `}function Au(e,t,n){let r=y(t);if(!r)return``;let i=Sa(e),a=i?y(i):void 0,o=F(e,t),s=Y(e,t),c=n?G(e,n.loopId):null,l=B(e),u=!!(n&&c),d=!!(u&&c&&n&&Bi(c,n.afterIndex,t)),f=l?Q(l)===t:!1,p=u?!d:!s||f,m=s?``:li(e,t),h=i??t,g=_t(h),_=[{label:`Speed`,value:q(r.durationMs)},{label:`Skill`,value:`${st(g).label} +${k(vt(h))} XP`},{label:`Uses`,value:i?M(J(i)):`Varies by target`},{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}],v=u?d?`Set as action loop step`:`Not valid for this loop`:f?`Running`:!s&&m?m:a?`Next: ${a.label}`:``,b=u?`Set`:f?`Running`:s?`Start`:`Locked`,x=a?a.label.replace(/^Craft /,``):Tl(t),S=i?M(J(i)):`Varies by target`;return`
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
      aria-label="${b} ${r.label}${a?`, next ${a.label}`:``}"
    >
      <span class="smithing-recipe-icon" aria-hidden="true">
        ${Mu(t)}
      </span>
      <span class="smithing-recipe-copy">
        <strong>${r.label}</strong>
        <small>${v||`Balance stock`}</small>
      </span>
      <span class="smithing-recipe-meta">
        <b>${x}</b>
        <small>${S}</small>
      </span>
      ${Nu(r.label,_,v)}
    </button>
  `}function ju(e,t,n){let r=y(t);if(!r)return``;let i=F(e,t),a=J(t),o=Y(e,t),s=n?G(e,n.loopId):null,c=B(e),l=!!(n&&s),u=!!(l&&s&&n&&Bi(s,n.afterIndex,t)),d=c?Q(c)===t:!1,f=l?!u:!o||d,p=t===`butcherFish`||t===`butcherRabbit`||t===`butcherSquirrel`||t===`cookRabbitMeat`||t===`cookSquirrelMeat`?li(e,t):tc(e,a),m=o?``:i?p:li(e,t),h=Ru(t,r.durationMs),g=l?u?`Set as action loop step`:`Not valid for this loop`:!o&&m?m:``,_=l?`Set`:d?`Running`:o?`Start`:`Locked`;return`
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
        ${Mu(t)}
      </span>
      ${Nu(r.label,h,g)}
    </button>
  `}function Mu(e){let t=Pu(e);return t.length?`
    <span class="action-card-icon ${t.length>1?`multi`:``}">
      ${t.map(e=>`<img src="${e}" alt="" aria-hidden="true" />`).join(``)}
    </span>
  `:`<span class="action-card-glyph">${Lu(e)}</span>`}function Nu(e,t,n){return`
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
  `}function Pu(e){let t=Fu(e);if(t)return Iu(t.id);switch(e){case`gatherSticks`:return[ks];case`gatherStones`:return[zs];case`gatherFlaxPlants`:return[X];case`gatherFlaxFibers`:return[X];case`gatherMeadowIngredients`:return[ws,_s];case`gatherWater`:return[Ds];case`mineCoal`:return[us];case`mineCopper`:return[ds];case`mineTin`:return[Us];case`fishRiver`:return[Ss];case`craftLowestTool`:return[fs];case`craftWoodenSpoon`:return[Js];case`craftWoodenBowl`:return[Ks];case`craftLeatherBackpack`:return[ys];case`chopTrees`:return[$s];case`huntSmallAnimals`:return[Es,Os];case`butcherFish`:return[ps];case`butcherRabbit`:case`cookRabbitMeat`:return[Es];case`butcherSquirrel`:case`cookSquirrelMeat`:return[Os];case`tanHide`:return[vs];case`retFlax`:case`separateFlaxFiber`:case`handSpinLinenThread`:case`spinLinenThread`:case`weaveLinenCloth`:return[X];case`craftCopperNeedle`:return[ds];case`craftBronzeNeedle`:return[ds,Us];case`sewClothWrap`:case`sewLinenBandage`:case`sewSimplePouch`:case`sewLinenHood`:case`sewLinenShirt`:return[X];case`smeltCopperBar`:return[ds,us];case`smeltBronzeBar`:return[ds,Us];case`craftPot`:case`craftLadle`:case`craftCopperPickaxe`:case`craftCopperHatchet`:case`craftCopperKnife`:return[ds];case`craftBronzePickaxe`:case`craftBronzeHatchet`:case`craftBronzeKnife`:return[ds,Us]}return[]}function Fu(e){return C.find(t=>t.craftActionId===e)}function Iu(e){let t=wc[e];if(t)return[t];let n=C.find(t=>t.id===e);return n?.weapon?.range===`ranged`||n?.id.startsWith(`wooden`)?[$s]:n?.weapon?[zs]:[]}function Lu(e){let t=y(e);return t?t.label.split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase():`?`}function Ru(e,t){let n=_t(e),r=[{label:`Speed`,value:q(t)},{label:`Skill`,value:`${st(n).label} +${k(vt(e))} XP`}],a=i(e);if(a)return[...r,{label:`Uses`,value:M(a.cost)},{label:`Makes`,value:a.toolId?a.label.replace(`Craft `,`1 `):M(a.output??{})},{label:`Unlock`,value:a.unlockHint}];let o=h(e);if(o){let e=o.requiredBuildings?.length?o.requiredBuildings.map(e=>Yu(e)).join(`, `):`Camp`;return[...r,{label:`Station`,value:e},{label:`Uses`,value:M(o.cost)},{label:`Makes`,value:Hr(o)},{label:`Unlock`,value:o.unlockHint}]}let s=Fu(e);if(s)return[...r,{label:`Makes`,value:`1 ${s.label}`},{label:`Uses`,value:M(J(e))},...s.weapon?[{label:`Power`,value:Mc(s.weapon.damage)},{label:`Style`,value:`${s.weapon.hands}H ${Ac(s.weapon.range)}`}]:[]];switch(e){case`gatherSticks`:return[...r,{label:`Pickup`,value:`1-3 Sticks`},{label:`Each`,value:`1 weight`}];case`gatherStones`:return[...r,{label:`Pickup`,value:`1-2 Stones`},{label:`Each`,value:`1 weight`}];case`gatherFlaxPlants`:return[...r,{label:`Pickup`,value:`2-4 Flax Plants`},{label:`Each`,value:`1 weight`}];case`gatherFlaxFibers`:return[...r,{label:`Pickup`,value:`1-3 Flax Fibers`},{label:`Each`,value:`1 weight`}];case`gatherMeadowIngredients`:return[...r,{label:`Table`,value:Xi(`meadow`)},{label:`Pickup`,value:`1-2 weighted ingredient rolls`},{label:`Kinds`,value:`Herbs, flowers, berries, roots, vegetables, seasonings`}];case`gatherWater`:return[...r,{label:`Pickup`,value:`1-3 Water`},{label:`Place`,value:`River`}];case`mineCoal`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Coal`},{label:`Each`,value:`1 weight`}];case`mineCopper`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Copper`},{label:`Each`,value:`1 weight`}];case`mineTin`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Tin`},{label:`Each`,value:`1 weight`}];case`fishRiver`:return[...r,{label:`Requires`,value:`Fishing Pole`},{label:`Pickup`,value:`1 fish`},{label:`Each`,value:`0.5-7.5 lb`},{label:`Fish`,value:`Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb`}];case`chopTrees`:return[...r,{label:`Pickup`,value:`2-4 Wood, 35% chance for 1 Stick`},{label:`Each`,value:`Wood 2 weight, Stick 1 weight`}];case`huntSmallAnimals`:return[...r,{label:`Pickup`,value:`1 Rabbit or Squirrel`},{label:`Each`,value:`Rabbit 2-5 lb, Squirrel 0.5-2 lb`}];case`craftLowestTool`:return[...r,{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}];case`craftBasket`:return[...r,{label:`Makes`,value:`1 Basket`},{label:`Uses`,value:M(J(e))}];case`craftWoodenSpoon`:return[...r,{label:`Makes`,value:`1 Wooden Spoon`},{label:`Uses`,value:M(J(e))}];case`craftFishingPole`:return[...r,{label:`Makes`,value:`1 Fishing Pole`},{label:`Uses`,value:M(J(e))}];case`craftLeatherBackpack`:return[...r,{label:`Makes`,value:`1 Leather Backpack`},{label:`Uses`,value:M(J(e))}];case`butcherFish`:return[...r,{label:`Uses`,value:`1 carried fish`},{label:`Makes`,value:`Matching filet at 50% fish weight`}];case`butcherRabbit`:return[...r,{label:`Uses`,value:`1 Rabbit`},{label:`Each`,value:`2-5 lb`},{label:`Makes`,value:`1-2 Rabbit Meat; knife can recover Hide or Bone`}];case`butcherSquirrel`:return[...r,{label:`Uses`,value:`1 Squirrel`},{label:`Each`,value:`0.5-2 lb`},{label:`Makes`,value:`1 Squirrel Meat; knife can recover Hide or Bone`}];case`cookRabbitMeat`:return[...r,{label:`Uses`,value:`1 Rabbit Meat`},{label:`Makes`,value:`1 Cooked Rabbit Meat`}];case`cookSquirrelMeat`:return[...r,{label:`Uses`,value:`1 Squirrel Meat`},{label:`Makes`,value:`1 Cooked Squirrel Meat`}];case`tanHide`:return[...r,{label:`Uses`,value:`1 Hide`},{label:`Makes`,value:`1 Leather`}]}return r}function zu(e,t){let n=ye.filter(n=>ui(e,n.id,t));return`
    <section class="panel camp-panel" data-editor-id="camp-panel" data-editor-label="Camp structures and inventory panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="camp-panel-section">
        <div class="section-heading">
          <span>Structures</span>
        </div>
        <div class="craft-list">
          ${n.length?n.map(n=>Uu(e,n,t)).join(``):`<div class="empty-line">Nothing sturdy enough to name yet.</div>`}
        </div>
      </div>
      ${Bu(e)}
    </section>
  `}function Bu(e){let t=T.filter(t=>e.inventory[t]>0||_n(e,t)>0),n=w.reduce((e,n)=>(t.includes(n.id)&&(e[n.group]=e[n.group]??[],e[n.group].push(n.id)),e),{}),r=C.some(t=>e.tools[t.id].quantity>0);return`
    <div class="camp-panel-section camp-inventory-section" data-editor-id="camp-inventory-section" data-editor-label="Camp inventory section" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Camp Inventory</span>
      </div>
      ${t.length||r?`
            <div class="camp-inventory-content">
              ${Object.entries(n).map(([t,n])=>ud(e,t,n)).join(``)}
              ${pd(e)}
              ${Vu(e)}
            </div>
          `:`<div class="empty-line">No supplies stored yet.</div>`}
    </div>
  `}function Vu(e){let t=T.filter(t=>e.inventory[t]>0&&sc(t));return t.length?`
    <section class="resource-group food-use-panel" data-editor-id="food-use-panel" data-editor-label="Food use panel" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Food</h3>
      <div class="food-use-list">
        ${t.map(t=>Hu(e,t)).join(``)}
      </div>
    </section>
  `:``}function Hu(e,t){let n=ac(e,t),r=ic(e,t),i=rc(t);return`
    <div class="food-use-row">
      <span>
        <strong>${D(t)}</strong>
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
  `}function Uu(e,t,n){let r=Gu(e,t.id,n),i=di(e,t.id,n),a=j(e,t.recipe),o=_u(e),s=Ku(t.id),c=!i||!s&&r||!a||!o,l=qu(e,t.id,n),u=i?Ju(e,t.id,n):`Locked`;return`
    <article class="craft-item building-card ${r||Qt(e,t.id)>0?`owned`:``} ${i?``:`locked`} ${t.id===`campfire`&&r?`lit`:``}" data-editor-id="building-card-${t.id}" data-editor-label="Building card: ${t.label}" data-editor-files="src/ui/render.ts, src/style.css">
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
        ${Wu(e,t,n)}
      </button>
    </article>
  `}function Wu(e,t,n){let r=Gu(e,t.id,n),i=di(e,t.id,n),a=j(e,t.recipe),o=_u(e),s=[{label:`Status`,value:Xu(e,t.id,n,r,a,o,i)},{label:`Unlock`,value:fi(e,t.id)},{label:`Skill`,value:`Construction +${k(yt(t.id))} XP`},{label:`Cost`,value:M(t.recipe)},{label:`Use`,value:t.blurb}];return`
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
  `}function Gu(e,t,n){return Ku(t)?!1:t===`campfire`?P(e,n):e.buildings[t]}function Ku(e){return e===`hideTent`}function qu(e,t,n){switch(t){case`campfire`:return P(e,n)?cs:ls;case`tanningRack`:return Gs;case`hideTent`:return Ws;case`crudeStoneFurnace`:return Vs;case`primitiveSpinningWheel`:case`primitiveLoom`:return ls}}function Ju(e,t,n){return Ku(t)?`Build`:t===`campfire`&&P(e,n)?`Lit`:Gu(e,t,n)?`Built`:`Build`}function Yu(e){return ye.find(t=>t.id===e)?.label??e}function Xu(e,t,n,r,i,a,o){if(!o)return`Locked: ${fi(e,t)}`;if(!a&&!r)return`Needs ${Z(e).name} at camp`;if(t===`hideTent`){let n=Qt(e,t);return i?`Tents: ${n}; next gives +1 housing`:`Tents: ${n}; needs ${tc(e,ye.find(e=>e.id===t)?.recipe??{})}`}return t===`campfire`?r?`Lit, burns out in <b data-campfire-remaining>${q(Dr(e,n))}</b>`:i?`Ready to build, burns for 15m`:`Needs ${tc(e,ye.find(e=>e.id===t)?.recipe??{})}`:r?`Built`:i?`Ready to build`:`Needs ${tc(e,ye.find(e=>e.id===t)?.recipe??{})}`}function Zu(e,t){let n=Z(e);return`
    <div class="work-area single-panel">
      <section class="panel character-detail-panel" aria-label="${n.name} details" data-active-tab="${t}" data-editor-id="character-detail-panel" data-editor-label="Character detail panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="character-detail-heading">
          <span class="portrait" aria-hidden="true">${sl(n.name)}</span>
          <span class="character-detail-title">
            <strong>${n.name}</strong>
            <small>${iu(e,n)}</small>
          </span>
        </div>
        ${Qu(e)}
      </section>
    </div>
  `}function Qu(e){return`
    <div class="character-detail-content character-overview-content">
      <div class="character-overview-full">
        ${ld(e)}
      </div>
      <div class="character-overview-pair">
        <section class="character-overview-section" aria-label="Equipment overview" data-editor-id="character-overview-equipment" data-editor-label="Character overview equipment" data-editor-files="src/ui/render.ts, src/style.css">
          ${hd(e,!1)}
        </section>
        ${$u(e)}
      </div>
      <div class="character-overview-full">
        <section class="character-overview-section" aria-label="Skills overview" data-editor-id="character-overview-skills" data-editor-label="Character overview skills" data-editor-files="src/ui/render.ts, src/style.css">
          ${td(e)}
        </section>
      </div>
    </div>
  `}function $u(e){let t=Z(e),n=B(e,t.id),r=t.actionLoopId?G(e,t.actionLoopId):null,i=n?y(Q(n))?.label??`Working`:`Idle`,a=Ja(e,t.id),o=mo(e,t.id)??t.combat;return`
    <section class="character-overview-section character-stats-overview" aria-label="Character stats" data-editor-id="character-overview-stats" data-editor-label="Character overview stats" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Stats</h3>
      <dl class="character-stat-list">
        ${[{label:`Status`,value:iu(e,t)},{label:`Location`,value:vu(t.locationId)},{label:`Current`,value:i},{label:`Action Loop`,value:r?.name??`None`},{label:`Class`,value:a.classLabel},{label:`Weapon`,value:a.weaponLabel},{label:`Hunger`,value:`${Math.round(t.needs.hunger)} / ${Math.round(t.needs.maxHunger)}`},{label:`HP`,value:`${Math.round(o.hp)} / ${Math.round(o.maxHp)}`},{label:`Mana`,value:`${Math.round(o.mana)} / ${Math.round(o.maxMana)}`},...vd(e)].map(e=>`
            <div class="character-stat-row">
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
      </dl>
    </section>
  `}function ed(e){return`
    <button
      class="camp-log-toggle ${e?`active`:``}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${e}"
    >
      Camp Log
    </button>
  `}function td(e){return`
    <h3>Skills</h3>
    <section class="side-panel-content skills-screen" aria-label="Skills" data-editor-id="skills-screen" data-editor-label="Skills screen" data-editor-files="src/ui/render.ts, src/style.css">
      ${fc.filter(e=>e.skillIds.length>0).map(t=>nd(e,t)).join(``)}
      ${id(e)}
    </section>
  `}function nd(e,t){let n=t.skillIds.filter(e=>et.some(t=>t.id===e)).map(t=>rd(e,t)).join(``);return`
    <section class="skill-group" aria-label="${t.label} skills">
      <h4>${t.label}</h4>
      <div class="skill-group-list">
        ${n||`<div class="empty-line">No skills yet.</div>`}
      </div>
    </section>
  `}function rd(e,t){let n=st(t),r=e.skills[t],i=lt(r),a=i.atCap?i.canPrestige?`Prestige ready`:`Max level`:`${k(i.xpIntoLevel)} / ${k(i.xpForLevel)} XP`,o=r.prestige>0?`P${r.prestige}`:`P0`;return`
    <article class="skill-row ${i.canPrestige?`prestige-ready`:``}" data-editor-id="skill-row-${t}" data-editor-label="Skill row: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${n.label}</strong>
          <small>Total ${k(r.totalXp)} XP</small>
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
  `}function id(e){let t=Z(e),n=Ja(e,t.id);return`
    <section class="skill-group combat-class-group" aria-label="Combat class experience">
      <h4>Combat Classes</h4>
      <div class="skill-group-list">
        ${b.filter(e=>{let r=t.classProgress[e.id];return e.id===n.classId||(r?.totalXp??0)>0}).map(t=>ad(e,t.id)).join(``)}
      </div>
    </section>
  `}function ad(e,t){let n=Z(e),r=b.find(e=>e.id===t)??b[0],i=n.classProgress[t],a=Qa(i),o=a.atCap?`Max level`:`${$a(a.xpIntoLevel)} / ${$a(a.xpForLevel)} XP`;return`
    <article class="skill-row combat-class-row" data-editor-id="combat-class-row-${t}" data-editor-label="Combat class row: ${r.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${r.label}</strong>
          <small>${r.weaponLabel} - Total ${$a(i.totalXp)} XP</small>
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
  `}function od(e,t,n,r){let i=G(e,t),a=z(e).length;return`
    <div class="work-area single-panel">
      <section class="panel action-loop-page-panel action-loop-panel" aria-label="Action loops" data-editor-id="action-loops-panel" data-editor-label="Action loops panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="loop-panel-heading">
          <h3>Action Loops</h3>
          <button class="loop-create-button" type="button" data-command="create-loop">New</button>
        </div>
        <div class="loop-picker" aria-label="Saved action loops">
          ${e.actionLoops.map(t=>sd(e,t.id,i?.id??null)).join(``)}
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
                ${Yl(e,i.id,r,n)}
                <div class="loop-assignment-list">
                  ${e.characters.map(t=>cd(e,i.id,t)).join(``)}
                </div>
              </div>
            `:`<div class="empty-line">No loops built yet.</div>`}
      </section>
    </div>
  `}function sd(e,t,n){let r=G(e,t);if(!r)return``;let i=e.characters.filter(e=>e.actionLoopId===r.id).length,a=n===r.id;return`
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
  `}function cd(e,t,n){let r=n.actionLoopId===t,i=B(e,n.id),a=r?i?`Running`:`Assigned`:`Assign`;return`
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
        <small>${iu(e,n)}</small>
      </span>
      <em>${a}</em>
    </button>
  `}function ld(e){let t=Z(e),n=ru(t.name),r=un(e,t.id),i=T.filter(n=>r[n]>0||_n(e,n,`character`,t.id)>0),a=pn(e,t.id),o=mn(e,t.id),s=i.filter(e=>!!Dc[e]),c=i.filter(e=>!Dc[e]),l=!B(e)&&_u(e);return`
    <div class="resource-group character-inventory-group" data-editor-id="character-inventory-group" data-editor-label="Character inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="inventory-summary-heading">
        <h3>${n} Inventory</h3>
        <span>${Pd(a)}/${Pd(o)}</span>
      </div>
      ${i.length?`<button class="deposit-button" type="button" data-command="deposit-carried" ${l?``:`disabled`}>Store at Camp</button>`:``}
      ${i.length?`
            ${s.length?`<div class="inventory-resource-grid" aria-label="${n} carried inventory">
                    ${s.map(n=>fd(e,n,r,`character`,t.id)).join(``)}
                  </div>`:``}
            ${c.map(e=>dd(e,r)).join(``)}
          `:`<div class="empty-line">Pack empty.</div>`}
    </div>
  `}function ud(e,t,n){let r=n.filter(e=>!!Dc[e]),i=n.filter(e=>!Dc[e]);return`
    <div class="resource-group" data-editor-id="resource-group-${t}" data-editor-label="${Id(t)} resource group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${Id(t)}</h3>
      ${r.length?`<div class="inventory-resource-grid" aria-label="${Id(t)} inventory">
              ${r.map(t=>fd(e,t)).join(``)}
            </div>`:``}
      ${i.map(t=>`
        ${dd(t,e.inventory)}
      `).join(``)}
    </div>
  `}function dd(e,t){return`
    <div class="resource-row">
      <span>
        <strong>${D(e)}</strong>
        <small>${w.find(t=>t.id===e)?.blurb??``}</small>
      </span>
      <b>${Nd(e,t[e])}</b>
    </div>
  `}function fd(e,t,n=e.inventory,r=`camp`,i=e.selectedCharacterId){let a=Dc[t],o=w.find(e=>e.id===t);if(!a||!o)return``;let s=_n(e,t,r,i),c=He(t)?`, quantity ${s}`:``;return`
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${o.label}, ${Nd(t,n[t])}${c}" data-editor-id="inventory-resource-${r}-${t}" data-editor-label="Inventory resource: ${o.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <img class="slot-item-icon" src="${a}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${We(t,n[t])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${o.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${Id(o.group)}</dd>
          </div>
          ${Ve(t)?`<div>
                  <dt>Total</dt>
                  <dd>${Nd(t,n[t])}</dd>
                </div>`:``}
          ${He(t)?`<div>
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
  `}function pd(e){let t=C.filter(t=>e.tools[t.id].quantity>0);return t.length?`
    <section class="resource-group tool-inventory" data-editor-id="tool-inventory-group" data-editor-label="Tool inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${t.map(t=>md(e,t.id)).join(``)}
      </div>
    </section>
  `:``}function md(e,t){let n=C.find(e=>e.id===t),r=e.tools[t];if(!n||r.quantity<=0)return``;let i=qr(t),a=[{label:`Durability`,value:`${i}/${i}`},...kc(t)];return`
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${n.label}, ${r.quantity} ${r.quantity===1?`spare`:`spares`}" data-editor-id="inventory-tool-${t}" data-editor-label="Inventory tool: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${xd(t)}
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
  `}function hd(e,t=!0){return`
    <section class="side-panel-content equipment-screen" data-editor-id="equipment-screen" data-editor-label="Equipment screen" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="equipment-section">
        <h3>Equipment</h3>
        <div class="equipment-grid" aria-label="Tool equipment slots">
          ${Sc.slice(0,xc).map((t,n)=>t&&e.tools[t].owned?bd(e,t):Sd(n,t)).join(``)}
        </div>
      </div>
      ${Cc.map(e=>gd(e)).join(``)}
      ${t?`<div class="equipment-section equipment-stats-section">
              <h3>Equipment Stats</h3>
              <dl class="equipment-stat-list">
                ${vd(e).map(e=>`
                    <div class="equipment-stat-row">
                      <dt>${e.label}</dt>
                      <dd>${e.value}</dd>
                    </div>
                  `).join(``)}
              </dl>
            </div>`:``}
    </section>
  `}function gd(e){return`
    <div class="equipment-section equipment-placeholder-section" data-editor-id="equipment-placeholder-${ol(e.label)}" data-editor-label="${e.label} equipment slots" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${e.label}</h3>
      <div class="equipment-placeholder-grid" aria-label="${e.label} slots">
        ${e.slots.map(t=>_d(e.label,t)).join(``)}
      </div>
    </div>
  `}function _d(e,t){return`
    <div class="equipment-slot empty equipment-placeholder-slot" aria-label="Empty ${t} slot" data-editor-id="equipment-placeholder-${ol(e)}-${ol(t)}" data-editor-label="Equipment placeholder: ${t}" data-editor-files="src/ui/render.ts, src/style.css">
      <strong>${t}</strong>
    </div>
  `}function vd(e){let t=Z(e),n=C.filter(t=>e.tools[t.id].owned).filter(t=>e.tools[t.id].durability>0),r=C.reduce((t,n)=>t+e.tools[n.id].quantity,0),i=pn(e,t.id),a=mn(e,t.id),o=Math.max(0,a-10),s=yd(e);return[{label:`Carry`,value:`${Pd(i)} / ${Pd(a)} lb`},{label:`Carry Bonus`,value:o>0?`+${Pd(o)} lb`:`None`},{label:`Usable Tools`,value:`${n.length} / ${Sc.filter(Boolean).length}`},{label:`Spares`,value:r>0?`${r}`:`None`},{label:`Field Effects`,value:s.length?s.join(`, `):`None`}]}function yd(e){let t=[];for(let[n,r]of[[`fishing`,`Fishing`],[`butchering`,`Butchering`],[`woodcutting`,`Woodcutting`],[`mining`,`Mining`],[`hunting`,`Hunting`]]){let i=Xr(e,n);if(!i)continue;let a=C.find(e=>e.id===i),o=a&&a.tier!==`primitive`?`${jc(a.tier)} `:``;t.push(n===`hunting`&&a?`${r} (${a.label})`:`${o}${r}`)}return t}function bd(e,t){let n=C.find(e=>e.id===t),r=e.tools[t];if(!n||!r.owned)return``;let i=qr(t),a=Math.max(0,r.durability),o=a>0,s=(a/i*100).toFixed(1),c=[{label:`Durability`,value:o?`${a}/${i}`:`Broken`},{label:`Inventory`,value:`${r.quantity} ${r.quantity===1?`spare`:`spares`}`},...kc(t)],l=!!wc[t];return`
    <article class="equipment-slot ${o?``:`broken`} ${l?`icon-only`:``}" tabindex="0" data-tooltip-source aria-label="${n.label}" data-editor-id="equipment-slot-${t}" data-editor-label="Equipment slot: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${xd(t)}
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
  `}function xd(e){let t=wc[e];return t?`<img class="slot-item-icon" src="${t}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${Cd(e)}</span>`}function Sd(e,t){let n=t?Tc[t]:void 0,r=t?Ec[t]??`Empty`:`Empty`;return`
    <div class="equipment-slot empty ${n?`image-empty`:``}" aria-label="Empty equipment slot ${e+1}">
      ${n?`<img class="slot-shadow-icon" src="${n}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${t?Cd(t):`+`}</span>`}
      <strong>${r}</strong>
    </div>
  `}function Cd(e){switch(e){case`basket`:return`BK`;case`leatherBackpack`:return`BP`;case`fishingPole`:return`FP`;case`stoneAxe`:return`AX`;case`stonePickAxe`:return`PX`;case`copperPickaxe`:return`CP`;case`copperHatchet`:return`CH`;case`copperKnife`:return`CK`;case`bronzePickaxe`:return`BP`;case`bronzeHatchet`:return`BH`;case`bronzeKnife`:return`BK`;case`stoneSpear`:return`SP`;case`stoneKnife`:return`SK`;case`stoneDagger`:return`DG`;case`woodenSword`:return`WS`;case`woodenTwoHandedSword`:return`2S`;case`woodenClub`:return`WC`;case`woodenTwoHandedClub`:return`2C`;case`shortBow`:return`SB`;case`woodenTotem`:return`WT`}return(C.find(t=>t.id===e)?.label??e).split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase()}function wd(e,t){if(!(e instanceof Element))return null;let n=e.closest(`[data-tooltip-source]`);return n&&t.contains(n)?n:null}function Td(e,t){let n=t.querySelector(`.slot-tooltip`),r=Od(e);!n||!r||(r.innerHTML=n.innerHTML,r.setAttribute(`aria-hidden`,`false`),r.classList.add(`visible`),Dd(e,t))}function Ed(e){let t=Od(e);t&&(t.classList.remove(`visible`),t.setAttribute(`aria-hidden`,`true`),t.innerHTML=``)}function Dd(e,t){let n=Od(e);if(!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth,o=window.innerHeight,s=i.width,c=i.height,l=r.left-s-8;if(l<12){let e=r.right+8;l=e+s<=a-12?e:a-s-12}let u=Math.max(12,o-c-12),d=Math.min(Math.max(r.top,12),u);n.style.left=`${Math.max(12,Math.round(l))}px`,n.style.top=`${Math.round(d)}px`}function Od(e){return e.querySelector(`.tooltip-layer`)}function kd(e){return new Map([`.log-list`,`.side-panel-content`].map(t=>[t,e.querySelector(t)?.scrollTop??0]))}function Ad(e,t){for(let[n,r]of t){let t=e.querySelector(n);t&&(t.scrollTop=r)}}function jd(e,t,n,r=``){let i=e.log.filter(e=>Kt(e)===t);return`
    <section class="log-panel ${r}" data-editor-id="${t}-log-panel" data-editor-label="${n}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>${n}</span>
        <span class="quiet">${i.length}</span>
      </div>
        <div class="log-list">
          ${i.map(e=>`
            <p class="log-entry ${e.tone}">
              <span>${e.text}</span>
              ${Md(e)}
            </p>
          `).join(``)}
        </div>
    </section>
  `}function Md(e){if(e.aggregateItems){let t=T.filter(t=>(e.aggregateItems?.[t]??0)>0).map(t=>{let n=e.aggregateItems?.[t]??0;return`<b>+${We(t,n)} ${Fd(t,n)}</b>`});return t.length?`<span class="log-gains">${t.join(``)}</span>`:``}return e.aggregateTotal?`<span class="log-gains"><b>+${e.aggregateTotal} ${e.aggregateUnit??``}</b></span>`:``}function Nd(e,t){return Ve(e)?`${We(e,t)} lb`:We(e,t)}function Pd(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}function Fd(e,t){let n=D(e);if(Ve(e))return`lb ${n}`;if(t===1)return n;switch(e){case`wood`:case`rabbitMeat`:case`squirrelMeat`:case`cookedRabbitMeat`:case`cookedSquirrelMeat`:case`leather`:case`rettedFlax`:case`linenThread`:case`linenCloth`:return n;case`flaxPlant`:return`Flax Plants`;case`flaxFiber`:return`Flax Fibers`;case`coal`:case`copper`:case`tin`:case`copperBar`:case`bronzeBar`:case`pot`:case`ladle`:return n;case`copperNeedle`:return`Copper Needles`;case`bronzeNeedle`:return`Bronze Needles`;case`water`:return`Water`;case`dirtyBowl`:return`Dirty Bowls`;case`woodenSpoon`:return`Wooden Spoons`;case`clothWrap`:return`Cloth Wraps`;case`linenBandage`:return`Linen Bandages`;case`simplePouch`:return`Simple Pouches`;case`linenHood`:return`Linen Hoods`;case`linenShirt`:return`Linen Shirts`;default:return n.endsWith(`s`)?n:`${n}s`}}function Id(e){switch(e){case`resources`:return`Resources`;case`animals`:return`Animals`;case`hunted`:return`Hunted`;case`fish`:return`Fish`;case`crafted`:return`Worked`;case`ingredients`:return`Ingredients`;case`food`:return`Food`;case`liquids`:return`Liquids`;case`utensils`:return`Utensils`;default:return e}}var Ld=document.querySelector(`#app`);if(!Ld)throw Error(`App root was not found.`);var $=Fn(),Rd=1,zd=Math.max(Date.now(),$.lastSimulatedAt),Bd=Date.now(),Vd=Nc(Ld,{requestRender:()=>Hd(),persist:()=>Cr($),reset:()=>{Yd(),$=wr(),Hd()},getNow:()=>Jd(),getTestRewardMultiplier:()=>Rd,setTestRewardMultiplier:e=>{Rd=Rd===e?1:e,Ye(Rd)}});function Hd(){let e=Jd();Vd($,e)}function Ud(){let e=Jd(),t=Gd();if(ka($,e),Uo($),zo($,e),fo($,e),t!==Gd()){Hd();return}Kd()}Hd(),Wd(),window.setInterval(Ud,1e3),window.setInterval(()=>Cr($),2e3),window.addEventListener(`beforeunload`,()=>Cr($));function Wd(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./service-worker.js`).catch(()=>{})})}function Gd(){return JSON.stringify({inventory:$.inventory,characterInventory:$.characterInventory,resourceCounts:$.resourceCounts,characterResourceCounts:$.characterResourceCounts,characters:$.characters.map(e=>({id:e.id,condition:e.condition,locationId:e.locationId,needs:e.needs,actionLoopId:e.actionLoopId,combat:e.combat,classProgress:e.classProgress,inventory:e.inventory,resourceCounts:e.resourceCounts})),tools:$.tools,buildings:$.buildings,buildingCounts:$.buildingCounts,campfireExpiresAt:$.campfireExpiresAt,seenResources:$.seenResources,skills:$.skills,cooking:$.cooking,combat:$.combat,actionLoops:$.actionLoops,currentActions:z($).map(e=>({actionId:e.actionId,characterId:e.characterId,phase:e.phase,originLocationId:e.originLocationId,targetLocationId:e.targetLocationId,locationId:e.locationId,loopActionIds:e.loopActionIds,loopLocationIds:e.loopLocationIds,loopIndex:e.loopIndex,nextLoopIndex:e.nextLoopIndex,followUpActionId:e.followUpActionId,startedAt:e.startedAt,endsAt:e.endsAt})),logHead:$.log[0]?.id??``,logLength:$.log.length})}function Kd(){let e=Jd();qd(e);let t=document.querySelector(`[data-action-progress]`),n=document.querySelector(`[data-action-remaining]`),r=document.querySelector(`[data-smithing-action-progress]`),i=document.querySelector(`[data-smithing-action-remaining]`),a=document.querySelector(`[data-textile-action-progress]`),o=document.querySelector(`[data-textile-action-remaining]`),s=document.querySelector(`[data-cooking-action-progress]`),c=document.querySelector(`[data-cooking-action-remaining]`),l=B($);if(l){let s=Math.min(1,Math.max(0,Aa($,e)));t&&(t.style.transform=`scaleX(${s.toFixed(4)})`),n&&(n.textContent=q(l.endsAt-e)),r&&(r.style.transform=`scaleX(${s.toFixed(4)})`),i&&(i.textContent=q(l.endsAt-e)),a&&(a.style.transform=`scaleX(${s.toFixed(4)})`),o&&(o.textContent=q(l.endsAt-e))}let u=Bo($);if(u){let t=Vo(u,e);s&&(s.style.transform=`scaleX(${t.toFixed(4)})`),c&&(c.textContent=q((u.endsAt??e)-e))}}function qd(e){let t=document.querySelectorAll(`[data-campfire-remaining]`);if(!(!t.length||!$.campfireExpiresAt))for(let n of t)n.textContent=q($.campfireExpiresAt-e)}function Jd(){let e=Date.now(),t=Math.max(0,e-Bd);return zd+=t,Bd=e,zd}function Yd(){let e=Date.now();zd=e,Bd=e}function Xd(){Kd(),window.requestAnimationFrame(Xd)}window.requestAnimationFrame(Xd);