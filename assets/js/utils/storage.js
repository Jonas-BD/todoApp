export function getData() {
    const storedCode = localStorage.getItem('TodooApp');
    return JSON.parse(storedCode);
}

export function saveData(data) {
    localStorage.setItem('TodooApp', JSON.stringify(data));
}