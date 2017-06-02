$(document).ready(function() {
  $("#menu-toggle").click(function(event) {
      event.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });

  $('.gallery-scroll-left').click(function() {
     $(this).siblings('.gallery-img-div').animate( { scrollLeft: '-=500' }, 500, 'easeOutQuad' );
  });
  $('.gallery-scroll-right').click(function() {
     $(this).siblings('.gallery-img-div').animate( { scrollLeft: '+=500' }, 500, 'easeOutQuad' );
  });

  $('.item-img-div').hover(
    function() {
      $(this).find('.collectr-btn').css({'opacity' : 1});
    }, function() {
      $(this).find('.collectr-btn').css({'opacity' : 0})
    });

  // $('.gallery-img-div').hover(
  //   function() {
  //     if($(this).scrollWidth === $(this).clientWidth) {
  //       $(this).siblings('.gallery-scroll-left .gallery-scroll-right').css('visibility', 'hidden');
  //     };
  //
  //     if ($(this).scrollLeft() === 0) {
  //       $(this).siblings('.gallery-scroll-left').css('visibility', 'hidden');
  //     }
  //     else {
  //       $(this).siblings('.gallery-scroll-left').css('visibility', 'visible');
  //     };
  //
  //     if ($(this).scrollLeft() === $(this).scrollWidth - $(this).innerWidth) {
  //       $(this).siblings('.gallery-scroll-right').css('visibility', 'hidden');
  //     }
  //     else {
  //       $(this).siblings('.gallery-scroll-right').css('visibility', 'visible');
  //     };
  //
  //   });
});
