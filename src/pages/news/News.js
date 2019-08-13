import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router';

import { Card, Page, CardList, Loading } from '../../components';
import { getNews, NewsStoreContext } from '../../common';

function News({ history }) {
  const {
    state: { news },
    actions
  } = useContext(NewsStoreContext);

  useEffect(() => {
    getNews({ country: 'us' }).fork(
      err => actions.setNewsError(err),
      res => actions.getNews(res.articles)
    );
  }, []);

  return (
    <Page heading="Top news from Great Brittain:" headingType="h1">
      <CardList>
        {news
          .map(news =>
            news.map(article => (
              <Card
                key={article.title}
                title={article.title}
                img={article.urlToImage}
                description={article.description}
                navigate={history.push}
              />
            ))
          )
          .option(<Loading />)}
      </CardList>
    </Page>
  );
}

export default withRouter(News);
