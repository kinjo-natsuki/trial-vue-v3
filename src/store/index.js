// import Vue from 'vue'
import { createStore } from 'vuex'
//import countUp from './modules/countUp'

// Vue.use(Vuex)
const state = {
  count: 0,
}
const getters = {
  getCount: (state) => state.count + 'get'
}
const mutations = {
  increment(state) {
    state.count ++
  },
  decrement(state) {
    state.count --
  }
}
const actions = {
  increment2({commit}) {
    commit('increment')
    commit('increment')
  }
}

const store = createStore({
  state,
  getters,
  actions,
  mutations
  // modules: {
  //   countUp
  // }
})

export default store
