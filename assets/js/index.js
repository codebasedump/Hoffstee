document.getElementById('form').addEventListener('submit', function(event) {
	event.preventDefault();
		const path = window.location.pathname;

		const form = document.getElementById('form');

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
			const checkboxes = document.getElementById('websitedesign');
			const checkboxes1 = document.getElementById('webdevelopment');
			const checkboxes2 = document.getElementById('productdiscovery');
			const checkboxes3 = document.getElementById('userresearch');
			const checkboxes4 = document.getElementById('userexperience');
			const checkboxes5 = document.getElementById('digitalmarketing');
			const checkboxes6 = document.getElementById('designsystem');
			const checkboxes7 = document.getElementById('wordpress');
			const checkboxes8 = document.getElementById('maintainsupport');
			const checkboxes9 = document.getElementById('ecommerce');
			const checkboxes10 = document.getElementById('branddesign');
			const checkboxes11 = document.getElementById('printdesign');
			const checkboxes12 = document.getElementById('logodesign');
			const checkboxes13 = document.getElementById('other');

			let checked = false;
			if (checkboxes.checked || checkboxes1.checked || checkboxes2.checked ||
				checkboxes3.checked || checkboxes4.checked || checkboxes5.checked ||
				checkboxes6.checked || checkboxes7.checked || checkboxes8.checked ||
				checkboxes9.checked || checkboxes10.checked || checkboxes11.checked ||
				checkboxes12.checked || checkboxes13.checked) {
				checked = true;
			}

			if (!checked) {
				document.getElementById('checkboxError').style.display = 'inline';
				return false;
			} else {
				document.getElementById('checkboxError').style.display = 'none';
			}
		}
	
	emailjs.sendForm('service_c5n38bl', 'template_tzqul6p', this).then(
		(response) => {
			console.log('SUCCESS!', response.status, response.text);
			document.getElementById('firstname').value = '';
			document.getElementById('lastname').value= '';
			document.getElementById('emailid').value= '';
			document.getElementById('phoneno').value= '';
			document.getElementById('message').value = '';
			document.getElementById('sentmessage').style.visibility = "visible";
      		document.getElementById('errormessage').style.visibility = "hidden";
		},
		(error) => {
			console.log('FAILED...', error);
		  	document.getElementById('errormessage').style.visibility = "visible";
      		document.getElementById('sentmessage').style.visibility = "hidden";
		},
	  );
});

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
