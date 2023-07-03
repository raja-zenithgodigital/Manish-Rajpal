$(document).ready(function () {
  $(".buttons").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var filter = $(this).attr("data-filter");
    if (filter == "all") {
      $(".image").hide(200);
      $(".image:lt(12)").show(400);
    } else {
      $(".image").hide(200);
      $("." + filter).show(400);
    }
  });

  $(".gallery").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  var initialFilter = $(".buttons.active").attr("data-filter");
  if (initialFilter == "all") {
    $(".image").hide(200);
    $(".image:lt(12)").show(400);
  }
});
