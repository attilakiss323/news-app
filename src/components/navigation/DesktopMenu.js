import React from 'react';
import styled from 'styled-components';

import Button from '../button/Button';
import { urls } from '../../constants';

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

function DesktopMenu({ navigate, pathname, language, setLanguage }) {
  return (
    <>
      <NavBtn
        inverted
        isActive={pathname === '/'}
        link="/"
        icon="home"
        iconSize={16}
        text="Top News"
        onClick={e => navigate(e, urls.news)}
      />
      <NavBtn
        inverted
        isActive={pathname === '/categories'}
        link="/categories"
        icon="categories"
        iconSize={16}
        text="Categories"
        onClick={e => navigate(e, urls.categories)}
      />
      <NavBtn
        inverted
        isActive={pathname === '/search'}
        link="/search"
        icon="search"
        iconSize={16}
        text="Search"
        onClick={e => navigate(e, urls.search)}
      />
      <Filler />
      <NavLangBtn
        disabled={pathname.includes('article')}
        onClick={() => setLanguage('gb')}
        inverted
        isActive={language === 'gb'}
        text="GB"
      />
      <NavLangBtn
        disabled={pathname.includes('article')}
        onClick={() => setLanguage('us')}
        inverted
        isActive={language === 'us'}
        text="US"
      />
    </>
  );
}

export default DesktopMenu;
