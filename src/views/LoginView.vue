<!-- eslint-disable no-undef -->
<script setup>
import { ref, inject, onMounted } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'

import axios from 'axios'

import Footer from '@/components/FooterFooter.vue'
import TranslateArea from '@/components/TranslateArea.vue'

const router = useRouter()
const route = useRoute()

const GlobalStore = inject('GlobalStore')
// console.log(GlobalStore.connectedUser.value)

let img = ref('')

const email = ref('sabrina@mail.com')
const password = ref('azerty')
const jwt = ref(null)

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:1337/api/buffets/6?populate[0]=pictures')

    console.log('data onmounted login', data)
    img.value = data.data.attributes.pictures
  } catch (error) {
    console.log('error onmounted login>>>', error)
  }
})

const handleSubmit = async () => {
  try {
    const { data } = await axios.post('http://localhost:1337/api/auth/local', {
      identifier: email.value,
      password: password.value,
    })

    // console.log('data login>>>', data.user)
    jwt.value = data.jwt
    // console.log('jwt login>>>', jwt.value)

    GlobalStore.updateInfos({
      username: data.user.username,
      jwt: data.jwt,
      id: data.user.id,
      email: data.user.email,
    })

    console.log('connectedUser>>>', GlobalStore.connectedUser.value)
    $cookies.set('loginInfos', GlobalStore.connectedUser.value)

    router.push({ path: route.query.redirect || '/' })
  } catch (error) {
    console.log('login catch error>>>', error)
  }
}
</script>
<template>
  <header>
    <div>
      <div>
        <RouterLink :to="{ path: '/' }">
          <img src="../assets/IMGS/logo-large.png" alt="logo" />
        </RouterLink>
      </div>

      <TranslateArea class="compo-translate" />
    </div>
  </header>

  <main id="main-login">
    <div v-if="img"><img :src="img.data[0].attributes.url" alt="leading-img" /></div>
    <div class="wrapper">
      <form action="login" @submit.prevent="handleSubmit">
        <h3>Connectez-vous à votre compte personnel MON COMPTE :</h3>

        <div class="div-input">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="votre email" v-model="email" />
        </div>

        <div class="div-input">
          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            placeholder="votre mot de passe"
            v-model="password"
          />
        </div>

        <div class="div-button">
          <button class="cancel-button">
            <RouterLink :to="{ path: '/' }">ANNULER</RouterLink>
          </button>
          <button class="submit-button">CONNEXION</button>
        </div>
        <div class="div-signup">
          <p>
            Si vous n'avez pas de compte, créez-en un ici !
            <RouterLink :to="{ name: 'signup' }"> Création de compte </RouterLink>
          </p>
        </div>
      </form>
    </div>
  </main>

  <Footer />
</template>
<style scoped>
header {
  background-color: var(--black);
  height: var(--header-top-height);
}
header > div {
  width: var(---container-width-login);
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header > div > div {
  height: 100%;
}
header img {
  height: 100%;
}

/* .compo-translate {
  border: unset;
} */

/* ------------------------- */
main {
  /* border: 1px solid red; */
  margin-top: unset;
  min-height: 460px;
  font-family: system-ui, sans-serif;
  color: var(--grey-green);
}
.wrapper {
  /* border: 1px solid green; */
  max-height: 500px;
  width: var(---container-width-login);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
h3 {
  font-size: 28px;
  line-height: 33px;
  font-weight: 400;
}
main img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

form {
  height: 400px;
  width: 790px;
  /* border: 1px solid plum; */
  background: var(--bgd-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 64px 0 40px 0;
  padding: 40px 30px;
}

.div-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.div-input input {
  width: 380px;
  height: 45px;
  border: 2px solid var(--light-grey);
}

/* ---div-button--------- */
.div-button {
  display: flex;
  gap: 5px;
  margin-top: 20px;
  align-self: flex-end;
}
button {
  border: none;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 12px 15px;
}
.submit-button {
  background-color: var(--orange-button);
  color: var(--white);
}
.cancel-button {
  background-color: var(--bgd-grey);
}
.cancel-button a {
  color: var(--grey-green);
}
/* ---div-signup--------- */
.div-signup {
  width: 100%;
  /* border: 1px solid plum; */
  text-align: center;
}
.div-signup a {
  color: var(--orange);
}
</style>
