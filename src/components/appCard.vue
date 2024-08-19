<script>
import { state } from '../state.js'

export default {
    name: "appCard",
    data() {
        return {
            state,
        }
    },
    methods: {
        show(card) {
            if (state.flipCards.includes(card)) {
                return; // verify if the card is already turn
            }
            if (this.getRandomInt(2) === 0) {
                card.up = true
                state.value += card.upValue
            } else {
                card.up = false
                state.value += card.downValue
            }
            state.flipCards.push(card)
            card.retro = card.img
            if (state.flipCards.length === 3) {
                state.over = false
                console.log(this.value)
            }
        },
        getRandomInt(max) {
            return Math.floor(Math.random() * max);
        },
    },
    computed: {
        limitedCards() {
            return state.cards.slice(0, 3);
        },
    }
}
</script>

<template>
    <div class="col g-5" v-for="card in limitedCards" :key="card.name">
        <div class="card_img" :class="{ reverse: !card.up }" @click="state.over ? show(card) : null">
            <img class="img" :src="`${card.retro}`" alt="Title" />
        </div>
    </div>

</template>

<style scoped>
.card_img {
    margin-top: 35rem;
}

.img {
    width: 260px;
    height: 400px;
    object-fit: fill;
    margin: auto;
    will-change: filter;
    transition: filter 300ms;

}

.img:hover {
    filter: drop-shadow(0 0 2em #b9bcf5aa);
}

.reverse {
    transform: rotate(180deg);
}
</style>