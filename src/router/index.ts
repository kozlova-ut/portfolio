import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'portfolio',
      path: '/',
      component: () => import('@/components/MyPortfolio.vue')
    },
    {
      name: 'education',
      path: '/education',
      component: () => import('@/components/MyEuducation.vue')
    },
    {
      name: 'experience',
      path: '/experience',
      component: () => import('@/components/MyExperience.vue')
    }
  ]
})

export default router