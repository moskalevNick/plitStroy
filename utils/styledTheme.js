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
    white: '#fff',
    darkBlue: '#42858f',
    orange: '#d1793e',
    darkGreen: '#50533f',
    whiteGrey: '#e8e8e8',
    dust: '#d59b6c',
    grey: '#6e7491',
    green: '#2c852c',
  },
  breakpoints,
  media,
};

export default theme;
