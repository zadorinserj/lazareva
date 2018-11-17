window.onload = () => {
    const $feedbackSlider = $('.js-feedback-slider');

    $feedbackSlider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
};
