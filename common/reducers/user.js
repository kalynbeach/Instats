/**
 * User Reducer
 */

import {
  LOG_IN, LOG_OUT,
  INVALIDATE_API_DATA
} from '../actions/user'

const initialState = {
  loggedIn: false,
  stats: {}
}

export default function user(state = initialState, action) {
  switch(action.type) {
    
    // Instagram OAUTH action needs to happen here
    case LOG_IN:
      return Object.assign({}, state, {
        loggedIn: true
      })

    case LOG_OUT:
      return Object.assign({}, state, {
        loggedIn: false
      })
    
    default:
      return state
  }
}
