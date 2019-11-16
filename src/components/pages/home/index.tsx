import React, { PureComponent } from 'react'
import { HomePage, OutterWrapper, InnerWrapper } from './styles';

export class Home extends PureComponent {
  render() {
    return (
      <HomePage>
        <OutterWrapper>
          <InnerWrapper>
            home
          </InnerWrapper>
        </OutterWrapper>
      </HomePage>
    )
  }
}

export default Home;

