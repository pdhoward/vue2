<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Example msg="This is the example component" v-bind:seen=false rawHtml='style="border: 3px solid blue"' />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Example from './components/Example.vue'


var data = { a: 1,    
             seen: true }

export default {
  name: 'app',
  components: {
    HelloWorld,
    Example
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
