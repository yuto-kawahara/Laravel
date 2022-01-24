<template>
    <div class="container-fluid bg-dark mb-3">
        <div class="">
            <nav
                class="flex text-white bg-black py-2 px-4 justify-between items-center w-full"
            >
                <span class="navbar-brand mb-0 h1">Vue Laravel SPA</span>
                <div>
                    <router-link v-bind:to="{ name: 'task.list' }">
                        <button class="btn">List</button>
                    </router-link>
                    <router-link v-bind:to="{ name: 'task.create' }">
                        <button class="btn">ADD</button>
                    </router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {};
</script>
