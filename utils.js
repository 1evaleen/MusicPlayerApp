function saveData (playlist, key) {
    localStorage.setItem(key, JSON.stringify(playlist))
}
function getData (key) {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    } else {
        return {};
    }
}
