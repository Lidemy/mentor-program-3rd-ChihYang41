/* eslint-env jquery */
// Back to top
$(() => {
  $('#BackTop').click(() => {
    $('html,body').animate({ scrollTop: 0 }, 333);
  });
  $(window).scroll(() => {
    if ($(this).scrollTop() > 300) {
      $('#BackTop').fadeIn(222);
    } else {
      $('#BackTop').stop().fadeOut(222);
    }
  }).scroll();
});
