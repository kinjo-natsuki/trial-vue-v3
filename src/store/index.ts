
import { createStore } from 'vuex';
import countUp from './modules/countUp';
import test from './modules/test'

export const store = createStore({
  modules: {
    countUp,
    test
  }
})