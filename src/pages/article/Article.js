import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import { Page } from '../../components';
import { getNews, NewsStoreContext } from '../../common';

const Image = styled.img`
  width: 70%;
  margin: 0 auto;
  display: block;
`;

const Content = styled.div`
  max-width: 70%;
  margin: 0 auto;
  margin-top: 2rem;
  display: block;
  font-family: ${({ theme }) => theme.font.primary};
`;

function Article({
  match: {
    params: { id: title, category }
  }
}) {
  const [article, setArticle] = useState({});
  const {
    state: { news, newsList }
  } = useContext(NewsStoreContext);

  useEffect(() => {
    const allArticles = [
      ...newsList.map(news => news.articles).flat(),
      ...news
    ];
    if (allArticles.length > 0) {
      const article = allArticles.find(
        article => article.title === title.replace(/\~+/g, '?')
      );
      setArticle(article);
    } else {
      getNews({
        country: 'us',
        search: title.replace(/\~+/g, '?'),
        category
      }).fork(err => console.log(err), res => setArticle(res.articles[0]));
    }
  }, []);

  if (article === undefined) {
    return (
      <Page heading="No such article" headingType="h1" left="14rem"></Page>
    );
  }

  return (
    <Page heading={article.title} headingType="h1" left="14rem">
      <Image src={article.urlToImage} />
      <Content>{article.content}</Content>
    </Page>
  );
}

export default Article;
