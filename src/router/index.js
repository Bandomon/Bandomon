import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import Brinquedos from '@/views/BrinquedosView.vue'
import Pelucias from '@/views/PeluciasView.vue'
import Tcg from '@/views/TcgView.vue'

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
  },
  {
    path: '/brinquedos',
    name: 'Brinquedos',
    component: Brinquedos
  },
  {
    path: '/pelucias',
    name: 'Pelucias',
    component: Pelucias
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Tcg
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
