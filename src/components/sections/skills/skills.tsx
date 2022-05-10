import React, { FC, useEffect, useState } from 'react';
import Heading from '@components/global/heading';
import { setSkillsTop } from '@actions/home';
import hideArray from './hide.json';
import settings from '@configs/settings.json';
import { SkillsWrapper, DotWrapper, StyledDotFormation } from './styles';
import { Skill, useGetSkillsQuery } from '@types';
import { compileSkillsData } from '@util/data';
import { useDispatch } from '@store';
import { usePrevious, useThrottleCallback } from '@hooks';

type Props = {
  atBottom?: boolean;
};

const SkillsSection: FC<Props> = ({ atBottom }) => {
  const GRID_ID = 'skills-dot-grid';
  const DEFAULT_COLOR = 'rgb(249, 141, 81)';

  const { data } = useGetSkillsQuery();
  const dispatch = useDispatch();
  const [color, setColor] = useState<string>(DEFAULT_COLOR);
  const prevState = usePrevious({ atBottom });

  const setTop = (didResize = false, input?: number): void => {
    let value = input;

    if (value == null) {
      const elm: HTMLElement = document.getElementById(GRID_ID);
      const rect: ClientRect = elm.getBoundingClientRect();
      value = rect.top - rect.height / 2 + 490;
    }

    dispatch(setSkillsTop({ value, didResize }));
  };

  const handleResize = useThrottleCallback((): void => {
    setTop(true);
  }, 50);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setTop(false, settings.skillsTop);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (prevState?.atBottom && !atBottom) {
      setColor(DEFAULT_COLOR);
    }
  }, [atBottom]);

  return (
    <SkillsWrapper>
      <Heading text="tech_i_know" />
      <DotWrapper id={GRID_ID}>
        <StyledDotFormation
          breakpoint="desktop"
          columns={15}
          active={atBottom}
          hideArray={hideArray}
          color={color}
          textConfig={compileSkillsData('desktop', data.skills as Skill[])}
        />
        <StyledDotFormation
          breakpoint="mobile"
          columns={8}
          rows={20}
          active={true}
          color={color}
          textConfig={compileSkillsData('mobile', data.skills as Skill[])}
        />
      </DotWrapper>
    </SkillsWrapper>
  );
};

export default SkillsSection;
