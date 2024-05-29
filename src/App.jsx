import './App.css'
import { TodoList } from './components/TodoList'

var tareas = [
  { id: 1, title: "Prueba", done: false },
  { id: 2, title: "Prueba2", done: false },
  { id: 3, title: "Prueba3", done: true },
  { id: 4, title: "Prueba4", done: false },
]
function App() {

  return (
    <>
      <h1>Lista de tareas</h1>
      <TodoList todos={tareas} />
    </>
  )
}

export default App
