import Vue from 'vue'
import Vuex from 'vuex'
// import { ajax } from 'rxjs/ajax'

import { mutations } from './Mutations'
import { actions } from './Actions'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    HTML: [],
    CSS: [],
    javascript: []
  },
  mutations,
  actions
})

// mutations: {
//   setHTML (state, payload) {
//     console.log(payload)
//     state.HTML = [...payload]
//   },
//   setCSS (state, payload) {
//     console.log(payload)
//     state.CSS = [...payload]
//   },
//   setJavascript (state, payload) {
//     console.log(payload)
//     state.javascript = [...payload]
//   }
// }

// actions: {
//   async setHTML (context) {
//     const res = await fetch('http://localhost:3000/html')

//     const data = await res.json()

//     context.commit('setHTML', data)
//   },
//   async setCSS ({ commit }) {
//     const res = await fetch('http://localhost:3000/css')

//     const data = await res.json()

//     commit('setCSS', data)
//   },
//   async setJavascript ({ commit }) {
//     const res = await fetch('http://localhost:3000/javascript')

//     const data = await res.json()

//     commit('setJavascript', data)
//   }
// }

export default Store
