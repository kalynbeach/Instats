/**
 * App Routes
 */

import React from 'react'
import { Router, Route } from 'react-router'
import App from './containers/App'


export default (
	<Router>
  	<Route path="/" component={App} />
  </Router>
)