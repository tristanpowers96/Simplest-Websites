$(function() {
  clientHeight = window.outerHeight;

  function resize() {
    if (activePage.outerHeight() >= clientHeight) {
      activeTab.css({'height':activePage.outerHeight() + "px"});
    } else {
      activeTab.css({'height': '100vh'});
    }
  }
/*
  start_pos = $(".header :nth-child(8)").offset().left - $(".header").offset().left - 5;
  start_width = $(".header :nth-child(8)").outerWidth() + 10;
  $("#highlight").css({'left': start_pos, 'width': start_width});
*/
  activeTab = $(".content[tab=1]");
  activeTab.addClass("active");
  activePage = activeTab.find(".category[page=1]");
  activePage.addClass("active");

/*
  $("h3[tab]").click(function() {
    pos = $(this).offset().left - $(".header").offset().left - 5;
    width = $(this).outerWidth() + 10;
    $("#highlight").css({'left': pos, 'width': width});

    tab_num = $(this).attr("tab");
    tab = $(".content[tab=" + tab_num + "]");

    activeTab.removeClass("active");
    activeTab = tab;
    tab.addClass("active");
    activePage.removeClass("active");
    activePage = activeTab.find(".category[page=1]");
    activePage.addClass("active");
    resize();
  });

  $("a[page]").click(function() {
    page_num = $(this).attr("page");
    page = activeTab.find(".category[page=" + page_num + "]");

    activePage.removeClass("active");
    activePage = page;
    page.addClass("active");
    resize();
  });

  $("button[page]").click(function() {
    page_num = $(this).attr("page");
    page = activeTab.find(".category[page=" + page_num + "]");

    activePage.removeClass("active");
    activePage = page;
    page.addClass("active");
    resize();
  });
  */
  $("#browse").on("change", function() {
    label = $(this).val().replace("C:\\fakepath\\", "");
    $(".button").text(label);
  });

  $(".thumbnail").click(function() {
    clone = $(this).clone();
    $("html").append(clone);
    clone.toggleClass("focus");
    clone.mouseout(function() {
      setTimeout(function () {
        clone.fadeOut("fast", "swing");
      }, 500);
      setTimeout(function () {
        clone.remove();
      }, 1000);
    });
  });

});
