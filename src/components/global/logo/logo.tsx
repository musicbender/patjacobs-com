import React from 'react';
import theme from '../../../styles/theme';
import { LogoWrapper } from './styles';

enum EColors {
    'white',
    'black',
    'yellow',
    'purple',
    'orange',
    'aqua',
}

interface IProps {
    color: keyof typeof EColors;
    className?: string;
}

const Logo = ({ color, className }: IProps) => {
    const colors: any = {
        white: '#fff',
        black: 'rgb(30,30,30)',
        ...theme.corePalette,
    };

    const colorValue: string = colors[color];

    return (
        <LogoWrapper
            width="100%"
            height="100%"
            viewBox="0 0 21 21"
            color={colorValue}
            className={className}
        >
            <g>
                <path d="M19.5,1.5l0,18l-11.938,0l-0.062,-6" />
                <path d="M1.5,19.5l0,-18l12,0l0,6" />
            </g>
        </LogoWrapper>
    );
};

Logo.defaultProps = {
    color: 'white',
};

export default Logo;
