/**
 * Index (Root) Reducer
 */

import { combineReducers } from 'redux'

// Index actions
import {
	REQUEST_API_DATA, RECEIVE_API_DATA,
	RECEIVE_API_DATA_ERROR
} from '../actions/index'

// Other reducers
import user from './user'
import api from './api'

function data(state ={
	isFetching: false,
	didInvalidate: false,
	data: {}
}, action) {
	switch (action.type) {
		case REQUEST_API_DATA:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			})
		case RECEIVE_API_DATA:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				data: action.apiData
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
  user
})

export default rootReducer
