<template>
  <Items />
  <Cart />
</template>

<script>
import Cart from './components/Cart.vue';
import Items from './components/Items.vue';

  export default {
    name: 'App',
    components: {
      Items,
      Cart
    }
  }
</script>