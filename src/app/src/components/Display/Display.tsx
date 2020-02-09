import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useMessage } from '../../hooks/useMessage';

const Display = () => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        flexGrow: 1,
        width: 'content-width',
      },
    })
  )();

  const { message } = useMessage();

  return (
    <Box p={2} className={styles.root}>
      {message}
    </Box>
  );
};

export { Display };
