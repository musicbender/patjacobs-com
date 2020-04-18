import React from 'react';
import { storiesOf } from '@storybook/react';
import RevealBlock from './reveal-block';

const description = 'A hide and reveal animation content blocks';
const mockText =
    "They're using our own satellites against us. And the clock is ticking. Remind me to thank John for a lovely weekend. God help us, we're in the hands of engineers. They're using our own satellites against us. And the clock is ticking. Checkmate... Jaguar shark! So tell me - does it really exist?";

// stories
storiesOf('ReavelBlock', module)
    .add(
        'default',
        () => (
            <RevealBlock>
                <p>{mockText}</p>
            </RevealBlock>
        ),
        {
            info: { text: description },
        }
    )
    .add(
        'other',
        () => (
            <RevealBlock>
                <p>{mockText}</p>
            </RevealBlock>
        ),
        {
            info: { text: description },
        }
    );
