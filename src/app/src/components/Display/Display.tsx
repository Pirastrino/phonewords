import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useMessage } from '../../hooks/useMessage';

const Display = () => {
  const { message } = useMessage();

  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        color: theme.palette.text.primary,
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        whiteSpace: 'pre-wrap',

        '& > p': {
          margin: 0,
        },
      },
      cursor: {
        fontWeight: theme.typography.fontWeightBold,
        borderRight: `2px solid ${theme.palette.secondary.main}`,
        paddingLeft: `${0.1 * theme.typography.fontSize}px`,
        animation: '$blink-caret 1s step-end infinite',
      },

      '@keyframes blink-caret': {
        'from, to': { borderColor: 'transparent' },
        '50%': { borderColor: theme.palette.secondary.main },
      },
    })
  )();

  return (
    <Box p={2} className={styles.root}>
      <p>
        {message}
        <span className={styles.cursor}></span>
      </p>
    </Box>
  );
};

export { Display };
