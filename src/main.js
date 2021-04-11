// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/Store'

// atelier-savanna-light
// brown-paper
// github-gist
// github
// atom-one-light
// codepen-embed
// tomorrow-night-blue

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

Vue.config.productionTip = false

Vue.use(hljs.vuePlugin)

export const bus = new Vue()

Vue.filter('currency', (value) => '$ ' + value)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
