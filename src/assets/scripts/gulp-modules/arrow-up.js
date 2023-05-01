$(function() {
  // при нажатии на кнопку
  $('.arrow-up').click(function() {
    // переместиться в верхнюю часть страницы
    if ($.scrollify) {
      $.scrollify.move(".section-3");
      return;
    }
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
