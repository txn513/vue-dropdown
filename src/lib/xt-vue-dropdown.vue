<template>
    <div id="xtVueDropdown">
      <div id="dropdownButton" @click="toggle">dropdownMenu</div>
      <div id="dropdownMenu" v-show="ifShow">
        <div class="dropdownList">one</div>
        <div class="dropdownList">two</div>
        <div class="dropdownList">three</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "xt-vue-dropdown",
        data(){
          return {
            ifShow: false
          }
        },
        methods: {
          toggle(){
            this.ifShow = !this.ifShow;
          }
        }
    }
</script>

<style scoped>
  #xtVueDropdown {
    position:relative;
    text-align: left;
  }
  #dropdownButton {
    display: inline-block;
    padding: 0px 10px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #4e555b;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    color: #4e555b;
    white-space: nowrap;
    cursor: pointer;
  }
  #dropdownMenu {
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform: translate(0,44px);
    -moz-transform: translate(0,44px);
    -ms-transform: translate(0,44px);
    -o-transform: translate(0,44px);
    transform: translate(0,44x);
    border: 1px solid rgba(0,0,0,.15);
    text-align: left;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    padding: 0px 20px;
  }
</style>
