<template>
    <div class="wrapper">
        <div class="text-name text"></div>
        <div class="text"></div>
        <div class="image"></div>
        <div class="text"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    .text {
        height: 24px;
        border-radius: 4px;
    }

    .image {
        height: 80px;   
        border-radius: 4px;
        animation: pulse 1.5 ease-in-out infinite;
    }
    .image, .text {
        animation: pulse 1.5s ease-in-out infinite;
        background-color: rgb(138, 132, 138);
        width: 20%;
    }
    @keyframes pulse {
        0%, 100% { opacity: 1;}
        50% {opacity: 0.5;}
    }
</style>