import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import { Navigation, Wrapper, Button } from './components';
import { theme } from './constants';
import Routes from './routes';

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Navigation />
          <Routes />
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}

export default App;
