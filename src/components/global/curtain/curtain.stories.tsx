import React, { FC, useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import Curtain, { Props } from './curtain';
import { CurtainMode } from '@types';
import { AnimatePresence } from 'framer-motion';
import { useCurtain } from 'src/hooks/use-curtain';

const description = 'A curtain transition effect component';

const MockPage1 = (props) => {
  useCurtain();
  return (
    <div>
      <h2>Hi. Curtain will close in 3 seconds</h2>
      <Curtain {...props} />
    </div>
  );
};

const MockPage2 = (props) => {
  useCurtain();
  return (
    <div>
      <h2>Hello again</h2>
      <Curtain {...props} />
    </div>
  );
};

const CurtainStory: FC<Props> = (props) => {
  const [simulateReroute, setSimulateReroute] = useState(false);

  useEffect(() => {
    setTimeout(() => setSimulateReroute(true), 3000);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      {simulateReroute ? (
        <MockPage2 {...props} key="mock-page-2" />
      ) : (
        <MockPage1 {...props} key="mock-page-1" />
      )}
    </AnimatePresence>
  );
};

// stories
storiesOf('Curtain', module)
  .add('default', () => <CurtainStory />, {
    info: { text: description },
  })
  .add('blocks', () => <CurtainStory entrance={CurtainMode.BLOCKS} />)
  .add('reverse blocks enterence', () => <CurtainStory entrance={CurtainMode.REVERSE_BLOCKS} />)
  .add('rows', () => <CurtainStory entrance={CurtainMode.ROWS} exit={CurtainMode.ROWS} />)
  .add('full', () => (
    <CurtainStory entrance={CurtainMode.FULL} exit={CurtainMode.FULL} durations={[2, 1, 2]} />
  ))
  .add('blocks exit', () => <CurtainStory exit={CurtainMode.BLOCKS} />)
  .add('reverse blocks exit', () => <CurtainStory exit={CurtainMode.REVERSE_BLOCKS} />)
  .add('rows exit', () => <CurtainStory exit={CurtainMode.ROWS} />)
  .add('full exit', () => <CurtainStory exit={CurtainMode.FULL} />)
  .add('longer duration', () => <CurtainStory durations={[2, 5, 2]} />)
  .add('shorter duration', () => <CurtainStory durations={[0.5, 1, 0.5]} />)
  .add('with logo', () => (
    <CurtainStory durations={[0, 3, 3]} exit={CurtainMode.REVERSE_BLOCKS} withLogo />
  ));
