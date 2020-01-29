import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const Display = () => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        height: '40vh',
      },
    })
  )();

  return <Box className={styles.root}>Display Placeholder</Box>;
};

export { Display };
