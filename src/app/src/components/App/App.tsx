import React, { FC, useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {
  makeStyles,
  createStyles,
  Theme,
  ThemeProvider,
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Components
import { Layout } from '../Layout/Layout';
import { Display } from '../Display/Display';
import { Header } from '../Header/Header';
import { Keyboard } from '../Keyboard/Keyboard';
import { SuggestionBar } from '../SuggestionBar/SuggestionBar';

// Hooks
import { useTheme } from '../../hooks/useTheme';
import { useKeyboard } from '../../hooks/useKeyboard';

// Themes
import { lightTheme } from '../../themes/lightTheme';
import { darkTheme } from '../../themes/darkTheme';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
});

const App: FC = () => {
  const { dark } = useTheme();

  const styles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      },
      display: {
        flexGrow: 1,
      },
    })
  )();

  return (
    <Layout>
      <ApolloProvider client={client}>
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          <Container disableGutters className={styles.root} maxWidth="xs">
            <Header />
            <Display />
            <SuggestionBar />
            <Keyboard />
          </Container>
        </ThemeProvider>
      </ApolloProvider>
    </Layout>
  );
};

export { App };
