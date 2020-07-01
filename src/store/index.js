
import { createStore } from 'vuex';
import { state, actions, mutations, getters } from './modules/countUp';

export const store = createStore({ state, actions, mutations, getters })