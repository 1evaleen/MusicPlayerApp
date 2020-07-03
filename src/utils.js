class LocalCache {
    static saveData (playlist, key) {
        localStorage.setItem(key, JSON.stringify(playlist))
    }
    static getData (key) {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}

export default LocalCache;