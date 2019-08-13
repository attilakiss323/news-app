import { api } from '../../constants';
import Async from 'crocks/Async';

export function getNews({ language = 'us', search = '', category = '' } = {}) {
  return Async.fromPromise(() =>
    fetch(
      `${
        api({
          params: {
            country: language,
            apiKey: process.env.REACT_APP_NEWS_APP_KEY,
            q: search,
            category
          }
        }).topNews
      }`
    ).then(res => res.json())
  )();
}

export function getNewsList({ language = 'us', categories }) {
  return Async.all(
    categories.map(category =>
      Async.fromPromise(() =>
        fetch(
          `${
            api({
              params: {
                country: language,
                apiKey: process.env.REACT_APP_NEWS_APP_KEY,
                category: category,
                pageSize: 5
              }
            }).topNews
          }`
        ).then(res => res.json())
      )()
    )
  );
}
