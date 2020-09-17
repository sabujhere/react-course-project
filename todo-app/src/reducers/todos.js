
const todoReducer = (state, action) =>{
    switch(action.type) {
        case 'POPULATE_TODOS':
            return action.todos;
        case 'ADD_TODO':
            return [
                ...state,
                {name:action.name, completed:false}
            ];
        case 'TOGGLE_TODO':
            return state.map((todo)=>{
                if(todo.name === action.name){
                    todo.completed = !todo.completed;
                }
                return todo;                  
            })
        case 'REMOVE_TODO':
            return state.filter((todo)=>todo.name !== action.name)
            
        default:
            return state;
        }
}
export {todoReducer as default}