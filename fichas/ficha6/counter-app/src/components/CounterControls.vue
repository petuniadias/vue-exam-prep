<template>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="incrementByAmount">+5</button>
    <button @click="reset">Reset</button>
</template>

<script>
    export default {
        name: 'CounterControls',
        emits: ['increment', 'decrement', 'reset', 'increment-by-amount'],
        methods: {
            increment() {
                this.$emit('increment')
            },
            
            decrement() {
                this.$emit('decrement')
            },

            reset() {
                this.$emit('reset')
            },

            incrementByAmount() {
                this.$emit('increment-by-amount', 5)
            }
        }
    }
</script>