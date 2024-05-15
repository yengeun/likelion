jQuery(document).ready(function() {
    // Navigation submenu slide down/up on hover
    $('.nav > li').on('mouseover', function() { 
        $(this).find('.submenu').stop().slideDown(500);
    }).on('mouseout', function() {
        $(this).find('.submenu').stop().slideUp(500);
    });

    // Slideshow animation loop
    setInterval(function() {
        $('.slidelist').delay(1000).animate({marginTop: -400}, 1000)
                      .delay(2000).animate({marginTop: -800}, 1000)
                      .delay(2000).animate({marginTop: 0}, 1000)
                      .delay(2000);
    }, 9000); // Total duration of the animation cycle plus delays

    // Tab menu click event
    $('.tabmenu > ul > li > a').on('click', function(e) { 
        e.preventDefault();
        $(this).parent().addClass("active")
            .siblings()
            .removeClass("active");
    });

    // Notice layer toggle
    $(".notice li:first").on('click', function() {
        $("#layer").addClass("active");
    });

    $(".btn").on('click', function() {
        $("#layer").removeClass("active");
    });
});
