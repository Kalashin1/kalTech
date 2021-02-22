// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueCodeHighlight from 'vue-code-highlight'

Vue.config.productionTip = false
Vue.use(VueCodeHighlight)
export const bus = new Vue()

Vue.filter('currency', (value) => '$ ' + value)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
