// ---- Sliders -----

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

$(document).ready(function () {
    $(".companies-slider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
    });
});

$(document).ready(function () {
    $(".review-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
    });
});

// ----- Navigation ------

let aboutCourseBtn = document.querySelector(".header-menu-item-1");
let aboutUsBtn = document.querySelector(".header-menu-item-2");
let contactsBtn = document.querySelector(".header-menu-item-3");
let registrationBtn = document.querySelector(".registration-btn");
