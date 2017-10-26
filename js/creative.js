(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 48
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


// back to top button

// 1. lets first listen for the scroll event
$(window).scroll(function(){

    // top value in this case 0
    var wScroll = $(this).scrollTop();
  
  
    // determine when to show button
    var showScrollButton = 200;

    // fadein / fadeout back to  top button
    if (wScroll > showScrollButton) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});

// 2. lets create the button
$('body').append('<a id="top" href="#">TOP</a>');

// 3. lets create the css properties
$('#top').css({
  "bottom" : "200px",
  "right" : "20px",
  "position" : "fixed",
  "cursor" : "pointer",
  "z-index" : "1",
  "display" : "none",
  "background-color" : "rgba(0,0,0,0.7)",
  "padding" :"20px 40px",
  "color" : "#ffffff"
});

// 4. lets create the on click
$('#top').click(function () {
    $('body,html').animate({

      // position you want to scroll to
      scrollTop: 0
    }, 500);

    // stop anchor link behavior
    return false;
});


