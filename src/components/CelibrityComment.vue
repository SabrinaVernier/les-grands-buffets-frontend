<script setup>
import { useCycleList } from '@vueuse/core'
import { computed } from 'vue'

import { celebrityArray, urlPictureCelebrity } from '@/utils/celebrity'

// const celebrityName = ref('')
// const celebrityJob = ref('')

const cycleList = computed(() => {
  const { state, prev, next } = useCycleList(urlPictureCelebrity)

  return { state, prev, next }
})

// ---fonction pour changer l'image de la célébrité---------
const displayCelebrity = (infos) => {
  cycleList.value.state.value = infos.url
  // celebrityName.value = infos.name
  // celebrityJob.value = infos.job
}
</script>

<template>
  <div class="div-celebrity" id="div-celebrity">
    <div class="celebrity-content container">
      <div class="caroussel-big">
        <img class="img1" :src="cycleList.state.value" alt="caroussel personnage" />
        <div class="absolute-name" v-for="celebrity in celebrityArray" :key="celebrity">
          <h3 v-if="cycleList.state.value === celebrity.url">
            {{ celebrity.job === ' ' ? ' ' : celebrity.name }}
          </h3>
          <h4 v-if="cycleList.state.value === celebrity.url">
            {{ celebrity.job === ' ' ? ' ' : celebrity.job }}
          </h4>
        </div>
      </div>

      <div class="caroussel-small">
        <font-awesome-icon :icon="['fas', 'chevron-left']" @click="cycleList.prev()" />
        <div class="caroussel-small-picture">
          <section v-for="celebrity in celebrityArray" :key="celebrity">
            <img
              class="img2"
              :src="celebrity.url"
              :alt="celebrity.url"
              @click="displayCelebrity(celebrity)"
            />

            <p>{{ celebrity.name }}</p>
          </section>
        </div>
        <font-awesome-icon :icon="['fas', 'chevron-right']" @click="cycleList.next()" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.div-celebrity {
  background-color: var(--black);
}

.celebrity-content {
  background-color: var(--black);
  border-bottom: 10px solid var(--orange);
}

.img1 {
  display: block;
  height: 440px;
  width: 100%;
  object-position: left;
}

svg {
  font-size: 50px;
  color: var(--grey);
}

/* ---big-caroussel -------- */
.caroussel-big {
  position: relative;
}
.absolute-name {
  height: 150px;
  width: 400px;
  position: absolute;
  right: 20px;
  top: 100px;
  /* border: 1px solid turquoise; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  transform: skew(-10deg) rotate(-12deg);
}
.absolute-name h3 {
  color: white;
  font-size: 50px;
  font-family: 'ThirstyRoughRegular', serif;
  letter-spacing: 1.5px;
  text-align: center;
}

.absolute-name h4 {
  color: var(--orange);
  font-size: 15px;
  font-family: 'BrandonGrotesqueLight', serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
/* ---small-caroussel------------ */
.caroussel-small {
  /* border: 1px solid red; */
  height: 140px;
  display: flex;
}
.caroussel-small section {
  /* border: 1px solid green; */
  width: calc(100% / 5);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
}
.caroussel-small-picture {
  height: 100%;
  overflow: scroll;
  display: flex;
}
.caroussel-small-picture::-webkit-scrollbar {
  display: none;
}
.caroussel-small-picture p {
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 16px;
}
.caroussel-small-picture p:first-of-type {
  text-align: center;
}
.img2 {
  width: 100%;
  object-fit: contain;
}
</style>
