import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { get } from 'lodash';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';

import { WordTab } from '../WordTab';
import { useMessage } from '../../hooks/useMessage';

const getWords = gql`
  query($base: String!) {
    words(base: $base) {
      lemma
    }
  }
`;

const SuggestionBar: FC = () => {
  const [value, setValue] = useState();
  const { lastWord, switchWord } = useMessage();

  const { loading, data } = useQuery(getWords, {
    variables: {
      base: (lastWord() && lastWord()![1]) || '',
    },
  });

  useEffect(() => {
    setValue(undefined);
  }, [data]);

  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
      },
      tabs: {
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
    })
  )();

  const a11yProps = (index: number) => ({
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  });

  const handleChange = (e: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    switchWord(newValue);
    // pushWord(newValue);
  };

  return (
    <Box className={styles.root}>
      <Tabs
        value={value || (!loading && get(data, 'words[0].lemma'))}
        onChange={handleChange}
        textColor="primary"
        variant="scrollable"
        scrollButtons="off"
        aria-label="scrollable auto tabs example"
        className={styles.tabs}
      >
        {!loading &&
          data.words &&
          data.words.map((w: any, k: number) => (
            <WordTab
              key={k}
              value={w.lemma}
              label={w.lemma}
              {...a11yProps(k)}
            />
          ))}
      </Tabs>
    </Box>
  );
};

export { SuggestionBar };
