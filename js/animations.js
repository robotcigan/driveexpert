$(document).ready(function() {


  let controller = new ScrollMagic.Controller();
  // let cubic = 'ease:new Ease(BezierEasing(0.25, 0.1, 0.0, 1.0)';

  let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated'
  });
  wow.init();

  // let progressTween = new TimelineMax()
  //   .to('.header__progress', 1, {
  //     width: '100%'
  //   });

  // console.log($(window).height())

  // let progressScroll = new ScrollMagic.Scene({
  //   triggerElement: '.page',
  //   triggerHook: 0,
  //   duration: $('body').height() - $(window).height()
  // })
  // .setTween(progressTween)
  // // .addIndicators()
  // .addTo(controller);

});