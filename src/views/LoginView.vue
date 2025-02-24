<!-- eslint-disable no-undef -->
<script setup>
import { ref, inject } from 'vue'
import { RouterLink, useRouter, useRoute } from 'vue-router'

import axios from 'axios'

import Header from '@/components/HeaderHeader.vue'

const router = useRouter()
const route = useRoute()

const GlobalStore = inject('GlobalStore')
// console.log(GlobalStore.connectedUser.value)

const email = ref('sabrina@mail.com')
const password = ref('azerty')
const jwt = ref(null)

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

    router.push({ name: route.query.redirect || 'home' })
  } catch (error) {
    console.log('login catch error>>>', error)
  }
}
</script>
<template>
  <Header />

  <main>
    <div class="wrapper">
      <form action="login" @submit.prevent="handleSubmit">
        <h1>Connectez-vous à votre compte personnel MON COMPTE :</h1>

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="votre email" v-model="email" />

        <label for="password">Mot de passe</label>
        <input type="password" id="password" placeholder="votre mot de passe" v-model="password" />

        <div class="button">
          <button class="cancel-button">ANNULER</button>
          <button>CONNEXION</button>
        </div>
        <div>
          <p>Si vous n'avez pas de compte, créez-en un ici !</p>
          <RouterLink :to="{ name: 'signup' }">
            <p>Création de compte</p>
          </RouterLink>
        </div>
      </form>
    </div>
  </main>
</template>
<style scoped>
main {
  border: 1px solid red;
  min-height: 460px;
}
.wrapper {
  border: 1px solid green;
  height: 460px;
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  height: 400px;
  width: 790px;
  border: 1px solid plum;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 64px 0 40px 0;
  padding: 40px 30px;
}
</style>
