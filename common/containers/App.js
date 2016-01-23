import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

if (process.env.BROWSER) {
  require('../style.less')
}

import UserActions from '../actions/user.js'
import Instats from '../components/Instats.js'

/**
 * App Container Component
 */
class App extends React.Component {

  constructor(props) {
    super(props);
    console.log("App props: ", this.props);
  }

  /**
   * Render the App RouteHandler component
   */
  render() {
    const { user, accessToken } = this.props;
    return (
      <Instats user={user} />
    );
  }
}

function mapStateToProps(state) {
  return {
    accessToken: state.access_token,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
