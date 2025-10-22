import { Platform } from "react-native";

// @ts-ignore - 'kepler' doesn't have overlap with default platforms
const isVega = Platform.OS === "kepler";

export const Color = {
  backgroundPrimary: "#0a0a0a",
  backgroundSecondary: "#171717",
  border: "#262626",
  borderSecondary: "#404040",
  foregroundPrimary: "#fafafa",
  foregroundSecondary: "#e5e5e5",
} as const;

export const FontSize = {
  xs: isVega ? 16 : 12,
  md: isVega ? 22 : 18,
} as const;
