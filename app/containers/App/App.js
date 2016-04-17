import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ActionCreators from '../../actions';
import { pure, compose } from 'recompose';

import StubBend from '../../components/StubBend/';

// import style from './style';

function App(props) {
  console.log(props)
  return (
    <div>
      Hello from the bending app!
      <StubBend />
    </div>
  );
}

App.propTypes = {
  routing: ImmutablePropTypes.map,
};

//  Redux Connection
function mapStateToProps(state) {
  return {
    routing: state.get('routing'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch),
    dispatch,
  };
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  pure,
)(App);
