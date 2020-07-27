console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = (
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

var user = {
  name: 'Andrew',
  age: 26,
  location: 'Philadelphia'
};

function getLocaiton(location){
    if(location){
        return location;
    } else {
        return 'Unknown'
    }
    
}
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocaiton(user.location)}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
