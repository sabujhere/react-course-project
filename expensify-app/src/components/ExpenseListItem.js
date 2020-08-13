import React from 'react';
import { connect } from 'react-redux';

const ExpenseListItem = ({description, amount, createdAt}) => (
  <div>
  <h2>{description}</h2>
  <p>{amount} - {createdAt}</p>
  </div>
  );

  export default ExpenseListItem;