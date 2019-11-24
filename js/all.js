window.addEventListener('load', () => {
    $('.main_header_mobile_icon').click(function () {
        $('.main_header_nav').toggleClass('show');
    });

    $('.menu_main_fall_out .icon_control_down').click(function () {
        $('.menu_main_fall_out div').toggleClass('show');
    });

    let device = {
        '501': window.matchMedia('(max-width: 500px)').matches,
        '768': window.matchMedia('(max-width: 768px)').matches,
        '1200': window.matchMedia('(max-width: 1200px)').matches
    }
    const slickElements = {
        courseListBlock: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            dots: true,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 501,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
    }

    if (device[768]) $('.course_list_block').slick(slickElements.courseListBlock);
})