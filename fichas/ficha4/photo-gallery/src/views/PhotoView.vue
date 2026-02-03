<template>
    <button @click="goToPrevious">Anterior</button>
    <button @click="goToNext">Próxima</button>
    <button @click="goToRandom">Foto Aleatória</button>
    <div v-if="photo">
        <h1>{{ photo.title }}</h1>
        <img :src="photo.url" :alt="photo.title" style="width: 100%;">
    </div>
</template>

<script>
import { findPhotoByID, getPreviousPhoto, getNextPhoto, getRandomPhoto } from '@/data/photo-gallery';

    export default {
        name: "PhotoView",
        computed: {
            photo() {
                const id = this.$route.params.id;
                return findPhotoByID(id);
            }
        },
        created() {
            if (!this.photo) {
                this.$router.push({ name: 'not-found' })
            }

            window.addEventListener('keydown', this.handleKey)
        },
        methods: {
            goToPrevious() {
                const prev = getPreviousPhoto(this.photo.id);
                if (prev) {
                    this.$router.push({ name: 'photo', params: { id: prev.id }});
                }
            },

            goToNext() {
                const next = getNextPhoto(this.photo.id);
                if (next) {
                    this.$router.push({ name: 'photo', params: { id: next.id }});
                }
            },

            goToRandom() {
                const random = getRandomPhoto();
                if (random) {
                    this.$router.push({ name: 'photo', params: { id: random.id }});
                }
            },

            goToHome() {
                this.$router.push("/");
            },

            handleKey(event) {
                if (!this.photo) return;

                if (event.key === "ArrowLeft") this.goToPrevious();
                if (event.key === "ArrowRight") this.goToNext();
                if (event.key === "Escape") this.goToHome();
            }
        },
        beforeUnmount() {
            window.removeEventListener('keydown', this.handleKey);
        }
    }
</script>