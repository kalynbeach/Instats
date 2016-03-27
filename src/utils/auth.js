/**
 * User Authentication Utilities
 */

var auth = {

    login() {

    },

    loggedIn() {
        console.log("User logged in: ", !!localStorage.getItem("instagramAccessToken"))
        return !!localStorage.getItem("instagramAccessToken")
    },

    setToken(token) {
        localStorage.setItem("instagramAccessToken", token)
    },

    getToken() {
        return localStorage.getItem("instagramAccessToken")
    },

    clearToken() {
        localStorage.removeItem("instagramAccessToken")
    }
}

export default auth
