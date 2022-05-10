import React, { FC } from 'react';
import Plx from 'react-plx';
import config from '@configs/recent-work.json';
import {
  WorkItemWrapper,
  ImageOutterWrapper,
  InfoOutterWrapper,
  StyledWorkItemInfo,
  InfoParallaxInner,
  InfoInnerWrapper,
  ImageParallaxInner,
  ImageInnerWrapper,
  WorkImage,
  ImageFilter,
  ImageCover,
} from './styles';
import { useMounted } from 'src/hooks/use-mounted';

type Props = {
  item: any;
  index: number;
  isStopped?: boolean;
  handleWorkStops?: (...args: any) => any;
  isMobile?: boolean;
  baseTop?: number;
};

const WorkItem: FC<Props> = ({
  item,
  index = 0,
  isStopped = false,
  handleWorkStops,
  baseTop,
  isMobile = false,
}) => {
  const baseEnd: number = isMobile ? baseTop - 200 : baseTop;
  const accumulator: number = isMobile ? 250 : 535;
  const { isMounted, inClient } = useMounted();

  const getItemUrl = () => {
    switch (item.linkType) {
      case 'External':
        return item.externalUrl;
      case 'Case_Study':
        return `/case-study/${item.projectId}`;
    }
  };

  const getPlxData = (seg) => [
    {
      start: 'self',
      end: baseEnd + accumulator * index,
      startOffset: '-100px',
      properties: [
        {
          startValue: seg.startValue,
          endValue: 0,
          unit: 'em',
          property: isMobile ? 'translateX' : 'translateY',
        },
      ],
    },
  ];

  const renderImageSection = () => {
    return config.workItemPlx.image.map((seg, i: number) => (
      <Plx
        parallaxData={getPlxData(seg)}
        disabled={!isMounted}
        className={`parallax index-${i}`}
        key={`${i}` + item.id + 'image' + JSON.stringify(seg)}
      >
        <ImageParallaxInner index={i}>
          <ImageInnerWrapper>
            <WorkImage index={i} bgImage={`url(${item.imageDesktop.url})`} />
            <ImageFilter />
            <ImageCover isStopped={isStopped} />
          </ImageInnerWrapper>
        </ImageParallaxInner>
      </Plx>
    ));
  };

  const renderInfoSection = () => {
    return config.workItemPlx.info.map((seg, i: number) => {
      const plxSeg = isMobile ? config.workItemPlx.mobileInfo[i] : seg;
      return (
        <Plx
          parallaxData={getPlxData(plxSeg)}
          onPlxStart={inClient ? handleWorkStops(index, false) : null}
          onPlxEnd={inClient ? handleWorkStops(index, true) : null}
          disabled={!isMounted}
          className={`parallax index-${i}`}
          key={`${i}` + item.id + 'info' + JSON.stringify(seg)}
        >
          <InfoParallaxInner>
            <InfoInnerWrapper>
              <StyledWorkItemInfo
                title={item.title}
                description={item.description}
                buttonUrl={getItemUrl()}
                linkType={item.listType}
                isStopped={isStopped}
                isParallax
              />
            </InfoInnerWrapper>
          </InfoParallaxInner>
        </Plx>
      );
    });
  };

  return (
    <WorkItemWrapper isStopped={isStopped}>
      <ImageOutterWrapper isStopped={isStopped}>
        {!isMobile && renderImageSection()}
      </ImageOutterWrapper>
      <InfoOutterWrapper isStopped={isStopped}>
        {renderInfoSection()}
        <StyledWorkItemInfo
          title={item.title}
          description={item.description}
          buttonUrl={getItemUrl()}
          linkType={item.listType}
          isStopped={isStopped}
        />
      </InfoOutterWrapper>
    </WorkItemWrapper>
  );
};

export default WorkItem;
