<template>
    <TaskInput @add-task="handleAddTask"/>
    <div>Total Tasks: {{ countTasks }}</div>
    <div>Completed: {{ countCompletedTasks }}</div>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" @toggle-task="handleToggleTask" @remove-task="handleRemoveTask" />
</template>

<script>
import TaskInput from './TaskInput.vue';
import TaskItem from './TaskItem.vue';

    export default {
        name: "TaskManager",
        components: {
            TaskInput,
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

        computed: {
            countTasks() {
                return this.tasks.length;
            },

            countCompletedTasks() {
                const completedTasks = this.tasks.filter(t => t.completed === true);
                return completedTasks.length;
            }
        },
        
        mounted() {
            this.loadFromLocalStorage();
        },

        watch: {
            tasks: {
                handler(newTasks) {
                    this.addToLocalStorage(newTasks)
                },
                deep: true
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
                const index = this.tasks.findIndex(t => t.id === taskId); 
                if (index !== -1) this.tasks.splice(index, 1);
            },

            handleAddTask(newTask) {
                this.tasks.push(newTask);
            },

            addToLocalStorage(newTasks) {
                localStorage.setItem("tasks", JSON.stringify(newTasks));
            },

            loadFromLocalStorage() {
                const savedTasks = localStorage.getItem("tasks");
                if (savedTasks) this.tasks = JSON.parse(savedTasks);

            }
        }
    }
</script>