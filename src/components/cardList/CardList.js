import React from 'react';
import styled from 'styled-components';

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function CardList(props) {
  return <StyledCardList {...props} />;
}
