<template>
    <div v-if="article">
        <h2>Título do artigo</h2>
        <h1>{{ article.title }}</h1>
        <p>{{ article.title }}</p>
        <p>{{ article.excerpt }}</p>
        <p>{{ article.content }}</p>
    </div>
</template>

<script>
    export default {
        name: "ArticleView",
        props: {
            article: {
                type: Object,
                required: true,
                validator(value) {
                return value.title && value.author && value.excerpt && value.content
                }
            }
        },
        computed: {
            article() {
                const id = this.$route.params.id
                return this.articles.find(a => a.id === id);
            }
        }
    }
</script>