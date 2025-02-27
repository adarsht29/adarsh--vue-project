import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          component: () => import('@/views/ContactView.vue'),
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('@/views/BlogView.vue'),
        },
      ],
    },
  ],
})

export default router
