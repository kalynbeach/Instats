/**
 * Stats Actions and Action Creators
 */

import fetch from 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'

export const REQUEST_STAT_DATA = 'REQUEST_STAT_DATA'
export const RECEIVE_STAT_DATA = 'RECEIVE_STAT_DATA'

export const LIKED_POSTS = 'LIKED_POSTS'

export function requestStatData(statName, url) {
	return {
		type: REQUEST_STAT_DATA,
    statName,
    url
	}
}

export function receiveStatData(statName, statData) {
	return {
		type: RECEIVE_STAT_DATA,
		statName,
		statData
	}
}

// Async action for fetching stats data from Instagram API
export function fetchStatData(accessToken, statName, url) {
  return dispatch => {
    return fetchJsonp(url, {
      method: 'GET',
      mode: 'cors'
    }).then(response => {
      return response.json()
    }).then(statData => {
      console.log("fetchStatData action triggered! ")
      console.log("statName: ", statName)
      console.log("statData: ", statData.data)
      dispatch(receiveStatData(statName, statData.data))
    })
  }
}

