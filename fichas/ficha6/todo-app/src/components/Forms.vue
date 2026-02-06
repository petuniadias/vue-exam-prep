<template>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="text">
                Text
            </label>
            <input type="text" id="text" name="text" v-model="taskText">
        </div>
        <div>
            <label for="priority">
                Priority
            </label>
            <select name="priority" id="priority" v-model="priority">
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
            </select>
        </div>

        <button type="submit">Add task</button>
    </form>
</template>

<script>
import { useTodoStore } from '@/stores/useTodoStore';
import { mapActions } from 'pinia';

    export default {
        name: 'Forms',
        data() {
            return {
                priority: 'baixa',
                taskText: ''
            }
        },
        methods: {
            ...mapActions(useTodoStore, ['addTodo']),

            async handleSubmit() {
                try {
                    this.addTodo(this.taskText, this.priority)

                    this.taskText = '',
                    this.priority = 'baixa'
                } catch (error) {
                    alert(error.message)
                }
            }
        }
    }
</script>