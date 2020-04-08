import React from 'react';
import Logo from '../logo';
import { ToolBarWrapper, InnerWrapper } from './styles';

// interface Props {
//     pageLoaded?: boolean;
//     mode?: Modes;
//     menuOpen?: boolean;
//     handleMode?: any;
//     handleMenu?: any;
// }

const Toolbar = () => {
    // const renderHamburger = () => {
    //     return (
    //         <Hamburger>
    //             <HamburbarBar barNum={0} />
    //             <HamburbarBar barNum={1} />
    //         </Hamburger>
    //     );
    // };

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
