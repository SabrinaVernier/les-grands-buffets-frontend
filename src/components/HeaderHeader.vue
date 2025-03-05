<script setup>
import { RouterLink } from 'vue-router'
import { inject, ref } from 'vue'

import TranslateArea from './TranslateArea.vue'

const GlobalStore = inject('GlobalStore')
console.log('header>>>', GlobalStore.connectedUser.value)

const menuListOpen = ref(false)

const deconnectUser = () => {
  // eslint-disable-next-line no-undef
  $cookies.remove('loginInfos')
  GlobalStore.connectedUser.value = null
}
</script>

<template>
  <header id="header">
    <section class="header-top" id="header-top" :class="{ noBorder: menuListOpen }">
      <div class="bp-975 bp-700">
        <div v-if="!menuListOpen" @click="menuListOpen = true">
          <font-awesome-icon :icon="['fas', 'bars']" class="menu-svg" />
        </div>

        <div v-else>
          <div @click="menuListOpen = false">
            <font-awesome-icon :icon="['fas', 'times']" class="menu-svg" />
          </div>
          <div class="list-display-click">
            <ul>
              <li><RouterLink :to="{ path: '/' }">ACCUEIL</RouterLink></li>
              <li><RouterLink :to="{ path: '/ambiences' }">RESTAURANT</RouterLink></li>
              <li><RouterLink :to="{ path: '/pictures' }">GALERIE</RouterLink></li>
              <li><RouterLink :to="{ path: '/login' }">MON COMPTE</RouterLink></li>
              <li><RouterLink :to="{ path: '/comments' }">ILS EN PARLENT</RouterLink></li>
              <li><RouterLink :to="{ path: '/experiences' }">DÉCOUVRIR</RouterLink></li>
              <li><RouterLink :to="{ path: '/infos' }">INFOS PRATIQUES</RouterLink></li>
            </ul>
          </div>
        </div>

        <div class="logo">
          <RouterLink :to="{ path: '/' }"
            ><img src="../assets/IMGS/logo-large.png" alt="logo"
          /></RouterLink>
        </div>

        <div class="connect">
          <div class="connectedUser" v-if="GlobalStore.connectedUser.value">
            <div>
              <p>Bonjour</p>
              <p class="bold">{{ GlobalStore.connectedUser.value.username }}</p>
            </div>
            <font-awesome-icon
              :icon="['fas', 'sign-out-alt']"
              class="deconnection"
              @click="deconnectUser"
            />
          </div>
        </div>

        <div class="translate">
          <TranslateArea />
        </div>
      </div>

      <div class="container" id="hidden-975">
        <nav>
          <RouterLink :to="{ name: 'booking' }">
            <font-awesome-icon :icon="['far', 'calendar-alt']" class="svg-home" />
            <p>RÉSERVER EN LIGNE</p>
          </RouterLink>
        </nav>

        <nav>
          <RouterLink :to="{ name: 'login' }">
            <font-awesome-icon :icon="['far', 'user-circle']" class="svg-home" />
            <p>MON COMPTE</p>
          </RouterLink>
        </nav>

        <nav>
          <RouterLink :to="{ path: '/comments' }">
            <font-awesome-icon :icon="['far', 'newspaper']" class="svg-home" />
            <p classe="width">REVUE DE PRESSE</p>
          </RouterLink>
        </nav>

        <nav>
          <RouterLink :to="{ path: '/infos' }">
            <font-awesome-icon :icon="['far', 'question-circle']" class="svg-home" />
            <p>INFOS</p>
          </RouterLink>
        </nav>

        <div class="connect">
          <div class="connectedUser" v-if="GlobalStore.connectedUser.value">
            <div>
              <p>Bonjour</p>
              <p class="bold">{{ GlobalStore.connectedUser.value.username }}</p>
            </div>
            <font-awesome-icon
              :icon="['fas', 'sign-out-alt']"
              class="deconnection"
              @click="deconnectUser"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="header-bottom" id="header-bottom">
      <div class="container" id="hidden-975">
        <RouterLink :to="{ path: '/' }">
          <img class="img-logo" src="../assets/IMGS/logo-large.png" alt="logo-large" />
        </RouterLink>

        <div class="infos">
          <RouterLink :to="{ path: '/' }"><font-awesome-icon :icon="['fas', 'home']" /></RouterLink>
          <h3><RouterLink :to="{ path: '/ambiences' }">RESTAURANT</RouterLink></h3>
          <h3><RouterLink :to="{ path: '/pictures' }">GALERIE</RouterLink></h3>
          <RouterLink :to="{ path: '/login' }"><h3>MON COMPTE</h3></RouterLink>
          <h3><RouterLink :to="{ path: '/comments' }">ILS EN PARLENT</RouterLink></h3>
          <h3><RouterLink :to="{ path: '/experiences' }">DÉCOUVRIR</RouterLink></h3>
          <h3><RouterLink :to="{ path: '/infos' }">INFOS PRATIQUES</RouterLink></h3>
        </div>

        <div class="language">
          <TranslateArea />
        </div>
      </div>
    </section>
  </header>
</template>
<style scoped>
/* A généraliser sur tout le site */
header {
  background-color: var(--black);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.bp-975 {
  display: none;
}

/* ---header-top-------------------- */
.header-top {
  border-bottom: 3px solid var(--orange);
  height: var(--header-top-height);
}
.header-top .container {
  height: 100%;
  display: flex;
}

.header-top .container > nav {
  width: 190px;
  display: flex;
  gap: 15px;
  align-items: center;
}
.header-top .container > nav a {
  display: flex;
  gap: 15px;
  align-items: center;
}
.header-top .container > nav:not(:last-of-type) {
  border-right: 1px solid var(--grey);
  margin-right: 40px;
  padding-right: 25px;
  line-height: 18px;
}

.header-top p {
  color: var(--orange);
  letter-spacing: 0.1em;
}

.header-top .container .svg-home {
  color: var(--white);
  font-size: 40px;
}

/* ---user----------- */
.connect {
  /* border: 1px solid white; */
  margin: 5px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.connectedUser {
  color: black;
  font-family: system-ui, sans-serif;
  font-style: italic;
  background-color: var(--orange);
  height: 100%;
  width: 150px;
  border-radius: 30px;
  border: 3px dotted var(--black);
  margin: 5px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.connectedUser > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.connectedUser p {
  color: black;
}
.bold {
  font-weight: bold;
}
/* --deconnection--- */
.header-top .deconnection {
  color: white;
  font-size: 18px;
  /* margin-top: 10px; */
}

/* ---header-bottom------------------ */
.header-bottom {
  /* border: 1px solid red; */
  height: var(--header-bottom-height);
}
.header-bottom .infos {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding-bottom: 20px;
}

.header-bottom .infos svg {
  color: var(--orange);
}

.header-bottom h3 {
  color: white;
  font-size: 16px;
  letter-spacing: 0.1em;
}
.header-bottom .container {
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.header-bottom .img-logo {
  width: 350px;
  object-fit: contain;
  margin: 10px 0px;
  /* border: 1px solid white; */
}

.language {
  position: absolute;
  right: 0px;
  top: 10px;
}

.infos a {
  text-decoration: none;
  color: white;
}

.infos h3:hover,
.infos a:hover {
  color: var(--orange);
}
.infos svg:hover {
  color: var(--white);
}
.infos h3::selection,
.infos a::selection {
  color: var(--orange);
}
</style>
