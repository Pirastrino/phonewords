import React, { FC, MouseEvent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';

import { useKeyboard } from '../../../hooks/useKeyboard';
import { useMessage } from '../../../hooks/useMessage';

interface Button {
  body: string | JSX.Element;
  handleClick?: ((e: MouseEvent) => void) | (() => void) | undefined;
}

const MainPanel: FC = () => {
  const { numpad } = useKeyboard();
  const { pushChar } = useMessage();

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
    [
      10,
      {
        body: <KeyboardCapslockIcon />,
        handleClick: (e: MouseEvent) => console.log(e),
      },
    ],
    [
      0,
      {
        body: <SpaceBarIcon />,
        handleClick: (e: MouseEvent) => {
          pushChar(' ');
        },
      },
    ],
  ]);

  return (
    <Box display="flex" flexWrap="wrap" className={styles.root}>
      {[...buttons].map(([key, btn]) => (
        <Button
          key={key}
          onClick={btn.handleClick ? btn.handleClick : () => pushChar(btn.body)}
          className={styles.button}
        >
          {btn.body}
        </Button>
      ))}
    </Box>
  );
};

export { MainPanel };
