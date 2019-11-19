import React, { PureComponent } from 'react'
import { bindActionCreators, Dispatch, AnyAction} from 'redux';
import { connect } from 'react-redux';
import { HomePage } from './styles';

interface IProps {
  mode?: string
}

interface IState {
  
}

class Home extends PureComponent<IProps, IState> {
  static defaultProps: IProps;
  constructor(props: IProps) {
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

Home.defaultProps = {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);




