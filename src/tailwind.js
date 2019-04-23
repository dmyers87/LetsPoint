const defaultConfig = require('tailwindcss/defaultConfig')();

const colors = collapseColors({
  white: ['#fcfcfd'],
  black: ['#453e36'],
  "grey": [
    "#f8f9f9",
    "#ebedee",
    "#dee1e3",
    "#cfd3d6",
    "#bec4c8",
    "#acb4b9",
    "#97a1a7",
    "#7f8a93",
    "#5f6e78",
    "#374047"
  ],
  "blue": [
    "#e4f0f9",
    "#c6e1f3",
    "#a5cfed",
    "#7db9e5",
    "#4a9eda",
    "#0077cc",
    "#006bb7",
    "#005da0",
    "#004d84",
    "#00365d"
  ],
  "indigo": [
    "#eaebfa",
    "#d2d5f6",
    "#b7bbf0",
    "#959ce9",
    "#6872e0",
    "#0011cc",
    "#000fb7",
    "#000da0",
    "#000a83",
    "#00075c"
  ],
  "violet": [
    "#f0e9fa",
    "#e1d2f6",
    "#ceb6f0",
    "#b894e9",
    "#9966e0",
    "#5500cc",
    "#4c00b8",
    "#4300a1",
    "#370084",
    "#27005e"
  ],
  "fuschia": [
    "#f9e9fa",
    "#f2d1f5",
    "#ebb5f0",
    "#e293e9",
    "#d665e0",
    "#bb00cc",
    "#a900b8",
    "#9400a2",
    "#7b0086",
    "#580061"
  ],
  "pink": [
    "#fae9f3",
    "#f5d1e6",
    "#f0b6d8",
    "#e994c6",
    "#e066ad",
    "#cc0077",
    "#b8006b",
    "#a2005e",
    "#86004e",
    "#610038"
  ],
  "red": [
    "#faeaeb",
    "#f6d2d5",
    "#f0b7bc",
    "#ea969d",
    "#e16973",
    "#cc0011",
    "#b8000f",
    "#a2000d",
    "#86000b",
    "#610008"
  ],
  "orange": [
    "#f9ede4",
    "#f3d9c6",
    "#ecc2a4",
    "#e4a87c",
    "#da864a",
    "#cc5500",
    "#b84c00",
    "#a04300",
    "#843700",
    "#5e2700"
  ],
  "yellow": [
    "#f8f6de",
    "#f1ecba",
    "#e9e293",
    "#e0d668",
    "#d7c938",
    "#ccbb00",
    "#b8a900",
    "#a29400",
    "#867b00",
    "#615800"
  ],
  "lime": [
    "#eef8df",
    "#dcf1bd",
    "#c7ea97",
    "#b1e16c",
    "#96d73b",
    "#77cc00",
    "#6bb800",
    "#5ea200",
    "#4e8600",
    "#386100"
  ],
  "green": [
    "#e5f9e4",
    "#c9f3c6",
    "#a9eca3",
    "#84e47b",
    "#54da48",
    "#11cc00",
    "#0fb800",
    "#0da200",
    "#0b8600",
    "#086100"
  ],
  "teal": [
    "#e3f9ec",
    "#c5f3d8",
    "#a2ecc1",
    "#79e4a6",
    "#46da84",
    "#00cc55",
    "#00b84c",
    "#00a243",
    "#008638",
    "#006128"
  ],
  "cyan": [
    "#e3f9f7",
    "#c4f3ef",
    "#a0ece5",
    "#77e3da",
    "#44d9cd",
    "#00ccbb",
    "#00b8a9",
    "#00a294",
    "#00867b",
    "#006159"
  ]
});
const spacingScale = {
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
};

module.exports = {
  // Colors
  colors: colors,
  textColors: colors,
  backgroundColors: colors,
  borderColors: global.Object.assign({ default: colors['grey-3'] }, colors, {
    transparent: 'transparent',
  }),

  // Responsive .{screen}:{utility}
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },

  // Font & Text
  // .text-{size}
  textSizes: {
    xs: '.75rem', // 12px
    sm: '.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.5rem', // 24px
    // '2xl': '1.5rem', // 24px
    // '3xl': '1.875rem', // 30px
    // '4xl': '2.25rem', // 36px
    // '5xl': '3rem', // 48px
  },

  fontWeights: {
    thin: 300,
    normal: 400,
    bold: 500,
    extrabold: 700,
  },

  leading: {
    clear: 0,
    none: 1,
    tight: 1.25,
    normal: 1.5,
    loose: 2,
  },

  fonts: {
    header: ['Quicksand', 'sans-serif'],
    sans: [
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    serif: [
      'Constantia',
      'Lucida Bright',
      'Lucidabright',
      'Lucida Serif',
      'Lucida',
      'DejaVu Serif',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
  },

  tracking: {
    tight: '-0.05em',
    normal: '0',
    wide: '0.05em',
  },

  borderWidths: {
    default: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
    '6': '6px',
  },

  borderRadius: {
    none: '0',
    sm: '5px',
    default: '.25rem',
    lg: '.5rem',
    full: '9999px',
  },

  // Spacing
  padding: spacingScale,
  margin: { auto: 'auto', ...spacingScale },
  negativeMargin: spacingScale,

  // .shadow-{size?}
  shadows: {
    // blueish
    default: '0 4px 24px 0 rgba(37, 38, 94, 0.1)',
    // greys
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 0 4px 0 rgba(0,0,0,0.10)',
    outline: '0 0 0 3px rgba(52,144,220,0.5)',
    none: 'none',
  },

  opacity: {
    '0': '0',
    '25': '.25',
    '50': '.5',
    '75': '.75',
    '100': '1',
  },

  // Using defaults
  backgroundSize: defaultConfig.backgroundSize,
  height: defaultConfig.height,
  maxHeight: defaultConfig.maxHeight,
  maxWidth: defaultConfig.maxWidth,
  minHeight: defaultConfig.minHeight,
  minWidth: defaultConfig.minWidth,
  svgFill: defaultConfig.svgFill,
  svgStroke: defaultConfig.svgStroke,
  width: defaultConfig.width,
  zIndex: defaultConfig.zIndex,

  /*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */
  modules: defaultConfig.modules,

  /*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  */
  options: defaultConfig.options,
};

// Helper functions
/**
 *
 * @param {{[key: string]: string[]}} colors
 */
function collapseColors(colors) {
  return Object.entries(colors).reduce(
    (prev, [color, shades]) => ({
      ...prev,
      ...shades.reduce(
        (prev, shade, i) => ({ ...prev, [buildColorName(color, shade, i)]: shade }),
        {}
      ),
    }),
    {}
  );

  function buildColorName(color, shade, i) {
    // Exceptions
    if (['white', 'black', 'transparent'].includes(color)) {
      return color;
    }

    // Base
    // if (shade === 'default') {
    // return color;
    // }

    // Typical
    return `${color}-${i}`;
  }
}
