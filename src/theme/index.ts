export const themeConfig = {
  name: "default",
  defaultMode: "light",
} as const;

export type ThemeConfig = typeof themeConfig;