import CultPage from '@/views/CultPage.vue'
import DogmaPage from '@/views/DogmaPage.vue'
import MainPage from '@/views/MainPage.vue'
import PlacesPage from '@/views/PlacesPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Главная',
      component: MainPage
    },
    {
      path: '/dogma',
      name: 'Догма',
      component: DogmaPage
    },
    {
      path: '/places',
      name: 'Места',
      component: PlacesPage
    },
    {
      path: '/cult',
      name: 'Культ',
      component: CultPage,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const isAuthorized = localStorage.getItem('cult') === 'brr'

    if (!isAuthorized) {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
