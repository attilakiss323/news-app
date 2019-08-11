import React from 'react';
import styled from 'styled-components';

import Icon from '../icon/Icon';

const BtnIcon = styled(Icon)`
  margin-right: 0.4rem;
  fill: ${({ inverted, theme: { color } }) =>
    inverted ? color.white : color.black};
`;

const BtnText = styled.span`
  vertical-align: text-top;
`;

const BtnLink = styled.a`
  vertical-align: text-top;
  text-decoration: none;

  &:visited {
    color: ${({ theme }) => theme.color.white};
  }
`;

const Btn = styled.div`
  cursor: pointer;
  width: 8rem;
  text-align: center;
  margin: 0 1rem;
  padding: 0.8rem 0.5rem;
  color: ${({ inverted, theme: { color } }) =>
    inverted ? color.white : color.black};
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
  border: ${({ theme, inverted }) =>
    inverted ? 'none' : `1px solid ${theme.color.grey3}`};
  border-radius: 5%;
`;

function setColor(isActive, inverted) {
  if (isActive && inverted) {
    return 'grey4';
  } else if (isActive && !inverted) {
    return 'grey1';
  } else if (!isActive && inverted) {
    return 'grey3';
  } else if (!isActive && !inverted) {
    return 'white';
  }
}

function Button(props) {
  const {
    text,
    icon,
    iconSize,
    link,
    isActive = false,
    inverted = false
  } = props;

  return (
    <Btn
      backgroundColor={setColor(isActive, inverted)}
      inverted={inverted}
      {...props}
    >
      {icon && (
        <BtnIcon inverted={inverted ? 1 : 0} kind={icon} size={iconSize} />
      )}
      {link ? <BtnLink href={link}>{text}</BtnLink> : <BtnText>{text}</BtnText>}
    </Btn>
  );
}

export default Button;
