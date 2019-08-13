import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router';

import { Card, Page, SearchField, CardList, Loading } from '../../components';
import { getNews, NewsStoreContext, getCountryFullName } from '../../common';

function Search({ history }) {
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const {
    state: { news, language },
    actions
  } = useContext(NewsStoreContext);

  useEffect(() => {
    if (debouncedSearchValue) {
      getNews({ language, search: debouncedSearchValue }).fork(
        err => actions.setNewsError(err),
        res => actions.getNews(res.articles)
      );
    } else {
      actions.getNews([]);
    }
  }, [debouncedSearchValue, language]);

  return (
    <Page
      heading={`Search top news from ${getCountryFullName(language)} by term:`}
      headingType="h1"
    >
      <SearchField searchCb={setDebouncedSearchValue} />
      <CardList>
        {news
          .map(news =>
            news.map(article => (
              <Card
                navigate={history.push}
                key={article.title}
                title={article.title}
                img={article.urlToImage}
                description={article.description}
              />
            ))
          )
          .option(<Loading />)}
      </CardList>
    </Page>
  );
}

export default withRouter(Search);
