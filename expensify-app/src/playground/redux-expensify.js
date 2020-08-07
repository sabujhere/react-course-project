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

const expenseReducedDefaultState = [];

const expenseReducer = (state = expenseReducedDefaultState, action) => {

    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':            
            return state.filter(( {id }) => id !== action.expenseId)
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    test:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
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
store.dispatch(addExpense({description:'Coffee', amount:300}))

store.dispatch(removeExpense({id:expenseOne.expense.id}))
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
        test:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}