$(function() {
  $(".body-start .thumbnail").click(function() {
    url = $(this).find("img").attr("src");
    name = $(this).next().find("h3").text();
    $(".image-focus img").attr("src", url);
    $(".image-focus h2").text(name);
    $(".image-focus").toggleClass("active");
  });

  $(".caption button").hover(function() {
    $(".content img").addClass("dim");
    $(".caption").addClass("active");
  });

  $(".caption").hover(function() {
    $(".content img").addClass("dim");
    $(".caption").addClass("active");
  });

  $(".content img").hover(function() {
    $(".content img").addClass("dim");
    $(".caption").addClass("active");
  });

  $(".content img").mouseout(function() {
    $(".content img").removeClass("dim");
    $(".caption").removeClass("active");
  });

  $(".image-focus span").click(function() {
    $(".image-focus").toggleClass("active");
  });

  $("#preview").click(function() {
    template = $(".image-focus h2").text();
    url = "/template/" + template + "/preview";
    window.location.replace(url);
  });

  $("#edit").click(function() {
    template = $(".image-focus h2").text();
    url = "/template/" + template + "/edit";
    window.location.replace(url);
  });
});
