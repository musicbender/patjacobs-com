import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import DotGrid from './dot-grid';
const sequences = require('../../../../test/mocks/dot-grid.json');

const description = 'Dot grid matrix animation component';

interface Props {
  sequence: number[][][];
  index?: number;
  started?: boolean;
  spacing?: number;
  interval?: number;
  delay?: number;
  className?: string;
}

interface State {
  dotGridIndex?: number;
  dotGridStarted?: boolean;
}

class DotGridContainer extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.handleSequence = this.handleSequence.bind(this);
    this.state = {
      dotGridIndex: 0,
      dotGridStarted: false,
    };
  }

  handleSequence(index: number): void {
    this.setState({
      dotGridIndex: index,
      dotGridStarted: true,
    });
  }

  render() {
    return (
      <DotGrid
        {...this.props}
        index={this.state.dotGridIndex}
        started={this.state.dotGridStarted}
        handleSequence={this.handleSequence}
      />
    );
  }
}

// stories
storiesOf('Particle: DotGrid', module)
  .add('default', () => <DotGridContainer sequence={sequences[0]} />, {
    info: { text: description },
  })
  .add('Animated sequence', () => <DotGridContainer sequence={sequences[1]} />)
  .add('Faster sequence', () => <DotGridContainer sequence={sequences[1]} interval={150} />)
  .add('Delayed sequence', () => <DotGridContainer sequence={sequences[1]} delay={1500} />)
  .add('Smaller spacing', () => <DotGridContainer sequence={sequences[1]} spacing={20} />)
  .add('Large grid animated', () => <DotGridContainer sequence={sequences[2]} interval={500} />);
