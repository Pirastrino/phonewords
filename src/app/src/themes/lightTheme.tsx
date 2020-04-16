import { createMuiTheme } from '@material-ui/core';

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00A991',
    },
    secondary: {
      main: '#E98305',
    },
  },
  typography: {
    fontSize: 18,
  },
});

export { lightTheme };
