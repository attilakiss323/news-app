import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Async from 'crocks/Async';

import { api } from '../../constants';
import { Heading, Card } from '../../components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsHeading = styled(Heading)`
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 3rem;
`;

const NewsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  justify-content: center;
`;

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
    <Page>
      <NewsHeading type="h1">Top news from Great Brittain:</NewsHeading>
      <NewsList>
        {news.map(article => (
          <Card
            key={article.title}
            title={article.title}
            img={article.urlToImage}
            description={article.description}
          />
        ))}
      </NewsList>
    </Page>
  );
}

export default News;
