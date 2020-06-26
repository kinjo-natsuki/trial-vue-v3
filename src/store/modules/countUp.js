// import { createStore } from 'vuex'

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

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

// export default createStore({
//   state,
//   mutations,
//   actions,
//   getters
// })