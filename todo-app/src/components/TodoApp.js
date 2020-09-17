import React, {useEffect, useReducer} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import TodoContext from '../context/todos-context';
import todoReducer from '../reducers/todos';
import filterReducer from '../reducers/filters';
import TodoListFilter from '../components/TodoListFilters';

const filtersReducerDefaultState = {
    text: '',
    hideComplete: false
  };
const TodoApp = () =>{  
    const [todos, dispatch] = useReducer(todoReducer, [])
    const [filters, filtersDispatch] = useReducer(filterReducer, filtersReducerDefaultState)
    useEffect(()=>{        
        const todos = JSON.parse(localStorage.getItem('todos'));
        if(todos)
            dispatch({
                type:'POPULATE_TODOS', 
                todos
            });     
    },[])
  
    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


   return (
    <TodoContext.Provider value={{todos, dispatch, filters, filtersDispatch}}>
      <h1>To-do App</h1>
      <TodoListFilter/>
      <TodoList/>
      <AddTodoForm/>
    </TodoContext.Provider>
   )
  }

  export {TodoApp as default}