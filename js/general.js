
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".parallax-down").css("transform","translateY(" +  (scroll/3)  + "px)");
  });
if ($(window).width() < 420) {
    $('h2 br').add();
  } else if ($(window).width() > 420) {
    $('h2 br').remove();
};

if ($(window).width() < 400) {
    $('article br').add();
  } else if ($(window).width() > 420) {
    $('article br').remove();
};
if ($(window).width() > 768) {
    $('footer img').add();
  } else if ($(window).width() < 768) {
    $('footer img').remove();
};
$('.testimonials-slider').bxSlider({
       slideWidth: 800,
       minSlides: 1,
       maxSlides: 1,
       slideMargin: 32,
       auto: true,
       autoControls:false
});
