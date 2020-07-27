console.log('App.js is running')

var template = ( 
<div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

var userName = "Hobby"
var userAge = 27;
var userLocation = "Chicago"

var user = {
    name:'Test',
    age:26,
    location:'Chicago'
}
var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age:{user.age}</p>
        <p>Location: {user.location}</p>
    </div>
)

var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('personalInfo')

ReactDOM.render(template, appRoot);

ReactDOM.render(template2, appRoot2)