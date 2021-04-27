import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import clients from '../views/clients.vue'
import cases from '../views/cases.vue'
import clientView from '../views/clientView.vue'
import closedCases from '../views/closedCases.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/clients',
    component: clients
  },
  {
    path: '/cases',
    component: cases
  },
  {
    path: '/clientView/:id',
    component: clientView
  },
  {
    path: '/clients/closedCases',
    component: closedCases
  },
  {
    path: '/createClient',
    component: () => import(/* webpackChunkName: "createClient" */ '../views/createClient.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
