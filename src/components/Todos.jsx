import { useTodos, toggleTodo, deleteTodo } from "../redux/todos"
import TodosCSS from "./Todos.module.css"
import "../App.css"

export default function Todos() {

  const { todos } = useTodos()

  return (
    <div className={TodosCSS.container}>
        {todos.map( (todo) => {
          return(
            <div className={TodosCSS.todo} key={todo.id}>
              <span style={{color: todo.complete ? "#32B67A" : "#E54B4B"}}>{todo.name}</span>
              <div>
                <button className="marg10" onClick={ () => toggleTodo({id: todo.id})}>Toggle</button>
                <button  onClick={ () => deleteTodo({id: todo.id})}>Delete</button>
              </div>
            </div>
          )
        })}
    </div>
  )
}