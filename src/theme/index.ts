import { colors } from "./colors";
import { radius } from "./radius";
import { shadows } from "./shadows";

export const themeConfig = {
  name: "rode",
  defaultMode: "dark",
  colors,
  radius,
  shadows,
} as const;

export type ThemeConfig = typeof themeConfig;

export { colors, radius, shadows };
