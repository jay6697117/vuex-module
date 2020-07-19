export default {
  namespaced: true,
  state() {
    return {
      text: 'moduleB',
      newText: 'B',
      textRoot: ''
    };
  },
  getters: {
    nameRoot: (state, getters, rootState, rootGetters) => {
      return state.text + ' + ' + rootState.name;
    }
  },
  mutations: {
    setText: (state, newText) => {
      state.text = newText;
    },
    setGetter: (state, rootState) => {
      state.textRoot = state.text + ' - ' + rootState.name;
    }
  },
  actions: {
    modifyText: ({ commit }, newText) => {
      commit('setText', newText);
    },
    rootStateTest: ({ commit, rootState }) => {
      commit('setGetter', rootState);
    }
  }
};
