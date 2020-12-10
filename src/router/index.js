import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import About from '@/components/pages/about'
import Register from '@/components/pages/register'
import Contact from '@/components/pages/contact'
import Menu from '@/components/pages/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/register',
      name: 'Auth',
      component: Register
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    }
  ]
})
