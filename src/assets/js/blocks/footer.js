import __CONFIG_GLOBAL from '../../../../site.config.json'; // глобальный файл конфигурации сайта
import { definesLanguage } from './global'; // хук для определения языка

/**
 * Автоматическая генерация футера
 */
(function() {
    var lang = definesLanguage(), // получение языка сайта
        blockid = '#page-footer',
        baseDir = lang == __CONFIG_GLOBAL.defaultLanguage ? '' : '../'; // определение корня сайта для ссылок

    let vars = {
        name: __CONFIG_GLOBAL.companyData.title,
        adr: __CONFIG_GLOBAL.companyData.adres,
        phone:  __CONFIG_GLOBAL.companyData.phone,
        mail: "<a href='mailto:" + __CONFIG_GLOBAL.companyData.email + "'>" + __CONFIG_GLOBAL.companyData.email + "</a>",
        lic: __CONFIG_GLOBAL.companyData.license.lls1,
        lic2: __CONFIG_GLOBAL.companyData.license.lls2,
        lic3: __CONFIG_GLOBAL.companyData.license.lls3,

    };

    let fDatas = {
        address: {
            ru: "Компания " + vars.name + " зарегистрирована по адресу: " + vars.adr,
            en: vars.name + " is registered at " + vars.adr,
            es: vars.name + " está registrada en " + vars.adr,
            de: vars.name + " ist registriert i " + vars.adr,
            fr: vars.name + " est enregistré au " + vars.adr,
            it: vars.name + " è registrato al " + vars.adr,
            zh: vars.name + "註冊於 " + vars.adr
        },
        info: {
            de: "Das Unternehmen betreibt unter den Anforderungen der Cysec (Lizenznummer: " + vars.lic + "), die International Financial Services Commission (IFSC) (" + vars.lic2 + ") und der Financial Services Commission der Republik Mauritius ( Investment Dealer Lizenznummer: " + vars.lic3 + ").",
            en: "The company operates under the requirements of the Cyprus Securities and Exchange Commission (Licence Number: " + vars.lic + "), the International Financial Services Commission (IFSC) (" + vars.lic2 + ") and the Financial Services Commission of the Republic of Mauritius (Investment Dealer Licence Number: " + vars.lic3 + ").",
            es: "La compañía opera bajo los requerimientos de la Comisión de Valores de Chipre (número de licencia: " + vars.lic + "), la Comisión Internacional de Servicios Financieros (IFSC) (" + vars.lic2 + ") y la Comisión de Servicios Financieros de la República de Mauricio ( inversión Licencia distribuidor Número: " + vars.lic3 + ").",
            fr: "La société exerce ses activités sous les exigences de la Commission des valeurs mobilières de Chypre et d'échange (Numéro de licence: " + vars.lic + "), la Commission internationale des services financiers (IFSC) (" + vars.lic2 + ") et la Commission des services financiers de la République de Maurice ( investissement Licence de concessionnaire Numéro: " + vars.lic3 + ").",
            it: "La società opera con i requisiti della Cyprus Securities and Exchange Commission (numero di licenza: " + vars.lic + "), la Commissione Financial Services International (IFSC) (" + vars.lic2 + ") e alla Commissione servizi finanziari della Repubblica di Mauritius ( Investment Dealer Licenza Numero: " + vars.lic3 + ").",
            ru: "Деятельность компании осуществляется в соответствии с требованиями Кипрской комиссии по ценным бумагам и биржам (номер лицензии: " + vars.lic + "), Комиссии по международным финансовым услугам (IFSC) (" + vars.lic2 + ") и Комиссии по финансовым услугам Республики Маврикия (номер лицензии инвестиционного дилера: " + vars.lic3 + ").",
            zh: "国际金融服务委员会（IFSC）（" + vars.lic2 + "）和毛里求斯共和国金融服务委员会（：本公司根据塞浦路斯证券交易委员会的要求（二十三分之九百七十九许可证号）工作投资经销商许可证编号：" + vars.lic3 + "）。"
        },
        copy: {
            ru: "Защищено SSL.<br> Авторское право © 2018 - 2021 " + vars.name + ". Все права защищены.",
            en: "Secured by SSL.<br> Copyright © 2018 - 2021 " + vars.name + ". All rights reserved.",
            es: "Asegurado por SSL.<br> Copyright © 2018 - 2021 " + vars.name + ". Todos los derechos reservados.",
            de: "Gesichert durch SSL.<br> Urheberrecht © 2018 - 2021 " + vars.name + ". Alle Rechte vorbehalten.",
            fr: "Sécurisé par SSL.<br> Copyright © 2018 - 2021 " + vars.name + ". Tous droits réservés.",
            it: "Protetto da SSL.<br> Copyright © 2018 - 2021 " + vars.name + ". Tutti i diritti riservati.",
            zh: "受SSL保護。<br>版權所有©2018-2021 " + vars.name + "。版權所有",
        },
    };

    var footer = "<div class='footer-js footer-information-wrapper'>\
					<div class='footer-col footer-col_1'>\
                        <p class='footer-p'>"+fDatas.address[lang]+" "+fDatas.info[lang]+"</p>\
                        <div class='footer-copy'>"+fDatas.copy[lang]+"</div>\
					</div>\
				</div>",
        m = footer,
        fs = blockid;
    if (typeof jQuery === 'function') { jQuery(function() { jQuery(fs).html(m).on('copy', function(e) { e.preventDefault(); return !1 }) }) } else {
        var da = document.addEventListener,
            c = function() {
                if (da || window.event.type === 'load' || document.readyState === 'complete') {
                    d();
                    r()
                }
            };
        var n = function(e) {
            var a = e || window.event;
            a.preventDefault();
            return !1
        };
        var r = function() {
            var e = document.querySelector(fs);
            if (e) {
                e.innerHTML = m;
                if (da) e.addEventListener('copy', n);
                else e.attachEvent("oncopy", n)
            }
        };
        var d = function() {
            if (da) {
                document.removeEventListener('DOMContentLoaded', c);
                window.removeEventListener('load', c)
            } else {
                document.detachEvent('onreadystatechange', c);
                window.detachEvent('onload', c)
            }
        };
        if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) { window.setTimeout(r) } else if (da) {
            da("DOMContentLoaded", c);
            window.addEventListener("load", c)
        } else {
            document.attachEvent("onreadystatechange", c);
            window.attachEvent("onload", c)
        }
    }
})();
