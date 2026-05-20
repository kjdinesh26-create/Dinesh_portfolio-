/**
 * Portfolio Design System — Theme Object
 * Follows the system-ui Theme Specification:
 * https://github.com/system-ui/theme-specification
 *
 * All design tokens are defined here as the single source of truth.
 */

// ─── Space Scale (margin, padding, gap) ────────────────────────────────────
// index: 0   1   2   3    4    5    6    7    8
const space = [0, 4, 8, 16, 24, 32, 48, 64, 96, 128, 192, 256];
space[0] = 0;
// Named aliases
const spaceNamed = space as typeof space & {
  none: number; xs: number; sm: number; md: number; lg: number;
  xl: number; "2xl": number; "3xl": number; "4xl": number;
};
spaceNamed.none  = space[0];  // 0
spaceNamed.xs    = space[1];  // 4
spaceNamed.sm    = space[2];  // 8
spaceNamed.md    = space[3];  // 16
spaceNamed.lg    = space[4];  // 24
spaceNamed.xl    = space[5];  // 32
spaceNamed["2xl"] = space[6]; // 48
spaceNamed["3xl"] = space[7]; // 64
spaceNamed["4xl"] = space[8]; // 96

// ─── Font Sizes Scale ───────────────────────────────────────────────────────
// index: 0    1    2    3    4    5    6    7     8
const fontSizes = [11, 12, 13, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 72, 96];
const fontSizesNamed = fontSizes as typeof fontSizes & {
  xs: number; sm: number; base: number; md: number; lg: number;
  xl: number; "2xl": number; "3xl": number; "4xl": number;
  "5xl": number; "6xl": number; display: number;
};
fontSizesNamed.xs      = fontSizes[1];  // 12
fontSizesNamed.sm      = fontSizes[3];  // 14
fontSizesNamed.base    = fontSizes[4];  // 16
fontSizesNamed.md      = fontSizes[5];  // 18
fontSizesNamed.lg      = fontSizes[6];  // 20
fontSizesNamed.xl      = fontSizes[7];  // 24
fontSizesNamed["2xl"]  = fontSizes[8];  // 28
fontSizesNamed["3xl"]  = fontSizes[9];  // 32
fontSizesNamed["4xl"]  = fontSizes[10]; // 40
fontSizesNamed["5xl"]  = fontSizes[11]; // 48
fontSizesNamed["6xl"]  = fontSizes[12]; // 56
fontSizesNamed.display = fontSizes[13]; // 72

// ─── Font Families ──────────────────────────────────────────────────────────
const fonts = {
  body:    '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  display: '"Space Grotesk", "Inter", sans-serif',
  mono:    '"JetBrains Mono", "Fira Code", "Cascadia Code", monospace',
};

// ─── Font Weights ───────────────────────────────────────────────────────────
const fontWeights = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
  extrabold:800,
  black:    900,
};

// ─── Line Heights ───────────────────────────────────────────────────────────
const lineHeights = {
  none:    1,
  tight:   1.15,
  snug:    1.35,
  normal:  1.5,
  relaxed: 1.65,
  loose:   2,
};

// ─── Letter Spacings ────────────────────────────────────────────────────────
const letterSpacings = {
  tighter:  "-0.04em",
  tight:    "-0.02em",
  normal:   "0em",
  wide:     "0.04em",
  wider:    "0.08em",
  widest:   "0.25em",
  caps:     "0.15em",
};

// ─── Colors ─────────────────────────────────────────────────────────────────
const colors = {
  // ── Backgrounds / Surfaces
  background: "#020604",
  surface:    "#041009",
  surfaceMid: "#061c11",
  surfaceUp:  "#0a2919",
  surfaceTop: "#103b25",

  // ── Primary brand accent (emerald)
  primary: {
    DEFAULT: "#10b981",
    light:   "#34d399",
    lighter: "#6ee7b7",
    dim:     "#059669",
    dark:    "#047857",
    glow:    "rgba(16,185,129,0.25)",
    muted:   "rgba(16,185,129,0.10)",
  },

  // ── Secondary accent (lime)
  secondary: {
    DEFAULT: "#84cc16",
    light:   "#a3e635",
    dim:     "#65a30d",
    glow:    "rgba(132,204,22,0.20)",
    muted:   "rgba(132,204,22,0.10)",
  },

  // ── Success (emerald)
  success: {
    DEFAULT: "#34d399",
    light:   "#6ee7b7",
    dim:     "#059669",
    muted:   "rgba(52,211,153,0.10)",
  },

  // ── Danger (rose)
  danger: {
    DEFAULT: "#fb7185",
    light:   "#fda4af",
    dim:     "#e11d48",
    muted:   "rgba(251,113,133,0.10)",
  },

  // ── Warning (amber)
  warning: {
    DEFAULT: "#fbbf24",
    light:   "#fcd34d",
    dim:     "#d97706",
  },

  // ── Text
  text: {
    primary:   "#ecfdf5",
    secondary: "#a7f3d0",
    muted:     "#6ee7b7",
    disabled:  "#065f46",
    inverse:   "#020604",
  },

  // ── Borders / Glass
  border: {
    subtle:  "rgba(16,185,129,0.05)",
    DEFAULT: "rgba(16,185,129,0.15)",
    strong:  "rgba(16,185,129,0.30)",
    accent:  "rgba(16,185,129,0.40)",
    cyan:    "rgba(132,204,22,0.30)",
  },

  // ── Glass surface
  glass: {
    bg:    "rgba(6,28,17,0.55)",
    navBg: "rgba(2,6,4,0.75)",
    shine: "rgba(255,255,255,0.03)",
  },
};

// ─── Breakpoints ─────────────────────────────────────────────────────────────
const breakpoints = ["640px", "768px", "1024px", "1280px", "1536px"];
const mediaQueries = {
  sm:  `@media screen and (min-width: ${breakpoints[0]})`,
  md:  `@media screen and (min-width: ${breakpoints[1]})`,
  lg:  `@media screen and (min-width: ${breakpoints[2]})`,
  xl:  `@media screen and (min-width: ${breakpoints[3]})`,
  "2xl": `@media screen and (min-width: ${breakpoints[4]})`,
};

// ─── Sizes (widths, heights, max-width) ─────────────────────────────────────
const sizes = {
  container: {
    sm:  "640px",
    md:  "768px",
    lg:  "1024px",
    xl:  "1280px",
    "2xl": "1536px",
    max: "1400px",
  },
  icon: {
    xs:  "16px",
    sm:  "20px",
    md:  "24px",
    lg:  "32px",
    xl:  "40px",
    "2xl": "48px",
  },
  avatar: {
    sm:  "80px",
    md:  "144px",
    lg:  "176px",
    xl:  "208px",
  },
};

// ─── Border Radii ────────────────────────────────────────────────────────────
const radii = {
  none:  "0px",
  xs:    "4px",
  sm:    "6px",
  md:    "8px",
  lg:    "12px",
  xl:    "16px",
  "2xl": "20px",
  "3xl": "24px",
  "4xl": "32px",
  full:  "9999px",
};

// ─── Border Widths ───────────────────────────────────────────────────────────
const borderWidths = {
  none: "0px",
  thin: "1px",
  DEFAULT: "1px",
  thick: "2px",
  heavy: "4px",
};

// ─── Shadows ─────────────────────────────────────────────────────────────────
const shadows = {
  none:   "none",
  xs:     "0 1px 2px rgba(0,0,0,0.3)",
  sm:     "0 4px 8px rgba(0,0,0,0.35)",
  md:     "0 8px 24px rgba(0,0,0,0.4)",
  lg:     "0 16px 48px rgba(0,0,0,0.5)",
  xl:     "0 24px 64px rgba(0,0,0,0.6)",
  glass:  "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
  glassHover: "0 16px 48px rgba(0,0,0,0.5), 0 0 60px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
  accent: "0 0 30px rgba(139,92,246,0.3)",
  accentStrong: "0 0 50px rgba(139,92,246,0.5)",
  cyan:   "0 0 20px rgba(34,211,238,0.15)",
  insetGlow: "inset 0 0 40px 15px rgba(5,5,16,1)",
};

// ─── Z-Indices ───────────────────────────────────────────────────────────────
const zIndices = {
  hide:    -1,
  base:     0,
  raised:   1,
  dropdown: 10,
  sticky:   20,
  overlay:  30,
  modal:    40,
  popover:  50,
  toast:    60,
  nav:      50,
  noise:  9999,
};

// ─── Transitions ─────────────────────────────────────────────────────────────
const transitions = {
  fast:    "all 0.15s ease",
  base:    "all 0.3s ease",
  smooth:  "all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
  spring:  "all 0.5s cubic-bezier(0.34,1.56,0.64,1)",
  colors:  "color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",
  opacity: "opacity 0.3s ease",
  transform: "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
};

// ─── Final Theme Export ───────────────────────────────────────────────────────
export const theme = {
  space: spaceNamed,
  fontSizes: fontSizesNamed,
  fonts,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  breakpoints,
  mediaQueries,
  sizes,
  radii,
  borderWidths,
  shadows,
  zIndices,
  transitions,
} as const;

export type Theme = typeof theme;
export default theme;
