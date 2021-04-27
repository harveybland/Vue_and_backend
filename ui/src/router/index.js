import Vue from 'vue'
import VueRouter from 'vue-router'
import clients from '../views/clients.vue'
import clientView from '../views/clientView.vue'
import closedCases from '../views/closedCases.vue'
import medical from '../views/Medical.vue'
import Injury from '../views/Injury.vue'
import Conveyancing from '../views/Conveyancing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/clients',
    component: clients
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
    path: '/medical',
    component: medical
  },
  {
    path: '/Injury',
    component: Injury
  },
  {
    path: '/Conveyancing',
    component: Conveyancing
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
