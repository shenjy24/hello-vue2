import Router from 'vue-router';
import Logan from "@/components/Logan";
import IndexedDB from "@/components/IndexedDB";
import CountDown from "@/components/CountDown";
import DragAndDrop from "@/components/DragAndDrop";
import ScssStyle from "@/components/css/ScssStyle";
import Transition from "@/components/css/Transition";
import Animation from "@/components/css/Animation";
import Video from "@/components/media/Video";
import Audio from "@/components/media/Audio";
import VuexCounter from "@/components/VuexCounter";
import WebSite from "@/components/slot/WebSite";

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/logan',
            name: 'logan',
            component: Logan
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
        },
        {
            path: '/audio',
            name: 'audio',
            component: Audio
        },
        {
            path: '/vuex',
            name: 'VuexCounter',
            component: VuexCounter
        },
        {
            path: '/slot',
            name: 'WebSite',
            component: WebSite
        }
    ]
})
