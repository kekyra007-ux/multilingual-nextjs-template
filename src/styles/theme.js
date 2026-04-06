export const colors = {
  primary: "#D6B25E",
  secondary: "#5d41f9",
  accent: "#8B6CFF",
  accentSecondary: "#E7D7A8",

  background: "#1A1328",
  backgroundSecondary: "#140F20",
  dark: "#0C0914",
  muted: "#241B36",

  light: "#F6F2FF",
  lightText: "#F4F0FA",
  text: "#F4F0FA",
  textDim: "#B8AFCB",
  gray: "#8C84A3",

  borderPink: "#7E68D6",
  overlay: "rgba(8, 8, 14, 0.76)",
  glow: "rgba(139, 108, 255, 0.18)",

  success: "#49C98A",
  danger: "#E35D6A",
  warning: "#D6B25E",
  info: "#5BA8E6",
};

export const gradients = {
  primary: "linear-gradient(180deg, #C9D9FF 0%, #8B6CFF 45%, #5B4BCF 100%)",
  header: "linear-gradient(180deg, #241B36 0%, #140F20 52%, #0C0914 100%)",

  dark: "linear-gradient(180deg, #181224 0%, #0C0914 100%)",
  light: "linear-gradient(180deg, #F6F2FF 0%, #D8D1E6 100%)",
  card: "linear-gradient(145deg, #241B36 0%, #171122 58%, #0C0914 100%)",

  overlay:
    "linear-gradient(180deg, rgba(246,242,255,0.04) 0%, rgba(12,9,20,0.94) 100%)",

  title: "linear-gradient(180deg, #F6F2FF 0%, #D8CCF8 45%, #A78BFA 100%)",

  jackpot: "linear-gradient(180deg, #F0E2B4 0%, #D6B25E 52%, #8E6A2A 100%)",

  goldText: "linear-gradient(180deg, #F6F2FF 0%, #EADFB8 52%, #D6B25E 100%)",
};

const font = {
  family: {
    primary:
      "Anybody, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading:
      "Anybody, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    code: "'Source Code Pro', monospace",
  },
  size: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "2rem",
    "3xl": "3rem",
    "4xl": "3.5rem",
    "5xl": "4rem",
  },
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 900,
  },
};

const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
};

const radii = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  full: "9999px",
};

const shadow = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  glow: "0 0 20px rgba(255, 215, 0, 0.5)",
};

const container = {
  maxWidth: "1200px",
  padding: "1rem",
};

const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const mq = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  "2xl": `@media (min-width: ${breakpoints["2xl"]})`,
};

const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  base: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
};
const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 900,
};

const transitions = {
  fast: "150ms ease-in-out",
  base: "250ms ease-in-out",
  slow: "350ms ease-in-out",
};

export const theme = {
  colors,
  gradients,
  font,
  spacing,
  radii,
  shadow,
  container,
  breakpoints,
  mq,
  fontWeights,
  fontSizes,
  transitions,
};
