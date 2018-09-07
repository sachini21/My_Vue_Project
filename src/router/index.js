import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import Form from '../components/form.vue'
import Submit from '../components/submit.vue'

Vue.use(Router);

var Router = new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/form',
            name: 'Form',
            component: Form
        },
        {
            path: '/submit',
            name: 'submit',
            component: Submit
        }

    ]

});

export default Router;