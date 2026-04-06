export const colors = {
  primary: "#F5C84C",
  secondary: "#8032f5",
  accent: "#C84BFF",
  accentSecondary: "#F2D79A",

  background: "#3B146F",
  backgroundSecondary: "#2B0F56",
  dark: "#16062B",
  muted: "#4A1C86",

  light: "#F6F0FF",
  lightText: "#F6F0FF",
  text: "#F6F0FF",
  textDim: "#D9C9F2",
  gray: "#BBA6E6",

  borderPink: "#C84BFF",
  overlay: "rgba(8, 3, 18, 0.78)",
  glow: "rgba(200, 75, 255, 0.34)",

  success: "#3BEA86",
  danger: "#FF3B3B",
  warning: "#F5C84C",
  info: "#38D6FF",
};

export const gradients = {
  primary:
    "linear-gradient(180deg, #BFF7FF 0%, #48D6FF 35%, #8A5CFF 70%, #C84BFF 100%)",
  header: "linear-gradient(180deg, #4A1689 0%, #2B0F56 52%, #16062B 100%)",

  dark: "linear-gradient(180deg, #2B0F56 0%, #16062B 100%)",
  light: "linear-gradient(180deg, #F6F0FF 0%, #D9C9F2 100%)",
  card: "linear-gradient(145deg, #4A1C86 0%, #2B0F56 55%, #16062B 100%)",

  overlay:
    "linear-gradient(180deg, rgba(246,240,255,0.06) 0%, rgba(8,3,18,0.95) 100%)",

  title: "linear-gradient(180deg, #F6F0FF 0%, #E8C8FF 40%, #da85ff 100%)",

  jackpot: "linear-gradient(180deg, #FFE9B8 0%, #F5C84C 52%, #B87412 100%)",

  goldText: "linear-gradient(180deg, #F6F0FF 0%, #FFE9B8 52%, #F5C84C 100%)",
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
