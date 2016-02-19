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
      var likedPosts = this.props.stats.liked_posts
    } else {
      var likedPosts = {}
    }

    return (
      <div className="overview">
        <h2>Stats Overview</h2>
        <Row id="overview-liked-pictures-row">
          <Col sm={6}>
            <h4>Liked Posts: {likedPosts.length}</h4>
          </Col>
          <Col sm={6}>
            <h4>10 Most Recent Liked Posts:</h4>

          </Col>
        </Row>
      </div>
    )
  }
  
}

export default Overview
