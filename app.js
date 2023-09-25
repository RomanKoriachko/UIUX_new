$(document).ready(function () {
    $(".example-section-slider").slick({
        dots: false,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    // centerMode: false,
                    // variableWidth: false,
                },
            },
        ],
    });
});
