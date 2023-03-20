import { createReduxModule } from "hooks-for-redux"

export const initialState = {
    todos: [{id: Date.now(), name: "Test", complete: false}],
}

// useStories: läsa, setStories: uppdatera
export const [useTodos, { addTodo, toggleTodo, deleteTodo }] = createReduxModule(
    "todos", 
    initialState, 
{
   

    addTodo: (state, {name}) => {
        const newTodo = { id: Date.now(), name, complete: false}
        return {...state, todos: [...state.todos, newTodo]}
    },

    toggleTodo: (state, {id}) => { 
        const copyTodos = [...state.todos]
        copyTodos.map( (todo) => {
            if(todo.id === id){
                todo.complete = !todo.complete
            }
        }) 
        return {...state, todos: copyTodos}  
    },

    deleteTodo: (state, {id}) => {
        return {...state, 
            todos: state.todos.filter( todo => todo.id !== id )
        }
    }

    

   /*  setName(state, name){ // CHECK
        return {...state, name: name}
    },    */

}
)