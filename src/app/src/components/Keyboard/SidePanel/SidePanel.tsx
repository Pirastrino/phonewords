import React, { FC, MouseEvent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import KeyboardReturnOutlinedIcon from '@material-ui/icons/KeyboardReturnOutlined';

import { useKeyboard } from '../../../hooks/useKeyboard';
import { useMessage } from '../../../hooks/useMessage';

interface Button {
  value: string | JSX.Element;
  name?: string;
  handleClick?: ((e: MouseEvent) => void) | (() => void) | undefined;
}

const SidePanel: FC = () => {
  const { numpad, toggleNumpad, secondary, setSecondary } = useKeyboard();
  const { addChar, removeChar } = useMessage();

  // CSS
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: `${secondary ? 'none' : 'flex'}`,
        flexWrap: 'wrap',
        minHeight: '37.5vh',
        width: '20%',
      },
      btn: {
        display: 'flex',
        width: '100%',
        height: 'calc(100%/4)',
        padding: 0,
        borderRadius: 0,
      },
    })
  )();

  // BUTTON MAP
  const buttons: Map<number, Button> = new Map([
    [
      11,
      {
        value: <InsertEmoticonIcon />,
        handleClick: (e: MouseEvent) => setSecondary('emoji'),
      },
    ],
    [
      12,
      {
        value: 'abc',
        name: '123',
        handleClick: toggleNumpad,
      },
    ],
    [
      13,
      {
        value: <BackspaceOutlinedIcon />,
        handleClick: removeChar,
      },
    ],
    [
      14,
      {
        value: <KeyboardReturnOutlinedIcon />,
        handleClick: () => addChar('\n'),
      },
    ],
  ]);

  return (
    <Box className={styles.root}>
      {[...buttons].map(([key, btn]) => (
        <Button key={key} onClick={btn.handleClick} className={styles.btn}>
          {(!numpad && btn.name) || btn.value}
        </Button>
      ))}
    </Box>
  );
};

export { SidePanel };
