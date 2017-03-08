(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//local files you can omit he extension and start with ./
//for npm modules, just do 'theModule'
//var Mid = require('./Middle');

var Sword = require('./Sword');


var Hero = function(name){
	this.name = name;
	this.sword = new Sword("Metal Sword");
};

Hero.prototype.getSword = function(){
	return this.sword;
};

module.exports = Hero;
},{"./Sword":2}],2:[function(require,module,exports){
var Sword = function(name, length){
	this.name = name;
	this.length = length;
};

Sword.prototype.swing = function(){
	return 'swinging ' + this.name;
};

module.exports = Sword;
},{}],3:[function(require,module,exports){
var Hero = require('./Hero');

var hero = new Hero("Sam");
console.log(hero.name + ' ' + hero.getSword().swing());

window.onload = function(){
	console.log("done loading");
	var div = document.getElementById("info");
	div.innerHTML = "this is dynamic content, hero name is: " + hero.name;
}
},{"./Hero":1}]},{},[3]);
