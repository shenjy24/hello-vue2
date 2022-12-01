import Router from 'vue-router';
import Logan from "@/components/module/log/Logan";
import IndexedDB from "@/components/module/storage/IndexedDB";
import CountDown from "@/components/module/util/CountDown";
import ScssStyle from "@/components/module/css/ScssStyle";
import Transition from "@/components/module/css/Transition";
import Animation from "@/components/module/css/Animation";
import Video from "@/components/module/media/Video";
import Audio from "@/components/module/media/Audio";
import VuexCounter from "@/components/feature/vuex/VuexCounter";
import WebSite from "@/components/feature/slot/WebSite";
import CreateScene from "@/components/module/threejs/CreateScene";
import HelloTween from "@/components/module/threejs/HelloTween";
import FormValidation from "@/components/module/elementui/FormValidation";
import HelloVue from "@/components/HelloVue";

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
        },
        {
            path: '/three',
            name: 'HelloThreeJS',
            component: CreateScene
        },
        {
            path: '/tween',
            name: 'HelloTween',
            component: HelloTween
        },
        {
            path: '/form',
            name: 'FormValidation',
            component: FormValidation
        },
        {
            path: '/hello',
            name: 'HelloVue',
            component: HelloVue
        }
    ]
})
