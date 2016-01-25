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
    return (
      <Row className="body">
        <Col sm={12}>
          <Overview 
            user={this.props.user}
          />
        </Col>
      </Row>
    )
  }

}

// Body.propTypes = {
//   text: React.PropTypes.string
// }

// Body.defaultProps = {
//   text: {}
// }

export default Body