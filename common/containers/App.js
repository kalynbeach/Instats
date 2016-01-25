/**
 * Root App Container Component
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

import {
  Col
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
    console.log("App props: ", this.props)
  }

  render() {
    const { dispatch, isFetching, user } = this.props
    return (
      <Col sm={8} smOffset={2}>
        <Header
          user={this.props.user} 
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
