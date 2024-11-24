import createCache from "@emotion/cache";

export const key = "remix-css";

export function createEmotionCache() {
  return createCache({ key: "remix-css" });
}
