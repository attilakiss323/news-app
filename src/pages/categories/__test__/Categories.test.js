import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { Categories } from '../Categories';
import { NewsStoreProvider } from '../../../common';
import { theme } from '../../../constants';

describe('Categories', () => {
  it('renders', () => {
    mount(
      <ThemeProvider theme={theme}>
        <NewsStoreProvider>
          <Categories newsList={[[{ article: {} }]]} />
        </NewsStoreProvider>
      </ThemeProvider>
    );
  });
});
