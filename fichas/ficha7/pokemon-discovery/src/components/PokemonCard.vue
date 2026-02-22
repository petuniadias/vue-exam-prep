<template>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.img" alt="">
    <p>{{ pokemon.type }}</p>
    <p>{{ pokemon.pokedex }}</p>
</template>

<script>
    export default {
        name: 'PokemonCard',
        props: {
            pokemon: {
                type: Object,
                required: true
            }
        }
    }
</script>