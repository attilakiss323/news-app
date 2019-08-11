import React from 'react';
import styled from 'styled-components';

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default function CardList(props) {
  return <StyledCardList {...props} />;
}
