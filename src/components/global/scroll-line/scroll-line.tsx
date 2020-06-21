import React from 'react';
import { ScrollLineWrapper, InnerWrapper, ScrollLineRevealBlock, Line, HelperText } from './styles';

interface Props {
    active?: boolean;
    atTop?: boolean;
}

const ScrollLine = ({ active = false, atTop = true }: Props) => {
    return (
        <ScrollLineWrapper>
            <HelperText active={active}>{atTop ? '[ do scoll ]' : '[ good job ]'}</HelperText>
            <InnerWrapper active={active}>
                <ScrollLineRevealBlock contentType="line" active={active} endGrid={3}>
                    <Line />
                </ScrollLineRevealBlock>
            </InnerWrapper>
        </ScrollLineWrapper>
    );
};

export default ScrollLine;
