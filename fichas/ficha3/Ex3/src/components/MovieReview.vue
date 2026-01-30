<template>
    <div>
        <h2>{{ movie.title }}</h2>
        <p>{{ movie.desc }}</p>
        <RatingStars @rating-changed="handleRatingChanged" />
        <p>Classificação: {{ movie.rating }}/5</p>
        <button v-if="!movie.isWatched">Marcar como visto</button>
    </div>
</template>

<script>
    import RatingStars from './RatingStars.vue';

    export default {
        name: "MovieReview",
        components: {
            RatingStars
        },
        props: {
            movie: {
                type: Object,
                required: true,
                validator(value) {
                    return value.id &&
                    value.title &&
                    value.desc &&
                    typeof value.rating === 'number' &&
                    typeof value.isWatched === 'boolean'
                }
            }
        },
        data() {
            return {
                rating: 0,
            }
        },
        emits: ['mark-as-watched'],
        methods: {
            handleRatingChanged(rating) {
                this.rating = rating;
                console.log('rating', this.movie.id, rating);
            },
            markAsWatched() {
                this.$emit('mark-as-watched', this.movie.id);
            }
        }
    }
</script>