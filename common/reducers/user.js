/**
 * User Reducer
 */

import {
  LOG_IN, LOG_OUT,
  INVALIDATE_API_DATA
} from '../actions/user';

const initialState = {
  logged_in: false,
  stats: {}
}

export default function user(state = initialState, action) {
  switch(action.type) {
    
    // Instagram OAUTH action needs to happen here
    case LOG_IN:
      return Object.assign({}, state, {
        logged_in: true
      })

    case LOG_OUT:
      return Object.assign({}, state, {
        logged_in: false
      })
    
    default:
      return state;
  }
}
