import React, { useEffect, useState } from 'react';
import Async from 'crocks/Async';

import { api } from '../../constants';
import { Card, Page, SearchField, CardList } from '../../components';

function Search() {
  const [debouncedSearchValue, setDebouncedSearchValue] = useState('');
  const [news, setNews] = useState([]);

  useEffect(() => {
    if (debouncedSearchValue) {
      Async.fromPromise(() =>
        fetch(
          `${
            api({
              params: {
                country: 'us',
                q: debouncedSearchValue,
                apiKey: process.env.REACT_APP_NEWS_APP_KEY
              }
            }).topNews
          }`
        ).then(res => res.json())
      )().fork(err => console.log(err), res => setNews(res.articles));
    } else {
      setNews([]);
    }
  }, [debouncedSearchValue]);

  return (
    <Page
      heading="Search top news from Great Brittain by term:"
      headingType="h1"
    >
      <SearchField searchCb={setDebouncedSearchValue} />
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

export default Search;
