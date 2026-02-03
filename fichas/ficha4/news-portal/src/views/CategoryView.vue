<template>
    <button
        style="
            padding: 8px;
            cursor: pointer;
        "
        @click="goToBegining"
    >Voltar ao Início</button>
    <div
        style="
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 16px;
        "
    >
        <div 
            v-for="item in filteredNews"
            :key="item.id"
            style="
                border: 1px solid black;
                padding: 16px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: end;
            "
        >
            <div 
                style="
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                "
            >
                <h3
                    style="margin: 0"
                >{{ item.title }}</h3>
                <span
                    :style="{
                        padding: '4px 16px',
                        backgroundColor: '#' + Math.floor(Math.random() * (0xCCCCCC - 0x333333) + 0x333333).toString(16),
                        width: 'fit-content',
                        borderRadius: '24px'
                    }"
                >
                    {{ item.category }}
                </span>
                <span>{{ item.summary }}</span>
                <span
                    style="
                        margin-bottom: 16px;
                    "
                >{{ item.content }}</span>
            </div>

            <span>{{ item.date }}</span>
            <router-link :to="{name: 'article', params: {id: item.id}}" style="display: flex; justify-content: center; align-items: center; width: 100%; background-color: palevioletred; text-decoration: none; color: inherit; cursor: pointer;">View Article</router-link>

        </div>
    </div>

</template>

<script>
import { filterByCategory } from '@/data/news-portal';

    export default {
        name: 'NewsListView',

        computed: {
            filteredNews() {
                const category = this.$route.params.name;
                return filterByCategory(category);
            }
        },

        methods: {
            goToBegining() {
                this.$router.push('/');
            }
        }
    }
</script>