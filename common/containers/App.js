/**
 * Root App Container Component
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import * as IndexActions from '../actions/index'
import * as UserActions from '../actions/user'

import {
  Col,
  Button
} from 'react-bootstrap'

import Header from '../components/header.js'
import Body from '../components/body.js'

// Load styles if on the client-side
// TODO: Figure out server-side styles
if (process.env.BROWSER) {
  require('../style.less')
}

class App extends Component {

  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
  }

  handleLoginClick() {
    const { dispatch } = this.props
    console.log("Login button was clicked. ")
    // This is where the user needs to be redirected to
    // the Instagram auth url
    dispatch(UserActions.logIn())
  }

  render() {
    const { dispatch, isFetching, user } = this.props
    return (
      <Col sm={8} smOffset={2}>
        <Header
          user={this.props.user}
          onLoginClick={this.handleLoginClick}
        />
        <Body
          user={this.props.user}
        />
      </Col>
    )
  }
}

// "Selector" function: takes Redux store state and
// returns the props needed for the App component
function mapStateToProps(state) {
  return {
    isFetching: state.isFetching,
    user: state.user
  }
}

export default connect(mapStateToProps)(App)
