/**
 * Stats Reducer
 */

import {
  REQUEST_STAT_DATA, RECEIVE_STAT_DATA
} from '../actions/stats'

export default function statData(state = {}, action) {
  switch(action.type) {

    case RECEIVE_STAT_DATA:
      return Object.assign({}, state, {
        [action.statName]: action.statData
      })

    default:
      return state
  }
}