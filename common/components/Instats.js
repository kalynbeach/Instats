/**
 * Instats Component
 */

import React from 'react'
import { Router, Navigation } from 'react-router'
import {
  Col
} from 'react-bootstrap'

import configureStore from '../store/configureStore.js'
import UserActions from '../actions/user.js'

import Header from './header.js'
import Body from './body.js'

/**
 * Instats Main View Component
 */
class Instats extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Col sm={8} smOffset={2}>
        <Header
          user={this.props.user} 
        />
        <Body
          user={this.props.user}
        />
      </Col>
    );
  }

}

// Instats.propTypes = {
//   testData: React.PropTypes.object.isRequired
// };

// Instats.defaultProps = {
//   testData: 1
// };

export default Instats
