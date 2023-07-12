import __CONFIG_GLOBAL from '../../../../site.config.json'; // глобальный файл конфигурации сайта

/**
 * Запуск перебора чисел
 */
(function animateNumber() {
    if ($('.counter-list').length) {
        $('.counter-list').viewportChecker({
            callbackFunction() {
                setTimeout(() => {
                    let comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
                    $('.indicator-number_1').animateNumber({
                        number: $('.indicator-number_1').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                    $('.indicator-number_2').animateNumber({
                        number: $('.indicator-number_2').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                    $('.indicator-number_3').animateNumber({
                        number: $('.indicator-number_3').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                    $('.indicator-number_4').animateNumber({
                        number: $('.indicator-number_4').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                    $('.indicator-number_5').animateNumber({
                        number: $('.indicator-number_5').data('indicator-number'),
                        numberStep: comma_separator_number_step,
                    }, {
                        easing: 'swing',
                        duration: __CONFIG_GLOBAL.javascript.about.duration,
                    });
                }, 700);
            },
        });
    }
})();
(function initHistorySlider() {
    if ( $('.history-list').length ) {

        $('.js-history-list').slick({
            fade: true,
            dots: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev slick-history-arrow slick-prev-history main-slider-arrow">' +
                '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M7.42188 10.5938L2.82812 6L7.42188 1.40625L6.01562 0L0.015625 6L6.01562 12L7.42188 10.5938Z" fill="#FF2E4D"/>\n' +
                '</svg>\n' +
                '</button>',
            nextArrow: '<button type="button" class="slick-next slick-history-arrow slick-next-history main-slider-arrow">' +
                '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '<path d="M0.578125 10.5938L5.17188 6L0.578125 1.40625L1.98438 0L7.98438 6L1.98438 12L0.578125 10.5938Z" fill="#FF2E4D"/>\n' +
                '</svg>' +
                '</button>',
            appendDots: ".history-dots-wrapper"
        });

    }
})();
