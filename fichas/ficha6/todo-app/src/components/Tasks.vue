<template>
    <div
        style="
            margin-bottom: 12px
        "
    >
        <p>Percentage completed: {{ percentageConcluded }}</p>
        <p>Completed: {{ totalCompletedTasks }}</p>
        <p>Pendent: {{ totalPendentTasks }}</p>
        <select name="filter" id="fitler" v-model="filter">
            <option value="todas">todas</option>
            <option value="concluidas">concluídas</option>
            <option value="pendentes">pendentes</option>
        </select>

        <button @click="clearCompleted">Clear Completed</button>
        <button @click="clearAll">Clear All</button>
    </div>

    <div
        style="
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 12px;
        "
    >
        <div v-for="task in filteredTasks" :key="task.id"
            :style="{
                backgroundColor: task.priority === 'alta' ? 'red' :
                                 task.priority === 'media' ? 'yellow' : 'lightgreen',
                padding: '16px',
                borderRadius: '8px',
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
            }"
        >
            <div
                style="
                    display: flex;
                    gap: 4px;
                "
            >
                <input type="checkbox" v-model="task.completed">
                <p
                    :style="{
                        textDecoration: task.completed ? 'line-through' : 'none',
                        margin: 0
                    }"
                >{{ task.text }}</p>
            </div>

            <p
                style="margin: 0"
            >{{ task.priority }}</p>
            <button @click="removeTodo(task.id)">Remove</button>
        </div>
    </div>
</template>

<script>
import { useTodoStore } from '@/stores/useTodoStore';
import { mapActions, mapState } from 'pinia';

    export default {
        name: 'Tasks',
        data() {
            return {
                filter: 'todas'
            }
        },
        computed: {
            ...mapState(useTodoStore, ['tasks', 'completedTasks', 'pendentTasks', 'totalCompletedTasks', 'totalPendentTasks', 'percentageCompleted']),
            filteredTasks() {
                return this.filter === 'concluidas' ? this.completedTasks :
                this.filter === 'pendentes' ? this.pendentTasks :
                this.tasks
            }
        },

        methods: {
            ...mapActions(useTodoStore, ['removeTodo', 'clearCompleted', 'clearAll']), 
        }
    }
</script>