<template>
  <ProductCard 
    v-for="product in products"
    :key="product.id"
    :product="product"
    @add-to-cart="handleAddToCart"
  />
</template>

<script>
import ProductCard from './ProductCard.vue';

    export default {
        name: "ProductList",
        components: {
            ProductCard
        },
        data() {
            return {
                products: [
                    {
                        id: 1,
                        name: 'Morango',
                        price: 2.99,
                        image: 'https://fsp.usp.br/eccco/wp-content/uploads/2022/09/isaac-quesada-DYbr5utVs8s-unsplash-1024x683.jpg',
                        inStock: true,
                    },
                    {
                        id: 2,
                        name: 'Banana',
                        price: 1.49,
                        image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e42e',
                        inStock: false,
                    },
                    {
                        id: 3,
                        name: 'Maçã',
                        price: 1.99,
                        image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
                        inStock: true,
                    },
                    {
                        id: 4,
                        name: 'Abacate',
                        price: 3.49,
                        image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919',
                        inStock: true,
                    },
                ]
            }
        },
        methods: {
            handleAddToCart(productId) {
                if (!productId) return;
                const product = this.products.find(p => p.id === productId);
                if (!product) return;
                product.inStock = false;
                alert(`Produto ${product.name} adicionado ao carrinho!`);
            }
        }
    }
</script>