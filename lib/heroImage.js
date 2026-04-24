import heroImageAssets from "../data/heroImageAssets.js";

/**
 * 10-byte transparent WebP used as a last-resort blur placeholder when an
 * entry has not been generated yet. `next/image` requires a valid data URI.
 */
export const DEFAULT_HERO_BLUR =
  "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";

function normalize(src) {
  if (!src) return "";
  const trimmed = String(src).trim();
  if (!trimmed) return "";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

/**
 * Returns `{ src, blurDataURL }` for a hero image.
 *
 *   - `src` prefers the compressed sibling in /img/hero-opt/ when the build
 *     script has produced one; otherwise it falls back to the original path.
 *   - `blurDataURL` is the pre-generated 16px WebP when available, or a
 *     neutral transparent placeholder otherwise. Always safe to pass to
 *     <Image placeholder="blur" blurDataURL={...}> for instant paint.
 */
export function getHeroAsset(src) {
  const key = normalize(src);
  const entry = heroImageAssets[key];
  return {
    src: entry?.optimized ?? key,
    blurDataURL: entry?.blurDataURL ?? DEFAULT_HERO_BLUR,
  };
}

export default getHeroAsset;
