import campaignImageAssets from "../data/campaignImageAssets.js";

const CATEGORY_LABEL_BY_ID = {
  "all": "All Categories",
  "education": "Education",
  "sustainability": "Sustainability",
  "social-welfare": "Social Welfare",
  "healthcare": "Healthcare",
  "disaster-relief": "Disaster Relief",
};

const PRESET_EXTRAS = [1000, 2500];
const MAX_PRESETS = 6;

function buildPresets(packages) {
  const fromPackages = (packages || []).map((p) => Number(p.price)).filter(
    (n) => Number.isFinite(n) && n > 0
  );
  const unique = [...new Set(fromPackages)].sort((a, b) => a - b);
  const extra = PRESET_EXTRAS.filter((n) => !unique.includes(n));
  return [...extra, ...unique].slice(0, MAX_PRESETS);
}

function buildCategoryChips(categories) {
  if (!Array.isArray(categories)) return [];
  const chips = [];
  for (const id of categories) {
    const label = CATEGORY_LABEL_BY_ID[id];
    if (label) chips.push({ id, label });
  }
  return chips;
}

function computeProgressPct(raised, goal) {
  if (!goal || goal <= 0) return 0;
  const pct = (Number(raised) / Number(goal)) * 100;
  if (!Number.isFinite(pct)) return 0;
  return Math.max(0, Math.min(100, Math.round(pct * 10) / 10));
}

/**
 * Reduce the full `campaignsData` entry to only what the /campaigns list page needs.
 * This trims the JSON shipped to the browser and pre-computes derived values so
 * React doesn't redo the work on every render.
 */
export function buildCampaignsListProps(campaignsData) {
  return (campaignsData || []).map((c) => {
    const asset = campaignImageAssets[c.image];
    return {
      id: c.id,
      title: c.title,
      description: c.description,
      image: asset?.optimized || c.image,
      blurDataURL: asset?.blurDataURL || c.blurDataURL || null,
      status: c.status,
      featured: !!c.featured,
      categories: c.categories || [],
      categoryChips: buildCategoryChips(c.categories),
      goal: c.details?.goal ?? 0,
      raised: c.details?.raised ?? 0,
      endDate: c.details?.endDate ?? "",
      progressPct: computeProgressPct(c.details?.raised, c.details?.goal),
      presets: buildPresets(c.details?.packages),
    };
  });
}
