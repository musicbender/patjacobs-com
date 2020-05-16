import React from 'react';
import Logo from '../logo';
import { ToolBarWrapper, InnerWrapper } from './styles';

const Toolbar = () => {
    return (
        <ToolBarWrapper>
            <InnerWrapper>
                <Logo color="white" />
            </InnerWrapper>
        </ToolBarWrapper>
    );
};

export default Toolbar;
