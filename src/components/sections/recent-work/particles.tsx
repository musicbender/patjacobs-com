import React from 'react';
import Plx from 'react-plx';
import Triangle from '@components/particles/triangle';
import config from '@configs/recent-work.json';
import settings from '@configs/settings.json';
import { hasWindow } from '@util/util';
import { RecentWorkParticle } from './styles';

type Props = {
  isMobile?: boolean;
};

const Particles = ({ isMobile = false }: Props) => {
  const getPlxData = (values) => [
    {
      start: 'self',
      duration: '100vh',
      properties: [
        {
          startValue: values[0],
          endValue: values[1],
          unit: 'em',
          property: 'translateY',
        },
      ],
    },
  ];

  const getParticle = (p) => {
    const { name, type, ...params } = p;
    switch (type) {
      case 'triangle':
        return <Triangle {...params} />;
    }
  };

  return (
    <>
      {config.particleData.map((p, i) => {
        return (
          <RecentWorkParticle
            particleID={p.name}
            gridLines={settings.gridLines}
            key={'work-particle' + i + p.name}
          >
            <Plx parallaxData={getPlxData(p.plx)} disabled={!hasWindow() || isMobile}>
              {getParticle(p)}
            </Plx>
          </RecentWorkParticle>
        );
      })}
    </>
  );
};

export default Particles;
