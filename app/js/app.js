document.addEventListener('DOMContentLoaded', function() {
  // .collection__carousel (slick.js)

  $('.collection__carousel').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
