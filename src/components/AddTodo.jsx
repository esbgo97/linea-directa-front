export default function AddTodo({
    onAddTodo,
    onCancel
}) {
    return <div>
        <h2>Agregar Tarea</h2>
        <input type="text" placeholder="Titulo" />
        <input type="checkbox" />
        <button onClick={onAddTodo}>Agregar</button>
        <button onClick={onCancel}>Cancelar</button>
    </div>
}