import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import {routes} from "./routes";

Vue.use(VueRouter)
Vue.use(Meta, {
  refreshOnceOnNavigation: true
})


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
