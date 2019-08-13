import React, { useContext } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Button from '../button/Button';
import { urls } from '../../constants';
import { NewsStoreContext } from '../../common';

const StickyHeader = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${({ theme }) => theme.color.grey3};
  z-index: 2;
`;

const NavBtn = styled(Button)`
  margin: 0;
`;

const Filler = styled.div`
  flex-grow: 1;
`;

const NavLangBtn = styled(Button)`
  width: 3rem;
  margin: 0;
`;

function Navigation({ history }) {
  const {
    state: { language },
    actions
  } = useContext(NewsStoreContext);

  const handleClick = (e, route) => {
    e.preventDefault();
    history.push(route);
  };

  return (
    <StickyHeader>
      <NavBtn
        inverted
        isActive={history.location.pathname === '/'}
        link="/"
        icon="home"
        iconSize={16}
        text="Top News"
        onClick={e => handleClick(e, urls.news)}
      />
      <NavBtn
        inverted
        isActive={history.location.pathname === '/categories'}
        link="/categories"
        icon="categories"
        iconSize={16}
        text="Categories"
        onClick={e => handleClick(e, urls.categories)}
      />
      <NavBtn
        inverted
        isActive={history.location.pathname === '/search'}
        link="/search"
        icon="search"
        iconSize={16}
        text="Search"
        onClick={e => handleClick(e, urls.search)}
      />
      <Filler />
      <NavLangBtn
        onClick={() => actions.setLanguage('gb')}
        inverted
        isActive={language === 'gb'}
        text="GB"
      />
      <NavLangBtn
        onClick={() => actions.setLanguage('us')}
        inverted
        isActive={language === 'us'}
        text="US"
      />
    </StickyHeader>
  );
}

export default withRouter(Navigation);
