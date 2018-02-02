// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  template: '<App :debug="debug" />',
  components: { App },
  data: { debug:true },
  methods: {
    toggleDebug() {
      this.debug = !this.debug
    }
  }
})

document.body.addEventListener("keypress", (e) => {
  // console.log(e.keyCode);
  if(e.keyCode === 96) {
    e.preventDefault();
    vm.toggleDebug();
  }
})