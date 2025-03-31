function sendmail()
{
    let name = document.getElementById("name").value;
    
    let email= document.getElementById("email").value;
    
    let subject = document.getElementById("subject").value;
   
    let message = document.getElementById("message").value;

    var params = {name,email,subject,message}
    const serviceID = "service_c5vw3lg";
    const templateID= "template_tzqul6p";

    emailjs.send(serviceID, templateID, params).then(res=>{
        document.getElementById("name").value='',
        document.getElementById("email").value='',
        document.getElementById("subject").value='',
        document.getElementById("message").value='',

        alert("Your message is succesfully sent");
    })
    .catch((err) => console.log(err));
}
