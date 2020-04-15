import React, { FC, ChangeEvent, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { get } from 'lodash';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import { Button } from '@material-ui/core';

import { WordTab } from '../WordTab';
import { useMessage, lastWordReg } from '../../hooks/useMessage';
import { useKeyboard } from '../../hooks/useKeyboard';

const getWords = gql`
  query($base: String!) {
    words(base: $base) {
      lemma
    }
  }
`;

const SuggestionBar: FC = () => {
  const { message, index, setFirst, switchWord } = useMessage();
  const { secondary, setSecondary } = useKeyboard();
  const word =
    (message.slice(index).match(lastWordReg) &&
      message.slice(index).match(lastWordReg)![1]) ||
    '';

  const { loading, data } = useQuery(getWords, {
    variables: {
      base: word,
    },
  });

  useMemo(() => {
    get(data, 'words[0].lemma') &&
      message.length > 0 &&
      setFirst &&
      switchWord(get(data, 'words[0].lemma'));
  }, [data]);

  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        minHeight: theme.typography.pxToRem(56),
        backgroundColor: theme.palette.background.paper,
      },
      tabs: {
        minHeight: theme.typography.pxToRem(56),
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      btn: {
        width: '100%',
        minHeight: theme.typography.pxToRem(56),
        borderRadius: 0,
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    })
  )();

  const a11yProps = (index: number) => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  });

  const handleChange = (e: ChangeEvent<{}>, newValue: string) =>
    switchWord(newValue);

  return (
    <Box className={styles.root}>
      {secondary ? (
        <Button className={styles.btn} onClick={() => setSecondary()}>
          close
        </Button>
      ) : (
        <Tabs
          value={word}
          onChange={handleChange}
          textColor="primary"
          variant="scrollable"
          aria-label="scrollable auto tabs example"
          className={styles.tabs}
        >
          {!loading &&
            data &&
            data.words.map((w: any, k: number) => (
              <WordTab
                key={k}
                value={w.lemma}
                label={w.lemma}
                {...a11yProps(k)}
              />
            ))}
        </Tabs>
      )}
    </Box>
  );
};

export { SuggestionBar };
