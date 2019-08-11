import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Navigation, Wrapper } from './components';
import { theme } from './constants';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Navigation />
          <div>News App</div>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
