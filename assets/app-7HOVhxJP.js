import"./modulepreload-polyfill-CSRv37U6.js";/* empty css              */var e=[{id:`gatherSticks`,label:`Gather Sticks`,verb:`gathering sticks`,durationMs:7e3,blurb:`Slow, reliable foraging near camp.`},{id:`gatherStones`,label:`Gather Stones`,verb:`searching for stones`,durationMs:8500,blurb:`Cameron checks creek beds and exposed roots.`},{id:`gatherFlaxFibers`,label:`Gather Flax Fibers`,verb:`pulling flax fibers`,durationMs:1e4,blurb:`Thin stalks stripped by hand for future craft.`},{id:`gatherMushrooms`,label:`Gather Mushrooms`,verb:`gathering mushrooms`,durationMs:1e4,blurb:`Search the meadow shade for small edible caps.`},{id:`gatherBerries`,label:`Gather Berries`,verb:`gathering berries`,durationMs:1e4,blurb:`Pick careful handfuls from the meadow brambles.`},{id:`mineCoal`,label:`Mine Coal`,verb:`mining coal`,durationMs:3e4,blurb:`Chip dark fuel from the mine wall.`},{id:`mineCopper`,label:`Mine Copper`,verb:`mining copper`,durationMs:3e4,blurb:`Break reddish ore from stone seams.`},{id:`mineTin`,label:`Mine Tin`,verb:`mining tin`,durationMs:3e4,blurb:`Work pale ore from fractured rock.`},{id:`fishRiver`,label:`Fishing River`,verb:`fishing the river`,durationMs:15e3,blurb:`Cast into the shallows for small river fish.`},{id:`craftLowestTool`,label:`Primitive Tools`,verb:`balancing tool stock`,durationMs:15e3,blurb:`Craft whichever primitive tool has the lowest current stock.`},{id:`craftBasket`,label:`Craft Basket`,verb:`crafting a basket`,durationMs:15e3,blurb:`Weave flax fibers around a simple stick frame.`},{id:`craftFishingPole`,label:`Craft Fishing Pole`,verb:`crafting a fishing pole`,durationMs:15e3,blurb:`Bind flax line to a flexible stick.`},{id:`craftStoneKnife`,label:`Craft Stone Knife`,verb:`crafting a stone knife`,durationMs:15e3,blurb:`Shape a small edge and bind it to a handle.`},{id:`craftStoneAxe`,label:`Craft Stone Axe`,verb:`crafting a stone axe`,durationMs:15e3,blurb:`Bind a chopping head to a short haft.`},{id:`craftStonePickAxe`,label:`Craft Stone Pick Axe`,verb:`crafting a stone pick axe`,durationMs:15e3,blurb:`Lash a pointed stone head to a sturdy handle.`},{id:`craftStoneSpear`,label:`Craft Stone Spear`,verb:`crafting a stone spear`,durationMs:15e3,blurb:`Lash a stone point to a balanced shaft.`},{id:`chopTrees`,label:`Chop Trees`,verb:`chopping trees`,durationMs:18e3,blurb:`The first real push beyond loose branches.`},{id:`huntSmallAnimals`,label:`Hunt Small Animals`,verb:`hunting small animals`,durationMs:28e3,blurb:`Bring back whole rabbits or squirrels for later work.`},{id:`butcherFish`,label:`Butcher Fish`,verb:`butchering fish`,durationMs:15e3,blurb:`Clean one carried fish into matching filets at half weight.`},{id:`butcherRabbit`,label:`Butcher Rabbit`,verb:`butchering a rabbit`,durationMs:18e3,blurb:`Break down a rabbit into useful parts.`},{id:`butcherSquirrel`,label:`Butcher Squirrel`,verb:`butchering a squirrel`,durationMs:14e3,blurb:`Break down a squirrel into useful parts.`},{id:`cookRabbitMeat`,label:`Cook Rabbit Meat`,verb:`cooking rabbit meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`cookSquirrelMeat`,label:`Cook Squirrel Meat`,verb:`cooking squirrel meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`tanHide`,label:`Tan Hide`,verb:`working hide`,durationMs:36e3,blurb:`Scrape, stretch, wait, repeat.`},{id:`craftLeatherBackpack`,label:`Craft Leather Backpack`,verb:`crafting a leather backpack`,durationMs:15e3,blurb:`Knot a crude leather sling pouch with a drawstring.`}];function t(t){return e.find(e=>e.id===t)}var n=[{id:`stoneKnife`,label:`Stone Knife`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Unlocks hide and bone recovery while butchering.`,maxDurability:18},{id:`stoneAxe`,label:`Stone Axe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Heavy enough to bite into small trees.`,maxDurability:12},{id:`stonePickAxe`,label:`Stone Pick Axe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A pointed stone head for breaking stubborn ground.`,maxDurability:12},{id:`stoneSpear`,label:`Stone Spear`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A reach weapon for rabbits and squirrels.`,maxDurability:10},{id:`fishingPole`,label:`Fishing Pole`,recipe:{stick:1,flaxFiber:1},blurb:`A simple line and hook for working the river.`,maxDurability:16},{id:`basket`,label:`Basket`,recipe:{stick:1,flaxFiber:3},blurb:`A one-hand woven carrier for hauling more from the wild.`,maxDurability:1},{id:`leatherBackpack`,label:`Leather Backpack`,recipe:{leather:10},blurb:`A crude sling pouch for hauling more from the wild.`,maxDurability:1}],r=[{id:`campfire`,label:`Campfire`,recipe:{stick:8,stone:5},blurb:`A fixed fire ring for cooking meat.`},{id:`tanningRack`,label:`Tanning Rack`,recipe:{stick:6,wood:4,stone:2},blurb:`A rough frame for turning hide into leather.`},{id:`hideTent`,label:`Hide Tent`,recipe:{wood:5,hide:10},blurb:`A hide shelter for holding warmth at camp.`}],i=[{id:`stick`,label:`Stick`,group:`resources`,blurb:`Dry kindling and crude handles.`},{id:`stone`,label:`Stone`,group:`resources`,blurb:`Weight, edge, and spark.`},{id:`flaxFiber`,label:`Flax Fiber`,group:`resources`,blurb:`Pale plant fiber for future cordage and cloth.`},{id:`mushroom`,label:`Mushroom`,group:`resources`,blurb:`Soft meadow caps gathered for later meals.`},{id:`berry`,label:`Berry`,group:`resources`,blurb:`Bright handfuls from low meadow brambles.`},{id:`wood`,label:`Wood`,group:`resources`,blurb:`Usable lengths from felled trees.`},{id:`coal`,label:`Coal`,group:`resources`,blurb:`Dark fuel chipped from the mine.`},{id:`copper`,label:`Copper`,group:`resources`,blurb:`Soft reddish ore for future metalwork.`},{id:`tin`,label:`Tin`,group:`resources`,blurb:`Pale ore that will matter once bronze is possible.`},{id:`minnow`,label:`Minnow`,group:`fish`,blurb:`Tiny river fish, quick to smoke or stew.`},{id:`stoneLoach`,label:`Stone Loach`,group:`fish`,blurb:`Bottom-feeding fish from cold stones.`},{id:`mudskipper`,label:`Mudskipper`,group:`fish`,blurb:`A stubborn shore fish pulled from muddy shallows.`},{id:`brookStickleback`,label:`Brook Stickleback`,group:`fish`,blurb:`Small, sharp-backed fish from fast water.`},{id:`pebblePerch`,label:`Pebble Perch`,group:`fish`,blurb:`A broad little perch hiding under river stones.`},{id:`minnowFilet`,label:`Minnow Filet`,group:`fish`,blurb:`Cleaned minnow meat, lighter after butchering.`},{id:`stoneLoachFilet`,label:`Stone Loach Filet`,group:`fish`,blurb:`Cleaned stone loach meat, lighter after butchering.`},{id:`mudskipperFilet`,label:`Mudskipper Filet`,group:`fish`,blurb:`Cleaned mudskipper meat, lighter after butchering.`},{id:`brookSticklebackFilet`,label:`Brook Stickleback Filet`,group:`fish`,blurb:`Cleaned brook stickleback meat, lighter after butchering.`},{id:`pebblePerchFilet`,label:`Pebble Perch Filet`,group:`fish`,blurb:`Cleaned pebble perch meat, lighter after butchering.`},{id:`rabbit`,label:`Rabbit`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`squirrel`,label:`Squirrel`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`rabbitMeat`,label:`Rabbit Meat`,group:`hunted`,blurb:`Fresh rabbit meat that wants fire soon.`},{id:`squirrelMeat`,label:`Squirrel Meat`,group:`hunted`,blurb:`Fresh squirrel meat that wants fire soon.`},{id:`cookedRabbitMeat`,label:`Cooked Rabbit Meat`,group:`crafted`,blurb:`A small cooked rabbit ration.`},{id:`cookedSquirrelMeat`,label:`Cooked Squirrel Meat`,group:`crafted`,blurb:`A small cooked squirrel ration.`},{id:`hide`,label:`Hide`,group:`resources`,blurb:`Rough animal hide, ready for scraping.`},{id:`bone`,label:`Bone`,group:`resources`,blurb:`Hard scraps for later craft.`},{id:`leather`,label:`Leather`,group:`crafted`,blurb:`Worked hide for future bags and armor.`}],a=i.map(e=>e.id),o=[`stick`,`stone`],s=[`minnow`,`stoneLoach`,`mudskipper`,`brookStickleback`,`pebblePerch`],c=[`minnowFilet`,`stoneLoachFilet`,`mudskipperFilet`,`brookSticklebackFilet`,`pebblePerchFilet`],l={minnow:`minnowFilet`,stoneLoach:`stoneLoachFilet`,mudskipper:`mudskipperFilet`,brookStickleback:`brookSticklebackFilet`,pebblePerch:`pebblePerchFilet`},u=[...s,`rabbit`,`squirrel`],d=[...s,...c,`rabbit`,`squirrel`];function f(e){return d.includes(e)}function p(e){return u.includes(e)}function m(e,t){let n=Math.max(0,Number.isFinite(t)?t:0);return f(e)?Math.round(n*10)/10:Math.floor(n)}function h(e,t){let n=m(e,t);return f(e)?_(n):`${n}`}function g(e){return i.find(t=>t.id===e)?.label??e}function _(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}var v=1e3,y=[{id:`foraging`,label:`Foraging`,description:`Gathering loose food and camp materials.`},{id:`mining`,label:`Mining`,description:`Breaking stone for ore and fuel.`},{id:`fishing`,label:`Fishing`,description:`Catching river fish.`},{id:`woodcutting`,label:`Woodcutting`,description:`Chopping trees into useful wood.`},{id:`hunting`,label:`Hunting`,description:`Tracking and taking small animals.`},{id:`crafting`,label:`Crafting`,description:`Making tools and useful camp goods.`},{id:`butchering`,label:`Butchering`,description:`Breaking animals and fish into usable parts.`},{id:`cooking`,label:`Cooking`,description:`Preparing food over fire.`},{id:`leatherworking`,label:`Leatherworking`,description:`Turning hide into leather.`},{id:`construction`,label:`Construction`,description:`Building and improving camp structures.`},{id:`agility`,label:`Agility`,description:`Moving between camp and wilderness locations.`}],ee=y.map(e=>e.id),te={gatherSticks:{skillId:`foraging`,xp:70},gatherStones:{skillId:`foraging`,xp:85},gatherFlaxFibers:{skillId:`foraging`,xp:100},gatherMushrooms:{skillId:`foraging`,xp:100},gatherBerries:{skillId:`foraging`,xp:100},mineCoal:{skillId:`mining`,xp:360},mineCopper:{skillId:`mining`,xp:360},mineTin:{skillId:`mining`,xp:360},fishRiver:{skillId:`fishing`,xp:180},craftLowestTool:{skillId:`crafting`,xp:150},craftBasket:{skillId:`crafting`,xp:150},craftFishingPole:{skillId:`crafting`,xp:150},craftStoneKnife:{skillId:`crafting`,xp:150},craftStoneAxe:{skillId:`crafting`,xp:170},craftStonePickAxe:{skillId:`crafting`,xp:180},craftStoneSpear:{skillId:`crafting`,xp:180},chopTrees:{skillId:`woodcutting`,xp:220},huntSmallAnimals:{skillId:`hunting`,xp:340},butcherFish:{skillId:`butchering`,xp:150},butcherRabbit:{skillId:`butchering`,xp:220},butcherSquirrel:{skillId:`butchering`,xp:170},cookRabbitMeat:{skillId:`cooking`,xp:160},cookSquirrelMeat:{skillId:`cooking`,xp:160},tanHide:{skillId:`leatherworking`,xp:430},craftLeatherBackpack:{skillId:`leatherworking`,xp:900}},ne={campfire:80,tanningRack:320,hideTent:450};function re(){return Object.fromEntries(ee.map(e=>[e,ye()]))}function ie(e){let t=re();if(!e||typeof e!=`object`)return t;let n=e;for(let e of ee)t[e]=be(n[e]);return t}function ae(e){return ee.some(t=>t===e)}function oe(e){return y.find(t=>t.id===e)??y[0]}function se(e){let t=Te(e,1,v);return 50*(t-1)*t*(2*t-1)/6}function ce(e){return Ce(e.prestige)}function le(e){let t=ce(e),n=e.level>=t,r=se(e.level),i=e.level>=1e3?r:se(e.level+1),a=Math.max(0,i-r),o=n?a:Math.max(0,Math.min(e.xp-r,a));return{cap:t,currentLevelXp:r,nextLevelXp:i,xpIntoLevel:o,xpForLevel:a,ratio:a<=0?1:o/a,atCap:n,canPrestige:ue(e)}}function ue(e){let t=ce(e);return t<1e3&&e.level>=t}function de(e,t,n=Date.now()){we(e);let r=e.skills[t];return ue(r)?(r.prestige=Te(r.prestige+1,0,9),r.level=1,r.xp=0,e.updatedAt=n,e.lastSimulatedAt=n,!0):!1}function fe(e,t,n=Date.now()){let r=te[t];he(e,r.skillId,r.xp,n)}function pe(e,t,n=Date.now()){he(e,`construction`,ne[t],n)}function me(e,t,n=Date.now()){t<=0||he(e,`agility`,Math.max(1,Math.round(t/1e3*2)),n)}function he(e,t,n,r=Date.now()){let i=Math.max(0,Math.floor(n));if(i<=0)return;we(e);let a=e.skills[t],o=ce(a);a.totalXp+=i,a.xp=Math.min(se(o),a.xp+i),a.level=Se(a.xp,o),e.updatedAt=r,e.lastSimulatedAt=r}function ge(e){return te[e].skillId}function _e(e){return te[e].xp}function ve(e){return ne[e]}function b(e){let t=Math.max(0,e);return t>=1e9?`${De(t/1e9)}B`:t>=1e6?`${De(t/1e6)}M`:t>=1e3?`${De(t/1e3)}K`:Math.round(t).toLocaleString(`en-US`)}function ye(){return{level:1,xp:0,totalXp:0,prestige:0,bonuses:[]}}function be(e){if(!e||typeof e!=`object`)return ye();let t=Te(e.prestige,0,9),n=Ce(t),r=Ee(e.xp,0,se(n)),i=Math.max(r,Math.max(0,Math.floor(Number(e.totalXp??0))));return{level:Se(r,n),xp:r,totalXp:i,prestige:t,bonuses:xe(e.bonuses)}}function xe(e){return Array.isArray(e)?e.filter(e=>{if(!e||typeof e!=`object`)return!1;let t=e;return typeof t.id==`string`&&typeof t.label==`string`}):[]}function Se(e,t){let n=1;for(;n<t&&e>=se(n+1);)n+=1;return n}function Ce(e){let t=Te(e,0,9);return Math.min(v,(t+1)*100)}function we(e){e.skills=ie(e.skills)}function Te(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function Ee(e,t,n){let r=Number(e??t);return Number.isFinite(r)?Math.min(n,Math.max(t,Math.floor(r))):t}function De(e){return e.toFixed(2).replace(/\.?0+$/,``)}function x(){return Object.fromEntries(a.map(e=>[e,0]))}function S(){return Object.fromEntries(a.map(e=>[e,0]))}function Oe(){return Object.fromEntries(n.map(e=>[e.id,{owned:!1,durability:0,quantity:0}]))}function ke(){return{campfire:0,tanningRack:0,hideTent:0}}function Ae(e=Date.now()){return{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:e,updatedAt:e}}function je(e=Date.now()){return{version:6,createdAt:e,updatedAt:e,lastSimulatedAt:e,selectedCharacterId:`cameron`,characters:[{id:`cameron`,name:`Cameron`,epithet:`Alone at the treeline`,condition:`resting`,locationId:`camp`,inventory:x(),resourceCounts:S(),actionLoopId:`loop-forage-sticks`}],inventory:x(),characterInventory:x(),resourceCounts:S(),characterResourceCounts:S(),tools:Oe(),buildings:{campfire:!1,tanningRack:!1,hideTent:!1},buildingCounts:ke(),campfireExpiresAt:null,seenResources:[...o],skills:re(),actionLoops:[Ae(e)],currentActions:[],currentAction:null,log:[{id:`${e}-start`,time:e,text:`Cameron wakes beneath cold branches with empty hands.`,tone:`muted`,scope:`camp`}]}}var Me=48,Ne=`camp`,Pe=[`action:`,`craft:`,`deposit:`],Fe=[`Cameron stops `,`Cameron lacks `,`Cameron crafted `,`Cameron butchered `,`Cameron returned `,`The saved trail grows quiet`];function C(e,t,n=`muted`,r=Date.now(),i=Ne){e.log.unshift({id:`${r}-${Math.random().toString(36).slice(2)}`,time:r,text:t,tone:n,scope:i}),e.log=e.log.slice(0,Me)}function Ie(e,t){let n=t.now??Date.now(),r=t.scope??Ne,i=e.log.findIndex(e=>e.aggregateKey===t.aggregateKey&&Le(e)===r),a=Re(t.resources);if(i>=0){let[o]=e.log.splice(i,1);o.time=n,o.text=t.text,o.tone=t.tone??o.tone,o.scope=r,Object.keys(a).length>0?(o.aggregateItems=ze(Be(o),a),delete o.aggregateTotal,delete o.aggregateUnit):(o.aggregateTotal=(o.aggregateTotal??0)+(t.amount??0),o.aggregateUnit=t.unit),e.log.unshift(o);return}e.log.unshift({id:`${n}-${Math.random().toString(36).slice(2)}`,time:n,text:t.text,tone:t.tone??`muted`,scope:r,aggregateKey:t.aggregateKey,...Object.keys(a).length>0?{aggregateItems:a}:{aggregateTotal:t.amount??0,aggregateUnit:t.unit}}),e.log=e.log.slice(0,Me)}function Le(e){return e.scope?e.scope:e.aggregateKey&&Pe.some(t=>e.aggregateKey?.startsWith(t))||Fe.some(t=>e.text.startsWith(t))||/\bbreaks(?:\.|;)/.test(e.text)?`character`:Ne}function Re(e){let t={};for(let[n,r]of Object.entries(e??{})){let e=n,i=m(e,r??0);i>0&&(t[e]=i)}return t}function ze(e,t){let n={...e??{}};for(let[e,r]of Object.entries(t)){let t=e;n[t]=m(t,(n[t]??0)+(r??0))}return n}function Be(e){if(e.aggregateItems)return e.aggregateItems;let t=Ve(e.aggregateUnit);if(!(!t||!e.aggregateTotal))return{[t]:e.aggregateTotal}}function Ve(e){switch(e?.toLowerCase()){case`sticks`:return`stick`;case`stones`:return`stone`;default:return}}var He=`rowan`;function Ue(e,t){return Math.max(0,Math.floor(e.buildingCounts?.[t]??+!!e.buildings[t]))}function We(e,t){let n=Ue(e,t)+1;return e.buildingCounts[t]=n,n}function Ge(e,t,n){e.buildingCounts[t]=Math.max(0,Math.floor(n))}function Ke(e){return e.characters.length}function qe(e){return Ue(e,`hideTent`)}function Je(e,t=Date.now()){return qe(e)<2||e.characters.some(e=>e.id===He)?!1:(e.characters.push({id:He,name:`Rowan`,epithet:`Drawn to the second shelter`,condition:`resting`,locationId:`camp`,inventory:x(),resourceCounts:S()}),C(e,`Rowan joins the camp after the second hide tent goes up.`,`craft`,t),!0)}function Ye(e){for(let t of a)e.inventory[t]=m(t,e.inventory[t]??0),e.characterInventory[t]=m(t,e.characterInventory[t]??0),e.resourceCounts[t]=gt(t,e.inventory[t],e.resourceCounts[t]??0),e.characterResourceCounts[t]=gt(t,e.characterInventory[t],e.characterResourceCounts[t]??0);for(let t of e.characters)t.inventory=mt(t.inventory),t.resourceCounts=ht(t.inventory,t.resourceCounts);tt(e)}function w(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=(n??0))}function Xe(e,t){for(let[n,r]of Object.entries(t)){let t=n;e.inventory[t]=m(t,e.inventory[t]-(r??0))}}function Ze(e,t,n={}){for(let[r,i]of Object.entries(t)){let t=r,a=i??0;a<=0||(e.inventory[t]=m(t,e.inventory[t]+a),_t(e.resourceCounts,t,n[t]??0),e.seenResources.includes(t)||e.seenResources.push(t))}}function Qe(e){switch(e){case`wood`:return 2;case`stick`:case`stone`:case`flaxFiber`:return 1;case`mushroom`:case`berry`:return .1;default:return 1}}function $e(e){let t=a.reduce((t,n)=>t+(e[n]??0)*Qe(n),0);return Math.round(t*10)/10}function T(e,t=e.selectedCharacterId){let n=dt(e,t);return n.inventory||=ft(),n.inventory}function et(e,t=e.selectedCharacterId){let n=dt(e,t);return n.resourceCounts||=pt(),n.resourceCounts}function tt(e){let t=T(e),n=et(e);for(let r of a)e.characterInventory[r]=t[r]??0,e.characterResourceCounts[r]=n[r]??0}function nt(e,t=e.selectedCharacterId){return $e(T(e,t))}function rt(e,t=e.selectedCharacterId){let n=e.tools.basket,r=e.tools.leatherBackpack;return 10+(n?.owned&&n.durability>0?5:0)+(r?.owned&&r.durability>0?15:0)}function it(e,t,n={},r=e.selectedCharacterId){let i={},o=T(e,r),s=et(e,r),c=nt(e,r),l=rt(e,r);for(let r of a){let a=m(r,t[r]??0);if(a<=0)continue;let u=Qe(r),d=l-c,p=u>0?m(r,f(r)?a*u<=d?a:0:Math.min(a,Math.floor(d/u))):a;p<=0||(i[r]=p,o[r]=m(r,o[r]+p),_t(s,r,yt(r,a,p,n[r])),c=Math.round((c+p*u)*10)/10,e.seenResources.includes(r)||e.seenResources.push(r))}return tt(e),i}function at(e,t=e.selectedCharacterId){let n={},r=T(e,t),i=et(e,t);for(let t of a){let a=r[t];a<=0||(n[t]=a,e.inventory[t]=m(t,e.inventory[t]+a),vt(i,e.resourceCounts,t),r[t]=0,e.seenResources.includes(t)||e.seenResources.push(t))}return tt(e),n}function ot(e,t,n=`camp`,r=e.selectedCharacterId){let i=ut(e,n,r);return p(t)?Math.max(0,Math.floor(i[t]??0)):Math.floor(lt(e,n,r)[t]??0)}function st(e,t,n=`camp`,r=e.selectedCharacterId){return ot(e,t,n,r)>0}function ct(e,t,n=`camp`,r=e.selectedCharacterId){if(!p(t))return 0;let i=lt(e,n,r),a=ut(e,n,r),o=ot(e,t,n,r),s=m(t,i[t]??0);if(o<=0||s<=0)return i[t]=0,a[t]=0,tt(e),0;let c=m(t,o<=1?s:s/o);return a[t]=Math.max(0,o-1),i[t]=a[t]<=0?0:m(t,s-c),tt(e),c}function E(e){return Object.entries(e).map(([e,t])=>{let n=e;return`${h(n,t??0)}${f(n)?` lb`:``} ${g(n)}`}).join(`, `)}function lt(e,t,n){return t===`character`?T(e,n):e.inventory}function ut(e,t,n){return t===`character`?et(e,n):e.resourceCounts}function dt(e,t){return e.characters.find(e=>e.id===t)??e.characters[0]}function ft(){return Object.fromEntries(a.map(e=>[e,0]))}function pt(){return Object.fromEntries(a.map(e=>[e,0]))}function mt(e){let t=ft();for(let n of a)t[n]=m(n,e?.[n]??0);return t}function ht(e,t){let n=pt();for(let r of a)n[r]=gt(r,e[r],t?.[r]??0);return n}function gt(e,t,n){return!p(e)||t<=0?0:Math.max(1,Math.floor(Math.max(0,Number.isFinite(n)?n:0)))}function _t(e,t,n){!p(t)||n<=0||(e[t]=Math.floor((e[t]??0)+n))}function vt(e,t,n){if(!p(n))return;let r=Math.max(0,Math.floor(e[n]??0));r<=0||(t[n]=Math.floor((t[n]??0)+r),e[n]=0)}function yt(e,t,n,r=0){return!p(e)||n<=0||n<t?0:Math.max(0,Math.floor(r))}var bt=`idle-town:first-survival-slice:v1`,xt=6,St=900*1e3,D={minnow:1,stoneLoach:2,mudskipper:3,brookStickleback:1.25,pebblePerch:4.75,rabbit:3.5,squirrel:1.25};function Ct(){let e=window.localStorage.getItem(bt);if(!e)return je();try{let t=JSON.parse(e),n=je(),r={...n.buildings,...t.buildings??{}},i=typeof t.selectedCharacterId==`string`?t.selectedCharacterId:n.selectedCharacterId,a=Tt(t.characters,n.characters,t.characterInventory,t.characterResourceCounts,i),o=At(t.currentActions,t.currentAction),s=Et(t.actionLoops,t.currentAction,n.actionLoops),c={...n,...t,selectedCharacterId:i,inventory:{...x(),...t.inventory??{}},characterInventory:{...x(),...t.characterInventory??{}},resourceCounts:{...S(),...t.resourceCounts??{}},characterResourceCounts:{...S(),...t.characterResourceCounts??{}},tools:Ht(t.tools),buildings:r,buildingCounts:wt(t.buildingCounts,r,n.buildingCounts),campfireExpiresAt:typeof t.campfireExpiresAt==`number`?t.campfireExpiresAt:n.campfireExpiresAt,characters:a,seenResources:t.seenResources?.length?t.seenResources:n.seenResources,skills:ie(t.skills),actionLoops:s,currentActions:o,currentAction:o.find(e=>e.characterId===i)??o[0]??null,log:t.log?.length?t.log:n.log,version:xt},l=typeof t.version==`number`?t.version:1;return Lt(c,l),Rt(c,l),It(c,l),Je(c),Ye(c),c}catch{return je()}}function wt(e,t,n){let r={...ke(),...n};if(e&&typeof e==`object`){let t=e;for(let e of Object.keys(r))r[e]=Math.max(0,Math.floor(Number(t[e]??r[e])))}for(let e of Object.keys(t))t[e]&&r[e]<=0&&(r[e]=1);return r}function Tt(e,t,n,r,i){return!Array.isArray(e)||!e.length?t:e.map((e,a)=>{let o=t[a]??t[0];if(!e||typeof e!=`object`)return o;let s=e,c=s.id===i&&!s.inventory&&n&&typeof n==`object`,l=Bt(c?n:s.inventory),u=Vt(l,c?r:s.resourceCounts);return{...o,...s,locationId:Pt(s.locationId)?s.locationId:o.locationId,inventory:l,resourceCounts:u,actionLoopId:typeof s.actionLoopId==`string`?s.actionLoopId:o.actionLoopId}})}function Et(e,t,n){if(Array.isArray(e)){let t=e.map((e,t)=>Dt(e,t)).filter(e=>!!e);if(t.length)return t}let r=Ot(t);return r?[r]:n}function Dt(e,t){if(!e||typeof e!=`object`)return null;let n=e,r=Array.isArray(n.actionIds)?n.actionIds.filter(e=>Mt(e)):[];return r.length?{id:typeof n.id==`string`&&n.id?n.id:`loop-${t+1}`,name:typeof n.name==`string`&&n.name?n.name:`Loop ${t+1}`,actionIds:r,locationIds:kt(r,n.locationIds),createdAt:typeof n.createdAt==`number`?n.createdAt:Date.now(),updatedAt:typeof n.updatedAt==`number`?n.updatedAt:Date.now()}:null}function Ot(e){if(!e||typeof e!=`object`)return null;let t=e,n=Array.isArray(t.loopActionIds)?t.loopActionIds.filter(e=>Mt(e)):Mt(t.actionId)?[t.actionId]:[];if(!n.length)return null;let r=Date.now();return{id:`loop-saved-work`,name:`Saved Work Loop`,actionIds:n,locationIds:kt(n,t.loopLocationIds),createdAt:r,updatedAt:r}}function kt(e,t){let n=Array.isArray(t)?t:[];return e.map((e,t)=>{let r=n[t];return Ft(r)?r:null})}function At(e,t){return(Array.isArray(e)?e:t?[t]:[]).filter(e=>jt(e))}function jt(e){if(!e||typeof e!=`object`)return!1;let t=e;return Mt(t.actionId)&&typeof t.characterId==`string`&&Nt(t.phase)&&typeof t.startedAt==`number`&&typeof t.endsAt==`number`}function Mt(t){return typeof t==`string`&&e.some(e=>e.id===t)}function Nt(e){return e===`travelingTo`||e===`working`||e===`followUp`||e===`travelingBack`}function Pt(e){return e===`camp`||e===`meadow`||e===`river`||e===`forest`||e===`mine`}function Ft(e){return e===`meadow`||e===`river`||e===`forest`||e===`mine`}function It(e,t){let n=Date.now();if(!e.buildings.campfire){e.campfireExpiresAt=null;return}t<4&&!e.campfireExpiresAt&&(e.campfireExpiresAt=n+St),(typeof e.campfireExpiresAt!=`number`||e.campfireExpiresAt<=n)&&(e.buildings.campfire=!1,e.campfireExpiresAt=null)}function Lt(e,t){if(!(t>=2)){e.inventory.rabbit*=D.rabbit??1,e.characterInventory.rabbit*=D.rabbit??1,e.inventory.squirrel*=D.squirrel??1,e.characterInventory.squirrel*=D.squirrel??1;for(let t of e.characters)t.inventory.rabbit*=D.rabbit??1,t.inventory.squirrel*=D.squirrel??1}}function Rt(e,t){if(!(t>=xt))for(let t of u){e.resourceCounts[t]=zt(t,e.inventory[t]),e.characterResourceCounts[t]=zt(t,e.characterInventory[t]);for(let n of e.characters)n.resourceCounts[t]=zt(t,n.inventory[t])}}function zt(e,t){if(t<=0)return 0;let n=D[e]??1;return Math.max(1,Math.round(t/n))}function Bt(e){let t=x();if(!e||typeof e!=`object`)return t;let n=e;for(let e of Object.keys(t))t[e]=Number(n[e]??0);return t}function Vt(e,t){let n=S();if(t&&typeof t==`object`){let e=t;for(let t of Object.keys(n))n[t]=Math.max(0,Math.floor(Number(e[t]??0)))}for(let t of u)e[t]>0&&n[t]<=0&&(n[t]=zt(t,e[t]));return n}function Ht(e){let t=Oe();if(!e||typeof e!=`object`)return t;let r=e;for(let e of n){let n=r[e.id];if(typeof n==`boolean`){t[e.id]={owned:n,durability:n?e.maxDurability:0,quantity:0};continue}if(!n||typeof n!=`object`)continue;let i=!!n.owned,a=Number(n.durability??0),o=Number(n.quantity??0);t[e.id]={owned:i,durability:i?Math.min(e.maxDurability,Math.max(0,Math.floor(a))):0,quantity:Math.max(0,Math.floor(o))}}return t}function Ut(e){window.localStorage.setItem(bt,JSON.stringify(e))}function Wt(){return window.localStorage.removeItem(bt),je()}var Gt=900*1e3;function Kt(e,t=Date.now()){e.buildings.campfire=!0,e.campfireExpiresAt=t+Gt}function O(e,t=Date.now()){return!!(e.buildings.campfire&&Jt(e)>t)}function qt(e,t=Date.now()){let n=Jt(e);return n>t?n-t:0}function Jt(e){return e.buildings.campfire&&typeof e.campfireExpiresAt==`number`?e.campfireExpiresAt:0}function Yt(e,t=Date.now()){let n=Jt(e);return!n||n>t?!1:(e.buildings.campfire=!1,e.campfireExpiresAt=null,C(e,`The campfire burns down to charred wood.`,`muted`,n),e.updatedAt=n,e.lastSimulatedAt=n,!0)}function Xt(e){return n.find(t=>t.id===e)}function Zt(e){return Xt(e)?.maxDurability??1}function k(e,t){let n=e.tools[t];return!!(n?.owned&&n.durability>0)}function Qt(e,t){let n=e.tools[t];return!n||n.quantity<=0?!1:(--n.quantity,n.owned=!0,n.durability=Zt(t),!0)}function $t(e,t,n,r=Date.now(),i=`Cameron`){let a=e.tools[t];if(!(!a?.owned||a.durability<=0)&&(a.durability=Math.max(0,a.durability-n),a.durability===0)){let n=Xt(t)?.label??`Tool`;if(Qt(e,t)){C(e,`${n} breaks; ${i} takes a fresh one from inventory.`,`warning`,r,`character`);return}a.owned=!1,C(e,`${n} breaks. No spare remains.`,`warning`,r,`character`)}}function en(e){return e.seenResources.includes(`rabbitMeat`)||e.seenResources.includes(`squirrelMeat`)}function tn(e){return s.some(t=>e.seenResources.includes(t)||e.characters.some(e=>(e.inventory?.[t]??0)>0||(e.resourceCounts?.[t]??0)>0)||e.characterInventory[t]>0||e.inventory[t]>0||e.characterResourceCounts[t]>0||e.resourceCounts[t]>0)}function A(e,t,n=Date.now()){switch(t){case`gatherSticks`:case`gatherStones`:case`gatherFlaxFibers`:case`gatherMushrooms`:case`gatherBerries`:case`craftLowestTool`:case`craftBasket`:case`craftFishingPole`:case`craftStoneKnife`:case`craftStoneAxe`:case`craftStonePickAxe`:case`craftStoneSpear`:return!0;case`fishRiver`:return k(e,`fishingPole`);case`mineCoal`:case`mineCopper`:case`mineTin`:return k(e,`stonePickAxe`);case`chopTrees`:return k(e,`stoneAxe`);case`huntSmallAnimals`:return k(e,`stoneSpear`);case`butcherFish`:return tn(e);case`butcherRabbit`:return e.seenResources.includes(`rabbit`);case`butcherSquirrel`:return e.seenResources.includes(`squirrel`);case`cookRabbitMeat`:return O(e,n)&&e.seenResources.includes(`rabbitMeat`);case`cookSquirrelMeat`:return O(e,n)&&e.seenResources.includes(`squirrelMeat`);case`tanHide`:return e.buildings.tanningRack&&e.seenResources.includes(`hide`);case`craftLeatherBackpack`:return e.buildings.tanningRack&&e.seenResources.includes(`leather`)}}function nn(e,t){switch(t){case`fishRiver`:return`Needs Fishing Pole`;case`mineCoal`:case`mineCopper`:case`mineTin`:return`Needs Stone Pick Axe`;case`chopTrees`:return`Needs Stone Axe`;case`huntSmallAnimals`:return`Needs Stone Spear`;case`butcherFish`:return`Needs Carried Fish`;case`butcherRabbit`:return`Needs Rabbit`;case`butcherSquirrel`:return`Needs Squirrel`;case`cookRabbitMeat`:return O(e)?`Needs Rabbit Meat`:`Needs Lit Campfire`;case`cookSquirrelMeat`:return O(e)?`Needs Squirrel Meat`:`Needs Lit Campfire`;case`tanHide`:return e.buildings.tanningRack?`Needs Hide`:`Needs Tanning Rack`;case`craftLeatherBackpack`:return e.buildings.tanningRack?`Needs Leather`:`Needs Tanning Rack`;case`craftLowestTool`:return`Needs Craft Materials`;default:return``}}function rn(e,t,n=Date.now()){return!0}function an(e,t,n=Date.now()){switch(t){case`campfire`:return O(e,n)||en(e);case`tanningRack`:return e.buildings.tanningRack||e.seenResources.includes(`hide`);case`hideTent`:return e.buildings.hideTent||e.seenResources.includes(`hide`)}}function on(e,t){switch(t){case`campfire`:return`See Rabbit Meat or Squirrel Meat`;case`tanningRack`:case`hideTent`:return`See Hide`}}var sn={meadow:1e4,river:15e3,forest:3e4,mine:6e4};function j(e){return e.loopActionIds?.length?[...e.loopActionIds]:e.followUpActionId?[e.actionId,e.followUpActionId]:[e.actionId]}function M(e){return Cn(e)||e===`huntSmallAnimals`||e===`chopTrees`}function cn(e,t){return M(e)?t??`meadow`:null}function ln(e,t=j(e)){return e.loopLocationIds?.length?t.map((t,n)=>cn(t,e.loopLocationIds?.[n]??void 0)):t.map((t,n)=>n===0&&M(t)?e.locationId??`meadow`:cn(t,void 0))}function un(e,t){let n=j(e),r=n[F(t,n)];return ln(e,n)[F(t,n)]??(M(r)?`meadow`:void 0)}function dn(e,t){let n=j(e),r=n[F(t,n)];return fn(r,un(e,t))}function fn(e,t){return M(e)?t??`meadow`:`camp`}function N(e){return e.targetLocationId??e.locationId??`camp`}function pn(e,t){return e.characters.find(e=>e.id===t)?.locationId??`camp`}function P(e,t,n){let r=e.characters.find(e=>e.id===t);r&&(r.locationId=n)}function mn(e,t){return e.phase===`travelingTo`||e.phase===`travelingBack`?e.originLocationId??t:N(e)}function hn(e){return e===`camp`?`camp`:`the ${e}`}function gn(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function _n(e,t){let n=j(e);return n[F(t,n)]??e.actionId}function vn(e){let t=j(e);return F(e.nextLoopIndex??e.loopIndex??0,t)}function yn(e){return xn(e,e.loopIndex??0)}function bn(e){return xn(e,e.loopIndex??0)}function xn(e,t){let n=j(e);if(n.length<=1)return F(t,n);let r=(F(t,n)+1)%n.length;for(;n[r]===`butcherFish`&&r!==t;)r=(r+1)%n.length;return r}function F(e,t){return t.length?Math.min(t.length-1,Math.max(0,Math.floor(e))):0}function Sn(e,t){return e===t?0:Tn(e)+Tn(t)}function Cn(e){return e===`gatherSticks`||e===`gatherStones`||e===`gatherFlaxFibers`||e===`gatherMushrooms`||e===`gatherBerries`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`||e===`fishRiver`}function wn(e){return sn[e]}function Tn(e){return e===`camp`?0:wn(e)}function I(e){return Array.isArray(e.currentActions)||(e.currentActions=e.currentAction?[e.currentAction]:[]),e.currentActions}function L(e,t=e.selectedCharacterId){return I(e).find(e=>e.characterId===t)??null}function En(e){let t=I(e);e.currentAction=t.find(t=>t.characterId===e.selectedCharacterId)??t[0]??null}function R(e,t){let n=I(e),r=n.findIndex(e=>e.characterId===t.characterId);r>=0?n[r]=t:n.push(t),e.currentActions=n,On(e,!0,t.characterId),En(e)}function z(e,t){e.currentActions=I(e).filter(e=>e.characterId!==t),On(e,!1,t),En(e)}function Dn(e){return[...I(e)].sort((e,t)=>e.endsAt===t.endsAt?e.characterId.localeCompare(t.characterId):e.endsAt-t.endsAt)[0]??null}function B(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function V(e,t){return e.characters.find(e=>e.id===t)?.name??`Someone`}function On(e,t,n=e.selectedCharacterId){let r=e.characters.find(e=>e.id===n);r&&(r.condition=t?`working`:`resting`)}function kn(e,t=Date.now()){Fn(e,t);let n=e.actionLoops.length+1,r={id:`loop-${t.toString(36)}-${Math.random().toString(36).slice(2,7)}`,name:`Loop ${n}`,actionIds:[`gatherSticks`],locationIds:[`meadow`],createdAt:t,updatedAt:t};return e.actionLoops.push(r),B(e,t),r}function An(e,t,n=Date.now()){if(Fn(e,n),e.actionLoops.length<=1)return e.actionLoops[0]?.id??null;let r=e.actionLoops.findIndex(e=>e.id===t);if(r<0)return e.actionLoops[0]?.id??null;e.actionLoops.splice(r,1);for(let n of e.characters)n.actionLoopId===t&&(n.actionLoopId=void 0);return B(e,n),e.actionLoops[Math.max(0,r-1)]?.id??e.actionLoops[0]?.id??null}function H(e,t){return Fn(e),e.actionLoops.find(e=>e.id===t)??e.actionLoops[0]??null}function jn(e,t,n){let r=Ln(t,e);return n===`butcherFish`?e.actionIds[r]===`fishRiver`:!0}function Mn(e,t,n,r,i={},a=Date.now()){let o=H(e,t);if(!o||!jn(o,n,r))return!1;let s=Ln(n,o)+1;return o.actionIds.splice(s,0,r),o.locationIds.splice(s,0,cn(r,i.locationId)),o.updatedAt=a,In(e,o),B(e,a),!0}function Nn(e,t,n,r=Date.now()){let i=H(e,t);if(!i||i.actionIds.length<=1)return 0;let a=Ln(n,i);return i.actionIds.splice(a,1),i.locationIds.splice(a,1),i.updatedAt=r,In(e,i),B(e,r),Math.max(0,a-1)}function Pn(e){return e.actionIds.map((t,n)=>cn(t,e.locationIds[n]??void 0))}function Fn(e,t=Date.now()){if(Array.isArray(e.actionLoops)&&e.actionLoops.length)return;let n=e.currentAction?.loopActionIds?.length?{actionIds:[...e.currentAction.loopActionIds],locationIds:[...e.currentAction.loopLocationIds??[]]}:{actionIds:[`gatherSticks`],locationIds:[`meadow`]};e.actionLoops=[{id:`loop-forage-sticks`,name:`Forage Sticks`,actionIds:n.actionIds,locationIds:n.actionIds.map((e,t)=>cn(e,n.locationIds[t]??void 0)),createdAt:t,updatedAt:t}]}function In(e,t){for(let n of e.characters){if(n.actionLoopId!==t.id)continue;let r=L(e,n.id);if(!r)continue;let i=F(r.loopIndex??0,t.actionIds);R(e,{...r,loopActionIds:[...t.actionIds],loopLocationIds:Pn(t),loopIndex:i})}}function Ln(e,t){return t.actionIds.length?Math.min(t.actionIds.length-1,Math.max(0,Math.floor(e))):0}function Rn(e,t,n){return Math.min(n,Math.max(t,e))}function U(e,t){return Math.floor(Math.random()*(t-e+1))+e}function zn(e,t,n=1){let r=10**n;return Math.round((Math.random()*(t-e)+e)*r)/r}function W(e){let t=Math.max(0,Math.ceil(e/1e3));if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}var Bn=[{actionId:`craftBasket`,toolId:`basket`},{actionId:`craftFishingPole`,toolId:`fishingPole`},{actionId:`craftStoneKnife`,toolId:`stoneKnife`},{actionId:`craftStoneAxe`,toolId:`stoneAxe`},{actionId:`craftStonePickAxe`,toolId:`stonePickAxe`},{actionId:`craftStoneSpear`,toolId:`stoneSpear`}],Vn=[{id:`minnow`,minWeight:.5,maxWeight:1.5},{id:`stoneLoach`,minWeight:1,maxWeight:3},{id:`mudskipper`,minWeight:1.5,maxWeight:4.5},{id:`brookStickleback`,minWeight:.5,maxWeight:2},{id:`pebblePerch`,minWeight:2,maxWeight:7.5}],Hn=[{id:`rabbit`,minWeight:2,maxWeight:5},{id:`squirrel`,minWeight:.5,maxWeight:2}];function G(e){return n.find(t=>t.id===e)?.recipe??{}}function Un(e,t){let n=e.tools[t];return(n?.quantity??0)+ +!!n?.owned}function Wn(e,t){switch(t){case`gatherSticks`:{let e=U(1,3);return{resources:{stick:e},message:`Cameron gathers ${e} ${nr(`Stick`,e)}.`,tone:`gain`}}case`gatherStones`:{let e=U(1,2);return{resources:{stone:e},message:`Cameron finds ${e} ${nr(`Stone`,e)}.`,tone:`gain`}}case`gatherFlaxFibers`:{let e=U(1,3);return{resources:{flaxFiber:e},message:`Cameron pulls ${e} ${nr(`Flax Fiber`,e)} from the brush.`,tone:`gain`}}case`gatherMushrooms`:{let e=U(1,3);return{resources:{mushroom:e},message:`Cameron gathers ${e} ${nr(`Mushroom`,e)} from the meadow shade.`,tone:`gain`}}case`gatherBerries`:{let e=U(2,5);return{resources:{berry:e},message:`Cameron picks ${e} ${e===1?`Berry`:`Berries`} from the brambles.`,tone:`gain`}}case`mineCoal`:return $n(`coal`);case`mineCopper`:return $n(`copper`);case`mineTin`:return $n(`tin`);case`fishRiver`:return Qn();case`craftLowestTool`:case`craftBasket`:case`craftFishingPole`:case`craftStoneKnife`:case`craftStoneAxe`:case`craftStonePickAxe`:case`craftStoneSpear`:case`craftLeatherBackpack`:return{resources:{},message:`Cameron finishes a tool.`,tone:`craft`};case`chopTrees`:{let e=U(2,4),t=+(Math.random()<.35);return{resources:{wood:e,stick:t},message:`Cameron chops ${e} ${nr(`Wood`,e)}${t?` and saves a usable stick`:``}.`,tone:`gain`}}case`huntSmallAnimals`:return er();case`butcherFish`:return{resources:{},message:`Cameron butchers carried fish.`,tone:`gain`};case`butcherRabbit`:return tr(e,`rabbit`);case`butcherSquirrel`:return tr(e,`squirrel`);case`cookRabbitMeat`:return{resources:{cookedRabbitMeat:1},message:`Cameron cooks rabbit meat over the coals.`,tone:`craft`};case`cookSquirrelMeat`:return{resources:{cookedSquirrelMeat:1},message:`Cameron cooks squirrel meat over the coals.`,tone:`craft`};case`tanHide`:return{resources:{leather:1},message:`Cameron works a hide into rough leather.`,tone:`craft`}}}function Gn(e){switch(e){case`craftBasket`:return`basket`;case`craftFishingPole`:return`fishingPole`;case`craftStoneKnife`:return`stoneKnife`;case`craftStoneAxe`:return`stoneAxe`;case`craftStonePickAxe`:return`stonePickAxe`;case`craftStoneSpear`:return`stoneSpear`;case`craftLeatherBackpack`:return`leatherBackpack`;default:return null}}function Kn(e,t,r,i,a){let o=n.find(e=>e.id===i);o&&(e.tools[i].quantity+=1,k(e,i)||Qt(e,i),Ie(e,{aggregateKey:`craft:${t}:${i}`,text:`${r} crafted ${rr(o.label)}`,amount:1,unit:rr(o.label),tone:`craft`,now:a,scope:`character`}))}function qn(e,t,n,r){let i=Zn(e,t);Object.values(i).some(e=>(e??0)>0)&&Ie(e,{aggregateKey:`action:${t}:butcherFish`,text:`${n} butchered fish`,resources:i,tone:`gain`,now:r,scope:`character`})}function Jn(e,t=e.selectedCharacterId){return s.some(n=>st(e,n,`character`,t))}function Yn(e,t,n,r){switch(t){case`fishRiver`:$t(e,`fishingPole`,1,n,r);break;case`mineCoal`:case`mineCopper`:case`mineTin`:$t(e,`stonePickAxe`,1,n,r);break;case`chopTrees`:$t(e,`stoneAxe`,1,n,r);break;case`huntSmallAnimals`:$t(e,`stoneSpear`,1,n,r);break;case`butcherRabbit`:case`butcherSquirrel`:$t(e,`stoneKnife`,1,n,r);break;default:break}}function Xn(e,t=`Cameron`){switch(e){case`gatherSticks`:return`${t} gathered sticks`;case`gatherStones`:return`${t} gathered stones`;case`gatherFlaxFibers`:return`${t} gathered flax fibers`;case`gatherMushrooms`:return`${t} gathered mushrooms`;case`gatherBerries`:return`${t} gathered berries`;case`mineCoal`:return`${t} mined coal`;case`mineCopper`:return`${t} mined copper`;case`mineTin`:return`${t} mined tin`;case`fishRiver`:return`${t} caught river fish`;case`craftBasket`:return`${t} crafted baskets`;case`craftLowestTool`:return`${t} balanced tool stock`;case`craftFishingPole`:return`${t} crafted fishing poles`;case`craftStoneKnife`:return`${t} crafted stone knives`;case`craftStoneAxe`:return`${t} crafted stone axes`;case`craftStonePickAxe`:return`${t} crafted stone pick axes`;case`craftStoneSpear`:return`${t} crafted stone spears`;case`craftLeatherBackpack`:return`${t} crafted leather backpacks`;case`chopTrees`:return`${t} chopped trees`;case`huntSmallAnimals`:return`${t} hunted small animals`;case`butcherFish`:return`${t} butchered fish`;case`butcherRabbit`:return`${t} butchered rabbits`;case`butcherSquirrel`:return`${t} butchered squirrels`;case`cookRabbitMeat`:return`${t} cooked rabbit meat`;case`cookSquirrelMeat`:return`${t} cooked squirrel meat`;case`tanHide`:return`${t} tanned hide`}}function Zn(e,t){let n={},r=T(e,t);for(let i of s){let a=l[i];if(!a||!st(e,i,`character`,t))continue;let o=m(a,ct(e,i,`character`,t)*.5);return o<=0?n:(r[a]=m(a,r[a]+o),n[a]=m(a,(n[a]??0)+o),e.seenResources.includes(a)||e.seenResources.push(a),n)}return n}function Qn(){let e=Vn[U(0,Vn.length-1)],t=zn(e.minWeight,e.maxWeight,1),n=g(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron catches a ${h(e.id,t)} lb ${n}.`,tone:`gain`}}function $n(e){let t=g(e);return{resources:{[e]:1},message:`Cameron mines 1 ${t}.`,tone:`gain`}}function er(){let e=Hn[Math.random()<.58?0:1],t=zn(e.minWeight,e.maxWeight,1),n=g(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron brings back a ${h(e.id,t)} lb ${n}.`,tone:`gain`}}function tr(e,t){if(ct(e,t)<=0)return{resources:{},message:`Cameron has no ${t} to butcher.`,tone:`gain`};let n=t===`rabbit`?`rabbitMeat`:`squirrelMeat`,r=t===`rabbit`?U(1,2):1,i=k(e,`stoneKnife`),a=t===`rabbit`?.65:.42,o=t===`rabbit`?.24:.14,s=+(Math.random()<a),c=+(Math.random()<o),l={[n]:r,hide:i?s:0,bone:i?c:0},u=Object.entries({hide:s,bone:c}).filter(([,e])=>i&&e>0).map(([e,t])=>`${t} ${g(e)}`);return{resources:l,message:`Cameron butchers a ${t} for ${r} ${g(n)}${u.length?`, plus ${u.join(` and `)}`:``}.`,tone:`gain`}}function nr(e,t){return t===1?e:`${e}s`}function rr(e){return e.endsWith(`s`)?e:`${e}s`}var ir=7200*1e3;function ar(e,t=Date.now()){let n=Bn.filter(({actionId:n})=>A(e,n,t)&&w(e,K(n)));return n.length?n.reduce((t,n)=>Un(e,n.toolId)<Un(e,t.toolId)?n:t,n[0]).actionId:null}function or(e,t,n=e.selectedCharacterId,r=Date.now()){let i=H(e,t),a=e.characters.find(e=>e.id===n);return!i||!a?!1:(a.actionLoopId=i.id,sr(e,i.id,n,r))}function sr(e,t,n=e.selectedCharacterId,r=Date.now()){let i=H(e,t);return i?.actionIds.length?br(e,{actionId:i.actionIds[0],characterId:n,phase:`working`,loopActionIds:[...i.actionIds],loopLocationIds:Pn(i),loopIndex:0,startedAt:r,endsAt:r,repeat:!0},0,r):!1}function K(e){switch(e){case`cookRabbitMeat`:return{rabbitMeat:1};case`cookSquirrelMeat`:return{squirrelMeat:1};case`tanHide`:return{hide:1};case`craftLowestTool`:return{};case`craftBasket`:return G(`basket`);case`craftFishingPole`:return G(`fishingPole`);case`craftStoneKnife`:return G(`stoneKnife`);case`craftStoneAxe`:return G(`stoneAxe`);case`craftStonePickAxe`:return G(`stonePickAxe`);case`craftStoneSpear`:return G(`stoneSpear`);case`craftLeatherBackpack`:return G(`leatherBackpack`);default:return{}}}function q(e,t,n=Date.now(),r=e.selectedCharacterId){return t===`craftLowestTool`?A(e,t,n)&&!!ar(e,n):t===`butcherFish`?A(e,t,n)&&Jn(e,r):t===`butcherRabbit`?A(e,t,n)&&st(e,`rabbit`):t===`butcherSquirrel`?A(e,t,n)&&st(e,`squirrel`):A(e,t,n)&&w(e,K(t))}function cr(e,n,r=Date.now(),i={}){let a=t(n),o=e.selectedCharacterId;if(!a||!q(e,n,r,o))return!1;let s=fn(n,i.locationId),c=pn(e,o),l=Sn(c,s),u={actionId:n,characterId:o,phase:l>0?`travelingTo`:`working`,originLocationId:c,targetLocationId:s,locationId:s===`camp`?void 0:s,loopActionIds:[n],loopLocationIds:[s===`camp`?null:s],loopIndex:0,startedAt:r,endsAt:r+(l||a.durationMs),repeat:!0};return l<=0&&P(e,o,s),R(e,u),B(e,r),!0}function lr(e,n=Date.now()){let r=L(e);if(!r)return;let i=t(r.actionId),a=mn(r,pn(e,r.characterId));if(P(e,r.characterId,a),a!==`camp`){R(e,{...r,phase:`travelingBack`,originLocationId:a,targetLocationId:`camp`,locationId:a,startedAt:n,endsAt:n+Sn(a,`camp`),repeat:!1}),B(e,n),C(e,`${V(e,r.characterId)} stops ${i?.verb??`working`} at ${hn(a)} and heads back to camp.`,`muted`,n,`character`);return}let o=a===`camp`?ur(e,n,r.characterId):!1;z(e,r.characterId),B(e,n),C(e,o?`${V(e,r.characterId)} stops ${i?.verb??`working`} and returns to camp.`:`${V(e,r.characterId)} stops ${i?.verb??`working`} at ${hn(a)}.`,`muted`,n,`character`)}function ur(e,t=Date.now(),n=e.selectedCharacterId){if(pn(e,n)!==`camp`)return!1;let r=at(e,n);return Object.keys(r).length<=0?!1:(Ie(e,{aggregateKey:`deposit:camp`,text:`${V(e,n)} returned resources to camp`,resources:r,tone:`gain`,now:t,scope:`character`}),B(e,t),!0)}function dr(e,t=Date.now()){let n=Math.min(t,e.lastSimulatedAt+ir);En(e);let r=0;for(;r<500;){let t=Cr(e,n),i=Dn(e),a=i?.endsAt??1/0;if(t===null&&a>n)break;if(t!==null&&t<=a){Yt(e,t);for(let n of[...I(e)])Sr(gn(n))&&(C(e,`${V(e,n.characterId)} stops cooking as the campfire goes out.`,`warning`,t,`character`),z(e,n.characterId));continue}if(i&&a<=n){let t=i,a=t.endsAt;pr(e,t,a,n),r+=1;continue}break}t>n&&r>0&&C(e,`The saved trail grows quiet after two hours away.`,`muted`,n,`character`),e.lastSimulatedAt=t,e.updatedAt=t;for(let t of e.characters)L(e,t.id)||On(e,!1,t.id);En(e)}function fr(e,t=Date.now(),n=e.selectedCharacterId){let r=L(e,n);if(!r)return 0;let i=r.endsAt-r.startedAt;return i<=0?1:(t-r.startedAt)/i}function pr(e,t,n,r){if(t.phase===`travelingTo`){me(e,t.endsAt-t.startedAt,n),P(e,t.characterId,N(t)),gr(e,t,n);return}if(t.phase===`travelingBack`){if(me(e,t.endsAt-t.startedAt,n),P(e,t.characterId,`camp`),ur(e,n,t.characterId),t.repeat&&br(e,t,vn(t),n))return;if(t.repeat&&q(e,t.actionId,n,t.characterId)){_r(e,t,n);return}z(e,t.characterId);return}if(t.phase===`followUp`){mr(e,t,n,r);return}hr(e,t,n)}function mr(e,t,n,r){let i=gn(t);if(i!==`butcherFish`){vr(e,t,r,bn(t));return}if(qn(e,t.characterId,V(e,t.characterId),n),fe(e,i,n),Jn(e,t.characterId)){yr(e,t,t.loopIndex??0,n);return}vr(e,t,r,bn(t))}function hr(e,t,n){let r=Tr(e,t.actionId,n);if(!r){C(e,`${V(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),z(e,t.characterId);return}let i=K(r);if(!w(e,i)){C(e,`${V(e,t.characterId)} lacks the materials to continue.`,`warning`,n,`character`),z(e,t.characterId);return}if(Xe(e,i),r===`butcherFish`){if(qn(e,t.characterId,V(e,t.characterId),n),fe(e,r,n),t.repeat&&q(e,r,n,t.characterId)){gr(e,t,n);return}z(e,t.characterId);return}let a=Gn(r);if(a){if(Kn(e,t.characterId,V(e,t.characterId),a,n),fe(e,r,n),t.repeat&&q(e,r,n,t.characterId)){gr(e,t,n);return}z(e,t.characterId);return}let o=Wn(e,r),s=M(r)?it(e,o.resources,o.resourceCounts,t.characterId):o.resources;if(M(r)?xr(e,t.characterId,r,s,n):(Ze(e,o.resources,o.resourceCounts),Ie(e,{aggregateKey:`action:${t.characterId}:${r}`,text:Xn(r,V(e,t.characterId)),resources:o.resources,tone:o.tone,now:n,scope:`character`})),Yn(e,r,n,V(e,t.characterId)),fe(e,r,n),M(r)&&wr(o.resources,s,e,t.characterId)){let i=yn(t);if(r===`fishRiver`&&_n(t,i)===`butcherFish`&&Jn(e,t.characterId)){yr(e,t,i,n);return}vr(e,t,n,bn(t));return}if(!M(r)&&j(t).length>1){br(e,t,bn(t),n);return}if(t.repeat&&q(e,r,n,t.characterId)){gr(e,t,n);return}z(e,t.characterId)}function gr(e,n,r){let i=t(n.actionId);if(!i){z(e,n.characterId);return}let a=N(n);P(e,n.characterId,a),R(e,{...n,phase:`working`,originLocationId:a,targetLocationId:a,locationId:a===`camp`?void 0:a,startedAt:r,endsAt:r+i.durationMs})}function _r(e,t,n){let r=dn(t,t.loopIndex??0),i=pn(e,t.characterId),a=Sn(i,r);if(a<=0){gr(e,{...t,targetLocationId:r,locationId:r===`camp`?void 0:r},n);return}R(e,{...t,phase:`travelingTo`,originLocationId:i,targetLocationId:r,locationId:r===`camp`?void 0:r,startedAt:n,endsAt:n+a})}function vr(e,t,n,r=bn(t)){let i=N(t);R(e,{...t,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i===`camp`?void 0:i,nextLoopIndex:r,startedAt:n,endsAt:n+Sn(i,`camp`)})}function yr(e,n,r,i){let a=_n(n,r),o=t(a);if(!o){vr(e,n,i,bn(n));return}R(e,{...n,actionId:a,phase:`followUp`,originLocationId:N(n),targetLocationId:N(n),loopIndex:r,startedAt:i,endsAt:i+o.durationMs})}function br(e,n,r,i){let a=j(n);if(!a.length)return!1;let o=F(r,a),s=a[o];if(s===`butcherFish`||!q(e,s,i,n.characterId)){let t=xn(n,o);return t===o?!1:br(e,n,t,i)}let c=t(s);if(!c)return!1;let l=dn(n,o),u=pn(e,n.characterId),d=Sn(u,l);return R(e,{...n,actionId:s,phase:d>0?`travelingTo`:`working`,originLocationId:u,targetLocationId:l,locationId:l===`camp`?void 0:l,loopActionIds:a,loopLocationIds:ln(n,a),loopIndex:o,nextLoopIndex:void 0,followUpActionId:void 0,startedAt:i,endsAt:i+(d||c.durationMs)}),d<=0&&P(e,n.characterId,l),!0}function xr(e,t,n,r,i){Object.values(r).some(e=>(e??0)>0)&&Ie(e,{aggregateKey:`action:${t}:${n}`,text:Xn(n,V(e,t)),resources:r,tone:`gain`,now:i,scope:`character`})}function Sr(e){return e===`cookRabbitMeat`||e===`cookSquirrelMeat`}function Cr(e,t){let n=Jt(e);return n&&n<=t?n:null}function wr(e,t,n,r){let i=Object.values(e).reduce((e,t)=>e+(t??0),0),a=Object.values(t).reduce((e,t)=>e+(t??0),0);return nt(n,r)>=rt(n,r)||i>0&&a<i}function Tr(e,t,n){return t===`craftLowestTool`?ar(e,n):t}e.map(e=>e.id);var Er=``+new URL(`bone-icon-DsPaT320.png`,import.meta.url).href,Dr=``+new URL(`brook-stickleback-icon-CwY54faB.png`,import.meta.url).href,Or=``+new URL(`basket-empty-slot-BQ3m_a4i.png`,import.meta.url).href,kr=``+new URL(`basket-equipped-slot-DPu5tuXe.png`,import.meta.url).href,Ar=``+new URL(`camp-location-icon--vnRMwCB.png`,import.meta.url).href,jr=``+new URL(`campfire-2x2-Bq-ELFVu.png`,import.meta.url).href,Mr=``+new URL(`campfire-unlit-2x2-HI8ea9KO.png`,import.meta.url).href,Nr=``+new URL(`coal-icon-CPItI7lv.png`,import.meta.url).href,Pr=``+new URL(`copper-icon-Dl9RQPBM.png`,import.meta.url).href,Fr=``+new URL(`craft-materials-bundle-button-D-JGRyoh.png`,import.meta.url).href,J=``+new URL(`fish-filet-icon-BHEr_iIj.png`,import.meta.url).href,Ir=``+new URL(`fishing-pole-empty-slot-CBM-0Us1.png`,import.meta.url).href,Lr=``+new URL(`fishing-pole-equipped-slot-BoLpLWOS.png`,import.meta.url).href,Rr=``+new URL(`flax-fiber-icon-xz-yYl-m.png`,import.meta.url).href,zr=``+new URL(`forest-location-icon-VKGIFi31.png`,import.meta.url).href,Br=``+new URL(`berry-icon-DEz1wEqt.png`,import.meta.url).href,Vr=``+new URL(`hide-icon-BWeGfM2U.png`,import.meta.url).href,Hr=``+new URL(`leather-backpack-equipped-slot-DhoXwslM.png`,import.meta.url).href,Ur=``+new URL(`meadow-location-icon-v2-CqdYJu9g.png`,import.meta.url).href,Wr=``+new URL(`mine-location-icon-BbZJUyhx.png`,import.meta.url).href,Gr=``+new URL(`minnow-icon-ANpglcnc.png`,import.meta.url).href,Kr=``+new URL(`mudskipper-icon-_bxkPxea.png`,import.meta.url).href,qr=``+new URL(`mushroom-icon-B9zVCy80.png`,import.meta.url).href,Jr=``+new URL(`pebble-perch-icon-CHh-9clF.png`,import.meta.url).href,Yr=``+new URL(`rabbit-icon-DGNcKYc7.png`,import.meta.url).href,Xr=``+new URL(`river-location-icon-v2-BqOU5iqQ.png`,import.meta.url).href,Zr=``+new URL(`squirrel-icon-BM6RAXNK.png`,import.meta.url).href,Qr=``+new URL(`stick-icon-Q8m3FMqw.png`,import.meta.url).href,$r=``+new URL(`stone-axe-empty-slot-C8iH4xki.png`,import.meta.url).href,ei=``+new URL(`stone-axe-equipped-slot-BwqHFyCM.png`,import.meta.url).href,ti=``+new URL(`stone-knife-equipped-slot-I-QJxd8H.png`,import.meta.url).href,ni=``+new URL(`stone-knife-empty-slot-Bc5j7Rbw.png`,import.meta.url).href,ri=``+new URL(`stone-pick-axe-empty-slot-DOLVpXRk.png`,import.meta.url).href,ii=``+new URL(`stone-pick-axe-equipped-slot-Cn17-ZkZ.png`,import.meta.url).href,ai=``+new URL(`stone-spear-empty-slot-BTpRxmYT.png`,import.meta.url).href,oi=``+new URL(`stone-spear-equipped-slot-q16KfMg3.png`,import.meta.url).href,si=``+new URL(`stone-icon-yRG7nuNE.png`,import.meta.url).href,ci=``+new URL(`stone-loach-icon-4ySXaf0_.png`,import.meta.url).href,li=``+new URL(`tin-icon-B9xoPCj0.png`,import.meta.url).href,ui=``+new URL(`hide-tent-2x2-B-STXQiW.png`,import.meta.url).href,di=``+new URL(`tanning-rack-2x2-DotflpMM.png`,import.meta.url).href,fi=``+new URL(`wood-icon-CxwJtOlQ.png`,import.meta.url).href;function pi(e,t,n=Date.now()){Yt(e,n);let i=r.find(e=>e.id===t),a=t===`campfire`?O(e,n):t===`hideTent`?!1:e.buildings[t];if(!i||a||e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`||!an(e,t,n)||!w(e,i.recipe))return!1;if(Xe(e,i.recipe),t===`campfire`)Kt(e,n),Ge(e,t,1),C(e,`Cameron builds a campfire and brings it to flame.`,`craft`,n);else if(t===`hideTent`){let r=We(e,t);e.buildings[t]=!0,C(e,`Cameron raises hide tent ${r}.`,`craft`,n),Je(e,n)}else e.buildings[t]=!0,Ge(e,t,1),C(e,`Cameron builds a ${i.label}.`,`craft`,n);return pe(e,t,n),hi(e,n),!0}function mi(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-e.inventory[t]);a>0&&(n[t]=a)}return E(n)}function hi(e,t){e.updatedAt=t,e.lastSimulatedAt=t}var gi=[{id:`foraging`,label:`Forage`,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxFibers`,`gatherMushrooms`,`gatherBerries`]},{id:`fishing`,label:`Fishing`,actionIds:[`fishRiver`]},{id:`mining`,label:`Mining`,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]},{id:`hunting`,label:`Hunting`,actionIds:[`huntSmallAnimals`]},{id:`woodcutting`,label:`Woodcutting`,actionIds:[`chopTrees`]},{id:`crafting`,label:`Crafting`,actionIds:[`craftLowestTool`,`craftBasket`,`craftFishingPole`,`craftStoneKnife`,`craftStoneAxe`,`craftStonePickAxe`,`craftStoneSpear`]},{id:`butchering`,label:`Butchering`,actionIds:[`butcherFish`,`butcherRabbit`,`butcherSquirrel`]},{id:`cooking`,label:`Cooking`,actionIds:[`cookRabbitMeat`,`cookSquirrelMeat`]},{id:`leatherworking`,label:`Leatherworking`,actionIds:[`tanHide`,`craftLeatherBackpack`]}],_i=[{id:`gather`,label:`Gather`,filterIds:[`foraging`,`mining`,`fishing`,`hunting`,`woodcutting`]},{id:`processing`,label:`Processing`,filterIds:[`crafting`,`butchering`,`cooking`,`leatherworking`]},{id:`camp`,label:`Camp`,filterIds:[]}],vi={crafting:`crafting`,foraging:`foraging`,mining:`mining`,fishing:`fishing`,woodcutting:`woodcutting`,hunting:`hunting`,butchering:`butchering`,cooking:`cooking`,leatherworking:`leatherworking`},yi=[{label:`Gather`,skillIds:[`foraging`,`mining`,`fishing`,`woodcutting`,`hunting`]},{label:`Process`,skillIds:[`crafting`,`butchering`,`cooking`,`leatherworking`]},{label:`Combat`,skillIds:[]},{label:`Other`,skillIds:[`construction`,`agility`]}],Y=[{id:`meadow`,label:`Meadow`,iconUrl:Ur,actionIds:[`gatherSticks`,`gatherStones`,`gatherMushrooms`,`gatherBerries`]},{id:`river`,label:`River`,iconUrl:Xr,actionIds:[`gatherStones`,`gatherFlaxFibers`]},{id:`forest`,label:`Forest`,iconUrl:zr,actionIds:[`chopTrees`]},{id:`mine`,label:`Mine`,iconUrl:Wr,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]}],bi={label:`Camp`,iconUrl:Ar},xi=`./Map.png`,Si={camp:{x:746,y:603},meadow:{x:260,y:793},river:{x:1327,y:810},forest:{x:410,y:270},mine:{x:1080,y:270}},Ci={meadow:`M746 603 C656 666 566 716 456 751 C381 777 318 790 260 793`,river:`M746 603 C860 646 994 715 1128 807 C1190 850 1262 841 1327 810`,forest:`M746 603 C676 558 612 506 565 424 C529 360 483 306 410 270`,mine:`M746 603 C824 540 870 482 900 407 C927 338 992 290 1080 270`},wi={meadow:`M260 793 C318 790 381 777 456 751 C566 716 656 666 746 603`,river:`M1327 810 C1262 841 1190 850 1128 807 C994 715 860 646 746 603`,forest:`M410 270 C483 306 529 360 565 424 C612 506 676 558 746 603`,mine:`M1080 270 C992 290 927 338 900 407 C870 482 824 540 746 603`},Ti=10,Ei=[`fishingPole`,`stoneKnife`,`stoneAxe`,`stonePickAxe`,`stoneSpear`,`basket`,`leatherBackpack`,null,null,null],Di=[{label:`Armor`,slots:[`Head`,`Face`,`Neck`,`Shoulders`,`Chest`,`Backpack`,`Cape`,`Arms`,`Hands`,`Waist`,`Legs`,`Feet`]},{label:`Accessories`,slots:[`Ring Slot 1`,`Ring Slot 2`,`Toe Ring 1`,`Toe Ring 2`,`Bracelet 1`,`Bracelet 2`,`Earring 1`,`Earring 2`]},{label:`Held Gear`,slots:[`Main Hand`,`Off Hand`,`Quiver`,`Ammo Belt`]}],Oi={basket:kr,fishingPole:Lr,leatherBackpack:Hr,stoneKnife:ti,stoneAxe:ei,stonePickAxe:ii,stoneSpear:oi},ki={basket:Or,fishingPole:Ir,stoneKnife:ni,stoneAxe:$r,stonePickAxe:ri,stoneSpear:ai},Ai={basket:`Basket`,fishingPole:`Pole`,leatherBackpack:`Backpack`,stoneKnife:`Knife`,stoneAxe:`Axe`,stonePickAxe:`Pick`,stoneSpear:`Spear`},ji={berry:Br,bone:Er,brookStickleback:Dr,brookSticklebackFilet:J,coal:Nr,copper:Pr,minnowFilet:J,mudskipperFilet:J,pebblePerchFilet:J,stoneLoachFilet:J,flaxFiber:Rr,hide:Vr,minnow:Gr,mudskipper:Kr,mushroom:qr,pebblePerch:Jr,rabbit:Yr,squirrel:Zr,stick:Qr,stone:si,stoneLoach:ci,tin:li,wood:fi},Mi={basket:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+5 lb carry capacity`},{label:`Capacity`,value:`15 lb equipped`}],leatherBackpack:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+15 lb carry capacity`},{label:`Capacity`,value:`25 lb equipped`}],fishingPole:[{label:`Slot`,value:`Fishing tool`},{label:`Effect`,value:`Fishing River unlocked`},{label:`Use`,value:`River fishing`}],stoneKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Unlocks`,value:`Hide and bone recovery`},{label:`Use`,value:`Butchering small animals`}],stoneAxe:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Chop Trees unlocked`},{label:`Wood yield`,value:`2-4`}],stonePickAxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Future mining work`},{label:`Use`,value:`Breaking stone`}],stoneSpear:[{label:`Slot`,value:`Hunting tool`},{label:`Effect`,value:`Hunt Small Animals unlocked`},{label:`Targets`,value:`Rabbit, Squirrel`}]};function Ni(e,t){let n=`gather`,r=`foraging`,i=`meadow`,a=`inventory`,o=!1,s=!1,c=!1,l=!1,u=!1,d=!1,f=null,p=null,m=0,h=null,g=null;return e.addEventListener(`click`,e=>{let g=e.target.closest(`[data-command]`);if(!g||g.disabled||g.dataset.disabled===`true`)return;let _=g.dataset.command,v=g.dataset.id,y=h;if(y){if(_===`toggle-test-speed`){t.toggleTestSpeed(),t.requestRender();return}if(_===`set-action-category`&&wa(v)){s=!1,c=!1,l=!1,u=!1,d=!1,n=v;let e=Ca(n);e.length&&!e.some(e=>e.id===r)&&(r=e[0]?.id??r),t.requestRender();return}if(_===`set-action-filter`&&Ta(v)){s=!1,c=!1,l=!1,u=!1,d=!1,r=v,t.requestRender();return}if(_===`set-location`&&ka(v)){s=!1,c=!1,l=!1,u=!1,d=!1,i=v,t.requestRender();return}if(_===`set-character-detail-tab`&&Aa(v)){a=v,o=!1,s=!1,c=!1,l=!0,u=!1,d=!1,t.requestRender();return}if(_===`toggle-camp-log`){o=!o,s=!1,c=!1,l=!1,u=!1,d=!1,t.requestRender();return}if(_===`open-map`){o=!1,s=!0,c=!1,l=!1,u=!1,d=!1,t.requestRender();return}if(_===`open-character-panel`){o=!1,s=!1,c=!0,l=!1,u=!1,d=!1,t.requestRender();return}if(_===`open-character-details`){o=!1,s=!1,c=!1,l=!0,u=!1,d=!1,t.requestRender();return}if(_===`open-settings`){o=!1,s=!1,c=!1,l=!1,d=!1,u=!0,t.requestRender();return}if(_===`open-action-loops`){o=!1,s=!1,c=!1,l=!1,u=!1,d=!0,t.requestRender();return}if(_===`select-character`&&v&&y.characters.some(e=>e.id===v)){y.selectedCharacterId=v,p=Oa(y)??p,c=!0,l=!1,t.persist(),t.requestRender();return}if(_===`select-loop-step`){p=Da(g,y,p),m=Ea(v,m),f=null,t.requestRender();return}if(_===`insert-loop-after`){let e=Da(g,y,p);if(!e)return;p=e,m=Ea(v,m),f={loopId:e,afterIndex:m},d=!1,t.requestRender();return}if(_===`remove-loop-step`){let e=Da(g,y,p);if(!e)return;p=e,m=Nn(y,e,Ea(v,m),t.getNow()),f=null,t.persist(),t.requestRender();return}if(_===`create-loop`){p=kn(y,t.getNow()).id,m=0,f=null,t.persist(),t.requestRender();return}if(_===`delete-loop`){let e=Da(g,y,p);if(!e)return;p=An(y,e,t.getNow()),m=0,f=null,t.persist(),t.requestRender();return}if(_===`assign-loop`){let e=Da(g,y,p),n=g.dataset.characterId??y.selectedCharacterId;if(!e)return;p=e,or(y,e,n,t.getNow()),t.persist(),t.requestRender();return}if(_===`start-action`&&v){let e=v,n=t.getNow();if(f){Mn(y,f.loopId,f.afterIndex,e,{locationId:Ia(e,i)},n)&&(p=f.loopId,m=f.afterIndex+1,f=null,d=!0),t.persist(),t.requestRender();return}f=null,cr(y,e,n,{locationId:Ia(e,i)})}if(_===`stop-action`&&(f=null,lr(y,t.getNow())),_===`deposit-carried`&&(L(y)||ur(y,t.getNow())),_===`build-structure`&&v&&pi(y,v,t.getNow()),_===`prestige-skill`&&ae(v)){de(y,v,t.getNow()),t.persist(),t.requestRender();return}if(_===`reset`){t.reset();return}t.persist(),t.requestRender()}}),e.addEventListener(`pointerover`,t=>{let n=Oo(t.target,e);n&&(g=n,ko(e,n))}),e.addEventListener(`pointerout`,t=>{if(!g)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!g.contains(n))&&(g=null,Ao(e))}),e.addEventListener(`focusin`,t=>{let n=Oo(t.target,e);n&&(g=n,ko(e,n))}),e.addEventListener(`focusout`,t=>{if(!g)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!g.contains(n))&&(g=null,Ao(e))}),e.addEventListener(`scroll`,()=>{g?.isConnected&&jo(e,g)},!0),window.addEventListener(`resize`,()=>{g?.isConnected&&jo(e,g)}),(_,v=t.getNow())=>{h=_;let y=H(_,p??Oa(_));p=y?.id??null,m=y?Math.min(y.actionIds.length-1,Math.max(0,m)):0,f&&!H(_,f.loopId)&&(f=null);let ee=No(e);e.innerHTML=Pi(_,r,n,a,i,o,s,c,l,u,d,f,p,m,v,t.getTestSpeedMultiplier()),g=null,Po(e,ee)}}function Pi(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){return`
    <div class="game-shell" data-editor-id="game-shell" data-editor-label="Game shell" data-editor-files="src/ui/render.ts, src/style.css">
      ${Fi(e,n,a,o,s,c,l,u,h)}
      <main class="main-panel" data-editor-id="main-panel" data-editor-label="Main game panel" data-editor-files="src/ui/render.ts, src/style.css">
        ${ua(e,m)}
        ${c?no(e,r):u?lo(e,f,p,d):l?Ii():s?Li(e):o?qi(e,m):a?Bi(e):Gi(e,n,t,i,d,m)}
      </main>
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `}function Fi(e,t,n,r,i,a,o,s,c){let l=X(e),u=ba(e,l),d=!n&&!r&&!i&&!a&&!o&&!s;return`
    <aside class="character-sidebar panel" data-editor-id="character-sidebar" data-editor-label="Character sidebar" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${zi(c)}
        </div>
      </div>
      <button
        class="character-card selected ${a?`active`:``}"
        type="button"
        data-command="open-character-details"
        aria-expanded="${a}"
      >
        <span class="portrait" aria-hidden="true">${ia(l.name)}</span>
        <span>
          <strong>${l.name}</strong>
          <small>${u}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${_i.map(e=>Ui(e,t,d)).join(``)}
              ${Hi(i)}
              ${Wi(r)}
            </div>
          </nav>
          <div class="sidebar-footer">
            ${Vi(s)}
            ${ao(n)}
            <button class="ghost-button ${o?`active`:``}" type="button" data-command="open-settings" aria-pressed="${o}">Settings</button>
          </div>
    </aside>
  `}function Ii(){return`
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
  `}function Li(e){return`
    <div class="work-area single-panel">
      <section class="panel character-panel" aria-label="Characters" data-editor-id="character-panel" data-editor-label="Character roster panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="section-heading">
          <span>Characters</span>
        </div>
        <div class="character-roster-grid">
          ${e.characters.map(t=>Ri(e,t)).join(``)}
        </div>
      </section>
    </div>
  `}function Ri(e,t){let n=e.selectedCharacterId===t.id,r=!!L(e,t.id);return`
    <button
      class="character-select-card ${n?`selected`:``} ${r?`working`:``}"
      type="button"
      data-command="select-character"
      data-id="${t.id}"
      aria-pressed="${n}"
    >
      <span class="portrait" aria-hidden="true">${ia(t.name)}</span>
      <span class="character-select-copy">
        <strong>${t.name}</strong>
        <small>${t.epithet}</small>
        <em>${ba(e,t)}</em>
      </span>
      <span class="character-select-badge">${n?`Selected`:`Select`}</span>
    </button>
  `}function zi(e){let t=e===10;return`
    <button
      class="test-speed-button ${t?`active`:``}"
      type="button"
      data-command="toggle-test-speed"
      aria-pressed="${t}"
      title="Toggle 10x test speed"
    >
      10x
    </button>
  `}function Bi(e){return`
    <div class="work-area single-panel">
      ${Fo(e,`camp`,`Camp Log`,`main-log-panel panel`)}
    </div>
  `}function Vi(e){return`
    <button
      class="action-loops-toggle ${e?`active`:``}"
      type="button"
      data-command="open-action-loops"
      aria-pressed="${e}"
    >
      Action Loops
    </button>
  `}function Hi(e){return`
    <button
      class="category-button characters-button ${e?`active`:``}"
      type="button"
      data-command="open-character-panel"
      aria-pressed="${e}"
    >
      <span>Characters</span>
    </button>
  `}function Ui(e,t,n){let r=n&&e.id===t;return`
    <button
      class="category-button ${r?`active`:``}"
      type="button"
      data-command="set-action-category"
      data-id="${e.id}"
      aria-pressed="${r}"
    >
      <span>${e.label}</span>
    </button>
  `}function Wi(e){return`
    <button
      class="category-button map-button ${e?`active`:``}"
      type="button"
      data-command="open-map"
      aria-pressed="${e}"
    >
      <span>Map</span>
    </button>
  `}function Gi(e,t,n,r,i,a){return t===`camp`?`
      <div class="work-area camp-work-area">
        ${Ki(e)}
        ${qa(e,a)}
      </div>
    `:`
      <div class="work-area">
      ${oa(e,t,n)}
      ${aa(e,n,r,i)}
    </div>
  `}function Ki(e){return`
    <section class="panel camp-stats-panel" aria-label="Camp stats" data-editor-id="camp-stats-panel" data-editor-label="Camp stats panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Stats</span>
      </div>
      <div class="camp-stat-list">
        <div class="camp-stat-row">
          <span>Population</span>
          <strong>${Ke(e)}/${qe(e)}</strong>
        </div>
      </div>
    </section>
  `}function qi(e,t){return`
    <div class="work-area single-panel">
      <section class="panel location-map-panel" aria-label="World map" data-editor-id="location-map-panel" data-editor-label="World map panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="location-map-frame">
          <img class="location-map-image" src="${xi}" alt="Idle Town parchment world map" />
          <svg class="location-map-traveler-layer" viewBox="0 0 1536 1000" aria-hidden="true">
            <defs>
              ${Object.entries(Ci).map(([e,t])=>`<path id="map-route-${e}" class="location-map-route" d="${t}" />`).join(``)}
              ${Object.entries(wi).map(([e,t])=>`<path id="map-return-route-${e}" class="location-map-route" d="${t}" />`).join(``)}
            </defs>
            ${e.characters.map((n,r)=>Ji(e,n,r,t)).join(``)}
          </svg>
        </div>
      </section>
    </div>
  `}function Ji(e,t,n,r){let i=L(e,t.id),a=t.locationId??`camp`,o=ra(n);if(i&&(i.phase===`travelingTo`||i.phase===`travelingBack`)){let e=ea(i,a),n=$i(i);if(e!==n)return Yi(t,i,e,n,o,r)}return Xi(t,i&&(i.phase===`working`||i.phase===`followUp`)?Si[$i(i)]:Si[a],o,!!i)}function Yi(e,t,n,r,i,a){let o=Qi(t,a),s=`map-character-route-${na(e.id)}`,c=ta(n,r),l=o;return`
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
        ${Zi(e,!0)}
      </g>
    </g>
  `}function Xi(e,t,n,r){return`
    <g class="location-map-character ${r?`working`:`idle`}" transform="translate(${t.x+n.x} ${t.y+n.y})">
      ${Zi(e,r)}
    </g>
  `}function Zi(e,t){return`
    <circle class="location-map-character-shadow" cx="0" cy="4" r="15" />
    <circle class="location-map-character-ring" cx="0" cy="0" r="13" />
    <circle class="location-map-character-face ${t?`active`:``}" cx="0" cy="0" r="10" />
    <text class="location-map-character-initial" x="0" y="4">${ia(e.name)}</text>
    <text class="location-map-character-name" x="0" y="29">${e.name}</text>
  `}function Qi(e,t){let n=e.endsAt-e.startedAt;return n<=0?1:Rn((t-e.startedAt)/n,0,1)}function $i(e){return e.targetLocationId?e.targetLocationId:e.phase===`travelingBack`?`camp`:e.locationId??`camp`}function ea(e,t){return e.originLocationId?e.originLocationId:e.phase===`travelingBack`?e.locationId??t:t}function ta(e,t){if(e===t){let t=Si[e];return`M${t.x} ${t.y}`}if(e===`camp`&&t!==`camp`)return Ci[t];if(e!==`camp`&&t===`camp`)return wi[e];let n=e,r=t;return`${wi[n]} ${Ci[r].replace(/^M746 603\s+/,``)}`}function na(e){return e.replace(/[^a-zA-Z0-9_-]/g,`-`)}function ra(e){let t=[{x:0,y:0},{x:26,y:-10},{x:-26,y:12},{x:14,y:24}];return t[e%t.length]??t[0]}function ia(e){return(e.trim().split(/\s+/).map(e=>e[0]).join(``)||`?`).slice(0,2).toUpperCase()}function aa(e,t,n,r){let i=Sa(t);return`
    <div class="action-stack">
      ${Ma(i.id)?Ra(i,n):``}
      ${ca(e,t,n,r)}
    </div>
  `}function oa(e,t,n){return`
    <section class="panel skill-panel" data-editor-id="skill-filter-panel" data-editor-label="Skill filter panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-grid">
        ${Ca(t).map(t=>sa(e,t,n)).join(``)}
      </div>
    </section>
  `}function sa(e,t,n){let r=t.id===n,i=va(e,t.actionIds??[]),a=e.skills[vi[t.id]],o=le(a),s=i||(o.canPrestige?`Prestige ready`:`Lv ${a.level} · ${b(o.xpIntoLevel)}/${b(o.xpForLevel)} XP`);return`
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
  `}function ca(e,t,n,r){let i=Sa(t),a=i.id===`foraging`||i.id===`woodcutting`?Na(n,i.id).actionIds:i.actionIds??[];return i.id===`crafting`?la(e,a,r):`
      <section class="action-panel" data-editor-id="action-panel-${t}" data-editor-label="${i.label} action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="action-grid">
          ${a.map(t=>Va(e,t,r)).join(``)}
        </div>
    </section>
  `}function la(e,t,n){let r=`craftLowestTool`,i=t.filter(e=>e!==r);return`
    <section class="action-panel crafting-action-panel" data-editor-id="action-panel-crafting" data-editor-label="Crafting action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="crafting-card">
        ${Ba(e,r,n)}
        <div class="crafting-action-grid">
          ${i.map(t=>Va(e,t,n)).join(``)}
        </div>
      </div>
    </section>
  `}function ua(e,t){let n=L(e),r=X(e);if(!n)return`
      <section class="current-action-panel panel idle" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="current-action-content idle">
          <div class="current-action-detail current-action-location">
            <span>Location</span>
            ${ma(r.locationId)}
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
    `;let i=Rn(fr(e,t),0,1),a=W(n.endsAt-t),o=ha(e,n),s=_a(e);return`
    <section class="current-action-panel panel" data-editor-id="current-action-panel" data-editor-label="Current action panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="current-action-content">
        <div class="current-action-detail current-action-location">
          <span>Location</span>
          ${ma(o)}
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
  `}function da(e,t,n,r){let i=H(e,t);if(!i)return``;let a=Math.min(i.actionIds.length-1,Math.max(0,r));return`
    <div class="action-loop-controls" aria-label="Action loop">
      ${i.actionIds.map((e,t)=>fa(i.id,e,t,a,n,i.actionIds.length)).join(``)}
    </div>
  `}function fa(e,t,n,r,i,a){let o=n===r,s=i?.loopId===e&&i.afterIndex===n;return`
    <div class="action-loop-row ${o?`selected`:``}">
      <button
        class="action-loop-step ${o?`selected`:``} ${s?`assigning`:``}"
        type="button"
        data-command="select-loop-step"
        data-loop-id="${e}"
        data-id="${n}"
        aria-pressed="${o}"
      >
        ${pa(t)}
      </button>
      ${o?`<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-loop-id="${e}" data-id="${n}" title="Add action after ${pa(t)}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-loop-id="${e}" data-id="${n}" title="Remove ${pa(t)}" ${a<=1?`disabled`:``}>-</button>
            </span>`:``}
    </div>
  `}function pa(e){return e===`fishRiver`?`Fish River`:t(e)?.label??`Action`}function ma(e){let t=ga(e);return`
    <div class="current-location-image" aria-label="${t.label} location">
      <img src="${t.iconUrl}" alt="" aria-hidden="true" />
    </div>
  `}function ha(e,t){let n=ea(t,X(e).locationId),r=$i(t);return r===`camp`?n===`camp`?r:n:r}function ga(e){return e===`camp`?bi:Na(e)}function _a(e){let n=L(e);if(!n)return`Working`;let r=Q($i(n)),i=Q(ea(n,`camp`));return n.phase===`travelingTo`?`Traveling to ${r}`:n.phase===`travelingBack`?`Returning to camp from ${i}`:n.phase===`followUp`?Z(n)===`butcherFish`?`Butchering Fish`:t(Z(n))?.label??`Working`:t(n.actionId)?.label??`Working`}function va(e,n){let r=L(e);if(!r)return null;let i=Z(r);return n.includes(i)?t(i)?.label??`Working`:null}function X(e){return e.characters.find(t=>t.id===e.selectedCharacterId)??e.characters[0]}function ya(e){return e.endsWith(`s`)?`${e}'`:`${e}'s`}function ba(e,t){return L(e,t.id)?xa(e,t.id):`at ${Q(t.locationId)}`}function xa(e,n=e.selectedCharacterId){let r=L(e,n);if(!r)return`keeping still`;let i=Q($i(r)),a=Q(ea(r,`camp`));return r.phase===`travelingTo`?`traveling to ${i}`:r.phase===`travelingBack`?`returning to camp from ${a}`:r.phase===`followUp`?t(Z(r))?.verb??`working`:t(r.actionId)?.verb??`working`}function Z(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Sa(e){return gi.find(t=>t.id===e)??gi[0]}function Ca(e){return(_i.find(t=>t.id===e)??_i[0]).filterIds.map(e=>Sa(e))}function wa(e){return _i.some(t=>t.id===e)}function Ta(e){return gi.some(t=>t.id===e)}function Ea(e,t){let n=Number(e);return Number.isFinite(n)?Math.max(0,Math.floor(n)):t}function Da(e,t,n){return H(t,e.dataset.loopId??n)?.id??null}function Oa(e){return H(e,X(e).actionLoopId)?.id??null}function ka(e){return Y.some(t=>t.id===e)}function Aa(e){return e===`inventory`||e===`equipment`||e===`skills`||e===`log`}function ja(e){return e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId===`camp`}function Q(e){return e===`camp`?`camp`:`the ${Na(e).label.toLowerCase()}`}function Ma(e){return e===`foraging`||e===`mining`||e===`fishing`||e===`hunting`||e===`woodcutting`}function Na(e,t){let n=t?Pa(t):Y;return n.find(t=>t.id===e)??n[0]}function Pa(e){switch(e){case`mining`:return Y.filter(e=>e.id===`mine`);case`fishing`:return Y.filter(e=>e.id===`river`);case`hunting`:return Y.filter(e=>e.id===`meadow`);case`woodcutting`:return Y.filter(e=>e.id===`forest`);default:return Y.filter(e=>e.id===`meadow`||e.id===`river`)}}function Fa(e,t){return e===`mining`?`mine`:e===`hunting`?`meadow`:e===`fishing`?`river`:e===`woodcutting`?`forest`:t===`meadow`||t===`river`?t:`meadow`}function Ia(e,t){return La(e)?`mine`:e===`huntSmallAnimals`?`meadow`:e===`fishRiver`?`river`:e===`chopTrees`?`forest`:t===`forest`?`meadow`:t}function La(e){return e===`mineCoal`||e===`mineCopper`||e===`mineTin`}function Ra(e,t){return`
    <section class="panel location-panel" data-editor-id="location-panel" data-editor-label="Location tabs panel" data-editor-files="src/ui/render.ts, src/style.css">
      ${za(Pa(e.id),Fa(e.id,t),e.label)}
    </section>
  `}function za(e,t,n){return`
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
  `}function Ba(e,n,r){let i=t(n);if(!i)return``;let a=ar(e),o=a?t(a):void 0,s=A(e,n),c=q(e,n),l=r?H(e,r.loopId):null,u=L(e),d=!!(r&&l),f=!!(d&&l&&r&&jn(l,r.afterIndex,n)),p=u?Z(u)===n:!1,m=d?!f:!c||p,h=c?``:nn(e,n),g=a??n,_=ge(g),v=[{label:`Speed`,value:W(i.durationMs)},{label:`Skill`,value:`${oe(_).label} +${b(_e(g))} XP`},{label:`Uses`,value:a?E(K(a)):`Varies by target`},{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}],y=d?f?`Set as action loop step`:`Not valid for this loop`:!c&&h?h:o?`Next: ${o.label}`:``,ee=d?`Set`:p?`Running`:c?`Start`:`Locked`;return`
    <button
      class="craft-priority-button ${p?`active`:``} ${f?`assignable`:``} ${!s&&!f?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${n}"
      data-editor-id="action-card-${n}"
      data-editor-label="Action card: ${i.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${m}"
      data-tooltip-source
      aria-disabled="${m}"
      aria-label="${ee} ${i.label}${o?`, next ${o.label}`:``}"
    >
      <span class="craft-priority-main" aria-hidden="true">
        <img src="${Fr}" alt="" aria-hidden="true" />
      </span>
      ${Ua(i.label,v,y)}
    </button>
  `}function Va(e,n,r){let i=t(n);if(!i)return``;let a=A(e,n),o=K(n),s=q(e,n),c=r?H(e,r.loopId):null,l=L(e),u=!!(r&&c),d=!!(u&&c&&r&&jn(c,r.afterIndex,n)),f=l?Z(l)===n:!1,p=u?!d:!s||f,m=n===`butcherFish`||n===`butcherRabbit`||n===`butcherSquirrel`||n===`cookRabbitMeat`||n===`cookSquirrelMeat`?nn(e,n):mi(e,o),h=s?``:a?m:nn(e,n),g=Ka(n,i.durationMs),_=u?d?`Set as action loop step`:`Not valid for this loop`:!s&&h?h:``,v=u?`Set`:f?`Running`:s?`Start`:`Locked`;return`
    <button
      class="action-card ${f?`active`:``} ${d?`assignable`:``} ${!a&&!d?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${n}"
      data-editor-id="action-card-${n}"
      data-editor-label="Action card: ${i.label}"
      data-editor-files="src/ui/render.ts, src/style.css"
      data-disabled="${p}"
      data-tooltip-source
      aria-disabled="${p}"
      aria-label="${v} ${i.label}"
    >
      <span class="action-card-main" aria-hidden="true">
        ${Ha(n)}
      </span>
      ${Ua(i.label,g,_)}
    </button>
  `}function Ha(e){let t=Wa(e);return t.length?`
    <span class="action-card-icon ${t.length>1?`multi`:``}">
      ${t.map(e=>`<img src="${e}" alt="" aria-hidden="true" />`).join(``)}
    </span>
  `:`<span class="action-card-glyph">${Ga(e)}</span>`}function Ua(e,t,n){return`
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
  `}function Wa(e){switch(e){case`gatherSticks`:return[Qr];case`gatherStones`:return[si];case`gatherFlaxFibers`:return[Rr];case`gatherMushrooms`:return[qr];case`gatherBerries`:return[Br];case`mineCoal`:return[Nr];case`mineCopper`:return[Pr];case`mineTin`:return[li];case`fishRiver`:return[Gr];case`craftLowestTool`:return[Fr];case`craftBasket`:return[kr];case`craftFishingPole`:return[Lr];case`craftStoneKnife`:return[ti];case`craftStoneAxe`:return[ei];case`craftStonePickAxe`:return[ii];case`craftStoneSpear`:return[oi];case`craftLeatherBackpack`:return[Hr];case`chopTrees`:return[fi];case`huntSmallAnimals`:return[Yr,Zr];case`butcherFish`:return[J];case`butcherRabbit`:case`cookRabbitMeat`:return[Yr];case`butcherSquirrel`:case`cookSquirrelMeat`:return[Zr];case`tanHide`:return[Vr]}}function Ga(e){let n=t(e);return n?n.label.split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase():`?`}function Ka(e,t){let n=ge(e),r=[{label:`Speed`,value:W(t)},{label:`Skill`,value:`${oe(n).label} +${b(_e(e))} XP`}];switch(e){case`gatherSticks`:return[...r,{label:`Pickup`,value:`1-3 Sticks`},{label:`Each`,value:`1 weight`}];case`gatherStones`:return[...r,{label:`Pickup`,value:`1-2 Stones`},{label:`Each`,value:`1 weight`}];case`gatherFlaxFibers`:return[...r,{label:`Pickup`,value:`1-3 Flax Fibers`},{label:`Each`,value:`1 weight`}];case`gatherMushrooms`:return[...r,{label:`Pickup`,value:`1-3 Mushrooms`},{label:`Each`,value:`0.1 weight`}];case`gatherBerries`:return[...r,{label:`Pickup`,value:`2-5 Berries`},{label:`Each`,value:`0.1 weight`}];case`mineCoal`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Coal`},{label:`Each`,value:`1 weight`}];case`mineCopper`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Copper`},{label:`Each`,value:`1 weight`}];case`mineTin`:return[...r,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Tin`},{label:`Each`,value:`1 weight`}];case`fishRiver`:return[...r,{label:`Requires`,value:`Fishing Pole`},{label:`Pickup`,value:`1 fish`},{label:`Each`,value:`0.5-7.5 lb`},{label:`Fish`,value:`Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb`}];case`chopTrees`:return[...r,{label:`Pickup`,value:`2-4 Wood, 35% chance for 1 Stick`},{label:`Each`,value:`Wood 2 weight, Stick 1 weight`}];case`huntSmallAnimals`:return[...r,{label:`Pickup`,value:`1 Rabbit or Squirrel`},{label:`Each`,value:`Rabbit 2-5 lb, Squirrel 0.5-2 lb`}];case`craftLowestTool`:return[...r,{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}];case`craftBasket`:return[...r,{label:`Makes`,value:`1 Basket`},{label:`Uses`,value:E(K(e))}];case`craftFishingPole`:return[...r,{label:`Makes`,value:`1 Fishing Pole`},{label:`Uses`,value:E(K(e))}];case`craftStoneKnife`:return[...r,{label:`Makes`,value:`1 Stone Knife`},{label:`Uses`,value:E(K(e))}];case`craftStoneAxe`:return[...r,{label:`Makes`,value:`1 Stone Axe`},{label:`Uses`,value:E(K(e))}];case`craftStonePickAxe`:return[...r,{label:`Makes`,value:`1 Stone Pick Axe`},{label:`Uses`,value:E(K(e))}];case`craftStoneSpear`:return[...r,{label:`Makes`,value:`1 Stone Spear`},{label:`Uses`,value:E(K(e))}];case`craftLeatherBackpack`:return[...r,{label:`Makes`,value:`1 Leather Backpack`},{label:`Uses`,value:E(K(e))}];case`butcherFish`:return[...r,{label:`Uses`,value:`1 carried fish`},{label:`Makes`,value:`Matching filet at 50% fish weight`}];case`butcherRabbit`:return[...r,{label:`Uses`,value:`1 Rabbit`},{label:`Each`,value:`2-5 lb`},{label:`Makes`,value:`1-2 Rabbit Meat; knife can recover Hide or Bone`}];case`butcherSquirrel`:return[...r,{label:`Uses`,value:`1 Squirrel`},{label:`Each`,value:`0.5-2 lb`},{label:`Makes`,value:`1 Squirrel Meat; knife can recover Hide or Bone`}];case`cookRabbitMeat`:return[...r,{label:`Uses`,value:`1 Rabbit Meat`},{label:`Makes`,value:`1 Cooked Rabbit Meat`}];case`cookSquirrelMeat`:return[...r,{label:`Uses`,value:`1 Squirrel Meat`},{label:`Makes`,value:`1 Cooked Squirrel Meat`}];case`tanHide`:return[...r,{label:`Uses`,value:`1 Hide`},{label:`Makes`,value:`1 Leather`}]}}function qa(e,t){let n=r.filter(n=>rn(e,n.id,t));return`
    <section class="panel camp-panel" data-editor-id="camp-panel" data-editor-label="Camp structures and inventory panel" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="camp-panel-section">
        <div class="section-heading">
          <span>Structures</span>
        </div>
        <div class="craft-list">
          ${n.length?n.map(n=>Ya(e,n,t)).join(``):`<div class="empty-line">Nothing sturdy enough to name yet.</div>`}
        </div>
      </div>
      ${Ja(e)}
    </section>
  `}function Ja(e){let t=a.filter(t=>e.inventory[t]>0||ot(e,t)>0),r=i.reduce((e,n)=>(t.includes(n.id)&&(e[n.group]=e[n.group]??[],e[n.group].push(n.id)),e),{}),o=n.some(t=>e.tools[t.id].quantity>0);return`
    <div class="camp-panel-section camp-inventory-section" data-editor-id="camp-inventory-section" data-editor-label="Camp inventory section" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>Camp Inventory</span>
      </div>
      ${t.length||o?`
            <div class="camp-inventory-content">
              ${Object.entries(r).map(([t,n])=>mo(e,t,n)).join(``)}
              ${_o(e)}
            </div>
          `:`<div class="empty-line">No supplies stored yet.</div>`}
    </div>
  `}function Ya(e,t,n){let r=Za(e,t.id,n),i=an(e,t.id,n),a=w(e,t.recipe),o=ja(e),s=Qa(t.id),c=!i||!s&&r||!a||!o,l=$a(e,t.id,n),u=i?eo(e,t.id,n):`Locked`;return`
    <article class="craft-item building-card ${r||Ue(e,t.id)>0?`owned`:``} ${i?``:`locked`} ${t.id===`campfire`&&r?`lit`:``}" data-editor-id="building-card-${t.id}" data-editor-label="Building card: ${t.label}" data-editor-files="src/ui/render.ts, src/style.css">
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
        ${Xa(e,t,n)}
      </button>
    </article>
  `}function Xa(e,t,n){let r=Za(e,t.id,n),i=an(e,t.id,n),a=w(e,t.recipe),o=ja(e),s=[{label:`Status`,value:to(e,t.id,n,r,a,o,i)},{label:`Unlock`,value:on(e,t.id)},{label:`Skill`,value:`Construction +${b(ve(t.id))} XP`},{label:`Cost`,value:E(t.recipe)},{label:`Use`,value:t.blurb}];return`
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
  `}function Za(e,t,n){return Qa(t)?!1:t===`campfire`?O(e,n):e.buildings[t]}function Qa(e){return e===`hideTent`}function $a(e,t,n){switch(t){case`campfire`:return O(e,n)?jr:Mr;case`tanningRack`:return di;case`hideTent`:return ui}}function eo(e,t,n){return Qa(t)?`Build`:t===`campfire`&&O(e,n)?`Lit`:Za(e,t,n)?`Built`:`Build`}function to(e,t,n,i,a,o,s){if(!s)return`Locked: ${on(e,t)}`;if(!o&&!i)return`Needs ${X(e).name} at camp`;if(t===`hideTent`){let n=Ue(e,t);return a?`Tents: ${n}; next gives +1 housing`:`Tents: ${n}; needs ${mi(e,r.find(e=>e.id===t)?.recipe??{})}`}return t===`campfire`?i?`Lit, burns out in <b data-campfire-remaining>${W(qt(e,n))}</b>`:a?`Ready to build, burns for 15m`:`Needs ${mi(e,r.find(e=>e.id===t)?.recipe??{})}`:i?`Built`:a?`Ready to build`:`Needs ${mi(e,r.find(e=>e.id===t)?.recipe??{})}`}function no(e,t){let n=X(e);return`
    <div class="work-area single-panel">
      <section class="panel character-detail-panel" aria-label="${n.name} details" data-active-tab="${t}" data-editor-id="character-detail-panel" data-editor-label="Character detail panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="character-detail-heading">
          <span class="portrait" aria-hidden="true">${ia(n.name)}</span>
          <span class="character-detail-title">
            <strong>${n.name}</strong>
            <small>${ba(e,n)}</small>
          </span>
        </div>
        ${ro(e)}
      </section>
    </div>
  `}function ro(e){return`
    <div class="character-detail-content character-overview-content">
      <div class="character-overview-full">
        ${po(e)}
      </div>
      <div class="character-overview-pair">
        <section class="character-overview-section" aria-label="Equipment overview" data-editor-id="character-overview-equipment" data-editor-label="Character overview equipment" data-editor-files="src/ui/render.ts, src/style.css">
          ${yo(e,!1)}
        </section>
        ${io(e)}
      </div>
      <div class="character-overview-full">
        <section class="character-overview-section" aria-label="Skills overview" data-editor-id="character-overview-skills" data-editor-label="Character overview skills" data-editor-files="src/ui/render.ts, src/style.css">
          ${oo(e)}
        </section>
      </div>
    </div>
  `}function io(e){let n=X(e),r=L(e,n.id),i=n.actionLoopId?H(e,n.actionLoopId):null,a=r?t(Z(r))?.label??`Working`:`Idle`;return`
    <section class="character-overview-section character-stats-overview" aria-label="Character stats" data-editor-id="character-overview-stats" data-editor-label="Character overview stats" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Stats</h3>
      <dl class="character-stat-list">
        ${[{label:`Status`,value:ba(e,n)},{label:`Location`,value:Q(n.locationId)},{label:`Current`,value:a},{label:`Action Loop`,value:i?.name??`None`},...So(e)].map(e=>`
            <div class="character-stat-row">
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
      </dl>
    </section>
  `}function ao(e){return`
    <button
      class="camp-log-toggle ${e?`active`:``}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${e}"
    >
      Camp Log
    </button>
  `}function oo(e){return`
    <h3>Skills</h3>
    <section class="side-panel-content skills-screen" aria-label="Skills" data-editor-id="skills-screen" data-editor-label="Skills screen" data-editor-files="src/ui/render.ts, src/style.css">
      ${yi.filter(e=>e.skillIds.length>0).map(t=>so(e,t)).join(``)}
    </section>
  `}function so(e,t){let n=t.skillIds.filter(e=>y.some(t=>t.id===e)).map(t=>co(e,t)).join(``);return`
    <section class="skill-group" aria-label="${t.label} skills">
      <h4>${t.label}</h4>
      <div class="skill-group-list">
        ${n||`<div class="empty-line">No skills yet.</div>`}
      </div>
    </section>
  `}function co(e,t){let n=oe(t),r=e.skills[t],i=le(r),a=i.atCap?i.canPrestige?`Prestige ready`:`Max level`:`${b(i.xpIntoLevel)} / ${b(i.xpForLevel)} XP`,o=r.prestige>0?`P${r.prestige}`:`P0`;return`
    <article class="skill-row ${i.canPrestige?`prestige-ready`:``}" data-editor-id="skill-row-${t}" data-editor-label="Skill row: ${n.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="skill-row-heading">
        <span>
          <strong>${n.label}</strong>
          <small>Total ${b(r.totalXp)} XP</small>
        </span>
        <span class="skill-level-pill">Lv ${r.level}</span>
      </div>
      <div class="skill-progress-track" aria-hidden="true">
        <span style="transform: scaleX(${Math.min(1,Math.max(0,i.ratio)).toFixed(4)})"></span>
      </div>
      <div class="skill-row-meta">
        <span>${a}</span>
        <span>${o} · Cap ${i.cap}</span>
      </div>
      ${i.canPrestige?`<button class="skill-prestige-button" type="button" data-command="prestige-skill" data-id="${t}">Prestige</button>`:``}
    </article>
  `}function lo(e,t,n,r){let i=H(e,t),a=I(e).length;return`
    <div class="work-area single-panel">
      <section class="panel action-loop-page-panel action-loop-panel" aria-label="Action loops" data-editor-id="action-loops-panel" data-editor-label="Action loops panel" data-editor-files="src/ui/render.ts, src/style.css">
        <div class="loop-panel-heading">
          <h3>Action Loops</h3>
          <button class="loop-create-button" type="button" data-command="create-loop">New</button>
        </div>
        <div class="loop-picker" aria-label="Saved action loops">
          ${e.actionLoops.map(t=>uo(e,t.id,i?.id??null)).join(``)}
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
                ${da(e,i.id,r,n)}
                <div class="loop-assignment-list">
                  ${e.characters.map(t=>fo(e,i.id,t)).join(``)}
                </div>
              </div>
            `:`<div class="empty-line">No loops built yet.</div>`}
      </section>
    </div>
  `}function uo(e,t,n){let r=H(e,t);if(!r)return``;let i=e.characters.filter(e=>e.actionLoopId===r.id).length,a=n===r.id;return`
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
  `}function fo(e,t,n){let r=n.actionLoopId===t,i=L(e,n.id),a=r?i?`Running`:`Assigned`:`Assign`;return`
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
        <small>${ba(e,n)}</small>
      </span>
      <em>${a}</em>
    </button>
  `}function po(e){let t=X(e),n=ya(t.name),r=T(e,t.id),i=a.filter(n=>r[n]>0||ot(e,n,`character`,t.id)>0),o=nt(e,t.id),s=rt(e,t.id),c=i.filter(e=>!!ji[e]),l=i.filter(e=>!ji[e]),u=!L(e)&&ja(e);return`
    <div class="resource-group character-inventory-group" data-editor-id="character-inventory-group" data-editor-label="Character inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="inventory-summary-heading">
        <h3>${n} Inventory</h3>
        <span>${Ro(o)}/${Ro(s)}</span>
      </div>
      ${i.length?`<button class="deposit-button" type="button" data-command="deposit-carried" ${u?``:`disabled`}>Store at Camp</button>`:``}
      ${i.length?`
            ${c.length?`<div class="inventory-resource-grid" aria-label="${n} carried inventory">
                    ${c.map(n=>go(e,n,r,`character`,t.id)).join(``)}
                  </div>`:``}
            ${l.map(e=>ho(e,r)).join(``)}
          `:`<div class="empty-line">Pack empty.</div>`}
    </div>
  `}function mo(e,t,n){let r=n.filter(e=>!!ji[e]),i=n.filter(e=>!ji[e]);return`
    <div class="resource-group" data-editor-id="resource-group-${t}" data-editor-label="${Bo(t)} resource group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${Bo(t)}</h3>
      ${r.length?`<div class="inventory-resource-grid" aria-label="${Bo(t)} inventory">
              ${r.map(t=>go(e,t)).join(``)}
            </div>`:``}
      ${i.map(t=>`
        ${ho(t,e.inventory)}
      `).join(``)}
    </div>
  `}function ho(e,t){return`
    <div class="resource-row">
      <span>
        <strong>${g(e)}</strong>
        <small>${i.find(t=>t.id===e)?.blurb??``}</small>
      </span>
      <b>${Lo(e,t[e])}</b>
    </div>
  `}function go(e,t,n=e.inventory,r=`camp`,a=e.selectedCharacterId){let o=ji[t],s=i.find(e=>e.id===t);if(!o||!s)return``;let c=ot(e,t,r,a),l=p(t)?`, quantity ${c}`:``;return`
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${s.label}, ${Lo(t,n[t])}${l}" data-editor-id="inventory-resource-${r}-${t}" data-editor-label="Inventory resource: ${s.label}" data-editor-files="src/ui/render.ts, src/style.css">
      <img class="slot-item-icon" src="${o}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${h(t,n[t])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${s.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${Bo(s.group)}</dd>
          </div>
          ${f(t)?`<div>
                  <dt>Total</dt>
                  <dd>${Lo(t,n[t])}</dd>
                </div>`:``}
          ${p(t)?`<div>
                  <dt>Quantity</dt>
                  <dd>${c}</dd>
                </div>`:``}
          <div>
            <dt>Use</dt>
            <dd>${s.blurb}</dd>
          </div>
        </dl>
      </div>
    </article>
  `}function _o(e){let t=n.filter(t=>e.tools[t.id].quantity>0);return t.length?`
    <section class="resource-group tool-inventory" data-editor-id="tool-inventory-group" data-editor-label="Tool inventory group" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${t.map(t=>vo(e,t.id)).join(``)}
      </div>
    </section>
  `:``}function vo(e,t){let r=n.find(e=>e.id===t),i=e.tools[t];if(!r||i.quantity<=0)return``;let a=Zt(t),o=[{label:`Durability`,value:`${a}/${a}`},...Mi[t]];return`
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${r.label}, ${i.quantity} ${i.quantity===1?`spare`:`spares`}" data-editor-id="inventory-tool-${t}" data-editor-label="Inventory tool: ${r.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${To(t)}
      <span class="item-quantity" aria-hidden="true">${i.quantity}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${r.label}</strong>
        </div>
        <dl>
          ${o.map(e=>`
            <div>
              <dt>${e.label}</dt>
              <dd>${e.value}</dd>
            </div>
          `).join(``)}
        </dl>
      </div>
    </article>
  `}function yo(e,t=!0){return`
    <section class="side-panel-content equipment-screen" data-editor-id="equipment-screen" data-editor-label="Equipment screen" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="equipment-section">
        <h3>Equipment</h3>
        <div class="equipment-grid" aria-label="Tool equipment slots">
          ${Ei.slice(0,Ti).map((t,n)=>t&&e.tools[t].owned?wo(e,t):Eo(n,t)).join(``)}
        </div>
      </div>
      ${Di.map(e=>bo(e)).join(``)}
      ${t?`<div class="equipment-section equipment-stats-section">
              <h3>Equipment Stats</h3>
              <dl class="equipment-stat-list">
                ${So(e).map(e=>`
                    <div class="equipment-stat-row">
                      <dt>${e.label}</dt>
                      <dd>${e.value}</dd>
                    </div>
                  `).join(``)}
              </dl>
            </div>`:``}
    </section>
  `}function bo(e){return`
    <div class="equipment-section equipment-placeholder-section" data-editor-id="equipment-placeholder-${na(e.label)}" data-editor-label="${e.label} equipment slots" data-editor-files="src/ui/render.ts, src/style.css">
      <h3>${e.label}</h3>
      <div class="equipment-placeholder-grid" aria-label="${e.label} slots">
        ${e.slots.map(t=>xo(e.label,t)).join(``)}
      </div>
    </div>
  `}function xo(e,t){return`
    <div class="equipment-slot empty equipment-placeholder-slot" aria-label="Empty ${t} slot" data-editor-id="equipment-placeholder-${na(e)}-${na(t)}" data-editor-label="Equipment placeholder: ${t}" data-editor-files="src/ui/render.ts, src/style.css">
      <strong>${t}</strong>
    </div>
  `}function So(e){let t=X(e),r=n.filter(t=>e.tools[t.id].owned).filter(t=>e.tools[t.id].durability>0),i=n.reduce((t,n)=>t+e.tools[n.id].quantity,0),a=nt(e,t.id),o=rt(e,t.id),s=Math.max(0,o-10),c=Co(e);return[{label:`Carry`,value:`${Ro(a)} / ${Ro(o)} lb`},{label:`Carry Bonus`,value:s>0?`+${Ro(s)} lb`:`None`},{label:`Usable Tools`,value:`${r.length} / ${Ei.filter(Boolean).length}`},{label:`Spares`,value:i>0?`${i}`:`None`},{label:`Field Effects`,value:c.length?c.join(`, `):`None`}]}function Co(e){let t=[];return e.tools.fishingPole.owned&&e.tools.fishingPole.durability>0&&t.push(`Fishing`),e.tools.stoneKnife.owned&&e.tools.stoneKnife.durability>0&&t.push(`Butchering`),e.tools.stoneAxe.owned&&e.tools.stoneAxe.durability>0&&t.push(`Woodcutting`),e.tools.stonePickAxe.owned&&e.tools.stonePickAxe.durability>0&&t.push(`Mining`),e.tools.stoneSpear.owned&&e.tools.stoneSpear.durability>0&&t.push(`Hunting`),t}function wo(e,t){let r=n.find(e=>e.id===t),i=e.tools[t];if(!r||!i.owned)return``;let a=Zt(t),o=Math.max(0,i.durability),s=o>0,c=(o/a*100).toFixed(1),l=[{label:`Durability`,value:s?`${o}/${a}`:`Broken`},{label:`Inventory`,value:`${i.quantity} ${i.quantity===1?`spare`:`spares`}`},...Mi[t]],u=!!Oi[t];return`
    <article class="equipment-slot ${s?``:`broken`} ${u?`icon-only`:``}" tabindex="0" data-tooltip-source aria-label="${r.label}" data-editor-id="equipment-slot-${t}" data-editor-label="Equipment slot: ${r.label}" data-editor-files="src/ui/render.ts, src/style.css">
      ${To(t)}
      ${u?``:`<strong>${r.label}</strong>
            <span class="slot-durability" aria-label="${r.label} durability">
              <span>
                <b style="width: ${c}%"></b>
              </span>
              <em>${s?`${o}/${a}`:`Broken`}</em>
            </span>`}
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${r.label}</strong>
          <em>${s?`${o}/${a}`:`Broken`}</em>
        </div>
        <dl>
          ${l.map(e=>`
            <div>
              <dt>${e.label}</dt>
              <dd>${s?e.value:`Inactive`}</dd>
            </div>
          `).join(``)}
        </dl>
      </div>
    </article>
  `}function To(e){let t=Oi[e];return t?`<img class="slot-item-icon" src="${t}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${Do(e)}</span>`}function Eo(e,t){let n=t?ki[t]:void 0,r=t?Ai[t]??`Empty`:`Empty`;return`
    <div class="equipment-slot empty ${n?`image-empty`:``}" aria-label="Empty equipment slot ${e+1}">
      ${n?`<img class="slot-shadow-icon" src="${n}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">+</span>`}
      <strong>${r}</strong>
    </div>
  `}function Do(e){switch(e){case`basket`:return`BK`;case`leatherBackpack`:return`BP`;case`fishingPole`:return`FP`;case`stoneAxe`:return`AX`;case`stonePickAxe`:return`PX`;case`stoneSpear`:return`SP`;case`stoneKnife`:return`KN`}}function Oo(e,t){if(!(e instanceof Element))return null;let n=e.closest(`[data-tooltip-source]`);return n&&t.contains(n)?n:null}function ko(e,t){let n=t.querySelector(`.slot-tooltip`),r=Mo(e);!n||!r||(r.innerHTML=n.innerHTML,r.setAttribute(`aria-hidden`,`false`),r.classList.add(`visible`),jo(e,t))}function Ao(e){let t=Mo(e);t&&(t.classList.remove(`visible`),t.setAttribute(`aria-hidden`,`true`),t.innerHTML=``)}function jo(e,t){let n=Mo(e);if(!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth,o=window.innerHeight,s=i.width,c=i.height,l=r.left-s-8;if(l<12){let e=r.right+8;l=e+s<=a-12?e:a-s-12}let u=Math.max(12,o-c-12),d=Math.min(Math.max(r.top,12),u);n.style.left=`${Math.max(12,Math.round(l))}px`,n.style.top=`${Math.round(d)}px`}function Mo(e){return e.querySelector(`.tooltip-layer`)}function No(e){return new Map([`.log-list`,`.side-panel-content`].map(t=>[t,e.querySelector(t)?.scrollTop??0]))}function Po(e,t){for(let[n,r]of t){let t=e.querySelector(n);t&&(t.scrollTop=r)}}function Fo(e,t,n,r=``){let i=e.log.filter(e=>Le(e)===t);return`
    <section class="log-panel ${r}" data-editor-id="${t}-log-panel" data-editor-label="${n}" data-editor-files="src/ui/render.ts, src/style.css">
      <div class="section-heading">
        <span>${n}</span>
        <span class="quiet">${i.length}</span>
      </div>
        <div class="log-list">
          ${i.map(e=>`
            <p class="log-entry ${e.tone}">
              <span>${e.text}</span>
              ${Io(e)}
            </p>
          `).join(``)}
        </div>
    </section>
  `}function Io(e){if(e.aggregateItems){let t=a.filter(t=>(e.aggregateItems?.[t]??0)>0).map(t=>{let n=e.aggregateItems?.[t]??0;return`<b>+${h(t,n)} ${zo(t,n)}</b>`});return t.length?`<span class="log-gains">${t.join(``)}</span>`:``}return e.aggregateTotal?`<span class="log-gains"><b>+${e.aggregateTotal} ${e.aggregateUnit??``}</b></span>`:``}function Lo(e,t){return f(e)?`${h(e,t)} lb`:h(e,t)}function Ro(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}function zo(e,t){let n=g(e);if(f(e))return`lb ${n}`;if(t===1)return n;switch(e){case`wood`:case`rabbitMeat`:case`squirrelMeat`:case`cookedRabbitMeat`:case`cookedSquirrelMeat`:case`leather`:return n;case`flaxFiber`:return`Flax Fibers`;case`berry`:return`Berries`;case`coal`:case`copper`:case`tin`:return n;default:return`${n}s`}}function Bo(e){switch(e){case`resources`:return`Resources`;case`animals`:return`Animals`;case`hunted`:return`Hunted`;case`fish`:return`Fish`;case`crafted`:return`Worked`;default:return e}}var Vo=document.querySelector(`#app`);if(!Vo)throw Error(`App root was not found.`);var $=Ct(),Ho=1,Uo=Date.now(),Wo=Uo,Go=Ni(Vo,{requestRender:()=>Ko(),persist:()=>Ut($),reset:()=>{$o(),$=Wt(),Ko()},getNow:()=>Qo(),getTestSpeedMultiplier:()=>Ho,toggleTestSpeed:()=>{Qo(),Ho=Ho===10?1:10}});function Ko(){let e=Qo();Go($,e)}function qo(){let e=Qo(),t=Yo();if(dr($,e),t!==Yo()){Ko();return}Xo()}Ko(),Jo(),window.setInterval(qo,1e3),window.setInterval(()=>Ut($),2e3),window.addEventListener(`beforeunload`,()=>Ut($));function Jo(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./service-worker.js`).catch(()=>{})})}function Yo(){return JSON.stringify({inventory:$.inventory,characterInventory:$.characterInventory,resourceCounts:$.resourceCounts,characterResourceCounts:$.characterResourceCounts,characters:$.characters.map(e=>({id:e.id,condition:e.condition,locationId:e.locationId,actionLoopId:e.actionLoopId,inventory:e.inventory,resourceCounts:e.resourceCounts})),tools:$.tools,buildings:$.buildings,buildingCounts:$.buildingCounts,campfireExpiresAt:$.campfireExpiresAt,seenResources:$.seenResources,skills:$.skills,actionLoops:$.actionLoops,currentActions:I($).map(e=>({actionId:e.actionId,characterId:e.characterId,phase:e.phase,originLocationId:e.originLocationId,targetLocationId:e.targetLocationId,locationId:e.locationId,loopActionIds:e.loopActionIds,loopLocationIds:e.loopLocationIds,loopIndex:e.loopIndex,nextLoopIndex:e.nextLoopIndex,followUpActionId:e.followUpActionId,startedAt:e.startedAt,endsAt:e.endsAt})),logHead:$.log[0]?.id??``,logLength:$.log.length})}function Xo(){let e=Qo();Zo(e);let t=L($);if(!t)return;let n=Math.min(1,Math.max(0,fr($,e))),r=document.querySelector(`[data-action-progress]`),i=document.querySelector(`[data-action-remaining]`);r&&(r.style.transform=`scaleX(${n.toFixed(4)})`),i&&(i.textContent=W(t.endsAt-e))}function Zo(e){let t=document.querySelectorAll(`[data-campfire-remaining]`);if(!(!t.length||!$.campfireExpiresAt))for(let n of t)n.textContent=W($.campfireExpiresAt-e)}function Qo(){let e=Date.now(),t=Math.max(0,e-Wo);return Uo+=t*Ho,Wo=e,Uo}function $o(){Uo=Date.now(),Wo=Uo}function es(){Xo(),window.requestAnimationFrame(es)}window.requestAnimationFrame(es);