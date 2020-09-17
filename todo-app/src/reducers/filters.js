
const filterReducers = (state, action) =>{
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text:action.text
            }
        case 'TOGGLE_HIDE_COMPLETE':
            return {
                ...state,
                hideComplete: action.hideComplete
            }
    }
}