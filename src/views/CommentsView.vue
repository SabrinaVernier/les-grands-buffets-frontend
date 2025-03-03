<script setup>
import Header from '@/components/HeaderHeader.vue'
import Footer from '@/components/FooterFooter.vue'

import { ref, onMounted } from 'vue'

import axios from 'axios'

const guideList = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:1337/api/guides?populate[0]=picture')
    console.log('data guide>>>', data.data)

    guideList.value = data.data
  } catch (error) {
    console.log('error catch guideview>>>', error)
  }
})
</script>
<template>
  <Header />

  <main id="main-comments">
    <div>
      <img
        src="../assets/IMGS/defaut_gd_buffets.jpg"
        alt="Cuisine d'Auguste Escoffier"
        class="first-img"
      />
    </div>

    <div class="container">
      <h1>Guides</h1>

      <p v-if="guideList.length === 0">Chargement en cours...</p>

      <div v-else class="div-guides">
        <div v-for="guide in guideList" :key="guide.id">
          <img :src="guide.attributes.picture.data[0].attributes.url" alt="image guide" />

          <div>
            <h3>{{ guide.attributes.title }}</h3>
            <p>{{ guide.attributes.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>
<style scoped>
.div-guides {
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-wrap: wrap;
  max-height: 1900px;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 20px;
  margin-bottom: 40px;
}
.div-guides > div {
  /* border: 1px solid var(--middle-grey); */
  box-shadow: 0 0 4px 2px var(--shadow-grey);
  flex-shrink: 0;
  width: calc((100% - 30px) / 3);
  height: fit-content;
}
.div-guides > div > div {
  padding: 20px;
}

h3 {
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}
p {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--grey);
  line-height: 21px;
  padding: 10px 0;
}
.first-img {
  width: 100%;
}
</style>
