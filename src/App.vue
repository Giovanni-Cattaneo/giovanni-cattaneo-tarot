<script>

import { state } from './state.js'

export default {
  components: {

  },
  data() {
    return {
      state: state,
      isPlaying: false,
      flipCards: [],
      over: true,
    }
  },
  methods: {
    show(card) {
      if (this.getRandomInt(2) === 0) {
        card.up = true
      } else {
        card.up = false
      }
      this.flipCards.push(card)
      card.retro = card.img
      if (this.flipCards.length === 3) {
        this.over = false
      }
    },
    toggleMusic() {
      const audio = this.$refs.backgroundMusic;
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    updateVolume() {
      const audio = this.$refs.backgroundMusic;
      audio.volume = this.volume; // Aggiorna il volume dell'audio
    },

    shuffle(cards) {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    },

    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  },
  computed: {
    limitedCards() {
      return state.cards.slice(0, 3);
    }
  },
  created() {
    this.shuffle(state.cards)
  },

}
</script>

<template>
  <div class="rules">
    <h3>Rules</h3>
    <p>The cards, the cards, the cards will tell </p>
    <p>The past, the present and the future as well</p>
    <p>The cards, the cards, just take three</p>
    <p>Take a little trip into your future with me</p>
  </div>
  <div class="mod" v-show="!this.over">
    <h2>Ecco la tua previsione</h2>
    <div v-for="flipCard in this.flipCards">
      <p v-if="flipCard.up">{{ flipCard.upMeaning }}</p>
      <p v-else>{{ flipCard.downMeaning }}</p>
    </div>
  </div>
  <div class="container">
    <div class="row d-flex">
      <div class="col g-3" v-for="card in limitedCards" :key="card.name">
        <div class="car" :class="{ reverse: !card.up }" @click="over ? show(card) : null">
          <img class="img" :src="`${card.retro}`" alt="Title" />
        </div>
      </div>
    </div>
  </div>
  <div class="audio">
    <button class="play" @click="toggleMusic">{{ isPlaying ? 'Stop Music' : 'Play Music' }}</button>
    <!-- Elemento audio -->
    <audio ref="backgroundMusic" src="/witch.mp3" loop></audio>
    <label for="volumeControl">Volume:</label>
    <input id="volumeControl" type="range" min="0" max="1" step="0.01" @input="updateVolume" />
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
  margin-top: 35rem;
}

.img {
  width: 288px;
  height: 400px;
  object-fit: contain;
  margin: auto;
  will-change: filter;
  transition: filter 300ms;

}

.img:hover {
  filter: drop-shadow(0 0 2em #b9bcf5aa);
}

.mod {
  color: goldenrod;
  background-color: antiquewhite;
  border-radius: 1rem;
  position: absolute;
  z-index: 15;
  width: 800px;
  top: 12rem;
  right: 5rem;
  padding: 0.3rem;

}

.reverse {
  transform: rotate(180deg);
}

.rules {
  position: absolute;
  left: 2rem;
  top: 5rem;
  width: 350px;
  color: white;
  border: 1px solid goldenrod;
}

.none {
  display: none;
}

.audio {
  position: absolute;
  top: 2rem;
  right: 5rem;
  display: flex;
  flex-direction: column;
}
</style>