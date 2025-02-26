<script setup>
import { onBeforeMount, onMounted, ref, inject } from 'vue'

import { loadStripe } from '@stripe/stripe-js'

import axios from 'axios'

// Création d'une instance de Stripe (👇 Pensez à remplacer par votre clé publique)
const stripePromise = loadStripe(
  'pk_test_51Qmb0dE1eNp1L4yW0zW3sP8YD4LCXNfGcEq1zRwnbbiViCQEcTItJLx51tlSR9btZrgXijw8fmsbGXxmZN39a1so00qzUTdy5b',
)

// Valeur réactive qui stockera l'élément 'Card'
const cardElement = ref(null)
const confirmedPayment = ref(false)

const GlobalStore = inject('GlobalStore')

const props = defineProps({
  id: String,
})
console.log('props reçues>>>', props)

const reservationInfos = ref('')
const adultAmount = ref('')
const childAmount = ref('')
const amount = ref('')
const errorMessage = ref('')

onBeforeMount(async () => {
  const stripe = await stripePromise

  const elements = stripe.elements()

  cardElement.value = elements.create('card')

  cardElement.value.mount('#card-element')
})

onMounted(async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:1337/api/reservations/${props.id}?populate=*`,
    )

    reservationInfos.value = data.data
    console.log('data onMounted>>>', reservationInfos.value)
    adultAmount.value = reservationInfos.value.attributes.adult * 62
    childAmount.value = reservationInfos.value.attributes.child * 31
    amount.value = adultAmount.value + childAmount.value
  } catch (error) {
    console.log('error catch payment>>>', error)
  }
})

// -----affichage de la date au bon format----
const formatDate = (date) => {
  const formatedDate = date.split('-').reverse().join('/')
  return formatedDate
}

// ---fonction pour nom de salle en entier---
const nameOfRoom = (room) => {
  let roomName = ''
  if (room === 'fontaine') {
    roomName = 'Le Salon Jean de la Fontaine'
  }
  if (room === 'nolin') {
    roomName = "La Tente d'Apparat J-B Nolin"
  }
  if (room === 'carrigton') {
    roomName = 'La Salle Ann Carrigton'
  }
  if (room === 'verrier') {
    roomName = 'La Salle Max Le Verrier'
  }
  if (room === 'rosa') {
    roomName = 'Le Jardin Hervé di Rosa'
  }
  if (room === 'private') {
    roomName = 'La Salle privée'
  }
  return roomName
}

// ---fonction qui déclenche le paiement-----
const handlePayment = async () => {
  try {
    const stripe = await stripePromise

    const { token } = await stripe.createToken(cardElement.value)

    const stripeToken = token.id

    // console.log('body requête>>>', {
    //   token: stripeToken,
    //   amount: amount.value,
    //   title: `La réservation aux Grands Buffets le ${formatDate(reservationInfos.value.attributes.date)} pour ${reservationInfos.value.attributes.numberOfPlaces} ${reservationInfos.value.attributes.numberOfPlaces === 1 ? 'personne' : 'personnes'}`,
    // })

    const response = await axios.post(
      'http://localhost:1337/api/reservations/buy',
      {
        token: stripeToken,
        amount: amount.value,
        title: `La réservation aux Grands Buffets le ${formatDate(reservationInfos.value.attributes.date)} pour ${reservationInfos.value.attributes.numberOfPlaces} ${reservationInfos.value.attributes.numberOfPlaces === 1 ? 'personne' : 'personnes'}`,
      },
      {
        headers: {
          Authorization: `Bearer ${GlobalStore.connectedUser.value.jwt}`,
        },
      },
    )

    if (response.data.status === 'succeeded') {
      confirmedPayment.value = true
    } else {
      errorMessage.value = "Le paiement n'a pas été honoré. La réservation est annulée"
    }
  } catch (error) {
    console.log('error catch handlePayment>>>', error)
  }
}
</script>
<template>
  <main class="main-payment">
    <div class="logo">
      <RouterLink :to="{ name: 'home' }">
        <img src="../assets/IMGS/logo-large.png" alt="logo" />
      </RouterLink>
    </div>

    <div class="container">
      <h1>Finalisez votre paiement</h1>

      <div v-if="reservationInfos && !confirmedPayment">
        <p>Nom : {{ reservationInfos.attributes.owner.data.attributes.username }}</p>
        <p>Email : {{ reservationInfos.attributes.email }}</p>
        <p>Date choisie : {{ formatDate(reservationInfos.attributes.date) }}</p>
        <p>Horaire souhaité : {{ reservationInfos.attributes.hour }}</p>
        <p>Salle ou Jardin choisi : {{ nameOfRoom(reservationInfos.attributes.room) }}</p>
        <div>
          <p>Nombre de personnes : {{ reservationInfos.attributes.numberOfPlaces }} au total</p>
          <p>
            dont {{ reservationInfos.attributes.adult }}
            {{ reservationInfos.attributes.adult === 1 ? 'adulte' : 'adultes' }} et
            {{ reservationInfos.attributes.child }}
            {{ reservationInfos.attributes.child <= 1 ? 'enfant' : 'enfants' }}
          </p>
        </div>
        <p>Pour un montant de {{ amount }} €</p>
      </div>

      <div v-if="confirmedPayment" class="success-payment">
        <p class="success-payment">
          Commande effectuée pour la réservation aux Grands Buffets le
          {{ formatDate(reservationInfos.attributes.date) }} à
          {{ reservationInfos.attributes.hour }} pour
          {{ reservationInfos.attributes.numberOfPlaces }}
          {{ reservationInfos.attributes.numberOfPlaces === 1 ? 'personne' : 'personnes' }} dans "{{
            nameOfRoom(reservationInfos.attributes.room)
          }}"
        </p>
      </div>

      <div v-else>
        <div id="card-element"></div>
        <button @click="handlePayment">Payer</button>
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.main-payment {
  margin-top: unset;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 20px;
  color: var(--grey);
  padding-top: 30px;
  background-color: var(--black);
}
.container {
  margin-top: 10px;
  padding: 20px 0;
  height: calc(100vh - 130px);
  /* display: flex;
  justify-content: center; */
  background-color: #fff;
}
h1 {
  font-size: 40px;
  margin: 20px 0;
  text-align: center;
}

/* ---div payment */
#card-element {
  border: 1px solid plum;
  height: 200px;
  width: 600px;
}

.success-payment {
  font-size: 18px;
  font-weight: 200;
  color: var(--orange);
  border: 1px solid plum;
  height: 300px;
  width: 500px;
  text-align: center;
}
</style>
