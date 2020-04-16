import React from 'react';
import { storiesOf } from '@storybook/react';
import RevealBlock from './reveal-block';

const description = 'A hide and reveal animation content blocks';

// stories
storiesOf('Curtain', module).add('default', () => <RevealBlock />, {
    info: { text: description },
});
