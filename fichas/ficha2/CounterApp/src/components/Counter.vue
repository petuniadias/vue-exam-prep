<template>
    <div class="flex flex-col gap-2">
        <div class="text-3xl">Number: {{ num }}</div>
        <p v-if="errorMsg" class="text-red-500">{{ errorMsg }}</p>
        <div class="flex gap-2">
            <button @click="incrementOne">+</button>
            <button @click="subtractOne">-</button>
            <button @click="resetNum">Reset</button>
            <button @click="incrementNumber(5)">+5</button>
            <button @click="incrementNumber(10)">+10</button>
            <button @click="incrementNumber(10)">+50</button>
        </div>
        <div class="shortcuts">
            <ul>
                <li>[+] or [=] adds 1</li>
                <li>[-] subtracts 1</li>
                <li>[R] resets </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "Counter",
        
        data() {
            return {
                num: 0,
                originalNum: null,
                errorMsg: "",
                errorTimeout: null
            }
        },

        created() {
            this.originalNum = this.num;
        },

        mounted() {
            window.addEventListener('keyup', this.handleKeyPress);
        },

        beforeUnmount() {
            window.removeEventListener('keyup', this.handleKeyPress);

            if (this.errorTimeout) {
                clearTimeout(this.errorTimeout);
            }
        },

        methods: {
            incrementOne() {
                this.num++;
                this.clearError();
            },

            subtractOne() {
                if (this.num > 0) {
                    this.num--; 
                    this.clearError();
                } else {
                    this.showError("Number can't be less than zero!")
                }
            },

            resetNum() {
                this.num = this.originalNum;
                this.clearError();
            },

            incrementNumber(number) {
                this.num += number;
                this.clearError();
            },

            handleKeyPress(event) {
                if (event.key === "+" || event.key === "=") {
                    this.incrementOne();
                } else if (event.key === "-") {
                    this.subtractOne();
                } else if (event.key.toLowerCase() === "r" ) {
                    this.resetNum()
                }
            },

            showError(msg) {
                this.errorMsg = msg;

                this.errorTimeout = setTimeout(() => {
                    this.errorMsg = ""
                    this.errorTimeout = null
                }, 3000);
            },

            clearError() {
                if (this.errorTimeout) {
                    clearTimeout(this.errorTimeout);
                    this.errorTimeout = null;
                }
                this.errorMsg = "";
            }
        }
    }
</script>