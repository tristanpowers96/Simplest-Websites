$(document).ready(function() {
  setTimeout(function() {
    $(".load").addClass("minimize");
  }, 400);

  $(".animation").waypoint({
    handler: function() {
      $(this.element).addClass("active");
    },
    offset: '75%'
  })

  $(".menu-button").click(function() {
    $(".full-overlay").toggleClass("active");
    $(".side-menu").toggleClass("active");
  });

  $(".scroll-down").click(function() {
    $('html, body').animate({
       scrollTop: $(".jumbotron").first().offset().top},
       300,
       "swing"
    );
  });
});
