import { createRouter, createWebHistory } from 'vue-router'
const MainPage = () => import('@/pages/main-page/MainPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    }
  ]
})

export default router
