<template> 
    <div
        v-if="getArticle"
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
            >{{ getArticle.title }}</h3>
            <span
                :style="{
                    padding: '4px 16px',
                    backgroundColor: '#' + Math.floor(Math.random() * (0xCCCCCC - 0x333333) + 0x333333).toString(16),
                    width: 'fit-content',
                    borderRadius: '24px'
                }"
            >
                {{ getArticle.category }}
            </span>
            <span>{{ getArticle.summary }}</span>
            <span
                style="
                    margin-bottom: 16px;
                "
            >{{ getArticle.content }}</span>
        </div>

        <span>{{ getArticle.date }}</span>
    </div>
    <div v-else>
        Artigo não encontrado
    </div>


</template>

<script>
import { getNewsByID } from '@/data/news-portal';


    export default {
        name: 'ArticleView',
        computed: {
            getArticle() {
                const articleID = Number(this.$route.params.id);
                return getNewsByID(articleID);
            }
        }
    }
</script>