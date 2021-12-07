import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import {routes} from "./routes";
// import Home from '../views/Home.vue'
// import HotteokArticle from "../components/Articles/HotteokArticle";

Vue.use(VueRouter)
Vue.use(Meta, {
  refreshOnceOnNavigation: true
})

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/hotteok',
//     name: 'Hotteok',
//     component: HotteokArticle
//   }
// ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
