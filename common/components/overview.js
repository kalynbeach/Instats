/**
 * Stats Overview Component
 */

import React, { Component, PropTypes } from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

class Overview extends React.Component {

  render() {
      return (
        <div className="overview">
          <h2>Stats Overview</h2>
          <Row id="overview-liked-pictures-row">
            <Col sm={12}>
              <h4>Liked Posts: {this.props.stats.liked_posts.length}</h4>
            </Col>
          </Row>
        </div>
      )
  }
  
}

export default Overview
