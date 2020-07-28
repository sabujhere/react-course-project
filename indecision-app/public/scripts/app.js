'use strict';

var showContent = true;
var content = undefined;
var buttonContent = 'hide';
var onToggleContent = function onToggleContent() {
  showContent = !showContent;
  renderIndecisionApp();
};

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibilty Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggleContent },
      showContent ? 'hide content' : 'show details'
    ),
    showContent && React.createElement(
      'p',
      null,
      'This is my content'
    )
  );
  var appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};
onToggleContent();
renderIndecisionApp();
