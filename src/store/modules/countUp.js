export const state = {
  count: 0,
}

export const getters = {
  getCount: (state) => state.count + 'get'
}

export const mutations = {
  increment(state) {
    state.count ++
  },
  decrement(state) {
    state.count --
  }
}

export const actions = {
  increment2({commit}) {
    commit('increment')
    commit('increment')
  }
}