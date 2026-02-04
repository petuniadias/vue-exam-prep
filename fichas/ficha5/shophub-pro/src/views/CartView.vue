<template>
  <h2>Cart</h2>
  <div
    style="
      display: flex;
      flex-direction: column;
    "
  >
    <div
      v-for="(product, index) in cart"
      :key="product.id"
    >
      <img style="width: 100%; height: 200px; object-fit: cover;" :src="product.image" :alt="product.name">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
      <p>Quantity: {{ product.quantity }}</p>
      <button @click="removeItem(index)">Remove</button>
    </div>
  </div>
</template>

<script>
  import { cartStore } from '@/stores/cart';

  export default {
    name: 'CartView',
    data() {
      return {
        cart: [],
      }
    },
    methods: {
      loadCart() {
        this.cart = cartStore.loadCart();
      },
      removeItem(index) {
        cartStore.removeProductFromCart(index);
        this.loadCart();
      }
    },
    mounted() {
      this.loadCart();
    }
  }
</script>
