$(document).ready(function() {
  current = null;
  before = null;
  var timeoutId;
  function tooltip(element, text) {
    element.hover(function() {
      $("#tooltip p").text(text);
      _x = $(this).offset().left - $("#tooltip").outerWidth() + 20;
      if (_x < 0) {
        _x = 0;
      }
      _y = $(this).offset().top + $(this).outerHeight();
      if (!timeoutId) {
        timeoutId = window.setTimeout(function() {
          timeoutId = null;
          $("#tooltip").css({'top': _y, 'left': _x});
          $("#tooltip").addClass("active");
        }, 1000);
      }
    });
    element.mouseout(function() {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
        timeoutId = null;
        setTimeout(function () {
          $("#tooltip").removeClass("active");
        }, 0);
      }
    });
  }

  $(".editable").hover(function() {
    $(".editable").removeClass("hover");
    $(this).addClass("hover");
  });

  $(".editable-image").hover(function() {
    $(".editable").removeClass("hover");
    $(this).addClass("hover");
  });

    $(".editable").click(function() {
      current = $(this);
      before = current.clone(true);
      _x = $(this).offset().left + 20;
      _y = $(this).offset().top - 30;
      if (_x <= 0) {
        _x = 30;
      }

      $('.colorpicker').fadeOut("fast", "swing");
      $("#edit-window").removeClass("active");
      $(".slidecontainer").removeClass("active");
      $(".editable").removeClass("hover");
      $(".editable").removeClass("selected");
      $("#colors div").removeClass("active");
      $("#edit-text-button").removeClass("active");

      $(this).addClass("selected");
      $("#edit-text-button").css({'top': _y, 'left': _x});
      $("#edit-text-button").addClass("active");
    });

  $(".editable-image").click(function() {

  });

  $("#edit-text-button").click(function(event) {
    _x = event.pageX;
    if (_x < 0) {
      _x = 0;
    }
    else if (_x > $(window).width() * 0.5) {
      _x = '48vw';
    }
    _y = event.pageY + 20;
    element = $("#edit-window");
    element.css({'top': _y, 'left': _x});
    element.addClass("active");
    $("#edit-field").focus();
    $("#edit-field").val(current.text());
    font_size = current.css("font-size");
    $(".slider").val(font_size.replace(/\D/g,""));
    $(".output").text(font_size);

  });

  $(".slider").on("input", function() {
    $(".output").text($(this).val() + "px");
    current.css({'font-size': ($(".output").text())});
  });

  tooltip($(".size"), "Change font size");

  $(".size").click(function() {
    font_size = current.css("font-size");
    $(".slider").val(font_size.replace(/\D/g,""));
    $(".output").text(font_size);
    $('.colorpicker').fadeOut("fast", "swing");
    $("#colors div").removeClass("active");
    $(".slidecontainer").toggleClass("active");
  });

  tooltip($(".font-family"), "Change font");

  $(".font-family").on("change", function() {
    font = $(this).val();
    current.css({'font-family': font});
  });

  tooltip($(".color"), "Change text color");

  clickType = 1;
  $(".color").click(function() {
    $('.colorpicker').fadeOut("fast", "swing");
    $(".slidecontainer").removeClass("active");
    if ($("#colors div").hasClass("active") && clickType == 1) {
      $("#colors div").removeClass("active");
    }
    else if ($("#colors div").hasClass("active") && clickType == 2) {
    }

    else {
      $("#colors div").addClass("active");
    }
    clickType = 1;
  });

  tooltip($(".background-color"), "Change background color");

  $(".background-color").click(function() {
    $('.colorpicker').fadeOut("fast", "swing");
    $(".slidecontainer").removeClass("active");
    if ($("#colors div").hasClass("active") && clickType == 2) {
      $("#colors div").removeClass("active");
    }
    else if ($("#colors div").hasClass("active") && clickType == 1) {
    }

    else {
      $("#colors div").addClass("active");
    }
    clickType = 2;
  });

  tooltip($("#more-colors"), "More colors");

  $("#colors div").click(function() {
    id = $(this).attr("id");
    if (id == "more-colors") {
      if (clickType == 1) {
        current.css({'color': $(this).css("background-color")});
      }
      else {
        current.css({'background-color': $(this).css("background-color")});
      }
    }
    else if (clickType == 1) {
      current.css({'color': id});
    }
    else {
      current.css({'background-color': id})
    }
  })

  data = {};

  tooltip($(".accept"), "Accept changes");

  $(".accept").click(function() {
    text = $("#edit-field").val();
    current.text(text);
    current.css({'font-size': ($(".output").text())});

    $('.colorpicker').fadeOut("fast", "swing");
    $(".editable").removeClass("selected");
    $(".slidecontainer").removeClass("active");
    $("#edit-window").removeClass("active");
    $("#colors div").removeClass("active");
    $("#edit-text-button").removeClass("active");
  });

  tooltip($(".cancel"), "Cancel changes");

  $(".cancel").click(function() {

    $('.colorpicker').fadeOut("fast", "swing");
    $(".editable").removeClass("selected");
    $(".slidecontainer").removeClass("active");
    $("#colors div").removeClass("active");
    $("#edit-window").removeClass("active");
    $("#edit-text-button").removeClass("active");
    current.replaceWith(before);
  });

  $(document).keydown(function(e){
    if (e.keyCode == 27 && $("#edit-window").hasClass("active")) {
      $(".cancel").trigger("click");
    }

    else if (e.keyCode == 13 && $("#edit-window").hasClass("active")) {
      $(".accept").trigger("click");
    }
  });

  $("#save-changes").click(function() {
    page = $('html').html();
    $.ajax({
      type: "POST",
      url: "/parse_edits",
      data: {html: page},
      success: function() {
        $("#save-changes").text("Template saved");
        setTimeout(function () {
          $("#save-changes").text("Save changes");
        }, 2000);
        window.location.replace("/dashboard#tab_4")
      }
    });
  });

  $("#cancel-changes").click(function() {
    location.reload();
  });

});
