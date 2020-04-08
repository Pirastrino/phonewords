import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { useMessage } from '../../hooks/useMessage';

const Display = () => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        // display: 'flex',
        color: theme.palette.text.primary,
        flexGrow: 1,
        // width: 'content-width',
        backgroundColor: theme.palette.background.paper,
        whiteSpace: 'pre-wrap',

        '& > p': {
          margin: 0,
        },
      },
      cursor: {
        // fontSize: `${1.5 * theme.typography.fontSize}px`,
        fontWeight: theme.typography.fontWeightBold,
        paddingLeft: `${0.1 * theme.typography.fontSize}px`,
        animation: '$blink-caret 1s step-end infinite',
        borderRight: `2px solid ${theme.palette.secondary.main}`,
      },

      '@keyframes blink-caret': {
        'from, to': { borderColor: 'transparent' },
        '50%': { borderColor: theme.palette.secondary.main },
      },
    })
  )();

  const { message } = useMessage();

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
