/**
 * Body Component
 */

import React, { Component, PropTypes } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

import Overview from './overview.js'

class Body extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    // Save for later
    //<Overview
    //  user={this.props.user}
    //  stats={this.props.stats}
    ///>

    return (
      <Row className="body">
        <Col sm={12}></Col>
      </Row>
    )
  }

}

Body.propTypes = {
  user: React.PropTypes.object,
  stats: React.PropTypes.object
}

export default Body