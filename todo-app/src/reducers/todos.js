
const todoReducer = (state, action) =>{
    switch(action.type) {
        case 'POPULATE_TODOS':
            return action.todos;
        case 'ADD_TODO':
            return [
                ...state,
                {name:action.name, completed:false}
            ];
        case 'UPDATE_TODO':
            return state.map((todo)=>{
                if(todo.name === action.name){
                    return {
                        ...todo,
                        ...action.updates
                    }
                }
                else {
                    return todo;
                  };
            })
            
        default:
            return state;
        }
}
export {todoReducer as default}