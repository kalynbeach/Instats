/**
 * Instats Top-Level UI Component
 */

import React, { Component, PropTypes } from 'react'

import {
  Col,
  Button
} from 'react-bootstrap'

import Header from '../components/header.js'
import Body from '../components/body.js'

class Instats extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    // Initial / not logged in UI
    if (!this.props.user.loggedIn) {
      return (
        <Col sm={8} smOffset={2}>
          <Header
            user={this.props.user}
            loginUrl={this.props.loginUrl}
          />
          <Body
            user={this.props.user}
          />
        </Col>
      )
    // Logged in UI
    } else {
      return (
        <Col sm={8} smOffset={2}>
          <Header
            user={this.props.user}
            loginUrl={this.props.loginUrl}
            gatherStatData={this.props.gatherStatData}
          />
          <Body
            user={this.props.user}
          />
        </Col>
      )
    }
  }

}

export default Instats