$ ->
  $('td > .thumb').hover ->
    elem = $ @
    elem.find('.overlay').slideDown(300)
  , ->
    elem = $ @
    elem.find('.overlay').slideUp(300)

  $('td > .thumb > a').fancybox
    openEffect  : 'none'
    closeEffect : 'none'