$(document).ready(function() {
  $('.tours-list').owlCarousel({
    items: 3,
    margin: 30,
    nav: true,
    navText: [
      '<span class="lnr lnr-arrow-left"></span>',
      '<span class="lnr lnr-arrow-right"></span>'
    ],
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1,
      },
      // breakpoint from 480 up
      480 : {
        items: 1,
      },
      // breakpoint from 768 up
      768 : {
        items: 3,
      }
    }
  });

  $('.preview-list').slick({
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    nextArrow: '<span class="lnr lnr-arrow-right"></span>',
    prevArrow: '<span class="lnr lnr-arrow-left"></span>',
    appendArrows: $('.explore-previews .navs')
  });

  $('.reviews').owlCarousel({
    items: 2,
    infinite: false,
    nav: true,
    navText:['<i class="lnr lnr-arrow-left" aria-hidden="true"></i>','<i class="lnr lnr-arrow-right" aria-hidden="true"></i>'],
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1
      },
      // breakpoint from 480 up
      480 : {
        items: 1
      },
      // breakpoint from 768 up
      768 : {
        items: 2
      }
    }
  });


  $('.explore-previews .navs>span').click(function(e) {
    var slider = $('.preview-list');
    var element = $(this);
    var elementNavToward = element.data('arrow');
    $('.explore-previews .slick-slide.slick-active').addClass('scale-out');
    if(elementNavToward=='prev'){
      setTimeout(function() {
        $('.preview-list').slick('slickPrev');
        $('.slick-slide.scale-out').removeClass('scale-out');
      }, 450);
    }else{
      setTimeout(function() {
        $('.preview-list').slick('slickNext');
      }, 450);
    }
   
  });
  if($('#slider-range')>0){
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 0, 500 ],
    create: function( event, ui ) {
      $('#slider-range > span').append('<span class="range-tooltip"></span>');
      $('#slider-range .range-tooltip').first().text( '$0');
      $('#slider-range .range-tooltip').last().text( '$500');
    },
    slide: function( event, ui ) {
      $('#slider-range .range-tooltip').first().text( '$' + ui.values[0]);
      $('#slider-range .range-tooltip').last().text( '$' + ui.values[1]);
    }
  });
}

  $('#order-button').click(function(e) {
    e.preventDefault();
    $('#tour-order-box').fadeToggle(300);
  })

  $('#hamburger-button').click(function(){
    $(this).toggleClass('is-active');
    $('header .menu > ul').slideToggle(300); 
  });

  $('#login-button').click(function(e) {
    e.preventDefault();
    $('.login-modal').css({
      display: 'flex'
    });
  })

  $('.login-modal').click(function() {
    $(this).hide();
  })

  $('.login-modal-inner').click(function(e) {
    e.stopPropagation();
  })

  $('#register-button').click(function(e) {
    e.preventDefault();
    $('.register-modal').css({
      display: 'flex'
    });
  })

  $('.register-modal').click(function() {
    $(this).hide();
  })

  $('.register-modal-inner').click(function(e) {
    e.stopPropagation();
  })



 

    // var viewportWidth = $(window).width();
    // if (viewportWidth < 600) {
    //         $(".flx").addClass("flex-wrap");
            
    // }
    // else{

    //   $(".flx").removeClass("flex-wrap")
    // }

});
