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
          <Col sm={3} className="header-col">
            <Button
              bsStyle="default"
              id="settings-button"
              onClick={this.props.gatherAllStatData}
             >Get Data</Button>
          </Col>
          <Col sm={5} className="header-col">
            <div id="user">
              <h3 id="header-username">{this.props.user.username}</h3>
              <Image
                id="header-profile-picture"
                src={this.props.user.profilePicture}
              />
              <div id="header-user-counts">
                <p>Posts: {this.props.user.counts.media}</p>
                <p>Followers: {this.props.user.counts.followed_by}</p>
                <p>Following: {this.props.user.counts.follows}</p>
              </div>
            </div>
          </Col>
        </Row>
      )
    }

  }
}

Header.propTypes = {
  user: React.PropTypes.object,
  loginUrl: React.PropTypes.string,
  gatherAllStatData: React.PropTypes.func
}

export default Header

