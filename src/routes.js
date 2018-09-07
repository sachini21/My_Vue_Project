import Vue from 'vue';
import VueRouter from 'vue-router';
import Form from "./components/form.vue";
import Submit from "./components/submit.vue";
import Auth from "./components/auth/Auth.vue";
import Register from "./components/auth/Register.vue";
import Login from "./components/auth/Login.vue";

Vue.use(VueRouter);

var router = new VueRouter({

    routes: [
        {
            path: '/form',
            component: Form
        },
        {
            path: '/submit',
            component: Submit
        },
        {
            path: '/auth',
            component: Auth,
            redirect: '/auth/login',
            children: [
                {
                    path: 'register',
                    component: Register
                },
                {
                    path: 'login',
                    component: Login
                }
            ]
        }
    ]
});

export default router;