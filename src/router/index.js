import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import ProductDetail from '@/components/ProductDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
