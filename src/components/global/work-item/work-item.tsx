import React from 'react';
import ItemInfo from '../work-item-info/work-item-info';
import Plx from 'react-plx';
import { hasWindow } from '../../../util/util';

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
}) => {
  const baseEnd = isMobile ? baseTop - 200 : baseTop;
  const accumulator = isMobile ? 250 : 535;
  const imgDir = `${process.env.ASSET_ROOT}assets/images/recent-work/`;
  const onClient = hasWindow();

  const getPlxData = (seg, i) => {
    return [
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
  }

  const renderImageSection = () => {
    return workItemPlx.image.map((seg, i) => {
      return (
        <Plx
          className={cx(style.parallax, style[`index-${i}`])}
          parallaxData={getPlxData(seg, i)}
          disabled={!onClient}
          key={`${i}` + item.title + 'image' + JSON.stringify(seg)}
        >
          <div className={cx(style.parallaxInner)}>
            <div className={cx(style.wrapper)}>
              <div
                className={cx(style.image, style.desktop, style[`index-${i}`])}
                style={{ backgroundImage: `url(${imgDir}${item.imageDesktop})` }}
              ></div>
              <div className={cx(style.imageFilter, {[style.stopped]: isStopped})}></div>
              <div className={cx(style.imageCover, {[style.stopped]: isStopped})}></div>
            </div>
          </div>
        </Plx>
      );
    });
  }

  const renderInfoSection = () => {
    return workItemPlx.info.map((seg, i) => {
      const plxSeg = isMobile ? workItemPlx.mobileInfo[i] : seg;
      return (
        <Plx
          className={cx(style.parallax, style[`index-${i}`])}
          parallaxData={getPlxData(plxSeg, i)}
          onPlxStart={onClient ? handleWorkStops(index, false) : null}
          onPlxEnd={onClient ? handleWorkStops(index, true) : null}
          disabled={!onClient}
          key={`${i}` + item.label + 'info' + JSON.stringify(seg)}
        >
          <div className={cx(style.parallaxInner)}>
            <div className={cx(style.wrapper)}>
              <ItemInfo
                title={item.title}
                description={item.description}
                buttonUrl={item.url}
                isStopped={isStopped}
                isMobile={isMobile}
                isParallax
              />
            </div>
          </div>
        </Plx>
      );
    });
  }

  return (
    <div className={cx(style.workItem, { [style.stopped]: isStopped })}>
      <div className={cx(style.imageOutterWrapper)}>
        {!isMobile && renderImageSection()}
      </div>
      <div className={cx(style.infoOutterWrapper)}>
        {renderInfoSection()}
        <ItemInfo
          title={item.title}
          description={item.description}
          buttonUrl={item.url}
          isStopped={isStopped}
        />
      </div>
    </div>
  );
}

export default WorkItem;
