<template>

    <PokemonCardSkeleton v-if="pokemonStore.loading"/>
    <div v-else-if="pokemonStore.error">{{ pokemonStore.error }}</div>
    <PokemonCard v-else-if="pokemonStore.currentPokemon" :pokemon="pokemonStore.currentPokemon"/>
    <button @click="discoverPokemon">Descobrir Pokémon</button>
</template>

<script>
import PokemonCard from '@/components/PokemonCard.vue';
import PokemonCardSkeleton from '@/components/PokemonCardSkeleton.vue';
import { usePokemonStore } from '@/stores/pokemon';
import { mapStores } from 'pinia';
    export default {
        name: 'HomeView',

        components: {
            PokemonCard,
            PokemonCardSkeleton
        },
        
        computed: {
            ...mapStores(usePokemonStore)
        },

        created() {
            if (this.pokemonStore.currentPokemon === null) {
                this.pokemonStore.fetchRandomPokemon();
            }
        },

        methods: {
            discoverPokemon() {
                this.pokemonStore.fetchRandomPokemon();
            }
        }

    }
</script>