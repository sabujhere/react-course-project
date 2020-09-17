import React, {useContext} from 'react'
import todosContext from '../context/todos-context';

const Todo = ({todo}) =>{
    const { dispatch } = useContext(todosContext)

    const toggleTodo = (e) =>{
        dispatch(
            {
                type: 'TOGGLE_TODO',
                name: todo.name
            }
        )
    }

    const removeTodo = (e) =>{
        dispatch(
            {
                type: 'REMOVE_TODO',
                name: todo.name
            }
        )
    }

    return (
        <div >        
            <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={(e)=>toggleTodo(e)}
                />
            <label>{todo.name}</label>
            <button onClick={(e)=>removeTodo(e)}>Remove</button>
        </div>
    )
}

export {Todo as default}
