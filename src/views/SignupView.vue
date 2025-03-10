<!-- eslint-disable no-undef -->
<script setup>
import { ref, onMounted, inject } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import axios from 'axios'

import Footer from '@/components/FooterFooter.vue'
import TranslateArea from '@/components/TranslateArea.vue'

const router = useRouter()
const route = useRoute()

const GlobalStore = inject('GlobalStore')
// console.log(GlobalStore.connectedUser.value)

let img = ref('')

const email = ref('')
const password = ref('')
const name = ref('')
const jwt = ref(null)
const errorMessage = ref('')
const isSubmitting = ref(false)

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://site--lesgrandsbuffets-backend--hs5g6ynykk8z.code.run/api/galleries/6?populate[0]=pictures',
    )

    console.log('data onmounted signup', data)
    img.value = data.data.attributes.pictures
  } catch (error) {
    console.log('error onmounted signup>>>', error)
  }
})

const handleSubmit = async () => {
  console.log('submit')
  errorMessage.value = ''

  if (email.value && password.value && name.value) {
    isSubmitting.value = true
    try {
      const { data } = await axios.post(
        'https://site--lesgrandsbuffets-backend--hs5g6ynykk8z.code.run/api/auth/local/register',
        {
          email: email.value,
          username: name.value,
          password: password.value,
        },
      )

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
      errorMessage.value = '"Une erreur est surnvenue", veuillez essayer à nouveau '
      console.log('signup catch error>>>', error)
    }
  } else {
    isSubmitting.value = false
    errorMessage.value = 'Veuillez remplir tous les champs'
    console.log('signupview - else>>>')
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

  <main id="main-signup">
    <div v-if="img">
      <img :src="img.data[0].attributes.url" alt="leading-img" />
    </div>

    <div class="wrapper">
      <form action="signup" @submit.prevent="handleSubmit">
        <h3>Créez votre compte personnel MON COMPTE :</h3>

        <div class="div-input">
          <label for="name">Nom</label>
          <input type="text" id="name" placeholder="votre nom" v-model="name" />
        </div>

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

        <div v-if="!errorMessage" class="div-button">
          <button class="cancel-button">
            <RouterLink :to="{ path: '/' }">ANNULER</RouterLink>
          </button>

          <button v-if="!isSubmitting" class="submit-button">CRÉATION COMPTE</button>
          <button v-else class="submit-button">Création compte en cours...</button>
        </div>

        <div v-else>
          <p class="error-message">{{ errorMessage }}</p>
        </div>

        <div class="div-login">
          <p>
            Si vous avez déjà un compte, connectez-vous ici !
            <RouterLink :to="{ name: 'login' }"> Connexion à votre compte </RouterLink>
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
  min-height: 500px;
  width: var(---container-width-login);
  margin: 0 auto;
  padding: 40px;
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
  object-position: left;
}

form {
  min-height: 430px;
  width: 790px;
  /* border: 1px solid plum; */
  background: var(--bgd-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 64px 0 50px 0;
  padding: 20px 30px;
}

.div-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.div-input input {
  width: 380px;
  height: 40px;
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
/* ---div-login--------- */
.div-login {
  width: 100%;
  margin: 20px 0;
  /* border: 1px solid plum; */
  text-align: center;
}
.div-login a {
  color: var(--orange);
}

/* ---error-------------- */
.error-message {
  color: var(--orange);
  font-size: 18px;
}
</style>
