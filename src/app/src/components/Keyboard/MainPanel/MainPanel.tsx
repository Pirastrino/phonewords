import React, { FC, MouseEvent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Space from '@material-ui/icons/SpaceBar';
import Cpsl from '@material-ui/icons/KeyboardCapslock';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { useKeyboard } from '../../../hooks/useKeyboard';
import { useMessage } from '../../../hooks/useMessage';
import { useLongPress } from '../../../hooks/useLongPress';

interface Button {
  value: string | JSX.Element;
  name?: string;
  handleClick?: ((e: MouseEvent) => void) | (() => void) | undefined;
}

const MainPanel: FC = () => {
  const { setSecondary, numpad, secondary } = useKeyboard();
  const { addChar, transform, setTransform } = useMessage();

  // CSS
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: `${secondary ? 'none' : 'flex'}`,
        flexWrap: 'wrap',
        minHeight: '37.5vh',
        width: '80%',
      },
      btn: {
        display: 'flex',
        maxHeight: 'calc(100%/4)',
        width: 'calc(100%/3)',
        borderRadius: 0,
        padding: 0,

        '&:last-child': {
          flexGrow: 1,
        },
      },
      hidden: {
        display: 'none',
      },
      uppercase: {
        color: `${transform === 2 ? theme.palette.secondary.main : 'inherit'}`,
      },
    })
  )();

  // BUTTON MAP
  const buttons: Map<number, Button> = new Map([
    [1, { value: '1', name: ',?!' }],
    [2, { value: '2', name: 'abc' }],
    [3, { value: '3', name: 'def' }],
    [4, { value: '4', name: 'ghi' }],
    [5, { value: '5', name: 'jkl' }],
    [6, { value: '6', name: 'mno' }],
    [7, { value: '7', name: 'pqrs' }],
    [8, { value: '8', name: 'tuv' }],
    [9, { value: '9', name: 'wxyz' }],
    [
      10,
      {
        value: transform === 0 ? <KeyboardArrowUpIcon /> : <Cpsl />,
        handleClick: (e: MouseEvent) => setTransform(),
      },
    ],
    [0, { value: '0' }],
    [
      11,
      {
        value: <Space />,
        handleClick: (e: MouseEvent) => addChar(' '),
      },
    ],
  ]);

  return (
    <Box className={styles.root}>
      {[...buttons].map(([key, btn]) => (
        <Button
          key={key}
          onClick={
            btn.handleClick ||
            (() =>
              addChar(
                ((!numpad && btn.name) || btn.value).toString().charAt(0)
              ))
          }
          {...useLongPress(() => btn.name && setSecondary(btn.name))}
          className={`${key === 10 && transform === 2 && styles.uppercase} ${
            key === 0 && !numpad ? styles.hidden : styles.btn
          }`}
        >
          {(!numpad && btn.name) || btn.value}
        </Button>
      ))}
    </Box>
  );
};

export { MainPanel };
