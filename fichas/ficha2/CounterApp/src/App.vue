<template>
  <Counter />
  <WatchVault />
</template>

<script>
  import Counter from './components/Counter.vue';
  import WatchVault from './components/WatchVault.vue';

  export default {
    name: "App",
    components: {
      Counter,
      WatchVault
    }
  }
</script>