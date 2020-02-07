import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap';

function initCarousel() {
  const carousel = $('#carousel');
  const indicators = carousel.find('li');
  const btnNext = $('[data-slide="next"]');
  const btnPrev = $('[data-slide="prev"]');

  carousel.carousel({
    interval: false
  });

  btnNext.on('click', function() {
    carousel.carousel('next');
  });

  btnPrev.on('click', function() {
    carousel.carousel('prev');
  });

  indicators.each((i, item) => {
    $(item).on('click', function () {
      carousel.carousel(i);
    })
  })
}

$(document).ready(function() {
  $('#start').on('click', function() {
    let count = 5;
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
        $(this).parent().addClass('hide');
        $('#customCarouselWrap').addClass('show');
        initCarousel();
      }

      $(this).text(count--);
    }, 1000);
  });
});
