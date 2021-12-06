import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HotteokArticle from "../components/Articles/HotteokArticle";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hotteok',
    name: 'Hotteok',
    component: HotteokArticle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "/kebinou-korea/",
  routes
})

export default router
