import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useKeyboard } from '../../hooks/useKeyboard';

const Display = () => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        height: '40vh',
      },
    })
  )();

  const { type } = useKeyboard();

  return (
    <Box p={2} className={styles.root}>
      {type}
    </Box>
  );
};

export { Display };
