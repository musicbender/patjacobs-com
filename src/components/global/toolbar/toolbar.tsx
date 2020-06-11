import React from 'react';
import Logo from '../logo';
import { ToolBarWrapper, InnerWrapper, StyledLink } from './styles';
const tlConfig = require('../../../constants/transition-link.json');

interface Props {
    handleToTop(e?: any): any;
    location?: {
        pathname?: string;
    };
}
const Toolbar = ({ location, handleToTop }: Props) => {
    const handleLogoClick = (): void => {
        if (location.pathname !== '/') return;
        if (window.scrollY < 100) return;
        handleToTop();
    };

    return (
        <ToolBarWrapper>
            <InnerWrapper>
                <StyledLink {...tlConfig.main} to="/" onClick={handleLogoClick}>
                    <Logo color="white" />
                </StyledLink>
            </InnerWrapper>
        </ToolBarWrapper>
    );
};

export default Toolbar;
