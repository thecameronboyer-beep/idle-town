import "./style.css";
import "./ui/characterCreator.css";

type BackgroundId = "forager" | "maker" | "scout" | "keeper";
type BuildId = "lean" | "steady" | "broad";
type HairId = "short" | "tied" | "coiled" | "shaved";
type MarkId = "none" | "scar" | "paint" | "freckles";
type SkinId = "cedar" | "clay" | "ochre" | "umber" | "deep";
type HairColorId = "black" | "chestnut" | "copper" | "silver";
type PaletteId = "moss" | "river" | "ember" | "hide";
type TraitId = "patient" | "sureFooted" | "keenEye" | "steadyHands" | "nightCalm" | "campVoice";
type StatId = "grit" | "forage" | "craft" | "scout";

type Option<TId extends string> = {
  id: TId;
  label: string;
  blurb: string;
};

type ColorOption<TId extends string> = {
  id: TId;
  label: string;
  value: string;
};

type CharacterStats = Record<StatId, number>;

type CharacterDraft = {
  name: string;
  home: string;
  background: BackgroundId;
  build: BuildId;
  hair: HairId;
  mark: MarkId;
  skin: SkinId;
  hairColor: HairColorId;
  palette: PaletteId;
  traits: TraitId[];
  stats: CharacterStats;
};

const statIds = ["grit", "forage", "craft", "scout"] as const satisfies readonly StatId[];
const statTotal = 10;
const statMin = 1;
const statMax = 5;
const maxTraits = 2;

const backgrounds: Option<BackgroundId>[] = [
  {
    id: "forager",
    label: "Forager",
    blurb: "Reads berries, mushrooms, and quiet animal sign before hunger gets loud."
  },
  {
    id: "maker",
    label: "Maker",
    blurb: "Turns scrap wood, stone, and hide into tools worth trusting."
  },
  {
    id: "scout",
    label: "Scout",
    blurb: "Moves light, maps paths, and notices weather before the camp does."
  },
  {
    id: "keeper",
    label: "Keeper",
    blurb: "Keeps fires banked, stores sorted, and tired people pointed forward."
  }
];

const builds: Option<BuildId>[] = [
  { id: "lean", label: "Lean", blurb: "Narrow frame" },
  { id: "steady", label: "Steady", blurb: "Balanced frame" },
  { id: "broad", label: "Broad", blurb: "Heavy frame" }
];

const hairStyles: Option<HairId>[] = [
  { id: "short", label: "Short", blurb: "Cropped" },
  { id: "tied", label: "Tied", blurb: "Bound back" },
  { id: "coiled", label: "Coiled", blurb: "Full coils" },
  { id: "shaved", label: "Shaved", blurb: "Close cut" }
];

const marks: Option<MarkId>[] = [
  { id: "none", label: "None", blurb: "Unmarked" },
  { id: "scar", label: "Scar", blurb: "Cheek scar" },
  { id: "paint", label: "Paint", blurb: "Ochre line" },
  { id: "freckles", label: "Freckles", blurb: "Sun marks" }
];

const traits: Option<TraitId>[] = [
  { id: "patient", label: "Patient", blurb: "Waits out bad odds." },
  { id: "sureFooted", label: "Sure Footed", blurb: "Keeps balance on rough paths." },
  { id: "keenEye", label: "Keen Eye", blurb: "Finds the useful thing first." },
  { id: "steadyHands", label: "Steady Hands", blurb: "Makes careful work repeatable." },
  { id: "nightCalm", label: "Night Calm", blurb: "Does not rattle when the fire dips." },
  { id: "campVoice", label: "Camp Voice", blurb: "Can make a tired crew listen." }
];

const statLabels: Record<StatId, string> = {
  grit: "Grit",
  forage: "Forage",
  craft: "Craft",
  scout: "Scout"
};

const statBlurbs: Record<StatId, string> = {
  grit: "Weather, wounds, and long work",
  forage: "Food, fiber, and wild materials",
  craft: "Tools, shelters, and repair",
  scout: "Travel, paths, and warning signs"
};

const skinColors: ColorOption<SkinId>[] = [
  { id: "cedar", label: "Cedar", value: "#8f5f43" },
  { id: "clay", label: "Clay", value: "#b77752" },
  { id: "ochre", label: "Ochre", value: "#c89462" },
  { id: "umber", label: "Umber", value: "#6f4632" },
  { id: "deep", label: "Deep", value: "#493022" }
];

const hairColors: ColorOption<HairColorId>[] = [
  { id: "black", label: "Black", value: "#1c1814" },
  { id: "chestnut", label: "Chestnut", value: "#5b3423" },
  { id: "copper", label: "Copper", value: "#a8552d" },
  { id: "silver", label: "Silver", value: "#c4c0ad" }
];

const palettes: Array<ColorOption<PaletteId> & { accent: string }> = [
  { id: "moss", label: "Moss", value: "#62784f", accent: "#d6a451" },
  { id: "river", label: "River", value: "#4f7f7d", accent: "#b6d6cf" },
  { id: "ember", label: "Ember", value: "#9a4f34", accent: "#e0ae66" },
  { id: "hide", label: "Hide", value: "#7a5a3a", accent: "#8fb071" }
];

const randomNames = ["Mara Flint", "Rowan Vale", "Iris Kade", "Toma Reed", "Nell Ash", "Silas Rook"];
const randomHomes = ["the north road", "a flooded mill", "the ash meadow", "the old quarry", "a river camp"];

const appRoot = document.querySelector<HTMLDivElement>("#app");

if (!appRoot) {
  throw new Error("App root was not found.");
}

const app = appRoot;

let draft = createDefaultDraft();
let notice = "";

app.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const commandButton = target.closest<HTMLButtonElement>("[data-command]");

  if (commandButton && !commandButton.disabled) {
    runCommand(commandButton.dataset.command ?? "");
    return;
  }

  const optionButton = target.closest<HTMLButtonElement>("[data-set]");
  if (optionButton && !optionButton.disabled) {
    updateOption(optionButton);
    return;
  }

  const traitButton = target.closest<HTMLButtonElement>("[data-trait]");
  if (traitButton && !traitButton.disabled) {
    toggleTrait(traitButton.dataset.trait ?? "");
    return;
  }

  const statButton = target.closest<HTMLButtonElement>("[data-stat]");
  if (statButton && !statButton.disabled) {
    updateStat(statButton.dataset.stat ?? "", Number(statButton.dataset.delta ?? 0));
  }
});

app.addEventListener("input", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  if (target.dataset.field === "name") {
    draft.name = cleanText(target.value, 32);
    syncDynamicCopy();
  }

  if (target.dataset.field === "home") {
    draft.home = cleanText(target.value, 36);
    syncDynamicCopy();
  }
});

render();

function createDefaultDraft(): CharacterDraft {
  return {
    name: "Cameron",
    home: "the treeline",
    background: "forager",
    build: "steady",
    hair: "tied",
    mark: "none",
    skin: "ochre",
    hairColor: "chestnut",
    palette: "moss",
    traits: ["patient", "keenEye"],
    stats: {
      grit: 3,
      forage: 3,
      craft: 2,
      scout: 2
    }
  };
}

function runCommand(command: string): void {
  switch (command) {
    case "randomize":
      randomizeDraft();
      notice = "Fresh draft rolled.";
      render();
      return;
    case "reset":
      draft = createDefaultDraft();
      notice = "Draft reset.";
      render();
      return;
    case "copy":
      void copyDraft();
      return;
  }
}

function updateOption(button: HTMLButtonElement): void {
  const group = button.dataset.set;
  const value = button.dataset.value;

  if (group === "background" && isOptionId(value, backgrounds)) {
    draft.background = value;
  }

  if (group === "build" && isOptionId(value, builds)) {
    draft.build = value;
  }

  if (group === "hair" && isOptionId(value, hairStyles)) {
    draft.hair = value;
  }

  if (group === "mark" && isOptionId(value, marks)) {
    draft.mark = value;
  }

  if (group === "skin" && isColorId(value, skinColors)) {
    draft.skin = value;
  }

  if (group === "hairColor" && isColorId(value, hairColors)) {
    draft.hairColor = value;
  }

  if (group === "palette" && isColorId(value, palettes)) {
    draft.palette = value;
  }

  notice = "";
  render();
}

function toggleTrait(traitId: string): void {
  if (!isOptionId(traitId, traits)) {
    return;
  }

  if (draft.traits.includes(traitId)) {
    draft.traits = draft.traits.filter((id) => id !== traitId);
    notice = "";
    render();
    return;
  }

  if (draft.traits.length >= maxTraits) {
    notice = `Choose up to ${maxTraits} traits.`;
    render();
    return;
  }

  draft.traits = [...draft.traits, traitId];
  notice = "";
  render();
}

function updateStat(statId: string, delta: number): void {
  if (!isStatId(statId) || (delta !== 1 && delta !== -1)) {
    return;
  }

  const next = draft.stats[statId] + delta;
  const spent = getSpentStats();

  if (delta > 0 && (spent >= statTotal || next > statMax)) {
    return;
  }

  if (delta < 0 && next < statMin) {
    return;
  }

  draft.stats = {
    ...draft.stats,
    [statId]: next
  };
  notice = "";
  render();
}

function randomizeDraft(): void {
  draft = {
    name: pick(randomNames),
    home: pick(randomHomes),
    background: pick(backgrounds).id,
    build: pick(builds).id,
    hair: pick(hairStyles).id,
    mark: pick(marks).id,
    skin: pick(skinColors).id,
    hairColor: pick(hairColors).id,
    palette: pick(palettes).id,
    traits: shuffle(traits.map((trait) => trait.id)).slice(0, maxTraits),
    stats: rollStats()
  };
}

function rollStats(): CharacterStats {
  const stats: CharacterStats = {
    grit: statMin,
    forage: statMin,
    craft: statMin,
    scout: statMin
  };
  let remaining = statTotal - statIds.length * statMin;

  while (remaining > 0) {
    const statId = pick(statIds);
    if (stats[statId] >= statMax) {
      continue;
    }

    stats[statId] += 1;
    remaining -= 1;
  }

  return stats;
}

async function copyDraft(): Promise<void> {
  const payload = JSON.stringify(toExportDraft(), null, 2);

  try {
    await navigator.clipboard.writeText(payload);
    notice = "Draft copied.";
  } catch {
    notice = "Clipboard blocked; draft is shown below.";
  }

  render();
}

function render(): void {
  app.innerHTML = `
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
          <input data-field="name" type="text" maxlength="32" value="${escapeAttribute(draft.name)}" />
        </label>

        <label class="creator-field">
          <span>From</span>
          <input data-field="home" type="text" maxlength="36" value="${escapeAttribute(draft.home)}" />
        </label>

        <div class="creator-rail-summary">
          <span class="creator-status-chip">Draft only</span>
          <strong data-draft-name>${escapeHtml(getDisplayName())}</strong>
          <small data-draft-epithet>${escapeHtml(getEpithet())}</small>
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
            ${renderCharacterPreview()}
          </div>
          <div class="creator-stage-copy">
            <span class="kicker">Survivor Draft</span>
            <h2 data-stage-name>${escapeHtml(getDisplayName())}</h2>
            <p data-draft-summary>${escapeHtml(getSummary())}</p>
            <dl class="creator-picks">
              <div>
                <dt>Origin</dt>
                <dd data-pick-background>${escapeHtml(getBackground().label)}</dd>
              </div>
              <div>
                <dt>Traits</dt>
                <dd data-pick-traits>${escapeHtml(getTraitSummary())}</dd>
              </div>
              <div>
                <dt>Best Skill</dt>
                <dd data-pick-best>${escapeHtml(getBestStatLabel())}</dd>
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
                ${backgrounds.map((option) => renderTextOption("background", option, draft.background)).join("")}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Frame</span>
              </div>
              <div class="creator-segment">
                ${builds.map((option) => renderTextOption("build", option, draft.build, "compact")).join("")}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Hair</span>
              </div>
              <div class="creator-segment">
                ${hairStyles.map((option) => renderTextOption("hair", option, draft.hair, "compact")).join("")}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Mark</span>
              </div>
              <div class="creator-segment">
                ${marks.map((option) => renderTextOption("mark", option, draft.mark, "compact")).join("")}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Skin</span>
              </div>
              <div class="swatch-row">
                ${skinColors.map((option) => renderSwatchOption("skin", option, draft.skin)).join("")}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Hair Color</span>
              </div>
              <div class="swatch-row">
                ${hairColors.map((option) => renderSwatchOption("hairColor", option, draft.hairColor)).join("")}
              </div>
            </div>

            <div class="creator-section">
              <div class="section-heading">
                <span>Kit</span>
              </div>
              <div class="swatch-row">
                ${palettes.map((option) => renderPaletteOption(option)).join("")}
              </div>
            </div>

            <div class="creator-section creator-section-wide">
              <div class="section-heading">
                <span>Stats</span>
                <span class="quiet">${getRemainingStats()} left</span>
              </div>
              <div class="stat-list">
                ${statIds.map((statId) => renderStatControl(statId)).join("")}
              </div>
            </div>

            <div class="creator-section creator-section-wide">
              <div class="section-heading">
                <span>Traits</span>
                <span class="quiet">${draft.traits.length}/${maxTraits}</span>
              </div>
              <div class="trait-grid">
                ${traits.map((trait) => renderTraitOption(trait)).join("")}
              </div>
            </div>

            <div class="creator-section creator-export creator-section-wide">
              <div class="section-heading">
                <span>Draft</span>
                <span class="quiet">${escapeHtml(notice)}</span>
              </div>
              <pre data-export-code>${escapeHtml(JSON.stringify(toExportDraft(), null, 2))}</pre>
              <button type="button" data-command="copy">Copy Draft</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderCharacterPreview(): string {
  const skin = getColor(skinColors, draft.skin);
  const hair = getColor(hairColors, draft.hairColor);
  const palette = getPalette();
  const buildClass = `build-${draft.build}`;

  return `
    <div
      class="survivor-card ${buildClass}"
      style="--creator-skin: ${skin.value}; --creator-hair: ${hair.value}; --creator-cloth: ${palette.value}; --creator-accent: ${palette.accent};"
    >
      <div class="preview-sky" aria-hidden="true">
        <span class="preview-ridge ridge-back"></span>
        <span class="preview-ridge ridge-front"></span>
        <span class="preview-ground"></span>
      </div>
      <svg class="survivor-svg" viewBox="0 0 260 360" role="img" aria-labelledby="survivor-title">
        <title id="survivor-title">${escapeHtml(getDisplayName())} preview</title>
        <path class="survivor-shadow" d="M58 321 C84 303 175 303 202 321 C177 341 86 341 58 321 Z" />
        <path class="survivor-pack" d="M171 128 C206 142 213 198 197 236 L174 231 C184 188 181 156 159 144 Z" />
        <path class="survivor-leg left" d="M106 224 L91 312 L117 312 L129 224 Z" />
        <path class="survivor-leg right" d="M139 224 L151 312 L179 312 L158 224 Z" />
        <path class="survivor-boot" d="M87 312 L121 312 L124 327 L80 327 Z" />
        <path class="survivor-boot" d="M148 312 L184 312 L190 327 L146 327 Z" />
        <path class="survivor-body" d="${getBodyPath()}" />
        <path class="survivor-wrap" d="M92 137 C115 157 154 158 179 137 L186 182 C162 197 111 197 87 181 Z" />
        <path class="survivor-arm left" d="M88 148 C70 169 66 206 79 235 L96 228 C88 202 91 177 105 158 Z" />
        <path class="survivor-arm right" d="M177 148 C196 169 201 204 187 234 L170 227 C179 201 174 176 160 158 Z" />
        <circle class="survivor-head" cx="132" cy="92" r="42" />
        ${renderHair()}
        ${renderFaceMark()}
        <path class="survivor-eye left" d="M115 93 Q121 88 127 93" />
        <path class="survivor-eye right" d="M141 93 Q147 88 153 93" />
        <path class="survivor-mouth" d="M120 110 Q132 118 145 110" />
        <text class="survivor-initials" x="132" y="187" data-preview-initials>${escapeHtml(getInitials())}</text>
      </svg>
    </div>
  `;
}

function renderHair(): string {
  switch (draft.hair) {
    case "short":
      return `<path class="survivor-hair" d="M91 84 C95 48 124 35 153 44 C174 51 183 71 176 95 C154 79 122 74 91 84 Z" />`;
    case "tied":
      return `
        <path class="survivor-hair" d="M90 87 C94 50 123 34 153 43 C174 50 184 72 176 95 C150 79 119 75 90 87 Z" />
        <circle class="survivor-hair" cx="177" cy="98" r="14" />
      `;
    case "coiled":
      return `
        <circle class="survivor-hair" cx="100" cy="68" r="16" />
        <circle class="survivor-hair" cx="121" cy="53" r="17" />
        <circle class="survivor-hair" cx="147" cy="54" r="17" />
        <circle class="survivor-hair" cx="166" cy="72" r="16" />
        <path class="survivor-hair" d="M91 88 C108 73 156 71 176 90 C174 53 94 50 91 88 Z" />
      `;
    case "shaved":
      return `<path class="survivor-hair shaved" d="M94 80 C104 51 153 46 171 80 C150 71 119 70 94 80 Z" />`;
  }
}

function renderFaceMark(): string {
  switch (draft.mark) {
    case "scar":
      return `<path class="survivor-mark scar" d="M151 87 L139 112" />`;
    case "paint":
      return `<path class="survivor-mark paint" d="M103 101 C119 108 145 108 162 101" />`;
    case "freckles":
      return `
        <circle class="survivor-mark freckle" cx="112" cy="103" r="2" />
        <circle class="survivor-mark freckle" cx="122" cy="107" r="1.7" />
        <circle class="survivor-mark freckle" cx="147" cy="105" r="1.9" />
        <circle class="survivor-mark freckle" cx="157" cy="101" r="1.6" />
      `;
    case "none":
      return "";
  }
}

function renderTextOption<TId extends string>(
  group: string,
  option: Option<TId>,
  selectedId: TId,
  density = ""
): string {
  const selected = option.id === selectedId;

  return `
    <button
      class="creator-option ${density} ${selected ? "active" : ""}"
      type="button"
      data-set="${group}"
      data-value="${option.id}"
      aria-pressed="${selected}"
    >
      <strong>${escapeHtml(option.label)}</strong>
      <small>${escapeHtml(option.blurb)}</small>
    </button>
  `;
}

function renderSwatchOption<TId extends string>(group: string, option: ColorOption<TId>, selectedId: TId): string {
  const selected = option.id === selectedId;

  return `
    <button
      class="swatch-button ${selected ? "active" : ""}"
      type="button"
      data-set="${group}"
      data-value="${option.id}"
      aria-label="${escapeAttribute(option.label)}"
      aria-pressed="${selected}"
    >
      <span style="background: ${option.value}"></span>
    </button>
  `;
}

function renderPaletteOption(option: ColorOption<PaletteId> & { accent: string }): string {
  const selected = option.id === draft.palette;

  return `
    <button
      class="swatch-button palette-button ${selected ? "active" : ""}"
      type="button"
      data-set="palette"
      data-value="${option.id}"
      aria-label="${escapeAttribute(option.label)}"
      aria-pressed="${selected}"
    >
      <span style="background: linear-gradient(135deg, ${option.value} 0 58%, ${option.accent} 58% 100%)"></span>
    </button>
  `;
}

function renderStatControl(statId: StatId): string {
  const value = draft.stats[statId];
  const remaining = getRemainingStats();
  const canDecrease = value > statMin;
  const canIncrease = value < statMax && remaining > 0;

  return `
    <div class="stat-row">
      <span>
        <strong>${statLabels[statId]}</strong>
        <small>${statBlurbs[statId]}</small>
      </span>
      <div class="stat-controls">
        <button type="button" data-stat="${statId}" data-delta="-1" ${canDecrease ? "" : "disabled"} aria-label="Lower ${statLabels[statId]}">-</button>
        <b>${value}</b>
        <button type="button" data-stat="${statId}" data-delta="1" ${canIncrease ? "" : "disabled"} aria-label="Raise ${statLabels[statId]}">+</button>
      </div>
    </div>
  `;
}

function renderTraitOption(trait: Option<TraitId>): string {
  const selected = draft.traits.includes(trait.id);
  const locked = !selected && draft.traits.length >= maxTraits;

  return `
    <button
      class="trait-button ${selected ? "active" : ""}"
      type="button"
      data-trait="${trait.id}"
      aria-pressed="${selected}"
      ${locked ? "disabled" : ""}
    >
      <strong>${escapeHtml(trait.label)}</strong>
      <small>${escapeHtml(trait.blurb)}</small>
    </button>
  `;
}

function syncDynamicCopy(): void {
  setText("[data-draft-name]", getDisplayName());
  setText("[data-draft-epithet]", getEpithet());
  setText("[data-stage-name]", getDisplayName());
  setText("[data-draft-summary]", getSummary());
  setText("[data-preview-initials]", getInitials());
  setText("#survivor-title", `${getDisplayName()} preview`);
  setText("[data-export-code]", JSON.stringify(toExportDraft(), null, 2));
}

function setText(selector: string, text: string): void {
  const element = app.querySelector<HTMLElement>(selector);
  if (element) {
    element.textContent = text;
  }
}

function toExportDraft(): Record<string, unknown> {
  return {
    name: getDisplayName(),
    epithet: getEpithet(),
    origin: draft.background,
    appearance: {
      build: draft.build,
      skin: draft.skin,
      hair: draft.hair,
      hairColor: draft.hairColor,
      kit: draft.palette,
      mark: draft.mark
    },
    stats: draft.stats,
    traits: draft.traits
  };
}

function getDisplayName(): string {
  return draft.name.trim() || "Unnamed Survivor";
}

function getEpithet(): string {
  const home = draft.home.trim() || "the wild road";
  return `${getBackground().label} from ${home}`;
}

function getSummary(): string {
  const background = getBackground();
  const traitSummary = getTraitSummary().toLowerCase();
  return `${background.blurb} Carries ${traitSummary}, with ${getBestStatLabel().toLowerCase()} leading the draft.`;
}

function getTraitSummary(): string {
  if (!draft.traits.length) {
    return "No traits chosen";
  }

  return draft.traits.map((traitId) => getOptionLabel(traits, traitId)).join(", ");
}

function getBestStatLabel(): string {
  const best = statIds.reduce((currentBest, statId) => {
    return draft.stats[statId] > draft.stats[currentBest] ? statId : currentBest;
  }, statIds[0]);

  return statLabels[best];
}

function getBackground(): Option<BackgroundId> {
  return backgrounds.find((option) => option.id === draft.background) ?? backgrounds[0];
}

function getPalette(): ColorOption<PaletteId> & { accent: string } {
  return palettes.find((option) => option.id === draft.palette) ?? palettes[0];
}

function getColor<TId extends string>(options: ColorOption<TId>[], id: TId): ColorOption<TId> {
  return options.find((option) => option.id === id) ?? options[0];
}

function getOptionLabel<TId extends string>(options: Option<TId>[], id: TId): string {
  return options.find((option) => option.id === id)?.label ?? id;
}

function getSpentStats(): number {
  return statIds.reduce((total, statId) => total + draft.stats[statId], 0);
}

function getRemainingStats(): number {
  return statTotal - getSpentStats();
}

function getBodyPath(): string {
  switch (draft.build) {
    case "lean":
      return "M103 130 C119 119 149 119 164 130 L176 231 C154 246 113 246 91 231 Z";
    case "steady":
      return "M96 130 C116 116 151 116 169 130 L184 232 C160 250 107 250 84 232 Z";
    case "broad":
      return "M86 132 C113 113 155 113 180 132 L198 234 C168 255 99 255 69 234 Z";
  }
}

function getInitials(): string {
  const initials = getDisplayName()
    .split(/\s+/)
    .map((part) => part[0])
    .join("");

  return (initials || "?").slice(0, 2).toUpperCase();
}

function isStatId(value: string): value is StatId {
  return statIds.some((statId) => statId === value);
}

function isOptionId<TId extends string>(value: string | undefined, options: Option<TId>[]): value is TId {
  return Boolean(value && options.some((option) => option.id === value));
}

function isColorId<TId extends string>(value: string | undefined, options: ColorOption<TId>[]): value is TId {
  return Boolean(value && options.some((option) => option.id === value));
}

function cleanText(value: string, maxLength: number): string {
  return value.replace(/\s+/g, " ").slice(0, maxLength);
}

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)]!;
}

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value: string): string {
  return escapeHtml(value);
}
