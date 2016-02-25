/**
 * User Authentication Utilities
 */

var auth = {

	login() {
		if (process.env.BROWSER) {

		}
	},

	loggedIn() {
		if (process.env.BROWSER) {
			console.log("User logged in: ", !!localStorage.getItem("instagramAccessToken"))
			return !!localStorage.getItem("instagramAccessToken")
		} else {
			return false
		}
	},

	setToken(token) {
		if (process.env.BROWSER) {
			localStorage.setItem("instagramAccessToken", token)
		}
	},

	getToken() {
		if (process.env.BROWSER) {
			return localStorage.getItem("instagramAccessToken")
		}
	},

	clearToken() {
		if (process.env.BROWSER) {
			localStorage.removeItem("instagramAccessToken")
		}
	}
}

export default auth
