import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Painel',
      name: 'painel',
      component: () => import('../views/Painel.vue')
    },
    {
      path: '/Cardapio',
      name: 'cardapio',
      component: () => import('../views/Cardapio.vue')
    },
    {
      path: '/Cadastros',
      name: 'cadastros',
      component: () => import('../views/Cadastros.vue')
    },
    {
      path: '/Pedidos',
      name: 'pedidos',
      component: () => import('../views/Pedidos.vue')
    }
  ]
})

export default router
