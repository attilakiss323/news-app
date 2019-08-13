import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';

import { News, Categories, Category, Search, Article, Page404 } from './pages';
import { urls } from './constants';

function Routes() {
  return (
    <Switch>
      <Route exact path={urls.news} component={News} />
      <Route path={urls.categories} component={Categories} />
      <Route path={urls.category} component={Category} />
      <Route path={urls.search} component={Search} />
      <Route path={urls.article} component={Article} />
      <Route component={Page404} />
    </Switch>
  );
}

export default Routes;
