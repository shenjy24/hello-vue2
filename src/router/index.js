import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import IndexedDB from "@/components/IndexedDB";
import CountDown from "@/components/CountDown";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'hello',
            component: HelloWorld
        },
        {
            path: '/indexed',
            name: 'indexed',
            component: IndexedDB
        },
        {
            path: '/countdown',
            name: 'countdown',
            component: CountDown
        }
    ]
})
