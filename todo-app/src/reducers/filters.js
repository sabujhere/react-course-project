

const filterReducers = (state, action) =>{
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            console.log('setting text filter')
            return {
                ...state,
                text:action.text
            }
        case 'TOGGLE_HIDE_COMPLETE':
            return {
                ...state,
                hideComplete: action.hideComplete
            }

        default:
            return state;
    }
}

export {filterReducers as default}