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
                    variableWidth: false,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    variableWidth: true,
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
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                },
            },
        ],
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
let registrationBtns = document.querySelectorAll(".registration-btn");

let aspectSection = document.querySelector(".aspect-section");
let numbersSection = document.querySelector(".numbers-section");
let footer = document.querySelector(".footer");
let formSection = document.querySelector(".form-section");

aboutCourseBtn.addEventListener("click", function () {
    window.scrollTo({
        top: aspectSection.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
    });
});
aboutUsBtn.addEventListener("click", function () {
    window.scrollTo({
        top: numbersSection.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
    });
});
contactsBtn.addEventListener("click", function () {
    window.scrollTo({
        top: footer.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
    });
});

for (let i = 0; i < registrationBtns.length; i++) {
    registrationBtns[i].addEventListener("click", function () {
        window.scrollTo({
            top: formSection.getBoundingClientRect().top + window.pageYOffset,
            behavior: "smooth",
        });
    });
}

// ----- Show scroll up button ------

let scrollUpBtn = document.querySelector(".scroll-up-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY >= window.innerHeight) {
        scrollUpBtn.classList.add("show");
        scrollUpBtn.classList.remove("hide");
    } else {
        scrollUpBtn.classList.add("hide");
        scrollUpBtn.classList.remove("show");
    }
});

scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// ----- animated buttons ------

$(function () {
    $(".animated-btn")
        .on("mouseenter", function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({ top: relY, left: relX });
        })
        .on("mouseout", function (e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find("span").css({ top: relY, left: relX });
        });
});
