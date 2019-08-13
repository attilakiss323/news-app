import React, { useContext } from 'react';
import getProp from 'crocks/Maybe/getProp';
import styled from 'styled-components';

import { NewsStoreContext } from '../../common';

const StyledError = styled.div`
  margin: 0 auto;
  color: ${({ theme }) => theme.color.red};
  font-weight: ${({
    theme: {
      font: { weight }
    }
  }) => weight.bold};
`;

function ErrorNotification() {
  const {
    state: { error }
  } = useContext(NewsStoreContext);

  if (!error.option(false)) {
    return null;
  }

  return (
    <StyledError>
      Error: {error.chain(getProp('status')).option('500')}. :( We ran into a
      problem while trying to get the latest news...{' '}
    </StyledError>
  );
}

export default ErrorNotification;
