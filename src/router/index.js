import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '../views/HomeView.vue'
import BecomeTutor from '../views/BecomeTutor.vue'
import About from '../views/About.vue'
import Login from '../views/login.vue'
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
    {
      path: '/About',
      name: 'about',
      component: About
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
