/**
 * API Actions and Action Creators
 */

import fetch from 'isomorphic-fetch'

export const REQUEST_ACCESS_TOKEN = 'REQUEST_ACCESS_TOKEN'
export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN'

function requestAccessToken() {
	return {
		type: REQUEST_ACCESS_TOKEN
	}
}

function receiveAccessToken(response) {
	return {
		type: RECEIVE_ACCESS_TOKEN,
		accessToken: response.access_token,
		user: response.user
	}
}

// Asynchronous Action Creator for getting the user
// access token and user data
function fetchAccessToken(code) {
	return dispatch => {
		dispatch(requestAccessToken())

		var clientId = '2aa61affaafa4e8db47b23187b7a8930'
		var clientSecret = 'ebb3f0f781ff49af9a94d7b326032d2a'
		var grantType = 'authorization_code'
		var redirectUri = 'http://localhost:8080'

		// Use fetch to make a POST request for
		// the access token and user data here

	}
}