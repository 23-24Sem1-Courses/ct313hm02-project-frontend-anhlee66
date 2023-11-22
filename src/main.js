import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import axios from 'axios'
import '@fortawesome/fontawesome-free'
import router from './router'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
export { store }
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://localhost:3000'
const app = createApp(App).use(router).use(store)
// app.config.globalProperties.axios = axios
app.mount('#app')
