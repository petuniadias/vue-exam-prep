<template>
    <div v-if="loadUser">
        <p> {{ loadUser.id }}</p>
        <p> {{ loadUser.name }}</p>
        <p> {{ loadUser.email }} </p>
        <p> {{ loadUser.role }}</p>
        <p> {{ loadUser.joinDate }}</p>
        <p> {{ loadUser.status }}</p>
        <p> {{ loadUser.department }}</p>
    </div>
    <div v-else>
        User not found
    </div>
</template>

<script>
import { getUserByID, users } from '@/data/admin-dashboard';

    export default {
        name: 'UserDetailView',
        data() {
            return {
                users: users
            }
        },
        computed: {
            loadUser() {
                const id = this.$route.params.id;
                return getUserByID(id);
            }
        }
    }
</script>