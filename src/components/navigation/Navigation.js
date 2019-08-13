import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import Button from '../button/Button';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { NewsStoreContext, dimensionsHOC } from '../../common';

const StickyHeader = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${({ theme }) => theme.color.grey3};
  z-index: 2;
`;

function Navigation({ history, width }) {
  const {
    state: { language },
    actions
  } = useContext(NewsStoreContext);

  const handleNavigate = (e, route) => {
    e.preventDefault();
    history.push(route);
  };

  return (
    <StickyHeader>
      {width > 640 ? (
        <DesktopMenu
          navigate={handleNavigate}
          pathname={history.location.pathname}
          language={language}
          setLanguage={actions.setLanguage}
        />
      ) : (
        <MobileMenu
          navigate={handleNavigate}
          pathname={history.location.pathname}
          language={language}
          setLanguage={actions.setLanguage}
        />
      )}
    </StickyHeader>
  );
}

export default dimensionsHOC()(withRouter(Navigation));
