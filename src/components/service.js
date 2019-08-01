import {loginApi} from '../api/index'

export default {
    userSignup (obj) {
        return loginApi.post('/users', obj)
    },
    userLogin (obj) {
        return loginApi.post('/users/login',obj)
    }
}