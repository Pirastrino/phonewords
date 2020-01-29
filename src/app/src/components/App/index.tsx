import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Layout } from '../Layout';
import { Keypad } from '../Keypad';
import { SuggestionBar } from '../SuggestionBar';

const App: FC = () => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: 'whitesmoke',
      },
    })
  )();

  return (
    <Layout>
      {/* <Helmet /> */}
      {/* <AppRouter/> */}
      {/* <Display /> */}
      <Container disableGutters className={styles.root} maxWidth="xs">
        <SuggestionBar />
        <Keypad />
      </Container>
    </Layout>
  );
};

export { App };
