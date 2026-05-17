import "./assetGallery.css";
import {
  allLocationGatherableDefinitions,
  type GatherableDefinition,
  type LocationGatherableDefinition
} from "./data/gatherables";
import type { LocationId } from "./types";

type AssetGroupId =
  | "locations"
  | "primitive"
  | "meat"
  | "fungal"
  | "leafy"
  | "medicinal"
  | "flowers"
  | "berries"
  | "fruit"
  | "roots"
  | "vegetables"
  | "staples"
  | "seasonings"
  | "camp"
  | "tools"
  | "food"
  | "materials"
  | "ui";

type AssetGroup = {
  id: AssetGroupId;
  label: string;
  note: string;
};

type AssetItem = {
  fileName: string;
  groupId: AssetGroupId;
  label: string;
  path: string;
  url: string;
  detail?: string;
  sourceLocationLabel?: string;
};

const root = document.querySelector<HTMLDivElement>("#asset-root");

if (!root) {
  throw new Error("Asset gallery root was not found.");
}

const assetModules = {
  ...import.meta.glob("./assets/locations/*.{png,svg}", { eager: true, query: "?url", import: "default" }),
  ...import.meta.glob("./assets/buildings/*.{png,svg}", { eager: true, query: "?url", import: "default" }),
  ...import.meta.glob("./assets/items/*.{png,svg}", { eager: true, query: "?url", import: "default" })
} as Record<string, string>;

const assetUrlsByFileName = new Map(
  Object.entries(assetModules).map(([path, url]) => [getFileName(path), getAssetUrl(url)])
);

const activeAssetFileNames = new Set([
  "basket-background-1-border-1.png",
  "beach-location-icon.png",
  "berry-icon.png",
  "bone-icon.png",
  "brook-stickleback-icon.png",
  "camp-location-icon.png",
  "campfire-2x2.png",
  "campfire-unlit-2x2.png",
  "coal-icon.png",
  "copper-icon.png",
  "craft-materials-bundle-button.png",
  "desert-location-icon.png",
  "fish-filet-icon.png",
  "fishing-pole-background-1-border-1.png",
  "flax-fiber-icon.png",
  "forest-location-icon.png",
  "hide-icon.png",
  "hide-tent-2x2.png",
  "leather-backpack-equipped-slot.png",
  "meadow-location-icon-v2.png",
  "mine-location-icon.png",
  "minnow-icon.png",
  "mudskipper-icon.png",
  "mushroom-icon.png",
  "pebble-perch-icon.png",
  "rabbit-icon.png",
  "rabbit-meat-icon.png",
  "river-location-icon-v2.png",
  "short-bow-background-1-border-1.png",
  "squirrel-icon.png",
  "squirrel-meat-icon.png",
  "stick-icon.png",
  "stone-furnace-2x2.png",
  "stone-hatchet-background-1-border-1.png",
  "stone-icon.png",
  "stone-knife-background-1-border-1.png",
  "stone-loach-icon.png",
  "stone-pick-axe-background-1-border-1.png",
  "stone-spear-background-1-border-1.png",
  "tanning-rack-2x2.png",
  "tin-icon.png",
  "wood-icon.png",
  "wooden-bowl-background-1-border-1.png",
  "wooden-club-background-1-border-1.png",
  "wooden-spoon-background-1-border-1.png",
  "wooden-sword-background-1-border-1.png",
  "wooden-totem-background-1-border-1.png",
  "wooden-two-handed-club-background-1-border-1.png",
  "wooden-two-handed-sword-background-1-border-1.png"
]);

const groups: AssetGroup[] = [
  { id: "locations", label: "Locations", note: "Map and travel icons" },
  { id: "primitive", label: "Primitive Stuff", note: "Early gathered resources and simple survival items" },
  { id: "meat", label: "Meat", note: "Fresh meat and cleaned filets" },
  { id: "fungal", label: "Fungal", note: "Mushrooms, spores, truffles, and other fungal forage" },
  { id: "leafy", label: "Leafy", note: "Leafy greens, grasses, mint, and fresh herb forage" },
  { id: "medicinal", label: "Medicinal", note: "Healing, calming, soothing, and strange alchemical herbs" },
  { id: "flowers", label: "Flowers", note: "Edible and useful blossoms" },
  { id: "berries", label: "Berries", note: "Small sweet, tart, and wild berry forage" },
  { id: "fruit", label: "Fruit", note: "Wild fruits, cactus fruit, and edible hips" },
  { id: "roots", label: "Roots", note: "Earthy roots and underground food" },
  { id: "vegetables", label: "Vegetables", note: "Shoots, greens, and fresh vegetable forage" },
  { id: "staples", label: "Staples", note: "Tubers, nuts, grains, beans, and sturdy plants" },
  { id: "seasonings", label: "Seasonings", note: "Aromatic, resinous, salty, and pungent accents" },
  { id: "camp", label: "Camp Constructions", note: "Buildable camp structures" },
  { id: "tools", label: "Tools & Weapons", note: "Equipped and framed tool icons" },
  { id: "food", label: "Wildlife & Fish", note: "Whole animals and fish before cooking" },
  { id: "materials", label: "Ores & Materials", note: "Crafting inputs and gathered material pieces" },
  { id: "ui", label: "UI Pieces", note: "Frames, backgrounds, and interface-only images" }
];

const primitiveNames = new Set([
  "berry-icon.png",
  "bone-icon.png",
  "hide-icon.png",
  "mushroom-background-1.png",
  "mushroom-background-2.png",
  "mushroom-background-3.png",
  "mushroom-background-4.png",
  "mushroom-background-5.png",
  "mushroom-icon.png",
  "stick-icon.png",
  "stone-icon.png",
  "wood-icon.png"
]);

const materialNames = new Set([
  "coal-icon.png",
  "copper-icon.png",
  "flax-fiber-icon.png",
  "tin-icon.png"
]);

const foodNames = new Set([
  "brook-stickleback-icon.png",
  "minnow-icon.png",
  "mudskipper-icon.png",
  "pebble-perch-icon.png",
  "rabbit-icon.png",
  "squirrel-icon.png",
  "stone-loach-icon.png"
]);

const meatNames = new Set(["fish-filet-icon.png", "rabbit-meat-icon.png", "squirrel-meat-icon.png"]);

const toolTerms = [
  "axe",
  "backpack",
  "basket",
  "bow",
  "bowl",
  "club",
  "dagger",
  "fishing-pole",
  "hatchet",
  "knife",
  "pick",
  "skinning",
  "spear",
  "spoon",
  "sword",
  "totem"
];

const locationLabels: Record<LocationId, string> = {
  meadow: "Meadow",
  river: "River",
  beach: "Beach",
  forest: "Forest",
  mine: "Mine",
  desert: "Desert"
};

const fungalTags = new Set(["fungus", "mushroom", "truffle", "cap", "spore"]);
const medicinalTags = new Set(["medicinal", "calming", "soothing", "mana"]);
const stapleTags = new Set(["bean", "grain", "nut", "pod", "succulent", "thorn", "tuber"]);
const ingredientIconFileNames: Partial<Record<GatherableDefinition["id"], string>> = {
  aloeLeaves: "aloe-leaves-icon.png",
  blackberries: "blackberry-icon.png",
  bloodleaf: "bloodleaf-icon.png",
  blueberries: "blueberry-icon.png",
  caveCurrants: "cave-currant-icon.png",
  chamomile: "chamomile-icon.png",
  clover: "clover-icon.png",
  cranberries: "cranberry-icon.png",
  crystalBlooms: "crystal-bloom-icon.png",
  dandelionGreens: "dandelion-icon.png",
  elderflowers: "elder-flowers-icon.png",
  fireBlossom: "fire-blossom-icon.png",
  glimmerberries: "glimmerberry-icon.png",
  hearthcap: "hearthcap-icon.png",
  juniperBerries: "juniper-berry-icon.png",
  lavender: "lavender-icon.png",
  marshIris: "marsh-iris-icon.png",
  mint: "mint-icon.png",
  mossHerbs: "moss-herbs-icon.png",
  nettles: "nettles-icon.png",
  palecapFlowers: "palecap-flowers-icon.png",
  plantainLeaf: "plantain-leaf-icon.png",
  roseHips: "rose-hips-icon.png",
  sorrel: "sorrel-icon.png",
  strawberries: "strawberry-icon.png",
  sunrootTubers: "sunheart-tuber-icon.png",
  sunbloomPetals: "sunbloom-petals-icon.png",
  trilliumBlossoms: "trillium-blossoms-icon.png",
  waterLilies: "water-lilies-icon.png",
  wildCarrot: "carrot-icon.png",
  wildGarlic: "wild-garlic-icon.png",
  wildOnion: "wild-onion-icon.png",
  woodViolets: "wood-violets-icon.png",
  yarrow: "yarrow-icon.png"
};

const assets = [
  ...Object.entries(assetModules)
    .filter(([path]) => activeAssetFileNames.has(getFileName(path)))
    .map(([path, url]) => createAsset(path, url)),
  ...createIngredientAssets()
]
  .sort((a, b) => {
    if (a.groupId !== b.groupId) {
      return groupIndex(a.groupId) - groupIndex(b.groupId);
    }

    return a.label.localeCompare(b.label);
  });

root.innerHTML = `
  <main class="asset-page">
    <header class="asset-header">
      <div>
        <p class="asset-kicker">Idle Town</p>
        <h1>In-Game Assets</h1>
      </div>
      <nav class="asset-nav" aria-label="Asset groups">
        ${groups.map((group) => `<a href="#${group.id}">${group.label}</a>`).join("")}
      </nav>
    </header>
    <div class="asset-sections">
      ${groups.map(renderGroup).join("")}
    </div>
  </main>
  <div class="asset-lightbox" data-asset-lightbox hidden role="dialog" aria-modal="true" aria-labelledby="asset-lightbox-title">
    <div class="asset-lightbox-panel">
      <button class="asset-lightbox-close" type="button" data-asset-lightbox-close aria-label="Close preview">Close</button>
      <div class="asset-lightbox-image">
        <img data-asset-lightbox-image alt="" />
        <span class="asset-source-badge" data-asset-source-badge hidden></span>
      </div>
      <div class="asset-lightbox-copy">
        <h2 id="asset-lightbox-title" data-asset-lightbox-title></h2>
        <p data-asset-lightbox-detail></p>
        <small data-asset-lightbox-file></small>
      </div>
    </div>
  </div>
`;

const lightbox = requireAssetElement<HTMLElement>("[data-asset-lightbox]");
const lightboxImage = requireAssetElement<HTMLImageElement>("[data-asset-lightbox-image]");
const lightboxTitle = requireAssetElement<HTMLElement>("[data-asset-lightbox-title]");
const lightboxDetail = requireAssetElement<HTMLElement>("[data-asset-lightbox-detail]");
const lightboxFile = requireAssetElement<HTMLElement>("[data-asset-lightbox-file]");
const lightboxClose = requireAssetElement<HTMLButtonElement>("[data-asset-lightbox-close]");
const lightboxSourceBadge = requireAssetElement<HTMLElement>("[data-asset-source-badge]");
let previousFocus: HTMLElement | null = null;

root.addEventListener("click", handleGalleryClick);
document.addEventListener("keydown", handleGalleryKeydown);

function requireAssetElement<T extends HTMLElement>(selector: string): T {
  const element = root?.querySelector<T>(selector);
  if (!element) {
    throw new Error(`Asset gallery control was not found: ${selector}`);
  }

  return element;
}

function createAsset(path: string, url: string): AssetItem {
  const fileName = getFileName(path);
  const groupId = getGroupId(path, fileName);

  return {
    fileName,
    groupId,
    label: getAssetLabel(fileName, groupId),
    path,
    url: getAssetUrl(url)
  };
}

function getFileName(path: string): string {
  return path.split("/").pop() ?? path;
}

function getAssetUrl(url: string): string {
  return url.startsWith("./") ? `/${url.slice(2)}` : url;
}

function getGroupId(path: string, fileName: string): AssetGroupId {
  if (path.includes("/locations/")) {
    return "locations";
  }

  if (path.includes("/buildings/")) {
    return "camp";
  }

  if (primitiveNames.has(fileName)) {
    return "primitive";
  }

  if (meatNames.has(fileName)) {
    return "meat";
  }

  if (foodNames.has(fileName)) {
    return "food";
  }

  if (materialNames.has(fileName)) {
    return "materials";
  }

  if (toolTerms.some((term) => fileName.includes(term))) {
    return "tools";
  }

  return "ui";
}

function createIngredientAssets(): AssetItem[] {
  return allLocationGatherableDefinitions.map((definition) => {
    const fileName = getIngredientIconFileName(definition);
    const groupId = getIngredientGroupId(definition);

    return {
      fileName,
      groupId,
      label: definition.displayName,
      path: `src/data/gatherables.ts#${definition.id}`,
      url: getAssetUrlForFile(fileName),
      detail: `${getIngredientCategoryLabel(definition, groupId)} - ${definition.tags.slice(0, 2).join(", ")}`,
      sourceLocationLabel: locationLabels[definition.locationId]
    };
  });
}

function getIngredientGroupId(definition: LocationGatherableDefinition): AssetGroupId {
  if (definition.tags.some((tag) => fungalTags.has(tag))) {
    return "fungal";
  }

  switch (definition.category) {
    case "herb":
      return definition.tags.some((tag) => medicinalTags.has(tag)) ? "medicinal" : "leafy";
    case "flower":
      return "flowers";
    case "berry":
      return "berries";
    case "fruit":
      return "fruit";
    case "root":
      return definition.tags.some((tag) => stapleTags.has(tag)) ? "staples" : "roots";
    case "vegetable":
      return definition.tags.some((tag) => stapleTags.has(tag)) ? "staples" : "vegetables";
    case "seasoning":
      return "seasonings";
  }
}

function getIngredientCategoryLabel(
  definition: LocationGatherableDefinition,
  groupId: AssetGroupId
): string {
  if (groupId === "fungal") {
    return "Fungal";
  }

  switch (definition.category) {
    case "herb":
      return getGroupLabel(groupId);
    case "flower":
      return "Flower";
    case "berry":
      return "Berry";
    case "fruit":
      return "Fruit";
    case "root":
      return groupId === "staples" ? "Staple" : "Root";
    case "vegetable":
      return groupId === "staples" ? "Staple" : "Vegetable";
    case "seasoning":
      return "Seasoning";
  }
}

function getIngredientIconFileName(definition: GatherableDefinition): string {
  const iconFileName = ingredientIconFileNames[definition.id];
  if (iconFileName) {
    return iconFileName;
  }

  if (definition.category === "berry" || definition.category === "fruit") {
    return "berry-icon.png";
  }

  if (definition.tags.some((tag) => fungalTags.has(tag))) {
    return "mushroom-icon.png";
  }

  return "flax-fiber-icon.png";
}

function getAssetUrlForFile(fileName: string): string {
  const url = assetUrlsByFileName.get(fileName);
  if (!url) {
    throw new Error(`Asset gallery icon was not found: ${fileName}`);
  }

  return url;
}

function getLabel(fileName: string): string {
  return fileName
    .replace(/\.(png|svg)$/u, "")
    .replace(/-background-\d(?:-border-\d)?/gu, "")
    .replace(/-location-icon(?:-v\d)?/gu, "")
    .replace(/-(equipped|empty)-slot/gu, " $1")
    .replace(/-2x2/gu, "")
    .replace(/-icon/gu, "")
    .replace(/-/gu, " ")
    .replace(/\b\w/gu, (letter) => letter.toUpperCase());
}

function getAssetLabel(fileName: string, groupId: AssetGroupId): string {
  const label = getLabel(fileName);

  if (groupId === "locations" && !label.endsWith(" Location")) {
    return `${label} Location`;
  }

  return label;
}

function renderGroup(group: AssetGroup): string {
  const groupAssets = assets.filter((asset) => asset.groupId === group.id);

  return `
    <section class="asset-section" id="${group.id}" aria-labelledby="${group.id}-heading">
      <div class="asset-section-heading">
        <div>
          <h2 id="${group.id}-heading">${group.label}</h2>
          <p>${group.note}</p>
        </div>
        <span>${groupAssets.length}</span>
      </div>
      <div class="asset-grid">
        ${groupAssets.map(renderAsset).join("")}
      </div>
    </section>
  `;
}

function renderAsset(asset: AssetItem): string {
  const assetIndex = assets.indexOf(asset);

  return `
    <button
      class="asset-tile"
      type="button"
      data-asset-index="${assetIndex}"
      title="${escapeHtml(`${asset.label} - ${asset.fileName}`)}"
      aria-label="Open ${escapeHtml(asset.label)} preview"
    >
      <span class="asset-icon">
        <img src="${asset.url}" alt="${escapeHtml(asset.label)}" loading="lazy" />
      </span>
      <span class="asset-caption">${escapeHtml(asset.label)}</span>
      <small>${escapeHtml(asset.detail ?? asset.fileName)}</small>
    </button>
  `;
}

function handleGalleryClick(event: MouseEvent): void {
  if (!(event.target instanceof Element)) {
    return;
  }

  const target = event.target;
  const closeButton = target.closest("[data-asset-lightbox-close]");
  if (closeButton || target === lightbox) {
    closeAssetPreview();
    return;
  }

  const tile = target.closest<HTMLElement>("[data-asset-index]");
  if (!tile) {
    return;
  }

  const assetIndex = Number(tile.dataset.assetIndex);
  const asset = assets[assetIndex];
  if (asset) {
    openAssetPreview(asset);
  }
}

function handleGalleryKeydown(event: KeyboardEvent): void {
  if (event.key === "Escape" && !lightbox.hidden) {
    closeAssetPreview();
  }
}

function openAssetPreview(asset: AssetItem): void {
  previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  lightboxImage.src = asset.url;
  lightboxImage.alt = asset.label;
  lightboxTitle.textContent = asset.label;
  lightboxDetail.textContent = asset.detail ?? getGroupLabel(asset.groupId);
  lightboxFile.textContent = asset.fileName;
  lightboxSourceBadge.textContent = asset.sourceLocationLabel ? `From ${asset.sourceLocationLabel}` : "";
  lightboxSourceBadge.hidden = !asset.sourceLocationLabel;
  lightbox.hidden = false;
  document.body.classList.add("asset-lightbox-open");
  lightboxClose.focus();
}

function closeAssetPreview(): void {
  lightbox.hidden = true;
  lightboxImage.removeAttribute("src");
  lightboxSourceBadge.hidden = true;
  lightboxSourceBadge.textContent = "";
  document.body.classList.remove("asset-lightbox-open");
  previousFocus?.focus();
  previousFocus = null;
}

function getGroupLabel(groupId: AssetGroupId): string {
  return groups.find((group) => group.id === groupId)?.label ?? "Asset";
}

function groupIndex(groupId: AssetGroupId): number {
  return groups.findIndex((group) => group.id === groupId);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
