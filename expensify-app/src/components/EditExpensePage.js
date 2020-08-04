import React from 'react';

  
const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the expenses for the ID of {props.match.params.id}
    </div>
  );
}

  export default EditExpensePage;