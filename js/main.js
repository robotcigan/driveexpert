$(document).ready(function() {

  // Шапка
  function HeaderScroll() {
    if (($(window).scrollTop() > 20)) {
      $('.header').addClass('header_scroll');
    } else {
      $('.header').removeClass('header_scroll');
    }
  }
  $(window).scroll(function () {
    HeaderScroll();
  });
  HeaderScroll();


  // Переход по якорям
  $('.anchor').on('click', function (event) {
    event.preventDefault();
    let id  = $(this).attr('href');
    let top = $(id).offset().top;
    $('body, html').animate({scrollTop: top - 140}, 800);
  });

  $('.mobile-menu__link').on('click', function (event) {
    event.preventDefault();
    let id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body, html').animate({scrollTop: top - 20}, 800);
    $('.mobile-menu').slideUp();
    $('.burger').removeClass('burger--active');
  });


  // burger
  $('.burger').on('click', function() {
    $(this).toggleClass('burger_active');
    $('.mobile-menu').slideToggle();
    $('.mobile-menu').toggleClass('mobile-menu_active');
    $('.logo').toggleClass('logo_white');
    $('.header').toggleClass('header_mobile-menu-open');
  });


  // модалки
  $('.modal-open').fancybox({
    touch: false
  });

  // Телефон маска
  if ( $('.phone-mask').length ) {
    $('.phone-mask').inputmask({
      mask: "+7 (999) 999 99 99",
      showMask: true
    });
  }


  // Slider/carousel
  let swiper = new Swiper('.slider .swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2
      },
      1000: {
        slidesPerView: 3
      }
    }
  });

  // $('.swiper-button-next').on('click', function() {
  //   console.log('some')
  // })

  // let swiper = new Swiper('.slider .swiper-container', {
  //   loop: true,
  //   navigation: {
  //     nextEl: '.slider__control_right',
  //     prevEl: '.slider__control_left',
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true
  //   }
  // });


  // Tabs
  $('.tabs__link').on('click', function () {
    $(this).closest('.tabs').find('.tabs__link').removeClass('tabs__link_active');
    $(this).addClass('tabs__link_active');
    let index = $(this).index();
    $(this).closest('.tabs').find('.tabs__content').removeClass('tabs__content_active');
    $(this).closest('.tabs').find('.tabs__content').eq(index).addClass('tabs__content_active');
  });

  // Long h1
  if ($('h1').length && $('h1').text().length > 40) {
    $('h1').addClass('h1_long');
  }


  // Кнопки
  $('.btn').each(function() {
    $(this).find('.btn__text').clone().appendTo($(this));
  });


  // faq
  $('.faq__top').on('click', function() {
    // $('.faq').not(this).removeClass('faq_active');
    // $('.faq .faq__text').slideUp();
    $(this).closest('.faq').toggleClass('faq_active');
    $(this).closest('.faq').find('.faq__text').stop().slideToggle();
  })

  // SVG magic
  jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');
      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

})







