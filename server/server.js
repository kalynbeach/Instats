/*
 * Node.js Server for Instats
 */

import path from 'path'
import Express from 'express'
import qs from 'qs'

import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'

import configureStore from '../common/store/configureStore'
import routes from '../common/routes'
import App from '../common/containers/App'

const app = new Express()
const port = 8080

delete process.env.BROWSER

// Webpack hot reloading middleware
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.use(handleRender)

function handleRender(req, res) {
  
  // Compile an initial state
  const initialState = { 
    routing: routeReducer,
    isFetching: false,
    user: undefined
  }

  // Create a new Redux store instance
  const store = configureStore(initialState)

  // Grab the initial state from our Redux store
  const finalState = store.getState()

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      res.status(200).send(renderFullPage(renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      ), finalState))
    } else {
      res.status(404).send('Not found')
    }
  })

  // Send the rendered page back to the client
  //res.send(renderFullPage(html, finalState))
}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Instats</title>
        <link href='https://fonts.googleapis.com/css?family=Raleway:600,700,400' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        <link rel="stylesheet/less" type="text/css" href="bundle.css" />
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on port ${port}.`)
  }
})
