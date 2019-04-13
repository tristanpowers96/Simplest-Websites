$(function() {
  $(".header").addClass("active");

  $("input[name='username']").change(function() {
    $.ajax({
      url: '/authenticate',
      data: $("form").serialize(),
      type: 'POST',
      success: function(response) {
        $("#messages").text("");
        $("#error").text(response);
      }
    });
  });
});
