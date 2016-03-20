/**
 * Root App Container Component
 */

import React, { Component, PropTypes, Children } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import {
    Col,
    Button
} from 'react-bootstrap'

import * as IndexActions from '../actions/index'
import * as UserActions from '../actions/user'
import * as StatsActions from '../actions/stats'

import auth from '../utils/auth'

import Landing from '../components/landing'
import Instats from '../components/instats'

require('../style.less')

/**
 * App Container Component
 */
class App extends Component {

    constructor(props) {
        super(props)
        this.createLoginUrl = this.createLoginUrl.bind(this)
        this.gatherAllStatData = this.gatherAllStatData.bind(this)
    }

    componentDidMount() {
        const { dispatch, user } = this.props

        // Request the access token and user
        if (!!this.props.location.hash) {
            // Grab the access token from the url
            // TODO: Do this via query instead of hash
            var accessToken = this.props.location.hash.slice(14)

            if (process.env.BROWSER) {
                auth.setToken(accessToken)
            }

            dispatch(UserActions.receiveAccessToken(accessToken))
            dispatch(UserActions.fetchUserData(accessToken))
        }
    }

    /**
     * Create the user login url
     */
    createLoginUrl() {
        // Instagram's required auth parameters - adjust as needed
        var client_id = '2aa61affaafa4e8db47b23187b7a8930'
        var redirect_uri = 'http://localhost:8080'
        var authUrl = `https://api.instagram.com/oauth/authorize/?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token`
        return authUrl
    }

    /**
     * Dispatch fetchStatData action to gather all stat data
     */
    gatherAllStatData() {
        const { dispatch, user } = this.props
        var accessToken = user.accessToken
        var initialStatData = []

        // Params for Instagram api calls for each stat
        const statsToGather = [
            {
                statName: 'liked_posts',
                url: `https://api.instagram.com/v1/users/self/media/liked?access_token=${accessToken}&count=30`
            },
            {
                statName: 'recent_posts',
                url: `https://api.instagram.com/v1/users/${user.id}/media/recent/?access_token=${accessToken}`
            }
        ]

        statsToGather.forEach((stat) => {
            dispatch(StatsActions.requestStatData())
            dispatch(StatsActions.fetchStatData(stat.statName, stat.url, initialStatData))
        })
    }

    // TODO: Work on App children rendering based on route
    render() {
        const { dispatch, isFetching, user, stats } = this.props

        var content

        if (this.props.children.type.name == "Landing") {
            content = (
                <Landing
                    loginUrl={this.createLoginUrl()}
                />
            )
        } else if (this.props.children.type.name == "Instats") {
            content = (
                <Instats
                    isFetching={isFetching}
                    user={user}
                    stats={stats}
                    loginUrl={this.createLoginUrl()}
                    gatherAllStatData={this.gatherAllStatData}
                />
            )
        }

        return (content)
    }
}

App.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    stats: PropTypes.object.isRequired
}

// "Selector" function: takes Redux store state and
// returns the props needed for the App component
function mapStateToProps(state) {
    return {
        isFetching: state.isFetching,
        user: state.user,
        stats: state.stats
    }
}

export default connect(mapStateToProps)(App)
