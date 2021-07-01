$(document).ready(function() {
    // $(".header").load("header.html");
    // $(".footer").load("footer.html");
    //----------------------------header
    if ($(".nav_toggle")) {
        $(".nav_toggle").click(function() {
            $(".nav_menu").addClass("show_menu");
        });
    }
    if ($(".nav_toggle")) {
        $(".nav_close").click(function() {
            $(".nav_menu").removeClass("show_menu");
        });
    }
    $(".nav_link").click(function() {
        $(".nav_menu").removeClass("show_menu");
    });
    //----------------------------home
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $(".header").addClass("header_shadow");
        } else {
            $(".header").removeClass("header_shadow");
        }
        if ($(document).scrollTop() > 400) {
            $(".scrollup").addClass("show_scrollup");
        } else {
            $(".scrollup").removeClass("show_scrollup");
        }
    });
    //----------------------------skills
    $(".skills_close").click(function() {
        $(this).toggleClass("skills_open");
        $(this).toggleClass("skills_close");
    });
    //----------------------------qualification
    const tabs = document.querySelectorAll("[data-target]");
    const tabContents = document.querySelectorAll("[data-content]");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target);
            tabContents.forEach(tabContent => {
                tabContent.classList.remove("qualification_active");
            });
            target.classList.add("qualification_active");
            tabs.forEach(tab => {
                tab.classList.remove("qualification_active");
            });
            tab.classList.add("qualification_active");
        });
    });
    //------------------------------------------services
    const modalViews = document.querySelectorAll(".services_modal");
    const modalBtns = document.querySelectorAll(".services_btn");
    const modalCloses = document.querySelectorAll(".services_modal_close");
    let modal = function(modalClick) {
        modalViews[modalClick].classList.add("active_modal");
    }
    modalBtns.forEach((modalBtn, i) => {
        modalBtn.addEventListener("click", () => {
            modal(i);
        });
    });
    modalCloses.forEach((modalClose) => {
        modalClose.addEventListener("click", () => {
            modalViews.forEach((modalView) => {
                modalView.classList.remove("active_modal");
            });
        });
    });
    //----------------------------portfolio swiper
    let swiperPortfolio = new Swiper(".portfolio_container", {
        cssMode: true,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: true,
        keyboard: true,
    });
    //---------------------------- testimonial swiper
    let swiperTestimonial = new Swiper(".testimonial_container", {
        loop: true,
        grabCursor: true,
        spaceBetween: 48,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },

        breakpoints: {
            568: {
                slidesPerView: 2,
            }
        }
    });
    //---------------------------- SCROLL SECTIONS ACTIVE LINK 
    const sections = document.querySelectorAll("section[id]")

    function scrollActive() {
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            sectionId = current.getAttribute("id")

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.add("active_link")
            } else {
                document.querySelector(".nav_menu a[href*=" + sectionId + "]").classList.remove("active_link")
            }
        })
    }
    window.addEventListener("scroll", scrollActive);
    // ------------------------theme_color
    $(".theme_color").click(function() {
        $("body").toggleClass("dark");
        $(".theme_icon").toggleClass("uil-sun");
        $(".theme_icon").toggleClass("uil-moon");
    });
});