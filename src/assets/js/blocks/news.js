import { definesLanguage } from './global'; // хук для определения языка
import __CONFIG_GLOBAL from '../../../../site.config.json'; // глобальный файл конфигурации сайта
import __NEWS_JSON from './json/news.json'; // подключение объекта со всеми статичными переводами для новостей
import 'jquery-rss'; // подключение плагина для подгрузки rss новостей

// контейнер для новостей
var newscontainer = '.news-slider';

/**
 * Функция для подгрузки новостей с помощью плагина jquery.rss.min.js
 */
(function getnewsrss() {
    // если контейнер с новостями есть
    if ($('.news-slider').length) {
        // определение языка сайта
        // window.buildRelease - переменная для опеределения релиз сборка или для разработки (./src/assets/js/blocks/env/*.js)
        let langData = definesLanguage(),
            protokolNews = 'https://',
            adressNews = __CONFIG_GLOBAL.javascript.news.linkrss;
        // коррекция для запроса новостей, т.к. портал не понимает язык ch или zh
        langData = ( langData === 'ch' || langData === 'zh' ) ? 'cn' : langData;
        // если релизовая сборка то применяем язык сайта, если нет, то берем дефолтный rss для тестирования и верстки новостей
        // создаем ссылку для получения новостей
        let adr = langData == __CONFIG_GLOBAL.defaultLanguage ? protokolNews + adressNews : protokolNews + langData + '.' + adressNews,
            // необходимо для определения адреса картинки-заглушки, если новость прешла без превьюхи
            baseDir = langData == __CONFIG_GLOBAL.defaultLanguage ? '' : '../';
        // чистим контейнер перед тем как его заполнить новостями
        $(newscontainer).html('');
        // работа плагина по загрузке новостей
        $(newscontainer).rss( adr, {
            // лимит загружаемых новостей, указан в файле глоабльной конфигурации
            limit: __CONFIG_GLOBAL.javascript.news.number,
            // локаль/формат даты
            dateLocale: "ru",
            // брать новости с последней
            order: "-publishedDate",
            // редактирование формата даты
            dateFormatFunction: function(date) {
                let dateIt = new Date(date),
                    year = dateIt.getFullYear().toString(),
                    month = (Number(dateIt.getMonth())+1).toString(),
                    day = dateIt.getDate().toString(),
                    hour = dateIt.getHours().toString(),
                    minutes = dateIt.getMinutes().toString();
                month = (month.split('').length==1) ? '0'+month.toString() : month.toString();
                day = (day.split('').length==1) ? '0'+day.toString() : day.toString();
                hour = (hour.split('').length==1) ? '0'+hour.toString() : hour.toString();
                minutes = (minutes.split('').length==1) ? '0'+minutes.toString() : minutes.toString();
                return day+'.'+month+'.'+year+' '+hour+':'+minutes;
            },
            // создания токена для картинки новости {imagenews}
            tokens: {
                imagenews: function( entry, tokens ) {
                    // если привьюха не пришла то берет картинку указанную в файле глобальной конфигурации
                    return typeof(entry.enclosure) !== 'undefined' ? entry.enclosure.url : baseDir + __CONFIG_GLOBAL.javascript.news.imgblock;
                }
            },
            // layoutTemplate - не менять!
            layoutTemplate: '{entries}',
            // DOM элемент новости
            entryTemplate: '\
                <div class="news-item">\
                    <a class="link-news" target="_blank" href="{url}" >\
                        <img class="news-item__img" src="{imagenews}" alt="{title}" title="{title}">\
                        <div class="news-item__content">\
                            <div class="news-item__title" data-dot>{title}</div>\
                            <div class="news-item__info-wrapper">\
                            <div class="news-item__text news-item__author">{author}</div>\
                            <div class="news-item__text news-item__date">{date}</div>\
                            </div> \
                            <div class="btn more-details"></div>\
                        </div>\
                    </a>\
                </div>\
            ',
            error: function() {
                // на случай если rss запретили читать на стороне хоста или на стороне парсера
                console.log('Host запретил отдавать ответ, вытаскиваем из кэша ответ');
                if( localStorage.getItem('news') ) {
                    // достаем новости из кэша
                    newscontainer.html( localStorage.getItem('news') );
                    // Строим слайдер новостей из кэша
                    buildSliderNews();
                }
            },
        },
        // после того как все новости были загружены по лимиту выполняется callback()
        function callback() {
            // кэшируем ответ на случай если хост запретил читать ответ
            localStorage.removeItem('news');
            localStorage.setItem('news', $(newscontainer).html());
            // Строим слайдер новостей
            buildSliderNews();
        });
    }
})();

function buildSliderNews() {
    $(newscontainer).slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,
        appendDots: $('.slider-news-pagination'),
        prevArrow: '<button type="button" class="slick-prev slick-news-arrow slick-prev-news main-slider-arrow">' +
            '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M7.42188 10.5938L2.82812 6L7.42188 1.40625L6.01562 0L0.015625 6L6.01562 12L7.42188 10.5938Z" fill="#FF2E4D"/>\n' +
            '</svg>\n' +
            '</button>',
        nextArrow: '<button type="button" class="slick-next slick-news-arrow slick-next-news main-slider-arrow">' +
            '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M0.578125 10.5938L5.17188 6L0.578125 1.40625L1.98438 0L7.98438 6L1.98438 12L0.578125 10.5938Z" fill="#FF2E4D"/>\n' +
            '</svg>' +
            '</button>',
        infinite: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('[data-dot]').dotdotdot();
    $(window).resize(function() {
        $('[data-dot]').dotdotdot();
    });
}
