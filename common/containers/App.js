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

import Instats from '../components/instats.js'


// Load styles if on the client-side
// TODO: Figure out server-side styles
if (process.env.BROWSER) {
  require('../style.less')
}

class App extends Component {

  constructor(props) {
    super(props)
    this.createLoginUrl = this.createLoginUrl.bind(this)
  }

  componentDidMount() {
    // Request the access token and user
    if (!!this.props.location.query.code) {
      console.log("Code has been received! ")
      // This is where the fetchAccessToken() action
      // needs to be dispatched
    }
  }

  createLoginUrl() {
    var instagramClientId = '2aa61affaafa4e8db47b23187b7a8930'
    var instagramRedirectUrl =  'http://localhost:8080'
    var instagramAuthUrl = `https://api.instagram.com/oauth/authorize/?client_id=${instagramClientId}&redirect_uri=${instagramRedirectUrl}&response_type=code`
    return instagramAuthUrl
  }

  render() {
    const { dispatch, isFetching, user } = this.props
    return (
      <Instats
        isFetching={this.props.isFetching}
        user={this.props.user}
        loginUrl={this.createLoginUrl()}
      />
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
