$(document).ready(function(){
  $(".page__inner").on("click",".arrow-down", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});
