import React, { FC, MouseEvent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import KeyboardReturnOutlinedIcon from '@material-ui/icons/KeyboardReturnOutlined';

import { useKeyboard } from '../../../hooks/useKeyboard';

interface Button {
  body: string | JSX.Element;
  handleClick: ((e: MouseEvent) => void) | undefined;
}

const SidePanel: FC = () => {
  const { numpad, switchType } = useKeyboard();

  // CSS
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: '100%',
        width: '20%',
      },
      box: {
        width: '100%',
      },
    })
  )();

  // BUTTON MAP
  const buttons: Map<number, Button> = new Map([
    [
      11,
      {
        body: <InsertEmoticonIcon />,
        handleClick: (e: MouseEvent) => switchType(e), // TODO should open emojis
      },
    ],
    [
      12,
      {
        body: numpad ? 'abc' : '123',
        handleClick: (e: MouseEvent) => switchType(e),
      },
    ],
    [
      13,
      {
        body: <BackspaceOutlinedIcon />,
        handleClick: (e: MouseEvent) => switchType(e), // TODO should delete last char
      },
    ],
    [
      14,
      {
        body: <KeyboardReturnOutlinedIcon />,
        handleClick: (e: MouseEvent) => switchType(e), // TODO should insert new line
      },
    ],
  ]);

  return (
    <Box display="flex" flexDirection="column" className={styles.root}>
      {[...buttons].map(([key, btn]) => (
        <Box display="flex" justifyContent="center" className={styles.box}>
          <Button key={key} onClick={btn.handleClick}>
            {btn.body}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export { SidePanel };
