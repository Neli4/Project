/* Preloader */
$(window).on('load', function(){
    $('#status').fadeOut();
    $('#preloader').delay(450).fadeOut('slow');
});

/*team*/
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,  
        dots: false,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/*Progress bars*/
$(function(){

    $("#progress-element").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {offset: "bottom-in-view"
});
});

/*Responsive Tabs*/
$(function() {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

})

/*Testimonials*/
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,  
        dots: false,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
    });
});

/*Stats*/
$(function(){

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    })

});

/*Clients*/
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,  
        dots: false,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>']
    });
});



   

