import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import { upperCaseFirstLetter } from '../../common';
import { Card, Page, Icon, Heading, Loading } from '../../components';
import { getNewsList, NewsStoreContext, dimensionsHOC } from '../../common';

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
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 5rem;
  overflow: hidden;

  @media (max-width: 1675px) and (min-width: 1070px) {
    width: 64rem;
    margin: 0 auto;
  }

  @media (max-width: 1070px) {
    width: 32.6rem;
    margin: 0 auto;
  }
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
  cursor: pointer;
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
  category,
  width
}) {
  const slideBy = 31.15;
  let rightVal = -60;
  if (width > 1070 && width < 1675) {
    rightVal = -90;
  } else if (width < 1070) {
    rightVal = -120;
  }

  if (direction === 'right' && transitionValue[category] > rightVal) {
    setTransitionValue({
      ...transitionValue,
      [category]: transitionValue[category] - slideBy
    });
  } else if (direction === 'left' && transitionValue[category] < 0) {
    setTransitionValue({
      ...transitionValue,
      [category]: transitionValue[category] + slideBy
    });
  }
}

function Categories({ history, width }) {
  const {
    state: { newsList },
    actions
  } = useContext(NewsStoreContext);

  const initialTransitionValue = {
    business: 0,
    entertainment: 0,
    general: 0,
    health: 0,
    science: 0,
    sports: 0,
    technology: 0
  };
  const [transitionValue, setTransitionValue] = useState(
    initialTransitionValue
  );

  useEffect(() => {
    getNewsList({ country: 'us', categories }).fork(
      err => actions.setNewsError(err),
      res => actions.getNewsList(res)
    );
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setTransitionValue(initialTransitionValue)
    );

    return function cleanup() {
      window.removeEventListener('resize', () =>
        setTransitionValue(initialTransitionValue)
      );
    };
  }, []);

  return (
    <Page
      heading="Top 5 news by category from Great Brittain:"
      headingType="h2"
      left="5rem"
    >
      <CategoriesList>
        {newsList
          .map(newsList =>
            newsList.map((news, i) => (
              <div key={categories[i]}>
                <CategoryHeading
                  type="h2"
                  onClick={() => history.push(`/category/${categories[i]}`)}
                >
                  {upperCaseFirstLetter(categories[i])}
                </CategoryHeading>
                <CategoryList>
                  <ChevronLeft
                    onClick={() =>
                      animateTransition({
                        direction: 'left',
                        transitionValue,
                        setTransitionValue,
                        category: categories[i],
                        width
                      })
                    }
                    size={32}
                    kind="chevron-left"
                  />
                  {news.articles.map(article => (
                    <CategoryCard
                      navigate={history.push}
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
                        category: categories[i],
                        width
                      })
                    }
                    size={32}
                    kind="chevron-right"
                  />
                </CategoryList>
              </div>
            ))
          )
          .option(<Loading />)}
      </CategoriesList>
    </Page>
  );
}

export default dimensionsHOC()(withRouter(Categories));
