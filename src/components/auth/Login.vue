<template>

    <div>
    <h2>Log in</h2>

    <input type = "text" class = "form-control" placeholder = "Username" v-bind = "user.username">
    <input type = "password" class = "form-control" placeholder = "Password" v-bind = "user.password">

    <hr>

    <button class = "btn btn-lg btn-primary btn-block" @click = "login"> Log in </button>

    <p class = "text-center">
        Don'have an account? Sign in!
        <router-link to = "/auth/register"> Sign in</router-link>

    </p>
    </div>

</template>


<script>
    export default {
        name: 'login',
        data: function(){
            return {
                user: {
                    username: "",
                    password: ""
                }

            }
        },
        methods:{
            login: function() {
                this.$http.post("http://localhost:9090/auth",this.user)
                    .then(function(res){
                        alertify.success("You are successfully logged in");
                    })

            }
        }
    }

</script>


<style>

</style>