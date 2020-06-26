// import Vue from 'vue'
import { createStore } from 'vuex'
import countUp from './modules/countUp'

// Vue.use(Vuex)

const store = createStore({
  modules: {
    a: countUp
  }
})

export default store
