/**
 * Instats Landing View Component
 */

import React, { Component, PropTypes } from 'react'

import {
	Row,
	Col,
	Button
} from 'react-bootstrap'

class Landing extends Component {
	render () {
		return (
			<div>
				<Col sm={4} className="landing-col">
					<h1> Instats </h1>
				</Col>
				<Col sm={5} className="landing-col"></Col>
				<Col sm={3} className="landing-col">
					<Button
						bsStyle="default"
						id="login-button"
						href={this.props.loginUrl}
					 >Login</Button>
				</Col>
			</div>
		)
	}
}

export default Landing
