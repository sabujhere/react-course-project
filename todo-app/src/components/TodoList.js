import React, {useContext} from 'react'
import Todo from './Todo';
import todosContext from '../context/todos-context';

const TodoList = () =>{
    const { todos, filters } = useContext(todosContext);
    const filteredTodos = todos.filter((todo)=>{
      
      const includeText = filters.text==='' ? true : todo.name.includes(filters.text);
      const hide = !(filters.hideComplete && todo.completed) ;
      return includeText && hide

    })
    return filteredTodos.map((todo) =>(
        <Todo key={todo.name} todo={todo}/>
      ))    
  }

export {TodoList as default}