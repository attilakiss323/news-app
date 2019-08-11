import React from 'react';

import styled from 'styled-components';

const StyledHeading = styled.span`
  font-family: ${({ theme, color }) => theme.font.primary};
  font-weight: ${({
    theme: {
      font: { weight }
    },
    bold
  }) => (bold ? weight.bold : weight.regular)};
  font-size: ${({ theme, type }) => `${theme.font.heading[type].fontSize}rem`};
  line-height: ${({ theme, type }) => theme.font.heading[type].lineHeight};
  color: ${({ theme, color }) => theme.color[color]};
  margin: 0;
`;

function Heading(props) {
  const { type, bold, color } = props;
  return <StyledHeading type={type} bold={bold} color={color} {...props} />;
}

export default Heading;
