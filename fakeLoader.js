/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT
 -----------------------------------------------------------------------*/
(function ($) {

  $.fn.fakeLoader = function(options) {

    //Defaults
    var settings = $.extend({
        pos:'fixed',// Default Position
        top:'0px',  // Default Top value
        left:'0px', // Default Left value
        width:'100%', // Default width
        height:'100%', // Default Height
        zIndex: '999',  // Default zIndex
        bgColor: '#2ecc71', // Default background color
        spinner: 0, // Default Spinner
        imagePath:'' // Default Path custom image
    }, options);

    //Customized Spinners
    spinners = ['<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
      '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
      '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
      '<div class="fl spinner4"></div>',
      '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',
      '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
      '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>'];

    //The target
    var el = $(this);

    //Init styles
    var initStyles = {
      'position':settings.pos,
      'width':settings.width,
      'height':settings.height,
      'top':settings.top,
      'left':settings.left
    };

    //Apply styles
    el.css(initStyles);

    //Each
    el.each(function() {
      el.html(settings.spinner);

      //Add customized loader image

      if (settings.imagePath !='') {
        el.html('<div class="fl"><img src="'+settings.imagePath+'"></div>');
      }
      centerLoader();
    });

    //Return Styles
    return this.css({
      'backgroundColor':settings.bgColor,
           'zIndex':settings.zIndex
    });


  }; // End Fake Loader


  //Center Spinner
  function centerLoader() {

    var winW = $(window).width();
    var winH = $(window).height();

    var spinnerW = $('.fl').outerWidth();
    var spinnerH = $('.fl').outerHeight();

    $('.fl').css({
      'position':'absolute',
      'left':(winW/2)-(spinnerW/2),
      'top':(winH/2)-(spinnerH/2)
    });

  }

  $(window).load(function(){
    centerLoader();
    $(window).resize(function(){
      centerLoader();
    });
  });


}(jQuery));
