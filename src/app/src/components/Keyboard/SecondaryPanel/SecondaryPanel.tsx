import React, { FC, useMemo } from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { buttonMap } from './buttonMap';
import { useKeyboard } from '../../../hooks/useKeyboard';
import { useMessage } from '../../../hooks/useMessage';

const getEmojis = gql`
  query {
    emojis {
      character
    }
  }
`;

type Emoji = {
  character: string;
};

const SecondaryPanel: FC = () => {
  const { secondary } = useKeyboard();
  const { addSingleChar } = useMessage();
  const { loading, data, error } = useQuery(getEmojis);

  const emoji: string[] = useMemo(
    () => (loading || error ? [] : data.emojis.map((e: Emoji) => e.character)),
    [loading, data, error]
  );

  // CSS
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: `${secondary ? 'flex' : 'none'}`,
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        height: '37.5vh',
        width: '100%',
      },
      hidden: {
        display: 'none',
      },
      btn: {
        display: 'flex',
        textTransform: 'none',
        height: 'calc(100%/4)',
        minWidth: 'calc(100%/6)',
        borderRadius: 0,
        padding: 0,
      },
      btn__primary: {
        minWidth: `calc(100%/${
          secondary === ',?!'
            ? secondary.length + 1
            : secondary && secondary.length
        })`,
      },
    })
  )();

  return (
    <Box className={styles.root}>
      {secondary &&
        secondary !== 'emoji' &&
        ((secondary === ',?!' && secondary.concat('.')) || secondary)
          .split('')
          .map((c) => (
            <Button
              key={c}
              className={`${styles.btn} ${styles.btn__primary}`}
              onClick={() => addSingleChar(c)}
            >
              {c}
            </Button>
          ))}
      {((): string[] =>
        secondary === 'emoji'
          ? emoji
          : (secondary && buttonMap.get(secondary)) || [])().map((key) => (
        <Button
          key={key}
          className={styles.btn}
          onClick={() => addSingleChar(key)}
        >
          {key}
        </Button>
      ))}
    </Box>
  );
};

export { SecondaryPanel };
