import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
// import Brightness5Icon from '@material-ui/icons/Brightness5';

const Header = () => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      themeButton: {
        // borderTop: `1px solid ${theme.palette.divider}`,
        // borderBottom: `1px solid ${theme.palette.divider}`,
      },
      title: {
        flexGrow: 1,
      },
    })
  )();

  return (
    <div className={styles.root}>
      <AppBar elevation={0} position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Kiwi | T9
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="theme">
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export { Header };
