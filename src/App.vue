<template>
  <div id="app">
    <xt-vue-dropdown :dropdown-data=dataOne></xt-vue-dropdown>
    <xt-vue-dropdown :dropdown-data=dataTwo></xt-vue-dropdown>

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
      ],
      dataOne: {
        placeholder: 'nongrouped',
        grouped: false,
        data: [
          'tone',
          'ttwo',
          'tthree',
        ],
      },
      dataTwo: {
        placeholder: 'placeholder',
        grouped: true,
        data: [
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
