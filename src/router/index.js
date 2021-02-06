import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'

import '../../Langar-Regular.ttf'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
