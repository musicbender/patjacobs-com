import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { hasWindow } from '../../../util/util';
import { WorkItemWrapper, ImageOutterWrapper, InfoOutterWrapper, StyledWorkItemInfo, ImageParallax, InfoParallax, InfoParallaxInner, InfoInnerWrapper, ImageParallaxInner, ImageInnerWrapper, WorkImage, ImageFilter, ImageCover } from './styles';

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
  const { staticData } = useStaticQuery(graphql`
    query {
      staticData {
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
    return staticData.recentWork.workItemPlx.image.map((seg, i) => (
      <ImageParallax
        index={i}
        parallaxData={getPlxData(seg, i)}
        disabled={!onClient}
        key={`${i}` + item.title + 'image' + JSON.stringify(seg)}
      >
        <ImageParallaxInner index={i}>
          <ImageInnerWrapper>
            <WorkImage index={i} bgImage={`url(${imgDir}${item.imageDesktop})`} />
            <ImageFilter />
            <ImageCover isStopped={isStopped} />
          </ImageInnerWrapper>
        </ImageParallaxInner>
      </ImageParallax>
    ));
  }

  const renderInfoSection = () => {
    return staticData.recentWork.workItemPlx.info.map((seg, i) => {
      const plxSeg = isMobile ? staticData.recentWork.workItemPlx.mobileInfo[i] : seg;
      return (
        <InfoParallax
          index={i}
          parallaxData={getPlxData(plxSeg, i)}
          onPlxStart={onClient ? handleWorkStops(index, false) : null}
          onPlxEnd={onClient ? handleWorkStops(index, true) : null}
          disabled={!onClient}
          isStopped={isStopped}
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
        </InfoParallax>
      );
    });
  }

  return (
    <WorkItemWrapper isStopped={isStopped}>
      <ImageOutterWrapper>
        {!isMobile && renderImageSection()}
      </ImageOutterWrapper>
      <InfoOutterWrapper>
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
