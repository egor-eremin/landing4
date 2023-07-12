(function initMainSlider() {
    if( $('div').is('.js-main-slider') ) {
        $('.js-main-slider').slick({
            arrows: false,
            dots: true,
            fade: true,
            autoplay: true,
            autoplaySpeed: 4000,
            appendDots: '.main-arrows-wrapper',
            pauseOnHover: false,
            pauseOnFocus: false,
        });
    }
})();
(function initAccountSlider() {
    if( $('div').is('.js-accounts-list-slider')) {
        $('.js-accounts-list-slider').slick({
           fade: true,
           prevArrow: '<button type="button" class="slick-prev slick-accounts-arrow slick-prev-accounts main-slider-arrow">' +
                '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M7.42188 10.5938L2.82812 6L7.42188 1.40625L6.01562 0L0.015625 6L6.01562 12L7.42188 10.5938Z" fill="#FF2E4D"/>\n' +
                '</svg>\n' +
                '</button>',
           nextArrow: '<button type="button" class="slick-next slick-accounts-arrow slick-next-accounts main-slider-arrow">' +
                '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M0.578125 10.5938L5.17188 6L0.578125 1.40625L1.98438 0L7.98438 6L1.98438 12L0.578125 10.5938Z" fill="#FF2E4D"/>\n' +
                '</svg>' +
                '</button>',
           appendArrows: '.accounts-arrows-wrapper',
           asNavFor: '.js-slider-number',
            initialSlide: 1,
        });
        $('.js-slider-number').slick({
            asNavFor: '.js-accounts-list-slider',
            fade: true,
            arrows: false,
            initialSlide: 1,
        });
    }
})();