$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            $(".logo_img").attr("src", "/mrx/inc/images/MRX-LOGO-noback-black.png");
        } else {
            $(".navbar").removeClass("sticky");
            $(".logo_img").attr("src", "/mrx/inc/images/MRX-LOGO-noback.png");
        }
        if (this.scrollY > 200) {
            $(".scroll-up-btn").addClass("show");
        } else {
            $(".scroll-up-btn").removeClass("show");
        }
    });
    //slide up script
    $(".scroll-up-btn").click(function() {
        $("html").animate({ scrollTop: 0 });
    });
    $(".theme_icon").click(function() {
        $(".theme_icon").toggleClass("uil-moon");
        $(".theme_icon").toggleClass("uil-sun");
        $("body").toggleClass("dark");
    });
    //menu - navbar script 
    $(".menu-btn").click(function() {
        $(".navbar .menu").toggleClass("active");
        $(".fa-bars").toggleClass("fa-times");
    });
    $(".nav_link").click(function() {
        $(this).toggleClass("active");
    });
    //media box 
    $(".mes").click(function() {
        $(".media-item").toggleClass("show-box");
    });
    $(".media-item").click(function() {
        $(".media-item").toggleClass("show-box");
    });
    //counter 2
    $('.counter_coffee').countTo({
        from: 0,
        to: 6200,
        speed: 6000,
        refreshInterval: 10,
        formatter: function(value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function(value) {
            console.debug(this);
        },
        onComplete: function(value) {
            console.debug(this);
        }
    });
    $('.counter_projects').countTo({
        from: 0,
        to: 30,
        speed: 3000,
        refreshInterval: 3,
        formatter: function(value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function(value) {
            console.debug(this);
        },
        onComplete: function(value) {
            console.debug(this);
        }
    });
    $('.counter_Friends').countTo({
        from: 0,
        to: 105,
        speed: 3000,
        refreshInterval: 5,
        formatter: function(value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function(value) {
            console.debug(this);
        },
        onComplete: function(value) {
            console.debug(this);
        }
    });
    $('.counter_Hours').countTo({
        from: 0,
        to: 2885,
        speed: 3000,
        refreshInterval: 10,
        formatter: function(value, options) {
            return value.toFixed(options.decimals);
        },
        onUpdate: function(value) {
            console.debug(this);
        },
        onComplete: function(value) {
            console.debug(this);
        }
    });
    //typing animation
    var typed = new Typed('.typeing-home', {
        strings: [
            'YouTuber',
            'Developer',
            'Blogger',
            'Designer',
            'Freelancer',
            'Marketer'
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed('.typeing-2', {
        strings: [
            'YouTuber',
            'Developer',
            'Blogger',
            'Designer',
            'Freelancer',
            'Marketer'
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    //owl carousel script 
    $(".services-carousel").owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(".carousel").owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    $(".carousel-post").owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});


//---------------------------- SCROLL SECTIONS ACTIVE LINK 
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav_li a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".nav_li a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}
window.addEventListener("scroll", scrollActive);