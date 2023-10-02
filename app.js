// ---- Burger menu -----

let burgerMenuBtn = document.querySelector(".logo-btn");
let burgerMenu = document.querySelector(".burger-menu");
let header = document.querySelector(".header");
let burgerBg = document.querySelector(".burger-menu-bg");
let main = document.querySelector(".main");
let footer = document.querySelector(".footer");
let burgerMenuBg = document.querySelector(".burger-menu-bg");

function openBurgerManu() {
    burgerMenu.classList.add("opened-burger-menu");
    burgerMenu.classList.remove("closed-burger-menu");
    header.classList.add("white-bg");
    document.body.classList.add("disable-scroll");
    burgerBg.classList.add("blur");
    main.classList.add("blur");
    footer.classList.add("blur");
}
function closeBurgerMenu() {
    burgerMenu.classList.add("closed-burger-menu");
    burgerMenu.classList.remove("opened-burger-menu");
    header.classList.remove("white-bg");
    document.body.classList.remove("disable-scroll");
    burgerBg.classList.remove("blur");
    main.classList.remove("blur");
    footer.classList.remove("blur");
}

burgerMenuBtn.addEventListener("click", () => {
    {
        if (burgerMenu.className.includes("closed-burger-menu")) {
            openBurgerManu();
        } else {
            closeBurgerMenu();
        }
    }
});

burgerMenuBg.addEventListener("click", () => {
    closeBurgerMenu();
});

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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true,
                },
            },
        ],
    });
});

// ----- Navigation ------

let aboutCourseBtn = document.querySelectorAll(".header-menu-item-1");
let aboutUsBtn = document.querySelectorAll(".header-menu-item-2");
let contactsBtn = document.querySelectorAll(".header-menu-item-3");
let registrationBtns = document.querySelectorAll(".registration-btn");

let aspectSection = document.querySelector(".aspect-section");
let numbersSection = document.querySelector(".numbers-section");
let formSection = document.querySelector(".form-section");

for (let i = 0; i < aboutCourseBtn.length; i++) {
    aboutCourseBtn[i].addEventListener("click", function () {
        closeBurgerMenu();
        window.scrollTo({
            top:
                aspectSection.getBoundingClientRect().top +
                window.pageYOffset -
                header.offsetHeight,
            behavior: "smooth",
        });
    });
}

for (let i = 0; i < aboutUsBtn.length; i++) {
    aboutUsBtn[i].addEventListener("click", function () {
        closeBurgerMenu();
        window.scrollTo({
            top:
                numbersSection.getBoundingClientRect().top +
                window.pageYOffset -
                header.offsetHeight,
            behavior: "smooth",
        });
    });
}

for (let i = 0; i < contactsBtn.length; i++) {
    contactsBtn[i].addEventListener("click", function () {
        closeBurgerMenu();
        window.scrollTo({
            top:
                footer.getBoundingClientRect().top +
                window.pageYOffset -
                header.offsetHeight,
            behavior: "smooth",
        });
    });
}

for (let i = 0; i < registrationBtns.length; i++) {
    registrationBtns[i].addEventListener("click", function () {
        closeBurgerMenu();
        window.scrollTo({
            top:
                formSection.getBoundingClientRect().top +
                window.pageYOffset -
                header.offsetHeight,
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
