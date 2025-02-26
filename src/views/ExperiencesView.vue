<script setup>
import Header from '@/components/HeaderHeader.vue'
import Footer from '@/components/FooterFooter.vue'
</script>
<template>
  <Header />

  <main>
    <div>
      <h1 class="container">À Découvrir</h1>

      <ul class="first-ul">
        <li>
          <h2 class="container">Narbonne Arena</h2>
          <div>
            <img src="../assets/IMGS/Z-Arena.jpg" alt="arena" />

            <div class="container">
              <p>
                Offrez-vous une escapade Narbonnaise haute en saveurs... et en couleurs avec
                <span>Narbonne Arena,</span> la nouvelle scène culturelle du département !
              </p>
              <p>
                <span
                  >Narbonne Arena est la nouvelle scène culturelle, sportive et événementielle de
                  l’Aude. </span
                >Entièrement modulable de 1000 à 5000 places dans son espace principal et à partir
                de 10 personnes dans ses espaces annexes, <span>Narbonne Arena</span> est idéalement
                situé dans le territoire occitan et positionné à 1km de la sortie d’autoroute.
                Narbonne Arena(link is external) accueille de nombreux
                <span>spectacles de tournées nationales,</span> tout au long de l'année : concerts,
                artistes en tournée, comédies musicales, One Man Show, ballets classiques, opéras,
                spectacles d'humour…
              </p>
              <p>
                Nous vous invitons à les suivre sur
                <a href="https://www.facebook.com/NarbonneArena11/">Facebook</a> et découvrir toute
                la programmation
              </p>
            </div>
          </div>
        </li>

        <li>
          <h2 class="container">Office du tourisme</h2>
          <div>
            <img src="../assets/IMGS/Z-Office-tourisme.jpg" alt="office tourisme" />

            <div class="container">
              <p>
                <span>La belle Narbonne,</span> en plus d’être enveloppée dans un écrin de vignes et
                de garrigue, recèle de trésors historiques et architecturaux. Passionnés d’histoire,
                vous serez comblés de découvrir les récits autour de cette ville construite en -118
                par les Romains, conservant les traces de plusieurs siècles de vie.
              </p>
              <p>
                Amoureux de nature, le <span>littoral Narbonnais</span> séduit par son authenticité
                et ses nombreuses activités nautiques, tandis que derrière vous se dresse La Clape,
                ce massif de 15000 hectares concentrant les essences méditerranéennes les plus
                subtiles et vous offrant une vue à couper le souffle. Pour les plus citadins,
                laissez-vous embarquer dans <span>les ruelles typiques de Narbonne,</span> passez
                déguster quelques spécialités aux <span>célèbres Halles du centre ville,</span> ou
                bien flânez le long des berges de la Robine…
              </p>
            </div>
          </div>
        </li>

        <li class="liberte">
          <h2 class="container">Espace de liberté</h2>
          <div>
            <img src="../assets/IMGS/Z-Liberte.jpg" alt="" />

            <div class="container">
              <p>
                Profitez de votre visite aux <span>Grands Buffets</span> pour découvrir dans sa
                totalité <span>l'Espace de Liberté</span> : une piscine avec son toboggan géant et
                son Pentagliss, un jardin aquatique couvert, une patinoire, un bowling et un skate
                park.
              </p>
              <p>
                <span
                  >Il y en a pour tous les goûts et tous les âges, en famille ou entre amis…</span
                >
              </p>

              <p>
                Les moins sportifs apprécieront le confort cosy de notre pub traditionnel où leur
                est proposé un grand choix de bières provenant de tous les continents...
              </p>
              <p><span>Horaires d'ouverture :</span></p>
              <ul class="second-ul">
                <li class="li-margin">Piscine : Ouverte toute la semaine</li>
                <li>
                  Patinoire : Ouvert le mercredi, vendredi, samedi et dimanche (et toute la semaine
                  en période de vacances scolaires)
                </li>
                <li>Bowling : Ouvert toute la semaine</li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <h2 class="container">Escapade en pays Narbonnais</h2>
          <div>
            <img src="../assets/IMGS/Z-Chateau.jpg" alt="" />

            <div class="container">
              <p>
                Laissez-vous guider en toute saison, à travers ce territoire aux multiples facettes
                et partez à la découverte de ses sites fantastiques. Berceau de la romanité, vous
                découvrirez un <span>patrimoine historique</span> unique. Profitez-en également pour
                visiter <span>les vignobles</span> et déguster des produits de qualité, ou tout
                simplement, pour vous détendre en bord de <span>mer Méditerranée.</span>
              </p>
              <p>
                Nous vous proposons une sélection des plus belles adresses pour une
                <span>escapade en Pays Narbonnais...</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>

  <Footer />
</template>
<style scoped>
main {
  padding: 20px 0;
}
h2 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.first-ul {
  list-style-type: none;
}

img {
  width: 100%;
  margin-bottom: 20px;
}
p {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--grey);
  line-height: 21px;
  padding: 10px 0;
}
.second-ul {
  list-style-type: disc;
}

.second-ul > li {
  margin-left: 40px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--grey);
  line-height: 21px;
}

a {
  color: var(--orange);
  text-decoration: underline;
}
span {
  color: var(--orange);
  font-weight: bold;
}
</style>
