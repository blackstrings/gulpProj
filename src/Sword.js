var Sword = function(name, length){
	this.name = name;
	this.length = length;
};

Sword.prototype.swing = function(){
	return 'swinging ' + this.name;
};

module.exports = Sword;