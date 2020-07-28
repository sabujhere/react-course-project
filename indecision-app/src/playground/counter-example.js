let count = 0;
const SubstractOne = ()  => {
  count--;
  renderCountApp();
}
const Reset = () => {
  count = 0;
  renderCountApp();
}


const renderCountApp = ()=>{
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <div><button onClick={SubstractOne}>-1</button></div>
      <div><button onClick={Reset}>Reset</button></div>    
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
}

renderCountApp();