import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName: "city" */ '@/views/city.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
