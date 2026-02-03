<template>
    <div
        style="
            border-right: 1px solid black;
            width: 250px;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
        "
    >
        <h2
            style="padding-left: 24px"
        >Sidebar</h2>
        <div
            style="
                display: flex;
                flex-direction: column;
                gap: 4px;
                padding: 0 24px;
            "
        >   
            <h3 
                :style="{
                    margin: 0,
                    backgroundColor: isActive(category) ? 'palevioletred' : 'transparent',
                    padding: '8px 16px',
                }"
                v-for="category in categories"
            >
                <router-link style="text-decoration: none; color: inherit;" :to="{name: 'category', params: {name: category}}">{{ category }}</router-link>
            </h3>
        </div>
    </div>
</template>

<script>
import { getAllCategories } from '@/data/news-portal';

    export default {
        name: 'SidebarView',
        computed: {
            categories() {
                return getAllCategories();
            }
        },

        methods: {
            isActive(category) {
                return this.$route.params.name === category;
            }
        }
    }
</script>