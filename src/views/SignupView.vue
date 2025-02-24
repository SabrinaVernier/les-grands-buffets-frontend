<script setup>
import { ref } from 'vue'

import { RouterLink } from 'vue-router'

import Header from '@/components/HeaderHeader.vue'

const email = ref('')
const password = ref('')
const name = ref('')

const handleSubmit = () => {
  console.log('submit')
}
</script>
<template>
  <Header />

  <main>
    <div class="wrapper">
      <form action="login" @submit.prevent="handleSubmit">
        <h1>Créez votre compte personnel:</h1>

        <label for="name">Email</label>
        <input type="text" id="name" placeholder="votre nom" v-model="name" />

        <label for="email">Email</label>
        <input type="email" id="email" placeholder="votre email" v-model="email" />

        <label for="password">Mot de passe</label>
        <input type="password" id="password" placeholder="votre mot de passe" v-model="password" />

        <div class="button">
          <button class="cancel-button">ANNULER</button>
          <button>CRÉATION COMPTE</button>
        </div>
        <div>
          <p>Si vous avez déjà un compte, connectez-vous ici !</p>
          <RouterLink :to="{ name: 'login' }">
            <p>Connexion à votre compte</p>
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
