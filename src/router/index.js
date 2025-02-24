import { createRouter, createWebHistory } from 'vue-router'
import { inject } from 'vue'

import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import AmbienceView from '@/views/AmbiencesView.vue'
import SignupView from '@/views/SignupView.vue'
import BookingView from '@/views/BookingView.vue'
import BookingFormView from '@/views/BookingFormView.vue'
import AmbiencesView from '@/views/AmbiencesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ambiences',
      name: 'ambiences',
      component: AmbienceView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/booking',
      name: 'booking',
      component: BookingView,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/booking/form',
      name: 'bookingForm',
      component: BookingFormView,
      meta: {
        requireAuth: true,
      },
    },
  ],
})

// ---navigation Guards-----
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from) => {
  const GlobalStore = inject('GlobalStore')
  if (to.meta.requireAuth && !GlobalStore.connectedUser.value) {
    return { name: 'login', query: { redirect: to.name } }
  }
})

export default router
