<template>
    <div class="container">
        <div class="flex flex-row justify-center">
            <form v-on:submit.prevent="submit">
                <div class="mb-3">
                    <label for="id" class="">ID</label>
                    <input
                        type="text"
                        class="form"
                        readonly
                        id="id"
                        v-model="task.id"
                    />
                </div>
                <div class="mb-3">
                    <label for="title" class="">Title</label>
                    <input
                        type="text"
                        class="form"
                        id="title"
                        v-model="task.title"
                    />
                </div>
                <div class="mb-3">
                    <label for="content" class="">Content</label>
                    <input
                        type="text"
                        class="form"
                        id="content"
                        v-model="task.content"
                    />
                </div>
                <div class="mb-3">
                    <label for="person-in-charge" class=""
                        >Person In Charge</label
                    >
                    <input
                        type="text"
                        class="form"
                        id="person-in-charge"
                        v-model="task.person_in_charge"
                    />
                </div>
                <button type="submit" class="btn btn-primary">更新する</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        taskId: Number,
    },
    data() {
        return {
            task: {},
        };
    },
    methods: {
        getTask() {
            axios.get("/api/tasks/" + this.taskId).then((res) => {
                this.task = res.data;
            });
        },
        submit() {
            axios.post("/api/tasks/" + this.taskId, this.task).then((res) => {
                this.$router.push({ name: "task.list" });
            });
        },
    },
    mounted() {
        this.getTask();
    },
};
</script>
