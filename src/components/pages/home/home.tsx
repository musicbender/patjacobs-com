import React, { PureComponent } from 'react'
import { bindActionCreators, Dispatch, AnyAction} from 'redux';
import { connect } from 'react-redux';
import { HomePage } from './styles';

type Props = {
  
}

type ReduxProps = {
  mode?: string
}


type State = {
  
}

class Home extends PureComponent<Props & ReduxProps, State> {
  static defaultProps = {

  }

  constructor(props: Props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <HomePage>
        home
      </HomePage>
    )
  }
}

const mapStateToProps = (state: any) => ({
  mode: state.global.mode
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators({
    
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
