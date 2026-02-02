<template>
    <h1>Dashboard</h1>
    <aside>
        <router-link to="/dashboard">Overview</router-link>
        <router-link to="/dashboard/users">Users</router-link>
        <router-link to="/dashboard/settings">Settings</router-link>
    </aside>
    <router-view></router-view>
</template>

<script>
    export default {
        
    }
</script>