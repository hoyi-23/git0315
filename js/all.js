$(document).ready(function(){
    $(".course_intro").hover(function(){
        $(".submenu_course_intro").toggleClass("open");
    });
    $(".submenu_course_intro").mouseenter(function(){
        $(".submenu_course_intro").addClass("open");
    });
    $(".submenu_course_intro").mouseleave(function(){
        $(".submenu_course_intro").removeClass("open");
    });
    // swiper
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
});
