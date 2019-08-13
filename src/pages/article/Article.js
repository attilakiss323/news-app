import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import isObject from 'crocks/predicates/isObject';
import safe from 'crocks/Maybe/safe';
import getProp from 'crocks/Maybe/getProp';
import { withRouter } from 'react-router';

import { Page, Icon } from '../../components';
import { getNews, NewsStoreContext } from '../../common';

const Image = styled.img`
  width: 70%;
  margin: 0 auto;
  display: block;

  @media (max-width: 1440px) and (min-width: 1200px) {
    max-width: 80%;
  }

  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;

const Content = styled.div`
  max-width: 70%;
  margin: 0 auto;
  margin-top: 2rem;
  display: block;
  font-family: ${({ theme }) => theme.font.primary};

  @media (max-width: 1440px) and (min-width: 1200px) {
    max-width: 80%;
  }

  @media (max-width: 1200px) {
    max-width: 90%;
    font-size: ${({ theme, type }) => `${theme.font.heading.h3.fontSize}rem`};
  }
`;

const Back = styled.a`
  text-decoration: none;
  margin: 0 auto;
  text-align: left;
  width: 70%;
  margin-top: 1rem
  cursor: pointer

  @media (max-width: 1440px) and (min-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 1200px) {
    width: 90%;
    font-size: ${({ theme, type }) => `${theme.font.heading.h3.fontSize}rem`};
  }
`;

const BackIcon = styled(Icon)`
  vertical-align: bottom;
`;

function Article({
  history,
  match: {
    params: { id: title, category }
  }
}) {
  const [article, setArticle] = useState({});
  const {
    state: { news, newsList, language },
    actions
  } = useContext(NewsStoreContext);

  useEffect(() => {
    const allArticles = [
      ...newsList
        .map(newsList => newsList.map(news => news.articles).flat())
        .option([]),
      ...news.option([])
    ];

    if (allArticles.length > 0) {
      const article = allArticles.find(
        article => article.title === title.replace(/~+/g, '?')
      );
      setArticle(article);
    } else {
      getNews({
        language,
        search: title.replace(/~+/g, '?'),
        category
      }).fork(
        err => actions.setNewsError(err),
        res => setArticle(res.articles[0])
      );
    }
  }, []);

  return (
    <Page
      heading={safe(isObject, article)
        .chain(getProp('title'))
        .option('Loading...')}
      headingType="h1"
      left="14rem"
    >
      <Image
        src={safe(isObject, article)
          .chain(getProp('urlToImage'))
          .option('')}
      />
      <Content>
        {safe(isObject, article)
          .chain(getProp('content'))
          .option('')}
      </Content>
      <Back onClick={() => history.goBack()}>
        <BackIcon kind="chevron-left" size={16} />
        Back to list
      </Back>
    </Page>
  );
}

export default withRouter(Article);
