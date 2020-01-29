import React from 'react'; // { useEffect, useState }
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useStore } from '../../hooks/useStore';

const Display = () => {
  const { input } = useStore();

  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        height: '40vh',
      },
    })
  )();

  return (
    <Box p={2} className={styles.root}>
      {input}
    </Box>
  );
};

export { Display };
