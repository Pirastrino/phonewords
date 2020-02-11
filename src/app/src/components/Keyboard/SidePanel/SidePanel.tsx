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
  body: string | JSX.Element;
  handleClick: ((e: MouseEvent) => void) | (() => void) | undefined;
}

const SidePanel: FC = () => {
  const { numpad, switchType } = useKeyboard();
  const { removeChar } = useMessage();

  // CSS
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        minHeight: '37.5vh',
        width: '20%',
      },
      button: {
        display: 'flex',
        width: '100%',
        height: 'calc(100%/4)',
        padding: 0,
      },
    })
  )();

  // BUTTON MAP
  const buttons: Map<number, Button> = new Map([
    [
      11,
      {
        body: <InsertEmoticonIcon />,
        handleClick: switchType, // TODO should open emojis
      },
    ],
    [
      12,
      {
        body: numpad ? 'abc' : '123',
        handleClick: switchType,
        // handleClick: (e: MouseEvent) => switchType(e),
      },
    ],
    [
      13,
      {
        body: <BackspaceOutlinedIcon />,
        handleClick: removeChar, // TODO should delete last char
      },
    ],
    [
      14,
      {
        body: <KeyboardReturnOutlinedIcon />,
        handleClick: switchType,
        // handleClick: (e: MouseEvent) => switchType(e), // TODO should insert new line
      },
    ],
  ]);

  return (
    <Box display="flex" flexWrap="wrap" className={styles.root}>
      {[...buttons].map(([key, btn]) => (
        <Button key={key} onClick={btn.handleClick} className={styles.button}>
          {btn.body}
        </Button>
      ))}
    </Box>
  );
};

export { SidePanel };
