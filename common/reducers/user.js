/**
 * User (root) Reducer
 */

import UserActions from '../actions/user.js';
import AppConstants from '../constants/constants.js';

const initialState = {
  user: {}
};

export default function user(state = initialState, action) {
  switch(action.type) {
    
    case AppConstants.SET_CURRENT_USER:
      return Object.assign({}, state, {
        user: action.userData
      });

    case AppConstants.RECEIVE_DATA:
      break;

    case AppConstants.RECEIVE_API_ERR:
      break;

    case AppConstants.RECEIVE_LIKED_PICTURES_DATA:
      break;

    default:
      return state;
  }
}
