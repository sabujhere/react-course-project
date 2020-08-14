import React from 'react';
import {removeExpense} from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch, id,description, amount, createdAt}) => (
  <div>
    <h2>{description}</h2>
    <p>{amount} - {createdAt}</p>
    <button onClick={(e)=>{
      dispatch(removeExpense({id}))
    }}>Remove</button>
  </div>
  );

  
  export default connect()(ExpenseListItem);