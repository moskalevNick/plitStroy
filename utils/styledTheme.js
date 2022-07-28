const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  maximum: 1300,
};

const media = Object.fromEntries(
  Object.entries(breakpoints).map(([name, value]) => [
    name,
    `@media (min-width: ${value}px)`,
  ])
);

const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    orange: '#d1793e',
    darkGreen: '#50533f',
  },
  breakpoints,
  media,
};

export default theme;
