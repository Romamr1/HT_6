var jQwueryGet = function(){
	$.get('http://api.citybik.es/v2/networks', function (data){
	
	render(data.networks);	
	});
};

function render(list){

	var parent = document.getElementById('container');
	parent.innerHTML = '<h1>Please, choose what you need!</h1>';

	var ul = document.createElement('ul');
	

	for (var i=0;i<list.length;i++){
		
		var li = document.createElement('li');

		
		var a = document.createElement('a');
		a.setAttribute('href',list[i].href);
		a.className ="list";
		a.innerHTML = list[i].name;
		
		a.addEventListener('click', ONClick);
		

		li.appendChild(a);
		
		ul.appendChild(li);


	}

	parent.appendChild(ul);
}

function ONClick(event){
	event.preventDefault();
	var curentItem = event.target;
	
	renderNewPage(curentItem.href);
};

function renderNewPage(curentHref){
	
	$.get('http://api.citybik.es/v2/networks', function (data){
	
	renderPage(data.networks);	
	});
	
	function renderPage(dataArrey) {

		var template = require('../templ/html.hbs');
		var parent = document.getElementById('container');


			
		for (var i=0;i<dataArrey.length;i++){
			if (dataArrey[i].href === curentHref.substr(7)){				
				parent.innerHTML = template(dataArrey[i]);

				var backButton = document.getElementById('backToMain');
				backButton.addEventListener('click', function(){
					jQwueryGet();
				});
			}
		}
	}
}

jQwueryGet();