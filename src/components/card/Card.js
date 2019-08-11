import React, { useState } from 'react';
import styled from 'styled-components';

import Icon from '../icon/Icon';
import Tooltip from '../tooltip/Tooltip';

const StyledCard = styled.div`
  position: relative;
  flex-direction: column;
  height: 27rem;
  width: 27rem;
  padding: 1rem;
  margin: 1rem;
  border: ${({ theme }) => `1px solid ${theme.color.grey3}`};
`;

const Title = styled.div`
  display: block;
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  height: 3rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.div`
  font-family: ${({ theme }) => theme.font.primary};
  margin-top: 0.5rem;
  display: block;
`;

const Img = styled.img`
  display: block;
  height: 16rem;
  width: 100%;
`;

const More = styled.div`
  display: block;
  text-align: right;
  margin-top: 1rem;
  align-self: flex-end;
  position: absolute;
  bottom: 1rem;
  right: 2rem;

  > span {
    vertical-align: top;
  }
`;

function handleLongTitle(title) {
  return title.length > 95 ? <span>{title.slice(0, 95)}&hellip;</span> : title;
}

function Card({ title, img, description }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <StyledCard>
      {showTooltip && <Tooltip>{title}</Tooltip>}
      <Title
        onMouseOver={title.length > 95 ? () => setShowTooltip(true) : () => {}}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {handleLongTitle(title, setShowTooltip)}
      </Title>
      <Img src={img} />
      <Description>{description}</Description>
      <More>
        <span>More</span>
        <Icon size={16} kind="chevron-right" />
      </More>
    </StyledCard>
  );
}

export default Card;
