import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    token: sessionStorage.token ? JSON.parse(sessionStorage.token) : null,
    size: {
      width: "100%",
      height: "100%"
    }
  },
  mutations: {
    updateLoading(state, loading) {
      state.loading = loading;
    },
    changeContainerSize(state, size) {
      state.size = size;
    },
    updatedToken(state, token) {
      state.token = token;
    }
  },
  actions: {},
  modules: {}
});
