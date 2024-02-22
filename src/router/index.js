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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Painel.vue')
    },
    {
      path: '/Cardapio',
      name: 'cardapio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Cardapio.vue')
    },
    {
      path: '/Cadastros',
      name: 'cadastros',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Cadastros.vue')
    },
    {
      path: '/Cardapio',
      name: 'cardapio',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Cardapio.vue')
    }
  ]
})

export default router
