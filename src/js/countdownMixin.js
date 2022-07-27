import Vue from "vue";

export const countdownMixin = {
    data() {
        return {
            timeInfo: {},
        }
    },

    methods: {
        restart(label) {
            const taskKey = this.getTaskKey(label)
            const endSecsKey = this.getEndSecsKey(label)

            const taskId = Number.parseInt(sessionStorage.getItem(taskKey))
            const nowSecs = this.currentSecond()
            const endSecs = Number.parseInt(sessionStorage.getItem(endSecsKey))
            if (taskId && nowSecs < endSecs) {
                this.doStart(label, nowSecs, endSecs)
            }
        },

        start(label, secs) {
            this.stop(label)
            const startSecs = this.currentSecond()
            this.doStart(label, startSecs, startSecs + secs)
        },

        doStart(label, nowSecs, endSecs) {
            const taskKey = this.getTaskKey(label)
            const endSecsKey = this.getEndSecsKey(label)

            Vue.set(this.timeInfo, label, endSecs - nowSecs)
            sessionStorage.setItem(endSecsKey, endSecs + '')
            const newTaskId = setInterval(() => {
                const sec = endSecs - this.currentSecond()
                if (sec > 0) {
                    Vue.set(this.timeInfo, label, sec)
                } else {
                    clearInterval(newTaskId)
                    sessionStorage.removeItem(taskKey)
                    sessionStorage.removeItem(endSecsKey)
                    Vue.set(this.timeInfo, label, 0)
                }
            }, 1000)
            sessionStorage.setItem(taskKey, newTaskId.toString())
        },

        stop(label) {
            const taskKey = this.getTaskKey(label)
            const oldTaskId = Number.parseInt(sessionStorage.getItem(taskKey))
            if (oldTaskId) {
                const endSecsKey = this.getEndSecsKey(label)
                clearInterval(oldTaskId)
                sessionStorage.removeItem(taskKey)
                sessionStorage.removeItem(endSecsKey)
                Vue.set(this.timeInfo, label, 0)
            }
        },

        getTaskKey(label) {
            return 'countdownTaskId-' + label
        },

        getEndSecsKey(label) {
            return 'countdown-end-key-' + label
        },

        getCountdown(label) {
            let min = 0
            let sec = 0
            const secs = Number.parseInt(this.timeInfo[label])
            if (secs) {
                min = Math.floor(secs / 60)
                sec = secs % 60
            }
            return this.formatNumber(min) + ":" + this.formatNumber(sec)
        },

        formatNumber(v) {
            if (v === 0) {
                return '00'
            } else if (1 <= v && v <= 9) {
                return `0${v}`;
            } else {
                return String(v)
            }
        },

        currentSecond() {
            return Number.parseInt((Date.now() / 1000) + '')
        },
    }
}
