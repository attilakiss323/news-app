import React, { useEffect, useState } from 'react';
import Async from 'crocks/Async';

import { api } from '../../constants';
import { Card, Page, CardList } from '../../components';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    Async.fromPromise(() =>
      fetch(
        `${
          api({
            params: {
              country: 'us',
              apiKey: process.env.REACT_APP_NEWS_APP_KEY
            }
          }).topNews
        }`
      ).then(res => res.json())
    )().fork(err => console.log(err), res => setNews(res.articles));
  }, []);

  return (
    <Page heading="Top news from Great Brittain:" headingType="h1">
      <CardList>
        {news.map(article => (
          <Card
            key={article.title}
            title={article.title}
            img={article.urlToImage}
            description={article.description}
          />
        ))}
      </CardList>
    </Page>
  );
}

export default News;
