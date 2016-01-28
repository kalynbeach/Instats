/**
 * User Reducer
 */

import {
  LOG_IN, LOG_OUT,
  INVALIDATE_API_DATA
} from '../actions/user'

import {
  REQUEST_ACCESS_TOKEN, RECEIVE_ACCESS_TOKEN,
  REQUEST_USER_DATA, RECEIVE_USER_DATA
} from '../actions/user'

export default function userData(state = {}, action) {
  switch(action.type) {

    case RECEIVE_ACCESS_TOKEN:
      return Object.assign({}, state, {
        accessToken: action.accessToken
      })

    case RECEIVE_USER_DATA:
      return Object.assign({}, state, {
        username: action.username,
        bio: action.bio,
        website: action.website,
        profilePicture: action.profilePicture,
        fullname: action.fullname,
        id: action.id,
        counts: action.counts,
        loggedIn: action.loggedIn
      })
    
    default:
      return state
  }
}
