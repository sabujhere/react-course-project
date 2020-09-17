import React, {useContext} from 'react'
import todosContext from '../context/todos-context';

const Todo = ({todo}) =>{
    const { dispatch } = useContext(todosContext)
    const updateTodo = (e) =>{
        dispatch(
            {
                type: 'UPDATE_TODO',
                name: todo.name,
                updates:{
                    completed:e.target.checked
                }
            }
        )
    }
    return (
        <div >        
        <input type="checkbox" checked={todo.completed} onChange={(e)=>updateTodo(e)}/>
        <label>{todo.name}</label>
        </div>
    )
}

export {Todo as default}
