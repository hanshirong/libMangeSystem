import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login/index'
import SignIn from '@/views/Register/index'
import Home from '@/views/Books/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path:'/book/add',
      name:'Addbook',
      component: () => import('@/views/Books/create'),//增加书籍
    },
  ]
})
