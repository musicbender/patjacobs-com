import React, { useState, useEffect } from 'react';
import { ColorDotsRow, DesktopWrapper, MobileWrapper, Dot } from './styles';
import { CoreColors } from '../../../../types';
import { requestTimeout } from '../../../util/shims';

interface Props {
    forMobile?: boolean;
    splashOpen: boolean;
}

const ColorDots = ({ forMobile = false }: Props) => {
    const [mounted, setMounted] = useState(false);
    const [entering, setEntering] = useState(false);
    const [finishedEntering, setFinishedEntering] = useState(false);
    const dots: CoreColors[] = ['yellow', 'purple', 'orange', 'aqua'];

    useEffect(() => {
        if (!entering && !mounted) {
            setMounted(true);

            requestTimeout(() => {
                setEntering(true);
            }, 4000);

            requestTimeout(() => {
                setFinishedEntering(true);
            }, 7000);
        }
    }, []);

    const mapDots = () => {
        return dots.map((dot: CoreColors, i: number) => (
            <Dot
                color={dot}
                entering={entering}
                finished={finishedEntering}
                forMobile={forMobile}
                key={dot + i + `${forMobile}` + 5}
            />
        ));
    };

    return (
        <ColorDotsRow>
            {!forMobile && <DesktopWrapper>{mapDots()}</DesktopWrapper>}
            {forMobile && <MobileWrapper>{mapDots()}</MobileWrapper>}
        </ColorDotsRow>
    );
};

export default ColorDots;
