<script setup>
import Header from '@/components/HeaderHeader.vue'
import Footer from '@/components/FooterFooter.vue'

import { onMounted, ref } from 'vue'

import axios from 'axios'

const roomInfos = ref('')

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:1337/api/rooms?populate[0]=pictures')

    console.log(data.data)
    roomInfos.value = data.data
  } catch (error) {
    console.log('error catch onmounted>>>', error)
  }
})
</script>
<template>
  <Header />

  <main v-if="roomInfos">
    <img class="first-picture" src="../assets/IMGS/Jardin-ambiance-5.jpg" alt="image du jardin" />

    <div>
      <h1 class="container">Les Ambiances</h1>

      <div class="container">
        <p>
          Le chic intemporel d’une table de prestige <br />
          Le restaurant Les Grands Buffets rend hommage aux arts de la table dans ce qu’ils ont de
          plus classique : nappes en tissu, serviettes brodées, mise de table impeccable, verres à
          pied, couverts à poisson, etc. Le raffinement de la décoration se dissimule dans l’emploi
          de matériaux nobles (boiseries acajou, etc.) et d’un éclairage tamisé tandis que les
          pastels hyperréalistes d'Alain Bellanger ajoutent une note tonique à cette atmosphère
          chaleureuse et élégante. Plusieurs artistes au coeur de notre inspiration :
        </p>
      </div>

      <div v-if="roomInfos">
        <section v-for="room in roomInfos" :key="room.id">
          <h2 class="container">{{ room.attributes.name }}</h2>

          <!--  update avec url cloudinary (backend()-->
          <img
            class="room-pictures"
            :src="room.attributes.pictures.data[0].attributes.url"
            alt="picture room"
          />
          <p class="container">{{ room.attributes.description1 }}</p>
          <p class="container">{{ room.attributes.description2 }}</p>
          <p class="container">{{ room.attributes.description3 }}</p>
        </section>
      </div>
    </div>
  </main>

  <main v-else>
    <div class="container">
      <p class="loading">Chargement en cours...</p>
    </div>
  </main>

  <Footer />
</template>
<style scoped>
h2 {
  font-size: 28px;
  line-height: 56px;
  letter-spacing: 2.8px;
  color: var(--orange);
  text-transform: uppercase;
  border-bottom: 1px solid var(--light-grey);
  padding: 7px 0;
  margin-bottom: 14px;
}

.first-picture,
.room-pictures {
  width: 100%;
  margin-bottom: 20px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 21px;
  margin-bottom: 10px;
  color: var(--grey);
}
</style>
