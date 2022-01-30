<template>
    <div class="container-fluid bg-dark mb-3">
        <div class="">
            <nav
                class="flex text-white bg-black py-2 px-4 justify-between items-center w-full"
            >
                <router-link v-bind:to="{ name: 'home' }">
                    <span class="navbar-brand mb-0 h1">Vue Laravel SPA</span>
                </router-link>

                <div>
                    <router-link v-if="ok" v-bind:to="{ name: 'task.list' }">
                        <button class="btn">List</button>
                    </router-link>
                    <router-link v-else v-bind:to="{ name: 'task.create' }">
                        <button class="btn">ADD</button>
                    </router-link>
                    <router-link v-bind:to="{ name: 'auth.login' }">
                        <button class="btn">ログイン</button>
                    </router-link>
                    <router-link v-bind:to="{ name: 'auth.register' }">
                        <button class="btn">新規登録</button>
                    </router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ok: false,
        };
    },
};
</script>
