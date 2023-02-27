document.addEventListener("DOMContentLoaded", function() {

    //  СЕКЦИЯ CONTACT Валидация и маска
    var selector = document.getElementById("contact-phone");
    var im = new Inputmask("+7 (999) 999-99-99");
    im.mask(selector);

    const validate = new window.JustValidate('#form');

    validate

        .addField('#contact-name', [{
                rule: 'minLength',
                errorMessage: 'Имя должно быть не меньше 3-х букв !',
                value: 3,
            },
            {
                rule: 'maxLength',
                errorMessage: 'Очень длинное имя!',
                value: 20,
            },
            {
                rule: 'required',
                errorMessage: 'Укажите имя !',
            },
        ])
        .addField('#contact-phone', [{
                rule: 'minLength',
                errorMessage: 'Номер должен быть не меньше 10 цифр !',
                value: 9,
            },

            {
                rule: 'required',
                errorMessage: 'Укажите номер телефона!',
            },

            {
                errorMessage: 'Номер должен быть не меньше 10 цифр !',
                validator: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue();
                    return Number(phone) && phone.length === 10;
                }
            },


        ]);


    var fld = document.getElementById("contact-name");
    fld.addEventListener("change", function() {
        this.classList.add("contact__change");
    });

    var fld = document.getElementById("contact-phone");
    fld.addEventListener("change", function() {
        this.classList.add("contact__change");
    });


    // БУРГЕР

    document.querySelector('.burger__btn').addEventListener('click', function() {
        document.querySelector('.burger__btn').classList.toggle('active')
        document.querySelector('.burger__menu').classList.toggle('active')
        document.querySelector('.header__box').classList.toggle('active')
    });

    //  ЛУПА
    const searchOpen = document.querySelector('.header__search');
    const search = document.querySelector('.header__searchField');
    const searchClose = document.querySelector('.header__searchClose');

    searchOpen.addEventListener('click', () => {
        search.classList.add('header__searchField--open');
        if ($(window).width() <= '930') {
            document.querySelector('.header__burger').style.display = "none";
        };

    });

    searchClose.addEventListener('click', () => {
        search.classList.remove('header__searchField--open');
        if ($(window).width() <= '930') {
            document.querySelector('.header__burger').style.display = "block";
        }
    });


    $(document).ready(function() {
        $("#header-btn1").click(function() {
            $(this).hide();
        });
    });

    $('body').click(function(event) {
        var id = $(event.target).attr('id');
        if (id == 'header-btn3') {
            $('#header-btn1').show();
        }
    });


    // меню в HERO блоке
    // это почему-то лупа в hero исчезает-element.style
    const searchHero = document.querySelector('.hero__lupa');
    searchHero.addEventListener('click', () => {
        document.querySelector('.hero__search').style.display = "block";
    });


    const menuBtns = document.querySelectorAll('.menu__btn');
    const drops = document.querySelectorAll('.dropdown');
    var togl = 0;

    menuBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            let currentBtn = e.currentTarget;

            let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');
            let arrow = currentBtn.closest('.menu__item').querySelector('.arrowUp');

            menuBtns.forEach(el => {
                if (el !== currentBtn) {
                    el.classList.remove('menu__btn--active');
                    arrow.setAttribute('d', 'M11 1L6 6L1 1');
                }
            });

            drops.forEach(el => {
                if (el !== drop) {
                    el.classList.remove('dropdown--active');
                    arrow.setAttribute('d', 'M11 1L6 6L1 1');
                }
            });

            menuBtns.forEach(el => {
                let ar = el.querySelector('.arrowUp');
                ar.setAttribute('d', 'M11 1L6 6L1 1');
            });

            if (togl == 0) {
                arrow.setAttribute('d', 'M0.5 9L6 1L12 9');
                drop.classList.add('dropdown--active');
                currentBtn.classList.add('menu__btn--active');
                togl = 1;
            } else {
                arrow.setAttribute('d', 'M11 1L6 6L1 1');
                drop.classList.remove('dropdown--active');
                currentBtn.classList.remove('menu__btn--active');
                togl = 0;
            }


        });
    });

    //   это нажали на строке меню и меню исчезло
    document.addEventListener('click', (row) => {
        // если target потомок меню -т.е если он из списка дропдауна
        if (row.target.closest('.dropdown__list')) {
            drops.forEach(el => {
                el.classList.remove('dropdown--active');
                togl = 0;
            });
        }
    });


    //   это нажали в любом месте и меню исчезло
    document.addEventListener('click', (e) => {

        // если target не потомок меню -т.е если он не из списка дропдауна
        if (!e.target.closest('.hero__menu')) {
            menuBtns.forEach(el => {
                el.classList.remove('menu__btn--active');
                let arrow = el.querySelector('.arrowUp');
                arrow.setAttribute('d', 'M11 1L6 6L1 1');
                togl = 0;
            });
            drops.forEach(el => {
                el.classList.remove('dropdown--active');
            });
        }

    });

    // картинку в Hero поменял
    var picNumber = 1;
    var pic = document.querySelector('.hero__background');

    function ChangePicture() {
        if (picNumber == 1) {
            pic.classList.remove('hero__background');
            pic.classList.add('hero__background1');
            picNumber = 2;
        } else
        if (picNumber == 2) {
            pic.classList.remove('hero__background1');
            pic.classList.add('hero__background2');
            picNumber = 3;

        } else
        if (picNumber == 3) {
            pic.classList.remove('hero__background2');
            pic.classList.add('hero__background');
            picNumber = 1;
        }

    }

    setInterval(ChangePicture, 3000);

    // ************************************************************************************
    // СКРОЛЛБАР меню секции HERO

    // new SimpleBar(document.getElementById('scroll'), {
    // autoHide: false,
    // forceVisible: true

    // });

    // ************************************************************************************

    // Селектор SELECT в секции GALLERY
    const element = document.querySelector('.gallery__select');
    const choices = new Choices(element, {

        allowHTML: true,
        searchEnabled: false,
        shouldSort: false,
        position: 'bottom',
        itemSelectText: '',
        placeholder: false
    });
    //  это скрываю радио кнопки, когда их накрывает выпадающее меню в ширине 768


    document.querySelector('.gallery__forma').addEventListener('showDropdown', function() {
        if ($(window).width() <= '930') {
            document.querySelector('.gallery__radiobox').classList.add('gallery__none')
        }
    });
    document.querySelector('.gallery__forma').addEventListener('hideDropdown', function() {
        if ($(window).width() <= '930') {
            document.querySelector('.gallery__radiobox').classList.remove('gallery__none')
        }
    });

    //  SWIPER в секции GALLERY
    //  тут странно - ширина, определяемая как параметр в new Swiper -это не ширина,
    //  устанавливаемая в классе .swiper - см. пример c 1150


    var swiperGallery = new Swiper('.mySwiper', {
        // Optional parameters
        // direction: 'vertical',
        zoom: true,
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,


        breakpoints: {
            500: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerColumn: 1,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 64,
                slidesPerGroup: 2

            },

            1400: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3

            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.gallery__button2',
            prevEl: '.gallery__button3',
        }
    });

    // ************************************************************************************
    //  аккордеон CATALOG
    $(".accordion").accordion({
        heightStyle: "content",
        active: true,
        autoHeight: false,
        clearStyle: true,
        collapsible: true, //this makes the selected tab close on second click


    });

    document.querySelectorAll('.ui-accordion-header-icon').forEach(function(el) {
        el.remove()
    });

    $('.catalog__choice').on('click', function() {
        document.querySelector('.catalog__screensaver').style.display = "none";
    });

    $('.catalog-item__border').on('click', function() {
        document.querySelector('.catalog__screensaver').style.display = "block";
        var viborka = document.querySelectorAll('.catalog__choice')
        viborka.forEach(OneData => {
            OneData.checked = false;

        });
    });

    // ************************************************************************************

    //  SWIPER в секции EVENTS
    // здесь кнопки на 1024


    // var swiperEvents = new Swiper('.swiper.EventsSwiper', {
    var swiperEvents = new Swiper('.EventsSwiper', {

        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,


        breakpoints: {
            500: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },

            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 36,
            },
            800: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 27,

            },
            1350: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,

            },
        },

        navigation: {
            nextEl: '.events__button',
            prevEl: ".events__bp",
        },


        pagination: {
            el: '.events__pagination',
            clickable: true,
        },


    });


    // ************************************************************************************
    //  SWIPER в секции PROJECTS

    var swiperProject = new Swiper('.ProjectsSwiper', {
        loop: true,
        slidesPerView: 1,

        breakpoints: {
            500: {
                slidesPerView: 1,
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 42,
            },

            1900: {
                slidesPerView: 3,
                spaceBetween: 48,
                slidesPerGroup: 3
            },
        },

        // Navigation arrows
        navigation: {
            nextEl: '.projects__button2',
            prevEl: '.projects__button1',
        },

    });
    // замена текста ссылки
    ProjectHref();
    window.onresize = ProjectHref;

    function ProjectHref() {
        if ($(window).width() <= '930' && $(window).width() > '500') {
            document.getElementById("proj1").innerHTML = "blanchard-art.ru";
        }
        if ($(window).width() <= '500') {
            document.getElementById("proj1").innerHTML = "blanchard-art.ru/projects/about";
        }
        if ($(window).width() > '930') {
            document.getElementById("proj1").innerHTML = "blanchard-art.ru/projects";
        }

    }

    /* *********************************************************************************** */


    // Карта
    ymaps.ready(init);

    function init() {
        // Создание карты.
        var myMap = new ymaps.Map("mapApr", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758504367842704, 37.60105631349171],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });

        // Создание геообъекта с типом точка (метка).

        var myPlacemark = new ymaps.Placemark(
            [55.758504367842704, 37.60105631349171], {}, {
                iconLayout: 'default#image',
                iconImageHref: "./img/Contact.svg",
                iconImageSize: [20, 20],
                //  iconImageOffset: [0, -10]
            });

        // Размещение геообъекта на карте.
        // myMap.geoObjects.add(myGeoObject);
        myMap.geoObjects.add(myPlacemark);
    }



    ////////////////////////////////////////////////////////////////////////////////////////
});
