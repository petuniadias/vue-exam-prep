<template>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; width: 100%; ">
        <div v-for="product in products">
            <h2>{{ product.name }}</h2>
            <p>{{ product.category }}</p>
            <p>{{ product.price }}</p>
            <img style="width: 150px" :src="product.image" alt="">
        </div>
    </div>
</template>

<script>
import { products } from '@/data/sneaker-store';
    export default {
        name: 'AllProducts',
        data() {
            return {
                products: products
            }
        }
    }
</script>