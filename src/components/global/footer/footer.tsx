import React from 'react';
import Triangle from '../../particles/triangle';
import { FooterWrapper, StyledSocial, TriangleWrapper } from './styles';

interface Props {
  handleToTop(e: any): any;
}

const Footer = ({ handleToTop }: Props) => {
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
