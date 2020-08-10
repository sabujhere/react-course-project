import { createStore, combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';


const defaultExpense = {

}
//Add expense
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0,
        createdAt =0
     } = {}
     ) => ({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


//Remove expense

const removeExpense = ({id:expenseId} = {}) =>({
    type:'REMOVE_EXPENSE',
    expenseId
    });


//set Edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (filterText = '')=> ({
    type: 'SET_FILTER_TEXT',
    filterText
});

const expenseReducedDefaultState = [];

const expenseReducer = (state = expenseReducedDefaultState, action) => {

    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':            
            return state.filter(( {id }) => id !== action.expenseId);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                };                
            });
       
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.filterText
            };
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        fillters:filtersReducer
    })
    );

store.subscribe(()=> {
    console.log(store.getState())
})

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100}))
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:300}))

store.dispatch(removeExpense({id:expenseOne.expense.id}))
store.dispatch(editExpense(expenseTwo.expense.id, {amount:100}));
store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter());
console.log(expenseOne);

const demoState = {
    expenses:[{
        id:'sdkljfsdkl',
        description:'Jan rent',
        note:'This is sample note',
        amount:54600,
        createAt:0
    }
    ],
    filters: {
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}