const TODOS_STORAGE = "todos";

export function loadTodos() {
    var data = localStorage.getItem(TODOS_STORAGE);
    if (data !== null && data !== undefined) {
        return []
    }
    var serialized = JSON.parse(data);
    return serialized;
}

export function saveTodos(todos) {
    localStorage.clear(TODOS_STORAGE)
    localStorage.setItem(TODOS_STORAGE, todos)
}

export function saveTodo(todo) {
    var todos = loadTodos();
    var newArray = [...todos, todo]
    saveTodos(newArray)
}