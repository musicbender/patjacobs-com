import React, { FC } from 'react';
import { storiesOf } from '@storybook/react';
import Curtain, { Props } from './curtain2';
import { CurtainMode } from '@types';
import { AnimatePresence } from 'framer-motion';
import { useCurtain } from 'src/hooks/use-curtain';

const description = 'A curtain transition effect component';

const CurtainStory: FC<Props> = (props) => {
  const { curtainCovering } = useCurtain();
  return <AnimatePresence>{curtainCovering && <Curtain {...props} />}</AnimatePresence>;
};

// stories
storiesOf('Curtain2', module)
  .add('default', () => <CurtainStory />, {
    info: { text: description },
  })
  .add('blocks', () => <CurtainStory entrance={CurtainMode.BLOCKS} />)
  .add('reverse blocks enterence', () => <CurtainStory entrance={CurtainMode.REVERSE_BLOCKS} />)
  .add('rows', () => <CurtainStory entrance={CurtainMode.ROWS} exit={CurtainMode.ROWS} />)
  .add('full', () => (
    <CurtainStory entrance={CurtainMode.FULL} exit={CurtainMode.FULL} durations={[2, 0, 2]} />
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
