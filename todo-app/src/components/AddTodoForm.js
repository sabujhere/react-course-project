import React, {useState, useContext} from 'react';
import todosContext from '../context/todos-context';

const AddTodoForm = () =>{
    const { dispatch } = useContext(todosContext)
    const [name, updateName] = useState('');
    const addTodo = (e) =>{
        e.preventDefault();
        dispatch({
            type:'ADD_TODO',
            name:name
        })
        updateName('')
    };

    return (
        <div>
            <p>Add Todo</p>
            <form  onSubmit={addTodo}>
                <input type="text" value={name} onChange={(e)=>{updateName(e.target.value)}}/>
                <button >Add</button>
            </form>
        </div>
    );
}

export {AddTodoForm as default}