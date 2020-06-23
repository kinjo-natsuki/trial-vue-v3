import { createStore } from 'vuex'

const state = {
  count: 0,
}
const getters = {
  getCount: (state: any) => state.count + 'get'
}
const mutations = {
  increment(state: any) {
    state.count ++
  },
  decrement(state: any) {
    state.count --
  }
}
const actions = {
  increment2({ commit }: {commit: any}) {
    commit('increment')
    commit('increment')
  }
}


export default createStore({
  state,
  mutations,
  actions,
  getters
})