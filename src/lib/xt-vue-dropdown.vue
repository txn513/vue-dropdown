<template>
    <div id="xtVueDropdown">
      <div id="dropdownButton" @click="toggle">{{placeholder}}</div>
      <div id="dropdownMenu" v-show="ifShow">
        <div v-if="!dropdownData.grouped" class="dropdownList" v-for="item in dropdownData.data" @click="select(item)">{{item}}</div>
        <div v-if="dropdownData.grouped" id="grouped">
            <div class="innerGroup" v-for="(item,index) in dropdownData.data">
              <div class="groupName">{{item.groupName}}</div>
              <div class="groupList"
                   v-for="(listItem,listItemIndex) in item.groupList"
                   @click="groupSelect(listItem,index,listItemIndex)"
                   :class="{'selected': groupIndex == index&&groupListIndex == listItemIndex}">
                {{listItem}}
              </div>
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
            selectedText: '',

            //
            groupIndex: -1,
            groupListIndex: -1,
          }
        },
        props: {
          dropdownData: {
            type: Object,
            default: () => {}
          },
          grouped: {
            type: Boolean,
            default: false
          },
        },
        methods: {
          toggle(){
            this.ifShow = !this.ifShow;
          },
          hide(e){
            console.log(e.target);
          },
          select(text){
            this.selectedText = text;
            this.ifShow = false;
          },
          groupSelect(text, groupIndex, groupListIndex){
            this.groupIndex = groupIndex;
            this.groupListIndex = groupListIndex;
            this.select(text);
          },
        },
      computed: {
        placeholder(){
          return this.selectedText;
        }
      },
      mounted(){
          this.selectedText =  this.dropdownData.placeholder
          document.addEventListener('click',this.hide, false)
      }
    }
</script>

<style scoped lang="scss">
  $hover-color: #eeeeee;
  $selected-color: #c3c3c3;

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
      background-color: $hover-color;
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
        background-color: $hover-color;
      }
      &.selected {
        background-color: $selected-color;
      }
    }
    #grouped {
      padding-bottom: 10px;
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
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        padding: 0 4px;
        &:hover {
          background-color: $hover-color;
        }
        &.selected {
          background-color: $selected-color;
        }
      }
    }
  }
</style>
