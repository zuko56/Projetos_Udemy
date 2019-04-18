$(document).ready(function(){
// BOTÃO TOGGLER
$('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
})
// MAGNIFIC POPUP - CLICK NA IMG
$('.parent-container').magnificPopup({  
    delegate: 'a',
    type: 'image',
    
    gallery:{
        enabled: true
    }
});

// CARROSEL DE IMGS NO CARDAPIO
$('.carrosel').slick({
    centerMode: true,
    //mobileFirst: true, //habilita modo mobile
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  //CARROSEL DE IMGS DA CHURRASCARIA - SOBRE NOS
  $('.fotos-churrascaria').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 900,
    infinite: true,
    speed: 900,
    arrows: false,
    fade: true,
    cssEase: 'linear'
  });

})