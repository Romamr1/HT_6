/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var jQwueryGet = function(){
		$.get('http://api.citybik.es/v2/networks', function (data){
		
		render(data.networks);	
		});
	};

	function render(list){
		var paretn = document.getElementById('container');
		

		for (var i=0;i<list.length;i++){
			
			var div = document.createElement('div');
			
			var a = document.createElement('a');
			a.setAttribute('href',list[i].href);
			a.innerHTML = list[i].name;
			var linkDiv = div;
			div.addEventListener('click', ONClick);

			div.appendChild(a);
			
			paretn.appendChild(div);


		}
	}

	function ONClick(event){
		event.preventDefault();
		
		console.log(this);

	};
	jQwueryGet();

/***/ }
/******/ ]);