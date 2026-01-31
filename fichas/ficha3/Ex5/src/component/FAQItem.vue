<template>
    <div>
        <h2 @click="toggleBody" :style="isOpen ? 'none' : 'background-color: #6366f1;'" style="cursor: pointer">
            <slot name="title">Default title</slot>
        </h2>
        <h3 v-if="$slots.subtitle">
            <slot name="subtitle"></slot>
        </h3>
        <div v-if="isOpen" >
            <slot name="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar risus in nisl pretium, sit amet porttitor turpis pellentesque. Fusce bibendum, elit id gravida commodo, risus nulla lacinia est, ut volutpat sapien est sit amet tellus. Praesent libero mauris, euismod a sem sit amet, accumsan molestie eros. Sed sed sapien et lectus gravida tristique. Quisque hendrerit mi turpis, eget malesuada mauris consequat a. Aliquam sit amet neque nisi. Suspendisse ipsum ante, eleifend vel iaculis ac, fringilla vel libero. Etiam rhoncus pretium eros sit amet venenatis. Pellentesque in nunc risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FAQItem",
        props: {
            isOpen: {
                type: Boolean,
                default: false
            }
        },
        emits: ['toggle-faq'],
        methods: {
            toggleBody() {
                this.$emit('toggle-faq')
            }
        }
    }
</script>