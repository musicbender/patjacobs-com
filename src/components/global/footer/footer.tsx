import React, { FC } from 'react';
import Triangle from '@components/particles/triangle';
import { FooterWrapper, StyledSocial, TriangleWrapper } from './styles';

type Props = {
  handleToTop(e: any): any;
};

const Footer: FC<Props> = ({ handleToTop }) => {
  return (
    <FooterWrapper>
      <StyledSocial />
      <TriangleWrapper onClick={handleToTop}>
        <Triangle size="tiny" />
      </TriangleWrapper>
    </FooterWrapper>
  );
};

export default Footer;
