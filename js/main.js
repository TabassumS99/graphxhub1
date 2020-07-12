$(function(){

// background image--------
$("[data-background]").each(function (){
  $(this).css("background-image","url(" + $(this).attr("data-background") + ")")
})


//mixitup-------
var containerEl = document.querySelector('.portfolio');
var mixer = mixitup(containerEl, {
  selectors: {
      control: '.our-mix-control'
  },
  animation: {
      duration: 1000
  }
});

//counter ========
$('.counter').counterUp({
  time: 1000
});



//header sticky menu js============
  $("#sticker").sticky ();
  // scroll menu===========
  $(window).scroll(function(){
      if($(window).scrollTop()> 50){
          $('.header-area').addClass('black');
      }else{
          $('.header-area').removeClass('black');
      }
  });


//testimonial slick slider js---------------
  $('.testimonial-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true,
    arrows: true,
    prevArrow:'<b><i class="fas fa-angle-left left-arrow"></i></b>',
    nextArrow:'<b><i class="fas fa-angle-right right-arrow"></i></b>',
  });



//scroll top function=======
  $(window).on('scroll', function() {
    var windowscroll = $(window).scrollTop();
    if (windowscroll < 350) {
        $('.top').fadeIn(650);
    } else {
        $('.top').fadeOut(650);
    }
  });
  $('.top').on('click', function() {

    $('html,body').animate({
        scrollTop: 0,
    }, 400);
  }); 

  // //asos animation-----
  //   AOS.init();

// One Page Nav
  var top_offset = $('.header-bottom').height() - 10;
  $('.menu ul').onePageNav({
  	currentClass: 'active',
  	scrollOffset: top_offset,
  });



});





