$(function() {
  $("#logo").click(function() {
    window.location.replace("/");
  });

  $(".start-button").click(function() {
    window.location.replace("/register");
  });

  $("#body-start, .body-start").waypoint(function() {
    $(".header").toggleClass("active");
  })

  $(".dropdown-title").hover(function() {
    id = $(this).attr("id");
    box = $(".dropdown-content[parent=" + id + "]");
    box.toggleClass("active");
    $(this).append(box);
  });

  cycleArray = ['Design tools', 'Hosting', 'SEO', 'Custom domain', 'Storage'];
  function cycle() {
    for (var i = 0; i < 5; i++) {
      (function(index) {
          setTimeout(function() {
            $("#cycle p").fadeOut("fast", function() {
              $(this).text(cycleArray[index]).fadeIn();
            });
          }, i* 2000);
      })(i);
    }
    setTimeout(function () {
      cycle();
    }, 10000);
  }
  cycle();

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }
  browserWidth = getWidth();
  if (browserWidth >= 750 && browserWidth <= 1600) {
    $("body").css({
      "background": "url('/static/images/background_1600.jpg')",
      "background-size": "100%",
      "background-position": "top",
      "background-attachment": "absolute",
      "background-attachment": "fixed",
      "background-repeat": "no-repeat"
    });
    $("img").each(function() {
      large = $(this).attr("src-lg");
      if (large)
        $(this).attr("src", large);
    });
  }
});
