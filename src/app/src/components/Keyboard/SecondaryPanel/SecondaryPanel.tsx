import React, { FC, MouseEvent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Space from '@material-ui/icons/SpaceBar';
import Cpsl from '@material-ui/icons/KeyboardCapslock';

import { useKeyboard } from '../../../hooks/useKeyboard';
import { useMessage } from '../../../hooks/useMessage';
import { buttonMap } from './buttonMap';

const SecondaryPanel: FC = () => {
  const { secondary } = useKeyboard();
  const { addChar } = useMessage();

  // CSS
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.background.default,
        minHeight: '37.5vh',
        width: '100%',
      },
      hidden: {
        display: 'none',
      },
      btn: {
        display: 'flex',
        textTransform: 'none',
        height: `calc(100%/4)`,
        width: `calc(100%/6)`,
        borderRadius: 0,
        padding: 0,
      },
      btn__primary: {
        width: `calc(100%/${secondary && secondary.length})`,
      },
    })
  )();

  return (
    <Box display="flex" flexWrap="wrap" className={styles.root}>
      {secondary &&
        (secondary.toUpperCase() + secondary).split('').map((c) => (
          <Button
            key={c}
            className={`${styles.btn} ${styles.btn__primary}`}
            onClick={() => addChar(c)}
          >
            {c}
          </Button>
        ))}
      {secondary &&
        buttonMap.get(secondary)!.map((key) => (
          <Button key={key} className={styles.btn} onClick={() => addChar(key)}>
            {key}
          </Button>
        ))}
    </Box>
  );
};

export { SecondaryPanel };
