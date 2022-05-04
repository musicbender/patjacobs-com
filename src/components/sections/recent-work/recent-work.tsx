import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Particles from './particles';
import Heading from '@components/global/heading';
import WorkItem from '@components/global/work-item/work-item';
import settings from '@configs/settings.json';
import { RECENT_WORK_TOP_SET } from '@constants/global';
import { usePrevious } from '@hooks';
import { useGetRecentWorkQuery, Project } from '@types';
import { RecentWorkWrapper, ParentWrapper, WorkItemsWrapper } from './styles';

const RecentWork: FC = () => {
  const { data } = useGetRecentWorkQuery();
  const defaultWorkStops: boolean[] = data.projects.map(() => false);
  const [workStops, setWorkStops] = useState<boolean[]>(defaultWorkStops);
  const recentWorkTop = useSelector((state: Storage) => state.home.recentWorkTop);
  const isMobile = useSelector((state: Storage) => state.global.isMobile);
  const scrollCurtainActive = useSelector((state: Storage) => state.global.scrollCurtainActive);
  const prevState = usePrevious({ scrollCurtainActive });
  const dispatch = useDispatch();

  const setTop = (didResize = false, input?: any): void => {
    let value = input;

    if (value == null) {
      const section = document.getElementById('recent-work-section');
      const rect = section.getBoundingClientRect();
      value = rect.top;
    }

    dispatch({ type: RECENT_WORK_TOP_SET, payload: { value, didResize } });
  };

  const handleResize = (): void => {
    setTop(true);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!prevState?.scrollCurtainActive && scrollCurtainActive) {
      setWorkStops(defaultWorkStops);
    }
  }, [scrollCurtainActive]);

  const handleWorkStops = (index: number, stopped?: boolean) => (): void => {
    const updatedArr: boolean[] = [...workStops];
    updatedArr[index] = stopped !== null ? stopped : !workStops[index];
    setWorkStops(updatedArr);
  };

  return (
    <RecentWorkWrapper id="recent-work-section">
      <Heading text={data.recentWorkSection.heading} />
      <ParentWrapper>
        <WorkItemsWrapper>
          {data.projects.map((item: Project, i: number) => {
            return (
              i < settings.workItemsAmount && (
                <WorkItem
                  item={item}
                  index={i}
                  isStopped={workStops[i]}
                  handleWorkStops={handleWorkStops}
                  baseTop={recentWorkTop}
                  isMobile={isMobile}
                  key={item.title + `${i * 7}`}
                />
              )
            );
          })}
        </WorkItemsWrapper>
      </ParentWrapper>
      <Particles isMobile={isMobile} />
    </RecentWorkWrapper>
  );
};

export default RecentWork;
