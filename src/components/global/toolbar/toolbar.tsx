import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import Logo from '@components/global/logo';
import { ToolBarWrapper, InnerWrapper, LogoWrapper } from './styles';

type Props = {
  handleToTop(e?: any): any;
};

const Toolbar: FC<Props> = ({ handleToTop }) => {
  const router = useRouter();

  const handleLogoClick = (): void => {
    if (router.pathname !== '/') return;
    if (window.scrollY < 100) return;
    handleToTop();
  };

  return (
    <ToolBarWrapper>
      <InnerWrapper>
        <Link href="/" passHref scroll={false}>
          <LogoWrapper onClick={handleLogoClick}>
            <Logo color="white" />
          </LogoWrapper>
        </Link>
      </InnerWrapper>
    </ToolBarWrapper>
  );
};

export default Toolbar;
