import { useState } from "react"
import { TodoItem } from "./TodoItem"
import AddTodo from "./AddTodo"
import { saveTodo } from "../services/todoServices"
export function TodoList({ todos }) {

    let [showAdd, setShowAdd] = useState(false)

    const onDeleteTodo = (id) => {
        console.log("delete", id)
    }
    const onDone = (id) => {
        console.log("done", id)
    }

    const onAddTodo = (todo) => {
        saveTodo(todo);
    }

    return <div>

        <h1>Listado de Tareas: </h1>
        <button onClick={() => setShowAdd(!showAdd)}> {showAdd ? 'Agregar' : ''} Nueva tarea</button>
        {showAdd && <AddTodo onAddTodo={onAddTodo} />}
        <br />
        {todos.map(t => <TodoItem key={t.id} id={t.id} title={t.title} done={t.done} onDelete={onDeleteTodo} onDone={onDone} />)}
    </div>
}