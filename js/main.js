if ($(window).width() <= 800 ){
  $(video).remove();
  $('body').append('<div class="gif-wrap"></div>');
}

$('.hamburger').on('click', function(){
  $('body').toggleClass('nav-open')
});
