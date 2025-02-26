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

  <main>
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
  gap: 10px;
  flex-wrap: wrap;
  height: 1600px;
}
.div-guides > div {
  border: 1px solid var(--middle-grey);
  flex-shrink: 1;
  width: calc((100% - 20px) / 3);
  height: fit-content;
}
.div-guides > div > div {
  padding: 20px;
}
/* img {
  width: 100%;
} */
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
</style>
