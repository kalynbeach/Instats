/**
 * User Actions and Action Creators
 */

import fetch from 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'

export const INVALIDATE_API_DATA = 'INVALIDATE_API_DATA'

export const REQUEST_ACCESS_TOKEN = 'REQUEST_ACCESS_TOKEN'
export const RECEIVE_ACCESS_TOKEN = 'RECEIVE_ACCESS_TOKEN'

export const REQUEST_USER_DATA = 'REQUEST_USER_DATA'
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA'

//
//  User Authentication Actions
//

function requestAccessToken() {
  return {
    type: REQUEST_ACCESS_TOKEN
  }
}

// Recieve access token and user data
export function receiveAccessToken(accessToken) {
  return {
    type: RECEIVE_ACCESS_TOKEN,
    accessToken
  }
}

//
//  User Data Actions
//

export function requestUserData(accessToken) {
  return {
    type: REQUEST_USER_DATA,
    accessToken
  }
}

function receiveUserData(userData) {
  return {
    type: RECEIVE_USER_DATA,
    username: userData.username,
    bio: userData.bio,
    website: userData.website,
    profilePicture: userData.profile_picture,
    fullname: userData.full_name,
    id: userData.id,
    counts: userData.counts,
    loggedIn: true
  }
}

export function refreshData(apiData) {
  return {
    type: INVALIDATE_API_DATA,
    apiData
  }
}

// User data fetch Action
// TODO: Need to figure out how to do this without fetchJsonp
export function fetchUserData(accessToken) {
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
