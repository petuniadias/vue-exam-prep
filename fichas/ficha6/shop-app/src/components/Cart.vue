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
            <button @click="incrementQuantity(item.id)">+1</button>
            <button @click="decrementQuantity(item.id)">-1</button>
            <button @click="removeItem(item.id)">remove</button>
        </div>
    </div>
    <div>
        <label for="">Discount code</label>
        <input type="text" v-model="code">
        <button @click="handleDiscountError(code)">Apply</button>
    </div>
    <div>
        <p>Subtotal: {{ subtotal }}</p>
        <h3>Total: {{ finalTotal }}</h3>
    </div>
</template>

<script>
import { useShoppingCartStore } from '@/stores/useShoppingCart';
import { mapActions, mapState } from 'pinia';
import { handleError } from 'vue';

    export default {
        name: 'Cart',
        data() {

        },
        computed: {
            ...mapState(useShoppingCartStore, ['cartItems', 'subtotal', 'isCartEmpty', 'finalTotal', 'getIVA'])
        },

        methods: {
            ...mapActions(useShoppingCartStore, ['incrementQuantity', 'decrementQuantity', 'removeItem', 'applyDiscount']),

            handleDiscountError(code) {
                try {
                    this.applyDiscount(code)
                } catch(error) {
                    alert(error.message);
                }
            }
        }
    }
</script>