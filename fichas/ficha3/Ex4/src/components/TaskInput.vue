<template>
    <form @submit.prevent="addTask">
        <input v-model="description" type="text"/> 
        <button>Adicionar</button>
    </form>
    
</template>

<script>
    export default {
        name: "TaskInput",
        data() {
            return {
                description: ""
            }
        },
        emits: ['add-task'],
        methods: {
            addTask() {
                if (!this.description.trim()) return;

                const newTask = {
                    id: self.crypto.randomUUID(),
                    description: this.description,
                    completed: false
                }

                this.$emit('add-task', newTask);
                this.description = "";
            }
        }
    }
</script>