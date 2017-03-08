//local files you can omit he extension and start with ./
//for npm modules, just do 'theModule'
//var Mid = require('./Middle');

var Sword = require('./Sword');

var Hero = function(name){
	this.name = name;
	this.swold = new Sword();
};

Hero.prototype.getSword = function(){
	return this.sword;
};

module.exports = Hero;