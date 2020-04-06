import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { useKeyboard } from '../../../hooks/useKeyboard';
import { useMessage } from '../../../hooks/useMessage';

const SecondaryPanel: FC = () => {
  const { secondary } = useKeyboard();
  const { addChar } = useMessage();

  // CSS
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
        minHeight: '37.5vh',
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
          secondary && secondary !== ',?!' && secondary.length
        })`,
      },
    })
  )();

  const buttonMap: Map<string, string> = new Map([
    [',?!', ',?!.\'-_@#&:;+"/\\=*%$£€(){}[]<>`´|^µ¹²©®×–—~«»„“”‘’§¥₩₽¢‰•¡¿…'],
    ['abc', 'àáâäæãåābçćč'],
    ['def', 'ďèéêëēėę'],
    ['ghi', 'îïíīįì'],
    ['jkl', 'ł'],
    ['mno', 'ňñńôöòóœøōõ'],
    ['pqrs', 'řŕšßś'],
    ['tuv', 'ťúůûüùū'],
    ['wxyz', 'ýÿžźż'],
  ]);

  return (
    <Box className={styles.root}>
      {secondary &&
        secondary !== ',?!' &&
        secondary.split('').map((c) => (
          <Button
            key={c}
            className={`${styles.btn} ${styles.btn__primary}`}
            onClick={() => addChar(c)}
          >
            {c}
          </Button>
        ))}
      {secondary &&
        buttonMap
          .get(secondary)!
          .split('')
          .map((key) => (
            <Button
              key={key}
              className={styles.btn}
              onClick={() => addChar(key)}
            >
              {key}
            </Button>
          ))}
    </Box>
  );
};

export { SecondaryPanel };
