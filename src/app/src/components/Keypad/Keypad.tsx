import React, { FC, Fragment } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import BackspaceOutlined from '@material-ui/icons/BackspaceOutlined';

import { useStore } from '../../hooks/useStore';

interface Buttons {
  [index: string]: string[];
}

const buttons: Buttons = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

const Keypad: FC = () => {
  const { addValue } = useStore();

  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: 'whitesmoke',
      },
      box: {
        // height: '10vh',
      },
      button: {
        width: '33.33%',
        height: '100%',
        borderRadius: 0,
        boxShadow: 'none',
      },
    })
  )();

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'caps', '0', 'bcsp'].map(
        (key: string) => (
          // <Box key={key + 'a'} className={styles.box}>
          <Button
            className={styles.button}
            key={key}
            variant="text"
            color="primary"
            onClick={e => addValue(e, key)}
          >
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              {key == 'caps' ? (
                <ArrowUpward />
              ) : key == 'bcsp' ? (
                <BackspaceOutlined />
              ) : (
                <Fragment>
                  <Typography variant="h4">{key}</Typography>
                  <Typography>{buttons[key]}</Typography>
                </Fragment>
              )}
            </Box>
          </Button>
          // </Box>
        )
      )}
    </Box>
  );
};

export { Keypad };
