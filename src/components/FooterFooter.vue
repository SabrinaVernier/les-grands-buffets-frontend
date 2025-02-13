<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer>
    <section class="footer-top">
      <div class="container">
        <div class="div-border">
          <h3>NEWSLETTER</h3>
          <div>
            <p>Recevez toutes les informations</p>
            <input type="email" placeholder="Votre email" />
            <button>S'ABONNER</button>
          </div>
        </div>

        <div class="div-border">
          <h3>NOS PARTENAIRES</h3>
          <span>TOURISME</span>
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
              <font-awesome-icon :icon="['far', 'question-circle']" />
              <h4>FOIRE AUX QUESTIONS</h4>
            </nav>
            <nav>
              <font-awesome-icon :icon="['far', 'handshake']" />
              <h4>RECRUTEMENT</h4>
            </nav>
          </div>
        </div>

        <div class="tripadvisor">
          <div>
            <p class="underline">Les Grands Buffets</p>
            <div>
              <p>0 0 0 0 0</p>
              <p class="view">12 292 avis</p>
            </div>

            <img
              src="../assets/IMGS/Tripadvisor_lockup_horizontal_secondary_registered-18034-2.svg"
              alt="tripadvisor"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="footer-bottom">
      <div class="container">
        <div>
          <p>© 2025 Les Grands Buffets</p>
          <p>Mentions légales</p>
          <p>Plan du site</p>
          <p>Réalisation AttrapTemps</p>
        </div>
        <div>
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
  padding: 40px 0;
  /* position: fixed;
  bottom: 0;
  width: 100%; */
}

/* ---footer-top----------------- */
.footer-top {
  height: 300px;
  padding: 10px 0 20px 0;
}
.footer-top .container {
  height: 100%;
  display: flex;
}
.footer-top .container > div {
  width: 250px;
  margin-right: 25px;
  padding-right: 15px;
}
.footer-top .container .div-border {
  border-right: 1px solid var(--grey);
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
  gap: 30px;
  align-items: flex-start;
}
.footer-top h3 {
  color: var(--orange);
  font-size: 16px;
  letter-spacing: 0.1em;
  margin-bottom: 40px;
}
.footer-top h4 {
  color: white;
  font-size: 12px;
}
.footer-top p {
  color: var(--grey);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
}
.footer-top span {
  color: white;
}
button {
  font-size: 16px;
  font-family: BrandonGrotesqueBold, sans-serif;
  color: var(--orange);
}

.footer-top .address svg {
  color: white;
  font-size: 20px;
}
.footer-top .address nav,
.footer-top .address nav a {
  display: flex;
  gap: 15px;
  align-items: center;
}
.tripadvisor > div {
  border: 1px solid white;
  background-color: #fff;
  padding: 10px;
  height: 100px;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.tripadvisor img {
  height: 25px;

  border: 1px solid white;
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
/* ---footer-bottom------------- */
.footer-bottom {
  height: 36px;
}
.footer-bottom .container {
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.footer-bottom .container > div {
  display: flex;
  gap: 10px;
}
.footer-bottom nav svg {
  color: var(--grey);
}
.footer-bottom p {
  color: var(--grey);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;

  border-right: 1px solid var(--grey);
}
</style>
