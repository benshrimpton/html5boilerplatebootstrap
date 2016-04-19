if ($(window).width() <= 800 ){
  $(video).remove();
  $('body').append('<div class="gif-wrap"></div>');
}

$('.hamburger').on('click', function(){
  $('body').toggleClass('nav-open');
  toggleVid();
});

function toggleVid(){
  if( $('body').hasClass('nav-open') ){
    $('video')[0].pause()
  }
  else {
    $('video')[0].play()
  }
}

$('.menu a').on('click', function(e){
  e.preventDefault();
  cta = $('.cta')
  text = $(this).data('text')

  setTimeout(function () {
    $('body').toggleClass('nav-open');
    if (text != ""){
      cta.text(text);
      $('video')[0].play()
    }
    else {
      cta.text("Coming soon...");
      $('video')[0].play()

    }

  }, 300);
});
