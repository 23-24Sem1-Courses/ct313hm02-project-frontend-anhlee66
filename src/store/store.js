import { createStore } from 'vuex'

export default createStore({
  state: {
    email: null
  },
  getters: {},
  mutations: {
    login(state, email) {
      state.email = email
      localStorage.setItem('email', email)
      alert(`Logged in ${email}`)
    },
    logout(state) {
      const email = state.email
      state.email = null
      localStorage.removeItem('email')
      alert(`Logged out ${email}`)
    },
    initStore(state) {
      if (localStorage.getItem('email')) {
        state.email = localStorage.getItem('email')
      }
    }
  },
  actions: {},
  modules: {}
})
