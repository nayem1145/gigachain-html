(function($) {
    "use strict"

    jQuery(document).ready(function() {

    //Data Background Set
    $("[data-background]").each(function(){
        $(this).css({
            'background-image' : 'url(' + $(this).attr('data-background') + ')',
            'background-repeat' : 'no-repeat',
        });
    });


    //Mobile Menu 
    $(".mobile-menu-toggle").on("click", function(){
        $(".nft-mobile-menu").toggleClass("mobile-menu-active"); 
    });

    $(".nft-mobile-menu ul li.has-submenu a").each(function(){
        $(this).on("click", function(){
            $(this).siblings('ul').slideToggle();
        });
    });

    $(".close-menu").on("click", function(){
        $(".nft-mobile-menu").removeClass("mobile-menu-active");
    });

    //header sticky and scroll top button
    $(window).on("scroll", function(){
        var scrollBarPosition = $(this).scrollTop();
        if( scrollBarPosition > 100 ) {
            $(".header-sticky").addClass("sticky-on"); 
        } else {
            $(".header-sticky").removeClass("sticky-on");
        }

        if(scrollBarPosition > 300) {
            $(".scroll-top-btn").fadeIn(); 
        } else {
            $(".scroll-top-btn").fadeOut();
        }
    });

    $(".scroll-top-btn").on("click", function(){
        $("body,html").animate({
            scrollTop: 0,
        }, 1500, 'easeOutQuad');
    });

    //hero slider
    $(".hero-slider").slick({
        slidesToShow: 2, 
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="prev-btn"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-btn"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 1,
                }
            }, 
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //collection slider
    $(".pp-collection-slider").slick({
        slidesToShow: 4, 
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400, 
                settings: {
                    slidesToShow: 3,
                }
            }, 
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }); 

    //auction slider
    $(".sidebar-auction-slider").slick({
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        speed: 1500,
        prevArrow: '<button class="prev-btn"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-btn"><i class="fa-solid fa-angle-right"></i></button>', 
    });

    //Location Slider 
    $(".location-slider").slick({
        slidesToShow: 3,
        arrows: false, 
        dots: true,
        autoplay: true,
        speed: 1500,
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                }
            } 
            
        ]
    });

    //single item slider
    $(".single-item-slider").slick({
        slidesToShow: 1, 
        autoplay: true, 
        speed: 1500,
        dots: true, 
        arrows: false,
    })

    //Collection Items Slider
    $(".ct_items_slider").slick({
        slidesToShow: 4,
        autoplay: true,
        speed: 1500,
        prevArrow: '<button class="prev-btn"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-btn"><i class="fa-solid fa-angle-right"></i></button>', 
        responsive: [
            {
                breakpoint: 1400, 
                settings: {
                    slidesToShow: 3,
                }
            }, 
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    //home2 auction slider
    $(".gg2-auction-slider").slick({
        slidesToShow: 4,
        autoplay: true,
        speed: 1500, 
        prevArrow: '<button class="prev-arrow"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button class="next-arrow"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1400, 
                settings: {
                    slidesToShow: 3,
                }
            }, 
            {
                breakpoint: 992, 
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    //video blog Slider
    $(".vblog-slider").slick({
        slidesToShow: 1,
        autoplay: true,
        speed: 1500,
        arrows: false, 
        dots: true,
    });

    //Section dropdown
    var sectionDropdown = $(".section-dropdown");
    sectionDropdown.each(function () {
        var targetInput = $(this).children('input[type="hidden"]');
        var targetButton = $(this).children("button");
        var target_key_words = $(this).find("ul.dropdown-menu li");
        target_key_words.each(function () {
            $(this).on("click", function () {
            var targeted_text = $(this).text();
            targetInput.val(targeted_text);
            targetButton.find("span").text(targeted_text);
            });
        });
    });

    //copy to clip board function 
    $(".copy_to_clip_board").on("click", function(){
        var clip_text = $(".author_user_id").text();
        var clip_numbers = clip_text.replace(/\D/g, "");
        var message_copied = navigator.clipboard.writeText(clip_numbers);
        
        if(message_copied) {
            $(".copied-message").addClass("show-message");
        }        
    });

    //File Upload
    var file_upload = $(".file_upload input"); 
    file_upload.on("change", function(){
        var file_name = this.files[0].name; 
        $(".file_upload .file_name").text(file_name);
    });

    });

    //theme countdown 
    var themeCountdown = $(".gg-countdown");
    themeCountdown.each(function(){
        var ggcountDownDate = $(this).attr("data-date");

        $(this).countdown({
            date: ggcountDownDate,
        });
    });

    //conterup 
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    //hero categories slider 
    $(".gg2-hero-categories").slick({
        slidesToShow: 5,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400, 
                settings: {
                    slidesToShow: 4,
                }
            }, 
            {
                breakpoint: 1200, 
                settings: {
                    slidesToShow: 3,
                }
            }, 
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    //theme audio video popup
    $('.video-popup-btn').magnificPopup({
        type: 'iframe'
    });
    

    jQuery(window).on('load', function() {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $(".preloader");
        preLoder.fadeOut(0);

        // init Isotope
        var $grid = $('.grid').isotope({});

        $('.ds-filter-btn-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        $(".ds-filter-btn-group button").on("click", function(){
            $(this).parent(".ds-filter-btn-group").find("button.active").removeClass("active"); 
            $(this).addClass("active");
        });


        // init Isotope
        var $grid_2 = $('.explore_filter_grid').isotope({});

        $('.explore-filter-btn-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid_2.isotope({ filter: filterValue });
        });

        $(".explore-filter-btn-group button").on("click", function(){
            $(this).parent(".explore-filter-btn-group").find("button.active").removeClass("active"); 
            $(this).addClass("active");
        });

        // init Isotope
        var $grid_3 = $('.collectibles_filter_grid').isotope({});

        $('.collectibles-filter-btn-group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid_3.isotope({ filter: filterValue });
        });

        $(".collectibles-filter-btn-group button").on("click", function(){
            $(this).parent(".collectibles-filter-btn-group").find("button.active").removeClass("active"); 
            $(this).addClass("active");
        });

        // init Isotope
        var $grid_4 = $('.myprofile_filter_grid').isotope({});

        $('.myprofile_btn_group').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid_4.isotope({ filter: filterValue });
        });

        $(".myprofile_btn_group button").on("click", function(){
            $(this).parent(".myprofile_btn_group").find("button.active").removeClass("active"); 
            $(this).addClass("active");
        });


    });
})(jQuery);
