import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import BecomeTutor from '../views/BecomeTutor.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/BecomeTutor',
      name: 'becometutor',
      component: BecomeTutor
    },
  ]
})

export default router
