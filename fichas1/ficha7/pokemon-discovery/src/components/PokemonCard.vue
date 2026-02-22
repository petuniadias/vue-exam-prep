<template>
    <div class="wrapper">
        <router-link :to="`/pokemon/${pokemon.id}`">
            <h4>{{ pokemon.name }}</h4>
            <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
            <div v-for="type in pokemon.types" :key="type.slot">
                <span>{{ type.type.name }}</span>
            </div>
            <p>{{ pokemon.id }}</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'PokemonCard',
        props: {
            pokemon: {
                type: Object,
                required: true
            }
        },
        
    }
</script>

<style scoped>
    .wrapper :deep(a) {
        text-decoration: none;
        color:black;
    }
</style>