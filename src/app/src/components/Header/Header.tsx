import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import { useTheme } from '../../hooks/useTheme';

const Header = () => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        color: 'white',
        backgroundColor:
          (theme.palette.type === 'dark' && theme.palette.background.default) ||
          theme.palette.primary.main,
      },
      title: {
        flexGrow: 1,
      },
    })
  )();

  const { dark, toggleDarkTheme } = useTheme();

  return (
    // <div className={styles.root}>
    <AppBar elevation={0} position="static" className={styles.root}>
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          Kiwi | T9
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="theme"
          onClick={() => toggleDarkTheme()}
        >
          {dark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
    // </div>
  );
};

export { Header };
