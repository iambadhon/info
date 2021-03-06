$(function () {
    //================preloader start================//
    $(window).on("load", function () {
        $(".preloader").delay(500).fadeOut(500);
    });

    //================preloader end================//


    //================scroll top start================//
    $(".scroll_to_top").click(function () {
        $("html,css").animate({
            scrollTop: 0,
        }, 1000);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 100) {
            $(".scroll_to_top").fadeIn(800);
        } else {
            $(".scroll_to_top").fadeOut(800);
        }

        // if (scrolling > 150) {
        //     $(".main_nav").addClass("nav_sticky");
        // } else {
        //     $(".main_nav").removeClass("nav_sticky");
        // }
    });

    //================scroll top end================//


    //================nav hide start================//
    let navBar = document.querySelectorAll('.nav-link');
    let navCollapse = document.querySelector('.navbar-collapse.collapse');
    navBar.forEach(function (a) {
        a.addEventListener("click", function () {
            navCollapse.classList.remove("show");
        })
    })
    //================nav hide end================//


    //=====================sticky nav start=====================//
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop()

        if (scrolling > 150) {
            $(".main_nav").addClass("nav_sticky");
        } else {
            $(".main_nav").removeClass("nav_sticky");
        }
    });
    //=====================sticky nav end=====================//


    //================sticky nav start================//
    $(".sticky_menu").waypoint(function (direction) {
        if (direction == "down") {
            $(".main_nav").addClass("nav_sticky");
        } else {
            $(".main_nav").removeClass("nav_sticky");
        }
    });

    //================sticky nav end================//


    //================smooth scroll start================//

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top - 90
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });







    function scrollNav() {
        $('nav a').click(function () {
            $(".active").removeClass("active");
            $(this).addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 90
            }, 1000);
            return false;
        });
    }
    scrollNav();






    var html_body = $("html, body");
    $("nav a").on("click", function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                html_body.animate({
                        scrollTop: target.offset().top - 90,
                    },
                    1000
                );
                return false;
            }
        }
    });

    //================smooth scroll end================//

});