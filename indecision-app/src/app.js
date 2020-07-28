console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const OnFormSubmit = (e)=>{
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
}

const onRemoveAll = ()=> {
  app.options = [];
  renderIndecisionApp();
}

const onMakeDecision = ()=>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const numbers = [55, 1302, 5874];
const renderIndecisionApp = ()=>{
  const template = (
    <div>
      <h1>{app.title}</h1>
      { app.subtitle && <p> Subtitle:{app.subtitle}</p>}
      <p>{app.options.length > 0 ?  'here are your options':'No options'}</p>
      <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should I do</button>
      <ol>
        {
          app.options.map((option)=> <li key = {option}>{option}</li>)
        }
      </ol>
      <button onClick={onRemoveAll}>Remove All</button>
      <form onSubmit={OnFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add option</button>
      </form>
    </div>
  );
  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
}

renderIndecisionApp();