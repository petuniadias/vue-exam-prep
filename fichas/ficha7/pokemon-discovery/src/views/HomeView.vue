<template>
    <PokemonCard v-if="currentPokemon" :pokemon="currentPokemon"/>
    <button @click="fetchRandomPokemon">Descobrir Pokemon</button>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue';
import { usePokemonStore } from '@/stores/pokemon';

    export default {
        name: 'HomeView',
        components: {
            PokemonCard
        },
        mounted() {
            this.getRandom
        }

    }
</script>