import React from 'react';
import Logo from '../logo';
import { Modes } from '../../../../types/state';
import { ToolBarWrapper, InnerWrapper, Hamburger, HamburbarBar } from './styles';

interface Props {
    pageLoaded?: boolean;
    mode?: Modes;
    menuOpen?: boolean;
    handleMode?: any;
    handleMenu?: any;
}

const Toolbar = ({ pageLoaded, mode, menuOpen, handleMode, handleMenu }: Props) => {
    const renderHamburger = () => {
        return (
            <Hamburger>
                <HamburbarBar barNum={0} />
                <HamburbarBar barNum={1} />
            </Hamburger>
        );
    };

    return (
        <ToolBarWrapper>
            <InnerWrapper>
                <Logo color="white" />
            </InnerWrapper>
        </ToolBarWrapper>
    );
};

Toolbar.defaultProps = {
    mode: 'dark',
    menuOpen: false,
};

export default Toolbar;
