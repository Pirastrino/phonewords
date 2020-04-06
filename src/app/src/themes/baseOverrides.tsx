import { createMuiTheme } from '@material-ui/core/styles';

const baseOverrides = createMuiTheme({
  overrides: {
    MuiTab: {
      root: {
        minHeight: 160,
      },
    },
  },
});

export { baseOverrides };
