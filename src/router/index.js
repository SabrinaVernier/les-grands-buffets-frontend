import { createRouter, createWebHistory } from 'vue-router'
import { inject } from 'vue'

import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import BookingView from '@/views/BookingView.vue'
import BookingFormView from '@/views/BookingFormView.vue'
import AmbiencesView from '@/views/AmbiencesView.vue'
import PaymentView from '@/views/PaymentView.vue'
import PicturesView from '@/views/PicturesView.vue'
import CommentsView from '@/views/CommentsView.vue'
import ExperiencesView from '@/views/ExperiencesView.vue'
import InfosView from '@/views/InfosView.vue'

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
      component: AmbiencesView,
    },
    {
      path: '/pictures',
      name: 'pictures',
      component: PicturesView,
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
    {
      path: '/payment/:id',
      name: 'payment',
      props: true,
      component: PaymentView,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/comments',
      name: 'comments',
      component: CommentsView,
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ExperiencesView,
    },
    {
      path: '/infos',
      name: 'infos',
      component: InfosView,
    },
  ],
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

// ---navigation Guards-----
// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from) => {
  const GlobalStore = inject('GlobalStore')
  if (to.meta.requireAuth && !GlobalStore.connectedUser.value) {
    return { name: 'login', query: { redirect: to.path } }
  }
})

export default router
