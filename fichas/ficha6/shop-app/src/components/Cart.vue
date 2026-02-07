<template>
    <br>
    <hr>
    <h1>Cart ({{ totalCartItems }})</h1>
    <div v-if="isCartEmpty"> The cart is empty</div>
    <div v-else style="display: flex; flex-direction: column-reverse;">
        <div v-for="item in cartItems" :key="item.id">
            <h3>{{ item.name }}</h3>
            <p>{{ formatPrice(item.price) }}</p>
            <p>{{ item.quantity }}</p>
            <button @click="incrementQuantity(item.id)">+1</button>
            <button @click="decrementQuantity(item.id)">-1</button>
            <button @click="removeItem(item.id)">remove</button>
        </div>
    </div>
    <hr>

    <div>
        <div style="display: flex; flex-direction: column; width: 200px;">
            <label for="">Discount code</label>
            <div style="display: flex; gap: 4px;">
                <input type="text" v-model="code">
                <button @click="handleDiscountError(code)">Apply</button>
            </div>
            <p v-if="discountCode"> Discount applied! </p>
        </div>
    </div>
    <div>
        <p>Discount: {{ formatPrice(discountValue) }}</p>
        <p>Subtotal: {{ formatPrice(subtotal) }}</p>
        <h3>Total: {{ formatPrice(finalTotal) }} c/iva {{ formatPrice(totalAfterDiscount) }} s/iva</h3>
    </div>
</template>

<script>
import { useShoppingCartStore } from '@/stores/useShoppingCart';
import { mapActions, mapState } from 'pinia';
import { formatPrice } from '@/utils/formatPrice';

    export default {
        name: 'Cart',
        data() {

        },
        computed: {
            ...mapState(useShoppingCartStore, ['cartItems', 'subtotal', 'isCartEmpty', 'finalTotal', 'getIVA', 'discountCode', 'totalCartItems', 'totalAfterDiscount', 'discountValue'])
        },

        methods: {
            ...mapActions(useShoppingCartStore, ['incrementQuantity', 'decrementQuantity', 'removeItem', 'applyDiscount']),

            handleDiscountError(code) {
                try {
                    this.applyDiscount(code)
                    this.code = ''
                } catch(error) {
                    alert(error.message);
                }
            },

            formatPrice
        }
    }
</script>