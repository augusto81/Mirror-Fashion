$(function() {
  var showed = false;

  $(window).scroll(function() {
    if ($(document).scrollTop() >= $('#page4').position().top - 1 && $(document).scrollTop() < $('footer').position().top && !showed) {
      showed = true;

      $('#page4 .kilometers').addClass('animated bounceInLeft').show();
      $('#page4 .readers').addClass('animated bounceInRight').show();

      setTimeout(function() {
        $('#page4 .map').addClass('animated zoomIn').show();
      }, 800);

      setTimeout(function() {
        $('#page4 .map-line').addClass('animated rotateInDownLeft').show();
      }, 1500);

      setTimeout(function() {
        $('#page4 .car').addClass('animated fadeInUpBig').show();
      }, 1800);

      setTimeout(function() {
        $('#page4 .car').removeClass('fadeInUpBig').addClass('infinite jello').show();
      }, 2800);

      setTimeout(function() {
        $('#page4 .travel').typed({strings: ['o equivalente a uma viagem partindo da cidade de São Paulo até o Alaska, nos Estados Unidos.'], typeSpeed: 50, showCursor: false});
      }, 3000);
    }
  });
});
