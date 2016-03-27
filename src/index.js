/**
 * Client Index
 */

import 'babel-core/polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import routes from './routes'

require('./style.less')

const store = configureStore()

const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  rootElement
)
