/**
 * API Actions and Action Creators
 */

import fetch from 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'

export const REQUEST_STAT_DATA = 'REQUEST_STAT_DATA'
export const RECEIVE_STAT_DATA = 'RECEIVE_STAT_DATA'

export const LIKED_POSTS = 'LIKED_POSTS'

export function requestStatData(statType) {
	// return {
	// 	type: statType
	// }
}

export function receiveStatData(statName, statData) {
	return {
		type: RECEIVE_STAT_DATA,
		statName,
		statData
	}
}

export function fetchStatData(accessToken, statType) {
  return dispatch => {
    return fetchJsonp(`https://api.instagram.com/v1/users/self/?access_token=${accessToken}`, {
      method: 'GET',
      mode: 'cors'
    }).then(response => {
      return response.json()
    }).then(userData => {
      console.dir(userData.data)
      dispatch(receiveUserData(userData.data))
    })
  }
}

