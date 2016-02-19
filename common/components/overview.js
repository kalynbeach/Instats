/**
 * Stats Overview Component
 */

import React, { Component, PropTypes } from 'react'
import {
  Row,
  Col,
  Image
} from 'react-bootstrap'

import ImageGrid from '../components/imageGrid'

class Overview extends React.Component {

  constructor(props) {
    super(props)
    this.images = this.images.bind(this)
  }

  // TODO: Continue work on this method
  // - Returns an array of image urls for rendering
  // - Maybe move up to App container for reusability?
  images(statName, numberOfImages) {
    const { stats } = this.props

    var selectedPosts = stats[statName].slice(0, 10)
    var selectedImages = []

    selectedPosts.forEach((post) => {
      selectedImages.push(post.images.thumbnail.url)
    })

    console.log("Selected posts from images method: ", selectedPosts)
    console.log("Selected images from images method: ", selectedImages)

    return selectedImages
  }

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

Overview.propTypes = {
  user: React.PropTypes.object,
  stats: React.PropTypes.object
}

export default Overview
