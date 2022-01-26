<template>
    <div
        class="flex justify-center mx-auto max-w-sm rounded overflow-hidden shadow-lg"
    >
        <form @submit.prevent="login" class="flex flex-col">
            <div class="mb-2">
                <label>メールアドレス</label>
                <input
                    type="text"
                    class="form"
                    v-model="email"
                    placeholder="example@example.com"
                />
                <span v-if="errors.email">
                    {{ errors.email[0] }}
                </span>
            </div>

            <div class="mb-2">
                <label>パスワード</label>
                <input type="password" class="form" v-model="password" />
                <span v-if="errors.password">
                    {{ errors.password[0] }}
                </span>
            </div>

            <button class="btn">ログイン</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            errors: [],
        };
    },
    methods: {
        login() {
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios
                    .post("/api/login", {
                        email: this.email,
                        password: this.password,
                    })
                    .then((response) => {
                        console.log(response);
                        localStorage.setItem("auth", "ture");
                        this.$router.push("/about");
                    })
                    .catch((error) => {
                        this.errors = error.response.data.errors;
                    });
            });
        },
    },
};
</script>
