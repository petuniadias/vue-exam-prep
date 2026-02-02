<template>
    <ul>
        <li v-for="article in articles" :key="article.id">
            <h2>{{ article.title }}</h2>
            <p>{{ article.author }}</p>
            <p>{{ article.excerpt }}</p>
            <router-link :to="`/article/${article.id}`">go to article</router-link>
        </li>
    </ul>
</template>

<script>
    import { articles } from '@/data/tech-blog';
    export default {
        name: "ArticleList",
        data() {
            return {
                articles: articles
            }
        }
    }
</script>