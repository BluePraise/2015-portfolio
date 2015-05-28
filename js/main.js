jQuery(document).ready(function($){

  //CTA BUTTONS
  $('.first').delay('700').fadeTo('700', 1);
  $('.second').delay('1000').fadeTo('700', 1);

  //BTT BUTTON
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

  animatePortfolioItem();
});


  function animatePortfolioItem(){
    var img  = $('.modal-open .modal-portfolio-image');
    
    // console.log("dfghjkl");
    //place the image of the portfolio outside the browser window
    $('.modal-open .modal-portfolio-image').offset({left: window.outerWidth});

    img.delay(800).animate({left: "0px"}, 2000);
  }
  