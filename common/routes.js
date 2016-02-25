/**
 * App Routes
 */

import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import auth from './utils/auth'

import App from './containers/App'
import Instats from './components/instats'
import Landing from './components/landing'

// TODO: Make requireAuth onEnter hook work with server-side routing/rendering
function requireAuth(nextState, replace) {

	if (process.env.BROWSER) {
		if (!auth.loggedIn()) {
			replace({
				pathname: '/landing',
				state: { nextPathname: nextState.location.pathname }
			})
		}
	} else {
		return
	}
}

export default (
	<Router history={browserHistory}>
		<Route path='/' component={App} >
			<IndexRoute component={Instats} />
			<Route path='/landing' component={Landing} />
		</Route>
	</Router>
)
