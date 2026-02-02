<template>
    <div v-if="getArticle">
        <h1>{{ getArticle.title }}</h1>
        <p>{{ getArticle.title }}</p>
        <p>{{ getArticle.excerpt }}</p>
        <p>{{ getArticle.content }}</p>
    </div>
</template>

<script>    
    import { articles } from '@/data/tech-blog';
    export default {
        name: "ArticleView",
        data() {
            return {
                articles: articles
            }
        },
        computed: {
            getArticle() {
                const id = this.$route.params.id
                return this.articles.find(a => a.id === id);
            },
        }
    }
</script>