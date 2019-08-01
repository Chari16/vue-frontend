const axios = require('axios')


const loginApi = (() => 
	axios.create({
		baseURL: "https://task-app-16.herokuapp.com",
		headers: {
			"Content-Type": "application/json"
		}
	})
)()


export {
	loginApi
}