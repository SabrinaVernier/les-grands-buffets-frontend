<script setup>
import { ref, inject, computed } from 'vue'
import { RouterLink } from 'vue-router'

import axios from 'axios'

const GlobalStore = inject('GlobalStore')

// ---Réservation sur 1 mois: juin 2025----
const minDate = '2025-06-01'
const maxDate = '2025-06-30'

// ---date du jour--------------
const todayDate = new Date()
const formatedTodayDate = todayDate.toLocaleDateString('en-CA')
console.log('date du jour>>>', formatedTodayDate) // format: 2025-02-19
console.log('date début réservation>>>', minDate) // format: 2025-06-01
console.log('date fin réservation>>>', maxDate) // format: 2025-06-30

//---réservation sur 1 an à partir de la date du jour --------
// const maxDate = computed(() => {
//   const formatDate = minDate.split('-')
//   formatDate.shift(0)
//   formatDate.unshift('2026')
//   return formatDate.join('-')
// })
// console.log('maxDate>>>', maxDate.value)

const date = ref('')
const dateId = ref(null)
const numOfAdult = ref('')
const numOfChild = ref('')
const hour = ref('')
const room = ref('')
const name = ref(GlobalStore.connectedUser.value.username)
const email = ref(GlobalStore.connectedUser.value.email)

// ------recherche de l'Id sur la collection BookingDate à la sortie de l'input date---
const searchDateId = async (selectedDate) => {
  console.log('date input>>>', selectedDate)
  const { data } = await axios.get('http://localhost:1337/api/booking-dates')
  // console.log('data axios.find>>>', data.data[0].attributes.date)

  const arrayOfDates = data.data
  // console.log('tableau de dates>>>', arrayOfDates)

  const idBookingDate = arrayOfDates.find((element) => {
    return element.attributes.date === date.value
  })
  console.log('idbookingdate>>>', idBookingDate)
  dateId.value = idBookingDate.id
}

// -----affichage de la date au bon format----
const formatDate = (date) => {
  const formatedDate = date.split('-').reverse().join('/')
  return formatedDate
}

// -------requête de soumission--------------
const handleSubmit = async () => {
  console.log('is submitting')

  const numberOfPlaces = numOfAdult.value + numOfChild.value

  // console.log({
  //   name: name.value,
  //   email: email.value,
  //   numberOfPlaces: numberOfPlaces,
  //   date: date.value,
  //   room: room.value,
  //   owner: GlobalStore.connectedUser.value.id,
  //   booking_date: dateId.value,
  //   jwt: `Bearer ${GlobalStore.connectedUser.value.jwt}`,
  // })

  const { data } = await axios.post(
    'http://localhost:1337/api/reservations?populate=*',
    {
      data: {
        name: name.value,
        email: email.value,
        numberOfPlaces: numberOfPlaces,
        date: date.value,
        hour: hour.value,
        room: room.value,
        owner: GlobalStore.connectedUser.value.id,
        booking_date: dateId.value,
      },
    },
    {
      headers: { Authorization: `Bearer ${GlobalStore.connectedUser.value.jwt}` },
    },
  )
  console.log('data in form>>>>', data)
  console.log('reservation submitted ')
}
</script>
<template>
  <main class="main-form">
    <div class="logo">
      <RouterLink :to="{ name: 'home' }">
        <img src="../assets/IMGS/logo-large.png" alt="logo" />
      </RouterLink>
    </div>
    <div class="container">
      <form action="réservation" @submit.prevent="handleSubmit">
        <h1>Formulaire de réservation</h1>
        <div>
          <label for="date">Date</label> :
          <input
            type="date"
            id="date"
            v-model="date"
            :min="minDate"
            :max="maxDate"
            @focusout="searchDateId(date)"
          />
          <span v-if="date">=> Date sélectionnée : {{ formatDate(date) }}</span>
        </div>

        <div class="person">
          <p>NOMBRE DE PARTICIPANTS</p>
          <label for="participant">Adulte</label> :
          <input type="number" id="participant" v-model="numOfAdult" min="1" />
          <label for="participant">Enfant -10ans</label> :
          <input type="number" id="participant" v-model="numOfChild" />
        </div>

        <div>
          <p>HORAIRE SOUHAITÉ</p>
          <label for="noon">Midi</label>
          <!-- <input type="radio" id="noon" name="hour" v-model="hour" value="noon" /> -->
          <select name="hour" id="noon" v-model="hour">
            <option value="">Choisir un horaire</option>
            <option value="12H">12h</option>
            <option value="12H30">12h30</option>
            <option value="13H">13h</option>
            <option value="13H30">13h30</option>
          </select>

          <!-- <label for="evening">Soir</label>
          <input type="radio" id="evening" name="hour" v-model="hour" value="evening" />
          <select v-if="hour === 'evening'" name="hour" id="evening">
            <option value="">Choisir un horaire</option>
            <option value="12H">19h15</option>
            <option value="12H30">19h45</option>
            <option value="13H">20h15</option>
            <option value="13H30">20h45</option>
            <option value="13H30">21h15</option>
          </select> -->
        </div>

        <div class="room">
          <p>SALLE OU JARDIN</p>
          <div class="display-section">
            <section>
              <div>
                <input type="radio" id="fontaine" v-model="room" name="room" value="fontaine" />
                <label for="fontaine">Salle Dorée Jean de La Fontaine</label>
              </div>

              <div>
                <input type="radio" id="nolin" v-model="room" name="room" value="nolin" />
                <label for="nolin">Tente d'Apparat de J.B Nolin</label>
              </div>

              <div>
                <input type="radio" id="carrington" v-model="room" name="room" value="carrington" />
                <label for="carrington">Salle Ann Carrington</label>
              </div>
            </section>

            <section>
              <div>
                <input type="radio" id="verrier" v-model="room" name="room" value="verrier" />
                <label for="verrier">Salle Max Le Verrier</label>
              </div>

              <div>
                <input type="radio" id="rosa" v-model="room" name="room" value="rosa" />
                <label for="rosa">Le Jardin Hervé di Rosa</label>
              </div>

              <div>
                <input type="radio" id="private" v-model="room" name="room" value="private" />
                <label for="private">Salle à manger privée</label>
              </div>
            </section>
          </div>
        </div>

        <div class="infos">
          <p>INFORMATIONS</p>
          <div>
            <label for="name">Name</label> :
            <input type="text" id="name" v-model="name" />
          </div>

          <div>
            <label for="email">Email</label> :
            <input type="email" id="email" v-model="email" />
          </div>
        </div>

        <button>Valider</button>
      </form>
    </div>
  </main>
</template>
<style scoped>
.main-form {
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
  display: flex;
  justify-content: center;
  background-color: #fff;
}
h1 {
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  background-color: var(--mustard);
  border: 1px solid var(--mustard);
  width: 100%;
  padding: 10px 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ---FORM--------------------- */
form {
  height: 600px;
  width: 600px;
  border: 2px solid var(--mustard);
  padding: 0 0 20px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

form > div {
  margin: 0 20px;
}

label {
  font-weight: bold;
  font-size: 13px;
}
p {
  font-weight: bold;
  color: var(--mustard);
  margin-bottom: 10px;
}
span {
  margin-left: 15px;
  color: var(--mustard);
}
.display-section {
  display: flex;
}
.person > label:nth-of-type(2) {
  margin-left: 10px;
}
.room input {
  margin: 10px 30px;
}

.infos > div {
  margin-bottom: 15px;
}
.infos input {
  width: 250px;
}

button {
  background-color: var(--light-mustard);
  padding: 5px 20px;
  border: 2px var(--mustard) solid;
  border-radius: 10px;
  color: var(--mustard);
  align-self: center;
}
button:hover {
  padding: 7px 40px;
  border: 4px var(--mustard) groove;
  font-size: 20px;
  border-radius: 15px;
}
</style>
