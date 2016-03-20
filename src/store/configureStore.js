/**
 * Redux Store
 */

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Router, Route } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import createMemoryHistory from 'history/lib/createMemoryHistory'
import createLogger from 'redux-logger'

import rootReducer from '../reducers/index'

let history = createMemoryHistory()
const reduxRouterMiddleware = syncHistory(history)

const createStoreWithMiddleware = compose(applyMiddleware(
    thunk,
    reduxRouterMiddleware
  ),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
