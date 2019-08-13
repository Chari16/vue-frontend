import {loginApi, api} from '../api/index'

export default {
    userSignup (obj) {
        return loginApi.post('/users', obj)
    },
    userLogin (obj) {
        return loginApi.post('/users/login',obj)
    },
    userProfile () {
        return api.get('/users/me')
    },
    userLogout () {
        return api.post('/users/logout')
    }
}