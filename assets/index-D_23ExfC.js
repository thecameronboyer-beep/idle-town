(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`stoneKnife`,label:`Stone Knife`,recipe:{stick:1,stone:2},blurb:`Unlocks hide and bone recovery while butchering.`,maxDurability:18},{id:`stoneAxe`,label:`Stone Axe`,recipe:{stick:3,stone:4},blurb:`Heavy enough to bite into small trees.`,maxDurability:12},{id:`stoneSpear`,label:`Stone Spear`,recipe:{stick:4,stone:3},blurb:`A reach weapon for rabbits and squirrels.`,maxDurability:10}],t=[{id:`campfire`,label:`Campfire`,recipe:{stick:8,stone:5},blurb:`A fixed fire ring for cooking meat.`},{id:`tanningRack`,label:`Tanning Rack`,recipe:{stick:6,wood:4,stone:2},blurb:`A rough frame for turning hide into leather.`}],n=[{id:`stick`,label:`Stick`,group:`resources`,blurb:`Dry kindling and crude handles.`},{id:`stone`,label:`Stone`,group:`resources`,blurb:`Weight, edge, and spark.`},{id:`flaxFiber`,label:`Flax Fiber`,group:`resources`,blurb:`Pale plant fiber for future cordage and cloth.`},{id:`wood`,label:`Wood`,group:`resources`,blurb:`Usable lengths from felled trees.`},{id:`rabbit`,label:`Rabbit`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`squirrel`,label:`Squirrel`,group:`animals`,blurb:`Whole small game, ready for butchering.`},{id:`rabbitMeat`,label:`Rabbit Meat`,group:`hunted`,blurb:`Fresh rabbit meat that wants fire soon.`},{id:`squirrelMeat`,label:`Squirrel Meat`,group:`hunted`,blurb:`Fresh squirrel meat that wants fire soon.`},{id:`cookedRabbitMeat`,label:`Cooked Rabbit Meat`,group:`crafted`,blurb:`A small cooked rabbit ration.`},{id:`cookedSquirrelMeat`,label:`Cooked Squirrel Meat`,group:`crafted`,blurb:`A small cooked squirrel ration.`},{id:`hide`,label:`Hide`,group:`resources`,blurb:`Rough animal hide, ready for scraping.`},{id:`bone`,label:`Bone`,group:`resources`,blurb:`Hard scraps for later craft.`},{id:`leather`,label:`Leather`,group:`crafted`,blurb:`Worked hide for future bags and armor.`}],r=n.map(e=>e.id),i=[`stick`,`stone`];function a(e){return n.find(t=>t.id===e)?.label??e}function o(){return Object.fromEntries(r.map(e=>[e,0]))}function s(){return Object.fromEntries(e.map(e=>[e.id,{owned:!1,durability:0,quantity:0}]))}function c(e=Date.now()){return{version:1,createdAt:e,updatedAt:e,lastSimulatedAt:e,selectedCharacterId:`cameron`,characters:[{id:`cameron`,name:`Cameron`,epithet:`Alone at the treeline`,condition:`resting`}],inventory:o(),characterInventory:o(),tools:s(),buildings:{campfire:!1,tanningRack:!1},seenResources:[...i],currentAction:null,log:[{id:`${e}-start`,time:e,text:`Cameron wakes beneath cold branches with empty hands.`,tone:`muted`}]}}function l(e){for(let t of r)e.inventory[t]=Math.max(0,Math.floor(e.inventory[t]??0)),e.characterInventory[t]=Math.max(0,Math.floor(e.characterInventory[t]??0))}function u(e,t){return Object.entries(t).every(([t,n])=>e.inventory[t]>=(n??0))}function d(e,t){for(let[n,r]of Object.entries(t))e.inventory[n]-=r??0}function ee(e,t){for(let[n,r]of Object.entries(t)){let t=n,i=r??0;i<=0||(e.inventory[t]+=i,e.seenResources.includes(t)||e.seenResources.push(t))}}function f(e){switch(e){case`rabbit`:case`squirrel`:return 1.5;case`wood`:return 2;case`stick`:case`stone`:case`flaxFiber`:return 1;default:return 1}}function te(e){return r.reduce((t,n)=>t+(e[n]??0)*f(n),0)}function p(e){return te(e.characterInventory)}function ne(e,t){let n={},i=p(e);for(let a of r){let r=Math.max(0,Math.floor(t[a]??0));if(r<=0)continue;let o=f(a),s=10-i,c=o>0?Math.min(r,Math.floor(s/o)):r;c<=0||(n[a]=c,e.characterInventory[a]+=c,i+=c*o,e.seenResources.includes(a)||e.seenResources.push(a))}return n}function re(e){let t={};for(let n of r){let r=e.characterInventory[n];r<=0||(t[n]=r,e.inventory[n]+=r,e.characterInventory[n]=0,e.seenResources.includes(n)||e.seenResources.push(n))}return t}function m(e){return Object.entries(e).map(([e,t])=>`${t} ${a(e)}`).join(`, `)}var h=`idle-town:first-survival-slice:v1`;function ie(){let e=window.localStorage.getItem(h);if(!e)return c();try{let t=JSON.parse(e),n=c(),r={...n,...t,inventory:{...o(),...t.inventory??{}},characterInventory:{...o(),...t.characterInventory??{}},tools:ae(t.tools),buildings:{...n.buildings,...t.buildings??{}},characters:t.characters?.length?t.characters:n.characters,seenResources:t.seenResources?.length?t.seenResources:n.seenResources,log:t.log?.length?t.log:n.log,version:1};return l(r),r}catch{return c()}}function ae(t){let n=s();if(!t||typeof t!=`object`)return n;let r=t;for(let t of e){let e=r[t.id];if(typeof e==`boolean`){n[t.id]={owned:e,durability:e?t.maxDurability:0,quantity:0};continue}if(!e||typeof e!=`object`)continue;let i=!!e.owned,a=Number(e.durability??0),o=Number(e.quantity??0);n[t.id]={owned:i,durability:i?Math.min(t.maxDurability,Math.max(0,Math.floor(a))):0,quantity:Math.max(0,Math.floor(o))}}return n}function g(e){window.localStorage.setItem(h,JSON.stringify(e))}function oe(){return window.localStorage.removeItem(h),c()}var _=[{id:`gatherSticks`,label:`Gather Sticks`,verb:`gathering sticks`,durationMs:7e3,blurb:`Slow, reliable foraging near camp.`},{id:`gatherStones`,label:`Gather Stones`,verb:`searching for stones`,durationMs:8500,blurb:`Cameron checks creek beds and exposed roots.`},{id:`gatherFlaxFibers`,label:`Gather Flax Fibers`,verb:`pulling flax fibers`,durationMs:1e4,blurb:`Thin stalks stripped by hand for future craft.`},{id:`chopTrees`,label:`Chop Trees`,verb:`chopping trees`,durationMs:18e3,blurb:`The first real push beyond loose branches.`},{id:`huntSmallAnimals`,label:`Hunt Small Animals`,verb:`hunting small animals`,durationMs:28e3,blurb:`Bring back whole rabbits or squirrels for later work.`},{id:`butcherRabbit`,label:`Butcher Rabbit`,verb:`butchering a rabbit`,durationMs:18e3,blurb:`Break down a rabbit into useful parts.`},{id:`butcherSquirrel`,label:`Butcher Squirrel`,verb:`butchering a squirrel`,durationMs:14e3,blurb:`Break down a squirrel into useful parts.`},{id:`cookRabbitMeat`,label:`Cook Rabbit Meat`,verb:`cooking rabbit meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`cookSquirrelMeat`,label:`Cook Squirrel Meat`,verb:`cooking squirrel meat`,durationMs:16e3,blurb:`A careful turn over low flame.`},{id:`tanHide`,label:`Tan Hide`,verb:`working hide`,durationMs:36e3,blurb:`Scrape, stretch, wait, repeat.`}];function v(e){return _.find(t=>t.id===e)}var y=48;function b(e,t,n=`muted`,r=Date.now()){e.log.unshift({id:`${r}-${Math.random().toString(36).slice(2)}`,time:r,text:t,tone:n}),e.log=e.log.slice(0,y)}function x(e,t){let n=t.now??Date.now(),r=e.log.findIndex(e=>e.aggregateKey===t.aggregateKey),i=se(t.resources);if(r>=0){let[a]=e.log.splice(r,1);a.time=n,a.text=t.text,a.tone=t.tone??a.tone,Object.keys(i).length>0?(a.aggregateItems=ce(le(a),i),delete a.aggregateTotal,delete a.aggregateUnit):(a.aggregateTotal=(a.aggregateTotal??0)+(t.amount??0),a.aggregateUnit=t.unit),e.log.unshift(a);return}e.log.unshift({id:`${n}-${Math.random().toString(36).slice(2)}`,time:n,text:t.text,tone:t.tone??`muted`,aggregateKey:t.aggregateKey,...Object.keys(i).length>0?{aggregateItems:i}:{aggregateTotal:t.amount??0,aggregateUnit:t.unit}}),e.log=e.log.slice(0,y)}function se(e){let t={};for(let[n,r]of Object.entries(e??{})){let e=Math.floor(r??0);e>0&&(t[n]=e)}return t}function ce(e,t){let n={...e??{}};for(let[e,r]of Object.entries(t)){let t=e;n[t]=(n[t]??0)+(r??0)}return n}function le(e){if(e.aggregateItems)return e.aggregateItems;let t=ue(e.aggregateUnit);if(!(!t||!e.aggregateTotal))return{[t]:e.aggregateTotal}}function ue(e){switch(e?.toLowerCase()){case`sticks`:return`stick`;case`stones`:return`stone`;default:return}}function de(e,t,n){return Math.min(n,Math.max(t,e))}function S(e,t){return Math.floor(Math.random()*(t-e+1))+e}function C(e){let t=Math.max(0,Math.ceil(e/1e3));if(t<60)return`${t}s`;let n=Math.floor(t/60),r=t%60;return r>0?`${n}m ${r}s`:`${n}m`}function fe(t){return e.find(e=>e.id===t)}function w(e){return fe(e)?.maxDurability??1}function T(e,t){let n=e.tools[t];return!!(n?.owned&&n.durability>0)}function pe(e,t){let n=e.tools[t];return!n||n.quantity<=0?!1:(--n.quantity,n.owned=!0,n.durability=w(t),!0)}function E(e,t,n,r=Date.now()){let i=e.tools[t];if(!(!i?.owned||i.durability<=0)&&(i.durability=Math.max(0,i.durability-n),i.durability===0)){let n=fe(t)?.label??`Tool`;if(pe(e,t)){b(e,`${n} breaks; Cameron takes a fresh one from inventory.`,`warning`,r);return}i.owned=!1,b(e,`${n} breaks. No spare remains.`,`warning`,r)}}function me(e){return e.seenResources.includes(`rabbitMeat`)||e.seenResources.includes(`squirrelMeat`)}function he(e,t){switch(t){case`gatherSticks`:case`gatherStones`:case`gatherFlaxFibers`:return!0;case`chopTrees`:return T(e,`stoneAxe`);case`huntSmallAnimals`:return T(e,`stoneSpear`);case`butcherRabbit`:return e.seenResources.includes(`rabbit`);case`butcherSquirrel`:return e.seenResources.includes(`squirrel`);case`cookRabbitMeat`:return e.buildings.campfire&&e.seenResources.includes(`rabbitMeat`);case`cookSquirrelMeat`:return e.buildings.campfire&&e.seenResources.includes(`squirrelMeat`);case`tanHide`:return e.buildings.tanningRack&&e.seenResources.includes(`hide`)}}function ge(e,t){switch(t){case`chopTrees`:return`Needs Stone Axe`;case`huntSmallAnimals`:return`Needs Stone Spear`;case`butcherRabbit`:return`Needs Rabbit`;case`butcherSquirrel`:return`Needs Squirrel`;case`cookRabbitMeat`:return e.buildings.campfire?`Needs Rabbit Meat`:`Needs Campfire`;case`cookSquirrelMeat`:return e.buildings.campfire?`Needs Squirrel Meat`:`Needs Campfire`;case`tanHide`:return e.buildings.tanningRack?`Needs Hide`:`Needs Tanning Rack`;default:return``}}function D(e,t){switch(t){case`campfire`:return e.buildings.campfire||me(e);case`tanningRack`:return e.buildings.tanningRack||e.seenResources.includes(`hide`)}}var _e=7200*1e3,ve={meadow:1e4,river:15e3,forest:3e4};function O(e){switch(e){case`cookRabbitMeat`:return{rabbitMeat:1};case`cookSquirrelMeat`:return{squirrelMeat:1};case`tanHide`:return{hide:1};case`butcherRabbit`:return{rabbit:1};case`butcherSquirrel`:return{squirrel:1};default:return{}}}function k(e,t){return he(e,t)&&u(e,O(t))}function ye(e,t,n=Date.now(),r={}){let i=v(t);if(!i||!k(e,t))return!1;let a=M(t)?r.locationId??`meadow`:void 0,o=a?N(a):0;return e.currentAction={actionId:t,characterId:e.selectedCharacterId,phase:a?`travelingTo`:`working`,locationId:a,startedAt:n,endsAt:n+(o||i.durationMs),repeat:!0},L(e,!0),e.updatedAt=n,e.lastSimulatedAt=n,!0}function be(e,t=Date.now()){if(!e.currentAction)return;let n=v(e.currentAction.actionId);e.currentAction=null,L(e,!1),e.updatedAt=t,e.lastSimulatedAt=t,b(e,`Cameron stops ${n?.verb??`working`}.`,`muted`,t)}function xe(e,t=Date.now()){let n=Math.min(t,e.lastSimulatedAt+_e);if(!e.currentAction){e.lastSimulatedAt=t,L(e,!1);return}let r=0;for(;e.currentAction&&e.currentAction.endsAt<=n&&r<500;){let t=e.currentAction,n=t.endsAt;Se(e,t,n),r+=1}t>n&&r>0&&b(e,`The saved trail grows quiet after two hours away.`,`muted`,n),e.lastSimulatedAt=t,e.updatedAt=t}function A(e,t=Date.now()){if(!e.currentAction)return 0;let n=e.currentAction.endsAt-e.currentAction.startedAt;return n<=0?1:(t-e.currentAction.startedAt)/n}function Se(e,t,n){if(t.phase===`travelingTo`){j(e,t,n);return}if(t.phase===`travelingBack`){let r=re(e);if(Object.keys(r).length>0&&x(e,{aggregateKey:`deposit:camp`,text:`Cameron returned resources to camp`,resources:r,tone:`gain`,now:n}),t.repeat&&k(e,t.actionId)){we(e,t,n);return}e.currentAction=null,L(e,!1);return}Ce(e,t,n)}function Ce(e,t,n){let r=t.actionId,i=O(r);if(!u(e,i)){b(e,`Cameron lacks the materials to continue.`,`warning`,n),e.currentAction=null,L(e,!1);return}d(e,i);let a=ke(e,r),o=M(r)?ne(e,a.resources):a.resources;if(M(r)?Ee(e,r,o,n):(ee(e,a.resources),x(e,{aggregateKey:`action:${r}`,text:F(r),resources:a.resources,tone:a.tone,now:n})),je(e,r,n),M(r)&&Oe(a.resources,o,e)){Te(e,t,n);return}if(t.repeat&&k(e,r)){j(e,t,n);return}e.currentAction=null,L(e,!1)}function j(e,t,n){let r=v(t.actionId);if(!r){e.currentAction=null,L(e,!1);return}e.currentAction={...t,phase:`working`,startedAt:n,endsAt:n+r.durationMs}}function we(e,t,n){let r=t.locationId??`meadow`;e.currentAction={...t,phase:`travelingTo`,locationId:r,startedAt:n,endsAt:n+N(r)}}function Te(e,t,n){let r=t.locationId??`meadow`;e.currentAction={...t,phase:`travelingBack`,locationId:r,startedAt:n,endsAt:n+N(r)}}function Ee(e,t,n,r){Object.values(n).some(e=>(e??0)>0)&&x(e,{aggregateKey:`action:${t}`,text:F(t),resources:n,tone:`gain`,now:r})}function De(e){return e===`gatherSticks`||e===`gatherStones`||e===`gatherFlaxFibers`}function M(e){return De(e)||e===`huntSmallAnimals`||e===`chopTrees`}function Oe(e,t,n){let r=Object.values(e).reduce((e,t)=>e+(t??0),0),i=Object.values(t).reduce((e,t)=>e+(t??0),0);return p(n)>=10||r>0&&i<r}function N(e){return ve[e]}function ke(e,t){switch(t){case`gatherSticks`:{let e=S(1,3);return{resources:{stick:e},message:`Cameron gathers ${e} ${I(`Stick`,e)}.`,tone:`gain`}}case`gatherStones`:{let e=S(1,2);return{resources:{stone:e},message:`Cameron finds ${e} ${I(`Stone`,e)}.`,tone:`gain`}}case`gatherFlaxFibers`:{let e=S(1,3);return{resources:{flaxFiber:e},message:`Cameron pulls ${e} ${I(`Flax Fiber`,e)} from the brush.`,tone:`gain`}}case`chopTrees`:{let e=S(2,4),t=+(Math.random()<.35);return{resources:{wood:e,stick:t},message:`Cameron chops ${e} ${I(`Wood`,e)}${t?` and saves a usable stick`:``}.`,tone:`gain`}}case`huntSmallAnimals`:return Ae();case`butcherRabbit`:return P(e,`rabbit`);case`butcherSquirrel`:return P(e,`squirrel`);case`cookRabbitMeat`:return{resources:{cookedRabbitMeat:1},message:`Cameron cooks rabbit meat over the coals.`,tone:`craft`};case`cookSquirrelMeat`:return{resources:{cookedSquirrelMeat:1},message:`Cameron cooks squirrel meat over the coals.`,tone:`craft`};case`tanHide`:return{resources:{leather:1},message:`Cameron works a hide into rough leather.`,tone:`craft`}}}function Ae(){let e=Math.random()<.58?`rabbit`:`squirrel`;return{resources:{[e]:1},message:`Cameron brings back a ${e}.`,tone:`gain`}}function P(e,t){let n=t===`rabbit`?`rabbitMeat`:`squirrelMeat`,r=t===`rabbit`?S(1,2):1,i=T(e,`stoneKnife`),o=t===`rabbit`?.65:.42,s=t===`rabbit`?.24:.14,c=+(Math.random()<o),l=+(Math.random()<s),u={[n]:r,hide:i?c:0,bone:i?l:0},d=Object.entries({hide:c,bone:l}).filter(([,e])=>i&&e>0).map(([e,t])=>`${t} ${a(e)}`);return{resources:u,message:`Cameron butchers a ${t} for ${r} ${a(n)}${d.length?`, plus ${d.join(` and `)}`:``}.`,tone:`gain`}}function je(e,t,n){switch(t){case`chopTrees`:E(e,`stoneAxe`,1,n);break;case`huntSmallAnimals`:E(e,`stoneSpear`,1,n);break;case`butcherRabbit`:case`butcherSquirrel`:E(e,`stoneKnife`,1,n);break;default:break}}function F(e){switch(e){case`gatherSticks`:return`Cameron gathered sticks`;case`gatherStones`:return`Cameron gathered stones`;case`gatherFlaxFibers`:return`Cameron gathered flax fibers`;case`chopTrees`:return`Cameron chopped trees`;case`huntSmallAnimals`:return`Cameron hunted small animals`;case`butcherRabbit`:return`Cameron butchered rabbits`;case`butcherSquirrel`:return`Cameron butchered squirrels`;case`cookRabbitMeat`:return`Cameron cooked rabbit meat`;case`cookSquirrelMeat`:return`Cameron cooked squirrel meat`;case`tanHide`:return`Cameron tanned hide`}}function I(e,t){return t===1?e:`${e}s`}function L(e,t){let n=e.characters.find(t=>t.id===e.selectedCharacterId);n&&(n.condition=t?`working`:`resting`)}_.map(e=>e.id);var Me=``+new URL(`bone-icon-DsPaT320.png`,import.meta.url).href,Ne=``+new URL(`flax-fiber-icon-xz-yYl-m.png`,import.meta.url).href,Pe=``+new URL(`forest-location-icon-VKGIFi31.png`,import.meta.url).href,Fe=``+new URL(`hide-icon-BWeGfM2U.png`,import.meta.url).href,Ie=``+new URL(`meadow-location-icon-v2-CqdYJu9g.png`,import.meta.url).href,Le=``+new URL(`rabbit-icon-DGNcKYc7.png`,import.meta.url).href,Re=``+new URL(`river-location-icon-v2-BqOU5iqQ.png`,import.meta.url).href,ze=``+new URL(`squirrel-icon-BM6RAXNK.png`,import.meta.url).href,Be=``+new URL(`stick-icon-Q8m3FMqw.png`,import.meta.url).href,Ve=``+new URL(`stone-axe-empty-slot-C8iH4xki.png`,import.meta.url).href,He=``+new URL(`stone-axe-equipped-slot-BwqHFyCM.png`,import.meta.url).href,Ue=``+new URL(`stone-knife-equipped-slot-I-QJxd8H.png`,import.meta.url).href,We=``+new URL(`stone-knife-empty-slot-Bc5j7Rbw.png`,import.meta.url).href,Ge=``+new URL(`stone-spear-empty-slot-BTpRxmYT.png`,import.meta.url).href,Ke=``+new URL(`stone-spear-equipped-slot-q16KfMg3.png`,import.meta.url).href,qe=``+new URL(`stone-icon-yRG7nuNE.png`,import.meta.url).href,Je=``+new URL(`wood-icon-CxwJtOlQ.png`,import.meta.url).href;function Ye(t,n,r=Date.now()){let i=e.find(e=>e.id===n);return!i||!u(t,i.recipe)?!1:(d(t,i.recipe),t.tools[n].quantity+=1,T(t,n)||pe(t,n),x(t,{aggregateKey:`craft:${n}`,text:`Cameron crafted ${z(i.label)}`,amount:1,unit:z(i.label),tone:`craft`,now:r}),R(t,r),!0)}function Xe(e,n,r=Date.now()){let i=t.find(e=>e.id===n);return!i||e.buildings[n]||!D(e,n)||!u(e,i.recipe)?!1:(d(e,i.recipe),e.buildings[n]=!0,b(e,`Cameron builds a ${i.label}.`,`craft`,r),R(e,r),!0)}function Ze(e,t){let n={};for(let[r,i=0]of Object.entries(t)){let t=r,a=Math.max(0,i-e.inventory[t]);a>0&&(n[t]=a)}return m(n)}function R(e,t){e.updatedAt=t,e.lastSimulatedAt=t}function z(e){return e.endsWith(`s`)?e:`${e}s`}var B=[{id:`foraging`,label:`Forage`,actionIds:[`gatherSticks`,`gatherStones`,`gatherFlaxFibers`]},{id:`hunting`,label:`Hunting`,actionIds:[`huntSmallAnimals`]},{id:`woodcutting`,label:`Woodcutting`,actionIds:[`chopTrees`]},{id:`crafting`,label:`Crafting`},{id:`butchering`,label:`Butchering`,actionIds:[`butcherRabbit`,`butcherSquirrel`]},{id:`cooking`,label:`Cooking`,actionIds:[`cookRabbitMeat`,`cookSquirrelMeat`]},{id:`leatherworking`,label:`Leatherworking`,actionIds:[`tanHide`]}],V=[{id:`gather`,label:`Gather`,filterIds:[`foraging`,`hunting`,`woodcutting`]},{id:`processing`,label:`Processing`,filterIds:[`crafting`,`butchering`,`cooking`,`leatherworking`]},{id:`camp`,label:`Camp`,filterIds:[]}],H=[{id:`meadow`,label:`Meadow`,iconUrl:Ie,actionIds:[`gatherSticks`,`gatherStones`]},{id:`river`,label:`River`,iconUrl:Re,actionIds:[`gatherStones`,`gatherFlaxFibers`]},{id:`forest`,label:`Forest`,iconUrl:Pe,actionIds:[`chopTrees`]}],Qe=5,$e=[`stoneKnife`,`stoneAxe`,`stoneSpear`,null,null],U={stoneKnife:Ue,stoneAxe:He,stoneSpear:Ke},et={stoneKnife:We,stoneAxe:Ve,stoneSpear:Ge},tt={stoneKnife:`Knife`,stoneAxe:`Axe`,stoneSpear:`Spear`},W={bone:Me,flaxFiber:Ne,hide:Fe,rabbit:Le,squirrel:ze,stick:Be,stone:qe,wood:Je},nt={stoneKnife:[{label:`Slot`,value:`Butchering tool`},{label:`Unlocks`,value:`Hide and bone recovery`},{label:`Use`,value:`Butchering small animals`}],stoneAxe:[{label:`Slot`,value:`Woodcutting tool`},{label:`Effect`,value:`Chop Trees unlocked`},{label:`Wood yield`,value:`2-4`}],stoneSpear:[{label:`Slot`,value:`Hunting tool`},{label:`Effect`,value:`Hunt Small Animals unlocked`},{label:`Targets`,value:`Rabbit, Squirrel`}]};function rt(e,t){let n=`gather`,r=`foraging`,i=`meadow`,a=`inventory`,o=null,s=null;return e.addEventListener(`click`,e=>{let s=e.target.closest(`[data-command]`);if(!s||s.disabled)return;let c=s.dataset.command,l=s.dataset.id,u=o;if(u){if(c===`set-action-category`&&vt(l)){n=l;let e=_t(n);e.length&&!e.some(e=>e.id===r)&&(r=e[0]?.id??r),t.requestRender();return}if(c===`set-action-filter`&&yt(l)){r=l,t.requestRender();return}if(c===`set-location`&&bt(l)){i=l,t.requestRender();return}if(c===`set-side-panel`&&xt(l)){a=l,t.requestRender();return}if(c===`start-action`&&l){let e=l;ye(u,e,Date.now(),{locationId:Tt(e,i)})}if(c===`stop-action`&&be(u),c===`craft-tool`&&l&&Ye(u,l),c===`build-structure`&&l&&Xe(u,l),c===`reset`){t.reset();return}t.persist(),t.requestRender()}}),e.addEventListener(`pointerover`,t=>{let n=Gt(t.target,e);n&&(s=n,q(e,n))}),e.addEventListener(`pointerout`,t=>{if(!s)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!s.contains(n))&&(s=null,Kt(e))}),e.addEventListener(`focusin`,t=>{let n=Gt(t.target,e);n&&(s=n,q(e,n))}),e.addEventListener(`focusout`,t=>{if(!s)return;let n=t.relatedTarget instanceof Node?t.relatedTarget:null;(!n||!s.contains(n))&&(s=null,Kt(e))}),e.addEventListener(`scroll`,()=>{s?.isConnected&&J(e,s)},!0),window.addEventListener(`resize`,()=>{s?.isConnected&&J(e,s)}),t=>{o=t;let c=qt(e),l=e.querySelector(`#wilderness-canvas`);e.innerHTML=at(t,r,n,a,i),it(e,l),s=null,Jt(e,c)}}function it(e,t){t&&e.querySelector(`#wilderness-canvas`)?.replaceWith(t)}function at(e,t,n,r,i){return`
    <div class="game-shell">
      ${ot(e,n)}
      <main class="main-panel">
        ${ft()}
        ${mt(e)}
        ${ct(e,n,t,i)}
      </main>
      ${jt(e,r)}
    </div>
    <div class="tooltip-layer" aria-hidden="true"></div>
  `}function ot(e,t){let n=e.characters[0],r=e.currentAction?gt(e):`keeping still`;return`
    <aside class="character-sidebar panel">
      <div class="brand-block">
        <div class="kicker">Idle Town</div>
        <h1>First Fire</h1>
      </div>
      <button class="character-card selected" type="button">
        <span class="portrait" aria-hidden="true">C</span>
        <span>
          <strong>${n.name}</strong>
          <small>${r}</small>
        </span>
        </button>
          <nav class="sidebar-actions" aria-label="Action filters">
            <div class="category-buttons">
              ${V.map(e=>st(e,t)).join(``)}
            </div>
          </nav>
          <div class="sidebar-footer">
            <button class="ghost-button" type="button" data-command="reset">Reset</button>
          </div>
    </aside>
  `}function st(e,t){let n=e.id===t;return`
    <button
      class="category-button ${n?`active`:``}"
      type="button"
      data-command="set-action-category"
      data-id="${e.id}"
      aria-pressed="${n}"
    >
      <span>${e.label}</span>
    </button>
  `}function ct(e,t,n,r){return t===`camp`?`
      <div class="work-area single-panel">
        ${At(e)}
      </div>
    `:`
    <div class="work-area">
      ${ut(t,n)}
      ${lt(e,n,r)}
    </div>
  `}function lt(e,t,n){let r=G(t);return`
    <div class="action-stack">
      ${St(r.id)?Et(r,n):``}
      ${pt(e,t,n)}
    </div>
  `}function ut(e,t){let n=V.find(t=>t.id===e)??V[0],r=_t(e);return`
    <section class="panel skill-panel">
      <div class="section-heading">
        <span>${n.label}</span>
        <span class="quiet">Skills</span>
      </div>
      <div class="skill-grid">
        ${r.map(e=>dt(e,t)).join(``)}
      </div>
    </section>
  `}function dt(e,t){let n=e.id===t;return`
    <button
      class="skill-button ${n?`active`:``}"
      type="button"
      data-command="set-action-filter"
      data-id="${e.id}"
      aria-pressed="${n}"
    >
      <span>${e.label}</span>
    </button>
  `}function ft(){return`
    <section class="world-panel panel">
      <canvas id="wilderness-canvas" class="wilderness-canvas" aria-label="A primitive forest camp"></canvas>
    </section>
  `}function pt(e,t,n){let r=G(t);if(r.id===`crafting`)return`
      <section class="panel action-panel">
        <div class="section-heading">
          <span>Crafting</span>
          <span class="quiet">Handmade</span>
        </div>
        ${kt(e)}
      </section>
    `;let i=r.id===`foraging`||r.id===`woodcutting`?K(n,r.id).actionIds:r.actionIds??[];return`
      <section class="panel action-panel">
        <div class="section-heading">
          <span>${r.label}</span>
          <span class="quiet">Actions</span>
        </div>
        <div class="action-grid">
          ${i.map(t=>Ot(e,t)).join(``)}
        </div>
    </section>
  `}function mt(e){if(!e.currentAction)return`
      <section class="panel current-action-panel idle">
        <div class="section-heading">
          <span>Current Action</span>
          <span class="quiet">Idle</span>
        </div>
        <div class="current-action-content idle">
          <strong>No active work</strong>
          <span>Choose a task for Cameron.</span>
        </div>
      </section>
    `;let t=de(A(e),0,1),n=C(e.currentAction.endsAt-Date.now());return`
    <section class="panel current-action-panel">
      <div class="section-heading">
        <span>Current Action</span>
        <span class="quiet">Auto-repeat on</span>
      </div>
      <div class="current-action-content">
        <div class="current-action-copy">
          <strong>${ht(e)}</strong>
          <span data-action-remaining>${n} remaining</span>
        </div>
        <button class="icon-button" type="button" data-command="stop-action" title="Stop action">Stop</button>
        <div class="progress-track" aria-hidden="true">
          <span data-action-progress style="transform: scaleX(${t.toFixed(4)})"></span>
        </div>
      </div>
    </section>
  `}function ht(e){let t=e.currentAction;if(!t)return`Working`;let n=t.locationId?K(t.locationId).label:`the wilds`;return t.phase===`travelingTo`?`Traveling to ${n}`:t.phase===`travelingBack`?`Returning from ${n}`:v(t.actionId)?.label??`Working`}function gt(e){let t=e.currentAction;if(!t)return`keeping still`;let n=t.locationId?K(t.locationId).label.toLowerCase():`camp`;return t.phase===`travelingTo`?`traveling to ${n}`:t.phase===`travelingBack`?`returning from ${n}`:v(t.actionId)?.verb??`working`}function G(e){return B.find(t=>t.id===e)??B[0]}function _t(e){return(V.find(t=>t.id===e)??V[0]).filterIds.map(e=>G(e))}function vt(e){return V.some(t=>t.id===e)}function yt(e){return B.some(t=>t.id===e)}function bt(e){return H.some(t=>t.id===e)}function xt(e){return e===`inventory`||e===`equipment`}function St(e){return e===`foraging`||e===`hunting`||e===`woodcutting`}function K(e,t){let n=t?Ct(t):H;return n.find(t=>t.id===e)??n[0]}function Ct(e){switch(e){case`hunting`:return H.filter(e=>e.id===`meadow`);case`woodcutting`:return H.filter(e=>e.id===`forest`);default:return H.filter(e=>e.id===`meadow`||e.id===`river`)}}function wt(e,t){return e===`hunting`?`meadow`:e===`woodcutting`?`forest`:t===`forest`?`meadow`:t}function Tt(e,t){return e===`huntSmallAnimals`?`meadow`:e===`chopTrees`?`forest`:t===`forest`?`meadow`:t}function Et(e,t){return`
    <section class="panel location-panel">
      <div class="section-heading">
        <span>Locations</span>
        <span class="quiet">${e.label}</span>
      </div>
      ${Dt(Ct(e.id),wt(e.id,t),e.label)}
    </section>
  `}function Dt(e,t,n){return`
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
  `}function Ot(e,t){let n=v(t);if(!n)return``;let r=he(e,t),i=O(t),a=u(e,i),o=e.currentAction?.actionId===t,s=!r||!a||o,c=t===`cookRabbitMeat`||t===`cookSquirrelMeat`?ge(e,t):Ze(e,i),l=r?c:ge(e,t),d=Object.keys(i).length?`Uses ${m(i)}`:n.blurb;return`
    <article class="action-card ${o?`active`:``} ${r?``:`locked`}">
      <div>
        <span class="card-label">${n.label}</span>
        <small>${r?d:l}</small>
      </div>
      <div class="card-footer">
        <span>${C(n.durationMs)}</span>
        <button type="button" data-command="start-action" data-id="${t}" ${s?`disabled`:``}>
          ${o?`Running`:`Start`}
        </button>
      </div>
    </article>
  `}function kt(t){return`
      <div class="crafting-tab">
        <div class="section-heading">
          <span>Primitive Tools</span>
          <span class="quiet">Make spares</span>
        </div>
        <div class="craft-list">
          ${e.map(e=>{let n=u(t,e.recipe);return`
              <article class="craft-item primitive-tool">
                <div>
                  <strong>${e.label}</strong>
                  <small>${m(e.recipe)}</small>
                </div>
                <button type="button" data-command="craft-tool" data-id="${e.id}" ${n?``:`disabled`}>
                  Craft
                </button>
              </article>
            `}).join(``)}
      </div>
    </div>
  `}function At(e){let n=t.filter(t=>D(e,t.id));return`
    <section class="panel camp-panel">
      <div class="section-heading">
        <span>Camp</span>
        <span class="quiet">${n.length?`Rough works`:`Undiscovered`}</span>
      </div>
      <div class="craft-list">
        ${n.length?n.map(t=>{let n=e.buildings[t.id],r=u(e,t.recipe);return`
                  <article class="craft-item ${n?`owned`:``}">
                    <div>
                      <strong>${t.label}</strong>
                      <small>${n?t.blurb:m(t.recipe)}</small>
                    </div>
                    <button type="button" data-command="build-structure" data-id="${t.id}" ${n||!r?`disabled`:``}>
                      ${n?`Built`:`Build`}
                    </button>
                  </article>
                `}).join(``):`<div class="empty-line">Nothing sturdy enough to name yet.</div>`}
      </div>
    </section>
  `}function jt(e,t){return`
    <aside class="inventory-panel panel">
      <div class="panel-tabs" role="tablist" aria-label="Character panel">
        ${Mt(`inventory`,`Inventory`,t)}
        ${Mt(`equipment`,`Equipment`,t)}
      </div>
      ${t===`inventory`?Nt(e):Bt(e)}
      ${Yt(e)}
    </aside>
  `}function Mt(e,t,n){let r=e===n;return`
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
  `}function Nt(e){let t=r.filter(t=>e.seenResources.includes(t)||e.inventory[t]>0),i=n.reduce((e,n)=>(t.includes(n.id)&&(e[n.group]=e[n.group]??[],e[n.group].push(n.id)),e),{});return`
    <section class="side-panel-content">
      ${Pt(e)}
      ${Object.entries(i).map(([t,n])=>Ft(e,t,n)).join(``)}
      ${Rt(e)}
    </section>
  `}function Pt(e){let t=r.filter(t=>e.characterInventory[t]>0),n=p(e),i=t.filter(e=>!!W[e]),a=t.filter(e=>!W[e]);return`
    <div class="resource-group character-inventory-group">
      <div class="inventory-summary-heading">
        <h3>Camerons Inventory</h3>
        <span>${n}/10</span>
      </div>
      ${t.length?`
            ${i.length?`<div class="inventory-resource-grid" aria-label="Cameron's carried inventory">
                    ${i.map(t=>Lt(e,t,e.characterInventory)).join(``)}
                  </div>`:``}
            ${a.map(t=>It(t,e.characterInventory)).join(``)}
          `:`<div class="empty-line">Pack empty.</div>`}
    </div>
  `}function Ft(e,t,n){let r=n.filter(e=>!!W[e]),i=n.filter(e=>!W[e]);return`
    <div class="resource-group">
      <h3>${X(t)}</h3>
      ${r.length?`<div class="inventory-resource-grid" aria-label="${X(t)} inventory">
              ${r.map(t=>Lt(e,t)).join(``)}
            </div>`:``}
      ${i.map(t=>`
        ${It(t,e.inventory)}
      `).join(``)}
    </div>
  `}function It(e,t){return`
    <div class="resource-row">
      <span>
        <strong>${a(e)}</strong>
        <small>${n.find(t=>t.id===e)?.blurb??``}</small>
      </span>
      <b>${t[e]}</b>
    </div>
  `}function Lt(e,t,r=e.inventory){let i=W[t],a=n.find(e=>e.id===t);return!i||!a?``:`
    <article class="equipment-slot inventory-resource-slot icon-only" tabindex="0" data-tooltip-source aria-label="${a.label}, ${r[t]}">
      <img class="slot-item-icon" src="${i}" alt="" aria-hidden="true" />
      <span class="item-quantity" aria-hidden="true">${r[t]}</span>
      <div class="slot-tooltip" role="tooltip">
        <div class="tooltip-title">
          <strong>${a.label}</strong>
        </div>
        <dl>
          <div>
            <dt>Type</dt>
            <dd>${X(a.group)}</dd>
          </div>
          <div>
            <dt>Use</dt>
            <dd>${a.blurb}</dd>
          </div>
        </dl>
      </div>
    </article>
  `}function Rt(t){let n=e.filter(e=>t.tools[e.id].quantity>0);return n.length?`
    <section class="resource-group tool-inventory">
      <h3>Primitive Tools</h3>
      <div class="inventory-tool-grid" aria-label="Primitive tool inventory">
        ${n.map(e=>zt(t,e.id)).join(``)}
      </div>
    </section>
  `:``}function zt(t,n){let r=e.find(e=>e.id===n),i=t.tools[n];if(!r||i.quantity<=0)return``;let a=w(n),o=[{label:`Durability`,value:`${a}/${a}`},...nt[n]];return`
    <article class="equipment-slot inventory-tool-slot icon-only" tabindex="0" data-tooltip-source aria-label="${r.label}, ${i.quantity} ${i.quantity===1?`spare`:`spares`}">
      ${Ht(n)}
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
  `}function Bt(e){return`
    <section class="side-panel-content equipment-screen">
      <h3>Tools</h3>
      <div class="equipment-grid" aria-label="Equipment slots">
        ${$e.slice(0,Qe).map((t,n)=>t&&e.tools[t].owned?Vt(e,t):Ut(n,t)).join(``)}
      </div>
    </section>
  `}function Vt(t,n){let r=e.find(e=>e.id===n),i=t.tools[n];if(!r||!i.owned)return``;let a=w(n),o=Math.max(0,i.durability),s=o>0,c=(o/a*100).toFixed(1),l=[{label:`Durability`,value:s?`${o}/${a}`:`Broken`},{label:`Inventory`,value:`${i.quantity} ${i.quantity===1?`spare`:`spares`}`},...nt[n]],u=!!U[n];return`
    <article class="equipment-slot ${s?``:`broken`} ${u?`icon-only`:``}" tabindex="0" data-tooltip-source aria-label="${r.label}">
      ${Ht(n)}
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
  `}function Ht(e){let t=U[e];return t?`<img class="slot-item-icon" src="${t}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">${Wt(e)}</span>`}function Ut(e,t){let n=t?et[t]:void 0,r=t?tt[t]??`Empty`:`Empty`;return`
    <div class="equipment-slot empty ${n?`image-empty`:``}" aria-label="Empty equipment slot ${e+1}">
      ${n?`<img class="slot-shadow-icon" src="${n}" alt="" aria-hidden="true" />`:`<span class="slot-glyph">+</span>`}
      <strong>${r}</strong>
    </div>
  `}function Wt(e){switch(e){case`stoneAxe`:return`AX`;case`stoneSpear`:return`SP`;case`stoneKnife`:return`KN`}}function Gt(e,t){if(!(e instanceof Element))return null;let n=e.closest(`[data-tooltip-source]`);return n&&t.contains(n)?n:null}function q(e,t){let n=t.querySelector(`.slot-tooltip`),r=Y(e);!n||!r||(r.innerHTML=n.innerHTML,r.setAttribute(`aria-hidden`,`false`),r.classList.add(`visible`),J(e,t))}function Kt(e){let t=Y(e);t&&(t.classList.remove(`visible`),t.setAttribute(`aria-hidden`,`true`),t.innerHTML=``)}function J(e,t){let n=Y(e);if(!n)return;let r=t.getBoundingClientRect(),i=n.getBoundingClientRect(),a=window.innerWidth,o=window.innerHeight,s=i.width,c=i.height,l=r.left-s-8;if(l<12){let e=r.right+8;l=e+s<=a-12?e:a-s-12}let u=Math.max(12,o-c-12),d=Math.min(Math.max(r.top,12),u);n.style.left=`${Math.max(12,Math.round(l))}px`,n.style.top=`${Math.round(d)}px`}function Y(e){return e.querySelector(`.tooltip-layer`)}function qt(e){return new Map([`.log-list`,`.side-panel-content`].map(t=>[t,e.querySelector(t)?.scrollTop??0]))}function Jt(e,t){for(let[n,r]of t){let t=e.querySelector(n);t&&(t.scrollTop=r)}}function Yt(e){return`
    <section class="log-panel">
      <div class="section-heading">
        <span>Camp Log</span>
        <span class="quiet">${e.log.length}</span>
      </div>
        <div class="log-list">
          ${e.log.map(e=>`
            <p class="log-entry ${e.tone}">
              <span>${e.text}</span>
              ${Xt(e)}
            </p>
          `).join(``)}
        </div>
    </section>
  `}function Xt(e){if(e.aggregateItems){let t=r.filter(t=>(e.aggregateItems?.[t]??0)>0).map(t=>{let n=e.aggregateItems?.[t]??0;return`<b>+${n} ${Zt(t,n)}</b>`});return t.length?`<span class="log-gains">${t.join(``)}</span>`:``}return e.aggregateTotal?`<span class="log-gains"><b>+${e.aggregateTotal} ${e.aggregateUnit??``}</b></span>`:``}function Zt(e,t){let n=a(e);if(t===1)return n;switch(e){case`wood`:case`rabbitMeat`:case`squirrelMeat`:case`cookedRabbitMeat`:case`cookedSquirrelMeat`:case`leather`:return n;case`flaxFiber`:return`Flax Fibers`;default:return`${n}s`}}function X(e){switch(e){case`resources`:return`Resources`;case`animals`:return`Animals`;case`hunted`:return`Hunted`;case`crafted`:return`Worked`;default:return e}}var Qt=class{canvas;context;state=null;startTime=performance.now();frame=0;handleResize=()=>this.resize();constructor(e){let t=e.getContext(`2d`);if(!t)throw Error(`Canvas rendering is unavailable.`);this.canvas=e,this.context=t,this.resize(),window.addEventListener(`resize`,this.handleResize)}setState(e){this.state=e}start(){let e=()=>{this.render(performance.now()),this.frame=window.requestAnimationFrame(e)};e()}stop(){window.cancelAnimationFrame(this.frame),window.removeEventListener(`resize`,this.handleResize)}resize(){let e=this.canvas.getBoundingClientRect(),t=window.devicePixelRatio||1;this.canvas.width=Math.max(1,Math.floor(e.width*t)),this.canvas.height=Math.max(1,Math.floor(e.height*t)),this.context.setTransform(t,0,0,t,0,0)}render(e){let t=this.context,n=this.canvas.clientWidth,r=this.canvas.clientHeight,i=(e-this.startTime)/1e3,a=t.createLinearGradient(0,0,0,r);a.addColorStop(0,`#151915`),a.addColorStop(.5,`#26322a`),a.addColorStop(1,`#1c1712`),t.fillStyle=a,t.fillRect(0,0,n,r),this.drawMoon(t,n,r,i),this.drawFog(t,n,r,i),this.drawForestLayer(t,n,r,.68,`#121711`,.35,i),this.drawForestLayer(t,n,r,.78,`#0c100d`,.8,i+7),this.drawGround(t,n,r),this.state?.buildings.campfire?this.drawCampfire(t,n,r,i):this.drawColdAsh(t,n,r,i)}drawMoon(e,t,n,r){let i=t*.78,a=n*.22+Math.sin(r*.08)*3,o=Math.max(18,Math.min(t,n)*.08),s=e.createRadialGradient(i,a,o*.2,i,a,o*3.6);s.addColorStop(0,`rgba(234, 221, 179, 0.34)`),s.addColorStop(1,`rgba(234, 221, 179, 0)`),e.fillStyle=s,e.beginPath(),e.arc(i,a,o*3.6,0,Math.PI*2),e.fill(),e.fillStyle=`rgba(238, 226, 188, 0.76)`,e.beginPath(),e.arc(i,a,o,0,Math.PI*2),e.fill()}drawFog(e,t,n,r){e.save(),e.globalAlpha=.18,e.fillStyle=`#d5d0bf`;for(let i=0;i<4;i+=1){let a=n*(.48+i*.09),o=(r*(8+i*2)+i*140)%(t+260)-130;e.beginPath(),e.ellipse(o,a,150+i*38,16+i*2,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(o-t*.55,a+8,180,15,0,0,Math.PI*2),e.fill()}e.restore()}drawForestLayer(e,t,n,r,i,a,o){e.save(),e.globalAlpha=a,e.fillStyle=i;let s=n*r,c=Math.ceil(t/42)+2;for(let t=-1;t<c;t+=1){let n=t*42+Math.sin(t*2.3+o*.2)*4,r=54+t*31%44;e.beginPath(),e.moveTo(n,s-r),e.lineTo(n-22,s),e.lineTo(n+22,s),e.closePath(),e.fill(),e.fillRect(n-3,s-18,6,30)}e.restore()}drawGround(e,t,n){let r=e.createLinearGradient(0,n*.72,0,n);r.addColorStop(0,`#1f2117`),r.addColorStop(1,`#12110d`),e.fillStyle=r,e.fillRect(0,n*.72,t,n*.28),e.strokeStyle=`rgba(208, 177, 113, 0.12)`,e.lineWidth=1;for(let r=0;r<10;r+=1){let i=n*(.77+r*.025);e.beginPath(),e.moveTo(0,i),e.quadraticCurveTo(t*.5,i+(r%2==0?7:-5),t,i+3),e.stroke()}}drawColdAsh(e,t,n,r){let i=t*.5,a=n*.82;e.fillStyle=`rgba(160, 152, 132, 0.2)`,e.beginPath(),e.ellipse(i,a,38+Math.sin(r)*2,9,0,0,Math.PI*2),e.fill(),e.strokeStyle=`rgba(210, 194, 148, 0.32)`,e.lineWidth=3,e.beginPath(),e.moveTo(i-32,a-1),e.lineTo(i+30,a+3),e.moveTo(i-18,a+5),e.lineTo(i+22,a-5),e.stroke()}drawCampfire(e,t,n,r){let i=t*.5,a=n*.82,o=Math.sin(r*12)*.12+Math.sin(r*19)*.08,s=e.createRadialGradient(i,a-10,4,i,a-8,110);s.addColorStop(0,`rgba(255, 194, 92, 0.46)`),s.addColorStop(1,`rgba(255, 116, 45, 0)`),e.fillStyle=s,e.beginPath(),e.arc(i,a-8,110,0,Math.PI*2),e.fill(),e.strokeStyle=`#5d4730`,e.lineWidth=5,e.beginPath(),e.moveTo(i-30,a+7),e.lineTo(i+32,a-1),e.moveTo(i-24,a-2),e.lineTo(i+24,a+7),e.stroke(),e.fillStyle=`#f2bb63`,e.beginPath(),e.moveTo(i,a-56-o*18),e.bezierCurveTo(i-24,a-25,i-8,a-8,i,a-3),e.bezierCurveTo(i+16,a-17,i+22,a-34,i,a-56-o*18),e.fill(),e.fillStyle=`#d94d2f`,e.beginPath(),e.moveTo(i+2,a-38+o*8),e.bezierCurveTo(i-11,a-20,i-4,a-5,i+2,a-2),e.bezierCurveTo(i+13,a-17,i+14,a-27,i+2,a-38+o*8),e.fill()}},$t=document.querySelector(`#app`);if(!$t)throw Error(`App root was not found.`);var Z=ie(),Q=null,en=null,tn=rt($t,{requestRender:()=>$(),persist:()=>g(Z),reset:()=>{Z=oe(),$()}});function $(){tn(Z);let e=document.querySelector(`#wilderness-canvas`);e&&e!==en&&(Q?.stop(),en=e,Q=new Qt(e),Q.start()),Q?.setState(Z)}function nn(){let e=an();if(xe(Z),e!==an()){$();return}on()}$(),rn(),window.setInterval(nn,1e3),window.setInterval(()=>g(Z),2e3),window.addEventListener(`beforeunload`,()=>g(Z));function rn(){`serviceWorker`in navigator&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./service-worker.js`).catch(()=>{})})}function an(){return JSON.stringify({inventory:Z.inventory,characterInventory:Z.characterInventory,tools:Z.tools,buildings:Z.buildings,seenResources:Z.seenResources,currentAction:Z.currentAction?{actionId:Z.currentAction.actionId,phase:Z.currentAction.phase,locationId:Z.currentAction.locationId,startedAt:Z.currentAction.startedAt,endsAt:Z.currentAction.endsAt}:null,logHead:Z.log[0]?.id??``,logLength:Z.log.length})}function on(){if(!Z.currentAction)return;let e=Math.min(1,Math.max(0,A(Z))),t=document.querySelector(`[data-action-progress]`),n=document.querySelector(`[data-action-remaining]`);t&&(t.style.transform=`scaleX(${e.toFixed(4)})`),n&&(n.textContent=`${C(Z.currentAction.endsAt-Date.now())} remaining`)}function sn(){on(),window.requestAnimationFrame(sn)}window.requestAnimationFrame(sn);