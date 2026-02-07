<template>
    <br>
    <hr>
    <h1>Cart</h1>
    <div v-if="isCartEmpty"> The cart is empty</div>
    <div v-else style="display: flex; flex-direction: column-reverse;">
        <div v-for="item in cartItems" :key="item.id">
            <h3>{{ item.name }}</h3>
            <p>{{ item.price }}</p>
            <p>{{ item.quantity }}</p>
        </div>
    </div>
    <div>
        <h3>{{ subtotal }}</h3>
    </div>
</template>

<script>
import { useShoppingCartStore } from '@/stores/useShoppingCart';
import { mapActions, mapState } from 'pinia';

    export default {
        name: 'Cart',
        computed: {
            ...mapState(useShoppingCartStore, ['cartItems', 'subtotal', 'isCartEmpty'])
        }
    }
</script>