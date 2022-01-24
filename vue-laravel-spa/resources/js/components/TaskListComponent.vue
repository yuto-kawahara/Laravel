<template>
    <div class="container">
        <table class="table-auto">
            <thead class="bg-gray-100">
                <tr>
                    <th scope="col" class="px-4 py-2">#</th>
                    <th scope="col" class="px-4 py-2">Title</th>
                    <th scope="col" class="px-4 py-2">Content</th>
                    <th scope="col" class="px-4 py-2">Person In Charge</th>
                    <th scope="col" class="px-4 py-2">Show</th>
                    <th scope="col" class="px-4 py-2">Edit</th>
                    <th scope="col" class="px-4 py-2">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(task, index) in tasks" :key="index">
                    <th scope="row">{{ task.id }}</th>
                    <td>{{ task.title }}</td>
                    <td>{{ task.content }}</td>
                    <td>{{ task.person_in_charge }}</td>
                    <td>
                        <router-link
                            v-bind:to="{
                                name: 'task.show',
                                params: { taskId: task.id },
                            }"
                        >
                            <button class="show_btn">Show</button>
                        </router-link>
                    </td>
                    <td>
                        <router-link
                            v-bind:to="{
                                name: 'task.edit',
                                params: { taskId: task.id },
                            }"
                        >
                            <button class="edit_btn">Edit</button>
                        </router-link>
                    </td>
                    <td>
                        <button
                            class="delete_btn"
                            v-on:click="deleteTask(task.id)"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link v-bind:to="{ name: 'home' }">
            <button class="btn">Home</button>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tasks: [],
        };
    },
    methods: {
        getTasks() {
            axios.get("/api/tasks").then((res) => {
                this.tasks = res.data;
            });
        },
        deleteTask(id) {
            axios.delete("/api/tasks/" + id).then((res) => {
                this.getTasks();
            });
        },
    },
    mounted() {
        this.getTasks();
    },
};
</script>
