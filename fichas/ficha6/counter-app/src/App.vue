<template>
  <ProgressBar :progressPercentage="progressPercentage" :count="count"/>
  <CounterControls @increment="increment" @decrement="decrement" @reset="reset" @increment-by-amount="incrementBy"/>
  <History :history="lastFiveOperations"/>
  <CounterIndicators :max="isMax" :min="isMin"/>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from './stores/counter';

import ProgressBar from './components/ProgressBar.vue';
import CounterControls from './components/CounterControls.vue';
import History from './components/History.vue';
import CounterIndicators from './components/CounterIndicators.vue';

  export default {
    name: 'App',
    components: {
      ProgressBar,
      CounterControls,
      History,
      CounterIndicators
    },
    computed: {
      ...mapState(useCounterStore, [
        'count',
        'min',
        'max',
        'isMax',
        'isMin',
        'progressPercentage',
        'historyLength',
        'lastFiveOperations'
      ])
    },
    methods: {
      ...mapActions(useCounterStore, ['increment', 'decrement', 'reset', 'incrementBy'])
    }
  }
</script>