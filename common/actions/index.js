/**
 * Index (Root) Actions and Action Creators
 */

import fetch from 'isomorphic-fetch'

// Index action constants
export const REQUEST_API_DATA = 'REQUEST_API_DATA'
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA'
export const RECEIVE_API_DATA_ERROR = 'RECEIVE_DATA_ERROR'

export const AUTHENICATE_USER = 'AUTHENICATE_USER'

export function requestData(apiDataType) {
	return {
		type: REQUEST_API_DATA,
		apiDataType
	}
}

export function receiveData(apiData) {
	return {
		type: RECEIVE_API_DATA,
		apiData
	}
}




