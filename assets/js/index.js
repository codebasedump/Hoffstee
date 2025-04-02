document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_c5n38bl";
  const templateID = "template_tzqul6p";


  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      sentmessage.style.visibility = "visible";
      errormessage.style.visibility = "hidden";
      document.getElementById("name").value='',
      document.getElementById("email").value='',
      document.getElementById("subject").value='',
      document.getElementById("message").value=''
    },
    (error) => {
      console.log("FAILED...", error);
      sentmessage.style.visibility = "hidden";
      errormessage.style.visibility = "visible";
    }
  );
});

const eJS_sendJoke = document.getElementById('sendJoke');
const eJS_message = document.getElementById('message');
const eJS_fullName = document.getElementById('name');
const eJS_email = document.getElementById('email');
const eJS_subject = document.getElementById('subject');

let canSubmit = false;
let reaction = null;

function eJS_set_event_listeners() {
  eJS_fullName.addEventListener('keyup', eJS_can_submit);
  eJS_email.addEventListener('keyup', eJS_can_submit);
  eJS_subject.addEventListener('keyup', eJS_can_submit);
  eJS_message.addEventListener('keyup', eJS_can_submit);
}
eJS_set_event_listeners();


function eJS_validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function eJS_can_submit () {
  //check the required field

  let message = eJS_message.value.trim();
  let email = eJS_email.value.trim();
  let fullName = eJS_fullName.value.trim();
  let subject = eJS_subject.value.trim();

  if (message.length > 4 && email.length > 4 && fullName.length > 1 && subject.length > 1) {
      alertComment.style.visibility = "hidden";
      if (eJS_validateEmail(email)) {
          eJS_sendJoke.classList.add('activated');
          eJS_sendJoke.disabled = false;
          canSubmit = true;

      }else {
          eJS_disabled_submit();
      }
  } else {
      alertComment.style.visibility = "visible";
      eJS_disabled_submit();
  }
};

function eJS_disabled_submit() {
  eJS_sendJoke.classList.remove('activated');
  eJS_sendJoke.disabled = true;
  canSubmit = false;
};


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("industrial");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("Indusicon-box");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


