$(document).ready(function() {


  let controller = new ScrollMagic.Controller();
  // let cubic = 'ease:new Ease(BezierEasing(0.25, 0.1, 0.0, 1.0)';

  let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated'
  });
  wow.init();

  // Text blast
  $('.blast-text').blast({
    delimiter: 'word'
  });

  $('.blast-text').append('<div class="blast-parents"></div>');

  $('.blast-text').each(function() {
    let counter = 0;
    for (var i = 0; i < $(this).find('.blast').length; i++) {
      $(this).find('.blast-parents').append('<div class="blast-parent"></div>');
      $(this).find('.blast').eq(0).css('transition-delay', `${counter = counter + .04}s`).detach().appendTo($(this).find(`.blast-parents .blast-parent:eq(${i})`));
    }
  });

  function blastTextAddVisibility() {
    $('.blast-text').not('.dropdown .blast-text').addClass('blast-text--visible');
  }
  setTimeout(blastTextAddVisibility, 300);


  // records numbers
  $('.record__time').each(function() {
    let recordNumber = $(this).data('number');
    let recordSplitNumbers = recordNumber.split(':');
    $(this).text('');
    for(var i = 0; i < recordSplitNumbers.length; i++) {
      $(this).append(`<span>${recordSplitNumbers[i]}</span>`);
      if(i < recordSplitNumbers.length - 1) {
        $(this).append(':')
      }
    }
    $(this).find('span').each(function(index) {
      $(this).animateNumber(
      {number: recordSplitNumbers[index]},
      {duration: 2000});
    });
  });


  // hero img parallax
  let heroImgTween = new TimelineMax()
    .to('.hero__img', 1, {
      scale: 1.2
    });

  let heroImgScroll = new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 0,
    duration: '100%'
  })
  .setTween(heroImgTween)
  // .addIndicators()
  .addTo(controller);


  // effect
  function ifNotMobile() {

    let effectTween = new TimelineMax()
      .to('.effect__img', 1, {
        'border-radius': '12px',
        // bottom: 0,
        height: 80,
        width: 80
      }, 0)
      .to('.effect__red', .6, {
        opacity: 1
      }, 0)
      .to('.effect__logo', 1, {
        width: 48
      }, 0)

    let effectScroll;
    if ($(window).width() > 1200) {
      effectScroll = new ScrollMagic.Scene({
        triggerElement: '.effect',
        triggerHook: .5,
        duration: '100%'
      })
      .setTween(effectTween)
      .setPin('.effect')
      // .addIndicators()
      .addTo(controller);


    let fadeTween = new TweenMax
      .fromTo($('.apps-section'), 1, {
        opacity: 0,
        y: 80
      }, {
        y: 0,
        opacity: 1
      })
      let fadeScroll = new ScrollMagic.Scene({
        triggerElement: '.apps-section',
        triggerHook: .9
      })
      .setTween(fadeTween)
      .addTo(controller)
    } else {
      controller.removeScene(effectScroll);
      controller.removeScene(fadeScroll);
    }


  }

  // $(window).on('resize', function() {
  //   ifNotMobile()
  // });

  // ifNotMobile();


});