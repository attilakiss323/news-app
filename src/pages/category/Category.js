import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router';

import { Card, Page, CardList } from '../../components';
import { getNews, NewsStoreContext } from '../../common';

function Category({
  match: {
    params: { id: category }
  }
}) {
  const {
    state: { news },
    actions
  } = useContext(NewsStoreContext);

  useEffect(() => {
    getNews({ country: 'us', category }).fork(
      err => console.log(err),
      res => actions.getNews(res.articles)
    );
  }, []);

  return (
    <Page
      heading={`Top ${category} news from Great Brittain:`}
      headingType="h1"
    >
      <CardList>
        {news.map(article => (
          <Card
            key={article.title}
            title={article.title}
            img={article.urlToImage}
            description={article.description}
            category={category}
          />
        ))}
      </CardList>
    </Page>
  );
}

export default withRouter(Category);
