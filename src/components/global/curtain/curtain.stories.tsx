import React from 'react';
import { storiesOf } from '@storybook/react';
import Curtain from './curtain';
import { CurtainMode } from '@types';
import settings from '@configs/settings.json';

const description = 'A curtain transition effect component';
const props = { gridLines: settings.gridLines };

// stories
storiesOf('Curtain', module)
  .add('default', () => <Curtain />, {
    info: { text: description },
  })
  .add('reverse blocks enterence', () => (
    <Curtain entrance={CurtainMode.REVERSE_BLOCKS} {...props} />
  ))
  .add('rows enterence', () => <Curtain entrance={CurtainMode.ROWS} {...props} />)
  .add('full enterence', () => <Curtain entrance={CurtainMode.FULL} {...props} />)
  .add('blocks exit', () => <Curtain exit={CurtainMode.BLOCKS} {...props} />)
  .add('reverse blocks exit', () => <Curtain exit={CurtainMode.REVERSE_BLOCKS} {...props} />)
  .add('rows exit', () => <Curtain exit={CurtainMode.ROWS} {...props} />)
  .add('full exit', () => <Curtain exit={CurtainMode.FULL} {...props} />)
  .add('longer duration', () => <Curtain durations={[2, 5, 2]} {...props} />)
  .add('shorter duration', () => <Curtain durations={[0.5, 1, 0.5]} {...props} />);
