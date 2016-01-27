/**
 * API Reducer
 */

import {
	REQUEST_ACCESS_TOKEN, RECEIVE_ACCESS_TOKEN
} from '../actions/api'

const initialState = {}

export default function api(state = initialState, action) {
	switch(action.type) {
		case REQUEST_ACCESS_TOKEN:
			return Object.assign({}, state, {

			})
		case RECEIVE_ACCESS_TOKEN:
			return Object.assign({}, state, {
				accessToken: action.accessToken,
				user: action.user
			})
	}
}