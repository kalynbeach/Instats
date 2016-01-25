/**
 * App Routes
 */

import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App'
import Instats from './components/instats'

export default (
	<Router history={browserHistory}>
  	<Route path="/" component={App} >
  		<IndexRoute component={Instats} />
  	</Route>
  </Router>
)