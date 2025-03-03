<script setup>
import { RouterLink } from 'vue-router'

import { cheesesArray } from '@/utils/cheese'

import Header from '@/components/HeaderHeader.vue'
import Footer from '@/components/FooterFooter.vue'
</script>
<template>
  <Header />

  <main id="main-guinness">
    <div>
      <img
        src="../assets/IMGS/G-guiness_leplusgrandplateaudumonde.jpg"
        alt="Plus grand plateau de fromages"
        class="first-img"
      />
    </div>

    <div class="container">
      <h1>Guinness World Records</h1>

      <h2 class="first-h2">
        GUINNESS WORLD RECORDS <br />
        LE PLUS GRAND PLATEAU DE FROMAGES DANS UN RESTAURANT AU MONDE EST À NARBONNE, AUX GRANDS
        BUFFETS !
      </h2>
      <div>
        <p>
          <span>Les Grands Buffets à Narbonne</span> proposent depuis décembre 2018
          <span>le plus grand plateau de fromages dans un restaurant au monde</span> et depuis
          Janvier 2020, ils détiennent le Record officialisé par le
          <span>Guinness World Records !</span>
        </p>
        <p>
          Accompagnés de <span>Xavier Thuret, Meilleur Ouvrier de France Fromager</span>, Louis
          Privat, fondateur des Grands Buffets et son épouse Jane, directrice des achats, sont allés
          au cœur des terroirs de France et d’Europe pour dénicher les meilleurs fromages et
          composer <span>la plus belle collection au monde de 111 fromages,</span> officiellement
          reconnue par le Guinness des records. Un écrin de 30 mètres linéaires a été également
          pensé et aménagé pour accueillir ces derniers.
        </p>
        <p>
          <em
            >« La France est LE pays du fromage. A travers cette distinction du Guinness World
            Records, nous voulions que le titre du plus grand plateau de fromages dans un restaurant
            soit décerné à la France et ne puisse pas être revendiqué par un restaurant de Las
            Vegas, Dubaï ou Shangaï »</em
          >
          explique Louis Privat, Fondateur des Grands Buffets.
        </p>
      </div>

      <img src="../assets/IMGS/G-fromage_1.jpg" alt="plus grand plateau fromages 2" class="img2" />

      <p>
        La ville de Narbonne accueille désormais
        <span>le plus grand plateau de fromages dans un restaurant au monde !</span> Ce plateau est
        approvisionné et présenté quotidiennement par
        <span
          >une équipe dédiée de 4 personnes animée par David Marrant, Maître-crémier des Grands
          Buffets.</span
        >
        Le restaurant propose plusieurs sélections thématiques permettant à chacun de découvrir ou
        redécouvrir les grands classiques ou les fromages insolites d’ici ou d’ailleurs...
      </p>
      <p>
        Des étiquettes spéciales, disposées sur le buffet, pour les 111 fromages présentant leurs
        caractéristiques en termes de saveurs, leur composition, leur provenance et leur puissance
        ont été conçues par Les Grands Buffets pour accompagner au mieux les clients dans leur
        dégustation.
      </p>

      <button>
        <RouterLink :to="{ name: 'bookingForm' }">RÉSERVER VOTRE TABLE EN LIGNE !</RouterLink>
      </button>

      <div class="div-border">
        <h2>Les 111 fromages du plateau</h2>
        <p>
          <span>
            Le Maître Crémier de la Maison, David Marrant et sa brigade de Crémiers, sauront vous
            conseiller et vous aider à composer l’assiette de fromages de vos rêves !</span
          >
        </p>
        <img
          src="../assets/IMGS/AA-plusgd-plateau-fromage2.jpg"
          alt="plus grand plateau fromages 2"
          class="img3"
        />

        <div class="div-cheeses">
          <p>
            En attendant votre <span>venue au restaurant les Grands Buffets à Narbonne</span>,
            donnez-vous l’eau à la bouche, avec la
            <span>liste de nos 111 fromages de France et d'Europe,</span> proposés à discrétion :
          </p>

          <div class="cheesesList">
            <div v-for="category in cheesesArray" :key="category">
              <h3>{{ category.title }}</h3>

              <div v-for="cheese in category.list" :key="cheese">
                <p><font-awesome-icon :icon="['fas', 'circle']" /> {{ cheese }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <img
            src="../assets/IMGS/G-lgb-fromage_valide_bd2.gif"
            alt="Dynamiques fromages"
            class="last-img"
          />
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>
<style scoped>
.first-h2 {
  text-align: center;
}
h2 {
  margin-bottom: 30px;
}
h3 {
  color: var(--orange);
  margin-bottom: 10px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--grey);
  line-height: 21px;
  margin: 10px 0;
}
.first-img,
.last-img {
  width: 100%;
}
.img2,
.img3 {
  width: 100%;
  margin: 20px 0;
}
span {
  color: var(--orange);
  font-weight: bold;
}
em {
  font-style: italic;
}

/* ---cheese list------ */
.div-border {
  border-bottom: 1px solid var(--light-grey);
  padding-bottom: 20px;
  margin-bottom: 40px;
}
.div-border p {
  text-align: center;
}
.div-cheeses {
  width: 100%;
}
.cheesesList {
  width: 100%;
  max-height: 1300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.cheesesList > div {
  border-left: 1px solid var(--light-grey);
  margin: 20px 0;
  padding: 0 10px;
  height: fit-content;
  flex-shrink: 0;
  width: calc((100% - 40px) / 3);
}
.cheesesList svg {
  height: 5px;
}
.cheesesList p {
  font-size: 10px;
  margin: unset;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* border: 1px solid plum; */
}
/* ---button------- */
button {
  text-align: center;
  border: none;
  background-color: var(--orange-button);
  padding: 5px 15px;
  margin: 20px 0;
}

button:hover {
  background-color: #fff;
  border: 1px solid var(--middle-grey);
}

a {
  font-size: 21px;
  line-height: 42px;
  font-family: 'BrandonGrotesqueBold', serif;
  color: white;
}
a:hover {
  color: var(--orange-button);
}
</style>
