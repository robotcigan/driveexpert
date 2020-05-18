'use strict';

$(document).ready(function () {

  var controller = new ScrollMagic.Controller();
  // let cubic = 'ease:new Ease(BezierEasing(0.25, 0.1, 0.0, 1.0)';

  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated'
  });
  wow.init();

  // Text blast
  $('.blast-text').blast({
    delimiter: 'word'
  });

  $('.blast-text').append('<div class="blast-parents"></div>');

  $('.blast-text').each(function () {
    var counter = 0;
    for (var i = 0; i < $(this).find('.blast').length; i++) {
      $(this).find('.blast-parents').append('<div class="blast-parent"></div>');
      $(this).find('.blast').eq(0).css('transition-delay', (counter = counter + .04) + 's').detach().appendTo($(this).find('.blast-parents .blast-parent:eq(' + i + ')'));
    }
  });

  function blastTextAddVisibility() {
    $('.blast-text').not('.dropdown .blast-text').addClass('blast-text--visible');
  }
  setTimeout(blastTextAddVisibility, 300);

  // records numbers
  // $('.record__time').each(function() {
  //   let recordNumber = $(this).data('number');
  //   $(this).find('span').text('');
  //   $(this).find('span').animateNumber(
  //     {number: recordNumber},
  //     {duration: 2000});
  // });


  // hero img parallax
  var heroImgTween = new TimelineMax().to('.hero__img', 1, {
    scale: 1.1
  });

  var heroImgScroll = new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 0,
    duration: '20%'
  }).setTween(heroImgTween)
  // .addIndicators()
  .addTo(controller);

  // effect
  function ifNotMobile() {

    var effectTween = new TimelineMax().to('.effect__img', 1, {
      'border-radius': '12px',
      height: 80,
      width: 80
    }, 0).to('.effect__red', .6, {
      opacity: 1
    }, 0).to('.effect__logo', 1, {
      width: 48
    }, 0);

    var effectScroll = void 0;
    if ($(window).width() > 1200) {
      effectScroll = new ScrollMagic.Scene({
        triggerElement: '.effect',
        triggerHook: .6,
        duration: '50%'
      }).setTween(effectTween)
      // .addIndicators()
      .addTo(controller);
    } else {
      controller.removeScene(effectScroll);
    }
  }

  $(window).on('resize', function () {
    ifNotMobile();
  });

  ifNotMobile();
});