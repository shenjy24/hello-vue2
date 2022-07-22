export function initIndexedDB() {
    const request = window.indexedDB.open('web-log')
    request.onupgradeneeded = (e) => {
        console.log('upgrade success:' + JSON.stringify(e));
        const db = e.target.result
        if (!db.objectStoreNames.contains('errors')) {
            db.createObjectStore('errors',  { autoIncrement: true })
        }
    }
    request.onsuccess = (e) => {
        console.log('open success:' + JSON.stringify(e));
    }
    request.onerror = (e) => {
        console.log('open error:' + JSON.stringify(e));
    }
}
