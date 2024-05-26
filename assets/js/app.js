/*
=====================
JS Table of Conttent 
=====================
01.  Dark + Light Mode
02. AOS Animation
03. Mobile Menu 
04. Load More
05. Current Date
06. Pricing

*/

(function ($) {
  "use strict";

  /*
  ------------------------  
  01. Dark + Light Mode
  --------------------------
  */

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark')
  }
  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
  } else {
    themeToggleDarkIcon.classList.remove('hidden');
  }

  var themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }

  });

  /*
  ------------------------  
  02. AOS Animation
  --------------------------
  */
  AOS.init({
    offset: 50,
    delay: 0,
    duration: 800,
    easing: 'ease-in-out',
    debounceDelay: 20,
    throttleDelay: 50,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
  });

  /*
   ------------------------  
   03. Mobile Menu 
   --------------------------
   */

   $('.search-toggle').on('click', function () {
    $('.full-search').toggleClass('search-toggle-open');
  })

  $('.menu-toggle').on('click', function () {
    $('.full-menu').toggleClass('full-menu-open');
  })
  /*======== Typed ==========*/


  if ($('.hero-type-text ').length > 0) {


    new Typed('#typed', {
      strings: ['TIME', 'EXPERT'],
      typeSpeed: 200,
      delaySpeed: 200,
      loop: true,

    });

  }


  /*
------------------------  
04. Load More
--------------------------
*/
  $('.blog-post-all').infiniteScroll({
    path: function () {
      if (this.loadCount < 4) {
        let nextIndex = this.loadCount + 2;
        return `explore/explore-${nextIndex}.html`;
      }
    },
    append: '.blog-post-box',
    button: '.load-more-btn',
    checkLastPage: false,
    scrollThreshold: false,
    status: '.page-load-status',
    history: false,
  });






  /*
  ------------------------  
  05. Current Date
  --------------------------
  */
  $('#spanYear').html(new Date().getFullYear());

  /*
  ------------------------  
  06. Pricing
  --------------------------
  */

  $('#pricing-toggle .pricing-toggle-wrap .monthly').click(function () {
    // switch to monthly
    $(this).addClass('monthly-selected active');
    $('#pricing-toggle .pricing-toggle-wrap .yearly').removeClass('yearly-selected active');
    $('.yearly-price').addClass('hide');
    $('.monthly-price').removeClass('hide');
  });

  $('#pricing-toggle .pricing-toggle-wrap .yearly').click(function () {
    // switch to yearly
    $(this).addClass('yearly-selected active');
    $('#pricing-toggle .pricing-toggle-wrap .monthly').removeClass('monthly-selected active');
    $('.monthly-price').addClass('hide');
    $('.yearly-price').removeClass('hide');
  });


  if ($('.tag-slider-area').length > 0) {


    $('.tag-slider-main').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      variableWidth: true,
      autoplaySpeed: 0,
      speed: 8000,
      pauseOnHover: false,
      arrows: false,
      cssEase: 'linear'
    });

  }

}(jQuery));