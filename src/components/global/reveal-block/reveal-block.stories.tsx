import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import RevealBlock from './reveal-block';
const settings = require('../../../../data/configs/settings');
import { RevealBlockContentType } from '../../../../types';

const conf = {
    description: 'A hide and reveal animation content blocks',
    revealTimeout: 1000,
    mockImg: 'https://media.graphcms.com/9ihx2FVQxKbFMypUajB5',
    mockVideo: 'https://media.graphcms.com/nOZsc1RSYyKT11fg7M9l',
    mockText:
        "They're using our own satellites against us. And the clock is ticking. Remind me to thank John for a lovely weekend. God help us, we're in the hands of engineers. They're using our own satellites against us. And the clock is ticking. Checkmate... Jaguar shark! So tell me - does it really exist?",
};

interface Props {
    startGrid?: number;
    endGrid?: number;
    active?: boolean;
    children?: any;
    contentType?: RevealBlockContentType;
}

interface State {
    active: boolean;
}

class RevealBlockContainer extends PureComponent<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ active: true });
        }, conf.revealTimeout);
    }

    render() {
        return (
            <RevealBlock {...this.props} active={this.state.active} gridLines={settings.gridLines}>
                {this.props.children}
            </RevealBlock>
        );
    }
}

// stories
storiesOf('Reveal Block', module)
    .add(
        'default',
        () => (
            <RevealBlockContainer>
                <p>{conf.mockText}</p>
            </RevealBlockContainer>
        ),
        {
            info: { text: conf.description },
        }
    )
    .add('From grid 2 to 5', () => (
        <RevealBlockContainer startGrid={2} endGrid={5}>
            <p>{conf.mockText}</p>
        </RevealBlockContainer>
    ))
    .add('From grid 3 to 6', () => (
        <RevealBlockContainer startGrid={3} endGrid={6}>
            <p>{conf.mockText}</p>
        </RevealBlockContainer>
    ))
    .add('From grid 4 to 7', () => (
        <RevealBlockContainer startGrid={4} endGrid={7}>
            <p>{conf.mockText}</p>
        </RevealBlockContainer>
    ))
    .add('From grid 0 to 3', () => (
        <RevealBlockContainer startGrid={0} endGrid={3}>
            <p>{conf.mockText}</p>
        </RevealBlockContainer>
    ))
    .add('From grid 1 to 6', () => (
        <RevealBlockContainer startGrid={1} endGrid={6}>
            <p>{conf.mockText}</p>
        </RevealBlockContainer>
    ))
    .add('Image from grid 2 to 5', () => (
        <RevealBlockContainer startGrid={2} endGrid={5} contentType={'img'}>
            <img src={conf.mockImg} />
        </RevealBlockContainer>
    ))
    .add('Image from grid 3 to 6', () => (
        <RevealBlockContainer startGrid={3} endGrid={6} contentType={'img'}>
            <img src={conf.mockImg} />
        </RevealBlockContainer>
    ))
    .add('Image from grid 1 to 3', () => (
        <RevealBlockContainer startGrid={1} endGrid={3} contentType={'img'}>
            <img src={conf.mockImg} />
        </RevealBlockContainer>
    ))
    .add('Video from grid 2 to 5', () => (
        <RevealBlockContainer startGrid={2} endGrid={5} contentType={'video'}>
            <video src={conf.mockVideo} playsinline loop autoPlay />
        </RevealBlockContainer>
    ))
    .add('Video from grid 3 to 6', () => (
        <RevealBlockContainer startGrid={3} endGrid={6} contentType={'video'}>
            <video src={conf.mockVideo} playsinline loop autoPlay />
        </RevealBlockContainer>
    ));
