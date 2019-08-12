import React from 'react';
import styled from 'styled-components';

import Heading from '../heading/Heading';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PageHeading = styled(Heading)`
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
  margin-left: ${({ left }) => left || '7rem'};
  margin-bottom: 2rem;
  max-width: 60%;

  @media (max-width: 1200px) {
    margin-left: 6rem;
  }
`;

function Page({ heading, headingType, left, children }) {
  return (
    <StyledPage>
      <PageHeading left={left} type={headingType}>
        {heading}
      </PageHeading>
      {children}
    </StyledPage>
  );
}

export default Page;
