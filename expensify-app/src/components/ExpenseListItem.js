import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({dispatch, id,description, amount, createdAt, history}) => (
  <div>
  <Link to={`/edit/${id}`}>
      <h2>{description}</h2>
  </Link>
    <p>Amount: {amount} - CreatedAt:{createdAt}</p>    
  </div>
  );

  
  export default ExpenseListItem;