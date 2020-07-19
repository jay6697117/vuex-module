//store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import moduleA from './module/moduleA';
import moduleB from './module/moduleB';
Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      name: 'Lucy Yang',
      newName: 'Jay Chou'
    };
  },
  getters: {},
  mutations: {
    setName: (state, newName) => {
      state.name = newName;
    }
  },
  actions: {
    modifyName: ({ commit }, newName) => {
      commit('setName', newName);
    }
  },
  modules: {
    moduleA,
    moduleB
  }
});

console.log('main store1 :>> ', store);
store.registerModule('moduleR', moduleB, { preserveState: true });
console.log('main store.state.moduleA :>> ', store.state.moduleA);
console.log('main store.state.moduleB :>> ', store.state.moduleB);
console.log('main store.state.moduleR :>> ', store.state.moduleR);
console.log('store.hasModule moduleR :>> ', store.hasModule('moduleR'));

console.log('main store2 :>> ', store);

export default store;
