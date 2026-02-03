<template>
    <h2>
        404 - Not Found
    </h2>
    <button @click="goToStart">Voltar ao Início</button>
</template>

<script>
import { getFirstPhoto } from '@/data/photo-gallery';

    export default {
        name: 'NotFoundView',
        methods: {
            goToStart() {
                const start = getFirstPhoto();
                if (start) {
                    this.$router.push({name: 'photo', params: {id: start.id}});
                }
            }
        }
    }
</script>