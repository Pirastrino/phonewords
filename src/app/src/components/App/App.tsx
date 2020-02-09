import React, { FC } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Layout } from '../Layout/Layout';
import { Display } from '../Display/Display';
import { Header } from '../Header/Header';
// import { Keypad } from '../Keypad/Keypad';
import { Keyboard } from '../Keyboard/Keyboard';
import { SuggestionBar } from '../SuggestionBar/SuggestionBar';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

const App: FC = () => {
  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'whitesmoke',
        // [`${theme.breakpoints.up('sm')} and (orientation: portrait)`]: {
        //   maxWidth: '40vw',
        // },
      },
      display: {
        flexGrow: 1,
      },
    })
  )();

  return (
    <Layout>
      <ApolloProvider client={client}>
        {/* <Helmet /> */}
        {/* <AppRouter/> */}
        <Container disableGutters className={styles.root} maxWidth="xs">
          <Header />
          <Display />
          <SuggestionBar />
          {/* <Keypad /> */}
          <Keyboard />
        </Container>
      </ApolloProvider>
    </Layout>
  );
};

export { App };
