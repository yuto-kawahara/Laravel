<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <form v-on:submit.prevent="submit">
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
                        登録する
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
        submit() {
            axios.post("/api/tasks/", this.task).then((res) => {
                this.$router.push({ name: "task.list" });
            });
        },
    },
};
</script>
