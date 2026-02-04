<template>
  <h2>Products</h2>
  <div
    style="
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    "
  >
    <div
      v-for="product in products"
      :key="product.id"
    >
      <img style="width: 100%; height: 200px; object-fit: cover;" :src="product.image" :alt="product.name">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <p>{{ product.quantity }}</p>
      <button @click="addToCart(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { products } from '@/data/shophub-data';
import { cartStore } from '@/stores/cart';

  export default {
    name: 'ProductView',
    data() {
      return {
        products: products
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
