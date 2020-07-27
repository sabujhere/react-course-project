'use strict';

console.log('App.js is running!');

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    ' Subtitle:',
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'here are your options' : 'No options'
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

var count = 0;
var SubstractOne = function SubstractOne() {
  return console.log("-1");
};
var Reset = function Reset() {
  return console.log("Reset");
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: SubstractOne },
      '-1'
    )
  ),
  React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: Reset },
      'Reset'
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
