(()=>{var e={986:(e,t,i)=>{"use strict";i(353);const s=function(){var e=document.querySelectorAll("._anim-promo"),t=document.querySelectorAll("._anim-expertise"),i=document.querySelectorAll("._anim-about"),s=document.querySelectorAll("._anim-map"),a=document.querySelectorAll("._anim-team"),l=document.querySelectorAll("._anim-building"),c=document.querySelectorAll("._anim-design"),n=(document.querySelectorAll("._anim-project"),document.querySelectorAll("._anim-competence")),r=document.querySelectorAll(".projects__link"),A=0;function _(e){return e<10?"0.".concat(e):e>=10?e/10:e}function o(e){var t=e.items,i=e.opacity,s=void 0===i?0:i,a=e.transform;t.forEach((function(e){e.style.opacity="".concat(s),e.style.transform="".concat(a)}))}function m(e){e.style.opacity="1",e.style.transform="translate(0, 0)"}function d(e,t){m(e),e.style.transition="all 1s ease ".concat(_(5*t),"s")}function p(e,t){return document.documentElement.clientWidth>1300?(m(e),void(e.style.transition="all 1s ease ".concat(_(3*t),"s"))):document.documentElement.clientWidth>660?(m(e),void(e.style.transition="all 1s ease ".concat(_(t<=2?3*t:3*(t-3)),"s"))):document.documentElement.clientWidth>420?(m(e),void(e.style.transition="all 1s ease ".concat(_(t<=1?3*t:t>1&&t<=3?3*(t-2):3*(t-4)),"s"))):document.documentElement.clientWidth>=1?(m(e),void(e.style.transition="all 1s ease 0s")):void 0}function h(e,t){m(e),e.style.transition="all 1s ease ".concat(_(5*t),"s")}function g(e,t){m(e),e.style.transition="all 1s ease ".concat(_(t),"s")}function u(e,t){return document.documentElement.clientWidth>=1300?(m(e),void(e.style.transition="all 1s ease ".concat(_(3*t),"s"))):document.documentElement.clientWidth>=767?(m(e),void(e.style.transition="all 1s ease ".concat(_(t<2?3*t:3*(t-2)),"s"))):document.documentElement.clientWidth>=1?(m(e),void(e.style.transition="all 1s ease 0s")):void 0}function v(e,t){m(e),e.style.transition="all 1s ease ".concat(_(t),"s")}function f(e,t){document.documentElement.clientWidth>1e3?(m(e),e.style.transition="all 1s ease 1s"):(m(e),e.style.transition="all 1s ease 0s")}function b(e,t){return document.documentElement.clientWidth>=1239?(e.style.opacity="1",e.style.transform="scale(1)",void(e.style.transition="all 1s ease ".concat(_(t<3?2*t:2*(t-2)),"s"))):document.documentElement.clientWidth>839?(e.style.opacity="1",e.style.transform="scale(1)",void(e.style.transition=t<2?"all 1s ease ".concat(_(2*t),"s"):t<4?"all 1s ease ".concat(_(2*(t-2)),"s"):"all 1s ease 0s")):document.documentElement.clientWidth<839?(e.style.opacity="1",e.style.transform="scale(1)",void(e.style.transition="all 1s ease 0s")):void 0}function y(e,t,i){e.forEach((function(e,s){var a,l,c,n,r=e.offsetHeight,A=(a=e,l=a.getBoundingClientRect(),c=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop,{top:l.top+n,left:l.left+c}).top,_=window.innerHeight-r/t;r>window.innerHeight&&(_=window.innerHeight-window.innerHeight/t),window.pageYOffset>A-_&&window.pageYOffset<A+_&&i(e,s)}))}function w(){y(e,4,d),y(t,4,p),y(i,-4,h),y(a,4,u),y(s,4,g),y(l,4,v),y(c,4,f),y(n,4,b)}document.documentElement.clientWidth>767&&document.addEventListener("aos:in",(function(e){var t=e.detail;"trigger"==t.getAttribute("data-aos")&&(t.setAttribute("data-aos","trigger-done"),setInterval((function(){r[A].classList.add("projects__link--active"),A++,setTimeout((function(){r[A-1].classList.remove("projects__link--active")}),3700),A>=r.length&&setTimeout((function(){A=0}),3850),console.log("something")}),4e3))})),o({items:e,transform:"translate(0, 120%)"}),o({items:t,transform:"translate(0, 25%)"}),o({items:i,transform:"translate(0, 50%)"}),o({items:s,transform:"translate(0, -300%)"}),o({items:a,transform:"translate(0, 40%)"}),o({items:l,transform:"translate(-500px, 0)"}),o({items:c,transform:"translate(500px, 0)"}),o({items:n,transform:"scale(0)"}),window.addEventListener("scroll",w),w()};const a=function(e){var t=document.querySelector(e),i=[{x:141,y:270},{x:134,y:303},{x:138,y:336},{x:76,y:393},{x:117,y:395},{x:167,y:402},{x:213,y:406},{x:255,y:407},{x:242,y:369},{x:287,y:377},{x:207,y:356},{x:224,y:341},{x:247,y:332},{x:204,y:318},{x:228,y:301},{x:184,y:296},{x:204,y:282},{x:158,y:301},{x:173,y:271},{x:201,y:215},{x:237,y:172},{x:478,y:481},{x:560,y:469},{x:513,y:512},{x:589,y:543}];i.map((function(e){e.x=100*e.x/1260,e.y=100*e.y/674}));for(var s=0;s<i.length;s++){var a=document.createElement("div");a.style.top="".concat(i[s].y-5,"%"),a.style.left="".concat(i[s].x-2.5,"%"),a.classList.add("map__pin","_anim-map"),t.appendChild(a)}};function l(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var s=0,a=function(){};return{s:a,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,n=!0,r=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return n=e.done,e},e:function(e){r=!0,l=e},f:function(){try{n||null==i.return||i.return()}finally{if(r)throw l}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}const n=function(){var e,t=l(document.querySelectorAll('a[href*="#"]'));try{var i=function(){var t=e.value;t.addEventListener("click",(function(e){e.preventDefault();var i=t.getAttribute("href").substr(1);document.getElementById(i).scrollIntoView({behavior:"smooth",block:"start"})}))};for(t.s();!(e=t.n()).done;)i()}catch(e){t.e(e)}finally{t.f()}var s=document.querySelector("#btn-up");s.addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){window.pageYOffset+document.documentElement.clientHeight+1e3>=document.documentElement.scrollHeight?s.classList.add("fixed"):s.classList.remove("fixed")}))};const r=function(){var e=0,t=document.querySelector(".main-header");window.addEventListener("scroll",(function(){var i=window.pageYOffset||document.documentElement.scrollTop;i-e<0?t.classList.add("header-fixed"):t.classList.remove("header-fixed"),function(){window.pageYOffset>t.offsetHeight?t.classList.add("header-hide"):t.classList.remove("header-hide");var e=document.querySelector(".main-nav__toggle"),i=document.querySelector(".main-nav__list");document.documentElement.clientWidth<1180&&(i.classList.add("main-nav__list--hidden"),e.classList.contains("main-nav__toggle--opened")&&(e.classList.add("main-nav__toggle--closed"),e.classList.remove("main-nav__toggle--opened")))}(),e=i}))};const A=function(){var e=document.querySelector(".main-nav__toggle"),t=document.querySelector(".main-nav__list");window.addEventListener("resize",(function(){window.matchMedia("(min-width: 1180px)").matches&&t.classList.remove("main-nav__list--hidden"),window.matchMedia("(max-width: 1180px)").matches&&t.classList.add("main-nav__list--hidden")})),window.matchMedia("(max-width: 1180px)").matches&&t.classList.add("main-nav__list--hidden"),e.addEventListener("click",(function(i){i.preventDefault(),t.classList.toggle("main-nav__list--hidden"),e.classList.contains("main-nav__toggle--opened")?(e.classList.remove("main-nav__toggle--opened"),e.classList.add("main-nav__toggle--closed")):(e.classList.remove("main-nav__toggle--closed"),e.classList.add("main-nav__toggle--opened"))}))};var _=i(205),o=i(296),m=i(566),d=i.n(m),p=i(978);i(894),_.Z.use([o.Z]),new p({offset:1e3}),window.addEventListener("DOMContentLoaded",(function(){a("#map"),s(),n(),r(),A(),d().init(),new _.Z("#swiper-other",{speed:400,direction:"horizontal",navigation:{nextEl:".other__next",prevEl:".other__prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:25},678:{slidesPerView:2,spaceBetween:50},1300:{slidesPerView:3,spaceBetween:50}}}),new _.Z("#swiper-certificates",{speed:400,direction:"horizontal",navigation:{nextEl:".certificates__next",prevEl:".certificates__prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:25},520:{slidesPerView:2,spaceBetween:50},678:{slidesPerView:2,spaceBetween:50},880:{slidesPerView:3,spaceBetween:50},1140:{slidesPerView:4,spaceBetween:50},1300:{slidesPerView:3,spaceBetween:100}}})}))},291:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});const s=i.p+"./img/logo_trans.png"},388:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>s});const s=i.p+"./img/map.jpg"},353:(e,t,i)=>{var s=i(370),a=i(291),l=i(388),c='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <meta name="viewport" content="width=device-width,initial-scale=1"/> <meta name="description" content="15 лет в России и за рубежом, более 500\n    объектов жилого и нежилого назначения, любые объемы работ от\n    проектирования до готового сооружения."/> <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/> <title>Трансстрой</title> </head> <body> <header class="main-header"> <div class="container"> <div class="main-header__wrapper"> <a class="main-header__logo-link" href="#"> <img class="main-header__logo-img" src="'+s(a)+'" width="269" height="50" alt="Логотип компании Трансстрой"/> </a> <button class="main-nav__toggle main-nav__toggle--closed no--js" type="button" aria-label="Открыть меню"></button> <nav class="main-nav"> <ul class="main-nav__list"> <li class="main-nav__item"> <a class="main-nav__link" href="#about">О компании</a> </li> <li class="main-nav__item"> <a class="main-nav__link" href="#team">Команда и ресурсы</a> </li> <li class="main-nav__item"> <a class="main-nav__link" href="#other">Виды работ</a> </li> <li class="main-nav__item"> <a class="main-nav__link" href="#projects">Портфолио</a> </li> <li class="main-nav__item"> <a class="main-nav__link" href="#competence">Наши компетенции</a> </li> </ul> </nav> </div> </div> </header> <main> <h1 class="visually-hidden">Главная страница компании "Трансстрой"</h1> <section class="promo"> <div class="container"> <div class="promo__wrapper"> <div class="promo__lead"> <h2 class="promo__title _anim-promo"> Cтроительство ремонт реконструкция<br/> <span>под ключ</span> </h2> <p class="promo__text _anim-promo"> 15 лет в России, более 500 объектов жилого и нежилого назначения, любые объемы работ от проектирования до готового сооружения. </p> <div class="buttons-wrapper _anim-promo"> <a class="button" href="#partners">Партнеры</a> <a class="button" href="#certificates">Рекомендации</a> </div> </div> </div> </div> </section> <section class="expertise container"> <ul class="expertise__list"> <li class="expertise__item _anim-expertise"> <img class="expertise__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/expertise-1.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--manhole">Устройство наружных сетей канализации</h3> </li> <li class="expertise__item _anim-expertise"> <img class="expertise__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/expertise-2.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--pipe-closed">Устройство наружных сетей теплоснабжения </h3> </li> <li class="expertise__item _anim-expertise"> <img class="expertise__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/expertise-3.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--traffic-cone">Строительство дорог и благоустройство территорий</h3> </li> <li class="expertise__item _anim-expertise"> <img class="expertise__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/expertise-4.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--electricity">Устройство наружных электрических сетей и линий связи</h3> </li> <li class="expertise__item _anim-expertise"> <img class="expertise__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/expertise-5.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--engine">Строительство внутренних инженерных систем и оборудования зданий и сооружений</h3> </li> <li class="expertise__item _anim-expertise"> <img class="expertise__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/expertise-6.jpg" width="200" height="400" alt="Контентное изображение"> <h3 class="expertise__text expertise__text--pipe">Устройство наружных и внутренних сетей водостабжения, водоподготовка</h3> </li> </ul> </section> <section id="about" class="about b-lazy" data-src="img/blazy/shutter.jpg"> <div class="about__blur"> <div class="container"> <div class="about__content _anim-about"> <h2 class="about__title title">О компании</h2> <p class="about__text">Наша компания выполняет работы по строительству, ремонту и реконструкции зданий уже 15 лет в России. За это время выполнено более 500 объектов жилого и нежилого назначения. Наши возможности позволяют выполнять любые объемы работ от проектирования до готового сооружения. Мы можем отремонтировать как небольшие здания, так и объекты с полным комплексом работ, как капитального ремонта, так и реконструкции и монтажу, в том числе инженерных систем.</p> <h3 class="about__subtitle">В сферу нашей деятельности входит ремонт и строительство следующих типов зданий: </h3> <ul class="about__list"> <li class="about__item"> Офисные, административные здания, музеи, памятники и сооружения культурного наследия </li> <li class="about__item"> Торговые центры, магазины </li> <li class="about__item"> Коттеджи, таунхаусы, загородные дома </li> <li class="about__item"> Производственные и складские здания </li> <li class="about__item"> Медицинские центры, поликлиники, больницы </li> <li class="about__item"> Гостиницы, пансионаты, санатории </li> <li class="about__item"> Сооружения специального назначения </li> </ul> </div> </div> </div> </section> <section class="map container"> <div id="map" class="map__wrapper"> <img class="map__img" src="'+s(l)+'" width="650" height="325" alt="Карта россии"> </div> <div class="map__content"> <h2 class="map__title title">География проектов</h2> <div class="map__inner"> <div class="map__column"> <h3 class="map__subtitle subtitle">Районы московской области</h3> <ul class="map__list-area"> <li class="map__list__item">Раменское</li> <li class="map__list__item">Каширский</li> <li class="map__list__item">Подольский</li> <li class="map__list__item">Домодедовский</li> <li class="map__list__item">Ступинский</li> <li class="map__list__item">Люберецкий</li> <li class="map__list__item">Чеховский</li> <li class="map__list__item">Ленинский</li> <li class="map__list__item">Истринский</li> <li class="map__list__item">Можайский</li> <li class="map__list__item">Одинцовский</li> </ul> <h3 class="map__subtitle subtitle">Регионы России</h3> <ul class="map__list-country-start"> <li class="map__item">Новгородская область</li> <li class="map__item">Белгородская область</li> <li class="map__item">Брянская область</li> <li class="map__item">Владимирская область</li> <li class="map__item">Волгоградская область</li> <li class="map__item">Иркутская область</li> </ul> </div> <div class="map__column"> <ul class="map__list-coutry-end"> <li class="map__item">Калужская область</li> <li class="map__item">Кемеровская область</li> <li class="map__item">Краснодарский край</li> <li class="map__item">Красноярский край</li> <li class="map__item">Курская область</li> <li class="map__item">Ленинградская область и СПБ</li> <li class="map__item">Республика Мордовия</li> <li class="map__item">Новосибирская область</li> <li class="map__item">Омская область</li> <li class="map__item">Орловская область</li> <li class="map__item">Пензенская область</li> <li class="map__item">Ростовская область</li> <li class="map__item">Рязанская область</li> <li class="map__item">Самарская область</li> <li class="map__item">Саратовская область</li> <li class="map__item">Республика Татарстан</li> <li class="map__item">Томская область</li> <li class="map__item">Тульская область</li> <li class="map__item">Ульяновская область</li> <li class="map__item">Нижегородская область</li> </ul> </div> </div> </div> </section> <section id="team" class="team"> <div class="container"> <h2 class="team__title title title--2">Команда и ресурсы</h2> <div class="team__wrapper"> <div class="team__card _anim-team"> <img class="team__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/team-1.jpg" width="300" height="250" alt="Контактное изображение"> <div class="team__content"> <h3 class="team__subtitle subtitle team__subtitle--wheel">Собственные машины<br> и механизмы </h3> <ul class="team__list"> <li class="team__item">Грузовики DAF гп. 10 тн</li> <li class="team__item">Манипуляторы ISUZU гп. 5 тн</li> <li class="team__item">Тракторы JCB 3 cx</li> <li class="team__item">Тракторы Mustang (mini)</li> <li class="team__item">Автобусы грузопассажирские</li> </ul> </div> </div> <div class="team__card _anim-team"> <img class="team__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/team-2.jpg" width="300" height="250" alt="Контактное изображение"> <div class="team__content"> <h3 class="team__subtitle subtitle team__subtitle--crane">Навесное оборудование</h3> <ul class="team__list"> <li class="team__item">Ямобуры 300 / 500 / 600 мм</li> <li class="team__item">Комплекты для траншей</li> </ul> </div> </div> <div class="team__card _anim-team"> <img class="team__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/team-3.jpg" width="300" height="250" alt="Контактное изображение"> <div class="team__content"> <h3 class="team__subtitle subtitle team__subtitle--builder">Собственный персонал</h3> <ul class="team__list"> <li class="team__item">Монтажники - 12</li> <li class="team__item">Электрики - 14</li> <li class="team__item">Рабочие - 40</li> <li class="team__item">Геодезисты - 4 (12*)</li> <li class="team__item">ИТР - 6</li> </ul> </div> </div> <div class="team__card _anim-team"> <img class="team__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/team-4.jpg" width="300" height="250" alt="Контактное изображение"> <div class="team__content"> <h3 class="team__subtitle subtitle team__subtitle--aerial-platform">Арендованная техника</h3> <ul class="team__list"> <li class="team__item">Автовышка 20 / 30 / 45 м</li> </ul> </div> </div> </div> </div> </section> <div class="build-design__wrapper b-lazy container" data-src="img/blazy/Background.jpg"> <section class="building"> <h2 class="building__title title">Строительство</h2> <ol class="building__list _anim-building"> <li class="building__item">Геодезические работы</li> <li class="building__item">Земляные работы</li> <li class="building__item">Свайные работы, закрепление грунтов</li> <li class="building__item">Монтаж сборных бетонных и железобетонных конструкций</li> <li class="building__item">Монтаж металических конструкций</li> <li class="building__item">Монтаж деревянных конструкций</li> <li class="building__item">Устройство кровель</li> <li class="building__item">Фасадные работы</li> <li class="building__item">Монтажные работы</li> <li class="building__item">Пусконаладочные работы</li> <li class="building__item">Устройство автомобильных дорог</li> <li class="building__item">Работы по осуществлению строительного контроля</li> <li class="building__item"> Работы по организации строительства, реконструкции и капитального ремонта </li> </ol> </section> <section class="design"> <h2 class="design__title title">Проектирование</h2> <ol class="design__list _anim-design"> <li class="design__item">Работы по подготовке схемы планировочной организации земельного участка;</li> <li class="design__item">Работы по подготовке сведений о внутреннем инженерном оборудовании, внутренних сетях инженерно-технического обеспечения, о перечне инженерно-технических мероприятий;</li> <li class="design__item">Работы по подготовке сведений о наружных сетях инженерно-технического обеспечения, о перечне инженерно-технических мероприятий;</li> <li class="design__item">Работы по подготовке технологических решений;</li> <li class="design__item">Работы по разработке специальных разделов проектной документации;</li> <li class="design__item">Работы по подготовке проектов организации строительства, сносу и демонтажу зданий и сооружений, продлению срока эксплуатации и консервации;</li> <li class="design__item">Работы по подготовке проектов мероприятий по охране окружающей среды;</li> <li class="design__item">Работы по подготовке проектов мероприятий по обеспечению пожарной безопасности;</li> <li class="design__item">Работы по подготовке проектов мероприятий по обеспечению доступа маломобильных групп населения;</li> <li class="design__item">Работы по обследованию строительных конструкций, зданий и сооружений.</li> </ol> </section> </div> <section id="projects" class="projects container" data-aos="trigger"> <h2 class="projects__title title--1 title">Портфолио</h2> <ul class="projects__list"> <li class="projects__item _anim-project"> <img class="projects__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/библиотека.jpg" alt="Российская государственная библиотека им. Ленина."> <div class="projects__link" data-aos="show-text" data-aos-offset="300" data-aos-mirror="true"> <h3 class="projects_subtitle">Российская государственная библиотека им. Ленина</h3> </div> </li> <li class="projects__item _anim-project"> <img class="projects__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/жукова.jpg" alt="Музей Маршала Советского Союза Г. К. Жукова."> <div class="projects__link" data-aos="show-text" data-aos-offset="300" data-aos-mirror="true"> <h3 class="projects_subtitle">Музей Маршала Советского Союза Г. К. Жукова</h3> </div> </li> <li class="projects__item _anim-project"> <img class="projects__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/космос.jpg" alt="Московский Музей космонавтики"> <div class="projects__link" data-aos="show-text" data-aos-offset="300" data-aos-mirror="true"> <h3 class="projects_subtitle">Московский Музей космонавтики</h3> </div> </li> <li class="projects__item _anim-project"> <img class="projects__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/музей победы.jpg" alt="Музей Победы в Великой Отечественной войне 1941-1945 гг."> <div class="projects__link" data-aos="show-text" data-aos-offset="300" data-aos-mirror="true"> <h3 class="projects_subtitle">Музей Победы в Великой Отечественной войне 1941-1945 гг</h3> </div> </li> <li class="projects__item _anim-project"> <img class="projects__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/можайский.jpg" alt="Администрация Можайского городского округа."> <div class="projects__link" data-aos="show-text" data-aos-offset="300" data-aos-mirror="true"> <h3 class="projects_subtitle">Администрация Можайского городского округа</h3> </div> </li> <li class="projects__item _anim-project"> <img class="projects__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/телеком.jpg" alt="Телеком направление."> <div class="projects__link" data-aos="show-text" data-aos-offset="300" data-aos-mirror="true"> <h3 class="projects_subtitle">Телеком направление</h3> </div> </li> <li class="projects__item _anim-project"> <img class="projects__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/музей обороны.jpg" alt="Государственный музей обороны Москвы."> <div class="projects__link" data-aos="show-text" data-aos-offset="300" data-aos-mirror="true"> <h3 class="projects_subtitle">Государственный музей обороны Москвы</h3> </div> </li> <li class="projects__item _anim-project"> <img class="projects__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/линия жизни.jpg" alt="Центр репродукции «Линия жизни»."> <div class="projects__link" data-aos="show-text" data-aos-offset="300" data-aos-mirror="true"> <h3 class="projects_subtitle">Центр репродукции «Линия жизни»</h3> </div> </li> </ul> </section> <section id="competence" class="competence b-lazy" data-src="img/blazy/competence-bg.png"> <div class="competence__wrapper container"> <h2 class="competence__title title--2 title">Текушие компетенции</h2> <ol class="competence__list"> <li class="competence__item _anim-competence"> <h3 class="competence__subtitle subtitle">Стандартизированные проектные решения,</h3> <p class="competence__text"> основанные на лучших мировых практиках, направленные на энергоэффективность и снижение эксплуатационных затрат. </p> </li> <li class="competence__item _anim-competence"> <h3 class="competence__subtitle subtitle">Строительство и ремонт только собственными силами.</h3> <p class="competence__text"> Наличие всех необходимых ресурсов и выполнение требований по охране труда и промышленной безопасности на объектах. </p> </li> <li class="competence__item _anim-competence"> <h3 class="competence__subtitle subtitle">Полный цикл работ</h3> <p class="competence__text"> по технологическому присоединению к инженерным сетям. </p> </li> <li class="competence__item _anim-competence"> <h3 class="competence__subtitle subtitle">Функциональный сервис.</h3> <p class="competence__text"> Фокус только на решение необходимых заказчику задач для оптимизации капитальных вложений с возможностью дальнейшей разработки программ развития объектов. </p> </li> <li class="competence__item _anim-competence"> <h3 class="competence__subtitle subtitle">Работа по заявкам:</h3> <p class="competence__text"> организация, управление и автоматизация диспетчерских служб. Аварийные (4 часа) и плановые (24 часа) выезды ремонтных бригад. </p> </li> </ol> </div> </section> <section id="other" class="other container"> <h2 class="other__title title--1 title">Другие виды выполняемых работ</h2> <div id="swiper-other" class="swiper-container"> <div class="other__list swiper-wrapper"> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--tower">Устройство высоковольтной кабельной линии</h3> <p class="other__text"> Прокладка двух кабельных линий 10кВ, состоящих из участка воздушнойлинии и участка подземной линии. Установка и обвязка КРУ 10 кВ. Монтаж линии для подключения трансформаторов. Подготовка и организация комплексных испытаний кабельных линий. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--shield">Поставка и монтаж трансформаторов</h3> <p class="other__text"> Подбор оптимального трансформаторного оборудования, решение вопросов логистики и установки на проектные места крупногабаритныхтрансформаторов. Комплексные электромонтажные работы, включающие монтаж высоковольтных кабельных трасс, работа с производителемшинопровода при изготовлении необходимой конфигурации, его монтаж и подключение. Монтаж контрольных цепей для управляющих температурным режимом и отключением трансформаторов шкафов управления. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--ammeter">ГРЩ</h3> <p class="other__text"> Подбор производителя крупногабаритного щитового оборудования(ВП, ГРЩ). Участие в оптимизации компоновки ВП и ГРЩ, размещение заказа на производство и контроль при изготовлении. Расстановка, монтаж ВП и ГРЩ, расключение отходящих кабельных линий. Проведение пусконаладочных работ с инженерной службой Изготовителя. Сдача в эксплуатацию. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--plug">Подключение инженерных систем</h3> <p class="other__text"> Подключение различных инженерных систем предприятия, требующих электропитания: компрессорное, холодильное, вентиляционное оборудование. Обеспечение сетей гарантированного питания для противопо жарных систем, для систем аварийного управления эвакуацией. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--gear">Монтаж технологического оборудования</h3> <p class="other__text"> Взаимодействие с наладочными инженерными службами производителей и поставщиков технологического оборудования. Работа в интернациональной команде. Помощь при монтаже и пусконаладочных работах технологического оборудования. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--bulb">Офисные работы</h3> <p class="other__text"> Монтаж сетей освещения и розеточных сетей в офисных помещениях повышенного класса отделки. Сборка и установка сложных авторских конструкций с учетом повышенных требований к качеству работ. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--paper">Доработка проектно-сметной документации</h3> <p class="other__text"> Работа с заказчиком и проектировщиком для оптимизации проектных решений, с целью снижения стоимости и уменьшения сроков поставки. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--microchip">Электрический сети 0,4 КВ</h3> <p class="other__text"> Комплексный монтаж электросетей предприятия. Монтаж сигнальных, управляющих и информационных наружных сетей по территории предприятия. Лабораторные замеры и акты при сдаче сетей в эксплуатацию. </p> </div> </div> <div class="other__item swiper-slide"> <div class="other__item-inner"> <h3 class="other__subtitle other__subtitle--plug-2">СКС</h3> <p class="other__text"> Прокладка как офисных, так и промышленных сетей СКС. Помощь в раз работке проектировщиком документации по применяемым на производстве информационным кабелям. </p> </div> </div> </div> </div> <div class="swiper-button-prev other__prev"> <span class="visually-hidden">Назад</span> </div> <div class="swiper-button-next other__next"> <span class="visually-hidden">Вперед</span> </div> </section> <section id="partners" class="partners"> <div class="container"> <div class="partners__wrapper"> <h2 class="partners__title title--2 title">Наши партнеры</h2> <ul class="partners__list"> <li class="partners__item"> <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/partners-1.png" width="117" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/partners-2.png" width="197" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/partners-3.svg" width="80" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/partners-4.png" width="84" height="50" alt="Логотип компании"> </li> <li class="partners__item"> <img class="b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/blazy/partners-5.png" width="113" height="50" alt="Логотип компании"> </li> </ul> </div> </div> </section> <section id="certificates" class="certificates"> <h2 class="visually-hidden">Сертификаты</h2> <div class="container"> <div class="certificates__wrapper"> <p class="certificates__title title--1 title">Мы ценим свою репутацию</p> <div class="slider-wrapper"> <div id="swiper-certificates" class="certificates__container swiper-container"> <div class="certificates__list swiper-wrapper"> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-1.jpg"> <img class="certificates__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="212" height="300" data-src="img/blazy/certificates-small-1.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-2.jpg"> <img class="certificates__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="212" height="300" data-src="img/blazy/certificates-small-2.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-3.jpg"> <img class="certificates__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="212" height="300" data-src="img/blazy/certificates-small-3.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-4.jpg"> <img class="certificates__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="212" height="300" data-src="img/blazy/certificates-small-4.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-5.jpg"> <img class="certificates__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="212" height="300" data-src="img/blazy/certificates-small-5.jpg" alt="Благодарственное письмо"> </a> </div> <div class="certificates__item swiper-slide"> <a data-fslightbox href="img/certificates/certificates-6.jpg"> <img class="certificates__img b-lazy" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="212" height="300" data-src="img/blazy/certificates-small-6.jpg" alt="Благодарственное письмо"> </a> </div> </div> </div> <div class="swiper-button-prev certificates__prev"> <span class="visually-hidden">Назад</span> </div> <div class="swiper-button-next certificates__next"> <span class="visually-hidden">Впред</span> </div> </div> </div> </div> </section> </main> <footer class="main-footer"> <div class="container"> <div class="main-footer__wrapper"> <p class="main-footer__adress">г. Москва, ул. Люблинская д. 165</p> <a class="main-footer__tel" href="tel:89999999999">Телефон: +7 (933) 999-99-25</a> </div> </div> </footer> <button id="btn-up" class="button-up"> <span class="visually-hidden">Кнопка наверх</span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300.003 300.003"> <g> <g> <path d="M150,0C67.159,0,0.001,67.159,0.001,150c0,82.838,67.157,150.003,149.997,150.003S300.002,232.838,300.002,150\n               C300.002,67.159,232.842,0,150,0z M217.685,189.794c-5.47,5.467-14.338,5.47-19.81,0l-48.26-48.27l-48.522,48.516\n               c-5.467,5.467-14.338,5.47-19.81,0c-2.731-2.739-4.098-6.321-4.098-9.905s1.367-7.166,4.103-9.897l56.292-56.297\n               c0.539-0.838,1.157-1.637,1.888-2.368c2.796-2.796,6.476-4.142,10.146-4.077c3.662-0.062,7.348,1.281,10.141,4.08\n               c0.734,0.729,1.349,1.528,1.886,2.365l56.043,56.043C223.152,175.454,223.156,184.322,217.685,189.794z"/> </g> </g> </svg></button> </body> </html> ';e.exports=c}},t={};function i(s){if(t[s])return t[s].exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,i),a.exports}i.m=e,i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="",(()=>{var e={179:0},t=[[986,173]],s=()=>{};function a(){for(var s,a=0;a<t.length;a++){for(var l=t[a],c=!0,n=1;n<l.length;n++){var r=l[n];0!==e[r]&&(c=!1)}c&&(t.splice(a--,1),s=i(i.s=l[0]))}return 0===t.length&&(i.x(),i.x=()=>{}),s}i.x=()=>{i.x=()=>{},c=c.slice();for(var e=0;e<c.length;e++)l(c[e]);return(s=a)()};var l=a=>{for(var l,c,[r,A,_,o]=a,m=0,d=[];m<r.length;m++)c=r[m],i.o(e,c)&&e[c]&&d.push(e[c][0]),e[c]=0;for(l in A)i.o(A,l)&&(i.m[l]=A[l]);for(_&&_(i),n(a);d.length;)d.shift()();return o&&t.push.apply(t,o),s()},c=self.webpackChunk=self.webpackChunk||[],n=c.push.bind(c);c.push=l})(),i.x()})();