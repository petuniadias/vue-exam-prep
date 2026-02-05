<template>
    <div 
        style="display: flex; align-items: center; gap: 8px; font-size: small;"
    >
        <div
            style="
                background-color: lightgray;
                height: 10px;
                width: 250px;
                border-radius: 20px;
                overflow: hidden;
            "
        >
            <div
                :style="{
                    backgroundColor: 'palevioletred',
                    height: '100%',
                    width: progressPercentage + '%'
                }"
            >

            </div>
        </div>
        <span>{{ count }}</span>
    </div>

</template>

<script>
    export default {
        name: 'ProgressBar',
        props: {
            progressPercentage: {
                type: Number,
                required: true
            },
            count: {
                type: Number,
                required: true
            }
        }
    }
</script>