document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
      if (scrollTop) {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
  }
  
  scrollTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  // Preloader
  $(window).on('load', function () {
    setTimeout(() => {
        $('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
        $('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(333);
    }, 500)
});

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
      window.addEventListener('load', () => {
          preloader.remove();
      });
  }
  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  const selectBody = document.querySelector('body');
  const selectHeader = document.querySelector('#header');

  function toggleScrolled() {
      if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
      window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
  
  /**
   * Scroll up sticky header to headers with .scroll-up-sticky class
   */
  let lastScrollTop = 0;
  window.addEventListener('scroll', function() {
      if (!selectHeader.classList.contains('scroll-up-sticky')) return;
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > selectHeader.offsetHeight) {
          selectHeader.style.setProperty('position', 'sticky', 'important');
          selectHeader.style.top = `-${header.offsetHeight + 50}px`;
      } else if (scrollTop > selectHeader.offsetHeight) {
          selectHeader.style.setProperty('position', 'sticky', 'important');
          selectHeader.style.top = "0";
      } else {
          selectHeader.style.removeProperty('top');
          selectHeader.style.removeProperty('position');
      }
      lastScrollTop = scrollTop;
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
      if (window.location.hash) {
          if (document.querySelector(window.location.hash)) {
              setTimeout(() => {
                  let section = document.querySelector(window.location.hash);
                  let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
                  window.scrollTo({
                      top: section.offsetTop - parseInt(scrollMarginTop),
                      behavior: 'smooth'
                  });
              }, 100);
          }
      }
  });
  
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

});

$(document).ready(function () {
    $("#news-slider").owlCarousel({
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 2],
      itemsMobile: [600, 1],
      navigation: true,
      navigationText: ["", ""],
      pagination: true,
      autoPlay: true
    });
});

const images = document.querySelectorAll('.round_about');

document.addEventListener('mousemove', (event) => {
  images.forEach((image) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const width = image.offsetWidth;
    const height = image.offsetHeight;

    image.style.transform = `translateX(${(x - 0.5) * 100}px) translateY(${(y - 0.5) * 50}px)`;

  });
});

$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});

// var menu_btn = document.querySelector("#toggle");
// var togglespan = document.querySelector("#toggle span");
// var sidebar = document.querySelector(".sidebar");

// const sidenav_a = document.querySelectorAll('.sidenav');

// menu_btn.addEventListener("click", () => {
//   togglespan.classList.toggle("toggle");
//   sidebar.classList.toggle("sidebarshow");
// });

// sidenav_a.forEach(function(el) {
//   el.onclick = function() {
//     togglespan.classList.toggle("toggle");
//     sidebar.classList.toggle("sidebarshow");
//   };
// });


let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();



