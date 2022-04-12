import Vue from "vue";
import Vuex from "vuex";
import { getType, setType } from "@/lib/storage";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    type: getType(),
  },
  getters: {},
  mutations: {
    setType(s, n) {
      s.type = n;
      setType(n);
      window.scrollTo(0, 0);
    },
  },
  actions: {
    changeType({ commit }, n) {
      commit("setType", n);
    },
  },
  modules: {},
});
