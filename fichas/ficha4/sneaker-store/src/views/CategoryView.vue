<template>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; width: 100%; ">
        <div v-for="product in filteredProducts">
            <h2>{{ product.name }}</h2>
            <p>{{ product.category }}</p>
            <p>{{ product.price }}</p>
            <img style="width: 150px" :src="product.image" alt="">
        </div>
    </div>
</template>

<script>
import { getProductByCategory } from '@/data/sneaker-store';

    export default {
        name: 'CategoryView',
        data() {
            return {
                categoryName: '',
            }
        },
        computed: {
            filteredProducts() {
                const category = this.$route.params.name;
                return getProductByCategory(category); 
            }
        },
    }
</script>