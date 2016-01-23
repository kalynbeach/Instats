/**
 * Stats Overview Component
 */

import React from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';

class Overview extends React.Component {

  render() {
      return (
        <div className="overview">
          <Row id="overview-liked-pictures-row">
            <Col sm={12}>
              <h3>Liked Pictures: </h3>
            </Col>
          </Row>
        </div>
      );
  }
  
}

export default Overview;
