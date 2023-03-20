import { useState } from "react"
import { addTodo } from "../redux/todos"
import FormCSS from "./Form.module.css"

export default function Form() {

  const [input, setInput] = useState("")

  function handleSubmit(e, name) {
    e.preventDefault()
    addTodo({name: name})
    setInput("")
  }

  return (
    <form className={FormCSS.cont} onSubmit={ (e) => handleSubmit(e, input)}>
      <input 
        className="marg10"
        type="text" value={input} 
        onChange={e => setInput(e.target.value)}/>
      <button 
        
        onClick={ (e) => handleSubmit(e, input)}>Add</button>
    </form>
  )
}