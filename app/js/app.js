document.addEventListener('DOMContentLoaded', function() {
  // .collection__carousel (slick.js)

  $('.collection__carousel').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('.collection__arrow-prev'),
    nextArrow: $('.collection__arrow-next'),
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

  // .blog__carousel (slick.js)

  $('.blog__carousel').slick({
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: $('.blog__arrow-prev'),
    nextArrow: $('.blog__arrow-next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
