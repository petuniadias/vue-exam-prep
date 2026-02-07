<template>
    <h1>Catálogo</h1>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
        <div v-for="product in products" :key="product.id">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
            <button @click="addItem(product)">Add to cart</button>
        </div>
    </div>

</template>

<script>
import { useShoppingCartStore } from '@/stores/useShoppingCart';
import { mapActions, mapState } from 'pinia';

    export default {
        name: 'Items',
        data() {
            return {
                products: [
                    {
                        id: self.crypto.randomUUID(),
                        name: 'Blue Shoes',
                        price: 24.99,
                        quantity: 2,
                        stock: 20
                    },
                    {
                        id: self.crypto.randomUUID(),
                        name: 'White T-Shirt',
                        price: 14.5,
                        quantity: 1,
                        stock: 50
                    },
                    {
                        id: self.crypto.randomUUID(),
                        name: 'Black Jeans',
                        price: 39.99,
                        quantity: 1,
                        stock: 15
                    },
                    {
                        id: self.crypto.randomUUID(),
                        name: 'Baseball Cap',
                        price: 9.99,
                        quantity: 3,
                        stock: 30
                    },
                    {
                        id: self.crypto.randomUUID(),
                        name: 'Leather Jacket',
                        price: 89.9,
                        quantity: 1,
                        stock: 5
                    },
                    {
                        id: self.crypto.randomUUID(),
                        name: 'Sneakers Socks (Pack 3)',
                        price: 7.5,
                        quantity: 2,
                        stock: 40
                    }
                ]
            }
        },

        computed: {
            ...mapState(useShoppingCartStore, ['cartItems'])
        },

        methods: {
            ...mapActions(useShoppingCartStore, ['addItem'])
        }
    }
</script>