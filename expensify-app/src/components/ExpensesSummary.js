import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import numeral from 'numeral';
import selectExpenseTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{expensesCount}</span> expense{expensesCount === 0 ? '':'s'} totalling <span>{numeral(expensesTotal/100).format('$0,0.00')}</span></h1>
        <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
        </div>
        </div>
    </div>
);

//export default ExpensesSummary;
const mapStateToProps = (state) =>{
    const filteredExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: filteredExpenses.length,
        expensesTotal: selectExpenseTotal(filteredExpenses)
    }
}

 export default connect(mapStateToProps)(ExpensesSummary);