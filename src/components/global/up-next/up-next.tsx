import Link from 'next/link';
import { FC, useState } from 'react';
import { UpNextWrapper, NextText, LinkWrapper, StyledLink, Line } from './styles';

type Props = {
  label?: string;
  path?: string;
  className?: string;
};

const UpNext: FC<Props> = ({ label = 'Next Page', path = '/', className }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <UpNextWrapper className={className}>
      <NextText>NEXT:</NextText>
      <LinkWrapper>
        <Link href={path} passHref>
          <StyledLink onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {label}
          </StyledLink>
        </Link>
        <Line active={hovered} />
      </LinkWrapper>
    </UpNextWrapper>
  );
};

export default UpNext;
