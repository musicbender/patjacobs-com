import React, { useState } from 'react';
import { UpNextWrapper, NextText, LinkWrapper, StyledLink, Line } from './styles';

interface Props {
    label?: string;
    path?: string;
}

const upNext = ({ label = 'Next Page', path = '/' }: Props) => {
    const [hovered, setHovered] = useState(false);
    return (
        <UpNextWrapper>
            <NextText>NEXT:</NextText>
            <LinkWrapper>
                <StyledLink
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
