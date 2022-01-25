<template>
    <div class="container mx-auto">
        <div class="flex flex-row justify-center">
            <form>
                <div class="form-group row border-bottom">
                    <label for="id" class="col-sm-3 col-form-label">ID</label>
                    <span>{{ task.id }}</span>
                </div>
                <div class="form-group row border-bottom">
                    <label for="title" class="col-sm-3 col-form-label"
                        >Title</label
                    >
                    <span>{{ task.title }}</span>
                </div>
                <div class="form-group row border-bottom">
                    <label for="content" class="col-sm-3 col-form-label"
                        >Content</label
                    >
                    <span>{{ task.content }}</span>
                </div>
                <div class="form-group row border-bottom">
                    <label
                        for="person-in-charge"
                        class="col-sm-3 col-form-label"
                        >Person In Charge</label
                    >
                    <span>{{ task.person_in_charge }}</span>
                </div>
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
    },
    mounted() {
        this.getTask();
    },
};
</script>
