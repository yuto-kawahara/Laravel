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
                    <button class="btn">ADD</button>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {};
</script>
