<template>
    <div id="xtVueDropdown">
      <div id="dropdownButton" @click="toggle">{{selectedText}}</div>
      <div id="dropdownMenu" v-show="ifShow">
        <div v-if="!grouped" class="dropdownList" v-for="item in listText" @click="select(item)">{{item}}</div>
        <div v-if="grouped" id="grouped">
            <div class="innerGroup" v-for="item in groupedData">
              <div class="groupName">{{item.groupName}}</div>
              <div class="groupList" v-for="listItem in item.groupList" @click="select(listItem)">{{listItem}}</div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "xt-vue-dropdown",
        data(){
          return {
            ifShow: false,
            selected: '',
          }
        },
        props: {
          grouped: {
            type: Boolean,
            default: false
          },
          placeholder: {
            type: String,
            default: 'please choose'
          },
          listText: {
            type: Array,
            default: () => []
          },
          groupedData: {
            type: Array,
            default: () => []
          }
        },
        methods: {
          toggle(){
            this.ifShow = !this.ifShow;
          },
          hide(e){
            console.log(e.target);
          },
          select(text){
            this.selected = text;
            this.ifShow = false;
          },
        },
      computed: {
        selectedText(){
          // this.selected =  this.placeholder;
          return this.selected;
        }
      },
      mounted(){
          this.selected =  this.placeholder
          // console.log(this.grouped)grouped
          document.addEventListener('click',this.hide, false)
      }
    }
</script>

<style scoped lang="scss">
  #xtVueDropdown {
    position:relative;
    text-align: left;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-bottom: 20px;
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
    font-size: 16px;
    &:hover {
      background-color: #f8f8f8;
    }
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
    background-color: #fff;
    z-index: 100;
    /*padding: 0px 20px;*/
    cursor: pointer;
    .dropdownList {
      padding: 0px 20px;
      height: 30px;
      line-height: 30px;
      font-size: 16px;
      &:hover {
        background-color: #f8f8f8;
      }
    }
    .innerGroup {
      padding: 0 10px;
      .groupName {
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        font-weight: 700;
        margin-top: 10px;
      }
      .groupList {
        font-size: 16px;
        height: 40px;
        line-height: 40px;
      }
    }
  }
</style>
