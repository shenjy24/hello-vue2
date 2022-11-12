import Vue from "vue";
import {log, LogType} from "@/js/log";

export function initIndexedDB() {
    const request = window.indexedDB.open('web-log')
    // 如果指定的数据库不存在，就会新建，则一定会触发 onupgradeneeded 事件
    request.onupgradeneeded = (e) => {
        console.log('upgrade success:' + JSON.stringify(e));
        const db = e.target.result
        if (!db.objectStoreNames.contains('errors')) {
            db.createObjectStore('errors', {autoIncrement: true})
        }
    }
    request.onsuccess = (e) => {
        console.log('open success:' + JSON.stringify(e));
    }
    request.onerror = (e) => {
        console.log('open error:' + JSON.stringify(e));
    }
}

export function registerErrorHandler() {
    Vue.config.errorHandler = (err, vm, info) => {
        const content = `err=${err}, info=${info}`
        console.log(content)
        log(content, LogType.ERROR)
    }
    Vue.config.warnHandler = (msg, vm, trace) => {
        const content = `msg=${msg}, trace=${trace}`
        console.log(content)
        log(content, LogType.WARN)
    }
    // 全局捕获 Promise 的未处理异常 unhandledrejection 事件
    window.onunhandledrejection = event => {
        const content = `${event.reason}`
        console.log(content)
        log(content, LogType.REJECTION)
    }
}
