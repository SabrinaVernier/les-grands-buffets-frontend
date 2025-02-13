<script setup>
import { RouterLink } from 'vue-router'
import { inject } from 'vue'

const GlobalStore = inject('GlobalStore')
console.log('header>>>', GlobalStore.connectedUser.value)
</script>

<template>
  <header>
    <section class="header-top">
      <div class="container">
        <nav>
          <font-awesome-icon :icon="['far', 'calendar-alt']" />
          <p>RÉSERVER EN LIGNE</p>
        </nav>

        <nav>
          <RouterLink :to="{ name: 'login' }">
            <font-awesome-icon :icon="['far', 'user-circle']" />
            <p>MON COMPTE</p>
          </RouterLink>
        </nav>

        <nav>
          <font-awesome-icon :icon="['far', 'newspaper']" />
          <p>REVUE DE PRESSE</p>
        </nav>

        <nav>
          <font-awesome-icon :icon="['far', 'question-circle']" />
          <p>FAQ</p>
        </nav>
        <div class="connectedUser" v-if="GlobalStore.connectedUser.value">
          <p>Bonjour</p>
          <p>{{ GlobalStore.connectedUser.value.username }}</p>
        </div>
      </div>
    </section>

    <section class="header-bottom">
      <div class="container">
        <RouterLink :to="{ name: 'home' }">
          <img class="img-logo" src="../assets/IMGS/logo-large.png" alt="logo-large" />
        </RouterLink>

        <div class="infos">
          <font-awesome-icon :icon="['fas', 'home']" />
          <h3>RESTAURANT</h3>
          <h3>GALERIE</h3>
          <RouterLink :to="{ name: 'login' }"><h3>MON COMPTE</h3></RouterLink>
          <h3>ILS EN PARLENT</h3>
          <h3>DÉCOUVRIR</h3>
          <h3>INFOS PRATIQUES</h3>
        </div>

        <div class="language">
          <font-awesome-icon :icon="['fas', 'search']" />
          <div>
            <img src="../assets/IMGS/fr.png" alt="drapeau français" />
            <p>FRANÇAIS <font-awesome-icon :icon="['fas', 'caret-down']" /></p>
          </div>
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
.header-top .container > nav:not(:last-child) {
  border-right: 1px solid var(--grey);
  margin-right: 40px;
  padding-right: 55px;
  line-height: 18px;
}

.header-top p {
  color: var(--orange);
  letter-spacing: 0.1em;
}

.header-top svg {
  color: var(--white);
  font-size: 40px;
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

.header-bottom .language > svg {
  color: var(--orange);
  margin: 10px 20px 0 0;
  font-size: 20px;
}
/* .language img {
  height: 10px;
} */
.language {
  border: 1px solid white;
  display: flex;
  position: absolute;
  right: 0px;
}

.language > div {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 0 10px 20px;
}
.language > div p {
  color: white;
  font-family: BrandonGrotesqueLight, sans-serif;
  font-size: 11px;
  letter-spacing: 3px;
}

/* ---user----------- */
.connectedUser {
  color: white;
}
.connectedUser svg {
  font-size: 20px;
}
</style>
