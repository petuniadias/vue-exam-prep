<template>
  <MovieReview v-for="movie in movies" :key="movie.id" :movie="movie" @mark-as-watched="handleMarkAsWatched"/>
</template>

<script>
  import MovieReview from './components/MovieReview.vue';

  export default {
    name: "App",
    components: {
      MovieReview
    },
    data() {
      return {
        movies: [
          {
            id: self.crypto.randomUUID(),
            title: 'Marty Supreme (2025)',
            desc: 'Marty Mauser, a young man with a dream no one respects, goes to hell and back in pursuit of greatness.',
            rating: 4,
            isWatched: true
          },
          {
            id: self.crypto.randomUUID(),
            title: 'Sentimental Value (2025)',
            desc: 'An intimate exploration of family, memories, and the reconciliatory power of art.',
            rating: 0,
            isWatched: false
          },
          {
            id: self.crypto.randomUUID(),
            title: 'The Secret Agent (2025)',
            desc: 'In 1977, a technology expert flees from a mysterious past and returns to his hometown of Recife in search of peace. He soon realizes that the city is far from being the refuge he seeks.',
            rating: 3,
            isWatched: true
          }
        ]
      }
    },
    methods: {
      handleMarkAsWatched(movieId) {
        if (!movieId) return;
        const movie = this.movies.find(m => m.id === movieId);
        if (!movie.isWatched) return;

        movie.isWatched = true;
      }
    }
  }
</script>