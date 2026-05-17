import"./modulepreload-polyfill-CSRv37U6.js";/* empty css              */var e=[`grit`,`forage`,`craft`,`scout`],t=10,n=1,r=5,i=2,a=[{id:`forager`,label:`Forager`,blurb:`Reads meadow herbs, roots, and quiet animal sign before hunger gets loud.`},{id:`maker`,label:`Maker`,blurb:`Turns scrap wood, stone, and hide into tools worth trusting.`},{id:`scout`,label:`Scout`,blurb:`Moves light, maps paths, and notices weather before the camp does.`},{id:`keeper`,label:`Keeper`,blurb:`Keeps fires banked, stores sorted, and tired people pointed forward.`}],o=[{id:`lean`,label:`Lean`,blurb:`Narrow frame`},{id:`steady`,label:`Steady`,blurb:`Balanced frame`},{id:`broad`,label:`Broad`,blurb:`Heavy frame`}],s=[{id:`short`,label:`Short`,blurb:`Cropped`},{id:`tied`,label:`Tied`,blurb:`Bound back`},{id:`coiled`,label:`Coiled`,blurb:`Full coils`},{id:`shaved`,label:`Shaved`,blurb:`Close cut`}],c=[{id:`none`,label:`None`,blurb:`Unmarked`},{id:`scar`,label:`Scar`,blurb:`Cheek scar`},{id:`paint`,label:`Paint`,blurb:`Ochre line`},{id:`freckles`,label:`Freckles`,blurb:`Sun marks`}],l=[{id:`patient`,label:`Patient`,blurb:`Waits out bad odds.`},{id:`sureFooted`,label:`Sure Footed`,blurb:`Keeps balance on rough paths.`},{id:`keenEye`,label:`Keen Eye`,blurb:`Finds the useful thing first.`},{id:`steadyHands`,label:`Steady Hands`,blurb:`Makes careful work repeatable.`},{id:`nightCalm`,label:`Night Calm`,blurb:`Does not rattle when the fire dips.`},{id:`campVoice`,label:`Camp Voice`,blurb:`Can make a tired crew listen.`}],u={grit:`Grit`,forage:`Forage`,craft:`Craft`,scout:`Scout`},d={grit:`Weather, wounds, and long work`,forage:`Food, fiber, and wild materials`,craft:`Tools, shelters, and repair`,scout:`Travel, paths, and warning signs`},f=[{id:`cedar`,label:`Cedar`,value:`#8f5f43`},{id:`clay`,label:`Clay`,value:`#b77752`},{id:`ochre`,label:`Ochre`,value:`#c89462`},{id:`umber`,label:`Umber`,value:`#6f4632`},{id:`deep`,label:`Deep`,value:`#493022`}],p=[{id:`black`,label:`Black`,value:`#1c1814`},{id:`chestnut`,label:`Chestnut`,value:`#5b3423`},{id:`copper`,label:`Copper`,value:`#a8552d`},{id:`silver`,label:`Silver`,value:`#c4c0ad`}],m=[{id:`moss`,label:`Moss`,value:`#62784f`,accent:`#d6a451`},{id:`river`,label:`River`,value:`#4f7f7d`,accent:`#b6d6cf`},{id:`ember`,label:`Ember`,value:`#9a4f34`,accent:`#e0ae66`},{id:`hide`,label:`Hide`,value:`#7a5a3a`,accent:`#8fb071`}],h=[`Mara Flint`,`Rowan Vale`,`Iris Kade`,`Toma Reed`,`Nell Ash`,`Silas Rook`],g=[`the north road`,`a flooded mill`,`the ash meadow`,`the old quarry`,`a river camp`],_=document.querySelector(`#app`);if(!_)throw Error(`App root was not found.`);var v=_,y=x(),b=``;v.addEventListener(`click`,e=>{let t=e.target,n=t.closest(`[data-command]`);if(n&&!n.disabled){ee(n.dataset.command??``);return}let r=t.closest(`[data-set]`);if(r&&!r.disabled){te(r);return}let i=t.closest(`[data-trait]`);if(i&&!i.disabled){ne(i.dataset.trait??``);return}let a=t.closest(`[data-stat]`);a&&!a.disabled&&re(a.dataset.stat??``,Number(a.dataset.delta??0))}),v.addEventListener(`input`,e=>{let t=e.target;t instanceof HTMLInputElement&&(t.dataset.field===`name`&&(y.name=X(t.value,32),M()),t.dataset.field===`home`&&(y.home=X(t.value,36),M()))}),T();function x(){return{name:`Cameron`,home:`the treeline`,background:`forager`,build:`steady`,hair:`tied`,mark:`none`,skin:`ochre`,hairColor:`chestnut`,palette:`moss`,traits:[`patient`,`keenEye`],stats:{grit:3,forage:3,craft:2,scout:2}}}function ee(e){switch(e){case`randomize`:S(),b=`Fresh draft rolled.`,T();return;case`reset`:y=x(),b=`Draft reset.`,T();return;case`copy`:w();return}}function te(e){let t=e.dataset.set,n=e.dataset.value;t===`background`&&J(n,a)&&(y.background=n),t===`build`&&J(n,o)&&(y.build=n),t===`hair`&&J(n,s)&&(y.hair=n),t===`mark`&&J(n,c)&&(y.mark=n),t===`skin`&&Y(n,f)&&(y.skin=n),t===`hairColor`&&Y(n,p)&&(y.hairColor=n),t===`palette`&&Y(n,m)&&(y.palette=n),b=``,T()}function ne(e){if(J(e,l)){if(y.traits.includes(e)){y.traits=y.traits.filter(t=>t!==e),b=``,T();return}if(y.traits.length>=i){b=`Choose up to ${i} traits.`,T();return}y.traits=[...y.traits,e],b=``,T()}}function re(e,i){if(!oe(e)||i!==1&&i!==-1)return;let a=y.stats[e]+i,o=W();i>0&&(o>=t||a>r)||i<0&&a<n||(y.stats={...y.stats,[e]:a},b=``,T())}function S(){y={name:Z(h),home:Z(g),background:Z(a).id,build:Z(o).id,hair:Z(s).id,mark:Z(c).id,skin:Z(f).id,hairColor:Z(p).id,palette:Z(m).id,traits:se(l.map(e=>e.id)).slice(0,i),stats:C()}}function C(){let i={grit:n,forage:n,craft:n,scout:n},a=t-e.length*n;for(;a>0;){let t=Z(e);i[t]>=r||(i[t]+=1,--a)}return i}async function w(){let e=JSON.stringify(P(),null,2);try{await navigator.clipboard.writeText(e),b=`Draft copied.`}catch{b=`Clipboard blocked; draft is shown below.`}T()}function T(){v.innerHTML=`
    <div class="creator-shell">
      <aside class="creator-rail panel">
        <div class="brand-block">
          <div class="kicker">Idle Town</div>
          <div class="brand-heading">
            <h1>Character Creator</h1>
          </div>
        </div>

        <label class="creator-field">
          <span>Name</span>
          <input data-field="name" type="text" maxlength="32" value="${$(y.name)}" />
        </label>

        <label class="creator-field">
          <span>From</span>
          <input data-field="home" type="text" maxlength="36" value="${$(y.home)}" />
        </label>

        <div class="creator-rail-summary">
          <span class="creator-status-chip">Draft only</span>
          <strong data-draft-name>${Q(F())}</strong>
          <small data-draft-epithet>${Q(I())}</small>
        </div>

        <div class="creator-rail-actions">
          <button type="button" data-command="randomize">Randomize</button>
          <button class="ghost-button" type="button" data-command="reset">Reset</button>
          <a class="creator-game-link" href="./">Back to Game</a>
        </div>
      </aside>

      <main class="creator-main">
        <section class="creator-stage panel" aria-label="Character preview">
          <div class="creator-preview-wrap">
            ${E()}
          </div>
          <div class="creator-stage-copy">
            <span class="kicker">Survivor Draft</span>
            <h2 data-stage-name>${Q(F())}</h2>
            <p data-draft-summary>${Q(L())}</p>
            <dl class="creator-picks">
              <div>
                <dt>Origin</dt>
                <dd data-pick-background>${Q(B().label)}</dd>
              </div>
              <div>
                <dt>Traits</dt>
                <dd data-pick-traits>${Q(R())}</dd>
              </div>
              <div>
                <dt>Best Skill</dt>
                <dd data-pick-best>${Q(z())}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section class="creator-tools panel" aria-label="Creator controls">
          <div class="creator-tool-grid">
            <div class="creator-section creator-section-wide">
              <div class="section-heading">
                <span>Origin</span>
              </div>
              <div class="creator-option-grid origin-grid">
                ${a.map(e=>k(`background`,e,y.background)).join(``)}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Frame</span>
              </div>
              <div class="creator-segment">
                ${o.map(e=>k(`build`,e,y.build,`compact`)).join(``)}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Hair</span>
              </div>
              <div class="creator-segment">
                ${s.map(e=>k(`hair`,e,y.hair,`compact`)).join(``)}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Mark</span>
              </div>
              <div class="creator-segment">
                ${c.map(e=>k(`mark`,e,y.mark,`compact`)).join(``)}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Skin</span>
              </div>
              <div class="swatch-row">
                ${f.map(e=>A(`skin`,e,y.skin)).join(``)}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Hair Color</span>
              </div>
              <div class="swatch-row">
                ${p.map(e=>A(`hairColor`,e,y.hairColor)).join(``)}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Kit</span>
              </div>
              <div class="swatch-row">
                ${m.map(e=>j(e)).join(``)}
              </div>
            </div>

            <div class="creator-section creator-section-wide">
              <div class="section-heading">
                <span>Stats</span>
                <span class="quiet">${G()} left</span>
              </div>
              <div class="stat-list">
                ${e.map(e=>ie(e)).join(``)}
              </div>
            </div>

            <div class="creator-section creator-section-wide">
              <div class="section-heading">
                <span>Traits</span>
                <span class="quiet">${y.traits.length}/${i}</span>
              </div>
              <div class="trait-grid">
                ${l.map(e=>ae(e)).join(``)}
              </div>
            </div>

            <div class="creator-section creator-export creator-section-wide">
              <div class="section-heading">
                <span>Draft</span>
                <span class="quiet">${Q(b)}</span>
              </div>
              <pre data-export-code>${Q(JSON.stringify(P(),null,2))}</pre>
              <button type="button" data-command="copy">Copy Draft</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  `}function E(){let e=H(f,y.skin),t=H(p,y.hairColor),n=V();return`
    <div
      class="survivor-card ${`build-${y.build}`}"
      style="--creator-skin: ${e.value}; --creator-hair: ${t.value}; --creator-cloth: ${n.value}; --creator-accent: ${n.accent};"
    >
      <div class="preview-sky" aria-hidden="true">
        <span class="preview-ridge ridge-back"></span>
        <span class="preview-ridge ridge-front"></span>
        <span class="preview-ground"></span>
      </div>
      <svg class="survivor-svg" viewBox="0 0 260 360" role="img" aria-labelledby="survivor-title">
        <title id="survivor-title">${Q(F())} preview</title>
        <path class="survivor-shadow" d="M58 321 C84 303 175 303 202 321 C177 341 86 341 58 321 Z" />
        <path class="survivor-pack" d="M171 128 C206 142 213 198 197 236 L174 231 C184 188 181 156 159 144 Z" />
        <path class="survivor-leg left" d="M106 224 L91 312 L117 312 L129 224 Z" />
        <path class="survivor-leg right" d="M139 224 L151 312 L179 312 L158 224 Z" />
        <path class="survivor-boot" d="M87 312 L121 312 L124 327 L80 327 Z" />
        <path class="survivor-boot" d="M148 312 L184 312 L190 327 L146 327 Z" />
        <path class="survivor-body" d="${K()}" />
        <path class="survivor-wrap" d="M92 137 C115 157 154 158 179 137 L186 182 C162 197 111 197 87 181 Z" />
        <path class="survivor-arm left" d="M88 148 C70 169 66 206 79 235 L96 228 C88 202 91 177 105 158 Z" />
        <path class="survivor-arm right" d="M177 148 C196 169 201 204 187 234 L170 227 C179 201 174 176 160 158 Z" />
        <circle class="survivor-head" cx="132" cy="92" r="42" />
        ${D()}
        ${O()}
        <path class="survivor-eye left" d="M115 93 Q121 88 127 93" />
        <path class="survivor-eye right" d="M141 93 Q147 88 153 93" />
        <path class="survivor-mouth" d="M120 110 Q132 118 145 110" />
        <text class="survivor-initials" x="132" y="187" data-preview-initials>${Q(q())}</text>
      </svg>
    </div>
  `}function D(){switch(y.hair){case`short`:return`<path class="survivor-hair" d="M91 84 C95 48 124 35 153 44 C174 51 183 71 176 95 C154 79 122 74 91 84 Z" />`;case`tied`:return`
        <path class="survivor-hair" d="M90 87 C94 50 123 34 153 43 C174 50 184 72 176 95 C150 79 119 75 90 87 Z" />
        <circle class="survivor-hair" cx="177" cy="98" r="14" />
      `;case`coiled`:return`
        <circle class="survivor-hair" cx="100" cy="68" r="16" />
        <circle class="survivor-hair" cx="121" cy="53" r="17" />
        <circle class="survivor-hair" cx="147" cy="54" r="17" />
        <circle class="survivor-hair" cx="166" cy="72" r="16" />
        <path class="survivor-hair" d="M91 88 C108 73 156 71 176 90 C174 53 94 50 91 88 Z" />
      `;case`shaved`:return`<path class="survivor-hair shaved" d="M94 80 C104 51 153 46 171 80 C150 71 119 70 94 80 Z" />`}}function O(){switch(y.mark){case`scar`:return`<path class="survivor-mark scar" d="M151 87 L139 112" />`;case`paint`:return`<path class="survivor-mark paint" d="M103 101 C119 108 145 108 162 101" />`;case`freckles`:return`
        <circle class="survivor-mark freckle" cx="112" cy="103" r="2" />
        <circle class="survivor-mark freckle" cx="122" cy="107" r="1.7" />
        <circle class="survivor-mark freckle" cx="147" cy="105" r="1.9" />
        <circle class="survivor-mark freckle" cx="157" cy="101" r="1.6" />
      `;case`none`:return``}}function k(e,t,n,r=``){let i=t.id===n;return`
    <button
      class="creator-option ${r} ${i?`active`:``}"
      type="button"
      data-set="${e}"
      data-value="${t.id}"
      aria-pressed="${i}"
    >
      <strong>${Q(t.label)}</strong>
      <small>${Q(t.blurb)}</small>
    </button>
  `}function A(e,t,n){let r=t.id===n;return`
    <button
      class="swatch-button ${r?`active`:``}"
      type="button"
      data-set="${e}"
      data-value="${t.id}"
      aria-label="${$(t.label)}"
      aria-pressed="${r}"
    >
      <span style="background: ${t.value}"></span>
    </button>
  `}function j(e){let t=e.id===y.palette;return`
    <button
      class="swatch-button palette-button ${t?`active`:``}"
      type="button"
      data-set="palette"
      data-value="${e.id}"
      aria-label="${$(e.label)}"
      aria-pressed="${t}"
    >
      <span style="background: linear-gradient(135deg, ${e.value} 0 58%, ${e.accent} 58% 100%)"></span>
    </button>
  `}function ie(e){let t=y.stats[e],i=G(),a=t>n,o=t<r&&i>0;return`
    <div class="stat-row">
      <span>
        <strong>${u[e]}</strong>
        <small>${d[e]}</small>
      </span>
      <div class="stat-controls">
        <button type="button" data-stat="${e}" data-delta="-1" ${a?``:`disabled`} aria-label="Lower ${u[e]}">-</button>
        <b>${t}</b>
        <button type="button" data-stat="${e}" data-delta="1" ${o?``:`disabled`} aria-label="Raise ${u[e]}">+</button>
      </div>
    </div>
  `}function ae(e){let t=y.traits.includes(e.id),n=!t&&y.traits.length>=i;return`
    <button
      class="trait-button ${t?`active`:``}"
      type="button"
      data-trait="${e.id}"
      aria-pressed="${t}"
      ${n?`disabled`:``}
    >
      <strong>${Q(e.label)}</strong>
      <small>${Q(e.blurb)}</small>
    </button>
  `}function M(){N(`[data-draft-name]`,F()),N(`[data-draft-epithet]`,I()),N(`[data-stage-name]`,F()),N(`[data-draft-summary]`,L()),N(`[data-preview-initials]`,q()),N(`#survivor-title`,`${F()} preview`),N(`[data-export-code]`,JSON.stringify(P(),null,2))}function N(e,t){let n=v.querySelector(e);n&&(n.textContent=t)}function P(){return{name:F(),epithet:I(),origin:y.background,appearance:{build:y.build,skin:y.skin,hair:y.hair,hairColor:y.hairColor,kit:y.palette,mark:y.mark},stats:y.stats,traits:y.traits}}function F(){return y.name.trim()||`Unnamed Survivor`}function I(){let e=y.home.trim()||`the wild road`;return`${B().label} from ${e}`}function L(){let e=B(),t=R().toLowerCase();return`${e.blurb} Carries ${t}, with ${z().toLowerCase()} leading the draft.`}function R(){return y.traits.length?y.traits.map(e=>U(l,e)).join(`, `):`No traits chosen`}function z(){return u[e.reduce((e,t)=>y.stats[t]>y.stats[e]?t:e,e[0])]}function B(){return a.find(e=>e.id===y.background)??a[0]}function V(){return m.find(e=>e.id===y.palette)??m[0]}function H(e,t){return e.find(e=>e.id===t)??e[0]}function U(e,t){return e.find(e=>e.id===t)?.label??t}function W(){return e.reduce((e,t)=>e+y.stats[t],0)}function G(){return t-W()}function K(){switch(y.build){case`lean`:return`M103 130 C119 119 149 119 164 130 L176 231 C154 246 113 246 91 231 Z`;case`steady`:return`M96 130 C116 116 151 116 169 130 L184 232 C160 250 107 250 84 232 Z`;case`broad`:return`M86 132 C113 113 155 113 180 132 L198 234 C168 255 99 255 69 234 Z`}}function q(){return(F().split(/\s+/).map(e=>e[0]).join(``)||`?`).slice(0,2).toUpperCase()}function oe(t){return e.some(e=>e===t)}function J(e,t){return!!(e&&t.some(t=>t.id===e))}function Y(e,t){return!!(e&&t.some(t=>t.id===e))}function X(e,t){return e.replace(/\s+/g,` `).slice(0,t)}function Z(e){return e[Math.floor(Math.random()*e.length)]}function se(e){return[...e].sort(()=>Math.random()-.5)}function Q(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function $(e){return Q(e)}