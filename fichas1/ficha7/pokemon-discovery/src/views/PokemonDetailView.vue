<template>
    <button @click="goBack">Voltar</button>
    <div>
        <h4>{{ pokemonStore.currentPokemon.name }}</h4>
        <div v-for="type in pokemonStore.currentPokemon.types" :key="type.slot">
            <span>{{ type.type.name }}</span>
        </div>
        <p>
            {{ pokemonStore.currentPokemon.height }}
        </p>
        <p>
            {{ pokemonStore.currentPokemon.weight }}
        </p>
        <div v-for="stat in pokemonStore.currentPokemon.stats" :key="stat.stat.name">
            <span>{{ stat.stat.name }}: {{ stat.base_stat }}</span>
        </div>
        <h3>Abilities</h3>
        <div v-for="ability in pokemonStore.currentPokemon.abilities" :key="ability.ability.name">
            <span> {{ ability.ability.name }}</span>
        </div>
    </div>
    <button @click="discoverPokemon">Descobrir outro</button>
</template>

<script>
import { usePokemonStore } from '@/stores/pokemon';
import { mapStores } from 'pinia';

    export default {
        name: 'PokemonDetailView',
        computed: {
            ...mapStores(usePokemonStore)
        },

        async created() {
            const id = this.$route.params.id;
            await this.pokemonStore.fetchPokemonById(id);
        },

        methods: {
            goBack() {
                this.$router.go(-1);
            },

            discoverPokemon() {
                this.$router.push('/');
                this.pokemonStore.fetchRandomPokemon();
            }
        }
    }
</script>