'use strict';

console.log('App.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Sabuj Saha'
    ),
    React.createElement(
        'p',
        null,
        'Age 37'
    ),
    React.createElement(
        'p',
        null,
        'Location: Chicago'
    )
);

var appRoot = document.getElementById('app');
var appRoot2 = document.getElementById('personalInfo');

ReactDOM.render(template, appRoot);

ReactDOM.render(template2, appRoot2);
