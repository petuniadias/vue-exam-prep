<template>
  <h2>Home</h2>
  <div
    style="
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    "
  >
    <div
      v-for="product in products"
    >
      <img style="width: 100%; height: 200px; object-fit: cover;" :src="product.image" :alt="product.name">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <button @click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { getFeaturedProducts, products } from '@/data/shophub-data';

  export default {
    name: 'HomeView',
    computed: {
      products() {
        return getFeaturedProducts();
      }
    },
    methods: {
      addToCart(product) {
        console.log("A tentar adicionar:", product.name);
        cartStore.addToCart(product);
      }
    }
  }
</script>
