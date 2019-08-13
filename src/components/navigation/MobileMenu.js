import React, { useState } from 'react';
import styled from 'styled-components';

import Icon from '../icon/Icon';
import { theme } from '../../constants';
import Button from '../button/Button';
import { urls } from '../../constants';

const Hamburger = styled.div`
  ext-align: center;
  width: 3em;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.grey4};
  text-transform: uppercase;
  line-height: 2.7;
  text-align: center;
`;

const NavLangSelector = styled.div`
  text-align: center;
  width: 4rem;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.grey4};
  text-transform: uppercase;
  line-height: 2.7;

  > svg {
    margin-left: 0.2rem;
  }
`;

const MobileIcon = styled(Icon)`
  vertical-align: middle;
`;

const NavLangDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 2.7rem;
  right: 0;
  height: 6rem;
`;

const NavDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 2.7rem;
  left: 0;
  height: 9rem;
`;

const NavLangBtn = styled(Button)`
  border-radius: 0;
  width: 3rem;
  margin: 0;
`;

const NavBtn = styled(Button)`
  margin: 0;
  border-radius: 0;
`;

const Filler = styled.div`
  flex-grow: 1;
`;

function MobileMenu({ language, setLanguage, navigate, pathname }) {
  const [isMenuOpen, toggleMenu] = useState(false);
  const [isLangMenuOpen, toggleLangMenu] = useState(false);

  const handleNavigate = (e, route) => {
    toggleMenu(false);
    navigate(e, route);
  };

  const handleSetLanguage = lang => {
    setLanguage(lang);
    toggleLangMenu(false);
  };

  return (
    <>
      <Hamburger onClick={() => toggleMenu(!isMenuOpen)}>
        <MobileIcon color={theme.color.white} kind="menu" size={24} />
      </Hamburger>
      {isMenuOpen && (
        <NavDropdown>
          <NavBtn
            inverted
            isActive={pathname === '/'}
            link="/"
            icon="home"
            iconSize={16}
            text="Top News"
            onClick={e => handleNavigate(e, urls.news)}
          />
          <NavBtn
            inverted
            isActive={pathname === '/categories'}
            link="/categories"
            icon="categories"
            iconSize={16}
            text="Categories"
            onClick={e => handleNavigate(e, urls.categories)}
          />
          <NavBtn
            inverted
            isActive={pathname === '/search'}
            link="/search"
            icon="search"
            iconSize={16}
            text="Search"
            onClick={e => handleNavigate(e, urls.search)}
          />
        </NavDropdown>
      )}
      <Filler />
      <NavLangSelector onClick={() => toggleLangMenu(!isLangMenuOpen)}>
        {language}
        <MobileIcon color={theme.color.white} kind="chevron-bottom" size={12} />
      </NavLangSelector>
      {isLangMenuOpen && (
        <NavLangDropdown>
          <NavLangBtn
            onClick={() => handleSetLanguage('gb')}
            inverted
            isActive={language === 'gb'}
            text="GB"
          />
          <NavLangBtn
            onClick={() => handleSetLanguage('us')}
            inverted
            isActive={language === 'us'}
            text="US"
          />
        </NavLangDropdown>
      )}
    </>
  );
}

export default MobileMenu;
