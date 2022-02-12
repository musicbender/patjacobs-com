import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Plx from 'react-plx';
import ColorDotRow from '@components/particles/color-dot-row';
import Triangle from '@components/particles/triangle';
import { hasWindow } from '@util/util';
import { curtainInClose } from '@util/animation';
import config from '@configs/header.json';
import metaConfig from '@configs/meta.json';
import settings from '@configs/settings.json';
import { TriangleSizes, ParticleColors, Store } from '@types';
import {
  HomeHeader,
  TitleWrapper,
  Title,
  SubTitle,
  TriangleParallax,
  StyledLilSquare,
} from './styles';

const Header: FC = () => {
  const [active, setActive] = useState(false);
  const splashOpen = useSelector((state: Store) => state.global.splashOpen);
  const curtainState = useSelector((state: Store) => state.global.curtainState);
  const isMobile = useSelector((state: Store) => state.global.isMobile);

  useEffect(() => {
    if (!active && curtainInClose(curtainState)) {
      setActive(true);
    }
  }, [active, curtainState]);

  const getPlxData = ({ plx, start, end }) => {
    return [
      {
        start,
        end,
        properties: [
          {
            startValue: plx[0],
            endValue: plx[1],
            unit: '%',
            property: 'translateY',
          },
        ],
      },
    ];
  };

  return (
    <HomeHeader splashOpen={splashOpen}>
      <ColorDotRow active={active} />
      <StyledLilSquare />
      {config.triangles.map((tri: any, i: number) => (
        <TriangleParallax
          color={tri.color}
          size={tri.size}
          id={tri.id}
          show={active}
          gridLines={settings.gridLines}
          key={i + tri.id}
        >
          <Plx disabled={!hasWindow() || isMobile} parallaxData={getPlxData(tri)}>
            <Triangle
              color={tri.color as keyof typeof ParticleColors}
              size={tri.size as keyof typeof TriangleSizes}
            />
          </Plx>
        </TriangleParallax>
      ))}
      <TitleWrapper>
        <Title show={active}>{metaConfig.name}</Title>
        <SubTitle show={active}>{metaConfig.role}</SubTitle>
        <ColorDotRow active={active} forMobile />
      </TitleWrapper>
    </HomeHeader>
  );
};

export default Header;
