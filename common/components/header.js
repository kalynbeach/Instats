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
              id="login-button"
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
            <div id="user">
              <h4 id="header-username">{this.props.user.username}</h4>
              <Image
                id="header-profile-picture"
                src={this.props.user.profilePicture}
              />
            </div>
          </Col>
          <Col sm={3} className="header-col">
            <Button
              bsStyle="default"
              id="settings-button"
             >Settings</Button>
          </Col>
        </Row>
      )
    }

  }
}

export default Header

