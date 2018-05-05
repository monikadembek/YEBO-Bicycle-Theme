(function(){

	var main = document.querySelector('main');

	//the distance of main element from top of window
	var topOfMain = main.offsetTop; 

	//makes nav fixed after scrolling to the main section of the page
	function fixedNav() {
		if (window.scrollY >= topOfMain) {
			document.body.classList.add('fixed-nav');
		} else {
			document.body.classList.remove('fixed-nav');
		}
	}


	window.addEventListener('scroll', fixedNav); 


})();