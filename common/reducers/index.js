/**
 * Index (Root) Reducer
 */

import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'

import {
	REQUEST_API_DATA, RECEIVE_API_DATA,
	RECEIVE_API_DATA_ERROR
} from '../actions/index'

import {
	RECEIVE_ACCESS_TOKEN,
	RECEIVE_USER_DATA
} from '../actions/user'

import {
  REQUEST_STAT_DATA, RECEIVE_STAT_DATA
} from '../actions/stats'

import userData from './user'
import statData from './stats'

/**
 * isFetching state
 */
function isFetching(state = false, action) {
	switch (action.type) {

		case REQUEST_API_DATA:
			return Object.assign({}, state, {
				isFetching: true
			})

		case RECEIVE_API_DATA:
			return Object.assign({}, state, {
				isFetching: false
			})

		default:
			return state
	}
}

/**
 * user state
 */
function user(state = {}, action) {
	switch(action.type) {

		case RECEIVE_ACCESS_TOKEN:
			return Object.assign({}, state, userData(state, action))

		case RECEIVE_USER_DATA:
			return Object.assign({}, state, userData(state, action))

		default:
			return state
	}
}

/**
 * stats state
 */
function stats(state = {}, action) {
	switch(action.type) {

		case RECEIVE_STAT_DATA:
      return Object.assign({}, state, statData(state, action))

		default:
			return state
	}
}

const rootReducer = combineReducers(Object.assign({},{
	isFetching,
  user,
  stats
}, { routing: routeReducer }))

export default rootReducer
