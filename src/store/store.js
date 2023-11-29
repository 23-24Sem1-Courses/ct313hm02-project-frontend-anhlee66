import { createStore } from 'vuex'
import { useRouter } from 'vue-router'

const $router = useRouter()
const user = localStorage.getItem('user')
const state = user ? { status: { isLoggedIn: true }, user } : { status: {}, user: null }
const mutations = {
  loginSuccess(state, user) {
    state.user = user
    state.status = { isLoggedIn: true }
    localStorage.setItem('user', user)
    alert(`Logged in ${user}`)
  },
  loginFailure(state) {
    state.user = null
    state.status = {}
  },
  logout(state) {
    if (state.status.isLoggedIn) {
      const user = state.user
      state.user = null
      state.status = {}
      localStorage.removeItem('user')
      alert(`Logged out ${user}`)
    }
  },
  registerSuccess(state, user) {
    state.user = user
    state.status = { isRegister: true }
    $router.push({ name: 'loginpage' })
  },
  registerFailure(state) {
    state.user = null
    state.status = {}
  },
  search(state, search) {
    state.search = search ?? ''
  },
  setLike(state, like) {
    state.like = like
  },
  incrementLike(state) {
    state.like++
  },
  decrementLike(state) {
    state.like--
  }
}
export default createStore({
  state,
  mutations,
  getters: {},
  actions: {},
  modules: {}
})
