import React, {useContext}  from 'react';
import todosContext from '../context/todos-context';

const TodoListFilters = () =>{
    const { filters, filtersDispatch } = useContext(todosContext)
    const onTextChange = (e) => {
        filtersDispatch( {
            type:'SET_TEXT_FILTER',
            text: e.target.value
        })
      };
    const onToggleHideCOmplted = (e) =>{
        filtersDispatch( {
            type:'TOGGLE_HIDE_COMPLETE',
            hideComplete: !filters.hideComplete
        })
    }

    return (
        <div>
            <input 
                type="text" 
                value={filters.text} 
                onChange={(e)=>onTextChange(e)}
                placeholder="Filter to dos"/>

            <input 
                type="checkbox" 
                checked={filters.hideComplete} 
                onChange={(e)=>{onToggleHideCOmplted(e)}}/>

            <label>Hide Completed</label>
        </div>
    )
}

export {TodoListFilters as default}