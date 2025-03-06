<script setup>
import { onMounted, ref } from 'vue'

import axios from 'axios'

import Header from '@/components/HeaderHeader.vue'
import Footer from '@/components/FooterFooter.vue'

const picturesList = ref(null)
const urlArray = ref([])
const startPage = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get(
      'https://site--lesgrandsbuffets-backend--hs5g6ynykk8z/api/buffets?populate[0]=pictures',
    )

    console.log('data pictureview>>>', data.data)
    picturesList.value = data.data
    startPage.value = data.data[0].attributes.pictures.data
    // console.log(startPage.value)
  } catch (error) {
    console.log('error catch pictureview>>>', error)
  }
})

// ---fonction avec boucle pour remplir tableau d'url des images de la collection---
const displayPictures = (objectInfos) => {
  startPage.value = []
  urlArray.value = []
  for (const picture of objectInfos.attributes.pictures.data) {
    urlArray.value.push(picture.attributes.url)
    // console.log(urlArray.value)
  }

  return urlArray.value
}
</script>
<template>
  <Header />

  <main v-if="picturesList" id="main-pictures">
    <div class="leading-picture">
      <img :src="picturesList[5].attributes.pictures.data[0].attributes.url" alt="image en-tête" />
    </div>

    <div class="container">
      <h1>Photos</h1>

      <section class="title">
        <div
          v-for="collection in picturesList"
          :key="collection.id"
          :class="{
            display:
              collection.attributes.title === 'Leading' ||
              collection.attributes.title === 'Citations',
          }"
          @click="displayPictures(collection)"
        >
          <h3>{{ collection.attributes.title }}</h3>
        </div>
      </section>

      <section v-if="startPage.length > 0" class="pictures">
        <div v-for="url in startPage" :key="url">
          <img :src="url.attributes.url" alt="buffet & rotisserie" />
        </div>
      </section>

      <section
        class="pictures"
        :class="{ smallHeight: urlArray.length < 7, bigHeight: urlArray.length > 12 }"
      >
        <div v-for="url in urlArray" :key="url">
          <!-- <p>{{ urlArray.length }}</p> -->
          <img :src="url" alt="url" />
        </div>
      </section>
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
.leading-picture img {
  width: 100%;
}

/* ---section-title---------- */
.title {
  /* border: 1px solid plum; */
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.title > div {
  /* border: 1px solid var(--orange); */
  color: var(--white);
  line-height: 21px;
  text-transform: uppercase;
  background-color: var(--orange);
  padding: 8px 16px;
  cursor: pointer;
}
.title > div:hover,
.title > div:active {
  color: var(--orange);
  background-color: var(--white);
  border: 3px solid var(--orange);
}
.display {
  display: none;
}
.title .changeColor {
  color: var(--orange);
  background-color: var(--white);
  border: 3px solid var(--orange);
}

/* ---section-pictures-------- */
.pictures {
  max-height: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 20px;
  margin-bottom: 40px;
}

.smallHeight {
  max-height: 950px;
}
.bigHeight {
  max-height: 1500px;
}
.pictures > div {
  width: calc((100% - 20px) / 3);
  height: fit-content;
  flex-shrink: 0;
  display: inline;
}
.pictures > div > img {
  width: 100%;
}
</style>
