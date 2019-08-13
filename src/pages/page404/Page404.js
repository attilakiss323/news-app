import React from 'react';
import styled from 'styled-components';

import { Heading } from '../../components';

const Styled404 = styled.div`
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Circle404 = styled.div`
  margin: 0 auto;
  border-radius: 50%;
  color: ${({ theme: { color } }) => color.white};
  background-color: ${({ theme: { color } }) => color.grey4};
  text-align: center;
  width: 7rem;
  height: 7rem;
  line-height: 7;
`;

const Text404 = styled.div`
  text-transform: uppercase;
  text-align: center;
  margin-top: 1rem;
`;

function Page404() {
  return (
    <Styled404>
      <Circle404>
        <Heading type="h1">404</Heading>
      </Circle404>
      <Text404>Sorry, page not found</Text404>
    </Styled404>
  );
}

export default Page404;
