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


  // hero img parallax
  let heroImgTween = new TimelineMax()
    .to('.hero__img', 1, {
      scale: 1.1
    });

  let heroImgScroll = new ScrollMagic.Scene({
    triggerElement: '.hero',
    triggerHook: 0,
    duration: '20%'
  })
  .setTween(heroImgTween)
  // .addIndicators()
  .addTo(controller);


  // effect
  let effectTween = new TimelineMax()
    .to('.effect__img', 1, {
      // scale: .1
      'border-radius': '12px',
      height: 80,
      width: 80
      // width:520.30, height:119
    }, 0)
    .to('.effect__red', .6, {
      opacity: 1
    }, 0)
    .to('.effect__logo', 1, {
      // scale: .1
      width: 48
    }, 0)

  let effectScroll = new ScrollMagic.Scene({
    triggerElement: '.effect',
    triggerHook: .6,
    duration: '50%'
  })
  .setTween(effectTween)
  // .setPin('.effect')
  // .addIndicators()
  .addTo(controller);

});