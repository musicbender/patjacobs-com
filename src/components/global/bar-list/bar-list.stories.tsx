import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import BarList from './bar-list';
import { CoreColors } from '../../../../types';

// configuration
const conf = {
  description: 'A hide and reveal animation content blocks',
  revealTimeout: 1000,
  shortList: [
    '3 blocks walk into a bar',
    '2 is the unloneliest number',
    'There is only 1 everything',
  ],
  mediumList: [
    '3 blocks walk into a bar',
    '2 is the unloneliest number',
    'There is only 1 everything',
    '3 blocks walk into a bar',
    '2 is the unloneliest number',
    'There is only 1 everything',
  ],
};

// wrapper component
interface Props {
  items?: string[];
  active?: boolean;
  color?: CoreColors;
  colorPattern?: 'multi' | 'single';
}

interface State {
  active: boolean;
}

class BarListContainer extends PureComponent<Props, State> {
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
    return <BarList {...this.props} active={this.state.active} />;
  }
}

// stories
storiesOf('Bar List', module)
  .add('default', () => <BarListContainer items={conf.mediumList} />, {
    info: { text: conf.description },
  })
  .add('default again (because it is random)', () => <BarListContainer items={conf.mediumList} />)
  .add('short list', () => <BarListContainer items={conf.shortList} />)
  .add('long list', () => <BarListContainer items={[...conf.shortList, ...conf.mediumList]} />)
  .add('longer list', () => <BarListContainer items={[...conf.mediumList, ...conf.mediumList]} />)
  .add('single random color', () => (
    <BarListContainer items={conf.mediumList} colorPattern="single" />
  ))
  .add('single color aqua', () => (
    <BarListContainer items={conf.mediumList} colorPattern="single" color="aqua" />
  ))
  .add('single color purple', () => (
    <BarListContainer items={conf.mediumList} colorPattern="single" color="purple" />
  ));
