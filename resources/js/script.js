// sticky navigation
$(document).ready(function() {
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  // animation scoroll
  // $("js--scroll-to-plan'").click(function() {
  //   $("html, body").animmate(
  //     scrolltop,
  //     $("js--section-plan").offset().top,
  //     1000
  //   );
  // });
  $(".js--scroll-to-plan").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plan").offset().top },
      1500
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /* Navigation scroll */

  $(document).ready(function() {
    $("a[href*=\\#]").on("click", function(e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top
        },
        500
      );
    });
  });
});
