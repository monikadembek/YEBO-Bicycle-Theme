document.addEventListener('DOMContentLoaded', function(){

	var contactSection = document.getElementById('contact');
	var form = contactSection.querySelector('form');
	var message;

	//checks if email matches regular expression, returns true or false
	function isValidEmail(email) {
		return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
	}

	//displays message under form
	function showMessage(message) {
		var info = document.createElement('h5');
		info.innerHTML = message;
		info.classList.add("heading-info", "heading-info--good");
		contactSection.appendChild(info);
	}

	//displays error under form
	function showError(message) {
		var info = document.createElement('h5');
		info.innerHTML = message;
		info.classList.add("heading-info", "heading-info--error");
		contactSection.appendChild(info);
	}



	//validate on submit
	form.addEventListener('submit', function(e) {
		e.preventDefault();
	
		//looks for message element
		//if finds one removes it
		if (this.nextElementSibling) {
			contactSection.removeChild(this.nextElementSibling);
		}

		//typed email
		var emailInput = this.querySelector('.contact-form__input');

		
		//checks validity of email address and displays appropriate message
		if ((emailInput.value.length > 0) && isValidEmail(emailInput.value.trim())) {
			message = "Thank you for submitting your email address";
			showMessage(message);
			emailInput.value = "";
		} else {
			message = "Invalid email address";
			showError(message);
		}

	});

});