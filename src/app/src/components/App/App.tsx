import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Layout } from '../Layout/Layout';
import { Display } from '../Display/Display';
import { Header } from '../Header/Header';
import { Keypad } from '../Keypad/Keypad';
import { SuggestionBar } from '../SuggestionBar/SuggestionBar';

const App: FC = () => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        height: '100vh',
        backgroundColor: 'whitesmoke',
      },
    })
  )();

  return (
    <Layout>
      {/* <Helmet /> */}
      {/* <AppRouter/> */}
      <Container disableGutters className={styles.root} maxWidth="xs">
        <Header />
        <Display />
        <SuggestionBar />
        <Keypad />
      </Container>
    </Layout>
  );
};

export { App };
