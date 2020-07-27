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

var template2 = (
    <div>
        <h1> Sabuj Saha</h1>
        <p>Age 37</p>
        <p>Location: Chicago</p>
    </div>
)

var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('personalInfo')

ReactDOM.render(template, appRoot);

ReactDOM.render(template2, appRoot2)