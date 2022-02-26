import React from 'react';
import { storiesOf } from '@storybook/react';
import Curtain from './curtain';

const description = 'A curtain transition effect component';
const props = { gridLines: [8, 17, 8, 17, 34, 8, 8] };

// stories
storiesOf('Curtain', module)
  .add('default', () => <Curtain />, {
    info: { text: description },
  })
  .add('reverse blocks enterence', () => <Curtain entrance="reverse-blocks" {...props} />)
  .add('rows enterence', () => <Curtain entrance="rows" {...props} />)
  .add('full enterence', () => <Curtain entrance="full" {...props} />)
  .add('blocks exit', () => <Curtain exit="blocks" {...props} />)
  .add('reverse blocks exit', () => <Curtain exit="reverse-blocks" {...props} />)
  .add('rows exit', () => <Curtain exit="rows" {...props} />)
  .add('full exit', () => <Curtain exit="full" {...props} />)
  .add('longer duration', () => <Curtain durations={[1, 5, 1]} {...props} />)
  .add('shorter duration', () => <Curtain durations={[1, 1, 1]} {...props} />);
