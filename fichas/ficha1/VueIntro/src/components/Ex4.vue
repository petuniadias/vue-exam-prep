<template>
    <div class="flex flex-col w-100 border-brand-primary border-2 p-[24px] rounded-[12px] gap-[12px]">
        <h1>{{ productName }}</h1>
        <p v-html="productDesc"></p>
        <img :src="productImage" alt="">
        <span class="text-2xl" v-if="productPrice<1000">{{ productPrice }}</span>
        <div v-if="productAvailability">
            AVAILABLE
        </div>
        <div v-else>
            UNAVAILABLE
        </div>
        <div class="gap-2 flex justify-center">
            <button @click="resetPrice()">Reset price</button>
            <button @click="changePrice()">Add +1 to original price</button>
        </div>
        <button @click="buyProduct()">Purchase</button>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                productName: "Dell XPS",
                productDesc: "Processador i7<br>Disco SSD 256GB<br>Monitor Samsung 21’",
                productImage: "https://tinyurl.com/2p9dnx68",
                productPrice: 200,
                originalPrice: null,
                productAvailability: true
            }
        },

        created() {
            this.originalPrice = this.productPrice;
        },

        methods: {
            changePrice() {
                this.productPrice ++;
            },

            resetPrice() {
                this.productPrice = this.originalPrice;
            },

            buyProduct() {
                this.productAvailability = false;
            }
        }
    }
</script>