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
export function fetchAccessToken(code) {
	return dispatch => {
		dispatch(requestAccessToken())

		console.log("fetchAccessToken called! ")

		var authForm = new FormData()

		// Instagram's required auth parameters - adjust as needed
		authForm.append('client_id', '2aa61affaafa4e8db47b23187b7a8930')
		authForm.append('client_secret', 'ebb3f0f781ff49af9a94d7b326032d2a')
		authForm.append('grant_type', 'authorization_code')
		authForm.append('redirect_uri', 'http://localhost:8080')
		authForm.append('code', code)

		fetch('https://api.instagram.com/oauth/access_token', {
			method: 'POST',
			body: authForm,
			mode: 'no-cors'
		}).then(response => console.log(response))
	}
}
