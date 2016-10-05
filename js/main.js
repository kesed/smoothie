var image = $("#test");

image.on('load', function(){
  console.info("Image loaded !");
  $(".quick-load-image").addClass('hidden')
});
