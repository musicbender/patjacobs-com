import React from 'react';
import Plx from 'react-plx';
import DotGrid from '../../particles/dot-grid';
import Triangle from '../../particles/triangle';
import dotGrids from './dots';
import { hasWindow } from '../../../util/util';
import { RecentWorkParticle } from './styles';
import { Query } from '../../../../types';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
    isMobile?: boolean;
}

const Particles = ({ isMobile = false }: Props) => {
    const { configs }: Query = useStaticQuery(graphql`
        query {
            configs {
                recentWork {
                    particleData {
                        name
                        type
                        color
                        size
                        plx
                    }
                }
                settings {
                    gridLines
                }
            }
        }
    `);

    const getPlxData = values => [
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

    const getParticle = p => {
        const { name, type, ...params } = p;
        switch (type) {
            case 'triangle':
                return <Triangle {...params} />;
            case 'dots':
                return <DotGrid sequence={dotGrids[name]} />;
        }
    };

    return (
        <>
            {configs.recentWork.particleData.map((p, i) => {
                return (
                    <RecentWorkParticle
                        particleID={p.name}
                        gridLines={configs.settings.gridLines}
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
