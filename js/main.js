if ($(window).width() <= 800 ){
  $(video).remove();
  $('body').append('<div class="gif-wrap"></div>');
}

$('.hamburger').on('click', function(){
  $('body').toggleClass('nav-open');
});

$('.menu a').on('click', function(e){
  e.preventDefault();
  cta = $('.cta')
  text = $(this).data('text')
  setTimeout(function () {
    $('body').toggleClass('nav-open');
    if (text != ""){
      cta.text(text);
    }
    else {
      cta.text("Coming soon...");
    }

  }, 300);
});
