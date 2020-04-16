import { createMuiTheme } from '@material-ui/core';

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
  typography: {
    fontSize: 18,
  },
});

export { darkTheme };
