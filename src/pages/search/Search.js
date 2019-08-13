import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router';

import { Card, Page, SearchField, CardList, Loading } from '../../components';
import { getNews, NewsStoreContext } from '../../common';

function Search({ history }) {
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const {
    state: { news },
    actions
  } = useContext(NewsStoreContext);

  useEffect(() => {
    if (debouncedSearchValue) {
      getNews({ country: 'us', search: debouncedSearchValue }).fork(
        err => actions.setNewsError(err),
        res => actions.getNews(res.articles)
      );
    } else {
      actions.getNews([]);
    }
  }, [debouncedSearchValue]);

  return (
    <Page
      heading="Search top news from Great Brittain by term:"
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
