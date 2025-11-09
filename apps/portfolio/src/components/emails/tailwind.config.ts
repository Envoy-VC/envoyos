import { pixelBasedPreset, type TailwindConfig } from "@react-email/components";

export const tailwindConfig: TailwindConfig = {
  darkMode: "class",
  presets: [pixelBasedPreset],
  theme: {
    colors: {
      primary: {
        // biome-ignore lint/style/useNamingConvention: safe
        DEFAULT: "#f54e25",
      },
    },
    fontFamily: {
      geist: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "Oxygen-Sans",
        "Ubuntu",
        "Cantarell",
        '"Helvetica Neue"',
        "sans-serif",
      ],
    },
  },
};
