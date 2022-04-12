$(function () {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
  });

  $('.star').rateYo({
    ratedFill: "#ffc35b",
    normalFill: "#8d8d8d",
    starWidth: '16px',
    readOnly: true,
  });
});