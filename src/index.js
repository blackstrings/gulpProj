var Hero = require('./Hero');

var hero = new Hero("Sam");
console.log(hero.name + ' ' + hero.getSword().swing());

var init = function(){
	console.log('init');

	console.log("done loading");
	var div = document.getElementById("info");
	div.innerHTML = "this is dynamic content, hero name is: " + hero.name;

	//button click
	var btn = document.getElementById('btn1');
	btn.addEventListener('click', function(){
		alert('clicked');
	});

	//loop a bunch of buttons
	var container = document.getElementById('container');
	var btnNames = ['Home', 'Account', 'Login'];
	btnNames.forEach(function(name){
		var b = document.createElement('button');
		b.innerHTML = name;
		b.className = 'nav-btn';
		b.addEventListener('click', function(){
			alert('clicked ' + name);
		});
		b.addEventListener('mouseover', function(){
			b.className = 'btn-over';
		});
		b.addEventListener('mouseout', function(){
			b.className = 'btn-out';
		});
		container.appendChild(b);
	});

};

window.onload = function(){
	init();
};