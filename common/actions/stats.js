/**
 * Stats Actions and Action Creators
 */

import fetch from 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'

export const REQUEST_STAT_DATA = 'REQUEST_STAT_DATA'
export const RECEIVE_STAT_DATA = 'RECEIVE_STAT_DATA'

export const LIKED_POSTS = 'LIKED_POSTS'

export function requestStatData() {
	return {
		type: REQUEST_STAT_DATA
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
export function fetchStatData(statName, url, existingStatData) {
  return dispatch => {
    return fetchJsonp(url, {
      method: 'GET',
      mode: 'cors'
    }).then(response => {
      return response.json()
    }).then(statData => {
      console.log("Stat data fetched: ", statName)

      // Data handling/cleaning needs to happen here

      // Paginated requests for data
      if (statData.pagination.next_url) {
        var next_url = statData.pagination.next_url

        // Concat newly fetched data with existing stat data
        var newStatData = existingStatData.concat(statData.data)

        // Fetch more data from next_url
        dispatch(fetchStatData(statName, next_url, newStatData))
      } else {
        console.log("Stat data fetching is done - length: ", existingStatData.length)
        dispatch(receiveStatData(statName, existingStatData))
      }
    })
  }
}

