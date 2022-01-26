import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "./components/HomeComponent";
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskEditComponent from "./components/TaskEditComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";

import LoginComponent from "./components/Auth/LoginComponent";
import RegisterComponent from "./components/Auth/RegisterComponent";
import AboutComponent from "./components/AboutComponent";

Vue.use(Router);

const router = new Router({
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
            path: "/tasks",
            name: "task.create",
            component: TaskCreateComponent,
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
        {
            path: "/login",
            name: "auth.login",
            component: LoginComponent,
        },
        {
            path: "/register",
            name: "auth.register",
            component: RegisterComponent,
        },
        {
            path: "/about",
            name: "about",
            component: AboutComponent,
            meta: { authOnly: true },
        },
    ],
});

function isLoggedIn() {
    return localStorage.getItem("auth");
}

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.authOnly)) {
        if (!isLoggedIn()) {
            next("/login");
        } else {
            next();
        }
    } else if (to.matched.some((record) => record.meta.guestOnly)) {
        if (isLoggedIn()) {
            next("/about");
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
