<template>
    <h1>Perguntas Frequentes</h1>
    <FAQItem v-for="faq in faqs" :key="faq.id" :is-open="faq.id === openFAQId" @toggle-faq="handleToggleBody(faq.id)">
        <template #title>{{ faq.title }}</template>
        <template #subtitle>{{ faq.subtitle }}</template>
        <template #body>{{ faq.body }}</template>
    </FAQItem>
</template>

<script>
import FAQItem from './FAQItem.vue';

    export default {
        name: "FAQSection",
        components: {
            FAQItem
        },
        props: {
            faqs: {
                type: Array,
                validator(value) {
                    return value.every(faq => 
                        faq.id &&
                        faq.title &&
                        faq.body
                    )
                }
            }
        },
        data() {
            return {
                openFAQId: null
            }
        },
        methods: {
            handleToggleBody(faqId) {
                if(this.openFAQId === faqId) {
                    this.openFAQId = null
                } else {
                    this.openFAQId = faqId
                }
            }
        }
    }
</script>