<script setup>
import { RouterLink } from 'vue-router'

import Header from '@/components/HeaderHeader.vue'
import Footer from '@/components/FooterFooter.vue'
</script>
<template>
  <Header />

  <main>
    <div class="container">
      <h1>Tarifs et Horaires</h1>

      <section>
        <h2>Tarifs des grands buffets</h2>
        <div>
          <div>
            <h3>Un seul prix pour tout.</h3>
            <p>
              Les Grands Buffets ont toutes les audaces, car non contents de proposer à leur
              clientèle la totalité de leurs buffets à discrétion (foie gras, homard, huîtres,
              saumon fumé compris), ils le font au prix unique de <span>62,90 €*</span> ! <br />
              <em>(*) Tarif à partir du 1er octobre 2024, hors boisson</em>
            </p>
          </div>
          <div>
            <h3>Deux privilèges enfants*</h3>
            <p>
              Pour les enfants de moins de 6 ans le menu est <span>gratuit</span> ! <br />
              Pour les enfants de 6 à 10 ans, le menu est à moitié prix soit <span>31,40 €</span> !
              <br />
              (*) à hauteur d'une gratuité OU d'un demi tarif enfant par
              <em
                >accompagnant adulte ayant commandé un repas. <br />
                Afin de bénéficier de la gratuité ou de la réduction sur le menu,
                <strong
                  >un justificatif d’identité sera à présenter pour les mineurs jusqu'à 10
                  ans.</strong
                ></em
              >
            </p>
          </div>
          <div>
            <h3>Tous les vins au prix du producteur !</h3>
            <p class="margin">
              Les bouteilles servies à table sont au même prix que chez le producteur !
            </p>
            <p>Nous acceptons les règlements par espèces et cartes bancaires (Visa, Mastercard).</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Horaires des grands buffets</h2>

        <div>
          <p class="margin">Ouverture tous les jours de l'année.</p>
          <p>
            <span>Les Grands Buffets </span>vous ouvrent leurs portes 365 jours par an, tous les
            jours de 12h00 à 13h30 et de 19h15 à 21h15. Le restaurant ferme ses portes à 16h30 pour
            le déjeuner et à minuit pour le dîner.
          </p>
        </div>
      </section>

      <button>
        <RouterLink :to="{ name: 'bookingForm' }">RÉSERVER VOTRE TABLE !</RouterLink>
      </button>
    </div>
  </main>

  <Footer />
</template>
<style scoped>
main {
  padding-bottom: 10px;
}
h3,
p {
  line-height: 21px;
}
h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: var(--orange);
  padding-top: 20px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--grey);
}
span {
  color: var(--orange);
  font-weight: bold;
}

em {
  font-style: italic;
}
strong {
  text-decoration: underline;
}
h2,
section:first-of-type,
.margin {
  margin-bottom: 20px;
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
