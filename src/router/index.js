import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from "@/components/HelloWorld";
import IndexedDB from "@/components/IndexedDB";
import CountDown from "@/components/CountDown";
import DragAndDrop from "@/components/DragAndDrop";
import ScssStyle from "@/components/css/ScssStyle";
import Transition from "@/components/css/Transition";
import Animation from "@/components/css/Animation";
import Video from "@/components/media/Video";

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
        },
        {
            path: '/drag',
            name: 'drag',
            component: DragAndDrop
        },
        {
            path: '/scss',
            name: 'scss',
            component: ScssStyle
        },
        {
            path: '/transition',
            name: 'transition',
            component: Transition
        },
        {
            path: '/animation',
            name: 'animation',
            component: Animation
        },
        {
            path: '/video',
            name: 'video',
            component: Video
        }
    ]
})
