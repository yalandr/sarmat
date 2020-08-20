/*==== Mobile Menu ===============*/
new Vue({
  el: '#mobile-menu',
  data: {
    show: false,
  },
});

/*==== Statistics Counter =========*/
var
  time = 2,
  cc = 1;
$(window).scroll(function () {
  $('#counter').each(function () {
    var
      cPos = $(this).offset().top,
      topWindow = $(window).scrollTop();
    if (cPos < topWindow + 300) {
      if (cc < 2) {
        $('span').each(function () {
          var
            i = 1,
            num = $(this).data('num'),
            step = 1000 * time / num,
            that = $(this),
            int = setInterval(function () {
              if (i <= num) {
                that.html(i);
              } else {
                cc = cc + 2;
                clearInterval(int);
              }
              i++;
            }, step);
        });
      }
    }
  });
});

/*==== Partners Slider ============*/
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      }
    }
  });
});