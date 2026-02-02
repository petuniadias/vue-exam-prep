<template>
    <h2>Users</h2>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Join Date</th>
                <th>Status</th>
                <th>Department</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.joinDate }}</td>
                <td>{{ user.status }}</td>
                <td>{{ user.department }}</td>
                <td><router-link :to="`/dashboard/users/${user.id}`">See details</router-link></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { users } from '@/data/admin-dashboard';

    export default {
        name: 'UsersView',
        data() {
            return {
                users: users
            }
        }
    }
</script>