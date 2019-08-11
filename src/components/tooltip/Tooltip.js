import React from 'react';
import styled from 'styled-components';

const StyledTooltip = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.color.grey4};
  border: 4x solid ${({ theme }) => theme.color.grey4};
  color: ${({ theme }) => theme.color.white};
  padding: 0.5rem;
  border-radius: 0.5rem;
  opacity: 0.9;
  margin-top: -4rem;
  width: 25rem;

  &:after,
  &:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: ${({ theme }) => theme.color.grey4};
    border-width: 6px;
    margin-left: -6px;
  }
  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: ${({ theme }) => theme.color.grey4};
    border-width: 10px;
    margin-left: -10px;
  }
`;

function Tooltip(props) {
  return <StyledTooltip {...props} />;
}

export default Tooltip;
