var image = $("#test");

image.on('load', function(){
  $(".quick-load-image").fadeIn(300, function() { $(this).remove(); });
});
