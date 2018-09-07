<template>
    <div>

    <h3 class = "text-center">Sign in</h3>

        <input type = "text" class = "form-control" placeholder = "FirstName" v-model = "user.firstName">
        <input type = "text" class = "form-control" placeholder = "LastName" v-model = "user.lastName">
        <input type = "text" class = "form-control" placeholder = "Username" v-model = "user.username">
        <input type = "email" class = "form-control" placeholder = "Email" v-model = "user.email">
        <input type = "password" class = "form-control" placeholder = "Password" v-model = "user.password">

        <hr>

        <button class = "btn btn-lg btn-primary btn-block" @click = "register"> Sign in </button>

        <p class = "text-center">
            Already have an account? Log in!
            <router-link to = "/auth/login">Log in</router-link>

        </p>


    </div>
</template>

<script>
    export default {
        name: 'registration',
        data: function(){
            return {
                user: {
                    firstName: "",
                    lastName: "",
                    username: "",
                    email: "",
                    password: ""
                }
            }
        },
        methods: {
            register: function(){
                this.$http.post("http://localhost:9090/users",this.user)
                    .then(function(res) {
                        alertify.success("Successfully registered! Now you can login.");
                        this.$router.push('/auth/login');
                    })
                    .catch(function(res) {
                        if (res.status == 422) {
                            res.body.errors.forEach(function (e) {
                                alertify.error(e);
                            });
                        }
                    })

        }
        }

</script>

<style>

</style>