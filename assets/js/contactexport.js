import { handleFormSubmit } from './index.js';
const path = window.location.pathname;
export const contactCommon = () => {
   
    if (path !== "/contact.html") {
        fetch('../contact_common.html')
            .then(res => res.text())
            .then(data => {
                document.querySelector('#contact').innerHTML = data;

                // Wait for the content to load before adding the event listener
                setTimeout(() => {
                    const form = document.getElementById('form');
                    if (form) {
                        form.addEventListener('submit', handleFormSubmit);
                    } else {
                        console.error('Form not found after loading contact_common.html');
                    }
                }, 500); // Delay to ensure the form is available
            })
            .catch(error => console.error('Error loading contact_common.html:', error));

        console.log('Contact Common Loaded');
    }
    else{
        const form = document.getElementById('form');
        if (form) {
            form.addEventListener('submit', handleFormSubmit);
        } else {
            console.error('Form not found after loading contact_common.html');
        }
       
    }
   
};
