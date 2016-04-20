# @codekit-prepend "plugins.js";

if $(window).width() <= 800
  $(video).remove()
  $('body').append('<div class="gif-wrap"></div>')

toggleVid = ->
  if $('body').hasClass('nav-open')
    $('video')[0].pause()
  else
    $('video')[0].play()

$('.hamburger').on 'click', ->
  $('body').toggleClass('nav-open')
  toggleVid()

$('.menu a').on 'click', (e) ->
  e.preventDefault()
  that = $(this)
  url = that.attr 'href'
  cta = $('.cta')
  text = $(this).data('text')
  console.log cta
  setTimeout(->
    $('body').toggleClass('nav-open');
    if text != ""
      cta.text(text);
      $('video')[0].play()
    else
      cta.text("Coming soon...");
      $('video')[0].play()
  , 250)
