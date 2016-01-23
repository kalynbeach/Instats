/**
 * User Actions and Action Creators
 */

import Constants from '../constants/constants.js';

var UserActions = {
  /**
   * Set current user action
   */
  setCurrentUser(userData) {
    return {
      type: AppConstants.SET_CURRENT_USER,
      userData: userData
    }
  },

  /**
   * Generic receive data action
   */
  receiveData(data, type) {
    return {
      type: type,
      data: data
    }
  },

  /**
   * Receive API error action
   */
  receiveApiError(err) {
    return {
      type: AppConstants.RECEIVE_API_ERR,
      err: err
    }
  },

  /**
   * Get data for LikedPictures component
   */
  getLikedPicturesData() {
    ApiUtils.getLikedPicturesData();
  }
}

export default UserActions;