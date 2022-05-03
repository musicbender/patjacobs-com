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
  .add('blocks', () => <CurtainStory coverMode={CurtainMode.BLOCKS} />)
  .add('reverse blocks enterence', () => <CurtainStory coverMode={CurtainMode.REVERSE_BLOCKS} />)
  .add('rows', () => <CurtainStory coverMode={CurtainMode.ROWS} uncoverMode={CurtainMode.ROWS} />)
  .add('full', () => (
    <CurtainStory
      coverMode={CurtainMode.FULL}
      uncoverMode={CurtainMode.FULL}
      durations={[2, 1, 2]}
    />
  ))
  .add('blocks uncoverMode', () => <CurtainStory uncoverMode={CurtainMode.BLOCKS} />)
  .add('reverse blocks uncoverMode', () => (
    <CurtainStory uncoverMode={CurtainMode.REVERSE_BLOCKS} />
  ))
  .add('rows uncoverMode', () => <CurtainStory uncoverMode={CurtainMode.ROWS} />)
  .add('full uncoverMode', () => <CurtainStory uncoverMode={CurtainMode.FULL} />)
  .add('longer duration', () => <CurtainStory durations={[2, 5, 2]} />)
  .add('shorter duration', () => <CurtainStory durations={[0.5, 1, 0.5]} />);
