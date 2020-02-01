import React, { FC, MouseEvent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import SpaceBarIcon from '@material-ui/icons/SpaceBar';
import KeyboardCapslockIcon from '@material-ui/icons/KeyboardCapslock';

import { useKeyboard } from '../../../hooks/useKeyboard';

interface Button {
  body: string | string[] | JSX.Element;
  handleClick?: ((e: MouseEvent) => void) | undefined;
}

const MainPanel: FC = () => {
  const { numpad } = useKeyboard();

  // CSS
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        // minHeight: '40vh',
        width: '80%',
      },
      box: {
        width: `calc(100%/3)`,
        '&:last-child': {
          flexGrow: 1,
          // width: `calc(100%/2)`,
        },
      },
      // button: {
      //   // height: '25%',
      //   // width: '33.33%',
      //   borderRadius: 0,
      //   boxShadow: 'none',
      //   padding: 0,
      // },
    })
  )();

  // BUTTON MAP
  const buttons: Map<number, Button> = new Map([
    [1, { body: numpad ? '1' : [',', '!', '?'] }],
    [2, { body: numpad ? '2' : ['a', 'b', 'c'] }],
    [3, { body: numpad ? '3' : ['d', 'e', 'f'] }],
    [4, { body: numpad ? '4' : ['g', 'h', 'i'] }],
    [5, { body: numpad ? '5' : ['j', 'k', 'l'] }],
    [6, { body: numpad ? '6' : ['m', 'n', 'o'] }],
    [7, { body: numpad ? '7' : ['p', 'q', 'r', 's'] }],
    [8, { body: numpad ? '8' : ['t', 'u', 'v'] }],
    [9, { body: numpad ? '9' : ['w', 'x', 'y', 'z'] }],
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
        handleClick: (e: MouseEvent) => console.log(e),
      },
    ],
  ]);

  return (
    <Box display="flex" flexWrap="wrap" className={styles.root}>
      {[...buttons].map(([key, btn]) => (
        <Box display="flex" justifyContent="center" className={styles.box}>
          {/* <Button key={key}>{numpad && key < 10 ? key : value}</Button> */}
          <Button key={key} onClick={btn.handleClick}>
            {btn.body}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export { MainPanel };
