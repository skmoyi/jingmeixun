// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import {Swipe,SwipeItem} from 'vue-swipe';
import Vuex from 'Vuex';
import {mapState,mapGetters} from 'Vuex';

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(Vuex);

//let store = new Vuex.store({
//	state:{
//		stateA: "a",
//		stateB: "b",
//		stateC: "c"
//		
//	}
//})
//
//console.log(store.state.stateA)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
