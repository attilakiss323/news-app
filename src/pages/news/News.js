import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router';

import { Card, Page, CardList, Loading } from '../../components';
import { getNews, NewsStoreContext, getCountryFullName } from '../../common';

function News({ history }) {
  const {
    state: { news, language },
    actions
  } = useContext(NewsStoreContext);

  useEffect(() => {
    getNews({ language }).fork(
      err => actions.setNewsError(err),
      res => actions.getNews(res.articles)
    );
  }, [language]);

  return (
    <Page
      heading={`Top news from ${getCountryFullName(language)}:`}
      headingType="h1"
    >
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
