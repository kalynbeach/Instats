/**
 * API Reducer
 */

import {
	REQUEST_STAT_DATA, RECEIVE_STAT_DATA
} from '../actions/api'


export default function statData(state = {}, action) {
	switch(action.type) {
		case RECEIVE_STAT_DATA:
			return Object.assign({}, state, {
				[action.statName]: action.statData
			})
	}
}