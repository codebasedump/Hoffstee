export function handleFormSubmit(event) {
	event.preventDefault();
		const path = window.location.pathname;

		const firstname = document.getElementById('firstname').value;
		const lastname = document.getElementById('lastname').value;
		const phoneno = document.getElementById('phoneno').value;
		const emailid = document.getElementById('emailid').value;
		const message = document.getElementById('message').value;

		const firstError = document.getElementById('first-error');
		const lastError = document.getElementById('last-error');
		const emailError = document.getElementById('email-error');
		const phonenoError = document.getElementById('phone-error');
		const messageError = document.getElementById('message-error');

		
		function isPhone(phone) {
			return /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/.test(phone);
		}
		function isEmail(email) {
			return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
		}

		if(firstname.trim() === '') {
			firstError.textContent = "Firstname is required";
			setErrorFor(firstError);
			
			return false;
        }else {
			firstError.textContent = "";
			setSuccessFor(firstError);
		}

		if(lastname.trim() === '') {
			lastError.textContent = "Lastname is required";
			setErrorFor(lastError)
			return false;
			
        }else {
			lastError.textContent = "";
			setSuccessFor(lastError);
		}

		if(phoneno.trim() === ''){
			phonenoError.textContent = "Phone No is required";
			setErrorFor(phonenoError);
			return false;
		}
		else if(isPhone(phoneno)){
			phonenoError.textContent = "Invalid phone format";
			setWarningFor(phonenoError)
			return false;
		}else {
			phonenoError.textContent = "";
			setSuccessFor(phonenoError);
		}

		if(emailid.trim() === '')
		{	
			emailError.textContent = "Email is required";
			setErrorFor(emailError)
			return false;
        }else if(isEmail(emailid)) {
			emailError.textContent = 'Invalid email format';
			setWarningFor(emailError)
			return false;
		}else {
			emailError.textContent = "";
			setSuccessFor(emailError);
		}

		if(message.trim() === '') {
			messageError.textContent = 'Message is required';
			setErrorFor(messageError);
			return false;
		}else {
			messageError.textContent = "";
			setSuccessFor(messageError);
		}

		if (path === "/contact.html") {

			function areCheckboxesChecked() {
				return Array.from(document.querySelectorAll('input[type="checkbox"]')).some(checkbox => checkbox.checked);
			}
			if (!areCheckboxesChecked()) {
				document.getElementById('checkboxError').style.display = 'inline';
				return false;
			} else {
				document.getElementById('checkboxError').style.display = 'none';
			}
		}
		emailjs.sendForm('service_c5n38bl', 'template_tzqul6p', this).then(
			(response) => {
				console.log('SUCCESS!', response.status, response.text);

				// Clear form fields dynamically
				['firstname', 'lastname', 'emailid', 'phoneno', 'message'].forEach(id => {
					document.getElementById(id).value = '';
				});

				toggleVisibility('sentmessage', true);
				toggleVisibility('errormessage', false);
			},
			(error) => {
				console.log('FAILED...', error);
				toggleVisibility('errormessage', true);
				toggleVisibility('sentmessage', false);
			}
		);

		// Utility function to manage visibility
		const toggleVisibility = (id, isVisible) => {
			document.getElementById(id).style.visibility = isVisible ? "visible" : "hidden";
		};
}

function setErrorFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
}

function setWarningFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control warning';
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

