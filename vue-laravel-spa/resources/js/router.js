import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "./components/HomeComponent";
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskEditComponent from "./components/TaskEditComponent";

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
        {
            path: "/tasks/:taskId",
            name: "task.show",
            component: TaskShowComponent,
            props: true,
        },
        {
            path: "/tasks/:taskId/edit",
            name: "task.edit",
            component: TaskEditComponent,
            props: true,
        },
    ],
});
