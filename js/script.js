document.addEventListener("DOMContentLoaded", function () {


  //  СЕКЦИЯ CONTACT Валидация и маска
  var selector = document.getElementById("contact-phone");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  const validate = new window.JustValidate('#form');

  validate
    .addField('#contact-name', [{
      rule: 'minLength',
      errorMessage: 'Недопустимый формат',
      value: 3,
    },
    {
      rule: 'maxLength',
      errorMessage: 'Недопустимый формат',
      value: 20,
    },
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
    ])
    .addField('#contact-phone', [{
      rule: 'minLength',
      errorMessage: 'Недопустимый формат',
      value: 9,
    },

    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },

    {
      errorMessage: 'Недопустимый формат',
      validator: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      },
    },
    ]);


  var fld = document.getElementById("contact-name");
  fld.addEventListener("change", function () {
    this.classList.add("contact__change");
  });

  var fld = document.getElementById("contact-phone");
  fld.addEventListener("change", function () {
    this.classList.add("contact__change");
  });

  // БУРГЕР

  burger();
  window.addEventListener('resize', burger);

  function burger() {
    if ($(window).width() <= '1024') {
      document.querySelector('.header__nav').classList.add('burger__menu');
    } else {
      document.querySelector('.header__nav').classList.remove('burger__menu');
    };
  };


  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.burger__menu').classList.toggle('active');
    document.querySelector('.header__button').classList.toggle('active');

  });

  //  ЛУПА
  const searchOpen = document.querySelector('.header__search');
  const search = document.querySelector('.header__searchform');
  const searchClose = document.querySelector('.header__searchclose');
  const searchBurger = document.querySelector('.header__burger');
  const searchLogo = document.querySelector('.header__logo');
  var priznak = 0;

  window.addEventListener('resize', () => {
    if (priznak == 1 && $(window).width() > '1024') {
      search.classList.remove('header__searchform--open');
      searchOpen.classList.remove('header__search--close');
      document.querySelector('.header__burger').style.visibility = "visible";
      document.querySelector('.header__logo').style.visibility = "visible";
      document.querySelector('.header__container').style.display = "flex";
      priznak = 0;
    };

    if (priznak == 0 && $(window).width() <= '1024') {
      document.querySelector('.header__search').style.visibility = "visible";
      document.querySelector('.header__burger').style.visibility = "visible";
    };

    if ($(window).width() > '1024') {
      document.querySelector('.header__burger').style.visibility = "hidden";
    };

    if (priznak == 0 && $(window).width() > '1024') {
      document.querySelector('.header__search').style.visibility = "hidden";
    };

    if (priznak == 1 && $(window).width() > '992' && $(window).width() <= '1024') {
      search.classList.add('header__searchform--open');
      document.querySelector('.header__burger').style.visibility = "visible";
      document.querySelector('.header__logo').style.visibility = "visible";
      document.querySelector('.header__search').style.visibility = "hidden";
    };

    if (priznak == 1 && $(window).width() <= '992') {
      search.classList.add('header__searchform--open');
      document.querySelector('.header__burger').style.visibility = "hidden";
      document.querySelector('.header__logo').style.visibility = "hidden";
      document.querySelector('.header__search').style.visibility = "hidden";
    };

    if (priznak == 1 && $(window).width() <= '576') {
      document.querySelector('.hero__content').style.paddingTop = "10px";
      document.querySelector('.header__burger').style.visibility = "visible";
      document.querySelector('.header__logo').style.visibility = "visible";
      document.querySelector('.header__search').style.visibility = "visible";
    };

  });


  searchOpen.addEventListener('click', () => {

    if ($(window).width() <= '1024' && $(window).width() > '992') {
      search.classList.add('header__searchform--open');
      searchOpen.classList.remove('header__searchform--open');
      document.querySelector('.header__search').style.visibility = "hidden";
      priznak = 1;
    };

    if ($(window).width() <= '992') {
      search.classList.add('header__searchform--open');
      searchOpen.classList.remove('header__searchform--open');
      searchBurger.classList.remove('header__searchform--open');
      searchLogo.classList.remove('header__searchform--open');
      document.querySelector('.header__search').style.visibility = "hidden";
      document.querySelector('.header__burger').style.visibility = "hidden";
      document.querySelector('.header__logo').style.visibility = "hidden";
      priznak = 1;
    };

    if ($(window).width() <= '576') {
      document.querySelector('.hero__content').style.paddingTop = "10px";
      document.querySelector('.header__search').style.visibility = "visible";
      document.querySelector('.header__burger').style.visibility = "visible";
      document.querySelector('.header__logo').style.visibility = "visible";
    };
  });

  searchClose.addEventListener('click', (el) => {
    el.preventDefault();
    if ($(window).width() <= '1024' && $(window).width() > '992') {
      search.classList.remove('header__searchform--open');
      searchOpen.classList.add('header__searchform--open');
      document.querySelector('.header__search').style.visibility = "visible";
      priznak = 0;
    };

    if ($(window).width() <= '992') {
      search.classList.remove('header__searchform--open');
      searchOpen.classList.add('header__searchform--open');
      searchBurger.classList.add('header__searchform--open');
      searchLogo.classList.add('header__searchform--open');
      document.querySelector('.header__search').style.visibility = "visible";
      document.querySelector('.header__burger').style.visibility = "visible";
      document.querySelector('.header__logo').style.visibility = "visible";
      document.querySelector('.header__container').style.display = "flex";
      priznak = 0;
    };

    if ($(window).width() <= '576') {
      document.querySelector('.hero__content').style.paddingTop = "0";
    };

  });


  $(document).ready(function () {
    $("#header-btn1").click(function () {
      $(this).hide();
    });
  });

  $('body').click(function (event) {
    var id = $(event.target).attr('id');
    if (id == 'header-btn3') {
      $('#header-btn1').show();
    }
  });


  // меню в HERO блоке


  const menuBtns = document.querySelectorAll('.menu__btn');
  const drops = document.querySelectorAll('.dropdown');
  var togl = 0;

  menuBtns.forEach(el => {
    el.addEventListener('click', (e) => {

      let currentBtn = e.currentTarget;
      let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');
      let arrow = currentBtn.closest('.menu__item').querySelector('.arrowup');

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
        let ar = el.querySelector('.arrowup');
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
        // togl = 0;
      });
      // }
      if (togl != 0) {
        menuBtns.forEach(el => {
          let arrow = el.querySelector('.arrowup');
          arrow.setAttribute('d', 'M11 1L6 6L1 1');
          togl = 0;
        });
      }
    }
  });

  //   это нажали в любом месте и меню исчезло

  document.addEventListener('click', (e) => {
    // если target не потомок меню -т.е если он не из списка дропдауна
    if (!e.target.closest('.header__menu')) {
      menuBtns.forEach(el => {
        el.classList.remove('menu__btn--active');
        let arrow = el.querySelector('.arrowup');
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
  // var remClass="hero__background";
  // varaddClass="her"

  /*  function ChangePicture() {
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
  */
  /*
    document.querySelector('.hero__button').addEventListener('click', (e) => {
      console.log("click")
      document.querySelector('.hero__button').classList.add('hero__button--focact');
      document.querySelector('.hero__button').style.backgroundColor = "yellow";

    });

  */

  // ************************************************************************************



  // СКРОЛЛБАР меню секции HERO

  new SimpleBar(document.getElementById('scroll'), {
    autoHide: false,
    forceVisible: true

  });

  // ************************************************************************************

  // Селектор SELECT в секции GALLERY
  const element = document.getElementById("selectCustom");
  const choices = new Choices(element, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    position: 'bottom',
    itemSelectText: '',
    placeholder: false
  });

  //  это скрываю чекбоксы  когда их накрывает выпадающее меню в ширине 768

  document.querySelector('.gallery__menu').addEventListener('showDropdown', function () {
    if ($(window).width() <= '992') {
      document.querySelector('.gallery__checkboxcase').classList.add('gallery__hidecheckbox')
    }
  });
  document.querySelector('.gallery__menu').addEventListener('hideDropdown', function () {
    if ($(window).width() <= '992') {
      document.querySelector('.gallery__checkboxcase').classList.remove('gallery__hidecheckbox')
    }
  });

  //  SWIPER в секции GALLERY

  var swiperGallery = new Swiper('.gallery__swipersection', {
    // Optional parameters
    zoom: true,
    loop: false,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,

    breakpoints: {
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
        spaceBetween: 0,
      },

      740: {
        slidesPerView: 2,
        spaceBetween: 40,
        slidesPerGroup: 2

      },

      992: {
        slidesPerView: 2,
        spaceBetween: 36,
        slidesPerGroup: 2

      },

      1366: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3

      },
    },

    pagination: {
      el: '.gallery__pagination',
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: '.gallery__button3',
      prevEl: '.gallery__button2',
    }
  });

  // ************************************************************************************

  document.querySelectorAll('.catalog-item__button').forEach(function (tabsBtn) {

    tabsBtn.addEventListener('click', function (e) {
      document.querySelector('.catalog__screensaver').style.display = "none";

      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.catalog-item__button').forEach(function (btn) {
        btn.classList.remove('catalog-item__button--active');
      });
      e.currentTarget.classList.add('catalog-item__button--active');

      document.querySelectorAll('.catalog-item__element').forEach(function (tabsBtn) {
        tabsBtn.classList.remove('catalog-item__element--active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-item__element--active');
    });
  });

  //  аккордеон CATALOG
  $(".accordion").accordion({
    heightStyle: "content",
    active: 0,
    autoHeight: true,
    clearStyle: true,
    collapsible: true, //this makes the selected tab close on second click
  });

  document.querySelectorAll('.ui-accordion-header-icon').forEach(function (el) {
    el.remove();
  });

  $('.accordion').accordion({ animate: { easing: 'linear', duration: 900 } });

  var schet = 0;
  if (schet == 0) {
    firstPanel = ".catalog-item__descr:nth-child(1)";
    document.querySelector(firstPanel).classList.add('catalog--active');
    firstPanel = ".catalog-item__descr:nth-child(1) .catalog-item__years ";
    document.querySelector(firstPanel).classList.add('catalog--active');
    schet = 1;
  }

  var activePanel = -1;
  var prevPanel = 0;
  var currentPanel = -1;
  var curPanel = "";
  // убираю топ бордер при запуске аккордеона для активного бордера
  curPanel = ".catalog-item__descr:nth-child(1)";
  document.querySelector(curPanel).style.borderTop = "none";

  $('.catalog-item__border').on('click', function () {
    document.querySelector('.catalog__screensaver').style.display = "block";
    activePanel = $(".accordion").accordion("option", "active");

    if (prevPanel != activePanel) {
      var delPanel = prevPanel + 1;
      document.querySelector(".catalog-item__descr:nth-child(" + delPanel + ")").classList.remove('catalog--active');
      prevPanel = activePanel;
    }

    if (currentPanel != -1) {
      curPanel = ".catalog-item__descr:nth-child(" + currentPanel + ")";
      document.querySelector(curPanel).style.borderTop = "1px solid #CACACA";
    } else {
      curPanel = ".catalog-item__descr:nth-child(1)";
      document.querySelector(curPanel).style.borderTop = "1px solid #CACACA";
    }

    if (activePanel !== false) {
      currentPanel = activePanel + 1;
      curPanel = ".catalog-item__descr:nth-child(" + currentPanel + ")";
      document.querySelector(curPanel).style.borderTop = "none";
      document.querySelector(curPanel).classList.add('catalog--active');
    }

    var viborka = document.querySelectorAll('.catalog__choice');
    viborka.forEach(OneData => {
      OneData.checked = false;
    });

    var elem = document.querySelectorAll('.catalog-item__element--active');
    elem.forEach(Element => {
      Element.classList.remove('catalog-item__element--active');
    });
  });

  // ************************************************************************************

  let text = document.querySelectorAll('.catalog-item__button');

  text.forEach(function (text, i) {
    text.onmouseover = function () {
      fontname = "Open Sans";
      fontsize = 16;
      el = document.createElement('span');
      el.style.fontSize = fontsize;
      el.style.fontFamily = fontname;
      el.innerHTML = text.innerHTML;
      document.body.appendChild(el);
      var result = el.offsetWidth;
      document.body.removeChild(el);
      document.querySelector('.catalog-item__button:hover').style.maxWidth = result + "px";
    };
  });

  // ************************************************************************************

  //  SWIPER в секции EVENTS
  var swiperEvents = new Swiper('.flip', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      576: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 36,

      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 29,
      },
      1366: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },

    navigation: {
      nextEl: '.events__rightbtn',
      prevEl: ".events__leftbtn",
    },
    pagination: {
      el: '.events__pagination',
      clickable: true,
    }
  });

  if ($(window).width() > '1366') {
    $('.events__rightbtn').on('click', function () {
      document.querySelector('.events__leftbtn').style.opacity = "1";
      document.querySelector('.events__leftbtn').style.visibility = "visible";
      document.querySelector('.events__rightbtn').style.opacity = "0";
      document.querySelector('.events__rightbtn').style.visibility = "hidden";
    });

    $('.events__leftbtn').on('click', function () {
      document.querySelector('.events__rightbtn').style.opacity = "1";
      document.querySelector('.events__rightbtn').style.visibility = "visible";
      document.querySelector('.events__leftbtn').style.opacity = "0";
      document.querySelector('.events__leftbtn').style.visibility = "hidden";
    });
  }

  if ($(window).width() > '992' && $(window).width() <= '1366') {
    $('.events__rightbtn').on('click', function () {
      document.querySelector('.events__leftbtn').style.backgroundColor = "#CACACA";
      document.querySelector('.events__rightbtn').style.backgroundColor = "#666666";
    });

    $('.events__leftbtn').on('click', function () {
      document.querySelector('.events__rightbtn').style.backgroundColor = "#CACACA";
      document.querySelector('.events__leftbtn').style.backgroundColor = "#666666";
    });
  }

  // ************************************************************************************
  //  SWIPER в секции PROJECTS

  var swiperProject = new Swiper('.projectsswiper', {
    loop: false,
    slidesPerView: 1,

    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      992: {
        slidesPerView: 2,
        spaceBetween: 26,
      },

      1660: {
        slidesPerView: 3,
        spaceBetween: 42,
        slidesPerGroup: 3
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.projects__button2',
      prevEl: '.projects__button1',
    }

  });


  // замена текста ссылки

  window.addEventListener('resize', () => {
    if ($(window).width() <= '992' && $(window).width() > '576') {
      document.getElementById("proj1").innerHTML = "blanchard-art.ru";
    }
    if ($(window).width() <= '576') {
      document.getElementById("proj1").innerHTML = "blanchard-art.ru/projects/about";
    }
    if ($(window).width() > '992') {
      document.getElementById("proj1").innerHTML = "blanchard-art.ru/projects";
    }

  });

  //тултипы
  var attr = 0;
  var tool = "";


  ProjectTool();
  window.onresize = ProjectTool;

  function ProjectTool() {
    if ($(window).width() <= '730') {
      tool = document.querySelectorAll('.projects__background320');
    } else {
      tool = document.querySelectorAll('.projects__icon');
    }

    tool.forEach(function (Element) {
      Element.addEventListener('keydown', function (e) {
        if (e.keyCode == '32') {
          e.preventDefault(e.keyCode);
          attr = Element.getAttribute("name");
          attr = attr - 1;
          document.querySelectorAll('.projects__content')[attr].classList.add('projects--active');
        }
        else {
          document.querySelectorAll('.projects__content')[attr].classList.remove('projects--active');
        }
      });
      Element.onblur = function () {
        document.querySelectorAll('.projects__content')[attr].classList.remove('projects--active');
      };

    });

  };

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
      zoom: 14,
      scroll: false,


    });
    myMap.behaviors.disable('scrollZoom');
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
  };

  ////////////////////////////////////////////////////////////////////////////////////////
});
