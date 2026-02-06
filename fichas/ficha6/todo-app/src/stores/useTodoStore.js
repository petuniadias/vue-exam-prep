import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    tasks: [
      // {
      //   id: self.crypto.randomUUID(),
      //   text: '',
      //   completed: false,
      //   priority: 'baixa',
      //   createdAt: new Date().toISOString()
      // },
    ],
  }),

  getters: {
    completedTasks: (state) => state.tasks.filter(t => t.completed),
    pendentTasks: (state) => state.tasks.filter(t => !t.completed),
    pendentHighPriority: (state) => state.tasks.filter(t => !t.completed && t.priority === 'alta'),
    totalCompletedTasks: (state) => state.tasks.filter(t => t.completed).length,
    totalPendentTasks: (state) => state.tasks.filter(t => !t.completed).length,
    percentageConcluded: (state) => {
      if (state.tasks.length === 0) return 0
      return Math.round(
        (state.tasks.filter(t => t.completed).length / state.tasks.length) * 100
      )
    }
  },

  actions: {
    addTodo(text, priority) {
      const newTask = {
        id: self.crypto.randomUUID(),
        text: text,
        completed: false,
        priority: priority,
        createdAt: new Date().toISOString()
      }

      if (newTask.text.trim() === '' || newTask.text.length < 3) {
        throw new Error("The text can't be empty or have less than 3 characters!")
      }

      this.tasks.push(newTask);
    },

    removeTodo(id) {
      const index = this.tasks.findIndex(t => t.id === id);
      if (index != -1) {
        this.tasks.splice(index, 1);
      }
    },

    toggleTodo(id) {
      const index = this.tasks.findIndex(t => t.id === id);
      if (index != -1) {
        this.tasks[index].completed = !this.tasks[index].completed;
      }
    },

    updateTodoPriority(id, priority) {
      const index = this.tasks.findIndex(t => t.id === id);
      this.tasks[index].priority = priority;
    },

    clearCompleted() {
      this.tasks = this.tasks.filter(t => !t.completed);
    },

    clearAll() {
      const confirmed = window.confirm(
        'Are you sure you want to clear all tasks?'
      );
      
      if (!confirmed) return;

      this.$reset()
    }
  }
})
