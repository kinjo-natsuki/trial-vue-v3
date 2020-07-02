
import { createStore } from 'vuex';
import { State, state, actions, mutations, getters } from './modules/countUp';
//import moduleA from './modules/countUp';

export const store = createStore<State>({
  state, actions, mutations, getters
})