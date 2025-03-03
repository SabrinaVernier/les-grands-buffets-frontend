/* eslint-disable no-undef */
import './assets/CSS/main.css'

import { createApp, ref } from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'

// Icons-----------------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCalendarAlt,
  faHandshake,
  faNewspaper,
  faQuestionCircle,
  faUserCircle,
} from '@fortawesome/free-regular-svg-icons'

import {
  faAdjust,
  faBars,
  faCaretDown,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faHome,
  faSearch,
  faSignOutAlt,
  faTimes,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faCalendarAlt,
  faUserCircle,
  faNewspaper,
  faQuestionCircle,
  faHome,
  faSearch,
  faCaretDown,
  faHandshake,
  faTwitter,
  faFacebookF,
  faGooglePlusG,
  faYoutube,
  faInstagram,
  faUser,
  faChevronRight,
  faChevronLeft,
  faCircle,
  faAdjust,
  faSignOutAlt,
  faBars,
  faTimes,
)

const app = createApp(App)

app.use(router)

// cookies------------------------------
app.use(VueCookies)

// provider------------------------------
const connectedUser = ref($cookies.get('loginInfos') || null)
console.log('main.js cookies>>>', connectedUser.value)

const updateInfos = (userInfos) => {
  // console.log('main.js>>>', userInfos)
  connectedUser.value = userInfos
  // console.log('main.js >>>', connectedUser.value)
}

app.provide('GlobalStore', { connectedUser: connectedUser, updateInfos: updateInfos })

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
