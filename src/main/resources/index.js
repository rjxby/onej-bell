
require('file?name=index.html!./index.html');
require('./styles/main.sass');

var React = require('react')
var App = require('./ts/app.tsx').App;

React.render(
    React.createElement(App),
    document.body
);
