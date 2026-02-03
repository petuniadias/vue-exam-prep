<template>
    <h1>Photos</h1>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; width: 100%">
        <router-link v-for="photo in photos" :key="photo.id" :to="{ name: 'photo', params: { id: photo.id }}">
            <img style="width:100%" :src="photo.url" :alt="photo.title">
        </router-link>
    </div>
</template>

<script>
import { photos } from '@/data/photo-gallery';

    export default {
        name: 'HomeView',
        data() {
            return {
                photos: photos
            }
        },
    }
</script>