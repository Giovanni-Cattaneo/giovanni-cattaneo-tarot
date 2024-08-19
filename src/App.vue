<script>

export default {
  components: {

  },
  data() {
    return {
      flipCard: [],
      over: true,
      cards: [
        {
          name: "Il Matto",
          retro: "retro.png",
          img: "matto.png",
          meaning: "Nuovi inizi, spontaneità, avventura.",
        },
        {
          name: "Il Mago",
          retro: "retro.png",
          img: "mago.png",
          meaning: "Potere, abilità, concentrazione.",
        },
        {
          name: "La Papessa",
          retro: "retro.png",
          img: "papessa.png",
          meaning: "Saggezza, intuizione, mistero.",
        },
        {
          name: "L'Imperatrice",
          retro: "retro.png",
          img: "imperatrice.png",
          meaning: "Fertilità, abbondanza, creatività.",
        },
        {
          name: "L'Imperatore",
          retro: "retro.png",
          img: "imperatore.png",
          meaning: "Autorità, controllo, stabilità.",
        },
        {
          name: "Il Papa",
          retro: "retro.png",
          img: "papa.png",
          meaning: "Conoscenza spirituale, tradizione, insegnamento.",
        },
        {
          name: "Gli Amanti",
          retro: "retro.png",
          img: "amanti.png",
          meaning: "Amore, relazioni, scelte.",
        },
        {
          name: "Il Carro",
          retro: "retro.png",
          img: "carro.png",
          meaning: "Determinazione, vittoria, successo.",
        },
        {
          name: "La Giustizia",
          retro: "retro.png",
          img: "giustizia.png",
          meaning: "Verità, equità, legge.",
        },
        {
          name: "L'Eremita",
          retro: "retro.png",
          img: "eremita.png",
          meaning: "Riflessione, introspezione, solitudine.",
        },
        {
          name: "La Fortuna",
          retro: "retro.png",
          img: "fortuna.png",
          meaning: "Destino, cambiamento, cicli.",
        },
        {
          name: "La Forza",
          retro: "retro.png",
          img: "forza.png",
          meaning: "Coraggio, pazienza, controllo.",
        },
        {
          name: "L'Appeso",
          retro: "retro.png",
          img: "appeso.png",
          meaning: "Sospensione, prospettiva, sacrificio.",
        },
        {
          name: "La Morte",
          retro: "retro.png",
          img: "morte.png",
          meaning: "Trasformazione, fine di un ciclo, nuovi inizi.",
        },
        {
          name: "La Temperanza",
          retro: "retro.png",
          img: "temperanza.png",
          meaning: "Equilibrio, moderazione, armonia.",
        },
        {
          name: "Il Diavolo",
          retro: "retro.png",
          img: "diavolo.png",
          meaning: "Tentazione, attaccamento, materialismo.",
        },
        {
          name: "La Torre",
          retro: "retro.png",
          img: "torre.png",
          meaning: "Rovina, cambiamento improvviso, rivelazione.",
        },
        {
          name: "Le Stelle",
          retro: "retro.png",
          img: "stelle.png",
          meaning: "Speranza, ispirazione, serenità.",
        },
        {
          name: "La Luna",
          retro: "retro.png",
          img: "luna.png",
          meaning: "Illusione, intuizione, incertezza.",
        },
        {
          name: "Il Sole",
          retro: "retro.png",
          img: "sole.png",
          meaning: "Felicità, successo, vitalità.",
        },
        {
          name: "Il Mondo",
          retro: "retro.png",
          img: "mondo.png",
          meaning: "Completamento, realizzazione, integrazione.",
        }
      ]
    }
  },
  methods: {
    show(card) {
      console.log(card.name, card.meaning)
      this.flipCard.push(card)
      card.retro = card.img
      console.log(this.flipCard)
      if (this.flipCard.length === 3) {
        this.over = false
      }
    },

    shuffle(cards) {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }
  },
  created() {
    this.shuffle(this.cards)
  }
}
</script>

<template>
  <div class="container">
    <div class="row d-flex">
      <div class="col-3 g-3" v-for="card in cards" :key="card.name">
        <div class="car" @click="over ? show(card) : null">
          <img class="card-img-top" :src="`${card.retro}`" alt="Title" />

        </div>
      </div>

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
.car {
  position: relative;

  .black {
    background-color: black;
    width: 100%;
    height: 100%;
    position: absolute
  }
}
</style>
