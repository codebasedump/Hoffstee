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
