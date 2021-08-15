import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData.data.user
      localStorage.setItem('user', JSON.stringify(userData.data.user))
      localStorage.setItem('token', userData.token)
      api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user')
      location.replace('/')
      location.reload() // all i need here is a simple refresh and redirect the loggedout user to home page
    },
    RELOAD_USER_DATA(state, userData) {
      state.user = userData.data.user
      localStorage.setItem('user', JSON.stringify(userData.data.user))
    },
  },
  actions: {
    async signup({ commit }, data) {
      const res = await api.post('api/v1/users/signup', data)
      commit('SET_USER_DATA', res.data)
    },

    async login({ commit }, data) {
      const res = await api.post('api/v1/users/login', data)
      commit('SET_USER_DATA', res.data)
    },

    logout({ commit }) {
      commit('CLEAR_USER_DATA')
    },
    async reloadUserData({ commit }) {
      const { data } = await api.get('api/v1/users/me')
      commit('RELOAD_USER_DATA', data)
    },
  },
  getters: {
    authenticated(state) {
      return !!state.user
    },

    admin(state) {
      return state.user.role === 'admin'
    },

    tagModerator(state) {
      return state.user.role === 'tag-moderator'
    },

    user(state) {
      return state.user
    },
  },
  modules: {},
})
