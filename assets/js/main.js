window.onload = function () {

document.getElementById("year").textContent = new Date().getFullYear();
};
document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    let e = document.querySelector(".scroll-top");
    if (e) {
        let t = () => e.classList.toggle("active", window.scrollY > 100);
        e.addEventListener("click", e => {
            e.preventDefault(), window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }), window.addEventListener("load", t), document.addEventListener("scroll", t)
    }
    $(window).on("load", function() {
        setTimeout(() => {
            $(".lds-ellipsis").fadeOut(), $(".preloader").delay(333).fadeOut("slow"), $("body").delay(333)
        }, 100)
    });
    let o = document.querySelector("#preloader");
    o && window.addEventListener("load", () => {
        o.remove()
    });
    let s = document.querySelector("body"),
        l = document.querySelector("#header");

    function r() {
        (l.classList.contains("scroll-up-sticky") || l.classList.contains("sticky-top") || l.classList.contains("fixed-top")) && (window.scrollY > 100 ? s.classList.add("scrolled") : s.classList.remove("scrolled"))
    }
    document.addEventListener("scroll", r), window.addEventListener("load", r);
    let i = 0;
    window.addEventListener("scroll", function() {
        if (!l.classList.contains("scroll-up-sticky")) return;
        let e = window.pageYOffset || document.documentElement.scrollTop;
        e > i && e > l.offsetHeight ? (l.style.setProperty("position", "sticky", "important"), l.style.top = `-${header.offsetHeight+50}px`) : e > l.offsetHeight ? (l.style.setProperty("position", "sticky", "important"), l.style.top = "0") : (l.style.removeProperty("top"), l.style.removeProperty("position")), i = e
    }), window.addEventListener("load", function(e) {
        window.location.hash && document.querySelector(window.location.hash) && setTimeout(() => {
            let e = document.querySelector(window.location.hash),
                t = getComputedStyle(e).scrollMarginTop;
            window.scrollTo({
                top: e.offsetTop - parseInt(t),
                behavior: "smooth"
            })
        }, 100)
    })
});
const images = document.querySelectorAll(".round_about");
document.addEventListener("mousemove", e => {
    images.forEach(t => {
        let o = e.clientX / window.innerWidth,
            s = e.clientY / window.innerHeight;
        t.style.transform = `translateX(${(o-.5)*100}px) translateY(${(s-.5)*50}px)`
    })
}), $(window).mousemove(function(e) {
    $(".ring").css("transform", `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`)
}), document.querySelectorAll(".accordion-button").forEach(e => e.addEventListener("click", function() {
    this.classList.contains("active") ? this.classList.remove("active") : (document.querySelector(".accordion-button.active")?.classList.remove("active"), this.classList.add("active"))
}));

const pages = {
    "home": "index.html",
    "about": "about.html",
    "contact": "contact.html",
    "branding": "services-branding.html",
    "web development": "services-webdevelopment.html",
    "ui design": "services-ui.html",
    "graphics design": "services-graphicdesign.html",
    "seo agency": "services-seo-agency.html",
    "paid media": "services-paidmedia.html",
    "social media": "services-socialmedia.html"
  };

 function startVoice() {
      const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        let matched = false;

        for (let key in pages) {
          if (transcript.includes(key)) {
            matched = true;
            speak(`Navigating to ${key} page`);
            window.location.href = pages[key];
            break;
          }
        }

        if (!matched) {
          speak("Sorry, I couldn't find that page.");
        }
      };

      recognition.onerror = function(event) {
        speak("Voice recognition error occurred.");
      };

      recognition.start();
    }

    function speak(text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }



  /**
   * Animation on scroll function and init
   */
  function aosInit() {
      AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
      });
  }
  window.addEventListener('load', aosInit);


  $(document).ready(function () {
  $(".main-slider").owlCarousel({
    items: 1,
    margin: 20,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
    navText: [
      '<span class="left-main banner_arrow"><svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.38958 6.84971L9.28125 0.851798C9.68542 0.441382 10.3438 0.435132 10.7542 0.839298C11.1646 1.24347 11.1708 1.9018 10.7667 2.3143L4.86875 8.31846C4.47917 8.70805 3.93542 9.30388 3.37917 9.93097C3.10625 10.2393 2.9125 10.5893 2.78333 10.958H24.4583C25.0333 10.958 25.5 11.4247 25.5 11.9997C25.5 12.5747 25.0333 13.0414 24.4583 13.0414H2.78333C2.91459 13.4101 3.10625 13.7601 3.38125 14.0685C3.93542 14.6955 4.47917 15.2914 4.875 15.6872L10.7667 21.6851C11.1708 22.0956 11.1646 22.756 10.7542 23.1601C10.55 23.3581 10.2875 23.458 10.0229 23.458C9.75417 23.458 9.48333 23.3539 9.28125 23.1476L3.39583 17.156C2.98333 16.7435 2.40625 16.1143 1.82084 15.4518C0.0770855 13.4851 0.0770855 10.5185 1.82084 8.5518C2.40834 7.8893 2.98542 7.25805 3.38958 6.85388V6.84971Z" fill="#0f2943"/></svg></span>',
      '<span class="right-main banner_arrow"><svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6104 6.84971L16.7188 0.851798C16.3146 0.441382 15.6563 0.435132 15.2458 0.839298C14.8354 1.24346 14.8292 1.9018 15.2333 2.3143L21.1313 8.31846C21.5208 8.70805 22.0646 9.30388 22.6208 9.93097C22.8938 10.2393 23.0875 10.5893 23.2167 10.958H1.54167C0.966667 10.958 0.5 11.4247 0.5 11.9997C0.5 12.5747 0.966667 13.0414 1.54167 13.0414H23.2167C23.0854 13.4101 22.8938 13.7601 22.6188 14.0685C22.0646 14.6955 21.5208 15.2914 21.125 15.6872L15.2333 21.6851C14.8292 22.0956 14.8354 22.756 15.2458 23.1601C15.45 23.3581 15.7125 23.458 15.9771 23.458C16.2458 23.458 16.5167 23.3539 16.7188 23.1476L22.6042 17.156C23.0167 16.7435 23.5938 16.1143 24.1792 15.4518C25.9229 13.4851 25.9229 10.5185 24.1792 8.5518C23.5917 7.8893 23.0146 7.25805 22.6104 6.85388V6.84971Z" fill="#0f2943"/></svg></span>'
    ],
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 10
      },
      425: {
        items: 1,
        margin: 10
      },
      576: {
        items: 1,
        margin: 10
      },
      768: {
        items: 1,
        margin: 10
      },
      1023: {
        items: 1
      },
      1199: {
        items: 1
      }
    }
  });
});



  