require('babel-polyfill');

// js/components/index.js
var React = require('react');
var ReactDOM = require('react-dom');

// var Board = require('./components/board');
var PersonList = require('./components/person-list');
var lists = ['list1','list2'];
document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<PersonList />, document.getElementById('app'));
	 // ReactDOM.render(<Board title = "jon-board" lists = {lists} />, document.getElementById('app'));
});