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

class Header extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Row className="header">
        <Col sm={4} className="header-col">
          <h1> Instats </h1>
        </Col>
        <Col sm={5} className="header-col">
          <h4> User: </h4>
        </Col>
        <Col sm={3} className="header-col">
          <Button bsStyle="default">Login</Button>
        </Col>
      </Row>
    )
  }
}

export default Header

