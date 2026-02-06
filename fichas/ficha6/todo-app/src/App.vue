<template>
  <Forms 
    style="
      margin-bottom: 24px;
    "
  />
  <Tasks />
</template>

<script>
import Forms from './components/Forms.vue';
import Tasks from './components/Tasks.vue';

  export default {
    name: 'App',
    components: {
      Forms,
      Tasks
    }
  }
</script>