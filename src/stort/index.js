import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const stort = new Vuex.Store({
  state: {
    list: []
  },
  getters  : {},
  actions  : {},
  mutations: {
    maslist (state, data) {
      state.list = data
    }
  }

})

export default stort
