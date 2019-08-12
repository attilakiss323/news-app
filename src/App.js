import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import { Navigation, Wrapper } from './components';
import { theme } from './constants';
import Routes from './routes';
import { NewsStoreProvider } from './common';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <NewsStoreProvider>
          <>
            <Navigation />
            <Wrapper>
              <Routes />
            </Wrapper>
          </>
        </NewsStoreProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
