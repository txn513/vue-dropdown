<template>
  <div id="app">
    <!--<xt-vue-dropdown :selected-text=selectText :list-text=ungroupedListText></xt-vue-dropdown>-->
    <xt-vue-dropdown grouped :placeholder=selectText :grouped-data=groupedListText></xt-vue-dropdown>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      selectText: 'hahahah',
      ungroupedListText: [
        'tone',
        'ttwo',
        'tthree',
      ],
      groupedListText: [
        {
          groupName: 'group1',
          groupList: ['aaa','bbbb']
        },
        {
          groupName: 'group2',
          groupList: ['ccc','ddd']
        }
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
