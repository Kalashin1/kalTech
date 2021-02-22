import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Blogs from '@/pages/Blogs'
import AddBlog from '@/pages/AddBlog'
import Blog from '@/pages/Blog'
import html from '@/pages/html'
import css from '@/pages/css'
import javascript from '@/pages/javascript'

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
      path: '/blogs',
      name: 'Blogs',
      component: Blogs
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/add-blog',
      name: 'addBlog',
      component: AddBlog
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
    }
  ]
})
