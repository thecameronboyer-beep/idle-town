import"./modulepreload-polyfill-Cf3xff8G.js";var e=`idle-town-design-mode-edits-v1`,t=document.querySelector(`#design-root`);if(!t)throw Error(`Design mode root was not found.`);var n=t;function r(e){let t=n.querySelector(e);if(!t)throw Error(`Design mode control was not found: ${e}`);return t}n.innerHTML=`
  <div class="design-app">
    <header class="design-topbar">
      <div class="brand">
        <h1>Idle Town Design Mode</h1>
        <p>Select, drag, resize, right-click, and generate a precise Codex prompt. Visual edits stay in this browser only.</p>
      </div>
      <div class="topbar-actions">
        <button class="tool-button active" type="button" data-action="toggle-design">Design On</button>
        <button class="tool-button" type="button" data-action="reload-game">Reload Game</button>
        <button class="tool-button" type="button" data-action="reset-selected">Reset Selected</button>
        <button class="tool-button danger" type="button" data-action="clear-edits">Clear All</button>
        <button class="tool-button primary" type="button" data-action="generate-prompt">Generate Prompt</button>
      </div>
    </header>
    <div class="design-workspace">
      <section class="preview-stage" aria-label="Game preview">
        <iframe class="game-frame" title="Idle Town game preview" src="./index.html?designMode=1"></iframe>
      </section>
      <aside class="inspector" aria-label="Design inspector">
        <div class="inspector-inner">
          <section class="panel">
            <header class="panel-heading">
              <h2>Selection</h2>
              <span data-selection-status>None</span>
            </header>
            <div class="panel-body" data-selection-details>
              <p class="empty-copy">Click a game panel or card to select it. Drag the selected element to test placement. Use the lower-right handle to resize it.</p>
            </div>
          </section>
          <section class="panel">
            <header class="panel-heading">
              <h2>Request</h2>
              <span>Notes</span>
            </header>
            <div class="panel-body">
              <div class="form-field">
                <label for="requestKind">Change type</label>
                <select id="requestKind" class="select">
                  <option value="layout">Layout / spacing</option>
                  <option value="image">Image replacement</option>
                  <option value="copy">Text / wording</option>
                  <option value="style">Visual style</option>
                  <option value="behavior">Behavior</option>
                </select>
              </div>
              <div class="form-field">
                <label for="requestNote">What should change?</label>
                <textarea id="requestNote" class="textarea" placeholder="Example: Make this panel shorter and show more item icons per row."></textarea>
              </div>
              <div class="field-grid" data-image-fields>
                <div class="form-field">
                  <label for="imageBackground">Image Background</label>
                  <input id="imageBackground" class="input" type="text" placeholder="Transparent, parchment slot, wood table, etc." />
                </div>
                <div class="form-field">
                  <label for="imageBorder">Border</label>
                  <input id="imageBorder" class="input" type="text" placeholder="Iron frame, no border, worn copper, etc." />
                </div>
                <div class="form-field">
                  <label for="itemDescription">Item Description</label>
                  <textarea id="itemDescription" class="textarea" placeholder="Describe the replacement item/icon clearly."></textarea>
                </div>
              </div>
            </div>
          </section>
          <section class="panel">
            <header class="panel-heading">
              <h2>Prompt</h2>
              <span>Copy back to Codex</span>
            </header>
            <div class="panel-body">
              <textarea id="promptOutput" class="textarea prompt-output" readonly placeholder="Generate a prompt after selecting something."></textarea>
              <div class="button-row">
                <button class="tool-button primary" type="button" data-action="copy-prompt">Copy Prompt</button>
                <button class="tool-button" type="button" data-action="focus-note">Add Note</button>
              </div>
            </div>
          </section>
        </div>
      </aside>
    </div>
    <nav class="context-menu" aria-label="Element quick actions">
      <button type="button" data-context-action="note">Edit note</button>
      <button type="button" data-context-action="compact">Make more compact</button>
      <button type="button" data-context-action="larger">Make larger</button>
      <button type="button" data-context-action="image">Replace image</button>
      <button type="button" data-context-action="reset">Reset visual edit</button>
      <button type="button" data-context-action="prompt">Generate prompt</button>
    </nav>
    <div class="toast" role="status" aria-live="polite"></div>
  </div>
`;var i=r(`.game-frame`),a=r(`[data-selection-status]`),o=r(`[data-selection-details]`),s=r(`#requestKind`),c=r(`#requestNote`),l=r(`#imageBackground`),u=r(`#imageBorder`),d=r(`#itemDescription`),f=r(`#promptOutput`),p=r(`.context-menu`),m=r(`.toast`),h=r(`[data-action='toggle-design']`),g=!0,_=null,v=``,y=null,b=null,x=[],S=null,C=0,w=new Map(ve().map(e=>[e.selector,e]));i.addEventListener(`load`,T),window.setTimeout(()=>{i.contentDocument?.readyState!==`loading`&&T()},0),n.addEventListener(`click`,E),p.addEventListener(`click`,re),document.addEventListener(`click`,e=>{p.contains(e.target)||J()}),s.addEventListener(`change`,V),c.addEventListener(`input`,V),l.addEventListener(`input`,V),u.addEventListener(`input`,V),d.addEventListener(`input`,V);function T(){ee();let e=i.contentDocument,t=i.contentWindow;if(!e||!e.body||!t)return;te(e),y=ne(e),e.body.append(y),e.documentElement.classList.toggle(`idle-town-design-active`,g);let n=[[e,`mouseover`,ie,{capture:!0}],[e,`click`,D,{capture:!0}],[e,`contextmenu`,O,{capture:!0}],[e,`mousedown`,ae,{capture:!0}],[e,`mousemove`,oe,{capture:!0}],[e,`mouseup`,se,{capture:!0}],[e,`scroll`,k,{capture:!0}],[t,`resize`,k,{capture:!1}]];for(let[e,t,r,i]of n)e.addEventListener(t,r,i),x.push(()=>e.removeEventListener(t,r,i));S=new MutationObserver(()=>{window.requestAnimationFrame(()=>{L(),N()})}),S.observe(e.body,{childList:!0,subtree:!0}),x.push(()=>S?.disconnect()),L(),z(),Y(`Design mode loaded. Click an element in the game preview.`)}function ee(){for(let e of x)e();x=[],S=null,_=null,v=``,y=null}function te(e){if(e.querySelector(`#idle-town-design-style`))return;let t=e.createElement(`style`);t.id=`idle-town-design-style`,t.textContent=`
    html.idle-town-design-active * {
      cursor: crosshair;
    }

    html.idle-town-design-active [data-editor-hover="true"] {
      outline: 2px dashed rgba(126, 181, 199, 0.95);
      outline-offset: 3px;
    }

    html.idle-town-design-active [data-editor-selected="true"] {
      outline: 2px solid #e4b75e;
      outline-offset: 4px;
    }

    [data-design-edited="true"] {
      box-shadow: 0 0 0 2px rgba(228, 183, 94, 0.34), 0 14px 34px rgba(0, 0, 0, 0.24);
    }

    .idle-town-design-selection-box {
      position: absolute;
      z-index: 2147483646;
      display: none;
      border: 2px solid #e4b75e;
      box-shadow: 0 0 0 9999px rgba(7, 5, 3, 0.04);
      pointer-events: none;
    }

    .idle-town-design-selection-box.visible {
      display: block;
    }

    .idle-town-design-selection-label {
      position: absolute;
      left: -2px;
      top: -30px;
      max-width: 280px;
      overflow: hidden;
      padding: 4px 7px;
      border-radius: 5px 5px 0 0;
      color: #21170f;
      background: #e4b75e;
      font: 700 12px/1.25 system-ui, sans-serif;
      text-overflow: ellipsis;
      white-space: nowrap;
      pointer-events: none;
    }

    .idle-town-design-resize-handle {
      position: absolute;
      right: -8px;
      bottom: -8px;
      width: 16px;
      height: 16px;
      border: 2px solid #1a120c;
      border-radius: 50%;
      background: #e4b75e;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.42);
      cursor: nwse-resize;
      pointer-events: auto;
    }
  `,e.head.append(t)}function ne(e){let t=e.createElement(`div`);return t.className=`idle-town-design-selection-box`,t.innerHTML=`
    <span class="idle-town-design-selection-label"></span>
    <span class="idle-town-design-resize-handle" data-design-resize="true"></span>
  `,t}function E(e){let t=e.target.closest(`[data-action]`);if(!t)return;let n=t.dataset.action;n===`toggle-design`?fe(!g):n===`reload-game`?i.contentWindow?.location.reload():n===`reset-selected`?U():n===`clear-edits`?pe():n===`generate-prompt`?G():n===`copy-prompt`?_e():n===`focus-note`&&c.focus()}function re(e){let t=e.target.closest(`[data-context-action]`);if(!t)return;let n=t.dataset.contextAction;J(),n===`note`?c.focus():n===`compact`?H(`Make this element more compact while keeping the important information readable.`):n===`larger`?H(`Make this element larger and more prominent without crowding nearby UI.`):n===`image`?(s.value=`image`,V(),d.focus()):n===`reset`?U():n===`prompt`&&G()}function ie(e){if(!g||b)return;let t=j(e.target),n=i.contentDocument;if(n){for(let e of n.querySelectorAll(`[data-editor-hover='true']`))e.removeAttribute(`data-editor-hover`);t&&t!==_&&(t.dataset.editorHover=`true`)}}function D(e){if(!g)return;let t=j(e.target);t&&(e.preventDefault(),e.stopPropagation(),M(t))}function O(e){if(!g||!$(e))return;let t=j(e.target);if(!t)return;e.preventDefault(),e.stopPropagation(),M(t);let n=i.getBoundingClientRect();be(n.left+e.clientX,n.top+e.clientY)}function ae(e){if(!g||!$(e)||e.button!==0)return;if(Q(e.target)?.closest(`[data-design-resize='true']`)&&_){e.preventDefault(),e.stopPropagation(),A(`resize`,e,_);return}let t=j(e.target);t&&(e.preventDefault(),e.stopPropagation(),M(t),A(`move`,e,t))}function oe(e){if(!b||!$(e))return;e.preventDefault(),e.stopPropagation();let t=Math.round(e.clientX-b.startX),n=Math.round(e.clientY-b.startY);b.kind===`move`?(b.record.moveX=b.startMoveX+t,b.record.moveY=b.startMoveY+n):(b.record.width=Math.max(80,b.startWidth+t),b.record.height=Math.max(48,b.startHeight+n)),b.record.updatedAt=Date.now(),w.set(b.record.selector,b.record),R(b.element,b.record),z(),B(b.record)}function se(e){b&&=(e.preventDefault(),e.stopPropagation(),q(),null)}function k(){z()}function A(e,t,n){let r=P(n),i=n.getBoundingClientRect(),a=r.width??Math.round(i.width),o=r.height??Math.round(i.height);b={kind:e,element:n,record:r,startX:t.clientX,startY:t.clientY,startMoveX:r.moveX,startMoveY:r.moveY,startWidth:a,startHeight:o}}function j(e){let t=Q(e);return!t||t.closest(`.idle-town-design-selection-box`)?null:t.closest([`[data-editor-id]`,`button[data-command]`,`.building-card`,`.inventory-resource-slot`,`.inventory-tool-slot`,`.equipment-slot`,`.skill-row`,`.resource-group`,`.log-panel`,`.action-panel`,`.panel`].join(`,`))}function M(e){let t=i.contentDocument;if(!t)return;_&&_!==e&&_.removeAttribute(`data-editor-selected`);for(let e of t.querySelectorAll(`[data-editor-hover='true']`))e.removeAttribute(`data-editor-hover`);_=e,_.dataset.editorSelected=`true`;let n=P(e);v=n.selector,R(e,n),B(n),z()}function N(){if(!v)return;let e=i.contentDocument?.querySelector(v);if(!e){_=null,z();return}_=e,_.dataset.editorSelected=`true`,z()}function P(e){let t=ce(e),n=w.get(t.selector);if(n)return{...n,label:t.label,tagName:t.tagName,className:t.className,elementText:t.elementText,imageSrc:t.imageSrc,files:t.files};let r=e.getBoundingClientRect(),i={...t,note:``,requestKind:`layout`,moveX:0,moveY:0,width:null,height:null,originalWidth:Math.round(r.width),originalHeight:Math.round(r.height),originalLeft:Math.round(r.left),originalTop:Math.round(r.top),imageBackground:``,border:``,itemDescription:``,updatedAt:Date.now()};return w.set(i.selector,i),q(),i}function ce(e){let t=e.dataset.editorId||le(e),n=e.dataset.editorLabel||ue(e,t),r=e.dataset.editorId?`[data-editor-id="${I(t)}"]`:de(e),i=e.tagName.toLowerCase()===`img`?e:e.querySelector(`img`),a=(e.dataset.editorFiles||`src/ui/render.ts, src/style.css`).split(`,`).map(e=>e.trim()).filter(Boolean);return{selector:r,editorId:t,label:n,tagName:e.tagName.toLowerCase(),className:e.className,elementText:F(e.textContent??``),imageSrc:i?.currentSrc||i?.src||``,files:a}}function le(e){let t=e.dataset.command,n=e.dataset.id||e.dataset.loopId||e.dataset.characterId;return(t?`${t}-${n||e.tagName.toLowerCase()}`:e.classList[0]||e.tagName.toLowerCase()).replace(/[^a-zA-Z0-9_-]+/g,`-`).toLowerCase()}function ue(e,t){let n=e.getAttribute(`aria-label`)||e.getAttribute(`title`)||F(e.textContent??``);return n?n.slice(0,90):t.split(`-`).filter(Boolean).map(e=>e[0]?.toUpperCase()+e.slice(1)).join(` `)}function F(e){return e.replace(/\s+/g,` `).trim()}function de(e){let t=Array.from(e.classList).slice(0,2).map(e=>`.${I(e)}`).join(``),n=e.dataset.command?`[data-command="${I(e.dataset.command)}"]`:``,r=e.dataset.id?`[data-id="${I(e.dataset.id)}"]`:``;return`${e.tagName.toLowerCase()}${t}${n}${r}`}function I(e){return window.CSS&&e?window.CSS.escape(e):(e??``).replace(/"/g,`\\"`)}function L(){let e=i.contentDocument;if(e)for(let t of w.values()){let n=e.querySelector(t.selector);n&&R(n,t)}}function R(e,t){t.moveX||t.moveY?e.style.setProperty(`translate`,`${t.moveX}px ${t.moveY}px`):e.style.removeProperty(`translate`),t.width?(e.style.width=`${t.width}px`,e.style.maxWidth=`none`):(e.style.removeProperty(`width`),e.style.removeProperty(`max-width`)),t.height?(e.style.height=`${t.height}px`,e.style.maxHeight=`none`):(e.style.removeProperty(`height`),e.style.removeProperty(`max-height`)),e.dataset.designEdited=t.moveX||t.moveY||t.width||t.height?`true`:`false`}function z(){if(!y||!_||!i.contentWindow){y?.classList.remove(`visible`);return}let e=_.getBoundingClientRect(),t=i.contentWindow,n=y.querySelector(`.idle-town-design-selection-label`),r=w.get(v);y.style.left=`${Math.round(e.left+t.scrollX)}px`,y.style.top=`${Math.round(e.top+t.scrollY)}px`,y.style.width=`${Math.round(e.width)}px`,y.style.height=`${Math.round(e.height)}px`,n&&(n.textContent=r?.label??`Selected element`),y.classList.add(`visible`)}function B(e){a.textContent=`Selected`,o.innerHTML=`
    <p class="selected-name">${Z(e.label)}</p>
    <div class="selected-meta">
      <span>Editor ID: <code>${Z(e.editorId)}</code></span>
      <span>Selector: <code>${Z(e.selector)}</code></span>
      <span>Files: <code>${Z(e.files.join(`, `))}</code></span>
      ${e.imageSrc?`<span>Image: <code>${Z(X(e.imageSrc))}</code></span>`:``}
    </div>
    <div class="metrics-grid">
      <div class="metric-card"><span>Move</span><strong>${e.moveX}, ${e.moveY}px</strong></div>
      <div class="metric-card"><span>Size</span><strong>${e.width??e.originalWidth} x ${e.height??e.originalHeight}</strong></div>
    </div>
  `,s.value=e.requestKind,c.value=e.note,l.value=e.imageBackground,u.value=e.border,d.value=e.itemDescription}function V(){let e=W();e&&(e.requestKind=s.value,e.note=c.value,e.imageBackground=l.value,e.border=u.value,e.itemDescription=d.value,e.updatedAt=Date.now(),w.set(e.selector,e),q())}function H(e){c.value=c.value.trim()?`${c.value.trim()}\n${e}`:e,V(),c.focus()}function fe(e){g=e,i.contentDocument?.documentElement.classList.toggle(`idle-town-design-active`,e),h.textContent=e?`Design On`:`Play Mode`,h.classList.toggle(`active`,e),J(),Y(e?`Design interactions enabled.`:`Play mode enabled. The game can be clicked normally.`)}function U(){let e=W();!e||!_||(e.moveX=0,e.moveY=0,e.width=null,e.height=null,e.updatedAt=Date.now(),R(_,e),w.set(e.selector,e),q(),B(e),z())}function pe(){let e=i.contentDocument;for(let t of w.values()){let n=e?.querySelector(t.selector);n&&(n.style.removeProperty(`translate`),n.style.removeProperty(`width`),n.style.removeProperty(`height`),n.style.removeProperty(`max-width`),n.style.removeProperty(`max-height`),n.removeAttribute(`data-design-edited`))}w.clear(),q(),_?.removeAttribute(`data-editor-selected`),_=null,v=``,a.textContent=`None`,o.innerHTML=`<p class="empty-copy">Click a game panel or card to select it. Drag the selected element to test placement. Use the lower-right handle to resize it.</p>`,c.value=``,f.value=``,z(),Y(`All visual experiments cleared.`)}function W(){return me(),v?w.get(v)??null:null}function me(){_&&(v=P(_).selector)}function G(){V();let e=W();if(!e){f.value=`Select an element in the game preview first.`;return}f.value=he(e),Y(`Prompt generated.`)}function he(e){let t=ge(e),n=K(e),r=e.requestKind===`image`?`
Image Background:
${e.imageBackground||`[describe the desired image background]`}

Border:
${e.border||`[describe the desired border or say no border]`}

Item Description:
${e.itemDescription||`[describe the item/icon replacement]`}
`:``;return`Idle Town design change request:

Screen:
- Main game preview from Design Mode.

Selected element:
- Label: ${e.label}
- Editor ID: ${e.editorId}
- Selector: ${e.selector}
- Tag/classes: ${e.tagName}${e.className?`.${e.className.split(` `).join(`.`)}`:``}
${e.imageSrc?`- Current image: ${X(e.imageSrc)}`:``}
${e.elementText?`- Current visible text: ${e.elementText.slice(0,220)}`:``}

Requested change:
${e.note||`[describe the change you want]`}

Visual experiment:
${t}
${n}

Change type:
- ${e.requestKind}
${r}
Likely files:
${e.files.map(e=>`- ${e}`).join(`
`)}

Rules:
- Do not change save data or persistence unless I explicitly ask.
- Keep existing Idle Town style unless the request says otherwise.
- Make the real code change rather than relying on Design Mode inline styles.
- Run npm run build and summarize changed files.`}function ge(e){return!e.moveX&&!e.moveY?`- No move experiment recorded.`:`- Move test: ${[e.moveX>0?`right ${e.moveX}px`:e.moveX<0?`left ${Math.abs(e.moveX)}px`:``,e.moveY>0?`down ${e.moveY}px`:e.moveY<0?`up ${Math.abs(e.moveY)}px`:``].filter(Boolean).join(`, `)}.`}function K(e){return!e.width&&!e.height?`- No resize experiment recorded.`:`- Resize test: ${e.width??e.originalWidth}px wide by ${e.height??e.originalHeight}px tall, originally about ${e.originalWidth}px by ${e.originalHeight}px.`}async function _e(){f.value.trim()||G();try{await navigator.clipboard.writeText(f.value),Y(`Prompt copied.`)}catch{f.focus(),f.select(),Y(`Prompt selected. Use Ctrl+C to copy.`)}}function ve(){try{let t=window.localStorage.getItem(e);if(!t)return[];let n=JSON.parse(t);return Array.isArray(n)?n.filter(ye):[]}catch{return[]}}function ye(e){return!!(e&&typeof e==`object`&&`selector`in e&&typeof e.selector==`string`&&`editorId`in e&&typeof e.editorId==`string`)}function q(){window.localStorage.setItem(e,JSON.stringify(Array.from(w.values())))}function be(e,t){p.style.left=`${Math.min(e,window.innerWidth-220-8)}px`,p.style.top=`${Math.min(t,window.innerHeight-214-8)}px`,p.classList.add(`open`)}function J(){p.classList.remove(`open`)}function Y(e){window.clearTimeout(C),m.textContent=e,m.classList.add(`visible`),C=window.setTimeout(()=>m.classList.remove(`visible`),2400)}function X(e){try{let t=new URL(e);return decodeURIComponent(t.pathname).replace(/^\/+/,``)}catch{return e}}function Z(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function Q(e){return!e||typeof e.closest!=`function`?null:e}function $(e){let t=e;return typeof t.clientX==`number`&&typeof t.clientY==`number`}