<template>
  <div id="app">
    <Header/>
      <router-view></router-view>
  </div>  
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
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
}

body {
  margin: 0px;
}
.new {
    position: absolute;
    background: #fff;
    height: 100%;
    top: 0;
    left: 0;
    width: 100%;
}
</style>
