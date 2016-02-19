/**
 * Instats Top-Level UI Component
 */

import React, { Component, PropTypes } from 'react'

import {
  Col,
  Button
} from 'react-bootstrap'

import Header from '../components/header'
import Body from '../components/body'

class Instats extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    // TODO: Clean up this render method
    // - Move conditionals and markup into a separate method

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
            gatherAllStatData={this.props.gatherAllStatData}
          />
          <Body
            user={this.props.user}
            stats={this.props.stats}
          />
        </Col>
      )
    }
  }

}

Instats.propTypes = {
  isFetching: React.PropTypes.bool,
  user: React.PropTypes.object,
  stats: React.PropTypes.object,
  loginUrl: React.PropTypes.string,
  gatherAllStatData: React.PropTypes.func 
}

export default Instats