<script setup>
import { RouterLink } from 'vue-router'

const displayAlert = () => {
  alert(`Mise à jour en cours, la page demandée n'est pas disponible. Veuillez nous en excuser !`)
}
</script>

<template>
  <footer id="footer">
    <section class="footer-top" id="footer-top">
      <div class="container">
        <div class="div-border div-border1">
          <h3>RÉSERVATION</h3>
          <div>
            <p>Réservez immédiatement en ligne</p>
            <!-- <input type="email" placeholder="Votre email" /> -->
            <button><RouterLink :to="{ path: '/booking' }">RÉSERVER</RouterLink></button>
          </div>
        </div>

        <div class="div-border div-border2">
          <h3>NOS PARTENAIRES</h3>
          <span @click="displayAlert()">TOURISME</span>
        </div>

        <div class="address">
          <h3>VENIR CHEZ NOUS</h3>
          <div>
            <p>
              Giratoire de la liberté <br />
              11100 Narbonne
            </p>

            <nav>
              <RouterLink :to="{ name: 'login' }">
                <font-awesome-icon :icon="['far', 'user-circle']" />
                <h4>MON COMPTE</h4>
              </RouterLink>
            </nav>
            <nav>
              <RouterLink :to="{ path: '/infos' }">
                <font-awesome-icon :icon="['far', 'question-circle']" />
                <h4>INFORMATIONS</h4>
              </RouterLink>
            </nav>
            <nav @click="displayAlert()">
              <font-awesome-icon :icon="['far', 'handshake']" />
              <h4>RECRUTEMENT</h4>
            </nav>
          </div>
        </div>

        <div class="tripadvisor">
          <div>
            <p class="underline">Les Grands Buffets</p>
            <div class="opinion">
              <p>
                <font-awesome-icon :icon="['fas', 'circle']" />
                <font-awesome-icon :icon="['fas', 'circle']" />
                <font-awesome-icon :icon="['fas', 'circle']" />
                <font-awesome-icon :icon="['fas', 'circle']" />
                <font-awesome-icon :icon="['fas', 'adjust']" />
              </p>
              <p class="view">12 310 avis</p>
            </div>

            <img
              src="../assets/IMGS/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
              alt="tripadvisor"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="footer-bottom" id="footer-bottom">
      <div class="container">
        <div class="first-div">
          <p>© 2025 Les Grands Buffets</p>
          <p>Mentions légales</p>
          <p>Plan du site</p>
          <p>
            Réalisation
            <a href="https://www.linkedin.com/in/sabrina-vernier-6634a9303/" target="_blank"
              >Sabrina</a
            >
            avec <a href="https://vuejs.org/" target="_blank">Vue.js</a>
          </p>
        </div>
        <div class="second-div">
          <nav><font-awesome-icon :icon="['fab', 'facebook-f']" /></nav>
          <nav><font-awesome-icon :icon="['fab', 'twitter']" /></nav>
          <nav><font-awesome-icon :icon="['fab', 'google-plus-g']" /></nav>
          <nav><font-awesome-icon :icon="['fab', 'youtube']" /></nav>
          <nav><font-awesome-icon :icon="['fab', 'instagram']" /></nav>
        </div>
      </div>
    </section>
  </footer>
</template>
<style scoped>
/* A généraliser sur tout le site */
footer {
  background-color: var(--black);
  padding: 40px 0 20px;
  /* position: fixed;
  bottom: 0;
  width: 100%; */
}

/* ---footer-top----------------- */
.footer-top {
  height: var(--footer-top-height);
  padding: 10px 0 0 0;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-grey);
}
.footer-top .container {
  /* height: 100%; */
  display: flex;
  height: fit-content;
}
.footer-top .container > div {
  width: 250px;
  margin-right: 25px;
  padding-right: 15px;
  padding-bottom: 15px;
}
.footer-top .container .div-border {
  border-right: 1px solid var(--border-grey);
}
.footer-top .container .div-border:first-child > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
.footer-top .container .address > div {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
.footer-top h3 {
  color: var(--orange);
  font-size: 16px;
  letter-spacing: 0.1em;
  margin-bottom: 40px;
}
.footer-top h4 {
  color: var(--white);
  font-size: 12px;
  letter-spacing: 1px;
}
.footer-top p {
  color: var(--grey);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  line-height: 16px;
}
.footer-top span {
  color: white;
  letter-spacing: 1px;
}
button {
  font-size: 13px;
  font-family: 'BrandonGrotesqueBold', sans-serif;
  color: var(--orange);
  background-color: var(--black);
  border: 2px solid var(--orange);
  padding: 5px 20px;
  letter-spacing: 1px;
}
.div-border1 a {
  color: var(--orange);
}

.footer-top .address svg {
  color: white;
  font-size: 20px;
}
.footer-top .address nav,
.footer-top .address nav a {
  display: flex;
  gap: 10px;
  align-items: center;
}
/* ---tripadvisor--- */
.tripadvisor > div {
  border: 2px solid var(--green);
  background-color: #fff;
  padding: 5px;
  height: 100px;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.tripadvisor img {
  height: 25px;
  object-fit: contain;
}
.tripadvisor .underline {
  color: var(--black);
  font-weight: bold;
  text-decoration: underline;
  font-size: 14px;
}
.tripadvisor .view {
  font-size: 11px;
}
.opinion {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.opinion svg {
  color: var(--green);
  height: 10px;
}
.opinion svg:not(:last-of-type) {
  margin-right: 1px;
}
/* ---footer-bottom------------- */
.footer-bottom {
  min-height: var(--footer-bottom-height);
}
.footer-bottom .container {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.footer-bottom .container > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-bottom .container > div:last-child {
  gap: 10px;
}
.footer-bottom nav svg {
  color: var(--grey);
  border: 2px solid var(--grey);
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding: 5px;
}
.footer-bottom p {
  color: var(--grey);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  letter-spacing: 0.2px;
  height: fit-content;
  padding: 0 5px 2px 5px;
  /* border: 1px solid red; */
}
.footer-bottom p:not(:last-of-type) {
  border-right: 1px solid var(--border-grey);
}
.footer-bottom a {
  font-weight: bold;
  color: var(--orange);
}
</style>
