import __CONFIG_GLOBAL from '../../../site.config.json'; // глобальный файл конфигурации сайта
import __FULL_CONTENT from '../../../build/content.json'; // весь сгенерированный контент

import '@babel/polyfill';
import $ from 'jquery';

window.$ = $;
window.jQuery = $;
import AOS from "aos";
import Parallax from 'parallax-js';
import 'slick-carousel';
import 'select2';
import 'jquery-validation';
import 'jquery-mask-plugin';
import 'magnific-popup';

require('./blocks/dotdot/jquery.dotdotdot.min');
require('./vendor/jquery.animateNumber.min');
require('./vendor/jquery.viewportchecker.min');
require('./blocks/slicknav/jquery.slicknav.min');
require('./blocks/forms');
require('./blocks/news');
require('./blocks/table');
require('./blocks/tradeview');
require('./blocks/footer');
require('./blocks/calculator');
require('./blocks/select');
require('./blocks/index');
require('./blocks/about');

(function fixedMenu() {
    var coordinateMenu = $(".nav").offset().top;
    $(window).scroll(function() {
        if ($(this).scrollTop() > coordinateMenu) {
            $(".nav").addClass("sticky");
        } else {
            $(".nav").removeClass("sticky");
        }
    });
})();
(function addedAosPlagin() {
    AOS.init({
        duration: __CONFIG_GLOBAL.javascript.aos.duration,
    });
})();
(function addedParallax() {
    $('.scene').each(function(i, e) {
        var scene = e;
        var parallaxInstance = new Parallax(scene, {
            hoverOnly: true,
        });
    });
})();
(function addSlickNav() {
    if ($('.nav').length) {
        $('.nav-list:not(.list-lang)').slicknav({
            prependTo: '.nav-wrapper',
            label: '',
            allowParentLinks: true,
            animations: '',
        });

        $(document).on('click', '.slicknav_btn', function () {
            if (!$('.nav-wrapper').hasClass('show-menu')) {
                $('.nav-wrapper').addClass('show-menu');
                $('html, body').addClass('overflow-hidden');
                calcVH();
                window.addEventListener('onorientationchange', calcVH, true);
                window.addEventListener('resize', calcVH, true);
            } else {
                $('.nav-wrapper').removeClass('show-menu');
                $('html, body').removeClass('overflow-hidden');
                window.removeEventListener('onorientationchange', calcVH, true);
                window.removeEventListener('resize', calcVH, true);
                $('.nav-wrapper').removeAttr('style');
            }
        });

        media('all and (min-width: 1025px)', function () {
            if ($('.nav-wrapper').hasClass('show-menu')) {
                $('html, body').removeClass('overflow-hidden');
                $('.nav-wrapper').removeClass('show-menu');
                window.removeEventListener('onorientationchange', calcVH, true);
                window.removeEventListener('resize', calcVH, true);
                $('.nav-wrapper').removeAttr('style');
                $('.nav-list').slicknav('close');
            }
        });
    }
})();
(function addedParallax() {
    $('.scene').each(function (i, e) {
        var scene = e;
        var parallaxInstance = new Parallax(scene, {
            hoverOnly: true,
        });
    });
})();

function calcVH() {
    var vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var thisElement = document.getElementsByClassName("show-menu")[0];
    thisElement.setAttribute("style", "height:" + vH + "px;");
}
function media(mediaQueryString, action){
    var handleMatchMedia = function (mediaQuery) {
        if (mediaQuery.matches) { //Попадает в запроc
            if (action  && typeof(action) === 'function') {
                action();
            }
        }
    };
    var mql = window.matchMedia(mediaQueryString); //стандартный медиазапрос для смены режима просмотра
    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);
}
