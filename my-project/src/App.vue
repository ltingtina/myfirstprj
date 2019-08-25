<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import leading from '@/components/login/leading';
export default {
  components: {
            'v-header': leading
        },
  name: 'App'
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
</style>
