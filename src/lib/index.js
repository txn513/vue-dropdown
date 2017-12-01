import xtVueDropdown from './xt-vue-dropdown.vue';

const xtVueDropdownPlugin =  {
  install: function(Vue){
    Vue.component(xtVueDropdown.name, xtVueDropdown);
  }
}

export default xtVueDropdownPlugin;
