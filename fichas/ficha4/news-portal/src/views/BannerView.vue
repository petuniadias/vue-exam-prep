<template>
    <div
        style="
            border: 1px solid black;
            align-items: center;
            display: flex;
            flex-direction: column;
            padding: 24px;
            gap: 8px;
            justify-content: start;
            align-items: start;
            height: 150px;
        "
        v-if="currentNews"
    >
        <h2 style="margin: 0">{{ currentNews.title }}</h2>
        <span
            :style="{
                padding: '4px 16px',
                backgroundColor: '#' + Math.floor(Math.random() * (0xCCCCCC - 0x333333) + 0x333333).toString(16),
                width: 'fit-content',
                borderRadius: '24px'
            }"
        >
            {{ currentNews.category }}
        </span>
        <span>{{ currentNews.summary }}</span>
    </div>
</template>

<script>
import { getFeaturedNews } from '@/data/news-portal';

    export default {
        name: 'BannerView',
        data() {
            return {
                featuredNews: getFeaturedNews(),
                currentIndex: 0,
                intervalId: null
            }
        },

        computed: {
            currentNews() {
                if (!this.featuredNews || this.featuredNews.length === 0) return null;
                return this.featuredNews[this.currentIndex];
            }
        },

        created() {
            if (!this.featuredNews || this.featuredNews.length === 0) return;
            this.startCarousel();
        },

        methods: {
            startCarousel() {
                this.intervalId = setInterval(() => {
                    for (let i = 0; i < this.featuredNews.length; i++) {
                        this.currentIndex = (this.currentIndex + 1) % this.featuredNews.length;
                        break;
                    }
                }, 5000);
            }
        },

        beforeUnmount() {
            clearInterval(this.intervalId);
        }

    }
</script>