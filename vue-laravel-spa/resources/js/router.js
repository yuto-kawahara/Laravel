import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "./components/HomeComponent";
import TaskListComponent from "./components/TaskListComponent";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeComponent,
        },
        {
            path: "/tasks",
            name: "task.list",
            component: TaskListComponent,
        },
    ],
});
