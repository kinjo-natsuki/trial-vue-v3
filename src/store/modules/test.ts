export interface State {
  count: number;
}

export const state = {
  count: 10,
}

export const getters = {
  getCount: (state: State) => state.count + 'get'
}

export const mutations = {
  // increment(state: State) {
  //   state.count ++
  // },
  // decrement(state: State) {
  //   state.count --
  // }
}

export const actions = {
  // increment2({ commit }: {commit: any}) {
  //   commit('increment')
  //   commit('increment')
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}