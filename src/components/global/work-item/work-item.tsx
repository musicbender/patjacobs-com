import React from 'react';
import Plx from 'react-plx';
import { hasWindow } from '../../../util/util';
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
import {
  ConfigsRecentWorkWorkItemPlxImage,
  ConfigsRecentWorkWorkItemPlxInfo,
} from '../../../types';

interface Props {
  item: any;
  index: number;
  isStopped?: boolean;
  handleWorkStops?: (...args: any) => any;
  isMobile?: boolean;
  baseTop?: number;
}

const WorkItem = ({
  item,
  index = 0,
  isStopped = false,
  handleWorkStops,
  baseTop,
  isMobile = false,
}: Props) => {
  const baseEnd: number = isMobile ? baseTop - 200 : baseTop;
  const accumulator: number = isMobile ? 250 : 535;
  const onClient: boolean = hasWindow();

  const getItemUrl = () => {
    switch (item.linkType) {
      case 'External':
        return item.externalUrl;
      case 'Case_Study':
        return `/case-studies/${item.projectId}`;
    }
  };

  const getPlxData = (seg: ConfigsRecentWorkWorkItemPlxImage) => [
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
    return configs.recentWork.workItemPlx.image.map(
      (seg: ConfigsRecentWorkWorkItemPlxImage, i: number) => (
        <Plx
          parallaxData={getPlxData(seg)}
          disabled={!onClient}
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
      ),
    );
  };

  const renderInfoSection = () => {
    return configs.recentWork.workItemPlx.info.map(
      (seg: ConfigsRecentWorkWorkItemPlxInfo, i: number) => {
        const plxSeg = isMobile ? configs.recentWork.workItemPlx.mobileInfo[i] : seg;
        return (
          <Plx
            parallaxData={getPlxData(plxSeg)}
            onPlxStart={onClient ? handleWorkStops(index, false) : null}
            onPlxEnd={onClient ? handleWorkStops(index, true) : null}
            disabled={!onClient}
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
                  isMobile={isMobile}
                  isParallax
                />
              </InfoInnerWrapper>
            </InfoParallaxInner>
          </Plx>
        );
      },
    );
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
