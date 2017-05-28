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
});
