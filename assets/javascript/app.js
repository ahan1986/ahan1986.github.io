// //smooth scrolling
$("#smoothScroll a").click(function() {
  var scroll = $(this).attr('href');
  $('html, body').animate({scrollTop: $(scroll).offset().top}, 'slow');
  return false;
})

//function to collapse navbar if it is not on the top
function navBarCollapse() {
  if($('#navbar').offset() > 100) {
    $('#navbar').addClass('navbar-shrink');
  } else {
    $("#navbar").removeClass('navbar-shrink');
  }
};
// calling navBarCollapse function
navBarCollapse();
// collapse when user is scrolling
$(window).scroll(navBarCollapse());



