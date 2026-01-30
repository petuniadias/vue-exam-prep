<template>
  <TaskItem v-for="task in tasks" :key="task.id" :task="task" @toggle-task="handleToggleTask" @remove-task="handleRemoveTask" />
</template>

<script>
  import TaskItem from './components/TaskItem.vue';

  export default {
    name: "App",
    components: {
      TaskItem
    },
    data() {
      return {
        tasks: [
          {
            id: self.crypto.randomUUID(),
            description: "Comprar mantimentos para a semana",
            completed: false
          },
          {
            id: self.crypto.randomUUID(),
            description: "Finalizar relatório do projeto",
            completed: true
          },
          {
            id: self.crypto.randomUUID(),
            description: "Ligar para o cliente sobre a reunião",
            completed: false
          }
        ]
      }
    },
    methods: {
      handleToggleTask(taskId) {
        if (!taskId) return;
        const task = this.tasks.find(t => t.id === taskId); 
        if (task) {
          task.completed = !task.completed;
        }
      },

      handleRemoveTask(taskId) {
        const index = this.tasks.find(t => t.id === taskId); 
        if (index !== -1) this.tasks.splice(index, 1);
      }
    }
  }
</script>