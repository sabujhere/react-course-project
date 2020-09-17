import React, {useContext} from 'react'
import Todo from './Todo';
import todosContext from '../context/todos-context';

const TodoList = () =>{
    const { todos } = useContext(todosContext)
    return todos.map((todo) =>(
        <Todo key={todo.name} todo={todo}/>
      ))    
  }

export {TodoList as default}