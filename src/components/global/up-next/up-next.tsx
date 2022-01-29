import React, { useState } from 'react';
import { UpNextWrapper, NextText, LinkWrapper, StyledLink, Line } from './styles';
const tlConfig = require('../../../constants/transition-link.json');

interface Props {
  label?: string;
  path?: string;
  className?: string;
}

const upNext = ({ label = 'Next Page', path = '/', className }: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <UpNextWrapper className={className}>
      <NextText>NEXT:</NextText>
      <LinkWrapper>
        <StyledLink
          {...tlConfig.main}
          to={path}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {label}
        </StyledLink>
        <Line active={hovered} />
      </LinkWrapper>
    </UpNextWrapper>
  );
};

export default upNext;
