window.addEventListener('DOMContentLoaded', function() {
	var mobileMenuBtn = document.querySelector('.btn-mobile-menu')
	var mobileNav = document.querySelector('.main-nav-mobile__menu');
	
	//opens or closes mobile navigation
	mobileMenuBtn.addEventListener('click', function() {
		mobileNav.classList.toggle('open');
	});

	//closes mobile nav after clicking on link
	mobileNav.addEventListener('click', function(e) {
		console.log(e);
		if (e.target.className === "main-nav-mobile__menu-item") {
			mobileNav.classList.toggle('open');	
		}
	});

}); 