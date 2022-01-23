<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
                    <div class="form-group row border-bottom">
                        <label for="id" class="col-sm-3 col-form-label"
                            >ID</label
                        >
                        <input
                            type="text"
                            class="col-sm-9 form-control-plaintext"
                            readonly
                            id="id"
                            v-model="task.id"
                        />
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="title" class="col-sm-3 col-form-label"
                            >Title</label
                        >
                        <input
                            type="text"
                            class="col-sm-9 form-control-plaintext"
                            id="title"
                            v-model="task.title"
                        />
                    </div>
                    <div class="form-group row border-bottom">
                        <label for="content" class="col-sm-3 col-form-label"
                            >Content</label
                        >
                        <input
                            type="text"
                            class="col-sm-9 form-control-plaintext"
                            id="content"
                            v-model="task.content"
                        />
                    </div>
                    <div class="form-group row border-bottom">
                        <label
                            for="person-in-charge"
                            class="col-sm-3 col-form-label"
                            >Person In Charge</label
                        >
                        <input
                            type="text"
                            class="col-sm-9 form-control-plaintext"
                            id="person-in-charge"
                            v-model="task.person_in_charge"
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        更新する
                    </button>
                </form>
            </div>
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
