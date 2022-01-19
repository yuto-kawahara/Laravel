<template>
    <div>
        <button class="btn" v-on:click="counter += 1">click me!</button>
        <p>The button above has been clicked {{ counter }} times.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0,
        };
    },
};
</script>
