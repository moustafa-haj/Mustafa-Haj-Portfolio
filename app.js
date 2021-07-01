$(document).ready(function() {
    $(".them_icon").click(function() {
        $(".them_icon").toggleClass("uil-sun");
        $(".them_icon").toggleClass("uil-moon");
        $("body").toggleClass("dark");
    });
    $(window).scroll(function() {
        if ($(document).scrollTop() > 50) {
            $(".navbar").addClass("nav_shadow");
        } else {
            $(".navbar").removeClass("nav_shadow");
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
    $(".skills_close").click(function() {
        $(this).toggleClass("skills_open");
        $(this).toggleClass("skills_close");
    });
    var typed = new Typed('.typeing', {
        strings: [
            'YouTuber',
            'Web Developer',
            'Blogger',
            'Desginer',
            'Freelancer',
            'Marketer'
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed('.typeing_2', {
        strings: [
            'YouTuber',
            'Web Developer',
            'Blogger',
            'Desginer',
            'Freelancer',
            'Marketer'
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
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
                document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.add("active")
            } else {
                document.querySelector(".nav-item a[href*=" + sectionId + "]").classList.remove("active")
            }
        })
    }
    window.addEventListener("scroll", scrollActive);
});