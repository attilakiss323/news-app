import React from 'react';
import styled from 'styled-components';

import Icon from '../icon/Icon';

const BtnIcon = styled(Icon)`
  margin-right: 0.4rem;
  fill: ${({ inverted, theme }) => (inverted ? theme.white : theme.black)};
`;

const BtnText = styled.span`
  vertical-align: text-top;
`;

const Btn = styled.div`
  width: 8rem;
  text-align: center;
  margin: 0 1rem;
  padding: 0.5rem;
  color: ${({ inverted, theme }) => (inverted ? theme.white : theme.black)};
  background-color: ${({ theme, backgroundColor }) => theme[backgroundColor]};
`;

function Button(props) {
  const { text, icon, iconSize, backgroundColor, inverted = false } = props;

  return (
    <Btn backgroundColor={backgroundColor} inverted={inverted} {...props}>
      {icon && (
        <BtnIcon inverted={inverted ? 1 : 0} kind={icon} size={iconSize} />
      )}
      <BtnText>{text}</BtnText>
    </Btn>
  );
}

export default Button;
