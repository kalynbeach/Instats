/**
 * User Actions and Action Creators
 */

import fetch from 'isomorphic-fetch'

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const INVALIDATE_API_DATA = 'INVALIDATE_API_DATA'

export function logIn() {
  return {
    type: LOG_IN
  }
}

export function logOut() {
  return {
    type: LOG_OUT
  }
}

export function refreshData(userData) {
  return {
    type: INVALIDATE_API_DATA,
    userData
  }
}