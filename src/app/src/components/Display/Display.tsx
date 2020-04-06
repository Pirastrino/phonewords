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
        backgroundColor: theme.palette.background.paper,
        whiteSpace: 'pre-wrap',
      },
      p: {
        height: '1.15rem',
        paddingRight: '.075em',
        borderRight: '.15em solid orange',
        animation: '$blink-caret 1s step-end infinite',
      },
      '@keyframes blink-caret': {
        'from, to': { borderColor: 'transparent' },
        '50%': { borderColor: 'orange' },
      },
    })
  )();

  const { message } = useMessage();

  return (
    <Box p={2} className={styles.root}>
      <p className={styles.p}>{message}</p>
    </Box>
  );
};

export { Display };
