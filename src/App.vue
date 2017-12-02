<template>
  <div id="app">
    <xt-vue-dropdown :selected-text=selectText :list-text=listText></xt-vue-dropdown>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      selectText: 'hahahah',
      listText: [
        'tone',
        'ttwo',
        'tthree',
      ]
    }
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
  margin-top: 10px;
}
</style>
