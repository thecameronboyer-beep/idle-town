import "./designMode.css";

type RequestKind = "layout" | "image" | "copy" | "style" | "behavior";

type EditRecord = {
  selector: string;
  editorId: string;
  label: string;
  tagName: string;
  className: string;
  elementText: string;
  imageSrc: string;
  files: string[];
  note: string;
  requestKind: RequestKind;
  moveX: number;
  moveY: number;
  width: number | null;
  height: number | null;
  originalWidth: number;
  originalHeight: number;
  originalLeft: number;
  originalTop: number;
  imageBackground: string;
  border: string;
  itemDescription: string;
  updatedAt: number;
};

type DragState = {
  kind: "move" | "resize";
  element: HTMLElement;
  record: EditRecord;
  startX: number;
  startY: number;
  startMoveX: number;
  startMoveY: number;
  startWidth: number;
  startHeight: number;
};

const storageKey = "idle-town-design-mode-edits-v1";
const root = document.querySelector<HTMLDivElement>("#design-root");

if (!root) {
  throw new Error("Design mode root was not found.");
}

const designRoot = root;

function requireElement<T extends Element>(selector: string): T {
  const element = designRoot.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Design mode control was not found: ${selector}`);
  }

  return element;
}

designRoot.innerHTML = `
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
        <iframe class="game-frame" title="Idle Town game preview" src="${import.meta.env.BASE_URL}index.html?designMode=1"></iframe>
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
`;

const frame = requireElement<HTMLIFrameElement>(".game-frame");
const selectionStatus = requireElement<HTMLElement>("[data-selection-status]");
const selectionDetails = requireElement<HTMLElement>("[data-selection-details]");
const requestKindInput = requireElement<HTMLSelectElement>("#requestKind");
const requestNoteInput = requireElement<HTMLTextAreaElement>("#requestNote");
const imageBackgroundInput = requireElement<HTMLInputElement>("#imageBackground");
const imageBorderInput = requireElement<HTMLInputElement>("#imageBorder");
const itemDescriptionInput = requireElement<HTMLTextAreaElement>("#itemDescription");
const promptOutput = requireElement<HTMLTextAreaElement>("#promptOutput");
const contextMenu = requireElement<HTMLElement>(".context-menu");
const toast = requireElement<HTMLElement>(".toast");
const designToggle = requireElement<HTMLButtonElement>("[data-action='toggle-design']");

let designEnabled = true;
let selectedElement: HTMLElement | null = null;
let selectedSelector = "";
let selectionBox: HTMLElement | null = null;
let dragState: DragState | null = null;
let frameCleanup: Array<() => void> = [];
let observer: MutationObserver | null = null;
let toastTimer = 0;
const edits = new Map<string, EditRecord>(loadEdits().map((edit) => [edit.selector, edit]));

frame.addEventListener("load", setupFrame);
window.setTimeout(() => {
  if (frame.contentDocument?.readyState !== "loading") {
    setupFrame();
  }
}, 0);
designRoot.addEventListener("click", handleRootClick);
contextMenu.addEventListener("click", handleContextClick);
document.addEventListener("click", (event) => {
  if (!contextMenu.contains(event.target as Node)) {
    hideContextMenu();
  }
});

requestKindInput.addEventListener("change", syncFormToRecord);
requestNoteInput.addEventListener("input", syncFormToRecord);
imageBackgroundInput.addEventListener("input", syncFormToRecord);
imageBorderInput.addEventListener("input", syncFormToRecord);
itemDescriptionInput.addEventListener("input", syncFormToRecord);

function setupFrame(): void {
  cleanupFrame();

  const doc = frame.contentDocument;
  const win = frame.contentWindow;
  if (!doc || !doc.body || !win) {
    return;
  }

  installFrameStyles(doc);
  selectionBox = createSelectionBox(doc);
  doc.body.append(selectionBox);
  doc.documentElement.classList.toggle("idle-town-design-active", designEnabled);

  const listeners: Array<[EventTarget, string, EventListenerOrEventListenerObject, AddEventListenerOptions]> = [
    [doc, "mouseover", handleFrameMouseOver, { capture: true }],
    [doc, "click", handleFrameClick, { capture: true }],
    [doc, "contextmenu", handleFrameContextMenu, { capture: true }],
    [doc, "mousedown", handleFrameMouseDown, { capture: true }],
    [doc, "mousemove", handleFrameMouseMove, { capture: true }],
    [doc, "mouseup", handleFrameMouseUp, { capture: true }],
    [doc, "scroll", handleFrameScroll, { capture: true }],
    [win, "resize", handleFrameScroll, { capture: false }]
  ];

  for (const [target, type, listener, options] of listeners) {
    target.addEventListener(type, listener, options);
    frameCleanup.push(() => target.removeEventListener(type, listener, options));
  }

  observer = new MutationObserver(() => {
    window.requestAnimationFrame(() => {
      applyStoredEdits();
      reselectAfterRender();
    });
  });
  observer.observe(doc.body, { childList: true, subtree: true });
  frameCleanup.push(() => observer?.disconnect());

  applyStoredEdits();
  updateSelectionBox();
  showToast("Design mode loaded. Click an element in the game preview.");
}

function cleanupFrame(): void {
  for (const cleanup of frameCleanup) {
    cleanup();
  }
  frameCleanup = [];
  observer = null;
  selectedElement = null;
  selectedSelector = "";
  selectionBox = null;
}

function installFrameStyles(doc: Document): void {
  if (doc.querySelector("#idle-town-design-style")) {
    return;
  }

  const style = doc.createElement("style");
  style.id = "idle-town-design-style";
  style.textContent = `
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
  `;
  doc.head.append(style);
}

function createSelectionBox(doc: Document): HTMLElement {
  const box = doc.createElement("div");
  box.className = "idle-town-design-selection-box";
  box.innerHTML = `
    <span class="idle-town-design-selection-label"></span>
    <span class="idle-town-design-resize-handle" data-design-resize="true"></span>
  `;
  return box;
}

function handleRootClick(event: MouseEvent): void {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-action]");
  if (!button) {
    return;
  }

  const action = button.dataset.action;
  if (action === "toggle-design") {
    setDesignEnabled(!designEnabled);
  } else if (action === "reload-game") {
    frame.contentWindow?.location.reload();
  } else if (action === "reset-selected") {
    resetSelectedEdit();
  } else if (action === "clear-edits") {
    clearAllEdits();
  } else if (action === "generate-prompt") {
    generatePrompt();
  } else if (action === "copy-prompt") {
    copyPrompt();
  } else if (action === "focus-note") {
    requestNoteInput.focus();
  }
}

function handleContextClick(event: MouseEvent): void {
  const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-context-action]");
  if (!button) {
    return;
  }

  const action = button.dataset.contextAction;
  hideContextMenu();

  if (action === "note") {
    requestNoteInput.focus();
  } else if (action === "compact") {
    appendNote("Make this element more compact while keeping the important information readable.");
  } else if (action === "larger") {
    appendNote("Make this element larger and more prominent without crowding nearby UI.");
  } else if (action === "image") {
    requestKindInput.value = "image";
    syncFormToRecord();
    itemDescriptionInput.focus();
  } else if (action === "reset") {
    resetSelectedEdit();
  } else if (action === "prompt") {
    generatePrompt();
  }
}

function handleFrameMouseOver(event: Event): void {
  if (!designEnabled || dragState) {
    return;
  }

  const target = findEditableElement(event.target);
  const doc = frame.contentDocument;
  if (!doc) {
    return;
  }

  for (const element of doc.querySelectorAll<HTMLElement>("[data-editor-hover='true']")) {
    element.removeAttribute("data-editor-hover");
  }

  if (target && target !== selectedElement) {
    target.dataset.editorHover = "true";
  }
}

function handleFrameClick(event: Event): void {
  if (!designEnabled) {
    return;
  }

  const target = findEditableElement(event.target);
  if (!target) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  selectElement(target);
}

function handleFrameContextMenu(event: Event): void {
  if (!designEnabled || !isFrameMouseEvent(event)) {
    return;
  }

  const target = findEditableElement(event.target);
  if (!target) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  selectElement(target);
  const frameRect = frame.getBoundingClientRect();
  showContextMenu(frameRect.left + event.clientX, frameRect.top + event.clientY);
}

function handleFrameMouseDown(event: Event): void {
  if (!designEnabled || !isFrameMouseEvent(event) || event.button !== 0) {
    return;
  }

  const target = asElement(event.target);
  if (target?.closest("[data-design-resize='true']") && selectedElement) {
    event.preventDefault();
    event.stopPropagation();
    startDrag("resize", event, selectedElement);
    return;
  }

  const editable = findEditableElement(event.target);
  if (!editable) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  selectElement(editable);
  startDrag("move", event, editable);
}

function handleFrameMouseMove(event: Event): void {
  if (!dragState || !isFrameMouseEvent(event)) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  const dx = Math.round(event.clientX - dragState.startX);
  const dy = Math.round(event.clientY - dragState.startY);

  if (dragState.kind === "move") {
    dragState.record.moveX = dragState.startMoveX + dx;
    dragState.record.moveY = dragState.startMoveY + dy;
  } else {
    dragState.record.width = Math.max(80, dragState.startWidth + dx);
    dragState.record.height = Math.max(48, dragState.startHeight + dy);
  }

  dragState.record.updatedAt = Date.now();
  edits.set(dragState.record.selector, dragState.record);
  applyRecordToElement(dragState.element, dragState.record);
  updateSelectionBox();
  renderInspector(dragState.record);
}

function handleFrameMouseUp(event: Event): void {
  if (!dragState) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  saveEdits();
  dragState = null;
}

function handleFrameScroll(): void {
  updateSelectionBox();
}

function startDrag(kind: DragState["kind"], event: MouseEvent, element: HTMLElement): void {
  const record = getOrCreateRecord(element);
  const rect = element.getBoundingClientRect();
  const width = record.width ?? Math.round(rect.width);
  const height = record.height ?? Math.round(rect.height);

  dragState = {
    kind,
    element,
    record,
    startX: event.clientX,
    startY: event.clientY,
    startMoveX: record.moveX,
    startMoveY: record.moveY,
    startWidth: width,
    startHeight: height
  };
}

function findEditableElement(target: EventTarget | null): HTMLElement | null {
  const element = asElement(target);
  if (!element) {
    return null;
  }

  if (element.closest(".idle-town-design-selection-box")) {
    return null;
  }

  return element.closest(
    [
      "[data-editor-id]",
      "button[data-command]",
      ".building-card",
      ".inventory-resource-slot",
      ".inventory-tool-slot",
      ".equipment-slot",
      ".skill-row",
      ".resource-group",
      ".log-panel",
      ".action-panel",
      ".panel"
    ].join(",")
  ) as HTMLElement | null;
}

function selectElement(element: HTMLElement): void {
  const doc = frame.contentDocument;
  if (!doc) {
    return;
  }

  if (selectedElement && selectedElement !== element) {
    selectedElement.removeAttribute("data-editor-selected");
  }

  for (const hoverElement of doc.querySelectorAll<HTMLElement>("[data-editor-hover='true']")) {
    hoverElement.removeAttribute("data-editor-hover");
  }

  selectedElement = element;
  selectedElement.dataset.editorSelected = "true";
  const record = getOrCreateRecord(element);
  selectedSelector = record.selector;
  applyRecordToElement(element, record);
  renderInspector(record);
  updateSelectionBox();
}

function reselectAfterRender(): void {
  if (!selectedSelector) {
    return;
  }

  const doc = frame.contentDocument;
  const nextElement = doc?.querySelector<HTMLElement>(selectedSelector);
  if (!nextElement) {
    selectedElement = null;
    updateSelectionBox();
    return;
  }

  selectedElement = nextElement;
  selectedElement.dataset.editorSelected = "true";
  updateSelectionBox();
}

function getOrCreateRecord(element: HTMLElement): EditRecord {
  const descriptor = describeElement(element);
  const existing = edits.get(descriptor.selector);
  if (existing) {
    return {
      ...existing,
      label: descriptor.label,
      tagName: descriptor.tagName,
      className: descriptor.className,
      elementText: descriptor.elementText,
      imageSrc: descriptor.imageSrc,
      files: descriptor.files
    };
  }

  const rect = element.getBoundingClientRect();
  const record: EditRecord = {
    ...descriptor,
    note: "",
    requestKind: "layout",
    moveX: 0,
    moveY: 0,
    width: null,
    height: null,
    originalWidth: Math.round(rect.width),
    originalHeight: Math.round(rect.height),
    originalLeft: Math.round(rect.left),
    originalTop: Math.round(rect.top),
    imageBackground: "",
    border: "",
    itemDescription: "",
    updatedAt: Date.now()
  };
  edits.set(record.selector, record);
  saveEdits();
  return record;
}

function describeElement(element: HTMLElement): Pick<
  EditRecord,
  "selector" | "editorId" | "label" | "tagName" | "className" | "elementText" | "imageSrc" | "files"
> {
  const editorId = element.dataset.editorId || getFallbackEditorId(element);
  const label = element.dataset.editorLabel || getElementLabel(element, editorId);
  const selector = element.dataset.editorId ? `[data-editor-id="${cssEscape(editorId)}"]` : buildFallbackSelector(element);
  const image =
    element.tagName.toLowerCase() === "img" ? (element as HTMLImageElement) : element.querySelector<HTMLImageElement>("img");
  const files = (element.dataset.editorFiles || "src/ui/render.ts, src/style.css")
    .split(",")
    .map((file) => file.trim())
    .filter(Boolean);

  return {
    selector,
    editorId,
    label,
    tagName: element.tagName.toLowerCase(),
    className: element.className,
    elementText: compactText(element.textContent ?? ""),
    imageSrc: image?.currentSrc || image?.src || "",
    files
  };
}

function getFallbackEditorId(element: HTMLElement): string {
  const command = element.dataset.command;
  const id = element.dataset.id || element.dataset.loopId || element.dataset.characterId;
  const base = command ? `${command}-${id || element.tagName.toLowerCase()}` : element.classList[0] || element.tagName.toLowerCase();
  return base.replace(/[^a-zA-Z0-9_-]+/g, "-").toLowerCase();
}

function getElementLabel(element: HTMLElement, editorId: string): string {
  const label = element.getAttribute("aria-label") || element.getAttribute("title") || compactText(element.textContent ?? "");
  if (label) {
    return label.slice(0, 90);
  }

  return editorId
    .split("-")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() + part.slice(1))
    .join(" ");
}

function compactText(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function buildFallbackSelector(element: HTMLElement): string {
  const classes = Array.from(element.classList)
    .slice(0, 2)
    .map((className) => `.${cssEscape(className)}`)
    .join("");
  const command = element.dataset.command ? `[data-command="${cssEscape(element.dataset.command)}"]` : "";
  const id = element.dataset.id ? `[data-id="${cssEscape(element.dataset.id)}"]` : "";
  return `${element.tagName.toLowerCase()}${classes}${command}${id}`;
}

function cssEscape(value: string | undefined): string {
  return (window.CSS && value ? window.CSS.escape(value) : (value ?? "").replace(/"/g, '\\"'));
}

function applyStoredEdits(): void {
  const doc = frame.contentDocument;
  if (!doc) {
    return;
  }

  for (const record of edits.values()) {
    const element = doc.querySelector<HTMLElement>(record.selector);
    if (element) {
      applyRecordToElement(element, record);
    }
  }
}

function applyRecordToElement(element: HTMLElement, record: EditRecord): void {
  if (record.moveX || record.moveY) {
    element.style.setProperty("translate", `${record.moveX}px ${record.moveY}px`);
  } else {
    element.style.removeProperty("translate");
  }

  if (record.width) {
    element.style.width = `${record.width}px`;
    element.style.maxWidth = "none";
  } else {
    element.style.removeProperty("width");
    element.style.removeProperty("max-width");
  }

  if (record.height) {
    element.style.height = `${record.height}px`;
    element.style.maxHeight = "none";
  } else {
    element.style.removeProperty("height");
    element.style.removeProperty("max-height");
  }

  element.dataset.designEdited = record.moveX || record.moveY || record.width || record.height ? "true" : "false";
}

function updateSelectionBox(): void {
  if (!selectionBox || !selectedElement || !frame.contentWindow) {
    selectionBox?.classList.remove("visible");
    return;
  }

  const rect = selectedElement.getBoundingClientRect();
  const win = frame.contentWindow;
  const label = selectionBox.querySelector<HTMLElement>(".idle-town-design-selection-label");
  const record = edits.get(selectedSelector);

  selectionBox.style.left = `${Math.round(rect.left + win.scrollX)}px`;
  selectionBox.style.top = `${Math.round(rect.top + win.scrollY)}px`;
  selectionBox.style.width = `${Math.round(rect.width)}px`;
  selectionBox.style.height = `${Math.round(rect.height)}px`;
  if (label) {
    label.textContent = record?.label ?? "Selected element";
  }
  selectionBox.classList.add("visible");
}

function renderInspector(record: EditRecord): void {
  selectionStatus.textContent = "Selected";
  selectionDetails.innerHTML = `
    <p class="selected-name">${escapeHtml(record.label)}</p>
    <div class="selected-meta">
      <span>Editor ID: <code>${escapeHtml(record.editorId)}</code></span>
      <span>Selector: <code>${escapeHtml(record.selector)}</code></span>
      <span>Files: <code>${escapeHtml(record.files.join(", "))}</code></span>
      ${record.imageSrc ? `<span>Image: <code>${escapeHtml(shortenUrl(record.imageSrc))}</code></span>` : ""}
    </div>
    <div class="metrics-grid">
      <div class="metric-card"><span>Move</span><strong>${record.moveX}, ${record.moveY}px</strong></div>
      <div class="metric-card"><span>Size</span><strong>${record.width ?? record.originalWidth} x ${record.height ?? record.originalHeight}</strong></div>
    </div>
  `;
  requestKindInput.value = record.requestKind;
  requestNoteInput.value = record.note;
  imageBackgroundInput.value = record.imageBackground;
  imageBorderInput.value = record.border;
  itemDescriptionInput.value = record.itemDescription;
}

function syncFormToRecord(): void {
  const record = getSelectedRecord();
  if (!record) {
    return;
  }

  record.requestKind = requestKindInput.value as RequestKind;
  record.note = requestNoteInput.value;
  record.imageBackground = imageBackgroundInput.value;
  record.border = imageBorderInput.value;
  record.itemDescription = itemDescriptionInput.value;
  record.updatedAt = Date.now();
  edits.set(record.selector, record);
  saveEdits();
}

function appendNote(note: string): void {
  const nextNote = requestNoteInput.value.trim() ? `${requestNoteInput.value.trim()}\n${note}` : note;
  requestNoteInput.value = nextNote;
  syncFormToRecord();
  requestNoteInput.focus();
}

function setDesignEnabled(enabled: boolean): void {
  designEnabled = enabled;
  const doc = frame.contentDocument;
  doc?.documentElement.classList.toggle("idle-town-design-active", enabled);
  designToggle.textContent = enabled ? "Design On" : "Play Mode";
  designToggle.classList.toggle("active", enabled);
  hideContextMenu();
  showToast(enabled ? "Design interactions enabled." : "Play mode enabled. The game can be clicked normally.");
}

function resetSelectedEdit(): void {
  const record = getSelectedRecord();
  if (!record || !selectedElement) {
    return;
  }

  record.moveX = 0;
  record.moveY = 0;
  record.width = null;
  record.height = null;
  record.updatedAt = Date.now();
  applyRecordToElement(selectedElement, record);
  edits.set(record.selector, record);
  saveEdits();
  renderInspector(record);
  updateSelectionBox();
}

function clearAllEdits(): void {
  const doc = frame.contentDocument;
  for (const record of edits.values()) {
    const element = doc?.querySelector<HTMLElement>(record.selector);
    if (element) {
      element.style.removeProperty("translate");
      element.style.removeProperty("width");
      element.style.removeProperty("height");
      element.style.removeProperty("max-width");
      element.style.removeProperty("max-height");
      element.removeAttribute("data-design-edited");
    }
  }

  edits.clear();
  saveEdits();
  selectedElement?.removeAttribute("data-editor-selected");
  selectedElement = null;
  selectedSelector = "";
  selectionStatus.textContent = "None";
  selectionDetails.innerHTML = `<p class="empty-copy">Click a game panel or card to select it. Drag the selected element to test placement. Use the lower-right handle to resize it.</p>`;
  requestNoteInput.value = "";
  promptOutput.value = "";
  updateSelectionBox();
  showToast("All visual experiments cleared.");
}

function getSelectedRecord(): EditRecord | null {
  syncSelectedElementDescriptor();
  return selectedSelector ? edits.get(selectedSelector) ?? null : null;
}

function syncSelectedElementDescriptor(): void {
  if (!selectedElement) {
    return;
  }

  const record = getOrCreateRecord(selectedElement);
  selectedSelector = record.selector;
}

function generatePrompt(): void {
  syncFormToRecord();
  const record = getSelectedRecord();
  if (!record) {
    promptOutput.value = "Select an element in the game preview first.";
    return;
  }

  promptOutput.value = buildPrompt(record);
  showToast("Prompt generated.");
}

function buildPrompt(record: EditRecord): string {
  const movement = formatMovement(record);
  const sizeChange = formatSizeChange(record);
  const imageSection =
    record.requestKind === "image"
      ? `
Image Background:
${record.imageBackground || "[describe the desired image background]"}

Border:
${record.border || "[describe the desired border or say no border]"}

Item Description:
${record.itemDescription || "[describe the item/icon replacement]"}
`
      : "";

  return `Idle Town design change request:

Screen:
- Main game preview from Design Mode.

Selected element:
- Label: ${record.label}
- Editor ID: ${record.editorId}
- Selector: ${record.selector}
- Tag/classes: ${record.tagName}${record.className ? `.${record.className.split(" ").join(".")}` : ""}
${record.imageSrc ? `- Current image: ${shortenUrl(record.imageSrc)}` : ""}
${record.elementText ? `- Current visible text: ${record.elementText.slice(0, 220)}` : ""}

Requested change:
${record.note || "[describe the change you want]"}

Visual experiment:
${movement}
${sizeChange}

Change type:
- ${record.requestKind}
${imageSection}
Likely files:
${record.files.map((file) => `- ${file}`).join("\n")}

Rules:
- Do not change save data or persistence unless I explicitly ask.
- Keep existing Idle Town style unless the request says otherwise.
- Make the real code change rather than relying on Design Mode inline styles.
- Run npm run build and summarize changed files.`;
}

function formatMovement(record: EditRecord): string {
  if (!record.moveX && !record.moveY) {
    return "- No move experiment recorded.";
  }

  const horizontal = record.moveX > 0 ? `right ${record.moveX}px` : record.moveX < 0 ? `left ${Math.abs(record.moveX)}px` : "";
  const vertical = record.moveY > 0 ? `down ${record.moveY}px` : record.moveY < 0 ? `up ${Math.abs(record.moveY)}px` : "";
  return `- Move test: ${[horizontal, vertical].filter(Boolean).join(", ")}.`;
}

function formatSizeChange(record: EditRecord): string {
  if (!record.width && !record.height) {
    return "- No resize experiment recorded.";
  }

  return `- Resize test: ${record.width ?? record.originalWidth}px wide by ${record.height ?? record.originalHeight}px tall, originally about ${record.originalWidth}px by ${record.originalHeight}px.`;
}

async function copyPrompt(): Promise<void> {
  if (!promptOutput.value.trim()) {
    generatePrompt();
  }

  try {
    await navigator.clipboard.writeText(promptOutput.value);
    showToast("Prompt copied.");
  } catch {
    promptOutput.focus();
    promptOutput.select();
    showToast("Prompt selected. Use Ctrl+C to copy.");
  }
}

function loadEdits(): EditRecord[] {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isEditRecord) : [];
  } catch {
    return [];
  }
}

function isEditRecord(value: unknown): value is EditRecord {
  return Boolean(
    value &&
      typeof value === "object" &&
      "selector" in value &&
      typeof (value as { selector?: unknown }).selector === "string" &&
      "editorId" in value &&
      typeof (value as { editorId?: unknown }).editorId === "string"
  );
}

function saveEdits(): void {
  window.localStorage.setItem(storageKey, JSON.stringify(Array.from(edits.values())));
}

function showContextMenu(left: number, top: number): void {
  const menuWidth = 220;
  const menuHeight = 214;
  contextMenu.style.left = `${Math.min(left, window.innerWidth - menuWidth - 8)}px`;
  contextMenu.style.top = `${Math.min(top, window.innerHeight - menuHeight - 8)}px`;
  contextMenu.classList.add("open");
}

function hideContextMenu(): void {
  contextMenu.classList.remove("open");
}

function showToast(message: string): void {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

function shortenUrl(value: string): string {
  try {
    const url = new URL(value);
    return decodeURIComponent(url.pathname).replace(/^\/+/, "");
  } catch {
    return value;
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function asElement(target: EventTarget | null): Element | null {
  if (!target || typeof (target as Element).closest !== "function") {
    return null;
  }

  return target as Element;
}

function isFrameMouseEvent(event: Event): event is MouseEvent {
  const maybeMouseEvent = event as MouseEvent;
  return typeof maybeMouseEvent.clientX === "number" && typeof maybeMouseEvent.clientY === "number";
}
