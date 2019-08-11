import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';

import { News, Categories, Search } from './pages';
import { urls } from './constants';

function Routes() {
  return (
    <Switch>
      <Route exact path={urls.news} component={News} />
      <Route path={urls.categories} component={Categories} />
      <Route path={urls.search} component={Search} />
    </Switch>
  );
}

export default Routes;
