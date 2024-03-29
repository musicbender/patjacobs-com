import React, { useState, useEffect } from 'react';
import { ColorDotsRow, DesktopWrapper, MobileWrapper, Dot } from './styles';
import { CoreColors } from '@types';
import { requestTimeout } from '@util/shims';

type Props = {
  forMobile?: boolean;
  active?: boolean;
};

const ColorDots = ({ forMobile = false, active = false }: Props) => {
  const [entering, setEntering] = useState(false);
  const [finishedEntering, setFinishedEntering] = useState(false);
  const dots: CoreColors[] = ['yellow', 'purple', 'orange', 'aqua'];

  useEffect(() => {
    if (active && !entering) {
      requestTimeout(() => {
        setEntering(true);
      }, 1000);

      requestTimeout(() => {
        setFinishedEntering(true);
      }, 14000);
    }
  }, [active, entering]);

  useEffect(() => {
    return () => {
      setEntering(false);
      setFinishedEntering(false);
    };
  }, []);

  const mapDots = (): JSX.Element[] => {
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
