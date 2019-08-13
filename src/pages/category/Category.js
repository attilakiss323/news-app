import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router';

import { Card, Page, CardList, Loading } from '../../components';
import { getNews, NewsStoreContext } from '../../common';

function Category({
  history,
  match: {
    params: { id: category }
  }
}) {
  const {
    state: { news, language },
    actions
  } = useContext(NewsStoreContext);

  useEffect(() => {
    getNews({ language, category }).fork(
      err => actions.setNewsError(err),
      res => actions.getNews(res.articles)
    );
  }, [language]);

  return (
    <Page
      heading={`Top ${category} news from Great Brittain:`}
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
                category={category}
                navigate={history.push}
              />
            ))
          )
          .option(<Loading />)}
      </CardList>
    </Page>
  );
}

export default withRouter(Category);
