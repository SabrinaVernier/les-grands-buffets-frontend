<script setup>
import { RouterLink } from 'vue-router'

import CelibrityComment from '@/components/CelibrityComment.vue'
import Header from '@/components/HeaderHeader.vue'
import Footer from '@/components/FooterFooter.vue'
</script>

<template>
  <Header />

  <main id="main-homeview main">
    <div>
      <CelibrityComment />
      <div class="container">
        <section class="navigation">
          <div class="news">
            <h4>ACTUALITÉS</h4>
            <h5>Édition 2023</h5>
            <h6>LES GRANDS BUFFETS: BUFFETS GASTRONOMIQUES HAUT DE GAMME"</h6>
            <p>
              L'édition 2023 du guide touristique Petit Futé Aude - Pays Cathare vient de sortir et
              fait la part belle aux <span>Grands Buffets</span> : " Buffets gastronomiques haut de
              gamme, vous allez vivre ...
            </p>
            <p>
              <RouterLink :to="{ path: '/comments' }">LIRE LA SUITE</RouterLink>
            </p>
          </div>
          <div class="booking">
            <h4>RÉSERVATION EN LIGNE</h4>
            <p>
              <span>Réservez votre table aux Grands Buffets</span> directement à partir de notre
              site ! C’est rapide, pratique et en quelques clics votre réservation est passée. Vous
              recevez quelques minutes plus tard votre mail de confirmation.
            </p>
            <button class="booking-button">
              <RouterLink :to="{ path: '/booking' }">RÉSERVER MAINTENANT</RouterLink>
            </button>
          </div>
          <div class="div-guinness">
            <h3>GUINNESS</h3>
            <div class="guinness">
              <p>LES GRANDS BUFFETS</p>
              <p>LE PLUS GRAND PLATEAU DE FROMAGES AU MONDE</p>
            </div>
            <button class="guinness-button">
              <RouterLink :to="{ path: '/guinness' }">DÉCOUVREZ-LE</RouterLink>
            </button>
          </div>
        </section>

        <h1>Menu Buffet à volonté à 62€90</h1>

        <section class="text">
          <div>
            <h2>LES GRANDS BUFFETS, VITRINE MONDIALE DE LA CUISINE D'AUGUSTE ESCOFFIER</h2>

            <p>
              <span
                >Les Grands Buffets sont aujourd’hui reconnus par la fondation Escoffier comme la
                vitrine mondiale de la cuisine d’Auguste Escoffier, inventeur de l’art culinaire au
                XIXème siècle et qui a élevé la cuisine française au rang de cuisine
                planétaire.</span
              >
              En proposant à discrétion, plus de 150 recettes d’Auguste Escoffier, entrées plats ou
              desserts, les Grands Buffets vous offre le répertoire des plats emblématiques de la
              cuisine française du XlXeme siècle. Les Grands Buffets renouent avec le luxe, la
              tradition culinaire et la qualité de service digne d’un palace du temps d’Auguste
              Escoffier et propose les grands classiques du répertoire de la cuisine française
            </p>
            <p>
              <span>Les Grands Buffets</span> a fait sienne une tradition française historiquement
              dénommée « service à la française » – celle des <span>buffets.</span> Depuis le
              Moyen-Age, c’est ainsi que les têtes couronnées et l’aristocratie française donnent
              leurs grands banquets. Distinct du service à l’anglaise ou à la russe,
              <span>le service à la française</span> consiste à servir tous les mets en même temps
              sur un <span>«buffet»</span> invitant chaque convive à composer son menu selon son
              goût et sa fantaisie. <span>À votre tour !</span>
            </p>
          </div>

          <div>
            <h2>UNE FORMULE DANS LA GRANDE TRADITION FRANÇAISE</h2>
            <p>
              <span>Le restaurant Les Grands Buffets à Narbonne</span> invite le public à revivre
              une expérience en voie de disparition : le
              <span>festin classique à la française,</span> sous forme de buffets regorgeant de mets
              exceptionnels.
            </p>
            <p>
              Notre <span>formule unique en France</span> rassemble toutes les pépites de notre
              patrimoine gastronomique : Canard au sang, Lièvre à la Royale, foie gras dans tous ses
              états, homard grillé ou à l’américaine, tripes mijotées, tête de veau gribiche,
              cassoulet, blanquette de veau à l’ancienne, os à moelle à la fleur de sel, sèches à la
              sétoise… Dans une profusion à perdre la raison, les plats canaille de nos terroirs
              côtoient les <span>plats incontournables</span> de la
              <span>cuisine traditionnelle française.</span> Donnez libre cours à vos gourmettes
              envies en composant un menu complet au gré de votre inspiration. Initiez votre périple
              gastronomique par une halte dans l’univers des <span>hors d’œuvres,</span> faites un
              détour par les <span>fruits de mer,</span> poursuivez votre procession via la
              <span>rôtisserie</span> puis laissez-vous émouvoir par la plus grande
              <span>collection de fromages du monde dans un restaurant avec 111 variétés !</span> Ne
              reste qu’à conclure votre banquet sur un tableau final composé d’une myriade de
              <span>pâtisseries</span> ou sur une <span>visite à nos maîtres glaciers</span> dans le
              <span>tout nouvel espace dédié aux crèmes glacées.</span> Au passage, on accompagne
              soigneusement, en piochant dans la carte des <span>150 crus.</span>
            </p>
          </div>
          <div>
            <h2>UN HOMMAGE AUX ARTS DE LA TABLE</h2>
            <p>
              Au restaurant <span>Les Grands Buffets,</span> le « revival » du festin classique à la
              française se poursuit bien au-delà de l’assiette et rend hommage aux
              <span>arts traditionnels de la table.</span> Plongé dans l’univers onirique d’une
              table prestigieuse, on déjeune ou dîne sur des nappes en tissu, éclairé aux
              chandelles. Chaque table, dressée au cordeau, met en scène un véritable cérémonial du
              repas classique à la française : verres à pied, vins carafés, napperons et serviettes
              brodées, couverts à poisson, etc.
            </p>
          </div>
        </section>

        <section class="pictures"></section>
      </div>
    </div>
  </main>

  <Footer />
</template>
<style scoped>
main h2 {
  padding: 15px 0;
  /* border-bottom: 1px solid var(--light-grey); */
}

main h3 {
  font-size: 21px;
  line-height: 21px;
  letter-spacing: 1px;
}

main h4 {
  font-size: 18px;
  letter-spacing: 0.8px;
  color: var(--orange);
  margin-bottom: 20px;
}
main h5 {
  font-size: 18px;
  font-family: 'BrandonGrotesqueLight', serif;
  color: var(--middle-grey);
}

main h6 {
  font-size: 15px;
  color: var(--grey);
}

main p {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--grey);
}
/* ---navigation--------- */
.navigation {
  border-bottom: 1px solid var(--light-grey);
  min-height: 300px;
  margin-bottom: 30px;
  padding: 20px 0 35px 0;
  display: flex;
}
.navigation > div {
  border-right: 1px solid var(--light-grey);
  max-width: calc(100% / 3);
  padding: 10px 20px 20px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  /* justify-content: space-around; */
}
.navigation > div:not(:first-of-type) {
  margin-left: 35px;
}
.navigation > div:last-child {
  background-color: var(--black);
  font-family: 'FengardoNeue_Black', sans-serif;
  color: white;
  padding: 0 20px;
  justify-content: space-evenly;
  align-items: center;
}
.navigation span {
  font-weight: bold;
}
.navigation p {
  line-height: 21px;
}
a {
  color: inherit;
}
.news a {
  color: var(--orange);
  text-decoration: underline;
}
.booking a,
.guinness a {
  color: var(--orange);
}
.guinness {
  font-size: 19px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.guinness p {
  font-family: 'FengardoNeue_Black', sans-serif;
  color: white;
  line-height: 21px;
  letter-spacing: 1px;
  text-align: center;
}

button {
  background-color: var(--white);
  border: 2px solid var(--orange-button);
  color: var(--orange);
  font-family: 'BrandonGrotesqueBold', serif;
  font-size: 15px;
  letter-spacing: 1.5px;
  padding: 5px 20px;
}
button:hover,
.booking a:hover {
  color: var(--white);
  background-color: var(--orange);
}
.guinness-button {
  background-color: var(--black);
}

/* ---zone text------------- */
.text > div > p:first-of-type {
  padding: 20px 0;
}

.text p {
  line-height: 20px;
}
.text span {
  color: var(--orange);
  font-weight: bold;
}
</style>
