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

    // Temporary stats state checking to avoid undefined exceptions
    if (this.props.stats && this.props.stats.hasOwnProperty("liked_posts")) {
      var numberLikedPosts = this.props.stats.liked_posts.length
    } else {
      var numberLikedPosts = 0
    }

    return (
      <div className="overview">
        <h2>Stats Overview</h2>
        <Row id="overview-liked-pictures-row">
          <Col sm={12}>
            <h4>Liked Posts: {numberLikedPosts}</h4>
          </Col>
        </Row>
      </div>
    )
  }
  
}

export default Overview
