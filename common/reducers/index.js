/**
 * Index (Root) Reducer
 */

import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'

// Index actions
import {
	REQUEST_API_DATA, RECEIVE_API_DATA,
	RECEIVE_API_DATA_ERROR
} from '../actions/index'

// Other reducers
import user from './user'
import api from './api'

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

function data(state ={
	isFetching: false,
	didInvalidate: false,
	apiDataType: undefined,
	data: {}
}, action) {
	switch (action.type) {
		case REQUEST_API_DATA:
			return Object.assign({}, state, {
				apiDataType: action.apiDataType
			})
		case RECEIVE_API_DATA:
			return Object.assign({}, state, {
				data: action.apiData
			})
		default:
			return state
	}
}

const rootReducer = combineReducers(Object.assign({},{
	isFetching,
  user
}, {
	routing: routeReducer
}))

export default rootReducer
