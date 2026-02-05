<template>
    <table>
        <tr v-for="(data, index) in history" :key="index">
            <td>{{ data.operation }}</td>
            <td>{{ data.value }}</td>
            <td>{{ data.timestamp }}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: 'History',
        props: {
            history: {
                type: Array,
                required: true
            }
        }
    }
</script>