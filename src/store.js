import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.prototype.$axios = Axios;

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
      increment (state) {
        state.count = 2;
        
      }
    },
    actions: {
      increment (context) {
      }
    }
  })