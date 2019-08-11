import React from 'react';
import styled from 'styled-components';

import Button from '../button/Button';

const StickyHeader = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${({ theme }) => theme.grey3};
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

function Navigation() {
  return (
    <StickyHeader>
      <NavBtn
        inverted
        backgroundColor="grey4"
        icon="home"
        iconSize={16}
        text="Top News"
      />
      <NavBtn inverted icon="categories" iconSize={16} text="Categories" />
      <NavBtn inverted icon="search" iconSize={16} text="Search" />
      <Filler />
      <NavLangBtn inverted backgroundColor="grey4" text="GB" />
      <NavLangBtn inverted text="US" />
    </StickyHeader>
  );
}

export default Navigation;
