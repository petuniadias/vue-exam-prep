<template>
    <div v-if="max">max reached</div>
    <div v-if="min">min reached</div>
</template>

<script>
    export default {
        name: 'CounterIndicators',
        props: {
            max: {
                type: Boolean,

            },
            min: {
                type: Boolean
            }
        }
    }
</script>