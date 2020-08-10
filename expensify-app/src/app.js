import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from  './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'Water bill', amount: 400, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee bill', amount: 300, createdAt: -1000 }));
store.dispatch(setTextFilter('coffee'));
const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
ReactDOM.render(<AppRouter/>, document.getElementById('app'));
