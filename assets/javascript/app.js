// //smooth scrolling
$("#smoothScroll a").click(function() {
  var scroll = $(this).attr('href');
  $('html, body').animate({scrollTop: $(scroll).offset().top}, 'slow');
  return false;
})

