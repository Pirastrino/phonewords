import React, { FC, ChangeEvent, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';

import { WordTab } from '../WordTab';

const SuggestionBar: FC = () => {
  const [value, setValue] = useState(0);

  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
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

  const handleChange = (e: ChangeEvent<{}>, newValue: number) =>
    setValue(newValue);

  return (
    <Box className={styles.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="none"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className={styles.tabs}
      >
        <WordTab label="Word 1" {...a11yProps(0)} />
        <WordTab label="Word 2" {...a11yProps(1)} />
        <WordTab label="Word 3" {...a11yProps(2)} />
        <WordTab label="Word 4" {...a11yProps(3)} />
        <WordTab label="Word 5" {...a11yProps(4)} />
        <WordTab label="Word 6" {...a11yProps(5)} />
      </Tabs>
    </Box>
  );
};

export { SuggestionBar };
