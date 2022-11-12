import logan from "logan-web";

export const LogType = {
    REJECTION: {
        code: 1,
        msg: 'onunhandledrejection'
    },
    WARN: {
        code: 2,
        msg: 'warn'
    },
    ERROR: {
        code: 3,
        msg: 'error'
    },
}

export function log(content, type) {
    const logContent = format(content, type.msg)
    logan.log(logContent, type.code)
}

export function currentTime() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()
    return year + "-" + (month < 10 ? '0' + month : month) + "-" + (date < 10 ? '0' + date : date) + " "
        + (hour < 10 ? '0' + hour : hour) + ":" + (minute < 10 ? '0' + minute : minute) + ":" + (second < 10 ? '0' + second : second)
}

export function timeFormat2Day(date) {
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    let D = date.getDate();
    return Y + '-' + (M < 10 ? '0' + M : M) + '-' + (D < 10 ? '0' + D : D);
}

export function format(content, type) {
    return `[${currentTime()}] [${type}] ${content}`;
}
