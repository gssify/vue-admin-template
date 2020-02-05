import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Layout
  },
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Home'),
        meta: { title: 'Home', icon: 'dashboard' }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/About'),
        meta: { title: 'About', icon: 'about' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
