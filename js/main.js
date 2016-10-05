console.log('T1');

$("#test").on('load', function() {
  console.log('T2');
});



var image = $("#test");

image.on('load', function(){
  console.info("Image loaded !");
});
