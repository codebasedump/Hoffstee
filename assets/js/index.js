export function handleFormSubmit(event) {
    event.preventDefault();
    const path = window.location.pathname;

    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const phoneno = document.getElementById('phoneno').value.trim();
    const emailid = document.getElementById('emailid').value.trim();
    const message = document.getElementById('message').value.trim();

    const firstError = document.getElementById('first-error');
    const lastError = document.getElementById('last-error');
    const emailError = document.getElementById('email-error');
    const phonenoError = document.getElementById('phone-error');
    const messageError = document.getElementById('message-error');

    let isValid = true; // Flag to track validation status

    function isPhone(phoneno) {
        return /^\d{7,15}$/.test(phoneno);
    }
    function isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Fixed validation logic
    }

    // Validate firstname
    if (firstname === '') {
        firstError.textContent = "Firstname is required";
        setErrorFor(firstError);
        isValid = false;
    } else {
        firstError.textContent = "";
        setSuccessFor(firstError);
    }

    // Validate lastname
    if (lastname === '') {
        lastError.textContent = "Lastname is required";
        setErrorFor(lastError);
        isValid = false;
    } else {
        lastError.textContent = "";
        setSuccessFor(lastError);
    }

    // Validate phone number
    if (phoneno === '') {
        phonenoError.textContent = "Phone No is required";
        setErrorFor(phonenoError);
        isValid = false;
    } else if (!isPhone(phoneno)) {
        phonenoError.textContent = "Invalid phone format";
        setWarningFor(phonenoError);
        isValid = false;
    } else {
        phonenoError.textContent = "";
        setSuccessFor(phonenoError);
    }

    // Validate email
    if (emailid === '') {
        emailError.textContent = "Email is required";
        setErrorFor(emailError);
        isValid = false;
    } else if (!isEmail(emailid)) {
        emailError.textContent = 'Invalid email format';
        setWarningFor(emailError);
        isValid = false;
    } else {
        emailError.textContent = "";
        setSuccessFor(emailError);
    }

    // Validate message
    if (message === '') {
        messageError.textContent = "Message is required";
        setErrorFor(messageError);
        isValid = false;
    } else {
        messageError.textContent = "";
        setSuccessFor(messageError);
    }

    if (!isValid) {
        return false; // Prevent form submission if errors exist
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

    // Proceed with form submission logic
    emailjs.sendForm('service_c5n38bl', 'template_tzqul6p', event.target).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            event.target.reset(); // Efficiently clear all fields
            
			// Clear form fields dynamically
			['firstname', 'lastname', 'emailid', 'phoneno', 'message'].forEach(id => {
				document.getElementById(id).value = '';
			});

			// Show success message
			toggleVisibility('sentmessage', true);
			toggleVisibility('errormessage', false);

			// Call function to reset fields and hide success message
			handleSuccessMessage();

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

function handleSuccessMessage() {
    // Hide borders for all form fields
    document.querySelectorAll('.form-control').forEach(field => {
        field.classList.remove('error', 'warning', 'success'); // Remove validation styles
    });

    // Hide success message after a delay
    setTimeout(() => {
        document.getElementById('sentmessage').style.visibility = "hidden";
    }, 3000); // Adjust the timeout as needed
}

function setErrorFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('success', 'warning'); // Remove conflicting classes
    formControl.classList.add('error'); // Add error class
}

function setWarningFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('success', 'error'); // Remove conflicting classes
    formControl.classList.add('warning'); // Add warning class
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove('error', 'warning'); // Remove conflicting classes
    formControl.classList.add('success'); // Add success class
}

