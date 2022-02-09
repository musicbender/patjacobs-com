import { FC } from 'react';
import { ScrollLineWrapper, InnerWrapper, ScrollLineRevealBlock, Line, HelperText } from './styles';

type Props = {
  active?: boolean;
  atTop?: boolean;
};

const ScrollLine: FC<Props> = ({ active = false, atTop = true }) => {
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
