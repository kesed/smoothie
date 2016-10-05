var image = $("#test");

image.on('load', function(){
  console.info("Image loaded !");
  $(".quick-load-image").fadeOut(300, function() { $(this).remove(); });
});
