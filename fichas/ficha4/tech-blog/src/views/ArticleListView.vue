<template>
    <ul>
        <li v-for="article in articles" :key="article.id" :article="article">
            <h2>{{ article.title }}</h2>
            <p>{{ article.author }}</p>
            <p>{{ article.excerpt }}</p>
            <router-link :to="`/article/${article.id}`">go to article</router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ArticleList",
        data() {
            return {
                articles: [
                    {
                        id: self.crypto.randomUUID(),
                        title: "The Rise of Remote Work",
                        author: "Alex Morgan",
                        excerpt: "Remote work has transformed how companies and employees approach productivity and work-life balance.",
                        content: "Remote work has grown rapidly over the last decade, driven by advances in technology and changing expectations from workers. Companies are no longer limited by geography when hiring talent, and employees gain more flexibility in how they structure their day. However, this shift also brings challenges such as isolation, communication barriers, and the need for strong self-discipline."
                    },
                    {
                        id: self.crypto.randomUUID(),
                        title: "Why Minimalism Matters",
                        author: "Sophie Turner",
                        excerpt: "Minimalism is more than an aesthetic — it’s a mindset that promotes clarity and focus.",
                        content: "Minimalism encourages people to remove excess from their lives, allowing them to focus on what truly matters. This philosophy can be applied to physical spaces, digital environments, and even personal relationships. By reducing clutter, individuals often experience less stress and greater mental clarity."
                    },
                    {
                        id: self.crypto.randomUUID(),
                        title: "The Psychology of Habits",
                        author: "Daniel Brooks",
                        excerpt: "Habits shape our daily lives more than we realize, influencing both success and failure.",
                        content: "Habits are automatic behaviors formed through repetition and reinforcement. Understanding how habits work can help individuals break negative patterns and build positive routines. Small, consistent changes often lead to long-term improvements, making habits a powerful tool for personal growth."
                    },
                    {
                        id: self.crypto.randomUUID(),
                        title: "Exploring the Future of Artificial Intelligence",
                        author: "Maya Chen",
                        excerpt: "Artificial intelligence is evolving rapidly, raising questions about its impact on society.",
                        content: "Artificial intelligence is being integrated into many aspects of daily life, from healthcare to transportation. While AI offers enormous potential for efficiency and innovation, it also raises ethical concerns related to privacy, employment, and decision-making. Balancing technological progress with responsible use will be crucial in the years ahead."
                    }
                ]
            }
        }
    }
</script>