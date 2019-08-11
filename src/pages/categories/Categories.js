import React, { useEffect, useState } from 'react';
import Async from 'crocks/Async';
import styled from 'styled-components';

import { api } from '../../constants';
import { upperCaseFirstLetter } from '../../common';
import { Card, Page, Icon, Heading } from '../../components';

const categories = [
  'business',
  'entertainment',
  'general',
  'health',
  'science',
  'sports',
  'technology'
];

const CategoriesList = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CategoryList = styled.div`
  width: 160rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-left: 1rem;
`;

const ChevronLeft = styled(Icon)`
  position: absolute;
  margin-top: 13.5rem;
  left: 0;
`;

const ChevronRight = styled(Icon)`
  position: absolute;
  margin-top: 13.5rem;
  right: -0.4rem;
`;

const CategoryHeading = styled(Heading)`
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 2rem;
`;

const CategoryCard = styled(Card)`
  transform: ${({ transitionValue, category }) =>
    `translate(${transitionValue[category]}rem, 0)`};
  transition: transform 500ms;
`;

function animateTransition({
  direction,
  transitionValue,
  setTransitionValue,
  category
}) {
  if (direction === 'right' && transitionValue[category] > -60) {
    setTransitionValue({
      ...transitionValue,
      [category]: transitionValue[category] - 31.15
    });
  } else if (direction === 'left' && transitionValue[category] < 0) {
    setTransitionValue({
      ...transitionValue,
      [category]: transitionValue[category] + 31.15
    });
  }
}

function getCategories(category) {
  return Async.fromPromise(() =>
    fetch(
      `${
        api({
          params: {
            country: 'us',
            apiKey: process.env.REACT_APP_NEWS_APP_KEY,
            category: category,
            pageSize: 5
          }
        }).topNews
      }`
    ).then(res => res.json())
  )();
}

function Categories() {
  const [newsList, setNewsList] = useState([]);
  const [transitionValue, setTransitionValue] = useState({
    business: 0,
    entertainment: 0,
    general: 0,
    health: 0,
    science: 0,
    sports: 0,
    technology: 0
  });

  useEffect(() => {
    Async.all(categories.map(category => getCategories(category))).fork(
      err => console.log(err),
      res => setNewsList(res)
    );
  }, []);

  return (
    <Page
      heading="Top 5 news by category from Great Brittain:"
      headingType="h2"
      left="-1rem"
    >
      <CategoriesList>
        {newsList.map((news, i) => (
          <div key={categories[i]}>
            <CategoryHeading type="h2">
              {upperCaseFirstLetter(categories[i])}
            </CategoryHeading>
            <CategoryList>
              <ChevronLeft
                onClick={() =>
                  animateTransition({
                    direction: 'left',
                    transitionValue,
                    setTransitionValue,
                    category: categories[i]
                  })
                }
                size={32}
                kind="chevron-left"
              />
              {news.articles.map(article => (
                <CategoryCard
                  category={categories[i]}
                  transitionValue={transitionValue}
                  key={article.description}
                  title={article.title}
                  img={article.urlToImage}
                  description={article.description}
                />
              ))}
              <ChevronRight
                onClick={() =>
                  animateTransition({
                    direction: 'right',
                    transitionValue,
                    setTransitionValue,
                    category: categories[i]
                  })
                }
                size={32}
                kind="chevron-right"
              />
            </CategoryList>
          </div>
        ))}
      </CategoriesList>
    </Page>
  );
}

export default Categories;
