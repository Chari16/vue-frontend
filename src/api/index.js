const axios = require('axios')
import VueCookies from 'vue-cookies'

let token = null
if (VueCookies.isKey('auth')) {
	token = VueCookies.get('auth')
	//   console.log(auth,'auth')
}

const loginApi = (() =>
	axios.create({
		baseURL: process.env.VUE_APP_URL,
		headers: {
			"Content-Type": "application/json"
		}
	})
)()

const api = (() =>
	axios.create({
		baseURL: process.env.VUE_APP_URL,
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`	
		},
		credentials: 'same-origin',
	}))()

export {
	api,
	loginApi
}
