/**
 * Redux Store
 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Router, Route } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import createMemoryHistory from 'history/lib/createMemoryHistory'

import rootReducer from '../reducers'

let history = createMemoryHistory()

const reduxRouterMiddleware = syncHistory(history)

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  reduxRouterMiddleware
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
