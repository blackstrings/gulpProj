var Hero = require('./Hero');

var hero = new Hero("Sam");
console.log(hero.name + ' ' + hero.getSword().swing());

window.onload = function(){
	console.log("done loading");
	var div = document.getElementById("info");
	div.innerHTML = "this is dynamic content, hero name is: " + hero.name;
}