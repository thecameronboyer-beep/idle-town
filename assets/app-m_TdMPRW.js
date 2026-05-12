(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`stoneKnife`,label:`Stone Knife`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Unlocks hide and bone recovery while butchering.`,maxDurability:18},{id:`stoneAxe`,label:`Stone Axe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`Heavy enough to bite into small trees.`,maxDurability:12},{id:`stonePickAxe`,label:`Stone Pick Axe`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A pointed stone head for breaking stubborn ground.`,maxDurability:12},{id:`stoneSpear`,label:`Stone Spear`,recipe:{stick:1,stone:1,flaxFiber:1},blurb:`A reach weapon for rabbits and squirrels.`,maxDurability:10},{id:`fishingPole`,label:`Fishing Pole`,recipe:{stick:1,flaxFiber:1},blurb:`A simple line and hook for working the river.`,maxDurability:16},{id:`basket`,label:`Basket`,recipe:{stick:1,flaxFiber:3},blurb:`A one-hand woven carrier for hauling more from the wild.`,maxDurability:1}],t=[{id:`campfire`,label:`Campfire`,recipe:{stick:8,stone:5},blurb:`A fixed fire ring for cooking meat.`},{id:`tanningRack`,label:`Tanning Rack`,recipe:{stick:6,wood:4,stone:2},blurb:`A rough frame for turning hide into leather.`},{id:`hideTent`,label:`Hide Tent`,recipe:{wood:5,hide:10},blurb:`A hide shelter for holding warmth at camp.`}],n=[{id:`stick`,label:`Stick`,group:`resources`,blurb:`Dry kindling and crude handles.`},{id:`stone`,label:`Stone`,group:`resources`,blurb:`Weight, edge, and spark.`},{id:`flaxFiber`,label:`Flax Fiber`,group:`resources`,blurb:`Pale plant fiber for future cordage and cloth.`},{id:`mushroom`,label:`Mushroom`,group:`resources`,blurb:`Soft meadow caps gathered for later meals.`},{id:`berry`,label:`Berry`,group:`resources`,blurb:`Bright handfuls from low meadow brambles.`},{id:`wood`,label:`Wood`,group:`resources`,blurb:`Usable lengths from felled trees.`},{id:`coal`,label:`Coal`,group:`resources`,blurb:`Dark fuel chipped from the mine.`},{id:`copper`,label:`Copper`,group:`resources`,blurb:`Soft reddish ore for future metalwork.`},{id:`tin`,label:`Tin`,group:`resources`,blurb:`Pale ore that will matter once bronze is possible.`},{id:`minnow`,label:`Minnow`,group:`fish`,blurb:`Tiny river fish, quick to smoke or stew.`},{id:`stoneLoach`,label:`Stone Loach`,group:`fish`,blurb:`Bottom-feeding fish from cold stones.`},{id:`mudskipper`,label:`Mudskipper`,group:`fish`,blurb:`A stubborn shore fish pulled from muddy shallows.`},{id:`brookStickleback`,label:`Brook Stickleback`,group:`fish`,blurb:`Small, sharp-backed fish from fast water.`},{id:`pebblePerch`,label:`Pebble Perch`,group:`fish`,blurb:`A broad little perch hiding under river stones.`},{id:`minnowFilet`,label:`Minnow Filet`,group:`fish`,blurb:`Cleaned minnow meat, lighter after butchering.`},{id:`stoneLoachFilet`,label:`Stone Loach Filet`,group:`fish`,blurb:`Cleaned stone loach meat, lighter after butchering.`},{id:`mudskipperFilet`,label:`Mudskipper Filet`,group:`fish`,blurb:`Cleaned mudskipper meat, lighter after butchering.`},{id:`brookSticklebackFilet`,label:`Brook Stickleback Filet`,group:`fish`,blurb:`Cleaned brook stickleback meat, lighter after butchering.`},{id:`pebblePerchFilet`,label:`Pebble Perch Filet`,group:`fish`,blurb:`Cleaned pebble perch meat, lighter after butchering.`},{id:`rabbit`,label:`Rabbit`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`squirrel`,label:`Squirrel`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`rabbitMeat`,label:`Rabbit Meat`,group:`hunted`,blurb:`Fresh rabbit meat that wants fire soon.`},{id:`squirrelMeat`,label:`Squirrel Meat`,group:`hunted`,blurb:`Fresh squirrel meat that wants fire soon.`},{id:`cookedRabbitMeat`,label:`Cooked Rabbit Meat`,group:`crafted`,blurb:`A small cooked rabbit ration.`},{id:`cookedSquirrelMeat`,label:`Cooked Squirrel Meat`,group:`crafted`,blurb:`A small cooked squirrel ration.`},{id:`hide`,label:`Hide`,group:`resources`,blurb:`Rough animal hide, ready for scraping.`},{id:`bone`,label:`Bone`,group:`resources`,blurb:`Hard scraps for later craft.`},{id:`leather`,label:`Leather`,group:`crafted`,blurb:`Worked hide for future bags and armor.`}],r=n.map(e=>e.id),i=[`stick`,`stone`],a=[`minnow`,`stoneLoach`,`mudskipper`,`brookStickleback`,`pebblePerch`],o=[`minnowFilet`,`stoneLoachFilet`,`mudskipperFilet`,`brookSticklebackFilet`,`pebblePerchFilet`],s={minnow:`minnowFilet`,stoneLoach:`stoneLoachFilet`,mudskipper:`mudskipperFilet`,brookStickleback:`brookSticklebackFilet`,pebblePerch:`pebblePerchFilet`},c=[...a,`rabbit`,`squirrel`],l=[...a,...o,`rabbit`,`squirrel`];function u(e){return l.includes(e)}function d(e){return c.includes(e)}function f(e,t){let n=Math.max(0,Number.isFinite(t)?t:0);return u(e)?Math.round(n*10)/10:Math.floor(n)}function p(e,t){let n=f(e,t);return u(e)?ee(n):`${n}`}function m(e){return n.find(t=>t.id===e)?.label??e}function ee(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}function h(){return Object.fromEntries(r.map(e=>[e,0]))}function te(){return Object.fromEntries(r.map(e=>[e,0]))}function ne(){return Object.fromEntries(e.map(e=>[e.id,{owned:!1,durability:0,quantity:0}]))}function re(){return{campfire:0,tanningRack:0,hideTent:0}}function g(e=Date.now()){return{version:4,createdAt:e,updatedAt:e,lastSimulatedAt:e,selectedCharacterId:`cameron`,characters:[{id:`cameron`,name:`Cameron`,epithet:`Alone at the treeline`,condition:`resting`,locationId:`camp`}],inventory:h(),characterInventory:h(),resourceCounts:te(),characterResourceCounts:te(),tools:ne(),buildings:{campfire:!1,tanningRack:!1,hideTent:!1},buildingCounts:re(),campfireExpiresAt:null,seenResources:[...i],currentAction:null,log:[{id:`${e}-start`,time:e,text:`Cameron wakes beneath cold branches with empty hands.`,tone:`muted`}]}}var ie=48;function _(e,t,n=`muted`,r=Date.now()){e.log.unshift({id:`${r}-${Math.random().toString(36).slice(2)}`,time:r,text:t,tone:n}),e.log=e.log.slice(0,ie)}function v(e,t){let n=t.now??Date.now(),r=e.log.findIndex(e=>e.aggregateKey===t.aggregateKey),i=ae(t.resources);if(r>=0){let[a]=e.log.splice(r,1);a.time=n,a.text=t.text,a.tone=t.tone??a.tone,Object.keys(i).length>0?(a.aggregateItems=oe(se(a),i),delete a.aggregateTotal,delete a.aggregateUnit):(a.aggregateTotal=(a.aggregateTotal??0)+(t.amount??0),a.aggregateUnit=t.unit),e.log.unshift(a);return}e.log.unshift({id:`${n}-${Math.random().toString(36).slice(2)}`,time:n,text:t.text,tone:t.tone??`muted`,aggregateKey:t.aggregateKey,...Object.keys(i).length>0?{aggregateItems:i}:{aggregateTotal:t.amount??0,aggregateUnit:t.unit}}),e.log=e.log.slice(0,ie)}function ae(e){let t={};for(let[n,r]of Object.entries(e??{})){let e=n,i=f(e,r??0);i>0&&(t[e]=i)}return t}function oe(e,t){let n={...e??{}};for(let[e,r]of Object.entries(t)){let t=e;n[t]=f(t,(n[t]??0)+(r??0))}return n}function se(e){if(e.aggregateItems)return e.aggregateItems;let t=ce(e.aggregateUnit);if(!(!t||!e.aggregateTotal))return{[t]:e.aggregateTotal}}function ce(e){switch(e?.toLowerCase()){case`sticks`:return`stick`;case`stones`:return`stone`;default:return}}var le=`rowan`;function ue(e,t){return Math.max(0,Math.floor(e.buildingCounts?.[t]??+!!e.buildings[t]))}function de(e,t){let n=ue(e,t)+1;return e.buildingCounts[t]=n,n}function fe(e,t,n){e.buildingCounts[t]=Math.max(0,Math.floor(n))}function pe(e){return e.characters.length}function me(e){return ue(e,`hideTent`)}function he(e,t=Date.now()){return me(e)<2||e.characters.some(e=>e.id===le)?!1:(e.characters.push({id:le,name:`Rowan`,epithet:`Drawn to the second shelter`,condition:`resting`,locationId:`camp`}),_(e,`Rowan joins the camp after the second hide tent goes up.`,`craft`,t),!0)}function ge(e){for(let t of r)e.inventory[t]=f(t,e.inventory[t]??0),e.characterInventory[t]=f(t,e.characterInventory[t]??0),e.resourceCounts[t]=ke(t,e.inventory[t],e.resourceCounts[t]??0),e.characterResourceCounts[t]=ke(t,e.characterInventory[t],e.characterResourceCounts[t]??0)}function y(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=(n??0))}function _e(e,t){for(let[n,r]of Object.entries(t)){let t=n;e.inventory[t]=f(t,e.inventory[t]-(r??0))}}function ve(e,t,n={}){for(let[r,i]of Object.entries(t)){let t=r,a=i??0;a<=0||(e.inventory[t]=f(t,e.inventory[t]+a),Ae(e.resourceCounts,t,n[t]??0),e.seenResources.includes(t)||e.seenResources.push(t))}}function ye(e){switch(e){case`wood`:return 2;case`stick`:case`stone`:case`flaxFiber`:return 1;case`mushroom`:case`berry`:return .1;default:return 1}}function be(e){let t=r.reduce((t,n)=>t+(e[n]??0)*ye(n),0);return Math.round(t*10)/10}function xe(e){return be(e.characterInventory)}function Se(e){let t=e.tools.basket;return 10+(t?.owned&&t.durability>0?5:0)}function Ce(e,t,n={}){let i={},a=xe(e),o=Se(e);for(let s of r){let r=f(s,t[s]??0);if(r<=0)continue;let c=ye(s),l=o-a,d=c>0?f(s,u(s)?r*c<=l?r:0:Math.min(r,Math.floor(l/c))):r;d<=0||(i[s]=d,e.characterInventory[s]=f(s,e.characterInventory[s]+d),Ae(e.characterResourceCounts,s,Me(s,r,d,n[s])),a=Math.round((a+d*c)*10)/10,e.seenResources.includes(s)||e.seenResources.push(s))}return i}function we(e){let t={};for(let n of r){let r=e.characterInventory[n];r<=0||(t[n]=r,e.inventory[n]=f(n,e.inventory[n]+r),je(e.characterResourceCounts,e.resourceCounts,n),e.characterInventory[n]=0,e.seenResources.includes(n)||e.seenResources.push(n))}return t}function b(e,t,n=`camp`){let r=Oe(e,n);return d(t)?Math.max(0,Math.floor(r[t]??0)):Math.floor(De(e,n)[t]??0)}function Te(e,t,n=`camp`){return b(e,t,n)>0}function Ee(e,t,n=`camp`){if(!d(t))return 0;let r=De(e,n),i=Oe(e,n),a=b(e,t,n),o=f(t,r[t]??0);if(a<=0||o<=0)return r[t]=0,i[t]=0,0;let s=f(t,a<=1?o:o/a);return i[t]=Math.max(0,a-1),r[t]=i[t]<=0?0:f(t,o-s),s}function x(e){return Object.entries(e).map(([e,t])=>{let n=e;return`${p(n,t??0)}${u(n)?` lb`:``} ${m(n)}`}).join(`, `)}function De(e,t){return t===`character`?e.characterInventory:e.inventory}function Oe(e,t){return t===`character`?e.characterResourceCounts:e.resourceCounts}function ke(e,t,n){return!d(e)||t<=0?0:Math.max(1,Math.floor(Math.max(0,Number.isFinite(n)?n:0)))}function Ae(e,t,n){!d(t)||n<=0||(e[t]=Math.floor((e[t]??0)+n))}function je(e,t,n){if(!d(n))return;let r=Math.max(0,Math.floor(e[n]??0));r<=0||(t[n]=Math.floor((t[n]??0)+r),e[n]=0)}function Me(e,t,n,r=0){return!d(e)||n<=0||n<t?0:Math.max(0,Math.floor(r))}var Ne=`idle-town:first-survival-slice:v1`,Pe=4,Fe=900*1e3,S={minnow:1,stoneLoach:2,mudskipper:3,brookStickleback:1.25,pebblePerch:4.75,rabbit:3.5,squirrel:1.25};function Ie(){let e=window.localStorage.getItem(Ne);if(!e)return g();try{let t=JSON.parse(e),n=g(),r={...n.buildings,...t.buildings??{}},i={...n,...t,inventory:{...h(),...t.inventory??{}},characterInventory:{...h(),...t.characterInventory??{}},resourceCounts:{...te(),...t.resourceCounts??{}},characterResourceCounts:{...te(),...t.characterResourceCounts??{}},tools:We(t.tools),buildings:r,buildingCounts:Le(t.buildingCounts,r,n.buildingCounts),campfireExpiresAt:typeof t.campfireExpiresAt==`number`?t.campfireExpiresAt:n.campfireExpiresAt,characters:Re(t.characters,n.characters),seenResources:t.seenResources?.length?t.seenResources:n.seenResources,log:t.log?.length?t.log:n.log,version:Pe},a=typeof t.version==`number`?t.version:1;return Ve(i,a),He(i,a),Be(i,a),he(i),ge(i),i}catch{return g()}}function Le(e,t,n){let r={...re(),...n};if(e&&typeof e==`object`){let t=e;for(let e of Object.keys(r))r[e]=Math.max(0,Math.floor(Number(t[e]??r[e])))}for(let e of Object.keys(t))t[e]&&r[e]<=0&&(r[e]=1);return r}function Re(e,t){return!Array.isArray(e)||!e.length?t:e.map((e,n)=>{let r=t[n]??t[0];if(!e||typeof e!=`object`)return r;let i=e;return{...r,...i,locationId:ze(i.locationId)?i.locationId:r.locationId}})}function ze(e){return e===`camp`||e===`meadow`||e===`river`||e===`forest`||e===`mine`}function Be(e,t){let n=Date.now();if(!e.buildings.campfire){e.campfireExpiresAt=null;return}t<4&&!e.campfireExpiresAt&&(e.campfireExpiresAt=n+Fe),(typeof e.campfireExpiresAt!=`number`||e.campfireExpiresAt<=n)&&(e.buildings.campfire=!1,e.campfireExpiresAt=null)}function Ve(e,t){t>=2||(e.inventory.rabbit*=S.rabbit??1,e.characterInventory.rabbit*=S.rabbit??1,e.inventory.squirrel*=S.squirrel??1,e.characterInventory.squirrel*=S.squirrel??1)}function He(e,t){if(!(t>=Pe))for(let t of c)e.resourceCounts[t]=Ue(t,e.inventory[t]),e.characterResourceCounts[t]=Ue(t,e.characterInventory[t])}function Ue(e,t){if(t<=0)return 0;let n=S[e]??1;return Math.max(1,Math.round(t/n))}function We(t){let n=ne();if(!t||typeof t!=`object`)return n;let r=t;for(let t of e){let e=r[t.id];if(typeof e==`boolean`){n[t.id]={owned:e,durability:e?t.maxDurability:0,quantity:0};continue}if(!e||typeof e!=`object`)continue;let i=!!e.owned,a=Number(e.durability??0),o=Number(e.quantity??0);n[t.id]={owned:i,durability:i?Math.min(t.maxDurability,Math.max(0,Math.floor(a))):0,quantity:Math.max(0,Math.floor(o))}}return n}function Ge(e){window.localStorage.setItem(Ne,JSON.stringify(e))}function Ke(){return window.localStorage.removeItem(Ne),g()}var qe=[{id:`gatherSticks`,label:`Gather Sticks`,verb:`gathering sticks`,durationMs:7e3,blurb:`Slow, reliable foraging near camp.`},{id:`gatherStones`,label:`Gather Stones`,verb:`searching for stones`,durationMs:8500,blurb:`Cameron checks creek beds and exposed roots.`},{id:`gatherFlaxFibers`,label:`Gather Flax Fibers`,verb:`pulling flax fibers`,durationMs:1e4,blurb:`Thin stalks stripped by hand for future craft.`},{id:`gatherMushrooms`,label:`Gather Mushrooms`,verb:`gathering mushrooms`,durationMs:1e4,blurb:`Search the meadow shade for small edible caps.`},{id:`gatherBerries`,label:`Gather Berries`,verb:`gathering berries`,durationMs:1e4,blurb:`Pick careful handfuls from the meadow brambles.`},{id:`mineCoal`,label:`Mine Coal`,verb:`mining coal`,durationMs:3e4,blurb:`Chip dark fuel from the mine wall.`},{id:`mineCopper`,label:`Mine Copper`,verb:`mining copper`,durationMs:3e4,blurb:`Break reddish ore from stone seams.`},{id:`mineTin`,label:`Mine Tin`,verb:`mining tin`,durationMs:3e4,blurb:`Work pale ore from fractured rock.`},{id:`fishRiver`,label:`Fishing River`,verb:`fishing the river`,durationMs:15e3,blurb:`Cast into the shallows for small river fish.`},{id:`craftLowestTool`,label:`Primitive Tools`,verb:`balancing tool stock`,durationMs:15e3,blurb:`Craft whichever primitive tool has the lowest current stock.`},{id:`craftBasket`,label:`Craft Basket`,verb:`crafting a basket`,durationMs:15e3,blurb:`Weave flax fibers around a simple stick frame.`},{id:`craftFishingPole`,label:`Craft Fishing Pole`,verb:`crafting a fishing pole`,durationMs:15e3,blurb:`Bind flax line to a flexible stick.`},{id:`craftStoneKnife`,label:`Craft Stone Knife`,verb:`crafting a stone knife`,durationMs:15e3,blurb:`Shape a small edge and bind it to a handle.`},{id:`craftStoneAxe`,label:`Craft Stone Axe`,verb:`crafting a stone axe`,durationMs:15e3,blurb:`Bind a chopping head to a short haft.`},{id:`craftStonePickAxe`,label:`Craft Stone Pick Axe`,verb:`crafting a stone pick axe`,durationMs:15e3,blurb:`Lash a pointed stone head to a sturdy handle.`},{id:`craftStoneSpear`,label:`Craft Stone Spear`,verb:`crafting a stone spear`,durationMs:15e3,blurb:`Lash a stone point to a balanced shaft.`},{id:`chopTrees`,label:`Chop Trees`,verb:`chopping trees`,durationMs:18e3,blurb:`The first real push beyond loose branches.`},{id:`huntSmallAnimals`,label:`Hunt Small Animals`,verb:`hunting small animals`,durationMs:28e3,blurb:`Bring back whole rabbits or squirrels for later work.`},{id:`butcherFish`,label:`Butcher Fish`,verb:`butchering fish`,durationMs:15e3,blurb:`Clean one carried fish into matching filets at half weight.`},{id:`butcherRabbit`,label:`Butcher Rabbit`,verb:`butchering a rabbit`,durationMs:18e3,blurb:`Break down a rabbit into useful parts.`},{id:`butcherSquirrel`,label:`Butcher Squirrel`,verb:`butchering a squirrel`,durationMs:14e3,blurb:`Break down a squirrel into useful parts.`},{id:`cookRabbitMeat`,label:`Cook Rabbit Meat`,verb:`cooking rabbit meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`cookSquirrelMeat`,label:`Cook Squirrel Meat`,verb:`cooking squirrel meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`tanHide`,label:`Tan Hide`,verb:`working hide`,durationMs:36e3,blurb:`Scrape, stretch, wait, repeat.`}];function C(e){return qe.find(t=>t.id===e)}var Je=900*1e3;function Ye(e,t=Date.now()){e.buildings.campfire=!0,e.campfireExpiresAt=t+Je}function w(e,t=Date.now()){return!!(e.buildings.campfire&&Ze(e)>t)}function Xe(e,t=Date.now()){let n=Ze(e);return n>t?n-t:0}function Ze(e){return e.buildings.campfire&&typeof e.campfireExpiresAt==`number`?e.campfireExpiresAt:0}function Qe(e,t=Date.now()){let n=Ze(e);return!n||n>t?!1:(e.buildings.campfire=!1,e.campfireExpiresAt=null,_(e,`The campfire burns down to charred wood.`,`muted`,n),e.updatedAt=n,e.lastSimulatedAt=n,!0)}function $e(e,t,n){return Math.min(n,Math.max(t,e))}function T(e,t){return Math.floor(Math.random()*(t-e+1))+e}function et(e,t,n=1){let r=10**n;return Math.round((Math.random()*(t-e)+e)*r)/r}function E(e){let t=Math.max(0,Math.ceil(e/1e3));if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function tt(t){return e.find(e=>e.id===t)}function nt(e){return tt(e)?.maxDurability??1}function D(e,t){let n=e.tools[t];return!!(n?.owned&&n.durability>0)}function rt(e,t){let n=e.tools[t];return!n||n.quantity<=0?!1:(--n.quantity,n.owned=!0,n.durability=nt(t),!0)}function O(e,t,n,r=Date.now()){let i=e.tools[t];if(!(!i?.owned||i.durability<=0)&&(i.durability=Math.max(0,i.durability-n),i.durability===0)){let n=tt(t)?.label??`Tool`;if(rt(e,t)){_(e,`${n} breaks; Cameron takes a fresh one from inventory.`,`warning`,r);return}i.owned=!1,_(e,`${n} breaks. No spare remains.`,`warning`,r)}}function it(e){return e.seenResources.includes(`rabbitMeat`)||e.seenResources.includes(`squirrelMeat`)}function at(e){return a.some(t=>e.seenResources.includes(t)||e.characterInventory[t]>0||e.inventory[t]>0||e.characterResourceCounts[t]>0||e.resourceCounts[t]>0)}function k(e,t,n=Date.now()){switch(t){case`gatherSticks`:case`gatherStones`:case`gatherFlaxFibers`:case`gatherMushrooms`:case`gatherBerries`:case`craftLowestTool`:case`craftBasket`:case`craftFishingPole`:case`craftStoneKnife`:case`craftStoneAxe`:case`craftStonePickAxe`:case`craftStoneSpear`:return!0;case`fishRiver`:return D(e,`fishingPole`);case`mineCoal`:case`mineCopper`:case`mineTin`:return D(e,`stonePickAxe`);case`chopTrees`:return D(e,`stoneAxe`);case`huntSmallAnimals`:return D(e,`stoneSpear`);case`butcherFish`:return at(e);case`butcherRabbit`:return e.seenResources.includes(`rabbit`);case`butcherSquirrel`:return e.seenResources.includes(`squirrel`);case`cookRabbitMeat`:return w(e,n)&&e.seenResources.includes(`rabbitMeat`);case`cookSquirrelMeat`:return w(e,n)&&e.seenResources.includes(`squirrelMeat`);case`tanHide`:return e.buildings.tanningRack&&e.seenResources.includes(`hide`)}}function ot(e,t){switch(t){case`fishRiver`:return`Needs Fishing Pole`;case`mineCoal`:case`mineCopper`:case`mineTin`:return`Needs Stone Pick Axe`;case`chopTrees`:return`Needs Stone Axe`;case`huntSmallAnimals`:return`Needs Stone Spear`;case`butcherFish`:return`Needs Carried Fish`;case`butcherRabbit`:return`Needs Rabbit`;case`butcherSquirrel`:return`Needs Squirrel`;case`cookRabbitMeat`:return w(e)?`Needs Rabbit Meat`:`Needs Lit Campfire`;case`cookSquirrelMeat`:return w(e)?`Needs Squirrel Meat`:`Needs Lit Campfire`;case`tanHide`:return e.buildings.tanningRack?`Needs Hide`:`Needs Tanning Rack`;case`craftLowestTool`:return`Needs Craft Materials`;default:return``}}function st(e,t,n=Date.now()){switch(t){case`campfire`:return w(e,n)||it(e);case`tanningRack`:return e.buildings.tanningRack||e.seenResources.includes(`hide`);case`hideTent`:return e.buildings.hideTent||e.seenResources.includes(`hide`)}}var ct=7200*1e3,lt={meadow:1e4,river:15e3,forest:3e4,mine:6e4},ut=[{id:`minnow`,minWeight:.5,maxWeight:1.5},{id:`stoneLoach`,minWeight:1,maxWeight:3},{id:`mudskipper`,minWeight:1.5,maxWeight:4.5},{id:`brookStickleback`,minWeight:.5,maxWeight:2},{id:`pebblePerch`,minWeight:2,maxWeight:7.5}],dt=[{id:`rabbit`,minWeight:2,maxWeight:5},{id:`squirrel`,minWeight:.5,maxWeight:2}],ft=[{actionId:`craftBasket`,toolId:`basket`},{actionId:`craftFishingPole`,toolId:`fishingPole`},{actionId:`craftStoneKnife`,toolId:`stoneKnife`},{actionId:`craftStoneAxe`,toolId:`stoneAxe`},{actionId:`craftStonePickAxe`,toolId:`stonePickAxe`},{actionId:`craftStoneSpear`,toolId:`stoneSpear`}];function pt(e,t=Date.now()){let n=ft.filter(({actionId:n})=>k(e,n,t)&&y(e,A(n)));return n.length?n.reduce((t,n)=>mt(e,n.toolId)<mt(e,t.toolId)?n:t,n[0]).actionId:null}function mt(e,t){let n=e.tools[t];return(n?.quantity??0)+ +!!n?.owned}function A(e){switch(e){case`cookRabbitMeat`:return{rabbitMeat:1};case`cookSquirrelMeat`:return{squirrelMeat:1};case`tanHide`:return{hide:1};case`craftLowestTool`:return{};case`craftBasket`:return V(`basket`);case`craftFishingPole`:return V(`fishingPole`);case`craftStoneKnife`:return V(`stoneKnife`);case`craftStoneAxe`:return V(`stoneAxe`);case`craftStonePickAxe`:return V(`stonePickAxe`);case`craftStoneSpear`:return V(`stoneSpear`);default:return{}}}function j(e,t,n=Date.now()){return t===`craftLowestTool`?k(e,t,n)&&!!pt(e,n):t===`butcherFish`?k(e,t,n)&&nn(e):t===`butcherRabbit`?k(e,t,n)&&Te(e,`rabbit`):t===`butcherSquirrel`?k(e,t,n)&&Te(e,`squirrel`):k(e,t,n)&&y(e,A(t))}function M(e){return e.loopActionIds?.length?[...e.loopActionIds]:e.followUpActionId?[e.actionId,e.followUpActionId]:[e.actionId]}function ht(e,t,n){let r=M(e),i=z(t,r);return n===`butcherFish`?r[i]===`fishRiver`:!0}function gt(e,t,n,r={},i=Date.now()){let a=e.currentAction;if(!a||!ht(a,t,n))return!1;let o=M(a),s=F(a,o),c=z(t,o)+1;o.splice(c,0,n),s.splice(c,0,Mt(n,r.locationId));let l=z(a.loopIndex??0,o);return a.loopActionIds=o,a.loopLocationIds=s,a.loopIndex=c<=l?l+1:l,delete a.followUpActionId,e.updatedAt=i,e.lastSimulatedAt=i,!0}function _t(e,t,n=Date.now()){let r=e.currentAction;if(!r)return 0;let i=M(r);if(i.length<=1)return z(t,i);let a=z(r.loopIndex??0,i),o=z(t,i);if(o===a)return o;let s=F(r,i);return i.splice(o,1),s.splice(o,1),r.loopActionIds=i,r.loopLocationIds=s,r.loopIndex=o<a?a-1:a,typeof r.nextLoopIndex==`number`&&(r.nextLoopIndex=z(r.nextLoopIndex,i)),delete r.followUpActionId,e.updatedAt=n,e.lastSimulatedAt=n,Math.max(0,o-1)}function vt(e,t,n=Date.now(),r={}){let i=C(t);if(!i||!j(e,t,n))return!1;let a=Ft(t,r.locationId),o=It(e),s=B(o,a);return e.currentAction={actionId:t,characterId:e.selectedCharacterId,phase:s>0?`travelingTo`:`working`,originLocationId:o,targetLocationId:a,locationId:a===`camp`?void 0:a,loopActionIds:[t],loopLocationIds:[a===`camp`?null:a],loopIndex:0,startedAt:n,endsAt:n+(s||i.durationMs),repeat:!0},s<=0&&L(e,e.selectedCharacterId,a),U(e,!0),e.updatedAt=n,e.lastSimulatedAt=n,!0}function yt(e,t=Date.now()){if(!e.currentAction)return;let n=C(e.currentAction.actionId),r=Rt(e.currentAction,It(e));L(e,e.currentAction.characterId,r);let i=r===`camp`?bt(e,t):!1;e.currentAction=null,U(e,!1),e.updatedAt=t,e.lastSimulatedAt=t,_(e,i?`Cameron stops ${n?.verb??`working`} and returns to camp.`:`Cameron stops ${n?.verb??`working`} at ${zt(r)}.`,`muted`,t)}function bt(e,t=Date.now()){if(It(e)!==`camp`)return!1;let n=we(e);return Object.keys(n).length<=0?!1:(v(e,{aggregateKey:`deposit:camp`,text:`Cameron returned resources to camp`,resources:n,tone:`gain`,now:t}),e.updatedAt=t,e.lastSimulatedAt=t,!0)}function xt(e,t=Date.now()){let n=Math.min(t,e.lastSimulatedAt+ct),r=0;for(;r<500;){let t=Ht(e,n),i=e.currentAction?.endsAt??1/0;if(t===null&&i>n)break;if(t!==null&&t<=i){Qe(e,t),e.currentAction&&Vt(Bt(e.currentAction))&&(_(e,`Cameron stops cooking as the campfire goes out.`,`warning`,t),e.currentAction=null,U(e,!1));continue}if(e.currentAction&&i<=n){let t=e.currentAction,i=t.endsAt;Ct(e,t,i,n),r+=1;continue}break}t>n&&r>0&&_(e,`The saved trail grows quiet after two hours away.`,`muted`,n),e.lastSimulatedAt=t,e.updatedAt=t,e.currentAction||U(e,!1)}function St(e,t=Date.now()){if(!e.currentAction)return 0;let n=e.currentAction.endsAt-e.currentAction.startedAt;return n<=0?1:(t-e.currentAction.startedAt)/n}function Ct(e,t,n,r){if(t.phase===`travelingTo`){L(e,t.characterId,I(t)),N(e,t,n);return}if(t.phase===`travelingBack`){if(L(e,t.characterId,`camp`),bt(e,n),t.repeat&&kt(e,t,Wt(t),n))return;if(t.repeat&&j(e,t.actionId,n)){Et(e,t,n);return}e.currentAction=null,U(e,!1);return}if(t.phase===`followUp`){wt(e,t,n,r);return}Tt(e,t,n)}function wt(e,t,n,r){if(Bt(t)!==`butcherFish`){Dt(e,t,r,R(t));return}if(en(e,n),nn(e)){Ot(e,t,t.loopIndex??0,n);return}Dt(e,t,r,R(t))}function Tt(e,t,n){let r=Zt(e,t.actionId,n);if(!r){_(e,`Cameron lacks the materials to continue.`,`warning`,n),e.currentAction=null,U(e,!1);return}let i=A(r);if(!y(e,i)){_(e,`Cameron lacks the materials to continue.`,`warning`,n),e.currentAction=null,U(e,!1);return}if(_e(e,i),r===`butcherFish`){if(en(e,n),t.repeat&&j(e,r,n)){N(e,t,n);return}e.currentAction=null,U(e,!1);return}let a=Qt(r);if(a){if($t(e,a,n),t.repeat&&j(e,r,n)){N(e,t,n);return}e.currentAction=null,U(e,!1);return}let o=Xt(e,r),s=P(r)?Ce(e,o.resources,o.resourceCounts):o.resources;if(P(r)?At(e,r,s,n):(ve(e,o.resources,o.resourceCounts),v(e,{aggregateKey:`action:${r}`,text:ln(r),resources:o.resources,tone:o.tone,now:n})),cn(e,r,n),P(r)&&qt(o.resources,s,e)){let i=Gt(t);if(r===`fishRiver`&&Ut(t,i)===`butcherFish`&&nn(e)){Ot(e,t,i,n);return}Dt(e,t,n,R(t));return}if(!P(r)&&M(t).length>1){kt(e,t,R(t),n);return}if(t.repeat&&j(e,r,n)){N(e,t,n);return}e.currentAction=null,U(e,!1)}function N(e,t,n){let r=C(t.actionId);if(!r){e.currentAction=null,U(e,!1);return}let i=I(t);L(e,t.characterId,i),e.currentAction={...t,phase:`working`,originLocationId:i,targetLocationId:i,locationId:i===`camp`?void 0:i,startedAt:n,endsAt:n+r.durationMs}}function Et(e,t,n){let r=Pt(t,t.loopIndex??0),i=Lt(e,t.characterId),a=B(i,r);if(a<=0){N(e,{...t,targetLocationId:r,locationId:r===`camp`?void 0:r},n);return}e.currentAction={...t,phase:`travelingTo`,originLocationId:i,targetLocationId:r,locationId:r===`camp`?void 0:r,startedAt:n,endsAt:n+a}}function Dt(e,t,n,r=R(t)){let i=I(t);e.currentAction={...t,phase:`travelingBack`,originLocationId:i,targetLocationId:`camp`,locationId:i===`camp`?void 0:i,nextLoopIndex:r,startedAt:n,endsAt:n+B(i,`camp`)}}function Ot(e,t,n,r){let i=Ut(t,n),a=C(i);if(!a){Dt(e,t,r,R(t));return}e.currentAction={...t,actionId:i,phase:`followUp`,originLocationId:I(t),targetLocationId:I(t),loopIndex:n,startedAt:r,endsAt:r+a.durationMs}}function kt(e,t,n,r){let i=M(t);if(!i.length)return!1;let a=z(n,i),o=i[a];if(o===`butcherFish`||!j(e,o,r)){let n=Kt(t,a);return n===a?!1:kt(e,t,n,r)}let s=C(o);if(!s)return!1;let c=Pt(t,a),l=Lt(e,t.characterId),u=B(l,c);return e.currentAction={...t,actionId:o,phase:u>0?`travelingTo`:`working`,originLocationId:l,targetLocationId:c,locationId:c===`camp`?void 0:c,loopActionIds:i,loopLocationIds:F(t,i),loopIndex:a,nextLoopIndex:void 0,followUpActionId:void 0,startedAt:r,endsAt:r+(u||s.durationMs)},u<=0&&L(e,t.characterId,c),!0}function At(e,t,n,r){Object.values(n).some(e=>(e??0)>0)&&v(e,{aggregateKey:`action:${t}`,text:ln(t),resources:n,tone:`gain`,now:r})}function jt(e){return e===`gatherSticks`||e===`gatherStones`||e===`gatherFlaxFibers`||e===`gatherMushrooms`||e===`gatherBerries`||e===`mineCoal`||e===`mineCopper`||e===`mineTin`||e===`fishRiver`}function P(e){return jt(e)||e===`huntSmallAnimals`||e===`chopTrees`}function Mt(e,t){return P(e)?t??`meadow`:null}function F(e,t=M(e)){return e.loopLocationIds?.length?t.map((t,n)=>Mt(t,e.loopLocationIds?.[n]??void 0)):t.map((t,n)=>n===0&&P(t)?e.locationId??`meadow`:Mt(t,void 0))}function Nt(e,t){let n=M(e),r=n[z(t,n)];return F(e,n)[z(t,n)]??(P(r)?`meadow`:void 0)}function Pt(e,t){let n=M(e),r=n[z(t,n)];return Ft(r,Nt(e,t))}function Ft(e,t){return P(e)?t??`meadow`:`camp`}function I(e){return e.targetLocationId??e.locationId??`camp`}function It(e){return Lt(e,e.selectedCharacterId)}function Lt(e,t){return e.characters.find(e=>e.id===t)?.locationId??`camp`}function L(e,t,n){let r=e.characters.find(e=>e.id===t);r&&(r.locationId=n)}function Rt(e,t){return e.phase===`travelingTo`||e.phase===`travelingBack`?e.originLocationId??t:I(e)}function zt(e){return e===`camp`?`camp`:`the ${e}`}function Bt(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Vt(e){return e===`cookRabbitMeat`||e===`cookSquirrelMeat`}function Ht(e,t){let n=Ze(e);return n&&n<=t?n:null}function Ut(e,t){let n=M(e);return n[z(t,n)]??e.actionId}function Wt(e){let t=M(e);return z(e.nextLoopIndex??e.loopIndex??0,t)}function Gt(e){return Kt(e,e.loopIndex??0)}function R(e){return Kt(e,e.loopIndex??0)}function Kt(e,t){let n=M(e);if(n.length<=1)return z(t,n);let r=(z(t,n)+1)%n.length;for(;n[r]===`butcherFish`&&r!==t;)r=(r+1)%n.length;return r}function z(e,t){return t.length?Math.min(t.length-1,Math.max(0,Math.floor(e))):0}function qt(e,t,n){let r=Object.values(e).reduce((e,t)=>e+(t??0),0),i=Object.values(t).reduce((e,t)=>e+(t??0),0);return xe(n)>=Se(n)||r>0&&i<r}function Jt(e){return lt[e]}function B(e,t){return e===t?0:Yt(e)+Yt(t)}function Yt(e){return e===`camp`?0:Jt(e)}function Xt(e,t){switch(t){case`gatherSticks`:{let e=T(1,3);return{resources:{stick:e},message:`Cameron gathers ${e} ${H(`Stick`,e)}.`,tone:`gain`}}case`gatherStones`:{let e=T(1,2);return{resources:{stone:e},message:`Cameron finds ${e} ${H(`Stone`,e)}.`,tone:`gain`}}case`gatherFlaxFibers`:{let e=T(1,3);return{resources:{flaxFiber:e},message:`Cameron pulls ${e} ${H(`Flax Fiber`,e)} from the brush.`,tone:`gain`}}case`gatherMushrooms`:{let e=T(1,3);return{resources:{mushroom:e},message:`Cameron gathers ${e} ${H(`Mushroom`,e)} from the meadow shade.`,tone:`gain`}}case`gatherBerries`:{let e=T(2,5);return{resources:{berry:e},message:`Cameron picks ${e} ${e===1?`Berry`:`Berries`} from the brambles.`,tone:`gain`}}case`mineCoal`:return an(`coal`);case`mineCopper`:return an(`copper`);case`mineTin`:return an(`tin`);case`fishRiver`:return rn();case`craftLowestTool`:case`craftBasket`:case`craftFishingPole`:case`craftStoneKnife`:case`craftStoneAxe`:case`craftStonePickAxe`:case`craftStoneSpear`:return{resources:{},message:`Cameron finishes a tool.`,tone:`craft`};case`chopTrees`:{let e=T(2,4),t=+(Math.random()<.35);return{resources:{wood:e,stick:t},message:`Cameron chops ${e} ${H(`Wood`,e)}${t?` and saves a usable stick`:``}.`,tone:`gain`}}case`huntSmallAnimals`:return on();case`butcherFish`:return{resources:{},message:`Cameron butchers carried fish.`,tone:`gain`};case`butcherRabbit`:return sn(e,`rabbit`);case`butcherSquirrel`:return sn(e,`squirrel`);case`cookRabbitMeat`:return{resources:{cookedRabbitMeat:1},message:`Cameron cooks rabbit meat over the coals.`,tone:`craft`};case`cookSquirrelMeat`:return{resources:{cookedSquirrelMeat:1},message:`Cameron cooks squirrel meat over the coals.`,tone:`craft`};case`tanHide`:return{resources:{leather:1},message:`Cameron works a hide into rough leather.`,tone:`craft`}}}function V(t){return e.find(e=>e.id===t)?.recipe??{}}function Zt(e,t,n){return t===`craftLowestTool`?pt(e,n):t}function Qt(e){switch(e){case`craftBasket`:return`basket`;case`craftFishingPole`:return`fishingPole`;case`craftStoneKnife`:return`stoneKnife`;case`craftStoneAxe`:return`stoneAxe`;case`craftStonePickAxe`:return`stonePickAxe`;case`craftStoneSpear`:return`stoneSpear`;default:return null}}function $t(t,n,r){let i=e.find(e=>e.id===n);i&&(t.tools[n].quantity+=1,D(t,n)||rt(t,n),v(t,{aggregateKey:`craft:${n}`,text:`Cameron crafted ${un(i.label)}`,amount:1,unit:un(i.label),tone:`craft`,now:r}))}function en(e,t){let n=tn(e);Object.values(n).some(e=>(e??0)>0)&&v(e,{aggregateKey:`action:butcherFish`,text:`Cameron butchered fish`,resources:n,tone:`gain`,now:t})}function tn(e){let t={};for(let n of a){let r=s[n];if(!r||!Te(e,n,`character`))continue;let i=f(r,Ee(e,n,`character`)*.5);return i<=0?t:(e.characterInventory[r]=f(r,e.characterInventory[r]+i),t[r]=f(r,(t[r]??0)+i),e.seenResources.includes(r)||e.seenResources.push(r),t)}return t}function nn(e){return a.some(t=>Te(e,t,`character`))}function rn(){let e=ut[T(0,ut.length-1)],t=et(e.minWeight,e.maxWeight,1),n=m(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron catches a ${p(e.id,t)} lb ${n}.`,tone:`gain`}}function an(e){let t=m(e);return{resources:{[e]:1},message:`Cameron mines 1 ${t}.`,tone:`gain`}}function on(){let e=dt[Math.random()<.58?0:1],t=et(e.minWeight,e.maxWeight,1),n=m(e.id);return{resources:{[e.id]:t},resourceCounts:{[e.id]:1},message:`Cameron brings back a ${p(e.id,t)} lb ${n}.`,tone:`gain`}}function sn(e,t){if(Ee(e,t)<=0)return{resources:{},message:`Cameron has no ${t} to butcher.`,tone:`gain`};let n=t===`rabbit`?`rabbitMeat`:`squirrelMeat`,r=t===`rabbit`?T(1,2):1,i=D(e,`stoneKnife`),a=t===`rabbit`?.65:.42,o=t===`rabbit`?.24:.14,s=+(Math.random()<a),c=+(Math.random()<o),l={[n]:r,hide:i?s:0,bone:i?c:0},u=Object.entries({hide:s,bone:c}).filter(([,e])=>i&&e>0).map(([e,t])=>`${t} ${m(e)}`);return{resources:l,message:`Cameron butchers a ${t} for ${r} ${m(n)}${u.length?`, plus ${u.join(` and `)}`:``}.`,tone:`gain`}}function cn(e,t,n){switch(t){case`fishRiver`:O(e,`fishingPole`,1,n);break;case`mineCoal`:case`mineCopper`:case`mineTin`:O(e,`stonePickAxe`,1,n);break;case`chopTrees`:O(e,`stoneAxe`,1,n);break;case`huntSmallAnimals`:O(e,`stoneSpear`,1,n);break;case`butcherRabbit`:case`butcherSquirrel`:O(e,`stoneKnife`,1,n);break;default:break}}function ln(e){switch(e){case`gatherSticks`:return`Cameron gathered sticks`;case`gatherStones`:return`Cameron gathered stones`;case`gatherFlaxFibers`:return`Cameron gathered flax fibers`;case`gatherMushrooms`:return`Cameron gathered mushrooms`;case`gatherBerries`:return`Cameron gathered berries`;case`mineCoal`:return`Cameron mined coal`;case`mineCopper`:return`Cameron mined copper`;case`mineTin`:return`Cameron mined tin`;case`fishRiver`:return`Cameron caught river fish`;case`craftBasket`:return`Cameron crafted baskets`;case`craftLowestTool`:return`Cameron balanced tool stock`;case`craftFishingPole`:return`Cameron crafted fishing poles`;case`craftStoneKnife`:return`Cameron crafted stone knives`;case`craftStoneAxe`:return`Cameron crafted stone axes`;case`craftStonePickAxe`:return`Cameron crafted stone pick axes`;case`craftStoneSpear`:return`Cameron crafted stone spears`;case`chopTrees`:return`Cameron chopped trees`;case`huntSmallAnimals`:return`Cameron hunted small animals`;case`butcherFish`:return`Cameron butchered fish`;case`butcherRabbit`:return`Cameron butchered rabbits`;case`butcherSquirrel`:return`Cameron butchered squirrels`;case`cookRabbitMeat`:return`Cameron cooked rabbit meat`;case`cookSquirrelMeat`:return`Cameron cooked squirrel meat`;case`tanHide`:return`Cameron tanned hide`}}function H(e,t){return t===1?e:`${e}s`}function un(e){return e.endsWith(`s`)?e:`${e}s`}function U(e,t){let n=e.characters.find(t=>t.id===e.selectedCharacterId);n&&(n.condition=t?`working`:`resting`)}qe.map(e=>e.id);var dn=``+new URL(`bone-icon-DsPaT320.png`,import.meta.url).href,fn=``+new URL(`brook-stickleback-icon-CwY54faB.png`,import.meta.url).href,pn=``+new URL(`basket-empty-slot-BQ3m_a4i.png`,import.meta.url).href,mn=``+new URL(`basket-equipped-slot-DPu5tuXe.png`,import.meta.url).href,hn=``+new URL(`campfire-2x2-Bq-ELFVu.png`,import.meta.url).href,gn=``+new URL(`campfire-unlit-2x2-HI8ea9KO.png`,import.meta.url).href,_n=``+new URL(`coal-icon-CPItI7lv.png`,import.meta.url).href,vn=``+new URL(`copper-icon-Dl9RQPBM.png`,import.meta.url).href,yn=``+new URL(`craft-materials-bundle-button-D-JGRyoh.png`,import.meta.url).href,W=``+new URL(`fish-filet-icon-BHEr_iIj.png`,import.meta.url).href,bn=``+new URL(`fishing-pole-empty-slot-CBM-0Us1.png`,import.meta.url).href,xn=``+new URL(`fishing-pole-equipped-slot-BoLpLWOS.png`,import.meta.url).href,Sn=``+new URL(`flax-fiber-icon-xz-yYl-m.png`,import.meta.url).href,Cn=``+new URL(`forest-location-icon-VKGIFi31.png`,import.meta.url).href,wn=``+new URL(`berry-icon-DEz1wEqt.png`,import.meta.url).href,Tn=``+new URL(`hide-icon-BWeGfM2U.png`,import.meta.url).href,En=``+new URL(`meadow-location-icon-v2-CqdYJu9g.png`,import.meta.url).href,Dn=``+new URL(`mine-location-icon-BbZJUyhx.png`,import.meta.url).href,On=``+new URL(`minnow-icon-ANpglcnc.png`,import.meta.url).href,kn=``+new URL(`mudskipper-icon-_bxkPxea.png`,import.meta.url).href,An=``+new URL(`mushroom-icon-B9zVCy80.png`,import.meta.url).href,jn=``+new URL(`pebble-perch-icon-CHh-9clF.png`,import.meta.url).href,Mn=``+new URL(`rabbit-icon-DGNcKYc7.png`,import.meta.url).href,Nn=``+new URL(`river-location-icon-v2-BqOU5iqQ.png`,import.meta.url).href,Pn=``+new URL(`squirrel-icon-BM6RAXNK.png`,import.meta.url).href,Fn=``+new URL(`stick-icon-Q8m3FMqw.png`,import.meta.url).href,In=``+new URL(`stone-axe-empty-slot-C8iH4xki.png`,import.meta.url).href,Ln=``+new URL(`stone-axe-equipped-slot-BwqHFyCM.png`,import.meta.url).href,Rn=``+new URL(`stone-knife-equipped-slot-I-QJxd8H.png`,import.meta.url).href,zn=``+new URL(`stone-knife-empty-slot-Bc5j7Rbw.png`,import.meta.url).href,Bn=``+new URL(`stone-pick-axe-empty-slot-DOLVpXRk.png`,import.meta.url).href,Vn=``+new URL(`stone-pick-axe-equipped-slot-Cn17-ZkZ.png`,import.meta.url).href,Hn=``+new URL(`stone-spear-empty-slot-BTpRxmYT.png`,import.meta.url).href,Un=``+new URL(`stone-spear-equipped-slot-q16KfMg3.png`,import.meta.url).href,Wn=``+new URL(`stone-icon-yRG7nuNE.png`,import.meta.url).href,Gn=``+new URL(`stone-loach-icon-4ySXaf0_.png`,import.meta.url).href,Kn=``+new URL(`tin-icon-B9xoPCj0.png`,import.meta.url).href,qn=``+new URL(`hide-tent-2x2-B-STXQiW.png`,import.meta.url).href,Jn=``+new URL(`tanning-rack-2x2-DotflpMM.png`,import.meta.url).href,Yn=``+new URL(`wood-icon-CxwJtOlQ.png`,import.meta.url).href;function Xn(e,n,r=Date.now()){Qe(e,r);let i=t.find(e=>e.id===n),a=n===`campfire`?w(e,r):n===`hideTent`?!1:e.buildings[n];if(!i||a||e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId!==`camp`||!st(e,n)||!y(e,i.recipe))return!1;if(_e(e,i.recipe),n===`campfire`)Ye(e,r),fe(e,n,1),_(e,`Cameron builds a campfire and brings it to flame.`,`craft`,r);else if(n===`hideTent`){let t=de(e,n);e.buildings[n]=!0,_(e,`Cameron raises hide tent ${t}.`,`craft`,r),he(e,r)}else e.buildings[n]=!0,fe(e,n,1),_(e,`Cameron builds a ${i.label}.`,`craft`,r);return Qn(e,r),!0}function Zn(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-e.inventory[t]);a>0&&(n[t]=a)}return x(n)}function Qn(e,t){e.updatedAt=t,e.lastSimulatedAt=t}var $n=[{id:`foraging`,label:`Forage`,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxFibers`,`gatherMushrooms`,`gatherBerries`]},{id:`fishing`,label:`Fishing`,actionIds:[`fishRiver`]},{id:`mining`,label:`Mining`,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]},{id:`hunting`,label:`Hunting`,actionIds:[`huntSmallAnimals`]},{id:`woodcutting`,label:`Woodcutting`,actionIds:[`chopTrees`]},{id:`crafting`,label:`Crafting`,actionIds:[`craftLowestTool`,`craftBasket`,`craftFishingPole`,`craftStoneKnife`,`craftStoneAxe`,`craftStonePickAxe`,`craftStoneSpear`]},{id:`butchering`,label:`Butchering`,actionIds:[`butcherFish`,`butcherRabbit`,`butcherSquirrel`]},{id:`cooking`,label:`Cooking`,actionIds:[`cookRabbitMeat`,`cookSquirrelMeat`]},{id:`leatherworking`,label:`Leatherworking`,actionIds:[`tanHide`]}],G=[{id:`gather`,label:`Gather`,filterIds:[`foraging`,`mining`,`fishing`,`hunting`,`woodcutting`]},{id:`processing`,label:`Processing`,filterIds:[`crafting`,`butchering`,`cooking`,`leatherworking`]},{id:`camp`,label:`Camp`,filterIds:[]}],K=[{id:`meadow`,label:`Meadow`,iconUrl:En,actionIds:[`gatherSticks`,`gatherStones`,`gatherMushrooms`,`gatherBerries`]},{id:`river`,label:`River`,iconUrl:Nn,actionIds:[`gatherStones`,`gatherFlaxFibers`]},{id:`forest`,label:`Forest`,iconUrl:Cn,actionIds:[`chopTrees`]},{id:`mine`,label:`Mine`,iconUrl:Dn,actionIds:[`mineCoal`,`mineCopper`,`mineTin`]}],er=`./Map.png`,tr={camp:{x:746,y:603},meadow:{x:260,y:793},river:{x:1327,y:810},forest:{x:410,y:270},mine:{x:1080,y:270}},nr={meadow:`M746 603 C656 666 566 716 456 751 C381 777 318 790 260 793`,river:`M746 603 C860 646 994 715 1128 807 C1190 850 1262 841 1327 810`,forest:`M746 603 C676 558 612 506 565 424 C529 360 483 306 410 270`,mine:`M746 603 C824 540 870 482 900 407 C927 338 992 290 1080 270`},rr={meadow:`M260 793 C318 790 381 777 456 751 C566 716 656 666 746 603`,river:`M1327 810 C1262 841 1190 850 1128 807 C994 715 860 646 746 603`,forest:`M410 270 C483 306 529 360 565 424 C612 506 676 558 746 603`,mine:`M1080 270 C992 290 927 338 900 407 C870 482 824 540 746 603`},ir=10,ar=[`fishingPole`,`stoneKnife`,`stoneAxe`,`stonePickAxe`,`stoneSpear`,`basket`,null,null,null,null],or={basket:mn,fishingPole:xn,stoneKnife:Rn,stoneAxe:Ln,stonePickAxe:Vn,stoneSpear:Un},sr={basket:pn,fishingPole:bn,stoneKnife:zn,stoneAxe:In,stonePickAxe:Bn,stoneSpear:Hn},cr={basket:`Basket`,fishingPole:`Pole`,stoneKnife:`Knife`,stoneAxe:`Axe`,stonePickAxe:`Pick`,stoneSpear:`Spear`},q={berry:wn,bone:dn,brookStickleback:fn,brookSticklebackFilet:W,coal:_n,copper:vn,minnowFilet:W,mudskipperFilet:W,pebblePerchFilet:W,stoneLoachFilet:W,flaxFiber:Sn,hide:Tn,minnow:On,mudskipper:kn,mushroom:An,pebblePerch:jn,rabbit:Mn,squirrel:Pn,stick:Fn,stone:Wn,stoneLoach:Gn,tin:Kn,wood:Yn},lr={basket:[{label:`Slot`,value:`Carry tool`},{label:`Effect`,value:`+5 lb carry capacity`},{label:`Capacity`,value:`15 lb equipped`}],fishingPole:[{label:`Slot`,value:`Fishing tool`},{label:`Effect`,value:`Fishing River unlocked`},{label:`Use`,value:`River fishing`}],stoneKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Unlocks`,value:`Hide and bone recovery`},{label:`Use`,value:`Butchering small animals`}],stoneAxe:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Chop Trees unlocked`},{label:`Wood yield`,value:`2-4`}],stonePickAxe:[{label:`Slot`,value:`Mining tool`},{label:`Effect`,value:`Future mining work`},{label:`Use`,value:`Breaking stone`}],stoneSpear:[{label:`Slot`,value:`Hunting tool`},{label:`Effect`,value:`Hunt Small Animals unlocked`},{label:`Targets`,value:`Rabbit, Squirrel`}]};function ur(e,t){let n=`gather`,r=`foraging`,i=`meadow`,a=`inventory`,o=!1,s=!1,c=null,l=0,u=null,d=null;return e.addEventListener(`click`,e=>{let d=e.target.closest(`[data-command]`);if(!d||d.disabled||d.dataset.disabled===`true`)return;let f=d.dataset.command,p=d.dataset.id,m=u;if(m){if(f===`toggle-test-speed`){t.toggleTestSpeed(),t.requestRender();return}if(f===`set-action-category`&&Kr(p)){s=!1,n=p;let e=Gr(n);e.length&&!e.some(e=>e.id===r)&&(r=e[0]?.id??r),t.requestRender();return}if(f===`set-action-filter`&&qr(p)){s=!1,r=p,t.requestRender();return}if(f===`set-location`&&Yr(p)){s=!1,i=p,t.requestRender();return}if(f===`set-side-panel`&&Xr(p)){a=p,t.requestRender();return}if(f===`toggle-camp-log`){o=!o,s=!1,t.requestRender();return}if(f===`open-map`){o=!1,s=!0,t.requestRender();return}if(f===`select-loop-step`){l=Jr(p,l),c=null,t.requestRender();return}if(f===`insert-loop-after`){l=Jr(p,l),c={afterIndex:l},t.requestRender();return}if(f===`remove-loop-step`&&(l=_t(m,Jr(p,l),t.getNow()),c=null),f===`start-action`&&p){let e=p,n=t.getNow();if(c){gt(m,c.afterIndex,e,{locationId:ni(e,i)},n)&&(l=c.afterIndex+1,c=null),t.persist(),t.requestRender();return}c=null,vt(m,e,n,{locationId:ni(e,i)})}if(f===`stop-action`&&(c=null,yt(m,t.getNow())),f===`deposit-carried`&&(m.currentAction||bt(m,t.getNow())),f===`build-structure`&&p&&Xn(m,p,t.getNow()),f===`reset`){t.reset();return}t.persist(),t.requestRender()}}),e.addEventListener(`pointerover`,t=>{let n=Li(t.target,e);n&&(d=n,Ri(e,n))}),e.addEventListener(`pointerout`,t=>{if(!d)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!d.contains(n))&&(d=null,zi(e))}),e.addEventListener(`focusin`,t=>{let n=Li(t.target,e);n&&(d=n,Ri(e,n))}),e.addEventListener(`focusout`,t=>{if(!d)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!d.contains(n))&&(d=null,zi(e))}),e.addEventListener(`scroll`,()=>{d?.isConnected&&Bi(e,d)},!0),window.addEventListener(`resize`,()=>{d?.isConnected&&Bi(e,d)}),(f,p=t.getNow())=>{u=f;let m=Hi(e),ee=e.querySelector(`#wilderness-canvas`);e.innerHTML=fr(f,r,n,a,i,o,s,c,l,p,t.getTestSpeedMultiplier()),dr(e,ee),d=null,Ui(e,m)}}function dr(e,t){t&&e.querySelector(`#wilderness-canvas`)?.replaceWith(t)}function fr(e,t,n,r,i,a,o,s,c,l,u){return`
    <div class="game-shell">
      ${pr(e,n,a,o,u)}
      <main class="main-panel">
        ${Pr(e,s,c,l)}
        ${o?br(e,l):a?hr(e):vr(e,n,t,i,s,l)}
      </main>
      ${xi(e,r)}
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `}function pr(e,t,n,r,i){let a=e.characters[0],o=e.currentAction?Ur(e):`at ${X(a.locationId)}`;return`
    <aside class="character-sidebar panel">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <div class="brand-heading">
          <h1>First Fire</h1>
          ${mr(i)}
        </div>
      </div>
      <button class="character-card selected" type="button">
        <span class="portrait" aria-hidden="true">C</span>
        <span>
          <strong>${a.name}</strong>
          <small>${o}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${G.map(e=>gr(e,t,r)).join(``)}
              ${_r(r)}
            </div>
          </nav>
          <div class="sidebar-footer">
            ${Ci(n)}
            <button class="ghost-button" type="button" data-command="reset">Reset</button>
          </div>
    </aside>
  `}function mr(e){let t=e===10;return`
    <button
      class="test-speed-button ${t?`active`:``}"
      type="button"
      data-command="toggle-test-speed"
      aria-pressed="${t}"
      title="Toggle 10x test speed"
    >
      10x
    </button>
  `}function hr(e){return`
    <div class="work-area single-panel">
      ${Wi(e,`main-log-panel panel`)}
    </div>
  `}function gr(e,t,n){let r=!n&&e.id===t;return`
    <button
      class="category-button ${r?`active`:``}"
      type="button"
      data-command="set-action-category"
      data-id="${e.id}"
      aria-pressed="${r}"
    >
      <span>${e.label}</span>
    </button>
  `}function _r(e){return`
    <button
      class="category-button map-button ${e?`active`:``}"
      type="button"
      data-command="open-map"
      aria-pressed="${e}"
    >
      <span>Map</span>
    </button>
  `}function vr(e,t,n,r,i,a){return t===`camp`?`
      <div class="work-area camp-work-area">
        ${yr(e)}
        ${pi(e,a)}
      </div>
    `:`
      <div class="work-area">
      ${Mr(e,t,n)}
      ${jr(e,n,r,i)}
    </div>
  `}function yr(e){return`
    <section class="panel camp-stats-panel" aria-label="Camp stats">
      <div class="section-heading">
        <span>Stats</span>
      </div>
      <div class="camp-stat-list">
        <div class="camp-stat-row">
          <span>Population</span>
          <strong>${pe(e)}/${me(e)}</strong>
        </div>
      </div>
    </section>
  `}function br(e,t){return`
    <div class="work-area single-panel">
      <section class="panel location-map-panel" aria-label="World map">
        <div class="location-map-frame">
          <img class="location-map-image" src="${er}" alt="Idle Town parchment world map" />
          <svg class="location-map-traveler-layer" viewBox="0 0 1536 1000" aria-hidden="true">
            <defs>
              ${Object.entries(nr).map(([e,t])=>`<path id="map-route-${e}" class="location-map-route" d="${t}" />`).join(``)}
              ${Object.entries(rr).map(([e,t])=>`<path id="map-return-route-${e}" class="location-map-route" d="${t}" />`).join(``)}
            </defs>
            ${e.characters.map((n,r)=>xr(e,n,r,t)).join(``)}
          </svg>
        </div>
      </section>
    </div>
  `}function xr(e,t,n,r){let i=e.currentAction?.characterId===t.id?e.currentAction:null,a=t.locationId??`camp`,o=kr(n);if(i&&(i.phase===`travelingTo`||i.phase===`travelingBack`)){let e=Er(i,a),n=J(i);if(e!==n)return Sr(t,i,e,n,o,r)}return Cr(t,i&&(i.phase===`working`||i.phase===`followUp`)?tr[J(i)]:tr[a],o,!!i)}function Sr(e,t,n,r,i,a){let o=Tr(t,a),s=`map-character-route-${Or(e.id)}`,c=Dr(n,r),l=o;return`
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
        ${wr(e,!0)}
      </g>
    </g>
  `}function Cr(e,t,n,r){return`
    <g class="location-map-character ${r?`working`:`idle`}" transform="translate(${t.x+n.x} ${t.y+n.y})">
      ${wr(e,r)}
    </g>
  `}function wr(e,t){return`
    <circle class="location-map-character-shadow" cx="0" cy="4" r="15" />
    <circle class="location-map-character-ring" cx="0" cy="0" r="13" />
    <circle class="location-map-character-face ${t?`active`:``}" cx="0" cy="0" r="10" />
    <text class="location-map-character-initial" x="0" y="4">${Ar(e.name)}</text>
    <text class="location-map-character-name" x="0" y="29">${e.name}</text>
  `}function Tr(e,t){let n=e.endsAt-e.startedAt;return n<=0?1:$e((t-e.startedAt)/n,0,1)}function J(e){return e.targetLocationId?e.targetLocationId:e.phase===`travelingBack`?`camp`:e.locationId??`camp`}function Er(e,t){return e.originLocationId?e.originLocationId:e.phase===`travelingBack`?e.locationId??t:t}function Dr(e,t){if(e===t){let t=tr[e];return`M${t.x} ${t.y}`}if(e===`camp`&&t!==`camp`)return nr[t];if(e!==`camp`&&t===`camp`)return rr[e];let n=e,r=t;return`${rr[n]} ${nr[r].replace(/^M746 603\s+/,``)}`}function Or(e){return e.replace(/[^a-zA-Z0-9_-]/g,`-`)}function kr(e){let t=[{x:0,y:0},{x:26,y:-10},{x:-26,y:12},{x:14,y:24}];return t[e%t.length]??t[0]}function Ar(e){return(e.trim().split(/\s+/).map(e=>e[0]).join(``)||`?`).slice(0,2).toUpperCase()}function jr(e,t,n,r){let i=Wr(t);return`
    <div class="action-stack">
      ${Qr(i.id)?ii(i,n):``}
      ${Fr(e,t,n,r)}
    </div>
  `}function Mr(e,t,n){return`
    <section class="panel skill-panel">
      <div class="skill-grid">
        ${Gr(t).map(t=>Nr(e,t,n)).join(``)}
      </div>
    </section>
  `}function Nr(e,t,n){let r=t.id===n,i=Hr(e,t.actionIds??[]);return`
    <button
      class="skill-button ${r?`active`:``} ${i?`current`:``}"
      type="button"
      data-command="set-action-filter"
      data-id="${t.id}"
      aria-pressed="${r}"
    >
      <span>${t.label}</span>
      ${i?`<small>${i}</small>`:``}
    </button>
  `}function Pr(e,t,n,r){return`
    <section class="world-panel panel">
      <canvas id="wilderness-canvas" class="wilderness-canvas" aria-label="A primitive forest camp"></canvas>
      ${Lr(e,t,n,r)}
    </section>
  `}function Fr(e,t,n,r){let i=Wr(t),a=i.id===`foraging`||i.id===`woodcutting`?$r(n,i.id).actionIds:i.actionIds??[];return i.id===`crafting`?Ir(e,a,r):`
      <section class="action-panel">
        <div class="action-grid">
          ${a.map(t=>si(e,t,r)).join(``)}
        </div>
    </section>
  `}function Ir(e,t,n){let r=`craftLowestTool`,i=t.filter(e=>e!==r);return`
    <section class="action-panel crafting-action-panel">
      <div class="crafting-card">
        ${oi(e,r,n)}
        <div class="crafting-action-grid">
          ${i.map(t=>si(e,t,n)).join(``)}
        </div>
      </div>
    </section>
  `}function Lr(e,t,n,r){if(!e.currentAction)return`
      <section class="current-action-panel idle">
        <div class="current-action-content idle">
          <strong>No active work</strong>
          <span>Choose a task for Cameron.</span>
        </div>
      </section>
    `;let i=$e(St(e,r),0,1),a=E(e.currentAction.endsAt-r);return`
    <section class="current-action-panel">
      <div class="current-action-content">
        <div class="current-action-copy">
          <strong>${Vr(e)}</strong>
        </div>
        <button class="icon-button" type="button" data-command="stop-action" title="Stop action">Stop</button>
        <div class="action-loop-stack">
          ${Rr(e,t,n)}
        </div>
        <div class="progress-track">
          <span data-action-progress style="transform: scaleX(${i.toFixed(4)})"></span>
          <em data-action-remaining>${a}</em>
        </div>
      </div>
    </section>
  `}function Rr(e,t,n){let r=e.currentAction;if(!r)return``;let i=M(r),a=Math.min(i.length-1,Math.max(0,n));return`
    <div class="action-loop-controls" aria-label="Action loop">
      <span class="action-loop-label">action loop</span>
      ${i.map((e,n)=>zr(e,n,a,t,i.length)).join(``)}
    </div>
  `}function zr(e,t,n,r,i){let a=t===n,o=r?.afterIndex===t;return`
    <div class="action-loop-row ${a?`selected`:``}">
      <button
        class="action-loop-step ${a?`selected`:``} ${o?`assigning`:``}"
        type="button"
        data-command="select-loop-step"
        data-id="${t}"
        aria-pressed="${a}"
      >
        ${Br(e)}
      </button>
      ${a?`<span class="action-loop-row-tools">
              <button class="action-loop-icon" type="button" data-command="insert-loop-after" data-id="${t}" title="Add action after ${Br(e)}">+</button>
              <button class="action-loop-icon" type="button" data-command="remove-loop-step" data-id="${t}" title="Remove ${Br(e)}" ${t===0||i<=1?`disabled`:``}>-</button>
            </span>`:``}
    </div>
  `}function Br(e){return e===`fishRiver`?`Fish River`:C(e)?.label??`Action`}function Vr(e){let t=e.currentAction;if(!t)return`Working`;let n=X(J(t)),r=X(Er(t,`camp`));return t.phase===`travelingTo`?`Traveling to ${n}`:t.phase===`travelingBack`?`Returning to camp from ${r}`:t.phase===`followUp`?Y(t)===`butcherFish`?`Butchering Fish`:C(Y(t))?.label??`Working`:C(t.actionId)?.label??`Working`}function Hr(e,t){let n=e.currentAction;if(!n)return null;let r=Y(n);return t.includes(r)?C(r)?.label??`Working`:null}function Ur(e){let t=e.currentAction;if(!t)return`keeping still`;let n=X(J(t)),r=X(Er(t,`camp`));return t.phase===`travelingTo`?`traveling to ${n}`:t.phase===`travelingBack`?`returning to camp from ${r}`:t.phase===`followUp`?C(Y(t))?.verb??`working`:C(t.actionId)?.verb??`working`}function Y(e){return e.phase===`followUp`&&e.followUpActionId?e.followUpActionId:e.actionId}function Wr(e){return $n.find(t=>t.id===e)??$n[0]}function Gr(e){return(G.find(t=>t.id===e)??G[0]).filterIds.map(e=>Wr(e))}function Kr(e){return G.some(t=>t.id===e)}function qr(e){return $n.some(t=>t.id===e)}function Jr(e,t){let n=Number(e);return Number.isFinite(n)?Math.max(0,Math.floor(n)):t}function Yr(e){return K.some(t=>t.id===e)}function Xr(e){return e===`inventory`||e===`equipment`||e===`log`}function Zr(e){return e.characters.find(t=>t.id===e.selectedCharacterId)?.locationId===`camp`}function X(e){return e===`camp`?`camp`:`the ${$r(e).label.toLowerCase()}`}function Qr(e){return e===`foraging`||e===`mining`||e===`fishing`||e===`hunting`||e===`woodcutting`}function $r(e,t){let n=t?ei(t):K;return n.find(t=>t.id===e)??n[0]}function ei(e){switch(e){case`mining`:return K.filter(e=>e.id===`mine`);case`fishing`:return K.filter(e=>e.id===`river`);case`hunting`:return K.filter(e=>e.id===`meadow`);case`woodcutting`:return K.filter(e=>e.id===`forest`);default:return K.filter(e=>e.id===`meadow`||e.id===`river`)}}function ti(e,t){return e===`mining`?`mine`:e===`hunting`?`meadow`:e===`fishing`?`river`:e===`woodcutting`?`forest`:t===`meadow`||t===`river`?t:`meadow`}function ni(e,t){return ri(e)?`mine`:e===`huntSmallAnimals`?`meadow`:e===`fishRiver`?`river`:e===`chopTrees`?`forest`:t===`forest`?`meadow`:t}function ri(e){return e===`mineCoal`||e===`mineCopper`||e===`mineTin`}function ii(e,t){return`
    <section class="panel location-panel">
      ${ai(ei(e.id),ti(e.id,t),e.label)}
    </section>
  `}function ai(e,t,n){return`
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
            >
              <img class="location-tab-image" src="${e.iconUrl}" alt="" aria-hidden="true" />
              <span class="location-tab-label">${e.label}</span>
            </button>
          `}).join(``)}
    </div>
  `}function oi(e,t,n){let r=C(t);if(!r)return``;let i=pt(e),a=i?C(i):void 0,o=k(e,t),s=j(e,t),c=!!(n&&e.currentAction),l=!!(c&&e.currentAction&&n&&ht(e.currentAction,n.afterIndex,t)),u=e.currentAction?Y(e.currentAction)===t:!1,d=c?!l:!s||u,f=s?``:ot(e,t),p=[{label:`Speed`,value:E(r.durationMs)},{label:`Uses`,value:i?x(A(i)):`Varies by target`},{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}],m=c?l?`Set as action loop step`:`Not valid for this loop`:!s&&f?f:a?`Next: ${a.label}`:``;return`
    <button
      class="craft-priority-button ${u?`active`:``} ${l?`assignable`:``} ${!o&&!l?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-disabled="${d}"
      data-tooltip-source
      aria-disabled="${d}"
      aria-label="${c?`Set`:u?`Running`:s?`Start`:`Locked`} ${r.label}${a?`, next ${a.label}`:``}"
    >
      <span class="craft-priority-main" aria-hidden="true">
        <img src="${yn}" alt="" aria-hidden="true" />
      </span>
      ${li(r.label,p,m)}
    </button>
  `}function si(e,t,n){let r=C(t);if(!r)return``;let i=k(e,t),a=A(t),o=j(e,t),s=!!(n&&e.currentAction),c=!!(s&&e.currentAction&&n&&ht(e.currentAction,n.afterIndex,t)),l=e.currentAction?Y(e.currentAction)===t:!1,u=s?!c:!o||l,d=t===`butcherFish`||t===`butcherRabbit`||t===`butcherSquirrel`||t===`cookRabbitMeat`||t===`cookSquirrelMeat`?ot(e,t):Zn(e,a),f=o?``:i?d:ot(e,t),p=fi(t,r.durationMs),m=s?c?`Set as action loop step`:`Not valid for this loop`:!o&&f?f:``;return`
    <button
      class="action-card ${l?`active`:``} ${c?`assignable`:``} ${!i&&!c?`locked`:``}"
      type="button"
      data-command="start-action"
      data-id="${t}"
      data-disabled="${u}"
      data-tooltip-source
      aria-disabled="${u}"
      aria-label="${s?`Set`:l?`Running`:o?`Start`:`Locked`} ${r.label}"
    >
      <span class="action-card-main" aria-hidden="true">
        ${ci(t)}
      </span>
      ${li(r.label,p,m)}
    </button>
  `}function ci(e){let t=ui(e);return t.length?`
    <span class="action-card-icon ${t.length>1?`multi`:``}">
      ${t.map(e=>`<img src="${e}" alt="" aria-hidden="true" />`).join(``)}
    </span>
  `:`<span class="action-card-glyph">${di(e)}</span>`}function li(e,t,n){return`
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
  `}function ui(e){switch(e){case`gatherSticks`:return[Fn];case`gatherStones`:return[Wn];case`gatherFlaxFibers`:return[Sn];case`gatherMushrooms`:return[An];case`gatherBerries`:return[wn];case`mineCoal`:return[_n];case`mineCopper`:return[vn];case`mineTin`:return[Kn];case`fishRiver`:return[On];case`craftLowestTool`:return[yn];case`craftBasket`:return[mn];case`craftFishingPole`:return[xn];case`craftStoneKnife`:return[Rn];case`craftStoneAxe`:return[Ln];case`craftStonePickAxe`:return[Vn];case`craftStoneSpear`:return[Un];case`chopTrees`:return[Yn];case`huntSmallAnimals`:return[Mn,Pn];case`butcherFish`:return[W];case`butcherRabbit`:case`cookRabbitMeat`:return[Mn];case`butcherSquirrel`:case`cookSquirrelMeat`:return[Pn];case`tanHide`:return[Tn]}}function di(e){let t=C(e);return t?t.label.split(` `).map(e=>e[0]??``).join(``).slice(0,2).toUpperCase():`?`}function fi(e,t){let n=[{label:`Speed`,value:E(t)}];switch(e){case`gatherSticks`:return[...n,{label:`Pickup`,value:`1-3 Sticks`},{label:`Each`,value:`1 weight`}];case`gatherStones`:return[...n,{label:`Pickup`,value:`1-2 Stones`},{label:`Each`,value:`1 weight`}];case`gatherFlaxFibers`:return[...n,{label:`Pickup`,value:`1-3 Flax Fibers`},{label:`Each`,value:`1 weight`}];case`gatherMushrooms`:return[...n,{label:`Pickup`,value:`1-3 Mushrooms`},{label:`Each`,value:`0.1 weight`}];case`gatherBerries`:return[...n,{label:`Pickup`,value:`2-5 Berries`},{label:`Each`,value:`0.1 weight`}];case`mineCoal`:return[...n,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Coal`},{label:`Each`,value:`1 weight`}];case`mineCopper`:return[...n,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Copper`},{label:`Each`,value:`1 weight`}];case`mineTin`:return[...n,{label:`Requires`,value:`Stone Pick Axe`},{label:`Pickup`,value:`1 Tin`},{label:`Each`,value:`1 weight`}];case`fishRiver`:return[...n,{label:`Requires`,value:`Fishing Pole`},{label:`Pickup`,value:`1 fish`},{label:`Each`,value:`0.5-7.5 lb`},{label:`Fish`,value:`Minnow 0.5-1.5, Loach 1-3, Mudskipper 1.5-4.5, Stickleback 0.5-2, Perch 2-7.5 lb`}];case`chopTrees`:return[...n,{label:`Pickup`,value:`2-4 Wood, 35% chance for 1 Stick`},{label:`Each`,value:`Wood 2 weight, Stick 1 weight`}];case`huntSmallAnimals`:return[...n,{label:`Pickup`,value:`1 Rabbit or Squirrel`},{label:`Each`,value:`Rabbit 2-5 lb, Squirrel 0.5-2 lb`}];case`craftLowestTool`:return[...n,{label:`Keeps`,value:`Rechecks after each craft`},{label:`Chooses`,value:`Lowest Stock`}];case`craftBasket`:return[...n,{label:`Makes`,value:`1 Basket`},{label:`Uses`,value:x(A(e))}];case`craftFishingPole`:return[...n,{label:`Makes`,value:`1 Fishing Pole`},{label:`Uses`,value:x(A(e))}];case`craftStoneKnife`:return[...n,{label:`Makes`,value:`1 Stone Knife`},{label:`Uses`,value:x(A(e))}];case`craftStoneAxe`:return[...n,{label:`Makes`,value:`1 Stone Axe`},{label:`Uses`,value:x(A(e))}];case`craftStonePickAxe`:return[...n,{label:`Makes`,value:`1 Stone Pick Axe`},{label:`Uses`,value:x(A(e))}];case`craftStoneSpear`:return[...n,{label:`Makes`,value:`1 Stone Spear`},{label:`Uses`,value:x(A(e))}];case`butcherFish`:return[...n,{label:`Uses`,value:`1 carried fish`},{label:`Makes`,value:`Matching filet at 50% fish weight`}];case`butcherRabbit`:return[...n,{label:`Uses`,value:`1 Rabbit`},{label:`Each`,value:`2-5 lb`},{label:`Makes`,value:`1-2 Rabbit Meat; knife can recover Hide or Bone`}];case`butcherSquirrel`:return[...n,{label:`Uses`,value:`1 Squirrel`},{label:`Each`,value:`0.5-2 lb`},{label:`Makes`,value:`1 Squirrel Meat; knife can recover Hide or Bone`}];case`cookRabbitMeat`:return[...n,{label:`Uses`,value:`1 Rabbit Meat`},{label:`Makes`,value:`1 Cooked Rabbit Meat`}];case`cookSquirrelMeat`:return[...n,{label:`Uses`,value:`1 Squirrel Meat`},{label:`Makes`,value:`1 Cooked Squirrel Meat`}];case`tanHide`:return[...n,{label:`Uses`,value:`1 Hide`},{label:`Makes`,value:`1 Leather`}]}}function pi(e,n){let r=t.filter(t=>st(e,t.id,n));return`
    <section class="panel camp-panel">
      <div class="craft-list">
        ${r.length?r.map(t=>mi(e,t,n)).join(``):`<div class="empty-line">Nothing sturdy enough to name yet.</div>`}
      </div>
    </section>
  `}function mi(e,t,n){let r=gi(e,t.id,n),i=y(e,t.recipe),a=Zr(e),o=!_i(t.id)&&r||!i||!a,s=vi(e,t.id,n),c=yi(e,t.id,n);return`
    <article class="craft-item building-card ${r||ue(e,t.id)>0?`owned`:``} ${t.id===`campfire`&&r?`lit`:``}">
      <button
        class="building-image-button"
        type="button"
        data-command="build-structure"
        data-id="${t.id}"
        data-disabled="${o}"
        data-tooltip-source
        aria-disabled="${o}"
        aria-label="${c} ${t.label}"
      >
        <img class="building-image" src="${s}" alt="" aria-hidden="true" />
        ${hi(e,t,n)}
      </button>
    </article>
  `}function hi(e,t,n){let r=gi(e,t.id,n),i=y(e,t.recipe),a=Zr(e),o=[{label:`Status`,value:bi(e,t.id,n,r,i,a)},{label:`Cost`,value:x(t.recipe)},{label:`Use`,value:t.blurb}];return`
    <div class="slot-tooltip" role="tooltip">
      <div class="tooltip-title">
        <strong>${t.label}</strong>
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
  `}function gi(e,t,n){return _i(t)?!1:t===`campfire`?w(e,n):e.buildings[t]}function _i(e){return e===`hideTent`}function vi(e,t,n){switch(t){case`campfire`:return w(e,n)?hn:gn;case`tanningRack`:return Jn;case`hideTent`:return qn}}function yi(e,t,n){return _i(t)?`Build`:t===`campfire`&&w(e,n)?`Lit`:gi(e,t,n)?`Built`:`Build`}function bi(e,n,r,i,a,o){if(!o&&!i)return`Needs Cameron at camp`;if(n===`hideTent`){let r=ue(e,n);return a?`Tents: ${r}; next gives +1 housing`:`Tents: ${r}; needs ${Zn(e,t.find(e=>e.id===n)?.recipe??{})}`}return n===`campfire`?i?`Lit, burns out in <b data-campfire-remaining>${E(Xe(e,r))}</b>`:a?`Ready to build, burns for 15m`:`Needs ${Zn(e,t.find(e=>e.id===n)?.recipe??{})}`:i?`Built`:a?`Ready to build`:`Needs ${Zn(e,t.find(e=>e.id===n)?.recipe??{})}`}function xi(e,t){return`
    <aside class="inventory-panel panel ${t===`log`?`log-open`:`log-hidden`}">
      <div class="panel-tabs" role="tablist" aria-label="Character panel">
        ${wi(`inventory`,`Inventory`,t)}
        ${wi(`equipment`,`Equipment`,t)}
        ${wi(`log`,`Log`,t)}
      </div>
      ${Si(e,t)}
    </aside>
  `}function Si(e,t){switch(t){case`equipment`:return Mi(e);case`log`:return Wi(e,`side-log-panel`);case`inventory`:return Ti(e)}}function Ci(e){return`
    <button
      class="camp-log-toggle ${e?`active`:``}"
      type="button"
      data-command="toggle-camp-log"
      aria-pressed="${e}"
    >
      Camp Log
    </button>
  `}function wi(e,t,n){let r=e===n;return`
    <button
      class="panel-tab ${r?`active`:``}"
      type="button"
      role="tab"
      aria-selected="${r}"
      data-command="set-side-panel"
      data-id="${e}"
    >
      ${t}
    </button>
  `}function Ti(e){let t=r.filter(t=>e.seenResources.includes(t)||e.inventory[t]>0||b(e,t)>0),i=n.reduce((e,n)=>(t.includes(n.id)&&(e[n.group]=e[n.group]??[],e[n.group].push(n.id)),e),{});return`
    <section class="side-panel-content">
      ${Ei(e)}
      ${Object.entries(i).map(([t,n])=>Di(e,t,n)).join(``)}
      ${Ai(e)}
    </section>
  `}function Ei(e){let t=r.filter(t=>e.characterInventory[t]>0||b(e,t,`character`)>0),n=xe(e),i=Se(e),a=t.filter(e=>!!q[e]),o=t.filter(e=>!q[e]),s=!e.currentAction&&Zr(e);return`
    <div class="resource-group character-inventory-group">
      <div class="inventory-summary-heading">
        <h3>Camerons Inventory</h3>
        <span>${qi(n)}/${qi(i)}</span>
      </div>
      ${t.length?`<button class="deposit-button" type="button" data-command="deposit-carried" ${s?``:`disabled`}>Store at Camp</button>`:``}
      ${t.length?`
            ${a.length?`<div class="inventory-resource-grid" aria-label="Cameron's carried inventory">
                    ${a.map(t=>ki(e,t,e.characterInventory,`character`)).join(``)}
                  </div>`:``}
            ${o.map(t=>Oi(t,e.characterInventory)).join(``)}
          `:`<div class="empty-line">Pack empty.</div>`}
    </div>
  `}function Di(e,t,n){let r=n.filter(e=>!!q[e]),i=n.filter(e=>!q[e]);return`
    <div class="resource-group">
      <h3>${Yi(t)}</h3>
      ${r.length?`<div class="inventory-resource-grid" aria-label="${Yi(t)} inventory">
              ${r.map(t=>ki(e,t)).join(``)}
            </div>`:``}
      ${i.map(t=>`
        ${Oi(t,e.inventory)}
      `).join(``)}
    </div>
  `}function Oi(e,t){return`
    <div class="resource-row">
      <span>
        <strong>${m(e)}</strong>
        <small>${n.find(t=>t.id===e)?.blurb??``}</small>
      </span>
      <b>${Ki(e,t[e])}</b>
    </div>
  `}function ki(e,t,r=e.inventory,i=`camp`){let a=q[t],o=n.find(e=>e.id===t);if(!a||!o)return``;let s=b(e,t,i),c=d(t)?`, quantity ${s}`:``;return`
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${o.label}, ${Ki(t,r[t])}${c}">
      <img class="slot-item-icon" src="${a}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${p(t,r[t])}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${o.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${Yi(o.group)}</dd>
          </div>
          ${u(t)?`<div>
                  <dt>Total</dt>
                  <dd>${Ki(t,r[t])}</dd>
                </div>`:``}
          ${d(t)?`<div>
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
  `}function Ai(t){let n=e.filter(e=>t.tools[e.id].quantity>0);return n.length?`
    <section class="resource-group tool-inventory">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${n.map(e=>ji(t,e.id)).join(``)}
      </div>
    </section>
  `:``}function ji(t,n){let r=e.find(e=>e.id===n),i=t.tools[n];if(!r||i.quantity<=0)return``;let a=nt(n),o=[{label:`Durability`,value:`${a}/${a}`},...lr[n]];return`
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${r.label}, ${i.quantity} ${i.quantity===1?`spare`:`spares`}">
      ${Pi(n)}
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
  `}function Mi(e){return`
    <section class="side-panel-content equipment-screen">
      <h3>Tools</h3>
      <div class="equipment-grid" aria-label="Equipment slots">
        ${ar.slice(0,ir).map((t,n)=>t&&e.tools[t].owned?Ni(e,t):Fi(n,t)).join(``)}
      </div>
    </section>
  `}function Ni(t,n){let r=e.find(e=>e.id===n),i=t.tools[n];if(!r||!i.owned)return``;let a=nt(n),o=Math.max(0,i.durability),s=o>0,c=(o/a*100).toFixed(1),l=[{label:`Durability`,value:s?`${o}/${a}`:`Broken`},{label:`Inventory`,value:`${i.quantity} ${i.quantity===1?`spare`:`spares`}`},...lr[n]],u=!!or[n];return`
    <article class="equipment-slot ${s?``:`broken`} ${u?`icon-only`:``}" tabindex="0" data-tooltip-source aria-label="${r.label}">
      ${Pi(n)}
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
  `}function Pi(e){let t=or[e];return t?`<img class="slot-item-icon" src="${t}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${Ii(e)}</span>`}function Fi(e,t){let n=t?sr[t]:void 0,r=t?cr[t]??`Empty`:`Empty`;return`
    <div class="equipment-slot empty ${n?`image-empty`:``}" aria-label="Empty equipment slot ${e+1}">
      ${n?`<img class="slot-shadow-icon" src="${n}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">+</span>`}
      <strong>${r}</strong>
    </div>
  `}function Ii(e){switch(e){case`basket`:return`BK`;case`fishingPole`:return`FP`;case`stoneAxe`:return`AX`;case`stonePickAxe`:return`PX`;case`stoneSpear`:return`SP`;case`stoneKnife`:return`KN`}}function Li(e,t){if(!(e instanceof Element))return null;let n=e.closest(`[data-tooltip-source]`);return n&&t.contains(n)?n:null}function Ri(e,t){let n=t.querySelector(`.slot-tooltip`),r=Vi(e);!n||!r||(r.innerHTML=n.innerHTML,r.setAttribute(`aria-hidden`,`false`),r.classList.add(`visible`),Bi(e,t))}function zi(e){let t=Vi(e);t&&(t.classList.remove(`visible`),t.setAttribute(`aria-hidden`,`true`),t.innerHTML=``)}function Bi(e,t){let n=Vi(e);if(!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth,o=window.innerHeight,s=i.width,c=i.height,l=r.left-s-8;if(l<12){let e=r.right+8;l=e+s<=a-12?e:a-s-12}let u=Math.max(12,o-c-12),d=Math.min(Math.max(r.top,12),u);n.style.left=`${Math.max(12,Math.round(l))}px`,n.style.top=`${Math.round(d)}px`}function Vi(e){return e.querySelector(`.tooltip-layer`)}function Hi(e){return new Map([`.log-list`,`.side-panel-content`].map(t=>[t,e.querySelector(t)?.scrollTop??0]))}function Ui(e,t){for(let[n,r]of t){let t=e.querySelector(n);t&&(t.scrollTop=r)}}function Wi(e,t=``){return`
    <section class="log-panel ${t}">
      <div class="section-heading">
        <span>Camp Log</span>
        <span class="quiet">${e.log.length}</span>
      </div>
        <div class="log-list">
          ${e.log.map(e=>`
            <p class="log-entry ${e.tone}">
              <span>${e.text}</span>
              ${Gi(e)}
            </p>
          `).join(``)}
        </div>
    </section>
  `}function Gi(e){if(e.aggregateItems){let t=r.filter(t=>(e.aggregateItems?.[t]??0)>0).map(t=>{let n=e.aggregateItems?.[t]??0;return`<b>+${p(t,n)} ${Ji(t,n)}</b>`});return t.length?`<span class="log-gains">${t.join(``)}</span>`:``}return e.aggregateTotal?`<span class="log-gains"><b>+${e.aggregateTotal} ${e.aggregateUnit??``}</b></span>`:``}function Ki(e,t){return u(e)?`${p(e,t)} lb`:p(e,t)}function qi(e){let t=Math.round(e*10)/10;return Number.isInteger(t)?`${t}`:t.toFixed(1)}function Ji(e,t){let n=m(e);if(u(e))return`lb ${n}`;if(t===1)return n;switch(e){case`wood`:case`rabbitMeat`:case`squirrelMeat`:case`cookedRabbitMeat`:case`cookedSquirrelMeat`:case`leather`:return n;case`flaxFiber`:return`Flax Fibers`;case`berry`:return`Berries`;case`coal`:case`copper`:case`tin`:return n;default:return`${n}s`}}function Yi(e){switch(e){case`resources`:return`Resources`;case`animals`:return`Animals`;case`hunted`:return`Hunted`;case`fish`:return`Fish`;case`crafted`:return`Worked`;default:return e}}var Xi=class{canvas;context;state=null;startTime=performance.now();frame=0;handleResize=()=>this.resize();constructor(e){let t=e.getContext(`2d`);if(!t)throw Error(`Canvas rendering is unavailable.`);this.canvas=e,this.context=t,this.resize(),window.addEventListener(`resize`,this.handleResize)}setState(e){this.state=e}start(){let e=()=>{this.render(performance.now()),this.frame=window.requestAnimationFrame(e)};e()}stop(){window.cancelAnimationFrame(this.frame),window.removeEventListener(`resize`,this.handleResize)}resize(){let e=this.canvas.getBoundingClientRect(),t=window.devicePixelRatio||1;this.canvas.width=Math.max(1,Math.floor(e.width*t)),this.canvas.height=Math.max(1,Math.floor(e.height*t)),this.context.setTransform(t,0,0,t,0,0)}render(e){let t=this.context,n=this.canvas.clientWidth,r=this.canvas.clientHeight,i=(e-this.startTime)/1e3,a=t.createLinearGradient(0,0,0,r);a.addColorStop(0,`#151915`),a.addColorStop(.5,`#26322a`),a.addColorStop(1,`#1c1712`),t.fillStyle=a,t.fillRect(0,0,n,r),this.drawMoon(t,n,r,i),this.drawFog(t,n,r,i),this.drawForestLayer(t,n,r,.68,`#121711`,.35,i),this.drawForestLayer(t,n,r,.78,`#0c100d`,.8,i+7),this.drawGround(t,n,r),this.state&&w(this.state)?this.drawCampfire(t,n,r,i):this.drawColdAsh(t,n,r,i)}drawMoon(e,t,n,r){let i=t*.78,a=n*.22+Math.sin(r*.08)*3,o=Math.max(18,Math.min(t,n)*.08),s=e.createRadialGradient(i,a,o*.2,i,a,o*3.6);s.addColorStop(0,`rgba(234, 221, 179, 0.34)`),s.addColorStop(1,`rgba(234, 221, 179, 0)`),e.fillStyle=s,e.beginPath(),e.arc(i,a,o*3.6,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(238, 226, 188, 0.76)`,e.beginPath(),e.arc(i,a,o,0,Math.PI*2),e.fill()}drawFog(e,t,n,r){e.save(),e.globalAlpha=.18,e.fillStyle=`#d5d0bf`;for(let i=0;i<4;i+=1){let a=n*(.48+i*.09),o=(r*(8+i*2)+i*140)%(t+260)-130;e.beginPath(),e.ellipse(o,a,150+i*38,16+i*2,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(o-t*.55,a+8,180,15,0,0,Math.PI*2),e.fill()}e.restore()}drawForestLayer(e,t,n,r,i,a,o){e.save(),e.globalAlpha=a,e.fillStyle=i;let s=n*r,c=Math.ceil(t/42)+2;for(let t=-1;t<c;t+=1){let n=t*42+Math.sin(t*2.3+o*.2)*4,r=54+t*31%44;e.beginPath(),e.moveTo(n,s-r),e.lineTo(n-22,s),e.lineTo(n+22,s),e.closePath(),e.fill(),e.fillRect(n-3,s-18,6,30)}e.restore()}drawGround(e,t,n){let r=e.createLinearGradient(0,n*.72,0,n);r.addColorStop(0,`#1f2117`),r.addColorStop(1,`#12110d`),e.fillStyle=r,e.fillRect(0,n*.72,t,n*.28),e.strokeStyle=`rgba(208, 177, 113, 0.12)`,e.lineWidth=1;for(let r=0;r<10;r+=1){let i=n*(.77+r*.025);e.beginPath(),e.moveTo(0,i),e.quadraticCurveTo(t*.5,i+(r%2==0?7:-5),t,i+3),e.stroke()}}drawColdAsh(e,t,n,r){let i=t*.5,a=n*.82;e.fillStyle=`rgba(160, 152, 132, 0.2)`,e.beginPath(),e.ellipse(i,a,38+Math.sin(r)*2,9,0,0,Math.PI*2),e.fill(),e.strokeStyle=`rgba(210, 194, 148, 0.32)`,e.lineWidth=3,e.beginPath(),e.moveTo(i-32,a-1),e.lineTo(i+30,a+3),e.moveTo(i-18,a+5),e.lineTo(i+22,a-5),e.stroke()}drawCampfire(e,t,n,r){let i=t*.5,a=n*.82,o=Math.sin(r*12)*.12+Math.sin(r*19)*.08,s=e.createRadialGradient(i,a-10,4,i,a-8,110);s.addColorStop(0,`rgba(255, 194, 92, 0.46)`),s.addColorStop(1,`rgba(255, 116, 45, 0)`),e.fillStyle=s,e.beginPath(),e.arc(i,a-8,110,0,Math.PI*2),e.fill(),e.strokeStyle=`#5d4730`,e.lineWidth=5,e.beginPath(),e.moveTo(i-30,a+7),e.lineTo(i+32,a-1),e.moveTo(i-24,a-2),e.lineTo(i+24,a+7),e.stroke(),e.fillStyle=`#f2bb63`,e.beginPath(),e.moveTo(i,a-56-o*18),e.bezierCurveTo(i-24,a-25,i-8,a-8,i,a-3),e.bezierCurveTo(i+16,a-17,i+22,a-34,i,a-56-o*18),e.fill(),e.fillStyle=`#d94d2f`,e.beginPath(),e.moveTo(i+2,a-38+o*8),e.bezierCurveTo(i-11,a-20,i-4,a-5,i+2,a-2),e.bezierCurveTo(i+13,a-17,i+14,a-27,i+2,a-38+o*8),e.fill()}},Zi=document.querySelector(`#app`);if(!Zi)throw Error(`App root was not found.`);var Z=Ie(),Qi=null,$i=null,ea=1,Q=Date.now(),ta=Q,na=ur(Zi,{requestRender:()=>ra(),persist:()=>Ge(Z),reset:()=>{la(),Z=Ke(),ra()},getNow:()=>$(),getTestSpeedMultiplier:()=>ea,toggleTestSpeed:()=>{$(),ea=ea===10?1:10}});function ra(){let e=$();na(Z,e);let t=document.querySelector(`#wilderness-canvas`);t&&t!==$i&&(Qi?.stop(),$i=t,Qi=new Xi(t),Qi.start()),Qi?.setState(Z)}function ia(){let e=$(),t=oa();if(xt(Z,e),t!==oa()){ra();return}sa()}ra(),aa(),window.setInterval(ia,1e3),window.setInterval(()=>Ge(Z),2e3),window.addEventListener(`beforeunload`,()=>Ge(Z));function aa(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./service-worker.js`).catch(()=>{})})}function oa(){return JSON.stringify({inventory:Z.inventory,characterInventory:Z.characterInventory,resourceCounts:Z.resourceCounts,characterResourceCounts:Z.characterResourceCounts,characters:Z.characters.map(e=>({id:e.id,condition:e.condition,locationId:e.locationId})),tools:Z.tools,buildings:Z.buildings,buildingCounts:Z.buildingCounts,campfireExpiresAt:Z.campfireExpiresAt,seenResources:Z.seenResources,currentAction:Z.currentAction?{actionId:Z.currentAction.actionId,phase:Z.currentAction.phase,originLocationId:Z.currentAction.originLocationId,targetLocationId:Z.currentAction.targetLocationId,locationId:Z.currentAction.locationId,loopActionIds:Z.currentAction.loopActionIds,loopLocationIds:Z.currentAction.loopLocationIds,loopIndex:Z.currentAction.loopIndex,nextLoopIndex:Z.currentAction.nextLoopIndex,followUpActionId:Z.currentAction.followUpActionId,startedAt:Z.currentAction.startedAt,endsAt:Z.currentAction.endsAt}:null,logHead:Z.log[0]?.id??``,logLength:Z.log.length})}function sa(){let e=$();if(ca(e),!Z.currentAction)return;let t=Math.min(1,Math.max(0,St(Z,e))),n=document.querySelector(`[data-action-progress]`),r=document.querySelector(`[data-action-remaining]`);n&&(n.style.transform=`scaleX(${t.toFixed(4)})`),r&&(r.textContent=E(Z.currentAction.endsAt-e))}function ca(e){let t=document.querySelectorAll(`[data-campfire-remaining]`);if(!(!t.length||!Z.campfireExpiresAt))for(let n of t)n.textContent=E(Z.campfireExpiresAt-e)}function $(){let e=Date.now(),t=Math.max(0,e-ta);return Q+=t*ea,ta=e,Q}function la(){Q=Date.now(),ta=Q}function ua(){sa(),window.requestAnimationFrame(ua)}window.requestAnimationFrame(ua);