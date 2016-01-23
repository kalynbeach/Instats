/**
 * Root App Container Component
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

// Load styles if on the client-side
// TODO: Figure out server-side styles
if (process.env.BROWSER) {
  require('../style.less')
}

import Instats from '../components/Instats'

class App extends React.Component {

  constructor(props) {
    super(props)
    console.log("App props: ", this.props)
  }

  render() {
    const { user } = this.props
    return (
      <Instats user={user} />
    )
  }
}

function mapStateToProps(state) {
  return {
    isFetching: false,
    user: state.user
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(UserActions, dispatch)
//   }
// }

export default connect(mapStateToProps)(App)
