console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    { app.subtitle && <p> Subtitle:{app.subtitle}</p>}
    <p>{app.options.length > 0 ?  'here are your options':'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

let count = 0;
const SubstractOne = ()  => {
  count--;
  renderCountApp();
}
const Reset = () => {
  count = 0;
  renderCountApp();
}
const appRoot = document.getElementById('app');

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