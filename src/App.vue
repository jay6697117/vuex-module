<template>
  <div id="app">
    <img alt="Vue logo" :src="logoPath" />
    <div class="name">{{ name }}</div>
    <button @click="setNameMutation">setNameMutation修改名字</button>
    <button @click="modifyNameAction">modifyNameAction修改名字</button>
    <button @click="setTextMutation">setTextMutation修改module</button>
    <button @click="modifyTextAction">modifyTextAction修改module</button>
    <button @click="rootStateTestAction" :disabled="true">rootStateTestAction修改module</button>
    <button @click="localCommitRootAction">localCommitRootAction修改名字</button>
    <button @click="moduleACommitRootAction">moduleACommitRootAction修改名字</button>
    <button @click="localRegRootAction">localRegRootAction修改module</button>
    <div class="module">moduleA text: {{ moduleAState.text }}</div>
    <div class="module">moduleB text: {{ moduleBState.text }}</div>
    <div class="module">totalText: {{ totalText }}</div>
    <div class="module">nameRoot: {{ nameRoot }}</div>
    <div class="module">textRoot: {{ textRoot }}</div>
    <div class="module">helloText: {{ helloText }}</div>
  </div>
</template>

<script>
import logoPath from './assets/logo.png';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import moduleA from './store/module/moduleA';
// console.log('moduleA :>> ', moduleA);

export default {
  name: 'App',
  components: {},
  data() {
    return {
      logoPath
    };
  },
  computed: {
    ...moduleA.computed,
    ...mapState({
      name: 'name',
      newName: 'newName',
      moduleAState: 'moduleA',
      moduleBState: 'moduleB'
    }),
    ...mapGetters({
      nameRootA: 'moduleA/nameRoot',
      nameRootB: 'moduleB/nameRoot'
    }),
    totalText() {
      return this.moduleAState.text + ' - ' + this.moduleBState.text;
    },
    nameRoot() {
      return this.nameRootA + ' || ' + this.nameRootB;
    },
    textRoot() {
      if (this.moduleAState.textRoot && this.moduleBState.textRoot) {
        return this.moduleAState.textRoot + ' || ' + this.moduleBState.textRoot;
      }
      return '';
    }
  },
  methods: {
    ...moduleA.methods,
    ...mapMutations({
      setName: 'setName',
      setTextA: 'moduleA/setText',
      setTextB: 'moduleB/setText'
    }),
    ...mapActions({
      modifyName: 'modifyName',
      modifyTextA: 'moduleA/modifyText',
      modifyTextB: 'moduleB/modifyText',
      rootStateTestA: 'moduleA/rootStateTest',
      rootStateTestB: 'moduleB/rootStateTest',
      localCommitRoot: 'moduleA/localCommitRoot',
      localRegRoot: 'localRegRoot'
    }),
    setNameMutation() {
      this.setName(this.newName);
    },
    setTextMutation() {
      this.setTextA(this.moduleAState.newText);
      this.setTextB(this.moduleBState.newText);
    },
    modifyNameAction() {
      this.modifyName(this.newName);
    },
    modifyTextAction() {
      this.modifyTextA(this.moduleAState.newText);
      this.modifyTextB(this.moduleBState.newText);
    },
    rootStateTestAction() {
      this.rootStateTestA();
      this.rootStateTestB();
    },
    localCommitRootAction() {
      this.localCommitRoot();
    },
    moduleACommitRootAction() {
      this.moduleACommitRoot();
    },
    localRegRootAction() {
      this.localRegRoot('-Reg');
    }
  },
  mounted() {
    console.log('App this :>> ', this);
    this.rootStateTestAction();
  },
  updated() {
    this.rootStateTestAction();
  }
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 100px;
}
.name {
  color: green;
  font-size: 24px;
  padding: 5px 0;
  margin-bottom: 15px;
  background-color: #e1e1e1;
}
.module {
  margin: 10px 0;
  padding: 10px 0;
  background-color: #e1e1e1;
}
button {
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 2px 5px;
}
</style>
