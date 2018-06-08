$(document).ready(function () {
  $('.scrollspy').scrollSpy();
  $('.sidenav').sidenav();
  $(".trail").hide();
  $("#work").hide();
  $(".trail").hide();
  $(".github").hide();
  $(".github1").hide();
  // $(".otherProjectsRow").children().hide();
  // $(".otherProjectsRow2").children().hide();
  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("nav").offset().top > 100) {
      $("nav").addClass("navShrink");

    } else {
      $("nav").removeClass("navShrink");

    }

    if ($("nav").offset().top > 30) {
      $("#one").addClass("oneImage");
      $("#nav-mobile").addClass("shrink");
      $(".one").addClass("oneShrink");
      $(".me").addClass("meFocus");
      $("#me").html(`<div id="meme" class="me">Hello! My name is Andrew Han, and currently, I am a student at Penn Coding BootCamp located in Philadelphia, Pennsylvannia.
          Previously, I ran a carwash in Downingtown, PA for eight years and sold it on March 2017. If I'm not coding, I am
          usually on my guitar jamming to random songs. Through Penn Coding Bootcamp, I know I will become the best Fullstack
          developer in the whole-wide world!</div>`);
      $("#justMe").fadeIn().html(`<div class="aboutme">About Me</div>`);


    } else {

      $("#one").removeClass("oneImage");
      $(".one").removeClass("oneShrink");
      $("#nav-mobile").removeClass("shrink");
      $(".me").removeClass("meFocus");
      $("#meme").remove();
      $(".aboutme").remove();
    }

    if ($("nav").offset().top > 10) {
      // $(".trail").fadeIn();
      $("#work").fadeIn("slow");

    } else {
      // $(".trail").fadeOut();
      $("#work").fadeOut("slow");
    }
    //========= Trail ============

    if ($("nav").offset().top > 300) {
      $("#trail1").fadeIn();
    } else {
      $("#trail1").slideUp();
    }
    if ($("nav").offset().top > 390) {
      $("#trail2").fadeIn();
    } else {
      $("#trail2").slideUp();
    }
    if ($("nav").offset().top > 460) {
      $("#trail3").fadeIn();
    } else {
      $("#trail3").slideUp();
    }
    // ------ Trail#2 -----------

    if ($("nav").offset().top > 1140) {
      $("#trail4").fadeIn();
    } else {
      $("#trail4").slideUp();
    }
    if ($("nav").offset().top > 1190) {
      $("#trail5").fadeIn();
    } else {
      $("#trail5").slideUp();
    }
    if ($("nav").offset().top > 1240) {
      $("#trail6").fadeIn();
    } else {
      $("#trail6").slideUp();
    }

    // ==========END of TRAIL ==============

    let effectsActive = true;

    if (effectsActive == true) {

      if ($("nav").offset().top > 720) {
        $("#cinemappr").addClass("oneImage1 z-depth-5");
      } else {
        $("#cinemappr").removeClass("oneImage1 z-depth-5");
      }

      if ($("nav").offset().top > 890) {
        $("#project2").addClass("project2 z-depth-5");
        $(".github").fadeIn();
      } else {
        $("#project2").removeClass("project2 z-depth-5");
        $(".github").slideUp();
      }

      if ($("nav").offset().top > 990) {
        $(".github1").fadeIn();
      } else {
        $(".github1").slideUp();
      }

      // ========= Other Projects =========
      //Other Projects first row ----------------------------------
      if ($("nav").offset().top > 1300) {
        $(".otherProjectsRow").children().show();
        $(".otherProjectsRow .otherProjects:nth-child(1)").addClass("otherProjects1 z-depth-1");
        setTimeout(() => {
          $(".otherProjectsRow .otherProjects:nth-child(2)").addClass("otherProjects1 z-depth-3");
        }, 100);
        setTimeout(() => {
          $(".otherProjectsRow .otherProjects:nth-child(3)").addClass("otherProjects1 z-depth-5");
        }, 200);

      } else {
        $(".otherProjectsRow").children().slideUp();
        $(".otherProjectsRow .otherProjects:nth-child(1)").removeClass("otherProjects1 z-depth-1");
        $(".otherProjectsRow .otherProjects:nth-child(2)").removeClass("otherProjects1 z-depth-3")
        $(".otherProjectsRow .otherProjects:nth-child(3)").removeClass("otherProjects1 z-depth-5");
      }
      //Other Projects 2nd row -------------------------------------
      if ($("nav").offset().top > 1750) {
        $(".otherProjectsRow2").children().show();
        $(".otherProjectsRow2 .otherProjects:nth-child(3)").addClass("otherProjects1 z-depth-5");
        setTimeout(() => {
          $(".otherProjectsRow2 .otherProjects:nth-child(2)").addClass("otherProjects1 z-depth-3");
        }, 100);
        setTimeout(() => {
          $(".otherProjectsRow2 .otherProjects:nth-child(1)").addClass("otherProjects1 z-depth-1");
        }, 200);

      } else {
        $(".otherProjectsRow2").children().slideUp();
        $(".otherProjectsRow2 .otherProjects:nth-child(3)").removeClass("otherProjects1 z-depth-5");
        $(".otherProjectsRow2 .otherProjects:nth-child(2)").removeClass("otherProjects1 z-depth-3")
        $(".otherProjectsRow2 .otherProjects:nth-child(1)").removeClass("otherProjects1 z-depth-1");
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  // using the above function to get the scale-in working when scrolling

// scroll effect when you click on ContactMe in the navbar
  $("#scrollToFooter").on("click", () => {
    effectsActive = false;
    $("html, body").animate({ scrollTop: 3237 }, 1500);
  });
  
  $("#scrollToAboutMe").on("click", () => {
    $("html, body").animate({scrollTop: $("#one").position().top}, 1000);
  });

  $("#scrollToPortfolio").on("click", ()=> {
    $("html, body").animate({scrollTop: $("#work").position().top}, 1500);
  });
});