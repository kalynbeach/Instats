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

  constructor(props) {
    super(props)
  }

  renderColumns() {
    const { images, columns } = this.props

    var rows = Math.ceil(images.length / columns)
    var imageWidth = 100
    var imageHeight = 100

    console.log("ImageGrid number of rows: ", rows)

    // TODO: Write this thing
    function generateGrid(images, columns, rows) {

    }

    switch(columns) {
      case 1:
        return (
          <Row id="image-grid-row">
            <Col className="image-grid-col" sm={12}></Col>
          </Row>
        )
      case 2:
        return (
          <Row id="image-grid-row">
            <Col className="image-grid-col" sm={6}></Col>
            <Col className="image-grid-col" sm={6}></Col>
          </Row>
        )
      case 3:
        return (
          <Row id="image-grid-row">
            <Col className="image-grid-col" sm={4}>
              <Image
                className="image-grid-image"
                src={this.props.images[0]}
                width={imageWidth}
                height={imageHeight}
              />
            </Col>
            <Col className="image-grid-col" sm={4}>
              <Image
                className="image-grid-image"
                src={this.props.images[1]}
                width={imageWidth}
                height={imageHeight}
              />
            </Col>
            <Col className="image-grid-col" sm={4}>
              <Image
                className="image-grid-image"
                src={this.props.images[2]}
                width={imageWidth}
                height={imageHeight}
              />
            </Col>
          </Row>
        )
      case 4:
        return (
          <Row id="image-grid-row">
            <Col className="image-grid-col" sm={3}></Col>
            <Col className="image-grid-col" sm={3}></Col>
            <Col className="image-grid-col" sm={3}></Col>
            <Col className="image-grid-col" sm={3}></Col>
          </Row>
        )
    }
  }

  render() {
    return (
      <div className="image-grid">
        {this.renderColumns()}
      </div>
    )
  }
  
}

ImageGrid.propTypes = {
  images: React.PropTypes.array,
  columns: React.PropTypes.number
}

export default ImageGrid
