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
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInLeftBig");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

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

  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);
    icon.toggleClass("ion-md-menu  ion-md-close"); //you can list several class names
    e.preventDefault();
  });
});
