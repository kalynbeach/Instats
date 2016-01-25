/**
 * Header Component
 */

import React, { Component, PropTypes } from 'react'
import {
  Row,
  Col,
  Button,
  Image
} from 'react-bootstrap'

class Header extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {

    // Not logged in Header
    if (!this.props.user.loggedIn) {
      return (
        <Row className="header">
          <Col sm={4} className="header-col">
            <h1> Instats </h1>
          </Col>
          <Col sm={5} className="header-col"></Col>
          <Col sm={3} className="header-col">
            <Button
              bsStyle="default"
              href={this.props.loginUrl}
             >Login</Button>
          </Col>
        </Row>
      )
    // Logged in Header
    } else {
      return (
        <Row className="header">
          <Col sm={4} className="header-col">
            <h1> Instats </h1>
          </Col>
          <Col sm={5} className="header-col">
            <h3> User: {this.props.user.username} </h3>
          </Col>
          <Col sm={3} className="header-col">
            <Button
              bsStyle="default"
             >Settings</Button>
          </Col>
        </Row>
      )
    }

  }
}

export default Header

