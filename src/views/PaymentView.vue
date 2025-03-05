<script setup>
import { onBeforeMount, onMounted, ref, inject } from 'vue'
import { useRouter } from 'vue-router'

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

const router = useRouter()

const props = defineProps({
  id: String,
})
console.log('props reçues>>>', props)

const reservationInfos = ref('')
const adultAmount = ref('')
const childAmount = ref('')
const amount = ref('')
const errorMessage = ref('')
const isProcessing = ref(false)
const canceledBooking = ref(null)

onBeforeMount(async () => {
  const stripe = await stripePromise

  const elements = stripe.elements()

  cardElement.value = elements.create('card', {
    style: {
      base: {
        fontSize: '16px',
        color: 'black',
        '::placeholder': {
          color: 'rgb(173, 70, 88)',
        },
        iconColor: '#efad08',
      },
    },
  })

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
    isProcessing.value = true

    const stripe = await stripePromise

    const { token } = await stripe.createToken(cardElement.value)

    const stripeToken = token.id

    console.log('body requête>>>', stripeToken)

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
      isProcessing.value = false
      confirmedPayment.value = true
    } else {
      isProcessing.value = false
      // annulation de la réservation si erreur de paiement--------
      const { data } = await axios.delete(`http://localhost:1337/api/reservations/${props.id}`)
      canceledBooking.value = data
      console.log('reservation annulée>>>', canceledBooking.value)

      errorMessage.value = "Le paiement n'a pas été honoré. La réservation est annulée"

      router.go(-1)
    }
  } catch (error) {
    errorMessage.value = "Un problème est survenu, votre paiement n'a pas été effectué !"
    isProcessing.value = false

    console.log('error catch handlePayment>>>', error)
  }
}

const refreshPage = () => {
  // router.go(0)
  errorMessage.value = ''
}
</script>
<template>
  <main class="main-payment" id="main-payment">
    <div class="logo">
      <RouterLink :to="{ name: 'home' }">
        <img src="../assets/IMGS/logo-large.png" alt="logo" />
      </RouterLink>
    </div>

    <div class="container">
      <div>
        <h1>Finalisez votre paiement</h1>

        <section>
          <div v-if="reservationInfos && !confirmedPayment" class="infos-booking">
            <h3>Informations Réservation</h3>
            <p>
              <span>Nom :</span> "{{ reservationInfos.attributes.owner.data.attributes.username }}"
            </p>
            <p><span>Email :</span> "{{ reservationInfos.attributes.email }}"</p>
            <p><span>Date choisie :</span> "{{ formatDate(reservationInfos.attributes.date) }}"</p>
            <p><span>Horaire souhaité :</span> "{{ reservationInfos.attributes.hour }}"</p>
            <p>
              <span>Salle ou Jardin choisi :</span>
              "{{ nameOfRoom(reservationInfos.attributes.room) }}"
            </p>
            <div>
              <p>
                <span>Nombre de personnes :</span>
                "{{ reservationInfos.attributes.numberOfPlaces }}
                {{ reservationInfos.attributes.numberOfPlaces <= 1 ? 'personne' : 'personnes' }} au
                total (dont
                {{ reservationInfos.attributes.adult }}
                {{ reservationInfos.attributes.adult === 1 ? 'adulte' : 'adultes' }} et
                {{ reservationInfos.attributes.child }}
                {{ reservationInfos.attributes.child <= 1 ? 'enfant' : 'enfants' }})"
              </p>
            </div>

            <div class="amount">
              <p>Pour un montant total de :</p>
              <p>{{ amount }} €</p>
            </div>
          </div>

          <div v-if="confirmedPayment" class="success-payment">
            <p class="first-p">Commande effectuée pour la réservation aux Grands Buffets :</p>
            <p>
              => le {{ formatDate(reservationInfos.attributes.date) }} à
              {{ reservationInfos.attributes.hour }}
            </p>
            <p>
              Pour
              {{ reservationInfos.attributes.numberOfPlaces }}
              {{ reservationInfos.attributes.numberOfPlaces === 1 ? 'personne' : 'personnes' }}
            </p>
            <p>Dans "{{ nameOfRoom(reservationInfos.attributes.room) }}"</p>
          </div>

          <div v-else class="infos-card" @click="refreshPage">
            <h3>Informations Carte</h3>
            <div id="card-element"></div>
            <button v-if="!isProcessing" @click="handlePayment">Payer</button>
            <button class="processing" v-else>Paiement en cours</button>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
<style scoped>
.main-payment {
  margin-top: unset;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 20px;
  padding-top: 30px;
  background-color: var(--black);
}
.container {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  height: 600px;
  background-color: #fff;
}
.container > div {
  height: calc(100% - 40px);
  /* border: 1px solid red; */
  box-shadow: 0 0 6px 6px var(--shadow-grey);
  border-radius: 10px;
  background: linear-gradient(
    -10deg,
    lightcoral,
    rgb(247, 161, 161),
    rgb(249, 193, 193),
    rgb(253, 217, 217)
  );
  border-radius: 20px;
}
h1 {
  font-size: 40px;
  margin: 20px 0;
  text-align: center;
}
h3 {
  font-size: 26px;
  text-align: center;
  text-decoration: underline;
  padding-bottom: 20px;
  color: var(--middle-grey);
}
p {
  color: var(--black);
  margin-bottom: 10px;
  font-style: italic;
}
section {
  /* border: 1px solid green; */
  height: 60%;
  display: flex;
  margin: 20px;
}
section > div:last-child {
  background-color: #fff;
  border-radius: 20px;
}

.infos-booking {
  padding: 20px;
  flex: 1;
}
span {
  font-weight: bold;
  color: var(--pink-payment);
  font-size: 16px;
}
.amount {
  margin: 10px 50px 50px;
  padding: 10px;
  border: 5px double var(--white);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 20px;
}
.amount > p:first-child {
  color: var(--pink-payment);
  font-style: italic;
  text-decoration: underline;
}
.amount > p:last-child {
  color: var(--white);
  font-weight: 400;
  font-size: 30px;
}

/* ---div payment */
.infos-card {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.infos-card button {
  align-self: center;
  margin: 30px;
  padding: 8px 30px;
  font-size: 18px;
  background-color: var(--pink-payment);
  color: var(--white);
  border: none;
  border-radius: 10px;
}
.infos-card .processing {
  opacity: 0.5;
}
#card-element {
  border: 3px groove plum;
  border-radius: 10px;
  height: 100px;
  margin-top: 20px;
  padding: 20px;
}

.success-payment {
  font-size: 18px;
  font-weight: 200;
  /* color: var(--pink-payment); */
  border: 1px solid plum;
  height: 300px;
  width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.first-p {
  font-size: 18px;
  font-weight: 200;
  color: var(--pink-payment);
}

/* ---error--- */
.error-message {
  background-color: var(--orange-error);
  color: var(--white);
  padding: 5px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
</style>
