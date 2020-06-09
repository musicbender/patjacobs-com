import React, { useState } from 'react';
import { UpNextWrapper, NextText, LinkWrapper, StyledLink, Line } from './styles';
import { hasWindow } from '../../../util/util';
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
                    entry={{
                        ...tlConfig.main.entry,
                        state: {
                            enabled: true,
                            from: hasWindow() ? window.location.pathname : null,
                        },
                    }}
                    exit={tlConfig.main.exit}
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
