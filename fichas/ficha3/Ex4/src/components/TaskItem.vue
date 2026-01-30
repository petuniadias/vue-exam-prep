<template>
    <div style="border: 1px solid black; padding: 4px; display: flex">
        <input type="checkbox" @click="toggleTask" v-model="task.completed">
        <p :style="task.completed ? 'text-decoration: line-through' : 'text-decoration: none'">{{ task.description }}</p>
        <button @click="removeTask">Remove</button>
    </div>
</template>

<script>
    export default {
        name: "TaskItem",
        props: {
            task: {
                type: Object,
                required: true,
                validator(value) {
                    return value.id &&
                    value.description &&
                    typeof value.completed === "boolean"
                }
            }
        },
        emits: ['toggle-task', 'remove-task'],
        methods: {
            toggleTask() {
                this.$emit('toggled-task', this.task.id);
            },

            removeTask() {
                this.$emit('remove-task', this.task.id);
            }
        }
    }
</script>