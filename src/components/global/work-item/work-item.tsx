import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Plx from 'react-plx';
import { hasWindow } from '../../../util/util';
import { WorkItemWrapper, ImageOutterWrapper, InfoOutterWrapper, StyledWorkItemInfo, InfoParallaxInner, InfoInnerWrapper, ImageParallaxInner, ImageInnerWrapper, WorkImage, ImageFilter, ImageCover } from './styles';

type Props = {
  item: any,
  index: number,
  isStopped?: boolean,
  handleWorkStops?: (...args: any) => any;
  isMobile?: boolean,
  baseTop?: number,
}

const WorkItem = ({
  item,
  index = 0,
  isStopped = false,
  handleWorkStops,
  baseTop,
  isMobile = false,
}: Props) => {
  const { configs } = useStaticQuery(graphql`
    query {
      configs {
        recentWork {
          workItemPlx {
            image {
              startValue
            }
            info {
              startValue
            }
            mobileInfo {
              startValue
            }
          }
        }
      }
    }
  `);

  const baseEnd: number = isMobile ? baseTop - 200 : baseTop;
  const accumulator: number = isMobile ? 250 : 535;
  const imgDir: string = `${process.env.ASSET_ROOT}assets/images/recent-work/`;
  const onClient: boolean = hasWindow();

  const getPlxData = seg => [
    {
      start: 'self',
      end: baseEnd + (accumulator * index),
      startOffset: '-100px',
      properties: [
        {
          startValue: seg.startValue,
          endValue: 0,
          unit: 'em',
          property: isMobile ? 'translateX' : 'translateY'
        }
      ]
    }
  ];

  const renderImageSection = () => {
    return configs.recentWork.workItemPlx.image.map((seg, i) => (
      <Plx
        parallaxData={getPlxData(seg)}
        disabled={!onClient}
        className={`parallax index-${i}`}
        key={`${i}` + item.title + 'image' + JSON.stringify(seg)}
      >
        <ImageParallaxInner index={i}>
          <ImageInnerWrapper>
            <WorkImage index={i} bgImage={`url(${imgDir}${item.imageDesktop})`} />
            <ImageFilter />
            <ImageCover isStopped={isStopped} />
          </ImageInnerWrapper>
        </ImageParallaxInner>
      </Plx>
    ));
  }

  const renderInfoSection = () => {
    return configs.recentWork.workItemPlx.info.map((seg, i) => {
      const plxSeg = isMobile ? configs.recentWork.workItemPlx.mobileInfo[i] : seg;
      return (
        <Plx
          parallaxData={getPlxData(plxSeg)}
          onPlxStart={onClient ? handleWorkStops(index, false) : null}
          onPlxEnd={onClient ? handleWorkStops(index, true) : null}
          disabled={!onClient}
          className={`parallax index-${i}`}
          key={`${i}` + item.label + 'info' + JSON.stringify(seg)}
        >
          <InfoParallaxInner>
            <InfoInnerWrapper>
              <StyledWorkItemInfo
                title={item.title}
                description={item.description}
                buttonUrl={item.url}
                isStopped={isStopped}
                isMobile={isMobile}
                isParallax
              />
            </InfoInnerWrapper>
          </InfoParallaxInner>
        </Plx>
      );
    });
  }

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
          buttonUrl={item.url}
          isStopped={isStopped}
        />
      </InfoOutterWrapper>
    </WorkItemWrapper>
  );
}

export default WorkItem;
