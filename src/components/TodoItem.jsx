
export function TodoItem({ id, title, done, onDelete, onDone }) {
    return <div>
        <input type="checkbox" checked={done} onChange={() => onDone(id)} />
        <label>{title}</label>
        <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
}