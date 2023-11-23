import { createWebHistory, createRouter } from 'vue-router'
// import userService from '@/services/user.service'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import UploadPage from '@/views/UploadPage.vue'
import CreateCourse from '@/views/CreateCourse.vue'
import MyFile from '@/views/MyFile.vue'
import AccountSetting from '@/views/AccountSetting.vue'
import FileView from '@/views/FileView.vue'
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
  },
  {
    path: '/myfile',
    name: 'myfile',
    component: MyFile
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: AccountSetting
  },
  {
    path: '/file',
    name: 'fileview',
    component: FileView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = userService.isAuthenticated()
//   if (to.name !== 'Login' && !isAuthenticated) next({ name: 'loginpage' })
//   else next()
// })

export default router
