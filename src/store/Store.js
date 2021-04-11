import Vue from 'vue'
import Vuex from 'vuex'

import { mutations } from './Mutations'
import { actions } from './Actions'
import { getters } from './Getters'
import { state } from './State'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default Store
