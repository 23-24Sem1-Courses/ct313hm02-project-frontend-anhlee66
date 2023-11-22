import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import UploadPage from '@/views/UploadPage.vue'
import CreateCourse from '@/views/CreateCourse.vue'
const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'loginpage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signuppage',
    component: SignupPage
  },
  {
    path: '/file/upload',
    name: 'uploadpage',
    component: UploadPage
  },
  {
    path: '/course',
    name: 'course',
    component: CreateCourse
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
