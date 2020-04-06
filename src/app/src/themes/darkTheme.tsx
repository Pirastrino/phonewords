import { createMuiTheme } from '@material-ui/core';
// import { green } from '@material-ui/core/colors';

// import { baseOverrides } from './baseOverrides';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#E98305',
    },
  },
  // overrides: {
  //   MuiTab: {
  //     root: {
  //       height: 100%,
  //     },
  //   },
  // },
});

export { darkTheme };
