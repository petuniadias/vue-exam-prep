<template>
    <div>
        <img style="width:200px; height: 200px; object-fit: cover" :src="product.image" :alt="product.name">
        <h2>{{ product.name }}</h2>
        <p>{{ formatCurrency }}</p>
        <p>{{ product.inStock ? "Em Stock" : "Esgotado" }}</p>
        <button @click="addToCart" v-if="product.inStock">Adicionar ao Carrinho</button>
    </div>
</template>

<script>
    export default {
        name: "ProductCard",
        data() {
            return {
                inStock: "Em Stock"
            }
        },
        props: {
            product: {
                type: Object,
                required: true,
                validator(value) {
                    const hasRequiredProps = 
                        value.name &&
                        typeof value.price === 'number' &&
                        value.image &&
                        typeof value.inStock === 'boolean';

                    if (!hasRequiredProps) {
                        console.warn(`There's missing required properties!`);
                        return false;
                    }
                    return true;
                }
            }
        },
        emits: ['add-to-cart'],
        computed: {
            formatCurrency() {
                const formattedPrice = new Intl.NumberFormat(
                    "pt-PT",
                    { style: "currency", currency: "EUR"})
                .format(this.product.price);

                return formattedPrice;
            }
        },
        methods: {
            addToCart() {
                this.$emit("add-to-cart", this.product.id);
            }
        }
    }
</script>