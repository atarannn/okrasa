// $(function() {
//   // при нажатии на кнопку
//   $('.arrow-up').click(function() {
//     // переместиться в верхнюю часть страницы
//     if ($.scrollify) {
//       $.scrollify.move(".section-3");
//       return;
//     }
//     $("html, body").animate({
//       scrollTop:0
//     },1000);
//   })
// })


arrowDownHandler();

function arrowDownHandler() {
    if (window.arrowScrollDownInited) return;

  window.arrowScrollDownInited = true;
  document.body.addEventListener('click', (evt) => {
    const target = evt.target.closest('.arrow-up');
    if (!target) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  });
}