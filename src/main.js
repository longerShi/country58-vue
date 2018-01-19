import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route/route'
import FastClick from 'fastclick'
import  { ToastPlugin } from 'vux'

Vue.use(ToastPlugin)
Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes
})

FastClick.attach(document.body)

new Vue({
  router
}).$mount('#app')
