/**
 * Instats Landing View Component
 */

import React, { Component, PropTypes } from 'react'

import Header from '../components/header'

class Landing extends Component {
	render () {
		return (
			<Row>
				<Col sm={8} smOffset={2}>
					<Header
						loginUrl={this.props.loginUrl}
					/>
				</Col>
			</Row>
		)
	}
}

export default Landing
