import React, { FC, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

import { MainPanel } from './MainPanel/MainPanel';
import { SidePanel } from './SidePanel/SidePanel';
import { SecondaryPanel } from './SecondaryPanel/SecondaryPanel';

import { useKeyboard } from '../../hooks/useKeyboard';

const Keyboard: FC = () => {
  const { secondary } = useKeyboard();

  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
      },
    })
  )();

  return (
    <Box className={styles.root}>
      {secondary ? (
        <SecondaryPanel />
      ) : (
        <Fragment>
          <MainPanel />
          <SidePanel />
        </Fragment>
      )}
    </Box>
  );
};

export { Keyboard };
