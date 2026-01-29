<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ studentNumber }}</p>
        <p>{{ course }}</p>
        <p>{{ year }}</p>
    </div>
</template>

<script>
    export default {
        name: "StudentCard",
        props: {
            name: {
                type: String,
                required: true
            },
            studentNumber: {
                type: Number,
                required: true,
                validator(value) {
                    if (value < 0) {
                        console.warn(`Invalid student number: ${value}. Must be positive`);
                        return false;
                    }
                    return true;
                }
            },
            course: {
                type: String,
                default: "TSIW",
            },
            year: {
                type: Number,
                default: 2,
                validator(value) {
                    if (value < 1 || value > 3) {
                        console.warn(`Invalid year: ${value}. Must be between 1 and 3`);
                        return false;
                    }
                    return true;
                }
            }
        }
    }
</script>

