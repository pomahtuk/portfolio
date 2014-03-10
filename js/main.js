(function() {
  $(function() {
    $('td > .thumb').hover(function() {
      var elem;
      elem = $(this);
      return elem.find('.overlay').slideDown(300);
    }, function() {
      var elem;
      elem = $(this);
      return elem.find('.overlay').slideUp(300);
    });
    return $('td > .thumb > a').fancybox({
      openEffect: 'none',
      closeEffect: 'none'
    });
  });

}).call(this);
