<script>

export default {
  components: {

  },
  data() {
    return {
      cards: [
        {
          name: "Il Matto",
          img: "matto.png",
          meaning: "Nuovi inizi, spontaneità, avventura.",
        },
        {
          name: "Il Mago",
          img: "mago.png",
          meaning: "Potere, abilità, concentrazione.",
        },
        {
          name: "La Papessa",
          img: "papessa.png",
          meaning: "Saggezza, intuizione, mistero.",
        },
        {
          name: "L'Imperatrice",
          img: "imperatrice.png",
          meaning: "Fertilità, abbondanza, creatività.",
        },
        {
          name: "L'Imperatore",
          img: "imperatore.png",
          meaning: "Autorità, controllo, stabilità.",
        },
        {
          name: "Il Papa",
          img: "papa.png",
          meaning: "Conoscenza spirituale, tradizione, insegnamento.",
        },
        {
          name: "Gli Amanti",
          img: "amanti.png",
          meaning: "Amore, relazioni, scelte.",
        },
        {
          name: "Il Carro",
          img: "carro.png",
          meaning: "Determinazione, vittoria, successo.",
        },
        {
          name: "La Giustizia",
          img: "giustizia.png",
          meaning: "Verità, equità, legge.",
        },
        {
          name: "L'Eremita",
          img: "eremita.png",
          meaning: "Riflessione, introspezione, solitudine.",
        },
        {
          name: "La Ruota della Fortuna",
          img: "ruota_fortuna.png",
          meaning: "Destino, cambiamento, cicli.",
        },
        {
          name: "La Forza",
          img: "forza.png",
          meaning: "Coraggio, pazienza, controllo.",
        },
        {
          name: "L'Appeso",
          img: "appeso.png",
          meaning: "Sospensione, prospettiva, sacrificio.",
        },
        {
          name: "La Morte",
          img: "morte.png",
          meaning: "Trasformazione, fine di un ciclo, nuovi inizi.",
        },
        {
          name: "La Temperanza",
          img: "temperanza.png",
          meaning: "Equilibrio, moderazione, armonia.",
        },
        {
          name: "Il Diavolo",
          img: "diavolo.png",
          meaning: "Tentazione, attaccamento, materialismo.",
        },
        {
          name: "La Torre",
          img: "torre.png",
          meaning: "Rovina, cambiamento improvviso, rivelazione.",
        },
        {
          name: "Le Stelle",
          img: "stelle.png",
          meaning: "Speranza, ispirazione, serenità.",
        },
        {
          name: "La Luna",
          img: "luna.png",
          meaning: "Illusione, intuizione, incertezza.",
        },
        {
          name: "Il Sole",
          img: "sole.png",
          meaning: "Felicità, successo, vitalità.",
        },
        {
          name: "Il Giudizio",
          img: "giudizio.png",
          meaning: "Rinascita, valutazione, risveglio.",
        },
        {
          name: "Il Mondo",
          img: "mondo.png",
          meaning: "Completamento, realizzazione, integrazione.",
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="card" v-for="card in cards">
      <h2>{{ card.name }}</h2>
      <img :src="`${card.img}`" alt="">
    </div>
  </div>
</template>

<style>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #b9bcf5aa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
