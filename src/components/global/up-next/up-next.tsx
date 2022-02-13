import { FC, useState } from 'react';
import { UpNextWrapper, NextText, LinkWrapper, StyledLink, Line } from './styles';
const tlConfig = require('@constants/transition-link.json');

type Props = {
  label?: string;
  path?: string;
  className?: string;
};

const upNext: FC<Props> = ({ label = 'Next Page', path = '/', className }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <UpNextWrapper className={className}>
      <NextText>NEXT:</NextText>
      <LinkWrapper>
        <StyledLink
          {...tlConfig.main}
          href={path}
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
