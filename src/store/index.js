import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogined: localStorage.getItem("islogined") || 0,
    info: JSON.parse(localStorage.getItem("info")) || {},
  },
  mutations: {
    loginMutation(state, payload) {
      state.isLogined = 1;
      state.info = payload;
    },
    logoutMutation(state) {
      state.isLogined = 0;
      state.info = {};
    },
  },
  actions: {},
  modules: {},
});
