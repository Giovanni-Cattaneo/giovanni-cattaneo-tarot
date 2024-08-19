<script>

import AppCard from './components/appCard.vue';
import { state } from './state.js'

export default {
  components: {
    AppCard
  },
  data() {
    return {
      state: state,
      isPlaying: false,
      volume: 0.5,
    }
  },
  methods: {
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
      audio.volume = this.volume; // To update the volume
    },

    shuffle(cards) { // function for random position
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    },

    retry() {
      this.state.cards.forEach(card => { // take every card and reset the img for retro and position
        card.retro = 'retro.png';
        card.up = false;
      });
      this.shuffle(this.state.cards); // shuffle again the deck
      state.over = true;
      state.value = 0;
      state.flipCards = []; //make empty the array of flips
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
  <div class="container">
    <div class="row d-flex">
      <AppCard />
    </div>
  </div>
  <div class="mod" v-show="!state.over">
    <h2>Vediamo un pò cos'hai pescato</h2>
    <div v-for="flipCard in state.flipCards">
      <p v-if="flipCard.up">{{ flipCard.upMeaning }}</p>
      <p v-else>{{ flipCard.downMeaning }}</p>
    </div>
    <h4 v-if="state.value === 0">Sembra che il tuo destino non penda ne da una parte ne dall'altra, che noia</h4>
    <h4 v-else-if="state.value === -3">La tua sfortuna ha bisogno di un altra mano amico mio, o forse dovrei dire
      l'ultima mano</h4>
    <h4 v-else-if="state.value === 3">Lo sguardo della beata luna è su di te amico mio la tua sorte è magnifica</h4>
    <h4 v-else-if="state.value > 0">Sembra che la fortuna ti sorrida amico mio che invidia</h4>
    <h4 v-else>Il fato non ti arride amico mio ma come si dice meglio a te che a me no?</h4>
  </div>
  <div class="audio">
    <button class="play" @click="toggleMusic">{{ isPlaying ? 'Stop Music' : 'Play Music' }}</button>
    <!-- Elemento audio -->
    <audio ref="backgroundMusic" src="/witch.mp3" loop></audio>
    <label for="volumeControl">Volume:</label>
    <input id="volumeControl" type="range" min="0" max="1" step="0.01" v-model="volume" @input="updateVolume" />
    <button class="retry" @click="retry">Retry</button>
  </div>
</template>

<style>
.mod {
  color: goldenrod;
  background-color: antiquewhite;
  border-radius: 1rem;
  position: absolute;
  z-index: 15;
  width: 850px;
  top: 8rem;
  right: 1.5rem;
  padding: 0.3rem;

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
  top: 20rem;
  left: 5rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  color: white;
}
</style>