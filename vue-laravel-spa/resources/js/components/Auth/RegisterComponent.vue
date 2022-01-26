<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <h2>新規登録</h2>
                <form v-on:submit.prevent="submit">
                    <div>
                        <label for="email">Email:</label>
                        <input
                            type="text"
                            class="form"
                            id="email"
                            v-model="email"
                        />
                    </div>
                    <div>
                        <label for="password">パスワード:</label>
                        <input
                            type="text"
                            class="form"
                            id="password"
                            v-model="password"
                        />
                    </div>
                    <button class="btn" v-on:click="register">ログイン</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        register() {},
    },
};
</script>
