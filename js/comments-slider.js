document.addEventListener('DOMContentLoaded', function() {

	var commentsList = document.querySelector('.comments__list');
	var comments = commentsList.querySelectorAll('.comments__element');
	var commentNumber;


	//initializes comments and buttons
	function init() {
		//hide all comments
		for (var i = 0; i < comments.length; i++) {
			comments[i].classList.add("hide");
		}
		//show first comment by adding class active to it
		comments[0].classList.add("active");
		createControls();	
	}
	

	//creates buttons under displayed comment to show selected comment
	function createControls() {
		var parent = commentsList.parentElement;
		var controlsList = document.createElement('div');
		controlsList.classList.add('comments__controls');
		var btnsCode = '<button class="comments__control active" data-commentnumber="0"></button><button class="comments__control" data-commentnumber="1"></button><button class="comments__control" data-commentnumber="2"></button>';
		controlsList.innerHTML = btnsCode;
		parent.appendChild(controlsList);
	}


	//displays selected comment by adding active class to it, and removing it from other comments
	function showComment(num) {
		//hide previously active comment
		for (var i = 0; i < comments.length; i++) {
			comments[i].classList.remove("active");
		}
		//show clicked comment by adding class active to it
		comments[num].classList.add("active");	
	}


	//updates currenty clicked button with class active
	function updateActiveBtn(num) {
		for (var i = 0; i < commentsBtn.length; i++) {
			commentsBtn[i].classList.remove("active");
		}
		commentsBtn[num].classList.add("active");
	}


	init();


	var commentsControls = document.querySelector('.comments__controls');
	var commentsBtn = commentsControls.querySelectorAll('.comments__control');

	//click event on buttons parent element,
	//event delegation
	commentsControls.addEventListener('click', function(e) {
		if (e.target.tagName === 'BUTTON') {
			commentNumber = e.target.dataset.commentnumber;
			showComment(commentNumber);
			updateActiveBtn(commentNumber);
		}
	});
});