const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`
};

export const COLORS = {
  primary: {
    green: "hsl(157, 74%, 62%)",
    white: "hsl(0, 0%, 100%)",
    navy: "hsl(224 , 35%, 11%)",
    gray: "hsl(225 , 26%, 23%)"
  },
  neutral: {
    lightGrey: "hsl(225, 21%, 45%)",
    veryLightGray: "hsl(225, 40%, 83%)",
  }
};