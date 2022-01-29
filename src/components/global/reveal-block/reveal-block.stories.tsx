import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import RevealBlock from './reveal-block';
const settings = require('../../../../data/configs/settings');
import { RevealBlockContentType } from '../../../../types';

// configuration
const conf = {
  description: 'A hide and reveal animation content blocks',
  revealTimeout: 1000,
  mockImg: 'https://media.graphcms.com/9ihx2FVQxKbFMypUajB5',
  mockVideo: 'https://media.graphcms.com/nOZsc1RSYyKT11fg7M9l',
  mockText:
    "They're using our own satellites against us. And the clock is ticking. Remind me to thank John for a lovely weekend. God help us, we're in the hands of engineers. They're using our own satellites against us. And the clock is ticking. Checkmate... Jaguar shark! So tell me - does it really exist?",
};

// wrapper component
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

// styled components
interface LineContentProps {
  height?: string;
  lineColor?: string;
}

const GenericWrapper = styled.div`
  background-color: black;
`;

const LineContent = styled('div')<LineContentProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.lineColor};
`;

const GenericComponent = ({ text = conf.mockText }) => (
  <GenericWrapper>
    <p>{text}</p>
  </GenericWrapper>
);

// stories
storiesOf('Reveal Block', module)
  .add(
    'default',
    () => (
      <RevealBlockContainer>
        <GenericComponent />
      </RevealBlockContainer>
    ),
    {
      info: { text: conf.description },
    },
  )
  .add('Default with small content', () => (
    <RevealBlockContainer startGrid={2} endGrid={5}>
      <GenericComponent text="hello" />
    </RevealBlockContainer>
  ))
  .add('Generic from grid 2 to 5', () => (
    <RevealBlockContainer startGrid={2} endGrid={5}>
      <GenericComponent />
    </RevealBlockContainer>
  ))
  .add('Generic from grid 3 to 6', () => (
    <RevealBlockContainer startGrid={3} endGrid={6}>
      <GenericComponent />
    </RevealBlockContainer>
  ))
  .add('Generic from grid 0 to 7', () => (
    <RevealBlockContainer startGrid={0} endGrid={7}>
      <GenericComponent />
    </RevealBlockContainer>
  ))
  .add('Text from grid 2 to 5', () => (
    <RevealBlockContainer startGrid={2} endGrid={5} contentType={'text'}>
      <p>{conf.mockText}</p>
    </RevealBlockContainer>
  ))
  .add('Text from grid 3 to 6', () => (
    <RevealBlockContainer startGrid={3} endGrid={6} contentType={'text'}>
      <p>{conf.mockText}</p>
    </RevealBlockContainer>
  ))
  .add('Text from grid 4 to 7', () => (
    <RevealBlockContainer startGrid={4} endGrid={7} contentType={'text'}>
      <p>{conf.mockText}</p>
    </RevealBlockContainer>
  ))
  .add('Text from grid 0 to 3', () => (
    <RevealBlockContainer startGrid={0} endGrid={3} contentType={'text'}>
      <p>{conf.mockText}</p>
    </RevealBlockContainer>
  ))
  .add('Text from grid 1 to 6', () => (
    <RevealBlockContainer startGrid={1} endGrid={6} contentType={'text'}>
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
      <video src={conf.mockVideo} loop autoPlay />
    </RevealBlockContainer>
  ))
  .add('Video from grid 3 to 6', () => (
    <RevealBlockContainer startGrid={3} endGrid={6} contentType={'video'}>
      <video src={conf.mockVideo} loop autoPlay />
    </RevealBlockContainer>
  ))
  .add('Line content type', () => (
    <RevealBlockContainer contentType="line">
      <LineContent height="3px" lineColor="#fff" />
    </RevealBlockContainer>
  ))
  .add('Line content thicker', () => (
    <RevealBlockContainer contentType="line">
      <LineContent height="3em" lineColor="#fff" />
    </RevealBlockContainer>
  ));
