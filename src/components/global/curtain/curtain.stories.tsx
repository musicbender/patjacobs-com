import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import Curtain, { Props } from './curtain';
import { CurtainMode } from '@types';
import { AnimatePresence } from 'framer-motion';
import { useCurtain } from 'src/hooks/use-curtain';

const description = 'A curtain transition effect component';

const CurtainStory: FC<Props> = (props) => {
  const { curtainIsMounted } = useCurtain();
  return (
    <AnimatePresence>
      {curtainIsMounted && <Curtain {...props} key="curtain-storybook" />}
    </AnimatePresence>
  );
};

// stories
storiesOf('Curtain', module)
  .add('default', () => <CurtainStory />, {
    info: { text: description },
  })
  .add('reverse blocks enterence', () => <CurtainStory entrance={CurtainMode.REVERSE_BLOCKS} />)
  .add('rows', () => <CurtainStory entrance={CurtainMode.ROWS} exit={CurtainMode.ROWS} />)
  .add('full enterence', () => <CurtainStory entrance={CurtainMode.FULL} />)
  .add('blocks exit', () => <CurtainStory exit={CurtainMode.BLOCKS} />)
  .add('reverse blocks exit', () => <CurtainStory exit={CurtainMode.REVERSE_BLOCKS} />)
  .add('rows exit', () => <CurtainStory exit={CurtainMode.ROWS} />)
  .add('full exit', () => <CurtainStory exit={CurtainMode.FULL} />)
  .add('longer duration', () => <CurtainStory durations={[2, 5, 2]} />)
  .add('shorter duration', () => <CurtainStory durations={[0.5, 1, 0.5]} />)
  .add('with logo', () => <CurtainStory durations={[0, 3, 3]} withLogo />);
