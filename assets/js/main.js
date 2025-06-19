document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    // Toggle "active" based on scroll position
    const toggleScrollTop = () =>
      scrollTop.classList.toggle('active', window.scrollY > 100);

    // Smooth scroll to top on click
    scrollTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  }

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
});

const images = document.querySelectorAll('.round_about');

document.addEventListener('mousemove', (e) => {
  images.forEach((image) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    image.style.transform = `translateX(${(x - 0.5) * 100}px) translateY(${(y - 0.5) * 50}px)`;
  });
});

$(window).mousemove(function (e) {
  $(".ring").css(
    "transform",
    `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
  );
});

document.querySelectorAll('.accordion-button').forEach(btn =>
  btn.addEventListener('click', function() {
    this.classList.contains('active')
      ? this.classList.remove('active')
      : (document.querySelector('.accordion-button.active')?.classList.remove('active'),
         this.classList.add('active'));
  })
);

 
