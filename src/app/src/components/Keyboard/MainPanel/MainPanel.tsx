import React, { FC, MouseEvent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Space from '@material-ui/icons/SpaceBar';
import Cpsl from '@material-ui/icons/KeyboardCapslock';

import { useKeyboard } from '../../../hooks/useKeyboard';
import { useMessage } from '../../../hooks/useMessage';

interface Button {
  body: string | JSX.Element;
  handleClick?: ((e: MouseEvent) => void) | (() => void) | undefined;
}

const MainPanel: FC = () => {
  const { numpad } = useKeyboard();
  const { addChar } = useMessage();

  // CSS
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        minHeight: '37.5vh',
        width: '80%',
      },
      button: {
        display: 'flex',
        height: 'calc(100%/4)',
        width: `calc(100%/3)`,
        padding: 0,

        '&:last-child': {
          flexGrow: 1,
        },
      },
      hidden: {
        display: 'none',
      },
    })
  )();

  // BUTTON MAP
  const buttons: Map<number, Button> = new Map([
    [1, { body: numpad ? '1' : ',!?' }],
    [2, { body: numpad ? '2' : 'abc' }],
    [3, { body: numpad ? '3' : 'def' }],
    [4, { body: numpad ? '4' : 'ghi' }],
    [5, { body: numpad ? '5' : 'jkl' }],
    [6, { body: numpad ? '6' : 'mno' }],
    [7, { body: numpad ? '7' : 'pqrs' }],
    [8, { body: numpad ? '8' : 'tuv' }],
    [9, { body: numpad ? '9' : 'wxyz' }],
    [10, { body: <Cpsl />, handleClick: (e: MouseEvent) => console.log(e) }],
    [0, { body: '0' }],
    [11, { body: <Space />, handleClick: (e: MouseEvent) => addChar(' ') }],
  ]);

  return (
    <Box display="flex" flexWrap="wrap" className={styles.root}>
      {[...buttons].map(([key, btn]) => (
        <Button
          key={key}
          onClick={
            btn.handleClick || (() => addChar(btn.body.toString().charAt(0)))
          }
          className={key === 0 && !numpad ? styles.hidden : styles.button}
        >
          {btn.body}
        </Button>
      ))}
    </Box>
  );
};

export { MainPanel };
