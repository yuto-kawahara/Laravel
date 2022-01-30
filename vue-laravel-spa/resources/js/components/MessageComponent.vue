<template>
    <div>
        <input type="text" v-model="message" placeholder="edit me" />
        <p>Message is: {{ message }}</p>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "",
        };
    },
    computed: {
        count() {
            return this.$store.state.count;
        },
    },
};
</script>
