import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './route/route'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes
})

new Vue({
  router
}).$mount('#app')
