<template>
    <div>
        <table class="table-fixed mx-auto">
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
                <tr v-for="(task, index) in getTasks()" :key="index">
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
        <paginate
            :page-count="getPageCount()"
            :page-range="3"
            :margin-pages="2"
            :click-handler="clickCallback"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            :page-class="'page-item'"
        ></paginate>
    </div>
</template>

<script>
import Paginate from "vuejs-paginate";

export default {
    data() {
        return {
            tasks: [],
            parPage: 5,
            currentPage: 1,
        };
    },
    components: {
        paginate: Paginate,
    },
    methods: {
        clickCallback(pageNum) {
            this.currentPage = Number(pageNum);
        },
        fetchTasks() {
            axios.get("/api/tasks").then((res) => {
                this.tasks = res.data;
            });
        },
        getTasks() {
            let current = this.currentPage * this.parPage;
            let start = current - this.parPage;
            return this.tasks.slice(start, current);
        },
        getPageCount() {
            return Number(Math.ceil(this.tasks.length / this.parPage));
        },
        deleteTask(id) {
            axios.delete("/api/tasks/" + id).then((res) => {
                this.getTasks();
            });
        },
    },
    mounted() {
        this.fetchTasks();
    },
};
</script>
