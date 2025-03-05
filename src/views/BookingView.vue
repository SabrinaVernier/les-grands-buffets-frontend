<script setup>
import { RouterLink } from 'vue-router'

import Header from '@/components/HeaderHeader.vue'
import Footer from '@/components/FooterFooter.vue'
</script>
<template>
  <Header />

  <main id="main-booking">
    <div>
      <img
        src="../assets/IMGS/X-les_grands_buffets_la_vitrine_mondiale_de_la_cuisine_dauguste_escoffier.png"
        alt="Cuisine d'Auguste Escoffier"
        class="first-img"
      />
    </div>
    <div class="container">
      <h1>Réservation</h1>
      <h2>UN MENU BUFFETS A VOLONTE POUR 62,90€</h2>
      <h2>LA VITRINE MONDIALE DE LA CUISINE D'AUGUSTE ESCOFFIER</h2>
      <h3>
        <span>LES GRANDS BUFFETS, LA VITRINE MONDIALE DE LA CUISINE D'AUGUSTE ESCOFFIER</span>
      </h3>
      <p>
        <span
          >Les Grands Buffets sont aujourd’hui reconnus par la fondation Escoffier comme la vitrine
          mondiale de la cuisine d’Auguste Escoffier,</span
        >
        inventeur de l’art culinaire au XIXème siècle et qui a élevé la cuisine française au rang de
        cuisine planétaire.
        <span
          >En proposant à discrétion, plus de 150 recettes d’Auguste Escoffier, entrées plats ou
          desserts,</span
        >
        les Grands Buffets vous offre le répertoire des plats emblématiques de la cuisine française
        du XlXeme siècle. Les Grands Buffets renouent avec le luxe, la tradition culinaire et la
        qualité de service digne d’un palace du temps d’Auguste Escoffier et propose les grands
        classiques du répertoire de la cuisine française
      </p>
      <p>
        Aux Grands Buffets comme au temps d'Auguste Escoffier,
        <span>la cuisine se fait sur place.</span>
      </p>
      <p>
        Le Plus Grand Plateau de Fromages dans un Restaurant au Monde est aux Grands Buffets et est
        inclus, sans supplément et à discrétion, dans le menu à <span>tarif unique à 62,90€</span> !
      </p>
      <p><span>La réservation se fait exclusivement par Internet !</span></p>
      <p>
        Fort de son succès auprès des guides et des recommandations chaleureuses dans les médias, il
        n’est pas étonnant que les Narbonnais soient si fiers de cet endroit, qui est désormais
        associé au patrimoine local. Mais attention, ce lieu est véritablement très prisé alors
        pensez à réserver votre table :
      </p>
      <ul>
        <li>
          Par <span>internet</span> : en quelques clics, réservez sur notre site via
          <span>le formulaire de réservation.</span> Une confirmation vous arrivera par mail
          quelques minutes plus tard.
        </li>
      </ul>
      <p>Pour toute question complémentaire, merci de vous référer à la Foire aux Questions.</p>

      <p class="italic">Cliquez sur le lien ci-dessous pour réserver en ligne pour un repas.</p>

      <button>
        <RouterLink :to="{ name: 'bookingForm' }">RÉSERVATION EN LIGNE</RouterLink>
      </button>
    </div>
  </main>

  <Footer />
</template>
<style scoped>
.container {
  padding: 20px 0 80px 0;
}
.first-img {
  width: 100%;
}
h2 {
  padding: 20px 0px;
  margin: 10px 0px;
  text-align: center;
}
h3 {
  margin-top: 30px;
}
p,
ul,
h3 {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 21px;
  color: var(--grey);
  padding: 10px 0px;
  margin-bottom: 10px;
}
.container ul {
  list-style: disc;
  padding-left: 30px;
}
span {
  color: var(--orange);
  font-weight: bold;
}
.italic {
  color: var(--orange);
  font-weight: bold;
  font-style: italic;
}

button {
  text-align: center;
  border: none;
  background-color: var(--orange-button);
  padding: 5px 15px;
  margin-bottom: 50px;
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
