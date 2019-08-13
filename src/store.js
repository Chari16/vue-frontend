import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



export default new Vuex.Store({
	state: {
		accessToken: null,
		userIsAuthorized: false,
		loggedIn: false
	},
	mutations: {
		updateloggedIn (state) {
			state.loggedIn = true
		},
    	setHeader (state, accessToken) {
      		state.accessToken = accessToken
		},
		resetHeader (state) {
			state.accessToken = null
		},
		updateloggedOut (state) {
			state.loggedIn = false
		}
	},
	actions: {
    updateloggedIn ({commit}) {
      commit('updateloggedIn')
    },
    setHeader ({commit}, accessToken) {
      commit('setHeader', accessToken)
	},
	resetHeader ({commit}) {
		commit('resetHeader')
	},
	updateloggedOut ({commit}) {
		commit('updateloggedOut')
	}
	},

	getters: {
    getloggedIn (state) {
      return state.loggedIn
    }
	}
})