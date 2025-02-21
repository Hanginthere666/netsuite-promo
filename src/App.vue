<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
};
</script>

<style>
/* 全局样式 */
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>