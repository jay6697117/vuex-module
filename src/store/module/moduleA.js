import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('moduleA');

export default {
  namespaced: true,
  state() {
    return {
      text: 'moduleA',
      newText: 'A',
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
    },
    localCommitRoot: ({ commit, rootState }) => {
      commit('setName', rootState.newName, { root: true });
    },
    localRegRoot: {
      root: true,
      handler({ state, commit }, payload) {
        commit('setText', state.newText + payload);
      }
    }
  },
  computed: {
    ...mapState({
      helloText: state => 'hello, ' + state.text
    })
  },
  methods: {
    ...mapActions({
      moduleACommitRoot: 'localCommitRoot'
    })
  }
};
