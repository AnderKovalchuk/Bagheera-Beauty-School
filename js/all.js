window.addEventListener('load', () => {
    $('.main_header_mobile_icon').click(function() {
        $('.main_header_nav').toggleClass('show');
    });

    $('.menu_main_fall_out .icon_control_down').click(function() {
        $('.menu_main_fall_out div').toggleClass('show');
    });
})