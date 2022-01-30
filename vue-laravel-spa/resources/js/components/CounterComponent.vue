<template>
    <div>
        <button class="btn" v-on:click="counter += 1">click me!</button>
        <p>The button above has been clicked {{ counter }} times.</p>
        <button class="btn" v-on:click="increment(2)">+1</button>
        <button class="btn" v-on:click="decrement(2)">-1</button>
    </div>
</template>

<script>
import { mapActions } from "Vuex";
export default {
    data() {
        return {
            counter: 0,
        };
    },
    methods: {
        ...mapActions(["increment", "decrement"]),
    },
};
</script>
