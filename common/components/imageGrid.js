/**
 * Image Grid Component
 */

import React, { Component, PropTypes } from 'react'
import {
  Row,
  Col,
  Image
} from 'react-bootstrap'

class ImageGrid extends React.Component {

  render() {
    <div className="image-grid">
      <Row id="image-grid-row">
        <Col sm={4}></Col>
        <Col sm={4}></Col>
        <Col sm={4}></Col>
      </Row>
    </div>
  }
  
}

export default ImageGrid
