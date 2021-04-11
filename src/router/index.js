import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Lesson from '@/pages/Lesson'
import html from '@/pages/html'
import css from '@/pages/css'
import javascript from '@/pages/javascript'
import AddLesson from '@/pages/AddLesson'
import ContactUs from '@/pages/ContactUs'

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
      path: '/lesson/:language/:topic',
      name: 'Lesson',
      component: Lesson
    },
    {
      path: '/html',
      name: 'html',
      component: html
    },
    {
      path: '/css',
      name: 'css',
      component: css
    },
    {
      path: '/javascript',
      name: 'javascript',
      component: javascript
    },
    {
      path: '/add-lesson',
      component: AddLesson
    },
    {
      path: '/contact',
      component: ContactUs
    }
  ]
})
